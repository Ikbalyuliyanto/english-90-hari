window.E90 = window.E90 || {};
E90.views = E90.views || {};

(() => {
  const { esc } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;

  // ---------- SEARCH ----------
  let lastQuery = '';

  function results(q) {
    if (q.trim().length < 2) return '<p class="muted small">Ketik minimal 2 huruf. Contoh: database, meeting, bug, working, deadline.</p>';
    const hits = content.search(q);
    if (!hits.length) return '<div class="card empty">Tidak ditemukan di materi yang tersedia.</div>';
    const needle = q.trim().toLowerCase();
    const mark = (text) => {
      const safe = esc(text);
      const i = text.toLowerCase().indexOf(needle);
      if (i < 0) return safe;
      return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + needle.length)) + '</mark>' + esc(text.slice(i + needle.length));
    };
    return `<p class="muted small">${hits.length} hasil</p>
      <div class="result-list">${hits.map((s) => `
        <a class="result card" href="#/day/${s.day}/learn?focus=${encodeURIComponent(s.id)}">
          <div class="result-en">${mark(ui.personalize(s.english))}</div>
          <div class="result-id">${mark(ui.personalize(s.translation))}</div>
          <div class="result-meta">${ui.dayLabel(s.day)} · ${esc(content.titleOf(s.day))}</div>
        </a>`).join('')}</div>`;
  }

  E90.views.search = (root, params) => {
    if (params.q !== undefined) lastQuery = params.q;
    root.innerHTML = `
      ${ui.pageHead({ title: 'Search', sub: 'Cari kalimat, arti, kata, atau topik.', back: '#/' })}
      <div class="card search-card">
        <input id="searchInput" type="search" placeholder="database, meeting, bug, working..." value="${esc(lastQuery)}" autocomplete="off" enterkeyhint="search">
      </div>
      <div id="results">${results(lastQuery)}</div>`;
    const input = root.querySelector('#searchInput');
    const out = root.querySelector('#results');
    input.addEventListener('input', () => {
      lastQuery = input.value;
      out.innerHTML = results(lastQuery);
      history.replaceState(null, '', `#/search?q=${encodeURIComponent(lastQuery)}`);
    });
    if (!lastQuery) input.focus({ preventScroll: true });
  };

  // ---------- SETTINGS ----------
  E90.views.settings = (root) => {
    const s = store.settings();
    root.innerHTML = `
      ${ui.pageHead({ title: 'Settings', back: '#/' })}
      <section class="card form">
        <label for="nameInput"><b>Nama kamu</b><small>Dipakai untuk kalimat seperti "My name is ..."</small></label>
        <input id="nameInput" type="text" maxlength="40" value="${esc(s.name || '')}" placeholder="contoh: Rina" autocomplete="given-name">

        <label><b>Tema</b></label>
        <div class="segmented" data-setting="theme">
          ${[['', 'Sistem'], ['light', 'Terang'], ['dark', 'Gelap']].map(([v, l]) => `<button class="${(s.theme || '') === v ? 'is-on' : ''}" data-value="${v}">${l}</button>`).join('')}
        </div>

        <label><b>Ukuran teks</b></label>
        <div class="segmented" data-setting="font">
          ${['A-', 'A', 'A+', 'A++'].map((l, i) => `<button class="${Number(s.font) === i ? 'is-on' : ''}" data-value="${i}">${l}</button>`).join('')}
        </div>

        <label><b>Audio</b></label>
        <p class="small muted">${E90.speech.supported ? '✓ Browser mendukung audio (Web Speech API).' : '✗ Browser ini tidak mendukung audio otomatis.'}</p>
        <button class="btn" data-act="speak" data-text="Could you explain that again?">🔊 Tes audio</button>
      </section>

      <section class="card form">
        <b>Backup progress</b>
        <p class="small muted">Progress hanya tersimpan di browser ini. Salin kode backup untuk dipindahkan ke HP/browser lain.</p>
        <button class="btn" id="exportBtn">Salin kode backup</button>
        <textarea id="backupText" rows="3" placeholder="Tempel kode backup di sini untuk restore"></textarea>
        <button class="btn" id="importBtn">Restore dari kode</button>
        <hr>
        <button class="btn btn-danger" id="resetBtn">Reset semua progress</button>
      </section>

      <p class="muted small center">English 120 Days · static app, tanpa backend. Data lama (Day 1–15 versi pertama) sudah dimigrasikan.</p>`;

    root.querySelector('#nameInput').addEventListener('change', (e) => {
      store.setSetting('name', e.target.value.trim());
      ui.toast('✓ Nama disimpan');
    });
    root.querySelectorAll('[data-setting]').forEach((group) => group.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-value]');
      if (!btn) return;
      const key = group.dataset.setting;
      store.setSetting(key, key === 'font' ? Number(btn.dataset.value) : btn.dataset.value);
      E90.applySettings();
      E90.views.settings(root);
    }));

    const text = root.querySelector('#backupText');
    root.querySelector('#exportBtn').addEventListener('click', async () => {
      text.value = JSON.stringify(store.raw());
      text.select();
      try {
        await navigator.clipboard.writeText(text.value);
        ui.toast('✓ Kode backup disalin');
      } catch {
        ui.toast('Salin manual teks di kotak di bawah');
      }
    });
    root.querySelector('#importBtn').addEventListener('click', () => {
      try {
        const data = JSON.parse(text.value);
        if (data.version !== 2 || typeof data.sentences !== 'object') throw new Error('format');
        localStorage.setItem('english90:v2', JSON.stringify(data));
        location.reload();
      } catch {
        ui.toast('Kode backup tidak valid');
      }
    });
    root.querySelector('#resetBtn').addEventListener('click', () => {
      if (!confirm('Hapus SEMUA progress? Tindakan ini tidak bisa dibatalkan.')) return;
      store.resetAll();
      E90.applySettings();
      ui.toast('Progress di-reset');
      location.hash = '#/';
    });
  };
})();
