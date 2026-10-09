E90.registerDay({
  day: 32,
  titleId: 'Tugas & Prioritas',
  goal: 'Menjelaskan tugas hari ini, mana yang paling penting, dan mana yang bisa ditunda.',

  learn: [
    {
      id: 'D32-S01',
      english: 'I have several tasks today.',
      pronunciation: 'ai hev sev-rel tasks tu-dei',
      translation: 'Hari ini saya punya beberapa tugas.',
      words: [['I', 'saya'], ['have', 'punya'], ['several', 'beberapa'], ['tasks', 'tugas (jamak)', 'task'], ['today', 'hari ini']]
    },
    {
      id: 'D32-S02',
      english: 'I have to finish this report first.',
      pronunciation: 'ai hef tu fi-nish dis ri-port ferst',
      translation: 'Saya harus menyelesaikan laporan ini dulu.',
      words: [['I', 'saya'], ['have', 'harus (dalam "have to", dibaca "hef")'], ['to', '(bagian dari "have to")'], ['finish', 'menyelesaikan'], ['this', 'ini'], ['report', 'laporan'], ['first', 'dulu / terlebih dahulu']],
      phrases: [['have to + kata kerja', 'harus ... (bukan "punya")']],
      pattern: 'D32-P1'
    },
    {
      id: 'D32-S03',
      english: 'My priority today is the login bug.',
      pronunciation: 'mai prai-o-re-ti tu-dei iz de lo-gin bag',
      translation: 'Prioritas saya hari ini adalah bug login.',
      words: [['My', 'milik saya'], ['priority', 'prioritas'], ['today', 'hari ini'], ['is', 'adalah', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['login', 'login / masuk ke akun'], ['bug', 'bug / kesalahan program']],
      pattern: 'D32-P2'
    },
    {
      id: 'D32-S04',
      english: 'My top priority is fixing this issue.',
      pronunciation: 'mai top prai-o-re-ti iz fik-sing dis i-shu',
      translation: 'Prioritas utama saya adalah memperbaiki masalah ini.',
      words: [['My', 'milik saya'], ['top', 'utama / teratas'], ['priority', 'prioritas'], ['is', 'adalah', 'be'], ['fixing', 'memperbaiki', 'fix'], ['this', 'ini'], ['issue', 'masalah / kendala']],
      phrases: [['top priority', 'prioritas utama']],
      pattern: 'D32-P2'
    },
    {
      id: 'D32-S05',
      english: 'This task is urgent.',
      pronunciation: 'dis task iz er-jent',
      translation: 'Tugas ini mendesak.',
      words: [['This', 'ini'], ['task', 'tugas'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['urgent', 'mendesak / harus segera']],
      pattern: 'D32-P3'
    },
    {
      id: 'D32-S06',
      english: 'This is more important.',
      pronunciation: 'dis iz mor im-por-tent',
      translation: 'Yang ini lebih penting.',
      words: [['This', 'ini / yang ini'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['more', 'lebih'], ['important', 'penting']],
      pattern: 'D32-P3'
    },
    {
      id: 'D32-S07',
      english: "Let's do this first.",
      pronunciation: 'lets du dis ferst',
      translation: 'Ayo kerjakan ini dulu.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['do', 'mengerjakan'], ['this', 'ini'], ['first', 'dulu / terlebih dahulu']],
      pattern: 'D32-P3'
    },
    {
      id: 'D32-S08',
      english: 'We can do that later.',
      pronunciation: 'wi ken du det lei-ter',
      translation: 'Itu bisa kita kerjakan nanti.',
      words: [['We', 'kita'], ['can', 'bisa'], ['do', 'mengerjakan'], ['that', 'itu'], ['later', 'nanti']],
      pattern: 'D32-P4'
    },
    {
      id: 'D32-S09',
      english: 'Which task should I do first?',
      pronunciation: 'wich task shud ai du ferst?',
      translation: 'Tugas mana yang sebaiknya saya kerjakan dulu?',
      words: [['Which', 'yang mana'], ['task', 'tugas'], ['should', 'sebaiknya'], ['I', 'saya'], ['do', 'mengerjakan'], ['first', 'dulu / terlebih dahulu']],
      pattern: 'D28-P3'
    },
    {
      id: 'D32-S10',
      english: "It's not urgent, so it can wait.",
      pronunciation: 'its not er-jent, sou it ken weit',
      translation: 'Itu tidak mendesak, jadi bisa ditunda.',
      words: [["It's", 'itu (it is)', 'be'], ['not', 'tidak'], ['urgent', 'mendesak'], ['so', 'jadi'], ['it', 'itu'], ['can', 'bisa'], ['wait', 'menunggu / ditunda']],
      phrases: [['it can wait', 'bisa ditunda / tidak perlu sekarang']],
      pattern: 'D32-P4'
    }
  ],

  review: [
    {
      id: 'D32-S11',
      english: 'I need to reply to some emails.',
      pronunciation: 'ai nid tu ri-plai tu sam i-meilz',
      translation: 'Saya perlu membalas beberapa email.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['reply', 'membalas'], ['to', '(bagian dari "reply to")'], ['some', 'beberapa'], ['emails', 'email (jamak)', 'email']],
      phrases: [['reply to', 'membalas (pesan/email)']],
      pattern: 'D11-P2'
    },
    {
      id: 'D32-S12',
      english: "I'm going to work on the report after lunch.",
      pronunciation: 'aim gou-ing tu werk on de ri-port ef-ter lanch',
      translation: 'Saya akan mengerjakan laporannya setelah makan siang.',
      words: [["I'm", 'saya (I am)', 'be'], ['going', 'akan (dalam "going to")', 'go'], ['to', '(bagian dari "going to")'], ['work', 'mengerjakan (dalam "work on")'], ['on', '(bagian dari "work on")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['report', 'laporan'], ['after', 'setelah'], ['lunch', 'makan siang']],
      pattern: 'D18-P1'
    },
    {
      id: 'D32-S13',
      english: 'I usually check my email first.',
      pronunciation: 'ai yu-zhu-e-li cek mai i-meil ferst',
      translation: 'Saya biasanya memeriksa email dulu.',
      words: [['I', 'saya'], ['usually', 'biasanya'], ['check', 'memeriksa'], ['my', 'milik saya'], ['email', 'email / surel'], ['first', 'dulu / pertama']],
      pattern: 'D21-P1'
    },
    { ref: 'D02-S08' },
    { ref: 'D16-S14' }
  ],

  patterns: [
    {
      id: 'D32-P1',
      formula: 'I have to + KATA KERJA',
      meaning: 'Saya harus ...',
      examples: ['I have to join a meeting at ten.', 'I have to send this today.', 'We have to fix it before Friday.'],
      note: '"have to" = harus, bukan "punya". Dalam percakapan dibaca cepat: "hef-tu". Bandingkan "need to" = perlu.'
    },
    {
      id: 'D32-P2',
      formula: 'My (top) priority is + BENDA / KATA KERJA-ing',
      meaning: 'Prioritas (utama) saya adalah ...',
      examples: ['My priority is the client demo.', 'My top priority is finishing the design.', "Today's priority is testing."]
    },
    {
      id: 'D32-P3',
      formula: "This is more important / urgent  ·  Let's do this first",
      meaning: 'Menentukan mana yang didahulukan',
      examples: ['This bug is more important.', 'The payment issue is urgent.', "Let's do the testing first."]
    },
    {
      id: 'D32-P4',
      formula: 'We can do that + later / tomorrow / next week',
      meaning: 'Itu bisa dikerjakan nanti',
      examples: ['We can do that tomorrow.', 'I can update the document next week.', 'It can wait until Monday.']
    }
  ],

  shadowing: ['D32-S02', 'D32-S04', 'D32-S07', 'D32-S08'],

  speaking: [
    { q: 'What are your priorities today?', qId: 'Apa prioritasmu hari ini?', hint: 'I have several tasks today. My top priority is ...', example: 'I have three tasks today. My top priority is fixing a bug in the login page.' },
    { q: 'Which task will you do first, and why?', qId: 'Tugas mana yang akan kamu kerjakan dulu, dan kenapa?', hint: "I'll do ... first because it's urgent / more important.", example: "I'll do the client report first because it's due today." },
    { q: 'Your manager gives you a new task, but you are busy. What do you say?', qId: 'Atasan memberimu tugas baru, tapi kamu sibuk. Kamu bilang apa?', hint: 'I have to finish ... first. Is it urgent? / Can it wait until ...?', example: 'Sure, but I have to finish this report first. Is it urgent, or can it wait until tomorrow?' },
    { q: 'What task can wait until next week?', qId: 'Tugas apa yang bisa ditunda sampai minggu depan?', hint: "... is not urgent, so it can wait. We can do that ...", example: "Updating the documentation is not urgent, so it can wait until next week." }
  ],

  talk321: null
});
