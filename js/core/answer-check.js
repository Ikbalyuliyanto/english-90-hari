/*
 * Penilai jawaban Conversation (lokal, tanpa AI).
 *
 * check(question, answer, limitDay) -> { verdict, correction, hint, sample }
 *   verdict: 'correct' (✅ Benar) | 'almost' (⚠️ Hampir benar) | 'wrong' (❌ Perlu diperbaiki)
 *
 * Cara kerja:
 * 1. normalize(): huruf kecil, apostrophe, buang tanda baca, kontraksi dibuka (I'm -> i am),
 *    angka kata -> digit (five -> 5, six thirty -> 6 30), 5am -> 5 am.
 * 2. Cocokkan ke question.answerPatterns (regex sederhana dengan placeholder, lihat FRAGMENTS).
 *    Cocok -> correct.
 * 3. Coba FIXERS (koreksi kecil per materi grammar, masing-masing punya minDay). Hanya fixer dengan
 *    minDay <= limitDay yang dipakai, jadi koreksi tidak memakai materi yang belum dipelajari.
 *    Jika satu/dua koreksi membuat jawaban cocok -> almost, dengan "Lebih tepat: ...".
 * 4. Selain itu -> wrong, tampilkan contoh jawaban (sampleAnswers) dan correctionHint.
 * Dipakai juga di Node (tools/test-answer-check.js), jadi tidak bergantung pada DOM.
 */
(function (root) {
  const NUM_WORDS = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
    eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
    eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50
  };

  const CONTRACTIONS = [
    [/\bi'm\b/g, 'i am'], [/\b(you|we|they)'re\b/g, '$1 are'], [/\b(it|he|she|that|what|where|there)'s\b/g, '$1 is'],
    [/\bcan't\b/g, 'can not'], [/\bcannot\b/g, 'can not'], [/\bwon't\b/g, 'will not'], [/\b(\w+)n't\b/g, '$1 not'],
    [/\b(i|you|we|they)'ll\b/g, '$1 will'], [/\b(i|you|we|they)'ve\b/g, '$1 have'], [/\b(i|you|we|they)'d\b/g, '$1 would']
  ];

  function normalize(text) {
    let s = String(text || '').toLowerCase().replace(/[’‘`´]/g, "'");
    s = s.replace(/\ba\.m\.?/g, 'am').replace(/\bp\.m\.?/g, 'pm');
    s = s.replace(/(\d{1,2})[:.](\d{2})/g, '$1 $2');
    s = s.replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
    s = s.replace(/\b(\d{1,2})(am|pm)\b/g, '$1 $2');
    CONTRACTIONS.forEach(([re, to]) => { s = s.replace(re, to); });
    s = s.replace(/\bo ?'? ?clock\b/g, "o'clock");
    // angka kata -> digit; "twenty five" -> 25
    const words = s.split(' ');
    const out = [];
    for (let i = 0; i < words.length; i++) {
      const n = NUM_WORDS[words[i]];
      if (n === undefined) { out.push(words[i]); continue; }
      const next = NUM_WORDS[words[i + 1]];
      if (n >= 20 && next !== undefined && next < 10) { out.push(String(n + next)); i++; } else out.push(String(n));
    }
    return out.join(' ').trim();
  }

  // Placeholder untuk answerPatterns.
  const FRAGMENTS = {
    '{TIME}': "(\\d{1,2}( \\d{2})?( (am|pm|o'clock))?|noon|midnight|half past \\d{1,2})",
    '{WHEN}': '( (in the morning|this morning|today|last night|at night|in the evening|in the afternoon|yesterday|tonight))?',
    '{FREQ}': '( (usually|always|often|sometimes|rarely|never|normally|also))?',
    '{NUM}': '(\\d+|a|an|one|half an)',
    '{ING}': '[a-z]+ing',
    '{PAST}': '(went|worked|finished|met|had|did|fixed|made|wrote|stayed|called|sent|read|cooked|watched|played|studied|learned|attended|checked|joined|ate|got|took|stayed|helped|visited|cleaned|bought|slept|rested|tested|reviewed)',
    '{X}': "[a-z0-9' ]+",
    '{ANY}': "( [a-z0-9' ]+)?",
    '{TAIL}': "( (now|today|right now|yet|already|too|a little|very|so much|at the moment|at home|at work|at the office))*( (with|at|in|on|because|but|and|so) [a-z0-9' ]+)?"
  };
  const PREFIX = '^((yes|no|yeah|yep|nope|ok|okay|well|sure|um|uh|hmm|of course|good morning|good evening|hi|hello|actually) )*';
  const SUFFIX = '( (now|today|right now|too|thanks|thank you))*$';

  const cache = new Map();
  function compile(pattern) {
    if (!cache.has(pattern)) {
      let src = pattern;
      Object.entries(FRAGMENTS).forEach(([k, v]) => { src = src.split(k).join(v); });
      cache.set(pattern, new RegExp(PREFIX + src + SUFFIX));
    }
    return cache.get(pattern);
  }
  const matches = (q, n) => !!n && (q.answerPatterns || []).some((p) => compile(p).test(n));

  // ---------- Kamus verb untuk koreksi ----------
  const PAST = {
    wake: 'woke', get: 'got', eat: 'ate', have: 'had', go: 'went', finish: 'finished', leave: 'left', do: 'did',
    learn: 'learned', work: 'worked', stay: 'stayed', take: 'took', drink: 'drank', come: 'came', start: 'started',
    meet: 'met', watch: 'watched', cook: 'cooked', play: 'played', call: 'called', send: 'sent', fix: 'fixed',
    sleep: 'slept', buy: 'bought', make: 'made', study: 'studied', write: 'wrote', see: 'saw', help: 'helped',
    visit: 'visited', clean: 'cleaned', check: 'checked', join: 'joined', rest: 'rested', test: 'tested'
  };
  const WRONG_PAST = {
    waked: 'woke', eated: 'ate', goed: 'went', leaved: 'left', getted: 'got', haved: 'had', taked: 'took',
    drinked: 'drank', meeted: 'met', sended: 'sent', buyed: 'bought', maked: 'made', sleeped: 'slept',
    studyed: 'studied', writed: 'wrote', comed: 'came', doed: 'did', seed: 'saw'
  };
  const BASE_OF_PAST = Object.fromEntries(Object.entries(PAST).map(([b, p]) => [p, b]));
  const VERBS = [...Object.keys(PAST), 'speak', 'sit', 'ride', 'wait', 'walk', 'prepare', 'commute', 'relax', 'travel',
    'read', 'listen', 'talk', 'chat', 'use', 'drive', 'run', 'swim', 'shop', 'stop', 'plan', 'move', 'like', 'want', 'need'];
  const ing = (v) => (v === 'be' ? 'being' : /ie$/.test(v) ? v.slice(0, -2) + 'ying'
    : /[^e]e$/.test(v) ? v.slice(0, -1) + 'ing'
    : ['get', 'sit', 'run', 'swim', 'shop', 'stop', 'plan', 'put'].includes(v) ? v + v.slice(-1) + 'ing' : v + 'ing');
  const thirdS = (v) => (v === 'have' ? 'has' : /(s|sh|ch|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's');
  const ING_OF = Object.fromEntries(VERBS.map((v) => [v, ing(v)]));
  const BASE_OF_ING = Object.fromEntries(VERBS.map((v) => [ing(v), v]));
  const BASE_OF_S = Object.fromEntries(VERBS.map((v) => [thirdS(v), v]));
  const alt = (obj) => Object.keys(obj).sort((a, b) => b.length - a.length).join('|');
  const ADJ = 'busy|tired|hungry|sleepy|ready|fine|good|ok|okay|awake|happy|sick|full|late|free|at home|at work|at the office|on the train|on the way|not';

  const FRAME_STOP = /\b(yes|yeah|no|nope|not|i|you|we|they|he|she|am|is|are|do|does|did|can|could|will|maybe|tomorrow|yesterday)\b/;

  // Setiap fixer: minDay = Day materi yang mengajarkan koreksi tersebut.
  const FIXERS = [
    { id: 'be', minDay: 1, hint: 'Pakai am: I am ...',
      fix: (n) => n.replace(/\bi (is|are)\b/g, 'i am').replace(new RegExp(`(^| )i (${ADJ})\\b`), '$1i am $2') },
    { id: 'short', minDay: 14, hint: 'Jawab lengkap, contoh: Yes, I am.',
      fix: (n, q) => {
        const m = n.match(/^(yes|yeah|yep|no|nope)$/);
        if (!m || !q.yesNo) return n;
        return /^n/.test(m[1]) ? `no ${q.yesNo} not` : `yes ${q.yesNo}`;
      } },
    { id: 'frame', minDay: 1, hint: 'Jawab dengan kalimat lengkap.',
      fix: (n, q) => {
        // Hanya untuk isian pendek ("5", "Bandung"), bukan kalimat/jawaban lain ("Yes I do", "I like cooking").
        if (!q.frame || n.split(' ').length > 4 || /^(i|it|we|my|the|this) /.test(n) || FRAME_STOP.test(n)) return n;
        return q.frame.replace('{X}', n).replace(/\b(\w+) \1\b/g, '$1');
      } },
    { id: 'past', minDay: 17, hint: 'Pakai bentuk lampau (past).',
      fix: (n) => n
        .replace(new RegExp(`\\b(${alt(WRONG_PAST)})\\b`, 'g'), (w) => WRONG_PAST[w])
        .replace(new RegExp(`(^| )(i|we)( (just|already|also))? (${alt(PAST)})\\b`), (all, a, s, adv = '', _x, v) => `${a}${s}${adv} ${PAST[v]}`)
        .replace(new RegExp(`(^| )(i|we) (${alt(BASE_OF_S)})\\b`), (all, a, s, v) => `${a}${s} ${PAST[BASE_OF_S[v]] || v}`) },
    { id: 'present', minDay: 2, hint: 'Untuk kebiasaan pakai bentuk biasa (present).',
      fix: (n) => n
        .replace(new RegExp(`(^| )(i|we)((?: (?:usually|always|often|sometimes|rarely|never|normally))?) (${alt(BASE_OF_PAST)})\\b`), (all, a, s, f, v) => `${a}${s}${f} ${BASE_OF_PAST[v]}`)
        .replace(new RegExp(`(^| )(i|we)((?: (?:usually|always|often|sometimes|rarely|never|normally|do not))?) (${alt(BASE_OF_S)})\\b`), (all, a, s, f, v) => `${a}${s}${f} ${BASE_OF_S[v]}`) },
    { id: 'ing', minDay: 16, hint: 'Pakai I am + verb-ing.',
      fix: (n) => n
        .replace(new RegExp(`\\bi am( not)? (${alt(ING_OF)})\\b`), (all, not = '', v) => `i am${not} ${ING_OF[v]}`)
        .replace(/(^| )i ([a-z]+ing)\b/, '$1i am $2') },
    { id: 'future', minDay: 18, hint: 'Pakai I am going to / I will + verb.',
      fix: (n) => n
        .replace(/(^| )i going to\b/, '$1i am going to')
        .replace(/\bi am go to\b/, 'i am going to')
        .replace(/\b(will|going to) to\b/, '$1')
        .replace(new RegExp(`\\b(will|going to) (${alt(BASE_OF_ING)}|${alt(BASE_OF_S)})\\b`), (all, m, v) => `${m} ${BASE_OF_ING[v] || BASE_OF_S[v]}`) },
    { id: 'modal', minDay: 19, hint: 'Setelah can/could pakai verb dasar.',
      fix: (n) => n
        .replace(/\b(can|could) to\b/, '$1')
        .replace(new RegExp(`\\b(can|could)( not)? (${alt(BASE_OF_ING)}|${alt(BASE_OF_S)})\\b`), (all, m, not = '', v) => `${m}${not} ${BASE_OF_ING[v] || BASE_OF_S[v]}`) },
    { id: 'prep', minDay: 5, hint: 'Untuk jam pakai at: at 6.',
      fix: (n) => n
        .replace(/\b(in|on) (\d{1,2})\b(?! (minutes?|hours?|days?))/g, 'at $2')
        .replace(/\bin this morning\b/g, 'this morning')
        .replace(/\bat (morning|evening|afternoon)\b/g, 'in the $1')
        .replace(/\b(up|bed|left|work|sleep|office) (\d{1,2})\b(?! (minutes?|hours?))/g, '$1 at $2') }
  ];

  // Hanya tampilan koreksi: pakai kembali huruf besar dari jawaban user (Bandung), kapital awal kalimat,
  // pronoun I, dan jam "5 30" -> "5:30". Tidak memengaruhi penilaian.
  function pretty(n, raw = '') {
    const casing = new Map();
    String(raw).replace(/[’‘`´]/g, "'").split(/\s+/).forEach((t) => {
      const w = t.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, '');
      if (/[A-Z]/.test(w)) casing.set(w.toLowerCase(), w);
    });
    let s = n.split(' ').map((w) => (w === 'i' ? 'I' : casing.get(w) || w)).join(' ');
    s = s.replace(/\b(\d{1,2}) (\d{2})\b/g, '$1:$2');
    return s.charAt(0).toUpperCase() + s.slice(1) + (/[.?!]$/.test(s) ? '' : '.');
  }

  function check(q, answer, limitDay = 120) {
    const n = normalize(answer);
    const sample = (q.sampleAnswers || [])[0] || '';
    if (!n) return { verdict: 'wrong', correction: '', hint: 'Tulis jawabanmu dulu.', sample };
    if (matches(q, n)) return { verdict: 'correct', correction: '', hint: '', sample };

    const fixers = FIXERS.filter((f) => (f.id === 'frame' ? q.minDay : f.minDay) <= limitDay);
    const tried = [];
    for (const f of fixers) {
      const once = f.fix(n, q);
      if (once !== n && matches(q, once)) return { verdict: 'almost', correction: pretty(once, answer), hint: f.hint, sample };
      if (once !== n) tried.push([f, once]);
    }
    for (const [f1, once] of tried) {
      for (const f2 of fixers) {
        if (f2 === f1) continue;
        const twice = f2.fix(once, q);
        if (twice !== once && matches(q, twice)) return { verdict: 'almost', correction: pretty(twice, answer), hint: f1.hint, sample };
      }
    }
    return { verdict: 'wrong', correction: '', hint: q.correctionHint || '', sample };
  }

  // ---------- Kisi-kisi bertahap untuk jawaban salah ----------
  // Level = jumlah jawaban salah untuk pertanyaan aktif (1, 2, 3, 4+):
  //   1 Kisi-kisi (materi grammar)  2 Kata bantu (hintKeywords)  3 Pola (correctionHint)  4 Contoh (sampleAnswers[0])
  // Materi grammar hanya disebut jika minDay-nya <= current day; jawaban pendek "Yes, I am." baru dari Day 14.
  const GRAMMAR = {
    be:         { minDay: 1,  text: 'gunakan I am / It is + keadaan.' },
    present:    { minDay: 2,  text: 'gunakan present simple: I + verb dasar.' },
    time:       { minDay: 5,  text: 'sebut waktunya dengan jelas, misalnya at + jam.' },
    continuous: { minDay: 16, text: 'gunakan present continuous: I am + verb-ing.' },
    past:       { minDay: 17, text: 'gunakan past simple: I + verb lampau.' },
    future:     { minDay: 18, text: 'gunakan going to / will: I am going to + verb.' },
    can:        { minDay: 19, text: 'gunakan can + verb dasar.' },
    frequency:  { minDay: 21, text: 'gunakan kata frekuensi: usually / always / often / never.' }
  };
  const SHORT_ANSWER_DAY = 14;
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/\bi\b/g, 'I');

  function frameFor(q, limitDay) {
    const frame = String(q.correctionHint || '').replace(/^Pola:\s*/, '');
    if (limitDay >= SHORT_ANSWER_DAY || !/^(Yes|No),/.test(frame)) return frame;
    const full = frame.split(' / ').filter((p) => !/^(Yes|No),/.test(p));
    if (full.length) return full.join(' / ');
    return q.yesNo ? `${cap(q.yesNo)} ... / ${cap(q.yesNo)} not ...` : frame;
  }

  function hintFor(q, wrongCount, limitDay = 120) {
    const level = Math.max(1, Math.min(4, wrongCount || 1));
    if (level === 1) {
      const g = GRAMMAR[q.grammar];
      return { hintLevel: 1, hintLabel: 'Kisi-kisi', hintText: g && g.minDay <= limitDay ? g.text : 'jawab dengan kalimat lengkap, mulai dengan I ...' };
    }
    if (level === 2 && (q.hintKeywords || []).length) return { hintLevel: 2, hintLabel: 'Kata bantu', hintText: q.hintKeywords.join(' / ') };
    if (level <= 3) {
      const frame = frameFor(q, limitDay);
      if (frame) return { hintLevel: 3, hintLabel: 'Pola', hintText: frame };
    }
    return { hintLevel: 4, hintLabel: 'Contoh', hintText: (q.sampleAnswers || [])[0] || '' };
  }

  const api = { normalize, check, hintFor, GRAMMAR, matches: (q, a) => matches(q, normalize(a)), FIXERS };
  root.E90 = root.E90 || {};
  root.E90.answerCheck = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
