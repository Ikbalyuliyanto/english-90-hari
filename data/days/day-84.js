E90.registerDay({
  day: 84,
  titleId: 'Membandingkan Pendekatan Teknis',
  goal: 'Membandingkan dua pendekatan teknis secara jelas: memperkenalkan pilihan, membandingkan per kriteria, menawarkan alternatif, dan memberi rekomendasi bersyarat.',

  learn: [
    {
      id: 'D84-S01',
      english: 'There are two ways we can do this.',
      pronunciation: 'der ar tu weiz wi ken du dis',
      translation: 'Ada dua cara yang bisa kita pakai untuk ini.',
      words: [['There', 'ada (dalam "there are")'], ['are', '(bagian dari "there are")', 'be'], ['two', 'dua'], ['ways', 'cara (jamak)', 'way'], ['we', 'kita'], ['can', 'bisa'], ['do', 'melakukan / mengerjakan'], ['this', 'ini']],
      pattern: 'D84-P1'
    },
    {
      id: 'D84-S02',
      english: 'The first approach is to call the API directly from the frontend.',
      pronunciation: 'de ferst e-prouch iz tu kol di ei-pi-ai di-rekt-li from de front-end',
      translation: 'Pendekatan pertama adalah memanggil API langsung dari frontend.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['first', 'pertama'], ['approach', 'pendekatan / cara'], ['is', 'adalah', 'be'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['call', 'memanggil (API)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['directly', 'secara langsung', 'direct'], ['from', 'dari'], ['frontend', 'frontend: bagian aplikasi yang dilihat user']],
      pattern: 'D84-P1'
    },
    {
      id: 'D84-S03',
      english: 'The second approach is to go through our backend.',
      pronunciation: 'de se-kend e-prouch iz tu gou thru a-wer bek-end',
      translation: 'Pendekatan kedua adalah melewati backend kita.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['second', 'kedua'], ['approach', 'pendekatan / cara'], ['is', 'adalah', 'be'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['go', '(bagian dari "go through")'], ['through', 'melalui / melewati'], ['our', 'milik kita'], ['backend', 'backend: bagian server yang memproses data']],
      pattern: 'D84-P1'
    },
    {
      id: 'D84-S04',
      english: 'The first option is faster to build, but harder to change later.',
      pronunciation: 'de ferst op-shen iz fes-ter tu bild, bat har-der tu cheinj lei-ter',
      translation: 'Opsi pertama lebih cepat dibuat, tapi lebih sulit diubah nanti.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['first', 'pertama'], ['option', 'pilihan / opsi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['faster', 'lebih cepat', 'fast'], ['to', 'untuk (penanda kata kerja)'], ['build', 'dibuat / dibangun'], ['but', 'tetapi'], ['harder', 'lebih sulit', 'hard'], ['change', 'diubah'], ['later', 'nanti']],
      pattern: 'D84-P2'
    },
    {
      id: 'D84-S05',
      english: 'Another option would be to cache the result.',
      pronunciation: 'e-na-der op-shen wud bi tu kesh de ri-zalt',
      translation: 'Pilihan lainnya adalah menyimpan hasilnya di cache.',
      words: [['Another', 'lain / satu lagi'], ['option', 'pilihan / opsi'], ['would', 'akan (untuk usulan yang lebih lembut)', 'will'], ['be', 'menjadi / adalah'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['cache', 'cache: menyimpan sementara agar tidak dihitung ulang'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['result', 'hasil']],
      pattern: 'D84-P3'
    },
    {
      id: 'D84-S06',
      english: 'In terms of performance, the second approach is better.',
      pronunciation: 'in termz ov per-for-mens, de se-kend e-prouch iz be-ter',
      translation: 'Dari segi performa, pendekatan kedua lebih baik.',
      words: [['In', '(bagian dari "in terms of")'], ['terms', '(bagian dari "in terms of")', 'term'], ['of', '(bagian dari "in terms of")'], ['performance', 'performa / kecepatan kerja sistem (dibaca "per-for-mens")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['second', 'kedua'], ['approach', 'pendekatan / cara'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['better', 'lebih baik', 'good']],
      phrases: [['in terms of', 'dari segi']],
      pattern: 'D84-P4'
    },
    {
      id: 'D84-S07',
      english: "In terms of cost, they're about the same.",
      pronunciation: 'in termz ov kost, der e-baut de seim',
      translation: 'Dari segi biaya, keduanya kurang lebih sama.',
      words: [['In', '(bagian dari "in terms of")'], ['terms', '(bagian dari "in terms of")', 'term'], ['of', '(bagian dari "in terms of")'], ['cost', 'biaya'], ["they're", 'keduanya (they are)', 'be'], ['about', 'kurang lebih / sekitar'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['same', 'sama']],
      phrases: [['about the same', 'kurang lebih sama']],
      pattern: 'D84-P4'
    },
    {
      id: 'D84-S08',
      english: 'It depends on how many users we expect.',
      pronunciation: 'it di-pendz on hau me-ni yu-zerz wi ek-spekt',
      translation: 'Tergantung berapa banyak user yang kita perkirakan.',
      words: [['It', '(subjek, tidak diterjemahkan)'], ['depends', 'tergantung (dalam "depend on")', 'depend'], ['on', 'pada'], ['how', 'seberapa'], ['many', 'banyak'], ['users', 'pengguna (jamak)', 'user'], ['we', 'kita'], ['expect', 'perkirakan / harapkan']],
      phrases: [['it depends on', 'tergantung pada']],
      pattern: 'D84-P5'
    },
    {
      id: 'D84-S09',
      english: "If traffic stays low, I'd go with the simpler one.",
      pronunciation: 'if tre-fik steiz lou, aid gou with de sim-pler wan',
      translation: 'Kalau trafiknya tetap rendah, saya pilih yang lebih sederhana.',
      words: [['If', 'kalau / jika'], ['traffic', 'trafik: jumlah request / pengunjung'], ['stays', 'tetap; -s karena "traffic"', 'stay'], ['low', 'rendah'], ["I'd", 'saya akan (I would)', 'will'], ['go', '(bagian dari "go with")'], ['with', 'memilih (dalam "go with")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['simpler', 'lebih sederhana', 'simple'], ['one', 'yang (menggantikan kata benda)']],
      pattern: 'D84-P5'
    },
    {
      id: 'D84-S10',
      english: "Let's make a quick prototype to compare them.",
      pronunciation: 'lets meik e kwik prou-te-taip tu kem-per dem',
      translation: 'Ayo buat prototipe cepat untuk membandingkan keduanya.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['make', 'membuat'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'cepat / singkat'], ['prototype', 'prototipe: versi percobaan sederhana'], ['to', 'untuk (penanda kata kerja)'], ['compare', 'membandingkan'], ['them', 'keduanya / mereka (sebagai objek)']]
    }
  ],

  review: [
    {
      id: 'D84-S11',
      english: 'Compared with a relational database, this is more flexible.',
      pronunciation: 'kem-perd with e ri-lei-she-nel dei-te-beis, dis iz mor flek-si-bel',
      translation: 'Dibandingkan database relasional, ini lebih fleksibel.',
      words: [['Compared', 'dibandingkan', 'compare'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['relational', 'relasional: data yang saling berhubungan antar tabel'], ['database', 'database: tempat data disimpan'], ['this', 'ini'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['more', 'lebih'], ['flexible', 'fleksibel / mudah disesuaikan']],
      pattern: 'D57-P4'
    },
    {
      id: 'D84-S12',
      english: 'The disadvantage of this approach is that it needs more servers.',
      pronunciation: 'de dis-ed-ven-tij ov dis e-prouch iz det it nidz mor ser-verz',
      translation: 'Kekurangan pendekatan ini adalah butuh server lebih banyak.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['disadvantage', 'kekurangan'], ['of', 'dari'], ['this', 'ini'], ['approach', 'pendekatan / cara'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['it', 'hal itu'], ['needs', 'butuh; -s karena "it"', 'need'], ['more', 'lebih banyak'], ['servers', 'server (jamak)', 'server']],
      pattern: 'D57-P3'
    },
    {
      id: 'D84-S13',
      english: 'What happens if the external API is slow?',
      pronunciation: 'wat he-penz if di eks-ter-nel ei-pi-ai iz slou?',
      translation: 'Apa yang terjadi kalau API eksternalnya lambat?',
      words: [['What', 'apa (yang)'], ['happens', 'terjadi', 'happen'], ['if', 'kalau / jika'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['external', 'eksternal / dari pihak luar'], ['API', 'API: pintu komunikasi antar aplikasi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['slow', 'lambat']],
      pattern: 'D49-P2'
    },
    { ref: 'D83-S02' },
    { ref: 'D57-S10' }
  ],

  patterns: [
    {
      id: 'D84-P1',
      formula: 'There are two ways to + KATA KERJA  ·  The first approach is to ... The second approach is to ...',
      meaning: 'Introduce alternatives clearly.',
      examples: ['There are two ways to store the files.', 'The first approach is to keep them in the database.', 'The second approach is to use cloud storage.']
    },
    {
      id: 'D84-P2',
      formula: 'X is + KATA SIFAT-er to + KATA KERJA, but + KATA SIFAT-er to + KATA KERJA',
      meaning: 'Compare two sides of one option.',
      examples: ['This option is easier to build, but harder to test.', 'A monolith is simpler to deploy, but harder to scale.', "It's cheaper to run, but slower to change."]
    },
    {
      id: 'D84-P3',
      formula: 'Another option would be to + KATA KERJA',
      meaning: 'Suggest an alternative politely.',
      examples: ['Another option would be to use a queue.', 'Another option would be to split the table.', 'We could also move this logic to the backend.']
    },
    {
      id: 'D84-P4',
      formula: 'In terms of + BENDA, + KALIMAT',
      meaning: 'Compare by criteria.',
      examples: ['In terms of speed, the cache is better.', 'In terms of cost, the managed service is more expensive.', "In terms of maintenance, they're about the same."],
      note: 'Kriteria umum: performance, cost, complexity, maintenance, security, time to build.'
    },
    {
      id: 'D84-P5',
      formula: "It depends on + BENDA  ·  If + KALIMAT, I'd go with + BENDA",
      meaning: 'Give a conditional recommendation.',
      examples: ['It depends on the size of the data.', "If we need real-time updates, I'd go with WebSockets.", "If the team is small, I'd go with the simpler approach."]
    }
  ],

  shadowing: ['D84-S01', 'D84-S05', 'D84-S06', 'D84-S08'],

  speaking: [
    { q: 'Describe two ways to solve a technical problem in your project.', qId: 'Jelaskan dua cara menyelesaikan masalah teknis di proyekmu.', hint: 'There are two ways ... The first approach is ... The second approach is ...', example: 'There are two ways to send notifications. The first approach is to send them directly when the order is created. The second approach is to put them in a queue and send them in the background.' },
    { q: 'Compare the two approaches using at least two criteria.', qId: 'Bandingkan kedua pendekatan dengan minimal dua kriteria.', hint: 'In terms of ..., ... In terms of ..., ... The first one is ...er to ..., but ...', example: 'In terms of speed for the user, the queue is better, because the user doesn\'t wait. In terms of complexity, the direct approach is simpler. It is easier to build, but harder to retry when something fails.' },
    { q: 'Which approach would you recommend, and in which situation?', qId: 'Pendekatan mana yang kamu rekomendasikan, dan dalam situasi apa?', hint: "It depends on ... If ..., I'd go with ... Another option would be ...", example: "It depends on how many notifications we send. If it's only a few per hour, I'd go with the direct approach. If we expect thousands, I'd go with the queue. Another option would be to start simple and add the queue later." }
  ],

  talk321: null
});
