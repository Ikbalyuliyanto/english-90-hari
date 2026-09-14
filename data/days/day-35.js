E90.registerDay({
  day: 35,
  titleId: 'Daily Standup Dasar',
  goal: 'Menyampaikan standup singkat: kemarin, hari ini, dan blocker.',

  learn: [
    {
      id: 'D35-S01',
      english: 'Yesterday, I worked on the search feature.',
      pronunciation: 'yes-ter-dei, ai werkt on de serch fi-cher',
      translation: 'Kemarin saya mengerjakan fitur pencarian.',
      words: [['Yesterday', 'kemarin'], ['I', 'saya'], ['worked', 'mengerjakan (lampau, dalam "work on")', 'work'], ['on', '(bagian dari "work on")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['search', 'pencarian'], ['feature', 'fitur']],
      pattern: 'D35-P1'
    },
    {
      id: 'D35-S02',
      english: 'I also fixed a small bug.',
      pronunciation: 'ai ol-sou fikst e smol bag',
      translation: 'Saya juga memperbaiki bug kecil.',
      words: [['I', 'saya'], ['also', 'juga'], ['fixed', 'memperbaiki (lampau, -ed dibaca "t")', 'fix'], ['a', 'sebuah (tidak diterjemahkan)'], ['small', 'kecil'], ['bug', 'bug / kesalahan program']],
      pattern: 'D35-P1'
    },
    {
      id: 'D35-S03',
      english: "Today, I'm going to continue with the testing.",
      pronunciation: 'tu-dei, aim gou-ing tu ken-ti-nyu with de tes-ting',
      translation: 'Hari ini saya akan melanjutkan pengujiannya.',
      words: [['Today', 'hari ini'], ["I'm", 'saya (I am)', 'be'], ['going', 'akan (dalam "going to")', 'go'], ['to', '(bagian dari "going to")'], ['continue', 'melanjutkan'], ['with', '(bagian dari "continue with")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['testing', 'pengujian / testing', 'test']],
      phrases: [['continue with', 'melanjutkan']],
      pattern: 'D35-P2'
    },
    {
      id: 'D35-S04',
      english: "After that, I'll start the next task.",
      pronunciation: 'ef-ter det, ail start de nekst task',
      translation: 'Setelah itu, saya akan mulai tugas berikutnya.',
      words: [['After', 'setelah'], ['that', 'itu'], ["I'll", 'saya akan (I will)', 'will'], ['start', 'memulai'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['next', 'berikutnya'], ['task', 'tugas']],
      pattern: 'D35-P2'
    },
    {
      id: 'D35-S05',
      english: "I don't have any blockers.",
      pronunciation: 'ai dount hev e-ni blo-kerz',
      translation: 'Saya tidak punya hambatan.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['have', 'punya'], ['any', '(satu pun — dipakai di kalimat negatif)'], ['blockers', 'hambatan yang menghalangi pekerjaan', 'blocker']],
      phrases: [["don't have any", 'tidak punya ... sama sekali']],
      pattern: 'D35-P3'
    },
    {
      id: 'D35-S06',
      english: 'I have one blocker.',
      pronunciation: 'ai hev wan blo-ker',
      translation: 'Saya punya satu hambatan.',
      words: [['I', 'saya'], ['have', 'punya'], ['one', 'satu'], ['blocker', 'hambatan yang menghalangi pekerjaan']],
      pattern: 'D35-P3'
    },
    {
      id: 'D35-S07',
      english: "I'm waiting for access to the server.",
      pronunciation: 'aim wei-ting for ek-ses tu de ser-ver',
      translation: 'Saya sedang menunggu akses ke server.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['waiting', 'menunggu', 'wait'], ['for', '(bagian dari "wait for")'], ['access', 'akses / izin masuk'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server']],
      pattern: 'D35-P4'
    },
    {
      id: 'D35-S08',
      english: 'I need help with the test data.',
      pronunciation: 'ai nid help with de test dei-ta',
      translation: 'Saya butuh bantuan untuk data pengujiannya.',
      words: [['I', 'saya'], ['need', 'butuh'], ['help', 'bantuan'], ['with', 'untuk / dengan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['test', 'pengujian'], ['data', 'data']],
      phrases: [['test data', 'data untuk pengujian']],
      pattern: 'D28-P5'
    },
    {
      id: 'D35-S09',
      english: "That's it for me.",
      pronunciation: 'dets it for mi',
      translation: 'Sekian dari saya.',
      words: [["That's", 'itu (that is)', 'that'], ['it', '(bagian dari "that\'s it")'], ['for', 'untuk / dari'], ['me', 'saya (sebagai objek)']],
      phrases: [["that's it for me", 'sekian dari saya (menutup giliran bicara)']],
      pattern: 'D35-P5'
    },
    {
      id: 'D35-S10',
      english: 'Who wants to go next?',
      pronunciation: 'hu wonts tu gou nekst?',
      translation: 'Siapa yang mau giliran berikutnya?',
      words: [['Who', 'siapa'], ['wants', 'mau; -s karena "who"', 'want'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['go', 'maju / dapat giliran'], ['next', 'berikutnya']],
      phrases: [['go next', 'giliran berikutnya']]
    }
  ],

  review: [
    {
      id: 'D35-S11',
      english: "I didn't finish the testing yesterday.",
      pronunciation: 'ai di-dent fi-nish de tes-ting yes-ter-dei',
      translation: 'Kemarin saya belum menyelesaikan pengujiannya.',
      words: [['I', 'saya'], ["didn't", 'tidak (lampau) — did not', 'do'], ['finish', 'menyelesaikan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['testing', 'pengujian / testing', 'test'], ['yesterday', 'kemarin']],
      pattern: 'D17-P2'
    },
    {
      id: 'D35-S12',
      english: 'Could you give me access to the folder?',
      pronunciation: 'kud yu giv mi ek-ses tu de foul-der?',
      translation: 'Bisakah kamu memberi saya akses ke folder itu?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['give', 'memberi'], ['me', 'kepada saya'], ['access', 'akses'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['folder', 'folder']],
      pattern: 'D19-P2'
    },
    { ref: 'D34-S03' },
    { ref: 'D28-S13' },
    { ref: 'D18-S05' }
  ],

  patterns: [
    {
      id: 'D35-P1',
      formula: 'Yesterday, I + KATA KERJA lampau',
      meaning: 'Kemarin saya ...',
      examples: ['Yesterday, I finished the report.', 'Yesterday, I had a meeting with the client.', 'Yesterday, I fixed the payment bug.']
    },
    {
      id: 'D35-P2',
      formula: "Today, I'm going to / I'll + KATA KERJA",
      meaning: 'Hari ini saya akan ...',
      examples: ["Today, I'm going to test the new feature.", "Today, I'll work on the dashboard.", "Today, I'm going to review the design."]
    },
    {
      id: 'D35-P3',
      formula: "I have one blocker  ·  I don't have any blockers",
      meaning: 'Menyebut hambatan (atau tidak ada)',
      examples: ["I have one blocker: I can't log in to the system.", 'No blockers for me.', 'My blocker is the missing design.'],
      note: 'Blocker = hal yang menghalangi pekerjaanmu berjalan.'
    },
    {
      id: 'D35-P4',
      formula: "I'm waiting for + BENDA / ORANG",
      meaning: 'Saya sedang menunggu ...',
      examples: ["I'm waiting for the design.", "I'm waiting for approval from my manager.", "We're waiting for the client's reply."]
    },
    {
      id: 'D35-P5',
      formula: "Yesterday, ... → Today, ... → Blockers → That's it for me.",
      meaning: 'Struktur daily standup (30–60 detik)',
      examples: ['Yesterday, I worked on the login page.', "Today, I'm going to test it.", "I don't have any blockers. That's it for me."],
      note: 'Standup itu singkat: tidak perlu detail teknis panjang.'
    }
  ],

  shadowing: ['D35-S01', 'D35-S03', 'D35-S05', 'D35-S07'],

  speaking: [
    { q: 'What did you work on yesterday?', qId: 'Kemarin kamu mengerjakan apa?', hint: 'Yesterday, I worked on ... I also ...', example: 'Yesterday, I worked on the report page. I also joined a meeting with the design team.' },
    { q: 'What are you going to do today?', qId: 'Hari ini kamu akan mengerjakan apa?', hint: "Today, I'm going to ... After that, I'll ...", example: "Today, I'm going to finish the report page. After that, I'll start testing." },
    { q: 'Do you have any blockers?', qId: 'Ada hambatan?', hint: "I don't have any blockers. / I have one blocker: I'm waiting for ...", example: "I have one blocker. I'm waiting for access to the test server." },
    { q: 'MINI STANDUP: Give your full standup in about one minute — yesterday, today, and blockers.', qId: 'MINI STANDUP: Sampaikan standup lengkap sekitar satu menit — kemarin, hari ini, dan hambatan.', hint: "Yesterday, I ... Today, I'm going to ... I have / don't have ... That's it for me.", example: "Yesterday, I worked on the search feature and fixed a small bug. Today, I'm going to continue with the testing. I have one blocker: I'm waiting for access to the server. That's it for me.", timers: [1] }
  ],

  talk321: null
});
