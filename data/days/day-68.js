E90.registerDay({
  day: 68,
  titleId: 'Pull Request & Code Review',
  goal: 'Menjelaskan isi pull request, meminta review, memberi dan menanggapi komentar review, sampai PR di-merge.',

  learn: [
    {
      id: 'D68-S01',
      english: 'I opened a pull request yesterday.',
      pronunciation: 'ai ou-pend e pul ri-kwest yes-ter-dei',
      translation: 'Kemarin saya membuat pull request.',
      words: [['I', 'saya'], ['opened', 'membuka / membuat (lampau)', 'open'], ['a', 'sebuah (tidak diterjemahkan)'], ['pull', '(bagian dari "pull request")'], ['request', '(bagian dari "pull request")'], ['yesterday', 'kemarin']],
      phrases: [['pull request (PR)', 'permintaan agar perubahan kode direview lalu digabung ke branch utama']],
      pattern: 'D68-P1'
    },
    {
      id: 'D68-S02',
      english: 'Could you review my pull request when you have time?',
      pronunciation: 'kud yu ri-vyu mai pul ri-kwest wen yu hev taim?',
      translation: 'Bisa review pull request saya kalau sempat?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['review', 'mereview / memeriksa (kode)'], ['my', 'milik saya'], ['pull', '(bagian dari "pull request")'], ['request', '(bagian dari "pull request")'], ['when', 'kalau / ketika'], ['have', 'punya'], ['time', 'waktu']],
      phrases: [['when you have time', 'kalau sempat']],
      pattern: 'D68-P2'
    },
    {
      id: 'D68-S03',
      english: 'This PR adds a search filter to the orders page.',
      pronunciation: 'dis pi-ar edz e serch fil-ter tu di or-derz peij',
      translation: 'PR ini menambahkan filter pencarian ke halaman pesanan.',
      words: [['This', 'ini'], ['PR', 'PR: pull request (dibaca "pi-ar")'], ['adds', 'menambahkan; -s karena "this PR"', 'add'], ['a', 'sebuah (tidak diterjemahkan)'], ['search', 'pencarian'], ['filter', 'filter / penyaring'], ['to', 'ke'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['orders', 'pesanan (jamak)', 'order'], ['page', 'halaman']],
      pattern: 'D68-P3'
    },
    {
      id: 'D68-S04',
      english: 'I left a few comments on your code.',
      pronunciation: 'ai left e fyu ko-ments on yor koud',
      translation: 'Saya meninggalkan beberapa komentar di kodemu.',
      words: [['I', 'saya'], ['left', 'meninggalkan (lampau; di sini bukan "kiri")', 'leave'], ['a', '(bagian dari "a few")'], ['few', 'beberapa'], ['comments', 'komentar (jamak)', 'comment'], ['on', 'di / pada'], ['your', 'milikmu'], ['code', 'kode program']],
      phrases: [['leave a comment', 'memberi komentar']],
      pattern: 'D68-P4'
    },
    {
      id: 'D68-S05',
      english: 'The reviewer requested changes.',
      pronunciation: 'de ri-vyu-er ri-kwes-tid cheinj-iz',
      translation: 'Reviewer-nya meminta perubahan.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['reviewer', 'reviewer: orang yang memeriksa kode'], ['requested', 'meminta (kata kerja lampau)', 'request'], ['changes', 'perubahan (jamak)', 'change']],
      phrases: [['request changes', 'meminta perubahan (di sini "request" kata kerja, bukan HTTP request)']],
      pattern: 'D68-P4'
    },
    {
      id: 'D68-S06',
      english: "I've addressed all the comments.",
      pronunciation: 'aiv e-drest ol de ko-ments',
      translation: 'Semua komentar sudah saya tindak lanjuti.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['addressed', 'menindaklanjuti / menangani', 'address'], ['all', 'semua'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['comments', 'komentar (jamak)', 'comment']],
      phrases: [['address a comment', 'menindaklanjuti komentar (bukan "alamat")']],
      pattern: 'D68-P5'
    },
    {
      id: 'D68-S07',
      english: 'Can you take another look at the changes?',
      pronunciation: 'ken yu teik e-na-der luk et de cheinj-iz?',
      translation: 'Bisa dicek lagi perubahannya?',
      words: [['Can', 'bisakah'], ['you', 'kamu'], ['take', '(bagian dari "take a look")'], ['another', 'sekali lagi'], ['look', 'lihat / tinjauan'], ['at', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['changes', 'perubahan (jamak)', 'change']],
      pattern: 'D68-P2'
    },
    {
      id: 'D68-S08',
      english: 'The PR was approved and merged.',
      pronunciation: 'de pi-ar woz e-pruvd en merjd',
      translation: 'PR-nya sudah disetujui dan di-merge.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['PR', 'PR: pull request'], ['was', '(to be bentuk lampau, tidak diterjemahkan)', 'be'], ['approved', 'disetujui', 'approve'], ['and', 'dan'], ['merged', 'digabungkan ke branch utama', 'merge']],
      pattern: 'D68-P5'
    },
    {
      id: 'D68-S09',
      english: 'Why did you use a loop here instead of a map?',
      pronunciation: 'wai did yu yuz e lup hir in-sted ov e mep?',
      translation: 'Kenapa di sini pakai loop, bukan map?',
      words: [['Why', 'kenapa'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kamu'], ['use', 'memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['loop', 'loop: perulangan dalam kode'], ['here', 'di sini'], ['instead', '(bagian dari "instead of")'], ['of', '(bagian dari "instead of")'], ['map', 'map: fungsi untuk mengubah setiap item di daftar']],
      phrases: [['instead of', 'bukannya / sebagai ganti']],
      pattern: 'D23-P1'
    },
    {
      id: 'D68-S10',
      english: 'This function is a bit too long. Maybe we can split it.',
      pronunciation: 'dis fangk-shen iz e bit tu long. mei-bi wi ken split it',
      translation: 'Fungsi ini agak terlalu panjang. Mungkin bisa kita pecah.',
      words: [['This', 'ini'], ['function', 'fungsi (dalam kode)'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['a', '(bagian dari "a bit")'], ['bit', 'sedikit / agak'], ['too', 'terlalu'], ['long', 'panjang'], ['Maybe', 'mungkin'], ['we', 'kita'], ['can', 'bisa'], ['split', 'memecah / membagi'], ['it', 'itu / -nya']],
      pattern: 'D53-P2'
    }
  ],

  review: [
    {
      id: 'D68-S11',
      english: "One thing I'd suggest is adding a test for this case.",
      pronunciation: 'wan thing aid sag-jest iz e-ding e test for dis keis',
      translation: 'Satu saran saya: tambahkan test untuk kasus ini.',
      words: [['One', 'satu'], ['thing', 'hal'], ["I'd", 'saya akan (I would)', 'will'], ['suggest', 'menyarankan'], ['is', 'adalah', 'be'], ['adding', 'menambahkan', 'add'], ['a', 'sebuah (tidak diterjemahkan)'], ['test', 'test: kode untuk menguji kode lain'], ['for', 'untuk'], ['this', 'ini'], ['case', 'kasus / kondisi']],
      pattern: 'D53-P3'
    },
    {
      id: 'D68-S12',
      english: "Thanks for the review. I'll fix it now.",
      pronunciation: 'thengks for de ri-vyu. ail fiks it nau',
      translation: 'Terima kasih sudah direview. Saya perbaiki sekarang.',
      words: [['Thanks', 'terima kasih', 'thank'], ['for', 'atas'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['review', 'review: pemeriksaan kode'], ["I'll", 'saya akan (I will)', 'will'], ['fix', 'memperbaiki'], ['it', 'itu / -nya'], ['now', 'sekarang']],
      pattern: 'D44-P4'
    },
    {
      id: 'D68-S13',
      english: 'I see your point, but this approach is easier to read.',
      pronunciation: 'ai si yor point, bat dis e-prouch iz i-zi-er tu rid',
      translation: 'Saya paham maksudmu, tapi cara ini lebih mudah dibaca.',
      words: [['I', 'saya'], ['see', 'memahami (dalam "see your point")'], ['your', 'milikmu'], ['point', 'poin / maksud'], ['but', 'tetapi'], ['this', 'ini'], ['approach', 'pendekatan / cara'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['easier', 'lebih mudah', 'easy'], ['to', 'untuk (penanda kata kerja)'], ['read', 'dibaca']],
      pattern: 'D41-P3'
    },
    { ref: 'D67-S06' },
    { ref: 'D54-S08' }
  ],

  patterns: [
    {
      id: 'D68-P1',
      formula: 'I opened a pull request for + BENDA',
      meaning: 'Say that your code is ready for review.',
      examples: ['I opened a PR for the payment fix.', "I've created a draft pull request.", 'The PR is ready for review.']
    },
    {
      id: 'D68-P2',
      formula: 'Could you review + BENDA?  ·  Can you take another look at + BENDA?',
      meaning: 'Ask for a code review.',
      examples: ['Could you review my PR today?', 'Can you take another look after my changes?', 'Could you check the tests in this PR?']
    },
    {
      id: 'D68-P3',
      formula: 'This PR + adds / fixes / changes + BENDA',
      meaning: 'Describe a pull request.',
      examples: ['This PR fixes the login redirect.', 'This PR changes the API response format.', 'This PR adds unit tests for the cart.']
    },
    {
      id: 'D68-P4',
      formula: 'I left a comment on + BENDA  ·  The reviewer requested changes',
      meaning: 'Talk about review comments.',
      examples: ['I left a comment on line 42.', 'She requested a few small changes.', 'He approved it with one suggestion.'],
      note: '"request changes" = meminta perubahan (kata kerja), berbeda dengan "API request" (kata benda).'
    },
    {
      id: 'D68-P5',
      formula: "I've addressed + BENDA  ·  The PR was approved and merged",
      meaning: 'Close the review process.',
      examples: ["I've addressed your comments.", "I've updated the PR.", 'The PR was merged this morning.']
    }
  ],

  shadowing: ['D68-S01', 'D68-S03', 'D68-S05', 'D68-S06'],

  speaking: [
    { q: 'Explain your pull request to a reviewer.', qId: 'Jelaskan pull request-mu ke reviewer.', hint: 'This PR adds / fixes ... I changed ... Could you review ...?', example: 'This PR adds a search filter to the orders page. I changed the API to accept a status parameter and added two tests. Could you review it when you have time?' },
    { q: "You are reviewing a colleague's code and see a problem. Give a polite comment.", qId: 'Kamu mereview kode rekan dan melihat masalah. Beri komentar dengan sopan.', hint: "This function is a bit ... Maybe we can ... One thing I'd suggest is ...", example: "Nice work overall. This function is a bit too long. Maybe we can split it into two smaller functions. One thing I'd suggest is adding a test for empty input." },
    { q: 'A reviewer requested changes. What do you say after you fix them?', qId: 'Reviewer meminta perubahan. Apa yang kamu sampaikan setelah memperbaikinya?', hint: "Thanks for the review. I've addressed ... Can you take another look?", example: "Thanks for the review. I've addressed all the comments and pushed the changes. Can you take another look?" },
    { q: 'A reviewer asks why you used a certain approach. Explain your reason.', qId: 'Reviewer bertanya kenapa kamu memakai cara tertentu. Jelaskan alasanmu.', hint: 'I used ... because ... / I see your point, but ...', example: 'I used a simple loop because it is easier to read for new team members. I see your point about performance, but the list is always small.' }
  ],

  talk321: null
});
