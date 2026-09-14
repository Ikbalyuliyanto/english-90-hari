/*
 * Latihan Vocabulary. Kata diambil dari arti per kata di kalimat yang sudah dipelajari,
 * dan selalu ditampilkan bersama konteks kalimatnya.
 */
window.E90 = window.E90 || {};
E90.activities = E90.activities || {};

(() => {
  const { esc, shuffle, tokens, normalizeAnswer } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;

  const learnedIds = () => new Set(Object.keys(store.raw().sentences));

  // Pilih satu arti + kalimat contoh untuk sebuah entry, utamakan kalimat yang sudah dipelajari.
  function pickContext(entry, learned) {
    const senses = entry.senses.filter((s) => s.ids.some((id) => learned.has(id)));
    const sense = shuffle(senses.length ? senses : entry.senses)[0];
    const ids = sense.ids.filter((id) => learned.has(id));
    const sentence = content.getSentence(shuffle(ids.length ? ids : sense.ids)[0]);
    return { entry, sense, sentence };
  }

  /*
   * type: 'seen' | 'due' | 'weak' | 'mastered' | 'day'
   */
  function pool({ type = 'seen', n = 10, dayNo } = {}) {
    const bank = content.vocab();
    const learned = learnedIds();
    let entries = [...bank.values()];

    if (type === 'day' && dayNo) {
      const dayIds = new Set(content.daySentences(dayNo).map(({ s }) => s.id));
      entries = entries.filter((e) => e.ids.some((id) => dayIds.has(id)));
    } else if (type === 'weak') {
      entries = entries.filter((e) => store.isWeak(store.record('vocab', e.key)));
    } else if (type === 'mastered') {
      entries = entries.filter((e) => store.statusOf('vocab', e.key) === 'mastered');
    } else if (type === 'due') {
      entries = entries.filter((e) => store.isDue(store.record('vocab', e.key)));
    } else {
      entries = entries.filter((e) => e.ids.some((id) => learned.has(id)));
    }

    // Prioritas: jatuh tempo → kotak rendah → sisanya acak.
    const score = (e) => {
      const r = store.record('vocab', e.key);
      if (!r) return 1;
      if (store.isDue(r)) return 0;
      return 2 + r.box;
    };
    const sorted = shuffle(entries).sort((a, b) => score(a) - score(b));
    return sorted.slice(0, n).map((e) => pickContext(e, learned));
  }

  // Ganti kata target dalam kalimat dengan ____ (kemunculan pertama).
  function blankOut(english, form) {
    const target = form.toLowerCase();
    let replaced = false;
    const out = english.split(/(\s+)/).map((part) => {
      if (replaced || /^\s+$/.test(part)) return part;
      const tok = tokens(part)[0];
      if (tok === target) {
        replaced = true;
        return part.replace(new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '_____');
      }
      return part;
    }).join('');
    return replaced ? out : null;
  }

  function highlight(english, form) {
    const target = form.toLowerCase();
    return english.split(/(\s+)/).map((part) =>
      tokens(part)[0] === target ? `<mark>${esc(part)}</mark>` : esc(part)
    ).join('');
  }

  // type: 'en-id' | 'id-en' | 'blank'
  E90.activities.vocabQuiz = (el, items, { type = 'en-id', onDone } = {}) => {
    let i = 0;
    const tally = { again: 0, hard: 0, good: 0, easy: 0 };

    function render() {
      if (i >= items.length) return finish();
      const { entry, sense, sentence } = items[i];
      const english = ui.personalize(sentence.english);
      const others = entry.senses.filter((s) => s !== sense);
      const blank = type === 'blank' ? blankOut(english, sense.form) : null;
      const mode = type === 'blank' && !blank ? 'en-id' : type;

      let prompt = '';
      if (mode === 'en-id') {
        prompt = `<div class="prompt-label">Apa arti kata ini di kalimat berikut?</div>
          <div class="prompt-text en">${esc(sense.form)}</div>
          <div class="context">${highlight(english, sense.form)}</div>`;
      } else if (mode === 'id-en') {
        prompt = `<div class="prompt-label">Kata English untuk:</div>
          <div class="prompt-text">${esc(sense.meaning)}</div>
          <div class="context muted">Konteks: ${esc(ui.personalize(sentence.translation))}</div>`;
      } else {
        prompt = `<div class="prompt-label">Isi bagian kosong:</div>
          <div class="prompt-text en">${esc(blank)}</div>
          <div class="context muted">${esc(ui.personalize(sentence.translation))}</div>
          <input class="answer-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Ketik kata...">`;
      }

      el.innerHTML = `
        <div class="drill card">
          <div class="drill-head"><span>${i + 1} / ${items.length}</span><span class="s-id">${esc(sentence.id)}</span></div>
          ${ui.progressBar(i, items.length)}
          ${prompt}
          <button class="btn btn-primary btn-block" data-show>${mode === 'blank' ? 'Check' : 'Show Answer'}</button>
          <div class="answer" hidden>
            <div class="check-result"></div>
            <div class="vocab-answer"><b>${esc(sense.form)}</b> = ${esc(sense.meaning)}</div>
            <div class="context">${highlight(english, sense.form)}
              <button class="mini-btn" data-act="speak" data-text="${esc(sentence.english)}" aria-label="Dengarkan">🔊</button>
            </div>
            ${others.length ? `<div class="other-senses"><div class="small muted">Arti lain di konteks berbeda:</div>${others.map((o) =>
              `<div class="small">• <b>${esc(o.form)}</b> = ${esc(o.meaning)} <span class="muted">(${esc(ui.personalize(content.getSentence(o.ids[0])?.english || ''))})</span></div>`).join('')}</div>` : ''}
            ${ui.ratingButtons()}
          </div>
        </div>`;

      const input = el.querySelector('.answer-input');
      el.querySelector('[data-show]').addEventListener('click', (e) => {
        if (input) {
          const ok = normalizeAnswer(input.value) === normalizeAnswer(sense.form);
          const res = el.querySelector('.check-result');
          res.textContent = input.value.trim() ? (ok ? '✓ Benar' : `✗ Jawabanmu: ${input.value}`) : '';
          res.className = `check-result ${ok ? 'ok' : 'bad'}`;
          input.disabled = true;
        }
        e.currentTarget.hidden = true;
        el.querySelector('.answer').hidden = false;
      });
      input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') el.querySelector('[data-show]').click(); });
      el.querySelectorAll('[data-rate]').forEach((b) => b.addEventListener('click', () => {
        store.rate('vocab', entry.key, b.dataset.rate);
        tally[b.dataset.rate]++;
        i++;
        render();
      }));
      input?.focus({ preventScroll: true });
    }

    function finish() {
      el.innerHTML = `
        <div class="card done-card">
          <div class="done-emoji">📚</div>
          <h2>Vocabulary selesai</h2>
          <p class="muted">Again ${tally.again} · Hard ${tally.hard} · Good ${tally.good} · Easy ${tally.easy}</p>
          <button class="btn btn-primary btn-block" data-done>Lanjut</button>
        </div>`;
      el.querySelector('[data-done]').addEventListener('click', () => onDone?.(tally));
    }

    if (!items.length) {
      el.innerHTML = '<div class="card empty">Belum ada kosakata untuk latihan ini. Selesaikan Learn dulu agar kosakata masuk ke Vocabulary Bank.</div>';
      return;
    }
    render();
  };

  E90.vocabPool = pool;
})();
