/*
 * PWA: registrasi service worker, prompt install, dan notification lokal.
 * Preferensi notification disimpan terpisah (key: english90:notify) agar store progress tidak berubah.
 * Catatan: tanpa backend, notification hanya bisa dipicu dari aplikasi (tes / saat app dibuka).
 * Push terjadwal sungguhan butuh server Web Push (lihat README).
 */
window.E90 = window.E90 || {};

E90.pwa = (() => {
  const KEY = 'english90:notify';
  const ICON = 'assets/icons/icon-192.png';
  let installEvent = null;

  const supported = {
    sw: 'serviceWorker' in navigator,
    notify: 'Notification' in window && 'serviceWorker' in navigator
  };

  function prefs() {
    try { return { enabled: false, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { enabled: false }; }
  }
  function setPrefs(patch) {
    try { localStorage.setItem(KEY, JSON.stringify({ ...prefs(), ...patch })); } catch { /* storage diblokir */ }
  }

  const permission = () => (supported.notify ? Notification.permission : 'unsupported');
  const isStandalone = () => window.matchMedia?.('(display-mode: standalone)').matches || navigator.standalone === true;

  function register() {
    // APK memuat file dari dalam paket; service worker & Web Push hanya untuk versi web.
    if (!supported.sw || E90.platform?.isNative) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).catch((err) => console.warn('[E90] SW gagal', err));
    });
    // Klik notification saat app sudah terbuka: SW mengirim route via postMessage.
    navigator.serviceWorker.addEventListener('message', (e) => {
      if (e.data?.type === 'open-route' && typeof e.data.hash === 'string' && e.data.hash.startsWith('#/')) {
        location.hash = e.data.hash;
      }
    });
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installEvent = e;
      document.dispatchEvent(new CustomEvent('e90:installable'));
    });
    window.addEventListener('appinstalled', () => { installEvent = null; });
  }

  const canInstall = () => !!installEvent;
  async function install() {
    if (!installEvent) return false;
    installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    installEvent = null;
    return outcome === 'accepted';
  }

  async function swActive() {
    if (!supported.sw) return false;
    const reg = await navigator.serviceWorker.getRegistration();
    return !!reg?.active;
  }

  async function enableNotifications() {
    if (!supported.notify) return 'unsupported';
    const result = await Notification.requestPermission();
    setPrefs({ enabled: result === 'granted' });
    if (result === 'granted') await E90.backend?.ensureSubscription().catch(() => {});
    return result;
  }

  function disableNotifications() {
    setPrefs({ enabled: false });
  }

  // Tampilkan notification lewat service worker agar notificationclick ditangani sw.js.
  async function notify({ title, body, url, tag }) {
    if (permission() !== 'granted') throw new Error('permission');
    const reg = await navigator.serviceWorker.ready;
    await reg.showNotification(title, {
      body, tag, icon: ICON, badge: ICON, renotify: true,
      data: { url }
    });
  }

  // Satu active question: jika masih ada pertanyaan yang belum dijawab, notification mengulang
  // pertanyaan yang sama (tag sama -> menggantikan, tidak menumpuk). Pertanyaan baru hanya dibuat
  // setelah pertanyaan sebelumnya dijawab.
  async function sendConversationTest() {
    const conv = E90.conversation;
    let active = conv.getActive();
    let reused = true;
    if (conv.canCreateNext()) {
      const res = conv.createActive({ source: 'notification' });
      if (!res.ok) throw new Error(res.reason);
      active = res.active;
      reused = false;
    }
    const q = conv.byId(active.questionId);
    await notify(conv.notificationPayload(q));
    return { q, reused };
  }

  // Cek update: ambil sw.js terbaru; jika ada versi baru, aktifkan (SKIP_WAITING) lalu reload sekali
  // setelah controllerchange. Hanya reload halaman — localStorage/progress tidak disentuh.
  // Hasil: 'updating' (reload otomatis menyusul) atau 'latest'.
  let reloading = false;
  function reloadOnce() {
    if (reloading) return;
    reloading = true;
    location.reload();
  }

  async function checkForUpdate() {
    if (!supported.sw) return 'latest';
    const reg = await navigator.serviceWorker.getRegistration();
    if (!reg) return 'latest';
    await reg.update();
    const worker = reg.waiting || reg.installing;
    if (!worker) return 'latest';

    navigator.serviceWorker.addEventListener('controllerchange', reloadOnce, { once: true });
    const activate = () => worker.postMessage({ type: 'SKIP_WAITING' });
    if (worker.state === 'installed') activate();
    worker.addEventListener('statechange', () => {
      if (worker.state === 'installed') activate();
      if (worker.state === 'redundant') reloadOnce();
    });
    setTimeout(reloadOnce, 10000); // cadangan bila controllerchange tidak terjadi
    return 'updating';
  }

  register();

  return { supported, prefs, permission, isStandalone, canInstall, install, swActive, enableNotifications, disableNotifications, notify, checkForUpdate, reloadOnce, sendConversationTest };
})();
