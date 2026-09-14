E90.registerDay({
  day: 6,
  titleId: 'Pergi Keluar Rumah',
  goal: 'Kalimat saat bersiap berangkat dan dalam perjalanan.',

  learn: [
    {
      id: 'D06-S01',
      english: "Let's go.",
      pronunciation: 'lets gou',
      translation: 'Ayo berangkat.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['go', 'pergi']]
    },
    {
      id: 'D06-S02',
      english: "I'm ready.",
      pronunciation: 'aim re-di',
      translation: 'Saya siap.',
      words: [["I'm", 'saya (I am)', 'be'], ['ready', 'siap']]
    },
    {
      id: 'D06-S03',
      english: 'Bring your bag.',
      pronunciation: 'bring yor beg',
      translation: 'Bawa tasmu.',
      words: [['Bring', 'bawa'], ['your', 'milikmu'], ['bag', 'tas']]
    },
    {
      id: 'D06-S04',
      english: "Don't forget your phone.",
      pronunciation: 'dount for-get yor foun',
      translation: 'Jangan lupa ponselmu.',
      words: [["Don't", 'jangan (do not, dalam perintah)'], ['forget', 'lupa / melupakan'], ['your', 'milikmu'], ['phone', 'ponsel']],
      pattern: 'D06-P2'
    },
    {
      id: 'D06-S05',
      english: 'Put on your shoes.',
      pronunciation: 'put on yor shuz',
      translation: 'Pakai sepatumu.',
      words: [['Put', 'taruh / letakkan'], ['on', 'pada badan (dalam "put on")'], ['your', 'milikmu'], ['shoes', 'sepatu (jamak)', 'shoe']],
      phrases: [['put on', 'memakai (baju, sepatu, jam) — lawannya "take off"']]
    },
    {
      id: 'D06-S06',
      english: 'Hold my hand.',
      pronunciation: 'hould mai hend',
      translation: 'Pegang tangan saya.',
      words: [['Hold', 'pegang'], ['my', 'milik saya'], ['hand', 'tangan']]
    },
    {
      id: 'D06-S07',
      english: 'Stay close to me.',
      pronunciation: 'stei klous tu mi',
      translation: 'Tetap dekat dengan saya.',
      words: [['Stay', 'tetap / tinggal'], ['close', 'dekat (kata sifat, dibaca "klous")'], ['to', 'dengan / ke'], ['me', 'saya (sebagai objek)']],
      phrases: [['close to', 'dekat dengan']]
    },
    {
      id: 'D06-S08',
      english: 'Look both ways.',
      pronunciation: 'luk bouth weiz',
      translation: 'Lihat kedua arah.',
      words: [['Look', 'lihat'], ['both', 'kedua / keduanya'], ['ways', 'arah (jamak)', 'way']],
      phrases: [['both ways', 'kedua arah']]
    },
    {
      id: 'D06-S09',
      english: 'Be careful crossing the street.',
      pronunciation: 'bi ker-ful kro-sing de strit',
      translation: 'Hati-hati saat menyeberang jalan.',
      words: [['Be', 'bersikaplah'], ['careful', 'hati-hati'], ['crossing', 'menyeberang (saat menyeberangi)', 'cross'], ['the', 'itu / -nya'], ['street', 'jalan']],
      phrases: [['cross the street', 'menyeberang jalan']]
    },
    {
      id: 'D06-S10',
      english: "Let's go by car.",
      pronunciation: 'lets gou bai kar',
      translation: 'Ayo pergi naik mobil.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['go', 'pergi'], ['by', 'dengan / naik (kendaraan)'], ['car', 'mobil']],
      phrases: [['by car', 'naik mobil']],
      pattern: 'D06-P1'
    },
    {
      id: 'D06-S11',
      english: "Let's go by bus.",
      pronunciation: 'lets gou bai bas',
      translation: 'Ayo pergi naik bus.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['go', 'pergi'], ['by', 'dengan / naik (kendaraan)'], ['bus', 'bus']],
      pattern: 'D06-P1'
    },
    {
      id: 'D06-S12',
      english: "Let's go by train.",
      pronunciation: 'lets gou bai trein',
      translation: 'Ayo pergi naik kereta.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['go', 'pergi'], ['by', 'dengan / naik (kendaraan)'], ['train', 'kereta']],
      pattern: 'D06-P1'
    },
    {
      id: 'D06-S13',
      english: 'Where are we going?',
      pronunciation: 'wer ar wi gou-ing?',
      translation: 'Kita mau ke mana?',
      words: [['Where', 'ke mana / di mana'], ['are', 'sedang (are + -ing)', 'be'], ['we', 'kita'], ['going', 'pergi', 'go']],
      pattern: 'D06-P3'
    },
    {
      id: 'D06-S14',
      english: "We're almost there.",
      pronunciation: 'wir ol-moust der',
      translation: 'Kita hampir sampai.',
      words: [["We're", 'kita (sudah) — we are', 'be'], ['almost', 'hampir'], ['there', 'di sana / sampai']],
      phrases: [['almost there', 'hampir sampai']]
    },
    {
      id: 'D06-S15',
      english: 'Have a good day.',
      pronunciation: 'hev e gud dei',
      translation: 'Semoga harimu menyenangkan.',
      words: [['Have', 'miliki / jalani'], ['a', 'sebuah'], ['good', 'baik / menyenangkan'], ['day', 'hari']],
      phrases: [['have a good day', 'semoga harimu menyenangkan (ucapan saat berpisah)']],
      pattern: 'D06-P4'
    }
  ],

  review: [
    { ref: 'D04-S14' },
    { ref: 'D05-S07' },
    { ref: 'D03-S03' }
  ],

  patterns: [
    {
      id: 'D06-P1',
      formula: 'go by + KENDARAAN',
      meaning: 'pergi naik ...',
      examples: ["Let's go by taxi.", 'I go to work by motorbike.', 'I go to the office by MRT.', 'I go to the station on foot.'],
      note: 'Jalan kaki: "on foot" atau "walk", bukan "by foot".'
    },
    {
      id: 'D06-P2',
      formula: "Don't forget + BENDA / to + KATA KERJA",
      meaning: 'Jangan lupa ...',
      examples: ["Don't forget your laptop.", "Don't forget to lock the door.", "Don't forget to send the report."]
    },
    {
      id: 'D06-P3',
      formula: 'Where are + we/you + KATA KERJA-ing?',
      meaning: 'Di mana / ke mana ... (sekarang)?',
      examples: ['Where are you going?', 'Where are we meeting?', 'Where are you working now?']
    },
    {
      id: 'D06-P4',
      formula: 'Have a + good/nice + WAKTU/ACARA',
      meaning: 'Semoga ... menyenangkan',
      examples: ['Have a good weekend.', 'Have a nice trip.', 'Have a good meeting.', 'Have a nice evening.']
    }
  ],

  shadowing: ['D06-S04', 'D06-S08', 'D06-S13', 'D06-S15'],

  speaking: [
    { q: 'How do you go to work?', qId: 'Kamu pergi kerja naik apa?', hint: 'I go to work by ...', example: 'I go to work by motorbike. It takes thirty minutes.' },
    { q: 'What do you bring when you go out?', qId: 'Apa yang kamu bawa saat keluar rumah?', hint: 'I bring my ...', example: 'I bring my phone, my wallet, and my laptop.' },
    { q: 'Your friend is leaving for a trip. What do you say?', qId: 'Temanmu mau berangkat liburan. Kamu bilang apa?', hint: "Have a ... / Don't forget ...", example: "Have a nice trip! Don't forget your passport." }
  ],

  talk321: null
});
