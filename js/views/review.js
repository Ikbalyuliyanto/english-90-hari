window.E90 = window.E90 || {};
E90.views = E90.views || {};

(() => {
  const { shuffle } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;
  const A = E90.activities;

  const TYPES = [
    { key: 'random', icon: '🎲', title: 'Random Review', desc: 'Campuran kalimat yang sudah dipelajari, prioritas yang jatuh tempo.' },
    { key: 'due', icon: '⏰', title: 'Reviews Due', desc: 'Kalimat yang dijadwalkan SRS untuk hari ini.' },
    { key: 'weak', icon: '🩹', title: 'Weak Sentences', desc: 'Pernah "Again"/"Hard" atau sering lupa.', list: true },
    { key: 'mastered', icon: '⭐', title: 'Mastered Sentences', desc: 'Uji ulang kalimat yang sudah dikuasai.', list: true },
    { key: 'listening', icon: '🎧', title: 'Listening Review', desc: 'Dengar dulu, tebak, lalu cek.' },
    { key: 'id-en', icon: '🇮🇩→🇬🇧', title: 'Indonesia → English', desc: 'Lihat arti, ucapkan English-nya.' },
    { key: 'en-id', icon: '🇬🇧→🇮🇩', title: 'English → Indonesia', desc: 'Lihat English, pahami artinya.' }
  ];

  let count = 10;
  try { count = Number(localStorage.getItem('english90:review-count')) || 10; } catch { /* abaikan */ }

  function countFor(type) {
    if (type === 'due') return store.ids('sentences', store.isDue).length;
    if (type === 'weak') return store.ids('sentences', store.isWeak).length;
    if (type === 'mastered') return store.ids('sentences', (r) => r.mastered || r.box >= store.MASTERED_BOX).length;
    return Object.keys(store.raw().sentences).length;
  }

  function pool(type, n) {
    const records = store.raw().sentences;
    const byIds = (ids) => ids.map(content.getSentence).filter(Boolean);
    if (type === 'due') return shuffle(byIds(store.ids('sentences', store.isDue))).slice(0, n);
    if (type === 'weak') return shuffle(byIds(store.ids('sentences', store.isWeak))).slice(0, n);
    if (type === 'mastered') return shuffle(byIds(store.ids('sentences', (r) => r.mastered || r.box >= store.MASTERED_BOX))).slice(0, n);

    // random / listening / id-en / en-id
    const learned = byIds(Object.keys(records));
    const score = (s) => {
      const r = records[s.id];
      return store.isDue(r) ? 0 : 1 + r.box;
    };
    let list = shuffle(learned).sort((a, b) => score(a) - score(b)).slice(0, n);
    if (list.length < n) {
      // Belum banyak yang dipelajari: lengkapi dari materi sampai Day saat ini.
      const upTo = E90.views.currentDay();
      const extra = shuffle(content.sentencesUpTo(upTo)).filter((s) => !list.includes(s));
      list = list.concat(extra).slice(0, n);
    }
    return shuffle(list);
  }

  function hub(root) {
    root.innerHTML = `
      ${ui.pageHead({ title: 'Review', sub: 'Buat pola yang sudah dipelajari jadi otomatis.', back: '#/' })}
      <div class="card">
        <div class="small muted">Jumlah kalimat per sesi</div>
        <div class="segmented" role="radiogroup">
          ${[5, 10, 20].map((n) => `<button role="radio" aria-checked="${n === count}" class="${n === count ? 'is-on' : ''}" data-count="${n}">${n}</button>`).join('')}
        </div>
      </div>
      <div class="step-list">
        ${TYPES.map((t) => `
          <div class="step review-type">
            <a class="review-main" href="#/review/run?type=${t.key}&n=${count}" data-type="${t.key}">
              <span class="step-icon">${t.icon}</span>
              <span class="step-text"><b>${t.title}</b><small>${t.desc}</small></span>
              <span class="badge">${countFor(t.key)}</span>
            </a>
            ${t.list ? `<a class="link-btn" href="#/review/list?type=${t.key}">Lihat daftar</a>` : ''}
          </div>`).join('')}
      </div>`;

    root.querySelectorAll('[data-count]').forEach((b) => b.addEventListener('click', () => {
      count = Number(b.dataset.count);
      try { localStorage.setItem('english90:review-count', String(count)); } catch { /* abaikan */ }
      hub(root);
    }));
  }

  function run(root, type, n) {
    const meta = TYPES.find((t) => t.key === type) || TYPES[0];
    const list = pool(meta.key, n);
    root.innerHTML = `${ui.pageHead({ title: `${meta.icon} ${meta.title}`, sub: `${list.length} kalimat`, back: '#/review' })}<div id="activity"></div>`;
    const el = root.querySelector('#activity');

    if (!list.length) {
      el.innerHTML = `<div class="card empty">Belum ada kalimat untuk kategori ini.<br><br><a class="btn btn-primary" href="#/review">Kembali</a></div>`;
      return;
    }

    const onDone = () => {
      store.logActivity('review');
      ui.toast('✓ Review selesai');
      location.hash = '#/review';
    };

    if (meta.key === 'listening') return A.listening(el, list, { rate: true, onDone });
    return A.recall(el, list, { direction: meta.key === 'en-id' ? 'en-id' : 'id-en', onDone });
  }

  function list(root, type) {
    const meta = TYPES.find((t) => t.key === type) || TYPES[2];
    const filter = type === 'mastered' ? (r) => r.mastered || r.box >= store.MASTERED_BOX : store.isWeak;
    const sentences = store.ids('sentences', filter).map(content.getSentence).filter(Boolean)
      .sort((a, b) => a.id.localeCompare(b.id));
    root.innerHTML = `
      ${ui.pageHead({ title: `${meta.icon} ${meta.title}`, sub: `${sentences.length} kalimat`, back: '#/review' })}
      ${sentences.length
        ? `<div class="card-list">${sentences.map((s, i) => ui.sentenceCard(s, { index: i + 1 })).join('')}</div>
           <p class="muted small center">Salah menandai? Buka "Arti per kata" lalu tekan ↺ Reset progress.</p>`
        : '<div class="card empty">Belum ada.</div>'}`;
  }

  E90.views.review = (root, sub, params) => {
    if (sub === 'run') return run(root, params.type, Math.min(Number(params.n) || count, 50));
    if (sub === 'list') return list(root, params.type);
    return hub(root);
  };
})();
