/*
 * Progress user di localStorage (key: english90:v2).
 * Tidak ada backend: semua data tinggal di browser perangkat ini.
 */
window.E90 = window.E90 || {};

E90.store = (() => {
  const { dateKey, addDays } = E90.util;
  const KEY = 'english90:v2';

  // Interval hari per kotak SRS. Kotak >= MASTERED_BOX dianggap mastered.
  const INTERVALS = [0, 1, 2, 4, 7, 14];
  const MASTERED_BOX = 4;
  const STEPS = ['learn', 'recall', 'listening', 'shadowing', 'speaking'];

  const blank = () => ({
    version: 2,
    settings: { theme: '', font: 1, name: '' },
    sentences: {},   // id -> { box, due, reps, lapses, last, mastered }
    vocab: {},       // key -> { box, due, reps, lapses, last, mastered }
    days: {},        // "1" -> { learn, recall, listening, shadowing, speaking, patterns, review, vocab, shadowCount: {}, spoken: {}, completedAt }
    log: {}          // "YYYY-MM-DD" -> { modes: [], minutes: 0, days: [] }
  });

  let state = blank();

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage penuh / diblokir */ }
  }

  // Migrasi progress dari versi lama (english90-completed, english90-theme, english90-font).
  function migrateLegacy() {
    const s = blank();
    try {
      const done = JSON.parse(safeGet('english90-completed') || '[]');
      done.forEach((day) => {
        s.days[day] = { learn: true, recall: true, listening: true, shadowing: true, speaking: true, completedAt: 'legacy' };
      });
    } catch { /* abaikan data lama yang rusak */ }
    if (safeGet('english90-theme') === 'dark') s.settings.theme = 'dark';
    const font = Number(safeGet('english90-font'));
    if (Number.isFinite(font) && font >= 0 && font <= 3) s.settings.font = font;
    return s;
  }

  function load() {
    const raw = safeGet(KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        state = { ...blank(), ...parsed, settings: { ...blank().settings, ...parsed.settings } };
        return;
      } catch { /* jatuh ke migrasi */ }
    }
    state = migrateLegacy();
    save();
  }

  // ---------- SRS ----------
  function rate(bucket, id, rating) {
    const today = dateKey();
    const rec = state[bucket][id] || { box: 0, due: today, reps: 0, lapses: 0 };
    rec.reps += 1;
    rec.last = rating;
    if (rating === 'again') {
      rec.box = 0;
      rec.lapses += 1;
      rec.mastered = false;
      rec.due = today;
    } else if (rating === 'hard') {
      rec.box = Math.max(rec.box - 1, 0);
      rec.due = addDays(today, 1);
    } else {
      rec.box = Math.min(rec.box + (rating === 'easy' ? 2 : 1), INTERVALS.length - 1);
      rec.due = addDays(today, INTERVALS[rec.box]);
    }
    state[bucket][id] = rec;
    save();
    return rec;
  }

  // Tandai kalimat/kata sudah dipelajari (tanpa menimpa progress yang ada).
  function touch(bucket, id) {
    if (state[bucket][id]) return;
    state[bucket][id] = { box: 0, due: addDays(dateKey(), 1), reps: 0, lapses: 0 };
    save();
  }

  function setMastered(bucket, id, value) {
    const rec = state[bucket][id] || { box: 0, due: dateKey(), reps: 0, lapses: 0 };
    rec.mastered = value;
    if (value) rec.box = Math.max(rec.box, MASTERED_BOX);
    else rec.box = Math.min(rec.box, MASTERED_BOX - 1);
    rec.due = addDays(dateKey(), INTERVALS[rec.box]);
    state[bucket][id] = rec;
    save();
  }

  function reset(bucket, id) {
    delete state[bucket][id];
    save();
  }

  const record = (bucket, id) => state[bucket][id] || null;

  function statusOf(bucket, id) {
    const rec = state[bucket][id];
    if (!rec) return 'new';
    if (rec.mastered || rec.box >= MASTERED_BOX) return 'mastered';
    return 'learning';
  }

  const isWeak = (rec) => !!rec && !rec.mastered && rec.box < MASTERED_BOX &&
    (rec.last === 'again' || rec.last === 'hard' || (rec.lapses > 0 && rec.box <= 2));

  const isDue = (rec) => !!rec && rec.due <= dateKey();

  function ids(bucket, filter) {
    return Object.entries(state[bucket]).filter(([, r]) => filter(r)).map(([id]) => id);
  }

  // ---------- Day checklist & aktivitas ----------
  function day(dayNo) {
    if (!state.days[dayNo]) state.days[dayNo] = {};
    return state.days[dayNo];
  }

  const isDayComplete = (dayNo) => STEPS.every((s) => state.days[dayNo]?.[s]);

  function completeStep(dayNo, step, mode = 'normal') {
    const d = day(dayNo);
    const wasComplete = isDayComplete(dayNo);
    d[step] = true;
    if (!wasComplete && isDayComplete(dayNo)) d.completedAt = dateKey();
    logActivity(mode, dayNo);
    save();
    return !wasComplete && isDayComplete(dayNo);
  }

  function setDayData(dayNo, field, value) {
    day(dayNo)[field] = value;
    save();
  }

  function logActivity(mode, dayNo) {
    const key = dateKey();
    const entry = state.log[key] || (state.log[key] = { modes: [], minutes: 0, days: [] });
    if (mode && !entry.modes.includes(mode)) entry.modes.push(mode);
    if (dayNo && !entry.days.includes(dayNo)) entry.days.push(dayNo);
    save();
  }

  function addMinutes(minutes) {
    const key = dateKey();
    const entry = state.log[key] || (state.log[key] = { modes: [], minutes: 0, days: [] });
    entry.minutes = Math.round((entry.minutes + minutes) * 100) / 100;
    save();
  }

  // Hari aktif = ada aktivitas belajar apa pun, termasuk Emergency Mode.
  const isActiveDate = (key) => (state.log[key]?.modes || []).length > 0;

  function streak() {
    let key = dateKey();
    // Hari ini belum belajar tidak memutus streak.
    if (!isActiveDate(key)) key = addDays(key, -1);
    let count = 0;
    while (isActiveDate(key)) {
      count++;
      key = addDays(key, -1);
    }
    return count;
  }

  const activeDays = () => Object.keys(state.log).filter(isActiveDate).length;
  const totalMinutes = () => Math.round(Object.values(state.log).reduce((sum, e) => sum + (e.minutes || 0), 0));
  const todayLog = () => state.log[dateKey()] || { modes: [], minutes: 0, days: [] };

  // ---------- Settings ----------
  const settings = () => state.settings;
  function setSetting(key, value) {
    state.settings[key] = value;
    save();
  }

  function resetAll() {
    state = blank();
    save();
  }

  load();

  return {
    STEPS, MASTERED_BOX,
    rate, touch, setMastered, reset, record, statusOf, isWeak, isDue, ids,
    day, isDayComplete, completeStep, setDayData, logActivity, addMinutes,
    streak, activeDays, totalMinutes, todayLog,
    settings, setSetting, resetAll,
    raw: () => state
  };
})();
