E90.registerDay({
  day: 78,
  titleId: 'Integrasi Frontend–Backend',
  goal: 'Membicarakan kesepakatan API, masalah integrasi, kerja paralel dengan mock data, dan kondisi yang harus ditangani antar sistem.',

  learn: [
    {
      id: 'D78-S01',
      english: 'The frontend and backend agree on the API contract.',
      pronunciation: 'de front-end en bek-end e-gri on di ei-pi-ai kon-trekt',
      translation: 'Frontend dan backend menyepakati kontrak API-nya.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['and', 'dan'], ['backend', 'backend: bagian server yang memproses data'], ['agree', 'sepakat'], ['on', 'tentang (dalam "agree on")'], ['API', 'API: pintu komunikasi antar aplikasi'], ['contract', 'kontrak: kesepakatan bentuk request dan response']],
      phrases: [['API contract', 'kesepakatan format request dan response antara frontend dan backend']],
      pattern: 'D78-P1'
    },
    {
      id: 'D78-S02',
      english: 'The contract defines the fields in the request and response.',
      pronunciation: 'de kon-trekt di-fainz de fildz in de ri-kwest en ri-spons',
      translation: 'Kontraknya menentukan field apa saja di request dan response.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['contract', 'kontrak: kesepakatan format API'], ['defines', 'menentukan / mendefinisikan; -s karena "the contract"', 'define'], ['fields', 'field: nama data di request atau response (jamak)', 'field'], ['in', 'di dalam'], ['request', 'request: permintaan ke server'], ['and', 'dan'], ['response', 'response: jawaban dari server']],
      pattern: 'D78-P1'
    },
    {
      id: 'D78-S03',
      english: 'The backend changed a field name, so the frontend broke.',
      pronunciation: 'de bek-end cheinjd e fild neim, sou de front-end brouk',
      translation: 'Backend mengganti nama sebuah field, jadi frontend-nya rusak.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['changed', 'mengubah (lampau)', 'change'], ['a', 'sebuah (tidak diterjemahkan)'], ['field', 'field: nama data di request atau response'], ['name', 'nama'], ['so', 'jadi / sehingga'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['broke', 'rusak / tidak jalan (lampau)', 'break']],
      pattern: 'D78-P2'
    },
    {
      id: 'D78-S04',
      english: "The response format doesn't match what the frontend expects.",
      pronunciation: 'de ri-spons for-met da-zent mech wat de front-end ek-spekts',
      translation: 'Format response-nya tidak cocok dengan yang diharapkan frontend.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['response', 'response: jawaban dari server'], ['format', 'format / bentuk data'], ["doesn't", 'tidak (does not)', 'do'], ['match', 'cocok dengan / sesuai'], ['what', 'apa yang'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['expects', 'mengharapkan; -s karena "the frontend"', 'expect']],
      pattern: 'D78-P2'
    },
    {
      id: 'D78-S05',
      english: "I'm integrating the new payment API into the checkout page.",
      pronunciation: 'aim in-te-grei-ting de nyu pei-ment ei-pi-ai in-tu de chek-aut peij',
      translation: 'Saya sedang mengintegrasikan API pembayaran baru ke halaman checkout.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['integrating', 'mengintegrasikan / menghubungkan', 'integrate'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['payment', 'pembayaran'], ['API', 'API: pintu komunikasi antar aplikasi'], ['into', 'ke dalam'], ['checkout', 'checkout: proses pembayaran belanja online'], ['page', 'halaman']],
      pattern: 'D78-P3'
    },
    {
      id: 'D78-S06',
      english: 'The frontend is using mock data until the API is ready.',
      pronunciation: 'de front-end iz yu-zing mok dei-ta an-til di ei-pi-ai iz re-di',
      translation: 'Frontend memakai data tiruan sampai API-nya siap.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['using', 'memakai', 'use'], ['mock', 'tiruan / palsu (untuk sementara)'], ['data', 'data'], ['until', 'sampai'], ['API', 'API: pintu komunikasi antar aplikasi'], ['ready', 'siap']],
      phrases: [['mock data', 'data tiruan agar bisa bekerja sebelum API asli siap']],
      pattern: 'D78-P4'
    },
    {
      id: 'D78-S07',
      english: 'Can you share an example response?',
      pronunciation: 'ken yu sher en eg-zem-pel ri-spons?',
      translation: 'Bisa bagikan contoh response-nya?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['share', 'membagikan'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['example', 'contoh'], ['response', 'response: jawaban dari server']],
      pattern: 'D19-P2'
    },
    {
      id: 'D78-S08',
      english: 'We need to handle the case when the API is down.',
      pronunciation: 'wi nid tu hen-del de keis wen di ei-pi-ai iz daun',
      translation: 'Kita perlu menangani kondisi saat API-nya mati.',
      words: [['We', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['handle', 'menangani'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['case', 'kasus / kondisi'], ['when', 'saat / ketika'], ['API', 'API: pintu komunikasi antar aplikasi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['down', 'mati / tidak bisa diakses (untuk sistem)']],
      phrases: [['the API is down', 'API sedang mati / tidak bisa diakses']],
      pattern: 'D78-P5'
    },
    {
      id: 'D78-S09',
      english: 'This field can be null, so we need to check it.',
      pronunciation: 'dis fild ken bi nal, sou wi nid tu cek it',
      translation: 'Field ini bisa null, jadi kita perlu memeriksanya.',
      words: [['This', 'ini'], ['field', 'field: nama data di request atau response'], ['can', 'bisa'], ['be', '(to be, tidak diterjemahkan)'], ['null', 'null: tidak ada nilai sama sekali'], ['so', 'jadi'], ['we', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['check', 'memeriksa'], ['it', 'itu / -nya']],
      pattern: 'D78-P5'
    },
    {
      id: 'D78-S10',
      english: 'I got a CORS error when calling the API from the browser.',
      pronunciation: 'ai got e kors e-rer wen ko-ling di ei-pi-ai from de brau-zer',
      translation: 'Saya kena error CORS saat memanggil API dari browser.',
      words: [['I', 'saya'], ['got', 'mendapat / kena (lampau)', 'get'], ['a', 'sebuah (tidak diterjemahkan)'], ['CORS', 'CORS: aturan keamanan browser untuk request ke domain lain'], ['error', 'error / kesalahan'], ['when', 'saat / ketika'], ['calling', 'memanggil (API)', 'call'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['from', 'dari'], ['browser', 'peramban / browser']]
    }
  ],

  review: [
    {
      id: 'D78-S11',
      english: 'Do you mean the field name or the value?',
      pronunciation: 'du yu min de fild neim or de vel-yu?',
      translation: 'Maksudnya nama field-nya atau nilainya?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu / Anda'], ['mean', 'maksudkan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['field', 'field: nama data di request atau response'], ['name', 'nama'], ['or', 'atau'], ['value', 'nilai']],
      pattern: 'D20-P2'
    },
    {
      id: 'D78-S12',
      english: "The backend team hasn't finished the endpoint yet.",
      pronunciation: 'de bek-end tim he-zent fi-nisht di end-point yet',
      translation: 'Tim backend belum menyelesaikan endpoint-nya.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['backend', 'backend: bagian server yang memproses data'], ['team', 'tim'], ["hasn't", 'belum (has not)', 'have'], ['finished', 'menyelesaikan', 'finish'], ['endpoint', 'endpoint: alamat URL tertentu di API'], ['yet', '(penegas "belum", di akhir kalimat)']],
      pattern: 'D34-P3'
    },
    {
      id: 'D78-S13',
      english: "Let's agree on the response format first.",
      pronunciation: 'lets e-gri on de ri-spons for-met ferst',
      translation: 'Ayo sepakati format response-nya dulu.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['agree', 'sepakat'], ['on', 'tentang (dalam "agree on")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['response', 'response: jawaban dari server'], ['format', 'format / bentuk data'], ['first', 'dulu / terlebih dahulu']],
      pattern: 'D58-P5'
    },
    { ref: 'D64-S08' },
    { ref: 'D62-S08' }
  ],

  patterns: [
    {
      id: 'D78-P1',
      formula: 'We agreed on + BENDA  ·  The API contract defines + BENDA',
      meaning: 'Talk about the agreement between frontend and backend.',
      examples: ['We agreed on the request format last week.', 'The contract defines all the required fields.', 'The documentation shows every endpoint and response.']
    },
    {
      id: 'D78-P2',
      formula: "A changed + BENDA, so B broke  ·  BENDA + doesn't match + BENDA",
      meaning: 'Explain an integration problem.',
      examples: ['The API changed the date format, so the app crashed.', "The field names don't match.", 'The frontend expects a number, but the API returns a string.']
    },
    {
      id: 'D78-P3',
      formula: "I'm integrating + BENDA + into / with + BENDA",
      meaning: 'Describe integration work.',
      examples: ["I'm integrating the maps API into the delivery page.", 'We integrated the login with Google.', "I'm connecting the new form to the backend."]
    },
    {
      id: 'D78-P4',
      formula: "We're using mock data until + KALIMAT",
      meaning: 'Work in parallel when the API is not ready.',
      examples: ['The mobile team is using mock data until Friday.', 'We created a fake API for testing.', "I'll switch to the real API when it's ready."]
    },
    {
      id: 'D78-P5',
      formula: 'We need to handle the case when + KALIMAT',
      meaning: 'Think about failures between systems.',
      examples: ['We need to handle the case when the API is slow.', 'We need to handle empty responses.', 'This field can be null, so we need a default value.']
    }
  ],

  shadowing: ['D78-S02', 'D78-S04', 'D78-S06', 'D78-S08'],

  speaking: [
    { q: 'How do your frontend and backend teams agree on an API before building it?', qId: 'Bagaimana tim frontend dan backend menyepakati API sebelum membangunnya?', hint: 'We agree on ... The contract defines ... The frontend uses mock data until ...', example: 'We agree on the API contract in a short meeting. The contract defines the endpoint, the fields, and the error responses. After that, the frontend uses mock data until the backend is ready.' },
    { q: 'Describe an integration problem between the frontend and the backend.', qId: 'Ceritakan masalah integrasi antara frontend dan backend.', hint: "The backend changed ..., so ... The response doesn't match ...", example: "Last month, the backend changed the name of the price field, so the product page broke. The response didn't match what the frontend expected, and nobody updated the documentation." },
    { q: 'What cases do you need to handle when the frontend calls another API?', qId: 'Kondisi apa saja yang perlu ditangani saat frontend memanggil API lain?', hint: 'We need to handle the case when ... This field can be ... so ...', example: 'We need to handle the case when the API is down or very slow. Some fields can be null, so we need to check them and show a default value.' },
    { q: "You're blocked because the endpoint isn't ready. Talk to the backend developer.", qId: 'Kamu terhambat karena endpoint belum siap. Bicara dengan developer backend.', hint: "I'm integrating ... The endpoint hasn't ... I'm using mock data ... Could you ...?", example: "I'm integrating the order history page. The endpoint isn't ready yet, so I'm using mock data for now. Could you share an example response so I can check the field names?" }
  ],

  talk321: null
});
