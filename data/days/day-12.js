E90.registerDay({
  day: 12,
  titleId: 'Emosi dan Perasaan',
  goal: 'Mengungkapkan perasaan dan alasannya.',

  learn: [
    {
      id: 'D12-S01', english: "I'm happy.", pronunciation: 'aim he-pi', translation: 'Saya senang.',
      words: [["I'm", 'saya (I am)', 'be'], ['happy', 'senang / bahagia']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S02', english: "I'm sad.", pronunciation: 'aim sed', translation: 'Saya sedih.',
      words: [["I'm", 'saya (I am)', 'be'], ['sad', 'sedih']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S03', english: "I'm angry.", pronunciation: 'aim eng-gri', translation: 'Saya marah.',
      words: [["I'm", 'saya (I am)', 'be'], ['angry', 'marah']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S04', english: "I'm tired.", pronunciation: 'aim tai-erd', translation: 'Saya lelah.',
      words: [["I'm", 'saya (I am)', 'be'], ['tired', 'lelah / capek']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S05', english: "I'm excited.", pronunciation: 'aim ik-sai-tid', translation: 'Saya bersemangat.',
      words: [["I'm", 'saya (I am)', 'be'], ['excited', 'bersemangat / antusias']], pattern: 'D12-P2'
    },
    {
      id: 'D12-S06', english: "I'm bored.", pronunciation: 'aim bord', translation: 'Saya bosan.',
      words: [["I'm", 'saya (I am)', 'be'], ['bored', 'bosan']],
      phrases: [['bored vs boring', 'bored = saya merasa bosan; boring = sesuatu membosankan']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S07', english: "I'm nervous.", pronunciation: 'aim ner-ves', translation: 'Saya gugup.',
      words: [["I'm", 'saya (I am)', 'be'], ['nervous', 'gugup']], pattern: 'D12-P2'
    },
    {
      id: 'D12-S08', english: "I'm okay.", pronunciation: 'aim ou-kei', translation: 'Saya baik-baik saja.',
      words: [["I'm", 'saya (I am)', 'be'], ['okay', 'baik-baik saja']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S09', english: "I'm proud.", pronunciation: 'aim praud', translation: 'Saya bangga.',
      words: [["I'm", 'saya (I am)', 'be'], ['proud', 'bangga']],
      phrases: [['proud of', 'bangga pada']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S10', english: "I'm sorry.", pronunciation: 'aim so-ri', translation: 'Saya minta maaf.',
      words: [["I'm", 'saya (I am)', 'be'], ['sorry', 'menyesal / minta maaf']], pattern: 'D12-P3'
    },
    {
      id: 'D12-S11', english: "I'm worried.", pronunciation: 'aim wa-rid', translation: 'Saya khawatir.',
      words: [["I'm", 'saya (I am)', 'be'], ['worried', 'khawatir', 'worry']], pattern: 'D12-P2'
    },
    {
      id: 'D12-S12', english: "I'm relieved.", pronunciation: 'aim ri-livd', translation: 'Saya lega.',
      words: [["I'm", 'saya (I am)', 'be'], ['relieved', 'lega']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S13', english: "I'm confident.", pronunciation: 'aim kon-fi-dent', translation: 'Saya percaya diri.',
      words: [["I'm", 'saya (I am)', 'be'], ['confident', 'percaya diri / yakin']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S14', english: "I'm disappointed.", pronunciation: 'aim dis-e-poin-tid', translation: 'Saya kecewa.',
      words: [["I'm", 'saya (I am)', 'be'], ['disappointed', 'kecewa']], pattern: 'D12-P1'
    },
    {
      id: 'D12-S15', english: "I'm grateful.", pronunciation: 'aim greit-ful', translation: 'Saya bersyukur.',
      words: [["I'm", 'saya (I am)', 'be'], ['grateful', 'bersyukur / berterima kasih']],
      phrases: [['grateful for', 'bersyukur atas']], pattern: 'D12-P1'
    }
  ],

  review: [
    { ref: 'D11-S07' },
    { ref: 'D05-S10' },
    { ref: 'D09-S14' }
  ],

  patterns: [
    {
      id: 'D12-P1',
      formula: "I'm + PERASAAN",
      meaning: 'Saya (merasa) ...',
      examples: ["I'm a little tired.", "I'm very happy today.", "I'm not angry.", "I'm so proud of my team."],
      note: 'Tambahkan a little / very / so / not untuk memberi nuansa.'
    },
    {
      id: 'D12-P2',
      formula: "I'm + PERASAAN + about + HAL",
      meaning: 'Saya ... tentang ...',
      examples: ["I'm worried about the deadline.", "I'm excited about the new project.", "I'm nervous about the interview."]
    },
    {
      id: 'D12-P3',
      formula: "I'm sorry + for / about + HAL",
      meaning: 'Maaf atas ...',
      examples: ["I'm sorry for being late.", "I'm sorry about that.", "I'm sorry, I don't understand."]
    },
    {
      id: 'D12-P4',
      formula: "I'm + PERASAAN + because + KALIMAT",
      meaning: 'Saya ... karena ...',
      examples: ["I'm happy because the test passed.", "I'm tired because I worked late.", "I'm relieved because the bug is fixed."],
      note: 'Menambahkan alasan membuat jawabanmu lebih panjang dan natural.'
    }
  ],

  shadowing: ['D12-S05', 'D12-S07', 'D12-S10', 'D12-S11'],

  speaking: [
    { q: 'How are you feeling today? Why?', qId: 'Bagaimana perasaanmu hari ini? Kenapa?', hint: "I'm ... because ...", example: "I'm a little tired because I slept late, but I'm okay." },
    { q: 'What are you worried about these days?', qId: 'Apa yang kamu khawatirkan belakangan ini?', hint: "I'm worried about ...", example: "I'm worried about my English for meetings." },
    { q: 'What are you excited about?', qId: 'Apa yang membuatmu bersemangat?', hint: "I'm excited about ...", example: "I'm excited about my new project at work." },
    { q: 'You are late for a meeting. Apologize.', qId: 'Kamu terlambat ikut meeting. Minta maaf.', hint: "I'm sorry for ...", example: "Sorry I'm late. The traffic was bad." }
  ],

  talk321: null
});
