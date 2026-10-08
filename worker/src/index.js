/*
 * Cloudflare Worker english-90-hari-push.
 *
 *   GET  /health      status Worker + KV
 *   POST /subscribe   simpan PushSubscription (subscription.toJSON()) ke KV subscription:primary
 *   POST /state       simpan { currentDay, activeStatus, activeQuestionId } ke KV state:primary
 *   GET  /state       baca state ringkas (dipakai app saat boot untuk mengadopsi pertanyaan pending dari scheduler)
 *   POST /send-test   kirim 1 Web Push sungguhan ke subscription:primary (butuh Authorization: Bearer ADMIN_TOKEN)
 *   POST /scheduler/preview  keputusan scheduler untuk slot berikutnya, dry-run (butuh ADMIN_TOKEN)
 *   scheduled()       Cron Trigger -> runScheduler() (lihat scheduler.js). Cron belum dipasang di wrangler.toml.
 *
 * Web Push memakai @block65/webcrypto-web-push (WebCrypto, kompatibel Workers):
 *   - VAPID JWT ES256 (RFC 8292) ditandatangani VAPID_PRIVATE_KEY,
 *   - payload dienkripsi aes128gcm (RFC 8188/8291) dengan kunci p256dh/auth milik subscription.
 *
 * Env: PUSH_KV (KV binding), VAPID_PUBLIC_KEY, VAPID_SUBJECT, ALLOWED_ORIGIN (vars),
 *      VAPID_PRIVATE_KEY, ADMIN_TOKEN (secret). Nilai secret tidak pernah ditulis ke response atau log.
 *
 * Pending dari scheduler bersifat authoritative: POST /state berisi activeStatus null tidak menimpa
 * state pending source "scheduler"; hanya jawaban (answered) atau pending lain yang menggantinya.
 */
import { buildPushPayload } from '@block65/webcrypto-web-push';
import { runScheduler, nextSlotTime } from './scheduler.js';

export const KEYS = { subscription: 'subscription:primary', state: 'state:primary' };

export const TEST_PAYLOAD = {
  title: 'English Time',
  body: 'What are you doing now?\nKamu sedang apa sekarang?',
  url: '#/conversation'
};

const ACTIVE_STATUSES = [null, 'pending', 'answered'];

function corsHeaders(env, request) {
  const allowed = env.ALLOWED_ORIGIN || 'https://ikbalyuliyanto.github.io';
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': origin === allowed ? origin : allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin'
  };
}

const json = (data, status, cors) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...cors } });

async function readJson(request) {
  try { return await request.json(); } catch { return undefined; }
}

export function isValidSubscription(s) {
  return !!s && typeof s === 'object' && typeof s.endpoint === 'string' && s.endpoint.startsWith('https://') &&
    !!s.keys && typeof s.keys.p256dh === 'string' && typeof s.keys.auth === 'string' &&
    s.keys.p256dh.length > 0 && s.keys.auth.length > 0;
}

// Sama dengan Worker production sebelumnya: nilai tidak valid diubah jadi null (bukan ditolak).
export function normalizeState(s) {
  return {
    currentDay: Number.isInteger(s.currentDay) ? s.currentDay : null,
    activeStatus: ACTIVE_STATUSES.includes(s.activeStatus) ? s.activeStatus : null,
    activeQuestionId: typeof s.activeQuestionId === 'string' ? s.activeQuestionId.slice(0, 64) : null,
    updatedAt: new Date().toISOString()
  };
}

// Perbandingan waktu-konstan agar token tidak bisa ditebak lewat timing.
async function tokenMatches(given, expected) {
  if (!given || !expected) return false;
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(given)),
    crypto.subtle.digest('SHA-256', enc.encode(expected))
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

// Pesan error dibersihkan dari nilai secret sebelum dikirim/ditulis ke mana pun.
function scrub(message, env) {
  let out = String(message || '');
  for (const secret of [env.VAPID_PRIVATE_KEY, env.ADMIN_TOKEN]) {
    if (secret) out = out.split(secret).join('[redacted]');
  }
  return out.slice(0, 300);
}

// Hanya field yang dibutuhkan app; tidak ada data subscription/secret.
export function publicState(s) {
  if (!s || typeof s !== 'object') return { currentDay: null, activeStatus: null, activeQuestionId: null, source: null, updatedAt: null };
  return {
    currentDay: Number.isInteger(s.currentDay) ? s.currentDay : null,
    activeStatus: ACTIVE_STATUSES.includes(s.activeStatus) ? s.activeStatus : null,
    activeQuestionId: typeof s.activeQuestionId === 'string' ? s.activeQuestionId : null,
    source: typeof s.source === 'string' ? s.source : null,
    updatedAt: typeof s.updatedAt === 'string' ? s.updatedAt : null
  };
}

// Pending dari scheduler tidak boleh hilang hanya karena app mengirim activeStatus null
// (mis. app dibuka dari ikon sebelum sempat mengadopsi). currentDay tetap diperbarui.
export function mergeState(prev, next) {
  if (prev?.activeStatus === 'pending' && prev.source === 'scheduler' && prev.activeQuestionId) {
    if (next.activeStatus === null) {
      return { state: { ...next, activeStatus: 'pending', activeQuestionId: prev.activeQuestionId, source: 'scheduler' }, kept: 'scheduler-pending' };
    }
    if (next.activeStatus === 'pending' && next.activeQuestionId === prev.activeQuestionId) {
      return { state: { ...next, source: 'scheduler' } };
    }
  }
  return { state: next };
}

async function requireAdmin(request, env, cors) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!env.ADMIN_TOKEN) return json({ success: false, error: 'ADMIN_TOKEN belum dikonfigurasi di Worker' }, 503, cors);
  if (!(await tokenMatches(token, env.ADMIN_TOKEN))) return json({ success: false, error: 'Unauthorized' }, 401, cors);
  return null;
}

// Dry-run scheduler untuk slot berikutnya (atau ?at=<ISO>). Tidak mengirim push dan tidak menulis KV.
export async function schedulerPreview(request, env, cors) {
  const denied = await requireAdmin(request, env, cors);
  if (denied) return denied;
  const at = new URL(request.url).searchParams.get('at');
  const atMs = at ? Date.parse(at) : nextSlotTime(Date.now());
  if (!Number.isFinite(atMs)) return json({ success: false, error: 'Parameter at tidak valid' }, 400, cors);
  const decision = await runScheduler(env, atMs, { dryRun: true });
  const state = publicState(await env.PUSH_KV.get(KEYS.state, 'json'));
  return json({ success: true, dryRun: true, state, decision }, 200, cors);
}

export async function sendTest(request, env, cors, fetchImpl = fetch) {
  const denied = await requireAdmin(request, env, cors);
  if (denied) return denied;

  const missing = ['VAPID_PRIVATE_KEY', 'VAPID_PUBLIC_KEY', 'VAPID_SUBJECT'].filter((k) => !env[k]);
  if (missing.length) return json({ success: false, error: `Konfigurasi belum lengkap: ${missing.join(', ')}` }, 500, cors);
  if (!/^(mailto:|https:)/.test(env.VAPID_SUBJECT)) return json({ success: false, error: 'VAPID_SUBJECT harus diawali mailto: atau https:' }, 500, cors);

  const subscription = await env.PUSH_KV.get(KEYS.subscription, 'json');
  if (!isValidSubscription(subscription)) {
    return json({ success: false, error: 'Subscription tidak ada. Aktifkan notification di aplikasi dulu.', code: 'no-subscription' }, 404, cors);
  }

  let providerStatus = null;
  try {
    const push = await buildPushPayload(
      { data: TEST_PAYLOAD, options: { ttl: 300, urgency: 'high' } },
      subscription,
      { subject: env.VAPID_SUBJECT, publicKey: env.VAPID_PUBLIC_KEY, privateKey: env.VAPID_PRIVATE_KEY }
    );
    const res = await fetchImpl(subscription.endpoint, { method: 'POST', headers: push.headers, body: push.body });
    providerStatus = res.status;
    const endpointHost = new URL(subscription.endpoint).host;

    if (res.ok) {
      return json({ success: true, providerStatus, endpointHost, payload: TEST_PAYLOAD }, 200, cors);
    }
    if (res.status === 404 || res.status === 410) {
      await env.PUSH_KV.delete(KEYS.subscription);
      return json({
        success: false, providerStatus, endpointHost, stale: true, code: 'stale-subscription',
        error: 'Subscription sudah tidak berlaku dan dihapus. Buka aplikasi di HP lalu aktifkan notification lagi.'
      }, 410, cors);
    }
    const detail = await res.text().catch(() => '');
    return json({ success: false, providerStatus, endpointHost, error: scrub(detail || res.statusText, env) }, 502, cors);
  } catch (err) {
    return json({ success: false, providerStatus, error: scrub(err && err.message, env) }, 500, cors);
  }
}

export default {
  // Cron Trigger. Satu run = paling banyak satu push (lihat scheduler.js).
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(runScheduler(env, controller.scheduledTime).then((r) => {
      console.log('scheduler', JSON.stringify({ action: r.action, reason: r.reason, slotId: r.slotId, questionId: r.questionId, providerStatus: r.providerStatus }));
    }));
  },

  async fetch(request, env) {
    const cors = corsHeaders(env, request);
    const { pathname } = new URL(request.url);
    const method = request.method;

    if (method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    try {
      if (method === 'GET' && pathname === '/health') {
        return json({ success: true, service: 'english-90-hari-push', status: 'online', kv: !!env.PUSH_KV }, 200, cors);
      }

      if (method === 'POST' && pathname === '/subscribe') {
        const sub = await readJson(request);
        if (!isValidSubscription(sub)) return json({ success: false, message: 'Invalid push subscription' }, 400, cors);
        const record = {
          endpoint: sub.endpoint, expirationTime: sub.expirationTime ?? null,
          keys: { p256dh: sub.keys.p256dh, auth: sub.keys.auth }, updatedAt: new Date().toISOString()
        };
        await env.PUSH_KV.put(KEYS.subscription, JSON.stringify(record));
        return json({ success: true, message: 'Push subscription saved' }, 200, cors);
      }

      if (method === 'GET' && pathname === '/state') {
        const saved = await env.PUSH_KV.get(KEYS.state, 'json');
        return json({ success: true, state: publicState(saved) }, 200, cors);
      }

      if (method === 'POST' && pathname === '/state') {
        const s = await readJson(request);
        if (!s || typeof s !== 'object') return json({ success: false, message: 'Invalid state' }, 400, cors);
        const prev = await env.PUSH_KV.get(KEYS.state, 'json');
        const { state, kept } = mergeState(prev, normalizeState(s));
        await env.PUSH_KV.put(KEYS.state, JSON.stringify(state));
        return json({ success: true, state, ...(kept ? { kept } : {}) }, 200, cors);
      }

      if (method === 'POST' && pathname === '/scheduler/preview') return schedulerPreview(request, env, cors);

      if (method === 'POST' && pathname === '/send-test') return sendTest(request, env, cors);

      return json({ success: false, message: 'Endpoint not found' }, 404, cors);
    } catch (err) {
      return json({ success: false, message: 'Internal error', error: scrub(err && err.message, env) }, 500, cors);
    }
  }
};
