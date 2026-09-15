E90.registerDay({
  day: 104,
  titleId: 'Menjawab Pertanyaan Setelah Presentasi',
  goal: 'Menjawab pertanyaan setelah presentasi: berterima kasih, memastikan maksud pertanyaan, menjawab singkat, mengakui kekurangan, dan jujur saat tidak tahu. Do not invent information — lebih baik janji mengecek daripada mengarang angka.',

  learn: [
    {
      id: 'D104-S01',
      english: 'Thanks for the question.',
      pronunciation: 'thenks for de kwes-chen',
      translation: 'Terima kasih atas pertanyaannya.',
      words: [['Thanks', 'terima kasih'], ['for', 'atas'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['question', 'pertanyaan']],
      pattern: 'D104-P1'
    },
    {
      id: 'D104-S02',
      english: 'So your question is whether the checklist works at night, right?',
      pronunciation: 'sou yor kwes-chen iz we-der de chek-list werks et nait, rait',
      translation: 'Jadi pertanyaan Anda adalah apakah checklist-nya berfungsi di malam hari, benar?',
      words: [['So', 'jadi'], ['your', 'milik Anda'], ['question', 'pertanyaan'], ['is', 'adalah', 'be'], ['whether', 'apakah'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['checklist', 'daftar periksa / checklist'], ['works', 'berfungsi', 'work'], ['at', 'pada / di'], ['night', 'malam'], ['right', 'benar']],
      phrases: [['your question is whether', 'pertanyaan Anda adalah apakah'], ['right?', 'benar? (meminta konfirmasi)']],
      pattern: 'D104-P2'
    },
    {
      id: 'D104-S03',
      english: "I don't have that number with me right now.",
      pronunciation: 'ai dount hev det nam-ber with mi rait nau',
      translation: 'Saya tidak memegang angka itu sekarang.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)', 'do'], ['have', 'punya / memegang'], ['that', 'itu'], ['number', 'angka'], ['with', 'bersama'], ['me', 'saya (sebagai objek)'], ['right', '(bagian dari "right now")'], ['now', 'sekarang']],
      phrases: [['with me', 'yang saya bawa / di tangan saya'], ['right now', 'saat ini juga']],
      pattern: 'D104-P3'
    },
    {
      id: 'D104-S04',
      english: "I don't want to guess, so I'll check and send it to you today.",
      pronunciation: 'ai dount wont tu ges, sou ail chek en send it tu yu tu-dei',
      translation: 'Saya tidak mau menebak, jadi saya akan cek dan mengirimkannya ke Anda hari ini.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)', 'do'], ['want', 'mau / ingin'], ['to', '(pertama: penanda kata kerja; kedua: ke)'], ['guess', 'menebak'], ['so', 'jadi'], ["I'll", 'saya akan (I will)', 'will'], ['check', 'mengecek'], ['and', 'dan'], ['send', 'mengirim'], ['it', 'itu / datanya'], ['you', 'Anda'], ['today', 'hari ini']],
      phrases: [["I don't want to guess", 'saya tidak mau menebak']],
      pattern: 'D104-P3'
    },
    {
      id: 'D104-S05',
      english: "That's outside my area, but our data team can answer it.",
      pronunciation: 'dets aut-said mai e-ri-a, bat a-wer dei-ta tim ken en-ser it',
      translation: 'Itu di luar bidang saya, tapi tim data kami bisa menjawabnya.',
      words: [["That's", 'itu (that is)', 'that'], ['outside', 'di luar'], ['my', 'milik saya'], ['area', 'bidang / area'], ['but', 'tapi'], ['our', 'milik kami'], ['data', 'data'], ['team', 'tim'], ['can', 'bisa'], ['answer', 'menjawab'], ['it', 'itu / pertanyaan itu']],
      phrases: [['outside my area', 'di luar bidang saya']],
      pattern: 'D104-P3'
    },
    {
      id: 'D104-S06',
      english: "That's a fair point, and we haven't solved it yet.",
      pronunciation: 'dets e fer point, en wi he-vent solvd it yet',
      translation: 'Poin itu masuk akal, dan kami memang belum menyelesaikannya.',
      words: [["That's", 'itu adalah (that is)', 'that'], ['a', 'sebuah (tidak diterjemahkan)'], ['fair', 'adil / masuk akal'], ['point', 'poin / pendapat'], ['and', 'dan'], ['we', 'kami'], ["haven't", 'belum (have not)', 'have'], ['solved', 'menyelesaikan (bentuk ke-3)', 'solve'], ['it', 'itu / masalah itu'], ['yet', 'belum (dalam kalimat negatif)']],
      phrases: [["that's a fair point", 'poin yang masuk akal']],
      pattern: 'D104-P4'
    },
    {
      id: 'D104-S07',
      english: 'Short answer: yes. Long answer: it depends on the ward.',
      pronunciation: 'short en-ser: yes. long en-ser: it di-pendz on de word',
      translation: 'Jawaban singkatnya: ya. Jawaban panjangnya: tergantung bangsalnya.',
      words: [['Short', 'singkat / pendek'], ['answer', 'jawaban'], ['yes', 'ya'], ['Long', 'panjang'], ['it', 'itu (tidak diterjemahkan)'], ['depends', 'tergantung', 'depend'], ['on', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['ward', 'bangsal / ruang rawat']],
      phrases: [['it depends on', 'tergantung pada']],
      pattern: 'D104-P4'
    },
    {
      id: 'D104-S08',
      english: 'Does that answer your question?',
      pronunciation: 'daz det en-ser yor kwes-chen',
      translation: 'Apakah itu menjawab pertanyaan Anda?',
      words: [['Does', '(penanda pertanyaan untuk dia/itu, tidak diterjemahkan)', 'do'], ['that', 'itu'], ['answer', 'menjawab'], ['your', 'milik Anda'], ['question', 'pertanyaan']],
      pattern: 'D104-P1'
    }
  ],

  // Review: bahasa Q&A dan klarifikasi dari Day 38, 84, dan 89.
  review: [
    { ref: 'D89-S07' },
    { ref: 'D89-S08' },
    { ref: 'D89-S09' },
    { ref: 'D89-S10' },
    { ref: 'D89-S13' },
    { ref: 'D84-S08' },
    { ref: 'D38-S01' }
  ],

  patterns: [
    {
      id: 'D104-P1',
      formula: 'Thank → Check the question → Answer briefly → Check again',
      meaning: 'A simple structure for answering a question.',
      examples: ['Thanks for the question.', 'So your question is whether the checklist works at night, right?', 'Yes, the night nurses use the same screen.', 'Does that answer your question?'],
      note: 'Jawaban Q&A yang baik biasanya 2–4 kalimat. Kalau penanya ingin lebih, mereka akan bertanya lagi.'
    },
    {
      id: 'D104-P2',
      formula: 'So your question is whether + KALIMAT, right?  ·  If I understand correctly, you\'re asking about + BENDA',
      meaning: 'Repeat the question to check it and gain thinking time.',
      examples: ['So your question is whether patients can see the checklist, right?', "If I understand correctly, you're asking about the cost of the servers.", 'So your question is how we handle weekends, right?']
    },
    {
      id: 'D104-P3',
      formula: "I don't want to guess, so I'll + KATA KERJA  ·  That's outside my area, but + KALIMAT",
      meaning: 'Be honest when you do not know. Do not invent information.',
      examples: ["I don't want to guess, so I'll check the logs and send you the exact number.", "That's outside my area, but I can connect you with the security team.", "I don't have that number with me right now, but I'll email it after the meeting."],
      note: 'Do not invent information. Mengarang angka di depan manager atau klien jauh lebih berbahaya daripada berkata "I\'ll check".'
    },
    {
      id: 'D104-P4',
      formula: "That's a fair point, and + KALIMAT  ·  Short answer: ... Long answer: ...",
      meaning: 'Accept criticism and handle complex questions.',
      examples: ["That's a fair point, and it's on our list for next quarter.", 'Short answer: no. Long answer: we can, but it needs another server.', "That's a fair point. We tested it with only two wards so far."]
    }
  ],

  shadowing: ['D104-S02', 'D104-S04', 'D104-S06', 'D104-S07'],

  speaking: [
    { q: 'Someone asks, "Does the discharge checklist also work at night?" You know the answer. Thank them, check the question, answer, and check again.', qId: 'Seseorang bertanya, "Apakah checklist pemulangan juga berfungsi di malam hari?" Kamu tahu jawabannya. Berterima kasih, cek pertanyaan, jawab, lalu cek lagi.', hint: 'Thanks for the question. So your question is whether ..., right? ... Does that answer your question?', example: 'Thanks for the question. So your question is whether the checklist works at night, right? Yes, it does. The night nurses use the same screen, but the pharmacy is closed after ten, so the medicine step is done the next morning. Does that answer your question?' },
    { q: 'The finance director asks, "How much did this project save the hospital in money?" You do not know the exact number. Answer honestly without inventing a number.', qId: 'Direktur keuangan bertanya, "Berapa uang yang dihemat rumah sakit dari proyek ini?" Kamu tidak tahu angka pastinya. Jawab jujur tanpa mengarang angka.', hint: "I don't have that number with me right now. What I know is ... I don't want to guess, so I'll ...", example: "That's a great question. I don't have that number with me right now. What I know is that discharge time went down by two hours per patient, so beds are free earlier. I don't want to guess the amount of money, so I'll check with the finance team and send it to you today.", followUps: ['Can you give me a rough estimate?', 'When exactly will I get the number?'] },
    { q: 'A senior engineer says, "Your solution depends on the pharmacy module. What happens if it goes down?" You have not solved this yet. Respond.', qId: 'Senior engineer berkata, "Solusimu bergantung pada modul farmasi. Apa yang terjadi kalau modul itu mati?" Masalah ini belum kalian selesaikan. Tanggapi.', hint: "That's a fair point, and we haven't ... yet. Right now, ... Our plan is to ...", example: "That's a fair point, and we haven't solved it yet. Right now, if the pharmacy module is down, the medicine step just stays open, and the nurse can mark it manually. Our plan is to add a retry and an alert next month." },
    { q: 'Q&A SESSION: You just finished your presentation about the discharge checklist. Open the audience questions one by one and answer each in 2–4 sentences. If you do not know something, say so. Do not invent information.', qId: 'SESI TANYA JAWAB: Kamu baru selesai presentasi tentang checklist pemulangan. Buka pertanyaan audiens satu per satu dan jawab masing-masing dalam 2–4 kalimat. Kalau tidak tahu, katakan terus terang. Jangan mengarang informasi.', hint: "Thanks for the question ... So your question is ..., right? ... Short answer: ... Long answer: ... I don't want to guess, so ... That's outside my area, but ... That's a fair point ... Does that answer your question?", outline: [
      'Thank the person',
      'Repeat or check the question',
      'Answer in 2–4 sentences',
      'If you are not sure: say what you know + when you will check',
      'Check: "Does that answer your question?"'
    ], followUps: [
      'Head nurse: Do nurses need extra training to use it?',
      'Security officer: Can families see medical information on the patient portal?',
      'Director: How much did the project cost?',
      'Engineer: Why did you use events instead of calling the pharmacy API directly?',
      'Doctor: Can we use the same idea for surgery preparation?'
    ], example: [
      'Training: Thanks for the question. Short answer: only a little. We ran one thirty-minute session per ward, and most nurses learned it in one shift.',
      "Security: That's an important question. Families will only see the status of each step, like \"medicine ready\", not any medical details. The detailed design is still with the security team, so I'll share it after their review.",
      "Cost: I don't have the exact cost with me right now. It was mostly our team's time over three months. I don't want to guess, so I'll ask the project manager and send you the number today.",
      'Events: So your question is why we used events instead of direct API calls, right? The main reason is that the checklist should not break if the pharmacy module is slow. With events, each module works independently.',
      "Surgery: That's a great idea. It depends on the steps before surgery, and that's outside my area, but I'd be happy to discuss it with the surgery team. Does that answer your question?"
    ] }
  ],

  talk321: null
});
