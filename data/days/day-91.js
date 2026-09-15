E90.registerDay({
  day: 91,
  titleId: 'Perkenalan Diri Profesional',
  goal: 'Memperkenalkan diri secara profesional selama 2–3 menit dengan struktur Present → Past → Strength → Goal. Kalimat baru sedikit; fokusnya menggabungkan pola lama menjadi jawaban yang lancar.',

  // Phase 4: kalimat baru sedikit, lebih banyak memakai ulang bahasa Day 1–90.
  learn: [
    {
      id: 'D91-S01',
      english: "I'm a software engineer with five years of experience.",
      pronunciation: 'aim e sof-wer en-ji-nir with faiv yirz ov eks-pi-ri-ens',
      translation: 'Saya software engineer dengan pengalaman lima tahun.',
      words: [["I'm", 'saya (I am)', 'be'], ['a', 'seorang (tidak diterjemahkan)'], ['software', 'perangkat lunak / software'], ['engineer', 'insinyur / engineer'], ['with', 'dengan'], ['five', 'lima'], ['years', 'tahun', 'year'], ['of', '(penghubung: tahun "dari" pengalaman)'], ['experience', 'pengalaman']],
      phrases: [['years of experience', 'tahun pengalaman']],
      pattern: 'D91-P2'
    },
    {
      id: 'D91-S02',
      english: 'Currently, I work on a hospital information system.',
      pronunciation: 'ker-ent-li, ai werk on e hos-pi-tel in-for-mei-shen sis-tem',
      translation: 'Saat ini, saya mengerjakan sistem informasi rumah sakit.',
      words: [['Currently', 'saat ini'], ['I', 'saya'], ['work', 'bekerja'], ['on', '(bagian dari "work on": mengerjakan)'], ['a', 'sebuah (tidak diterjemahkan)'], ['hospital', 'rumah sakit'], ['information', 'informasi'], ['system', 'sistem']],
      phrases: [['work on', 'mengerjakan'], ['hospital information system', 'sistem informasi rumah sakit (SIMRS)']],
      pattern: 'D91-P1'
    },
    {
      id: 'D91-S03',
      english: 'Before that, I built web applications for small businesses.',
      pronunciation: 'bi-for det, ai bilt web ep-li-kei-shenz for smol biz-ne-sez',
      translation: 'Sebelumnya, saya membuat aplikasi web untuk usaha kecil.',
      words: [['Before', 'sebelum'], ['that', 'itu'], ['I', 'saya'], ['built', 'membangun / membuat (lampau)', 'build'], ['web', 'web'], ['applications', 'aplikasi', 'application'], ['for', 'untuk'], ['small', 'kecil'], ['businesses', 'usaha / bisnis', 'business']],
      phrases: [['before that', 'sebelum itu / sebelumnya']],
      pattern: 'D91-P1'
    },
    {
      id: 'D91-S04',
      english: 'My main strength is solving problems step by step.',
      pronunciation: 'mai mein strength iz sol-ving prob-lemz step bai step',
      translation: 'Kekuatan utama saya adalah menyelesaikan masalah langkah demi langkah.',
      words: [['My', 'milik saya'], ['main', 'utama'], ['strength', 'kekuatan / kelebihan'], ['is', 'adalah', 'be'], ['solving', 'menyelesaikan', 'solve'], ['problems', 'masalah', 'problem'], ['step', 'langkah'], ['by', '(bagian dari "step by step")']],
      phrases: [['step by step', 'langkah demi langkah']],
      pattern: 'D91-P3'
    },
    {
      id: 'D91-S05',
      english: "I'm good at explaining technical things in a simple way.",
      pronunciation: 'aim gud et eks-plei-ning tek-ni-kel thingz in e sim-pel wei',
      translation: 'Saya pandai menjelaskan hal teknis dengan cara yang sederhana.',
      words: [["I'm", 'saya (I am)', 'be'], ['good', 'bagus / pandai'], ['at', '(bagian dari "good at": pandai dalam)'], ['explaining', 'menjelaskan', 'explain'], ['technical', 'teknis'], ['things', 'hal', 'thing'], ['in', 'dengan (cara)'], ['a', 'sebuah (tidak diterjemahkan)'], ['simple', 'sederhana'], ['way', 'cara']],
      phrases: [['be good at', 'pandai dalam'], ['in a simple way', 'dengan cara sederhana']],
      pattern: 'D91-P3'
    },
    {
      id: 'D91-S06',
      english: "In the future, I'd like to work with an international team.",
      pronunciation: 'in de fyu-cher, aid laik tu werk with en in-ter-ne-she-nel tim',
      translation: 'Ke depannya, saya ingin bekerja dengan tim internasional.',
      words: [['In', 'di / pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['future', 'masa depan'], ["I'd", 'saya ingin (I would)', 'would'], ['like', 'suka / ingin (dengan would)'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['work', 'bekerja'], ['with', 'dengan'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['international', 'internasional'], ['team', 'tim']],
      phrases: [['in the future', 'ke depannya / di masa depan'], ["I'd like to", 'saya ingin']],
      pattern: 'D91-P4'
    },
    {
      id: 'D91-S07',
      english: 'My goal is to grow into a senior engineer.',
      pronunciation: 'mai goul iz tu grou in-tu e si-nyer en-ji-nir',
      translation: 'Tujuan saya adalah berkembang menjadi senior engineer.',
      words: [['My', 'milik saya'], ['goal', 'tujuan / target'], ['is', 'adalah', 'be'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['grow', 'tumbuh / berkembang'], ['into', 'menjadi (dengan grow)'], ['a', 'seorang (tidak diterjemahkan)'], ['senior', 'senior / berpengalaman'], ['engineer', 'insinyur / engineer']],
      phrases: [['grow into', 'berkembang menjadi']],
      pattern: 'D91-P4'
    },
    {
      id: 'D91-S08',
      english: "That's a quick overview of my background.",
      pronunciation: 'dets e kwik ou-ver-vyu ov mai bek-graund',
      translation: 'Itu gambaran singkat tentang latar belakang saya.',
      words: [["That's", 'itu adalah (that is)', 'that'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'cepat / singkat'], ['overview', 'gambaran umum'], ['of', 'tentang'], ['my', 'milik saya'], ['background', 'latar belakang']],
      phrases: [['a quick overview', 'gambaran singkat']],
      pattern: 'D91-P1'
    }
  ],

  // Review: pola perkenalan dan pekerjaan dari Day 1, 18, 30, 31, dan 61.
  review: [
    { ref: 'D30-S01' },
    { ref: 'D31-S01' },
    { ref: 'D01-S09' },
    { ref: 'D61-S01' },
    { ref: 'D61-S08' },
    { ref: 'D61-S11' },
    { ref: 'D18-S14' }
  ],

  patterns: [
    {
      id: 'D91-P1',
      formula: 'Present → Past → Strength → Goal',
      meaning: 'A simple structure for a professional self-introduction.',
      examples: ['Currently, I work on a hospital information system.', 'Before that, I built web applications for small businesses.', 'My main strength is solving problems step by step.', 'My goal is to grow into a senior engineer.'],
      note: 'Present = pekerjaan sekarang, Past = pengalaman sebelumnya, Strength = kelebihanmu + contoh, Goal = arah karier. Urutan ini membuat perkenalan terdengar rapi walau kalimatnya sederhana.'
    },
    {
      id: 'D91-P2',
      formula: "I'm a/an + PEKERJAAN with + ANGKA years of experience",
      meaning: 'Say your role and how long you have done it.',
      examples: ["I'm a backend developer with three years of experience.", "I'm a QA engineer with two years of experience.", 'I have about six years of experience in healthcare software.']
    },
    {
      id: 'D91-P3',
      formula: "My main strength is + KATA KERJA-ing  ·  I'm good at + KATA KERJA-ing",
      meaning: 'Talk about your strengths.',
      examples: ['My main strength is learning new tools quickly.', "I'm good at working with users.", "I'm good at finding the cause of a bug."],
      note: 'Setelah menyebut kelebihan, beri satu contoh singkat: "For example, last month I ..."'
    },
    {
      id: 'D91-P4',
      formula: "In the future, I'd like to + KATA KERJA  ·  My goal is to + KATA KERJA",
      meaning: 'Talk about your career goals.',
      examples: ["In the future, I'd like to lead a small team.", 'My goal is to become a better system designer.', "In the future, I'd like to work on products used in many countries."]
    }
  ],

  shadowing: ['D91-S01', 'D91-S02', 'D91-S04', 'D91-S06'],

  speaking: [
    { q: 'Introduce yourself in two or three sentences: your role, your experience, and what you work on now.', qId: 'Perkenalkan dirimu dalam dua atau tiga kalimat: peranmu, pengalamanmu, dan apa yang sedang kamu kerjakan.', hint: "Hi, I'm ... I'm a ... with ... years of experience. Currently, I work on ...", example: "Hi, I'm a software engineer with five years of experience. Currently, I work on a hospital information system, and I'm responsible for the backend and the API." },
    { q: 'What did you do before your current job?', qId: 'Apa yang kamu kerjakan sebelum pekerjaanmu yang sekarang?', hint: 'Before that, I ... I worked on ... I learned ...', example: 'Before that, I built web applications for small businesses. Most of them were online shops. I learned how to work directly with clients.', followUps: ['What did you learn from that job?', 'Why did you move to your current role?'] },
    { q: 'What is your main strength at work? Give one example.', qId: 'Apa kekuatan utamamu di tempat kerja? Beri satu contoh.', hint: "My main strength is ... For example, ... As a result, ...", example: "My main strength is solving problems step by step. For example, last month the lab results page was very slow. I checked the logs, found the slow query, and fixed it. The page became much faster.", followUps: ['Can you give me another example?', 'How did your team benefit from that?'] },
    { q: 'PROFESSIONAL SELF-INTRODUCTION: Introduce yourself for 2–3 minutes, as if you are meeting a new international team. Follow the structure Present → Past → Strength → Goal. Do not read.', qId: 'PERKENALAN PROFESIONAL: Perkenalkan dirimu 2–3 menit seolah bertemu tim internasional baru. Ikuti struktur Present → Past → Strength → Goal. Jangan membaca. Timer opsional.', hint: "Let me introduce myself ... Currently, I ... Before that, I ... My main strength is ... For example ... In the future, I'd like to ... That's a quick overview of my background.", outline: [
      'Present: your role, years of experience, and what you work on now',
      'Past: one or two previous jobs or projects',
      'Strength: one strength + one short example',
      "Goal: what you'd like to do in the future",
      'Close: a friendly sentence and an invitation for questions'
    ], followUps: [
      'What kind of projects do you enjoy the most?',
      'What is the hardest part of your current job?',
      'Why do you want to work with an international team?'
    ], example: [
      "Hi everyone, let me introduce myself. I'm a software engineer with five years of experience. Currently, I work on a hospital information system. I'm responsible for the backend and the API, especially the outpatient module.",
      'Before that, I built web applications for small businesses, like online shops and booking websites. That job taught me how to talk with clients and how to deliver features quickly.',
      'My main strength is solving problems step by step. For example, last month doctors said the patient list was very slow. I measured the page, found one slow query, and added an index. After that, the page loaded in under one second. I\'m also good at explaining technical things in a simple way, so I often help the nurses and the admin staff understand new features.',
      "In the future, I'd like to work with an international team and grow into a senior engineer. That's a quick overview of my background. I'm happy to answer any questions."
    ], timers: [2, 3] }
  ],

  talk321: null
});
