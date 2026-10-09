E90.registerDay({
  day: 64,
  titleId: 'HTTP, API, Request & Response',
  goal: 'Menjelaskan alur request dan response: metode, endpoint, isi request, format data, dan arti status code — dengan kalimat, bukan definisi.',

  learn: [
    {
      id: 'D64-S01',
      english: 'The frontend sends a request to the API.',
      pronunciation: 'de front-end sendz e ri-kwest tu di ei-pi-ai',
      translation: 'Frontend mengirim request ke API.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['sends', 'mengirim; -s karena "the frontend"', 'send'], ['a', 'sebuah (tidak diterjemahkan)'], ['request', 'request: permintaan yang dikirim ke server'], ['to', 'ke'], ['API', 'API: pintu komunikasi untuk meminta dan mengirim data']],
      pattern: 'D64-P1'
    },
    {
      id: 'D64-S02',
      english: 'It sends a GET request to get the list of orders.',
      pronunciation: 'it sendz e get ri-kwest tu get de list ov or-derz',
      translation: 'Frontend mengirim request GET untuk mengambil daftar pesanan.',
      words: [['It', 'itu (frontend-nya)'], ['sends', 'mengirim', 'send'], ['a', 'sebuah (tidak diterjemahkan)'], ['GET', 'GET: metode HTTP untuk mengambil data'], ['request', 'request: permintaan ke server'], ['to', 'untuk (penanda kata kerja)'], ['get', 'mendapatkan / mengambil'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['list', 'daftar'], ['of', 'dari / berisi'], ['orders', 'pesanan (jamak)', 'order']],
      pattern: 'D64-P1'
    },
    {
      id: 'D64-S03',
      english: "This endpoint returns the patient's information.",
      pronunciation: 'dis end-point ri-ternz de pei-shents in-for-mei-shen',
      translation: 'Endpoint ini mengembalikan informasi pasien.',
      words: [['This', 'ini'], ['endpoint', 'endpoint: alamat URL tertentu di API'], ['returns', 'mengembalikan (sebagai hasil); -s karena "this endpoint"', 'return'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ["patient's", 'milik pasien', 'patient'], ['information', 'informasi']],
      pattern: 'D64-P2'
    },
    {
      id: 'D64-S04',
      english: 'We use a POST request to create a new appointment.',
      pronunciation: 'wi yuz e poust ri-kwest tu kri-eit e nyu e-point-ment',
      translation: 'Kami memakai request POST untuk membuat janji temu baru.',
      words: [['We', 'kami'], ['use', 'memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['POST', 'POST: metode HTTP untuk mengirim / membuat data'], ['request', 'request: permintaan ke server'], ['to', 'untuk (penanda kata kerja)'], ['create', 'membuat'], ['new', 'baru'], ['appointment', 'janji temu']],
      pattern: 'D64-P1'
    },
    {
      id: 'D64-S05',
      english: 'The request body contains the form data.',
      pronunciation: 'de ri-kwest bo-di ken-teinz de form dei-ta',
      translation: 'Body request-nya berisi data dari formulir.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server'], ['body', 'body: isi utama sebuah request'], ['contains', 'berisi; -s karena "the request body"', 'contain'], ['form', 'formulir'], ['data', 'data']],
      pattern: 'D64-P3'
    },
    {
      id: 'D64-S06',
      english: 'The token is sent in the header.',
      pronunciation: 'de tou-ken iz sent in de he-der',
      translation: 'Token-nya dikirim di header.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['token', 'token: kode tanda bahwa user sudah login'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['sent', 'dikirim', 'send'], ['in', 'di dalam'], ['header', 'header: informasi tambahan di sebuah request']],
      pattern: 'D64-P3'
    },
    {
      id: 'D64-S07',
      english: 'You can filter the results with a query parameter.',
      pronunciation: 'yu ken fil-ter de ri-zalts with e kwi-ri pe-re-mi-ter',
      translation: 'Hasilnya bisa disaring memakai query parameter.',
      words: [['You', 'kamu (siapa pun)'], ['can', 'bisa'], ['filter', 'menyaring'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['results', 'hasil (jamak)', 'result'], ['with', 'dengan / memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['query', 'query: bagian URL setelah tanda "?" (dibaca "kwi-ri")'], ['parameter', 'parameter: nilai yang dikirim ke API']],
      phrases: [['query parameter', 'nilai di URL, misalnya ?page=2']],
      pattern: 'D64-P3'
    },
    {
      id: 'D64-S08',
      english: 'The API returns the data in JSON format.',
      pronunciation: 'di ei-pi-ai ri-ternz de dei-ta in jei-sen for-met',
      translation: 'API mengembalikan data dalam format JSON.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['API', 'API: pintu komunikasi untuk meminta dan mengirim data'], ['returns', 'mengembalikan', 'return'], ['data', 'data'], ['in', 'dalam'], ['JSON', 'JSON: format teks untuk bertukar data (dibaca "jei-sen")'], ['format', 'bentuk / format data']],
      pattern: 'D64-P2'
    },
    {
      id: 'D64-S09',
      english: "If the ID doesn't exist, it returns a 404 error.",
      pronunciation: 'if di ai-di da-zent eg-zist, it ri-ternz e for-ou-for e-rer',
      translation: 'Kalau ID-nya tidak ada, API mengembalikan error 404.',
      words: [['If', 'kalau / jika'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['ID', 'ID: nomor pengenal data'], ["doesn't", 'tidak (does not)', 'do'], ['exist', 'ada / tersedia'], ['it', 'itu (API-nya)'], ['returns', 'mengembalikan', 'return'], ['a', 'sebuah (tidak diterjemahkan)'], ['404', '404: kode status "data tidak ditemukan"'], ['error', 'error / kesalahan']],
      pattern: 'D64-P4'
    },
    {
      id: 'D64-S10',
      english: 'A 200 response means the request was successful.',
      pronunciation: 'e tu-han-dred ri-spons minz de ri-kwest woz sek-ses-ful',
      translation: 'Response 200 berarti request-nya berhasil.',
      words: [['A', 'sebuah (tidak diterjemahkan)'], ['200', '200: kode status "berhasil"'], ['response', 'response: jawaban dari server'], ['means', 'berarti; -s karena "a response"', 'mean'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server'], ['was', '(to be bentuk lampau, tidak diterjemahkan)', 'be'], ['successful', 'berhasil / sukses']],
      pattern: 'D64-P4'
    }
  ],

  review: [
    {
      id: 'D64-S11',
      english: 'Could you send me the API documentation?',
      pronunciation: 'kud yu send mi di ei-pi-ai do-kyu-men-tei-shen?',
      translation: 'Bisa kirimkan dokumentasi API-nya ke saya?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['send', 'mengirim'], ['me', 'kepada saya'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['documentation', 'dokumentasi']],
      pattern: 'D19-P2'
    },
    {
      id: 'D64-S12',
      english: 'Do you mean the old endpoint or the new one?',
      pronunciation: 'du yu min di ould end-point or de nyu wan?',
      translation: 'Maksudnya endpoint lama atau yang baru?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu / Anda'], ['mean', 'maksudkan'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['old', 'lama'], ['endpoint', 'endpoint: alamat URL tertentu di API'], ['or', 'atau'], ['new', 'baru'], ['one', 'yang (menggantikan kata benda)']],
      pattern: 'D20-P2'
    },
    {
      id: 'D64-S13',
      english: "I haven't received a response from the server yet.",
      pronunciation: 'ai he-vent ri-sivd e ri-spons from de ser-ver yet',
      translation: 'Saya belum menerima response dari server.',
      words: [['I', 'saya'], ["haven't", 'belum (have not)', 'have'], ['received', 'menerima', 'receive'], ['a', 'sebuah (tidak diterjemahkan)'], ['response', 'response: jawaban dari server'], ['from', 'dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server: komputer yang menjalankan backend'], ['yet', '(penegas "belum", di akhir kalimat)']],
      pattern: 'D34-P3'
    },
    { ref: 'D62-S08' },
    { ref: 'D63-S05' }
  ],

  patterns: [
    {
      id: 'D64-P1',
      formula: 'The frontend sends a + GET / POST + request to + BENDA',
      meaning: 'Describe a request.',
      examples: ['The app sends a GET request to the orders endpoint.', 'We send a POST request to create a user.', 'The page sends a PUT request to update the profile.'],
      note: 'GET = ambil data · POST = buat data baru · PUT / PATCH = ubah data · DELETE = hapus data.'
    },
    {
      id: 'D64-P2',
      formula: 'This endpoint returns / creates / updates + BENDA',
      meaning: 'Explain what an endpoint does.',
      examples: ['This endpoint returns all active users.', 'This endpoint creates a new invoice.', 'The API returns the result in JSON.']
    },
    {
      id: 'D64-P3',
      formula: 'The request body / header / query parameter + contains + BENDA',
      meaning: 'Explain what is inside a request.',
      examples: ["The body contains the user's name and email.", 'The header contains the access token.', 'The page number is sent as a query parameter.']
    },
    {
      id: 'D64-P4',
      formula: 'A + STATUS CODE + response means + KALIMAT',
      meaning: 'Explain status codes in words.',
      examples: ['A 200 response means everything is OK.', 'A 401 error means the user is not logged in.', 'A 500 error means something went wrong on the server.'],
      note: '2xx = berhasil · 4xx = masalah di request (data salah, belum login, tidak ditemukan) · 5xx = masalah di server.'
    }
  ],

  shadowing: ['D64-S01', 'D64-S03', 'D64-S05', 'D64-S10'],

  speaking: [
    { q: 'How does the frontend get data from your backend?', qId: 'Bagaimana frontend mendapatkan data dari backend-mu?', hint: 'The frontend sends a ... request to ... The API returns ...', example: 'When the page opens, the frontend sends a GET request to the orders endpoint. The API returns the list of orders in JSON format.' },
    { q: 'Can you explain one endpoint in your project?', qId: 'Jelaskan satu endpoint di proyekmu.', hint: 'This endpoint ... It receives ... in the body. It returns ...', example: 'This endpoint creates a new appointment. It receives the patient ID and the date in the request body. It returns the new appointment with its ID.' },
    { q: 'What happens when a request fails? Which status codes do you use?', qId: 'Apa yang terjadi saat request gagal? Status code apa yang kalian pakai?', hint: 'If ..., it returns a ... error. A ... response means ...', example: "If the data is not valid, it returns a 400 error. If the user isn't logged in, it returns 401. A 500 error means something went wrong on the server." },
    { q: 'A new developer asks where the token goes in the request. Explain.', qId: 'Developer baru bertanya token dikirim di bagian mana. Jelaskan.', hint: 'The token is sent in ... If the token is missing, ...', example: 'The token is sent in the Authorization header. If the token is missing or expired, the API returns a 401 error.' }
  ],

  talk321: null
});
