E90.registerDay({
  day: 29,
  titleId: 'Telepon, Chat & Komunikasi Online',
  goal: 'Bertelepon, mengatasi masalah koneksi saat call, dan membalas chat singkat.',

  learn: [
    {
      id: 'D29-S01',
      english: 'Hello, this is {name} speaking.',
      pronunciation: 'he-lou, dis iz ... spi-king',
      translation: 'Halo, saya ... (yang berbicara).',
      words: [['Hello', 'halo'], ['this', 'ini (di telepon: saya)'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['{name}', '(isi dengan namamu)'], ['speaking', 'berbicara', 'speak']],
      phrases: [['this is ... speaking', 'saya ... (memperkenalkan diri di telepon)']],
      pattern: 'D29-P1'
    },
    {
      id: 'D29-S02',
      english: 'The connection is bad.',
      pronunciation: 'de ke-nek-shen iz bed',
      translation: 'Koneksinya jelek.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['connection', 'koneksi / sambungan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['bad', 'buruk / jelek']],
      pattern: 'D29-P2'
    },
    {
      id: 'D29-S03',
      english: "You're breaking up.",
      pronunciation: 'yor brei-king ap',
      translation: 'Suaramu putus-putus.',
      words: [["You're", 'kamu sedang (you are)', 'be'], ['breaking', 'terputus-putus (dalam "break up")', 'break'], ['up', '(bagian dari "break up")']],
      phrases: [["you're breaking up", 'suaramu putus-putus (saat telepon/online call)']],
      pattern: 'D29-P2'
    },
    {
      id: 'D29-S04',
      english: "I'll call you back.",
      pronunciation: 'ail kol yu bek',
      translation: 'Nanti saya telepon balik.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['call', 'menelepon'], ['you', 'kamu'], ['back', 'kembali / balik']],
      phrases: [['call someone back', 'menelepon balik']],
      pattern: 'D29-P3'
    },
    {
      id: 'D29-S05',
      english: 'Please send it to me.',
      pronunciation: 'pliz send it tu mi',
      translation: 'Tolong kirimkan ke saya.',
      words: [['Please', 'tolong'], ['send', 'kirim'], ['it', 'itu / -nya'], ['to', 'ke / kepada'], ['me', 'saya (sebagai objek)']],
      pattern: 'D29-P4'
    },
    {
      id: 'D29-S06',
      english: 'I just sent it.',
      pronunciation: 'ai jast sent it',
      translation: 'Baru saja saya kirim.',
      words: [['I', 'saya'], ['just', 'baru saja'], ['sent', 'mengirim (lampau)', 'send'], ['it', 'itu / -nya']],
      phrases: [['just + kata kerja lampau', 'baru saja ...']],
      pattern: 'D29-P5'
    },
    {
      id: 'D29-S07',
      english: 'Did you get my message?',
      pronunciation: 'did yu get mai me-sij?',
      translation: 'Pesan saya sudah sampai?',
      words: [['Did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['get', 'menerima'], ['my', 'milik saya'], ['message', 'pesan']],
      pattern: 'D17-P3'
    },
    {
      id: 'D29-S08',
      english: 'Sorry, I was on mute.',
      pronunciation: 'so-ri, ai woz on myut',
      translation: 'Maaf, mikrofon saya tadi mati.',
      words: [['Sorry', 'maaf'], ['I', 'saya'], ['was', '(to be bentuk lampau, tidak diterjemahkan)', 'be'], ['on', 'dalam keadaan (dalam "on mute")'], ['mute', 'bisu / mikrofon dimatikan']],
      phrases: [['on mute', 'mikrofon sedang dimatikan']],
      pattern: 'D29-P2'
    },
    {
      id: 'D29-S09',
      english: 'Let me share my screen.',
      pronunciation: 'let mi sher mai skrin',
      translation: 'Saya bagikan layar saya, ya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['share', 'membagikan'], ['my', 'milik saya'], ['screen', 'layar']],
      phrases: [['share my screen', 'berbagi layar']],
      pattern: 'D26-P3'
    },
    {
      id: 'D29-S10',
      english: "I'll text you when I arrive.",
      pronunciation: 'ail tekst yu wen ai e-raiv',
      translation: 'Saya kirim pesan ke kamu kalau sudah sampai.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['text', 'mengirim pesan singkat / chat'], ['you', 'kepada kamu'], ['when', 'ketika / kalau'], ['I', 'saya'], ['arrive', 'tiba / sampai']],
      phrases: [['text someone', 'mengirim pesan singkat ke seseorang']],
      pattern: 'D29-P3'
    }
  ],

  review: [
    {
      id: 'D29-S11',
      english: 'Could you call me in five minutes?',
      pronunciation: 'kud yu kol mi in faiv mi-nits?',
      translation: 'Bisakah kamu menelepon saya lima menit lagi?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['call', 'menelepon'], ['me', 'saya (sebagai objek)'], ['in', 'dalam (waktu ... lagi)'], ['five', 'lima'], ['minutes', 'menit (jamak)', 'minute']],
      phrases: [['in + waktu', '... lagi (dari sekarang)']],
      pattern: 'D19-P2'
    },
    {
      id: 'D29-S12',
      english: "I'm going to join the call late.",
      pronunciation: 'aim gou-ing tu join de kol leit',
      translation: 'Saya akan telat bergabung ke call.',
      words: [["I'm", 'saya (I am)', 'be'], ['going', 'akan (dalam "going to")', 'go'], ['to', '(bagian dari "going to")'], ['join', 'bergabung ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['call', 'panggilan / call (kata benda)'], ['late', 'terlambat']],
      pattern: 'D18-P1'
    },
    {
      id: 'D29-S13',
      english: "I didn't get the email.",
      pronunciation: 'ai di-dent get di i-meil',
      translation: 'Saya tidak menerima email-nya.',
      words: [['I', 'saya'], ["didn't", 'tidak (lampau) — did not', 'do'], ['get', 'menerima'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['email', 'email / surel']],
      pattern: 'D17-P2'
    },
    { ref: 'D19-S04' },
    { ref: 'D19-S03' },
    { ref: 'D13-S14' }
  ],

  patterns: [
    {
      id: 'D29-P1',
      formula: 'This is + NAMA (+ from + PERUSAHAAN / TIM)',
      meaning: 'Saya ... (dari ...) — memperkenalkan diri di telepon',
      examples: ['This is Rina from ABC Company.', 'Hi, this is Budi from the IT team.', 'Hello, this is Kevin speaking.'],
      note: 'Di telepon, orang memakai "This is ...", bukan "I am ...".'
    },
    {
      id: 'D29-P2',
      formula: 'Sorry, + MASALAH SAAT CALL',
      meaning: 'Menjelaskan masalah koneksi / audio',
      examples: ['Sorry, my internet is slow.', 'Sorry, my camera isn\'t working.', 'Sorry, the audio is not clear.'],
      note: 'Pasangkan dengan permintaan: "Could you repeat that?" atau "Can you hear me now?".'
    },
    {
      id: 'D29-P3',
      formula: "I'll + call / text / email + you + back / later / when ...",
      meaning: 'Saya akan menghubungi lagi ...',
      examples: ["I'll call you back in ten minutes.", "I'll email you later.", "I'll text you when I'm ready."],
      note: 'Setelah "when", pakai bentuk sekarang: when I arrive (bukan when I will arrive).'
    },
    {
      id: 'D29-P4',
      formula: 'Please send + BENDA + to me  ·  Could you send me + BENDA?',
      meaning: 'Tolong kirimkan ... ke saya',
      examples: ['Please send the file to me.', 'Could you send me the meeting link?', 'Please send it to my email.']
    },
    {
      id: 'D29-P5',
      formula: 'I just + KATA KERJA lampau',
      meaning: 'Saya baru saja ...',
      examples: ['I just arrived.', 'I just replied to your email.', 'I just finished the meeting.']
    }
  ],

  shadowing: ['D29-S02', 'D29-S03', 'D29-S04', 'D29-S06'],

  speaking: [
    { q: 'Answer a phone call from a client and introduce yourself.', qId: 'Angkat telepon dari klien dan perkenalkan diri.', hint: 'Hello, this is ... How can I help you?', example: 'Hello, this is Rina from the IT team. How can I help you?' },
    { q: 'In an online meeting, your internet is bad. What do you say?', qId: 'Di online meeting internetmu jelek. Kamu bilang apa?', hint: "Sorry, the connection is bad. Can you hear me? I'll ...", example: "Sorry, the connection is bad. Can you hear me? If not, I'll call you back." },
    { q: 'Your colleague asks: "Did you send the file?" Answer.', qId: 'Rekan bertanya: "Sudah kirim file-nya?" Jawab.', hint: "Yes, I just ... / Not yet. I'll ...", example: 'Yes, I just sent it. Please check your email.' },
    { q: "You're driving and can't answer a call. Send a short chat message.", qId: 'Kamu sedang menyetir dan tidak bisa angkat telepon. Kirim chat singkat.', hint: "Sorry, I can't talk now. I'll ... when ...", example: "Sorry, I can't talk now. I'll call you back when I arrive." }
  ],

  talk321: null
});
