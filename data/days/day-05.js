E90.registerDay({
  day: 5,
  titleId: 'Waktu dan Jadwal',
  goal: 'Menanyakan jam, menyebut jadwal, dan mengatur waktu bertemu.',

  learn: [
    {
      id: 'D05-S01',
      english: 'What time is it?',
      pronunciation: 'wat taim iz it?',
      translation: 'Sekarang jam berapa?',
      words: [['What', 'apa / berapa'], ['time', 'jam / waktu'], ['is', 'adalah', 'be'], ['it', '(subjek untuk waktu, tidak diterjemahkan)']],
      phrases: [['what time', 'jam berapa']]
    },
    {
      id: 'D05-S02',
      english: "It's nine o'clock.",
      pronunciation: "its nain e-klok",
      translation: 'Sekarang jam sembilan.',
      words: [["It's", 'sekarang (it is, untuk waktu)', 'be'], ['nine', 'sembilan'], ["o'clock", 'tepat jam ...']],
      phrases: [["o'clock", 'jam tepat (tanpa menit)']]
    },
    {
      id: 'D05-S03',
      english: 'I have a meeting at ten.',
      pronunciation: 'ai hev e mi-ting et ten',
      translation: 'Saya ada rapat jam sepuluh.',
      words: [['I', 'saya'], ['have', 'ada / punya (jadwal)'], ['a', 'sebuah'], ['meeting', 'rapat'], ['at', 'pada (jam)'], ['ten', 'sepuluh']],
      pattern: 'D05-P1'
    },
    {
      id: 'D05-S04',
      english: "I'm free today.",
      pronunciation: 'aim fri tu-dei',
      translation: 'Saya luang hari ini.',
      words: [["I'm", 'saya (I am)', 'be'], ['free', 'luang / tidak sibuk'], ['today', 'hari ini']],
      pattern: 'D05-P2'
    },
    {
      id: 'D05-S05',
      english: "I'm busy right now.",
      pronunciation: 'aim bi-zi rait nau',
      translation: 'Saya sedang sibuk sekarang.',
      words: [["I'm", 'saya (sedang) — I am', 'be'], ['busy', 'sibuk'], ['right', 'tepat (dalam "right now")'], ['now', 'sekarang']],
      phrases: [['right now', 'saat ini juga / sekarang']],
      pattern: 'D05-P2'
    },
    {
      id: 'D05-S06',
      english: "I'm available tomorrow.",
      pronunciation: 'aim e-vei-le-bel tu-mo-rou',
      translation: 'Saya bisa (ada waktu) besok.',
      words: [["I'm", 'saya (I am)', 'be'], ['available', 'tersedia / ada waktu'], ['tomorrow', 'besok']],
      pattern: 'D05-P2'
    },
    {
      id: 'D05-S07',
      english: "Let's meet tomorrow.",
      pronunciation: 'lets mit tu-mo-rou',
      translation: 'Ayo bertemu besok.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['meet', 'bertemu'], ['tomorrow', 'besok']],
      pattern: 'D05-P3'
    },
    {
      id: 'D05-S08',
      english: 'Can we reschedule?',
      pronunciation: 'ken wi ri-ske-jul?',
      translation: 'Bisa kita jadwalkan ulang?',
      words: [['Can', 'bisakah'], ['we', 'kita'], ['reschedule', 'menjadwalkan ulang']]
    },
    {
      id: 'D05-S09',
      english: "I'm on time.",
      pronunciation: 'aim on taim',
      translation: 'Saya tepat waktu.',
      words: [["I'm", 'saya (I am)', 'be'], ['on', 'pada (dalam "on time")'], ['time', 'waktu']],
      phrases: [['on time', 'tepat waktu']]
    },
    {
      id: 'D05-S10',
      english: "I'm late.",
      pronunciation: 'aim leit',
      translation: 'Saya terlambat.',
      words: [["I'm", 'saya (I am)', 'be'], ['late', 'terlambat']]
    },
    {
      id: 'D05-S11',
      english: 'How long does it take?',
      pronunciation: 'hau long daz it teik?',
      translation: 'Berapa lama waktunya?',
      words: [['How', 'seberapa'], ['long', 'lama'], ['does', '(kata bantu pertanyaan untuk it/he/she)', 'do'], ['it', 'hal itu'], ['take', 'memakan (waktu)']],
      phrases: [['how long', 'berapa lama'], ['take (time)', 'memakan waktu']],
      pattern: 'D05-P4'
    },
    {
      id: 'D05-S12',
      english: 'See you later.',
      pronunciation: 'si yu lei-ter',
      translation: 'Sampai jumpa nanti.',
      words: [['See', 'bertemu / melihat'], ['you', 'kamu'], ['later', 'nanti']],
      phrases: [['see you later', 'sampai jumpa nanti']]
    }
  ],

  review: [
    { ref: 'D02-S01' },
    { ref: 'D02-S07' },
    { ref: 'D02-S10' },
    { ref: 'D04-S02' }
  ],

  patterns: [
    {
      id: 'D05-P1',
      formula: 'I have a/an + ACARA + at + JAM',
      meaning: 'Saya ada ... jam ...',
      examples: ['I have a meeting at two.', 'I have a call at four.', 'I have an interview at ten.', 'I have a class at seven.']
    },
    {
      id: 'D05-P2',
      formula: "I'm + free / busy / available + WAKTU",
      meaning: 'Saya luang / sibuk / ada waktu ...',
      examples: ["I'm free this afternoon.", "I'm busy today.", "I'm available on Monday.", "I'm not available tonight."]
    },
    {
      id: 'D05-P3',
      formula: "Let's + KATA KERJA + WAKTU",
      meaning: 'Ayo ... (pada waktu tertentu)',
      examples: ["Let's meet at three.", "Let's talk tomorrow.", "Let's start now.", "Let's discuss it next week."]
    },
    {
      id: 'D05-P4',
      formula: 'How long does it take to + KATA KERJA?',
      meaning: 'Berapa lama waktu untuk ...?',
      examples: ['How long does it take to get there?', 'How long does it take to fix this?', 'How long does it take to deploy?']
    }
  ],

  shadowing: ['D05-S01', 'D05-S03', 'D05-S05', 'D05-S08'],

  speaking: [
    { q: 'What time is it now?', qId: 'Sekarang jam berapa?', hint: "It's ...", example: "It's seven thirty." },
    { q: 'Are you free tomorrow?', qId: 'Kamu luang besok?', hint: "Yes, I'm free ... / No, I'm busy ...", example: "I'm busy in the morning, but I'm free after three." },
    { q: 'What meetings do you have this week?', qId: 'Rapat apa saja minggu ini?', hint: 'I have a meeting on/at ...', example: 'I have a team meeting on Monday at ten.' },
    { q: "You can't join a meeting. What do you say?", qId: 'Kamu tidak bisa ikut rapat. Kamu bilang apa?', hint: "I'm busy ... Can we ...?", example: "Sorry, I'm busy at that time. Can we reschedule?" }
  ],

  talk321: null
});
