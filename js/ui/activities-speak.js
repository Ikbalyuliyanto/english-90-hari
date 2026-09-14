/*
 * Aktivitas berbicara: Shadowing, Sentence Variation (pattern), Speaking Challenge, 3-2-1 Speaking.
 */
window.E90 = window.E90 || {};
E90.activities = E90.activities || {};

(() => {
  const { esc } = E90.util;
  const store = E90.store;
  const ui = E90.ui;
  const speech = E90.speech;

  const doneButton = (label, disabled) =>
    `<button class="btn btn-primary btn-block" data-done ${disabled ? 'disabled' : ''}>${label}</button>`;

  // ---------- SHADOWING ----------
  E90.activities.shadowing = (el, sentences, { dayNo, onDone } = {}) => {
    const saved = (dayNo && store.raw().days[dayNo]?.shadowCount) || {};
    const counts = Object.fromEntries(sentences.map((s) => [s.id, saved[s.id] || 0]));
    const allDone = () => sentences.every((s) => counts[s.id] >= 3);

    el.innerHTML = `
      <div class="tip card">
        <strong>Shadowing:</strong>
        <ol class="flow">
          <li>Dengarkan.</li><li>Pause.</li><li>Ucapkan ulang dengan suara.</li>
          <li>Tirukan rhythm dan pronunciation.</li><li>Ulangi 3 kali.</li>
        </ol>
        ${ui.pronHelp()}
      </div>
      ${ui.speechNotice()}
      <div class="card-list">
        ${sentences.map((s) => `
          <article class="s-card shadow-card" data-sid="${esc(s.id)}">
            <div class="s-en">${esc(ui.personalize(s.english))}</div>
            <div class="s-pron">(${esc(s.pronunciation)})</div>
            <div class="s-id-text">${esc(ui.personalize(s.translation))}</div>
            <div class="s-actions">
              <button class="chip-btn" data-act="speak" data-text="${esc(s.english)}">🔊 Listen</button>
              <button class="chip-btn" data-act="speak-slow" data-text="${esc(s.english)}">🐢 Slow</button>
            </div>
            <div class="repeat-row">
              ${[1, 2, 3].map((n) => `<button class="repeat ${counts[s.id] >= n ? 'done' : ''}" data-rep="${n}">Repeat ${n}</button>`).join('')}
            </div>
          </article>`).join('')}
      </div>
      ${doneButton('✓ Selesai Shadowing', !allDone())}
      <p class="muted small center">Tombol aktif setelah semua kalimat mencapai Repeat 3.</p>`;

    el.querySelectorAll('.shadow-card').forEach((card) => {
      const id = card.dataset.sid;
      card.querySelectorAll('[data-rep]').forEach((b) => b.addEventListener('click', () => {
        const n = Number(b.dataset.rep);
        counts[id] = counts[id] >= n ? n - 1 : n;
        card.querySelectorAll('[data-rep]').forEach((x) => x.classList.toggle('done', counts[id] >= Number(x.dataset.rep)));
        if (dayNo) store.setDayData(dayNo, 'shadowCount', { ...counts });
        el.querySelector('[data-done]').disabled = !allDone();
      }));
    });
    el.querySelector('[data-done]').addEventListener('click', () => onDone?.());
  };

  // ---------- SENTENCE VARIATION ----------
  E90.activities.patterns = (el, patterns, { onDone } = {}) => {
    el.innerHTML = `
      <div class="tip card">
        <strong>Modify.</strong> Satu pola bisa menghasilkan puluhan kalimat. Dengarkan contoh, lalu buat minimal 3 kalimat sendiri tentang hidup atau pekerjaanmu dan ucapkan dengan suara.
      </div>
      <div class="card-list">
        ${patterns.map((p) => `
          <section class="card pattern-card">
            ${ui.patternBlock(p, { open: true })}
            <label class="own-label">Kalimatmu sendiri (opsional, tidak disimpan):</label>
            <textarea class="own-input" rows="3" placeholder="Contoh: ${esc(p.examples[0])}"></textarea>
          </section>`).join('')}
      </div>
      <label class="confirm"><input type="checkbox" data-confirm> Saya sudah membuat & mengucapkan minimal 3 kalimat sendiri</label>
      ${doneButton('✓ Selesai Variation', true)}`;

    const btn = el.querySelector('[data-done]');
    el.querySelector('[data-confirm]').addEventListener('change', (e) => { btn.disabled = !e.target.checked; });
    btn.addEventListener('click', () => onDone?.());
  };

  // ---------- SPEAKING CHALLENGE ----------
  E90.activities.speaking = (el, questions, { dayNo, hideTranslation = false, onDone } = {}) => {
    const saved = (dayNo && store.raw().days[dayNo]?.spoken) || {};
    const spoken = questions.map((_, i) => !!saved[i]);

    el.innerHTML = `
      <div class="tip card">
        <strong>Respond.</strong> Jawab dengan suara, tanpa membaca script. Usahakan 2–3 kalimat.
        <div class="warn">Don't memorize the example. Answer with your own situation.</div>
      </div>
      ${questions.map((q, i) => `
        <section class="card speak-card">
          <div class="speak-q">
            <span class="q-no">Q${i + 1}</span>
            <div>
              <div class="q-en">${esc(q.q)}</div>
              ${q.qId ? `<details class="q-id" ${hideTranslation ? '' : 'open'}><summary>Arti pertanyaan</summary>${esc(q.qId)}</details>` : ''}
            </div>
            <button class="mini-btn" data-act="speak" data-text="${esc(q.q)}" aria-label="Dengarkan pertanyaan">🔊</button>
          </div>
          <div class="hint-line">💬 Hint: <b>${esc(q.hint)}</b></div>
          <details class="example">
            <summary>Show Example</summary>
            <p class="example-text">${esc(q.example)}</p>
            <p class="warn small">Hanya referensi. Jawab sesuai kondisimu sendiri.</p>
          </details>
          <label class="confirm"><input type="checkbox" data-spoken="${i}" ${spoken[i] ? 'checked' : ''}> Sudah saya jawab dengan suara</label>
        </section>`).join('')}
      ${doneButton('✓ Selesai Speaking', !spoken.every(Boolean))}`;

    const btn = el.querySelector('[data-done]');
    el.querySelectorAll('[data-spoken]').forEach((cb) => cb.addEventListener('change', () => {
      spoken[Number(cb.dataset.spoken)] = cb.checked;
      if (dayNo) store.setDayData(dayNo, 'spoken', { ...spoken });
      btn.disabled = !spoken.every(Boolean);
    }));
    btn.addEventListener('click', () => onDone?.());
  };

  // ---------- 3-2-1 SPEAKING ----------
  E90.activities.talk321 = (el, topic, { onDone } = {}) => {
    let timer = null;
    let remaining = 0;
    const finished = new Set();

    el.innerHTML = `
      <div class="tip card">
        <strong>3-2-1 Speaking.</strong> Jelaskan topik yang sama selama 3 menit, lalu 2 menit, lalu 1 menit.
        Setiap putaran, sampaikan inti yang sama dengan lebih ringkas dan lancar.
      </div>
      <section class="card timer-card">
        <div class="eyebrow">Topic</div>
        <div class="topic">${esc(topic)}</div>
        <button class="chip-btn" data-act="speak" data-text="${esc(topic)}">🔊 Listen</button>
        <div class="timer" aria-live="polite">0:00</div>
        <div class="btn-row big">
          ${[3, 2, 1].map((m) => `<button class="btn" data-min="${m}">${m} Minute${m > 1 ? 's' : ''}</button>`).join('')}
        </div>
        <button class="btn btn-block" data-stop disabled>■ Stop</button>
      </section>
      ${doneButton('✓ Selesai 3-2-1', true)}`;

    const display = el.querySelector('.timer');
    const stopBtn = el.querySelector('[data-stop]');
    const fmt = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

    function stop() {
      clearInterval(timer);
      timer = null;
      stopBtn.disabled = true;
      display.classList.remove('running');
    }

    el.querySelectorAll('[data-min]').forEach((b) => b.addEventListener('click', () => {
      stop();
      const minutes = Number(b.dataset.min);
      remaining = minutes * 60;
      display.textContent = fmt(remaining);
      display.classList.add('running');
      stopBtn.disabled = false;
      timer = setInterval(() => {
        remaining--;
        display.textContent = fmt(Math.max(remaining, 0));
        if (remaining <= 0) {
          stop();
          finished.add(minutes);
          b.classList.add('is-on');
          display.textContent = "Time's up!";
          try { navigator.vibrate?.(300); } catch { /* tidak didukung */ }
          el.querySelector('[data-done]').disabled = finished.size < 3;
        }
      }, 1000);
    }));
    stopBtn.addEventListener('click', stop);
    el.querySelector('[data-done]').addEventListener('click', () => { stop(); onDone?.(); });

    // Hentikan timer jika user pindah halaman.
    window.addEventListener('hashchange', stop, { once: true });
  };
})();
