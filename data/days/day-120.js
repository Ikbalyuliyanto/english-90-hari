E90.registerDay({
  day: 120,
  titleId: 'Simulasi Akhir International Software Engineer',
  goal: 'The final simulation of the 120-day program: 10 stages of real work and interview situations, 15–20 minutes in total. Each stage gives you keywords, a short structure, and follow-up questions, not a script. Practice each stage, then run all 10 without stopping. After today, keep practicing with Review, Vocabulary, and by repeating Day 105, 119, and 120.',
  checkpoint: true,

  learn: [
    {
      id: 'D120-S01',
      english: "Before we dive in, here's a quick update from my side.",
      pronunciation: 'bi-for wi daiv in, hirz e kwik ap-deit from mai said',
      translation: 'Sebelum kita masuk ke pembahasan, ini update singkat dari saya.',
      words: [['Before', 'sebelum'], ['we', 'kita'], ['dive', '(bagian dari "dive in": langsung masuk ke pembahasan)'], ['in', '(bagian dari "dive in")'], ["here's", 'ini dia (here is)', 'here'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'singkat / cepat'], ['update', 'kabar terbaru / update'], ['from', 'dari'], ['my', 'milik saya'], ['side', 'sisi']],
      phrases: [['dive in', 'langsung masuk ke pembahasan'], ['from my side', 'dari sisi saya']],
      pattern: 'D120-P2'
    },
    {
      id: 'D120-S02',
      english: "Here's what we know so far, and here's what we don't know yet.",
      pronunciation: 'hirz wat wi nou sou far, en hirz wat wi dount nou yet',
      translation: 'Ini yang sudah kita ketahui sejauh ini, dan ini yang belum kita ketahui.',
      words: [["Here's", 'ini dia (here is)', 'here'], ['what', 'apa yang'], ['we', 'kita'], ['know', 'tahu'], ['so', '(bagian dari "so far")'], ['far', '(bagian dari "so far": sejauh ini)'], ['and', 'dan'], ["don't", 'tidak (do not)', 'do'], ['yet', 'belum (dalam kalimat negatif)']],
      phrases: [['so far', 'sejauh ini']],
      pattern: 'D120-P2'
    },
    {
      id: 'D120-S03',
      english: 'What would you say is the biggest challenge for the team right now?',
      pronunciation: 'wat wud yu sei iz de bi-gest che-lenj for de tim rait nau',
      translation: 'Menurut Anda, apa tantangan terbesar tim saat ini?',
      words: [['What', 'apa'], ['would', '(membuat pertanyaan lebih sopan)', 'will'], ['you', 'Anda'], ['say', 'katakan / menurut'], ['is', 'adalah', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['biggest', 'terbesar', 'big'], ['challenge', 'tantangan'], ['for', 'untuk / bagi'], ['team', 'tim'], ['right', '(bagian dari "right now")'], ['now', 'sekarang']],
      phrases: [['what would you say is', 'menurut Anda, apa']],
      pattern: 'D120-P3'
    },
    {
      id: 'D120-S04',
      english: 'How do engineers here grow into senior roles?',
      pronunciation: 'hau du en-ji-nirz hir grou in-tu si-nyer roulz',
      translation: 'Bagaimana engineer di sini berkembang menjadi senior?',
      words: [['How', 'bagaimana'], ['do', '(penanda pertanyaan, tidak diterjemahkan)'], ['engineers', 'insinyur / engineer', 'engineer'], ['here', 'di sini'], ['grow', 'berkembang'], ['into', 'menjadi'], ['senior', 'senior / berpengalaman'], ['roles', 'peran / posisi', 'role']],
      phrases: [['grow into', 'berkembang menjadi']],
      pattern: 'D120-P3'
    },
    {
      id: 'D120-S05',
      english: "A hundred and twenty days ago, I couldn't do this in English.",
      pronunciation: 'e han-dred en twen-ti deiz e-gou, ai ku-dent du dis in ing-glish',
      translation: 'Seratus dua puluh hari yang lalu, saya tidak bisa melakukan ini dalam bahasa Inggris.',
      words: [['A', 'satu (dalam "a hundred": seratus)'], ['hundred', 'ratus'], ['and', '(penghubung angka, tidak diterjemahkan)'], ['twenty', 'dua puluh'], ['days', 'hari', 'day'], ['ago', 'yang lalu'], ['I', 'saya'], ["couldn't", 'tidak bisa (lampau, could not)', 'can'], ['do', 'melakukan'], ['this', 'ini'], ['in', 'dalam'], ['English', 'bahasa Inggris']],
      phrases: [['days ago', 'hari yang lalu']],
      pattern: 'D120-P4'
    },
    {
      id: 'D120-S06',
      english: "I'm ready to keep learning and use English every day at work.",
      pronunciation: 'aim re-di tu kip ler-ning en yuz ing-glish ev-ri dei et werk',
      translation: 'Saya siap terus belajar dan memakai bahasa Inggris setiap hari di tempat kerja.',
      words: [["I'm", 'saya (I am)', 'be'], ['ready', 'siap'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['keep', 'terus (dengan -ing)'], ['learning', 'belajar', 'learn'], ['and', 'dan'], ['use', 'memakai'], ['English', 'bahasa Inggris'], ['every', 'setiap'], ['day', 'hari'], ['at', 'di'], ['work', 'tempat kerja']],
      phrases: [['keep + KATA KERJA-ing', 'terus melakukan ...']],
      pattern: 'D120-P4'
    }
  ],

  // Review akhir: satu kalimat inti dari setiap tahap perjalanan 120 hari.
  review: [
    { ref: 'D30-S01' },
    { ref: 'D35-S05' },
    { ref: 'D60-S01' },
    { ref: 'D73-S04' },
    { ref: 'D88-S04' },
    { ref: 'D90-S01' },
    { ref: 'D93-S01' },
    { ref: 'D101-S02' },
    { ref: 'D105-S03' },
    { ref: 'D110-S04' },
    { ref: 'D112-S01' },
    { ref: 'D117-S01' }
  ],

  patterns: [
    {
      id: 'D120-P1',
      formula: 'Introduction → Project → Standup → Deep dive → Production issue → System design → Disagreement → Behavioral → Technical interview → Your questions',
      meaning: 'The 10 stages of the final simulation.',
      examples: ["I'm a software engineer with five years of experience.", "Before we dive in, here's a quick update from my side.", "Here's what we know so far, and here's what we don't know yet.", 'What would you say is the biggest challenge for the team right now?'],
      note: 'Setiap tahap memakai struktur yang sudah kamu latih: Day 91 (perkenalan), 93 (proyek), 35/46 (standup), 112 (deep dive), 73/88 (insiden), 116–117 (system design), 101 (disagreement), 110 (STAR), 113–115 (technical), 108/119 (pertanyaan untuk interviewer).'
    },
    {
      id: 'D120-P2',
      formula: "Before we dive in, + KALIMAT  ·  Here's what we know so far, and here's what we don't know yet",
      meaning: 'Give updates clearly, including uncertainty.',
      examples: ["Before we dive in, here's a quick update on the release.", "Here's what we know so far: the error started at 9 AM. Here's what we don't know yet: the root cause.", "Before we dive in, I'd like to share one risk."]
    },
    {
      id: 'D120-P3',
      formula: 'What would you say is + BENDA?  ·  How do + SIAPA + KATA KERJA here?',
      meaning: 'Ask thoughtful questions at the end of an interview.',
      examples: ['What would you say is the most important skill for this role?', 'How do teams here make technical decisions?', 'How do new engineers get feedback in their first months?']
    },
    {
      id: 'D120-P4',
      formula: "BENDA ago, I couldn't + KATA KERJA  ·  I'm ready to keep + KATA KERJA-ing",
      meaning: 'Reflect on your progress.',
      examples: ["A year ago, I couldn't lead a meeting in English.", "I'm ready to keep improving my system design skills.", 'Four months ago, I was nervous. Now I can explain my work clearly.']
    }
  ],

  shadowing: ['D120-S01', 'D120-S02', 'D120-S03', 'D120-S05'],

  speaking: [
    { q: 'Stage 1 — Professional Introduction: Introduce yourself to a new international team (about 1 minute).', qId: 'Present → Past → Strength → Goal (Day 91).', hint: 'Keywords: role · years of experience · current system · before that · main strength + example · goal', outline: ['Present', 'Past', 'Strength + example', 'Goal'], followUps: ['What are you most excited about in this team?'], example: "Hi everyone, I'm a software engineer with five years of experience. Currently, I work on a hospital information system. Before that, I built web apps for small businesses. My main strength is solving problems step by step. In the future, I'd like to grow into a senior engineer." },
    { q: 'Stage 2 — Explain Your Current Project (about 2 minutes).', qId: 'Tujuan → pengguna → modul → satu alur → peranmu (Day 93).', hint: 'Keywords: main goal · users · modules · patient journey · one workflow · my part · challenge', outline: ['Purpose and users', 'Main modules', 'One workflow step by step', 'Your part', 'One challenge'], followUps: ['Which module is the most complex, and why?'], example: 'The system covers the whole patient journey, from registration to billing. About three hundred staff use it. At registration, staff create a medical record number; doctors write prescriptions in the doctor workspace; the pharmacy receives them automatically. My part of the project is the outpatient module and the lab integration. The main challenge is performance in the morning.' },
    { q: 'Stage 3 — Daily Standup / Project Update: Give your update to the team (about 1 minute).', qId: 'Kemarin → hari ini → blocker → risiko (Day 35, 46, 96).', hint: "Keywords: yesterday · today · blocker · on track / behind · risk · need help", outline: ['Yesterday / so far', 'Today / next', 'Blocker or risk', 'What you need'], followUps: ['When do you think the blocker will be solved?'], example: "Before we dive in, here's a quick update from my side. Yesterday, I finished the prescription API. Today, I'm going to test the stock check with the pharmacy data. I have one blocker: I'm waiting for access to the pharmacy test server. Overall, we're slightly behind schedule, but it's manageable." },
    { q: 'Stage 4 — Technical Deep Dive: Explain one important technical part of your system to another engineer (about 2 minutes).', qId: 'Gambaran besar → zoom in → alur request/data → keputusan (Day 76–77, 90, 112).', hint: 'Keywords: big picture · zoom in · request goes through · event · outbox / retry · why', outline: ['Big picture', 'Zoom in on one flow', 'Key technical detail', 'Why it was designed this way'], followUps: ['What happens if that component goes down?', 'Why didn\'t you choose a simpler design?'], example: "Let me start with the big picture, then zoom in on the lab order flow. The doctor creates an order, the backend saves the order and an outgoing message in one transaction, and a background job sends it to the lab with retries. We designed it this way because the lab system is sometimes down, and we can't lose orders." },
    { q: 'Stage 5 — Technical Problem / Production Issue: Doctors cannot open lab results. Communicate the incident to the team and stakeholders (about 2 minutes).', qId: 'Dampak → yang sudah diketahui/belum → mitigasi → update berikutnya. Jangan menebak root cause (Day 73, 88).', hint: "Keywords: currently experiencing · affected users · what we know so far · what we don't know yet · mitigated · next update · post-mortem", outline: ['What is happening and who is affected', 'What we know and what we don\'t know yet', 'What we are doing / mitigation', 'Next update time', 'After: root cause + prevention'], followUps: ['Is patient data safe?', 'When will it be fully fixed?', 'How will you prevent this from happening again?'], example: "We're currently experiencing an incident with the lab results page. Doctors in all wards can't open results since 9:10. Here's what we know so far: it started after this morning's deployment. Here's what we don't know yet: the exact root cause. We're rolling back the deployment now as a temporary fix, and lab staff can print urgent results. The next update will be at 9:45." },
    { q: 'Stage 6 — Architecture / System Design: "Design a system that notifies doctors when a critical lab result arrives." (about 3 minutes)', qId: 'Klarifikasi → skala → komponen → keandalan → bottleneck (Day 116–117).', hint: "Keywords: clarify · critical result · estimate · event · queue · notification service · retry · escalation · single point of failure", outline: ['Clarify: which results, which doctors, which channel', 'Estimate the scale', 'Components and flow', 'Reliability: retries, escalation', 'Bottleneck or trade-off'], followUps: ['What if the doctor does not read the notification?', 'How do you avoid sending too many alerts?'], example: "Before designing, I'd like to clarify: which results are critical, and should we notify by app, SMS, or both? Let me estimate the scale: maybe a hundred critical results per day. When a critical result is saved, the lab service publishes an event. A notification service reads it from a queue and notifies the doctor. If the doctor doesn't confirm in fifteen minutes, it escalates to the head nurse. I'd start simple and avoid any single point of failure in the queue." },
    { q: 'Stage 7 — Professional Disagreement: The product manager wants to release on Friday without testing the insurance claims. Disagree professionally (about 1–2 minutes).', qId: 'Akui → kekhawatiran → data → alternatif → dukung keputusan (Day 101).', hint: "Keywords: I understand why · concern · based on · what if we · middle ground · support the decision", outline: ['Acknowledge their goal', 'Concern + impact', 'Reason or data', 'Alternative', 'Support the final decision'], followUps: ['The director already promised Friday. What now?'], example: "I understand why you want to release on Friday, but I have a concern. Insurance claims affect real money for patients. Based on last month's bug, I don't think it's worth the risk. What if we released everything on Friday except the claims part, and released claims on Tuesday after testing? If the team still decides differently, I'll support the decision and monitor it closely." },
    { q: 'Stage 8 — Behavioral Interview: "Tell me about a time you made a mistake and how you handled it." (about 2 minutes)', qId: 'STAR + pelajaran (Day 110).', hint: 'Keywords: situation · task · action (I) · result · looking back', outline: ['Situation', 'Task', 'Action — the longest part', 'Result', 'Lesson'], followUps: ['What did you change in your process after that?'], example: "The situation was that I updated the billing rules for insurance patients. I made a mistake: I only tested cash patients. The action I took was to tell my manager right away, roll back within thirty minutes, and help finance correct the twelve bills that were affected. In the end, no patient paid the wrong amount. Since then, I prepare test cases for every patient type." },
    { q: 'Stage 9 — Technical Interview: "How would you make the patient search faster? The table has ten million rows." (about 2 minutes)', qId: 'Ukur → query plan → index → cache/partisi → trade-off. Beri alasan (Day 111, 114).', hint: "Keywords: measure · query plan · index · pagination · cache · trade-off · don't guess", outline: ['Clarify how users search', 'Measure first', 'Fix: index, query, pagination', 'Scale: cache or search engine', 'Trade-off'], followUps: ['The index helped, but inserts are slower now. What do you do?'], example: "First, I'd clarify how staff search: by name, by medical record number, or by birth date. Let's not guess, so I'd measure the slow queries and check the query plan. If it's scanning the whole table, I'd add an index on the medical record number and on name plus birth date. I'd also add pagination. If name search is still slow, a search engine could help, but the trade-off is keeping two systems in sync." },
    { q: 'Stage 10 — Questions for the Interviewer: Ask two or three real questions and close the interview professionally (about 1 minute).', qId: 'Pertanyaan yang benar-benar ingin kamu tahu: tantangan tim, cara berkembang, ukuran sukses, langkah berikutnya.', hint: 'Keywords: biggest challenge · grow into senior roles · success after six months · next steps · thank you', outline: ['Question about the team or product', 'Question about growth or success', 'Next steps', 'Thank you'], followUps: ['Is there anything else you would like to know about us?'], example: 'What would you say is the biggest challenge for the team right now? How do engineers here grow into senior roles? And what are the next steps in the hiring process? Thank you for your time. I really enjoyed our conversation.' },
    { q: 'FINAL INTERNATIONAL SOFTWARE ENGINEER SIMULATION (15–20 minutes): Run all 10 stages without stopping, like one long day at work followed by an interview. Use the keywords, not a script. Open the follow-up questions one by one. When you finish, you have completed the 120-day program.', qId: 'Lihat struktur 10 tahap. Buka Full Example (kata kunci per tahap) hanya kalau buntu. Timer opsional.', hint: 'Introduction → Project → Standup → Deep dive → Production issue → System design → Disagreement → Behavioral → Technical interview → Your questions', outline: [
      '1. Professional Introduction (1 min): Present → Past → Strength → Goal',
      '2. Current Project (2 min): purpose → users → modules → workflow → your part',
      '3. Standup / Update (1 min): yesterday → today → blocker → risk',
      '4. Technical Deep Dive (2 min): big picture → zoom in → key detail → why',
      '5. Production Issue (2 min): impact → known / unknown → mitigation → next update',
      '6. System Design (3 min): clarify → estimate → components → reliability → trade-off',
      '7. Disagreement (1–2 min): acknowledge → concern → data → alternative → support',
      '8. Behavioral (2 min): Situation → Task → Action → Result → Lesson',
      '9. Technical Interview (2 min): clarify → measure → fix → scale → trade-off',
      '10. Questions & Close (1 min): two real questions → next steps → thank you'
    ], followUps: [
      'Manager: How would you onboard a new developer to your project?',
      'Stakeholder: Can you explain the incident to me without technical words?',
      'Engineer: What is the weakest part of your system design?',
      'Interviewer: What have you learned about yourself in the last four months?',
      'Interviewer: Why should we choose you for this role?'
    ], example: [
      '1. Introduction — software engineer · five years · hospital information system · before that: web apps for small businesses · strength: solving problems step by step · goal: senior engineer, international team.',
      '2. Project — whole patient journey, registration to billing · three hundred staff · modules: registration, outpatient, lab, pharmacy, billing · workflow: register → doctor → lab → pharmacy → bill · my part: outpatient + lab integration.',
      "3. Standup — \"Before we dive in, here's a quick update from my side.\" · finished prescription API · today: stock check tests · blocker: access to pharmacy test server · slightly behind, manageable.",
      '4. Deep dive — big picture → zoom in on lab orders · order + outgoing message in one transaction · background job with retries · why: lab system is sometimes down, orders must not be lost.',
      "5. Production issue — lab results page down since 9:10, all wards · \"Here's what we know so far ... here's what we don't know yet\" · rolling back · urgent results printed by lab · next update 9:45 · post-mortem by Friday.",
      "6. System design — clarify: which results, which channel · ~100 critical results/day · lab service → event → queue → notification service → doctor · escalation to head nurse after 15 min · no single point of failure.",
      "7. Disagreement — \"I understand why you want Friday, but I have a concern\" · insurance claims = real money · based on last month's bug · alternative: release claims on Tuesday · support the final decision.",
      '8. Behavioral — billing rule mistake · only tested cash patients · told manager, rolled back in 30 min, fixed 12 bills · no patient overpaid · now: test cases for every patient type.',
      "9. Technical — search on 10 million rows · clarify how staff search · measure, query plan · index on record number + name/birth date · pagination · search engine = sync trade-off.",
      '10. Close — "What would you say is the biggest challenge for the team right now?" · "How do engineers here grow into senior roles?" · next steps · "Thank you for your time."',
      "Reflection — \"A hundred and twenty days ago, I couldn't do this in English. I'm ready to keep learning and use English every day at work.\""
    ], timers: [15, 20] }
  ],

  talk321: null
});
