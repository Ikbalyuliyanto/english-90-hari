/*
 * Scheduler conversation (Cron Trigger) — satu pertanyaan aktif, tanpa spam.
 *
 * Setiap cron berjalan, runScheduler():
 *  1. Ubah waktu cron ke Asia/Jakarta (UTC+7, tanpa DST). Hanya Senin–Jumat.
 *  2. Cari slot WIB yang sedang berjalan (jendela SLOT_WINDOW_MIN menit). Di luar slot -> skip.
 *  3. Slot yang sama di hari yang sama sudah diproses -> skip (tidak pernah kirim dua kali).
 *  4. state:primary.activeStatus === 'pending' -> skip. Slot itu dicatat selesai (dilewati),
 *     jadi tidak dikejar di run berikutnya.
 *  5. Pilih 1 pertanyaan dengan minDay <= state.currentDay dari konteks slot (fallback: semua yang eligible),
 *     hindari pertanyaan yang baru saja dikirim.
 *  6. Kirim 1 Web Push. Sukses -> state:primary ditandai pending dengan pertanyaan itu, supaya slot berikutnya
 *     menunggu jawaban. 404/410 -> subscription:primary dihapus, berhenti.
 *
 * KV tambahan:
 *   sched:last    { date, slotId, action, questionId?, at }   slot terakhir yang sudah diproses
 *   sched:recent  [questionId, ...] (maks 10)                  untuk menghindari pengulangan
 *   sched:lastRun { at, date, time, slotId, action, reason, ... }  hasil run terakhir (diagnostik)
 */
import { buildPushPayload } from '@block65/webcrypto-web-push';
import BANK from './questions.json' with { type: 'json' };

export const TZ_OFFSET_MIN = 7 * 60; // Asia/Jakarta, tidak ada DST
export const SLOT_WINDOW_MIN = 20;
export const RECENT_MAX = 10;

// Slot rutinitas weekday (WIB) -> konteks pertanyaan.
export const SLOTS = [
  { id: 'pagi',      time: '06:00', contexts: ['wake', 'breakfast'] },
  { id: 'berangkat', time: '07:15', contexts: ['prepare', 'breakfast'] },
  { id: 'perjalanan', time: '08:00', contexts: ['station', 'train'] },
  { id: 'siang',     time: '12:00', contexts: ['lunch'] },
  { id: 'pulang',    time: '16:40', contexts: ['afterwork', 'home'] },
  { id: 'malam',     time: '20:00', contexts: ['evening', 'bedtime'] }
];

const KV = { subscription: 'subscription:primary', state: 'state:primary', last: 'sched:last', recent: 'sched:recent', lastRun: 'sched:lastRun' };
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };

// Waktu Jakarta dari timestamp (ms). Tidak bergantung pada timezone server.
export function jakartaTime(ms) {
  const d = new Date(ms + TZ_OFFSET_MIN * 60000);
  const pad = (n) => String(n).padStart(2, '0');
  return {
    date: `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`,
    time: `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`,
    minutes: d.getUTCHours() * 60 + d.getUTCMinutes(),
    weekday: d.getUTCDay() // 0 = Minggu
  };
}

export function slotAt(minutes) {
  return SLOTS.find((s) => minutes >= toMin(s.time) && minutes < toMin(s.time) + SLOT_WINDOW_MIN) || null;
}

// Waktu (ms) slot weekday berikutnya mulai dari nowMs (termasuk slot yang sedang berjalan).
export function nextSlotTime(nowMs) {
  const start = jakartaTime(nowMs);
  for (let d = 0; d < 8; d++) {
    const dayStart = Date.parse(start.date + 'T00:00:00Z') - TZ_OFFSET_MIN * 60000 + d * 86400000;
    const j = jakartaTime(dayStart);
    if (j.weekday === 0 || j.weekday === 6) continue;
    for (const s of SLOTS) {
      const ms = dayStart + toMin(s.time) * 60000;
      if (ms + SLOT_WINDOW_MIN * 60000 > nowMs) return Math.max(ms, nowMs);
    }
  }
  return nowMs;
}

export function pickQuestion({ currentDay, contexts, recent = [], random = Math.random }) {
  const eligible = BANK.questions.filter((q) => Number.isInteger(q.minDay) && q.minDay <= currentDay);
  const inSlot = eligible.filter((q) => contexts.includes(q.context));
  let pool = inSlot.length ? inSlot : eligible;
  const fresh = pool.filter((q) => !recent.includes(q.id));
  if (fresh.length) pool = fresh;
  return pool.length ? pool[Math.floor(random() * pool.length)] : null;
}

export function payloadFor(q) {
  const ctx = BANK.contexts.find((c) => c.id === q.context);
  return { title: ctx?.greeting || 'English Time', body: `${q.en}\n${q.idn}`, url: `#/conversation?q=${encodeURIComponent(q.id)}` };
}

// Kirim satu Web Push. -> { ok, providerStatus, stale, error }
export async function deliverPush(env, subscription, payload, fetchImpl = fetch) {
  const push = await buildPushPayload(
    { data: payload, options: { ttl: 3600, urgency: 'high', topic: 'conversation' } },
    subscription,
    { subject: env.VAPID_SUBJECT, publicKey: env.VAPID_PUBLIC_KEY, privateKey: env.VAPID_PRIVATE_KEY }
  );
  const res = await fetchImpl(subscription.endpoint, { method: 'POST', headers: push.headers, body: push.body });
  if (res.ok) return { ok: true, providerStatus: res.status };
  if (res.status === 404 || res.status === 410) return { ok: false, stale: true, providerStatus: res.status };
  const detail = await res.text().catch(() => '');
  return { ok: false, providerStatus: res.status, error: detail.slice(0, 200) || res.statusText };
}

export async function runScheduler(env, nowMs, { fetchImpl = fetch, random = Math.random, dryRun = false } = {}) {
  const jkt = jakartaTime(nowMs);
  const base = { at: new Date(nowMs).toISOString(), date: jkt.date, time: jkt.time };
  const finish = async (result, { markSlot = false } = {}) => {
    const out = { ...base, ...result };
    if (!dryRun) {
      if (markSlot) await env.PUSH_KV.put(KV.last, JSON.stringify({ date: jkt.date, slotId: out.slotId, action: out.action, questionId: out.questionId || null, at: out.at }));
      await env.PUSH_KV.put(KV.lastRun, JSON.stringify(out));
    }
    return out;
  };

  if (jkt.weekday === 0 || jkt.weekday === 6) return finish({ action: 'skip', reason: 'weekend' });
  const slot = slotAt(jkt.minutes);
  if (!slot) return finish({ action: 'skip', reason: 'no-slot' });

  const last = await env.PUSH_KV.get(KV.last, 'json');
  if (last && last.date === jkt.date && last.slotId === slot.id) {
    return finish({ action: 'skip', reason: 'slot-already-processed', slotId: slot.id });
  }

  const state = await env.PUSH_KV.get(KV.state, 'json');
  if (state?.activeStatus === 'pending') {
    // Slot dilewati dan dicatat: tidak dikejar nanti, tidak menumpuk.
    return finish({ action: 'skip', reason: 'pending-question', slotId: slot.id, pendingQuestionId: state.activeQuestionId || null }, { markSlot: true });
  }
  if (!state || !Number.isInteger(state.currentDay)) return finish({ action: 'skip', reason: 'no-state', slotId: slot.id });

  const subscription = await env.PUSH_KV.get(KV.subscription, 'json');
  if (!subscription?.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) {
    return finish({ action: 'skip', reason: 'no-subscription', slotId: slot.id });
  }
  const missing = ['VAPID_PRIVATE_KEY', 'VAPID_PUBLIC_KEY', 'VAPID_SUBJECT'].filter((k) => !env[k]);
  if (missing.length) return finish({ action: 'error', reason: 'config-missing', missing, slotId: slot.id });

  const recent = (await env.PUSH_KV.get(KV.recent, 'json')) || [];
  const q = pickQuestion({ currentDay: state.currentDay, contexts: slot.contexts, recent, random });
  if (!q) return finish({ action: 'skip', reason: 'no-eligible-question', slotId: slot.id, currentDay: state.currentDay });

  const payload = payloadFor(q);
  if (dryRun) return finish({ action: 'would-send', slotId: slot.id, questionId: q.id, minDay: q.minDay, currentDay: state.currentDay, payload });

  let result;
  try {
    result = await deliverPush(env, subscription, payload, fetchImpl);
  } catch (err) {
    return finish({ action: 'error', reason: 'push-exception', error: String(err?.message || err).slice(0, 200), slotId: slot.id });
  }

  if (result.stale) {
    await env.PUSH_KV.delete(KV.subscription);
    return finish({ action: 'stale', reason: 'subscription-deleted', providerStatus: result.providerStatus, slotId: slot.id }, { markSlot: true });
  }
  if (!result.ok) {
    return finish({ action: 'error', reason: 'provider-error', providerStatus: result.providerStatus, error: result.error, slotId: slot.id });
  }

  await env.PUSH_KV.put(KV.state, JSON.stringify({
    currentDay: state.currentDay, activeStatus: 'pending', activeQuestionId: q.id, updatedAt: new Date(nowMs).toISOString(), source: 'scheduler'
  }));
  await env.PUSH_KV.put(KV.recent, JSON.stringify([...recent.filter((id) => id !== q.id), q.id].slice(-RECENT_MAX)));
  return finish({ action: 'sent', slotId: slot.id, questionId: q.id, minDay: q.minDay, currentDay: state.currentDay, providerStatus: result.providerStatus }, { markSlot: true });
}
