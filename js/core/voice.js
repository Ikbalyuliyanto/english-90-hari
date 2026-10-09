/*
 * Adapter TTS native (APK Android) memakai plugin @capacitor-community/text-to-speech.
 * Android WebView tidak mendukung speechSynthesis, jadi di APK semua suara lewat engine TTS Android.
 * Di web, E90.voice.available = false dan E90.speech tetap memakai Web Speech API.
 */
window.E90 = window.E90 || {};

E90.voice = (() => {
  const tts = E90.platform?.plugin('TextToSpeech');
  const available = !!tts;
  const RATES = { slow: 0.75, normal: 1.0, fast: 1.2 };
  let seq = 0;

  // speak() langsung mengembalikan true; onend dipanggil saat selesai / gagal / disela.
  function speak(text, { rate = 'normal', onend } = {}) {
    if (!available || !text) return false;
    const id = ++seq;
    tts.stop().catch(() => {}).finally(() => {
      if (id !== seq) return; // sudah disela oleh speak() berikutnya
      tts.speak({ text, lang: 'en-US', rate: RATES[rate] || RATES.normal, pitch: 1.0, volume: 1.0, queueStrategy: 0 })
        .catch((err) => console.warn('[E90] TTS gagal:', err?.message || err))
        .finally(() => { if (id === seq && onend) onend(); });
    });
    return true;
  }

  function stop() {
    if (!available) return;
    seq++;
    tts.stop().catch(() => {});
  }

  async function info() {
    if (!available) return { available: false };
    const [langs, voices] = await Promise.all([
      tts.getSupportedLanguages().catch(() => ({ languages: [] })),
      tts.getSupportedVoices().catch(() => ({ voices: [] }))
    ]);
    const english = (voices.voices || []).filter((v) => /^en/i.test(v.lang));
    return { available: true, englishSupported: (langs.languages || []).some((l) => /^en/i.test(l)), englishVoices: english.length };
  }

  return { available, speak, stop, info, RATES };
})();
