E90.registerDay({
  day: 45,
  titleId: 'Checkpoint Work English 1',
  goal: 'Simulasi team meeting 3–5 menit: memperkenalkan peran, menjelaskan tugas, progres, deadline, blocker, minta bantuan, memberi pendapat, tidak setuju dengan sopan, dan langkah selanjutnya. Tidak perlu sempurna, yang penting maksudnya tersampaikan tanpa membaca script.',

  // Sedikit kalimat baru: penghubung untuk update di team meeting.
  learn: [
    {
      id: 'D45-S01',
      english: "Hi everyone, I'm {name}, and I work as a developer on this team.",
      pronunciation: 'hai ev-ri-wan, aim ..., en ai werk ez e di-ve-lo-per on dis tim',
      translation: 'Halo semuanya, saya ..., dan saya bekerja sebagai developer di tim ini.',
      words: [['Hi', 'halo / hai'], ['everyone', 'semua orang'], ["I'm", 'saya (I am)', 'be'], ['{name}', '(isi dengan namamu)'], ['and', 'dan'], ['I', 'saya'], ['work', 'bekerja'], ['as', 'sebagai'], ['a', 'seorang (tidak diterjemahkan)'], ['developer', 'pengembang'], ['on', 'di (dalam tim)'], ['this', 'ini'], ['team', 'tim']],
      pattern: 'D45-P1'
    },
    {
      id: 'D45-S02',
      english: 'Let me give you a quick update on my task.',
      pronunciation: 'let mi giv yu e kwik ap-deit on mai task',
      translation: 'Saya beri update singkat tentang tugas saya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['give', 'memberi'], ['you', 'kepada kalian'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'singkat'], ['update', 'kabar terbaru / update'], ['on', 'tentang'], ['my', 'milik saya'], ['task', 'tugas']],
      pattern: 'D26-P3'
    },
    {
      id: 'D45-S03',
      english: "Right now, I'm working on the new report page.",
      pronunciation: 'rait nau, aim wer-king on de nyu ri-port peij',
      translation: 'Saat ini saya sedang mengerjakan halaman laporan yang baru.',
      words: [['Right', 'tepat (dalam "right now")'], ['now', 'sekarang'], ["I'm", 'saya sedang (I am)', 'be'], ['working', 'mengerjakan (dalam "work on")', 'work'], ['on', '(bagian dari "work on")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['report', 'laporan'], ['page', 'halaman']],
      phrases: [['right now', 'saat ini']],
      pattern: 'D16-P2'
    },
    {
      id: 'D45-S04',
      english: 'The main challenge is the deadline.',
      pronunciation: 'de mein che-lenj iz de ded-lain',
      translation: 'Tantangan utamanya adalah deadline-nya.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['challenge', 'tantangan'], ['is', 'adalah', 'be'], ['deadline', 'tenggat waktu / deadline']],
      pattern: 'D45-P2'
    },
    {
      id: 'D45-S05',
      english: "I'd like to ask for your advice on this.",
      pronunciation: 'aid laik tu esk for yor ed-vais on dis',
      translation: 'Saya ingin minta saran kalian soal ini.',
      words: [["I'd", 'saya ingin (I would, dalam "I\'d like")', 'will'], ['like', 'ingin (dalam "would like")'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['ask', 'meminta (dalam "ask for")'], ['for', '(bagian dari "ask for")'], ['your', 'milik kalian'], ['advice', 'saran'], ['on', 'tentang / soal'], ['this', 'ini']],
      phrases: [['ask for + benda', 'meminta ...']],
      pattern: 'D45-P3'
    },
    {
      id: 'D45-S06',
      english: "From my side, that's everything.",
      pronunciation: 'from mai said, dets ev-ri-thing',
      translation: 'Dari saya, sekian.',
      words: [['From', 'dari'], ['my', 'milik saya'], ['side', 'sisi / pihak'], ["that's", 'itu (that is)', 'that'], ['everything', 'semuanya']],
      phrases: [["from my side, that's everything", 'dari saya sekian (menutup giliran bicara)']],
      pattern: 'D45-P1'
    },
    {
      id: 'D45-S07',
      english: 'Does that sound okay?',
      pronunciation: 'daz det saund ou-kei?',
      translation: 'Bagaimana, oke?',
      words: [['Does', '(kata bantu pertanyaan untuk it/that, tidak diterjemahkan)', 'do'], ['that', 'itu'], ['sound', 'terdengar'], ['okay', 'oke / baik']],
      phrases: [['does that sound okay?', 'bagaimana, setuju? (minta tanggapan dengan sopan)']]
    }
  ],

  // Review aktif Day 31–44: satu kalimat untuk setiap bagian simulasi.
  review: [
    { ref: 'D31-S02' },
    { ref: 'D32-S04' },
    { ref: 'D33-S04' },
    { ref: 'D34-S04' },
    { ref: 'D35-S05' },
    { ref: 'D38-S04' },
    { ref: 'D40-S01' },
    { ref: 'D41-S05' },
    { ref: 'D42-S04' },
    { ref: 'D43-S04' },
    { ref: 'D44-S08' }
  ],

  patterns: [
    {
      id: 'D45-P1',
      formula: 'Role → Task → Progress → Deadline → Blocker → Question → Next step',
      meaning: 'Struktur update di team meeting',
      examples: ['I work as a developer on this team.', "Right now, I'm working on the report page.", "It's almost done, and I think I can finish it by Friday.", 'The next step is to test it.'],
      note: 'Penghubung yang membantu: "Right now, ...", "The main challenge is ...", "From my side, that\'s everything."'
    },
    {
      id: 'D45-P2',
      formula: 'The main challenge is + BENDA / that + KALIMAT',
      meaning: 'Tantangan utamanya adalah ...',
      examples: ['The main challenge is the limited time.', 'The main challenge is that the data is not complete.', 'The biggest challenge is communication.']
    },
    {
      id: 'D45-P3',
      formula: "I'd like to ask for + BENDA (on + HAL)",
      meaning: 'Saya ingin meminta ...',
      examples: ["I'd like to ask for your feedback on the design.", "I'd like to ask for one more day.", "I'd like to ask for help with the testing."]
    }
  ],

  shadowing: ['D45-S01', 'D45-S02', 'D45-S04', 'D45-S06'],

  speaking: [
    { q: 'Scenario part 1: Introduce your role and explain your current task.', qId: 'Skenario bagian 1: Perkenalkan peranmu dan jelaskan tugasmu saat ini.', hint: "Hi everyone, I work as ... I'm responsible for ... Right now, I'm working on ...", example: "Hi everyone, I work as a developer on this team. I'm responsible for the mobile app. Right now, I'm working on the new login page." },
    { q: 'Scenario part 2: Explain your progress, your deadline, and one blocker.', qId: 'Skenario bagian 2: Jelaskan progres, deadline, dan satu blocker.', hint: "I've finished ... It's almost ... I think I can finish it by ... I'm blocked by / waiting for ...", example: "I've finished the design part, and it's almost done. I think I can finish it by Thursday. My blocker is that I'm waiting for the test account." },
    { q: 'Scenario part 3: Ask the team for help or clarification.', qId: 'Skenario bagian 3: Minta bantuan atau klarifikasi ke tim.', hint: "Just to clarify, ...? / Could you take a look at ...? / I'd like to ask for ...", example: "Just to clarify, do we need the English version too? Also, could someone take a look at my code later?" },
    { q: 'Scenario part 4: A teammate says: "Let\'s work overtime every day this week." Give your opinion, disagree politely, and suggest the next step.', qId: 'Skenario bagian 4: Rekan bilang: "Ayo lembur setiap hari minggu ini." Beri pendapat, tidak setuju dengan sopan, dan usulkan langkah selanjutnya.', hint: "I see your point, but ... I think we should ... The next step is ...", example: "I see your point, but I'm not sure that's the best approach. I think we should focus on the urgent tasks first. The next step is to check the priorities together." },
    { q: 'FINAL WORK SIMULATION: You are joining a short team meeting. Speak for 3–5 minutes without reading: introduce your role, explain your current task and progress, mention the deadline, explain one blocker, ask for help or clarification, give an opinion, agree or disagree politely, and explain the next step.', qId: 'SIMULASI AKHIR: Kamu ikut team meeting singkat. Bicara 3–5 menit tanpa membaca, mencakup kesembilan poin. Timer di bawah boleh dipakai (opsional). Jangan hafalkan contoh — pakai situasimu sendiri.', hint: "Hi everyone ... Right now, I'm working on ... I've finished ... The deadline is ... My blocker is ... Just to clarify ... I think we should ... I see your point, but ... The next step is ... From my side, that's everything.", example: "Hi everyone, I'm Rina, and I work as a developer on this team. I'm responsible for the customer app. Let me give you a quick update on my task. Right now, I'm working on the new report page. I've finished the layout, and it's almost done. The deadline is next Friday, and I think I can finish it by Thursday. The main challenge is the data. I'm blocked by the missing test data, and we're still waiting for the client. Just to clarify, do we need to show last year's numbers too? I'd like to ask for your advice on this. In my opinion, we should launch the simple version first and add more features later. Tom suggested adding everything now. I see your point, but I think it might take longer and we could miss the deadline. So, the next step is to confirm the data with the client tomorrow. After that, I'll update the page and share it with the team. I'll keep you posted. From my side, that's everything. Does that sound okay?", timers: [3, 5] }
  ],

  talk321: null
});
