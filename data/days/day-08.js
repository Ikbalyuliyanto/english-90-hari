E90.registerDay({
  day: 8,
  titleId: 'Berbelanja',
  goal: 'Menanyakan harga, ukuran, dan cara bayar.',

  learn: [
    {
      id: 'D08-S01',
      english: "I'm looking for a shirt.",
      pronunciation: 'aim lu-king for e shert',
      translation: 'Saya sedang mencari kemeja.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['looking', 'mencari (dalam "look for")', 'look'], ['for', '(bagian dari "look for")'], ['a', 'sebuah'], ['shirt', 'kemeja']],
      phrases: [['look for', 'mencari']],
      pattern: 'D08-P1'
    },
    {
      id: 'D08-S02',
      english: 'How much is this?',
      pronunciation: 'hau mach iz dis?',
      translation: 'Berapa harga ini?',
      words: [['How', 'seberapa'], ['much', 'banyak'], ['is', 'adalah', 'be'], ['this', 'ini']],
      phrases: [['how much', 'berapa (harga / jumlah)']]
    },
    {
      id: 'D08-S03',
      english: "It's too expensive.",
      pronunciation: 'its tu eks-pen-siv',
      translation: 'Ini terlalu mahal.',
      words: [["It's", 'ini (adalah) — it is', 'be'], ['too', 'terlalu'], ['expensive', 'mahal']]
    },
    {
      id: 'D08-S04',
      english: 'Can you give me a discount?',
      pronunciation: 'ken yu giv mi e dis-kaunt?',
      translation: 'Bisa beri saya diskon?',
      words: [['Can', 'bisakah'], ['you', 'Anda'], ['give', 'memberi'], ['me', 'saya (sebagai objek)'], ['a', 'sebuah'], ['discount', 'diskon / potongan harga']]
    },
    {
      id: 'D08-S05',
      english: "I'll take it.",
      pronunciation: 'ail teik it',
      translation: 'Saya ambil yang ini.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['take', 'ambil / beli'], ['it', 'itu']],
      pattern: 'D08-P3'
    },
    {
      id: 'D08-S06',
      english: "I don't need it.",
      pronunciation: 'ai dount nid it',
      translation: 'Saya tidak membutuhkannya.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['need', 'membutuhkan'], ['it', 'itu / -nya']]
    },
    {
      id: 'D08-S07',
      english: 'Do you have a bigger size?',
      pronunciation: 'du yu hev e bi-ger saiz?',
      translation: 'Ada ukuran yang lebih besar?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'Anda'], ['have', 'punya'], ['a', 'sebuah'], ['bigger', 'lebih besar', 'big'], ['size', 'ukuran']],
      pattern: 'D08-P2'
    },
    {
      id: 'D08-S08',
      english: 'Do you have a smaller size?',
      pronunciation: 'du yu hev e smo-ler saiz?',
      translation: 'Ada ukuran yang lebih kecil?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'Anda'], ['have', 'punya'], ['a', 'sebuah'], ['smaller', 'lebih kecil', 'small'], ['size', 'ukuran']],
      pattern: 'D08-P2'
    },
    {
      id: 'D08-S09',
      english: 'Can I try it on?',
      pronunciation: 'ken ai trai it on?',
      translation: 'Boleh saya mencobanya?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['try', 'mencoba'], ['it', 'itu / -nya'], ['on', 'di badan (dalam "try on")']],
      phrases: [['try ... on', 'mencoba memakai (pakaian/sepatu)']],
      pattern: 'D08-P4'
    },
    {
      id: 'D08-S10',
      english: 'Where is the fitting room?',
      pronunciation: 'wer iz de fi-ting rum?',
      translation: 'Di mana ruang ganti?',
      words: [['Where', 'di mana'], ['is', 'berada', 'be'], ['the', 'itu / -nya'], ['fitting', 'mencoba pakaian', 'fit'], ['room', 'ruang']],
      phrases: [['fitting room', 'ruang ganti / kamar pas']]
    },
    {
      id: 'D08-S11',
      english: "I'll pay by cash.",
      pronunciation: 'ail pei bai kesh',
      translation: 'Saya bayar tunai.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['pay', 'membayar'], ['by', 'dengan (cara)'], ['cash', 'uang tunai']],
      phrases: [['pay by / pay in cash', 'bayar tunai']],
      pattern: 'D08-P3'
    },
    {
      id: 'D08-S12',
      english: "I'll pay by card.",
      pronunciation: 'ail pei bai kard',
      translation: 'Saya bayar dengan kartu.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['pay', 'membayar'], ['by', 'dengan (cara)'], ['card', 'kartu']],
      pattern: 'D08-P3'
    },
    {
      id: 'D08-S13',
      english: 'Can I get a receipt?',
      pronunciation: 'ken ai get e ri-sit?',
      translation: 'Bisa saya minta struk?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['get', 'mendapat / minta'], ['a', 'sebuah'], ['receipt', 'struk / kuitansi (huruf p tidak dibaca)']],
      pattern: 'D08-P4'
    },
    {
      id: 'D08-S14',
      english: 'Can I return this?',
      pronunciation: 'ken ai ri-tern dis?',
      translation: 'Bisa saya mengembalikan ini?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['return', 'mengembalikan'], ['this', 'ini']],
      pattern: 'D08-P4'
    },
    {
      id: 'D08-S15',
      english: 'Thank you.',
      pronunciation: 'thengk yu',
      translation: 'Terima kasih.',
      words: [['Thank', 'berterima kasih'], ['you', 'kamu / Anda']]
    }
  ],

  review: [
    { ref: 'D03-S09' },
    { ref: 'D03-S08' },
    { ref: 'D07-S03' }
  ],

  patterns: [
    {
      id: 'D08-P1',
      formula: "I'm looking for + BENDA",
      meaning: 'Saya sedang mencari ...',
      examples: ["I'm looking for a charger.", "I'm looking for the meeting room.", "I'm looking for a new job.", "I'm looking for my keys."]
    },
    {
      id: 'D08-P2',
      formula: 'Do you have + BENDA?',
      meaning: 'Apakah Anda punya / ada ...?',
      examples: ['Do you have this in black?', 'Do you have a smaller one?', 'Do you have time now?', 'Do you have any questions?']
    },
    {
      id: 'D08-P3',
      formula: "I'll + KATA KERJA",
      meaning: 'Saya akan ... (keputusan saat itu juga)',
      examples: ["I'll take this one.", "I'll pay by QR code.", "I'll check it.", "I'll call you later."],
      note: '"I\'ll" dipakai untuk keputusan yang diambil saat bicara.'
    },
    {
      id: 'D08-P4',
      formula: 'Can I + KATA KERJA?',
      meaning: 'Boleh saya ...?',
      examples: ['Can I pay by card?', 'Can I ask a question?', 'Can I leave early today?', 'Can I see the menu?']
    }
  ],

  shadowing: ['D08-S01', 'D08-S02', 'D08-S07', 'D08-S09'],

  speaking: [
    { q: 'You want to buy a laptop bag. What do you say to the shop staff?', qId: 'Kamu mau beli tas laptop. Bilang apa ke pegawai toko?', hint: "I'm looking for ... / Do you have ...?", example: "Hi, I'm looking for a laptop bag. Do you have a black one?" },
    { q: 'The price is too high. What do you say?', qId: 'Harganya terlalu mahal. Kamu bilang apa?', hint: "It's too ... Can you ...?", example: "It's a bit too expensive. Can you give me a discount?" },
    { q: 'How do you usually pay when you shop?', qId: 'Biasanya kamu bayar dengan apa saat belanja?', hint: 'I usually pay by ...', example: 'I usually pay by QR code or by card.' }
  ],

  talk321: null
});
