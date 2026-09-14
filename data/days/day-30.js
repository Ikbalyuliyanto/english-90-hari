E90.registerDay({
  day: 30,
  titleId: 'Checkpoint Foundation',
  goal: 'Bicara 2–3 menit tentang dirimu tanpa membaca script: siapa kamu, rutinitas, pekerjaan, kemarin, besok, hal yang disukai, dan masalah sederhana. Grammar tidak harus sempurna, yang penting maksudnya tersampaikan.',

  // Sedikit kalimat baru: penghubung untuk berbicara lebih panjang.
  learn: [
    {
      id: 'D30-S01',
      english: 'Let me introduce myself.',
      pronunciation: 'let mi in-tro-dyus mai-self',
      translation: 'Izinkan saya memperkenalkan diri.',
      words: [['Let', 'biarkan / izinkan'], ['me', 'saya (sebagai objek)'], ['introduce', 'memperkenalkan'], ['myself', 'diri saya sendiri']],
      phrases: [['introduce myself', 'memperkenalkan diri']],
      pattern: 'D26-P3'
    },
    {
      id: 'D30-S02',
      english: "First, I'd like to talk about my job.",
      pronunciation: 'ferst, aid laik tu tok e-baut mai job',
      translation: 'Pertama, saya ingin bercerita tentang pekerjaan saya.',
      words: [['First', 'pertama'], ["I'd", 'saya ingin (I would, dalam "I\'d like")', 'will'], ['like', 'ingin (dalam "would like")'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['talk', 'berbicara / bercerita'], ['about', 'tentang'], ['my', 'milik saya'], ['job', 'pekerjaan']],
      phrases: [["I'd like to", 'saya ingin (sopan)'], ['talk about', 'membicarakan / bercerita tentang']],
      pattern: 'D30-P1'
    },
    {
      id: 'D30-S03',
      english: 'After that, I usually go home and rest.',
      pronunciation: 'ef-ter det, ai yu-zhu-e-li gou houm en rest',
      translation: 'Setelah itu, saya biasanya pulang dan istirahat.',
      words: [['After', 'setelah'], ['that', 'itu'], ['I', 'saya'], ['usually', 'biasanya'], ['go', 'pergi'], ['home', 'ke rumah'], ['and', 'dan'], ['rest', 'beristirahat']],
      phrases: [['after that', 'setelah itu']],
      pattern: 'D30-P1'
    },
    {
      id: 'D30-S04',
      english: 'Finally, I want to talk about my plans.',
      pronunciation: 'fai-ne-li, ai want tu tok e-baut mai plenz',
      translation: 'Terakhir, saya ingin bercerita tentang rencana saya.',
      words: [['Finally', 'terakhir / akhirnya'], ['I', 'saya'], ['want', 'ingin'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['talk', 'bercerita'], ['about', 'tentang'], ['my', 'milik saya'], ['plans', 'rencana-rencana', 'plan']],
      pattern: 'D30-P1'
    },
    {
      id: 'D30-S05',
      english: "To be honest, my English isn't perfect yet.",
      pronunciation: 'tu bi o-nest, mai ing-glish i-zent per-fekt yet',
      translation: 'Sejujurnya, bahasa Inggris saya belum sempurna.',
      words: [['To', '(bagian dari "to be honest")'], ['be', '(bagian dari "to be honest")'], ['honest', 'jujur (huruf h tidak dibaca)'], ['my', 'milik saya'], ['English', 'bahasa Inggris'], ["isn't", 'tidak (is not)', 'be'], ['perfect', 'sempurna'], ['yet', 'belum (dalam kalimat negatif)']],
      phrases: [['to be honest', 'sejujurnya'], ['not ... yet', 'belum ...']],
      pattern: 'D30-P3'
    },
    {
      id: 'D30-S06',
      english: "But I'm getting better every day.",
      pronunciation: 'bat aim ge-ting be-ter ev-ri dei',
      translation: 'Tapi saya semakin baik setiap hari.',
      words: [['But', 'tetapi'], ["I'm", 'saya sedang (I am)', 'be'], ['getting', 'menjadi / semakin', 'get'], ['better', 'lebih baik', 'good'], ['every', 'setiap'], ['day', 'hari']],
      pattern: 'D10-P2'
    },
    {
      id: 'D30-S07',
      english: "That's all about me. Thank you for listening.",
      pronunciation: 'dets ol e-baut mi. thengk yu for lis-e-ning',
      translation: 'Sekian tentang saya. Terima kasih sudah mendengarkan.',
      words: [["That's", 'itu (that is)', 'that'], ['all', 'semua'], ['about', 'tentang'], ['me', 'saya (sebagai objek)'], ['Thank', 'berterima kasih'], ['you', 'kamu / Anda'], ['for', 'atas / karena'], ['listening', 'mendengarkan (huruf t tidak dibaca)', 'listen']],
      phrases: [["that's all", 'sekian / itu saja'], ['thank you for + -ing', 'terima kasih sudah ...']],
      pattern: 'D30-P1'
    }
  ],

  // Review aktif Day 1–29: satu kalimat untuk setiap bagian cerita 2–3 menit.
  review: [
    { ref: 'D01-S01' },
    { ref: 'D01-S06' },
    { ref: 'D21-S01' },
    { ref: 'D16-S02' },
    { ref: 'D17-S02' },
    { ref: 'D18-S06' },
    { ref: 'D09-S09' },
    { ref: 'D27-S04' },
    { ref: 'D28-S01' },
    { ref: 'D23-S07' },
    { ref: 'D20-S03' }
  ],

  patterns: [
    {
      id: 'D30-P1',
      formula: 'First, ...  →  After that, ...  →  Finally, ...  →  That\'s all.',
      meaning: 'Menyusun cerita panjang menjadi urutan yang jelas',
      examples: ['First, I check my email.', 'After that, I have a short meeting.', 'Finally, I work on my tasks.', "That's all for today."],
      note: 'Kalimat penghubung memberi waktu untuk berpikir dan membuat cerita mudah diikuti.'
    },
    {
      id: 'D30-P2',
      formula: 'I usually ...  ·  Yesterday, I ...-ed  ·  Tomorrow, I\'m going to ...',
      meaning: 'Berpindah waktu: kebiasaan → kemarin → rencana',
      examples: ['I usually start work at nine.', 'Yesterday, I worked from home.', "Tomorrow, I'm going to visit a client."],
      note: 'Kebiasaan: bentuk sekarang. Kemarin: bentuk lampau. Besok: going to / will.'
    },
    {
      id: 'D30-P3',
      formula: 'To be honest, + KALIMAT, + but + KALIMAT',
      meaning: 'Sejujurnya ..., tetapi ...',
      examples: ["To be honest, I'm a little nervous, but I'm ready.", "To be honest, it's difficult, but I like it.", "To be honest, I don't know yet, but I'll check."]
    }
  ],

  shadowing: ['D30-S01', 'D30-S02', 'D30-S05', 'D30-S07'],

  speaking: [
    { q: 'Introduce yourself: your name, your job, and where you live.', qId: 'Perkenalkan diri: nama, pekerjaan, dan tempat tinggal.', hint: "My name is ... I'm a/an ... I work at ... I live in ...", example: 'My name is Rina. I am a software developer. I work at a small company and I live in Bandung.' },
    { q: 'Describe your daily routine.', qId: 'Ceritakan rutinitas harianmu.', hint: 'I usually ... I always ... After that, ...', example: 'I usually get up at six. I always drink coffee first. After that, I go to work by motorbike.' },
    { q: 'What did you do yesterday, and what are you going to do tomorrow?', qId: 'Apa yang kamu lakukan kemarin, dan apa rencanamu besok?', hint: "Yesterday, I ... Tomorrow, I'm going to ...", example: "Yesterday, I finished a report and worked late. Tomorrow, I'm going to meet my team." },
    { q: 'What do you like, and what problem do you have right now?', qId: 'Apa yang kamu suka, dan masalah apa yang sedang kamu hadapi?', hint: 'I like / I prefer ... Right now, I have a problem with ...', example: "I like learning new things. Right now, I have a problem with my laptop. It's very slow." },
    { q: 'FINAL CHALLENGE: Talk for 2–3 minutes about yourself without reading. Include: who you are, your routine, your job, yesterday, tomorrow, what you like, and a small problem.', qId: 'TANTANGAN AKHIR: Bicara 2–3 menit tentang dirimu tanpa membaca. Grammar tidak harus sempurna — pakai timer di HP.', hint: "Let me introduce myself. First, ... After that, ... To be honest, ... Finally, ... That's all about me.", example: "Let me introduce myself. My name is Rina, and I'm a software developer in Bandung. First, I'd like to talk about my job. I work at a software company, and I'm working on a new project. I usually get up at six and start work at nine. Yesterday, I finished a report, but I had a problem with my laptop, so I asked IT for help. Tomorrow, I'm going to meet my team. I like learning new things, and I prefer working in the morning. To be honest, my English isn't perfect yet, but I'm getting better every day. That's all about me. Thank you for listening." }
  ],

  talk321: null
});
