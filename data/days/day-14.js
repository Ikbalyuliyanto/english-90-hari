E90.registerDay({
  day: 14,
  titleId: 'Jawaban Singkat',
  goal: 'Menjawab cepat supaya percakapan tidak berhenti.',

  learn: [
    {
      id: 'D14-S01',
      english: 'Yes, I am.',
      pronunciation: 'yes, ai em',
      translation: 'Ya. (jawaban untuk "Are you ...?")',
      words: [['Yes', 'ya'], ['I', 'saya'], ['am', '(mengulang "am/are" dari pertanyaan)', 'be']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S02',
      english: "No, I'm not.",
      pronunciation: 'nou, aim not',
      translation: 'Tidak. (jawaban untuk "Are you ...?")',
      words: [['No', 'tidak'], ["I'm", 'saya (I am)', 'be'], ['not', 'tidak']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S03',
      english: 'Yes, I do.',
      pronunciation: 'yes, ai du',
      translation: 'Ya. (jawaban untuk "Do you ...?")',
      words: [['Yes', 'ya'], ['I', 'saya'], ['do', '(mengulang "do" dari pertanyaan)']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S04',
      english: "No, I don't.",
      pronunciation: 'nou, ai dount',
      translation: 'Tidak. (jawaban untuk "Do you ...?")',
      words: [['No', 'tidak'], ['I', 'saya'], ["don't", 'tidak (do not)']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S05',
      english: 'Yes, I can.',
      pronunciation: 'yes, ai ken',
      translation: 'Ya, saya bisa.',
      words: [['Yes', 'ya'], ['I', 'saya'], ['can', 'bisa']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S06',
      english: "No, I can't.",
      pronunciation: 'nou, ai kent',
      translation: 'Tidak, saya tidak bisa.',
      words: [['No', 'tidak'], ['I', 'saya'], ["can't", 'tidak bisa (cannot)', 'can']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S07',
      english: 'Yes, I have.',
      pronunciation: 'yes, ai hev',
      translation: 'Ya, sudah. (jawaban untuk "Have you ...?")',
      words: [['Yes', 'ya'], ['I', 'saya'], ['have', 'sudah (mengulang "have" dari pertanyaan)']],
      phrases: [['Have you finished? — Yes, I have.', 'Sudah selesai? — Ya, sudah.']],
      pattern: 'D14-P1'
    },
    {
      id: 'D14-S08',
      english: "No, I don't have it.",
      pronunciation: 'nou, ai dount hev it',
      translation: 'Tidak, saya tidak punya itu.',
      words: [['No', 'tidak'], ['I', 'saya'], ["don't", 'tidak (do not)'], ['have', 'punya'], ['it', 'itu']]
    },
    {
      id: 'D14-S09',
      english: 'Sure.',
      pronunciation: 'syur',
      translation: 'Tentu.',
      words: [['Sure', 'tentu / boleh']]
    },
    {
      id: 'D14-S10',
      english: 'Of course.',
      pronunciation: 'ov kors',
      translation: 'Tentu saja.',
      words: [['Of', 'dari (dalam "of course")'], ['course', 'jalur (dalam "of course")']],
      phrases: [['of course', 'tentu saja']]
    },
    {
      id: 'D14-S11',
      english: 'I think so.',
      pronunciation: 'ai thingk sou',
      translation: 'Saya rasa begitu.',
      words: [['I', 'saya'], ['think', 'kira / rasa'], ['so', 'begitu']],
      pattern: 'D14-P2'
    },
    {
      id: 'D14-S12',
      english: "I'm not sure.",
      pronunciation: 'aim not syur',
      translation: 'Saya tidak yakin.',
      words: [["I'm", 'saya (I am)', 'be'], ['not', 'tidak'], ['sure', 'yakin']],
      pattern: 'D14-P3'
    },
    {
      id: 'D14-S13',
      english: 'Maybe.',
      pronunciation: 'mei-bi',
      translation: 'Mungkin.',
      words: [['Maybe', 'mungkin']]
    },
    {
      id: 'D14-S14',
      english: 'I hope so.',
      pronunciation: 'ai houp sou',
      translation: 'Saya harap begitu.',
      words: [['I', 'saya'], ['hope', 'berharap'], ['so', 'begitu']],
      pattern: 'D14-P2'
    },
    {
      id: 'D14-S15',
      english: 'I agree.',
      pronunciation: 'ai e-gri',
      translation: 'Saya setuju.',
      words: [['I', 'saya'], ['agree', 'setuju']]
    }
  ],

  review: [
    { ref: 'D13-S03' },
    { ref: 'D09-S12' },
    { ref: 'D08-S07' },
    { ref: 'D13-S13' }
  ],

  patterns: [
    {
      id: 'D14-P1',
      formula: 'Yes / No + SUBJEK + KATA BANTU dari pertanyaan',
      meaning: 'Jawaban singkat mengikuti kata bantu pertanyaan',
      examples: ['Are you busy? Yes, I am.', "Do you like coffee? No, I don't.", 'Can you come tomorrow? Yes, I can.', "Is it ready? No, it isn't."],
      note: 'Dengarkan kata pertama pertanyaan (are / do / can / have / is), lalu ulangi di jawaban.'
    },
    {
      id: 'D14-P2',
      formula: "I think so / I hope so / I don't think so",
      meaning: 'Saya rasa begitu / harap begitu / rasa tidak',
      examples: ['Will it rain? I think so.', 'Can we finish today? I hope so.', "Is it a bug? I don't think so."]
    },
    {
      id: 'D14-P3',
      formula: "I'm not sure + (about / if ...)",
      meaning: 'Saya tidak yakin ...',
      examples: ["I'm not sure about that.", "I'm not sure if it works.", "I'm not sure yet. Let me check."],
      note: 'Lebih baik daripada diam saat belum tahu jawabannya.'
    }
  ],

  shadowing: ['D14-S02', 'D14-S04', 'D14-S11', 'D14-S12'],

  speaking: [
    { q: 'Are you a software developer?', qId: 'Kamu software developer?', hint: "Yes, I am. / No, I'm not. + satu kalimat tambahan", example: 'Yes, I am. I work on web applications.' },
    { q: 'Do you drink coffee every day?', qId: 'Kamu minum kopi setiap hari?', hint: "Yes, I do. / No, I don't. + alasan", example: "No, I don't. I usually drink tea." },
    { q: 'Can we finish this today?', qId: 'Bisa kita selesaikan ini hari ini?', hint: "I think so. / I hope so. / I'm not sure.", example: "I'm not sure. I need to check it first." }
  ],

  talk321: null
});
