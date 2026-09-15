E90.registerDay({
  day: 100,
  titleId: 'Memimpin Meeting Kecil',
  goal: 'Memimpin meeting singkat: membuka, menyebut tujuan dan agenda, memberi giliran bicara, menjaga waktu, mengambil keputusan, menentukan penanggung jawab, dan menutup. Simulasi 5 menit dengan timer opsional.',

  learn: [
    {
      id: 'D100-S01',
      english: "Thanks for joining. Let's get started.",
      pronunciation: 'thenks for joi-ning. lets get star-tid',
      translation: 'Terima kasih sudah bergabung. Mari kita mulai.',
      words: [['Thanks', 'terima kasih'], ['for', 'untuk / atas'], ['joining', 'bergabung', 'join'], ["Let's", 'mari kita (let us)', 'let'], ['get', '(bagian dari "get started": mulai)'], ['started', 'mulai', 'start']],
      phrases: [["let's get started", 'mari kita mulai']],
      pattern: 'D100-P2'
    },
    {
      id: 'D100-S02',
      english: 'We have thirty minutes, and there are three items on the agenda.',
      pronunciation: 'wi hev ther-ti mi-nits, en der ar thri ai-temz on di e-jen-da',
      translation: 'Kita punya tiga puluh menit, dan ada tiga topik dalam agenda.',
      words: [['We', 'kita'], ['have', 'punya'], ['thirty', 'tiga puluh'], ['minutes', 'menit', 'minute'], ['and', 'dan'], ['there', '(bagian dari "there are": ada)'], ['are', 'ada (dengan there)', 'be'], ['three', 'tiga'], ['items', 'butir / topik', 'item'], ['on', 'di / dalam'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['agenda', 'agenda / daftar topik']],
      phrases: [['items on the agenda', 'topik dalam agenda']],
      pattern: 'D100-P2'
    },
    {
      id: 'D100-S03',
      english: 'The goal today is to agree on the release plan.',
      pronunciation: 'de goul tu-dei iz tu e-gri on de ri-lis plen',
      translation: 'Tujuan hari ini adalah menyepakati rencana rilis.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['goal', 'tujuan'], ['today', 'hari ini'], ['is', 'adalah', 'be'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['agree', 'sepakat'], ['on', '(bagian dari "agree on": menyepakati)'], ['release', 'rilis / peluncuran versi'], ['plan', 'rencana']],
      phrases: [['agree on', 'menyepakati'], ['release plan', 'rencana rilis']],
      pattern: 'D100-P2'
    },
    {
      id: 'D100-S04',
      english: "Let's hear from the pharmacy team first.",
      pronunciation: 'lets hir from de far-me-si tim ferst',
      translation: 'Mari kita dengar dari tim farmasi dulu.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['hear', 'mendengar'], ['from', 'dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['pharmacy', 'farmasi / apotek'], ['team', 'tim'], ['first', 'terlebih dahulu']],
      phrases: [['hear from', 'mendengar pendapat / kabar dari']],
      pattern: 'D100-P3'
    },
    {
      id: 'D100-S05',
      english: "We're running short on time, so let's move on.",
      pronunciation: 'wir ra-ning short on taim, sou lets muv on',
      translation: 'Waktu kita hampir habis, jadi mari kita lanjut.',
      words: [["We're", 'kita sedang (we are)', 'be'], ['running', '(bagian dari "run short on": mulai kekurangan)', 'run'], ['short', 'kurang / pendek'], ['on', '(pertama: bagian dari "short on"; kedua: bagian dari "move on")'], ['time', 'waktu'], ['so', 'jadi'], ["let's", 'mari kita (let us)', 'let'], ['move', '(bagian dari "move on": lanjut)']],
      phrases: [['run short on time', 'waktu hampir habis'], ['move on', 'lanjut ke topik berikutnya']],
      pattern: 'D100-P3'
    },
    {
      id: 'D100-S06',
      english: 'Does anyone have anything to add before we wrap up?',
      pronunciation: 'daz e-ni-wan hev e-ni-thing tu ed bi-for wi rep ap',
      translation: 'Ada yang ingin menambahkan sesuatu sebelum kita tutup?',
      words: [['Does', '(penanda pertanyaan untuk dia/itu, tidak diterjemahkan)', 'do'], ['anyone', 'seseorang / siapa pun'], ['have', 'punya'], ['anything', 'sesuatu / apa pun'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['add', 'menambahkan'], ['before', 'sebelum'], ['we', 'kita'], ['wrap', '(bagian dari "wrap up": menutup / mengakhiri)'], ['up', '(bagian dari "wrap up")']],
      phrases: [['wrap up', 'menutup / mengakhiri (meeting)']],
      pattern: 'D100-P4'
    },
    {
      id: 'D100-S07',
      english: 'To wrap up, here are the decisions and the owners.',
      pronunciation: 'tu rep ap, hir ar de di-si-zhenz en di ou-nerz',
      translation: 'Untuk menutup, berikut keputusan dan penanggung jawabnya.',
      words: [['To', '(penanda kata kerja, tidak diterjemahkan)'], ['wrap', '(bagian dari "wrap up": menutup)'], ['up', '(bagian dari "wrap up")'], ['here', 'berikut / ini dia'], ['are', 'adalah', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['decisions', 'keputusan', 'decision'], ['and', 'dan'], ['owners', 'penanggung jawab / pemilik tugas', 'owner']],
      phrases: [['to wrap up', 'untuk menutup'], ['here are', 'berikut']],
      pattern: 'D100-P4'
    },
    {
      id: 'D100-S08',
      english: "Thanks, everyone. I'll send the notes in an hour.",
      pronunciation: 'thenks, ev-ri-wan. ail send de nouts in en a-wer',
      translation: 'Terima kasih semuanya. Saya akan mengirim catatannya dalam satu jam.',
      words: [['Thanks', 'terima kasih'], ['everyone', 'semuanya'], ["I'll", 'saya akan (I will)', 'will'], ['send', 'mengirim'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['notes', 'catatan', 'note'], ['in', 'dalam (waktu)'], ['an', 'satu / sebuah (dipakai sebelum bunyi vokal)'], ['hour', 'jam']],
      phrases: [['in an hour', 'dalam satu jam']],
      pattern: 'D100-P4'
    }
  ],

  // Review: memimpin diskusi, keputusan, dan tindak lanjut dari Day 39–87.
  review: [
    { ref: 'D39-S01' },
    { ref: 'D39-S02' },
    { ref: 'D39-S07' },
    { ref: 'D43-S06' },
    { ref: 'D43-S09' },
    { ref: 'D43-S10' },
    { ref: 'D87-S08' }
  ],

  patterns: [
    {
      id: 'D100-P1',
      formula: 'Open → Goal → Agenda → Discussion → Decisions → Owners → Close',
      meaning: 'A structure for leading a short meeting.',
      examples: ["Thanks for joining. Let's get started.", 'The goal today is to agree on the release plan.', "Let's hear from the pharmacy team first.", 'To wrap up, here are the decisions and the owners.'],
      note: 'Pemimpin meeting tidak harus bicara paling banyak. Tugasnya: menjaga tujuan, waktu, giliran bicara, dan memastikan setiap keputusan punya penanggung jawab.'
    },
    {
      id: 'D100-P2',
      formula: 'The goal today is to + KATA KERJA  ·  There are + ANGKA items on the agenda',
      meaning: 'Open the meeting with a clear goal.',
      examples: ['The goal today is to choose a date for the go-live.', 'There are two items on the agenda: the training plan and the data migration.', 'The goal today is to decide who will support the night shift.']
    },
    {
      id: 'D100-P3',
      formula: "Let's hear from + SIAPA  ·  We're running short on time, so + KALIMAT",
      meaning: 'Give people a turn and manage the time.',
      examples: ["Let's hear from the QA team.", "We're running short on time, so let's park this topic.", 'Budi, what do you think? We haven\'t heard from you yet.']
    },
    {
      id: 'D100-P4',
      formula: 'To wrap up, + KALIMAT  ·  Does anyone have anything to add before we wrap up?',
      meaning: 'Close the meeting with decisions and owners.',
      examples: ['To wrap up, we\'ll go live on Monday, and Maya will prepare the training.', 'Does anyone have anything to add before we wrap up?', 'To wrap up, the open question is the printer, and I\'ll follow up with IT.']
    }
  ],

  shadowing: ['D100-S01', 'D100-S03', 'D100-S05', 'D100-S07'],

  speaking: [
    { q: 'Open a meeting about the pharmacy module release. Say thank you, the time, the goal, and the agenda.', qId: 'Buka meeting tentang rilis modul farmasi. Ucapkan terima kasih, sebutkan waktu, tujuan, dan agenda.', hint: "Thanks for joining. Let's get started. We have ... The goal today is to ... There are ... items on the agenda: ...", example: "Thanks for joining. Let's get started. We have thirty minutes. The goal today is to agree on the release plan for the pharmacy module. There are three items on the agenda: the test results, the training, and the go-live date." },
    { q: 'Two people are discussing a small detail for too long. Manage the time politely.', qId: 'Dua orang membahas detail kecil terlalu lama. Atur waktu dengan sopan.', hint: "Thanks, these are good points. We're running short on time, so ... Let's take this offline / park this topic ... Let's move on to ...", example: "Thanks, these are both good points. We're running short on time, so let's take this offline. Could you two meet after this call? Let's move on to the training plan." },
    { q: 'Close the meeting: summarize the decisions, the owners, and the next step.', qId: 'Tutup meeting: rangkum keputusan, penanggung jawab, dan langkah berikutnya.', hint: "Does anyone have anything to add before we wrap up? To wrap up, ... will ... by ... Thanks, everyone. I'll send ...", example: "Does anyone have anything to add before we wrap up? Okay. To wrap up, here are the decisions and the owners. We'll go live next Monday. Maya will run the training on Thursday, and Budi will check the stock data. Thanks, everyone. I'll send the notes in an hour." },
    { q: 'LEAD A MEETING: Lead a 5-minute weekly meeting about the pharmacy module release. Open, share the goal and the agenda, give people turns, handle the interruptions in the follow-up questions, make decisions, assign owners, and close.', qId: 'PIMPIN MEETING: Pimpin meeting mingguan 5 menit tentang rilis modul farmasi. Buka, sampaikan tujuan dan agenda, beri giliran, tangani interupsi dari follow-up question, ambil keputusan, tentukan penanggung jawab, lalu tutup. Timer 5 menit opsional.', hint: "Thanks for joining ... The goal today is ... Let's hear from ... We're running short on time ... To wrap up, here are the decisions and the owners ...", outline: [
      'Open: thanks + time available',
      'Goal and agenda: one goal, two or three items',
      'Turns: ask each team for a short update',
      'Handle interruptions: park, answer briefly, or assign an owner',
      'Decisions: what the team agreed',
      'Owners: who does what, and by when',
      'Close: anything to add? + notes'
    ], followUps: [
      'Sorry, can we also discuss the printer problem in the pharmacy?',
      "I don't agree with the release date. The pharmacists are not ready.",
      'Who will inform the pharmacists about the change?'
    ], example: [
      "Thanks for joining, everyone. Let's get started. We have fifteen minutes. The goal today is to agree on the release plan for the pharmacy module. There are three items on the agenda: test results, training, and the go-live date.",
      "Let's hear from QA first. ... Thanks. So all critical bugs are fixed, and two minor bugs are left.",
      "About the printer problem, that's important, but it's not on today's agenda. Let's park it. Budi, could you follow up with IT after this meeting?",
      "About the release date, I understand your concern. What if we keep Monday for the main pharmacy only, and the other pharmacies go live one week later? Does everyone agree with that? Great.",
      "To wrap up, here are the decisions and the owners. The main pharmacy goes live on Monday. Maya will inform the pharmacists and run the training on Thursday. Budi will follow up on the printer. Does anyone have anything to add before we wrap up? Thanks, everyone. I'll send the notes in an hour."
    ], timers: [5] }
  ],

  talk321: null
});
