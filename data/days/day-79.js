E90.registerDay({
  day: 79,
  titleId: 'Error Handling',
  goal: 'Menjelaskan apa yang terjadi saat proses gagal: menangkap error, mencatat log, retry, pesan untuk user, dan cadangan (fallback).',

  learn: [
    {
      id: 'D79-S01',
      english: 'What happens when the request fails?',
      pronunciation: 'wat he-penz wen de ri-kwest feilz?',
      translation: 'Apa yang terjadi saat request-nya gagal?',
      words: [['What', 'apa (yang)'], ['happens', 'terjadi', 'happen'], ['when', 'saat / ketika'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server'], ['fails', 'gagal; -s karena "the request"', 'fail']],
      pattern: 'D49-P2'
    },
    {
      id: 'D79-S02',
      english: 'If the request fails, we show a friendly error message.',
      pronunciation: 'if de ri-kwest feilz, wi shou e frend-li e-rer me-sij',
      translation: 'Kalau request-nya gagal, kami tampilkan pesan error yang mudah dipahami.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server'], ['fails', 'gagal', 'fail'], ['we', 'kami'], ['show', 'menampilkan'], ['a', 'sebuah (tidak diterjemahkan)'], ['friendly', 'ramah / mudah dipahami'], ['error', 'error / kesalahan'], ['message', 'pesan']],
      pattern: 'D79-P1'
    },
    {
      id: 'D79-S03',
      english: 'We catch the error and log it.',
      pronunciation: 'wi kech di e-rer en log it',
      translation: 'Kami menangkap error-nya lalu mencatatnya di log.',
      words: [['We', 'kami'], ['catch', 'menangkap (error agar aplikasi tidak crash)'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['error', 'error / kesalahan'], ['and', 'lalu / dan'], ['log', 'mencatat ke log (kata kerja)'], ['it', 'itu / -nya']],
      phrases: [['catch an error', 'menangkap error supaya bisa ditangani']],
      pattern: 'D79-P2'
    },
    {
      id: 'D79-S04',
      english: 'The app retries the request up to three times.',
      pronunciation: 'di ep ri-traiz de ri-kwest ap tu thri taimz',
      translation: 'Aplikasinya mencoba ulang request itu maksimal tiga kali.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['app', 'aplikasi'], ['retries', 'mencoba ulang; -es karena "the app"', 'retry'], ['request', 'request: permintaan ke server'], ['up', '(bagian dari "up to")'], ['to', 'sampai / maksimal (dalam "up to")'], ['three', 'tiga'], ['times', 'kali (jamak)', 'time']],
      phrases: [['up to', 'sampai / maksimal']],
      pattern: 'D79-P3'
    },
    {
      id: 'D79-S05',
      english: 'After three failed attempts, it stops and shows an error.',
      pronunciation: 'ef-ter thri feild e-tempts, it stops en shouz en e-rer',
      translation: 'Setelah tiga kali gagal, aplikasinya berhenti dan menampilkan error.',
      words: [['After', 'setelah'], ['three', 'tiga'], ['failed', 'yang gagal', 'fail'], ['attempts', 'percobaan (jamak)', 'attempt'], ['it', 'itu (aplikasinya)'], ['stops', 'berhenti; -s karena "it"', 'stop'], ['and', 'dan'], ['shows', 'menampilkan', 'show'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['error', 'error / kesalahan']],
      pattern: 'D79-P3'
    },
    {
      id: 'D79-S06',
      english: "We don't show technical details to the user.",
      pronunciation: 'wi dount shou tek-ni-kel di-teilz tu de yu-zer',
      translation: 'Kami tidak menampilkan detail teknis ke user.',
      words: [['We', 'kami'], ["don't", 'tidak (do not)'], ['show', 'menampilkan'], ['technical', 'teknis'], ['details', 'detail (jamak)', 'detail'], ['to', 'kepada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user']],
      pattern: 'D79-P4'
    },
    {
      id: 'D79-S07',
      english: 'The user only sees a simple message, but we log the full error.',
      pronunciation: 'de yu-zer oun-li siz e sim-pel me-sij, bat wi log de ful e-rer',
      translation: 'User hanya melihat pesan sederhana, tapi error lengkapnya kami catat di log.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user'], ['only', 'hanya'], ['sees', 'melihat', 'see'], ['a', 'sebuah (tidak diterjemahkan)'], ['simple', 'sederhana'], ['message', 'pesan'], ['but', 'tetapi'], ['we', 'kami'], ['log', 'mencatat ke log (kata kerja)'], ['full', 'lengkap'], ['error', 'error / kesalahan']],
      pattern: 'D79-P4'
    },
    {
      id: 'D79-S08',
      english: 'If the external service is down, we use the cached data instead.',
      pronunciation: 'if di eks-ter-nel ser-vis iz daun, wi yuz de kesht dei-ta in-sted',
      translation: 'Kalau service luar sedang mati, kami pakai data dari cache sebagai gantinya.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['external', 'eksternal / dari pihak luar'], ['service', 'service: layanan / sistem lain'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['down', 'mati / tidak bisa diakses'], ['we', 'kami'], ['use', 'memakai'], ['cached', 'yang tersimpan di cache', 'cache'], ['data', 'data'], ['instead', 'sebagai gantinya']],
      phrases: [['use ... instead', 'memakai ... sebagai gantinya (fallback)']],
      pattern: 'D79-P5'
    },
    {
      id: 'D79-S09',
      english: 'The order is not saved if the payment fails.',
      pronunciation: 'di or-der iz not seivd if de pei-ment feilz',
      translation: 'Pesanannya tidak disimpan kalau pembayarannya gagal.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['order', 'pesanan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['not', 'tidak'], ['saved', 'disimpan', 'save'], ['if', 'kalau / jika'], ['payment', 'pembayaran'], ['fails', 'gagal', 'fail']],
      pattern: 'D79-P1'
    },
    {
      id: 'D79-S10',
      english: 'We send an alert to the team when the error rate is high.',
      pronunciation: 'wi send en e-lert tu de tim wen di e-rer reit iz hai',
      translation: 'Kami mengirim peringatan ke tim saat tingkat error-nya tinggi.',
      words: [['We', 'kami'], ['send', 'mengirim'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['alert', 'alert: peringatan otomatis'], ['to', 'ke / kepada'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['team', 'tim'], ['when', 'saat / ketika'], ['error', 'error / kesalahan'], ['rate', 'tingkat / persentase'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['high', 'tinggi']],
      phrases: [['error rate', 'persentase request yang gagal']]
    }
  ],

  review: [
    {
      id: 'D79-S11',
      english: 'If the token is invalid, the API returns a 401 error.',
      pronunciation: 'if de tou-ken iz in-ve-lid, di ei-pi-ai ri-ternz e for-ou-wan e-rer',
      translation: 'Kalau token-nya tidak valid, API mengembalikan error 401.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['token', 'token: kode tanda sudah login'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['invalid', 'tidak valid'], ['API', 'API: pintu komunikasi antar aplikasi'], ['returns', 'mengembalikan', 'return'], ['a', 'sebuah (tidak diterjemahkan)'], ['401', '401: kode status "belum login / token tidak valid"'], ['error', 'error / kesalahan']],
      pattern: 'D63-P3'
    },
    {
      id: 'D79-S12',
      english: 'We need to handle the case when the file is too big.',
      pronunciation: 'wi nid tu hen-del de keis wen de fail iz tu big',
      translation: 'Kita perlu menangani kondisi saat file-nya terlalu besar.',
      words: [['We', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['handle', 'menangani'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['case', 'kasus / kondisi'], ['when', 'saat / ketika'], ['file', 'berkas / file'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['too', 'terlalu'], ['big', 'besar']],
      pattern: 'D78-P5'
    },
    {
      id: 'D79-S13',
      english: 'The error message is a little confusing for users.',
      pronunciation: 'di e-rer me-sij iz e li-tel ken-fyu-zing for yu-zerz',
      translation: 'Pesan error-nya agak membingungkan bagi user.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['error', 'error / kesalahan'], ['message', 'pesan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['a', '(bagian dari "a little")'], ['little', 'sedikit / agak'], ['confusing', 'membingungkan', 'confuse'], ['for', 'bagi / untuk'], ['users', 'pengguna (jamak)', 'user']],
      pattern: 'D53-P5'
    },
    { ref: 'D78-S08' },
    { ref: 'D63-S05' }
  ],

  patterns: [
    {
      id: 'D79-P1',
      formula: 'If + BENDA + fails, we + KATA KERJA',
      meaning: 'Describe what happens when something fails.',
      examples: ['If the upload fails, we keep the file and let the user try again.', 'If the payment fails, the order is not created.', 'If the email fails, we try again later.']
    },
    {
      id: 'D79-P2',
      formula: 'We catch the error and + KATA KERJA',
      meaning: 'Explain how the code handles errors.',
      examples: ['We catch the error and return a 400 response.', 'We catch the exception and log it.', 'A global handler catches all unexpected errors.'],
      note: 'catch an error / exception = menangkap error supaya aplikasi tidak crash dan bisa ditangani.'
    },
    {
      id: 'D79-P3',
      formula: 'It retries + BENDA + up to + ANGKA + times',
      meaning: 'Explain retry logic.',
      examples: ['The worker retries failed jobs up to five times.', 'It waits two seconds before each retry.', 'After three failed attempts, it gives up.']
    },
    {
      id: 'D79-P4',
      formula: "We don't show + BENDA + to the user  ·  The user only sees + BENDA",
      meaning: 'Separate user messages from technical logs.',
      examples: ["We don't show the stack trace to the user.", 'The user only sees "Something went wrong. Please try again."', 'We log the details for the developers.']
    },
    {
      id: 'D79-P5',
      formula: 'If A is down, we use B instead',
      meaning: 'Describe a fallback.',
      examples: ['If the main server is down, traffic goes to the backup server.', 'If the map service is down, we show the address as text instead.', 'If the cache is empty, we read from the database.']
    }
  ],

  shadowing: ['D79-S01', 'D79-S02', 'D79-S03', 'D79-S08'],

  speaking: [
    { q: 'What happens when a request fails in your application?', qId: 'Apa yang terjadi saat sebuah request gagal di aplikasimu?', hint: 'If the request fails, we ... We catch the error and ... The user only sees ...', example: 'If the request fails, we catch the error and log it with the request ID. The user only sees a simple message and a Try Again button.' },
    { q: 'How do you handle problems with an external service, like payments or email?', qId: 'Bagaimana kalian menangani masalah dari layanan luar, seperti pembayaran atau email?', hint: "If ... is down, we ... It retries ... up to ... times.", example: "If the email service is down, we don't block the user. The job retries the email up to five times. After that, it sends an alert to the team." },
    { q: 'Why should we avoid showing technical error details to users?', qId: 'Kenapa kita sebaiknya tidak menampilkan detail error teknis ke user?', hint: "We don't show ... because ... Instead, ...", example: "We don't show technical details because users can't do anything with them, and it can also be a security risk. Instead, we show a clear message and log the full error." },
    { q: "You're reviewing code that ignores errors. Give feedback.", qId: 'Kamu mereview kode yang mengabaikan error. Beri feedback.', hint: 'I noticed ... Maybe we can catch ... and ... One thing I\'d suggest is ...', example: "I noticed that this call has no error handling. Maybe we can catch the error and return a clear message. One thing I'd suggest is adding a retry for timeouts." }
  ],

  talk321: null
});
