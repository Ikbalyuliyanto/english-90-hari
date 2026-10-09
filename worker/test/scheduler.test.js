/*
 * Test scheduler kontinu (tanpa jaringan): KV dan push provider dipalsukan, waktu ditentukan manual (WIB).
 * Senin 2026-10-05 ... Jumat 2026-10-09, Sabtu 2026-10-10, Minggu 2026-10-11.
 */
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import nodeCrypto from 'node:crypto';
import webpush from 'web-push';
import ece from 'http_ece';
import worker from '../src/index.js';
import { runScheduler, jakartaTime, windowAt, pickQuestion, WINDOWS, DAILY_LIMIT, COOLDOWN_MIN, reviewConfig } from '../src/scheduler.js';
import BANK from '../src/questions.json' with { type: 'json' };

const wib = (date, hhmm) => { const [h, m] = hhmm.split(':').map(Number); const [Y, M, D] = date.split('-').map(Number); return Date.UTC(Y, M - 1, D, h - 7, m); };
const iso = (ms) => new Date(ms).toISOString();
const MON = '2026-10-05';
let vapid, subscriber, authSecret, subscription;

function makeKV(initial = {}) {
  const map = new Map(Object.entries(initial).map(([k, v]) => [k, typeof v === 'string' ? v : JSON.stringify(v)]));
  return {
    map,
    read: (k) => (map.has(k) ? JSON.parse(map.get(k)) : null),
    async get(k, t) { const v = map.get(k); return v == null ? null : t === 'json' ? JSON.parse(v) : v; },
    async put(k, v) { map.set(k, v); },
    async delete(k) { map.delete(k); }
  };
}
const provider = (status) => { const calls = []; const fn = async (url, init) => { calls.push({ url, init }); return new Response('', { status }); }; fn.calls = calls; return fn; };
const makeEnv = (kv, extra = {}) => ({ PUSH_KV: makeKV(kv), VAPID_PUBLIC_KEY: vapid.publicKey, VAPID_PRIVATE_KEY: vapid.privateKey, VAPID_SUBJECT: 'mailto:test@example.test', ADMIN_TOKEN: 'a'.repeat(40), ...extra });
const st = (activeStatus, extra = {}) => ({ currentDay: 22, activeStatus, activeQuestionId: activeStatus ? 'C-WAKE-03' : null, lastVerdict: null, answeredAt: null, updatedAt: '2026-10-05T00:00:00Z', ...extra });
const base = (state) => ({ 'subscription:primary': subscription, 'state:primary': state });
const decrypt = (call) => JSON.parse(ece.decrypt(Buffer.from(call.init.body), { version: 'aes128gcm', privateKey: subscriber, authSecret }).toString('utf8'));
// POST /state seperti app.
const postState = async (env, body) => {
  const res = await worker.fetch(new Request('https://w/state', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }), env);
  return (await res.json()).state;
};

before(() => {
  vapid = webpush.generateVAPIDKeys();
  subscriber = nodeCrypto.createECDH('prime256v1');
  subscriber.generateKeys();
  authSecret = nodeCrypto.randomBytes(16);
  subscription = { endpoint: 'https://push.example.test/send/x', expirationTime: null, keys: { p256dh: Buffer.from(subscriber.getPublicKey()).toString('base64url'), auth: authSecret.toString('base64url') } };
});

test('timezone WIB benar: 23:00 UTC Minggu = Senin 06:00 WIB; window sesuai jadwal', () => {
  const j = jakartaTime(Date.UTC(2026, 9, 4, 23, 0));
  assert.deepEqual([j.date, j.time, j.weekday], [MON, '06:00', 1]);
  assert.deepEqual(WINDOWS.map((w) => `${w.start}-${w.end}`), ['06:00-07:00', '07:00-09:30', '11:30-13:30', '16:30-19:00', '19:00-21:30']);
  for (const [t, id] of [['06:00', 'morning'], ['06:59', 'morning'], ['07:00', 'commuteMorning'], ['09:29', 'commuteMorning'], ['11:30', 'lunch'], ['13:29', 'lunch'], ['16:30', 'commuteHome'], ['18:59', 'commuteHome'], ['19:00', 'evening'], ['21:29', 'evening']]) {
    assert.equal(windowAt(jakartaTime(wib(MON, t)).minutes)?.id, id, t);
  }
  for (const t of ['05:59', '09:30', '10:00', '11:29', '13:30', '16:29', '21:30', '23:00']) assert.equal(windowAt(jakartaTime(wib(MON, t)).minutes), null, t);
});

test('pending -> skip', async () => {
  const p = provider(201);
  const r = await runScheduler(makeEnv(base(st('pending'))), wib(MON, '07:30'), { fetchImpl: p });
  assert.deepEqual([r.decision, r.reason], ['skip', 'pending-question']);
  assert.equal(p.calls.length, 0);
});

test('jawaban wrong / almost (lewat POST /state) -> tetap pending pertanyaan yang sama', async () => {
  for (const verdict of ['wrong', 'almost']) {
    const env = makeEnv(base(st('pending', { source: 'scheduler' })));
    const saved = await postState(env, { currentDay: 22, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03', lastVerdict: verdict, answeredAt: iso(wib(MON, '07:31')) });
    assert.deepEqual([saved.activeStatus, saved.activeQuestionId, saved.lastVerdict], ['pending', 'C-WAKE-03', verdict], verdict);
    // App menekan Lanjut (null) -> pertanyaan scheduler tetap pending.
    const after = await postState(env, { currentDay: 22, activeStatus: null, activeQuestionId: null });
    assert.deepEqual([after.activeStatus, after.activeQuestionId], ['pending', 'C-WAKE-03']);
    const r = await runScheduler(env, wib(MON, '08:00'), { fetchImpl: provider(201) });
    assert.equal(r.reason, 'pending-question', verdict);
    assert.equal(env.PUSH_KV.read('sched:stats')['C-WAKE-03'].wrong, 1, 'salah dicatat untuk prioritas');
  }
});

test('answered + lastVerdict non-correct (pertanyaan app) -> tetap dianggap terbuka', async () => {
  const r = await runScheduler(makeEnv(base(st('answered', { lastVerdict: 'wrong', answeredAt: iso(wib(MON, '06:00')) }))), wib(MON, '07:30'), { fetchImpl: provider(201) });
  assert.equal(r.reason, 'answer-not-correct-yet');
});

test('correct -> answered (+ answeredAt, answeredCount)', async () => {
  const env = makeEnv(base(st('pending', { source: 'scheduler' })));
  const saved = await postState(env, { currentDay: 22, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03', lastVerdict: 'correct', answeredAt: iso(wib(MON, '07:31')) });
  assert.deepEqual([saved.activeStatus, saved.lastVerdict, saved.answeredAt], ['answered', 'correct', iso(wib(MON, '07:31'))]);
  // Lanjut (null) -> answeredAt tetap disimpan untuk cooldown.
  const closed = await postState(env, { currentDay: 22, activeStatus: null, activeQuestionId: null });
  assert.deepEqual([closed.activeStatus, closed.answeredAt], [null, iso(wib(MON, '07:31'))]);
});

test('correct + cooldown < 10 menit -> skip; >= 10 menit di window aktif -> send', async () => {
  const env = makeEnv(base(st('answered', { lastVerdict: 'correct', answeredAt: iso(wib(MON, '07:31')) })));
  const p = provider(201);
  let r = await runScheduler(env, wib(MON, '07:40'), { fetchImpl: p });
  assert.deepEqual([r.decision, r.reason, r.cooldownRemaining], ['skip', 'cooldown', 1]);
  r = await runScheduler(env, wib(MON, '07:41'), { fetchImpl: p });
  assert.equal(r.decision, 'sent');
  assert.equal(p.calls.length, 1);
  assert.equal(COOLDOWN_MIN, 10);
});

test('cooldown selesai tapi window habis -> skip; window berikutnya -> send', async () => {
  const env = makeEnv(base(st('answered', { lastVerdict: 'correct', answeredAt: iso(wib(MON, '09:25')) })));
  const p = provider(201);
  for (const t of ['09:30', '09:40', '10:30', '11:20']) {
    const r = await runScheduler(env, wib(MON, t), { fetchImpl: p });
    assert.deepEqual([r.decision, r.reason], ['skip', 'outside-window'], t);
  }
  const r = await runScheduler(env, wib(MON, '11:30'), { fetchImpl: p });
  assert.equal(r.decision, 'sent');
  assert.equal(r.windowId, 'lunch');
  assert.equal(BANK.questions.find((q) => q.id === r.candidateQuestion.id).context, 'lunch');
});

// Simulasi satu hari: cron tiap 10 menit, user menjawab benar `delay` menit setelah push.
async function simulateDay(date, delayMin, env = makeEnv(base(st(null, { activeQuestionId: null })))) {
  const p = provider(201);
  const log = [];
  let answerAt = null, pendingQ = null;
  for (let m = 6 * 60; m <= 21 * 60 + 30; m += 10) {
    const t = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
    if (pendingQ && answerAt !== null && wib(date, t) >= answerAt) {
      await postState(env, { currentDay: 22, activeStatus: 'answered', activeQuestionId: pendingQ, lastVerdict: 'correct', answeredAt: iso(answerAt) });
      pendingQ = null;
    }
    const r = await runScheduler(env, wib(date, t), { fetchImpl: p });
    log.push({ t, decision: r.decision, reason: r.reason, windowId: r.windowId, q: r.candidateQuestion?.id });
    if (r.decision === 'sent') { pendingQ = r.candidateQuestion.id; answerAt = wib(date, t) + delayMin * 60000; }
  }
  return { log, sent: log.filter((l) => l.decision === 'sent'), calls: p.calls.length, env };
}

test('kuota per window: morning 1, commuteMorning 2, lunch 2, commuteHome 2, evening 3 (user cepat)', async () => {
  const { sent, calls, env, log } = await simulateDay(MON, 2);
  const per = sent.reduce((a, l) => ({ ...a, [l.windowId]: (a[l.windowId] || 0) + 1 }), {});
  assert.deepEqual(per, { morning: 1, commuteMorning: 2, lunch: 2, commuteHome: 2, evening: 3 }, JSON.stringify(log));
  assert.equal(calls, 10);
  assert.ok(log.some((l) => l.reason === 'window-limit'), 'window-limit muncul');
  const d = env.PUSH_KV.read('sched:daily');
  assert.deepEqual([d.sentCount, d.answeredCount, d.windows], [10, 10, { morning: 1, commuteMorning: 2, lunch: 2, commuteHome: 2, evening: 3 }]);
});

test('kuota tidak carry-over: window yang terlewat karena pending tidak menambah kuota window berikutnya', async () => {
  const env = makeEnv(base(st(null, { activeQuestionId: null })));
  const p = provider(201);
  // 06:00 kirim, user baru menjawab 12:40 -> morning, commuteMorning, sebagian lunch terlewat.
  assert.equal((await runScheduler(env, wib(MON, '06:00'), { fetchImpl: p })).decision, 'sent');
  const q = env.PUSH_KV.read('state:primary').activeQuestionId;
  for (const t of ['07:00', '08:00', '09:00', '11:30', '12:30']) assert.equal((await runScheduler(env, wib(MON, t), { fetchImpl: p })).reason, 'pending-question', t);
  await postState(env, { currentDay: 22, activeStatus: 'answered', activeQuestionId: q, lastVerdict: 'correct', answeredAt: iso(wib(MON, '12:40')) });
  assert.equal((await runScheduler(env, wib(MON, '12:50'), { fetchImpl: p })).decision, 'sent');
  await postState(env, { currentDay: 22, activeStatus: 'answered', activeQuestionId: env.PUSH_KV.read('state:primary').activeQuestionId, lastVerdict: 'correct', answeredAt: iso(wib(MON, '12:55')) });
  const lunchSent = env.PUSH_KV.read('sched:daily').windows.lunch || 0;
  assert.ok(lunchSent <= 2, 'lunch tetap maks 2');
  // commuteHome tetap 2 walau commuteMorning tidak terpakai sama sekali.
  const { env: e2 } = { env };
  for (let m = 16 * 60 + 30; m < 19 * 60; m += 10) {
    const t = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
    const r = await runScheduler(e2, wib(MON, t), { fetchImpl: p });
    if (r.decision === 'sent') await postState(e2, { currentDay: 22, activeStatus: 'answered', activeQuestionId: r.candidateQuestion.id, lastVerdict: 'correct', answeredAt: iso(wib(MON, t) + 60000) });
  }
  assert.equal(e2.PUSH_KV.read('sched:daily').windows.commuteHome, 2);
  assert.equal(e2.PUSH_KV.read('sched:daily').windows.commuteMorning, undefined);
});

test('window-limit: kuota habis -> skip sampai window berikutnya', async () => {
  const env = makeEnv({ ...base(st('answered', { lastVerdict: 'correct', answeredAt: iso(wib(MON, '06:05')) })), 'sched:daily': { date: MON, sentCount: 1, answeredCount: 1, windows: { morning: 1 } }, 'sched:lastSentAt': iso(wib(MON, '06:00')) });
  let r = await runScheduler(env, wib(MON, '06:30'), { fetchImpl: provider(201) });
  assert.deepEqual([r.decision, r.reason, r.windowId, r.windowSent, r.windowLimit], ['skip', 'window-limit', 'morning', 1, 1]);
  r = await runScheduler(env, wib(MON, '07:00'), { fetchImpl: provider(201) });
  assert.deepEqual([r.decision, r.windowId], ['sent', 'commuteMorning']);
});

test('daily tidak bisa lebih dari 10 walau kuota window tersisa', async () => {
  const env = makeEnv({ ...base(st(null)), 'sched:daily': { date: MON, sentCount: 10, answeredCount: 10, windows: { lunch: 0 } } });
  const r = await runScheduler(env, wib(MON, '12:00'), { fetchImpl: provider(201) });
  assert.deepEqual([r.decision, r.reason, r.dailySent, r.dailyLimit], ['skip', 'daily-limit', 10, 10]);
});

test('pergantian tanggal WIB reset semua kuota window', async () => {
  const full = { date: MON, sentCount: 10, answeredCount: 10, windows: { morning: 1, commuteMorning: 2, lunch: 2, commuteHome: 2, evening: 3 } };
  const env = makeEnv({ ...base(st(null)), 'sched:daily': full });
  assert.equal((await runScheduler(env, wib(MON, '20:00'), { fetchImpl: provider(201) })).reason, 'window-limit');
  const r = await runScheduler(env, wib('2026-10-06', '06:00'), { fetchImpl: provider(201) });
  assert.deepEqual([r.decision, r.windowSent, r.dailySent], ['sent', 1, 1]);
  assert.deepEqual(env.PUSH_KV.read('sched:daily').windows, { morning: 1 });
});

test('user lambat (70 menit) -> lebih sedikit push, tidak pernah melebihi kuota', async () => {
  const { sent } = await simulateDay(MON, 70);
  const per = sent.reduce((a, l) => ({ ...a, [l.windowId]: (a[l.windowId] || 0) + 1 }), {});
  const limits = { morning: 1, commuteMorning: 2, lunch: 2, commuteHome: 2, evening: 3 };
  for (const [w, n] of Object.entries(per)) assert.ok(n <= limits[w], `${w} ${n}`);
  assert.ok(sent.length < 10);
});

test('daily limit 10 -> skip', async () => {
  const env = makeEnv({ ...base(st(null)), 'sched:daily': { date: MON, sentCount: 10, answeredCount: 9 } });
  const r = await runScheduler(env, wib(MON, '19:30'), { fetchImpl: provider(201) });
  assert.deepEqual([r.decision, r.reason], ['skip', 'daily-limit']);
});

test('pergantian tanggal WIB reset daily counter', async () => {
  const env = makeEnv({ ...base(st(null)), 'sched:daily': { date: MON, sentCount: 10, answeredCount: 10, windows: { morning: 1, commuteMorning: 2, lunch: 2, commuteHome: 2, evening: 3 } } });
  // Selasa 06:00 WIB = Senin 23:00 UTC: tanggal UTC masih Senin, tanggal WIB sudah Selasa.
  const r = await runScheduler(env, Date.UTC(2026, 9, 5, 23, 0), { fetchImpl: provider(201) });
  assert.equal(r.decision, 'sent');
  assert.deepEqual(env.PUSH_KV.read('sched:daily'), { date: '2026-10-06', sentCount: 1, answeredCount: 0, windows: { morning: 1 } });
});

test('review mode: pertanyaan Day 21+ tidak pernah keluar walau currentDay 120', async () => {
  assert.deepEqual(reviewConfig({}), { reviewMode: true, reviewMaxDay: 20 });
  for (const w of WINDOWS) {
    for (let i = 0; i < 60; i++) {
      const q = pickQuestion({ maxDay: 20, contexts: w.contexts });
      assert.ok(q.minDay <= 20, `${w.id}: ${q.id} minDay ${q.minDay}`);
    }
  }
  for (let d = 5; d <= 9; d++) {
    for (const t of ['06:10', '12:00', '20:00']) {
      const env = makeEnv(base(st(null, { currentDay: 120 })));
      const r = await runScheduler(env, wib(`2026-10-0${d}`, t), { fetchImpl: provider(201) });
      assert.equal(r.decision, 'sent');
      assert.ok(r.candidateQuestion.minDay <= 20 && r.maxDay === 20, `${r.candidateQuestion.id} minDay ${r.candidateQuestion.minDay}`);
    }
  }
  // Review mode dimatikan -> Day 21+ boleh.
  const env = makeEnv(base(st(null, { currentDay: 120 })), { REVIEW_MODE: 'false' });
  const r = await runScheduler(env, wib(MON, '06:10'), { fetchImpl: provider(201), random: () => 0 });
  assert.equal(r.maxDay, 120);
  // currentDay lebih rendah dari REVIEW_MAX_DAY tetap membatasi.
  const low = await runScheduler(makeEnv(base(st(null, { currentDay: 2 }))), wib(MON, '06:10'), { fetchImpl: provider(201) });
  assert.ok(low.candidateQuestion.minDay <= 2 && low.maxDay === 2);
});

test('prioritas: pertanyaan yang pernah salah lebih dulu; terbaru dihindari', () => {
  const ctx = ['lunch'];
  const stats = { 'C-LUNCH-03': { wrong: 2, lastSentAt: iso(Date.now() - 86400000) } };
  for (let i = 0; i < 20; i++) assert.equal(pickQuestion({ maxDay: 20, contexts: ctx, stats }).id, 'C-LUNCH-03');
  const recent = ['C-LUNCH-03', 'C-LUNCH-01', 'C-LUNCH-02'];
  for (let i = 0; i < 20; i++) assert.equal(pickQuestion({ maxDay: 20, contexts: ctx, stats, recent }).id, 'C-LUNCH-04');
  // Lama tidak muncul lebih diutamakan daripada yang kemarin muncul.
  const s2 = { 'C-LUNCH-01': { lastSentAt: iso(Date.now() - 3600000) }, 'C-LUNCH-02': { lastSentAt: iso(Date.now() - 3600000) }, 'C-LUNCH-03': { lastSentAt: iso(Date.now() - 3600000) } };
  assert.equal(pickQuestion({ maxDay: 20, contexts: ctx, stats: s2, random: () => 0.5 }).id, 'C-LUNCH-04');
  // Konteks tanpa kandidat (Day 2) -> fallback semua yang eligible.
  const f = pickQuestion({ maxDay: 2, contexts: ['station', 'train'] });
  assert.ok(f.minDay <= 2);
});

test('payload: English + Indonesia + url ?q=', async () => {
  const env = makeEnv(base(st(null)));
  const p = provider(201);
  const r = await runScheduler(env, wib(MON, '12:00'), { fetchImpl: p });
  const q = BANK.questions.find((x) => x.id === r.candidateQuestion.id);
  assert.deepEqual(decrypt(p.calls[0]), { title: 'Lunch time!', body: `${q.en}\n${q.idn}`, url: `#/conversation?q=${q.id}` });
  const s = env.PUSH_KV.read('state:primary');
  assert.deepEqual([s.activeStatus, s.activeQuestionId, s.source], ['pending', q.id, 'scheduler']);
});

test('tidak ada push ganda: run berulang di menit yang sama / berikutnya -> skip', async () => {
  const env = makeEnv(base(st(null)));
  const p = provider(201);
  assert.equal((await runScheduler(env, wib(MON, '12:00'), { fetchImpl: p })).decision, 'sent');
  assert.equal((await runScheduler(env, wib(MON, '12:00'), { fetchImpl: p })).reason, 'pending-question');
  // Walau state dihapus manual, lastSentAt tetap menahan push berikutnya selama cooldown.
  env.PUSH_KV.map.set('state:primary', JSON.stringify(st(null)));
  assert.equal((await runScheduler(env, wib(MON, '12:05'), { fetchImpl: p })).reason, 'cooldown');
  assert.equal(p.calls.length, 1);
});

for (const status of [404, 410]) {
  test(`stale subscription ${status} -> dihapus, state tidak pending, berhenti`, async () => {
    const env = makeEnv(base(st(null)));
    const r = await runScheduler(env, wib(MON, '20:00'), { fetchImpl: provider(status) });
    assert.equal(r.decision, 'stale');
    assert.equal(env.PUSH_KV.read('subscription:primary'), null);
    assert.equal(env.PUSH_KV.read('state:primary').activeStatus, null);
    assert.equal((await runScheduler(env, wib(MON, '20:10'), { fetchImpl: provider(201) })).reason, 'no-subscription');
  });
}

test('provider error lain -> tidak menandai pending, tidak menambah sentCount', async () => {
  const env = makeEnv(base(st(null)));
  const r = await runScheduler(env, wib(MON, '20:00'), { fetchImpl: provider(500) });
  assert.equal(r.decision, 'error');
  assert.equal(env.PUSH_KV.read('state:primary').activeStatus, null);
  assert.equal(env.PUSH_KV.read('sched:daily'), null);
});

test('weekend skip (Sabtu & Minggu WIB)', async () => {
  const p = provider(201);
  for (const [d, t] of [['2026-10-10', '06:30'], ['2026-10-10', '12:00'], ['2026-10-11', '20:00']]) {
    assert.equal((await runScheduler(makeEnv(base(st(null))), wib(d, t), { fetchImpl: p })).reason, 'weekend');
  }
  assert.equal(p.calls.length, 0);
});

test('dryRun -> field preview lengkap, tidak kirim, tidak menulis KV', async () => {
  const env = makeEnv(base(st('answered', { lastVerdict: 'correct', answeredAt: iso(wib(MON, '12:00')) })));
  const before = [...env.PUSH_KV.map.entries()];
  const p = provider(201);
  const r = await runScheduler(env, wib(MON, '12:20'), { fetchImpl: p, dryRun: true });
  for (const k of ['localTime', 'weekday', 'activeWindow', 'activeStatus', 'answeredAt', 'cooldownRemaining', 'sentToday', 'dailyLimit', 'reviewMode', 'reviewMaxDay', 'candidateQuestion', 'decision', 'reason']) {
    assert.ok(k in r, k);
  }
  assert.deepEqual([r.decision, r.localTime, r.weekday], ['would-send', '2026-10-05 12:20 WIB', 'Senin']);
  assert.equal(p.calls.length, 0);
  assert.deepEqual([...env.PUSH_KV.map.entries()], before);
});

test('hasil run tidak memuat private key', async () => {
  const env = makeEnv(base(st(null)));
  const r = await runScheduler(env, wib(MON, '06:00'), { fetchImpl: provider(201) });
  assert.ok(!(JSON.stringify(r) + [...env.PUSH_KV.map.values()].join('')).includes(vapid.privateKey));
});
