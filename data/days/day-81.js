E90.registerDay({
  day: 81,
  titleId: 'Dasar Keamanan untuk Engineer',
  goal: 'Menjelaskan praktik keamanan dasar, perlindungan dari serangan umum, kontrol akses, menyampaikan risiko keamanan, dan menanggapi celah keamanan.',

  learn: [
    {
      id: 'D81-S01',
      english: 'All traffic uses HTTPS.',
      pronunciation: 'ol tre-fik yu-ziz ech-ti-ti-pi-es',
      translation: 'Semua lalu lintas data memakai HTTPS.',
      words: [['All', 'semua'], ['traffic', 'lalu lintas data (request yang keluar-masuk)'], ['uses', 'memakai; -s karena "all traffic"', 'use'], ['HTTPS', 'HTTPS: koneksi web yang terenkripsi']],
      pattern: 'D81-P1'
    },
    {
      id: 'D81-S02',
      english: 'We never put secrets in the source code.',
      pronunciation: 'wi ne-ver put si-krits in de sors koud',
      translation: 'Kami tidak pernah menaruh data rahasia di dalam kode.',
      words: [['We', 'kami'], ['never', 'tidak pernah'], ['put', 'menaruh'], ['secrets', 'rahasia: password, API key, dan sejenisnya (jamak)', 'secret'], ['in', 'di dalam'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['source', 'sumber'], ['code', 'kode program']],
      phrases: [['source code', 'kode sumber program']],
      pattern: 'D81-P1'
    },
    {
      id: 'D81-S03',
      english: 'The API key is stored in a secret manager.',
      pronunciation: 'di ei-pi-ai ki iz stord in e si-krit me-ne-jer',
      translation: 'API key-nya disimpan di secret manager.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['key', 'key: kode rahasia untuk memakai layanan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['stored', 'disimpan', 'store'], ['in', 'di'], ['a', 'sebuah (tidak diterjemahkan)'], ['secret', 'rahasia'], ['manager', 'pengelola (dalam "secret manager")']],
      phrases: [['secret manager', 'layanan khusus untuk menyimpan data rahasia dengan aman']],
      pattern: 'D65-P1'
    },
    {
      id: 'D81-S04',
      english: 'We use parameterized queries to prevent SQL injection.',
      pronunciation: 'wi yuz pe-re-mi-te-raizd kwi-riz tu pri-vent es-kyu-el in-jek-shen',
      translation: 'Kami memakai parameterized query untuk mencegah SQL injection.',
      words: [['We', 'kami'], ['use', 'memakai'], ['parameterized', 'berparameter: nilai dikirim terpisah dari perintah query', 'parameterize'], ['queries', 'query (jamak)', 'query'], ['to', 'untuk (penanda kata kerja)'], ['prevent', 'mencegah'], ['SQL', 'SQL: bahasa untuk database (dibaca "es-kyu-el")'], ['injection', 'injeksi: menyisipkan perintah berbahaya']],
      phrases: [['SQL injection', 'serangan dengan menyisipkan perintah SQL lewat input user']],
      pattern: 'D81-P2'
    },
    {
      id: 'D81-S05',
      english: 'We check permissions on every request.',
      pronunciation: 'wi cek per-mi-shenz on ev-ri ri-kwest',
      translation: 'Kami memeriksa izin akses di setiap request.',
      words: [['We', 'kami'], ['check', 'memeriksa'], ['permissions', 'izin / hak akses (jamak)', 'permission'], ['on', 'pada'], ['every', 'setiap'], ['request', 'request: permintaan ke server']],
      pattern: 'D81-P3'
    },
    {
      id: 'D81-S06',
      english: 'Users should only access their own data.',
      pronunciation: 'yu-zerz shud oun-li ek-ses der oun dei-ta',
      translation: 'User seharusnya hanya bisa mengakses datanya sendiri.',
      words: [['Users', 'pengguna (jamak)', 'user'], ['should', 'seharusnya'], ['only', 'hanya'], ['access', 'mengakses'], ['their', 'milik mereka'], ['own', 'sendiri'], ['data', 'data']],
      pattern: 'D81-P3'
    },
    {
      id: 'D81-S07',
      english: "This input isn't sanitized, so it could be a security risk.",
      pronunciation: 'dis in-put i-zent se-ni-taizd, sou it kud bi e se-kyu-re-ti risk',
      translation: 'Input ini belum dibersihkan, jadi bisa jadi risiko keamanan.',
      words: [['This', 'ini'], ['input', 'input: data yang dimasukkan user'], ["isn't", 'tidak / belum (is not)', 'be'], ['sanitized', 'dibersihkan dari karakter berbahaya', 'sanitize'], ['so', 'jadi'], ['it', 'hal itu'], ['could', 'bisa (kemungkinan)', 'can'], ['be', 'menjadi'], ['a', 'sebuah (tidak diterjemahkan)'], ['security', 'keamanan'], ['risk', 'risiko']],
      phrases: [['security risk', 'risiko keamanan']],
      pattern: 'D81-P4'
    },
    {
      id: 'D81-S08',
      english: 'We found a vulnerability in an old library.',
      pronunciation: 'wi faund e val-ne-re-bi-li-ti in en ould lai-bre-ri',
      translation: 'Kami menemukan celah keamanan di sebuah library lama.',
      words: [['We', 'kami'], ['found', 'menemukan (lampau)', 'find'], ['a', 'sebuah (tidak diterjemahkan)'], ['vulnerability', 'celah keamanan'], ['in', 'di'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['old', 'lama'], ['library', 'library: kumpulan kode siap pakai dari pihak lain']],
      pattern: 'D81-P5'
    },
    {
      id: 'D81-S09',
      english: 'We need to update it as soon as possible.',
      pronunciation: 'wi nid tu ap-deit it ez sun ez po-si-bel',
      translation: 'Kita perlu memperbaruinya secepat mungkin.',
      words: [['We', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['update', 'memperbarui'], ['it', 'itu / -nya'], ['as', '(bagian dari "as soon as possible")'], ['soon', 'segera'], ['possible', 'mungkin / bisa']],
      phrases: [['as soon as possible (ASAP)', 'secepat mungkin']],
      pattern: 'D81-P5'
    },
    {
      id: 'D81-S10',
      english: 'Access to production is limited to a few people.',
      pronunciation: 'ek-ses tu pre-dak-shen iz li-mi-tid tu e fyu pi-pel',
      translation: 'Akses ke production dibatasi hanya untuk beberapa orang.',
      words: [['Access', 'akses / hak masuk'], ['to', 'ke'], ['production', 'production: server yang dipakai user asli'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['limited', 'dibatasi', 'limit'], ['a', '(bagian dari "a few")'], ['few', 'beberapa / sedikit'], ['people', 'orang']],
      pattern: 'D81-P3'
    }
  ],

  review: [
    {
      id: 'D81-S11',
      english: 'Only admins have permission to change user roles.',
      pronunciation: 'oun-li ed-minz hev per-mi-shen tu cheinj yu-zer roulz',
      translation: 'Hanya admin yang punya izin untuk mengubah role user.',
      words: [['Only', 'hanya'], ['admins', 'admin (jamak): pengelola sistem', 'admin'], ['have', 'punya'], ['permission', 'izin / hak akses'], ['to', 'untuk (penanda kata kerja)'], ['change', 'mengubah'], ['user', 'pengguna / user'], ['roles', 'role / peran (jamak)', 'role']],
      pattern: 'D66-P4'
    },
    {
      id: 'D81-S12',
      english: 'What happens if someone steals the token?',
      pronunciation: 'wat he-penz if sam-wan stilz de tou-ken?',
      translation: 'Apa yang terjadi kalau ada orang yang mencuri token-nya?',
      words: [['What', 'apa (yang)'], ['happens', 'terjadi', 'happen'], ['if', 'kalau / jika'], ['someone', 'seseorang'], ['steals', 'mencuri; -s karena "someone"', 'steal'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['token', 'token: kode tanda sudah login']],
      pattern: 'D49-P2'
    },
    {
      id: 'D81-S13',
      english: 'I think we should add rate limiting to the login endpoint.',
      pronunciation: 'ai thingk wi shud ed reit li-mi-ting tu de lo-gin end-point',
      translation: 'Menurut saya kita perlu menambahkan rate limiting ke endpoint login.',
      words: [['I', 'saya'], ['think', 'berpendapat'], ['we', 'kita'], ['should', 'sebaiknya'], ['add', 'menambahkan'], ['rate', 'tingkat / jumlah per waktu'], ['limiting', 'pembatasan', 'limit'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['login', 'login: proses masuk ke akun'], ['endpoint', 'endpoint: alamat URL tertentu di API']],
      phrases: [['rate limiting', 'membatasi jumlah request dalam waktu tertentu']],
      pattern: 'D40-P1'
    },
    { ref: 'D66-S10' },
    { ref: 'D77-S09' }
  ],

  patterns: [
    {
      id: 'D81-P1',
      formula: 'We always / never + KATA KERJA',
      meaning: 'State security practices clearly.',
      examples: ['We always use HTTPS.', 'We never log passwords or tokens.', 'We never commit API keys to Git.']
    },
    {
      id: 'D81-P2',
      formula: 'We use + BENDA + to prevent + BENDA',
      meaning: 'Explain protection against an attack.',
      examples: ['We use rate limiting to prevent brute-force attacks.', 'We escape user input to prevent XSS.', 'We use short-lived tokens to reduce the risk.'],
      note: 'SQL injection = serangan lewat input yang masuk ke query · XSS = menyisipkan script berbahaya ke halaman web.'
    },
    {
      id: 'D81-P3',
      formula: 'We check + BENDA + on every request  ·  Users can only access + BENDA',
      meaning: 'Explain access control.',
      examples: ["We check the user's role on every request.", 'Users can only see their own orders.', 'Access to the database is limited to the backend.']
    },
    {
      id: 'D81-P4',
      formula: 'This could be a security risk because + KALIMAT',
      meaning: 'Raise a security concern.',
      examples: ['This could be a security risk because the token never expires.', 'This endpoint could expose personal data.', 'Storing the key in the frontend is not safe.']
    },
    {
      id: 'D81-P5',
      formula: 'We found a vulnerability in + BENDA  ·  We need to + KATA KERJA + as soon as possible',
      meaning: 'Respond to a security issue.',
      examples: ['We found a vulnerability in the image library.', 'We need to patch it as soon as possible.', 'We changed the leaked keys immediately.']
    }
  ],

  shadowing: ['D81-S02', 'D81-S04', 'D81-S06', 'D81-S07'],

  speaking: [
    { q: 'What basic security practices does your team follow?', qId: 'Praktik keamanan dasar apa yang diikuti timmu?', hint: 'We always ... We never ... We use ... to prevent ...', example: 'We always use HTTPS, and we never put secrets in the source code. We use parameterized queries to prevent SQL injection, and passwords are stored as hashes.' },
    { q: 'How do you make sure users can only see their own data?', qId: 'Bagaimana kalian memastikan user hanya bisa melihat datanya sendiri?', hint: 'We check ... on every request. Users can only ...', example: 'We check the token and the user ID on every request. The backend only returns records that belong to that user, even if someone changes the ID in the URL.' },
    { q: 'In a code review, you see an API key written directly in the code. Raise the concern.', qId: 'Saat code review, kamu melihat API key ditulis langsung di kode. Sampaikan kekhawatiranmu.', hint: 'This could be a security risk because ... We should ... instead.', example: "This could be a security risk because anyone with access to the repository can see the key. We should move it to the secret manager and change the key." },
    { q: 'A vulnerability was found in a library you use. Update your team.', qId: 'Ada celah keamanan di library yang kalian pakai. Beri update ke tim.', hint: "We found a vulnerability in ... We need to ... as soon as possible. I'll ...", example: "We found a vulnerability in the PDF library we use. We need to update it as soon as possible. I'll test the new version today and deploy it tomorrow morning." }
  ],

  talk321: null
});
