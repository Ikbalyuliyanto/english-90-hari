/*
 * Aktivitas inti: Learn, Active Recall, Listening.
 * Setiap aktivitas menerima container + data + opsi { onDone }.
 */
window.E90 = window.E90 || {};
E90.activities = E90.activities || {};

(() => {
  const { esc, $ } = E90.util;
  const store = E90.store;
  const ui = E90.ui;
  const speech = E90.speech;

  // ---------- LEARN ----------
  E90.activities.learn = (el, entries, { hideTranslation = false, doneLabel = '✓ Selesai Learn', onDone } = {}) => {
    el.innerHTML = `
      <div class="tip card">
        <strong>Understand → Listen.</strong> Baca English, dengarkan, buka arti per kata, lalu tutup English (🙈 EN) dan coba ucapkan dari artinya.
        ${ui.pronHelp()}
      </div>
      ${ui.speechNotice()}
      <div class="toolbar-inline">
        <button class="chip-btn" data-bulk="hide-en">🙈 Semua English</button>
        <button class="chip-btn" data-bulk="hide-id">🙈 Semua arti</button>
      </div>
      <div class="card-list">
        ${entries.map(({ s, review }, i) => ui.sentenceCard(s, { index: i + 1, review, hideTranslation })).join('')}
      </div>
      <button class="btn btn-primary btn-block" data-done>${doneLabel}</button>`;

    el.querySelectorAll('[data-bulk]').forEach((btn) => btn.addEventListener('click', () => {
      const cls = btn.dataset.bulk;
      const cards = el.querySelectorAll('.s-card');
      const turnOn = ![...cards].every((c) => c.classList.contains(cls));
      cards.forEach((c) => c.classList.toggle(cls, turnOn));
      btn.classList.toggle('is-on', turnOn);
    }));

    el.querySelector('[data-done]').addEventListener('click', () => {
      entries.forEach(({ s }) => store.touch('sentences', s.id));
      onDone?.();
    });
  };

  // ---------- ACTIVE RECALL ----------
  // direction: 'id-en' (Indonesia → English) atau 'en-id' (English → Indonesia)
  E90.activities.recall = (el, sentences, { direction = 'id-en', onDone } = {}) => {
    let i = 0;
    const tally = { again: 0, hard: 0, good: 0, easy: 0 };

    function render() {
      if (i >= sentences.length) return finish();
      const s = sentences[i];
      const pattern = s.pattern ? E90.content.getPattern(s.pattern) : null;
      const prompt = direction === 'id-en'
        ? `<div class="prompt-label">Ucapkan dalam English:</div><div class="prompt-text">${esc(ui.personalize(s.translation))}</div>`
        : `<div class="prompt-label">Apa artinya?</div><div class="prompt-text en">${esc(ui.personalize(s.english))}</div>
           <button class="chip-btn" data-act="speak" data-text="${esc(s.english)}">🔊 Listen</button>`;

      el.innerHTML = `
        <div class="drill card">
          <div class="drill-head"><span>${i + 1} / ${sentences.length}</span><span class="s-id">${esc(s.id)}</span></div>
          ${ui.progressBar(i, sentences.length)}
          ${prompt}
          ${pattern && direction === 'id-en' ? `<details class="hint"><summary>Hint pola</summary><div class="pattern-formula">${ui.formatFormula(pattern.formula)}</div></details>` : ''}
          <p class="muted small">${direction === 'id-en' ? 'Ucapkan dengan suara dulu, baru buka jawaban.' : 'Jawab dalam hati atau ucapkan, baru buka jawaban.'}</p>
          <button class="btn btn-primary btn-block" data-show>Show Answer</button>
          <div class="answer" hidden>
            <div class="answer-en">${esc(ui.personalize(s.english))}</div>
            <div class="s-pron">(${esc(s.pronunciation)})</div>
            <div class="answer-id">${esc(ui.personalize(s.translation))}</div>
            <div class="btn-row">
              <button class="chip-btn" data-act="speak" data-text="${esc(s.english)}">🔊 Listen</button>
              <button class="chip-btn" data-act="speak-slow" data-text="${esc(s.english)}">🐢 Slow</button>
            </div>
            <details class="s-more"><summary>Arti per kata</summary>${ui.wordsPanel(s)}</details>
            <p class="muted small">Seberapa mudah kamu mengingatnya?</p>
            ${ui.ratingButtons()}
          </div>
        </div>`;

      el.querySelector('[data-show]').addEventListener('click', (e) => {
        e.currentTarget.hidden = true;
        el.querySelector('.answer').hidden = false;
        if (direction === 'id-en') speech.speak(ui.personalize(s.english));
      });
      el.querySelectorAll('[data-rate]').forEach((b) => b.addEventListener('click', () => {
        store.rate('sentences', s.id, b.dataset.rate);
        tally[b.dataset.rate]++;
        i++;
        render();
      }));
    }

    function finish() {
      el.innerHTML = `
        <div class="card done-card">
          <div class="done-emoji">🧠</div>
          <h2>Recall selesai</h2>
          <p class="muted">Again ${tally.again} · Hard ${tally.hard} · Good ${tally.good} · Easy ${tally.easy}</p>
          <p class="small muted">Kalimat "Again" dan "Hard" akan muncul lagi lebih cepat di Review.</p>
          <button class="btn btn-primary btn-block" data-done>Lanjut</button>
        </div>`;
      el.querySelector('[data-done]').addEventListener('click', () => onDone?.(tally));
    }

    if (!sentences.length) {
      el.innerHTML = '<div class="card empty">Belum ada kalimat untuk latihan ini.</div>';
      return;
    }
    render();
  };

  // ---------- LISTENING CHALLENGE ----------
  // Listen → Guess → Show English → Show Meaning → Repeat
  E90.activities.listening = (el, sentences, { rate = false, onDone } = {}) => {
    let i = 0;

    function render() {
      if (i >= sentences.length) return finish();
      const s = sentences[i];
      el.innerHTML = `
        <div class="drill card">
          <div class="drill-head"><span>${i + 1} / ${sentences.length}</span><span>🎧 Listening</span></div>
          ${ui.progressBar(i, sentences.length)}
          ${ui.speechNotice()}
          <ol class="flow">
            <li>Dengarkan (boleh diulang).</li>
            <li>Tebak kalimat & artinya dalam hati.</li>
            <li>Buka English, lalu arti.</li>
            <li>Ucapkan ulang.</li>
          </ol>
          <div class="btn-row big">
            <button class="btn btn-primary" data-play>▶ Play</button>
            <button class="btn" data-play-slow>🐢 Slow</button>
          </div>
          <div class="reveal-en" hidden>
            <div class="answer-en">${esc(ui.personalize(s.english))}</div>
            <div class="s-pron">(${esc(s.pronunciation)})</div>
          </div>
          <div class="reveal-id" hidden>
            <div class="answer-id">${esc(ui.personalize(s.translation))}</div>
            <details class="s-more"><summary>Arti per kata</summary>${ui.wordsPanel(s)}</details>
          </div>
          <div class="btn-row">
            <button class="btn" data-show-en>Show Sentence</button>
            <button class="btn" data-show-id disabled>Show Meaning</button>
          </div>
          <div class="after" hidden>
            <p class="muted small">🔁 Putar lagi dan ucapkan ulang bersamaan dengan audio.</p>
            ${rate
              ? `<div class="btn-row"><button class="btn" data-result="again">✗ Belum paham</button><button class="btn btn-primary" data-result="good">✓ Paham</button></div>`
              : '<button class="btn btn-primary btn-block" data-next>Next →</button>'}
          </div>
        </div>`;

      const play = (slow) => {
        if (!speech.speak(ui.personalize(s.english), { slow })) ui.toast('Audio tidak didukung. Buka kalimat untuk membaca.');
      };
      el.querySelector('[data-play]').addEventListener('click', () => play(false));
      el.querySelector('[data-play-slow]').addEventListener('click', () => play(true));
      el.querySelector('[data-show-en]').addEventListener('click', (e) => {
        el.querySelector('.reveal-en').hidden = false;
        e.currentTarget.disabled = true;
        el.querySelector('[data-show-id]').disabled = false;
      });
      el.querySelector('[data-show-id]').addEventListener('click', (e) => {
        el.querySelector('.reveal-id').hidden = false;
        el.querySelector('.after').hidden = false;
        e.currentTarget.disabled = true;
      });
      el.querySelector('[data-next]')?.addEventListener('click', () => { i++; render(); });
      el.querySelectorAll('[data-result]').forEach((b) => b.addEventListener('click', () => {
        store.rate('sentences', s.id, b.dataset.result);
        i++;
        render();
      }));
      // Listening dimulai dengan audio, sebelum melihat tulisan.
      setTimeout(() => play(false), 250);
    }

    function finish() {
      speech.stop();
      el.innerHTML = `
        <div class="card done-card">
          <div class="done-emoji">🎧</div>
          <h2>Listening selesai</h2>
          <p class="muted">${sentences.length} kalimat didengarkan.</p>
          <button class="btn btn-primary btn-block" data-done>Lanjut</button>
        </div>`;
      el.querySelector('[data-done]').addEventListener('click', () => onDone?.());
    }

    if (!sentences.length) {
      el.innerHTML = '<div class="card empty">Belum ada kalimat untuk latihan ini.</div>';
      return;
    }
    render();
  };
})();
