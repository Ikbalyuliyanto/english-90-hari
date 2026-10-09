/*
 * Speech-to-text (jawab dengan suara). Hasil hanya diisi ke input — tidak pernah dikirim otomatis.
 * - APK Android: @capacitor-community/speech-recognition (SpeechRecognizer Android, en-US, partial results).
 * - Web: webkitSpeechRecognition (Chrome) bila tersedia.
 * E90.listen.start({ onText, onState, onError }) -> onText(teks, final), onState('listening' | 'stopped').
 */
window.E90 = window.E90 || {};

E90.listen = (() => {
  const SR = E90.platform?.plugin('SpeechRecognition');
  const WebSR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const mode = SR ? 'native' : WebSR ? 'web' : null;
  let session = null; // { stop(), handlers }

  async function available() {
    if (mode === 'native') {
      try { return (await SR.available()).available; } catch { return false; }
    }
    return mode === 'web';
  }

  // Izin mikrofon diminta saat tombol 🎤 pertama kali ditekan (bukan saat app dibuka).
  async function ensurePermission() {
    if (mode !== 'native') return true;
    let p = await SR.checkPermissions().catch(() => ({ speechRecognition: 'prompt' }));
    if (p.speechRecognition !== 'granted') p = await SR.requestPermissions().catch(() => ({ speechRecognition: 'denied' }));
    return p.speechRecognition === 'granted';
  }

  async function start({ onText, onState, onError } = {}) {
    stop();
    E90.speech?.stop(); // jangan sampai mic menangkap suara TTS app sendiri
    if (mode === 'native') {
      if (!(await ensurePermission())) { onError?.('permission'); return false; }
      const subs = [];
      let last = '';
      const done = () => { subs.forEach((s) => Promise.resolve(s).then((h) => h?.remove?.()).catch(() => {})); session = null; onState?.('stopped'); onText?.(last, true); };
      try {
        subs.push(SR.addListener('partialResults', (d) => { last = d?.matches?.[0] || last; onText?.(last, false); }));
        subs.push(SR.addListener('listeningState', (d) => { if (d?.status === 'stopped' && session) done(); }));
      } catch { /* listener opsional */ }
      session = { stop: () => SR.stop().catch(() => {}) };
      onState?.('listening');
      try {
        await SR.start({ language: 'en-US', maxResults: 3, partialResults: true, popup: false });
      } catch (err) {
        if (session) { session = null; subs.forEach((s) => Promise.resolve(s).then((h) => h?.remove?.()).catch(() => {})); }
        onState?.('stopped');
        onError?.(String(err?.message || err));
        return false;
      }
      return true;
    }
    if (mode === 'web') {
      const rec = new WebSR();
      rec.lang = 'en-US';
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      let last = '';
      rec.onresult = (e) => { last = [...e.results].map((r) => r[0].transcript).join(' ').trim(); onText?.(last, false); };
      rec.onerror = (e) => onError?.(e.error || 'error');
      rec.onend = () => { session = null; onState?.('stopped'); onText?.(last, true); };
      session = { stop: () => { try { rec.stop(); } catch { /* sudah berhenti */ } } };
      onState?.('listening');
      try { rec.start(); } catch (err) { session = null; onState?.('stopped'); onError?.(String(err?.message || err)); return false; }
      return true;
    }
    onError?.('unsupported');
    return false;
  }

  function stop() {
    if (session) session.stop();
  }

  return { mode, available, start, stop, isListening: () => !!session };
})();
