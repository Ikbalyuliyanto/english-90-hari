E90.registerDay({
  day: 66,
  titleId: 'Authentication & Authorization',
  goal: 'Menjelaskan cara login bekerja, beda authentication dan authorization, role, izin akses, dan apa yang terjadi kalau user tidak punya akses.',

  learn: [
    {
      id: 'D66-S01',
      english: 'Users log in with their email and password.',
      pronunciation: 'yu-zerz log in with der i-meil en pes-werd',
      translation: 'User login memakai email dan password mereka.',
      words: [['Users', 'pengguna (jamak)', 'user'], ['log', '(bagian dari "log in")'], ['in', '(bagian dari "log in")'], ['with', 'dengan / memakai'], ['their', 'milik mereka'], ['email', 'email / surel'], ['and', 'dan'], ['password', 'kata sandi / password']],
      phrases: [['log in', 'masuk ke akun']],
      pattern: 'D66-P1'
    },
    {
      id: 'D66-S02',
      english: 'After login, the server creates a token.',
      pronunciation: 'ef-ter lo-gin, de ser-ver kri-eits e tou-ken',
      translation: 'Setelah login, server membuat sebuah token.',
      words: [['After', 'setelah'], ['login', 'login: proses masuk ke akun (kata benda)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server: komputer yang menjalankan backend'], ['creates', 'membuat; -s karena "the server"', 'create'], ['a', 'sebuah (tidak diterjemahkan)'], ['token', 'token: kode tanda bahwa user sudah login']],
      pattern: 'D66-P2'
    },
    {
      id: 'D66-S03',
      english: 'The token expires after one hour.',
      pronunciation: 'de tou-ken ek-spai-erz ef-ter wan a-wer',
      translation: 'Token-nya kedaluwarsa setelah satu jam.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['token', 'token: kode tanda sudah login'], ['expires', 'kedaluwarsa / habis masa berlaku; -s karena "the token"', 'expire'], ['after', 'setelah'], ['one', 'satu'], ['hour', 'jam (huruf h tidak dibaca)']],
      pattern: 'D66-P2'
    },
    {
      id: 'D66-S04',
      english: 'Authentication checks who the user is.',
      pronunciation: 'o-then-ti-kei-shen ceks hu de yu-zer iz',
      translation: 'Authentication memastikan siapa user-nya.',
      words: [['Authentication', 'autentikasi: memastikan identitas user'], ['checks', 'memeriksa; -s karena "authentication"', 'check'], ['who', 'siapa'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user'], ['is', '(to be, tidak diterjemahkan)', 'be']],
      pattern: 'D66-P3'
    },
    {
      id: 'D66-S05',
      english: 'Authorization checks what the user is allowed to do.',
      pronunciation: 'o-the-re-zei-shen ceks wat de yu-zer iz e-laud tu du',
      translation: 'Authorization memastikan apa saja yang boleh dilakukan user.',
      words: [['Authorization', 'otorisasi: memastikan hak akses user'], ['checks', 'memeriksa', 'check'], ['what', 'apa (yang)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['user', 'pengguna / user'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['allowed', 'diizinkan / boleh', 'allow'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['do', 'melakukan']],
      phrases: [['be allowed to', 'boleh / diizinkan untuk']],
      pattern: 'D66-P3'
    },
    {
      id: 'D66-S06',
      english: 'Only admins have permission to delete records.',
      pronunciation: 'oun-li ed-minz hev per-mi-shen tu di-lit re-kerdz',
      translation: 'Hanya admin yang punya izin untuk menghapus data.',
      words: [['Only', 'hanya'], ['admins', 'admin (jamak): pengelola sistem', 'admin'], ['have', 'punya'], ['permission', 'izin / hak akses'], ['to', 'untuk (penanda kata kerja)'], ['delete', 'menghapus'], ['records', 'data yang disimpan (jamak)', 'record']],
      pattern: 'D66-P4'
    },
    {
      id: 'D66-S07',
      english: 'Doctors can only see their own patients.',
      pronunciation: 'dok-terz ken oun-li si der oun pei-shents',
      translation: 'Dokter hanya bisa melihat pasiennya sendiri.',
      words: [['Doctors', 'dokter (jamak)', 'doctor'], ['can', 'bisa'], ['only', 'hanya'], ['see', 'melihat'], ['their', 'milik mereka'], ['own', 'sendiri'], ['patients', 'pasien (jamak)', 'patient']],
      phrases: [['their own', 'milik mereka sendiri']],
      pattern: 'D66-P4'
    },
    {
      id: 'D66-S08',
      english: "If the user doesn't have the right role, the API returns a 403 error.",
      pronunciation: 'if de yu-zer da-zent hev de rait roul, di ei-pi-ai ri-ternz e for-ou-thri e-rer',
      translation: 'Kalau user tidak punya role yang sesuai, API mengembalikan error 403.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['user', 'pengguna / user'], ["doesn't", 'tidak (does not)', 'do'], ['have', 'punya'], ['right', 'tepat / sesuai'], ['role', 'peran / role user (mis. admin, staf)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['returns', 'mengembalikan', 'return'], ['a', 'sebuah (tidak diterjemahkan)'], ['403', '403: kode status "tidak punya izin"'], ['error', 'error / kesalahan']],
      pattern: 'D66-P5'
    },
    {
      id: 'D66-S09',
      english: 'The session ends when the user logs out.',
      pronunciation: 'de se-shen endz wen de yu-zer logz aut',
      translation: 'Sesinya berakhir saat user logout.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['session', 'sesi: masa user sedang login'], ['ends', 'berakhir; -s karena "the session"', 'end'], ['when', 'saat / ketika'], ['user', 'pengguna / user'], ['logs', 'keluar (dalam "log out"); -s karena "the user"', 'log'], ['out', '(bagian dari "log out")']],
      phrases: [['log out', 'keluar dari akun']],
      pattern: 'D66-P2'
    },
    {
      id: 'D66-S10',
      english: 'We store passwords as hashes, not as plain text.',
      pronunciation: 'wi stor pes-werdz ez he-shiz, not ez plein tekst',
      translation: 'Kami menyimpan password dalam bentuk hash, bukan teks biasa.',
      words: [['We', 'kami'], ['store', 'menyimpan'], ['passwords', 'kata sandi (jamak)', 'password'], ['as', 'sebagai / dalam bentuk'], ['hashes', 'hash: hasil acak dari password yang tidak bisa dibaca kembali', 'hash'], ['not', 'bukan'], ['plain', 'biasa / polos'], ['text', 'teks']],
      phrases: [['plain text', 'teks biasa yang bisa langsung dibaca']]
    }
  ],

  review: [
    {
      id: 'D66-S11',
      english: "I can't log in to the admin panel.",
      pronunciation: 'ai kent log in tu di ed-min pe-nel',
      translation: 'Saya tidak bisa login ke panel admin.',
      words: [['I', 'saya'], ["can't", 'tidak bisa (cannot)', 'can'], ['log', '(bagian dari "log in")'], ['in', '(bagian dari "log in")'], ['to', 'ke'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['admin', 'admin: pengelola sistem'], ['panel', 'panel / halaman pengaturan']],
      pattern: 'D19-P1'
    },
    {
      id: 'D66-S12',
      english: "Just to clarify, can managers edit other users' data?",
      pronunciation: "jast tu kle-re-fai, ken me-ne-jerz e-dit a-der yu-zerz dei-ta?",
      translation: 'Sekadar memastikan, apakah manajer boleh mengubah data user lain?',
      words: [['Just', 'sekadar'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['clarify', 'memperjelas / memastikan'], ['can', 'bolehkah / bisakah'], ['managers', 'manajer (jamak)', 'manager'], ['edit', 'mengubah / mengedit'], ['other', 'lain'], ["users'", 'milik para user', 'user'], ['data', 'data']],
      pattern: 'D38-P1'
    },
    {
      id: 'D66-S13',
      english: 'The login page is still showing an error.',
      pronunciation: 'de lo-gin peij iz stil shou-ing en e-rer',
      translation: 'Halaman login masih menampilkan error.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['login', 'login: proses masuk ke akun'], ['page', 'halaman'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['still', 'masih'], ['showing', 'menampilkan', 'show'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['error', 'error / pesan kesalahan']],
      pattern: 'D16-P4'
    },
    { ref: 'D64-S06' },
    { ref: 'D61-S07' }
  ],

  patterns: [
    {
      id: 'D66-P1',
      formula: 'Users log in with + BENDA',
      meaning: 'Explain how users sign in.',
      examples: ['Users log in with their Google account.', 'Staff log in with their employee ID.', 'We also support login with a one-time code.']
    },
    {
      id: 'D66-P2',
      formula: 'The token expires / The session ends + after / when + ...',
      meaning: 'Explain how long access lasts.',
      examples: ['The token expires after 30 minutes.', 'The session ends when the browser is closed.', 'Users have to log in again after 24 hours.']
    },
    {
      id: 'D66-P3',
      formula: 'Authentication checks who ...  ·  Authorization checks what ...',
      meaning: 'Explain the difference in simple words.',
      examples: ['Authentication checks if the password is correct.', 'Authorization checks if the user can open this page.', 'First we authenticate the user, then we check the permissions.'],
      note: 'authentication (o-then-ti-kei-shen) = siapa kamu · authorization (o-the-re-zei-shen) = kamu boleh melakukan apa.'
    },
    {
      id: 'D66-P4',
      formula: 'Only + ORANG + have permission to + KATA KERJA  ·  ORANG + can only + KATA KERJA',
      meaning: 'Explain access rules.',
      examples: ['Only managers have permission to approve payments.', "Cashiers can only see today's transactions.", 'Guests can only read, not edit.']
    },
    {
      id: 'D66-P5',
      formula: "If the user doesn't have + BENDA, the API returns + BENDA",
      meaning: 'Explain what happens without access.',
      examples: ["If the user doesn't have a valid token, the API returns 401.", "If the user doesn't have the admin role, we hide the button.", 'If the session is expired, we redirect the user to the login page.'],
      note: '401 = belum login / token tidak valid · 403 = sudah login, tapi tidak punya izin.'
    }
  ],

  shadowing: ['D66-S02', 'D66-S04', 'D66-S05', 'D66-S06'],

  speaking: [
    { q: 'How does login work in your application?', qId: 'Bagaimana proses login di aplikasimu?', hint: 'Users log in with ... After login, the server ... The token expires ...', example: 'Users log in with their email and password. After login, the server creates a token, and the frontend sends it with every request. The token expires after one hour.' },
    { q: 'Explain the difference between authentication and authorization using your own system as an example.', qId: 'Jelaskan beda authentication dan authorization dengan contoh dari sistemmu.', hint: 'Authentication checks ... Authorization checks ... For example, ...', example: 'Authentication checks who the user is, for example with a password. Authorization checks what they can do. For example, a nurse can see patient data, but only admins can delete it.' },
    { q: 'What roles do you have, and what can each role do?', qId: 'Role apa saja yang ada, dan apa yang bisa dilakukan tiap role?', hint: 'Only ... have permission to ... ... can only ...', example: 'We have three roles: admin, manager, and staff. Only admins have permission to create users. Staff can only see their own tasks.' },
    { q: "What happens if a user tries to open a page they don't have access to?", qId: 'Apa yang terjadi kalau user mencoba membuka halaman yang tidak boleh diaksesnya?', hint: "If the user doesn't have ..., the API returns ... and the page shows ...", example: "If the user doesn't have the right role, the API returns a 403 error, and the page shows an access denied message." }
  ],

  talk321: null
});
