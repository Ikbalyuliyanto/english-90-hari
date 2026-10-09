/*
 * Notifikasi native Android (APK) lewat @capacitor/local-notifications.
 * Tahap ini hanya: izin POST_NOTIFICATIONS, channel HIGH (suara + getar), dan satu test notification.
 * Belum ada reminder berkala. Tanpa exact alarm (plugin memakai setAndAllowWhileIdle) dan tanpa foreground service.
 * Preferensi English Companion disimpan terpisah (key: english90:companion).
 */
window.E90 = window.E90 || {};

E90.nativeNotify = (() => {
  const LN = E90.platform?.plugin('LocalNotifications');
  const settingsPlugin = E90.platform?.plugin('AppSettings');
  const available = !!LN;
  const KEY = 'english90:companion';
  // Id channel baru jika suara/importance diubah (Android & Funtouch OS mengunci pengaturan channel setelah dibuat).
  // v2: dibuat native dengan suara EKSPLISIT (nada notifikasi default) + getar; v1 (tanpa suara eksplisit) dihapus.
  const CHANNEL = { id: 'english_companion_v2', name: 'English Companion', description: 'Pengingat latihan English (suara + getar)' };
  const OLD_CHANNELS = ['e90_companion_v1'];
  // Id unik tiap test: Android tidak membunyikan ulang notifikasi dengan id sama yang masih tampil (onlyAlertOnce).
  const testId = () => 10000 + (Math.floor(Date.now() / 1000) % 80000);

  function prefs() {
    try { return { enabled: false, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { enabled: false }; }
  }
  function setPrefs(patch) {
    try { localStorage.setItem(KEY, JSON.stringify({ ...prefs(), ...patch })); } catch { /* storage diblokir */ }
  }

  // 'granted' | 'denied' | 'prompt' (belum diminta) | 'unsupported'
  // Catatan: untuk izin yang ditolak permanen, checkPermissions() Capacitor tetap melaporkan 'prompt'.
  // Karena itu dicatat apakah izin pernah diminta; jika sudah pernah dan belum diizinkan -> 'denied'.
  // Notifikasi yang dimatikan di pengaturan Android (areEnabled = false) juga dihitung 'denied'.
  async function permission() {
    if (!available) return 'unsupported';
    try {
      const { display } = await LN.checkPermissions();
      const enabled = await LN.areEnabled().then((r) => r.value).catch(() => true);
      if (display === 'granted') return enabled ? 'granted' : 'denied';
      if (display === 'denied' || prefs().requested) return 'denied';
      return 'prompt';
    } catch { return 'unsupported'; }
  }

  async function requestPermission() {
    if (!available) return 'unsupported';
    const current = await permission();
    if (current === 'granted' || current === 'denied') return current;
    setPrefs({ requested: true });
    await LN.requestPermissions();
    return permission();
  }

  // Channel sapaan per learning window: suara channel = klip res/raw/greet_<window>.wav (dibuat tools/make-greetings.ps1).
  // Naikkan versi jika klip diganti (Android mengunci suara channel setelah dibuat).
  const GREETING_CHANNEL_VERSION = 1;
  const greetingChannelId = (w) => `ec_${w.id}_v${GREETING_CHANNEL_VERSION}`;
  async function ensureGreetingChannel(w) {
    if (!settingsPlugin) return ensureChannel();
    return settingsPlugin.ensureChannel({
      id: greetingChannelId(w), name: `English Companion · ${w.label}`,
      description: `Sapaan suara ${w.start}–${w.end}`, sound: w.sound, deleteIds: OLD_CHANNELS
    });
  }

  async function ensureChannel() {
    if (!available) return null;
    if (settingsPlugin) return settingsPlugin.ensureChannel({ ...CHANNEL, deleteIds: OLD_CHANNELS });
    await LN.createChannel({ ...CHANNEL, importance: 4, visibility: 1, vibration: true });
    return null;
  }

  // Diagnostik dari Android: izin, areEnabled, channel (sound/importance/getar), volume, mode dering, DND.
  async function diagnostics(channelId = CHANNEL.id) {
    const perm = await permission();
    const native = settingsPlugin ? await settingsPlugin.diagnostics({ id: channelId }).catch((e) => ({ error: e?.message })) : {};
    return { permission: perm, ...native };
  }

  // Aktifkan English Companion: minta izin di sini (bukan saat app pertama dibuka).
  async function enableCompanion() {
    const result = await requestPermission();
    if (result === 'granted') await ensureChannel();
    setPrefs({ enabled: result === 'granted' });
    return result;
  }
  function disableCompanion() { setPrefs({ enabled: false }); }

  // Test: minta izin bila perlu, lalu kirim 1 notifikasi dalam `delaySec` detik.
  // Dengan windowId: notifikasi companion di channel sapaan window itu, berisi pertanyaan aktif;
  // tanpa windowId: notifikasi sederhana di channel default (nada notifikasi).
  async function sendTest({ delaySec = 4, name = '', windowId } = {}) {
    const result = await requestPermission();
    if (result !== 'granted') return { ok: false, permission: result };
    const w = windowId ? E90.companion?.windowById(windowId) : null;
    let channelId = CHANNEL.id;
    let title = 'English Companion';
    let body = `${name ? `${name}, w` : 'W'}aktunya latihan English.`;
    let url = '#/conversation';
    if (w) {
      await ensureGreetingChannel(w);
      channelId = greetingChannelId(w);
      const active = E90.conversation?.ensureActive();
      const q = active && E90.conversation.byId(active.questionId);
      title = E90.companion.greetingText(w);
      if (q) { body = `${q.en}
${q.idn}`; url = `#/conversation?q=${encodeURIComponent(q.id)}&voice=1`; }
    } else {
      await ensureChannel();
    }
    await LN.removeAllDeliveredNotifications().catch(() => {});
    const id = testId();
    const at = new Date(Date.now() + delaySec * 1000);
    await LN.schedule({
      notifications: [{
        id,
        channelId,
        title,
        body,
        schedule: { at, allowWhileIdle: true },
        // Tanpa exact alarm: default plugin (true) membuka layar "Alarm & pengingat" bila izin tidak ada.
        isExactNotification: false,
        smallIcon: 'ic_stat_e90',
        iconColor: '#1D4ED8',
        extra: { url }
      }]
    });
    return { ok: true, permission: result, id, channelId, title, body, url, at: at.toISOString() };
  }

  async function openSettings() {
    if (!settingsPlugin) return false;
    await settingsPlugin.openNotificationSettings();
    return true;
  }
  async function openChannelSettings() {
    if (!settingsPlugin) return false;
    await settingsPlugin.openChannelSettings({ id: CHANNEL.id });
    return true;
  }

  // Tap notifikasi -> buka route di extra.url (hanya route internal #/...).
  // addListener() bisa mengembalikan handle atau Promise tergantung versi; jangan sampai melempar saat dimuat.
  if (available) {
    try {
      Promise.resolve(LN.addListener('localNotificationActionPerformed', (event) => {
        const url = event?.notification?.extra?.url;
        if (typeof url === 'string' && url.startsWith('#/')) location.hash = url;
      })).catch(() => {});
    } catch (err) {
      console.warn('[E90] listener notifikasi gagal:', err?.message || err);
    }
  }

  return { available, CHANNEL, greetingChannelId, ensureGreetingChannel, prefs, permission, requestPermission, ensureChannel, diagnostics, enableCompanion, disableCompanion, sendTest, openSettings, openChannelSettings };
})();
