E90.registerDay({
  day: 67,
  titleId: 'Git, Branch & Commit',
  goal: 'Menjelaskan alur kerja Git: membuat branch, commit, push, pull, merge, dan menangani conflict.',

  learn: [
    {
      id: 'D67-S01',
      english: 'I created a new branch for this feature.',
      pronunciation: 'ai kri-ei-tid e nyu brench for dis fi-cher',
      translation: 'Saya membuat branch baru untuk fitur ini.',
      words: [['I', 'saya'], ['created', 'membuat (-ed dibaca "id")', 'create'], ['a', 'sebuah (tidak diterjemahkan)'], ['new', 'baru'], ['branch', 'branch: cabang pengembangan di Git'], ['for', 'untuk'], ['this', 'ini'], ['feature', 'fitur']],
      pattern: 'D67-P1'
    },
    {
      id: 'D67-S02',
      english: "The code is in our company's repository.",
      pronunciation: 'de koud iz in a-wer kam-pe-niz ri-pa-ze-to-ri',
      translation: 'Kodenya ada di repository perusahaan kami.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['code', 'kode program'], ['is', 'berada (to be)', 'be'], ['in', 'di dalam'], ['our', 'milik kami'], ["company's", 'milik perusahaan', 'company'], ['repository', 'repository: tempat penyimpanan kode (sering disebut "repo")']],
      pattern: 'D63-P4'
    },
    {
      id: 'D67-S03',
      english: 'I committed my changes with a clear message.',
      pronunciation: 'ai ke-mi-tid mai cheinj-iz with e klir me-sij',
      translation: 'Saya commit perubahan saya dengan pesan yang jelas.',
      words: [['I', 'saya'], ['committed', 'commit: menyimpan perubahan ke Git (lampau)', 'commit'], ['my', 'milik saya'], ['changes', 'perubahan (jamak)', 'change'], ['with', 'dengan'], ['a', 'sebuah (tidak diterjemahkan)'], ['clear', 'jelas'], ['message', 'pesan']],
      phrases: [['commit message', 'pesan yang menjelaskan isi commit']],
      pattern: 'D67-P2'
    },
    {
      id: 'D67-S04',
      english: 'I pushed the branch to the remote repository.',
      pronunciation: 'ai pusht de brench tu de ri-mout ri-pa-ze-to-ri',
      translation: 'Saya push branch-nya ke repository remote.',
      words: [['I', 'saya'], ['pushed', 'push: mengirim commit ke server Git (lampau)', 'push'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['branch', 'branch: cabang pengembangan di Git'], ['to', 'ke'], ['remote', 'remote: server Git bersama'], ['repository', 'repository: tempat penyimpanan kode']],
      pattern: 'D67-P2'
    },
    {
      id: 'D67-S05',
      english: 'Please pull the latest changes before you start.',
      pronunciation: 'pliz pul de lei-tist cheinj-iz bi-for yu start',
      translation: 'Tolong pull perubahan terbaru sebelum mulai.',
      words: [['Please', 'tolong'], ['pull', 'pull: mengambil perubahan terbaru dari server Git'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['latest', 'terbaru', 'late'], ['changes', 'perubahan (jamak)', 'change'], ['before', 'sebelum'], ['you', 'kamu'], ['start', 'mulai']],
      pattern: 'D67-P3'
    },
    {
      id: 'D67-S06',
      english: "I'll merge my branch into main after the review.",
      pronunciation: 'ail merj mai brench in-tu mein ef-ter de ri-vyu',
      translation: 'Branch saya akan saya merge ke main setelah direview.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['merge', 'merge: menggabungkan perubahan dari satu branch ke branch lain'], ['my', 'milik saya'], ['branch', 'branch: cabang pengembangan di Git'], ['into', 'ke dalam'], ['main', 'main: branch utama'], ['after', 'setelah'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['review', 'review: pemeriksaan kode']],
      pattern: 'D67-P3'
    },
    {
      id: 'D67-S07',
      english: "There's a merge conflict in this file.",
      pronunciation: 'derz e merj kon-flikt in dis fail',
      translation: 'Ada merge conflict di file ini.',
      words: [["There's", 'ada (there is)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['merge', 'merge: penggabungan branch'], ['conflict', 'konflik: perubahan yang bertabrakan'], ['in', 'di'], ['this', 'ini'], ['file', 'berkas / file']],
      phrases: [['merge conflict', 'perubahan dari dua branch bentrok di baris yang sama']],
      pattern: 'D67-P4'
    },
    {
      id: 'D67-S08',
      english: 'I need to resolve the conflict first.',
      pronunciation: 'ai nid tu ri-zolv de kon-flikt ferst',
      translation: 'Saya perlu menyelesaikan conflict-nya dulu.',
      words: [['I', 'saya'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['resolve', 'menyelesaikan (masalah / conflict)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['conflict', 'konflik: perubahan yang bertabrakan'], ['first', 'dulu / terlebih dahulu']],
      pattern: 'D67-P4'
    },
    {
      id: 'D67-S09',
      english: 'I accidentally committed to the wrong branch.',
      pronunciation: 'ai ek-si-den-te-li ke-mi-tid tu de rong brench',
      translation: 'Saya tidak sengaja commit ke branch yang salah.',
      words: [['I', 'saya'], ['accidentally', 'tidak sengaja', 'accidental'], ['committed', 'commit: menyimpan perubahan ke Git (lampau)', 'commit'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['wrong', 'salah'], ['branch', 'branch: cabang pengembangan di Git']],
      pattern: 'D55-P2'
    },
    {
      id: 'D67-S10',
      english: 'This commit fixes the date format on the report page.',
      pronunciation: 'dis ke-mit fik-siz de deit for-met on de ri-port peij',
      translation: 'Commit ini memperbaiki format tanggal di halaman laporan.',
      words: [['This', 'ini'], ['commit', 'commit: satu simpanan perubahan di Git (kata benda)'], ['fixes', 'memperbaiki; -es karena "this commit"', 'fix'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['date', 'tanggal'], ['format', 'format / bentuk tampilan'], ['on', 'di'], ['report', 'laporan'], ['page', 'halaman']],
      pattern: 'D67-P5'
    }
  ],

  review: [
    {
      id: 'D67-S11',
      english: "I've already pushed my changes.",
      pronunciation: 'aiv ol-re-di pusht mai cheinj-iz',
      translation: 'Perubahan saya sudah saya push.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['already', 'sudah'], ['pushed', 'push: mengirim commit ke server Git', 'push'], ['my', 'milik saya'], ['changes', 'perubahan (jamak)', 'change']],
      pattern: 'D46-P2'
    },
    {
      id: 'D67-S12',
      english: 'Which branch should I use?',
      pronunciation: 'wich brench shud ai yuz?',
      translation: 'Branch mana yang sebaiknya saya pakai?',
      words: [['Which', 'yang mana'], ['branch', 'branch: cabang pengembangan di Git'], ['should', 'sebaiknya'], ['I', 'saya'], ['use', 'memakai']],
      pattern: 'D38-P4'
    },
    {
      id: 'D67-S13',
      english: "I'm still working on the feature branch.",
      pronunciation: 'aim stil wer-king on de fi-cher brench',
      translation: 'Saya masih bekerja di feature branch.',
      words: [["I'm", 'saya sedang (I am)', 'be'], ['still', 'masih'], ['working', 'bekerja', 'work'], ['on', 'di (branch)'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['feature', 'fitur'], ['branch', 'branch: cabang pengembangan di Git']],
      phrases: [['feature branch', 'branch khusus untuk satu fitur']],
      pattern: 'D16-P4'
    },
    { ref: 'D55-S05' },
    { ref: 'D42-S08' }
  ],

  patterns: [
    {
      id: 'D67-P1',
      formula: 'I created a new branch for + BENDA',
      meaning: 'Explain where you are working in Git.',
      examples: ['I created a branch for the login bug.', 'Each developer works on their own branch.', 'The branch name starts with "feature".']
    },
    {
      id: 'D67-P2',
      formula: 'I committed / pushed + BENDA',
      meaning: 'Describe what you did in Git.',
      examples: ['I committed the changes this morning.', 'I pushed my branch to GitHub.', 'I pushed a small fix for the typo.'],
      note: 'Cara baca: commit = ke-mit · merge = merj · repository = ri-pa-ze-to-ri.'
    },
    {
      id: 'D67-P3',
      formula: "Please pull the latest changes  ·  I'll merge + BENDA + into + BENDA",
      meaning: 'Coordinate your Git work with the team.',
      examples: ['Please pull the latest changes from main.', "I'll merge the feature branch into develop.", "Don't merge it before the review."]
    },
    {
      id: 'D67-P4',
      formula: "There's a conflict in + BENDA  ·  I need to resolve + BENDA",
      meaning: 'Talk about merge problems.',
      examples: ["There's a conflict in the config file.", 'I need to resolve two conflicts.', 'I resolved the conflict and pushed again.']
    },
    {
      id: 'D67-P5',
      formula: 'This commit + fixes / adds / removes + BENDA',
      meaning: 'Describe a commit clearly.',
      examples: ['This commit adds validation to the form.', 'This commit removes unused code.', 'This commit updates the setup guide.']
    }
  ],

  shadowing: ['D67-S01', 'D67-S03', 'D67-S06', 'D67-S08'],

  speaking: [
    { q: 'Can you explain your Git workflow when you start a new task?', qId: 'Jelaskan alur Git-mu saat mulai mengerjakan tugas baru.', hint: 'First, I pull ... Then, I create a new branch ... I commit ... After that, I push ...', example: 'First, I pull the latest changes from main. Then, I create a new branch for the task. I commit small changes with clear messages, and after that, I push the branch and open a pull request.' },
    { q: 'You have a merge conflict. Tell your teammate what is happening.', qId: 'Kamu kena merge conflict. Beri tahu rekan tim apa yang terjadi.', hint: "There's a merge conflict in ... I need to resolve ... I'll push again when ...", example: "There's a merge conflict in the user service because we both changed the same function. I need to resolve it first. I'll push again when it's done." },
    { q: 'You accidentally pushed to the wrong branch. Tell your team lead.', qId: 'Kamu tidak sengaja push ke branch yang salah. Beri tahu team lead.', hint: "I accidentally ... I've already ... Could you ...?", example: "I accidentally pushed my changes to the develop branch. I've already reverted the commit. Could you check that everything looks okay?" },
    { q: 'Describe your last commit.', qId: 'Ceritakan commit terakhirmu.', hint: 'My last commit fixes / adds / removes ...', example: 'My last commit fixes the date format on the invoice page and adds a small test for it.' }
  ],

  talk321: null
});
