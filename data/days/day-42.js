E90.registerDay({
  day: 42,
  titleId: 'Masalah & Blocker',
  goal: 'Menjelaskan masalah dan hambatan kerja dengan bahasa sederhana, lalu memberi kabar tindak lanjut.',

  learn: [
    {
      id: 'D42-S01',
      english: "There's a problem with the payment page.",
      pronunciation: 'derz e prob-lem with de pei-ment peij',
      translation: 'Ada masalah di halaman pembayaran.',
      words: [["There's", 'ada (there is)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['problem', 'masalah'], ['with', 'dengan / di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['payment', 'pembayaran'], ['page', 'halaman']],
      pattern: 'D42-P1'
    },
    {
      id: 'D42-S02',
      english: "Something isn't working correctly.",
      pronunciation: 'sam-thing i-zent wer-king ko-rekt-li',
      translation: 'Ada yang tidak berfungsi dengan benar.',
      words: [['Something', 'sesuatu'], ["isn't", 'tidak sedang (is not)', 'be'], ['working', 'berfungsi', 'work'], ['correctly', 'dengan benar', 'correct']],
      pattern: 'D28-P2'
    },
    {
      id: 'D42-S03',
      english: "We're having an issue with the login.",
      pronunciation: 'wir he-ving en i-shu with de lo-gin',
      translation: 'Kami sedang mengalami masalah dengan login.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['having', 'mengalami', 'have'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala'], ['with', 'dengan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['login', 'login / masuk ke akun']],
      phrases: [['have an issue with', 'mengalami masalah dengan']],
      pattern: 'D42-P1'
    },
    {
      id: 'D42-S04',
      english: "I'm blocked by the missing data.",
      pronunciation: 'aim blokt bai de mi-sing dei-ta',
      translation: 'Pekerjaan saya terhambat karena datanya belum ada.',
      words: [["I'm", 'saya (I am)', 'be'], ['blocked', 'terhambat / tertahan', 'block'], ['by', 'oleh'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['missing', 'yang belum ada / hilang', 'miss'], ['data', 'data']],
      phrases: [['be blocked by', 'terhambat oleh']],
      pattern: 'D42-P2'
    },
    {
      id: 'D42-S05',
      english: "We're still waiting for the design team.",
      pronunciation: 'wir stil wei-ting for de di-zain tim',
      translation: 'Kami masih menunggu tim desain.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['still', 'masih'], ['waiting', 'menunggu', 'wait'], ['for', '(bagian dari "wait for")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['design', 'desain'], ['team', 'tim']],
      pattern: 'D42-P2'
    },
    {
      id: 'D42-S06',
      english: 'This is causing a delay.',
      pronunciation: 'dis iz ko-zing e di-lei',
      translation: 'Ini menyebabkan keterlambatan.',
      words: [['This', 'ini'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['causing', 'menyebabkan', 'cause'], ['a', 'sebuah (tidak diterjemahkan)'], ['delay', 'keterlambatan / penundaan']],
      pattern: 'D42-P3'
    },
    {
      id: 'D42-S07',
      english: "I haven't found the cause yet.",
      pronunciation: 'ai he-vent faund de koz yet',
      translation: 'Saya belum menemukan penyebabnya.',
      words: [['I', 'saya'], ["haven't", 'belum (have not)', 'have'], ['found', 'menemukan', 'find'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['cause', 'penyebab'], ['yet', '(penegas "belum", di akhir kalimat)']],
      pattern: 'D34-P3'
    },
    {
      id: 'D42-S08',
      english: "I'm looking into it.",
      pronunciation: 'aim lu-king in-tu it',
      translation: 'Sedang saya selidiki.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['looking', '(bagian dari "look into")', 'look'], ['into', '(bagian dari "look into")'], ['it', 'itu / hal itu']],
      phrases: [['look into', 'menyelidiki / memeriksa lebih dalam']],
      pattern: 'D42-P4'
    },
    {
      id: 'D42-S09',
      english: "I'll update you when I know more.",
      pronunciation: 'ail ap-deit yu wen ai nou mor',
      translation: 'Saya kabari lagi kalau sudah tahu lebih banyak.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['update', 'mengabari / memberi update'], ['you', 'kamu'], ['when', 'kalau / ketika'], ['I', 'saya'], ['know', 'tahu'], ['more', 'lebih banyak']],
      pattern: 'D42-P4'
    },
    {
      id: 'D42-S10',
      english: 'It only happens on some phones.',
      pronunciation: 'it oun-li he-penz on sam founz',
      translation: 'Masalahnya hanya terjadi di beberapa ponsel.',
      words: [['It', 'hal itu / masalahnya'], ['only', 'hanya'], ['happens', 'terjadi; -s karena "it"', 'happen'], ['on', 'pada / di'], ['some', 'beberapa'], ['phones', 'ponsel (jamak)', 'phone']],
      pattern: 'D42-P5'
    }
  ],

  review: [
    {
      id: 'D42-S11',
      english: "I tried a different browser, but it didn't help.",
      pronunciation: 'ai traid e di-fe-rent brau-zer, bat it di-dent help',
      translation: 'Saya sudah coba browser lain, tapi tidak membantu.',
      words: [['I', 'saya'], ['tried', 'mencoba (lampau)', 'try'], ['a', 'sebuah (tidak diterjemahkan)'], ['different', 'lain / berbeda'], ['browser', 'peramban / browser'], ['but', 'tetapi'], ['it', 'hal itu'], ["didn't", 'tidak (lampau) — did not', 'do'], ['help', 'membantu']],
      pattern: 'D36-P5'
    },
    {
      id: 'D42-S12',
      english: 'I need help with this issue.',
      pronunciation: 'ai nid help with dis i-shu',
      translation: 'Saya butuh bantuan untuk masalah ini.',
      words: [['I', 'saya'], ['need', 'butuh'], ['help', 'bantuan'], ['with', 'untuk / dengan'], ['this', 'ini'], ['issue', 'masalah / kendala']],
      pattern: 'D28-P5'
    },
    {
      id: 'D42-S13',
      english: 'What happened after the update?',
      pronunciation: 'wat he-pend ef-ter di ap-deit?',
      translation: 'Apa yang terjadi setelah update?',
      words: [['What', 'apa (yang)'], ['happened', 'terjadi (lampau)', 'happen'], ['after', 'setelah'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['update', 'pembaruan / update']],
      pattern: 'D23-P2'
    },
    { ref: 'D28-S03' },
    { ref: 'D35-S06' }
  ],

  patterns: [
    {
      id: 'D42-P1',
      formula: "There's a problem with + BENDA  ·  We're having an issue with + BENDA",
      meaning: 'Ada masalah dengan ...',
      examples: ["There's a problem with the printer.", "We're having an issue with the internet.", "There's a small issue with the report."]
    },
    {
      id: 'D42-P2',
      formula: "I'm blocked by + BENDA  ·  We're waiting for + ORANG / BENDA",
      meaning: 'Menyebut apa yang menghambat pekerjaan',
      examples: ["I'm blocked by the missing access.", "We're blocked by the approval process.", "I'm waiting for the final numbers."]
    },
    {
      id: 'D42-P3',
      formula: 'This is causing + BENDA',
      meaning: 'Ini menyebabkan ...',
      examples: ['This is causing problems for users.', 'The bug is causing errors.', 'The traffic is causing a delay.']
    },
    {
      id: 'D42-P4',
      formula: "I'm looking into it  ·  I'll update you when + KALIMAT",
      meaning: 'Memberi kabar bahwa masalahnya sedang ditangani',
      examples: ["I'm looking into the problem now.", "I'll update you when it's fixed.", "I'll let you know when I find the cause."],
      note: 'Setelah "when" pakai bentuk sekarang: when it\'s fixed (bukan when it will be fixed).'
    },
    {
      id: 'D42-P5',
      formula: 'It only happens + when / on + ...',
      meaning: 'Menjelaskan kapan masalahnya muncul',
      examples: ['It only happens when I upload a big file.', 'It only happens on Mondays.', 'It happens every time I log in.']
    }
  ],

  shadowing: ['D42-S01', 'D42-S04', 'D42-S08', 'D42-S09'],

  speaking: [
    { q: 'Describe a problem at work today, real or imagined. Explain it simply.', qId: 'Ceritakan satu masalah kerja hari ini (nyata atau bayangan). Jelaskan dengan sederhana.', hint: "There's a problem with ... It only happens when ...", example: "There's a problem with the report page. It only happens when the file is very big." },
    { q: 'In the standup, explain a blocker.', qId: 'Di standup, jelaskan satu blocker.', hint: "I'm blocked by ... We're waiting for ... This is causing ...", example: "I'm blocked by the missing test data. We're waiting for the client to send it, and this is causing a delay." },
    { q: 'Your manager asks: "Did you find the cause?" You haven\'t. Answer.', qId: 'Atasan bertanya: "Sudah ketemu penyebabnya?" Belum. Jawab.', hint: "Not yet. I haven't found ... I'm looking into it. I'll update you when ...", example: "Not yet. I haven't found the cause, but I'm looking into it. I'll update you when I know more." },
    { q: 'A user says the app is slow. Ask questions to understand the problem.', qId: 'Pengguna bilang aplikasinya lambat. Ajukan pertanyaan untuk memahami masalahnya.', hint: 'When did it start? Does it happen every time? What happened ...?', example: 'When did it start? Does it happen every time, or only on some pages?' }
  ],

  talk321: null
});
