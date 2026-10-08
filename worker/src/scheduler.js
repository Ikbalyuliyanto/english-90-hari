/*
 * Scheduler conversation kontinu (Cron Trigger tiap 10 menit) — satu pertanyaan aktif, tanpa spam.
 *
 * Setiap run, runScheduler():
 *  1. Waktu cron -> Asia/Jakarta (UTC+7, tanpa DST). Sabtu/Minggu -> skip.
 *  2. Harus berada di learning window aktif (WINDOWS). Di luar window -> skip.
 *  3. Pertanyaan masih terbuka -> skip:
 *       activeStatus 'pending', atau 'answered' dengan lastVerdict selain 'correct' (almost/wrong).
 *  4. Cooldown: minimal COOLDOWN_MIN menit sejak jawaban benar terakhir (answeredAt) dan sejak push terakhir.
 *  5. Kuota: maksimal window.limit push per window (tidak dibawa ke window berikutnya) dan DAILY_LIMIT per
 *     tanggal WIB. sched:daily (termasuk hitungan per window) reset otomatis saat tanggal WIB berganti.
 *  6. Pilih 1 pertanyaan: minDay <= batas Day (review mode: min(currentDay, REVIEW_MAX_DAY)),
 *     utamakan konteks window, lalu yang pernah salah, lalu yang lama tidak muncul; hindari RECENT_AVOID terakhir.
 *  7. Kirim 1 Web Push. Sukses -> state:primary pending (source scheduler). 404/410 -> hapus subscription, berhenti.
 *
 * KV:
 *   sched:daily   { date, sentCount, answeredCount, windows: { [windowId]: n } }  hitungan per tanggal WIB
 *   sched:recent  [questionId, ...] (maks RECENT_MAX)             urutan push terakhir
 *   sched:stats   { [questionId]: { sent, wrong, lastSentAt } }   prioritas pertanyaan
 *   sched:lastRun { ...keputusan run terakhir }                  diagnostik
 *   sched:lastSentAt  ISO                                         pengaman duplikat / cooldown
 */
import { buildPushPayload } from '@block65/webcrypto-web-push';
import BANK from './questions.json' with { type: 'json' };

export const TZ_OFFSET_MIN = 7 * 60; // Asia/Jakarta, tidak ada DST
export const COOLDOWN_MIN = 10;
export const DAILY_LIMIT = 10;
export const RECENT_MAX = 10;
export const RECENT_AVOID = 8;

// Review mode default (bisa diganti lewat env REVIEW_MODE / REVIEW_MAX_DAY di wrangler.toml).
export const REVIEW_MODE = true;
export const REVIEW_MAX_DAY = 20;

// Learning window weekday (WIB). Konteks memakai id konteks di bank pertanyaan:
// commute -> station/train/home, lunch break -> lunch, family -> evening.
// limit = kuota push per window per hari (total 1+2+2+2+3 = DAILY_LIMIT).
export const WINDOWS = [
  { id: 'morning',        start: '06:00', end: '07:00', limit: 1, contexts: ['wake', 'breakfast', 'prepare'] },
  { id: 'commuteMorning', start: '07:00', end: '09:30', limit: 2, contexts: ['prepare', 'station', 'train'] },
  { id: 'lunch',          start: '11:30', end: '13:30', limit: 2, contexts: ['lunch'] },
  { id: 'commuteHome',    start: '16:30', end: '19:00', limit: 2, contexts: ['afterwork', 'home'] },
  { id: 'evening',        start: '19:00', end: '21:30', limit: 3, contexts: ['evening', 'bedtime'] }
];

export const KV = {
  subscription: 'subscription:primary', state: 'state:primary', daily: 'sched:daily',
  recent: 'sched:recent', stats: 'sched:stats', lastRun: 'sched:lastRun', lastSentAt: 'sched:lastSentAt'
};
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const MIN = 60000;

export function jakartaTime(ms) {
  const d = new Date(ms + TZ_OFFSET_MIN * MIN);
  const pad = (n) => String(n).padStart(2, '0');
  return {
    date: `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`,
    time: `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`,
    minutes: d.getUTCHours() * 60 + d.getUTCMinutes(),
    weekday: d.getUTCDay() // 0 = Minggu
  };
}
const WEEKDAY_NAMES = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export function windowAt(minutes) {
  return WINDOWS.find((w) => minutes >= toMin(w.start) && minutes < toMin(w.end)) || null;
}

export function reviewConfig(env = {}) {
  const mode = env.REVIEW_MODE == null ? REVIEW_MODE : String(env.REVIEW_MODE).toLowerCase() === 'true';
  const max = Number.parseInt(env.REVIEW_MAX_DAY, 10);
  return { reviewMode: mode, reviewMaxDay: Number.isInteger(max) && max > 0 ? max : REVIEW_MAX_DAY };
}

export function dayLimit(currentDay, env) {
  const { reviewMode, reviewMaxDay } = reviewConfig(env);
  return reviewMode ? Math.min(currentDay, reviewMaxDay) : currentDay;
}

// Pertanyaan masih terbuka (belum dijawab benar)?
export function isOpen(state) {
  if (!state) return false;
  if (state.activeStatus === 'pending') return true;
  return state.activeStatus === 'answered' && !!state.lastVerdict && state.lastVerdict !== 'correct';
}

// Skor prioritas: pernah salah > lama tidak muncul; pertanyaan terbaru dihindari.
export function pickQuestion({ maxDay, contexts, recent = [], stats = {}, nowMs = Date.now(), random = Math.random }) {
  const eligible = BANK.questions.filter((q) => Number.isInteger(q.minDay) && q.minDay <= maxDay);
  const inWindow = eligible.filter((q) => contexts.includes(q.context));
  let pool = inWindow.length ? inWindow : eligible;
  const avoid = new Set(recent.slice(-RECENT_AVOID));
  const fresh = pool.filter((q) => !avoid.has(q.id));
  if (fresh.length) pool = fresh;
  if (!pool.length) return null;
  const scored = pool.map((q) => {
    const s = stats[q.id] || {};
    const wrong = Math.min(s.wrong || 0, 5);
    const daysSince = s.lastSentAt ? Math.min((nowMs - Date.parse(s.lastSentAt)) / 86400000, 14) : 14;
    // 1x salah (15) selalu lebih kuat dari faktor lama-tidak-muncul (maks 14 hari).
    return { q, score: wrong * 15 + daysSince + random() };
  });
  return scored.reduce((best, x) => (x.score > best.score ? x : best)).q;
}

export function payloadFor(q) {
  const ctx = BANK.contexts.find((c) => c.id === q.context);
  return { title: ctx?.greeting || 'English Time', body: `${q.en}\n${q.idn}`, url: `#/conversation?q=${encodeURIComponent(q.id)}` };
}

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

// Hitungan harian per tanggal WIB (reset otomatis jika tanggal berbeda).
export function dailyFor(saved, date) {
  return saved && saved.date === date
    ? { date, sentCount: saved.sentCount || 0, answeredCount: saved.answeredCount || 0, windows: { ...(saved.windows || {}) } }
    : { date, sentCount: 0, answeredCount: 0, windows: {} };
}

export async function runScheduler(env, nowMs, { fetchImpl = fetch, random = Math.random, dryRun = false } = {}) {
  const jkt = jakartaTime(nowMs);
  const win = windowAt(jkt.minutes);
  const { reviewMode, reviewMaxDay } = reviewConfig(env);
  const [state, savedDaily, lastSentAt] = await Promise.all([
    env.PUSH_KV.get(KV.state, 'json'), env.PUSH_KV.get(KV.daily, 'json'), env.PUSH_KV.get(KV.lastSentAt)
  ]);
  const daily = dailyFor(savedDaily, jkt.date);
  const lastEvent = Math.max(state?.answeredAt ? Date.parse(state.answeredAt) || 0 : 0, lastSentAt ? Date.parse(lastSentAt) || 0 : 0);
  const cooldownRemaining = lastEvent ? Math.max(0, Math.ceil((lastEvent + COOLDOWN_MIN * MIN - nowMs) / MIN)) : 0;

  const windowSent = win ? daily.windows[win.id] || 0 : 0;
  const info = {
    at: new Date(nowMs).toISOString(), localTime: `${jkt.date} ${jkt.time} WIB`, weekday: WEEKDAY_NAMES[jkt.weekday],
    activeWindow: win ? `${win.id} ${win.start}-${win.end} (${win.contexts.join('/')})` : null,
    windowId: win?.id ?? null, windowSent, windowLimit: win?.limit ?? null, dailySent: daily.sentCount,
    activeStatus: state?.activeStatus ?? null, lastVerdict: state?.lastVerdict ?? null, activeQuestionId: state?.activeQuestionId ?? null,
    answeredAt: state?.answeredAt ?? null, cooldownRemaining, sentToday: daily.sentCount, answeredToday: daily.answeredCount,
    dailyLimit: DAILY_LIMIT, reviewMode, reviewMaxDay, currentDay: Number.isInteger(state?.currentDay) ? state.currentDay : null
  };
  const finish = async (decision, reason, extra = {}) => {
    const out = { ...info, decision, reason, ...extra };
    if (!dryRun) await env.PUSH_KV.put(KV.lastRun, JSON.stringify(out));
    return out;
  };

  if (jkt.weekday === 0 || jkt.weekday === 6) return finish('skip', 'weekend');
  if (!win) return finish('skip', 'outside-window');
  if (isOpen(state)) return finish('skip', state.activeStatus === 'pending' ? 'pending-question' : 'answer-not-correct-yet');
  if (!state || !Number.isInteger(state.currentDay)) return finish('skip', 'no-state');
  if (cooldownRemaining > 0) return finish('skip', 'cooldown');
  if (windowSent >= win.limit) return finish('skip', 'window-limit');
  if (daily.sentCount >= DAILY_LIMIT) return finish('skip', 'daily-limit');

  const subscription = await env.PUSH_KV.get(KV.subscription, 'json');
  if (!subscription?.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) return finish('skip', 'no-subscription');
  const missing = ['VAPID_PRIVATE_KEY', 'VAPID_PUBLIC_KEY', 'VAPID_SUBJECT'].filter((k) => !env[k]);
  if (missing.length) return finish('error', 'config-missing', { missing });

  const [recent, stats] = await Promise.all([env.PUSH_KV.get(KV.recent, 'json'), env.PUSH_KV.get(KV.stats, 'json')]);
  const maxDay = dayLimit(state.currentDay, env);
  const q = pickQuestion({ maxDay, contexts: win.contexts, recent: recent || [], stats: stats || {}, nowMs, random });
  if (!q) return finish('skip', 'no-eligible-question', { maxDay });
  const candidateQuestion = { id: q.id, context: q.context, minDay: q.minDay, en: q.en, idn: q.idn };
  const payload = payloadFor(q);
  if (dryRun) return finish('would-send', 'ready', { maxDay, candidateQuestion, payload });

  let result;
  try {
    result = await deliverPush(env, subscription, payload, fetchImpl);
  } catch (err) {
    return finish('error', 'push-exception', { candidateQuestion, error: String(err?.message || err).slice(0, 200) });
  }
  if (result.stale) {
    await env.PUSH_KV.delete(KV.subscription);
    return finish('stale', 'subscription-deleted', { providerStatus: result.providerStatus });
  }
  if (!result.ok) return finish('error', 'provider-error', { providerStatus: result.providerStatus, error: result.error, candidateQuestion });

  const sentAt = new Date(nowMs).toISOString();
  const st = stats || {};
  st[q.id] = { ...(st[q.id] || {}), sent: ((st[q.id] || {}).sent || 0) + 1, lastSentAt: sentAt };
  await Promise.all([
    env.PUSH_KV.put(KV.state, JSON.stringify({
      currentDay: state.currentDay, activeStatus: 'pending', activeQuestionId: q.id, lastVerdict: null,
      answeredAt: state.answeredAt ?? null, updatedAt: sentAt, source: 'scheduler'
    })),
    env.PUSH_KV.put(KV.daily, JSON.stringify({ ...daily, sentCount: daily.sentCount + 1, windows: { ...daily.windows, [win.id]: windowSent + 1 } })),
    env.PUSH_KV.put(KV.recent, JSON.stringify([...(recent || []).filter((id) => id !== q.id), q.id].slice(-RECENT_MAX))),
    env.PUSH_KV.put(KV.stats, JSON.stringify(st)),
    env.PUSH_KV.put(KV.lastSentAt, sentAt)
  ]);
  return finish('sent', 'ok', { maxDay, candidateQuestion, providerStatus: result.providerStatus, sentToday: daily.sentCount + 1, dailySent: daily.sentCount + 1, windowSent: windowSent + 1 });
}
