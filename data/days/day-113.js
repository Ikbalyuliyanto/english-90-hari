E90.registerDay({
  day: 113,
  titleId: 'Technical Interview: Backend & API',
  goal: 'Answer backend and API interview questions in clear English: resources and endpoints → validation → error codes → idempotency → security → long-running tasks → trade-offs. Explain the "why", not only the "what".',

  learn: [
    {
      id: 'D113-S01',
      english: "I'd design it as a REST API with resources for patients and appointments.",
      pronunciation: 'aid di-zain it ez e rest ei-pi-ai with ri-sor-siz for pei-shents en e-point-ments',
      translation: 'Saya akan merancangnya sebagai REST API dengan resource untuk pasien dan janji temu.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['design', 'merancang'], ['it', 'itu / sistem itu'], ['as', 'sebagai'], ['a', 'sebuah (tidak diterjemahkan)'], ['REST', 'REST: gaya API berbasis resource dan metode HTTP'], ['API', 'API: jalur resmi agar dua sistem bisa saling meminta dan mengirim data'], ['with', 'dengan'], ['resources', 'resource: data yang diakses lewat API (mis. pasien)', 'resource'], ['for', 'untuk'], ['patients', 'pasien', 'patient'], ['and', 'dan'], ['appointments', 'janji temu', 'appointment']],
      phrases: [["I'd design it as", 'saya akan merancangnya sebagai']],
      pattern: 'D113-P2'
    },
    {
      id: 'D113-S02',
      english: "The endpoint should be idempotent, so a retry doesn't create a duplicate.",
      pronunciation: 'di end-point shud bi ai-dem-pou-tent, sou e ri-trai da-zent kri-eit e dyu-pli-ket',
      translation: 'Endpoint-nya harus idempotent, supaya percobaan ulang tidak membuat data ganda.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['endpoint', 'endpoint: alamat URL tertentu di API'], ['should', 'seharusnya / harus'], ['be', 'bersifat'], ['idempotent', 'idempotent: dipanggil berkali-kali hasilnya tetap sama'], ['so', 'supaya'], ['a', 'sebuah (tidak diterjemahkan)'], ['retry', 'percobaan ulang'], ["doesn't", 'tidak (does not)', 'do'], ['create', 'membuat'], ['duplicate', 'duplikat / data ganda']],
      pattern: 'D113-P2'
    },
    {
      id: 'D113-S03',
      english: "I'd return a 409 error if the time slot is already taken.",
      pronunciation: 'aid ri-tern e for-ou-nain e-rer if de taim slot iz ol-re-di tei-ken',
      translation: 'Saya akan mengembalikan error 409 kalau slot waktunya sudah terisi.',
      words: [["I'd", 'saya akan (I would)', 'would'], ['return', 'mengembalikan'], ['a', 'sebuah (tidak diterjemahkan)'], ['409', '409 (kode HTTP: conflict / bentrok dengan data yang ada)'], ['error', 'kesalahan / error'], ['if', 'kalau'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['time', 'waktu'], ['slot', 'slot / jatah'], ['is', '(penanda keadaan)', 'be'], ['already', 'sudah'], ['taken', 'diambil / terisi', 'take']],
      phrases: [['time slot', 'slot waktu'], ['already taken', 'sudah terisi']],
      pattern: 'D113-P4'
    },
    {
      id: 'D113-S04',
      english: 'We version the API to avoid breaking existing clients.',
      pronunciation: 'wi ver-shen di ei-pi-ai tu e-void brei-king eg-zis-ting klai-ents',
      translation: 'Kami memberi versi pada API agar tidak merusak client yang sudah ada.',
      words: [['We', 'kami'], ['version', 'memberi versi'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['API', 'API: jalur resmi antarsistem'], ['to', '(penanda kata kerja: agar)'], ['avoid', 'menghindari'], ['breaking', 'merusak', 'break'], ['existing', 'yang sudah ada', 'exist'], ['clients', 'client: aplikasi yang memakai API', 'client']],
      phrases: [['breaking existing clients', 'membuat aplikasi yang sudah memakai API jadi rusak']],
      pattern: 'D113-P3'
    },
    {
      id: 'D113-S05',
      english: 'For long tasks, the API returns right away and processes the job in the background.',
      pronunciation: 'for long tasks, di ei-pi-ai ri-ternz rait e-wei en pro-se-siz de job in de bek-graund',
      translation: 'Untuk tugas yang lama, API langsung merespons dan memproses pekerjaannya di background.',
      words: [['For', 'untuk'], ['long', 'lama / panjang'], ['tasks', 'tugas', 'task'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['API', 'API: jalur resmi antarsistem'], ['returns', 'merespons / mengembalikan', 'return'], ['right', '(bagian dari "right away")'], ['away', '(bagian dari "right away": segera)'], ['and', 'dan'], ['processes', 'memproses', 'process'], ['job', 'pekerjaan / job'], ['in', 'di'], ['background', 'latar belakang (berjalan tanpa ditunggu user)']],
      phrases: [['right away', 'segera'], ['in the background', 'di belakang layar']],
      pattern: 'D113-P3'
    },
    {
      id: 'D113-S06',
      english: "We use pagination so the response doesn't get too big.",
      pronunciation: 'wi yuz pe-ji-nei-shen sou de ri-spons da-zent get tu big',
      translation: 'Kami memakai pagination agar respons tidak terlalu besar.',
      words: [['We', 'kami'], ['use', 'memakai'], ['pagination', 'pagination: membagi hasil menjadi beberapa halaman'], ['so', 'agar'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['response', 'respons / jawaban'], ["doesn't", 'tidak (does not)', 'do'], ['get', 'menjadi'], ['too', 'terlalu'], ['big', 'besar']],
      pattern: 'D113-P3'
    },
    {
      id: 'D113-S07',
      english: 'Every request is logged with a correlation ID.',
      pronunciation: 'ev-ri ri-kwest iz logd with e ko-re-lei-shen ai-di',
      translation: 'Setiap request dicatat di log dengan correlation ID.',
      words: [['Every', 'setiap'], ['request', 'permintaan / request'], ['is', '(penanda bentuk pasif: di-)', 'be'], ['logged', 'dicatat di log', 'log'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['correlation', 'korelasi / keterkaitan'], ['ID', 'nomor identitas / ID']],
      phrases: [['correlation ID', 'ID untuk melacak satu request di semua log']],
      pattern: 'D113-P4'
    },
    {
      id: 'D113-S08',
      english: 'The trade-off is between simplicity and flexibility.',
      pronunciation: 'de treid-of iz bi-twin sim-pli-se-ti en flek-si-bi-le-ti',
      translation: 'Trade-off-nya adalah antara kesederhanaan dan fleksibilitas.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['trade-off', 'trade-off: untung-rugi dari sebuah pilihan'], ['is', 'adalah', 'be'], ['between', 'antara'], ['simplicity', 'kesederhanaan', 'simple'], ['and', 'dan'], ['flexibility', 'fleksibilitas / keluwesan', 'flexible']],
      phrases: [['trade-off between ... and ...', 'untung-rugi antara ... dan ...']],
      pattern: 'D113-P4'
    }
  ],

  // Review: API, validasi, error handling, dan keamanan dari Day 63–81.
  review: [
    { ref: 'D63-S03' },
    { ref: 'D64-S04' },
    { ref: 'D64-S09' },
    { ref: 'D78-S01' },
    { ref: 'D79-S04' },
    { ref: 'D80-S08' },
    { ref: 'D81-S05' }
  ],

  patterns: [
    {
      id: 'D113-P1',
      formula: 'Resources → Endpoints → Validation → Errors → Security → Performance',
      meaning: 'A checklist for answering API design questions.',
      examples: ["I'd design it as a REST API with resources for patients and appointments.", "I'd return a 409 error if the time slot is already taken.", 'We check permissions on every request.', "We use pagination so the response doesn't get too big."],
      note: 'Di technical interview, sebut alasan di setiap keputusan: "..., so ...", "..., because ...". Jawaban tanpa alasan terdengar seperti hafalan.'
    },
    {
      id: 'D113-P2',
      formula: "I'd design it as + BENDA  ·  The endpoint should be + KATA SIFAT, so + KALIMAT",
      meaning: 'Propose a design and give the reason.',
      examples: ["I'd design it as two endpoints: one to create an order and one to check its status.", 'The endpoint should be idempotent, so the mobile app can retry safely.', "I'd design the lab result as a sub-resource of the lab order."]
    },
    {
      id: 'D113-P3',
      formula: 'For + BENDA, the API + KATA KERJA  ·  We use + BENDA so + KALIMAT',
      meaning: 'Explain how the API handles common problems.',
      examples: ['For large reports, the API returns a job ID, and the client checks the status later.', 'We use rate limiting so one client cannot overload the server.', 'We version the API to avoid breaking the mobile app.']
    },
    {
      id: 'D113-P4',
      formula: "I'd return a + KODE error if + KALIMAT  ·  The trade-off is between + BENDA and + BENDA",
      meaning: 'Talk about error codes and trade-offs.',
      examples: ["I'd return a 400 error if the birth date is in the future.", "I'd return a 403 error if a nurse tries to approve a prescription.", 'The trade-off is between consistency and speed.']
    }
  ],

  shadowing: ['D113-S01', 'D113-S02', 'D113-S03', 'D113-S05'],

  speaking: [
    { q: 'How would you design an API for booking clinic appointments?', qId: 'Resource → endpoint utama → validasi → error → keamanan. Beri alasan tiap keputusan.', hint: "I'd design it as ... with resources for ... To create ..., I'd use ... I'd return a ... error if ... Only ... can ...", example: "I'd design it as a REST API with resources for patients, doctors, and appointments. To book, the client sends a POST request to the appointments endpoint with the patient ID, the doctor ID, and the time slot. The backend validates the data and checks that the slot is free. I'd return a 409 error if the time slot is already taken. Patients can only see their own appointments.", followUps: ['How do you prevent two patients from booking the same slot at the same time?', 'How would the patient cancel an appointment?'] },
    { q: 'What is idempotency, and why does it matter in healthcare systems?', qId: 'Definisi sederhana + contoh nyata (pembayaran, order lab) + cara menerapkannya.', hint: 'An operation is idempotent if ... For example, ... It matters because ... We usually use ...', example: "An operation is idempotent if calling it many times has the same result as calling it once. For example, if the network fails and the app sends the same lab order twice, we should create only one order. It matters because a duplicate order can mean a patient gives blood twice, or pays twice. We usually use an idempotency key that the client sends with the request." },
    { q: 'An API needs to generate a monthly billing report that takes three minutes. How would you design it?', qId: 'Jangan buat request menunggu 3 menit. Jelaskan pola background job + status.', hint: "For long tasks, the API returns right away and ... The client can ... When it's done, ... The trade-off is ...", example: "For long tasks, the API returns right away and processes the job in the background. The first request returns a job ID with a 202 response. The client can check the status with that ID, or we send a notification when it's done. The trade-off is more complexity, but the user doesn't wait, and the request doesn't time out.", followUps: ['What happens if the server restarts while the report is being generated?'] },
    { q: 'BACKEND INTERVIEW ROUND: Explain how you would build the endpoint that creates a lab order, from the request to the response. Then answer the interviewer\'s follow-up questions one by one.', qId: 'Alur: request → auth → validasi → aturan bisnis → simpan → kirim ke lab → respons. Lalu jawab follow-up.', hint: "The client sends ... The request goes through ... First, it validates ... If ..., I'd return ... Then we save ... and ... The response ... Every request is logged ...", outline: [
      'Request: method, endpoint, body',
      'Security: authentication + who is allowed (doctors only)',
      'Validation: required fields and business rules',
      'Save: database + message to the lab (reliably)',
      'Response: status code and body',
      'Errors: which codes and when',
      'Observability: logs and correlation ID'
    ], followUps: [
      'How would you secure this endpoint?',
      'What happens if the lab system is down when the order is created?',
      'How do you avoid creating the same order twice?',
      'How would you test this endpoint?'
    ], example: [
      'The doctor\'s screen sends a POST request to the lab orders endpoint. The body has the patient ID, the list of tests, the urgency, and a short clinical note.',
      "The request goes through the authentication middleware first. Then we check authorization: only doctors can create lab orders, so I'd return a 403 error for other roles.",
      "Next, it validates the data: the patient must exist, the tests must be valid codes, and the urgency must be one of the allowed values. I'd return a 400 error with a clear message if something is wrong.",
      'If the data is valid, we save the order and an outgoing message in one transaction. A background job sends the message to the lab system, with retries. That way, the order is not lost even if the lab system is down.',
      'The API returns a 201 response with the order ID and the status "sent to lab" or "waiting". The endpoint should be idempotent, so the client sends an idempotency key, and a retry doesn\'t create a duplicate.',
      'Every request is logged with a correlation ID, so we can follow one order through the backend, the job, and the lab system.'
    ] }
  ],

  talk321: null
});
