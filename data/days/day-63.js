E90.registerDay({
  day: 63,
  titleId: 'English untuk Backend',
  goal: 'Menjelaskan apa yang dilakukan backend: menerima request, memvalidasi, memproses aturan bisnis, menyimpan data, dan mengembalikan hasil.',

  learn: [
    {
      id: 'D63-S01',
      english: 'The backend receives the request from the frontend.',
      pronunciation: 'de bek-end ri-sivz de ri-kwest from de front-end',
      translation: 'Backend menerima request dari frontend.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['receives', 'menerima; -s karena "the backend"', 'receive'], ['request', 'request: permintaan yang dikirim ke server'], ['from', 'dari'], ['frontend', 'frontend: bagian aplikasi yang dilihat user']],
      pattern: 'D63-P1'
    },
    {
      id: 'D63-S02',
      english: 'First, it validates the data.',
      pronunciation: 'ferst, it ve-li-deits de dei-ta',
      translation: 'Pertama, backend memvalidasi datanya.',
      words: [['First', 'pertama'], ['it', 'itu (backend-nya)'], ['validates', 'memvalidasi / memeriksa apakah data benar; -s karena "it"', 'validate'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data']],
      pattern: 'D63-P1'
    },
    {
      id: 'D63-S03',
      english: 'The backend validates the request before saving the data.',
      pronunciation: 'de bek-end ve-li-deits de ri-kwest bi-for sei-ving de dei-ta',
      translation: 'Backend memvalidasi request sebelum menyimpan datanya.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['validates', 'memvalidasi', 'validate'], ['request', 'request: permintaan ke server'], ['before', 'sebelum'], ['saving', 'menyimpan', 'save'], ['data', 'data']],
      pattern: 'D63-P2'
    },
    {
      id: 'D63-S04',
      english: 'If the data is valid, it saves the record in the database.',
      pronunciation: 'if de dei-ta iz ve-lid, it seivz de re-kerd in de dei-te-beis',
      translation: 'Kalau datanya valid, backend menyimpan data itu ke database.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['valid', 'valid / sesuai aturan'], ['it', 'itu (backend-nya)'], ['saves', 'menyimpan; -s karena "it"', 'save'], ['record', 'record: satu data yang disimpan (kata benda, dibaca "re-kerd")'], ['in', 'di / ke dalam'], ['database', 'database: tempat data disimpan']],
      pattern: 'D63-P3'
    },
    {
      id: 'D63-S05',
      english: 'If something is wrong, it returns an error.',
      pronunciation: 'if sam-thing iz rong, it ri-ternz en e-rer',
      translation: 'Kalau ada yang salah, backend mengembalikan error.',
      words: [['If', 'kalau / jika'], ['something', 'sesuatu'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['wrong', 'salah'], ['it', 'itu (backend-nya)'], ['returns', 'mengembalikan (sebagai hasil); -s karena "it"', 'return'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['error', 'error / pesan kesalahan']],
      pattern: 'D63-P3'
    },
    {
      id: 'D63-S06',
      english: 'The business logic is in the service layer.',
      pronunciation: 'de biz-nis lo-jik iz in de ser-vis lei-er',
      translation: 'Logika bisnisnya ada di service layer.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['business', 'bisnis'], ['logic', 'logika'], ['is', 'berada (to be)', 'be'], ['in', 'di dalam'], ['service', 'service: bagian kode yang menjalankan logika'], ['layer', 'lapisan (bagian kode)']],
      phrases: [['business logic', 'aturan dan logika bisnis aplikasi'], ['service layer', 'lapisan kode tempat logika bisnis']],
      pattern: 'D63-P4'
    },
    {
      id: 'D63-S07',
      english: 'This service calculates the total price.',
      pronunciation: 'dis ser-vis kel-kyu-leits de tou-tel prais',
      translation: 'Service ini menghitung total harganya.',
      words: [['This', 'ini'], ['service', 'service: bagian kode yang menjalankan logika'], ['calculates', 'menghitung; -s karena "this service"', 'calculate'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['total', 'total / jumlah keseluruhan'], ['price', 'harga']],
      pattern: 'D63-P1'
    },
    {
      id: 'D63-S08',
      english: 'The server sends an email after the payment is confirmed.',
      pronunciation: 'de ser-ver sendz en i-meil ef-ter de pei-ment iz ken-fermd',
      translation: 'Server mengirim email setelah pembayaran dikonfirmasi.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server: komputer yang menjalankan backend'], ['sends', 'mengirim; -s karena "the server"', 'send'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['email', 'email / surel'], ['after', 'setelah'], ['payment', 'pembayaran'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['confirmed', 'dikonfirmasi', 'confirm']],
      pattern: 'D63-P2'
    },
    {
      id: 'D63-S09',
      english: 'We run a background job every night.',
      pronunciation: 'wi ran e bek-graund job ev-ri nait',
      translation: 'Kami menjalankan proses otomatis setiap malam.',
      words: [['We', 'kami'], ['run', 'menjalankan'], ['a', 'sebuah (tidak diterjemahkan)'], ['background', 'latar belakang'], ['job', 'tugas otomatis (dalam konteks sistem)'], ['every', 'setiap'], ['night', 'malam']],
      phrases: [['background job', 'proses yang berjalan otomatis di belakang layar'], ['run a job', 'menjalankan proses (bukan "berlari")']],
      pattern: 'D63-P5'
    },
    {
      id: 'D63-S10',
      english: 'The backend is written in Java.',
      pronunciation: 'de bek-end iz ri-ten in ja-ve',
      translation: 'Backend-nya ditulis dengan Java.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['written', 'ditulis', 'write'], ['in', 'dengan (bahasa pemrograman)'], ['Java', 'Java (bahasa pemrograman)']],
      phrases: [['be written in + bahasa', 'ditulis dengan bahasa pemrograman ...']],
      pattern: 'D63-P4'
    }
  ],

  review: [
    {
      id: 'D63-S11',
      english: "I'm working on the payment service.",
      pronunciation: 'aim wer-king on de pei-ment ser-vis',
      translation: 'Saya sedang mengerjakan service pembayaran.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['working', 'mengerjakan (dalam "work on")', 'work'], ['on', '(bagian dari "work on")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['payment', 'pembayaran'], ['service', 'service: bagian kode yang menjalankan logika']],
      pattern: 'D16-P2'
    },
    {
      id: 'D63-S12',
      english: 'It takes about two seconds to process the request.',
      pronunciation: 'it teiks e-baut tu se-kendz tu pro-ses de ri-kwest',
      translation: 'Butuh sekitar dua detik untuk memproses request-nya.',
      words: [['It', '(subjek, tidak diterjemahkan)'], ['takes', 'memakan (waktu); -s karena "it"', 'take'], ['about', 'sekitar'], ['two', 'dua'], ['seconds', 'detik (jamak)', 'second'], ['to', 'untuk (penanda kata kerja)'], ['process', 'memproses'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server']],
      pattern: 'D22-P3'
    },
    {
      id: 'D63-S13',
      english: 'I need to check the business rules with the product owner.',
      pronunciation: 'ai nid tu cek de biz-nis rulz with de pro-dakt ou-ner',
      translation: 'Saya perlu mengecek aturan bisnisnya dengan product owner.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['check', 'mengecek / memastikan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['business', 'bisnis'], ['rules', 'aturan (jamak)', 'rule'], ['with', 'dengan'], ['product', 'produk'], ['owner', 'pemilik']],
      phrases: [['business rules', 'aturan bisnis'], ['product owner', 'orang yang menentukan kebutuhan produk']],
      pattern: 'D11-P2'
    },
    { ref: 'D61-S04' },
    { ref: 'D37-S08' }
  ],

  patterns: [
    {
      id: 'D63-P1',
      formula: 'The backend / This service + receives / validates / saves / calculates + BENDA',
      meaning: 'Describe what the backend does.',
      examples: ["The backend checks the user's permissions.", 'This service creates the invoice.', 'The API saves the order in the database.']
    },
    {
      id: 'D63-P2',
      formula: '... before / after + KATA KERJA-ing / KALIMAT',
      meaning: 'Describe the order of backend steps.',
      examples: ['The backend checks the token before processing the request.', 'We send a notification after the order is created.', 'It updates the stock after saving the payment.']
    },
    {
      id: 'D63-P3',
      formula: 'If + KALIMAT, it + KATA KERJA-s',
      meaning: 'Describe the success path and the failure path.',
      examples: ['If the user exists, it returns the profile.', 'If the token is expired, it returns an error.', 'If the item is out of stock, it cancels the order.']
    },
    {
      id: 'D63-P4',
      formula: 'BENDA + is in + LAYER  ·  The backend is written in + BAHASA',
      meaning: 'Explain where the code is and what it uses.',
      examples: ['The validation is in the controller.', 'The main logic is in the service layer.', 'The backend is written in C#.']
    },
    {
      id: 'D63-P5',
      formula: 'We run + BENDA + every + WAKTU',
      meaning: 'Describe scheduled or background processes.',
      examples: ['We run a cleanup job every day at midnight.', 'The system sends reminders every morning.', 'A script backs up the database every hour.']
    }
  ],

  shadowing: ['D63-S01', 'D63-S03', 'D63-S04', 'D63-S06'],

  speaking: [
    { q: 'Can you explain what happens in the backend when a user submits a form?', qId: 'Jelaskan apa yang terjadi di backend saat user mengirim formulir.', hint: 'The backend receives ... First, it validates ... If ..., it saves ... If ..., it returns ...', example: 'The backend receives the request from the frontend. First, it validates the data. If the data is valid, it saves a new record in the database. If something is wrong, it returns an error message.' },
    { q: 'Where is the business logic in your project?', qId: 'Di mana logika bisnis di proyekmu?', hint: 'The business logic is in ... This service ...', example: 'The business logic is in the service layer. For example, the order service calculates the total price and checks the discount.' },
    { q: 'Does your system have any background processes? What do they do?', qId: 'Apakah sistemmu punya proses otomatis di belakang? Apa fungsinya?', hint: 'We run ... every ... It ...', example: 'Yes. We run a background job every night. It sends reminder emails to patients who have appointments the next day.' }
  ],

  talk321: { topic: 'Explain what happens in the backend when a user submits a form.' }
});
