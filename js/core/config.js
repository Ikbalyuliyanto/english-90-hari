/*
 * Konfigurasi publik aplikasi. JANGAN taruh secret di sini: file ini ikut ter-deploy ke GitHub Pages.
 * - WORKER_BASE_URL: Cloudflare Worker untuk push subscription & sinkronisasi state.
 * - VAPID_PUBLIC_KEY: public key Web Push (aman dipublikasikan). Kosong = push server belum diaktifkan,
 *   aplikasi tidak akan memanggil pushManager.subscribe(). Private key hanya disimpan di Worker.
 */
window.E90 = window.E90 || {};

E90.CONFIG = {
  WORKER_BASE_URL: 'https://english-90-hari-push.ikbaly94.workers.dev',
  VAPID_PUBLIC_KEY: ''
};
