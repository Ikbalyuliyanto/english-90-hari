E90.registerDay({
  day: 13,
  titleId: 'Pertanyaan Umum',
  goal: 'Memakai kata tanya: what, where, when, why, who, which, how.',

  learn: [
    {
      id: 'D13-S01',
      english: 'What is this?',
      pronunciation: 'wat iz dis?',
      translation: 'Ini apa?',
      words: [['What', 'apa'], ['is', 'adalah', 'be'], ['this', 'ini']]
    },
    {
      id: 'D13-S02',
      english: 'What are you doing?',
      pronunciation: 'wat ar yu du-ing?',
      translation: 'Kamu sedang apa?',
      words: [['What', 'apa'], ['are', 'sedang (are + -ing)', 'be'], ['you', 'kamu'], ['doing', 'melakukan', 'do']],
      pattern: 'D13-P2'
    },
    {
      id: 'D13-S03',
      english: 'Where are you from?',
      pronunciation: 'wer ar yu from?',
      translation: 'Kamu berasal dari mana?',
      words: [['Where', 'mana / di mana'], ['are', 'adalah (to be untuk "you")', 'be'], ['you', 'kamu'], ['from', 'dari']],
      pattern: 'D13-P2'
    },
    {
      id: 'D13-S04',
      english: 'Where do you live?',
      pronunciation: 'wer du yu liv?',
      translation: 'Kamu tinggal di mana?',
      words: [['Where', 'di mana'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['live', 'tinggal']],
      pattern: 'D13-P1'
    },
    {
      id: 'D13-S05',
      english: 'How old are you?',
      pronunciation: 'hau ould ar yu?',
      translation: 'Umurmu berapa?',
      words: [['How', 'seberapa'], ['old', 'tua / berumur'], ['are', 'adalah (to be untuk "you")', 'be'], ['you', 'kamu']],
      phrases: [['how old', 'berapa umur']],
      pattern: 'D13-P4'
    },
    {
      id: 'D13-S06',
      english: 'What do you do?',
      pronunciation: 'wat du yu du?',
      translation: 'Apa pekerjaanmu?',
      words: [['What', 'apa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['do', 'lakukan / kerjakan (untuk pekerjaan)']],
      phrases: [['what do you do?', 'apa pekerjaanmu? (bukan "kamu sedang apa?")']],
      pattern: 'D13-P1'
    },
    {
      id: 'D13-S07',
      english: 'When is it?',
      pronunciation: 'wen iz it?',
      translation: 'Kapan itu?',
      words: [['When', 'kapan'], ['is', 'adalah', 'be'], ['it', 'itu']]
    },
    {
      id: 'D13-S08',
      english: 'Why is that?',
      pronunciation: 'wai iz det?',
      translation: 'Kenapa begitu?',
      words: [['Why', 'kenapa'], ['is', 'adalah', 'be'], ['that', 'itu / begitu']]
    },
    {
      id: 'D13-S09',
      english: 'Who is he?',
      pronunciation: 'hu iz hi?',
      translation: 'Siapa dia?',
      words: [['Who', 'siapa'], ['is', 'adalah', 'be'], ['he', 'dia (laki-laki)']]
    },
    {
      id: 'D13-S10',
      english: 'Which one?',
      pronunciation: 'wich wan?',
      translation: 'Yang mana?',
      words: [['Which', 'yang mana'], ['one', 'yang (satu)']]
    },
    {
      id: 'D13-S11',
      english: 'How much is it?',
      pronunciation: 'hau mach iz it?',
      translation: 'Berapa harganya?',
      words: [['How', 'seberapa'], ['much', 'banyak (untuk yang tidak dihitung, seperti harga)'], ['is', 'adalah', 'be'], ['it', 'itu / -nya']],
      pattern: 'D13-P4'
    },
    {
      id: 'D13-S12',
      english: 'How many are there?',
      pronunciation: 'hau me-ni ar der?',
      translation: 'Ada berapa?',
      words: [['How', 'seberapa'], ['many', 'banyak (untuk yang bisa dihitung)'], ['are', 'ada (dalam "are there")', 'be'], ['there', 'ada (dalam "are there")']],
      phrases: [['how many', 'berapa banyak (benda yang bisa dihitung)'], ['are there', 'apakah ada']],
      pattern: 'D13-P4'
    },
    {
      id: 'D13-S13',
      english: 'Can you help me?',
      pronunciation: 'ken yu help mi?',
      translation: 'Bisa bantu saya?',
      words: [['Can', 'bisakah'], ['you', 'kamu / Anda'], ['help', 'membantu'], ['me', 'saya (sebagai objek)']]
    },
    {
      id: 'D13-S14',
      english: 'Could you repeat that?',
      pronunciation: 'kud yu ri-pit det?',
      translation: 'Bisakah Anda mengulangi itu?',
      words: [['Could', 'bisakah (lebih sopan dari "can")', 'can'], ['you', 'Anda'], ['repeat', 'mengulangi'], ['that', 'itu']],
      pattern: 'D13-P3'
    }
  ],

  review: [
    { ref: 'D05-S11' },
    { ref: 'D08-S02' },
    { ref: 'D07-S14' }
  ],

  patterns: [
    {
      id: 'D13-P1',
      formula: 'KATA TANYA + do you + KATA KERJA?',
      meaning: 'Pertanyaan kebiasaan / fakta',
      examples: ['Where do you work?', 'What do you usually eat?', 'When do you start work?', 'How do you go to the office?']
    },
    {
      id: 'D13-P2',
      formula: 'KATA TANYA + are you + ...?',
      meaning: 'Pertanyaan keadaan / kegiatan sekarang',
      examples: ['Where are you now?', 'What are you working on?', 'How are you?', 'Why are you late?']
    },
    {
      id: 'D13-P3',
      formula: 'Could you + KATA KERJA?',
      meaning: 'Bisakah Anda ...? (sopan)',
      examples: ['Could you speak more slowly?', 'Could you explain that again?', 'Could you send me the link?', 'Could you say that again?'],
      note: 'Sangat penting untuk meeting: minta diulang tanpa malu.'
    },
    {
      id: 'D13-P4',
      formula: 'How + much / many / long / far / old ...?',
      meaning: 'Berapa / seberapa ...?',
      examples: ['How much does it cost?', 'How many people are coming?', 'How far is your office?', 'How long is the meeting?']
    }
  ],

  shadowing: ['D13-S02', 'D13-S06', 'D13-S12', 'D13-S14'],

  speaking: [
    { q: 'You meet a new colleague. Ask three questions about them.', qId: 'Kamu bertemu rekan baru. Ajukan tiga pertanyaan.', hint: 'Where do you ...? What do you ...? How long ...?', example: 'Where are you from? What do you do here? How long have you worked here?' },
    { q: "You didn't hear what someone said. What do you say?", qId: 'Kamu tidak mendengar ucapan seseorang. Kamu bilang apa?', hint: 'Could you ...?', example: 'Sorry, could you repeat that, please?' },
    { q: 'Answer: What do you do?', qId: 'Jawab: Apa pekerjaanmu?', hint: 'I am a/an ... I work at/on ...', example: 'I am a software engineer. I work on web applications.' }
  ],

  talk321: null
});
