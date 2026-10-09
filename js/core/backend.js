/*
 * Komunikasi ke Cloudflare Worker (E90.CONFIG.WORKER_BASE_URL).
 *   GET  /health     status Worker
 *   POST /subscribe  subscription.toJSON() dari pushManager
 *   GET  /state      state server (pertanyaan pending dari scheduler diadopsi saat boot)
 *   POST /state      { currentDay, activeStatus, activeQuestionId, lastVerdict, answeredAt }
 *
 * Semua request best-effort: timeout, try/catch, tidak pernah melempar error ke UI.
 * Jika Worker offline, aplikasi tetap berjalan lokal seperti biasa.
 * Tidak ada secret di sini; VAPID public key (jika nanti ada) diambil dari E90.CONFIG.
 */
window.E90 = window.E90 || {};

E90.backend = (() => {
  // Fase 1 APK: belum sync ke Worker agar state APK tidak menimpa state HP yang dipakai scheduler production.
  const base = () => (E90.platform?.isNative ? '' : (E90.CONFIG?.WORKER_BASE_URL || '').replace(/\/+$/, ''));
  const TIMEOUT = 8000;
  const status = { health: null, lastState: null, subscription: null };
  let lastSent = '';
  let syncTimer = null;
  // Sinkron state ditahan sampai adopsi pending dari server selesai (saat boot / kembali ke depan),
  // supaya state lokal yang belum diadopsi tidak menimpa pertanyaan pending dari scheduler.
  let adoption = Promise.resolve();

  async function request(path, { method = 'GET', body } = {}) {
    if (!base() || !navigator.onLine) return { ok: false, error: 'offline' };
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
    try {
      const res = await fetch(base() + path, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined,
        signal: ctrl.signal
      });
      const data = await res.json().catch(() => null);
      return { ok: res.ok && data?.success !== false, data };
    } catch (err) {
      return { ok: false, error: err.name === 'AbortError' ? 'timeout' : 'network' };
    } finally {
      clearTimeout(timer);
    }
  }

  async function health() {
    const r = await request('/health');
    status.health = { ok: r.ok && r.data?.status === 'online', at: new Date().toISOString(), data: r.data || null };
    return status.health;
  }

  // ---------- State ----------
  function currentState() {
    const conv = E90.conversation;
    const active = conv?.getActive();
    return {
      currentDay: conv ? conv.maxDay() : null,
      activeStatus: active?.status || null,
      activeQuestionId: active?.questionId || null,
      // Scheduler hanya membuka pertanyaan berikutnya setelah jawaban BENAR (+ cooldown dari answeredAt).
      lastVerdict: active?.status === 'answered' ? active.validationResult?.verdict || null : null,
      answeredAt: active?.status === 'answered' ? active.answeredAt || null : null
    };
  }

  async function postState(force = false) {
    await adoption;
    const state = currentState();
    const key = JSON.stringify(state);
    if (!force && key === lastSent) return status.lastState;
    const r = await request('/state', { method: 'POST', body: state });
    if (r.ok) lastSent = key;
    status.lastState = { ok: r.ok, at: new Date().toISOString(), sent: state, saved: r.data?.state || null, error: r.error };
    return status.lastState;
  }

  // Dipanggil setiap state berubah; digabung (debounce) dan hanya dikirim jika isinya berubah.
  function syncState() {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { postState().catch(() => {}); }, 300);
  }

  // ---------- Push subscription ----------
  function urlBase64ToUint8Array(value) {
    const padded = (value + '='.repeat((4 - (value.length % 4)) % 4)).replace(/-/g, '+').replace(/_/g, '/');
    return Uint8Array.from(atob(padded), (c) => c.charCodeAt(0));
  }

  // Status: 'unsupported' | 'no-permission' | 'no-sw' | 'saved' | 'save-failed' | 'no-vapid' | 'subscribe-failed'
  // Tidak pernah membuat subscription palsu. subscribe() baru dipanggil jika applicationServerKey tersedia.
  // Single-flight: pemanggilan bersamaan (aktifkan notification + render Settings) memakai proses yang sama,
  // supaya subscribe() tidak dipanggil dua kali dan menggantikan subscription pertama.
  let inflight = null;
  function ensureSubscription(opts) {
    if (!inflight) inflight = runEnsureSubscription(opts).finally(() => { inflight = null; });
    return inflight;
  }

  async function runEnsureSubscription({ applicationServerKey = E90.CONFIG?.VAPID_PUBLIC_KEY } = {}) {
    const set = (state, extra = {}) => (status.subscription = { state, at: new Date().toISOString(), ...extra });
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return set('unsupported');
    if (!('Notification' in window) || Notification.permission !== 'granted') return set('no-permission');
    const reg = await navigator.serviceWorker.getRegistration();
    if (!reg) return set('no-sw');
    if (!reg.pushManager) return set('unsupported');

    let sub = await reg.pushManager.getSubscription();
    // Subscription lama dibuat dengan key lain (mis. key diganti): buat ulang dengan key sekarang.
    if (sub && applicationServerKey && sub.options?.applicationServerKey) {
      const current = new Uint8Array(sub.options.applicationServerKey);
      const wanted = urlBase64ToUint8Array(applicationServerKey);
      if (current.length !== wanted.length || current.some((b, i) => b !== wanted[i])) {
        await sub.unsubscribe().catch(() => {});
        sub = null;
      }
    }
    if (!sub) {
      if (!applicationServerKey) return set('no-vapid');
      try {
        sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(applicationServerKey) });
      } catch (err) {
        return set('subscribe-failed', { error: err.message });
      }
    }
    const r = await request('/subscribe', { method: 'POST', body: sub.toJSON() });
    return set(r.ok ? 'saved' : 'save-failed', { endpoint: sub.endpoint });
  }

  async function getServerState() {
    const r = await request('/state');
    return r.ok ? r.data?.state || null : null;
  }

  // Server pending (dari scheduler) -> jadikan active question lokal. Gagal jaringan = tidak ada perubahan.
  async function adoptServerPending() {
    const conv = E90.conversation;
    if (!conv) return { adopted: false, reason: 'no-conversation' };
    const s = await getServerState();
    status.serverState = s;
    if (!s || s.activeStatus !== 'pending' || !s.activeQuestionId) return { adopted: false, reason: 'no-server-pending' };
    const result = conv.adoptQuestion(s.activeQuestionId, { source: s.source || 'server', serverUpdatedAt: s.updatedAt });
    // Halaman Conversation yang sedang terbuka dirender ulang dengan pertanyaan yang diadopsi.
    if (result.adopted && /^#\/conversation/.test(location.hash)) window.dispatchEvent(new HashChangeEvent('hashchange'));
    return result;
  }

  function adoptThenSync() {
    adoption = adoptServerPending().catch(() => ({ adopted: false, reason: 'error' })).then((r) => { status.adoption = r; });
    syncState();
    return adoption;
  }

  // Saat app dibuka & kembali ke depan: adopsi pending server dulu, lalu sinkron.
  // Saat pindah halaman: sinkron saja (menangkap perubahan current day).
  function init() {
    adoptThenSync();
    window.addEventListener('hashchange', syncState);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') adoptThenSync(); });
    window.addEventListener('online', syncState);
    if ('Notification' in window && Notification.permission === 'granted' && E90.pwa?.prefs().enabled) {
      ensureSubscription().catch(() => {});
    }
  }

  return { status, health, postState, syncState, ensureSubscription, currentState, getServerState, adoptServerPending, init };
})();
