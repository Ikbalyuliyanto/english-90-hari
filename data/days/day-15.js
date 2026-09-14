E90.registerDay({
  day: 15,
  titleId: 'Percakapan Singkat',
  goal: 'Small talk: menanyakan kabar hari ini dan menutup percakapan.',

  learn: [
    {
      id: 'D15-S01',
      english: 'How was your day?',
      pronunciation: 'hau woz yor dei?',
      translation: 'Bagaimana harimu?',
      words: [['How', 'bagaimana'], ['was', 'adalah (lampau dari is)', 'be'], ['your', 'milikmu'], ['day', 'hari']],
      pattern: 'D15-P1'
    },
    {
      id: 'D15-S02',
      english: 'It was great.',
      pronunciation: 'it woz greit',
      translation: 'Menyenangkan sekali.',
      words: [['It', 'itu / hari itu'], ['was', 'adalah (lampau dari is)', 'be'], ['great', 'hebat / menyenangkan']]
    },
    {
      id: 'D15-S03',
      english: 'What did you do today?',
      pronunciation: 'wat did yu du tu-dei?',
      translation: 'Apa yang kamu lakukan hari ini?',
      words: [['What', 'apa'], ['did', '(kata bantu pertanyaan lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['do', 'melakukan'], ['today', 'hari ini']],
      pattern: 'D15-P3'
    },
    {
      id: 'D15-S04',
      english: 'I went to work.',
      pronunciation: 'ai went tu werk',
      translation: 'Saya pergi bekerja.',
      words: [['I', 'saya'], ['went', 'pergi (lampau)', 'go'], ['to', 'ke'], ['work', 'tempat kerja / kerja']],
      pattern: 'D15-P2'
    },
    {
      id: 'D15-S05',
      english: 'I met my friend.',
      pronunciation: 'ai met mai frend',
      translation: 'Saya bertemu teman saya.',
      words: [['I', 'saya'], ['met', 'bertemu (lampau)', 'meet'], ['my', 'milik saya'], ['friend', 'teman']],
      pattern: 'D15-P2'
    },
    {
      id: 'D15-S06',
      english: 'We had a good time.',
      pronunciation: 'wi hed e gud taim',
      translation: 'Kami bersenang-senang.',
      words: [['We', 'kami'], ['had', 'mengalami / punya (lampau)', 'have'], ['a', 'sebuah'], ['good', 'menyenangkan / baik'], ['time', 'waktu']],
      phrases: [['have a good time', 'bersenang-senang']],
      pattern: 'D15-P2'
    },
    {
      id: 'D15-S07',
      english: "What's up?",
      pronunciation: 'wats ap?',
      translation: 'Ada apa? / Apa kabar? (santai)',
      words: [["What's", 'apa (yang) — what is', 'what'], ['up', 'terjadi (dalam "what\'s up")']],
      phrases: [["what's up?", 'apa kabar? / ada apa? (sapaan santai)']]
    },
    {
      id: 'D15-S08',
      english: 'Not much.',
      pronunciation: 'not mach',
      translation: 'Tidak ada yang spesial.',
      words: [['Not', 'tidak'], ['much', 'banyak']],
      phrases: [['not much', 'biasa saja / tidak banyak (jawaban untuk "what\'s up?")']]
    },
    {
      id: 'D15-S09',
      english: "Let's hang out.",
      pronunciation: 'lets heng aut',
      translation: 'Ayo nongkrong / jalan bareng.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['hang', 'bergantung (dalam "hang out")'], ['out', 'keluar (dalam "hang out")']],
      phrases: [['hang out', 'nongkrong / menghabiskan waktu bersama']]
    },
    {
      id: 'D15-S10',
      english: 'That sounds good.',
      pronunciation: 'det saundz gud',
      translation: 'Kedengarannya bagus.',
      words: [['That', 'itu'], ['sounds', 'terdengar', 'sound'], ['good', 'bagus']]
    },
    {
      id: 'D15-S11',
      english: 'See you soon.',
      pronunciation: 'si yu sun',
      translation: 'Sampai jumpa lagi.',
      words: [['See', 'bertemu / melihat'], ['you', 'kamu'], ['soon', 'segera']]
    },
    {
      id: 'D15-S12',
      english: 'Have a nice day.',
      pronunciation: 'hev e nais dei',
      translation: 'Semoga harimu menyenangkan.',
      words: [['Have', 'jalani / miliki'], ['a', 'sebuah'], ['nice', 'menyenangkan'], ['day', 'hari']]
    },
    {
      id: 'D15-S13',
      english: 'Good night.',
      pronunciation: 'gud nait',
      translation: 'Selamat malam (saat berpisah / mau tidur).',
      words: [['Good', 'selamat / baik'], ['night', 'malam']],
      phrases: [['good night vs good evening', 'good night = saat berpisah/tidur; good evening = sapaan saat bertemu malam hari']]
    },
    {
      id: 'D15-S14',
      english: 'Sweet dreams.',
      pronunciation: 'swit drimz',
      translation: 'Mimpi indah.',
      words: [['Sweet', 'manis / indah'], ['dreams', 'mimpi-mimpi', 'dream']]
    }
  ],

  review: [
    { ref: 'D11-S13' },
    { ref: 'D05-S12' },
    { ref: 'D06-S15' },
    { ref: 'D09-S14' }
  ],

  patterns: [
    {
      id: 'D15-P1',
      formula: 'How was your + WAKTU / ACARA?',
      meaning: 'Bagaimana ... -mu (yang sudah lewat)?',
      examples: ['How was your weekend?', 'How was the meeting?', 'How was your trip?', 'How was the interview?']
    },
    {
      id: 'D15-P2',
      formula: 'SUBJEK + KATA KERJA lampau',
      meaning: 'Menceritakan hal yang sudah terjadi',
      examples: ['I went to the office.', 'I met my manager.', 'I had lunch with my team.', 'I worked late yesterday.'],
      note: 'Banyak kata kerja lampau tidak beraturan: go → went, meet → met, have → had.'
    },
    {
      id: 'D15-P3',
      formula: 'What did you do + WAKTU?',
      meaning: 'Apa yang kamu lakukan ...?',
      examples: ['What did you do yesterday?', 'What did you do last weekend?', 'What did you do after work?'],
      note: 'Setelah "did", kata kerja kembali ke bentuk dasar: did you do (bukan did you did).'
    }
  ],

  shadowing: ['D15-S01', 'D15-S03', 'D15-S06', 'D15-S10'],

  speaking: [
    { q: 'How was your day?', qId: 'Bagaimana harimu?', hint: 'It was ... I went ... I met ...', example: 'It was good. I went to the office and I had a long meeting.' },
    { q: 'What did you do last weekend?', qId: 'Apa yang kamu lakukan akhir pekan lalu?', hint: 'I went ... / I had ... / I met ...', example: 'I stayed at home, watched a movie, and met my family.' },
    { q: 'End a conversation with a friend politely.', qId: 'Akhiri percakapan dengan teman secara sopan.', hint: 'I have to go. See you ... Take ...', example: 'I have to go now. See you soon, take care!' }
  ],

  talk321: null
});
