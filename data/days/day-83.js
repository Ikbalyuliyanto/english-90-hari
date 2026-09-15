E90.registerDay({
  day: 83,
  titleId: 'Menjelaskan Keputusan Teknis',
  goal: 'Menjelaskan kenapa sebuah pilihan teknis diambil: alasan utama, alternatif yang dipertimbangkan, konteks saat itu, tujuan, dan pilihan ke depan.',

  learn: [
    {
      id: 'D83-S01',
      english: "We chose this approach because it's easier to maintain.",
      pronunciation: 'wi chouz dis e-prouch bi-koz its i-zi-er tu mein-tein',
      translation: 'Kami memilih pendekatan ini karena lebih mudah dirawat.',
      words: [['We', 'kami'], ['chose', 'memilih (lampau)', 'choose'], ['this', 'ini'], ['approach', 'pendekatan / cara'], ['because', 'karena'], ["it's", 'itu (it is)', 'be'], ['easier', 'lebih mudah', 'easy'], ['to', 'untuk (penanda kata kerja)'], ['maintain', 'merawat / memelihara (kode)']],
      pattern: 'D83-P1'
    },
    {
      id: 'D83-S02',
      english: 'We decided to use PostgreSQL instead of MongoDB.',
      pronunciation: 'wi di-sai-did tu yuz poust-gres-kyu-el in-sted ov mon-gou-di-bi',
      translation: 'Kami memutuskan memakai PostgreSQL, bukan MongoDB.',
      words: [['We', 'kami'], ['decided', 'memutuskan (lampau)', 'decide'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['use', 'memakai'], ['PostgreSQL', 'PostgreSQL (nama sistem database)'], ['instead', '(bagian dari "instead of")'], ['of', '(bagian dari "instead of")'], ['MongoDB', 'MongoDB (nama database berbasis dokumen)']],
      phrases: [['A instead of B', 'A, bukan B / A sebagai ganti B']],
      pattern: 'D83-P2'
    },
    {
      id: 'D83-S03',
      english: 'The main reason is that our data is very relational.',
      pronunciation: 'de mein ri-zen iz det a-wer dei-ta iz ve-ri ri-lei-she-nel',
      translation: 'Alasan utamanya karena data kami sangat saling berhubungan.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['main', 'utama'], ['reason', 'alasan'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['our', 'milik kami'], ['data', 'data'], ['very', 'sangat'], ['relational', 'relasional: data yang saling berhubungan antar tabel']],
      pattern: 'D47-P4'
    },
    {
      id: 'D83-S04',
      english: "We considered other options, but they didn't fit our needs.",
      pronunciation: 'wi ken-si-derd a-der op-shenz, bat dei di-dent fit a-wer nidz',
      translation: 'Kami sempat mempertimbangkan pilihan lain, tapi tidak cocok dengan kebutuhan kami.',
      words: [['We', 'kami'], ['considered', 'mempertimbangkan (lampau)', 'consider'], ['other', 'lain'], ['options', 'pilihan (jamak)', 'option'], ['but', 'tetapi'], ['they', 'pilihan-pilihan itu'], ["didn't", 'tidak (lampau) — did not', 'do'], ['fit', 'cocok / sesuai'], ['our', 'milik kami'], ['needs', 'kebutuhan (jamak)', 'need']],
      phrases: [['fit our needs', 'sesuai dengan kebutuhan kami']],
      pattern: 'D83-P3'
    },
    {
      id: 'D83-S05',
      english: "At that time, the team didn't have experience with Kubernetes.",
      pronunciation: 'et det taim, de tim di-dent hev eks-pi-ri-ens with ku-ber-ne-tis',
      translation: 'Waktu itu, tim belum punya pengalaman dengan Kubernetes.',
      words: [['At', 'pada'], ['that', 'itu'], ['time', 'waktu'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['team', 'tim'], ["didn't", 'tidak / belum (lampau) — did not', 'do'], ['have', 'punya'], ['experience', 'pengalaman'], ['with', 'dengan'], ['Kubernetes', 'Kubernetes (platform untuk menjalankan banyak container)']],
      phrases: [['at that time', 'waktu itu']],
      pattern: 'D83-P4'
    },
    {
      id: 'D83-S06',
      english: 'Given our deadline, it was the safest choice.',
      pronunciation: 'gi-ven a-wer ded-lain, it woz de sei-fest chois',
      translation: 'Mengingat deadline kami, itu pilihan yang paling aman.',
      words: [['Given', 'mengingat / dengan kondisi'], ['our', 'milik kami'], ['deadline', 'tenggat waktu / deadline'], ['it', 'itu'], ['was', 'adalah (lampau)', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['safest', 'paling aman', 'safe'], ['choice', 'pilihan']],
      phrases: [['given + benda', 'mengingat ... (untuk menjelaskan konteks)']],
      pattern: 'D83-P4'
    },
    {
      id: 'D83-S07',
      english: 'The goal was to keep the system simple.',
      pronunciation: 'de goul woz tu kip de sis-tem sim-pel',
      translation: 'Tujuannya adalah menjaga sistem tetap sederhana.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['goal', 'tujuan'], ['was', 'adalah (lampau)', 'be'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['keep', 'menjaga / membiarkan tetap'], ['system', 'sistem'], ['simple', 'sederhana']],
      pattern: 'D83-P5'
    },
    {
      id: 'D83-S08',
      english: 'If we need to scale later, we can split it into services.',
      pronunciation: 'if wi nid tu skeil lei-ter, wi ken split it in-tu ser-vi-siz',
      translation: 'Kalau nanti perlu scale, kami bisa memecahnya menjadi beberapa service.',
      words: [['If', 'kalau / jika'], ['we', 'kami'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['scale', 'scale: menambah kapasitas agar sanggup melayani lebih banyak user'], ['later', 'nanti'], ['can', 'bisa'], ['split', 'memecah / membagi'], ['it', 'itu / -nya'], ['into', 'menjadi'], ['services', 'service (jamak)', 'service']],
      pattern: 'D83-P5'
    },
    {
      id: 'D83-S09',
      english: 'Looking back, I think it was the right decision.',
      pronunciation: 'lu-king bek, ai thingk it woz de rait di-si-zhen',
      translation: 'Kalau dilihat lagi sekarang, saya rasa itu keputusan yang tepat.',
      words: [['Looking', '(bagian dari "looking back")', 'look'], ['back', 'ke belakang (dalam "looking back")'], ['I', 'saya'], ['think', 'rasa / berpendapat'], ['it', 'itu'], ['was', 'adalah (lampau)', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['right', 'tepat / benar'], ['decision', 'keputusan (dibaca "di-si-zhen")']],
      phrases: [['looking back', 'kalau dilihat lagi sekarang']],
      pattern: 'D27-P1'
    },
    {
      id: 'D83-S10',
      english: 'Why did you decide to build it yourselves?',
      pronunciation: 'wai did yu di-said tu bild it yor-selvz?',
      translation: 'Kenapa kalian memutuskan membangunnya sendiri?',
      words: [['Why', 'kenapa'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['you', 'kalian'], ['decide', 'memutuskan'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['build', 'membangun / membuat'], ['it', 'itu / -nya'], ['yourselves', 'sendiri (kalian sendiri)']],
      pattern: 'D23-P1'
    }
  ],

  review: [
    {
      id: 'D83-S11',
      english: "We've decided to move the files to cloud storage.",
      pronunciation: 'wiv di-sai-did tu muv de failz tu klaud sto-rij',
      translation: 'Kami sudah memutuskan memindahkan file-file ke cloud storage.',
      words: [["We've", 'kami sudah (we have)', 'have'], ['decided', 'memutuskan', 'decide'], ['to', '(penanda kata kerja / ke)'], ['move', 'memindahkan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['files', 'berkas (jamak)', 'file'], ['cloud', 'cloud: layanan server di internet'], ['storage', 'penyimpanan']],
      pattern: 'D43-P1'
    },
    {
      id: 'D83-S12',
      english: 'The downside is that we need to pay for another service.',
      pronunciation: 'de daun-said iz det wi nid tu pei for e-na-der ser-vis',
      translation: 'Kekurangannya, kami perlu membayar satu layanan lagi.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['downside', 'kekurangan / sisi negatif'], ['is', 'adalah', 'be'], ['that', 'bahwa'], ['we', 'kami'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['pay', 'membayar'], ['for', 'untuk'], ['another', 'satu lagi / lain'], ['service', 'layanan / service']],
      pattern: 'D50-P4'
    },
    {
      id: 'D83-S13',
      english: "I'd rather use a library than write it from scratch.",
      pronunciation: 'aid ra-der yuz e lai-bre-ri den rait it from skrech',
      translation: 'Saya lebih memilih memakai library daripada menulisnya dari nol.',
      words: [["I'd", 'saya (I would, dalam "I\'d rather")', 'will'], ['rather', 'lebih memilih'], ['use', 'memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['library', 'library: kumpulan kode siap pakai'], ['than', 'daripada'], ['write', 'menulis'], ['it', 'itu / -nya'], ['from', 'dari'], ['scratch', 'nol (dalam "from scratch")']],
      phrases: [['from scratch', 'dari nol']],
      pattern: 'D50-P5'
    },
    { ref: 'D76-S10' },
    { ref: 'D40-S08' }
  ],

  patterns: [
    {
      id: 'D83-P1',
      formula: 'We chose + BENDA + because + KALIMAT',
      meaning: 'Explain a decision and its main reason.',
      examples: ['We chose React because the team already knew it.', 'We chose a monolith because the project was small.', "We picked this library because it's well maintained."]
    },
    {
      id: 'D83-P2',
      formula: 'We decided to use A instead of B',
      meaning: "Say what you chose and what you didn't choose.",
      examples: ['We decided to use a queue instead of direct calls.', 'We went with REST instead of GraphQL.', 'We render the pages on the server instead of in the browser.']
    },
    {
      id: 'D83-P3',
      formula: 'We considered + BENDA, but + KALIMAT',
      meaning: 'Show that you compared alternatives.',
      examples: ['We considered GraphQL, but it was too complex for our needs.', 'We looked at three tools before choosing this one.', 'We thought about building it ourselves, but it would take too long.']
    },
    {
      id: 'D83-P4',
      formula: 'At that time, + KALIMAT  ·  Given + BENDA, + KALIMAT',
      meaning: 'Explain the context of a decision.',
      examples: ['At that time, we only had two developers.', 'Given the budget, a managed service made more sense.', 'Given our deadline, we chose the simpler option.'],
      note: 'Keputusan teknis selalu bergantung pada konteks: waktu, ukuran tim, budget, dan kebutuhan.'
    },
    {
      id: 'D83-P5',
      formula: 'The goal was to + KATA KERJA  ·  If we need ..., we can ... later',
      meaning: 'Explain the goal and keep future options open.',
      examples: ['The goal was to launch quickly.', 'If traffic grows, we can add caching later.', 'We designed it so we can replace the payment provider later.']
    }
  ],

  shadowing: ['D83-S01', 'D83-S02', 'D83-S04', 'D83-S06'],

  speaking: [
    { q: 'Explain one technical decision your team made.', qId: 'Jelaskan satu keputusan teknis yang diambil timmu.', hint: 'We decided to use ... instead of ... We chose it because ...', example: 'We decided to use a single backend application instead of microservices. We chose it because the team is small and it is easier to maintain.' },
    { q: 'What other options did you consider, and why did you not choose them?', qId: 'Pilihan lain apa yang kalian pertimbangkan, dan kenapa tidak dipilih?', hint: "We considered ..., but ...", example: "We considered microservices, but they didn't fit our needs. They would add more deployment work and more things that could fail." },
    { q: 'What was the context when you made the decision?', qId: 'Bagaimana konteksnya saat keputusan itu diambil?', hint: 'At that time, ... Given ..., ... The goal was to ...', example: 'At that time, we had only three developers and a deadline in two months. Given that, a simple architecture was the safest choice. The goal was to launch quickly.' },
    { q: 'Looking back, was it the right decision? What would you change?', qId: 'Kalau dilihat lagi sekarang, apakah keputusannya tepat? Apa yang akan kamu ubah?', hint: "Looking back, I think ... If we ..., we can ... later.", example: 'Looking back, I think it was the right decision. The only thing I would change is the reporting module. If we need to scale later, we can split it into a separate service.' }
  ],

  talk321: { topic: 'Explain one technical decision your team made and why.' }
});
