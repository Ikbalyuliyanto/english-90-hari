E90.registerDay({
  day: 4,
  titleId: 'Di Rumah',
  goal: 'Memberi dan memahami perintah sederhana.',

  learn: [
    {
      id: 'D04-S01',
      english: 'Come here.',
      pronunciation: 'kam hir',
      translation: 'Sini dulu.',
      words: [['Come', 'datang / kemari'], ['here', 'ke sini']]
    },
    {
      id: 'D04-S02',
      english: 'Wait a moment.',
      pronunciation: 'weit e mou-ment',
      translation: 'Tunggu sebentar.',
      words: [['Wait', 'tunggu'], ['a', 'sebuah / satu'], ['moment', 'saat / momen']],
      phrases: [['a moment', 'sebentar']]
    },
    {
      id: 'D04-S03',
      english: 'Open the door.',
      pronunciation: 'ou-pen de dor',
      translation: 'Buka pintunya.',
      words: [['Open', 'buka'], ['the', 'itu / -nya'], ['door', 'pintu']],
      pattern: 'D04-P1'
    },
    {
      id: 'D04-S04',
      english: 'Close the door.',
      pronunciation: 'klouz de dor',
      translation: 'Tutup pintunya.',
      words: [['Close', 'tutup (kata kerja, dibaca "klouz")'], ['the', 'itu / -nya'], ['door', 'pintu']],
      pattern: 'D04-P1'
    },
    {
      id: 'D04-S05',
      english: 'Turn on the light.',
      pronunciation: 'tern on de lait',
      translation: 'Nyalakan lampunya.',
      words: [['Turn', 'putar'], ['on', 'menyala (dalam "turn on")'], ['the', 'itu / -nya'], ['light', 'lampu']],
      phrases: [['turn on', 'menyalakan']],
      pattern: 'D04-P2'
    },
    {
      id: 'D04-S06',
      english: 'Turn off the light.',
      pronunciation: 'tern of de lait',
      translation: 'Matikan lampunya.',
      words: [['Turn', 'putar'], ['off', 'mati (dalam "turn off")'], ['the', 'itu / -nya'], ['light', 'lampu']],
      phrases: [['turn off', 'mematikan']],
      pattern: 'D04-P2'
    },
    {
      id: 'D04-S07',
      english: 'Open the window.',
      pronunciation: 'ou-pen de win-dou',
      translation: 'Buka jendelanya.',
      words: [['Open', 'buka'], ['the', 'itu / -nya'], ['window', 'jendela']],
      pattern: 'D04-P1'
    },
    {
      id: 'D04-S08',
      english: 'Close the window.',
      pronunciation: 'klouz de win-dou',
      translation: 'Tutup jendelanya.',
      words: [['Close', 'tutup (kata kerja, dibaca "klouz")'], ['the', 'itu / -nya'], ['window', 'jendela']],
      pattern: 'D04-P1'
    },
    {
      id: 'D04-S09',
      english: 'Sit down, please.',
      pronunciation: 'sit daun, pliz',
      translation: 'Silakan duduk.',
      words: [['Sit', 'duduk'], ['down', 'ke bawah'], ['please', 'silakan']],
      phrases: [['sit down', 'duduk']],
      pattern: 'D04-P3'
    },
    {
      id: 'D04-S10',
      english: 'Stand up.',
      pronunciation: 'stend ap',
      translation: 'Berdiri.',
      words: [['Stand', 'berdiri'], ['up', 'ke atas']],
      phrases: [['stand up', 'berdiri (dari duduk)']]
    },
    {
      id: 'D04-S11',
      english: 'Put your shoes away.',
      pronunciation: 'put yor syuz e-wei',
      translation: 'Simpan sepatumu.',
      words: [['Put', 'taruh / letakkan'], ['your', 'milikmu'], ['shoes', 'sepatu (jamak)', 'shoe'], ['away', 'ke tempatnya / menjauh']],
      phrases: [['put ... away', 'menyimpan / membereskan ke tempatnya']]
    },
    {
      id: 'D04-S12',
      english: 'Keep your room tidy.',
      pronunciation: 'kip yor rum tai-di',
      translation: 'Jaga kamarmu tetap rapi.',
      words: [['Keep', 'jaga / biarkan tetap'], ['your', 'milikmu'], ['room', 'kamar'], ['tidy', 'rapi']],
      phrases: [['keep + benda + keadaan', 'menjaga sesuatu tetap ...']]
    },
    {
      id: 'D04-S13',
      english: 'Help me, please.',
      pronunciation: 'help mi, pliz',
      translation: 'Tolong bantu saya.',
      words: [['Help', 'bantu'], ['me', 'saya (sebagai objek)'], ['please', 'tolong']],
      pattern: 'D04-P3'
    },
    {
      id: 'D04-S14',
      english: 'Be careful.',
      pronunciation: 'bi ker-ful',
      translation: 'Hati-hati.',
      words: [['Be', 'jadilah / bersikaplah'], ['careful', 'hati-hati']],
      pattern: 'D04-P4'
    },
    {
      id: 'D04-S15',
      english: "That's enough.",
      pronunciation: 'dets i-naf',
      translation: 'Itu sudah cukup.',
      words: [["That's", 'itu (sudah) — that is', 'that'], ['enough', 'cukup']]
    }
  ],

  review: [
    { ref: 'D03-S08' },
    { ref: 'D02-S11' },
    { ref: 'D01-S15' }
  ],

  patterns: [
    {
      id: 'D04-P1',
      formula: 'KATA KERJA + the + BENDA',
      meaning: 'Perintah: ... -nya',
      examples: ['Open the app.', 'Close the laptop.', 'Check the email.', 'Open the file.'],
      note: 'Kalimat perintah langsung dimulai dengan kata kerja, tanpa "you".'
    },
    {
      id: 'D04-P2',
      formula: 'Turn on / Turn off + the + ALAT',
      meaning: 'Nyalakan / matikan ...',
      examples: ['Turn on the AC.', 'Turn off the TV.', 'Turn on your camera.', 'Turn off your microphone.']
    },
    {
      id: 'D04-P3',
      formula: 'KATA KERJA ..., please. / Please + KATA KERJA',
      meaning: 'Tolong / silakan ...',
      examples: ['Wait, please.', 'Please sit down.', 'Please close the door.', 'Help me with this, please.']
    },
    {
      id: 'D04-P4',
      formula: 'Be + KATA SIFAT',
      meaning: 'Bersikaplah ... / Jangan sampai tidak ...',
      examples: ['Be careful.', 'Be quiet.', 'Be patient.', 'Be on time.']
    }
  ],

  shadowing: ['D04-S02', 'D04-S05', 'D04-S09', 'D04-S14'],

  speaking: [
    { q: 'Ask a friend to open the window politely.', qId: 'Minta teman membuka jendela dengan sopan.', hint: 'Please ... / ..., please.', example: 'Please open the window.' },
    { q: 'Your meeting starts. Ask a colleague to turn on the camera.', qId: 'Meeting dimulai. Minta rekan menyalakan kamera.', hint: 'Turn on ..., please.', example: 'Could you turn on your camera, please?' },
    { q: 'Your friend is crossing a busy road. What do you say?', qId: 'Temanmu menyeberang jalan ramai. Kamu bilang apa?', hint: 'Be ...', example: 'Be careful!' }
  ],

  talk321: null
});
