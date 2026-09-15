E90.registerDay({
  day: 70,
  titleId: 'Debugging & Log',
  goal: 'Menjelaskan proses investigasi: memeriksa log, menambah log atau breakpoint, menyebut kemungkinan penyebab, dan root cause yang sudah dipastikan.',

  learn: [
    {
      id: 'D70-S01',
      english: "I'm checking the logs to find the cause.",
      pronunciation: 'aim ce-king de logz tu faind de koz',
      translation: 'Saya sedang memeriksa log untuk mencari penyebabnya.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['checking', 'memeriksa', 'check'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['logs', 'log: catatan aktivitas sistem (jamak)', 'log'], ['to', 'untuk (penanda kata kerja)'], ['find', 'mencari / menemukan'], ['cause', 'penyebab']],
      pattern: 'D70-P1'
    },
    {
      id: 'D70-S02',
      english: 'The logs show a timeout error at 10:15.',
      pronunciation: 'de logz shou e taim-aut e-rer et ten fif-tin',
      translation: 'Log-nya menunjukkan error timeout pada jam 10.15.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['logs', 'log: catatan aktivitas sistem (jamak)', 'log'], ['show', 'menunjukkan'], ['a', 'sebuah (tidak diterjemahkan)'], ['timeout', 'timeout: proses terlalu lama sehingga dihentikan'], ['error', 'error / kesalahan'], ['at', 'pada (jam)'], ['10:15', 'jam 10.15 (dibaca "ten fifteen")']],
      pattern: 'D70-P2'
    },
    {
      id: 'D70-S03',
      english: 'I found this error in the stack trace.',
      pronunciation: 'ai faund dis e-rer in de stek treis',
      translation: 'Saya menemukan error ini di stack trace.',
      words: [['I', 'saya'], ['found', 'menemukan (lampau)', 'find'], ['this', 'ini'], ['error', 'error / kesalahan'], ['in', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['stack', '(bagian dari "stack trace")'], ['trace', '(bagian dari "stack trace")']],
      phrases: [['stack trace', 'daftar urutan fungsi yang dijalankan saat error terjadi']],
      pattern: 'D70-P2'
    },
    {
      id: 'D70-S04',
      english: "I added more logs to see what's happening.",
      pronunciation: 'ai e-did mor logz tu si wats he-pe-ning',
      translation: 'Saya menambahkan log lagi untuk melihat apa yang terjadi.',
      words: [['I', 'saya'], ['added', 'menambahkan (-ed dibaca "id")', 'add'], ['more', 'lebih banyak / lagi'], ['logs', 'log: catatan aktivitas sistem (jamak)', 'log'], ['to', 'untuk (penanda kata kerja)'], ['see', 'melihat'], ["what's", 'apa yang (what is)', 'what'], ['happening', 'sedang terjadi', 'happen']],
      pattern: 'D70-P3'
    },
    {
      id: 'D70-S05',
      english: "I'm debugging the issue on my local machine.",
      pronunciation: 'aim di-ba-ging di i-shu on mai lou-kel me-shin',
      translation: 'Saya sedang men-debug masalahnya di komputer lokal saya.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['debugging', 'debugging: mencari dan memperbaiki kesalahan kode', 'debug'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala teknis'], ['on', 'di'], ['my', 'milik saya'], ['local', 'lokal (di komputer sendiri)'], ['machine', 'komputer / mesin']],
      phrases: [['local machine', 'komputer sendiri, bukan server']],
      pattern: 'D16-P1'
    },
    {
      id: 'D70-S06',
      english: 'I put a breakpoint in this function.',
      pronunciation: 'ai put e breik-point in dis fangk-shen',
      translation: 'Saya memasang breakpoint di fungsi ini.',
      words: [['I', 'saya'], ['put', 'memasang / menaruh (lampau sama dengan bentuk dasar)'], ['a', 'sebuah (tidak diterjemahkan)'], ['breakpoint', 'breakpoint: titik berhenti sementara saat debugging'], ['in', 'di'], ['this', 'ini'], ['function', 'fungsi (dalam kode)']],
      pattern: 'D70-P3'
    },
    {
      id: 'D70-S07',
      english: 'We think this may be related to the new cache.',
      pronunciation: 'wi thingk dis mei bi ri-lei-tid tu de nyu kesh',
      translation: 'Kami rasa ini mungkin berhubungan dengan cache yang baru.',
      words: [['We', 'kami'], ['think', 'rasa / kira'], ['this', 'ini'], ['may', 'mungkin'], ['be', '(to be, tidak diterjemahkan)'], ['related', 'berhubungan / terkait', 'relate'], ['to', 'dengan (dalam "related to")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['cache', 'cache: penyimpanan data sementara agar lebih cepat (dibaca "kesh")']],
      phrases: [['be related to', 'berhubungan dengan']],
      pattern: 'D70-P4'
    },
    {
      id: 'D70-S08',
      english: 'The possible cause is a wrong configuration.',
      pronunciation: 'de po-si-bel koz iz e rong ken-fi-gyu-rei-shen',
      translation: 'Kemungkinan penyebabnya adalah konfigurasi yang salah.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['possible', 'kemungkinan / mungkin'], ['cause', 'penyebab'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['wrong', 'salah'], ['configuration', 'konfigurasi / pengaturan sistem']],
      pattern: 'D70-P4'
    },
    {
      id: 'D70-S09',
      english: "We haven't confirmed the root cause yet.",
      pronunciation: 'wi he-vent ken-fermd de rut koz yet',
      translation: 'Kami belum memastikan akar penyebabnya.',
      words: [['We', 'kami'], ["haven't", 'belum (have not)', 'have'], ['confirmed', 'memastikan / mengonfirmasi', 'confirm'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['root', 'akar'], ['cause', 'penyebab'], ['yet', '(penegas "belum", di akhir kalimat)']],
      phrases: [['root cause', 'akar penyebab yang sudah dipastikan']],
      pattern: 'D70-P5'
    },
    {
      id: 'D70-S10',
      english: 'We found the root cause: the API key had expired.',
      pronunciation: 'wi faund de rut koz: di ei-pi-ai ki hed ek-spai-erd',
      translation: 'Kami sudah menemukan akar penyebabnya: API key-nya sudah kedaluwarsa.',
      words: [['We', 'kami'], ['found', 'menemukan (lampau)', 'find'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['root', 'akar'], ['cause', 'penyebab'], ['API', 'API: pintu komunikasi antar aplikasi'], ['key', 'key: kode rahasia untuk memakai layanan'], ['had', 'sudah (had + -ed, sebelum waktu lampau lain)', 'have'], ['expired', 'kedaluwarsa', 'expire']],
      pattern: 'D70-P5'
    }
  ],

  review: [
    {
      id: 'D70-S11',
      english: "I've tried clearing the cache, but it didn't help.",
      pronunciation: 'aiv traid kli-ring de kesh, bat it di-dent help',
      translation: 'Saya sudah coba menghapus cache, tapi tidak membantu.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['tried', 'mencoba', 'try'], ['clearing', 'menghapus / membersihkan', 'clear'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['cache', 'cache: penyimpanan data sementara'], ['but', 'tetapi'], ['it', 'hal itu'], ["didn't", 'tidak (lampau) — did not', 'do'], ['help', 'membantu']],
      pattern: 'D36-P5'
    },
    {
      id: 'D70-S12',
      english: 'It only happens when two users save at the same time.',
      pronunciation: 'it oun-li he-penz wen tu yu-zerz seiv et de seim taim',
      translation: 'Masalahnya hanya terjadi saat dua user menyimpan di waktu yang sama.',
      words: [['It', 'itu (masalahnya)'], ['only', 'hanya'], ['happens', 'terjadi', 'happen'], ['when', 'saat / ketika'], ['two', 'dua'], ['users', 'pengguna (jamak)', 'user'], ['save', 'menyimpan'], ['at', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['same', 'sama'], ['time', 'waktu']],
      phrases: [['at the same time', 'bersamaan / di waktu yang sama']],
      pattern: 'D42-P5'
    },
    {
      id: 'D70-S13',
      english: "I'll update you when I find something.",
      pronunciation: 'ail ap-deit yu wen ai faind sam-thing',
      translation: 'Saya kabari kalau sudah menemukan sesuatu.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['update', 'mengabari'], ['you', 'kamu / Anda'], ['when', 'kalau / ketika'], ['I', 'saya'], ['find', 'menemukan'], ['something', 'sesuatu']],
      pattern: 'D42-P4'
    },
    { ref: 'D42-S08' },
    { ref: 'D69-S06' }
  ],

  patterns: [
    {
      id: 'D70-P1',
      formula: "I'm checking + BENDA + to find + BENDA",
      meaning: 'Say what you are investigating.',
      examples: ["I'm checking the server logs to find the error.", "I'm checking the database to find the missing record.", "I'm comparing the two versions to find the difference."]
    },
    {
      id: 'D70-P2',
      formula: 'The logs show + BENDA  ·  I found + BENDA + in the stack trace',
      meaning: 'Explain what you found.',
      examples: ['The logs show many failed login attempts.', 'The stack trace points to the payment service.', 'The error message says the file is missing.']
    },
    {
      id: 'D70-P3',
      formula: 'I added + BENDA + to see + KALIMAT',
      meaning: 'Explain your debugging steps.',
      examples: ['I added a log to see the request body.', 'I put a breakpoint to see the value of the variable.', 'I turned on debug mode to see more details.']
    },
    {
      id: 'D70-P4',
      formula: 'We think this may be related to + BENDA  ·  The possible cause is + BENDA',
      meaning: 'Talk about a cause that is not confirmed yet.',
      examples: ['We think this may be related to the last deployment.', 'The possible cause is a network problem.', 'It might be caused by an old version of the library.']
    },
    {
      id: 'D70-P5',
      formula: "We haven't confirmed the root cause yet  ·  We found the root cause: + KALIMAT",
      meaning: 'Talk about a confirmed cause.',
      examples: ['We found the root cause.', 'We confirmed that the problem was the time zone.', 'The root cause was a missing index.'],
      note: 'Pakai "root cause" hanya kalau penyebabnya sudah dipastikan. Kalau belum: "possible cause" atau "may be related to".'
    }
  ],

  shadowing: ['D70-S01', 'D70-S04', 'D70-S07', 'D70-S09'],

  speaking: [
    { q: 'How did you investigate a recent issue?', qId: 'Bagaimana kamu menginvestigasi masalah baru-baru ini?', hint: 'First, I checked the logs ... The logs showed ... Then, I added ... to see ...', example: 'First, I checked the server logs. The logs showed a timeout error from the payment API. Then, I added more logs to see how long each request took.' },
    { q: 'You do not know the cause yet. Give an update to your team.', qId: 'Kamu belum tahu penyebabnya. Beri update ke tim.', hint: "We haven't confirmed the root cause yet. We think this may be related to ... I'm checking ...", example: "We haven't confirmed the root cause yet. We think this may be related to the new cache. I'm checking the logs now, and I'll update you when I find something." },
    { q: 'You found the root cause. Explain it.', qId: 'Kamu sudah menemukan akar penyebabnya. Jelaskan.', hint: 'We found the root cause: ... As a result, ... The fix is ...', example: 'We found the root cause: the API key for the email service had expired. As a result, no emails were sent. The fix is to renew the key and add an alert before it expires.' },
    { q: 'What tools or methods do you usually use for debugging?', qId: 'Alat atau cara apa yang biasanya kamu pakai untuk debugging?', hint: 'I usually ... I put a breakpoint ... I check ...', example: 'I usually try to reproduce the bug locally first. Then I put breakpoints in the code and check the logs and the database.' }
  ],

  talk321: null
});
