/*
 * Entry point: router berbasis hash, bottom navigation, settings, dan pelacak menit belajar.
 * Route:
 *   #/                         Dashboard
 *   #/day/21                   Overview Day (Normal Mode checklist)
 *   #/day/21/learn|recall|...  Satu langkah Normal Mode
 *   #/day/21/quick|emergency   Quick / Emergency Mode
 *   #/review, #/review/run?type=..&n=..
 *   #/vocab,  #/vocab/run?type=..&n=..
 *   #/search?q=..   #/settings
 */
window.E90 = window.E90 || {};

(() => {
  const { $, $$, parseHash } = E90.util;
  const store = E90.store;
  const views = E90.views;
  const root = $('#view');

  const FONT_SIZES = ['15px', '16px', '17.5px', '19px'];

  E90.applySettings = () => {
    const s = store.settings();
    const html = document.documentElement;
    if (s.theme) html.setAttribute('data-theme', s.theme);
    else html.removeAttribute('data-theme');
    html.style.fontSize = FONT_SIZES[s.font] || FONT_SIZES[1];
  };

  function setActiveNav(section) {
    $$('.bottom-nav a').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === section));
  }

  function render() {
    // Link lama (#day-5) diarahkan ke route baru.
    const legacy = location.hash.match(/^#day-(\d+)$/);
    if (legacy) {
      location.replace(`#/day/${legacy[1]}`);
      return;
    }

    E90.speech.stop();
    const { parts, params } = parseHash();
    const [section = '', a, b] = parts;

    try {
      switch (section) {
        case 'day': {
          const dayNo = Math.min(Math.max(Number(a) || 1, 1), E90.CURRICULUM.totalDays);
          views.day(root, dayNo, b);
          setActiveNav('home');
          break;
        }
        case 'review':
          views.review(root, a, params);
          setActiveNav('review');
          break;
        case 'vocab':
          views.vocab(root, a, params);
          setActiveNav('vocab');
          break;
        case 'search':
          views.search(root, params);
          setActiveNav('search');
          break;
        case 'settings':
          views.settings(root);
          setActiveNav('settings');
          break;
        default:
          views.dashboard(root);
          setActiveNav('home');
      }
    } catch (err) {
      console.error(err);
      root.innerHTML = `<div class="card empty">Terjadi kesalahan saat membuka halaman.<br><br><a class="btn btn-primary" href="#/">Kembali ke Dashboard</a></div>`;
    }

    if (params.focus) {
      const card = document.getElementById(`card-${params.focus}`);
      if (card) {
        card.classList.add('is-focus');
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
        return;
      }
    }
    window.scrollTo(0, 0);
  }

  // Menit belajar: dihitung per 30 detik saat tab terlihat, user aktif, dan sedang di halaman latihan.
  function trackMinutes() {
    let lastInteraction = Date.now();
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((ev) =>
      window.addEventListener(ev, () => { lastInteraction = Date.now(); }, { passive: true })
    );
    setInterval(() => {
      const onPractice = /^#\/(day|review|vocab)\//.test(location.hash) || /^#\/day\/\d+$/.test(location.hash);
      const active = Date.now() - lastInteraction < 120000;
      if (document.visibilityState === 'visible' && active && onPractice) store.addMinutes(0.5);
    }, 30000);
  }

  async function boot() {
    E90.applySettings();
    E90.ui.bindGlobalActions();
    try {
      await E90.content.load();
    } catch (err) {
      console.error(err);
    }
    window.addEventListener('hashchange', render);
    render();
    trackMinutes();
  }

  boot();
})();
