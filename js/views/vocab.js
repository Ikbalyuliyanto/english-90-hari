window.E90 = window.E90 || {};
E90.views = E90.views || {};

(() => {
  const { esc } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;

  const PRACTICE = [
    { key: 'en-id', icon: '🇬🇧→🇮🇩', title: 'English → Indonesia', pool: 'seen', quiz: 'en-id' },
    { key: 'id-en', icon: '🇮🇩→🇬🇧', title: 'Indonesia → English', pool: 'seen', quiz: 'id-en' },
    { key: 'blank', icon: '✍️', title: 'Fill in the blank', pool: 'seen', quiz: 'blank' },
    { key: 'weak', icon: '🩹', title: 'Weak vocabulary', pool: 'weak', quiz: 'en-id' },
    { key: 'mastered', icon: '⭐', title: 'Mastered vocabulary', pool: 'mastered', quiz: 'id-en' }
  ];

  const LIMIT = 120;
  let count = 10;
  let query = '';
  let showAll = false;

  const statusBadge = (key) => {
    const st = store.statusOf('vocab', key);
    if (st === 'mastered') return '<span class="badge badge-ok">⭐ mastered</span>';
    if (st === 'learning') return '<span class="badge">learning</span>';
    return '<span class="badge badge-muted">new</span>';
  };

  function entryRow(entry) {
    const senses = entry.senses.map((sense) => {
      const s = content.getSentence(sense.ids[0]);
      return `<div class="sense">
        <div><b>${esc(sense.form)}</b> = ${esc(sense.meaning)}</div>
        ${s ? `<a class="sense-example" href="#/day/${s.day}/learn">${esc(ui.personalize(s.english))} <span class="muted">· ${esc(s.id)}</span></a>` : ''}
      </div>`;
    }).join('');
    const mastered = store.statusOf('vocab', entry.key) === 'mastered';
    return `<details class="vocab-row" data-key="${esc(entry.key)}">
      <summary><span class="vocab-word">${esc(entry.word)}</span>${statusBadge(entry.key)}<span class="muted small">${entry.senses.length} arti</span></summary>
      <div class="vocab-detail">
        ${senses}
        <div class="btn-row">
          <button class="chip-btn" data-act="speak" data-text="${esc(entry.word)}">🔊</button>
          <button class="chip-btn ${mastered ? 'is-on' : ''}" data-vocab="master">⭐ ${mastered ? 'Mastered' : 'Mark as Mastered'}</button>
          <button class="chip-btn" data-vocab="reset">↺ Reset</button>
        </div>
      </div>
    </details>`;
  }

  function bankList() {
    const learned = new Set(Object.keys(store.raw().sentences));
    const q = query.trim().toLowerCase();
    const all = [...content.vocab().values()]
      .filter((e) => showAll || e.ids.some((id) => learned.has(id)))
      .filter((e) => !q || e.key.includes(q) || e.senses.some((s) => s.meaning.toLowerCase().includes(q)))
      .sort((a, b) => a.key.localeCompare(b.key));
    const shown = all.slice(0, LIMIT);
    return `
      <p class="muted small">${all.length} kata${all.length > LIMIT ? ` · menampilkan ${LIMIT} pertama, gunakan pencarian` : ''}</p>
      ${shown.length ? shown.map(entryRow).join('') : `<div class="card empty">${showAll ? 'Tidak ditemukan.' : 'Belum ada kosakata. Selesaikan Learn di Day 1 agar kata masuk ke bank.'}</div>`}`;
  }

  function hub(root) {
    const bank = content.vocab();
    const learned = new Set(Object.keys(store.raw().sentences));
    const seen = [...bank.values()].filter((e) => e.ids.some((id) => learned.has(id))).length;
    const practiced = store.ids('vocab', () => true).length;
    const mastered = store.ids('vocab', (r) => r.mastered || r.box >= store.MASTERED_BOX).length;
    const weak = store.ids('vocab', store.isWeak).length;

    root.innerHTML = `
      ${ui.pageHead({ title: 'Vocabulary', sub: 'Otomatis dari kalimat yang sudah kamu pelajari, lengkap dengan konteks.', back: '#/' })}
      <section class="stats">
        <div class="stat"><b>${seen}</b><span>Seen</span></div>
        <div class="stat"><b>${practiced}</b><span>Active</span></div>
        <div class="stat"><b>${mastered}</b><span>Mastered</span></div>
        <div class="stat"><b>${weak}</b><span>Weak</span></div>
      </section>

      <div class="card">
        <div class="small muted">Jumlah kata per sesi</div>
        <div class="segmented">
          ${[5, 10, 20].map((n) => `<button class="${n === count ? 'is-on' : ''}" data-count="${n}">${n}</button>`).join('')}
        </div>
        <div class="practice-grid">
          ${PRACTICE.map((p) => `<a class="btn" href="#/vocab/run?type=${p.key}&n=${count}">${p.icon} ${p.title}</a>`).join('')}
        </div>
      </div>

      <h2 class="section-title">Vocabulary Bank</h2>
      <div class="card search-card">
        <input id="vocabSearch" type="search" placeholder="Cari kata atau arti..." value="${esc(query)}" autocomplete="off">
        <label class="confirm small"><input type="checkbox" id="vocabAll" ${showAll ? 'checked' : ''}> Tampilkan juga kata dari materi yang belum dipelajari</label>
      </div>
      <div id="bank">${bankList()}</div>`;

    root.querySelectorAll('[data-count]').forEach((b) => b.addEventListener('click', () => { count = Number(b.dataset.count); hub(root); }));
    const bankEl = root.querySelector('#bank');
    root.querySelector('#vocabSearch').addEventListener('input', (e) => { query = e.target.value; bankEl.innerHTML = bankList(); });
    root.querySelector('#vocabAll').addEventListener('change', (e) => { showAll = e.target.checked; bankEl.innerHTML = bankList(); });
    bankEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-vocab]');
      if (!btn) return;
      const row = btn.closest('[data-key]');
      const key = row.dataset.key;
      if (btn.dataset.vocab === 'master') {
        store.setMastered('vocab', key, store.statusOf('vocab', key) !== 'mastered');
      } else if (confirm(`Reset progress kata "${key}"?`)) {
        store.reset('vocab', key);
      }
      const entry = content.vocab().get(key);
      row.outerHTML = entryRow(entry).replace('<details ', '<details open ');
    });
  }

  function run(root, type, n) {
    const meta = PRACTICE.find((p) => p.key === type) || PRACTICE[0];
    const items = E90.vocabPool({ type: meta.pool, n });
    root.innerHTML = `${ui.pageHead({ title: `${meta.icon} ${meta.title}`, sub: `${items.length} kata`, back: '#/vocab' })}<div id="activity"></div>`;
    E90.activities.vocabQuiz(root.querySelector('#activity'), items, {
      type: meta.quiz,
      onDone: () => {
        store.logActivity('vocab');
        ui.toast('✓ Latihan vocabulary selesai');
        location.hash = '#/vocab';
      }
    });
  }

  E90.views.vocab = (root, sub, params) => {
    if (sub === 'run') return run(root, params.type, Math.min(Number(params.n) || count, 50));
    return hub(root);
  };
})();
