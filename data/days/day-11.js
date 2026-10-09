E90.registerDay({
  day: 11,
  titleId: 'Kesehatan',
  goal: 'Mengatakan kondisi badan dan apa yang dibutuhkan.',

  learn: [
    {
      id: 'D11-S01',
      english: "I'm not feeling well.",
      pronunciation: 'aim not fi-ling wel',
      translation: 'Saya sedang tidak enak badan.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['not', 'tidak'], ['feeling', 'merasa', 'feel'], ['well', 'sehat / baik']],
      phrases: [['not feeling well', 'tidak enak badan']]
    },
    {
      id: 'D11-S02',
      english: 'I have a headache.',
      pronunciation: 'ai hev e hed-eik',
      translation: 'Saya sakit kepala.',
      words: [['I', 'saya'], ['have', 'mengalami / punya (untuk sakit)'], ['a', 'sebuah (tidak diterjemahkan)'], ['headache', 'sakit kepala']],
      pattern: 'D11-P1'
    },
    {
      id: 'D11-S03',
      english: 'I have a fever.',
      pronunciation: 'ai hev e fi-ver',
      translation: 'Saya demam.',
      words: [['I', 'saya'], ['have', 'mengalami / punya (untuk sakit)'], ['a', 'sebuah (tidak diterjemahkan)'], ['fever', 'demam']],
      pattern: 'D11-P1'
    },
    {
      id: 'D11-S04',
      english: 'I have a cough.',
      pronunciation: 'ai hev e kof',
      translation: 'Saya batuk.',
      words: [['I', 'saya'], ['have', 'mengalami / punya (untuk sakit)'], ['a', 'sebuah (tidak diterjemahkan)'], ['cough', 'batuk']],
      pattern: 'D11-P1'
    },
    {
      id: 'D11-S05',
      english: 'I have a cold.',
      pronunciation: 'ai hev e kould',
      translation: 'Saya sedang pilek.',
      words: [['I', 'saya'], ['have', 'mengalami / punya (untuk sakit)'], ['a', 'sebuah (tidak diterjemahkan)'], ['cold', 'pilek / flu ringan']],
      phrases: [['have a cold', 'pilek (bukan "dingin")']],
      pattern: 'D11-P1'
    },
    {
      id: 'D11-S06',
      english: 'I have a stomachache.',
      pronunciation: 'ai hev e sta-mek-eik',
      translation: 'Saya sakit perut.',
      words: [['I', 'saya'], ['have', 'mengalami / punya (untuk sakit)'], ['a', 'sebuah (tidak diterjemahkan)'], ['stomachache', 'sakit perut']],
      pattern: 'D11-P1'
    },
    {
      id: 'D11-S07',
      english: 'I feel tired.',
      pronunciation: 'ai fil tai-erd',
      translation: 'Saya merasa lelah.',
      words: [['I', 'saya'], ['feel', 'merasa'], ['tired', 'lelah']],
      pattern: 'D11-P4'
    },
    {
      id: 'D11-S08',
      english: 'I need medicine.',
      pronunciation: 'ai nid me-di-sin',
      translation: 'Saya perlu obat.',
      words: [['I', 'saya'], ['need', 'perlu / membutuhkan'], ['medicine', 'obat']]
    },
    {
      id: 'D11-S09',
      english: 'I should see a doctor.',
      pronunciation: 'ai shud si e dok-ter',
      translation: 'Sebaiknya saya periksa ke dokter.',
      words: [['I', 'saya'], ['should', 'sebaiknya'], ['see', 'menemui / periksa ke'], ['a', 'seorang'], ['doctor', 'dokter']],
      phrases: [['see a doctor', 'periksa ke dokter']],
      pattern: 'D11-P3'
    },
    {
      id: 'D11-S10',
      english: "I'm allergic to this.",
      pronunciation: 'aim e-ler-jik tu dis',
      translation: 'Saya alergi terhadap ini.',
      words: [["I'm", 'saya (I am)', 'be'], ['allergic', 'alergi'], ['to', 'terhadap'], ['this', 'ini']],
      phrases: [['allergic to', 'alergi terhadap']]
    },
    {
      id: 'D11-S11',
      english: 'I need to rest.',
      pronunciation: 'ai nid tu rest',
      translation: 'Saya perlu istirahat.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', 'untuk (penanda kata kerja)'], ['rest', 'beristirahat']],
      phrases: [['need to + kata kerja', 'perlu ...']],
      pattern: 'D11-P2'
    },
    {
      id: 'D11-S12',
      english: 'I need more water.',
      pronunciation: 'ai nid mor wo-ter',
      translation: 'Saya perlu lebih banyak air.',
      words: [['I', 'saya'], ['need', 'perlu / membutuhkan'], ['more', 'lebih banyak'], ['water', 'air']]
    },
    {
      id: 'D11-S13',
      english: 'Take care.',
      pronunciation: 'teik ker',
      translation: 'Jaga diri.',
      words: [['Take', 'ambil / lakukan'], ['care', 'penjagaan / perhatian']],
      phrases: [['take care', 'jaga diri / hati-hati (juga dipakai saat berpisah)']]
    },
    {
      id: 'D11-S14',
      english: 'Get well soon.',
      pronunciation: 'get wel sun',
      translation: 'Semoga cepat sembuh.',
      words: [['Get', 'menjadi'], ['well', 'sehat'], ['soon', 'segera']],
      phrases: [['get well', 'sembuh / menjadi sehat']]
    },
    {
      id: 'D11-S15',
      english: 'I feel better now.',
      pronunciation: 'ai fil be-ter nau',
      translation: 'Sekarang saya merasa lebih baik.',
      words: [['I', 'saya'], ['feel', 'merasa'], ['better', 'lebih baik', 'good'], ['now', 'sekarang']],
      pattern: 'D11-P4'
    }
  ],

  review: [
    { ref: 'D03-S10' },
    { ref: 'D03-S11' },
    { ref: 'D10-S05' }
  ],

  patterns: [
    {
      id: 'D11-P1',
      formula: 'I have a + SAKIT',
      meaning: 'Saya (sedang) sakit ...',
      examples: ['I have a sore throat.', 'I have a toothache.', 'I have a backache.', 'I have a runny nose.']
    },
    {
      id: 'D11-P2',
      formula: 'I need to + KATA KERJA',
      meaning: 'Saya perlu ...',
      examples: ['I need to check it.', 'I need to fix it.', 'I need to finish this.', 'I need to talk to my manager.'],
      note: 'Pola ini akan sering dipakai di kantor. Bandingkan: I need + BENDA (I need medicine).'
    },
    {
      id: 'D11-P3',
      formula: 'I should + KATA KERJA',
      meaning: 'Sebaiknya saya ...',
      examples: ['I should go home.', 'I should drink more water.', 'I should ask my team.', 'You should rest.']
    },
    {
      id: 'D11-P4',
      formula: 'I feel + KEADAAN',
      meaning: 'Saya merasa ...',
      examples: ['I feel sick.', 'I feel sleepy.', 'I feel much better.', 'I feel a little dizzy.']
    }
  ],

  shadowing: ['D11-S01', 'D11-S05', 'D11-S09', 'D11-S11'],

  speaking: [
    { q: 'You are sick and cannot come to work. Message your manager.', qId: 'Kamu sakit dan tidak bisa masuk kerja. Kirim pesan ke atasan.', hint: "I'm not feeling well. I have ... I need to ...", example: "Hi, I'm not feeling well today. I have a fever, so I need to rest." },
    { q: 'How do you feel today?', qId: 'Bagaimana perasaan/kondisimu hari ini?', hint: 'I feel ...', example: 'I feel a bit tired, but I am okay.' },
    { q: 'Your colleague has a cold. What do you say?', qId: 'Rekanmu sedang pilek. Kamu bilang apa?', hint: 'You should ... Get well ...', example: 'You should go home and rest. Get well soon!' }
  ],

  talk321: null
});
