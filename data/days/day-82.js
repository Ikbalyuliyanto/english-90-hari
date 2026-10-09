E90.registerDay({
  day: 82,
  titleId: 'Investigasi Performa',
  goal: 'Menyelidiki masalah performa berbasis data: mengukur, profiling, membaca angka, menguji hipotesis, dan melaporkan load test.',

  learn: [
    {
      id: 'D82-S01',
      english: 'First, we need to measure where the time goes.',
      pronunciation: 'ferst, wi nid tu me-zher wer de taim gouz',
      translation: 'Pertama, kita perlu mengukur waktunya habis di bagian mana.',
      words: [['First', 'pertama'], ['we', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['measure', 'mengukur'], ['where', 'di mana / ke mana'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['time', 'waktu'], ['goes', 'habis / terpakai (dalam "where the time goes")', 'go']],
      pattern: 'D82-P1'
    },
    {
      id: 'D82-S02',
      english: "Let's not guess. Let's look at the data.",
      pronunciation: 'lets not ges. lets luk et de dei-ta',
      translation: 'Jangan menebak. Mari kita lihat datanya.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['not', 'tidak / jangan'], ['guess', 'menebak'], ['look', 'melihat'], ['at', '(bagian dari "look at")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data']],
      phrases: [["let's not + kata kerja", 'jangan kita ...']],
      pattern: 'D82-P1'
    },
    {
      id: 'D82-S03',
      english: 'I profiled the endpoint and found the slow part.',
      pronunciation: 'ai prou-faild di end-point en faund de slou part',
      translation: 'Saya mem-profile endpoint-nya dan menemukan bagian yang lambat.',
      words: [['I', 'saya'], ['profiled', 'mem-profile: mengukur waktu tiap bagian kode (lampau)', 'profile'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['endpoint', 'endpoint: alamat URL tertentu di API'], ['and', 'dan'], ['found', 'menemukan (lampau)', 'find'], ['slow', 'lambat'], ['part', 'bagian']],
      pattern: 'D82-P2'
    },
    {
      id: 'D82-S04',
      english: 'Most of the time is spent in one query.',
      pronunciation: 'moust ov de taim iz spent in wan kwi-ri',
      translation: 'Sebagian besar waktunya habis di satu query.',
      words: [['Most', 'sebagian besar'], ['of', 'dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['time', 'waktu'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['spent', 'dihabiskan / terpakai', 'spend'], ['in', 'di'], ['one', 'satu'], ['query', 'query: perintah ke database']],
      phrases: [['time is spent in', 'waktunya terpakai di']],
      pattern: 'D82-P2'
    },
    {
      id: 'D82-S05',
      english: 'The average response time is 300 milliseconds.',
      pronunciation: 'di e-ve-rij ri-spons taim iz thri han-dred mi-li-se-kendz',
      translation: 'Rata-rata waktu responsnya 300 milidetik.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['average', 'rata-rata'], ['response', 'response: jawaban dari server'], ['time', 'waktu'], ['is', 'adalah', 'be'], ['300', 'tiga ratus'], ['milliseconds', 'milidetik (jamak)', 'millisecond']],
      pattern: 'D82-P3'
    },
    {
      id: 'D82-S06',
      english: 'But some requests take more than five seconds.',
      pronunciation: 'bat sam ri-kwests teik mor den faiv se-kendz',
      translation: 'Tapi ada request yang butuh lebih dari lima detik.',
      words: [['But', 'tetapi'], ['some', 'beberapa / sebagian'], ['requests', 'request: permintaan (jamak)', 'request'], ['take', 'memakan (waktu)'], ['more', 'lebih'], ['than', 'dari / daripada'], ['five', 'lima'], ['seconds', 'detik (jamak)', 'second']],
      pattern: 'D82-P3'
    },
    {
      id: 'D82-S07',
      english: "My hypothesis is that the cache isn't working.",
      pronunciation: 'mai hai-po-the-sis iz det de kesh i-zent wer-king',
      translation: 'Dugaan saya, cache-nya tidak bekerja.',
      words: [['My', 'milik saya'], ['hypothesis', 'hipotesis / dugaan yang perlu diuji (dibaca "hai-po-the-sis")'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['cache', 'cache: penyimpanan data sementara'], ["isn't", 'tidak sedang (is not)', 'be'], ['working', 'berfungsi', 'work']],
      pattern: 'D82-P4'
    },
    {
      id: 'D82-S08',
      english: "To test this, I'll turn off the cache on staging.",
      pronunciation: 'tu test dis, ail tern of de kesh on stei-jing',
      translation: 'Untuk mengujinya, saya akan mematikan cache di staging.',
      words: [['To', 'untuk (penanda tujuan)'], ['test', 'menguji'], ['this', 'ini / hal ini'], ["I'll", 'saya akan (I will)', 'will'], ['turn', '(bagian dari "turn off")'], ['off', 'mati (dalam "turn off")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['cache', 'cache: penyimpanan data sementara'], ['on', 'di'], ['staging', 'staging: server uji yang mirip production']],
      pattern: 'D82-P4'
    },
    {
      id: 'D82-S09',
      english: 'We ran a load test with a thousand users.',
      pronunciation: 'wi ren e loud test with e thau-zend yu-zerz',
      translation: 'Kami menjalankan load test dengan seribu user.',
      words: [['We', 'kami'], ['ran', 'menjalankan (lampau)', 'run'], ['a', 'sebuah / satu (tidak diterjemahkan)'], ['load', 'beban'], ['test', 'uji / test'], ['with', 'dengan'], ['thousand', 'ribu'], ['users', 'pengguna (jamak)', 'user']],
      phrases: [['load test', 'uji beban: mensimulasikan banyak user sekaligus']],
      pattern: 'D82-P5'
    },
    {
      id: 'D82-S10',
      english: 'The system handled the load without any errors.',
      pronunciation: 'de sis-tem hen-deld de loud wi-daut e-ni e-rerz',
      translation: 'Sistemnya sanggup menangani beban itu tanpa error.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['handled', 'menangani / sanggup menahan (lampau)', 'handle'], ['load', 'beban'], ['without', 'tanpa'], ['any', '(satu pun — dalam kalimat negatif)'], ['errors', 'error (jamak)', 'error']],
      pattern: 'D82-P5'
    }
  ],

  review: [
    {
      id: 'D82-S11',
      english: 'The bottleneck is the external payment API.',
      pronunciation: 'de bo-tel-nek iz di eks-ter-nel pei-ment ei-pi-ai',
      translation: 'Bottleneck-nya ada di API pembayaran eksternal.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['bottleneck', 'bottleneck: bagian paling lambat yang menghambat proses'], ['is', 'adalah', 'be'], ['external', 'eksternal / dari pihak luar'], ['payment', 'pembayaran'], ['API', 'API: pintu komunikasi antar aplikasi']],
      pattern: 'D74-P3'
    },
    {
      id: 'D82-S12',
      english: 'We reduced the response time from two seconds to 400 milliseconds.',
      pronunciation: 'wi ri-dyust de ri-spons taim from tu se-kendz tu for han-dred mi-li-se-kendz',
      translation: 'Kami menurunkan waktu respons dari dua detik menjadi 400 milidetik.',
      words: [['We', 'kami'], ['reduced', 'mengurangi / menurunkan (lampau)', 'reduce'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['response', 'response: jawaban dari server'], ['time', 'waktu'], ['from', 'dari'], ['two', 'dua'], ['seconds', 'detik (jamak)', 'second'], ['to', 'menjadi / ke'], ['400', 'empat ratus'], ['milliseconds', 'milidetik (jamak)', 'millisecond']],
      pattern: 'D74-P5'
    },
    {
      id: 'D82-S13',
      english: 'We think this may be related to the database connection pool.',
      pronunciation: 'wi thingk dis mei bi ri-lei-tid tu de dei-te-beis ke-nek-shen pul',
      translation: 'Kami rasa ini mungkin berhubungan dengan connection pool database.',
      words: [['We', 'kami'], ['think', 'rasa / kira'], ['this', 'ini'], ['may', 'mungkin'], ['be', '(to be, tidak diterjemahkan)'], ['related', 'berhubungan / terkait', 'relate'], ['to', 'dengan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['database', 'database: tempat data disimpan'], ['connection', 'koneksi / sambungan'], ['pool', 'pool: kumpulan yang dipakai bergantian']],
      phrases: [['connection pool', 'kumpulan koneksi database yang dipakai bergantian']],
      pattern: 'D70-P4'
    },
    { ref: 'D74-S01' },
    { ref: 'D70-S01' }
  ],

  patterns: [
    {
      id: 'D82-P1',
      formula: "First, we need to measure + BENDA  ·  Let's not guess.",
      meaning: 'Start an investigation with data.',
      examples: ['First, we need to measure each step.', "Let's check the metrics before we change anything.", "Let's not guess. Let's look at the logs."]
    },
    {
      id: 'D82-P2',
      formula: 'I profiled + BENDA + and found + BENDA  ·  Most of the time is spent in + BENDA',
      meaning: 'Report where the time is spent.',
      examples: ['I profiled the page and found three slow queries.', 'Most of the time is spent waiting for the external API.', 'About 80 percent of the time is spent in rendering.']
    },
    {
      id: 'D82-P3',
      formula: 'The average + BENDA + is + ANGKA  ·  But some requests take + ANGKA',
      meaning: 'Describe performance with numbers.',
      examples: ['The average load time is two seconds.', 'The slowest requests take ten seconds.', 'Most requests finish in under one second.'],
      note: 'average = rata-rata. Angka rata-rata bisa menyembunyikan beberapa request yang sangat lambat.'
    },
    {
      id: 'D82-P4',
      formula: "My hypothesis is that + KALIMAT  ·  To test this, I'll + KATA KERJA",
      meaning: 'Investigate step by step.',
      examples: ["My hypothesis is that the index isn't being used.", "To test this, I'll compare the two query plans.", "If I'm right, the time should go down."],
      note: '"hypothesis" dibaca hai-po-the-sis.'
    },
    {
      id: 'D82-P5',
      formula: 'We ran a load test with + ANGKA + users  ·  The system handled + BENDA',
      meaning: 'Report load test results.',
      examples: ['We ran a load test with 500 users.', 'The system handled the traffic well.', 'The API started to fail at about two thousand requests per second.']
    }
  ],

  shadowing: ['D82-S01', 'D82-S04', 'D82-S07', 'D82-S09'],

  speaking: [
    { q: 'A page became slow. Explain how you would investigate it step by step.', qId: 'Sebuah halaman jadi lambat. Jelaskan cara kamu menyelidikinya langkah demi langkah.', hint: "First, we need to measure ... I would profile ... My hypothesis is ... To test this, ...", example: "First, we need to measure where the time goes, so I would profile the endpoint. If most of the time is spent in one query, my hypothesis is that the index isn't used. To test this, I'll check the query plan on staging." },
    { q: 'Describe the performance of your system using numbers.', qId: 'Jelaskan performa sistemmu dengan angka.', hint: 'The average ... is ... But some requests take ... Most of the time is spent in ...', example: 'The average response time is about 300 milliseconds. But some report requests take more than five seconds, and most of that time is spent in the database.' },
    { q: 'Your team wants to add a cache right away. Suggest measuring first.', qId: 'Timmu ingin langsung menambahkan cache. Sarankan untuk mengukur dulu.', hint: "Let's not guess. First, we need to measure ... If ..., then ...", example: "A cache might help, but let's not guess. First, we need to measure which part is slow. If the database is the problem, an index may be a simpler fix." },
    { q: 'Report the results of a load test.', qId: 'Laporkan hasil load test.', hint: 'We ran a load test with ... The system handled ... It started to fail when ...', example: 'We ran a load test with a thousand users. The system handled the load without errors, but the response time went up to two seconds. It started to fail at around three thousand users.' }
  ],

  talk321: null
});
