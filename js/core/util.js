window.E90 = window.E90 || {};

E90.util = (() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

  const pad2 = (n) => String(n).padStart(2, '0');

  // Tanggal lokal dalam format YYYY-MM-DD (bukan UTC, supaya pergantian hari sesuai jam HP).
  function dateKey(d = new Date()) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function addDays(key, n) {
    const [y, m, d] = key.split('-').map(Number);
    return dateKey(new Date(y, m - 1, d + n));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Token kata dari kalimat English: huruf kecil, tanda baca di tepi dibuang, apostrof dipertahankan.
  function tokens(sentence) {
    return String(sentence)
      .replace(/[’‘]/g, "'")
      .split(/\s+/)
      .map((t) => t.toLowerCase().replace(/^[^a-z0-9'{]+|[^a-z0-9'}]+$/g, ''))
      .filter(Boolean);
  }

  const normalizeAnswer = (s) => tokens(s).join(' ');

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, query = ''] = raw.split('?');
    return {
      parts: path.split('/').filter(Boolean),
      params: Object.fromEntries(new URLSearchParams(query))
    };
  }

  return { $, $$, esc, pad2, dateKey, addDays, shuffle, tokens, normalizeAnswer, parseHash };
})();
