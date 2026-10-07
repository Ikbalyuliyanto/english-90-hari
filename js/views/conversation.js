/*
 * View #/conversation — latihan jawab pertanyaan singkat (lokal, belum AI).
 *   #/conversation              pertanyaan acak sesuai waktu sekarang
 *   #/conversation?q=C-WORK-03  pertanyaan tertentu (dari notification)
 *   #/conversation?ctx=lunch    pertanyaan acak dari satu konteks
 */
window.E90 = window.E90 || {};

(() => {
  const { esc } = E90.util;
  const ui = E90.ui;
  const conv = E90.conversation;

  E90.views.conversation = (root, params = {}) => {
    const limit = conv.maxDay();
    const requested = params.q ? conv.byId(params.q) : null;
    // Pertanyaan dari notification lama yang belum boleh dipakai tetap diabaikan.
    const q = requested && requested.minDay <= limit ? requested : conv.pick({ context: params.ctx, exclude: params.next });
    const ctx = q ? conv.contextOf(q.context) : null;
    const total = conv.eligible().length;

    const chips = conv.bank().contexts
      .filter((c) => conv.eligible({ context: c.id }).length)
      .map((c) => `<a class="btn ${params.ctx === c.id ? 'btn-primary' : ''}" href="#/conversation?ctx=${c.id}">${esc(c.label)}</a>`)
      .join('');

    root.innerHTML = `
      ${ui.pageHead({ title: 'Conversation', eyebrow: 'English Time', sub: `Pertanyaan dari materi Day 1–${limit} · ${total} pertanyaan tersedia` })}
      ${q ? `
      <section class="card">
        <div class="eyebrow">${esc(ctx?.label || '')}</div>
        <p class="muted" style="margin:.4em 0 0">${esc(ctx?.greeting || 'English Time')}</p>
        <h2 style="margin:.2em 0 .4em">${esc(q.en)}</h2>
        <p id="convIdn" class="muted" hidden>${esc(q.idn)}</p>
        <div class="btn-row">
          <button class="btn" data-act="speak" data-text="${esc(q.en)}">🔊 Dengar</button>
          <button class="btn" data-act="speak-slow" data-text="${esc(q.en)}">🐢 Pelan</button>
          <button class="btn" id="convShowIdn">Arti</button>
        </div>
      </section>
      <section class="card form">
        <label for="convAnswer"><b>Jawabanmu</b><small>Ucapkan dengan suara, lalu tulis singkat. Belum dinilai otomatis.</small></label>
        <textarea id="convAnswer" rows="3" placeholder="contoh: I woke up at six."></textarea>
        <div class="btn-row">
          <button class="btn" id="convSpeakAnswer">🔊 Dengar jawabanku</button>
          <a class="btn btn-primary" href="#/conversation?${params.ctx ? `ctx=${esc(params.ctx)}&` : ''}next=${esc(q.id)}">Pertanyaan lain →</a>
        </div>
        <p class="small muted">Materi: Day ${q.minDay}${q.ref ? ` · ${esc(q.ref)}` : ''}</p>
      </section>`
      : `<section class="card empty">Belum ada pertanyaan untuk materi Day 1–${limit}. Lanjutkan belajar dulu ya.</section>`}
      <section class="card">
        <b>Pilih konteks</b>
        <div class="btn-row">${chips}</div>
      </section>
      <p class="muted small center"><a href="#/settings">Atur notification di Settings</a></p>`;

    root.querySelector('#convShowIdn')?.addEventListener('click', () => {
      root.querySelector('#convIdn').hidden = false;
    });
    root.querySelector('#convSpeakAnswer')?.addEventListener('click', () => {
      const text = root.querySelector('#convAnswer').value.trim();
      if (!text) return ui.toast('Tulis jawabanmu dulu');
      if (!E90.speech.speak(text)) ui.toast('Audio tidak didukung di browser ini.');
    });
  };
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
    box.querySelector('#testNotifyBtn').addEventListener('click', async () => {
      try {
        const q = await pwa.sendConversationTest();
        ui.toast(`🔔 Terkirim: ${q.en}`);
      } catch (err) {
        console.warn(err);
        ui.toast('Gagal mengirim notification');
      }
    });
  };

  document.addEventListener('e90:installable', () => E90.views.notifySettings(document.getElementById('notifySettings')));
})();
