E90.registerDay({
  day: 23,
  titleId: 'Pertanyaan Lanjutan (Follow-up)',
  goal: 'Membuat percakapan tetap berjalan: jawab, lalu tanya balik atau minta cerita lebih.',

  learn: [
    {
      id: 'D23-S01',
      english: 'Why do you think so?',
      pronunciation: 'wai du yu thingk sou?',
      translation: 'Kenapa kamu berpendapat begitu?',
      words: [['Why', 'kenapa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['think', 'berpikir / berpendapat'], ['so', 'begitu']]
    },
    {
      id: 'D23-S02',
      english: 'What happened?',
      pronunciation: 'wat he-pend?',
      translation: 'Apa yang terjadi?',
      words: [['What', 'apa (yang)'], ['happened', 'terjadi (lampau)', 'happen']],
      phrases: [['what happened?', 'ada apa? / apa yang terjadi?']],
      pattern: 'D23-P2'
    },
    {
      id: 'D23-S03',
      english: 'How did you do that?',
      pronunciation: 'hau did yu du det?',
      translation: 'Bagaimana kamu melakukannya?',
      words: [['How', 'bagaimana'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['do', 'melakukan'], ['that', 'itu / hal itu']],
      pattern: 'D23-P1'
    },
    {
      id: 'D23-S04',
      english: 'When did it happen?',
      pronunciation: 'wen did it he-pen?',
      translation: 'Kapan itu terjadi?',
      words: [['When', 'kapan'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['it', 'hal itu'], ['happen', 'terjadi']],
      pattern: 'D23-P1'
    },
    {
      id: 'D23-S05',
      english: 'Where did you go?',
      pronunciation: 'wer did yu gou?',
      translation: 'Kamu pergi ke mana?',
      words: [['Where', 'ke mana'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['go', 'pergi']],
      pattern: 'D23-P1'
    },
    {
      id: 'D23-S06',
      english: 'Which company do you work for?',
      pronunciation: 'wich kam-pe-ni du yu werk for?',
      translation: 'Kamu bekerja di perusahaan apa?',
      words: [['Which', 'yang mana / apa'], ['company', 'perusahaan'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['work', 'bekerja'], ['for', 'untuk']],
      phrases: [['work for + perusahaan', 'bekerja untuk / di perusahaan ...']],
      pattern: 'D23-P3'
    },
    {
      id: 'D23-S07',
      english: 'What about you?',
      pronunciation: 'wat e-baut yu?',
      translation: 'Kalau kamu?',
      words: [['What', 'bagaimana (dalam "what about")'], ['about', 'tentang / dengan'], ['you', 'kamu']],
      phrases: [['what about ...?', 'bagaimana dengan ...? / kalau ...?']],
      pattern: 'D23-P4'
    },
    {
      id: 'D23-S08',
      english: 'How was it?',
      pronunciation: 'hau woz it?',
      translation: 'Bagaimana (rasanya/hasilnya)?',
      words: [['How', 'bagaimana'], ['was', '(to be bentuk lampau, tidak diterjemahkan)', 'be'], ['it', 'hal itu']],
      pattern: 'D15-P1'
    },
    {
      id: 'D23-S09',
      english: 'Can you tell me more about it?',
      pronunciation: 'ken yu tel mi mor e-baut it?',
      translation: 'Bisa ceritakan lebih banyak tentang itu?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['tell', 'memberi tahu / menceritakan'], ['me', 'kepada saya'], ['more', 'lebih banyak'], ['about', 'tentang'], ['it', 'hal itu']],
      phrases: [['tell me more', 'ceritakan lebih banyak']],
      pattern: 'D23-P5'
    },
    {
      id: 'D23-S10',
      english: "That's interesting. What did you do next?",
      pronunciation: 'dets in-tres-ting. wat did yu du nekst?',
      translation: 'Menarik. Lalu apa yang kamu lakukan?',
      words: [["That's", 'itu (that is)', 'that'], ['interesting', 'menarik'], ['What', 'apa'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['do', 'melakukan'], ['next', 'selanjutnya']],
      phrases: [["that's interesting", 'menarik (reaksi untuk menunjukkan kamu mendengarkan)']],
      pattern: 'D23-P1'
    }
  ],

  review: [
    {
      id: 'D23-S11',
      english: 'Did you finish your task?',
      pronunciation: 'did yu fi-nish yor task?',
      translation: 'Kamu sudah menyelesaikan tugasmu?',
      words: [['Did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['finish', 'menyelesaikan'], ['your', '-mu / milikmu'], ['task', 'tugas']],
      pattern: 'D17-P3'
    },
    {
      id: 'D23-S12',
      english: 'Do you mean yesterday or today?',
      pronunciation: 'du yu min yes-ter-dei or tu-dei?',
      translation: 'Maksudmu kemarin atau hari ini?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['mean', 'maksudkan'], ['yesterday', 'kemarin'], ['or', 'atau'], ['today', 'hari ini']],
      pattern: 'D20-P2'
    },
    {
      id: 'D23-S13',
      english: 'Where are you working now?',
      pronunciation: 'wer ar yu wer-king nau?',
      translation: 'Sekarang kamu bekerja di mana?',
      words: [['Where', 'di mana'], ['are', '(kata bantu "are + -ing", tidak diterjemahkan)', 'be'], ['you', 'kamu'], ['working', 'bekerja', 'work'], ['now', 'sekarang']],
      pattern: 'D06-P3'
    },
    { ref: 'D20-S04' },
    { ref: 'D13-S08' }
  ],

  patterns: [
    {
      id: 'D23-P1',
      formula: 'What / Where / When / How + did you + KATA KERJA DASAR?',
      meaning: 'Pertanyaan lanjutan tentang hal yang sudah terjadi',
      examples: ['Where did you eat?', 'When did you start?', 'How did you fix it?', 'What did your manager say?'],
      note: 'Rumus percakapan: jawab singkat → tambah satu info → tanya balik.'
    },
    {
      id: 'D23-P2',
      formula: 'What happened + (to / with + BENDA)?',
      meaning: 'Apa yang terjadi (dengan ...)?',
      examples: ['What happened to your laptop?', 'What happened with the project?', 'What happened after that?']
    },
    {
      id: 'D23-P3',
      formula: 'Which + BENDA + do you + KATA KERJA?',
      meaning: '... yang mana / apa yang kamu ...?',
      examples: ['Which team are you in?', 'Which app do you use?', 'Which one is better?']
    },
    {
      id: 'D23-P4',
      formula: 'What about + BENDA / KATA KERJA-ing?',
      meaning: 'Bagaimana dengan ...? / Kalau ...?',
      examples: ['What about you?', 'What about tomorrow?', 'What about meeting at three?'],
      note: 'Dipakai untuk mengembalikan pertanyaan atau memberi usulan.'
    },
    {
      id: 'D23-P5',
      formula: 'Can you tell me more about + BENDA?',
      meaning: 'Bisa ceritakan lebih banyak tentang ...?',
      examples: ['Can you tell me more about your job?', 'Can you tell me more about the problem?', 'Tell me more about your team.']
    }
  ],

  shadowing: ['D23-S02', 'D23-S03', 'D23-S07', 'D23-S09'],

  speaking: [
    { q: 'Your friend says: "I went to Bali last week." Ask three follow-up questions.', qId: 'Temanmu bilang: "Minggu lalu aku ke Bali." Ajukan tiga pertanyaan lanjutan.', hint: 'Where did you ...? What did you ...? How was ...?', example: 'Really? Where did you stay? What did you do there? How was the weather?' },
    { q: 'A colleague says: "I had a problem with my laptop." Ask follow-up questions.', qId: 'Rekan bilang: "Laptopku bermasalah." Ajukan pertanyaan lanjutan.', hint: 'What happened? When did ...?', example: 'Oh no, what happened? When did it start?' },
    { q: 'Someone asks you: "Do you like your job?" Answer, then ask them back.', qId: 'Seseorang bertanya: "Kamu suka pekerjaanmu?" Jawab lalu tanya balik.', hint: "Yes, I do / No, I don't ... because ... What about you?", example: 'Yes, I do. I like my team and the projects. What about you?' },
    { q: 'Your friend says: "I changed my job." Keep the conversation going.', qId: 'Temanmu bilang: "Aku ganti kerja." Buat percakapan tetap berjalan.', hint: 'Which company ...? Why did you ...? Tell me more ...', example: "That's great! Which company do you work for now? Why did you change?" }
  ],

  talk321: null
});
