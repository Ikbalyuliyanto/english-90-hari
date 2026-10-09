E90.registerDay({
  day: 112,
  titleId: 'Technical Interview: Project Deep Dive',
  goal: 'Survive a 5–8 minute project deep dive: overview → your role → architecture → hardest problem → decision and trade-off → result → what you would change. Be clear about what YOU did, and be honest about parts you did not own.',

  learn: [
    {
      id: 'D112-S01',
      english: "I'll give you the high-level picture first, then go deeper.",
      pronunciation: 'ail giv yu de hai-le-vel pik-cher ferst, den gou di-per',
      translation: 'Saya berikan gambaran besarnya dulu, lalu masuk lebih dalam.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['give', 'memberi'], ['you', 'Anda'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['high-level', 'garis besar / tingkat atas'], ['picture', 'gambaran'], ['first', 'terlebih dahulu'], ['then', 'lalu'], ['go', '(bagian dari "go deeper": masuk lebih dalam)'], ['deeper', 'lebih dalam', 'deep']],
      phrases: [['high-level picture', 'gambaran garis besar']],
      pattern: 'D112-P1'
    },
    {
      id: 'D112-S02',
      english: 'I owned the design of the integration layer.',
      pronunciation: 'ai ound de di-zain ov di in-te-grei-shen lei-er',
      translation: 'Saya yang bertanggung jawab penuh atas desain lapisan integrasi.',
      words: [['I', 'saya'], ['owned', 'memiliki / bertanggung jawab penuh atas (lampau)', 'own'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['design', 'desain / rancangan'], ['of', 'dari'], ['integration', 'integrasi / penghubungan antarsistem'], ['layer', 'lapisan']],
      phrases: [['own the design', 'bertanggung jawab penuh atas desain']],
      pattern: 'D112-P2'
    },
    {
      id: 'D112-S03',
      english: 'That decision was made by the team, but I proposed it.',
      pronunciation: 'det di-si-zhen woz meid bai de tim, bat ai pre-pouzd it',
      translation: 'Keputusan itu diambil oleh tim, tapi saya yang mengusulkannya.',
      words: [['That', 'itu'], ['decision', 'keputusan'], ['was', '(penanda bentuk pasif lampau: di-)', 'be'], ['made', 'dibuat / diambil', 'make'], ['by', 'oleh'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['team', 'tim'], ['but', 'tapi'], ['I', 'saya'], ['proposed', 'mengusulkan (lampau)', 'propose'], ['it', 'itu / keputusan itu']],
      phrases: [['a decision is made', 'keputusan diambil']],
      pattern: 'D112-P2'
    },
    {
      id: 'D112-S04',
      english: 'The hardest technical problem was keeping data consistent between systems.',
      pronunciation: 'de har-dest tek-ni-kel prob-lem woz ki-ping dei-ta ken-sis-tent bi-twin sis-temz',
      translation: 'Masalah teknis tersulitnya adalah menjaga data tetap konsisten antarsistem.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['hardest', 'tersulit', 'hard'], ['technical', 'teknis'], ['problem', 'masalah'], ['was', 'adalah (lampau)', 'be'], ['keeping', 'menjaga', 'keep'], ['data', 'data'], ['consistent', 'konsisten / sama di semua tempat'], ['between', 'antara'], ['systems', 'sistem', 'system']],
      phrases: [['keep data consistent', 'menjaga data tetap konsisten']],
      pattern: 'D112-P3'
    },
    {
      id: 'D112-S05',
      english: 'We solved it with an outbox table and retries.',
      pronunciation: 'wi solvd it with en aut-boks tei-bel en ri-traiz',
      translation: 'Kami menyelesaikannya dengan tabel outbox dan mekanisme retry.',
      words: [['We', 'kami'], ['solved', 'menyelesaikan (lampau)', 'solve'], ['it', 'itu / masalah itu'], ['with', 'dengan'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['outbox', 'outbox: tabel antrean pesan yang belum terkirim'], ['table', 'tabel'], ['and', 'dan'], ['retries', 'percobaan ulang / retry', 'retry']],
      pattern: 'D112-P3'
    },
    {
      id: 'D112-S06',
      english: 'We measured success by the number of manual corrections.',
      pronunciation: 'wi me-zherd sek-ses bai de nam-ber ov me-nyu-el ke-rek-shenz',
      translation: 'Kami mengukur keberhasilan dari jumlah koreksi manual.',
      words: [['We', 'kami'], ['measured', 'mengukur (lampau)', 'measure'], ['success', 'keberhasilan'], ['by', 'dengan / dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['number', 'jumlah'], ['of', 'dari'], ['manual', 'manual / dengan tangan'], ['corrections', 'koreksi / perbaikan', 'correction']],
      phrases: [['measure success by', 'mengukur keberhasilan dari']],
      pattern: 'D112-P4'
    },
    {
      id: 'D112-S07',
      english: 'If I could redesign it, I would add better monitoring from the start.',
      pronunciation: 'if ai kud ri-di-zain it, ai wud ed be-ter mo-ni-te-ring from de start',
      translation: 'Kalau bisa merancang ulang, saya akan menambahkan monitoring yang lebih baik sejak awal.',
      words: [['If', 'kalau / seandainya'], ['I', 'saya'], ['could', 'bisa (pengandaian)', 'can'], ['redesign', 'merancang ulang'], ['it', 'itu / sistem itu'], ['would', 'akan (pengandaian)', 'will'], ['add', 'menambahkan'], ['better', 'lebih baik', 'good'], ['monitoring', 'pemantauan / monitoring'], ['from', 'dari / sejak'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['start', 'awal']],
      phrases: [['from the start', 'sejak awal']],
      pattern: 'D112-P4'
    },
    {
      id: 'D112-S08',
      english: "I wasn't involved in that part, so I can only speak about my side.",
      pronunciation: 'ai wo-zent in-volvd in det part, sou ai ken oun-li spik e-baut mai said',
      translation: 'Saya tidak terlibat di bagian itu, jadi saya hanya bisa bicara tentang bagian saya.',
      words: [['I', 'saya'], ["wasn't", 'tidak (was not)', 'be'], ['involved', 'terlibat', 'involve'], ['in', 'di / dalam'], ['that', 'itu'], ['part', 'bagian'], ['so', 'jadi'], ['can', 'bisa'], ['only', 'hanya'], ['speak', 'bicara'], ['about', 'tentang'], ['my', 'milik saya'], ['side', 'sisi / bagian']],
      phrases: [['be involved in', 'terlibat dalam']],
      pattern: 'D112-P4'
    }
  ],

  // Review: arsitektur, keputusan, dan trade-off dari Day 76–90.
  review: [
    { ref: 'D76-S01' },
    { ref: 'D77-S05' },
    { ref: 'D83-S02' },
    { ref: 'D83-S03' },
    { ref: 'D85-S02' },
    { ref: 'D90-S01' },
    { ref: 'D90-S02' }
  ],

  patterns: [
    {
      id: 'D112-P1',
      formula: 'Overview → My role → Architecture → Hardest problem → Decision & trade-off → Result → What I would change',
      meaning: 'A structure for a project deep dive.',
      examples: ["I'll give you the high-level picture first, then go deeper.", 'I owned the design of the integration layer.', 'The hardest technical problem was keeping data consistent between systems.', 'If I could redesign it, I would add better monitoring from the start.'],
      note: 'Interviewer akan terus menggali ("Why?", "What else did you consider?", "How did you know?"). Bagian yang bukan kamu kerjakan: katakan terus terang, jangan mengaku-aku.'
    },
    {
      id: 'D112-P2',
      formula: 'I owned + BENDA  ·  That decision was made by + SIAPA, but I + KATA KERJA-ed',
      meaning: 'Make your personal contribution clear.',
      examples: ['I owned the billing API and its tests.', 'That decision was made by the architect, but I built the first prototype.', 'I owned the migration from the old lab system.']
    },
    {
      id: 'D112-P3',
      formula: 'The hardest technical problem was + KATA KERJA-ing  ·  We solved it with + BENDA',
      meaning: 'Describe the hardest problem and the solution.',
      examples: ['The hardest technical problem was handling duplicate lab messages.', 'We solved it with an idempotency key on every message.', 'The hardest technical problem was migrating ten years of records without downtime.']
    },
    {
      id: 'D112-P4',
      formula: "We measured success by + BENDA  ·  If I could redesign it, I would + KATA KERJA  ·  I wasn't involved in that part, so + KALIMAT",
      meaning: 'Show results, reflect, and be honest about your scope.',
      examples: ['We measured success by the average time from lab order to result.', 'If I could redesign it, I would use events from the beginning.', "I wasn't involved in that part, so I don't know the exact numbers."]
    }
  ],

  shadowing: ['D112-S01', 'D112-S02', 'D112-S04', 'D112-S07'],

  speaking: [
    { q: 'Walk me through the architecture of a project you worked on.', qId: 'Mulai dari gambaran besar, lalu komponen utama dan satu alur. Maks 2 menit.', hint: "I'll give you the high-level picture first ... It consists of ... Let me zoom in on ... The request goes through ...", example: "I'll give you the high-level picture first, then go deeper. It's a hospital information system with a web frontend, one main backend, a PostgreSQL database, and an integration layer that talks to the lab machines, the pharmacy, and the insurance system. Let me zoom in on the lab flow: the doctor creates an order, the integration layer sends it to the lab system, and the result comes back as a message that we save in the patient's record." },
    { q: 'What exactly was your role in that project?', qId: 'Pisahkan jelas: apa yang KAMU kerjakan vs yang dikerjakan tim.', hint: "I owned ... I was also responsible for ... That decision was made by ..., but I ... I wasn't involved in ...", example: "I owned the design of the integration layer and built most of it. I was also responsible for the monitoring of the lab messages. The decision to use a message queue was made by the team, but I proposed it and built the prototype. I wasn't involved in the frontend, so I can only speak about my side.", followUps: ['What did the other engineers work on?', 'What was the most important thing you personally built?'] },
    { q: 'What was the hardest technical problem in that project, and how did you solve it?', qId: 'Masalah → kenapa sulit → opsi yang dipertimbangkan → solusi → hasil.', hint: 'The hardest technical problem was ... It was hard because ... We considered ... We solved it with ... As a result, ...', example: "The hardest technical problem was keeping data consistent between systems. Sometimes we saved a lab order, but the message to the lab system was lost. We considered distributed transactions, but they were too complex for our team. We solved it with an outbox table and retries: we save the order and the message in one transaction, and a job sends the message later. As a result, lost orders went from a few per week to zero.", followUps: ['Why not use distributed transactions?', 'What happens if the same message is sent twice?'] },
    { q: 'PROJECT DEEP DIVE: Take the interviewer through one project for 5–8 minutes. Then open the follow-up questions one by one. They will dig into your decisions, your role, and the details.', qId: 'Pakai kerangka, bukan script. Jujur soal bagian yang bukan milikmu. Timer opsional.', hint: "I'll give you the high-level picture first ... I owned ... It consists of ... The hardest technical problem was ... We considered ... We solved it with ... We measured success by ... If I could redesign it ...", outline: [
      'Overview: what the system does, users, scale',
      'My role: what you owned vs. the team',
      'Architecture: main components + one flow',
      'Hardest problem: why it was hard',
      'Decision: options considered + the trade-off',
      'Result: how you measured success, numbers',
      'Reflection: what you would change'
    ], followUps: [
      'Why did you choose a message queue instead of calling the lab API directly?',
      'How did you know the outbox solution really worked in production?',
      'What was the biggest mistake you made in this project?',
      'How would this design handle ten hospitals instead of one?',
      'What would you do differently if you started today?'
    ], example: [
      "I'll give you the high-level picture first, then go deeper. The project is a hospital information system for a four-hundred-bed hospital. About three hundred staff use it every day, and it processes around two thousand lab orders per day.",
      "I owned the design of the integration layer, which connects our system with the lab machines, the pharmacy, and the insurance system. I built most of it with one other engineer. I wasn't involved in the frontend, so I'll focus on the backend side.",
      'It consists of a web frontend, one main backend application, a PostgreSQL database, a message queue, and the integration layer. Let me zoom in on the lab flow. A doctor creates a lab order, the backend saves it, and the integration layer sends it to the lab system. When the result is ready, the lab system sends a message back, and we attach it to the patient\'s record.',
      'The hardest technical problem was keeping data consistent between systems. Sometimes the order was saved, but the message never reached the lab, so patients waited for results that were never processed.',
      'We considered distributed transactions, but they were too complex for our team and our lab vendor didn\'t support them. That decision was made by the team, but I proposed the alternative: an outbox table. We save the order and the outgoing message in the same database transaction, and a background job sends it with retries. The trade-off is a small delay of a few seconds, which is fine for lab orders.',
      'We measured success by the number of manual corrections the lab staff made. It went from about fifteen per week to almost zero, and nobody lost a lab order after the change.',
      'If I could redesign it, I would add better monitoring from the start. For the first month, we didn\'t have a dashboard for stuck messages, so we only noticed problems when nurses called us.'
    ], timers: [5, 8] }
  ],

  talk321: { topic: 'Explain the hardest technical problem in one of your projects: why it was hard, what options you considered, and how you solved it.' }
});
