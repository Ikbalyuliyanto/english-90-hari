E90.registerDay({
  day: 3,
  titleId: 'Makan dan Minum',
  goal: 'Mengatakan lapar/haus, memesan, dan bicara saat makan.',

  learn: [
    {
      id: 'D03-S01',
      english: "I'm hungry.",
      pronunciation: 'aim hang-gri',
      translation: 'Saya lapar.',
      words: [["I'm", 'saya (sedang dalam keadaan) — I am', 'be'], ['hungry', 'lapar']],
      pattern: 'D03-P1'
    },
    {
      id: 'D03-S02',
      english: "I'm thirsty.",
      pronunciation: 'aim ther-sti',
      translation: 'Saya haus.',
      words: [["I'm", 'saya (sedang dalam keadaan) — I am', 'be'], ['thirsty', 'haus']],
      pattern: 'D03-P1'
    },
    {
      id: 'D03-S03',
      english: "Let's eat.",
      pronunciation: 'lets it',
      translation: 'Ayo makan.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['eat', 'makan']]
    },
    {
      id: 'D03-S04',
      english: 'What do you want to eat?',
      pronunciation: 'wat du yu want tu it?',
      translation: 'Kamu mau makan apa?',
      words: [['What', 'apa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['want', 'ingin / mau'], ['to', 'untuk (penanda kata kerja)'], ['eat', 'makan']],
      phrases: [['want to eat', 'ingin makan']],
      pattern: 'D03-P4'
    },
    {
      id: 'D03-S05',
      english: 'I like this food.',
      pronunciation: 'ai laik dis fud',
      translation: 'Saya suka makanan ini.',
      words: [['I', 'saya'], ['like', 'suka'], ['this', 'ini'], ['food', 'makanan']],
      pattern: 'D03-P3'
    },
    {
      id: 'D03-S06',
      english: "I don't like spicy food.",
      pronunciation: 'ai dount laik spai-si fud',
      translation: 'Saya tidak suka makanan pedas.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['like', 'suka'], ['spicy', 'pedas'], ['food', 'makanan']],
      phrases: [["don't + kata kerja", 'tidak ...']],
      pattern: 'D03-P3'
    },
    {
      id: 'D03-S07',
      english: 'This is delicious.',
      pronunciation: 'dis iz di-li-shes',
      translation: 'Ini enak sekali.',
      words: [['This', 'ini'], ['is', 'adalah', 'be'], ['delicious', 'lezat / enak sekali']]
    },
    {
      id: 'D03-S08',
      english: 'Can I have some water?',
      pronunciation: 'ken ai hev sam wo-ter?',
      translation: 'Boleh saya minta air?',
      words: [['Can', 'bolehkah'], ['I', 'saya'], ['have', 'mendapat / minta (dalam permintaan)'], ['some', 'sedikit / beberapa'], ['water', 'air']],
      phrases: [['can I have ...?', 'boleh saya minta ...?']],
      pattern: 'D03-P2'
    },
    {
      id: 'D03-S09',
      english: "I'll have coffee.",
      pronunciation: 'ail hev ko-fi',
      translation: 'Saya pesan kopi.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['have', 'pesan / ambil (saat memesan)'], ['coffee', 'kopi']],
      phrases: [["I'll have ...", 'saya pesan ... (saat memesan makanan/minuman)']]
    },
    {
      id: 'D03-S10',
      english: 'I need a drink.',
      pronunciation: 'ai nid e dringk',
      translation: 'Saya perlu minum.',
      words: [['I', 'saya'], ['need', 'perlu / membutuhkan'], ['a', 'sebuah / satu'], ['drink', 'minuman']]
    },
    {
      id: 'D03-S11',
      english: 'I want some water.',
      pronunciation: 'ai want sam wo-ter',
      translation: 'Saya mau air.',
      words: [['I', 'saya'], ['want', 'ingin / mau'], ['some', 'sedikit / beberapa'], ['water', 'air']]
    },
    {
      id: 'D03-S12',
      english: 'Do you want more?',
      pronunciation: 'du yu want mor?',
      translation: 'Kamu mau tambah?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['want', 'ingin / mau'], ['more', 'lagi / lebih banyak']],
      pattern: 'D03-P4'
    },
    {
      id: 'D03-S13',
      english: "I'm full.",
      pronunciation: 'aim ful',
      translation: 'Saya sudah kenyang.',
      words: [["I'm", 'saya (sedang dalam keadaan) — I am', 'be'], ['full', 'kenyang (penuh)']],
      pattern: 'D03-P1'
    },
    {
      id: 'D03-S14',
      english: 'The bill, please.',
      pronunciation: 'de bil, pliz',
      translation: 'Minta tagihannya, ya.',
      words: [['The', 'itu / tersebut'], ['bill', 'tagihan / bon'], ['please', 'tolong']],
      phrases: [['the bill, please', 'minta bon/tagihannya (di restoran)']]
    },
    {
      id: 'D03-S15',
      english: 'Thank you for the meal.',
      pronunciation: 'thengk yu for de mil',
      translation: 'Terima kasih atas makanannya.',
      words: [['Thank', 'berterima kasih'], ['you', 'kamu / Anda'], ['for', 'atas'], ['the', 'itu / tersebut'], ['meal', 'hidangan / makanan']],
      phrases: [['thank you for ...', 'terima kasih atas ...']]
    }
  ],

  review: [
    { ref: 'D01-S13' },
    { ref: 'D01-S11' },
    { ref: 'D02-S05' },
    { ref: 'D02-S09' }
  ],

  patterns: [
    {
      id: 'D03-P1',
      formula: "I'm + KEADAAN",
      meaning: 'Saya (sedang) ...',
      examples: ["I'm hungry.", "I'm sleepy.", "I'm ready.", "I'm still full."],
      note: "I'm = I am. Tidak perlu kata \"sedang\" terpisah."
    },
    {
      id: 'D03-P2',
      formula: 'Can I have + BENDA?',
      meaning: 'Boleh saya minta ...?',
      examples: ['Can I have the menu?', 'Can I have some tea?', 'Can I have the bill?', 'Can I have a glass of water?']
    },
    {
      id: 'D03-P3',
      formula: "I like / I don't like + BENDA",
      meaning: 'Saya suka / tidak suka ...',
      examples: ['I like fried rice.', "I don't like cold coffee.", 'I like sweet food.', "I don't like fish."]
    },
    {
      id: 'D03-P4',
      formula: 'Do you want + BENDA / to + KATA KERJA?',
      meaning: 'Kamu mau ...?',
      examples: ['Do you want some tea?', 'Do you want to eat now?', 'Do you want more rice?']
    }
  ],

  shadowing: ['D03-S04', 'D03-S06', 'D03-S08', 'D03-S09'],

  speaking: [
    { q: 'What do you usually have for breakfast?', qId: 'Biasanya kamu sarapan apa?', hint: 'I usually have ...', example: 'I usually have fried rice and coffee.' },
    { q: 'What food do you like?', qId: 'Kamu suka makanan apa?', hint: "I like ... / I don't like ...", example: "I like chicken noodles. I don't like very spicy food." },
    { q: "You're at a café. Order a drink.", qId: 'Kamu di kafe. Pesan minuman.', hint: "I'll have ... / Can I have ...?", example: "I'll have an iced coffee, please." },
    { q: 'Are you hungry now?', qId: 'Kamu lapar sekarang?', hint: "Yes, I'm ... / No, I'm ...", example: "No, I'm full. I just had lunch." }
  ],

  talk321: null
});
