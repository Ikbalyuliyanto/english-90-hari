E90.registerDay({
  day: 105,
  titleId: 'Checkpoint Lingkungan Kerja Internasional',
  goal: 'Simulasi 8–10 menit bekerja di tim internasional: perkenalan, proyek, update ke manager, menjelaskan ke stakeholder non-teknis, meeting dan ketidaksetujuan, salah paham, presentasi singkat, dan Q&A. Latih per bagian dulu, lalu gabungkan.',
  checkpoint: true,

  // Sedikit kalimat baru: menyesuaikan pesan untuk audiens yang berbeda.
  learn: [
    {
      id: 'D105-S01',
      english: 'Let me walk you through a typical week in my job.',
      pronunciation: 'let mi wok yu thru e ti-pi-kel wik in mai job',
      translation: 'Saya ceritakan seperti apa minggu yang biasa dalam pekerjaan saya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['walk', '(bagian dari "walk ... through": menjelaskan langkah demi langkah)'], ['you', 'Anda'], ['through', 'melalui'], ['a', 'sebuah (tidak diterjemahkan)'], ['typical', 'biasa / umum'], ['week', 'minggu'], ['in', 'dalam'], ['my', 'milik saya'], ['job', 'pekerjaan']],
      phrases: [['walk you through', 'menjelaskan kepada Anda langkah demi langkah'], ['a typical week', 'minggu yang biasa']],
      pattern: 'D105-P1'
    },
    {
      id: 'D105-S02',
      english: 'On the people side, the main challenge is communication.',
      pronunciation: 'on de pi-pel said, de mein che-lenj iz ke-myu-ni-kei-shen',
      translation: 'Dari sisi manusianya, tantangan utamanya adalah komunikasi.',
      words: [['On', '(bagian dari "on the ... side": dari sisi ...)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['people', 'orang / manusia'], ['side', 'sisi'], ['main', 'utama'], ['challenge', 'tantangan'], ['is', 'adalah', 'be'], ['communication', 'komunikasi']],
      phrases: [['on the people side', 'dari sisi manusianya']],
      pattern: 'D105-P3'
    },
    {
      id: 'D105-S03',
      english: 'I learned to adjust my message for each audience.',
      pronunciation: 'ai lernd tu e-jast mai me-sij for ich o-di-ens',
      translation: 'Saya belajar menyesuaikan pesan saya untuk setiap audiens.',
      words: [['I', 'saya'], ['learned', 'belajar (lampau)', 'learn'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['adjust', 'menyesuaikan'], ['my', 'milik saya'], ['message', 'pesan'], ['for', 'untuk'], ['each', 'setiap'], ['audience', 'audiens / pendengar']],
      phrases: [['adjust my message', 'menyesuaikan pesan saya']],
      pattern: 'D105-P2'
    },
    {
      id: 'D105-S04',
      english: 'With doctors, I keep it short and focus on patient safety.',
      pronunciation: 'with dok-terz, ai kip it short en fou-kes on pei-shent seif-ti',
      translation: 'Dengan dokter, saya bicara singkat dan fokus pada keselamatan pasien.',
      words: [['With', 'dengan'], ['doctors', 'dokter', 'doctor'], ['I', 'saya'], ['keep', 'menjaga / membuat tetap'], ['it', 'itu (pembicaraan)'], ['short', 'singkat'], ['and', 'dan'], ['focus', 'fokus'], ['on', 'pada'], ['patient', 'pasien'], ['safety', 'keselamatan']],
      phrases: [['keep it short', 'bicara singkat'], ['focus on', 'fokus pada']],
      pattern: 'D105-P2'
    },
    {
      id: 'D105-S05',
      english: 'With engineers, I talk more about the design and the trade-offs.',
      pronunciation: 'with en-ji-nirz, ai tok mor e-baut de di-zain en de treid-ofs',
      translation: 'Dengan engineer, saya lebih banyak membahas desain dan trade-off-nya.',
      words: [['With', 'dengan'], ['engineers', 'insinyur / engineer', 'engineer'], ['I', 'saya'], ['talk', 'berbicara / membahas'], ['more', 'lebih banyak'], ['about', 'tentang'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['design', 'desain / rancangan'], ['and', 'dan'], ['trade-offs', 'trade-off: untung-rugi dari sebuah pilihan', 'trade-off']],
      pattern: 'D105-P2'
    },
    {
      id: 'D105-S06',
      english: 'Overall, I feel confident working in an international team.',
      pronunciation: 'ou-ve-rol, ai fil kon-fi-dent wer-king in en in-ter-ne-she-nel tim',
      translation: 'Secara keseluruhan, saya merasa percaya diri bekerja di tim internasional.',
      words: [['Overall', 'secara keseluruhan'], ['I', 'saya'], ['feel', 'merasa'], ['confident', 'percaya diri'], ['working', 'bekerja', 'work'], ['in', 'di / dalam'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['international', 'internasional'], ['team', 'tim']],
      phrases: [['feel confident + KATA KERJA-ing', 'merasa percaya diri melakukan ...']],
      pattern: 'D105-P3'
    }
  ],

  // Review aktif Day 91–104: satu kalimat inti dari setiap situasi kerja.
  review: [
    { ref: 'D91-S01' },
    { ref: 'D93-S01' },
    { ref: 'D94-S06' },
    { ref: 'D96-S03' },
    { ref: 'D97-S03' },
    { ref: 'D98-S02' },
    { ref: 'D99-S01' },
    { ref: 'D100-S03' },
    { ref: 'D101-S02' },
    { ref: 'D102-S03' },
    { ref: 'D104-S04' }
  ],

  patterns: [
    {
      id: 'D105-P1',
      formula: 'Introduce → Project → Manager update → Stakeholder → Meeting → Disagreement → Misunderstanding → Presentation → Q&A',
      meaning: 'The situations in an international workplace simulation.',
      examples: ["I'm a software engineer with five years of experience.", "I'm worried that we can't finish the pharmacy module on time.", 'In simple terms, the new feature saves nurses about ten minutes per shift.', "I don't want to guess, so I'll check and send it to you today."],
      note: 'Tidak perlu sempurna. Targetnya: bisa terus berbicara, memakai struktur, dan pulih saat lupa kata (pakai kata lain atau jelaskan dengan contoh).'
    },
    {
      id: 'D105-P2',
      formula: 'With + SIAPA, I + KATA KERJA  ·  I learned to adjust my message for + SIAPA',
      meaning: 'Explain how you communicate with different people.',
      examples: ['With the finance team, I focus on cost and dates.', 'With nurses, I show the screen instead of explaining.', 'I learned to adjust my message for non-technical people.']
    },
    {
      id: 'D105-P3',
      formula: 'On the + BENDA side, + KALIMAT  ·  Overall, I feel confident + KATA KERJA-ing',
      meaning: 'Reflect on your work and your progress.',
      examples: ['On the technical side, the main challenge is the old lab software.', 'Overall, I feel confident leading short meetings.', 'On the people side, I still need to practice disagreeing politely.']
    }
  ],

  shadowing: ['D105-S01', 'D105-S03', 'D105-S04', 'D105-S06'],

  speaking: [
    { q: 'Part 1: Introduce yourself to a new international team, then explain your current project in about two minutes.', qId: 'Bagian 1: Perkenalkan dirimu kepada tim internasional baru, lalu jelaskan proyekmu sekarang sekitar dua menit.', hint: "I'm a ... with ... years of experience. Currently, I ... Before that, ... My main strength is ... The system covers ... My part of the project is ...", example: "Hi everyone, I'm a software engineer with five years of experience. Currently, I work on a hospital information system. The system covers the whole patient journey, from registration to billing. My part of the project is the outpatient module, especially the backend and the API. My main strength is solving problems step by step." },
    { q: 'Part 2: In a 1-on-1, give your manager an update, raise one concern, and ask for a decision.', qId: 'Bagian 2: Dalam 1-on-1, beri update kepada manager, sampaikan satu kekhawatiran, dan minta keputusan.', hint: "Here's a quick update ... I'm worried that ... Here is where I need your decision ...", example: "Here's a quick update. The prescription API is done, and I'm testing the stock check. I'm worried that we can't finish the pharmacy module on time, because of two urgent lab bugs. Here is where I need your decision: should we move the release by a week, or can someone help with the bugs?", followUps: ['What do you recommend?'] },
    { q: 'Part 3: Explain a planned downtime or a new feature to a non-technical stakeholder, using simple words and one analogy.', qId: 'Bagian 3: Jelaskan downtime terencana atau fitur baru kepada stakeholder non-teknis dengan kata sederhana dan satu analogi.', hint: 'Let me explain what this means for ... In simple terms, ... It is like ... The important thing for you is that ...', example: 'Let me explain what this means for your staff. Tonight, the system will be off for two hours. In simple terms, it is like closing a shop to fix the shelves. Nurses will use paper forms during that time. The important thing for you is that no data will be lost.', followUps: ['What if there is an emergency during that time?'] },
    { q: 'Part 4: In a meeting, disagree professionally with a plan to skip testing. Then handle a misunderstanding: someone thought you said the feature was ready.', qId: 'Bagian 4: Dalam meeting, tidak setuju secara profesional dengan rencana melewati testing. Lalu tangani salah paham: seseorang mengira kamu bilang fiturnya sudah siap.', hint: "I understand why ..., but I have a concern. Based on ..., What if we ...? ... I think there's been a misunderstanding. When I said ..., I meant ...", example: "I understand why we want to release on Monday, but I have a concern. Based on the test results, I don't think we're ready yet. What if we released it to one ward first? ... Also, I think there's been a misunderstanding. When I said \"done\", I meant the code was finished, but not tested. I'll send a written summary so we're on the same page.", followUps: ['If we still release on Monday, will you support it?'] },
    { q: 'Part 5: Give a two-minute technical presentation (Context → Problem → Solution → Result → Next Step), then answer two questions. Do not invent information.', qId: 'Bagian 5: Presentasi teknis dua menit (Context → Problem → Solution → Result → Next Step), lalu jawab dua pertanyaan. Jangan mengarang informasi.', hint: "Some context first ... The problem we wanted to solve ... Our solution ... After ..., ... Our next step ... Thanks for the question ... I don't want to guess, so ...", example: "Some context first: our lab processes about two thousand samples a day. The problem we wanted to solve was that patients didn't know when their results were ready. Our solution was a simple queue screen connected to the lab machines. After two months, questions at the counter went down a lot. Our next step is to send an SMS when results are ready.", followUps: ['How much did the queue screen cost?', 'Does it work for emergency patients too?'] },
    { q: 'FINAL INTERNATIONAL WORKPLACE SIMULATION: Imagine your first month in an international team. Speak for 8–10 minutes without reading: introduce yourself, explain your project, update your manager, explain something to a non-technical stakeholder, take part in a meeting and disagree politely, handle a misunderstanding, give a short presentation, and answer questions. Timer optional.', qId: 'SIMULASI AKHIR LINGKUNGAN KERJA INTERNASIONAL: Bayangkan bulan pertamamu di tim internasional. Bicara 8–10 menit tanpa membaca, mencakup semua situasi. Buka follow-up question satu per satu. Timer opsional. Jangan hafalkan contoh.', hint: "Let me introduce myself ... The system covers ... Here's a quick update ... In simple terms ... Building on what ... said ... I understand why ..., but ... I think there's been a misunderstanding ... Some context first ... Thanks for the question ... Overall, ...", outline: [
      'Introduction: Present → Past → Strength → Goal',
      'Project: purpose, users, modules, your part',
      'Manager: update → concern → decision',
      'Stakeholder: impact in simple words + one analogy',
      'Meeting: input from your side + polite disagreement + alternative',
      'Misunderstanding: check → clarify → prevent',
      'Presentation: context → problem → solution → result → next step',
      'Q&A: thank → check → answer → "I\'ll check" if unsure',
      'Reflection: how you adjust your message for each audience'
    ], followUps: [
      'Manager: What would you do if two stakeholders ask for different things?',
      'Head nurse: Why does the new screen need more clicks than the old one?',
      'Engineer: What is the biggest technical risk in your project right now?',
      'Director: When will the whole hospital use the new system?'
    ], example: [
      "Hi everyone, let me introduce myself. I'm a software engineer with five years of experience. Currently, I work on a hospital information system. Before that, I built web applications for small businesses. My main strength is solving problems step by step, and in the future, I'd like to grow into a senior engineer.",
      'Let me walk you through our project. The system covers the whole patient journey, from registration to billing. About three hundred staff use it every day. My part of the project is the outpatient module and the integrations with the lab and the pharmacy.',
      "In my weekly 1-on-1, I gave my manager a quick update. The prescription API is done. But I'm worried that we can't finish the pharmacy module on time because of urgent lab bugs. Here is where I needed a decision, and we agreed that another developer would take the bugs.",
      'Later, I explained a planned downtime to the head nurse. In simple terms, the system is off for two hours at night, like closing a shop to fix the shelves. Nurses use paper forms during that time. The important thing for her was that no data would be lost.',
      "In the release meeting, the product owner wanted to skip testing. I said, \"I understand why you want to release on Monday, but I have a concern. Based on the test results, I don't think we're ready yet. What if we released it to one ward first?\" In the end, the team agreed.",
      "There was also a misunderstanding. My manager thought the feature was ready because I said \"done\". I clarified that the code was finished, but not tested, and I sent a written summary so we were on the same page.",
      'At the end of the month, I gave a short presentation about the lab queue screen. Some context first: the lab processes two thousand samples a day. The problem was long waiting times. Our solution was a queue screen connected to the lab machines, and waiting time dropped by thirty percent. Our next step is SMS notifications.',
      "During the Q&A, someone asked about the cost. I didn't have the number, so I said, \"I don't want to guess, so I'll check and send it to you today.\"",
      'Overall, I feel confident working in an international team. I learned to adjust my message for each audience: with doctors, I keep it short and focus on patient safety, and with engineers, I talk more about the design and the trade-offs.'
    ], timers: [8, 10] }
  ],

  talk321: null
});
