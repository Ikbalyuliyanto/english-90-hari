E90.registerDay({
  day: 39,
  titleId: 'Dasar-dasar Meeting',
  goal: 'Mengikuti dan mengarahkan meeting sederhana: memulai, pindah topik, bertanya, menambahkan poin, dan menutup.',

  learn: [
    {
      id: 'D39-S01',
      english: "Okay, let's start.",
      pronunciation: 'ou-kei, lets start',
      translation: 'Oke, ayo kita mulai.',
      words: [['Okay', 'oke / baik'], ["let's", 'mari kita (let us)', 'let'], ['start', 'mulai']],
      pattern: 'D39-P1'
    },
    {
      id: 'D39-S02',
      english: "Let's move on to the next topic.",
      pronunciation: 'lets muv on tu de nekst to-pik',
      translation: 'Ayo lanjut ke topik berikutnya.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['move', '(bagian dari "move on")'], ['on', 'lanjut (dalam "move on")'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['next', 'berikutnya'], ['topic', 'topik']],
      phrases: [['move on to', 'lanjut ke']],
      pattern: 'D39-P1'
    },
    {
      id: 'D39-S03',
      english: 'Can we discuss the budget?',
      pronunciation: 'ken wi dis-kas de ba-jet?',
      translation: 'Bisa kita bahas anggarannya?',
      words: [['Can', 'bisakah'], ['we', 'kita'], ['discuss', 'membahas (tanpa "about")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['budget', 'anggaran']],
      phrases: [['discuss something', 'membahas sesuatu — bukan "discuss about"']],
      pattern: 'D39-P2'
    },
    {
      id: 'D39-S04',
      english: "I'd like to add something.",
      pronunciation: 'aid laik tu ed sam-thing',
      translation: 'Saya ingin menambahkan sesuatu.',
      words: [["I'd", 'saya ingin (I would, dalam "I\'d like")', 'will'], ['like', 'ingin (dalam "would like")'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['add', 'menambahkan'], ['something', 'sesuatu']],
      pattern: 'D39-P3'
    },
    {
      id: 'D39-S05',
      english: 'I have a question.',
      pronunciation: 'ai hev e kwes-chen',
      translation: 'Saya punya pertanyaan.',
      words: [['I', 'saya'], ['have', 'punya'], ['a', 'sebuah (tidak diterjemahkan)'], ['question', 'pertanyaan']],
      pattern: 'D39-P4'
    },
    {
      id: 'D39-S06',
      english: 'Can I say something?',
      pronunciation: 'ken ai sei sam-thing?',
      translation: 'Boleh saya bicara?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['say', 'mengatakan'], ['something', 'sesuatu']],
      pattern: 'D39-P4'
    },
    {
      id: 'D39-S07',
      english: "Let's come back to that later.",
      pronunciation: 'lets kam bek tu det lei-ter',
      translation: 'Nanti kita bahas lagi soal itu.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['come', 'datang'], ['back', 'kembali'], ['to', 'ke'], ['that', 'itu / hal itu'], ['later', 'nanti']],
      phrases: [['come back to', 'kembali membahas']],
      pattern: 'D39-P1'
    },
    {
      id: 'D39-S08',
      english: 'Anything else?',
      pronunciation: 'e-ni-thing els?',
      translation: 'Ada lagi?',
      words: [['Anything', 'apa pun / sesuatu'], ['else', 'lain / lagi']],
      phrases: [['anything else?', 'ada hal lain? / ada lagi? (sering untuk menutup rapat)']]
    },
    {
      id: 'D39-S09',
      english: 'That makes sense.',
      pronunciation: 'det meiks sens',
      translation: 'Masuk akal.',
      words: [['That', 'itu'], ['makes', 'membuat; -s karena "that"', 'make'], ['sense', 'akal / makna']],
      phrases: [['make sense', 'masuk akal / bisa dipahami']]
    },
    {
      id: 'D39-S10',
      english: 'Sorry, can I finish my point?',
      pronunciation: 'so-ri, ken ai fi-nish mai point?',
      translation: 'Maaf, boleh saya selesaikan dulu poin saya?',
      words: [['Sorry', 'maaf'], ['can', 'bolehkah'], ['I', 'saya'], ['finish', 'menyelesaikan'], ['my', 'milik saya'], ['point', 'poin / maksud']],
      pattern: 'D26-P1'
    }
  ],

  review: [
    {
      id: 'D39-S11',
      english: "I'm going to share my screen now.",
      pronunciation: 'aim gou-ing tu sher mai skrin nau',
      translation: 'Saya akan berbagi layar sekarang.',
      words: [["I'm", 'saya (I am)', 'be'], ['going', 'akan (dalam "going to")', 'go'], ['to', '(bagian dari "going to")'], ['share', 'membagikan'], ['my', 'milik saya'], ['screen', 'layar'], ['now', 'sekarang']],
      pattern: 'D18-P1'
    },
    {
      id: 'D39-S12',
      english: 'Can everyone hear me?',
      pronunciation: 'ken ev-ri-wan hir mi?',
      translation: 'Semua bisa dengar suara saya?',
      words: [['Can', 'bisakah'], ['everyone', 'semua orang'], ['hear', 'mendengar'], ['me', 'saya (sebagai objek)']],
      pattern: 'D19-P2'
    },
    {
      id: 'D39-S13',
      english: 'What do you think about this plan?',
      pronunciation: 'wat du yu thingk e-baut dis plen?',
      translation: 'Bagaimana pendapatmu tentang rencana ini?',
      words: [['What', 'apa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['think', 'berpendapat'], ['about', 'tentang'], ['this', 'ini'], ['plan', 'rencana']],
      pattern: 'D27-P4'
    },
    { ref: 'D29-S08' },
    { ref: 'D38-S10' }
  ],

  patterns: [
    {
      id: 'D39-P1',
      formula: "Let's + start / move on to / come back to + BENDA",
      meaning: 'Mengatur jalannya rapat',
      examples: ["Let's start with the updates.", "Let's move on to the next item.", "Let's come back to this question tomorrow."]
    },
    {
      id: 'D39-P2',
      formula: 'Can we discuss + BENDA?',
      meaning: 'Bisa kita bahas ...?',
      examples: ['Can we discuss the timeline?', 'Can we discuss this after the meeting?', 'Can we talk about the budget first?']
    },
    {
      id: 'D39-P3',
      formula: "I'd like to + KATA KERJA",
      meaning: 'Saya ingin ... (sopan)',
      examples: ["I'd like to add one point.", "I'd like to ask a question.", "I'd like to share an update."]
    },
    {
      id: 'D39-P4',
      formula: 'I have a question about + BENDA  ·  Can I say something?',
      meaning: 'Masuk ke percakapan di rapat',
      examples: ['I have a question about the design.', 'Can I add something here?', 'Sorry to interrupt, but I have a question.'],
      note: 'Menyela dengan sopan: "Sorry to interrupt, but ...".'
    }
  ],

  shadowing: ['D39-S02', 'D39-S04', 'D39-S06', 'D39-S09'],

  speaking: [
    { q: 'You are leading a short meeting. Open it and introduce the first topic.', qId: 'Kamu memimpin rapat singkat. Buka rapat dan sebutkan topik pertama.', hint: "Okay, let's start. First, let's discuss ...", example: "Okay, let's start. Thanks for joining. First, let's discuss the schedule for next week." },
    { q: 'You want to add a point during the discussion. What do you say?', qId: 'Kamu ingin menambahkan poin saat diskusi. Kamu bilang apa?', hint: "Can I say something? I'd like to add ...", example: "Can I say something? I'd like to add that the client also needs a mobile version." },
    { q: 'The discussion is taking too long. Move the meeting forward.', qId: 'Diskusinya terlalu lama. Arahkan rapat supaya lanjut.', hint: "That makes sense. Let's come back to that later. Let's move on to ...", example: "That makes sense. Let's come back to that later and move on to the next topic." },
    { q: 'Close the meeting.', qId: 'Tutup rapatnya.', hint: 'Anything else? ... Thanks, everyone.', example: "Anything else? No? Okay, thanks, everyone. See you tomorrow." }
  ],

  talk321: null
});
