E90.registerDay({
  day: 60,
  titleId: 'Checkpoint Work English 2',
  goal: 'Simulasi project meeting 5–7 menit bersama atasan dan tim: status, yang selesai, sisa pekerjaan, keterlambatan dan alasannya, konfirmasi requirement, pendapat, perbandingan opsi, risiko, solusi, negosiasi deadline, penanggung jawab, dan langkah berikutnya. Tidak perlu sempurna; bicara tanpa membaca script.',

  // Sedikit kalimat baru: penghubung untuk update proyek yang lebih panjang.
  learn: [
    {
      id: 'D60-S01',
      english: "Thanks, everyone. Let me start with a quick status update.",
      pronunciation: 'thengks, ev-ri-wan. let mi start with e kwik stei-tes ap-deit',
      translation: 'Terima kasih semuanya. Saya mulai dengan update status singkat.',
      words: [['Thanks', 'terima kasih', 'thank'], ['everyone', 'semua orang'], ['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['start', 'mulai'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'singkat'], ['status', 'status / keadaan'], ['update', 'kabar terbaru / update']],
      pattern: 'D60-P1'
    },
    {
      id: 'D60-S02',
      english: "Overall, we're about eighty percent done.",
      pronunciation: 'ou-ve-rol, wir e-baut ei-ti per-sent dan',
      translation: 'Secara keseluruhan, kami sudah sekitar delapan puluh persen selesai.',
      words: [['Overall', 'secara keseluruhan'], ["we're", 'kami (we are)', 'be'], ['about', 'sekitar'], ['eighty', 'delapan puluh'], ['percent', 'persen'], ['done', 'selesai', 'do']],
      pattern: 'D60-P2'
    },
    {
      id: 'D60-S03',
      english: "There's one thing I'd like to raise.",
      pronunciation: 'derz wan thing aid laik tu reiz',
      translation: 'Ada satu hal yang ingin saya sampaikan.',
      words: [["There's", 'ada (there is)', 'be'], ['one', 'satu'], ['thing', 'hal'], ["I'd", 'saya ingin (I would, dalam "I\'d like")', 'will'], ['like', 'ingin (dalam "would like")'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['raise', 'menyampaikan / mengangkat (masalah)']],
      phrases: [['raise an issue', 'menyampaikan masalah di rapat (bukan "menaikkan")']],
      pattern: 'D60-P3'
    },
    {
      id: 'D60-S04',
      english: 'My main concern is the testing time.',
      pronunciation: 'mai mein ken-sern iz de tes-ting taim',
      translation: 'Kekhawatiran utama saya adalah waktu pengujiannya.',
      words: [['My', 'milik saya'], ['main', 'utama'], ['concern', 'kekhawatiran'], ['is', 'adalah', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['testing', 'pengujian / testing', 'test'], ['time', 'waktu']],
      pattern: 'D60-P3'
    },
    {
      id: 'D60-S05',
      english: 'To solve this, I suggest we split the work.',
      pronunciation: 'tu solv dis, ai sag-jest wi split de werk',
      translation: 'Untuk mengatasinya, saya sarankan kita bagi pekerjaannya.',
      words: [['To', 'untuk (penanda tujuan)'], ['solve', 'mengatasi / memecahkan'], ['this', 'ini / hal ini'], ['I', 'saya'], ['suggest', 'menyarankan'], ['we', 'kita'], ['split', 'membagi'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['work', 'pekerjaan']],
      pattern: 'D60-P4'
    },
    {
      id: 'D60-S06',
      english: 'Does everyone agree with this plan?',
      pronunciation: 'daz ev-ri-wan e-gri with dis plen?',
      translation: 'Semua setuju dengan rencana ini?',
      words: [['Does', '(kata bantu pertanyaan untuk he/she/it/everyone, tidak diterjemahkan)', 'do'], ['everyone', 'semua orang'], ['agree', 'setuju'], ['with', 'dengan'], ['this', 'ini'], ['plan', 'rencana']],
      phrases: [['everyone + does', '"everyone" dianggap tunggal, jadi pakai "does"']]
    },
    {
      id: 'D60-S07',
      english: 'Let me quickly go over the next steps.',
      pronunciation: 'let mi kwik-li gou ou-ver de nekst steps',
      translation: 'Saya rangkum cepat langkah-langkah berikutnya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['quickly', 'dengan cepat', 'quick'], ['go', '(bagian dari "go over")'], ['over', '(bagian dari "go over")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['next', 'berikutnya'], ['steps', 'langkah (jamak)', 'step']],
      phrases: [['go over', 'membahas ulang / merangkum']],
      pattern: 'D60-P5'
    }
  ],

  // Review aktif Phase 2: satu kalimat untuk setiap bagian simulasi.
  review: [
    { ref: 'D46-S02' },
    { ref: 'D46-S05' },
    { ref: 'D48-S02' },
    { ref: 'D47-S04' },
    { ref: 'D52-S01' },
    { ref: 'D57-S01' },
    { ref: 'D50-S06' },
    { ref: 'D58-S03' },
    { ref: 'D41-S05' },
    { ref: 'D51-S01' },
    { ref: 'D59-S10' }
  ],

  patterns: [
    {
      id: 'D60-P1',
      formula: 'Status → Done → Remaining → Delay & reason → Requirement → Options → Risk → Solution → Deadline → Owner → Next steps',
      meaning: 'A structure for a longer project update.',
      examples: ['Let me start with a quick status update.', "So far, we've finished the main pages.", "There's been a delay because we needed more information.", 'Let me quickly go over the action items.'],
      note: 'Tidak harus urut sempurna. Pakai penghubung supaya pendengar bisa mengikuti.'
    },
    {
      id: 'D60-P2',
      formula: "We're about + ANGKA + percent done",
      meaning: 'Give progress as a simple number.',
      examples: ["We're about half done.", "We're about ninety percent done.", "We're almost there."],
      note: '"half done" = setengah selesai.'
    },
    {
      id: 'D60-P3',
      formula: "There's one thing I'd like to raise  ·  My main concern is + BENDA",
      meaning: 'Bring up a risk or a concern.',
      examples: ["There's one issue I'd like to raise.", 'My main concern is the budget.', "I'm a little worried about the timeline."]
    },
    {
      id: 'D60-P4',
      formula: 'To solve this, I suggest we + KATA KERJA',
      meaning: 'Connect a problem to a solution.',
      examples: ['To solve this, I suggest we add one more tester.', 'To avoid delays, I suggest we start earlier.', 'To save time, I suggest we skip this step.']
    },
    {
      id: 'D60-P5',
      formula: 'Let me go over + BENDA  ·  So, to sum up, ...',
      meaning: 'Summarize at the end of a meeting.',
      examples: ['Let me go over the action items.', "So, to sum up, we'll launch on the 20th.", 'Let me recap what we agreed.']
    }
  ],

  shadowing: ['D60-S01', 'D60-S03', 'D60-S05', 'D60-S07'],

  speaking: [
    { q: 'Part 1: Give a status update. Say what is completed, what remains, and how much is done.', qId: 'Bagian 1: Beri update status: yang sudah selesai, yang tersisa, dan berapa persen selesai.', hint: "Let me start with a quick status update. So far, ... The remaining work is ... We're about ... percent done.", example: "Let me start with a quick status update. So far, we've finished the customer pages and the login. The remaining work is the payment page and the final testing. Overall, we're about seventy percent done." },
    { q: 'Part 2: Mention a delay, explain why it happened, and confirm one requirement.', qId: 'Bagian 2: Sebutkan keterlambatan, alasannya, lalu konfirmasi satu requirement.', hint: "There's been a delay with ... because ... Just to confirm, ...?", example: "There's been a delay with the payment page because the client changed the design last week. Just to confirm, do we still need to support two currencies?" },
    { q: 'Part 3: Compare two options, give your opinion, and mention one risk.', qId: 'Bagian 3: Bandingkan dua opsi, beri pendapat, dan sebutkan satu risiko.', hint: 'We have two options. The first option is ..., but ... I think ... is the better option. My main concern is ...', example: "We have two options. The first option is to launch everything next month, but it takes longer. The second option is to launch the basic version first. I think the second one is the better option. My main concern is the testing time." },
    { q: 'Part 4: Suggest a solution, negotiate the deadline, confirm who owns each task, and summarize the next steps.', qId: 'Bagian 4: Usulkan solusi, negosiasi deadline, pastikan penanggung jawab tiap tugas, dan rangkum langkah berikutnya.', hint: "To solve this, I suggest we ... Can we move the deadline to ...? I'll handle ... Let me go over the next steps.", example: "To solve this, I suggest we split the work. Can we move the full launch to the 25th? I'll handle the payment page, and Maya will own the testing. Let me go over the next steps: I'll send the updated plan today, and we'll check the progress on Friday." },
    { q: 'FINAL WORK SIMULATION: You are in a project meeting with your manager and team. Speak for 5–7 minutes without reading. Give a status update, explain what is completed and what remains, mention a delay and why it happened, confirm a requirement, give an opinion, compare two options, mention a concern or risk, suggest a solution, negotiate the deadline if needed, confirm ownership, and summarize the next steps.', qId: 'SIMULASI AKHIR: Kamu ikut project meeting bersama atasan dan tim. Bicara 5–7 menit tanpa membaca, mencakup ketiga belas poin. Timer di bawah boleh dipakai (opsional). Jangan hafalkan contoh — pakai proyek dan situasimu sendiri.', hint: "Let me start with a quick status update ... So far ... The remaining work ... There's been a delay because ... Just to confirm ... We have two options ... I think ... My main concern ... To solve this, I suggest ... Can we move ...? I'll handle ... Let me go over the next steps.", example: "Thanks, everyone. Let me start with a quick status update on the customer portal. So far, we've finished the login, the profile page, and most of the reports. The remaining work is the payment page and the final testing. Overall, we're about seventy percent done. We're slightly behind schedule. There's been a delay with the payment page. The reason is that the client changed the design last week, so we needed more information before we could continue. Just to confirm, the client still needs two currencies in the first version, right? Okay, thank you. In my opinion, we should focus on quality, because this is the part where people pay. We have two options. The first option is to launch everything together next month. The advantage is that users get the full product, but it takes longer. The second option is to launch the basic version on time and add the payment page two weeks later. It's a trade-off, but I think the second one is the better option. There's one thing I'd like to raise. My main concern is the testing time. If we rush it, we might miss important bugs. To solve this, I suggest we split the work: two people finish the payment page, and one person starts testing the other pages now. Tom, I see your point about launching everything together, but I'm not sure we can do that without more people. So, can we move the full launch to the 25th and keep the basic launch on the 10th? That sounds reasonable to me. For ownership, I'll handle the payment page, Maya will own the testing, and Budi will take care of the client updates. Let me quickly go over the next steps. First, I'll send the updated plan today. After that, Maya will share the test checklist by Wednesday. We'll follow up on Friday to check the progress. Does everyone agree with this plan? Great. From my side, that's everything.", timers: [5, 7] }
  ],

  talk321: null
});
