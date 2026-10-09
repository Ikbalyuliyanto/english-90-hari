window.E90 = window.E90 || {};

E90.ui = (() => {
  const { esc, $ } = E90.util;
  const store = E90.store;
  const content = E90.content;

  // "{name}" diganti nama user (Settings), atau "..." jika belum diisi.
  function personalize(text) {
    const name = store.settings().name?.trim();
    return String(text).replace(/\{name\}/g, name || '...');
  }

  const dayLabel = (day) => `Day ${String(day).padStart(2, '0')}`;

  function statusBadge(id) {
    const st = store.statusOf('sentences', id);
    if (st === 'mastered') return '<span class="badge badge-ok">⭐ Mastered</span>';
    if (st === 'learning') return '<span class="badge">Learning</span>';
    return '';
  }

  function wordsPanel(s) {
    const words = s.words
      .map(([w, m]) => `<li><b>${esc(personalize(w))}</b> <span>= ${esc(m)}</span></li>`)
      .join('');
    const phrases = s.phrases.length
      ? `<div class="phrase-box"><strong>Frasa</strong>${s.phrases
          .map(([p, m]) => `<div><b>${esc(p)}</b> = ${esc(m)}</div>`)
          .join('')}</div>`
      : '';
    return `<ul class="word-list">${words}</ul>${phrases}`;
  }

  function patternBlock(pattern, { open = false } = {}) {
    if (!pattern) return '';
    const examples = pattern.examples
      .map((ex) => `<li><button class="mini-btn" data-act="speak" data-text="${esc(ex)}" aria-label="Dengarkan">🔊</button><span>${esc(ex)}</span></li>`)
      .join('');
    return `<div class="pattern ${open ? '' : 'pattern-compact'}">
      <div class="pattern-formula">${formatFormula(pattern.formula)}</div>
      <div class="pattern-meaning">${esc(pattern.meaning)}</div>
      <ul class="pattern-examples">${examples}</ul>
      ${pattern.note ? `<div class="pattern-note">💡 ${esc(pattern.note)}</div>` : ''}
    </div>`;
  }

  // Menyorot bagian slot (huruf kapital seperti KATA KERJA, BENDA) dalam formula.
  function formatFormula(formula) {
    // Slot = kata kapital 2+ huruf (boleh beberapa kata); tanda hubung setelahnya (mis. "-ing") tidak ikut disorot.
    return esc(formula).replace(/\b[A-Z]{2,}(?:\s[A-Z]{2,})*\b/g, (m) => `<span class="slot">${m}</span>`);
  }

  /*
   * Sentence card. opts:
   *  - index: nomor urut
   *  - review: tandai sebagai kalimat review
   *  - hideTranslation: default sembunyikan arti (Phase 4)
   */
  function sentenceCard(s, opts = {}) {
    const pattern = s.pattern ? content.getPattern(s.pattern) : null;
    const mastered = store.statusOf('sentences', s.id) === 'mastered';
    return `<article class="s-card ${opts.hideTranslation ? 'hide-id' : ''}" id="card-${esc(s.id)}" data-sid="${esc(s.id)}">
      <div class="s-top">
        <span class="s-num">${opts.index ?? ''}</span>
        <span class="s-id">${esc(s.id)}${opts.review ? ' · review' : ''}</span>
        ${statusBadge(s.id)}
      </div>
      <div class="s-body">
        <div class="s-en" data-mask="Tap 🙈 EN untuk menampilkan">${esc(personalize(s.english))}</div>
        <div class="s-pron">(${esc(s.pronunciation)})</div>
        <div class="s-id-text" data-mask="Arti disembunyikan">${esc(personalize(s.translation))}</div>
      </div>
      <div class="s-actions">
        <button class="chip-btn" data-act="speak" data-text="${esc(s.english)}">🔊 Listen</button>
        <button class="chip-btn" data-act="speak-slow" data-text="${esc(s.english)}">🐢 Slow</button>
        <button class="chip-btn" data-act="toggle-en" aria-pressed="false">🙈 EN</button>
        <button class="chip-btn" data-act="toggle-id" aria-pressed="${opts.hideTranslation ? 'true' : 'false'}">🙈 ID</button>
        <button class="chip-btn ${mastered ? 'is-on' : ''}" data-act="master" aria-pressed="${mastered}">⭐</button>
      </div>
      <details class="s-more">
        <summary>Arti per kata${pattern ? ' & pola' : ''}</summary>
        ${wordsPanel(s)}
        ${pattern ? `<div class="s-pattern-label">Pola</div>${patternBlock(pattern)}` : ''}
        <div class="s-foot">
          <a href="#/day/${s.day}" class="link-muted">${dayLabel(s.day)} · ${esc(content.titleOf(s.day))}</a>
          <button class="link-btn" data-act="reset">↺ Reset progress</button>
        </div>
      </details>
    </article>`;
  }

  const ratingButtons = () => `<div class="rating">
      <button class="rate rate-again" data-rate="again">Again<small>lupa</small></button>
      <button class="rate rate-hard" data-rate="hard">Hard<small>susah</small></button>
      <button class="rate rate-good" data-rate="good">Good<small>ingat</small></button>
      <button class="rate rate-easy" data-rate="easy">Easy<small>mudah</small></button>
    </div>`;

  function pageHead({ title, sub = '', back = '#/', eyebrow = '' }) {
    return `<header class="page-head">
      <a class="back-btn" href="${back}" aria-label="Kembali">←</a>
      <div class="page-head-text">
        ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ''}
        <h1>${esc(title)}</h1>
        ${sub ? `<p>${esc(sub)}</p>` : ''}
      </div>
    </header>`;
  }

  function progressBar(done, total) {
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `<div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;
  }

  let toastTimer;
  function toast(message) {
    let el = $('#toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  // Konvensi penulisan cara baca. Sumber utama pronunciation tetap audio English.
  const PRON_RULES = [
    ['-', 'pemisah suku kata', 'de-ve-lo-per'],
    ['ai', 'bunyi "I", "my"', 'ai, mai, laik'],
    ['ei', 'bunyi "a" di name/day', 'neim, dei'],
    ['ou', 'bunyi "o" di go/phone', 'gou, foun'],
    ['au', 'bunyi "ow"/"ou"', 'nau, aut'],
    ['e', 'bunyi lemah (pepet) atau "a" pendek di cat/have', 'e (a), hev'],
    ['th', 'lidah di antara gigi, tanpa suara', 'thingk, thengk'],
    ['d', 'untuk "th" bersuara di the/this/that', 'de, dis, det'],
    ['sh / ch / j', 'bunyi sh, ch, j English', 'shur, lanch, me-ne-jer'],
    ['zh', 'bunyi "s" di pleasure', 'ple-zher'],
    ['-ed', 'dibaca t / d / id', 'werkt, steid, star-tid'],
    ['de → di', '"the" sebelum bunyi vokal', 'di o-fis']
  ];

  const pronHelp = () => `<details class="pron-help">
      <summary>Konvensi cara baca</summary>
      <p class="small">Cara baca hanya alat bantu pemula. <b>Audio 🔊 adalah referensi utama</b>, jadi selalu dengarkan dan tirukan audionya.</p>
      <table>
        ${PRON_RULES.map(([k, m, ex]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(m)}<br><span class="s-pron">${esc(ex)}</span></td></tr>`).join('')}
      </table>
    </details>`;

  const speechNotice = () =>
    E90.speech.supported ? '' : '<div class="notice">🔇 Browser ini tidak mendukung audio otomatis. Latihan tetap bisa dilakukan dengan membaca cara baca.</div>';

  // Aksi kartu yang berlaku di seluruh halaman (event delegation).
  function bindGlobalActions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const act = btn.dataset.act;
      const card = btn.closest('[data-sid]');
      const id = card?.dataset.sid;

      if (act === 'speak' || act === 'speak-slow') {
        const ok = E90.speech.speak(personalize(btn.dataset.text), { slow: act === 'speak-slow' });
        if (!ok) toast('Audio tidak didukung di browser ini.');
      } else if (act === 'toggle-en' && card) {
        const on = card.classList.toggle('hide-en');
        btn.setAttribute('aria-pressed', on);
      } else if (act === 'toggle-id' && card) {
        const on = card.classList.toggle('hide-id');
        btn.setAttribute('aria-pressed', on);
      } else if (act === 'master' && id) {
        const next = store.statusOf('sentences', id) !== 'mastered';
        store.setMastered('sentences', id, next);
        btn.classList.toggle('is-on', next);
        btn.setAttribute('aria-pressed', next);
        const top = card.querySelector('.s-top');
        top.querySelector('.badge')?.remove();
        top.insertAdjacentHTML('beforeend', statusBadge(id));
        toast(next ? '⭐ Ditandai mastered' : 'Mastered dibatalkan');
      } else if (act === 'reset' && id) {
        if (!confirm(`Reset progress ${id}? Status kembali ke "new".`)) return;
        store.reset('sentences', id);
        card.querySelector('.s-top .badge')?.remove();
        card.querySelector('[data-act="master"]')?.classList.remove('is-on');
        toast('Progress kalimat di-reset');
      }
    });
  }

  return {
    personalize, dayLabel, sentenceCard, wordsPanel, patternBlock, formatFormula,
    ratingButtons, pageHead, progressBar, toast, speechNotice, pronHelp, bindGlobalActions
  };
})();
