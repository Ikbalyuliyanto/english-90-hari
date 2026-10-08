/*
 * View #/conversation — tampilan chat: bubble kiri (app/koreksi), kanan (jawaban), composer di bawah.
 * Satu active question (lokal, belum AI); jawaban salah mendapat kisi-kisi bertahap.
 *   #/conversation              tampilkan active question; buat baru jika belum ada
 *   #/conversation?q=C-WORK-03  dari notification: dipakai hanya jika tidak ada pertanyaan yang belum dijawab
 *   #/conversation?ctx=lunch    pertanyaan berikutnya dari satu konteks (setelah pertanyaan sebelumnya selesai)
 */
window.E90 = window.E90 || {};

(() => {
  const { esc } = E90.util;
  const ui = E90.ui;
  const conv = E90.conversation;

  const VERDICT = {
    correct: '✅ Benar',
    almost: '⚠️ Hampir benar',
    wrong: '❌ Perlu diperbaiki'
  };

  // Isi bubble feedback. Jawaban salah hanya menampilkan satu kisi-kisi (sesuai level percobaan).
  function resultHtml(r) {
    const lines = [`<b>${VERDICT[r.verdict] || ''}</b>`];
    if (r.verdict === 'almost' && r.correction) lines.push(`Lebih tepat: <b>${esc(r.correction)}</b>`);
    if (r.meaningIdn) {
      // Arti jawaban user / koreksi; jika kalimatnya tidak dikenal, tampilkan contoh yang benar + artinya.
      if (r.meaningSource === 'sample') lines.push(`Contoh yang benar: <b>${esc(r.meaningEn)}</b>`);
      lines.push(`<span class="bubble-idn">🇮🇩 ${esc(r.meaningIdn)}</span>`);
    }
    if (r.verdict === 'wrong') {
      if (r.hintLabel) lines.push(`💡 ${esc(r.hintLabel)}: <b>${esc(r.hintText)}</b>`);
      else if (r.hint) lines.push(`💡 ${esc(r.hint)}`); // percobaan lama sebelum kisi-kisi bertahap
      if (r.hintLevel === 4 && r.hintIdn) lines.push(`<span class="bubble-idn">🇮🇩 ${esc(r.hintIdn)}</span>`);
    }
    return lines.join('<br>');
  }

  const left = (html, cls = '') => `<div class="bubble is-app ${cls}">${html}</div>`;
  const right = (html) => `<div class="bubble is-user">${html}</div>`;
  const chip = (attrs, label, cls = '') => `<button type="button" class="chip ${cls}" ${attrs}>${label}</button>`;

  function contextChips(current) {
    return conv.bank().contexts
      .filter((c) => conv.eligible({ context: c.id }).length)
      .map((c) => `<a class="chip ${current === c.id ? 'is-on' : ''}" href="#/conversation?ctx=${c.id}">${esc(c.label)}</a>`)
      .join('');
  }

  function resolveActive(params) {
    const active = conv.getActive();
    // Ada pertanyaan yang belum dijawab: selalu tampilkan itu (tidak membuat pertanyaan baru).
    if (active && active.status === 'pending') return { active, blocked: !!(params.q && params.q !== active.questionId) || !!params.ctx };
    if (params.q && active?.questionId === params.q) return { active };
    if (params.q || params.ctx) {
      const res = conv.createActive({ questionId: params.q, context: params.ctx, source: params.q ? 'notification' : 'app' });
      if (res.ok) return { active: res.active };
    }
    return { active: active || conv.ensureActive() };
  }

  // Gulir ke pesan terbaru setelah render (router memanggil scrollTo(0,0) setelah view dirender).
  function scrollToLatest() {
    requestAnimationFrame(() => setTimeout(() => window.scrollTo({ top: document.documentElement.scrollHeight }), 0));
  }

  function render(root, params = {}) {
    const limit = conv.maxDay();
    const head = `<header class="chat-head">
        <a class="back-btn" href="#/" aria-label="Kembali">←</a>
        <div><h1>English Practice</h1><small>Day ${limit}</small></div>
      </header>`;
    const { active, blocked } = params.done ? { active: null } : resolveActive(params);
    const q = active && conv.byId(active.questionId);

    if (!q) {
      root.innerHTML = `<div class="chat-page">${head}
        <div class="chat-log">
          ${params.done
            ? left(`<b>Selesai 👍</b><br>Pertanyaan berikutnya akan datang lewat notification, atau mulai sekarang.<div class="chips"><a class="chip is-on" href="#/conversation">Pertanyaan berikutnya →</a></div>`)
            : left(`Belum ada pertanyaan untuk materi Day 1–${limit}. Lanjutkan belajar dulu ya.`)}
          <div class="chips chips-wrap">${contextChips()}</div>
        </div></div>`;
      scrollToLatest();
      return;
    }

    const ctx = conv.contextOf(q.context);
    const pending = active.status === 'pending';
    const attempts = active.attempts || [];

    root.innerHTML = `<div class="chat-page">${head}
      <div class="chat-log" aria-live="polite">
        ${blocked ? '<p class="chat-note">Jawab pertanyaan ini dulu ya. Pertanyaan baru muncul setelah yang ini selesai.</p>' : ''}
        ${left(`<small class="bubble-meta">${esc(ctx?.label || '')} · ${esc(ctx?.greeting || 'English Time')}</small>
          <span class="chat-q">${esc(q.en)}</span>
          <span id="convIdn" class="bubble-sub" hidden>${esc(q.idn)}</span>
          <div class="chips">${chip(`data-act="speak" data-text="${esc(q.en)}"`, '🔊 Dengar')}${chip('id="convShowIdn"', 'Arti')}</div>`, 'is-question')}
        ${attempts.map((t) => right(esc(t.answer)) + left(resultHtml(t.result), `is-${t.result.verdict}`)).join('')}
      </div>
      <div class="chat-composer">
        ${pending ? `
        <textarea id="convAnswer" rows="1" placeholder="Tulis jawaban dalam English..." aria-label="Jawaban" enterkeyhint="send"></textarea>
        <button type="button" class="btn btn-primary" id="convSend">Kirim</button>` : `
        <div class="chips">${chip('id="convRetry"', 'Coba lagi')}${chip('id="convNext"', 'Lanjut →', 'is-on')}</div>`}
      </div></div>`;

    root.querySelector('#convShowIdn').addEventListener('click', () => { root.querySelector('#convIdn').hidden = false; });
    const input = root.querySelector('#convAnswer');
    const grow = () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; };
    const send = () => {
      if (!input.value.trim()) return ui.toast('Tulis jawabanmu dulu');
      conv.submitAnswer(input.value);
      render(root, {});
    };
    const sendBtn = root.querySelector('#convSend');
    sendBtn?.addEventListener('click', send);
    // Tekan Kirim tanpa melepas fokus textarea: keyboard tetap terbuka dan composer tidak bergeser di tengah klik.
    sendBtn?.addEventListener('pointerdown', (e) => { if (document.activeElement === input) e.preventDefault(); });
    input?.addEventListener('input', grow);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });
    // Saat mengetik, sembunyikan bottom nav agar composer tidak tertutup keyboard.
    input?.addEventListener('focus', () => { document.body.classList.add('is-composing'); scrollToLatest(); });
    input?.addEventListener('blur', () => document.body.classList.remove('is-composing'));
    root.querySelector('#convRetry')?.addEventListener('click', () => {
      conv.retry();
      render(root, {});
      root.querySelector('#convAnswer')?.focus();
    });
    root.querySelector('#convNext')?.addEventListener('click', () => {
      conv.close();
      render(root, { done: true });
    });
    scrollToLatest();
  }

  E90.views.conversation = render;
})();

/*
 * Bagian Settings: install app & notification. Dipanggil dari E90.views.settings.
 */
(() => {
  const ui = E90.ui;
  const pwa = E90.pwa;

  const SUB_LABEL = {
    saved: '✓ Subscription aktif',
    'save-failed': 'Subscription aktif di browser, tapi gagal dikirim ke server',
    'no-vapid': 'Subscription belum aktif — Push server belum diaktifkan.',
    'no-permission': 'Subscription belum aktif (notification belum diizinkan)',
    'subscribe-failed': '✗ Gagal subscribe',
    'no-sw': 'Subscription belum aktif (service worker belum aktif)',
    unsupported: '✗ Browser ini tidak mendukung push'
  };

  async function renderBackendStatus(el) {
    if (!el || !E90.backend) return;
    const [h, sub] = await Promise.all([
      E90.backend.health(),
      E90.backend.ensureSubscription().catch(() => ({ state: 'subscribe-failed' }))
    ]);
    const st = await E90.backend.postState(true);
    if (!el.isConnected) return;
    el.innerHTML = `<b>Backend Notification</b><br>
      ${h.ok ? '✓ Online' : '✗ Gagal terhubung (aplikasi tetap berjalan lokal)'}<br>
      ${SUB_LABEL[sub.state] || sub.state}<br>
      <span class="muted">${st?.ok ? `State tersinkron · Day ${st.sent.currentDay}` : 'State belum tersinkron'}</span>`;
  }

  E90.views.notifySettings = async (box) => {
    if (!box) return;
    const perm = pwa.permission();
    const enabled = pwa.prefs().enabled && perm === 'granted';
    const sw = await pwa.swActive();
    box.innerHTML = `
      <b>Aplikasi & Notification</b>
      <p class="small muted">
        ${sw ? '✓ Service worker aktif.' : '… Service worker belum aktif (buka ulang halaman).'}<br>
        ${pwa.isStandalone() ? '✓ Berjalan sebagai aplikasi terpasang.' : 'Belum dipasang sebagai aplikasi.'}<br>
        ${perm === 'unsupported' ? '✗ Browser ini tidak mendukung notification.' : perm === 'denied' ? '✗ Notification diblokir. Izinkan lewat pengaturan situs di browser.' : enabled ? '✓ Notification aktif.' : 'Notification belum aktif.'}
      </p>
      ${pwa.canInstall() ? '<button class="btn btn-block" id="installBtn">📲 Pasang aplikasi</button>' : ''}
      <div class="segmented" id="notifyToggle">
        <button class="${enabled ? '' : 'is-on'}" data-value="off">Mati</button>
        <button class="${enabled ? 'is-on' : ''}" data-value="on">Aktif</button>
      </div>
      <div class="btn-row">
        <button class="btn" id="testNotifyBtn" ${enabled ? '' : 'disabled'}>🔔 Tes notification</button>
        <a class="btn" href="#/conversation">💬 Buka Conversation</a>
      </div>
      <button class="btn btn-block" id="updateBtn">🔄 Cek Update</button>
      <p class="small muted">Tahap ini: notification dikirim dari aplikasi (tes). Pengingat terjadwal saat app tertutup butuh server push.</p>
      <p class="small" id="backendStatus"><b>Backend Notification</b><br>… mengecek</p>`;

    renderBackendStatus(box.querySelector('#backendStatus'));

    box.querySelector('#installBtn')?.addEventListener('click', async () => {
      await pwa.install();
      E90.views.notifySettings(box);
    });
    box.querySelector('#notifyToggle').addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-value]');
      if (!btn) return;
      if (btn.dataset.value === 'on') {
        const r = await pwa.enableNotifications();
        ui.toast(r === 'granted' ? '✓ Notification aktif' : 'Izin notification tidak diberikan');
      } else {
        pwa.disableNotifications();
        ui.toast('Notification dimatikan');
      }
      E90.views.notifySettings(box);
    });
    box.querySelector('#updateBtn').addEventListener('click', async (e) => {
      e.currentTarget.disabled = true;
      ui.toast('Mengecek update...');
      try {
        if (await pwa.checkForUpdate() === 'updating') return ui.toast('Update ditemukan, memuat ulang aplikasi...');
        ui.toast('Aplikasi sudah versi terbaru');
      } catch (err) {
        console.warn(err);
        ui.toast('Gagal mengecek update, memuat ulang...');
      }
      setTimeout(pwa.reloadOnce, 1200);
    });
    box.querySelector('#testNotifyBtn').addEventListener('click', async () => {
      try {
        const { q, reused } = await pwa.sendConversationTest();
        ui.toast(reused ? `🔔 Pertanyaan aktif dikirim ulang: ${q.en}` : `🔔 Terkirim: ${q.en}`);
      } catch (err) {
        console.warn(err);
        ui.toast('Gagal mengirim notification');
      }
    });
  };

  document.addEventListener('e90:installable', () => E90.views.notifySettings(document.getElementById('notifySettings')));
})();
