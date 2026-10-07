/*
 * Conversation (tahap 1, tanpa AI): memilih pertanyaan dari data/conversation/questions.js
 * yang hanya memakai materi sampai current day user.
 *
 * Batas materi = E90.views.currentDay() (logika existing di dashboard):
 * Day tersedia pertama yang checklist-nya belum lengkap. Current day 21 -> pertanyaan minDay 1–21;
 * setelah Day 21 selesai, current day jadi 22 dan pertanyaan minDay 22 otomatis ikut.
 */
window.E90 = window.E90 || {};

E90.conversation = (() => {
  const bank = () => E90.CONVERSATION || { contexts: [], questions: [] };

  const maxDay = () => (E90.views.currentDay ? E90.views.currentDay() : 1);
  const contextOf = (id) => bank().contexts.find((c) => c.id === id) || null;
  const byId = (id) => bank().questions.find((q) => q.id === id) || null;

  function eligible({ context, limit = maxDay() } = {}) {
    return bank().questions.filter((q) => q.minDay <= limit && (!context || q.context === context));
  }

  // Konteks yang cocok dengan jam & hari sekarang (weekend punya konteks sendiri).
  function contextsForNow(now = new Date()) {
    const h = now.getHours();
    const weekend = now.getDay() === 0 || now.getDay() === 6;
    return bank().contexts.filter((c) => (weekend ? c.weekend : !c.weekend) && h >= c.hours[0] && h <= c.hours[1]);
  }

  // Pertanyaan acak: utamakan konteks yang cocok dengan waktu sekarang, lalu semua yang eligible.
  function pick({ context, exclude } = {}) {
    let pool = [];
    if (context) pool = eligible({ context });
    else {
      const now = contextsForNow().map((c) => c.id);
      pool = eligible().filter((q) => now.includes(q.context));
      if (!pool.length) pool = eligible();
    }
    if (pool.length > 1 && exclude) pool = pool.filter((q) => q.id !== exclude);
    return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
  }

  const routeFor = (q) => `#/conversation?q=${encodeURIComponent(q.id)}`;

  // Isi notification: judul = greeting konteks, body = English + arti Indonesia.
  function notificationPayload(q) {
    const ctx = contextOf(q.context);
    return {
      title: ctx?.greeting || 'English Time',
      body: `${q.en}\n${q.idn}`,
      url: routeFor(q),
      tag: 'e90-conversation'
    };
  }

  return { eligible, pick, byId, contextOf, contextsForNow, maxDay, routeFor, notificationPayload, bank };
})();
