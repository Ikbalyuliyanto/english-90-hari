E90.registerDay({
  day: 62,
  titleId: 'English untuk Frontend',
  goal: 'Menjelaskan apa yang dilihat user, apa yang terjadi saat user berinteraksi, dan bagaimana halaman mengambil data.',

  learn: [
    {
      id: 'D62-S01',
      english: 'The frontend shows a list of patients.',
      pronunciation: 'de front-end shouz e list ov pei-shents',
      translation: 'Frontend-nya menampilkan daftar pasien.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['shows', 'menampilkan; -s karena "the frontend"', 'show'], ['a', 'sebuah (tidak diterjemahkan)'], ['list', 'daftar'], ['of', 'dari / berisi'], ['patients', 'pasien (jamak)', 'patient']],
      pattern: 'D62-P1'
    },
    {
      id: 'D62-S02',
      english: 'When the user clicks the button, a form opens.',
      pronunciation: 'wen de yu-zer kliks de ba-ten, e form ou-penz',
      translation: 'Saat user mengklik tombolnya, sebuah formulir terbuka.',
      words: [['When', 'saat / ketika'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user'], ['clicks', 'mengklik; -s karena "the user"', 'click'], ['button', 'tombol'], ['a', 'sebuah (tidak diterjemahkan)'], ['form', 'formulir / form isian'], ['opens', 'terbuka; -s karena "a form"', 'open']],
      pattern: 'D62-P2'
    },
    {
      id: 'D62-S03',
      english: 'The user fills in the form and clicks "Save".',
      pronunciation: 'de yu-zer filz in de form en kliks seiv',
      translation: 'User mengisi formulir lalu mengklik "Save".',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user'], ['fills', 'mengisi (dalam "fill in"); -s karena "the user"', 'fill'], ['in', '(bagian dari "fill in")'], ['form', 'formulir / form isian'], ['and', 'lalu / dan'], ['clicks', 'mengklik', 'click'], ['Save', 'Simpan (nama tombol)']],
      phrases: [['fill in a form', 'mengisi formulir']],
      pattern: 'D62-P2'
    },
    {
      id: 'D62-S04',
      english: 'The page displays an error message if a field is empty.',
      pronunciation: 'de peij dis-pleiz en e-rer me-sij if e fild iz em-ti',
      translation: 'Halamannya menampilkan pesan error kalau ada kolom yang kosong.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['displays', 'menampilkan; -s karena "the page"', 'display'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['error', 'kesalahan / error'], ['message', 'pesan'], ['if', 'kalau / jika'], ['a', 'sebuah (tidak diterjemahkan)'], ['field', 'kolom isian di form'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['empty', 'kosong']],
      phrases: [['error message', 'pesan kesalahan']],
      pattern: 'D62-P3'
    },
    {
      id: 'D62-S05',
      english: 'The button is disabled until the form is valid.',
      pronunciation: 'de ba-ten iz di-sei-beld an-til de form iz ve-lid',
      translation: 'Tombolnya nonaktif sampai formulirnya valid.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['button', 'tombol'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['disabled', 'dinonaktifkan / tidak bisa diklik', 'disable'], ['until', 'sampai'], ['form', 'formulir / form isian'], ['valid', 'valid / isinya sudah benar']],
      pattern: 'D62-P3'
    },
    {
      id: 'D62-S06',
      english: "This component shows the patient's details.",
      pronunciation: 'dis kem-pou-nent shouz de pei-shents di-teilz',
      translation: 'Komponen ini menampilkan detail pasien.',
      words: [['This', 'ini'], ['component', 'komponen: bagian tampilan yang bisa dipakai ulang'], ['shows', 'menampilkan; -s karena "this component"', 'show'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ["patient's", 'milik pasien', 'patient'], ['details', 'detail / rincian (jamak)', 'detail']],
      pattern: 'D62-P1'
    },
    {
      id: 'D62-S07',
      english: "The layout doesn't work well on small screens.",
      pronunciation: 'de lei-aut da-zent werk wel on smol skrinz',
      translation: 'Tata letaknya tidak tampil dengan baik di layar kecil.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['layout', 'tata letak tampilan'], ["doesn't", 'tidak (does not)', 'do'], ['work', 'berfungsi / tampil'], ['well', 'dengan baik'], ['on', 'di'], ['small', 'kecil'], ['screens', 'layar (jamak)', 'screen']],
      pattern: 'D28-P2'
    },
    {
      id: 'D62-S08',
      english: 'The page loads the data from the API.',
      pronunciation: 'de peij loudz de dei-ta from di ei-pi-ai',
      translation: 'Halamannya mengambil data dari API.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['page', 'halaman'], ['loads', 'memuat / mengambil; -s karena "the page"', 'load'], ['data', 'data'], ['from', 'dari'], ['API', 'API: pintu komunikasi untuk meminta dan mengirim data']],
      pattern: 'D62-P4'
    },
    {
      id: 'D62-S09',
      english: 'While the data is loading, we show a spinner.',
      pronunciation: 'wail de dei-ta iz lou-ding, wi shou e spi-ner',
      translation: 'Selama datanya dimuat, kami tampilkan ikon loading.',
      words: [['While', 'selama / sementara'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['loading', 'sedang dimuat', 'load'], ['we', 'kami'], ['show', 'menampilkan'], ['a', 'sebuah (tidak diterjemahkan)'], ['spinner', 'ikon loading yang berputar']],
      pattern: 'D62-P5'
    },
    {
      id: 'D62-S10',
      english: "I'm updating the design to match the new style.",
      pronunciation: 'aim ap-dei-ting de di-zain tu mech de nyu stail',
      translation: 'Saya sedang memperbarui desainnya agar sesuai dengan gaya baru.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['updating', 'memperbarui', 'update'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['design', 'desain'], ['to', 'agar / untuk'], ['match', 'menyesuaikan / cocok dengan'], ['new', 'baru'], ['style', 'gaya / tampilan']],
      pattern: 'D16-P1'
    }
  ],

  review: [
    {
      id: 'D62-S11',
      english: 'The new page is easier to use on mobile.',
      pronunciation: 'de nyu peij iz i-zi-er tu yuz on mou-bail',
      translation: 'Halaman barunya lebih mudah dipakai di ponsel.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['page', 'halaman'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['easier', 'lebih mudah', 'easy'], ['to', 'untuk (penanda kata kerja)'], ['use', 'dipakai'], ['on', 'di'], ['mobile', 'perangkat mobile / ponsel']],
      pattern: 'D57-P1'
    },
    {
      id: 'D62-S12',
      english: "I haven't tested it on Safari yet.",
      pronunciation: 'ai he-vent tes-tid it on se-fa-ri yet',
      translation: 'Saya belum mengetesnya di Safari.',
      words: [['I', 'saya'], ["haven't", 'belum (have not)', 'have'], ['tested', 'mengetes / menguji', 'test'], ['it', 'itu / -nya'], ['on', 'di'], ['Safari', 'Safari (browser di iPhone dan Mac)'], ['yet', '(penegas "belum", di akhir kalimat)']],
      pattern: 'D34-P3'
    },
    {
      id: 'D62-S13',
      english: 'Could you check the page on your phone?',
      pronunciation: 'kud yu cek de peij on yor foun?',
      translation: 'Bisa cek halamannya di ponselmu?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['check', 'memeriksa / cek'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['page', 'halaman'], ['on', 'di'], ['your', 'milikmu'], ['phone', 'ponsel']],
      pattern: 'D19-P2'
    },
    { ref: 'D53-S07' },
    { ref: 'D37-S07' }
  ],

  patterns: [
    {
      id: 'D62-P1',
      formula: 'The page / This component + shows + BENDA',
      meaning: 'Describe what the user sees.',
      examples: ["The dashboard shows today's orders.", "This component shows the user's profile.", 'The table shows the latest ten records.']
    },
    {
      id: 'D62-P2',
      formula: 'When the user + KATA KERJA-s, + KALIMAT',
      meaning: 'Describe what happens after a user action.',
      examples: ['When the user clicks Submit, the data is saved.', 'When the user logs in, the home page opens.', 'When the user types a name, the list updates.']
    },
    {
      id: 'D62-P3',
      formula: 'The page displays + BENDA + if + KALIMAT  ·  The button is disabled until + KALIMAT',
      meaning: 'Describe conditions on the screen.',
      examples: ['The page shows a warning if the password is too short.', 'The button is disabled until all fields are filled.', 'A message appears if the upload fails.']
    },
    {
      id: 'D62-P4',
      formula: 'The page loads / sends + BENDA + from / to + the API',
      meaning: 'Connect the screen to the backend.',
      examples: ['The page loads the orders from the API.', 'The form sends the data to the API.', "The app gets the user's name from the backend."]
    },
    {
      id: 'D62-P5',
      formula: 'While + KALIMAT, we show + BENDA',
      meaning: 'Describe a loading or waiting state.',
      examples: ['While the file is uploading, we show a progress bar.', 'While the page is loading, we show a placeholder.', 'While we wait for the response, the button is disabled.']
    }
  ],

  shadowing: ['D62-S02', 'D62-S04', 'D62-S08', 'D62-S09'],

  speaking: [
    { q: 'Can you explain how one screen in your app works?', qId: 'Jelaskan cara kerja satu layar di aplikasimu.', hint: 'The page shows ... When the user clicks ..., ...', example: "The order page shows a list of today's orders. When the user clicks an order, a panel opens with the details." },
    { q: 'What happens on the screen if the user makes a mistake in a form?', qId: 'Apa yang terjadi di layar kalau user salah mengisi formulir?', hint: 'The page displays ... if ... The button is disabled until ...', example: 'The page displays a red message if the email is not valid. The Save button is disabled until all required fields are filled.' },
    { q: 'How does the page get its data, and what does the user see while waiting?', qId: 'Bagaimana halaman mendapatkan datanya, dan apa yang dilihat user saat menunggu?', hint: 'The page loads ... from the API. While ..., we show ...', example: 'The page loads the data from the API when it opens. While the data is loading, we show a spinner.' },
    { q: 'Describe a small UI problem you have seen and how you would improve it.', qId: 'Ceritakan masalah tampilan kecil yang pernah kamu lihat dan cara memperbaikinya.', hint: "The layout doesn't ... on ... I think we should ...", example: "The table doesn't work well on small screens because it's too wide. I think we should show cards on mobile instead." }
  ],

  talk321: null
});
