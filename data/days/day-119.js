E90.registerDay({
  day: 119,
  titleId: 'Mock Interview Lengkap',
  goal: 'A full 15–20 minute mock interview for a software engineer role: opening → tell me about yourself → motivation → behavioral (STAR) → project deep dive → technical questions → mini system design → difficult question → your questions → closing. Practice each part first. For the full run, look at the Answer Structure; open the Full Example only if you get stuck.',
  checkpoint: true,

  // Sedikit kalimat baru: membuka, mengatur, dan menutup interview.
  learn: [
    {
      id: 'D119-S01',
      english: 'Thank you for having me today.',
      pronunciation: 'thenk yu for he-ving mi tu-dei',
      translation: 'Terima kasih sudah mengundang saya hari ini.',
      words: [['Thank', 'terima kasih'], ['you', 'Anda'], ['for', 'atas'], ['having', 'mengundang / menerima (dalam "having me")', 'have'], ['me', 'saya (sebagai objek)'], ['today', 'hari ini']],
      phrases: [['thank you for having me', 'terima kasih sudah mengundang saya']],
      pattern: 'D119-P1'
    },
    {
      id: 'D119-S02',
      english: 'Could I take a moment to structure my answer?',
      pronunciation: 'kud ai teik e mou-ment tu strak-cher mai en-ser',
      translation: 'Boleh saya ambil waktu sebentar untuk menyusun jawaban saya?',
      words: [['Could', 'bolehkah (sopan)', 'can'], ['I', 'saya'], ['take', 'mengambil'], ['a', 'sebuah (tidak diterjemahkan)'], ['moment', 'saat / sebentar'], ['to', '(penanda kata kerja: untuk)'], ['structure', 'menyusun'], ['my', 'milik saya'], ['answer', 'jawaban']],
      phrases: [['take a moment', 'mengambil waktu sebentar']],
      pattern: 'D119-P2'
    },
    {
      id: 'D119-S03',
      english: "I'll answer in three parts.",
      pronunciation: 'ail en-ser in thri parts',
      translation: 'Saya akan menjawab dalam tiga bagian.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['answer', 'menjawab'], ['in', 'dalam'], ['three', 'tiga'], ['parts', 'bagian', 'part']],
      pattern: 'D119-P2'
    },
    {
      id: 'D119-S04',
      english: 'Would you like me to go into more detail, or should I move on?',
      pronunciation: 'wud yu laik mi tu gou in-tu mor di-teil, or shud ai muv on',
      translation: 'Apakah Anda ingin saya menjelaskan lebih detail, atau saya lanjut?',
      words: [['Would', '(penanda pertanyaan sopan)', 'will'], ['you', 'Anda'], ['like', 'suka / ingin (dengan would)'], ['me', 'saya (sebagai objek)'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['go', '(bagian dari "go into": membahas)'], ['into', 'ke dalam'], ['more', 'lebih'], ['detail', 'detail / rincian'], ['or', 'atau'], ['should', 'sebaiknya'], ['I', 'saya'], ['move', '(bagian dari "move on": lanjut)'], ['on', '(bagian dari "move on")']],
      phrases: [['would you like me to', 'apakah Anda ingin saya'], ['move on', 'lanjut']],
      pattern: 'D119-P3'
    },
    {
      id: 'D119-S05',
      english: 'What are the next steps in the hiring process?',
      pronunciation: 'wat ar de nekst steps in de hai-ring pro-ses',
      translation: 'Apa langkah selanjutnya dalam proses rekrutmen?',
      words: [['What', 'apa'], ['are', 'adalah', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['next', 'berikutnya'], ['steps', 'langkah', 'step'], ['in', 'dalam'], ['hiring', 'perekrutan', 'hire'], ['process', 'proses']],
      phrases: [['hiring process', 'proses rekrutmen']],
      pattern: 'D119-P3'
    },
    {
      id: 'D119-S06',
      english: 'Thank you for your time. I really enjoyed our conversation.',
      pronunciation: 'thenk yu for yor taim. ai ri-li en-joid a-wer kon-ver-sei-shen',
      translation: 'Terima kasih atas waktunya. Saya sangat menikmati percakapan kita.',
      words: [['Thank', 'terima kasih'], ['you', 'Anda'], ['for', 'atas'], ['your', 'milik Anda'], ['time', 'waktu'], ['I', 'saya'], ['really', 'sangat / benar-benar'], ['enjoyed', 'menikmati (lampau)', 'enjoy'], ['our', 'milik kita'], ['conversation', 'percakapan']],
      pattern: 'D119-P1'
    }
  ],

  // Review aktif Day 106–118: satu kalimat inti dari setiap jenis pertanyaan interview.
  review: [
    { ref: 'D106-S01' },
    { ref: 'D107-S02' },
    { ref: 'D108-S04' },
    { ref: 'D109-S01' },
    { ref: 'D110-S04' },
    { ref: 'D111-S02' },
    { ref: 'D112-S02' },
    { ref: 'D113-S02' },
    { ref: 'D114-S04' },
    { ref: 'D117-S01' },
    { ref: 'D118-S08' }
  ],

  patterns: [
    {
      id: 'D119-P1',
      formula: 'Opening → About you → Motivation → Behavioral → Project → Technical → System design → Difficult → Your questions → Closing',
      meaning: 'The flow of a full software engineer interview.',
      examples: ['Thank you for having me today.', "Sure. I'm a backend engineer focused on healthcare systems.", 'The situation was that the go-live date was only two weeks away.', 'Thank you for your time. I really enjoyed our conversation.'],
      note: 'Interview sungguhan jarang berjalan sesuai urutan. Kalau interviewer melompat ke topik lain, ikuti saja, lalu pakai struktur yang cocok untuk pertanyaan itu.'
    },
    {
      id: 'D119-P2',
      formula: "Could I take a moment to + KATA KERJA?  ·  I'll answer in + ANGKA parts",
      meaning: 'Organize your answer before you speak.',
      examples: ['Could I take a moment to think about a good example?', "I'll answer in two parts: the technical side and the team side.", "I'll answer in three parts: the problem, what I did, and the result."]
    },
    {
      id: 'D119-P3',
      formula: 'Would you like me to + KATA KERJA, or should I + KATA KERJA?  ·  What are the next steps in + BENDA?',
      meaning: 'Check with the interviewer and close professionally.',
      examples: ['Would you like me to explain the database design, or should I move on?', 'What are the next steps in the hiring process?', 'Is there anything else you need from me?']
    }
  ],

  shadowing: ['D119-S01', 'D119-S02', 'D119-S04', 'D119-S06'],

  speaking: [
    { q: 'Part 1 — Opening and "Tell me about yourself."', qId: 'Buka dengan sopan, lalu jawab 1–2 menit (Day 106).', hint: "Thank you for having me today. Sure. I'm a ... For the past ..., I've been ... A project I'm proud of ... I'm now looking for a role where ...", example: "Thank you for having me today. Sure. I'm a backend engineer focused on healthcare systems. For the past three years, I've been building a hospital information system, mostly APIs and integrations. A project I'm proud of is the lab results integration. I'm now looking for a role where I can work on larger systems with an international team.", followUps: ['What does your team look like?'] },
    { q: 'Part 2 — Motivation: "Why are you looking for a new job, and why do you want to work here?"', qId: 'Positif tentang tempat sekarang → alasan berkembang → kecocokan dengan perusahaan ini (Day 107–108).', hint: "I've learned a lot in ... I'm ready for ... Your mission to ... My experience with ... matches ...", example: "I've learned a lot in my current company, but our product is stable now, and I'm ready for a new challenge. Your mission to make healthcare easier to access really speaks to me, and my experience with hospital systems matches what you're building.", followUps: ['What do you know about our product?'] },
    { q: 'Part 3 — Behavioral: "Tell me about a time you disagreed with a teammate."', qId: 'STAR (Day 110). Action paling panjang; pakai "I".', hint: "Could I take a moment to think of a good example? The situation was that ... My task was to ... The action I took was to ... In the end, ... Looking back, ...", example: "The situation was that a frontend developer and I disagreed about the API format for the doctor workspace. My task was to agree on a design quickly. The action I took was to invite him to a short call, listen to his concern about slow Wi-Fi, and suggest a middle ground that we tested together. In the end, the page was faster than both original ideas. Looking back, I would have suggested a call earlier.", followUps: ['What would you have done if he still disagreed?'] },
    { q: 'Part 4 — Project deep dive: "Walk me through your most important project."', qId: 'Gambaran besar → peranmu → masalah tersulit → keputusan → hasil (Day 112).', hint: "I'll give you the high-level picture first ... I owned ... The hardest technical problem was ... We solved it with ... We measured success by ...", example: "I'll give you the high-level picture first. It's a hospital information system for a four-hundred-bed hospital. I owned the integration layer with the lab, pharmacy, and insurance systems. The hardest technical problem was keeping data consistent between systems. We solved it with an outbox table and retries, and lost lab orders went down to zero.", followUps: ['Why not call the lab API directly?', 'How did you know it worked in production?'] },
    { q: 'Part 5 — Technical questions: "How would you design the endpoint to book an appointment, and how would you store it in the database?"', qId: 'API (Day 113) + database (Day 114): endpoint, validasi, error, idempotency, tabel, index, transaction.', hint: "I'd design it as ... The endpoint should be idempotent ... I'd return a 409 error if ... I'd model it with ... tables ... I'd add an index on ... We use a transaction, so ...", example: "I'd design it as a POST request to the appointments endpoint with the patient, the doctor, and the time slot. The endpoint should be idempotent, so a retry doesn't create a duplicate. I'd return a 409 error if the time slot is already taken. In the database, I'd model it with doctors, slots, and appointments, add a unique constraint on the slot, and use a transaction so the slot and the appointment are saved together.", followUps: ['How would you secure it?', 'The appointments table is getting slow. What would you do?'] },
    { q: 'Part 6 — Mini system design: "How would you send appointment reminders to fifty thousand patients a day?"', qId: 'Klarifikasi singkat → komponen → keandalan → bottleneck (Day 116–117). Maks 3 menit.', hint: "Before designing, I'd like to clarify ... Let me estimate the scale ... Reminders are sent by ... If ..., ... The first bottleneck will probably be ...", example: "Before designing, I'd like to clarify: SMS, email, or both, and how early? Let's say SMS one day before. Let me estimate the scale: fifty thousand messages a day, mostly sent in the evening. A scheduled job finds tomorrow's appointments and puts messages in a queue. A separate reminder service sends them with retries. If the SMS provider is slow, the first bottleneck will probably be the provider's rate limit, so we'd spread the messages over a few hours.", followUps: ['What if a patient cancels after the reminder is in the queue?'] },
    { q: 'Part 7 — Difficult question and your questions: "Why should we hire you instead of someone with more experience?" Then ask the interviewer two questions and close.', qId: 'Tenang dan jujur (Day 118), lalu tanya 2 hal yang benar-benar ingin kamu tahu, dan tutup dengan sopan.', hint: "That's a good question ... I don't have ..., but ... What does success look like in this role ...? What are the next steps in the hiring process? Thank you for your time ...", example: "That's a good question. Someone else may have more years, but I have deep experience in hospital systems, which is exactly your domain, so I can contribute quickly. Can I ask you two questions? What does success look like in this role after six months? And what are the next steps in the hiring process? Thank you for your time. I really enjoyed our conversation." },
    { q: 'FULL MOCK INTERVIEW (15–20 minutes): Run the whole interview without stopping. Answer from the structure, not from memory. Open the follow-up questions one by one, as a real interviewer would. If you get stuck, pause, use "Could I take a moment to structure my answer?", and continue.', qId: 'Pertama lihat Answer Structure. Buka Full Example hanya kalau buntu. Timer opsional.', hint: 'Opening → About you → Motivation → STAR → Project → API & database → System design → Difficult question → Your questions → Closing', outline: [
      'Opening (30 sec): thank the interviewer',
      'About you (1–2 min): Present → Highlights → Why this role',
      'Motivation (1–2 min): grateful → growth → why this company',
      'Behavioral (2–3 min): one STAR story, Action is the longest part',
      'Project deep dive (3–4 min): big picture → your role → hardest problem → decision → result',
      'Technical (2–3 min): API + database with reasons',
      'System design (3 min): clarify → estimate → components → reliability → bottleneck',
      'Difficult question (1 min): pause → honest → brief → positive',
      'Your questions (1 min): two real questions',
      'Closing (30 sec): next steps + thank you'
    ], followUps: [
      'Tell me about a time you received negative feedback.',
      'What is the biggest technical mistake you have made?',
      'How do you keep your technical skills up to date?',
      'How would you explain your project to someone who is not technical?',
      'What kind of manager helps you do your best work?',
      'Is there anything you would like to add before we finish?'
    ], example: [
      "Opening: Thank you for having me today. I'm happy to be here.",
      "About me: I'm a backend engineer focused on healthcare systems, with about five years of experience. For the past three years, I've been building a hospital information system used by around three hundred staff. Most of my work is on APIs, databases, and integrations. A project I'm proud of is the lab results integration, which cut the waiting time for results from hours to minutes. I'm now looking for a role where I can work on larger systems with an international team.",
      "Motivation: I've learned a lot in my current company, and I'm grateful for it. Our product is stable now, so there's less new development, and I'm ready for a new challenge. Your mission to make healthcare easier to access really speaks to me, and my experience with hospital systems matches what you're building.",
      "Behavioral: The situation was that the go-live date for the pharmacy module was only two weeks away, and the integration was half done. My task was to finish it in time. The action I took was to split the work into daily goals, agree with the product owner to move two reports to the next release, and ask the pharmacists to test with us every afternoon. In the end, we went live on time with no critical bugs. That experience showed me the value of short feedback loops.",
      "Project: I'll give you the high-level picture first, then go deeper. I owned the integration layer with the lab, pharmacy, and insurance systems. The hardest technical problem was keeping data consistent between systems, because messages to the lab were sometimes lost. We considered distributed transactions, but they were too complex. I proposed an outbox table with retries. We measured success by manual corrections, which went from fifteen per week to almost zero. If I could redesign it, I would add better monitoring from the start.",
      "Technical: For booking, I'd design a POST endpoint that is idempotent, so a retry doesn't create a duplicate, and I'd return a 409 error if the slot is already taken. In the database, I'd use doctors, slots, and appointments, with a unique constraint on the slot and a transaction so everything is saved together. I'd add an index on the doctor and date, because that's how clinics search.",
      "System design: Before designing, I'd like to clarify the channel and timing. Let's say SMS one day before, fifty thousand a day. A scheduled job puts reminders in a queue, and a separate service sends them with retries. If the provider is slow, the first bottleneck will probably be its rate limit, so we'd spread the messages over a few hours and monitor the queue.",
      "Difficult question: That's a good question. Someone may have more years, but I know hospital workflows and integrations very well, so I can contribute from day one, and I learn new tools quickly.",
      'My questions: What does success look like in this role after six months? And what is the biggest challenge for the team this year?',
      'Closing: What are the next steps in the hiring process? Thank you for your time. I really enjoyed our conversation.'
    ], timers: [15, 20] }
  ],

  talk321: null
});
