E90.registerDay({
  day: 96,
  titleId: 'Berkomunikasi dengan Manager',
  goal: 'Latihan percakapan 1-on-1 dengan manager: memberi update, menyampaikan kekhawatiran soal beban kerja, meminta keputusan, meminta feedback, dan membicarakan perkembangan karier.',

  learn: [
    {
      id: 'D96-S01',
      english: 'Could we talk about my workload this week?',
      pronunciation: 'kud wi tok e-baut mai werk-loud dis wik',
      translation: 'Bisakah kita membahas beban kerja saya minggu ini?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['we', 'kita'], ['talk', 'berbicara / membahas'], ['about', 'tentang'], ['my', 'milik saya'], ['workload', 'beban kerja'], ['this', 'ini'], ['week', 'minggu']],
      phrases: [['talk about', 'membahas']],
      pattern: 'D96-P1'
    },
    {
      id: 'D96-S02',
      english: "I'd like your advice on how to prioritize these tasks.",
      pronunciation: 'aid laik yor ed-vais on hau tu prai-o-re-taiz diz tasks',
      translation: 'Saya ingin saran Anda tentang cara memprioritaskan tugas-tugas ini.',
      words: [["I'd", 'saya ingin (I would)', 'would'], ['like', 'suka / ingin (dengan would)'], ['your', 'milik Anda'], ['advice', 'saran / nasihat'], ['on', 'tentang'], ['how', 'bagaimana / cara'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['prioritize', 'memprioritaskan'], ['these', 'ini (jamak)'], ['tasks', 'tugas', 'task']],
      phrases: [["I'd like your advice on", 'saya ingin saran Anda tentang'], ['how to', 'cara untuk']],
      pattern: 'D96-P1'
    },
    {
      id: 'D96-S03',
      english: "I'm worried that we can't finish the pharmacy module on time.",
      pronunciation: 'aim wa-rid det wi kent fi-nish de far-me-si mo-jul on taim',
      translation: 'Saya khawatir kita tidak bisa menyelesaikan modul farmasi tepat waktu.',
      words: [["I'm", 'saya (I am)', 'be'], ['worried', 'khawatir'], ['that', 'bahwa'], ['we', 'kita / kami'], ["can't", 'tidak bisa (cannot)', 'can'], ['finish', 'menyelesaikan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['pharmacy', 'farmasi / apotek'], ['module', 'modul (bagian dari sistem)'], ['on', '(bagian dari "on time")'], ['time', 'waktu']],
      phrases: [["I'm worried that", 'saya khawatir bahwa'], ['on time', 'tepat waktu']],
      pattern: 'D96-P2'
    },
    {
      id: 'D96-S04',
      english: 'Here is where I need your decision.',
      pronunciation: 'hir iz wer ai nid yor di-si-zhen',
      translation: 'Di bagian inilah saya butuh keputusan Anda.',
      words: [['Here', 'di sini'], ['is', 'adalah', 'be'], ['where', 'tempat / bagian di mana'], ['I', 'saya'], ['need', 'butuh'], ['your', 'milik Anda'], ['decision', 'keputusan']],
      phrases: [['here is where', 'di sinilah / bagian inilah']],
      pattern: 'D96-P2'
    },
    {
      id: 'D96-S05',
      english: 'Is there anything I can do better?',
      pronunciation: 'iz der e-ni-thing ai ken du be-ter',
      translation: 'Apakah ada yang bisa saya lakukan dengan lebih baik?',
      words: [['Is', '(penanda pertanyaan)', 'be'], ['there', '(bagian dari "is there": apakah ada)'], ['anything', 'sesuatu / apa pun'], ['I', 'saya'], ['can', 'bisa'], ['do', 'melakukan'], ['better', 'lebih baik', 'good']],
      phrases: [['is there anything', 'apakah ada sesuatu']],
      pattern: 'D96-P3'
    },
    {
      id: 'D96-S06',
      english: 'Could you give me some feedback on my last presentation?',
      pronunciation: 'kud yu giv mi sam fid-bek on mai last pre-zen-tei-shen',
      translation: 'Bisakah Anda memberi saya masukan tentang presentasi terakhir saya?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'Anda'], ['give', 'memberi'], ['me', 'saya (sebagai objek)'], ['some', 'beberapa / sedikit'], ['feedback', 'masukan / feedback'], ['on', 'tentang'], ['my', 'milik saya'], ['last', 'terakhir'], ['presentation', 'presentasi']],
      phrases: [['give feedback on', 'memberi masukan tentang']],
      pattern: 'D96-P3'
    },
    {
      id: 'D96-S07',
      english: "I'd like to take on more responsibility.",
      pronunciation: 'aid laik tu teik on mor ri-spon-se-bi-le-ti',
      translation: 'Saya ingin mengambil tanggung jawab yang lebih besar.',
      words: [["I'd", 'saya ingin (I would)', 'would'], ['like', 'suka / ingin (dengan would)'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['take', 'mengambil'], ['on', '(bagian dari "take on": mengambil / menerima tugas)'], ['more', 'lebih banyak'], ['responsibility', 'tanggung jawab']],
      phrases: [['take on', 'mengambil (tugas / tanggung jawab)']],
      pattern: 'D96-P4'
    },
    {
      id: 'D96-S08',
      english: "I'd like to grow in system design.",
      pronunciation: 'aid laik tu grou in sis-tem di-zain',
      translation: 'Saya ingin berkembang di bidang system design.',
      words: [["I'd", 'saya ingin (I would)', 'would'], ['like', 'suka / ingin (dengan would)'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['grow', 'tumbuh / berkembang'], ['in', 'di / dalam bidang'], ['system', 'sistem'], ['design', 'desain / rancangan']],
      phrases: [['grow in', 'berkembang di bidang'], ['system design', 'perancangan sistem']],
      pattern: 'D96-P4'
    }
  ],

  // Review: update, kekhawatiran, dan feedback dari Phase 2.
  review: [
    { ref: 'D36-S01' },
    { ref: 'D46-S01' },
    { ref: 'D46-S08' },
    { ref: 'D42-S04' },
    { ref: 'D60-S04' },
    { ref: 'D58-S02' },
    { ref: 'D54-S01' }
  ],

  patterns: [
    {
      id: 'D96-P1',
      formula: "Could we talk about + BENDA?  ·  I'd like your advice on + BENDA",
      meaning: 'Start a topic with your manager politely.',
      examples: ['Could we talk about the release date?', "I'd like your advice on how to handle the client's new request.", 'Could we talk about my goals for next year?']
    },
    {
      id: 'D96-P2',
      formula: "I'm worried that + KALIMAT  ·  Here is where I need your decision",
      meaning: 'Raise a concern and ask for a decision.',
      examples: ["I'm worried that the QA team won't have enough time.", 'Here is where I need your decision: do we delay the release or remove the report?', "I'm worried that the integration with the insurance system is still unstable."],
      note: 'Pola yang baik: masalah → dampak → pilihan → minta keputusan. Manager lebih mudah memutuskan kalau kamu membawa pilihan.'
    },
    {
      id: 'D96-P3',
      formula: 'Is there anything I can do better?  ·  Could you give me some feedback on + BENDA?',
      meaning: 'Ask for feedback.',
      examples: ['Could you give me some feedback on my code reviews?', 'Is there anything I can do better in meetings?', 'Could you give me some feedback on how I handled the incident?']
    },
    {
      id: 'D96-P4',
      formula: "I'd like to take on more + BENDA  ·  I'd like to grow in + BENDA",
      meaning: 'Talk about career growth.',
      examples: ["I'd like to take on more leadership tasks.", "I'd like to grow in cloud architecture.", "I'd like to take on more responsibility for the integrations."]
    }
  ],

  shadowing: ['D96-S01', 'D96-S03', 'D96-S04', 'D96-S07'],

  speaking: [
    { q: 'Your manager asks, "How are things going?" Give a short update on your work.', qId: 'Manager bertanya, "Bagaimana pekerjaanmu?" Beri update singkat.', hint: "Here's a quick update ... So far, I've ... I'm currently ... Overall, ...", example: "Things are going well. Here's a quick update: so far, I've finished the prescription API. I'm currently working on the stock check for the pharmacy. Overall, we're slightly behind schedule, but it's manageable.", followUps: ['Is anything blocking you?', 'When do you think it will be ready?'] },
    { q: 'Tell your manager that your workload is too high. Explain the impact and ask for a decision.', qId: 'Sampaikan kepada manager bahwa beban kerjamu terlalu tinggi. Jelaskan dampaknya dan minta keputusan.', hint: "Could we talk about my workload? ... I'm worried that ... If I ..., then ... Here is where I need your decision: ...", example: "Could we talk about my workload this week? I have the pharmacy module and two urgent bugs from the lab team. I'm worried that we can't finish the pharmacy module on time. Here is where I need your decision: should I focus on the bugs first, or should someone else take them?", followUps: ['Which task do you think is more important?', 'Who could help you with the bugs?', 'What happens if we move the deadline by one week?'] },
    { q: 'Ask your manager for feedback, and tell them how you would like to grow.', qId: 'Minta feedback dari manager, lalu sampaikan bagaimana kamu ingin berkembang.', hint: "Could you give me some feedback on ...? Is there anything I can do better? I'd like to take on more ... I'd like to grow in ...", example: "Could you give me some feedback on my last presentation? Is there anything I can do better? Also, I'd like to take on more responsibility. In the next six months, I'd like to grow in system design.", followUps: ['What would you like to learn first?', 'How can I support you with that?'] },
    { q: 'ONE-ON-ONE ROLE-PLAY: You have a 1-on-1 with your manager. Give an update, raise one concern, ask for one decision, and talk about one career goal.', qId: 'ROLE-PLAY 1-ON-1: Kamu 1-on-1 dengan manager. Beri update, sampaikan satu kekhawatiran, minta satu keputusan, dan bicarakan satu tujuan karier.', hint: "Thanks for your time. Here's a quick update ... I'm worried that ... Here is where I need your decision ... Also, I'd like to ...", outline: [
      'Update: what is done, in progress, and next',
      'Concern: the problem and its impact',
      'Options: two possible ways to handle it',
      'Decision: ask clearly what you need from the manager',
      'Growth: one goal and one request for support'
    ], followUps: [
      'What do you recommend?',
      'Why do you think this is the best option?',
      'What kind of project would help you grow?'
    ], example: [
      "Thanks for your time. Here's a quick update. I've finished the prescription API, and I'm currently working on the stock check for the pharmacy. The next step is testing with the pharmacists on Friday.",
      "I'm worried that we can't finish the pharmacy module on time. The lab team also sent two urgent bugs, and they take most of my day.",
      'I see two options. We can move the pharmacy release by one week, or someone else can take the lab bugs.',
      "Here is where I need your decision. I'd prefer to keep the release date and ask another developer to help with the bugs, but I'd like to hear what you think.",
      "Also, I'd like to take on more responsibility. I'd like to grow in system design, so maybe I could join the design discussions for the new inpatient module."
    ] }
  ],

  talk321: null
});
