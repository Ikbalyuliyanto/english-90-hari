(() => {
  const lessons = window.LESSONS;
  const meanings = window.WORD_MEANINGS;
  const sounds = window.PRONUNCIATION;
  const phraseNotes = window.PHRASE_NOTES;

  const $ = (s) => document.querySelector(s);
  const dayGrid = $('#dayGrid');
  const homeView = $('#homeView');
  const lessonView = $('#lessonView');
  const phraseList = $('#phraseList');
  const searchInput = $('#searchInput');
  const completeBtn = $('#completeBtn');

  let activeDay = 1;
  let fontMode = Number(localStorage.getItem('english90-font') || 0);
  const fontSizes = ['.94rem','1rem','1.1rem','1.2rem'];

  const normalizeToken = (token) => token
    .toLowerCase()
    .replace(/[“”]/g,'"')
    .replace(/[’]/g,"'")
    .replace(/^[^a-z0-9']+|[^a-z0-9']+$/g,'');

  const wordsOf = (sentence) => sentence
    .split(/\s+/)
    .map((raw) => ({raw: raw.replace(/[.,?!;:]+$/,''), key: normalizeToken(raw)}))
    .filter(x => x.key);

  function pronunciation(sentence) {
    return wordsOf(sentence).map(({key,raw}) => sounds[key] || raw.toLowerCase()).join(' ');
  }

  function getPhraseNote(sentence) {
    const lower = sentence.toLowerCase();
    return Object.entries(phraseNotes).find(([p]) => lower.includes(p)) || null;
  }

  function completedSet() {
    return new Set(JSON.parse(localStorage.getItem('english90-completed') || '[]'));
  }

  function setCompleted(day, done) {
    const set = completedSet();
    done ? set.add(day) : set.delete(day);
    localStorage.setItem('english90-completed', JSON.stringify([...set]));
  }

  function updateProgress() {
    const done = completedSet();
    const count = lessons.filter(l => done.has(l.day)).length;
    const pct = Math.round((count / lessons.length) * 100);
    $('#progressPct').textContent = pct + '%';
    $('#progressText').textContent = `${count} / ${lessons.length} hari selesai`;
    $('#progressRing').style.setProperty('--p', `${pct * 3.6}deg`);
  }

  function renderDays(query='') {
    const done = completedSet();
    const q = query.trim().toLowerCase();
    const filtered = lessons.filter(l => !q || l.title.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q) || l.phrases.some(p => p.join(' ').toLowerCase().includes(q)));
    if (!filtered.length) {
      dayGrid.innerHTML = '<div class="card empty">Materi tidak ditemukan.</div>';
      return;
    }
    dayGrid.innerHTML = filtered.map(l => `
      <button class="day-card ${done.has(l.day) ? 'done' : ''}" data-day="${l.day}">
        <span class="day-no">DAY ${String(l.day).padStart(2,'0')}</span>
        <h3>${l.title}</h3>
        <p>${l.subtitle}</p>
        <div class="day-meta"><span>15 kalimat</span><span>${done.has(l.day) ? 'Selesai ✓' : 'Mulai →'}</span></div>
      </button>`).join('');
    dayGrid.querySelectorAll('[data-day]').forEach(el => el.addEventListener('click', () => openLesson(Number(el.dataset.day))));
  }

  function wordChips(sentence) {
    return wordsOf(sentence).map(({raw,key}) => `<span class="word-chip"><b>${raw}</b><span>= ${meanings[key] || 'arti mengikuti konteks'}</span></span>`).join('');
  }

  function openLesson(day) {
    const lesson = lessons.find(x => x.day === day);
    if (!lesson) return;
    activeDay = day;
    location.hash = `day-${day}`;
    homeView.classList.add('hidden');
    lessonView.classList.remove('hidden');
    $('#lessonDay').textContent = `DAY ${String(day).padStart(2,'0')} • 15 KALIMAT`;
    $('#lessonTitle').textContent = lesson.title;
    $('#lessonSubtitle').textContent = lesson.subtitle;
    document.documentElement.style.setProperty('--phrase-font', fontSizes[fontMode]);

    phraseList.innerHTML = lesson.phrases.map((p,i) => {
      const [english,natural] = p;
      const note = getPhraseNote(english);
      return `<article class="phrase-card">
        <div class="phrase-main">
          <div class="phrase-num">${i+1}</div>
          <div>
            <div class="english">${english}</div>
            <div class="pronunciation">(${pronunciation(english)})</div>
            <div class="natural">→ ${natural}</div>
          </div>
          <button class="speak-btn" data-speak="${encodeURIComponent(english)}" aria-label="Dengarkan">🔊</button>
        </div>
        <button class="word-toggle">Arti per kata <span>⌄</span></button>
        <div class="word-panel">
          <div class="word-chips">${wordChips(english)}</div>
          ${note ? `<div class="phrase-note"><strong>Frasa:</strong> ${note[0]} = ${note[1]}</div>` : ''}
        </div>
      </article>`;
    }).join('');

    phraseList.querySelectorAll('.word-toggle').forEach(btn => btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
      btn.querySelector('span').textContent = btn.nextElementSibling.classList.contains('open') ? '⌃' : '⌄';
    }));
    phraseList.querySelectorAll('.speak-btn').forEach(btn => btn.addEventListener('click', () => speak(decodeURIComponent(btn.dataset.speak))));

    const isDone = completedSet().has(day);
    completeBtn.textContent = isDone ? '✓ Sudah Selesai' : '✓ Tandai Selesai';
    completeBtn.style.background = isDone ? 'var(--ok)' : 'var(--primary)';
    $('#prevBtn').disabled = day === 1;
    $('#nextBtn').disabled = day === lessons.length;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return alert('Browser ini belum mendukung audio otomatis.');
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.82; u.pitch = 1;
    speechSynthesis.speak(u);
  }

  $('#backBtn').addEventListener('click', () => { location.hash=''; lessonView.classList.add('hidden'); homeView.classList.remove('hidden'); renderDays(searchInput.value); updateProgress(); window.scrollTo(0,0); });
  $('#prevBtn').addEventListener('click', () => activeDay > 1 && openLesson(activeDay-1));
  $('#nextBtn').addEventListener('click', () => activeDay < lessons.length && openLesson(activeDay+1));
  completeBtn.addEventListener('click', () => { const done = completedSet().has(activeDay); setCompleted(activeDay,!done); openLesson(activeDay); updateProgress(); });
  searchInput.addEventListener('input', e => renderDays(e.target.value));
  $('#reviewBtn').addEventListener('click', () => openLesson(lessons[Math.floor(Math.random()*lessons.length)].day));
  $('#fontBtn').addEventListener('click', () => { fontMode=(fontMode+1)%fontSizes.length; localStorage.setItem('english90-font',fontMode); document.documentElement.style.setProperty('--phrase-font',fontSizes[fontMode]); });
  $('#themeBtn').addEventListener('click', () => { document.documentElement.classList.toggle('dark'); localStorage.setItem('english90-theme',document.documentElement.classList.contains('dark')?'dark':'light'); });

  if (localStorage.getItem('english90-theme') === 'dark') document.documentElement.classList.add('dark');
  renderDays(); updateProgress();
  const hash = location.hash.match(/day-(\d+)/); if (hash) openLesson(Number(hash[1]));
})();
