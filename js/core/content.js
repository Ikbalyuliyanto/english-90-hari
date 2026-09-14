/*
 * Content registry: memuat data/days/day-XX.js, menormalkan data,
 * dan menyediakan lookup kalimat, pencarian, serta Vocabulary Bank.
 *
 * Format satu Day (lihat README untuk detail):
 * E90.registerDay({
 *   day, titleId, goal,
 *   learn:    [Sentence],
 *   review:   [Sentence | { ref: 'D02-S03' }],
 *   patterns: [{ id, formula, meaning, examples: [String], note? }],
 *   shadowing:[sentenceId],
 *   speaking: [{ q, qId, hint, example }],
 *   talk321:  { topic } | null
 * })
 *
 * Sentence = {
 *   id: 'D01-S01', english, pronunciation, translation,
 *   words:   [[word, meaningInThisContext, baseForm?]],
 *   phrases: [[phrase, meaning]],
 *   pattern: 'D01-P1' (opsional), ipa: '' (opsional, untuk masa depan)
 * }
 */
window.E90 = window.E90 || {};

(() => {
  const C = E90.CURRICULUM;
  const days = new Map();          // day number -> normalized day
  const sentences = new Map();     // sentence id -> sentence
  const patterns = new Map();      // pattern id -> pattern
  let vocabIndex = null;

  E90.registerDay = (raw) => {
    days.set(raw.day, raw);
  };

  const dayOfId = (id) => Number(String(id).match(/^D(\d+)/)?.[1]) || 0;

  function normalizeDay(raw) {
    const own = (s) => {
      const sentence = {
        ...s,
        day: raw.day,
        words: s.words || [],
        phrases: s.phrases || []
      };
      sentences.set(s.id, sentence);
      return sentence;
    };
    raw.learn = raw.learn.map(own);
    raw.review = (raw.review || []).map((r) => (r.ref ? r : own(r)));
    (raw.patterns || []).forEach((p) => patterns.set(p.id, { ...p, day: raw.day }));
    raw.speaking = raw.speaking || [];
    raw.shadowing = raw.shadowing || [];
  }

  function loadScript(src) {
    return new Promise((resolve) => {
      const el = document.createElement('script');
      el.src = src;
      el.onload = () => resolve(true);
      el.onerror = () => {
        console.warn('[E90] Gagal memuat', src);
        resolve(false);
      };
      document.head.appendChild(el);
    });
  }

  async function load() {
    await Promise.all(
      C.AVAILABLE_DAYS.map((d) => loadScript(`data/days/day-${String(d).padStart(2, '0')}.js`))
    );
    [...days.keys()].sort((a, b) => a - b).forEach((d) => normalizeDay(days.get(d)));
  }

  const phaseOf = (day) => C.phases.find((p) => day >= p.from && day <= p.to) || C.phases[C.phases.length - 1];
  const titleOf = (day) => C.titles[day - 1] || `Day ${day}`;
  const isAvailable = (day) => days.has(day);
  const getDay = (day) => days.get(day) || null;
  const getSentence = (id) => sentences.get(id) || null;
  const getPattern = (id) => patterns.get(id) || null;
  const availableDays = () => [...days.keys()].sort((a, b) => a - b);

  // Kalimat Learn + Review satu hari, dengan referensi sudah di-resolve.
  function daySentences(day, { includeReview = true } = {}) {
    const d = getDay(day);
    if (!d) return [];
    const list = d.learn.map((s) => ({ s, review: false }));
    if (includeReview) {
      d.review.forEach((r) => {
        const s = r.ref ? getSentence(r.ref) : r;
        if (s) list.push({ s, review: true });
      });
    }
    return list;
  }

  const allSentences = () => [...sentences.values()];

  function sentencesUpTo(day) {
    return allSentences().filter((s) => s.day <= day);
  }

  function search(query, limit = 60) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const hits = [];
    for (const s of sentences.values()) {
      const inEnglish = s.english.toLowerCase().includes(q);
      const inMeaning = s.translation.toLowerCase().includes(q);
      const inWords = s.words.some(([w, m]) => w.toLowerCase() === q || m.toLowerCase().includes(q));
      const inTopic = titleOf(s.day).toLowerCase().includes(q);
      if (inEnglish || inMeaning || inWords || inTopic) {
        hits.push({ s, score: inEnglish ? 0 : inWords ? 1 : inMeaning ? 2 : 3 });
      }
    }
    return hits
      .sort((a, b) => a.score - b.score || a.s.day - b.s.day)
      .slice(0, limit)
      .map((h) => h.s);
  }

  /*
   * Vocabulary Bank dibangun otomatis dari arti per kata di setiap kalimat.
   * Satu kata bisa punya beberapa arti sesuai konteks (mis. cold = pilek / dingin).
   */
  function vocab() {
    if (vocabIndex) return vocabIndex;
    const map = new Map();
    const sorted = allSentences().sort((a, b) => a.id.localeCompare(b.id));
    for (const s of sorted) {
      for (const [word, meaning, base] of s.words) {
        if (word.includes('{')) continue;
        const key = (base || word).toLowerCase();
        // Nama tempat/kata yang artinya sama persis (mis. Bandung, web) tidak dijadikan latihan.
        if (meaning.trim().toLowerCase() === word.trim().toLowerCase()) continue;
        if (!map.has(key)) map.set(key, { key, word: base || word.toLowerCase(), senses: [], ids: [] });
        const entry = map.get(key);
        let sense = entry.senses.find((x) => x.meaning === meaning);
        if (!sense) entry.senses.push((sense = { meaning, form: word, ids: [] }));
        if (!sense.ids.includes(s.id)) sense.ids.push(s.id);
        if (!entry.ids.includes(s.id)) entry.ids.push(s.id);
      }
    }
    vocabIndex = map;
    return map;
  }

  E90.content = {
    load, phaseOf, titleOf, isAvailable, getDay, getSentence, getPattern,
    availableDays, daySentences, allSentences, sentencesUpTo, search, vocab, dayOfId
  };
})();
