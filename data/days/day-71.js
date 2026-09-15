E90.registerDay({
  day: 71,
  titleId: 'Testing',
  goal: 'Menjelaskan test yang ditulis, hasil test, apa yang diperiksa sebuah test, edge case, dan testing manual.',

  learn: [
    {
      id: 'D71-S01',
      english: 'I wrote unit tests for the new function.',
      pronunciation: 'ai rout yu-nit tests for de nyu fangk-shen',
      translation: 'Saya menulis unit test untuk fungsi yang baru.',
      words: [['I', 'saya'], ['wrote', 'menulis (lampau)', 'write'], ['unit', 'unit: bagian kecil kode'], ['tests', 'test: kode untuk menguji kode lain (jamak)', 'test'], ['for', 'untuk'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['function', 'fungsi (dalam kode)']],
      phrases: [['unit test', 'test untuk satu bagian kecil kode']],
      pattern: 'D71-P1'
    },
    {
      id: 'D71-S02',
      english: 'All the tests passed.',
      pronunciation: 'ol de tests past',
      translation: 'Semua test lulus.',
      words: [['All', 'semua'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['tests', 'test (jamak)', 'test'], ['passed', 'lulus / berhasil (lampau, dibaca "past")', 'pass']],
      pattern: 'D71-P2'
    },
    {
      id: 'D71-S03',
      english: 'Two tests are failing on the build server.',
      pronunciation: 'tu tests ar fei-ling on de bild ser-ver',
      translation: 'Dua test gagal di build server.',
      words: [['Two', 'dua'], ['tests', 'test (jamak)', 'test'], ['are', '(kata bantu "are + -ing", tidak diterjemahkan)', 'be'], ['failing', 'gagal', 'fail'], ['on', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['build', 'build: proses menyusun dan menguji kode otomatis'], ['server', 'server']],
      phrases: [['build server', 'server yang menjalankan build dan test otomatis']],
      pattern: 'D71-P2'
    },
    {
      id: 'D71-S04',
      english: 'This test checks that the total is calculated correctly.',
      pronunciation: 'dis test ceks det de tou-tel iz kel-kyu-lei-tid ko-rekt-li',
      translation: 'Test ini memastikan totalnya dihitung dengan benar.',
      words: [['This', 'ini'], ['test', 'test: kode untuk menguji kode lain'], ['checks', 'memastikan / memeriksa; -s karena "this test"', 'check'], ['that', 'bahwa'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['total', 'total / jumlah'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['calculated', 'dihitung', 'calculate'], ['correctly', 'dengan benar', 'correct']],
      pattern: 'D71-P3'
    },
    {
      id: 'D71-S05',
      english: 'We also need to test the edge cases.',
      pronunciation: 'wi ol-sou nid tu test di ej kei-siz',
      translation: 'Kita juga perlu mengetes edge case-nya.',
      words: [['We', 'kita'], ['also', 'juga'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['test', 'mengetes / menguji'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['edge', 'tepi / batas'], ['cases', 'kasus (jamak)', 'case']],
      phrases: [['edge case', 'kondisi tidak biasa atau di batas (kosong, terlalu besar, diklik dua kali)']],
      pattern: 'D71-P4'
    },
    {
      id: 'D71-S06',
      english: 'What happens if the list is empty?',
      pronunciation: 'wat he-penz if de list iz em-ti?',
      translation: 'Apa yang terjadi kalau daftarnya kosong?',
      words: [['What', 'apa (yang)'], ['happens', 'terjadi', 'happen'], ['if', 'kalau / jika'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['list', 'daftar'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['empty', 'kosong']],
      pattern: 'D49-P2'
    },
    {
      id: 'D71-S07',
      english: 'The QA team tested it on different devices.',
      pronunciation: 'de kyu-ei tim tes-tid it on di-fe-rent di-vai-siz',
      translation: 'Tim QA sudah mengetesnya di berbagai perangkat.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['QA', 'QA: tim penguji kualitas (quality assurance)'], ['team', 'tim'], ['tested', 'mengetes (lampau, -ed dibaca "id")', 'test'], ['it', 'itu / -nya'], ['on', 'di'], ['different', 'berbeda-beda'], ['devices', 'perangkat (jamak)', 'device']],
      pattern: 'D71-P5'
    },
    {
      id: 'D71-S08',
      english: 'I tested it manually, and it works.',
      pronunciation: 'ai tes-tid it me-nyu-e-li, en it werks',
      translation: 'Saya sudah mengetesnya secara manual, dan berfungsi.',
      words: [['I', 'saya'], ['tested', 'mengetes (lampau)', 'test'], ['it', 'itu / -nya'], ['manually', 'secara manual', 'manual'], ['and', 'dan'], ['works', 'berfungsi; -s karena "it"', 'work']],
      pattern: 'D71-P5'
    },
    {
      id: 'D71-S09',
      english: 'The test coverage for this module is still low.',
      pronunciation: 'de test ka-ve-rij for dis mo-jul iz stil lou',
      translation: 'Test coverage untuk modul ini masih rendah.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['test', 'test / pengujian'], ['coverage', 'cakupan'], ['for', 'untuk'], ['this', 'ini'], ['module', 'modul: bagian dari aplikasi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['still', 'masih'], ['low', 'rendah']],
      phrases: [['test coverage', 'seberapa banyak kode yang sudah diuji']]
    },
    {
      id: 'D71-S10',
      english: "I'll add a test to make sure the bug doesn't come back.",
      pronunciation: 'ail ed e test tu meik shur de bag da-zent kam bek',
      translation: 'Saya akan menambahkan test supaya bug-nya tidak muncul lagi.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['add', 'menambahkan'], ['a', 'sebuah (tidak diterjemahkan)'], ['test', 'test: kode untuk menguji kode lain'], ['to', 'untuk (penanda tujuan)'], ['make', '(bagian dari "make sure")'], ['sure', '(bagian dari "make sure")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['bug', 'bug: kesalahan dalam program'], ["doesn't", 'tidak (does not)', 'do'], ['come', '(bagian dari "come back")'], ['back', 'kembali (dalam "come back")']],
      phrases: [['come back', 'muncul / kembali lagi']],
      pattern: 'D37-P2'
    }
  ],

  review: [
    {
      id: 'D71-S11',
      english: "I haven't tested the mobile version yet.",
      pronunciation: 'ai he-vent tes-tid de mou-bail ver-shen yet',
      translation: 'Saya belum mengetes versi mobile-nya.',
      words: [['I', 'saya'], ["haven't", 'belum (have not)', 'have'], ['tested', 'mengetes', 'test'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['mobile', 'mobile / ponsel'], ['version', 'versi'], ['yet', '(penegas "belum", di akhir kalimat)']],
      pattern: 'D34-P3'
    },
    {
      id: 'D71-S12',
      english: 'Did you try it with a different account?',
      pronunciation: 'did yu trai it with e di-fe-rent e-kaunt?',
      translation: 'Sudah dicoba dengan akun lain?',
      words: [['Did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['try', 'mencoba'], ['it', 'itu / -nya'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['different', 'lain / berbeda'], ['account', 'akun']],
      pattern: 'D17-P3'
    },
    {
      id: 'D71-S13',
      english: 'The expected result is that the user gets an email.',
      pronunciation: 'di ek-spek-tid ri-zalt iz det de yu-zer gets en i-meil',
      translation: 'Hasil yang diharapkan adalah user menerima email.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['expected', 'yang diharapkan', 'expect'], ['result', 'hasil'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['user', 'pengguna / user'], ['gets', 'menerima / mendapat; -s karena "the user"', 'get'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['email', 'email / surel']],
      pattern: 'D69-P3'
    },
    { ref: 'D68-S11' },
    { ref: 'D63-S03' }
  ],

  patterns: [
    {
      id: 'D71-P1',
      formula: 'I wrote + unit / integration tests for + BENDA',
      meaning: 'Describe the tests you wrote.',
      examples: ['I wrote unit tests for the price calculation.', 'We have integration tests for the payment API.', 'I added end-to-end tests for the login flow.'],
      note: 'unit test = uji bagian kecil · integration test = uji beberapa bagian bersama · end-to-end test = uji alur lengkap seperti user.'
    },
    {
      id: 'D71-P2',
      formula: 'All the tests passed  ·  Two tests are failing',
      meaning: 'Report test results.',
      examples: ['All the tests passed on my machine.', 'One test failed in the pipeline.', 'The tests are green now.']
    },
    {
      id: 'D71-P3',
      formula: 'This test checks that + KALIMAT',
      meaning: 'Explain what a test verifies.',
      examples: ['This test checks that the user can log in.', 'This test checks that an error is shown for a wrong email.', 'The test makes sure the order is saved.']
    },
    {
      id: 'D71-P4',
      formula: 'We need to test + BENDA  ·  What happens if + KALIMAT?',
      meaning: 'Think about edge cases.',
      examples: ['We need to test very long names.', 'What happens if the file is too big?', 'What happens if the user clicks twice?']
    },
    {
      id: 'D71-P5',
      formula: 'I tested it manually / on + BENDA, and + HASIL',
      meaning: 'Explain manual testing.',
      examples: ['I tested it manually in Chrome and Firefox.', 'The QA team tested it on Android.', 'I tested it on staging, and it works.']
    }
  ],

  shadowing: ['D71-S02', 'D71-S04', 'D71-S05', 'D71-S08'],

  speaking: [
    { q: 'How do you test a new feature before you release it?', qId: 'Bagaimana kamu mengetes fitur baru sebelum dirilis?', hint: 'I write ... tests for ... I also test it manually ... The QA team ...', example: 'I write unit tests for the main logic. I also test it manually in the browser. After that, the QA team tests it on different devices.' },
    { q: 'Describe one test in your project. What does it check?', qId: 'Ceritakan satu test di proyekmu. Apa yang diperiksanya?', hint: 'This test checks that ...', example: 'This test checks that the discount is applied only once. It creates an order with two discount codes and checks the final price.' },
    { q: 'What edge cases would you test for a file upload feature?', qId: 'Edge case apa yang akan kamu tes untuk fitur upload file?', hint: 'We need to test ... What happens if ...?', example: 'We need to test very large files and empty files. What happens if the internet stops during the upload? What happens if the file type is wrong?' },
    { q: 'Two tests are failing just before the release. Update your team.', qId: 'Dua test gagal tepat sebelum rilis. Beri update ke tim.', hint: "Two tests are failing ... I'm checking ... I'll ... before ...", example: "Two tests are failing on the build server. I'm checking if it's a real bug or a test problem. I'll update you before the release meeting." }
  ],

  talk321: null
});
