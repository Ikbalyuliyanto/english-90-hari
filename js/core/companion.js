/*
 * English Companion: preferensi suara, window -> sapaan/channel, membaca pertanyaan, feedback suara.
 * Window sama dengan scheduler Worker (worker/src/scheduler.js), waktu Asia/Jakarta.
 * Sapaan saat notifikasi muncul diputar oleh SISTEM sebagai suara channel (res/raw/greet_*.wav),
 * jadi saat notifikasi dibuka app hanya membacakan pertanyaan — sapaan tidak diulang.
 */
window.E90 = window.E90 || {};

E90.companion = (() => {
  const KEY = 'english90:voice';
  const DEFAULTS = { voice: true, feedbackVoice: true, mic: true, speed: 'normal' };

  // id window = id channel suffix = nama file greet_<sound>.wav
  const WINDOWS = [
    { id: 'morning',        label: 'Pagi',      start: '06:00', end: '07:00', sound: 'greet_morning',         greeting: '{name}, wake up. Good morning.' },
    { id: 'commuteMorning', label: 'Berangkat', start: '07:00', end: '09:30', sound: 'greet_commute_morning', greeting: "{name}, it's time to work." },
    { id: 'lunch',          label: 'Siang',     start: '11:30', end: '13:30', sound: 'greet_lunch',           greeting: '{name}, lunch time.' },
    { id: 'commuteHome',    label: 'Pulang',    start: '16:30', end: '19:00', sound: 'greet_commute_home',    greeting: '{name}, time to go home.' },
    { id: 'evening',        label: 'Malam',     start: '19:00', end: '21:30', sound: 'greet_evening',         greeting: '{name}, good evening.' }
  ];

  const FEEDBACK = {
    correct: ['Good job, {name}.', 'Nice work, {name}.', "That's correct.", 'Great job.'],
    almost: ['Almost. Try again.'],
    wrong: ["Try again. I'll give you a hint."]
  };

  function prefs() {
    try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { ...DEFAULTS }; }
  }
  function setPrefs(patch) {
    try { localStorage.setItem(KEY, JSON.stringify({ ...prefs(), ...patch })); } catch { /* storage diblokir */ }
  }

  const name = () => (E90.store?.settings().name || '').trim();
  const fill = (text) => {
    const n = name();
    return n ? text.replace('{name}', n) : text.replace(/^\{name\},\s*/, '').replace(/,?\s*\{name\}/, '').replace(/^./, (c) => c.toUpperCase());
  };

  // Window aktif berdasarkan jam Jakarta (UTC+7); di luar window -> window terdekat berikutnya.
  function windowAt(date = new Date()) {
    const j = new Date(date.getTime() + 7 * 3600000);
    const minutes = j.getUTCHours() * 60 + j.getUTCMinutes();
    const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    return WINDOWS.find((w) => minutes >= toMin(w.start) && minutes < toMin(w.end))
      || WINDOWS.find((w) => toMin(w.start) > minutes)
      || WINDOWS[0];
  }
  const windowById = (id) => WINDOWS.find((w) => w.id === id) || null;

  function say(text, { onend } = {}) {
    if (!prefs().voice || !text) return false;
    return E90.speech.speak(text, { rate: prefs().speed, onend });
  }

  // Dibacakan saat Conversation dibuka dari notifikasi: pertanyaan saja (sapaan sudah diputar notifikasi).
  function speakQuestion(q) {
    return q ? say(q.en) : false;
  }

  function feedback(verdict) {
    const p = prefs();
    if (!p.voice || !p.feedbackVoice) return false;
    const list = FEEDBACK[verdict];
    if (!list) return false;
    return E90.speech.speak(fill(list[Math.floor(Math.random() * list.length)]), { rate: p.speed });
  }

  return { WINDOWS, prefs, setPrefs, windowAt, windowById, greetingText: (w) => fill(w.greeting), speakQuestion, feedback, say };
})();
