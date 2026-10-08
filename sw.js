/*
 * Service worker English Trainer.
 * - Cache app shell agar bisa di-install & dibuka offline.
 * - Strategi network-first: selalu ambil versi terbaru dari GitHub Pages, cache hanya cadangan offline.
 * - notificationclick: buka/fokuskan app di route dari data.url (mis. #/conversation?q=C-WORK-03).
 * - message SKIP_WAITING: dipakai tombol "Cek Update" di Settings (tidak menyentuh localStorage).
 * - push: kerangka untuk Web Push dari backend (belum dipakai di tahap ini).
 * Naikkan VERSION jika daftar SHELL berubah.
 */
const VERSION = 'e90-v7';
const SHELL = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/styles.css',
  'js/core/config.js',
  'data/curriculum.js',
  'data/conversation/questions.js',
  'js/core/util.js',
  'js/core/store.js',
  'js/core/speech.js',
  'js/core/content.js',
  'js/core/answer-check.js',
  'js/core/conversation.js',
  'js/core/pwa.js',
  'js/core/backend.js',
  'js/ui/components.js',
  'js/ui/activities-core.js',
  'js/ui/activities-speak.js',
  'js/ui/activities-vocab.js',
  'js/views/dashboard.js',
  'js/views/day.js',
  'js/views/review.js',
  'js/views/vocab.js',
  'js/views/misc.js',
  'js/views/conversation.js',
  'js/app.js',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('index.html')))
  );
});

// Hanya izinkan route internal app (#/...).
function routeUrl(raw) {
  const hash = typeof raw === 'string' && raw.startsWith('#/') ? raw : '#/conversation';
  return { hash, url: new URL(hash, self.registration.scope).href };
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const { hash, url } = routeUrl(event.notification.data?.url);
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const client = all.find((c) => c.url.startsWith(self.registration.scope));
    if (client) {
      client.postMessage({ type: 'open-route', hash });
      return client.focus();
    }
    return self.clients.openWindow(url);
  })());
});

// Kerangka Web Push (tahap berikutnya): backend mengirim JSON { title, body, url }.
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch { data = { body: event.data?.text() }; }
  event.waitUntil(self.registration.showNotification(data.title || 'English Time', {
    body: data.body || 'Ayo latihan conversation sebentar.',
    icon: 'assets/icons/icon-192.png',
    badge: 'assets/icons/icon-192.png',
    tag: 'e90-conversation',
    data: { url: data.url || '#/conversation' }
  }));
});
