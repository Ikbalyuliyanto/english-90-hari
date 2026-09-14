/*
 * Audio memakai Web Speech API bawaan browser.
 * Selalu membaca teks English asli, bukan teks pronunciation.
 * Jika browser tidak mendukung, fungsi speak() mengembalikan false tanpa error.
 */
window.E90 = window.E90 || {};

E90.speech = (() => {
  const supported = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
  const RATES = { normal: 0.95, slow: 0.65 };
  let voice = null;

  function pickVoice() {
    if (!supported) return;
    const voices = window.speechSynthesis.getVoices();
    const english = voices.filter((v) => /^en[-_]/i.test(v.lang));
    voice =
      english.find((v) => /en[-_]US/i.test(v.lang) && /google|natural|samantha|aria|jenny/i.test(v.name)) ||
      english.find((v) => /en[-_]US/i.test(v.lang)) ||
      english.find((v) => /en[-_](GB|SG|AU)/i.test(v.lang)) ||
      english[0] ||
      null;
  }

  if (supported) {
    pickVoice();
    window.speechSynthesis.addEventListener?.('voiceschanged', pickVoice);
  }

  // Membersihkan placeholder seperti "{name}" agar tidak ikut dibaca.
  const clean = (text) => String(text).replace(/\{[^}]+\}/g, '').replace(/\s+([.,?!])/g, '$1').trim();

  function speak(text, { slow = false, onend } = {}) {
    if (!supported) return false;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(clean(text));
      u.lang = voice?.lang || 'en-US';
      if (voice) u.voice = voice;
      u.rate = slow ? RATES.slow : RATES.normal;
      if (onend) {
        u.onend = onend;
        u.onerror = onend;
      }
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) {
      console.warn('[E90] Speech gagal:', e);
      return false;
    }
  }

  function stop() {
    if (supported) {
      try { window.speechSynthesis.cancel(); } catch { /* abaikan */ }
    }
  }

  return { supported, speak, stop };
})();
