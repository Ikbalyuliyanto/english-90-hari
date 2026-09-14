E90.registerDay({
  day: 19,
  titleId: 'Can & Could: Kemampuan dan Permintaan',
  goal: 'Menyebut kemampuan, meminta bantuan, dan minta izin — termasuk saat online meeting.',

  learn: [
    {
      id: 'D19-S01',
      english: 'Can you speak English?',
      pronunciation: 'ken yu spik ing-glish?',
      translation: 'Kamu bisa berbahasa Inggris?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['speak', 'berbicara'], ['English', 'bahasa Inggris']]
    },
    {
      id: 'D19-S02',
      english: 'I can speak a little English.',
      pronunciation: 'ai ken spik e li-tel ing-glish',
      translation: 'Saya bisa sedikit berbahasa Inggris.',
      words: [['I', 'saya'], ['can', 'bisa'], ['speak', 'berbicara'], ['a', '(bagian dari "a little")'], ['little', 'sedikit'], ['English', 'bahasa Inggris']],
      phrases: [['a little', 'sedikit']],
      pattern: 'D19-P1'
    },
    {
      id: 'D19-S03',
      english: "I can't hear you.",
      pronunciation: 'ai kent hir yu',
      translation: 'Saya tidak bisa mendengarmu.',
      words: [['I', 'saya'], ["can't", 'tidak bisa (cannot)', 'can'], ['hear', 'mendengar'], ['you', 'kamu']],
      pattern: 'D19-P1'
    },
    {
      id: 'D19-S04',
      english: 'Can you hear me now?',
      pronunciation: 'ken yu hir mi nau?',
      translation: 'Sekarang suara saya terdengar?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['hear', 'mendengar'], ['me', 'saya (sebagai objek)'], ['now', 'sekarang']],
      pattern: 'D19-P2'
    },
    {
      id: 'D19-S05',
      english: 'Could you help me with this?',
      pronunciation: 'kud yu help mi with dis?',
      translation: 'Bisakah kamu membantu saya dengan ini?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['help', 'membantu'], ['me', 'saya (sebagai objek)'], ['with', 'dengan / untuk'], ['this', 'ini']],
      phrases: [['help someone with something', 'membantu seseorang dalam sesuatu']],
      pattern: 'D19-P4'
    },
    {
      id: 'D19-S06',
      english: 'Could you send me the file?',
      pronunciation: 'kud yu send mi de fail?',
      translation: 'Bisakah kamu mengirimkan file-nya ke saya?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['send', 'mengirim'], ['me', 'kepada saya'], ['the', 'itu / -nya'], ['file', 'berkas / file']],
      pattern: 'D19-P2'
    },
    {
      id: 'D19-S07',
      english: 'Can I ask a question?',
      pronunciation: 'ken ai esk e kwes-chen?',
      translation: 'Boleh saya bertanya?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['ask', 'bertanya / mengajukan'], ['a', 'sebuah'], ['question', 'pertanyaan']],
      phrases: [['ask a question', 'mengajukan pertanyaan']],
      pattern: 'D19-P3'
    },
    {
      id: 'D19-S08',
      english: "I couldn't finish it yesterday.",
      pronunciation: 'ai ku-dent fi-nish it yes-ter-dei',
      translation: 'Saya tidak bisa menyelesaikannya kemarin.',
      words: [['I', 'saya'], ["couldn't", 'tidak bisa (lampau) — could not', 'can'], ['finish', 'menyelesaikan'], ['it', 'itu / -nya'], ['yesterday', 'kemarin']],
      phrases: [["couldn't", 'tidak bisa (di masa lalu); huruf l tidak dibaca']]
    },
    {
      id: 'D19-S09',
      english: 'Can you share your screen?',
      pronunciation: 'ken yu sher yor skrin?',
      translation: 'Bisa kamu bagikan layarmu?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['share', 'membagikan'], ['your', 'milikmu'], ['screen', 'layar']],
      phrases: [['share your screen', 'berbagi layar (di online meeting)']],
      pattern: 'D19-P2'
    },
    {
      id: 'D19-S10',
      english: 'Sure, I can do that.',
      pronunciation: 'syur, ai ken du det',
      translation: 'Tentu, saya bisa melakukannya.',
      words: [['Sure', 'tentu'], ['I', 'saya'], ['can', 'bisa'], ['do', 'melakukan'], ['that', 'itu / hal itu']],
      pattern: 'D19-P1'
    }
  ],

  review: [
    {
      id: 'D19-S11',
      english: 'Could you speak a bit louder?',
      pronunciation: 'kud yu spik e bit lau-der?',
      translation: 'Bisakah kamu bicara sedikit lebih keras?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['speak', 'berbicara'], ['a', '(bagian dari "a bit")'], ['bit', 'sedikit'], ['louder', 'lebih keras (suara)', 'loud']],
      phrases: [['a bit', 'sedikit']],
      pattern: 'D13-P3'
    },
    {
      id: 'D19-S12',
      english: 'Can I pay by QR code?',
      pronunciation: 'ken ai pei bai kyu-ar koud?',
      translation: 'Boleh saya bayar pakai QR code?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['pay', 'membayar'], ['by', 'dengan (cara)'], ['QR', 'QR (Quick Response)'], ['code', 'kode']],
      pattern: 'D08-P4'
    },
    {
      id: 'D19-S13',
      english: 'I need to ask my manager.',
      pronunciation: 'ai nid tu esk mai me-ne-jer',
      translation: 'Saya perlu bertanya ke atasan saya.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', 'untuk (penanda kata kerja)'], ['ask', 'bertanya kepada'], ['my', 'milik saya'], ['manager', 'manajer / atasan']],
      pattern: 'D11-P2'
    },
    { ref: 'D14-S05' },
    { ref: 'D13-S13' }
  ],

  patterns: [
    {
      id: 'D19-P1',
      formula: "I can / I can't + KATA KERJA",
      meaning: 'Saya bisa / tidak bisa ...',
      examples: ['I can use Git.', "I can't join the meeting today.", 'I can read English well.', "I can't open the link."],
      note: 'Latihan listening: "can" biasanya diucapkan pendek dan lemah ("ken"), sedangkan "can\'t" lebih jelas dan panjang ("kent").'
    },
    {
      id: 'D19-P2',
      formula: 'Can you / Could you + KATA KERJA?',
      meaning: 'Bisakah kamu ...? (could lebih sopan)',
      examples: ['Can you check this?', 'Could you review my code?', 'Could you share the link?', 'Can you turn on your camera?']
    },
    {
      id: 'D19-P3',
      formula: 'Can I + KATA KERJA?',
      meaning: 'Boleh saya ...?',
      examples: ['Can I join the call?', 'Can I work from home tomorrow?', 'Can I borrow your charger?', 'Can I share my screen?']
    },
    {
      id: 'D19-P4',
      formula: 'Could you help me with + BENDA?',
      meaning: 'Bisakah kamu membantu saya dengan ...?',
      examples: ['Could you help me with this bug?', 'Could you help me with the setup?', 'Could you help me with my English?']
    }
  ],

  shadowing: ['D19-S03', 'D19-S04', 'D19-S05', 'D19-S07'],

  speaking: [
    { q: 'What can you do well? What can\'t you do yet?', qId: 'Apa yang bisa kamu lakukan dengan baik? Apa yang belum bisa?', hint: "I can ... well. I can't ... yet.", example: "I can build web applications. I can't speak English fluently yet." },
    { q: "In an online meeting, you can't hear the speaker. What do you say?", qId: 'Di online meeting kamu tidak bisa mendengar pembicara. Kamu bilang apa?', hint: "Sorry, I can't ... Could you ...?", example: "Sorry, I can't hear you clearly. Could you speak a bit louder?" },
    { q: 'Ask a colleague to help you with something at work.', qId: 'Minta bantuan rekan kerja untuk sesuatu.', hint: 'Could you help me with ...?', example: 'Could you help me with this error? I don\'t understand the message.' }
  ],

  talk321: null
});
