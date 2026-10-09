E90.registerDay({
  day: 116,
  titleId: 'Bahasa Inggris System Design: Dasar',
  goal: 'Learn the basic language of system design interviews: functional and non-functional requirements, estimating scale, load balancers, horizontal scaling, single points of failure, high availability, and "start simple".',

  learn: [
    {
      id: 'D116-S01',
      english: "Let's start with the functional requirements.",
      pronunciation: 'lets start with de fank-she-nel ri-kwai-er-ments',
      translation: 'Mari kita mulai dari kebutuhan fungsional.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['start', 'mulai'], ['with', 'dengan / dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['functional', 'fungsional: apa yang harus bisa dilakukan sistem'], ['requirements', 'kebutuhan / persyaratan', 'requirement']],
      phrases: [['functional requirements', 'kebutuhan fungsional (fitur yang harus ada)']],
      pattern: 'D116-P2'
    },
    {
      id: 'D116-S02',
      english: 'Non-functional requirements include availability, security, and response time.',
      pronunciation: 'non-fank-she-nel ri-kwai-er-ments in-klud e-vei-le-bi-le-ti, si-kyu-re-ti, en ri-spons taim',
      translation: 'Kebutuhan non-fungsional mencakup ketersediaan, keamanan, dan waktu respons.',
      words: [['Non-functional', 'non-fungsional: seberapa baik sistem bekerja (cepat, aman, stabil)'], ['requirements', 'kebutuhan / persyaratan', 'requirement'], ['include', 'mencakup'], ['availability', 'ketersediaan: sistem bisa dipakai kapan saja'], ['security', 'keamanan'], ['and', 'dan'], ['response', 'respons'], ['time', 'waktu']],
      phrases: [['response time', 'waktu respons']],
      pattern: 'D116-P2'
    },
    {
      id: 'D116-S03',
      english: 'Let me estimate the scale: about five thousand appointments per day.',
      pronunciation: 'let mi es-ti-meit de skeil: e-baut faiv thau-zend e-point-ments per dei',
      translation: 'Saya perkirakan skalanya: sekitar lima ribu janji temu per hari.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['estimate', 'memperkirakan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['scale', 'skala / besarnya beban'], ['about', 'sekitar'], ['five', 'lima'], ['thousand', 'ribu'], ['appointments', 'janji temu', 'appointment'], ['per', 'per'], ['day', 'hari']],
      phrases: [['estimate the scale', 'memperkirakan besarnya beban sistem']],
      pattern: 'D116-P3'
    },
    {
      id: 'D116-S04',
      english: 'A load balancer spreads the traffic across several servers.',
      pronunciation: 'e loud be-len-ser spredz de tre-fik e-kros se-ve-rel ser-verz',
      translation: 'Load balancer membagi lalu lintas ke beberapa server.',
      words: [['A', 'sebuah (tidak diterjemahkan)'], ['load', 'beban'], ['balancer', 'penyeimbang'], ['spreads', 'menyebarkan / membagi', 'spread'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['traffic', 'lalu lintas request / traffic'], ['across', 'ke seluruh / ke beberapa'], ['several', 'beberapa'], ['servers', 'server', 'server']],
      phrases: [['load balancer', 'komponen pembagi request ke beberapa server']],
      pattern: 'D116-P4'
    },
    {
      id: 'D116-S05',
      english: 'We can scale horizontally by adding more instances.',
      pronunciation: 'wi ken skeil ho-ri-zon-te-li bai e-ding mor in-sten-siz',
      translation: 'Kita bisa scaling secara horizontal dengan menambah instance.',
      words: [['We', 'kita'], ['can', 'bisa'], ['scale', 'menambah kapasitas / scaling'], ['horizontally', 'secara horizontal (menambah jumlah mesin)'], ['by', 'dengan cara'], ['adding', 'menambahkan', 'add'], ['more', 'lebih banyak'], ['instances', 'instance: satu salinan aplikasi yang berjalan', 'instance']],
      phrases: [['scale horizontally', 'menambah jumlah mesin (bukan memperbesar satu mesin)']],
      pattern: 'D116-P4'
    },
    {
      id: 'D116-S06',
      english: 'A single point of failure is a part that can bring down the whole system.',
      pronunciation: 'e sing-gel point ov feil-yer iz e part det ken bring daun de houl sis-tem',
      translation: 'Single point of failure adalah bagian yang bisa membuat seluruh sistem mati.',
      words: [['A', 'sebuah (tidak diterjemahkan)'], ['single', 'tunggal'], ['point', 'titik'], ['of', 'dari'], ['failure', 'kegagalan'], ['is', 'adalah', 'be'], ['part', 'bagian'], ['that', 'yang'], ['can', 'bisa'], ['bring', '(bagian dari "bring down": menjatuhkan / mematikan)'], ['down', '(bagian dari "bring down")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['whole', 'seluruh'], ['system', 'sistem']],
      phrases: [['single point of failure', 'satu bagian yang kalau rusak membuat semuanya berhenti'], ['bring down', 'membuat mati / jatuh']],
      pattern: 'D116-P4'
    },
    {
      id: 'D116-S07',
      english: "For high availability, we'd run the database with a standby replica.",
      pronunciation: 'for hai e-vei-le-bi-le-ti, wid ran de dei-te-beis with e stend-bai rep-li-ka',
      translation: 'Untuk ketersediaan tinggi, kami akan menjalankan database dengan replica cadangan.',
      words: [['For', 'untuk'], ['high', 'tinggi'], ['availability', 'ketersediaan: sistem bisa dipakai kapan saja'], ["we'd", 'kami akan (we would)', 'would'], ['run', 'menjalankan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['database', 'basis data / database'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['standby', 'cadangan yang siap mengambil alih'], ['replica', 'replica: salinan database yang terus diperbarui']],
      phrases: [['high availability', 'ketersediaan tinggi (jarang mati)']],
      pattern: 'D116-P4'
    },
    {
      id: 'D116-S08',
      english: "I'd start simple and add complexity only when we need it.",
      pronunciation: 'aid start sim-pel en ed kem-plek-se-ti oun-li wen wi nid it',
      translation: 'Saya akan mulai dengan sederhana dan menambah kerumitan hanya saat benar-benar perlu.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['start', 'mulai'], ['simple', 'sederhana'], ['and', 'dan'], ['add', 'menambahkan'], ['complexity', 'kerumitan / kompleksitas'], ['only', 'hanya'], ['when', 'ketika / saat'], ['we', 'kita'], ['need', 'butuh'], ['it', 'itu']],
      phrases: [['start simple', 'mulai dari yang sederhana']],
      pattern: 'D116-P4'
    }
  ],

  // Review: arsitektur, beban, dan trade-off dari Day 74–85.
  review: [
    { ref: 'D74-S10' },
    { ref: 'D76-S02' },
    { ref: 'D76-S07' },
    { ref: 'D82-S09' },
    { ref: 'D83-S08' },
    { ref: 'D84-S08' },
    { ref: 'D85-S01' }
  ],

  patterns: [
    {
      id: 'D116-P1',
      formula: 'Requirements → Scale → High-level design → Data → Bottlenecks → Trade-offs',
      meaning: 'The usual order of a system design discussion.',
      examples: ["Let's start with the functional requirements.", 'Let me estimate the scale: about five thousand appointments per day.', 'A load balancer spreads the traffic across several servers.', "I'd start simple and add complexity only when we need it."],
      note: 'System design interview bukan tes jawaban benar. Yang dinilai: kamu bertanya dulu, memperkirakan skala, menjelaskan pilihan, dan tahu trade-off-nya.'
    },
    {
      id: 'D116-P2',
      formula: "Let's start with + BENDA  ·  BENDA include + BENDA",
      meaning: 'List requirements clearly.',
      examples: ["Let's start with what patients and doctors need to do.", 'Functional requirements include booking, cancelling, and reminders.', 'Non-functional requirements include privacy and 99.9 percent uptime.']
    },
    {
      id: 'D116-P3',
      formula: 'Let me estimate the scale: + ANGKA + BENDA per + WAKTU',
      meaning: 'Estimate numbers out loud.',
      examples: ['Let me estimate the scale: about two thousand lab results per day.', "That's roughly one request per second on average, maybe ten at peak.", 'Let me estimate the storage: one million records per year.'],
      note: 'Angka kasar sudah cukup. Katakan asumsinya: "Assuming each clinic has ...".'
    },
    {
      id: 'D116-P4',
      formula: 'BENDA + KATA KERJA ...  ·  For + BENDA, we\'d + KATA KERJA  ·  I\'d start simple and add + BENDA only when + KALIMAT',
      meaning: 'Name components and explain what they do.',
      examples: ['A cache stores frequent results so the database does less work.', "For high availability, we'd run at least two instances of each service.", "I'd start simple and add a message queue only when the reminders slow down the main system."]
    }
  ],

  shadowing: ['D116-S01', 'D116-S03', 'D116-S05', 'D116-S08'],

  speaking: [
    { q: 'What questions would you ask before designing a new system?', qId: 'Sebut 4–5 pertanyaan: pengguna, fitur utama, skala, kebutuhan non-fungsional, batasan.', hint: "Let's start with the functional requirements ... Who are the users? ... Let me estimate the scale ... Non-functional requirements include ... Are there any constraints ...?", example: "Let's start with the functional requirements: who are the users, and what do they need to do? Then I'd ask about the scale, for example how many users and requests per day. Non-functional requirements include availability, security, and response time, so I'd ask how important each one is. Finally, I'd ask about constraints, like budget, deadline, or existing systems." },
    { q: 'Explain the difference between vertical and horizontal scaling. When would you use each one?', qId: 'Definisi sederhana + contoh + kapan dipakai + kekurangannya.', hint: 'Vertical scaling means ... Horizontal scaling means ... We can scale horizontally by ... I\'d start with ... because ...', example: "Vertical scaling means using a bigger machine, with more CPU or memory. Horizontal scaling means adding more machines. We can scale horizontally by adding more instances behind a load balancer. I'd start with vertical scaling because it's simple, but horizontal scaling is better for high availability and very large traffic.", followUps: ['Why is horizontal scaling harder for databases?', 'What does the load balancer do if one server is down?'] },
    { q: 'What is a single point of failure? Give an example in a hospital system and explain how to fix it.', qId: 'Definisi + contoh nyata di rumah sakit + solusi (redundansi, replica, fallback).', hint: 'A single point of failure is ... For example, ... If it goes down, ... To fix it, ...', example: "A single point of failure is a part that can bring down the whole system. For example, if the hospital has only one database server and it goes down, doctors can't open any patient records. To fix it, we'd run the database with a standby replica that can take over automatically, and we'd test the failover regularly." },
    { q: 'SYSTEM DESIGN BASICS: Explain the high-level design of a simple patient portal where patients log in and see their lab results. Cover requirements, scale, components, and one trade-off.', qId: 'Latihan mini sebelum Day 117. Pakai urutan: requirements → scale → komponen → data → trade-off.', hint: "Let's start with the functional requirements ... Non-functional requirements include ... Let me estimate the scale ... A load balancer ... For high availability ... I'd start simple ...", outline: [
      'Functional: log in, see results, download a PDF',
      'Non-functional: privacy, availability, response time',
      'Scale: number of patients and results per day',
      'Components: client, load balancer, API servers, database, cache',
      'Data: where results come from',
      'Trade-off: one decision and its cost'
    ], followUps: [
      'How would you keep lab results private?',
      'What happens when thousands of patients log in at the same time on Monday morning?',
      'Would you use a cache here? What is the risk?'
    ], example: [
      "Let's start with the functional requirements. Patients need to log in, see their lab results, and download them as a PDF. Non-functional requirements include privacy, availability, and fast response times.",
      "Let me estimate the scale: about fifty thousand patients, and maybe two thousand new results per day. Traffic is low most of the time, but higher in the morning.",
      'For the design, the patient uses a web or mobile app. A load balancer spreads the traffic across two API servers. The API reads the results from the main database, and the lab integration writes new results into it.',
      "For high availability, we'd run the database with a standby replica. Everything uses HTTPS, and patients can only see their own results.",
      "One trade-off: we could cache results to make the portal faster, but then a corrected result might show old data. I'd start simple without a cache and add it only when we need it."
    ] }
  ],

  talk321: { topic: 'Explain the basic parts of a web system to a junior developer: the client, the load balancer, the servers, the database, and the cache.' }
});
