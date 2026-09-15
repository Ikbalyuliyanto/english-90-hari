E90.registerDay({
  day: 111,
  titleId: 'Interview Problem-Solving',
  goal: 'Think out loud in a problem-solving interview: clarify the problem → state assumptions → start simple → check with an example → improve → consider edge cases. The interviewer wants to hear how you think, not only the final answer.',

  learn: [
    {
      id: 'D111-S01',
      english: 'Let me think out loud for a moment.',
      pronunciation: 'let mi thingk aut laud for e mou-ment',
      translation: 'Saya berpikir sambil bersuara sebentar, ya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['think', 'berpikir'], ['out', '(bagian dari "out loud": dengan bersuara)'], ['loud', 'keras / bersuara'], ['for', 'selama'], ['a', 'sebuah (tidak diterjemahkan)'], ['moment', 'saat / sebentar']],
      phrases: [['think out loud', 'berpikir sambil diucapkan'], ['for a moment', 'sebentar']],
      pattern: 'D111-P2'
    },
    {
      id: 'D111-S02',
      english: 'Before I start, can I ask a few clarifying questions?',
      pronunciation: 'bi-for ai start, ken ai ask e fyu kle-re-fai-ing kwes-chenz',
      translation: 'Sebelum mulai, boleh saya ajukan beberapa pertanyaan klarifikasi?',
      words: [['Before', 'sebelum'], ['I', 'saya'], ['start', 'mulai'], ['can', 'boleh / bisa'], ['ask', 'bertanya / mengajukan'], ['a', '(bagian dari "a few")'], ['few', 'beberapa'], ['clarifying', 'untuk memperjelas', 'clarify'], ['questions', 'pertanyaan', 'question']],
      phrases: [['clarifying questions', 'pertanyaan untuk memperjelas soal']],
      pattern: 'D111-P2'
    },
    {
      id: 'D111-S03',
      english: "I'm assuming that each patient has a unique ID.",
      pronunciation: 'aim e-su-ming det ich pei-shent hez e yu-nik ai-di',
      translation: 'Saya berasumsi bahwa setiap pasien punya ID yang unik.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['assuming', 'berasumsi / menganggap', 'assume'], ['that', 'bahwa'], ['each', 'setiap'], ['patient', 'pasien'], ['has', 'punya', 'have'], ['a', 'sebuah (tidak diterjemahkan)'], ['unique', 'unik / tidak ada yang sama'], ['ID', 'nomor identitas / ID']],
      phrases: [["I'm assuming that", 'saya berasumsi bahwa']],
      pattern: 'D111-P2'
    },
    {
      id: 'D111-S04',
      english: "My first idea is a simple solution, and then I'll improve it.",
      pronunciation: 'mai ferst ai-di-a iz e sim-pel se-lu-shen, en den ail im-pruv it',
      translation: 'Ide pertama saya adalah solusi sederhana, lalu akan saya perbaiki.',
      words: [['My', 'milik saya'], ['first', 'pertama'], ['idea', 'ide'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['simple', 'sederhana'], ['solution', 'solusi'], ['and', 'dan'], ['then', 'lalu'], ["I'll", 'saya akan (I will)', 'will'], ['improve', 'memperbaiki / meningkatkan'], ['it', 'itu / solusi itu']],
      pattern: 'D111-P3'
    },
    {
      id: 'D111-S05',
      english: 'This works, but it would be slow for a large list.',
      pronunciation: 'dis werks, bat it wud bi slou for e larj list',
      translation: 'Ini berhasil, tapi akan lambat untuk daftar yang besar.',
      words: [['This', 'ini'], ['works', 'berhasil / berfungsi', 'work'], ['but', 'tapi'], ['it', 'itu'], ['would', 'akan (kemungkinan)', 'will'], ['be', 'menjadi'], ['slow', 'lambat'], ['for', 'untuk'], ['a', 'sebuah (tidak diterjemahkan)'], ['large', 'besar'], ['list', 'daftar']],
      pattern: 'D111-P3'
    },
    {
      id: 'D111-S06',
      english: 'A better approach would be to use a hash map.',
      pronunciation: 'e be-ter e-prouch wud bi tu yuz e hesh mep',
      translation: 'Pendekatan yang lebih baik adalah memakai hash map.',
      words: [['A', 'sebuah (tidak diterjemahkan)'], ['better', 'lebih baik', 'good'], ['approach', 'pendekatan / cara'], ['would', 'akan (saran)', 'will'], ['be', 'adalah'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['use', 'memakai'], ['hash', 'hash (kunci pencarian cepat)'], ['map', 'map (struktur data kunci → nilai)']],
      phrases: [['hash map', 'struktur data untuk mencari berdasarkan kunci dengan cepat']],
      pattern: 'D111-P3'
    },
    {
      id: 'D111-S07',
      english: 'Let me walk through an example to check my logic.',
      pronunciation: 'let mi wok thru en eg-zem-pel tu chek mai lo-jik',
      translation: 'Saya coba jalankan satu contoh untuk mengecek logika saya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['walk', '(bagian dari "walk through": menelusuri langkah demi langkah)'], ['through', 'melalui'], ['an', 'sebuah (dipakai sebelum bunyi vokal)'], ['example', 'contoh'], ['to', '(penanda kata kerja: untuk)'], ['check', 'mengecek'], ['my', 'milik saya'], ['logic', 'logika']],
      phrases: [['walk through an example', 'menelusuri sebuah contoh langkah demi langkah']],
      pattern: 'D111-P4'
    },
    {
      id: 'D111-S08',
      english: "I'm stuck on this part, so let me go back to the requirements.",
      pronunciation: 'aim stak on dis part, sou let mi gou bek tu de ri-kwai-er-ments',
      translation: 'Saya buntu di bagian ini, jadi saya kembali ke kebutuhan soalnya dulu.',
      words: [["I'm", 'saya (I am)', 'be'], ['stuck', 'buntu / tertahan'], ['on', 'di / pada'], ['this', 'ini'], ['part', 'bagian'], ['so', 'jadi'], ['let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['go', 'pergi / kembali (dengan back)'], ['back', 'kembali'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['requirements', 'kebutuhan / persyaratan', 'requirement']],
      phrases: [['stuck on', 'buntu di'], ['go back to', 'kembali ke']],
      pattern: 'D111-P4'
    }
  ],

  // Review: investigasi dan membandingkan pendekatan dari Day 70–84.
  review: [
    { ref: 'D70-S01' },
    { ref: 'D71-S06' },
    { ref: 'D82-S01' },
    { ref: 'D82-S02' },
    { ref: 'D82-S07' },
    { ref: 'D82-S08' },
    { ref: 'D84-S01' }
  ],

  patterns: [
    {
      id: 'D111-P1',
      formula: 'Clarify → Assumptions → Simple solution → Example → Improve → Edge cases',
      meaning: 'How to think out loud in a problem-solving interview.',
      examples: ['Before I start, can I ask a few clarifying questions?', "I'm assuming that each patient has a unique ID.", "My first idea is a simple solution, and then I'll improve it.", 'Let me walk through an example to check my logic.'],
      note: 'Diam lama saat berpikir terasa canggung di interview. Ucapkan apa yang sedang kamu pikirkan, walau belum yakin. Kalau buntu, katakan dengan tenang lalu kembali ke kebutuhan soal.'
    },
    {
      id: 'D111-P2',
      formula: "Before I start, can I ask + BENDA?  ·  I'm assuming that + KALIMAT",
      meaning: 'Clarify the problem and state assumptions.',
      examples: ['Before I start, can I ask how big the data is?', "I'm assuming that the list fits in memory.", "Let me think out loud for a moment. I'm assuming that two patients can have the same name."]
    },
    {
      id: 'D111-P3',
      formula: 'This works, but + KALIMAT  ·  A better approach would be to + KATA KERJA',
      meaning: 'Start simple, then improve.',
      examples: ['This works, but it checks every pair, so it is too slow.', 'A better approach would be to sort the list first.', 'My first idea is to loop through the list twice.']
    },
    {
      id: 'D111-P4',
      formula: "Let me walk through an example to + KATA KERJA  ·  I'm stuck on this part, so let me + KATA KERJA",
      meaning: 'Check your logic and recover when stuck.',
      examples: ['Let me walk through an example with three patients.', "I'm stuck on this part, so let me try a smaller example.", 'What happens if the list is empty? Then we just return an empty result.']
    }
  ],

  shadowing: ['D111-S01', 'D111-S02', 'D111-S03', 'D111-S06'],

  speaking: [
    { q: 'How would you find duplicate patient records in a list of one million records? Think out loud.', qId: 'Pikirkan sambil bicara: klarifikasi "duplikat" itu apa, solusi sederhana, lalu perbaiki.', hint: "Before I start, can I ask ...? I'm assuming that ... My first idea is ... This works, but ... A better approach would be ...", example: "Before I start, can I ask what counts as a duplicate? Is it the same ID number, or the same name and birth date? ... Okay. I'm assuming that it's the same name and birth date. My first idea is to compare every record with every other record. This works, but it would be slow for a large list. A better approach would be to use a hash map with name plus birth date as the key. Then we only go through the list once.", followUps: ['What if the names have small spelling differences?', 'What if the data does not fit in memory?'] },
    { q: 'Doctors say the lab results page has been slow since yesterday. How would you investigate?', qId: 'Langkah investigasi berurutan: klarifikasi, ukur, hipotesis, uji. Jangan menebak penyebab.', hint: "First, I'd clarify ... Then I'd measure ... Let's not guess ... My hypothesis ... To test this, ...", example: "First, I'd clarify whether it's slow for everyone or only some doctors. Then I'd check what changed yesterday, for example a deployment. Let's not guess, so I'd look at the response times and the logs. If most of the time is spent in one query, my hypothesis would be a missing index. To test this, I'd compare the query plan on staging.", followUps: ['The logs show nothing unusual. What next?', 'How would you make sure it does not happen again?'] },
    { q: 'What do you do if you get stuck in the middle of a technical interview?', qId: 'Jawab jujur: tetap bicara, kembali ke kebutuhan, coba contoh kecil, minta petunjuk dengan sopan.', hint: "If I get stuck, I say it ... I go back to ... I try a smaller example ... If I'm still stuck, I ask ...", example: "If I get stuck, I say it calmly, so the interviewer knows what I'm thinking. I go back to the requirements and try a smaller example. If I'm still stuck, I ask a specific question, like \"Should I focus on speed or memory here?\"" },
    { q: 'PROBLEM-SOLVING: "Write the logic that decides which patient the emergency department should see next, based on urgency level and arrival time." Think out loud: clarify, assume, start simple, check with an example, improve, and cover edge cases. No code needed; explain in words.', qId: 'Jelaskan dengan kata-kata, bukan kode. Buka follow-up satu per satu seperti interviewer yang menggali.', hint: "Before I start, can I ask ...? I'm assuming that ... My first idea is ... Let me walk through an example ... This works, but ... A better approach would be ... What happens if ...?", outline: [
      'Clarify: urgency levels, ties, and how many patients',
      'Assumptions: say them out loud',
      'Simple solution: sort the list every time',
      'Example: three patients, walk through it',
      'Improve: a priority queue',
      'Edge cases: same urgency, urgency changes, empty queue',
      'Summary: the final approach in two sentences'
    ], followUps: [
      'What if a patient waits for a very long time with low urgency?',
      'What if a nurse changes the urgency of a patient who is already in the queue?',
      'How would you test this logic?'
    ], example: [
      'Before I start, can I ask a few clarifying questions? How many urgency levels are there? And if two patients have the same urgency, do we see the one who arrived first? ... Okay, five levels, and yes, first come, first served.',
      "I'm assuming that level one is the most urgent and that the queue has at most a few hundred patients.",
      'My first idea is a simple solution: every time a doctor is free, we sort the whole list by urgency level, then by arrival time, and take the first patient.',
      'Let me walk through an example to check my logic. Patient A arrived at 9:00 with level three. Patient B arrived at 9:05 with level one. Patient C arrived at 9:10 with level one. After sorting, the order is B, C, A. That looks right.',
      'This works, but sorting every time is not efficient if the queue is large. A better approach would be to use a priority queue, where the key is urgency level plus arrival time. Adding and removing a patient is then much faster.',
      'For edge cases, if the queue is empty, we return nothing. If the urgency changes, we remove the patient and add them again with the new level.',
      'So, in summary: a priority queue sorted by urgency, then arrival time, with an update step when urgency changes.'
    ] }
  ],

  talk321: null
});
