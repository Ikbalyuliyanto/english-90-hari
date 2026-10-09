E90.registerDay({
  day: 117,
  titleId: 'Diskusi System Design',
  goal: 'Run an 8–10 minute system design discussion for "Design a patient appointment system": ask clarifying questions → requirements → estimate → high-level design → deep dive (double booking, reminders) → bottlenecks → wrap up. Treat it as a conversation, not a lecture.',

  learn: [
    {
      id: 'D117-S01',
      english: "Before designing, I'd like to clarify the scope.",
      pronunciation: 'bi-for di-zai-ning, aid laik tu kle-re-fai de skoup',
      translation: 'Sebelum merancang, saya ingin memperjelas cakupannya.',
      words: [['Before', 'sebelum'], ['designing', 'merancang', 'design'], ["I'd", 'saya ingin (I would)', 'would'], ['like', 'suka / ingin (dengan would)'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['clarify', 'memperjelas'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['scope', 'cakupan / scope']],
      pattern: 'D117-P2'
    },
    {
      id: 'D117-S02',
      english: 'Should the system support multiple clinics and time zones?',
      pronunciation: 'shud de sis-tem se-port mal-ti-pel kli-niks en taim zounz',
      translation: 'Apakah sistem perlu mendukung banyak klinik dan zona waktu?',
      words: [['Should', 'apakah perlu / seharusnya'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['support', 'mendukung'], ['multiple', 'banyak / lebih dari satu'], ['clinics', 'klinik', 'clinic'], ['and', 'dan'], ['time', 'waktu'], ['zones', 'zona', 'zone']],
      phrases: [['time zones', 'zona waktu']],
      pattern: 'D117-P2'
    },
    {
      id: 'D117-S03',
      english: 'How many patients do we expect at peak time?',
      pronunciation: 'hau me-ni pei-shents du wi eks-pekt et pik taim',
      translation: 'Berapa banyak pasien yang kita perkirakan saat jam sibuk?',
      words: [['How', '(bagian dari "how many": berapa banyak)'], ['many', 'banyak'], ['patients', 'pasien', 'patient'], ['do', '(penanda pertanyaan, tidak diterjemahkan)'], ['we', 'kita'], ['expect', 'memperkirakan / mengharapkan'], ['at', 'pada / saat'], ['peak', 'puncak'], ['time', 'waktu']],
      phrases: [['peak time', 'jam sibuk / waktu puncak']],
      pattern: 'D117-P2'
    },
    {
      id: 'D117-S04',
      english: 'The core flow is search, book, confirm, and remind.',
      pronunciation: 'de kor flou iz serch, buk, kon-ferm, en ri-maind',
      translation: 'Alur intinya adalah cari, pesan, konfirmasi, dan ingatkan.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['core', 'inti / utama'], ['flow', 'alur'], ['is', 'adalah', 'be'], ['search', 'mencari'], ['book', 'memesan'], ['confirm', 'mengonfirmasi'], ['and', 'dan'], ['remind', 'mengingatkan']],
      phrases: [['core flow', 'alur utama']],
      pattern: 'D117-P3'
    },
    {
      id: 'D117-S05',
      english: 'To prevent double booking, we lock the slot for a few minutes.',
      pronunciation: 'tu pri-vent da-bel bu-king, wi lok de slot for e fyu mi-nits',
      translation: 'Untuk mencegah pemesanan ganda, kami mengunci slotnya selama beberapa menit.',
      words: [['To', '(penanda kata kerja: untuk)'], ['prevent', 'mencegah'], ['double', 'ganda'], ['booking', 'pemesanan', 'book'], ['we', 'kami'], ['lock', 'mengunci'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['slot', 'slot / jatah waktu'], ['for', 'selama'], ['a', '(bagian dari "a few")'], ['few', 'beberapa'], ['minutes', 'menit', 'minute']],
      phrases: [['double booking', 'dua orang memesan slot yang sama']],
      pattern: 'D117-P3'
    },
    {
      id: 'D117-S06',
      english: 'Reminders are sent by a separate service through a queue.',
      pronunciation: 'ri-main-derz ar sent bai e se-pe-ret ser-vis thru e kyu',
      translation: 'Pengingat dikirim oleh layanan terpisah melalui antrean.',
      words: [['Reminders', 'pengingat', 'reminder'], ['are', '(penanda bentuk pasif: di-)', 'be'], ['sent', 'dikirim', 'send'], ['by', 'oleh'], ['a', 'sebuah (tidak diterjemahkan)'], ['separate', 'terpisah'], ['service', 'layanan / service'], ['through', 'melalui'], ['queue', 'antrean / queue']],
      pattern: 'D117-P3'
    },
    {
      id: 'D117-S07',
      english: 'If traffic grows, the first bottleneck will probably be the search.',
      pronunciation: 'if tre-fik grouz, de ferst bot-el-nek wil pro-be-bli bi de serch',
      translation: 'Kalau traffic bertambah, bottleneck pertama kemungkinan besar ada di pencarian.',
      words: [['If', 'kalau'], ['traffic', 'lalu lintas request / traffic'], ['grows', 'bertambah / tumbuh', 'grow'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['first', 'pertama'], ['bottleneck', 'bottleneck: bagian yang paling memperlambat sistem'], ['will', 'akan'], ['probably', 'kemungkinan besar'], ['be', 'menjadi / berada'], ['search', 'pencarian']],
      pattern: 'D117-P4'
    },
    {
      id: 'D117-S08',
      english: "Given more time, I'd go deeper into the data model.",
      pronunciation: 'gi-ven mor taim, aid gou di-per in-tu de dei-ta mo-del',
      translation: 'Kalau ada waktu lebih, saya akan membahas model datanya lebih dalam.',
      words: [['Given', 'dengan / kalau diberi', 'give'], ['more', 'lebih banyak'], ['time', 'waktu'], ["I'd", 'saya akan (I would)', 'would'], ['go', '(bagian dari "go deeper into": membahas lebih dalam)'], ['deeper', 'lebih dalam', 'deep'], ['into', 'ke dalam'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['model', 'model / rancangan']],
      phrases: [['given more time', 'kalau ada waktu lebih']],
      pattern: 'D117-P4'
    }
  ],

  // Review: dasar system design, API, dan aturan bisnis dari Day 76–116.
  review: [
    { ref: 'D76-S07' },
    { ref: 'D80-S05' },
    { ref: 'D90-S03' },
    { ref: 'D113-S03' },
    { ref: 'D116-S01' },
    { ref: 'D116-S03' },
    { ref: 'D116-S08' }
  ],

  patterns: [
    {
      id: 'D117-P1',
      formula: 'Clarify → Requirements → Estimate → High-level design → Deep dive → Bottlenecks → Wrap up',
      meaning: 'A complete system design discussion.',
      examples: ["Before designing, I'd like to clarify the scope.", 'The core flow is search, book, confirm, and remind.', 'To prevent double booking, we lock the slot for a few minutes.', "Given more time, I'd go deeper into the data model."],
      note: 'Sering cek dengan interviewer: "Does this make sense so far?", "Should I go deeper into this part?". Mereka mungkin ingin mengarahkan diskusi ke bagian tertentu.'
    },
    {
      id: 'D117-P2',
      formula: "Before designing, I'd like to clarify + BENDA  ·  Should the system support + BENDA?  ·  How many + BENDA do we expect?",
      meaning: 'Ask clarifying questions.',
      examples: ['Should the system support online payments?', 'How many doctors do we expect per clinic?', "Before designing, I'd like to clarify who the main users are."]
    },
    {
      id: 'D117-P3',
      formula: 'The core flow is + ...  ·  To prevent + BENDA, we + KATA KERJA',
      meaning: 'Describe the main flow and how you handle a key problem.',
      examples: ['The core flow is order, collect sample, test, and report.', 'To prevent lost reminders, we store them in a queue.', 'To prevent slow searches, we pre-calculate the free slots.']
    },
    {
      id: 'D117-P4',
      formula: "If + KALIMAT, the first bottleneck will probably be + BENDA  ·  Given more time, I'd go deeper into + BENDA",
      meaning: 'Discuss bottlenecks and wrap up.',
      examples: ['If more clinics join, the first bottleneck will probably be the database writes.', "Given more time, I'd go deeper into security and privacy.", "To wrap up, I'd start with one service and one database, and split it later."]
    }
  ],

  shadowing: ['D117-S01', 'D117-S03', 'D117-S05', 'D117-S07'],

  speaking: [
    { q: 'The interviewer says, "Design a patient appointment system." Ask your clarifying questions first.', qId: 'Jangan langsung menggambar. Tanyakan 5–6 hal: pengguna, fitur, skala, klinik, zona waktu, pembayaran, pengingat.', hint: "Before designing, I'd like to clarify the scope. Who are the users? Should the system support ...? How many ... do we expect ...? Do we need ...?", example: "Before designing, I'd like to clarify the scope. Who are the main users: patients, doctors, and clinic staff? Should the system support multiple clinics and time zones? How many patients do we expect at peak time? Do we need online payments? And should we send reminders by SMS, email, or both?", followUps: ['Let\'s say one hundred clinics in three countries, and about fifty thousand bookings per day. What do you estimate at peak?'] },
    { q: 'Describe the core flow and the main components of the appointment system.', qId: 'Alur inti lalu komponen: client, load balancer, API, database, queue, reminder service.', hint: 'The core flow is ... The patient app talks to ... The appointment service ... The data is stored in ... Reminders are sent by ...', example: 'The core flow is search, book, confirm, and remind. The patient app talks to the API through a load balancer. The appointment service handles search and booking, and it stores doctors, schedules, and appointments in a relational database. After booking, it publishes an event, and reminders are sent by a separate service through a queue.', followUps: ['Why a relational database here?', 'Why is the reminder service separate?'] },
    { q: 'How do you prevent two patients from booking the same slot, and how do you make sure reminders are not lost?', qId: 'Deep dive dua masalah: double booking (lock/constraint) dan pengingat (queue, retry).', hint: 'To prevent double booking, we ... The database also ... Reminders are sent by ... If it fails, ...', example: "To prevent double booking, we lock the slot for a few minutes while the patient confirms. The database also has a unique constraint on doctor and time, so even if two requests arrive together, only one succeeds, and the other gets a 409 error. Reminders are sent by a separate service through a queue. If sending fails, the message stays in the queue and is retried." },
    { q: 'SYSTEM DESIGN DISCUSSION: "Design a patient appointment system." Lead an 8–10 minute discussion: clarify, list requirements, estimate, give the high-level design, deep dive into double booking and reminders, discuss bottlenecks, and wrap up. Then open the interviewer\'s follow-up questions one by one.', qId: 'Simulasi penuh. Pakai kerangka; contoh lengkap disembunyikan. Timer opsional.', hint: "Before designing, I'd like to clarify ... Let's start with the functional requirements ... Let me estimate the scale ... The core flow is ... To prevent double booking ... Reminders are sent by ... If traffic grows, the first bottleneck ... Given more time ...", outline: [
      'Clarify: users, clinics, countries, payments, reminders',
      'Requirements: functional + non-functional',
      'Estimate: bookings per day and peak requests',
      'High-level design: client → load balancer → API → database, queue, reminder service',
      'Data model: doctors, schedules, slots, appointments',
      'Deep dive 1: double booking',
      'Deep dive 2: reliable reminders',
      'Bottlenecks and scaling: search, database, peak hours',
      'Wrap up: summary + what you would explore with more time'
    ], followUps: [
      'How would you handle a doctor who cancels a whole day of appointments?',
      'Where would you use caching, and what is the risk?',
      'How do you handle time zones correctly?',
      'What happens if the reminder service is down for one hour?',
      'How would you protect patient data?',
      'What would you monitor after launch?'
    ], example: [
      "Before designing, I'd like to clarify the scope. The users are patients, doctors, and clinic staff. Let's say one hundred clinics in three countries, online booking and cancelling, SMS and email reminders, and no online payment in the first version.",
      "Let's start with the functional requirements: search free slots, book, cancel, reschedule, and receive reminders. Doctors manage their schedules. Non-functional requirements include high availability during clinic hours, privacy of patient data, and search results in under one second.",
      "Let me estimate the scale: about fifty thousand bookings per day. Most bookings happen in the morning, so at peak maybe twenty booking requests per second, and many more search requests, maybe ten times more.",
      'For the high-level design, patients use a web or mobile app. A load balancer spreads the traffic across several API instances. The appointment service handles schedules and bookings and stores them in a relational database with a standby replica. After a booking, it publishes an event. Reminders are sent by a separate service through a queue.',
      'For the data model, a clinic has many doctors, a doctor has schedules, a schedule is split into slots, and an appointment links one patient to one slot. All times are stored in UTC and shown in the clinic\'s time zone.',
      'The core flow is search, book, confirm, and remind. To prevent double booking, we lock the slot for a few minutes while the patient confirms, and the database has a unique constraint on the slot, so only one booking can succeed.',
      'For reminders, the reminder service reads upcoming appointments and puts messages in the queue. If the SMS provider fails, messages are retried, and we alert the team if the queue grows.',
      'If traffic grows, the first bottleneck will probably be the search, because every patient checks many slots. We could cache free slots for a short time, but then a slot might look free when it isn\'t, so the final booking step always checks the database.',
      "To wrap up: a simple design with one appointment service, one relational database, and a separate reminder service with a queue. Given more time, I'd go deeper into the data model and security, like audit logs for who viewed each appointment."
    ], timers: [8, 10] }
  ],

  talk321: null
});
