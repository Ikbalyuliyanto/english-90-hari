window.E90 = window.E90 || {};
E90.views = E90.views || {};

(() => {
  const { esc } = E90.util;
  const store = E90.store;
  const content = E90.content;
  const ui = E90.ui;
  const C = E90.CURRICULUM;

  const STEP_LABEL = { learn: 'Learn', recall: 'Recall', listening: 'Listening', shadowing: 'Shadowing', speaking: 'Speaking' };

  // Day yang disarankan: Day tersedia pertama yang checklist-nya belum lengkap.
  function currentDay() {
    const available = content.availableDays();
    const next = available.find((d) => !store.isDayComplete(d));
    if (next) return next;
    return Math.min((available[available.length - 1] || 0) + 1, C.totalDays);
  }

  function stats() {
    const raw = store.raw();
    const sentenceIds = Object.keys(raw.sentences);
    const vocab = content.vocab();
    const learned = new Set(sentenceIds);
    let vocabSeen = 0;
    for (const entry of vocab.values()) if (entry.ids.some((id) => learned.has(id))) vocabSeen++;
    const completedDays = Object.keys(raw.days).filter((d) => store.isDayComplete(d)).length;
    return {
      completedDays,
      learned: sentenceIds.length,
      mastered: store.ids('sentences', (r) => r.mastered || r.box >= store.MASTERED_BOX).length,
      weak: store.ids('sentences', store.isWeak).length,
      due: store.ids('sentences', store.isDue).length + store.ids('vocab', store.isDue).length,
      vocabActive: store.ids('vocab', () => true).length,
      vocabSeen,
      streak: store.streak(),
      activeDays: store.activeDays(),
      minutes: store.totalMinutes()
    };
  }

  const stat = (value, label, href) =>
    `<a class="stat" href="${href || '#/'}"><b>${value}</b><span>${label}</span></a>`;

  function checklist(day) {
    const d = store.raw().days[day] || {};
    return `<div class="checklist">${store.STEPS.map((s) =>
      `<span class="check ${d[s] ? 'done' : ''}">${d[s] ? '✓' : '○'} ${STEP_LABEL[s]}</span>`
    ).join('')}</div>`;
  }

  function phaseList(activeDay) {
    return C.phases.map((p) => {
      const days = [];
      let done = 0;
      for (let n = p.from; n <= p.to; n++) {
        const complete = store.isDayComplete(n);
        if (complete) done++;
        const available = content.isAvailable(n);
        const status = complete ? '✅' : available ? (n === activeDay ? '▶' : '') : '🔒';
        days.push(available
          ? `<a class="day-row ${n === activeDay ? 'is-current' : ''}" href="#/day/${n}"><span class="day-no">${n}</span><span class="day-title">${esc(content.titleOf(n))}</span><span class="day-status">${status}</span></a>`
          : `<div class="day-row is-locked"><span class="day-no">${n}</span><span class="day-title">${esc(content.titleOf(n))}</span><span class="day-status" title="Segera hadir">${status}</span></div>`);
      }
      const open = activeDay >= p.from && activeDay <= p.to;
      return `<details class="phase card" ${open ? 'open' : ''}>
        <summary>
          <span class="eyebrow">Phase ${p.id} · Day ${p.from}–${p.to}</span>
          <span class="phase-title">${esc(p.title)}</span>
          <span class="phase-sub">${esc(p.target)}</span>
          ${ui.progressBar(done, p.to - p.from + 1)}
        </summary>
        <div class="day-list">${days.join('')}</div>
      </details>`;
    }).join('');
  }

  E90.views.dashboard = (root) => {
    const s = stats();
    const day = currentDay();
    const available = content.isAvailable(day);
    const pct = Math.round((s.completedDays / C.totalDays) * 100);
    const phase = content.phaseOf(day);
    const today = store.todayLog();
    const dayData = content.getDay(day);

    root.innerHTML = `
      <section class="hero card">
        <div class="hero-top">
          <div>
            <div class="eyebrow">English 120 Days · Personal Trainer</div>
            <h1>Day ${day} <small>/ ${C.totalDays}</small></h1>
            <p class="muted">${s.completedDays} hari selesai · ${pct}%</p>
          </div>
          <div class="streak" title="Current streak"><b>🔥 ${s.streak}</b><span>streak</span></div>
        </div>
        ${ui.progressBar(s.completedDays, C.totalDays)}
        ${s.completedDays >= C.totalDays ? `<p class="today-note">🎉 Program ${C.totalDays} hari selesai. Pertahankan dengan Review, Vocabulary, dan mengulang simulasi Day 105, 119, dan 120.</p>` : ''}
        ${today.modes.length ? `<p class="today-note">Hari ini: ${today.modes.map((m) => `<span class="badge">${esc(m)}</span>`).join(' ')} ✓ tercatat sebagai hari aktif</p>` : ''}
      </section>

      <section class="card continue">
        <div class="eyebrow">Continue Learning · Phase ${phase.id}</div>
        <h2>${ui.dayLabel(day)} · ${esc(content.titleOf(day))}</h2>
        ${available
          ? `<p class="muted">${esc(dayData.goal || '')}</p>
             ${checklist(day)}
             <a class="btn btn-primary btn-block" href="#/day/${day}">Continue · Normal Mode</a>
             <div class="btn-row">
               <a class="btn" href="#/day/${day}/quick">⚡ Quick · 30m</a>
               <a class="btn" href="#/day/${day}/emergency">🆘 Emergency · 10m</a>
             </div>`
          : `<p class="muted">Materi Day ${day} belum tersedia. Sambil menunggu batch berikutnya, lanjutkan review agar pola yang sudah dipelajari jadi otomatis.</p>
             <a class="btn btn-primary btn-block" href="#/review">Buka Review</a>`}
      </section>

      <section class="stats">
        ${stat(s.streak, 'Current streak', '#/')}
        ${stat(s.activeDays, 'Active study days', '#/')}
        ${stat(s.minutes, 'Minutes studied', '#/')}
        ${stat(s.learned, 'Sentences learned', '#/review')}
        ${stat(s.mastered, 'Sentences mastered', '#/review/run?type=mastered&n=10')}
        ${stat(s.weak, 'Weak sentences', '#/review/run?type=weak&n=10')}
        ${stat(s.due, 'Reviews due', '#/review/run?type=due&n=20')}
        ${stat(s.vocabActive, 'Active vocabulary', '#/vocab')}
        ${stat(s.vocabSeen, 'Vocabulary seen', '#/vocab')}
      </section>

      <h2 class="section-title">Roadmap</h2>
      ${phaseList(day)}
    `;
  };

  E90.views.currentDay = currentDay;
})();
