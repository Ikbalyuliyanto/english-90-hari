E90.registerDay({
  day: 80,
  titleId: 'Validasi & Aturan Bisnis',
  goal: 'Menjelaskan aturan validasi, di mana validasi dilakukan, aturan bisnis dalam bahasa sederhana, dan apa yang terjadi kalau aturan dilanggar.',

  learn: [
    {
      id: 'D80-S01',
      english: 'The email field is required.',
      pronunciation: 'di i-meil fild iz ri-kwai-erd',
      translation: 'Kolom email wajib diisi.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['email', 'email / surel'], ['field', 'field: kolom isian di form'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['required', 'wajib (diisi)', 'require']],
      pattern: 'D80-P1'
    },
    {
      id: 'D80-S02',
      english: 'The phone number must be between ten and thirteen digits.',
      pronunciation: 'de foun nam-ber mast bi bi-twin ten en ther-tin di-jits',
      translation: 'Nomor teleponnya harus terdiri dari sepuluh sampai tiga belas angka.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['phone', 'telepon'], ['number', 'nomor'], ['must', 'harus (aturan)'], ['be', '(to be, tidak diterjemahkan)'], ['between', 'antara'], ['ten', 'sepuluh'], ['and', 'dan / sampai'], ['thirteen', 'tiga belas'], ['digits', 'digit / angka (jamak)', 'digit']],
      pattern: 'D80-P1'
    },
    {
      id: 'D80-S03',
      english: 'We validate the data on both the frontend and the backend.',
      pronunciation: 'wi ve-li-deit de dei-ta on bouth de front-end en de bek-end',
      translation: 'Kami memvalidasi datanya di frontend dan juga di backend.',
      words: [['We', 'kami'], ['validate', 'memvalidasi / memeriksa kebenaran data'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['on', 'di'], ['both', 'kedua / baik ... maupun'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['and', 'dan'], ['backend', 'backend: bagian server yang memproses data']],
      pattern: 'D80-P2'
    },
    {
      id: 'D80-S04',
      english: 'Frontend validation is for user experience, but backend validation is for security.',
      pronunciation: 'front-end ve-li-dei-shen iz for yu-zer eks-pi-ri-ens, bat bek-end ve-li-dei-shen iz for se-kyu-re-ti',
      translation: 'Validasi di frontend untuk kenyamanan user, sedangkan validasi di backend untuk keamanan.',
      words: [['Frontend', 'frontend: bagian aplikasi yang dilihat user'], ['validation', 'validasi: pemeriksaan kebenaran data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['for', 'untuk'], ['user', 'pengguna / user'], ['experience', 'pengalaman'], ['but', 'tetapi / sedangkan'], ['backend', 'backend: bagian server yang memproses data'], ['security', 'keamanan']],
      phrases: [['user experience', 'pengalaman / kenyamanan user saat memakai aplikasi']],
      pattern: 'D80-P2'
    },
    {
      id: 'D80-S05',
      english: "A patient can't book two appointments at the same time.",
      pronunciation: 'e pei-shent kent buk tu e-point-ments et de seim taim',
      translation: 'Seorang pasien tidak boleh membuat dua janji temu di jam yang sama.',
      words: [['A', 'seorang (tidak diterjemahkan)'], ['patient', 'pasien'], ["can't", 'tidak boleh / tidak bisa (cannot)', 'can'], ['book', 'membuat janji / memesan'], ['two', 'dua'], ['appointments', 'janji temu (jamak)', 'appointment'], ['at', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['same', 'sama'], ['time', 'waktu / jam']],
      pattern: 'D80-P3'
    },
    {
      id: 'D80-S06',
      english: 'The business rule says that refunds need manager approval.',
      pronunciation: 'de biz-nis rul sez det ri-fandz nid me-ne-jer e-pru-vel',
      translation: 'Aturan bisnisnya menyebutkan bahwa refund perlu persetujuan manajer.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['business', 'bisnis'], ['rule', 'aturan'], ['says', 'menyebutkan / berbunyi (dibaca "sez")', 'say'], ['that', 'bahwa'], ['refunds', 'pengembalian dana (jamak)', 'refund'], ['need', 'perlu / butuh'], ['manager', 'manajer'], ['approval', 'persetujuan']],
      phrases: [['business rule', 'aturan bisnis yang harus dijalankan sistem']],
      pattern: 'D80-P4'
    },
    {
      id: 'D80-S07',
      english: "An order can only be cancelled before it's shipped.",
      pronunciation: 'en or-der ken oun-li bi ken-seld bi-for its shipt',
      translation: 'Pesanan hanya bisa dibatalkan sebelum dikirim.',
      words: [['An', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['order', 'pesanan'], ['can', 'bisa'], ['only', 'hanya'], ['be', '(to be, tidak diterjemahkan)'], ['cancelled', 'dibatalkan', 'cancel'], ['before', 'sebelum'], ["it's", 'itu (it is)', 'be'], ['shipped', 'dikirim (barang)', 'ship']],
      pattern: 'D80-P3'
    },
    {
      id: 'D80-S08',
      english: 'If the rule is broken, the API returns a validation error.',
      pronunciation: 'if de rul iz brou-ken, di ei-pi-ai ri-ternz e ve-li-dei-shen e-rer',
      translation: 'Kalau aturannya dilanggar, API mengembalikan error validasi.',
      words: [['If', 'kalau / jika'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['rule', 'aturan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['broken', 'dilanggar (untuk aturan)', 'break'], ['API', 'API: pintu komunikasi antar aplikasi'], ['returns', 'mengembalikan', 'return'], ['a', 'sebuah (tidak diterjemahkan)'], ['validation', 'validasi: pemeriksaan kebenaran data'], ['error', 'error / kesalahan']],
      phrases: [['break a rule', 'melanggar aturan (bukan "memecahkan")']],
      pattern: 'D80-P5'
    },
    {
      id: 'D80-S09',
      english: 'The error message tells the user which field is wrong.',
      pronunciation: 'di e-rer me-sij telz de yu-zer wich fild iz rong',
      translation: 'Pesan error-nya memberi tahu user kolom mana yang salah.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['error', 'error / kesalahan'], ['message', 'pesan'], ['tells', 'memberi tahu; -s karena "the error message"', 'tell'], ['user', 'pengguna / user'], ['which', 'yang mana'], ['field', 'field: kolom isian di form'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['wrong', 'salah']],
      pattern: 'D80-P5'
    },
    {
      id: 'D80-S10',
      english: 'This rule is different for VIP customers.',
      pronunciation: 'dis rul iz di-fe-rent for vi-ai-pi kas-te-merz',
      translation: 'Aturan ini berbeda untuk pelanggan VIP.',
      words: [['This', 'ini'], ['rule', 'aturan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['different', 'berbeda'], ['for', 'untuk'], ['VIP', 'VIP: pelanggan khusus / prioritas'], ['customers', 'pelanggan (jamak)', 'customer']],
      pattern: 'D80-P4'
    }
  ],

  review: [
    {
      id: 'D80-S11',
      english: 'Just to confirm, is the address field required?',
      pronunciation: 'jast tu ken-ferm, iz di e-dres fild ri-kwai-erd?',
      translation: 'Sekadar memastikan, apakah kolom alamat wajib diisi?',
      words: [['Just', 'sekadar'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['confirm', 'memastikan'], ['is', '(kata bantu pertanyaan "is ...?", tidak diterjemahkan)', 'be'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['address', 'alamat'], ['field', 'field: kolom isian di form'], ['required', 'wajib (diisi)', 'require']],
      pattern: 'D52-P1'
    },
    {
      id: 'D80-S12',
      english: 'Should this rule also apply to old orders?',
      pronunciation: 'shud dis rul ol-sou e-plai tu ould or-derz?',
      translation: 'Apakah aturan ini juga berlaku untuk pesanan lama?',
      words: [['Should', 'apakah seharusnya'], ['this', 'ini'], ['rule', 'aturan'], ['also', 'juga'], ['apply', 'berlaku (dalam "apply to")'], ['to', 'untuk'], ['old', 'lama'], ['orders', 'pesanan (jamak)', 'order']],
      phrases: [['apply to', 'berlaku untuk']],
      pattern: 'D52-P3'
    },
    {
      id: 'D80-S13',
      english: 'I misunderstood the discount rule.',
      pronunciation: 'ai mis-an-der-stud de dis-kaunt rul',
      translation: 'Saya salah memahami aturan diskonnya.',
      words: [['I', 'saya'], ['misunderstood', 'salah paham (lampau)', 'misunderstand'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['discount', 'diskon'], ['rule', 'aturan']],
      pattern: 'D55-P2'
    },
    { ref: 'D63-S03' },
    { ref: 'D62-S05' }
  ],

  patterns: [
    {
      id: 'D80-P1',
      formula: 'The + FIELD + is required  ·  ... must be + KONDISI',
      meaning: 'Describe a validation rule.',
      examples: ['The name field is required.', 'The password must be at least eight characters.', 'The date must be in the future.']
    },
    {
      id: 'D80-P2',
      formula: 'We validate + BENDA + on both the frontend and the backend',
      meaning: 'Explain where validation happens.',
      examples: ['We validate the form on both sides.', 'The frontend checks the format, and the backend checks the rules again.', 'Never trust data from the client.'],
      note: 'Validasi di frontend = pengalaman user lebih baik · validasi di backend = keamanan (data dari luar tidak boleh langsung dipercaya).'
    },
    {
      id: 'D80-P3',
      formula: "A + ORANG + can't + KATA KERJA  ·  BENDA + can only be + KATA KERJA-ed + ...",
      meaning: 'Describe a business rule in plain words.',
      examples: ["A user can't have two active subscriptions.", 'A discount code can only be used once.', 'Invoices can only be edited before they are sent.']
    },
    {
      id: 'D80-P4',
      formula: 'The business rule says that + KALIMAT',
      meaning: 'Refer to an agreed rule.',
      examples: ['The business rule says that large orders need approval.', 'According to the policy, data is kept for five years.', 'This rule is different for corporate clients.']
    },
    {
      id: 'D80-P5',
      formula: 'If the rule is broken, the API returns + BENDA  ·  The error tells the user + BENDA',
      meaning: 'Explain what happens when a rule is not met.',
      examples: ['If the rule is broken, we return a 422 error.', 'The error message tells the user what to fix.', 'The response lists all invalid fields.']
    }
  ],

  shadowing: ['D80-S02', 'D80-S03', 'D80-S05', 'D80-S06'],

  speaking: [
    { q: 'Explain the validation rules for one form in your system.', qId: 'Jelaskan aturan validasi untuk satu formulir di sistemmu.', hint: 'The ... field is required. The ... must be ... We validate ... on both ...', example: 'In the registration form, the email field is required, and the password must be at least eight characters. We validate the data on both the frontend and the backend.' },
    { q: 'Why is backend validation still important if the frontend already validates the data?', qId: 'Kenapa validasi di backend tetap penting padahal frontend sudah memvalidasi?', hint: 'Frontend validation is for ..., but backend validation is for ...', example: 'Frontend validation is for user experience, because users see the problem quickly. But backend validation is for security, because anyone can send a request directly to the API.' },
    { q: 'Explain one important business rule in your project.', qId: 'Jelaskan satu aturan bisnis penting di proyekmu.', hint: "The business rule says that ... A ... can't ... ... can only ...", example: "The business rule says that a patient can't book two appointments at the same time. Also, an appointment can only be cancelled up to two hours before it starts." },
    { q: 'A product owner asks for a new rule. Confirm the details before you build it.', qId: 'Product owner meminta aturan baru. Pastikan detailnya sebelum kamu membuatnya.', hint: 'Just to confirm, ...? Should this rule apply to ...? What happens if ...?', example: 'Just to confirm, refunds above one million need manager approval? Should this rule apply to old orders too? And what happens if the manager is on leave?' }
  ],

  talk321: null
});
