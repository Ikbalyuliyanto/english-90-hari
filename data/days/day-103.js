E90.registerDay({
  day: 103,
  titleId: 'Presentasi Teknis',
  goal: 'Memberi presentasi teknis 5–7 menit dengan struktur Context → Problem → Solution → Architecture → Result → Next Step. Latih dengan kerangka dan kata kunci, bukan script.',

  learn: [
    {
      id: 'D103-S01',
      english: 'Some context first: the hospital has four hundred beds.',
      pronunciation: 'sam kon-tekst ferst: de hos-pi-tel hez for han-dred bedz',
      translation: 'Sedikit konteks dulu: rumah sakit ini punya empat ratus tempat tidur.',
      words: [['Some', 'sedikit / beberapa'], ['context', 'konteks / latar belakang'], ['first', 'dulu / terlebih dahulu'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['hospital', 'rumah sakit'], ['has', 'punya', 'have'], ['four', 'empat'], ['hundred', 'ratus'], ['beds', 'tempat tidur', 'bed']],
      phrases: [['some context first', 'sedikit konteks dulu']],
      pattern: 'D103-P2'
    },
    {
      id: 'D103-S02',
      english: 'The problem we wanted to solve was slow discharge.',
      pronunciation: 'de prob-lem wi won-tid tu solv woz slou dis-charj',
      translation: 'Masalah yang ingin kami selesaikan adalah proses pemulangan pasien yang lambat.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['problem', 'masalah'], ['we', 'kami'], ['wanted', 'ingin (lampau)', 'want'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['solve', 'menyelesaikan'], ['was', 'adalah (lampau)', 'be'], ['slow', 'lambat'], ['discharge', 'pemulangan pasien rawat inap']],
      phrases: [['the problem we wanted to solve', 'masalah yang ingin kami selesaikan']],
      pattern: 'D103-P2'
    },
    {
      id: 'D103-S03',
      english: 'Our solution was a discharge checklist that everyone can see.',
      pronunciation: 'a-wer se-lu-shen woz e dis-charj chek-list det ev-ri-wan ken si',
      translation: 'Solusi kami adalah checklist pemulangan yang bisa dilihat semua orang.',
      words: [['Our', 'milik kami'], ['solution', 'solusi'], ['was', 'adalah (lampau)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['discharge', 'pemulangan pasien rawat inap'], ['checklist', 'daftar periksa / checklist'], ['that', 'yang'], ['everyone', 'semua orang'], ['can', 'bisa'], ['see', 'melihat']],
      pattern: 'D103-P2'
    },
    {
      id: 'D103-S04',
      english: 'On this diagram, you can see the main components.',
      pronunciation: 'on dis dai-e-grem, yu ken si de mein kem-pou-nents',
      translation: 'Di diagram ini, Anda bisa melihat komponen-komponen utamanya.',
      words: [['On', 'di / pada'], ['this', 'ini'], ['diagram', 'diagram / gambar alur'], ['you', 'Anda'], ['can', 'bisa'], ['see', 'melihat'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['components', 'komponen', 'component']],
      phrases: [['on this diagram', 'di diagram ini']],
      pattern: 'D103-P3'
    },
    {
      id: 'D103-S05',
      english: 'The key idea is that each team updates its own step.',
      pronunciation: 'de ki ai-di-a iz det ich tim ap-deits its oun step',
      translation: 'Ide utamanya adalah setiap tim memperbarui langkahnya sendiri.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['key', 'kunci / utama'], ['idea', 'ide'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['each', 'setiap'], ['team', 'tim'], ['updates', 'memperbarui', 'update'], ['its', 'miliknya (untuk benda / kelompok)'], ['own', 'sendiri'], ['step', 'langkah']],
      phrases: [['the key idea is that', 'ide utamanya adalah'], ['its own', 'miliknya sendiri']],
      pattern: 'D103-P3'
    },
    {
      id: 'D103-S06',
      english: 'After three months, discharge time went down from five hours to three.',
      pronunciation: 'ef-ter thri manths, dis-charj taim went daun from faiv a-werz tu thri',
      translation: 'Setelah tiga bulan, waktu pemulangan turun dari lima jam menjadi tiga jam.',
      words: [['After', 'setelah'], ['three', 'tiga'], ['months', 'bulan', 'month'], ['discharge', 'pemulangan pasien rawat inap'], ['time', 'waktu'], ['went', '(bagian dari "go down": turun, lampau)', 'go'], ['down', 'turun'], ['from', 'dari'], ['five', 'lima'], ['hours', 'jam', 'hour'], ['to', 'menjadi / ke']],
      phrases: [['go down from ... to ...', 'turun dari ... menjadi ...']],
      pattern: 'D103-P4'
    },
    {
      id: 'D103-S07',
      english: 'Our next step is to roll it out to all wards.',
      pronunciation: 'a-wer nekst step iz tu roul it aut tu ol wordz',
      translation: 'Langkah kami berikutnya adalah menerapkannya ke semua bangsal.',
      words: [['Our', 'milik kami'], ['next', 'berikutnya'], ['step', 'langkah'], ['is', 'adalah', 'be'], ['to', '(pertama: penanda kata kerja; kedua: ke)'], ['roll', '(bagian dari "roll out": menerapkan secara bertahap)'], ['it', 'itu / sistem itu'], ['out', '(bagian dari "roll out")'], ['all', 'semua'], ['wards', 'bangsal / ruang rawat', 'ward']],
      phrases: [['roll out', 'menerapkan / meluncurkan ke lebih banyak pengguna']],
      pattern: 'D103-P4'
    },
    {
      id: 'D103-S08',
      english: 'That brings me to the end of my presentation.',
      pronunciation: 'det bringz mi tu di end ov mai pre-zen-tei-shen',
      translation: 'Sampai di sini presentasi saya.',
      words: [['That', 'itu'], ['brings', 'membawa', 'bring'], ['me', 'saya (sebagai objek)'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan; dibaca "di" sebelum vokal)'], ['end', 'akhir'], ['of', 'dari'], ['my', 'milik saya'], ['presentation', 'presentasi']],
      phrases: [['that brings me to the end of', 'sampai di sini ... saya (penutup presentasi)']],
      pattern: 'D103-P4'
    }
  ],

  // Review: bahasa presentasi dan arsitektur dari Day 76 dan 89.
  review: [
    { ref: 'D89-S01' },
    { ref: 'D89-S02' },
    { ref: 'D89-S03' },
    { ref: 'D89-S05' },
    { ref: 'D89-S06' },
    { ref: 'D89-S12' },
    { ref: 'D76-S02' }
  ],

  patterns: [
    {
      id: 'D103-P1',
      formula: 'Context → Problem → Solution → Architecture → Result → Next Step',
      meaning: 'A structure for a technical presentation.',
      examples: ['Some context first: the hospital has four hundred beds.', 'The problem we wanted to solve was slow discharge.', 'On this diagram, you can see the main components.', 'Our next step is to roll it out to all wards.'],
      note: 'Siapkan satu slide per bagian, masing-masing dengan 3–5 kata kunci. Bicara dari kata kunci, jangan membaca slide.'
    },
    {
      id: 'D103-P2',
      formula: 'Some context first: + KALIMAT  ·  The problem we wanted to solve was + BENDA  ·  Our solution was + BENDA',
      meaning: 'Open with context, problem, and solution.',
      examples: ['Some context first: our lab processes two thousand samples a day.', 'The problem we wanted to solve was duplicate patient records.', 'Our solution was a matching service that checks name, birth date, and ID number.']
    },
    {
      id: 'D103-P3',
      formula: 'On this diagram, you can see + BENDA  ·  The key idea is that + KALIMAT',
      meaning: 'Explain a diagram and the main idea.',
      examples: ['On this diagram, you can see how the lab system talks to our API.', 'The key idea is that the doctor never has to type the result.', 'On the left, you can see the frontend. On the right, you can see the database.']
    },
    {
      id: 'D103-P4',
      formula: 'After + WAKTU, + BENDA went down/up from + ANGKA to + ANGKA  ·  Our next step is to + KATA KERJA',
      meaning: 'Show the result and the next step.',
      examples: ['After two months, duplicate records went down from three hundred to twenty.', 'Our next step is to add the same check to the emergency department.', 'That brings me to the end of my presentation. Thank you.']
    }
  ],

  shadowing: ['D103-S02', 'D103-S04', 'D103-S05', 'D103-S06'],

  speaking: [
    { q: 'Open a technical presentation: greet the audience, give the topic, some context, and the problem.', qId: 'Buka presentasi teknis: sapa audiens, sebutkan topik, konteks, dan masalahnya.', hint: "Good morning, everyone. Today, I'll present ... Some context first: ... The problem we wanted to solve was ...", example: "Good morning, everyone. Today, I'll present how we made patient discharge faster. Some context first: the hospital has four hundred beds, and about sixty patients go home every day. The problem we wanted to solve was slow discharge. Patients waited up to five hours after the doctor said they could go home." },
    { q: 'Explain the solution and the architecture, as if you are showing a diagram.', qId: 'Jelaskan solusi dan arsitekturnya, seolah kamu sedang menunjukkan diagram.', hint: 'Our solution was ... On this diagram, you can see ... The key idea is that ... When ..., the system ...', example: 'Our solution was a discharge checklist that everyone can see. On this diagram, you can see the main components: the checklist screen, the discharge service, and the existing billing and pharmacy modules. The key idea is that each team updates its own step. When all steps are done, the nurse gets a notification.', followUps: ['Why didn\'t you build it inside the billing module?', 'How do the pharmacy and billing modules send updates?'] },
    { q: 'Present the results and the next steps, then close the presentation.', qId: 'Sampaikan hasil dan langkah berikutnya, lalu tutup presentasinya.', hint: 'After ..., ... went down from ... to ... Our next step is to ... To summarize, ... That brings me to the end of my presentation.', example: "After three months, discharge time went down from five hours to three. Nurses also make fewer phone calls. Our next step is to roll it out to all wards. To summarize, a simple shared checklist saved patients about two hours. That brings me to the end of my presentation. I'm happy to take questions." },
    { q: 'TECHNICAL PRESENTATION: Give a 5–7 minute presentation about one technical improvement. Use the structure Context → Problem → Solution → Architecture → Result → Next Step. Speak from keywords, not from a script.', qId: 'PRESENTASI TEKNIS: Presentasi 5–7 menit tentang satu perbaikan teknis dengan struktur Context → Problem → Solution → Architecture → Result → Next Step. Bicara dari kata kunci, bukan script. Timer opsional.', hint: "Today, I'll present ... I'll cover ... Some context first ... The problem we wanted to solve ... Our solution ... On this diagram ... The key idea ... After ..., ... Our next step ... That brings me to the end ...", outline: [
      'Intro: topic + "I\'ll cover ..." (the parts of your talk)',
      'Context: the place, the users, and the numbers',
      'Problem: what was wrong and who was affected',
      'Solution: the idea in one or two sentences',
      'Architecture: the main components and one flow',
      'Result: before and after, with numbers',
      'Next step: what comes next',
      'Close: summary + invite questions'
    ], followUps: [
      'What was the hardest part to build?',
      'How did the nurses react at the beginning?'
    ], example: [
      "Good morning, everyone. Today, I'll present how we made patient discharge faster. I'll cover the context, the problem, our solution and architecture, the results, and the next steps.",
      'Some context first: the hospital has four hundred beds, and about sixty inpatients go home every day. Before a patient can leave, many teams must finish their part: the doctor, the nurse, the pharmacy, and billing.',
      'The problem we wanted to solve was slow discharge. Patients waited up to five hours after the doctor said they could go home. Beds stayed full, and new patients waited in the emergency department. Nobody could see which step was blocking.',
      'Our solution was a discharge checklist that everyone can see. The key idea is that each team updates its own step, instead of calling the nurse.',
      'On this diagram, you can see the main components. On the left is the checklist screen. In the middle is a small discharge service. On the right are the existing pharmacy and billing modules. When the pharmacy finishes the medicine, it publishes an event, and the checklist is updated automatically. When all steps are done, the nurse gets a notification.',
      'After three months, discharge time went down from five hours to three. Phone calls to the ward went down by about half, and the bed for the next patient is ready earlier.',
      'Our next step is to roll it out to all wards and add the checklist to the patient portal, so families know when to come.',
      "To summarize, a simple shared checklist saved patients about two hours. That brings me to the end of my presentation. I'm happy to take any questions."
    ], timers: [5, 7] }
  ],

  talk321: { topic: 'Present one technical improvement you made or know well: the problem, your solution, and the result.' }
});
