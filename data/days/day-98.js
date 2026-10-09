E90.registerDay({
  day: 98,
  titleId: 'Menjelaskan Hal Teknis dengan Sederhana',
  goal: 'Menjelaskan database, API, authentication, dan downtime kepada orang non-teknis dengan analogi sehari-hari. Ukurannya: pendengar paham dampaknya, bukan hafal istilahnya.',

  learn: [
    {
      id: 'D98-S01',
      english: 'Think of the database as a big, organized filing cabinet.',
      pronunciation: 'thingk ov de dei-te-beis ez e big, or-ge-naizd fai-ling ke-bi-net',
      translation: 'Bayangkan database sebagai lemari arsip besar yang tertata rapi.',
      words: [['Think', 'bayangkan / pikirkan'], ['of', '(bagian dari "think of ... as": anggap ... sebagai)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['database', 'basis data / database'], ['as', 'sebagai'], ['a', 'sebuah (tidak diterjemahkan)'], ['big', 'besar'], ['organized', 'tertata rapi', 'organize'], ['filing', 'arsip / penyimpanan dokumen', 'file'], ['cabinet', 'lemari']],
      phrases: [['think of ... as ...', 'bayangkan ... sebagai ...'], ['filing cabinet', 'lemari arsip']],
      pattern: 'D98-P1'
    },
    {
      id: 'D98-S02',
      english: 'An API is like a waiter who takes your order to the kitchen.',
      pronunciation: 'en ei-pi-ai iz laik e wei-ter hu teiks yor or-der tu de ki-chen',
      translation: 'API itu seperti pelayan yang membawa pesanan Anda ke dapur.',
      words: [['An', 'sebuah (dipakai sebelum bunyi vokal)'], ['API', 'API: jalur resmi agar dua sistem bisa saling meminta dan mengirim data'], ['is', 'adalah', 'be'], ['like', 'seperti'], ['a', 'seorang (tidak diterjemahkan)'], ['waiter', 'pelayan'], ['who', 'yang (untuk orang)'], ['takes', 'membawa', 'take'], ['your', 'milik Anda'], ['order', 'pesanan'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['kitchen', 'dapur']],
      phrases: [['is like', 'seperti']],
      pattern: 'D98-P1'
    },
    {
      id: 'D98-S03',
      english: 'Authentication is like showing your ID card at the hospital entrance.',
      pronunciation: 'o-then-ti-kei-shen iz laik shou-ing yor ai-di kard et de hos-pi-tel en-trens',
      translation: 'Authentication itu seperti menunjukkan kartu identitas di pintu masuk rumah sakit.',
      words: [['Authentication', 'autentikasi: memastikan siapa pengguna'], ['is', 'adalah', 'be'], ['like', 'seperti'], ['showing', 'menunjukkan', 'show'], ['your', 'milik Anda'], ['ID', 'identitas'], ['card', 'kartu'], ['at', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['hospital', 'rumah sakit'], ['entrance', 'pintu masuk']],
      phrases: [['ID card', 'kartu identitas']],
      pattern: 'D98-P1'
    },
    {
      id: 'D98-S04',
      english: 'Downtime means the system is not available for a while.',
      pronunciation: 'daun-taim minz de sis-tem iz not e-vei-le-bel for e wail',
      translation: 'Downtime artinya sistem tidak bisa dipakai untuk sementara waktu.',
      words: [['Downtime', 'waktu saat sistem mati / tidak bisa dipakai'], ['means', 'berarti', 'mean'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['is', 'adalah / sedang', 'be'], ['not', 'tidak'], ['available', 'tersedia / bisa dipakai'], ['for', 'selama'], ['a', '(bagian dari "a while")'], ['while', 'sebentar / beberapa waktu']],
      phrases: [['for a while', 'untuk sementara waktu']],
      pattern: 'D98-P2'
    },
    {
      id: 'D98-S05',
      english: "In other words, doctors can't open patient records during that time.",
      pronunciation: 'in a-der werdz, dok-terz kent ou-pen pei-shent re-kerdz dyu-ring det taim',
      translation: 'Dengan kata lain, dokter tidak bisa membuka rekam medis pasien selama waktu itu.',
      words: [['In', '(bagian dari "in other words")'], ['other', 'lain'], ['words', 'kata', 'word'], ['doctors', 'dokter', 'doctor'], ["can't", 'tidak bisa (cannot)', 'can'], ['open', 'membuka'], ['patient', 'pasien'], ['records', 'catatan / rekam medis', 'record'], ['during', 'selama'], ['that', 'itu'], ['time', 'waktu']],
      phrases: [['in other words', 'dengan kata lain'], ['patient records', 'rekam medis pasien']],
      pattern: 'D98-P2'
    },
    {
      id: 'D98-S06',
      english: 'The important thing for you is that no data will be lost.',
      pronunciation: 'di im-por-tent thing for yu iz det nou dei-ta wil bi lost',
      translation: 'Hal yang penting bagi Anda adalah tidak ada data yang akan hilang.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['important', 'penting'], ['thing', 'hal'], ['for', 'bagi'], ['you', 'Anda'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['no', 'tidak ada'], ['data', 'data'], ['will', 'akan'], ['be', '(penanda bentuk pasif: akan di-/ter-)'], ['lost', 'hilang', 'lose']],
      phrases: [['the important thing for you is that', 'yang penting bagi Anda adalah']],
      pattern: 'D98-P3'
    },
    {
      id: 'D98-S07',
      english: 'Without going into too much detail, the server was overloaded.',
      pronunciation: 'wi-daut gou-ing in-tu tu mach di-teil, de ser-ver woz ou-ver-lou-did',
      translation: 'Tanpa masuk ke detail yang terlalu banyak, server-nya kelebihan beban.',
      words: [['Without', 'tanpa'], ['going', '(bagian dari "go into": masuk ke / membahas)', 'go'], ['into', 'ke dalam'], ['too', 'terlalu'], ['much', 'banyak'], ['detail', 'detail / rincian'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server (komputer yang menjalankan sistem)'], ['was', '(penanda keadaan lampau)', 'be'], ['overloaded', 'kelebihan beban', 'overload']],
      phrases: [['without going into too much detail', 'tanpa masuk terlalu detail']],
      pattern: 'D98-P3'
    },
    {
      id: 'D98-S08',
      english: 'Does that explanation work for you?',
      pronunciation: 'daz det eks-ple-nei-shen werk for yu',
      translation: 'Apakah penjelasan itu cukup jelas untuk Anda?',
      words: [['Does', '(penanda pertanyaan untuk dia/itu, tidak diterjemahkan)', 'do'], ['that', 'itu'], ['explanation', 'penjelasan'], ['work', 'berhasil / cocok'], ['for', 'untuk'], ['you', 'Anda']],
      phrases: [['work for you', 'cocok / cukup untuk Anda']],
      pattern: 'D98-P3'
    }
  ],

  // Review: menjelaskan dari sudut pandang user dan dasar keamanan dari Day 66 dan 75.
  review: [
    { ref: 'D75-S02' },
    { ref: 'D75-S03' },
    { ref: 'D75-S04' },
    { ref: 'D75-S05' },
    { ref: 'D66-S04' },
    { ref: 'D66-S05' },
    { ref: 'D75-S06' }
  ],

  patterns: [
    {
      id: 'D98-P1',
      formula: 'Think of + BENDA as + BENDA  ·  BENDA is like + BENDA',
      meaning: 'Use an everyday analogy.',
      examples: ['Think of the cache as a notebook on your desk. You check it before you go to the library.', 'Authorization is like a hospital badge. It decides which rooms you can enter.', 'A backup is like a copy of your medical file in another building.'],
      note: 'Analogi terbaik memakai hal yang sudah dikenal pendengar. Untuk staf rumah sakit: kartu identitas, lemari arsip, antrean, resep.'
    },
    {
      id: 'D98-P2',
      formula: 'BENDA means + KALIMAT  ·  In other words, + KALIMAT',
      meaning: 'Define a term, then say what it means in practice.',
      examples: ['An integration means two systems share data automatically.', 'In other words, the lab result appears in the doctor\'s screen without typing.', 'A timeout means the system waited too long for an answer.']
    },
    {
      id: 'D98-P3',
      formula: 'The important thing for you is that + KALIMAT  ·  Without going into too much detail, + KALIMAT',
      meaning: 'Skip the details and focus on what matters to the listener.',
      examples: ['The important thing for you is that patients can still register.', 'Without going into too much detail, one service stopped responding.', 'The important thing for you is that we fixed it and added a warning system.']
    }
  ],

  shadowing: ['D98-S02', 'D98-S03', 'D98-S05', 'D98-S06'],

  speaking: [
    { q: 'A new nurse asks, "What is a database?" Explain it with an analogy.', qId: 'Perawat baru bertanya, "Apa itu database?" Jelaskan dengan analogi.', hint: 'Think of the database as ... Each ... is like ... In other words, ...', example: 'Think of the database as a big, organized filing cabinet. Each patient has a folder, and each visit is a page in that folder. In other words, the system can find any patient\'s history in one second.', followUps: ['So where is this cabinet?', 'What happens if two people change the same folder?'] },
    { q: 'The hospital administrator asks, "What is an API, and why do we need one for the insurance system?"', qId: 'Administrator rumah sakit bertanya, "Apa itu API, dan kenapa kita perlu API untuk sistem asuransi?"', hint: 'An API is like ... For example, ... The important thing for you is that ...', example: "An API is like a waiter who takes your order to the kitchen. Our system sends a request, like 'Is this patient covered?', and the insurance system sends the answer back. The important thing for you is that staff don't need to call the insurance company for every patient.", followUps: ['Is it safe to send patient data that way?', 'What happens if the insurance system is down?'] },
    { q: 'Explain authentication and authorization to the registration staff.', qId: 'Jelaskan authentication dan authorization kepada staf pendaftaran.', hint: 'Authentication is like ... Authorization is like ... That is why ...', example: "Authentication is like showing your ID card at the hospital entrance. It proves who you are. Authorization is like your badge: it decides which rooms you can enter. That's why registration staff can't open the doctors' notes." },
    { q: 'EXPLAIN DOWNTIME: Tonight there will be two hours of planned downtime. Explain it to the head nurse: what it is, when, the impact, and what the nurses should do. Then answer the follow-up questions.', qId: 'JELASKAN DOWNTIME: Malam ini ada downtime terencana dua jam. Jelaskan kepada kepala perawat: apa itu, kapan, dampaknya, dan apa yang harus dilakukan perawat. Lalu jawab pertanyaan lanjutan.', hint: 'Downtime means ... It will happen ... In other words, ... The important thing for you is that ... During that time, please ...', outline: [
      'What: downtime in one simple sentence',
      'When: date, start time, and how long',
      'Impact: what nurses cannot do',
      'What to do: the backup plan (paper forms, phone numbers)',
      'Reassure: what is safe and who to call'
    ], followUps: [
      'Will we lose any patient data?',
      'What should we do if there is an emergency during that time?',
      'Why can\'t you do it without downtime?'
    ], example: [
      'Tonight we\'re updating the system to make it faster and safer. Downtime means the system is not available for a while.',
      'It will start at one in the morning and take about two hours. We chose that time because there are fewer patients.',
      "In other words, nurses can't open patient records or enter vital signs during that time.",
      "During those two hours, please use the paper forms we sent this afternoon. After the system is back, you can enter the data, and we'll have a team member on the ward to help.",
      "The important thing for you is that no data will be lost. If there's a problem, you can call the IT support number at any time."
    ] }
  ],

  talk321: { topic: 'Explain what an API is to someone who is not technical. Use one simple analogy and one real example from a hospital or an app you use.' }
});
