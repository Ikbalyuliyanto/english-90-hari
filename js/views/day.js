window.E90 = window.E90 || {};
E90.views = E90.views || {};

(() => {
  const { esc, shuffle } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;
  const A = E90.activities;
  const C = E90.CURRICULUM;

  /*
   * Normal Mode (±2 jam). required = masuk checklist Daily Completion.
   */
  const NORMAL_STEPS = [
    { key: 'vocab', icon: '📚', title: 'Vocabulary Review', desc: 'Kosakata dari kalimat sebelumnya, dengan konteks.', minutes: 10 },
    { key: 'learn', icon: '📖', title: 'Learn', desc: 'Pahami kalimat inti: arti per kata, cara baca, audio.', minutes: 25, required: true },
    { key: 'recall', icon: '🧠', title: 'Active Recall', desc: 'Indonesia → English tanpa melihat.', minutes: 15, required: true },
    { key: 'listening', icon: '🎧', title: 'Listening', desc: 'Dengar dulu, tebak, baru lihat tulisan.', minutes: 15, required: true },
    { key: 'shadowing', icon: '🗣️', title: 'Shadowing', desc: 'Tirukan audio 3 kali.', minutes: 15, required: true },
    { key: 'patterns', icon: '🧩', title: 'Sentence Variation', desc: 'Ubah pola jadi kalimatmu sendiri.', minutes: 15 },
    { key: 'speaking', icon: '💬', title: 'Speaking Challenge', desc: 'Jawab pertanyaan dengan situasimu sendiri.', minutes: 15, required: true },
    // Opsional, hanya muncul di Day yang punya talk321 (mulai sekitar Day 31, 2–3 kali per minggu).
    { key: 'talk', icon: '⏱️', title: '3-2-1 Speaking', desc: 'Latihan fluency tambahan: topik sama, 3 → 2 → 1 menit.', minutes: 10, onlyIfTalk: true },
    { key: 'review', icon: '🔁', title: 'Review', desc: 'Kalimat yang jatuh tempo dari hari-hari sebelumnya.', minutes: 10 }
  ];

  const hideTranslation = (dayNo) => content.phaseOf(dayNo).translation === 'hidden';
  // Arti pertanyaan speaking dilipat mulai Phase 2 (atau disembunyikan jika seluruh terjemahan disembunyikan).
  const hideQuestionTranslation = (dayNo) => hideTranslation(dayNo) || content.phaseOf(dayNo).questionTranslation === 'collapsed';
  // Fase interview (Phase 4 akhir): bantuan Indonesia hanya petunjuk singkat, bukan terjemahan.
  const questionHelpLabel = (dayNo) => dayNo >= (content.phaseOf(dayNo).englishOnlyFrom || Infinity) ? 'Bantuan (Bahasa Indonesia)' : 'Arti pertanyaan';
  const sentencesOf = (dayNo) => content.daySentences(dayNo).map(({ s }) => s);

  const talkTopic = (dayNo) => content.getDay(dayNo)?.talk321?.topic || null;

  function stepsFor(dayNo) {
    return NORMAL_STEPS.filter((s) => !s.onlyIfTalk || talkTopic(dayNo));
  }

  // Kosakata untuk Vocabulary Review: jatuh tempo → dari kalimat yang sudah dipelajari → pratinjau kata hari ini.
  function vocabItemsFor(dayNo, n = 10) {
    let items = E90.vocabPool({ type: 'due', n });
    if (items.length < n) {
      const seen = E90.vocabPool({ type: 'seen', n: n * 2 }).filter((x) => !items.some((y) => y.entry.key === x.entry.key));
      items = items.concat(seen).slice(0, n);
    }
    if (!items.length) items = E90.vocabPool({ type: 'day', n, dayNo });
    return items;
  }

  // Kalimat review jatuh tempo (dipakai Quick/Emergency).
  function dueSentences(dayNo, n) {
    const due = store.ids('sentences', store.isDue).map(content.getSentence).filter(Boolean);
    let list = shuffle(due);
    if (list.length < n) {
      const earlier = shuffle(content.sentencesUpTo(dayNo - 1)).filter((s) => !list.includes(s));
      list = list.concat(earlier);
    }
    return list.slice(0, n);
  }

  // ---------- Overview ----------
  function overview(root, dayNo) {
    const d = content.getDay(dayNo);
    const phase = content.phaseOf(dayNo);
    const progress = store.raw().days[dayNo] || {};
    const steps = stepsFor(dayNo);
    const required = steps.filter((s) => s.required);
    const doneCount = required.filter((s) => progress[s.key]).length;
    const nextStep = steps.find((s) => s.required && !progress[s.key]);
    const complete = store.isDayComplete(dayNo);
    const learnCount = d.learn.length;
    const reviewCount = d.review.length;

    root.innerHTML = `
      ${ui.pageHead({ title: content.titleOf(dayNo), sub: d.titleId, eyebrow: `${ui.dayLabel(dayNo)} · Phase ${phase.id}`, back: '#/' })}

      <section class="card">
        <p>${esc(d.goal || '')}</p>
        <p class="muted small">${learnCount} kalimat baru · ${reviewCount} review/variasi · ${d.patterns.length} pola · ${d.speaking.length} pertanyaan speaking</p>
        ${complete
          ? '<div class="complete-banner">DAY COMPLETED ✅</div>'
          : `<div class="small muted">Daily completion: ${doneCount} / ${required.length}</div>${ui.progressBar(doneCount, required.length)}`}
      </section>

      <div class="mode-tabs">
        <a class="mode-tab" href="#/day/${dayNo}/quick"><b>⚡ Quick</b><span>±30 menit</span></a>
        <a class="mode-tab" href="#/day/${dayNo}/emergency"><b>🆘 Emergency</b><span>±10 menit</span></a>
      </div>

      <h2 class="section-title">Normal Mode <small>±2 jam</small></h2>
      <div class="step-list">
        ${steps.map((s, i) => {
          const done = !!progress[s.key];
          return `<a class="step ${done ? 'done' : ''} ${nextStep === s ? 'is-next' : ''}" href="#/day/${dayNo}/${s.key}">
            <span class="step-icon">${done ? '✅' : s.icon}</span>
            <span class="step-text"><b>${i + 1}. ${s.title}${s.required ? ' <span class="req">wajib</span>' : ''}</b><small>${s.desc} · ±${s.minutes} mnt</small></span>
            <span class="step-go">${nextStep === s ? 'Mulai' : '›'}</span>
          </a>`;
        }).join('')}
      </div>

      <div class="btn-row">
        ${dayNo > 1 ? `<a class="btn" href="#/day/${dayNo - 1}">← Day ${dayNo - 1}</a>` : '<span></span>'}
        ${dayNo < C.totalDays && content.isAvailable(dayNo + 1) ? `<a class="btn" href="#/day/${dayNo + 1}">Day ${dayNo + 1} →</a>` : ''}
      </div>`;
  }

  // ---------- Satu langkah Normal Mode ----------
  function step(root, dayNo, key) {
    const d = content.getDay(dayNo);
    const meta = NORMAL_STEPS.find((s) => s.key === key);
    if (!meta) return overview(root, dayNo);

    root.innerHTML = `${ui.pageHead({ title: `${meta.icon} ${meta.title}`, sub: content.titleOf(dayNo), eyebrow: ui.dayLabel(dayNo), back: `#/day/${dayNo}` })}<div id="activity"></div>`;
    const el = root.querySelector('#activity');
    const hide = hideTranslation(dayNo);

    const onDone = () => {
      const justCompleted = store.completeStep(dayNo, key, 'normal');
      if (justCompleted && store.raw().days && Object.keys(store.raw().days).filter((n) => store.isDayComplete(n)).length >= C.totalDays) ui.toast(`🎉 PROGRAM ${C.totalDays} HARI SELESAI`);
      else if (justCompleted) ui.toast(`DAY ${dayNo} COMPLETED ✅`);
      else ui.toast(`✓ ${meta.title} selesai`);
      location.hash = `#/day/${dayNo}`;
    };

    switch (key) {
      case 'vocab':
        return A.vocabQuiz(el, vocabItemsFor(dayNo), { type: 'en-id', onDone });
      case 'learn':
        return A.learn(el, content.daySentences(dayNo), { hideTranslation: hide, onDone });
      case 'recall':
        return A.recall(el, shuffle(sentencesOf(dayNo)), { direction: 'id-en', onDone });
      case 'listening':
        return A.listening(el, shuffle(sentencesOf(dayNo)).slice(0, 8), { onDone });
      case 'shadowing':
        return A.shadowing(el, d.shadowing.map(content.getSentence).filter(Boolean), { dayNo, onDone });
      case 'patterns':
        return A.patterns(el, d.patterns, { onDone });
      case 'speaking':
        return A.speaking(el, d.speaking, { dayNo, hideTranslation: hideQuestionTranslation(dayNo), helpLabel: questionHelpLabel(dayNo), onDone });
      case 'talk': {
        const topic = talkTopic(dayNo);
        if (!topic) {
          el.innerHTML = '<div class="card empty">Day ini tidak punya latihan 3-2-1 Speaking.</div>';
          return;
        }
        return A.talk321(el, topic, { onDone });
      }
      case 'review': {
        const due = store.ids('sentences', store.isDue).map(content.getSentence).filter(Boolean);
        const list = shuffle(due).slice(0, 10);
        if (!list.length) {
          el.innerHTML = `<div class="card empty">Tidak ada review yang jatuh tempo hari ini. 👍<br><br>
            <button class="btn btn-primary" data-skip>Tandai selesai</button></div>`;
          el.querySelector('[data-skip]').addEventListener('click', onDone);
          return;
        }
        return A.recall(el, list, { direction: 'id-en', onDone });
      }
    }
  }

  // ---------- Quick & Emergency ----------
  function runner(root, dayNo, mode) {
    const d = content.getDay(dayNo);
    const core = d.shadowing.map(content.getSentence).filter(Boolean);
    const extra = d.learn.filter((s) => !core.includes(s));
    const coreFive = core.concat(extra).slice(0, 5);

    const plans = {
      quick: {
        title: '⚡ Quick Mode',
        sub: '±30 menit',
        steps: [
          { title: 'Short Review', run: (el, next) => A.recall(el, dueSentences(dayNo, 5), { direction: 'id-en', onDone: next }), skipIf: () => dayNo === 1 && !Object.keys(store.raw().sentences).length },
          { title: 'Core Sentences', run: (el, next) => A.learn(el, coreFive.map((s) => ({ s, review: false })), { hideTranslation: hideTranslation(dayNo), doneLabel: 'Lanjut →', onDone: next }) },
          { title: 'Listening', run: (el, next) => A.listening(el, shuffle(sentencesOf(dayNo)).slice(0, 5), { onDone: next }) },
          { title: 'Recall', run: (el, next) => A.recall(el, shuffle(coreFive), { direction: 'id-en', onDone: next }) },
          { title: 'Speaking', run: (el, next) => A.speaking(el, d.speaking.slice(0, 2), { hideTranslation: hideQuestionTranslation(dayNo), helpLabel: questionHelpLabel(dayNo), onDone: next }) }
        ]
      },
      emergency: {
        title: '🆘 Emergency Mode',
        sub: '±10 menit — yang penting tidak zero-day',
        steps: [
          { title: '5 Vocabulary', run: (el, next) => A.vocabQuiz(el, vocabItemsFor(dayNo, 5), { type: 'en-id', onDone: next }) },
          { title: '3 Listening', run: (el, next) => A.listening(el, shuffle(sentencesOf(dayNo)).slice(0, 3), { onDone: next }) },
          { title: '3 Recall', run: (el, next) => A.recall(el, shuffle(coreFive).slice(0, 3), { direction: 'id-en', onDone: next }) }
        ]
      }
    };

    const plan = plans[mode];
    const steps = plan.steps.filter((s) => !s.skipIf?.());
    let index = 0;

    function renderStep() {
      if (index >= steps.length) return finish();
      root.innerHTML = `
        ${ui.pageHead({ title: plan.title, sub: `${content.titleOf(dayNo)} · ${plan.sub}`, eyebrow: ui.dayLabel(dayNo), back: `#/day/${dayNo}` })}
        <div class="runner-head">
          ${steps.map((s, i) => `<span class="runner-step ${i < index ? 'done' : ''} ${i === index ? 'active' : ''}">${i + 1}. ${esc(s.title)}</span>`).join('')}
        </div>
        <div id="activity"></div>`;
      window.scrollTo(0, 0);
      steps[index].run(root.querySelector('#activity'), () => { index++; renderStep(); });
    }

    function finish() {
      store.logActivity(mode, dayNo);
      coreFive.forEach((s) => store.touch('sentences', s.id));
      root.innerHTML = `
        ${ui.pageHead({ title: plan.title, sub: content.titleOf(dayNo), eyebrow: ui.dayLabel(dayNo), back: `#/day/${dayNo}` })}
        <div class="card done-card">
          <div class="done-emoji">${mode === 'quick' ? '⚡' : '🆘'}</div>
          <h2>${mode === 'quick' ? 'Quick Mode' : 'Emergency Mode'} selesai</h2>
          <p>Hari ini tercatat sebagai <b>active study day</b>. Streak: 🔥 ${store.streak()}</p>
          <p class="muted small">Checklist Normal Mode tidak berubah — lanjutkan kapan saja saat punya waktu lebih.</p>
          <a class="btn btn-primary btn-block" href="#/">Kembali ke Dashboard</a>
        </div>`;
    }

    renderStep();
  }

  E90.views.day = (root, dayNo, sub) => {
    if (!content.isAvailable(dayNo)) {
      root.innerHTML = `${ui.pageHead({ title: content.titleOf(dayNo), eyebrow: ui.dayLabel(dayNo), back: '#/' })}
        <div class="card empty">🔒 Materi Day ${dayNo} segera hadir.<br><br><a class="btn btn-primary" href="#/review">Latihan Review dulu</a></div>`;
      return;
    }
    if (!sub) return overview(root, dayNo);
    if (sub === 'quick' || sub === 'emergency') return runner(root, dayNo, sub);
    return step(root, dayNo, sub);
  };
})();
