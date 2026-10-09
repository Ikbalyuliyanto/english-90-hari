/*
 * Test Worker (Node 20+, tanpa jaringan): KV dan push provider dipalsukan.
 * Jalankan: npm test (di folder worker/)
 * Kunci VAPID & subscriber dibuat acak per run — bukan kunci produksi.
 */
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import nodeCrypto from 'node:crypto';
import webpush from 'web-push';
import ece from 'http_ece';
import worker, { sendTest, KEYS, TEST_PAYLOAD } from '../src/index.js';

const b64url = (buf) => Buffer.from(buf).toString('base64url');
const ADMIN_TOKEN = 'test-admin-' + nodeCrypto.randomBytes(16).toString('hex');
const ENDPOINT = 'https://push.example.test/send/abc123';
let vapid, subscriber, authSecret, subscription;
const outputs = []; // semua response body + log, untuk cek kebocoran secret

function makeKV(initial = {}) {
  const map = new Map(Object.entries(initial).map(([k, v]) => [k, JSON.stringify(v)]));
  return {
    map,
    async get(key, type) { const v = map.get(key); return v == null ? null : type === 'json' ? JSON.parse(v) : v; },
    async put(key, value) { map.set(key, value); },
    async delete(key) { map.delete(key); }
  };
}

function makeEnv(kvInitial) {
  return {
    PUSH_KV: makeKV(kvInitial),
    VAPID_PUBLIC_KEY: vapid.publicKey,
    VAPID_PRIVATE_KEY: vapid.privateKey,
    VAPID_SUBJECT: 'mailto:test@example.test',
    ADMIN_TOKEN,
    ALLOWED_ORIGIN: 'https://ikbalyuliyanto.github.io'
  };
}

function providerMock(status, body = '') {
  const calls = [];
  const fn = async (url, init) => { calls.push({ url, init }); return new Response(body, { status }); };
  fn.calls = calls;
  return fn;
}

async function callSendTest(env, { token = ADMIN_TOKEN, provider = providerMock(201) } = {}) {
  const headers = token === null ? {} : { Authorization: `Bearer ${token}` };
  const req = new Request('https://worker.test/send-test', { method: 'POST', headers });
  const res = await sendTest(req, env, {}, provider);
  const body = await res.json();
  outputs.push(JSON.stringify(body));
  return { status: res.status, body, provider };
}

before(() => {
  vapid = webpush.generateVAPIDKeys(); // base64url: public 65 byte, private 32 byte
  subscriber = nodeCrypto.createECDH('prime256v1');
  subscriber.generateKeys();
  authSecret = nodeCrypto.randomBytes(16);
  subscription = { endpoint: ENDPOINT, expirationTime: null, keys: { p256dh: b64url(subscriber.getPublicKey()), auth: b64url(authSecret) } };
  for (const level of ['log', 'info', 'warn', 'error', 'debug']) {
    const orig = console[level];
    console[level] = (...args) => { outputs.push(args.map(String).join(' ')); orig.apply(console, args); };
  }
});

test('subscription tidak ada -> 404 no-subscription', async () => {
  const env = makeEnv({});
  const { status, body, provider } = await callSendTest(env);
  assert.equal(status, 404);
  assert.equal(body.code, 'no-subscription');
  assert.equal(provider.calls.length, 0);
});

test('ADMIN_TOKEN salah / tidak ada -> 401, provider tidak dipanggil', async () => {
  const env = makeEnv({ [KEYS.subscription]: subscription });
  for (const token of ['salah', '', null, ADMIN_TOKEN + 'x']) {
    const { status, body, provider } = await callSendTest(env, { token });
    assert.equal(status, 401, `token=${token}`);
    assert.equal(body.error, 'Unauthorized');
    assert.equal(provider.calls.length, 0);
  }
});

test('ADMIN_TOKEN belum di-set di Worker -> 503 (endpoint tetap tertutup)', async () => {
  const env = { ...makeEnv({ [KEYS.subscription]: subscription }), ADMIN_TOKEN: undefined };
  const { status, provider } = await callSendTest(env, { token: '' });
  assert.equal(status, 503);
  assert.equal(provider.calls.length, 0);
});

test('push sukses -> 200, providerStatus 201, request Web Push sesuai standar', async () => {
  const env = makeEnv({ [KEYS.subscription]: subscription });
  const { status, body, provider } = await callSendTest(env);
  assert.equal(status, 200);
  assert.equal(body.success, true);
  assert.equal(body.providerStatus, 201);
  assert.equal(provider.calls.length, 1);
  const { url, init } = provider.calls[0];
  assert.equal(url, ENDPOINT);
  assert.equal(init.method, 'POST');
  assert.equal(init.headers['content-encoding'], 'aes128gcm');
  assert.equal(init.headers['content-type'], 'application/octet-stream');
  assert.equal(init.headers.ttl, '300');
  assert.equal(init.headers.urgency, 'high');
  assert.ok(env.PUSH_KV.map.has(KEYS.subscription), 'subscription tetap ada setelah sukses');
});

test('payload terenkripsi aes128gcm bisa didekripsi subscriber dan isinya benar', async () => {
  const env = makeEnv({ [KEYS.subscription]: subscription });
  const { provider } = await callSendTest(env);
  const { body } = provider.calls[0].init;
  const plain = ece.decrypt(Buffer.from(body), { version: 'aes128gcm', privateKey: subscriber, authSecret });
  assert.deepEqual(JSON.parse(plain.toString('utf8')), TEST_PAYLOAD);
  assert.deepEqual(JSON.parse(plain.toString('utf8')), {
    title: 'English Time',
    body: 'What are you doing now?\nKamu sedang apa sekarang?',
    url: '#/conversation'
  });
  // Plaintext tidak boleh terlihat di body terenkripsi.
  assert.ok(!Buffer.from(body).toString('latin1').includes('English Time'));
});

test('VAPID JWT ES256 valid (RFC 8292): signature, aud, sub, exp, k', async () => {
  const env = makeEnv({ [KEYS.subscription]: subscription });
  const { provider } = await callSendTest(env);
  const header = provider.calls[0].init.headers.authorization;
  const m = header.match(/^vapid t=([^,]+), k=(.+)$/);
  assert.ok(m, header);
  const [jwt, k] = [m[1], m[2]];
  assert.equal(k, vapid.publicKey);
  const [h, p, s] = jwt.split('.');
  assert.deepEqual(JSON.parse(Buffer.from(h, 'base64url')), { typ: 'JWT', alg: 'ES256' });
  const claims = JSON.parse(Buffer.from(p, 'base64url'));
  assert.equal(claims.aud, 'https://push.example.test');
  assert.equal(claims.sub, 'mailto:test@example.test');
  const now = Math.floor(Date.now() / 1000);
  assert.ok(claims.exp > now && claims.exp <= now + 24 * 3600, 'exp maksimal 24 jam (RFC 8292)');
  const key = await crypto.subtle.importKey('raw', Buffer.from(vapid.publicKey, 'base64url'), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
  const ok = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, key, Buffer.from(s, 'base64url'), new TextEncoder().encode(`${h}.${p}`));
  assert.ok(ok, 'signature JWT valid untuk VAPID public key');
});

for (const providerStatus of [404, 410]) {
  test(`provider ${providerStatus} -> subscription stale dihapus dari KV`, async () => {
    const env = makeEnv({ [KEYS.subscription]: subscription, [KEYS.state]: { currentDay: 21 } });
    const { status, body } = await callSendTest(env, { provider: providerMock(providerStatus, 'gone') });
    assert.equal(status, 410);
    assert.equal(body.success, false);
    assert.equal(body.stale, true);
    assert.equal(body.providerStatus, providerStatus);
    assert.ok(!env.PUSH_KV.map.has(KEYS.subscription), 'subscription:primary terhapus');
    assert.ok(env.PUSH_KV.map.has(KEYS.state), 'state tidak ikut terhapus');
    // Kirim lagi -> sekarang "tidak ada subscription".
    const again = await callSendTest(env);
    assert.equal(again.status, 404);
  });
}

test('provider error lain (mis. 403) -> 502, subscription tidak dihapus', async () => {
  const env = makeEnv({ [KEYS.subscription]: subscription });
  const { status, body } = await callSendTest(env, { provider: providerMock(403, 'invalid JWT') });
  assert.equal(status, 502);
  assert.equal(body.providerStatus, 403);
  assert.match(body.error, /invalid JWT/);
  assert.ok(env.PUSH_KV.map.has(KEYS.subscription));
});

test('konfigurasi kurang -> 500 menyebut nama env saja, bukan nilainya', async () => {
  const env = { ...makeEnv({ [KEYS.subscription]: subscription }), VAPID_SUBJECT: undefined };
  const { status, body } = await callSendTest(env);
  assert.equal(status, 500);
  assert.match(body.error, /VAPID_SUBJECT/);
});

test('private key rusak -> error tanpa membocorkan key', async () => {
  const env = { ...makeEnv({ [KEYS.subscription]: subscription }), VAPID_PRIVATE_KEY: 'bukan-key-valid' };
  const { status, body } = await callSendTest(env);
  assert.equal(status, 500);
  assert.ok(!JSON.stringify(body).includes('bukan-key-valid'));
});

test('endpoint lama tetap sama: /health, /subscribe, /state, 404, CORS', async () => {
  const env = makeEnv({});
  const call = async (method, path, body, origin = 'https://ikbalyuliyanto.github.io') => {
    const res = await worker.fetch(new Request('https://worker.test' + path, {
      method, headers: { Origin: origin, ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}) },
      body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body)
    }), env);
    const text = await res.text();
    outputs.push(text);
    return { status: res.status, body: text ? JSON.parse(text) : null, headers: res.headers };
  };
  let r = await call('GET', '/health');
  assert.deepEqual(r.body, { success: true, service: 'english-90-hari-push', status: 'online', kv: true });
  assert.equal(r.headers.get('access-control-allow-origin'), 'https://ikbalyuliyanto.github.io');
  r = await call('OPTIONS', '/state');
  assert.equal(r.status, 204);
  assert.equal(r.headers.get('access-control-allow-headers'), 'Content-Type');
  r = await call('POST', '/subscribe', subscription);
  assert.deepEqual(r.body, { success: true, message: 'Push subscription saved' });
  const saved = JSON.parse(env.PUSH_KV.map.get(KEYS.subscription));
  assert.ok(saved.updatedAt, 'updatedAt disimpan seperti production');
  delete saved.updatedAt;
  assert.deepEqual(saved, subscription);
  r = await call('POST', '/subscribe', {});
  assert.deepEqual(r.body, { success: false, message: 'Invalid push subscription' });
  r = await call('POST', '/state', { currentDay: 21, activeStatus: 'pending', activeQuestionId: 'C-WAKE-03' });
  assert.equal(r.body.success, true);
  assert.equal(r.body.state.activeQuestionId, 'C-WAKE-03');
  assert.ok(r.body.state.updatedAt);
  r = await call('POST', '/state', { currentDay: 21, activeStatus: null, activeQuestionId: null });
  assert.equal(r.body.state.activeStatus, null);
  r = await call('POST', '/state', 'notjson');
  assert.deepEqual(r.body, { success: false, message: 'Invalid state' });
  r = await call('POST', '/state', { currentDay: '21', activeStatus: 'hacked', activeQuestionId: 5 });
  assert.equal(r.status, 200, 'seperti production: nilai tidak valid jadi null');
  assert.deepEqual([r.body.state.currentDay, r.body.state.activeStatus, r.body.state.activeQuestionId], [null, null, null]);
  r = await call('GET', '/state');
  assert.equal(r.status, 200);
  assert.deepEqual(Object.keys(r.body.state).sort(), ['activeQuestionId', 'activeStatus', 'answeredAt', 'currentDay', 'lastVerdict', 'source', 'updatedAt']);
  assert.equal(r.headers.get('access-control-allow-origin'), 'https://ikbalyuliyanto.github.io');
  r = await call('GET', '/nope');
  assert.deepEqual(r.body, { success: false, message: 'Endpoint not found' });
  r = await call('POST', '/send-test');
  assert.equal(r.status, 401, '/send-test lewat router juga butuh token');
  r = await call('GET', '/health', undefined, 'https://evil.example');
  assert.equal(r.headers.get('access-control-allow-origin'), 'https://ikbalyuliyanto.github.io');
});

test('private key dan ADMIN_TOKEN tidak pernah muncul di response/log', () => {
  assert.ok(outputs.length > 10);
  const all = outputs.join('\n');
  assert.ok(!all.includes(vapid.privateKey), 'VAPID private key bocor');
  assert.ok(!all.includes(ADMIN_TOKEN), 'ADMIN_TOKEN bocor');
});

// ---------- Pending dari scheduler bersifat authoritative ----------
const post = async (env, path, body, headers = {}) => {
  const res = await worker.fetch(new Request('https://worker.test' + path, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://ikbalyuliyanto.github.io', ...headers },
    body: body === undefined ? undefined : JSON.stringify(body)
  }), env);
  const text = await res.text();
  outputs.push(text);
  return { status: res.status, body: JSON.parse(text) };
};
const schedulerPending = { currentDay: 21, activeStatus: 'pending', activeQuestionId: 'C-WAKE-03', source: 'scheduler', updatedAt: '2026-10-05T23:00:00Z' };

test('POST /state null tidak menimpa pending scheduler (currentDay tetap diperbarui)', async () => {
  const env = makeEnv({ [KEYS.state]: schedulerPending });
  const r = await post(env, '/state', { currentDay: 22, activeStatus: null, activeQuestionId: null });
  assert.equal(r.body.kept, 'scheduler-pending');
  const saved = JSON.parse(env.PUSH_KV.map.get(KEYS.state));
  assert.deepEqual([saved.currentDay, saved.activeStatus, saved.activeQuestionId, saved.source], [22, 'pending', 'C-WAKE-03', 'scheduler']);
});

test('POST /state pending pertanyaan yang sama (app adopt) -> source scheduler tetap', async () => {
  const env = makeEnv({ [KEYS.state]: schedulerPending });
  await post(env, '/state', { currentDay: 21, activeStatus: 'pending', activeQuestionId: 'C-WAKE-03' });
  assert.equal(JSON.parse(env.PUSH_KV.map.get(KEYS.state)).source, 'scheduler');
});

test('POST /state answered wrong/almost -> pending scheduler tetap; correct -> dilepas; lalu null boleh', async () => {
  const env = makeEnv({ [KEYS.state]: schedulerPending });
  let r = await post(env, '/state', { currentDay: 21, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03', lastVerdict: 'wrong' });
  assert.deepEqual([r.body.state.activeStatus, r.body.kept], ['pending', 'answer-not-correct']);
  r = await post(env, '/state', { currentDay: 21, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03', lastVerdict: 'almost' });
  assert.equal(r.body.state.activeStatus, 'pending');
  r = await post(env, '/state', { currentDay: 21, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03', lastVerdict: 'correct', answeredAt: '2026-10-05T00:10:00.000Z' });
  assert.deepEqual([r.body.state.activeStatus, r.body.state.lastVerdict, r.body.state.answeredAt], ['answered', 'correct', '2026-10-05T00:10:00.000Z']);
  assert.equal(r.body.kept, undefined);
  r = await post(env, '/state', { currentDay: 21, activeStatus: null, activeQuestionId: null });
  assert.equal(r.body.state.activeStatus, null);
});

test('POST /state null tetap menimpa pending yang bukan dari scheduler (flow app lama)', async () => {
  const env = makeEnv({ [KEYS.state]: { ...schedulerPending, source: undefined } });
  const r = await post(env, '/state', { currentDay: 21, activeStatus: null, activeQuestionId: null });
  assert.equal(r.body.state.activeStatus, null);
});

test('GET /state hanya field publik', async () => {
  const env = makeEnv({ [KEYS.state]: { ...schedulerPending, secretish: 'x' }, [KEYS.subscription]: subscription });
  const res = await worker.fetch(new Request('https://worker.test/state', { headers: { Origin: 'https://ikbalyuliyanto.github.io' } }), env);
  const body = await res.json();
  outputs.push(JSON.stringify(body));
  assert.deepEqual(body.state, { currentDay: 21, activeStatus: 'pending', activeQuestionId: 'C-WAKE-03', lastVerdict: null, answeredAt: null, source: 'scheduler', updatedAt: '2026-10-05T23:00:00Z' });
  assert.ok(!JSON.stringify(body).includes(subscription.endpoint));
});

test('/scheduler/preview: butuh token, dry-run tanpa kirim/tulis KV', async () => {
  const env = makeEnv({ [KEYS.state]: { currentDay: 21, activeStatus: 'answered', activeQuestionId: 'C-WAKE-03' }, [KEYS.subscription]: subscription });
  let r = await post(env, '/scheduler/preview', undefined, { Authorization: 'Bearer salah' });
  assert.equal(r.status, 401);
  const before = [...env.PUSH_KV.map.entries()];
  r = await post(env, '/scheduler/preview?at=2026-10-05T05:00:00Z', undefined, { Authorization: `Bearer ${ADMIN_TOKEN}` });
  assert.equal(r.status, 200);
  assert.equal(r.body.decision, 'would-send');
  assert.deepEqual([r.body.windowId, r.body.windowSent, r.body.windowLimit, r.body.dailySent, r.body.dailyLimit], ['lunch', 0, 2, 0, 10]);
  assert.ok(r.body.candidateQuestion.minDay <= 20, 'review mode Day 1-20');
  assert.equal(r.body.reviewMode, true);
  assert.deepEqual([...env.PUSH_KV.map.entries()], before);
});
