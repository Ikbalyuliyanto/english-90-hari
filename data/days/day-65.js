E90.registerDay({
  day: 65,
  titleId: 'Database & SQL',
  goal: 'Menjelaskan di mana data disimpan, struktur tabel, hubungan antar data, dan query sederhana.',

  learn: [
    {
      id: 'D65-S01',
      english: 'The data is stored in the appointments table.',
      pronunciation: 'de dei-ta iz stord in di e-point-ments tei-bel',
      translation: 'Datanya disimpan di tabel appointments.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['data', 'data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['stored', 'disimpan', 'store'], ['in', 'di dalam'], ['appointments', 'appointments (nama tabel: janji temu)', 'appointment'], ['table', 'tabel di database']],
      pattern: 'D65-P1'
    },
    {
      id: 'D65-S02',
      english: 'Each row is one appointment.',
      pronunciation: 'ich rou iz wan e-point-ment',
      translation: 'Setiap baris adalah satu janji temu.',
      words: [['Each', 'setiap'], ['row', 'baris (data di tabel)'], ['is', 'adalah', 'be'], ['one', 'satu'], ['appointment', 'janji temu']],
      pattern: 'D65-P2'
    },
    {
      id: 'D65-S03',
      english: "This column stores the patient's phone number.",
      pronunciation: 'dis ko-lem storz de pei-shents foun nam-ber',
      translation: 'Kolom ini menyimpan nomor telepon pasien.',
      words: [['This', 'ini'], ['column', 'kolom (di tabel)'], ['stores', 'menyimpan; -s karena "this column"', 'store'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ["patient's", 'milik pasien', 'patient'], ['phone', 'telepon'], ['number', 'nomor']],
      pattern: 'D65-P2'
    },
    {
      id: 'D65-S04',
      english: 'We use PostgreSQL as our database.',
      pronunciation: 'wi yuz poust-gres-kyu-el ez a-wer dei-te-beis',
      translation: 'Kami memakai PostgreSQL sebagai database.',
      words: [['We', 'kami'], ['use', 'memakai'], ['PostgreSQL', 'PostgreSQL (nama sistem database)'], ['as', 'sebagai'], ['our', 'milik kami'], ['database', 'database: tempat data disimpan']]
    },
    {
      id: 'D65-S05',
      english: 'I wrote a query to get all active users.',
      pronunciation: 'ai rout e kwi-ri tu get ol ek-tiv yu-zerz',
      translation: 'Saya menulis query untuk mengambil semua user yang aktif.',
      words: [['I', 'saya'], ['wrote', 'menulis (lampau)', 'write'], ['a', 'sebuah (tidak diterjemahkan)'], ['query', 'query: perintah untuk mengambil atau mengubah data (dibaca "kwi-ri")'], ['to', 'untuk (penanda kata kerja)'], ['get', 'mengambil'], ['all', 'semua'], ['active', 'aktif'], ['users', 'pengguna (jamak)', 'user']],
      pattern: 'D65-P3'
    },
    {
      id: 'D65-S06',
      english: 'The query joins the orders table with the customers table.',
      pronunciation: 'de kwi-ri joinz di or-derz tei-bel with de kas-te-merz tei-bel',
      translation: 'Query-nya menggabungkan tabel orders dengan tabel customers.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['query', 'query: perintah ke database'], ['joins', 'menggabungkan (data dari dua tabel); -s karena "the query"', 'join'], ['orders', 'orders (nama tabel: pesanan)', 'order'], ['table', 'tabel di database'], ['with', 'dengan'], ['customers', 'customers (nama tabel: pelanggan)', 'customer']],
      phrases: [['join A with B', 'menggabungkan data tabel A dan B (bukan "bergabung")']],
      pattern: 'D65-P3'
    },
    {
      id: 'D65-S07',
      english: 'The query is slow because the table has millions of rows.',
      pronunciation: 'de kwi-ri iz slou bi-koz de tei-bel hez mil-yenz ov rouz',
      translation: 'Query-nya lambat karena tabelnya punya jutaan baris.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['query', 'query: perintah ke database'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['slow', 'lambat'], ['because', 'karena'], ['table', 'tabel di database'], ['has', 'punya (have untuk it)', 'have'], ['millions', 'jutaan', 'million'], ['of', '(bagian dari "millions of")'], ['rows', 'baris (jamak)', 'row']],
      pattern: 'D47-P1'
    },
    {
      id: 'D65-S08',
      english: 'We added an index to make it faster.',
      pronunciation: 'wi e-did en in-deks tu meik it fes-ter',
      translation: 'Kami menambahkan index supaya lebih cepat.',
      words: [['We', 'kami'], ['added', 'menambahkan (-ed dibaca "id")', 'add'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['index', 'index: struktur database agar pencarian lebih cepat'], ['to', 'supaya / untuk'], ['make', 'membuat'], ['it', 'itu (query-nya)'], ['faster', 'lebih cepat', 'fast']],
      pattern: 'D65-P4'
    },
    {
      id: 'D65-S09',
      english: 'Every patient can have many appointments.',
      pronunciation: 'ev-ri pei-shent ken hev me-ni e-point-ments',
      translation: 'Setiap pasien bisa punya banyak janji temu.',
      words: [['Every', 'setiap'], ['patient', 'pasien'], ['can', 'bisa'], ['have', 'punya'], ['many', 'banyak'], ['appointments', 'janji temu (jamak)', 'appointment']],
      pattern: 'D65-P5'
    },
    {
      id: 'D65-S10',
      english: 'Each appointment belongs to one doctor.',
      pronunciation: 'ich e-point-ment bi-longz tu wan dok-ter',
      translation: 'Setiap janji temu terkait dengan satu dokter.',
      words: [['Each', 'setiap'], ['appointment', 'janji temu'], ['belongs', 'milik / terkait (dalam "belong to"); -s karena "each appointment"', 'belong'], ['to', '(bagian dari "belong to")'], ['one', 'satu'], ['doctor', 'dokter']],
      phrases: [['belong to', 'milik / terkait dengan']],
      pattern: 'D65-P5'
    }
  ],

  review: [
    {
      id: 'D65-S11',
      english: 'I need to update the database before we deploy.',
      pronunciation: 'ai nid tu ap-deit de dei-te-beis bi-for wi di-ploi',
      translation: 'Saya perlu memperbarui database sebelum kita deploy.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['update', 'memperbarui'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['database', 'database: tempat data disimpan'], ['before', 'sebelum'], ['we', 'kita'], ['deploy', 'deploy: merilis aplikasi ke server']],
      pattern: 'D11-P2'
    },
    {
      id: 'D65-S12',
      english: "I've already created the new table.",
      pronunciation: 'aiv ol-re-di kri-ei-tid de nyu tei-bel',
      translation: 'Tabel barunya sudah saya buat.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['already', 'sudah'], ['created', 'membuat (-ed dibaca "id")', 'create'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['table', 'tabel di database']],
      pattern: 'D46-P2'
    },
    {
      id: 'D65-S13',
      english: 'Should this column allow empty values?',
      pronunciation: 'shud dis ko-lem e-lau em-ti vel-yuz?',
      translation: 'Apakah kolom ini boleh kosong?',
      words: [['Should', 'apakah seharusnya'], ['this', 'ini'], ['column', 'kolom (di tabel)'], ['allow', 'mengizinkan / membolehkan'], ['empty', 'kosong'], ['values', 'nilai (jamak)', 'value']],
      pattern: 'D52-P3'
    },
    { ref: 'D63-S04' },
    { ref: 'D64-S08' }
  ],

  patterns: [
    {
      id: 'D65-P1',
      formula: 'The data is stored in + the + NAMA + table',
      meaning: 'Explain where the data is stored.',
      examples: ['User data is stored in the users table.', 'The images are stored in cloud storage.', 'Payment history is stored in a separate table.']
    },
    {
      id: 'D65-P2',
      formula: 'Each row is + BENDA  ·  This column stores + BENDA',
      meaning: 'Explain the structure of a table.',
      examples: ['Each row is one order.', 'This column stores the created date.', 'The status column stores the current state of the order.']
    },
    {
      id: 'D65-P3',
      formula: 'I wrote a query to + KATA KERJA  ·  The query joins A with B',
      meaning: 'Describe a query in words.',
      examples: ['I wrote a query to count the orders per day.', 'The query joins users with their roles.', 'This query filters out deleted records.'],
      note: 'Cara baca: query = kwi-ri · database = dei-te-beis · SQL = es-kyu-el (sebagian orang bilang "si-kwel").'
    },
    {
      id: 'D65-P4',
      formula: 'We added + BENDA + to make it + KATA SIFAT-er',
      meaning: 'Explain an improvement and its purpose.',
      examples: ['We added an index to make the search faster.', 'We added a new column to store the phone number.', 'We removed duplicate rows to make the data cleaner.']
    },
    {
      id: 'D65-P5',
      formula: 'Every A can have many B  ·  Each B belongs to one A',
      meaning: 'Explain relationships between data.',
      examples: ['A customer can have many orders.', 'Each order belongs to one customer.', 'One doctor can have many appointments.']
    }
  ],

  shadowing: ['D65-S01', 'D65-S02', 'D65-S06', 'D65-S10'],

  speaking: [
    { q: 'Where is the main data of your system stored? Explain one table.', qId: 'Di mana data utama sistemmu disimpan? Jelaskan satu tabel.', hint: 'The data is stored in ... Each row is ... This column stores ...', example: 'Most of the data is stored in PostgreSQL. For example, the orders table stores all orders. Each row is one order, and the status column stores the current state.' },
    { q: 'How are two main things in your system related?', qId: 'Bagaimana hubungan dua hal utama di sistemmu?', hint: 'Every ... can have many ... Each ... belongs to one ...', example: 'Every customer can have many orders, and each order belongs to one customer. Each order can also have many items.' },
    { q: 'Describe a query you wrote or used recently.', qId: 'Ceritakan query yang baru-baru ini kamu tulis atau pakai.', hint: 'I wrote a query to ... It joins ... with ...', example: 'I wrote a query to get the total sales per month. It joins the orders table with the payments table.' },
    { q: 'A report page is slow because of the database. Explain the possible cause and a fix.', qId: 'Halaman laporan lambat karena database. Jelaskan kemungkinan penyebab dan solusinya.', hint: 'The query is slow because ... We could add ... to make it faster.', example: 'I think the query is slow because the table has millions of rows and there is no index on the date column. We could add an index to make it faster.' }
  ],

  talk321: null
});
