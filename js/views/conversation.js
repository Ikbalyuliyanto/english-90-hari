/*
 * View #/conversation — satu active question seperti chat (lokal, belum AI).
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

  function resultHtml(r) {
    const lines = [`<b>${VERDICT[r.verdict] || ''}</b>`];
    if (r.verdict === 'almost' && r.correction) lines.push(`Lebih tepat: <b>${esc(r.correction)}</b>`);
    if (r.verdict === 'wrong') {
      if (r.hint) lines.push(esc(r.hint));
      if (r.sample) lines.push(`Contoh: <b>${esc(r.sample)}</b>`);
    }
    return lines.join('<br>');
  }

  const bubble = (who, html, cls = '') => `<div class="chat-msg ${cls}"><small>${who}</small><div>${html}</div></div>`;

  function contextChips(current) {
    return conv.bank().contexts
      .filter((c) => conv.eligible({ context: c.id }).length)
      .map((c) => `<a class="btn ${current === c.id ? 'btn-primary' : ''}" href="#/conversation?ctx=${c.id}">${esc(c.label)}</a>`)
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

  function render(root, params = {}) {
    const limit = conv.maxDay();
    const head = ui.pageHead({ title: 'Conversation', eyebrow: 'English Time', sub: `Pertanyaan dari materi Day 1–${limit} · ${conv.eligible().length} pertanyaan tersedia` });
    const { active, blocked } = params.done ? { active: null } : resolveActive(params);
    const q = active && conv.byId(active.questionId);

    if (!q) {
      root.innerHTML = `${head}
        <section class="card ${params.done ? '' : 'empty'}">${params.done
          ? '<b>Selesai 👍</b><p class="small muted">Pertanyaan berikutnya akan muncul di notification berikutnya, atau mulai sekarang.</p><a class="btn btn-primary btn-block" href="#/conversation">Pertanyaan berikutnya →</a>'
          : `Belum ada pertanyaan untuk materi Day 1–${limit}. Lanjutkan belajar dulu ya.`}</section>
        <section class="card"><b>Pilih konteks</b><div class="btn-row">${contextChips()}</div></section>`;
      return;
    }

    const ctx = conv.contextOf(q.context);
    const pending = active.status === 'pending';
    const attempts = active.attempts || [];

    root.innerHTML = `${head}
      ${blocked ? '<p class="card small">Jawab pertanyaan ini dulu ya. Pertanyaan baru muncul setelah yang ini selesai.</p>' : ''}
      <section class="card chat">
        ${bubble(esc(ctx?.label || 'App'), `<span class="muted">${esc(ctx?.greeting || 'English Time')}</span><br><b class="chat-q">${esc(q.en)}</b><br><span id="convIdn" class="muted small" hidden>${esc(q.idn)}</span>`, 'is-app')}
        <div class="btn-row">
          <button class="btn" data-act="speak" data-text="${esc(q.en)}">🔊 Dengar</button>
          <button class="btn" data-act="speak-slow" data-text="${esc(q.en)}">🐢 Pelan</button>
          <button class="btn" id="convShowIdn">Arti</button>
        </div>
        ${attempts.map((t) => bubble('You', esc(t.answer), 'is-user') + bubble('App', resultHtml(t.result), `is-app is-${t.result.verdict}`)).join('')}
      </section>
      ${pending ? `
      <section class="card form">
        <label for="convAnswer"><b>Jawabanmu</b><small>Ucapkan dengan suara, lalu tulis singkat.</small></label>
        <textarea id="convAnswer" rows="2" placeholder="Tulis jawaban dalam English"></textarea>
        <div class="btn-row">
          <button class="btn" id="convSpeakAnswer">🔊 Dengar jawabanku</button>
          <button class="btn btn-primary" id="convSend">Kirim</button>
        </div>
      </section>` : `
      <div class="btn-row big">
        <button class="btn" id="convRetry">Coba lagi</button>
        <button class="btn btn-primary" id="convNext">Lanjut →</button>
      </div>`}
      <p class="small muted center">Materi: Day ${q.minDay}${q.ref ? ` · ${esc(q.ref)}` : ''} · <a href="#/settings">Notification</a></p>`;

    root.querySelector('#convShowIdn').addEventListener('click', () => { root.querySelector('#convIdn').hidden = false; });
    const input = root.querySelector('#convAnswer');
    root.querySelector('#convSpeakAnswer')?.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return ui.toast('Tulis jawabanmu dulu');
      if (!E90.speech.speak(text)) ui.toast('Audio tidak didukung di browser ini.');
    });
    const send = () => {
      if (!input.value.trim()) return ui.toast('Tulis jawabanmu dulu');
      conv.submitAnswer(input.value);
      render(root, {});
    };
    root.querySelector('#convSend')?.addEventListener('click', send);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });
    root.querySelector('#convRetry')?.addEventListener('click', () => {
      conv.retry();
      render(root, {});
      root.querySelector('#convAnswer')?.focus();
    });
    root.querySelector('#convNext')?.addEventListener('click', () => {
      conv.close();
      render(root, { done: true });
    });
  }

  E90.views.conversation = render;
})();

/*
 * Bagian Settings: install app & notification. Dipanggil dari E90.views.settings.
 */
(() => {
  const ui = E90.ui;
  const pwa = E90.pwa;

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
      <p class="small muted">Tahap ini: notification dikirim dari aplikasi (tes). Pengingat terjadwal saat app tertutup butuh server push.</p>`;

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
