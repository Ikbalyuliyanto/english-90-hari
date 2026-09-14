E90.registerDay({
  day: 20,
  titleId: 'Meminta Penjelasan (Clarification)',
  goal: 'Tidak diam saat tidak paham: minta diulang, tanya arti, dan konfirmasi instruksi.',

  learn: [
    {
      id: 'D20-S01',
      english: "Sorry, I don't understand.",
      pronunciation: 'so-ri, ai dount an-der-stend',
      translation: 'Maaf, saya tidak paham.',
      words: [['Sorry', 'maaf'], ['I', 'saya'], ["don't", 'tidak (do not)'], ['understand', 'paham / mengerti']]
    },
    {
      id: 'D20-S02',
      english: 'Could you say that again?',
      pronunciation: 'kud yu sei det e-gen?',
      translation: 'Bisakah Anda mengatakannya sekali lagi?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'Anda'], ['say', 'mengatakan'], ['that', 'itu'], ['again', 'lagi']],
      pattern: 'D20-P1'
    },
    {
      id: 'D20-S03',
      english: 'Could you explain that again?',
      pronunciation: 'kud yu eks-plein det e-gen?',
      translation: 'Bisakah Anda menjelaskannya lagi?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'Anda'], ['explain', 'menjelaskan'], ['that', 'itu'], ['again', 'lagi']],
      pattern: 'D20-P1'
    },
    {
      id: 'D20-S04',
      english: 'What do you mean?',
      pronunciation: 'wat du yu min?',
      translation: 'Maksudnya apa?',
      words: [['What', 'apa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu / Anda'], ['mean', 'maksudkan']],
      phrases: [['what do you mean?', 'apa maksudmu?']]
    },
    {
      id: 'D20-S05',
      english: 'What does this word mean?',
      pronunciation: 'wat daz dis werd min?',
      translation: 'Kata ini artinya apa?',
      words: [['What', 'apa'], ['does', '(kata bantu pertanyaan untuk it/this)', 'do'], ['this', 'ini'], ['word', 'kata'], ['mean', 'berarti']],
      pattern: 'D20-P4'
    },
    {
      id: 'D20-S06',
      english: 'Could you speak more slowly, please?',
      pronunciation: 'kud yu spik mor slou-li, pliz?',
      translation: 'Bisakah Anda bicara lebih pelan?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'Anda'], ['speak', 'berbicara'], ['more', 'lebih'], ['slowly', 'pelan-pelan', 'slow'], ['please', 'tolong']]
    },
    {
      id: 'D20-S07',
      english: 'Do you mean the new version?',
      pronunciation: 'du yu min de nyu ver-shen?',
      translation: 'Maksud Anda versi yang baru?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'Anda'], ['mean', 'maksudkan'], ['the', 'yang / -nya'], ['new', 'baru'], ['version', 'versi']],
      pattern: 'D20-P2'
    },
    {
      id: 'D20-S08',
      english: 'Let me check if I understand.',
      pronunciation: 'let mi cek if ai an-der-stend',
      translation: 'Saya pastikan dulu apakah saya sudah paham.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['check', 'memeriksa / memastikan'], ['if', 'apakah'], ['I', 'saya'], ['understand', 'paham']],
      phrases: [['let me + kata kerja', 'biar saya ... / saya ... dulu']]
    },
    {
      id: 'D20-S09',
      english: 'So, you want me to fix the bug first?',
      pronunciation: 'sou, yu want mi tu fiks de bag ferst?',
      translation: 'Jadi, Anda ingin saya memperbaiki bug-nya dulu?',
      words: [['So', 'jadi'], ['you', 'Anda'], ['want', 'ingin'], ['me', 'saya (sebagai objek)'], ['to', 'untuk (penanda kata kerja)'], ['fix', 'memperbaiki'], ['the', 'itu / -nya'], ['bug', 'bug / kesalahan program'], ['first', 'dulu / pertama']],
      phrases: [['want someone to + kata kerja', 'ingin seseorang melakukan ...']],
      pattern: 'D20-P3'
    },
    {
      id: 'D20-S10',
      english: 'How do you spell that?',
      pronunciation: 'hau du yu spel det?',
      translation: 'Bagaimana ejaannya?',
      words: [['How', 'bagaimana'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu / Anda'], ['spell', 'mengeja'], ['that', 'itu']]
    }
  ],

  review: [
    {
      id: 'D20-S11',
      english: "I'm not sure what you mean.",
      pronunciation: 'aim not syur wat yu min',
      translation: 'Saya tidak yakin apa maksud Anda.',
      words: [["I'm", 'saya (I am)', 'be'], ['not', 'tidak'], ['sure', 'yakin'], ['what', 'apa (yang)'], ['you', 'Anda'], ['mean', 'maksudkan']],
      pattern: 'D14-P3'
    },
    {
      id: 'D20-S12',
      english: 'Could you send me the link?',
      pronunciation: 'kud yu send mi de lingk?',
      translation: 'Bisakah kamu kirim link-nya ke saya?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu'], ['send', 'mengirim'], ['me', 'kepada saya'], ['the', 'itu / -nya'], ['link', 'tautan / link']],
      pattern: 'D19-P2'
    },
    { ref: 'D19-S07' },
    { ref: 'D13-S14' },
    { ref: 'D18-S05' }
  ],

  patterns: [
    {
      id: 'D20-P1',
      formula: 'Could you + say / explain / repeat + that again?',
      meaning: 'Bisakah Anda ... itu lagi?',
      examples: ['Could you repeat the last part?', 'Could you explain the second step again?', 'Could you say the name again?']
    },
    {
      id: 'D20-P2',
      formula: 'Do you mean + BENDA / KALIMAT?',
      meaning: 'Maksud Anda ...? (memastikan)',
      examples: ['Do you mean today or tomorrow?', 'Do you mean the login page?', 'Do you mean I should deploy it?']
    },
    {
      id: 'D20-P3',
      formula: 'So, you want me to + KATA KERJA?',
      meaning: 'Jadi, Anda ingin saya ...? (konfirmasi instruksi)',
      examples: ['So, you want me to update the design?', 'So, you want me to call the client?', 'So, you want me to finish it by Friday?'],
      note: 'Ulangi instruksi dengan kata-katamu sendiri untuk memastikan tidak salah paham.'
    },
    {
      id: 'D20-P4',
      formula: 'What does + KATA + mean?',
      meaning: 'Apa arti ...?',
      examples: ['What does "deadline" mean?', 'What does ASAP mean?', 'What does this error mean?']
    }
  ],

  shadowing: ['D20-S02', 'D20-S03', 'D20-S04', 'D20-S09'],

  speaking: [
    { q: "In a meeting, someone uses a word you don't know. What do you say?", qId: 'Di meeting ada kata yang tidak kamu tahu. Kamu bilang apa?', hint: 'Sorry, what does ... mean?', example: 'Sorry, what does "rollback" mean?' },
    { q: 'Your manager gives an instruction too quickly. Confirm what you need to do.', qId: 'Atasan memberi instruksi terlalu cepat. Konfirmasi apa yang harus kamu lakukan.', hint: 'Could you ... again? So, you want me to ...?', example: 'Sorry, could you say that again? So, you want me to test the payment page first?' },
    { q: 'Someone tells you a name you cannot write. What do you ask?', qId: 'Seseorang menyebut nama yang tidak bisa kamu tulis. Kamu tanya apa?', hint: 'How do you ...?', example: 'Sorry, how do you spell your name?' }
  ],

  talk321: null
});
