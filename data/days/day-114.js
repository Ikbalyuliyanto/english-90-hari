E90.registerDay({
  day: 114,
  titleId: 'Technical Interview: Database',
  goal: 'Answer database interview questions: model entities and relationships → keys and indexes → transactions → performance → scaling reads → data retention. Use healthcare examples: patients, visits, prescriptions, lab results, and bills.',

  learn: [
    {
      id: 'D114-S01',
      english: "I'd model it with three tables: patients, visits, and prescriptions.",
      pronunciation: 'aid mo-del it with thri tei-belz: pei-shents, vi-zits, en pri-skrip-shenz',
      translation: 'Saya akan memodelkannya dengan tiga tabel: pasien, kunjungan, dan resep.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['model', 'memodelkan / merancang struktur data'], ['it', 'itu / data itu'], ['with', 'dengan'], ['three', 'tiga'], ['tables', 'tabel', 'table'], ['patients', 'pasien', 'patient'], ['visits', 'kunjungan', 'visit'], ['and', 'dan'], ['prescriptions', 'resep obat', 'prescription']],
      phrases: [["I'd model it with", 'saya akan memodelkannya dengan']],
      pattern: 'D114-P2'
    },
    {
      id: 'D114-S02',
      english: 'A patient has many visits, and each visit has many prescriptions.',
      pronunciation: 'e pei-shent hez me-ni vi-zits, en ich vi-zit hez me-ni pri-skrip-shenz',
      translation: 'Satu pasien punya banyak kunjungan, dan setiap kunjungan punya banyak resep.',
      words: [['A', 'satu / seorang'], ['patient', 'pasien'], ['has', 'punya', 'have'], ['many', 'banyak'], ['visits', 'kunjungan', 'visit'], ['and', 'dan'], ['each', 'setiap'], ['visit', 'kunjungan'], ['prescriptions', 'resep obat', 'prescription']],
      phrases: [['has many', 'punya banyak (relasi one-to-many)']],
      pattern: 'D114-P2'
    },
    {
      id: 'D114-S03',
      english: "I'd add an index on the medical record number because we search by it often.",
      pronunciation: 'aid ed en in-deks on de me-di-kel re-kerd nam-ber bi-koz wi serch bai it o-fen',
      translation: 'Saya akan menambahkan index pada nomor rekam medis karena kami sering mencari berdasarkan kolom itu.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['add', 'menambahkan'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['index', 'index: struktur agar pencarian di database cepat'], ['on', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['medical', 'medis'], ['record', 'catatan / rekam'], ['number', 'nomor'], ['because', 'karena'], ['we', 'kami'], ['search', 'mencari'], ['by', 'berdasarkan'], ['it', 'itu / kolom itu'], ['often', 'sering']],
      phrases: [['search by', 'mencari berdasarkan']],
      pattern: 'D114-P3'
    },
    {
      id: 'D114-S04',
      english: 'We use a transaction, so the payment and the bill are saved together.',
      pronunciation: 'wi yuz e tren-zek-shen, sou de pei-ment en de bil ar seivd te-ge-der',
      translation: 'Kami memakai transaction, supaya pembayaran dan tagihan tersimpan bersamaan.',
      words: [['We', 'kami'], ['use', 'memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['transaction', 'transaction: beberapa perubahan data yang berhasil atau gagal bersama'], ['so', 'supaya'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['payment', 'pembayaran'], ['and', 'dan'], ['bill', 'tagihan'], ['are', '(penanda bentuk pasif: di-/ter-)', 'be'], ['saved', 'disimpan / tersimpan', 'save'], ['together', 'bersamaan']],
      pattern: 'D114-P3'
    },
    {
      id: 'D114-S05',
      english: 'Normalization reduces duplicate data, but it can mean more joins.',
      pronunciation: 'nor-me-le-zei-shen ri-dyu-siz dyu-pli-ket dei-ta, bat it ken min mor joinz',
      translation: 'Normalisasi mengurangi data ganda, tapi bisa berarti lebih banyak join.',
      words: [['Normalization', 'normalisasi: memecah data agar tidak tersimpan ganda'], ['reduces', 'mengurangi', 'reduce'], ['duplicate', 'ganda / duplikat'], ['data', 'data'], ['but', 'tapi'], ['it', 'itu'], ['can', 'bisa'], ['mean', 'berarti'], ['more', 'lebih banyak'], ['joins', 'join: menggabungkan data dari beberapa tabel', 'join']],
      pattern: 'D114-P4'
    },
    {
      id: 'D114-S06',
      english: 'For reports, we read from a replica to protect the main database.',
      pronunciation: 'for ri-ports, wi rid from e rep-li-ka tu pre-tekt de mein dei-te-beis',
      translation: 'Untuk laporan, kami membaca dari replica agar database utama tetap aman.',
      words: [['For', 'untuk'], ['reports', 'laporan', 'report'], ['we', 'kami'], ['read', 'membaca'], ['from', 'dari'], ['a', 'sebuah (tidak diterjemahkan)'], ['replica', 'replica: salinan database yang terus diperbarui'], ['to', '(penanda kata kerja: agar)'], ['protect', 'melindungi'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['database', 'basis data / database']],
      pattern: 'D114-P4'
    },
    {
      id: 'D114-S07',
      english: 'We never delete medical records; we mark them as inactive.',
      pronunciation: 'wi ne-ver di-lit me-di-kel re-kerdz; wi mark dem ez in-ek-tiv',
      translation: 'Kami tidak pernah menghapus rekam medis; kami menandainya sebagai tidak aktif.',
      words: [['We', 'kami'], ['never', 'tidak pernah'], ['delete', 'menghapus'], ['medical', 'medis'], ['records', 'catatan / rekam medis', 'record'], ['mark', 'menandai'], ['them', 'mereka / data itu'], ['as', 'sebagai'], ['inactive', 'tidak aktif']],
      phrases: [['mark ... as ...', 'menandai ... sebagai ...']],
      pattern: 'D114-P4'
    },
    {
      id: 'D114-S08',
      english: "I'd check the query plan before adding more indexes.",
      pronunciation: 'aid chek de kwi-ri plen bi-for e-ding mor in-dek-siz',
      translation: 'Saya akan mengecek query plan sebelum menambah index lagi.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['check', 'mengecek'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['query', 'query: perintah untuk mengambil data'], ['plan', 'rencana'], ['before', 'sebelum'], ['adding', 'menambahkan', 'add'], ['more', 'lebih banyak'], ['indexes', 'index', 'index']],
      phrases: [['query plan', 'rencana eksekusi query dari database']],
      pattern: 'D114-P3'
    }
  ],

  // Review: tabel, query, index, dan keputusan database dari Day 65–83.
  review: [
    { ref: 'D65-S02' },
    { ref: 'D65-S06' },
    { ref: 'D65-S08' },
    { ref: 'D65-S10' },
    { ref: 'D74-S05' },
    { ref: 'D83-S02' },
    { ref: 'D83-S03' }
  ],

  patterns: [
    {
      id: 'D114-P1',
      formula: 'Entities → Relationships → Keys & indexes → Transactions → Performance → Scaling → Retention',
      meaning: 'A checklist for database design questions.',
      examples: ["I'd model it with three tables: patients, visits, and prescriptions.", 'A patient has many visits, and each visit has many prescriptions.', "I'd add an index on the medical record number because we search by it often.", 'We use a transaction, so the payment and the bill are saved together.'],
      note: 'Data kesehatan punya aturan khusus: jangan dihapus sembarangan, simpan riwayat perubahan (audit trail), dan batasi siapa yang boleh melihat.'
    },
    {
      id: 'D114-P2',
      formula: "I'd model it with + ANGKA tables: ...  ·  A + BENDA has many + BENDA",
      meaning: 'Describe tables and relationships.',
      examples: ["I'd model it with four tables: lab orders, tests, samples, and results.", 'A doctor has many appointments, but each appointment belongs to one doctor.', 'A bill has many items, and each item can be a medicine or a service.']
    },
    {
      id: 'D114-P3',
      formula: "I'd add an index on + BENDA because + KALIMAT  ·  We use a transaction, so + KALIMAT",
      meaning: 'Explain indexes and transactions with a reason.',
      examples: ["I'd add an index on the visit date because most reports filter by date.", 'We use a transaction, so the stock and the prescription are updated together.', "I'd check the query plan before adding more indexes, because indexes also slow down writes."]
    },
    {
      id: 'D114-P4',
      formula: 'BENDA reduces + BENDA, but it can mean + BENDA  ·  For + BENDA, we + KATA KERJA',
      meaning: 'Talk about trade-offs and scaling.',
      examples: ['Caching reduces database load, but it can mean old data.', 'For analytics, we copy the data to a separate database every night.', 'We never delete lab results; we archive them after ten years.']
    }
  ],

  shadowing: ['D114-S02', 'D114-S03', 'D114-S04', 'D114-S07'],

  speaking: [
    { q: 'Design the tables for outpatient visits and prescriptions. Explain the relationships.', qId: 'Sebut tabel, kolom penting, relasi, dan satu index. Bicara, tidak perlu menggambar.', hint: "I'd model it with ... tables: ... A patient has many ... Each ... belongs to ... The key columns are ... I'd add an index on ...", example: "I'd model it with four tables: patients, doctors, visits, and prescriptions. A patient has many visits, and each visit belongs to one doctor. Each visit has many prescriptions. The visits table has the patient ID, the doctor ID, the date, and the diagnosis. I'd add an index on the patient ID and the visit date, because doctors often open a patient's recent visits.", followUps: ['Where would you store the medicine information?', 'How would you keep a history of changes to a diagnosis?'] },
    { q: 'A query on the lab results table is slow. The table has fifty million rows. What would you do?', qId: 'Urutan: ukur → lihat query plan → index/ubah query → pertimbangkan partisi/arsip. Jangan menebak.', hint: "First, I'd measure ... Then I'd check the query plan ... If ..., I'd add an index on ... If the table keeps growing, ...", example: "First, I'd measure which query is slow and how often it runs. Then I'd check the query plan to see if it's scanning the whole table. If it's filtering by patient and date without an index, I'd add an index on those columns. If the table keeps growing, we could partition it by year, because doctors mostly look at recent results.", followUps: ['The index made reads faster, but inserts became slower. What now?'] },
    { q: 'Would you use SQL or NoSQL for medical records? Explain your choice.', qId: 'Pilih salah satu dengan alasan (relasi, konsistensi, audit), dan sebut kapan pilihan lain lebih cocok.', hint: "It depends on ..., but for medical records I'd choose ... because ... The main reason is ... NoSQL could be better for ...", example: "It depends on the use case, but for medical records I'd choose a relational database like PostgreSQL. The main reason is that the data is very relational: patients, visits, orders, and bills are connected. We also need transactions and strong consistency. NoSQL could be better for things like device logs or very flexible documents." },
    { q: 'DATABASE INTERVIEW ROUND: The interviewer asks you to design the data model for hospital billing (bills, bill items, payments, insurance claims). Explain your design, then answer the follow-up questions one by one.', qId: 'Pakai checklist: entitas → relasi → key & index → transaction → performa → retensi.', hint: "I'd model it with ... A bill has many ... Each payment ... I'd add an index on ... We use a transaction, so ... For reports, ... We never delete ...", outline: [
      'Entities: bills, bill items, payments, claims',
      'Relationships: which has many of which',
      'Keys and indexes: what you search by',
      'Transactions: what must be saved together',
      'Performance: reports and large tables',
      'Retention and audit: no deletes, history'
    ], followUps: [
      'How do you make sure a bill is not paid twice?',
      'How would you handle millions of bill items per year?',
      'How do you change a table schema without downtime?',
      'An insurance company rejects part of a claim. How does your model handle that?'
    ], example: [
      "I'd model it with five tables: bills, bill items, payments, insurance claims, and claim items.",
      'A bill belongs to one patient visit and has many bill items. Each bill item is a medicine, a lab test, or a service, with a price and a quantity. A bill can have many payments, because a patient might pay part in cash and part by card. An insurance claim is linked to one bill and has claim items with the approved amount.',
      "I'd add an index on the visit ID and on the bill status, because cashiers search for unpaid bills all day.",
      'We use a transaction, so the payment and the bill status are saved together. I would also use a unique payment reference, so the same payment cannot be saved twice.',
      'For monthly reports, we read from a replica to protect the main database.',
      'We never delete billing data; we mark items as cancelled and keep an audit table with who changed what and when.'
    ] }
  ],

  talk321: null
});
