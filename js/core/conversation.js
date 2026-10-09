/*
 * Conversation (tanpa AI): bank pertanyaan + satu "active question" seperti chat.
 *
 * Batas materi = E90.views.currentDay() (logika existing di dashboard):
 * Day tersedia pertama yang checklist-nya belum lengkap. Pertanyaan dipakai jika minDay <= current day,
 * dan koreksi jawaban hanya memakai materi grammar dengan minDay <= current day (lihat answer-check.js).
 *
 * State (localStorage key english90:conversation, terpisah dari progress english90:v2):
 * {
 *   activeQuestion: {
 *     questionId, createdAt, answeredAt, status: 'pending' | 'answered',
 *     userAnswer, validationResult: { verdict, correction, hint, sample },
 *     attempts: [{ answer, result, at }], source: 'app' | 'notification' | 'push'
 *   } | null,
 *   history: [activeQuestion yang sudah ditutup + closedAt], maksimal 50 terakhir
 * }
 *
 * Alur: ensureActive()/createActive() -> submitAnswer() (status answered) -> close() saat "Lanjut".
 * Selama ada active question berstatus pending, createActive() menolak membuat pertanyaan baru.
 * Active question yang sudah dijawab tapi belum ditutup akan ditutup otomatis saat pertanyaan berikutnya dibuat.
 */
window.E90 = window.E90 || {};

E90.conversation = (() => {
  const KEY = 'english90:conversation';
  const HISTORY_MAX = 50;
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

  // ---------- State ----------
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (s && typeof s === 'object') return { activeQuestion: s.activeQuestion || null, history: Array.isArray(s.history) ? s.history : [] };
    } catch { /* data rusak: mulai kosong */ }
    return { activeQuestion: null, history: [] };
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage penuh / diblokir */ }
    E90.backend?.syncState(); // best-effort ke Worker; tidak memblokir alur lokal
  }

  const getActive = () => load().activeQuestion;
  const history = () => load().history;
  const isOpen = (a) => !!a && a.status === 'pending';

  // Pertanyaan acak: utamakan konteks sesuai waktu, hindari pertanyaan yang baru saja ditanyakan.
  function pick({ context, exclude } = {}) {
    const recent = new Set(history().slice(-10).map((h) => h.questionId));
    if (exclude) recent.add(exclude);
    let pool;
    if (context) pool = eligible({ context });
    else {
      const now = contextsForNow().map((c) => c.id);
      pool = eligible().filter((q) => now.includes(q.context));
      if (!pool.length) pool = eligible();
    }
    const fresh = pool.filter((q) => !recent.has(q.id));
    if (fresh.length) pool = fresh;
    return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
  }

  function closeInto(state, at = new Date().toISOString()) {
    if (!state.activeQuestion) return;
    state.history.push({ ...state.activeQuestion, closedAt: at });
    state.history = state.history.slice(-HISTORY_MAX);
    state.activeQuestion = null;
  }

  // Buat active question baru. Ditolak jika masih ada pertanyaan yang belum dijawab.
  // -> { ok: true, active } | { ok: false, reason: 'active-pending' | 'empty' | 'not-eligible', active }
  function createActive({ questionId, context, source = 'app' } = {}) {
    const state = load();
    if (isOpen(state.activeQuestion)) return { ok: false, reason: 'active-pending', active: state.activeQuestion };
    let q = null;
    if (questionId) {
      q = byId(questionId);
      if (!q || q.minDay > maxDay()) return { ok: false, reason: 'not-eligible', active: state.activeQuestion };
    } else {
      q = pick({ context, exclude: state.activeQuestion?.questionId });
    }
    if (!q) return { ok: false, reason: 'empty', active: state.activeQuestion };
    closeInto(state);
    state.activeQuestion = {
      questionId: q.id, createdAt: new Date().toISOString(), answeredAt: null, status: 'pending',
      userAnswer: '', validationResult: null, attempts: [], source
    };
    save(state);
    return { ok: true, active: state.activeQuestion };
  }

  // Active question yang ada, atau buat baru jika belum ada sama sekali.
  function ensureActive(opts = {}) {
    const active = getActive();
    if (active) return active;
    return createActive(opts).active || null;
  }

  // Simpan jawaban + hasil validasi. Status menjadi 'answered' (dianggap selesai dijawab).
  function submitAnswer(answer) {
    const state = load();
    const a = state.activeQuestion;
    const q = a && byId(a.questionId);
    if (!q) return null;
    const result = E90.answerCheck.check(q, answer, maxDay());
    // Kisi-kisi bertahap: level naik setiap jawaban salah untuk pertanyaan ini (tersimpan di attempts).
    if (result.verdict === 'wrong') {
      const wrongBefore = (a.attempts || []).filter((t) => t.result?.verdict === 'wrong').length;
      Object.assign(result, E90.answerCheck.hintFor(q, wrongBefore + 1, maxDay()));
    }
    // Arti Indonesia untuk jawaban benar / kalimat koreksi (disimpan di attempt, tetap ada setelah reload).
    Object.assign(result, E90.answerCheck.meaningFor(q, result, answer));
    const at = new Date().toISOString();
    a.userAnswer = String(answer).trim();
    a.validationResult = result;
    a.answeredAt = at;
    a.status = 'answered';
    a.attempts = [...(a.attempts || []), { answer: a.userAnswer, result, at }];
    save(state);
    return result;
  }

  // Adopsi pertanyaan pending dari server (dikirim scheduler lewat push) supaya hanya ada satu
  // pertanyaan aktif. Tidak membuat duplikat dan tidak membuang jawaban user:
  // - local sudah pending dengan pertanyaan yang sama -> tidak ada perubahan;
  // - local sudah menjawab pertanyaan itu (aktif/riwayat) -> tidak diadopsi ulang;
  // - local pending lain yang sudah ada percobaan jawaban -> local dipertahankan;
  // - local pending lain yang belum disentuh -> diganti dengan pertanyaan server.
  // -> { adopted: boolean, reason }
  function adoptQuestion(questionId, { source = 'scheduler', serverUpdatedAt = null } = {}) {
    const state = load();
    const a = state.activeQuestion;
    const q = byId(questionId);
    if (!q) return { adopted: false, reason: 'unknown-question' };
    if (q.minDay > maxDay()) return { adopted: false, reason: 'not-eligible' };
    if (a && a.questionId === questionId) return { adopted: false, reason: a.status === 'pending' ? 'same-pending' : 'already-answered' };
    const answeredLater = state.history.some((h) => h.questionId === questionId && h.answeredAt && (!serverUpdatedAt || h.answeredAt >= serverUpdatedAt));
    if (answeredLater) return { adopted: false, reason: 'already-answered' };
    if (a && a.status === 'pending' && (a.attempts || []).length) return { adopted: false, reason: 'local-pending-in-use' };
    if (a && a.status === 'answered') closeInto(state);
    state.activeQuestion = {
      questionId: q.id, createdAt: new Date().toISOString(), answeredAt: null, status: 'pending',
      userAnswer: '', validationResult: null, attempts: [], source
    };
    save(state);
    return { adopted: true, reason: a ? 'replaced-untouched' : 'adopted' };
  }

  // "Coba lagi": buka kembali pertanyaan yang sama (riwayat percobaan tetap disimpan).
  function retry() {
    const state = load();
    if (!state.activeQuestion) return null;
    state.activeQuestion.status = 'pending';
    save(state);
    return state.activeQuestion;
  }

  // "Lanjut": tutup active question -> pertanyaan berikutnya boleh dibuat.
  function close() {
    const state = load();
    closeInto(state);
    save(state);
  }

  // Notification hanya boleh dibuat jika tidak ada pertanyaan yang belum dijawab.
  const canCreateNext = () => !isOpen(getActive());

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

  return {
    eligible, pick, byId, contextOf, contextsForNow, maxDay, routeFor, notificationPayload, bank,
    getActive, history, createActive, ensureActive, submitAnswer, retry, close, canCreateNext, adoptQuestion
  };
})();
