/*
 * Test scheduler (tanpa jaringan): KV dan push provider dipalsukan, waktu ditentukan manual.
 * Senin 2026-10-05, Kamis 2026-10-08, Sabtu 2026-10-10 (waktu Jakarta).
 */
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import nodeCrypto from 'node:crypto';
import webpush from 'web-push';
import ece from 'http_ece';
import { runScheduler, jakartaTime, slotAt, pickQuestion, SLOTS } from '../src/scheduler.js';
import BANK from '../src/questions.json' with { type: 'json' };

// Waktu WIB -> epoch ms (WIB = UTC+7).
const wib = (date, hhmm) => { const [h, m] = hhmm.split(':').map(Number); const [Y, M, D] = date.split('-').map(Number); return Date.UTC(Y, M - 1, D, h - 7, m); };
let vapid, subscriber, authSecret, subscription;

function makeKV(initial = {}) {
  const map = new Map(Object.entries(initial).map(([k, v]) => [k, JSON.stringify(v)]));
  return {
    map,
    read: (k) => (map.has(k) ? JSON.parse(map.get(k)) : null),
    async get(k, t) { const v = map.get(k); return v == null ? null : t === 'json' ? JSON.parse(v) : v; },
    async put(k, v) { map.set(k, v); },
    async delete(k) { map.delete(k); }
  };
}
const provider = (status) => { const calls = []; const fn = async (url, init) => { calls.push({ url, init }); return new Response('', { status }); }; fn.calls = calls; return fn; };
const env = (kv) => ({ PUSH_KV: makeKV(kv), VAPID_PUBLIC_KEY: vapid.publicKey, VAPID_PRIVATE_KEY: vapid.privateKey, VAPID_SUBJECT: 'mailto:test@example.test' });
const state = (activeStatus, currentDay = 21, activeQuestionId = null) => ({ currentDay, activeStatus, activeQuestionId, updatedAt: '2026-10-05T00:00:00Z' });
const decrypt = (call) => JSON.parse(ece.decrypt(Buffer.from(call.init.body), { version: 'aes128gcm', privateKey: subscriber, authSecret }).toString('utf8'));

before(() => {
  vapid = webpush.generateVAPIDKeys();
  subscriber = nodeCrypto.createECDH('prime256v1');
  subscriber.generateKeys();
  authSecret = nodeCrypto.randomBytes(16);
  subscription = { endpoint: 'https://push.example.test/send/x', expirationTime: null, keys: { p256dh: Buffer.from(subscriber.getPublicKey()).toString('base64url'), auth: authSecret.toString('base64url') } };
});

test('timezone Jakarta: UTC 23:00 Minggu = Senin 06:00 WIB', () => {
  const j = jakartaTime(Date.UTC(2026, 9, 4, 23, 0)); // Minggu 2026-10-04 23:00 UTC
  assert.deepEqual([j.date, j.time, j.weekday], ['2026-10-05', '06:00', 1]);
  assert.equal(slotAt(j.minutes).id, 'pagi');
  const k = jakartaTime(Date.UTC(2026, 9, 5, 9, 40)); // 09:40 UTC = 16:40 WIB
  assert.deepEqual([k.time, slotAt(k.minutes).id], ['16:40', 'pulang']);
});

test('slot WIB sesuai rutinitas, di luar jendela -> tidak ada slot', () => {
  assert.deepEqual(SLOTS.map((s) => s.time), ['06:00', '07:15', '08:00', '12:00', '16:40', '20:00']);
  for (const [t, id] of [['06:00', 'pagi'], ['06:19', 'pagi'], ['07:15', 'berangkat'], ['08:05', 'perjalanan'], ['12:00', 'siang'], ['16:40', 'pulang'], ['20:10', 'malam']]) {
    assert.equal(slotAt(jakartaTime(wib('2026-10-05', t)).minutes)?.id, id, t);
  }
  for (const t of ['05:59', '06:20', '10:00', '16:39', '23:00']) assert.equal(slotAt(jakartaTime(wib('2026-10-05', t)).minutes), null, t);
});

test('pending -> skip, tidak kirim, slot dicatat (tidak dikejar)', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state('pending', 21, 'C-WAKE-03') });
  const p = provider(201);
  const r = await runScheduler(e, wib('2026-10-05', '06:00'), { fetchImpl: p });
  assert.equal(r.action, 'skip');
  assert.equal(r.reason, 'pending-question');
  assert.equal(p.calls.length, 0);
  assert.equal(e.PUSH_KV.read('sched:last').slotId, 'pagi');
  // Jawaban masuk jam 06:30: slot pagi tidak dikejar; baru slot berikutnya (07:15) boleh.
  e.PUSH_KV.map.set('state:primary', JSON.stringify(state('answered', 21, 'C-WAKE-03')));
  const again = await runScheduler(e, wib('2026-10-05', '06:10'), { fetchImpl: p });
  assert.equal(again.reason, 'slot-already-processed');
  assert.equal(p.calls.length, 0);
  const next = await runScheduler(e, wib('2026-10-05', '07:15'), { fetchImpl: p });
  assert.equal(next.action, 'sent');
  assert.equal(p.calls.length, 1);
});

for (const status of ['answered', null]) {
  test(`activeStatus ${status} -> kirim 1 push, state jadi pending`, async () => {
    const e = env({ 'subscription:primary': subscription, 'state:primary': state(status) });
    const p = provider(201);
    const r = await runScheduler(e, wib('2026-10-05', '12:00'), { fetchImpl: p, random: () => 0 });
    assert.equal(r.action, 'sent');
    assert.equal(r.providerStatus, 201);
    assert.equal(p.calls.length, 1);
    const s = e.PUSH_KV.read('state:primary');
    assert.equal(s.activeStatus, 'pending');
    assert.equal(s.activeQuestionId, r.questionId);
    assert.equal(s.currentDay, 21);
    const payload = decrypt(p.calls[0]);
    const q = BANK.questions.find((x) => x.id === r.questionId);
    assert.equal(q.context, 'lunch', 'slot siang -> konteks lunch');
    assert.deepEqual(payload, { title: 'Lunch time!', body: `${q.en}\n${q.idn}`, url: `#/conversation?q=${q.id}` });
  });
}

test('setelah kirim, slot berikutnya skip karena pending (tidak menumpuk)', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state(null) });
  const p = provider(201);
  assert.equal((await runScheduler(e, wib('2026-10-05', '06:00'), { fetchImpl: p })).action, 'sent');
  for (const t of ['07:15', '08:00', '12:00', '16:40', '20:00']) {
    const r = await runScheduler(e, wib('2026-10-05', t), { fetchImpl: p });
    assert.equal(r.reason, 'pending-question', t);
  }
  assert.equal(p.calls.length, 1, 'hanya satu notif sepanjang hari bila tidak dijawab');
});

test('slot yang sama di hari yang sama tidak kirim dua kali', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state(null) });
  const p = provider(201);
  assert.equal((await runScheduler(e, wib('2026-10-05', '20:00'), { fetchImpl: p })).action, 'sent');
  e.PUSH_KV.map.set('state:primary', JSON.stringify(state('answered')));
  const dup = await runScheduler(e, wib('2026-10-05', '20:05'), { fetchImpl: p });
  assert.equal(dup.reason, 'slot-already-processed');
  assert.equal(p.calls.length, 1);
  // Hari berikutnya slot yang sama boleh lagi.
  const tomorrow = await runScheduler(e, wib('2026-10-06', '20:00'), { fetchImpl: p });
  assert.equal(tomorrow.action, 'sent');
});

test('currentDay membatasi pertanyaan: tidak pernah di atas progress', async () => {
  for (const day of [1, 2, 5, 16, 17, 21, 22, 34, 120]) {
    for (let i = 0; i < 40; i++) {
      const q = pickQuestion({ currentDay: day, contexts: ['wake', 'breakfast'], random: Math.random });
      if (q) assert.ok(q.minDay <= day, `day ${day}: ${q.id} minDay ${q.minDay}`);
    }
  }
  // Day 1 di slot pagi: hanya C-WAKE-00 (minDay 1) yang boleh.
  assert.equal(pickQuestion({ currentDay: 1, contexts: ['wake', 'breakfast'], random: () => 0.99 }).id, 'C-WAKE-00');
  // Konteks tanpa pertanyaan eligible -> fallback ke pertanyaan eligible lain (tetap <= currentDay).
  const f = pickQuestion({ currentDay: 1, contexts: ['lunch'], random: () => 0 });
  assert.ok(f.minDay <= 1);
  // Lewat runScheduler: state Day 2 -> pertanyaan minDay <= 2.
  const e = env({ 'subscription:primary': subscription, 'state:primary': state(null, 2) });
  for (let d = 5; d <= 9; d++) {
    e.PUSH_KV.map.set('state:primary', JSON.stringify(state(null, 2)));
    const r = await runScheduler(e, wib(`2026-10-0${d}`, '06:00'), { fetchImpl: provider(201) });
    assert.equal(r.action, 'sent');
    assert.ok(r.minDay <= 2, `${r.questionId} minDay ${r.minDay}`);
  }
});

test('pertanyaan yang baru dikirim tidak langsung diulang', () => {
  const recent = ['C-LUNCH-01', 'C-LUNCH-02', 'C-LUNCH-03'];
  for (let i = 0; i < 30; i++) {
    const q = pickQuestion({ currentDay: 21, contexts: ['lunch'], recent });
    assert.equal(q.id, 'C-LUNCH-04');
  }
});

for (const status of [404, 410]) {
  test(`provider ${status} -> subscription dihapus, berhenti, state tidak diubah`, async () => {
    const e = env({ 'subscription:primary': subscription, 'state:primary': state(null) });
    const r = await runScheduler(e, wib('2026-10-05', '08:00'), { fetchImpl: provider(status) });
    assert.equal(r.action, 'stale');
    assert.equal(e.PUSH_KV.read('subscription:primary'), null);
    assert.equal(e.PUSH_KV.read('state:primary').activeStatus, null, 'tidak ditandai pending');
    const next = await runScheduler(e, wib('2026-10-05', '12:00'), { fetchImpl: provider(201) });
    assert.equal(next.reason, 'no-subscription');
  });
}

test('provider error lain -> tidak menandai pending, subscription tetap', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state(null) });
  const r = await runScheduler(e, wib('2026-10-05', '08:00'), { fetchImpl: provider(500) });
  assert.equal(r.action, 'error');
  assert.ok(e.PUSH_KV.read('subscription:primary'));
  assert.equal(e.PUSH_KV.read('state:primary').activeStatus, null);
});

test('weekend, di luar slot, tanpa state, tanpa subscription -> skip tanpa kirim', async () => {
  const p = provider(201);
  const full = { 'subscription:primary': subscription, 'state:primary': state(null) };
  assert.equal((await runScheduler(env(full), wib('2026-10-10', '06:00'), { fetchImpl: p })).reason, 'weekend');
  assert.equal((await runScheduler(env(full), wib('2026-10-11', '20:00'), { fetchImpl: p })).reason, 'weekend');
  assert.equal((await runScheduler(env(full), wib('2026-10-05', '10:00'), { fetchImpl: p })).reason, 'no-slot');
  assert.equal((await runScheduler(env({ 'subscription:primary': subscription }), wib('2026-10-05', '06:00'), { fetchImpl: p })).reason, 'no-state');
  assert.equal((await runScheduler(env({ 'state:primary': state(null) }), wib('2026-10-05', '06:00'), { fetchImpl: p })).reason, 'no-subscription');
  assert.equal(p.calls.length, 0);
});

test('dryRun -> tidak kirim dan tidak menulis KV', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state('answered') });
  const before = [...e.PUSH_KV.map.entries()];
  const p = provider(201);
  const r = await runScheduler(e, wib('2026-10-05', '16:40'), { fetchImpl: p, dryRun: true });
  assert.equal(r.action, 'would-send');
  assert.ok(['afterwork', 'home'].includes(BANK.questions.find((q) => q.id === r.questionId).context));
  assert.equal(p.calls.length, 0);
  assert.deepEqual([...e.PUSH_KV.map.entries()], before);
});

test('hasil run tidak memuat private key', async () => {
  const e = env({ 'subscription:primary': subscription, 'state:primary': state(null) });
  const r = await runScheduler(e, wib('2026-10-05', '06:00'), { fetchImpl: provider(201) });
  const all = JSON.stringify(r) + [...e.PUSH_KV.map.values()].join('');
  assert.ok(!all.includes(vapid.privateKey));
});

test('nextSlotTime: slot weekday berikutnya dalam WIB', async () => {
  const { nextSlotTime } = await import('../src/scheduler.js');
  const at = (ms) => { const j = jakartaTime(ms); return `${j.date} ${j.time}`; };
  assert.equal(at(nextSlotTime(wib('2026-10-05', '05:00'))), '2026-10-05 06:00');
  assert.equal(at(nextSlotTime(wib('2026-10-05', '06:05'))), '2026-10-05 06:05', 'slot berjalan -> sekarang');
  assert.equal(at(nextSlotTime(wib('2026-10-05', '09:00'))), '2026-10-05 12:00');
  assert.equal(at(nextSlotTime(wib('2026-10-09', '21:00'))), '2026-10-12 06:00', 'Jumat malam -> Senin pagi');
  assert.equal(at(nextSlotTime(wib('2026-10-10', '10:00'))), '2026-10-12 06:00', 'Sabtu -> Senin');
});
