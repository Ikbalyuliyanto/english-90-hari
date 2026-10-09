/*
 * Deteksi platform: web (GitHub Pages / PWA) atau APK Android (Capacitor).
 * window.Capacitor disuntikkan oleh runtime native Capacitor; di browser biasa tidak ada.
 */
window.E90 = window.E90 || {};

E90.platform = (() => {
  const cap = window.Capacitor;
  const isNative = !!(cap && typeof cap.isNativePlatform === 'function' && cap.isNativePlatform());
  const name = isNative ? cap.getPlatform() : 'web';

  // Plugin native Capacitor (tanpa bundler): pakai proxy yang sudah ada, atau daftarkan berdasarkan nama.
  function plugin(id) {
    if (!isNative) return null;
    return cap.Plugins?.[id] || (typeof cap.registerPlugin === 'function' ? cap.registerPlugin(id) : null);
  }

  if (isNative) document.documentElement.classList.add('is-native', `is-${name}`);
  return { isNative, isWeb: !isNative, name, plugin };
})();
