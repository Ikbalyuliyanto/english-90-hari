E90.registerDay({
  day: 85,
  titleId: 'Trade-off Teknis',
  goal: 'Menjelaskan apa yang didapat dan dikorbankan dari sebuah pilihan teknis, kenapa trade-off itu bisa diterima, utang teknis, dan apakah sebuah kerumitan sepadan.',

  learn: [
    {
      id: 'D85-S01',
      english: 'Every solution has trade-offs.',
      pronunciation: 'ev-ri se-lu-shen hez treid-ofs',
      translation: 'Setiap solusi punya untung-ruginya.',
      words: [['Every', 'setiap'], ['solution', 'solusi'], ['has', 'punya (have untuk it)', 'have'], ['trade-offs', 'trade-off: ada yang didapat, ada yang dikorbankan (jamak)', 'trade-off']],
      pattern: 'D85-P1'
    },
    {
      id: 'D85-S02',
      english: "We're trading flexibility for speed.",
      pronunciation: 'wir trei-ding flek-si-bi-le-ti for spid',
      translation: 'Kami mengorbankan fleksibilitas demi kecepatan.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['trading', 'menukar (dalam "trade A for B")', 'trade'], ['flexibility', 'fleksibilitas / kemudahan untuk diubah'], ['for', 'demi / dengan'], ['speed', 'kecepatan']],
      phrases: [['trade A for B', 'mengorbankan A demi mendapat B']],
      pattern: 'D85-P1'
    },
    {
      id: 'D85-S03',
      english: 'Caching makes the page faster, but the data might be out of date.',
      pronunciation: 'ke-shing meiks de peij fes-ter, bat de dei-ta mait bi aut ov deit',
      translation: 'Cache membuat halaman lebih cepat, tapi datanya mungkin tidak yang terbaru.',
      words: [['Caching', 'caching: menyimpan data sementara', 'cache'], ['makes', 'membuat; -s karena "caching"', 'make'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['faster', 'lebih cepat', 'fast'], ['but', 'tetapi'], ['data', 'data'], ['might', 'mungkin'], ['be', '(to be, tidak diterjemahkan)'], ['out', '(bagian dari "out of date")'], ['of', '(bagian dari "out of date")'], ['date', 'tanggal (dalam "out of date": sudah tidak terbaru)']],
      phrases: [['out of date', 'sudah tidak terbaru / usang']],
      pattern: 'D85-P2'
    },
    {
      id: 'D85-S04',
      english: 'The main disadvantage is that it requires more database queries.',
      pronunciation: 'de mein dis-ed-ven-tij iz det it ri-kwai-erz mor dei-te-beis kwi-riz',
      translation: 'Kekurangan utamanya, cara ini butuh lebih banyak query ke database.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['disadvantage', 'kekurangan'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['it', 'hal itu'], ['requires', 'membutuhkan; -s karena "it"', 'require'], ['more', 'lebih banyak'], ['database', 'database: tempat data disimpan'], ['queries', 'query (jamak)', 'query']],
      pattern: 'D57-P3'
    },
    {
      id: 'D85-S05',
      english: "It's a good trade-off for now.",
      pronunciation: 'its e gud treid-of for nau',
      translation: 'Untuk saat ini, itu trade-off yang bagus.',
      words: [["It's", 'itu (it is)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['good', 'bagus / baik'], ['trade-off', 'trade-off: ada yang didapat, ada yang dikorbankan'], ['for', 'untuk'], ['now', 'sekarang']],
      phrases: [['for now', 'untuk saat ini']],
      pattern: 'D85-P3'
    },
    {
      id: 'D85-S06',
      english: "We can accept a small delay because the reports aren't urgent.",
      pronunciation: 'wi ken ek-sept e smol di-lei bi-koz de ri-ports arnt er-jent',
      translation: 'Kami bisa menerima sedikit keterlambatan karena laporannya tidak mendesak.',
      words: [['We', 'kami'], ['can', 'bisa'], ['accept', 'menerima'], ['a', 'sebuah (tidak diterjemahkan)'], ['small', 'kecil / sedikit'], ['delay', 'keterlambatan / jeda'], ['because', 'karena'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['reports', 'laporan (jamak)', 'report'], ["aren't", 'tidak (are not)', 'be'], ['urgent', 'mendesak']],
      pattern: 'D85-P3'
    },
    {
      id: 'D85-S07',
      english: "This makes the code more complex, so it's harder for new developers.",
      pronunciation: 'dis meiks de koud mor kom-pleks, sou its har-der for nyu di-ve-lo-perz',
      translation: 'Ini membuat kodenya lebih rumit, jadi lebih sulit untuk developer baru.',
      words: [['This', 'ini'], ['makes', 'membuat', 'make'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['code', 'kode program'], ['more', 'lebih'], ['complex', 'kompleks / rumit'], ['so', 'jadi'], ["it's", 'itu (it is)', 'be'], ['harder', 'lebih sulit', 'hard'], ['for', 'untuk / bagi'], ['new', 'baru'], ['developers', 'developer (jamak)', 'developer']],
      pattern: 'D85-P2'
    },
    {
      id: 'D85-S08',
      english: "We're taking on some technical debt to meet the deadline.",
      pronunciation: 'wir tei-king on sam tek-ni-kel det tu mit de ded-lain',
      translation: 'Kami mengambil sedikit utang teknis supaya bisa memenuhi deadline.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['taking', 'mengambil (dalam "take on")', 'take'], ['on', '(bagian dari "take on")'], ['some', 'sedikit / beberapa'], ['technical', 'teknis'], ['debt', 'utang (huruf b tidak dibaca)'], ['to', 'supaya / untuk'], ['meet', 'memenuhi (dalam "meet the deadline")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['deadline', 'tenggat waktu / deadline']],
      phrases: [['technical debt', 'utang teknis: solusi cepat sekarang yang perlu dirapikan nanti'], ['meet the deadline', 'selesai tepat deadline']],
      pattern: 'D85-P4'
    },
    {
      id: 'D85-S09',
      english: "We'll need to refactor this part later.",
      pronunciation: 'wil nid tu ri-fek-ter dis part lei-ter',
      translation: 'Nanti bagian ini perlu kita refactor.',
      words: [["We'll", 'kita akan (we will)', 'will'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['refactor', 'refactor: merapikan struktur kode tanpa mengubah fungsinya'], ['this', 'ini'], ['part', 'bagian'], ['later', 'nanti']],
      pattern: 'D85-P4'
    },
    {
      id: 'D85-S10',
      english: 'Is it worth the extra complexity?',
      pronunciation: 'iz it werth di eks-tra kem-plek-si-ti?',
      translation: 'Apakah itu sepadan dengan kerumitan tambahannya?',
      words: [['Is', '(kata bantu pertanyaan "is it ...?", tidak diterjemahkan)', 'be'], ['it', 'itu / hal itu'], ['worth', 'sepadan / layak'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['extra', 'tambahan'], ['complexity', 'kerumitan / kompleksitas']],
      phrases: [['is it worth it?', 'apakah sepadan?']],
      pattern: 'D85-P5'
    }
  ],

  review: [
    {
      id: 'D85-S11',
      english: 'The risk is that we might lose some messages.',
      pronunciation: 'de risk iz det wi mait luz sam me-si-jiz',
      translation: 'Risikonya, kita mungkin kehilangan sebagian pesan.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['risk', 'risiko'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['we', 'kita'], ['might', 'mungkin'], ['lose', 'kehilangan'], ['some', 'sebagian / beberapa'], ['messages', 'pesan (jamak)', 'message']],
      pattern: 'D50-P4'
    },
    {
      id: 'D85-S12',
      english: "If we skip the tests now, we'll have more bugs later.",
      pronunciation: 'if wi skip de tests nau, wil hev mor bagz lei-ter',
      translation: 'Kalau sekarang kita lewati test-nya, nanti bug-nya akan lebih banyak.',
      words: [['If', 'kalau / jika'], ['we', 'kita'], ['skip', 'melewati / tidak mengerjakan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['tests', 'test (jamak)', 'test'], ['now', 'sekarang'], ["we'll", 'kita akan (we will)', 'will'], ['have', 'punya / mengalami'], ['more', 'lebih banyak'], ['bugs', 'bug (jamak)', 'bug'], ['later', 'nanti']],
      pattern: 'D50-P3'
    },
    {
      id: 'D85-S13',
      english: "I see your point, but I don't think it's worth the extra cost.",
      pronunciation: 'ai si yor point, bat ai dount thingk its werth di eks-tra kost',
      translation: 'Saya paham maksudmu, tapi menurut saya itu tidak sepadan dengan biaya tambahannya.',
      words: [['I', 'saya'], ['see', 'memahami (dalam "see your point")'], ['your', 'milikmu'], ['point', 'poin / maksud'], ['but', 'tetapi'], ["don't", 'tidak (do not)'], ['think', 'berpendapat'], ["it's", 'itu (it is)', 'be'], ['worth', 'sepadan / layak'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['extra', 'tambahan'], ['cost', 'biaya']],
      pattern: 'D41-P3'
    },
    { ref: 'D50-S10' },
    { ref: 'D84-S04' }
  ],

  patterns: [
    {
      id: 'D85-P1',
      formula: "Every solution has trade-offs  ·  We're trading A for B",
      meaning: 'Say that every choice has a cost.',
      examples: ["We're trading consistency for speed.", 'We gave up some flexibility to keep things simple.', "We can't have everything at once."]
    },
    {
      id: 'D85-P2',
      formula: 'A makes + BENDA + KATA SIFAT-er, but + KALIMAT',
      meaning: 'Explain a benefit and its cost in one sentence.',
      examples: ['Microservices make scaling easier, but deployment becomes more complex.', 'Indexes make reads faster, but writes get slower.', 'Caching reduces the load, but the data might be old.']
    },
    {
      id: 'D85-P3',
      formula: "It's a good trade-off for now  ·  We can accept + BENDA + because + KALIMAT",
      meaning: 'Justify a trade-off.',
      examples: ["It's an acceptable trade-off for the first version.", 'We can accept a few seconds of delay because the report runs at night.', 'For now, simplicity is more important than flexibility.']
    },
    {
      id: 'D85-P4',
      formula: "We're taking on technical debt to + KATA KERJA  ·  We'll need to + KATA KERJA + later",
      meaning: 'Be honest about shortcuts.',
      examples: ["We're taking on some technical debt to launch on time.", "We'll need to clean this up next sprint.", "Let's create a ticket so we don't forget."],
      note: 'technical debt = "utang teknis": solusi cepat sekarang yang harus dirapikan nanti. "debt" dibaca det (huruf b tidak dibaca).'
    },
    {
      id: 'D85-P5',
      formula: "Is it worth + BENDA?  ·  I don't think it's worth it",
      meaning: 'Question whether the cost is justified.',
      examples: ['Is it worth the extra complexity?', "I don't think it's worth adding a new service yet.", "It's worth it if we expect a lot of traffic."]
    }
  ],

  shadowing: ['D85-S02', 'D85-S03', 'D85-S05', 'D85-S08'],

  speaking: [
    { q: 'Explain a trade-off in your system. What did you gain, and what did you give up?', qId: 'Jelaskan satu trade-off di sistemmu. Apa yang didapat, dan apa yang dikorbankan?', hint: "We're trading ... for ... It makes ..., but ...", example: "We cache the product list for five minutes. We're trading freshness for speed. It makes the page much faster, but the prices might be out of date for a few minutes." },
    { q: 'Why was that trade-off acceptable?', qId: 'Kenapa trade-off itu bisa diterima?', hint: "It's a good trade-off for now because ... We can accept ... because ...", example: "It's a good trade-off for now because prices don't change often. We can accept a small delay because we clear the cache when an admin updates a price." },
    { q: 'Has your team taken on technical debt? How will you handle it?', qId: 'Pernahkah timmu mengambil utang teknis? Bagaimana cara menanganinya?', hint: "We took on some technical debt to ... We'll need to refactor ... later.", example: "Yes. We took on some technical debt to meet the launch date. The payment code has a lot of duplication, so we'll need to refactor this part next month." },
    { q: 'A teammate suggests adding a complex new tool. Question whether it is worth it.', qId: 'Rekan tim mengusulkan tool baru yang rumit. Pertanyakan apakah itu sepadan.', hint: "Is it worth the extra ...? I see your point, but ... It's worth it if ...", example: "I see your point, but is it worth the extra complexity right now? We only have a few users. It's worth it if we expect much more traffic next year." }
  ],

  talk321: null
});
