E90.registerDay({
  day: 2,
  titleId: 'Rutinitas Sehari-hari',
  goal: 'Menceritakan kegiatan sehari-hari dari bangun sampai tidur.',

  learn: [
    {
      id: 'D02-S01',
      english: 'I wake up at six.',
      pronunciation: 'ai weik ap et siks',
      translation: 'Saya bangun jam enam.',
      words: [['I', 'saya'], ['wake', 'bangun'], ['up', '(bagian dari "wake up")'], ['at', 'pada (jam)'], ['six', 'enam']],
      phrases: [['wake up', 'bangun tidur'], ['at + jam', 'pada jam ...']],
      pattern: 'D02-P1'
    },
    {
      id: 'D02-S02',
      english: 'I take a shower.',
      pronunciation: 'ai teik e shau-er',
      translation: 'Saya mandi.',
      words: [['I', 'saya'], ['take', 'melakukan (dalam "take a shower")'], ['a', 'satu kali / sebuah'], ['shower', 'mandi (pancuran)']],
      phrases: [['take a shower', 'mandi']]
    },
    {
      id: 'D02-S03',
      english: 'I brush my teeth.',
      pronunciation: 'ai brash mai tith',
      translation: 'Saya menyikat gigi.',
      words: [['I', 'saya'], ['brush', 'menyikat'], ['my', 'milik saya'], ['teeth', 'gigi (jamak)', 'tooth']]
    },
    {
      id: 'D02-S04',
      english: 'I get dressed.',
      pronunciation: 'ai get drest',
      translation: 'Saya berpakaian.',
      words: [['I', 'saya'], ['get', 'menjadi (dalam "get dressed")'], ['dressed', 'berpakaian']],
      phrases: [['get dressed', 'berpakaian / ganti baju']]
    },
    {
      id: 'D02-S05',
      english: 'I have breakfast.',
      pronunciation: 'ai hev brek-fest',
      translation: 'Saya sarapan.',
      words: [['I', 'saya'], ['have', 'makan (untuk makanan)'], ['breakfast', 'sarapan']],
      phrases: [['have breakfast', 'sarapan']],
      pattern: 'D02-P2'
    },
    {
      id: 'D02-S06',
      english: 'I go to work.',
      pronunciation: 'ai gou tu werk',
      translation: 'Saya pergi bekerja.',
      words: [['I', 'saya'], ['go', 'pergi'], ['to', 'ke'], ['work', 'tempat kerja / kerja']],
      phrases: [['go to work', 'berangkat kerja']],
      pattern: 'D02-P3'
    },
    {
      id: 'D02-S07',
      english: 'I start work at nine.',
      pronunciation: 'ai start werk et nain',
      translation: 'Saya mulai bekerja jam sembilan.',
      words: [['I', 'saya'], ['start', 'mulai'], ['work', 'pekerjaan / kerja'], ['at', 'pada (jam)'], ['nine', 'sembilan']],
      phrases: [['start work', 'mulai bekerja']],
      pattern: 'D02-P1'
    },
    {
      id: 'D02-S08',
      english: 'I check my tasks.',
      pronunciation: 'ai cek mai tasks',
      translation: 'Saya memeriksa tugas-tugas saya.',
      words: [['I', 'saya'], ['check', 'memeriksa'], ['my', 'milik saya'], ['tasks', 'tugas-tugas', 'task']]
    },
    {
      id: 'D02-S09',
      english: 'I have lunch at noon.',
      pronunciation: 'ai hev lanch et nun',
      translation: 'Saya makan siang pada tengah hari.',
      words: [['I', 'saya'], ['have', 'makan (untuk makanan)'], ['lunch', 'makan siang'], ['at', 'pada (waktu)'], ['noon', 'tengah hari (jam 12 siang)']],
      phrases: [['have lunch', 'makan siang']],
      pattern: 'D02-P2'
    },
    {
      id: 'D02-S10',
      english: 'I finish work at five.',
      pronunciation: 'ai fi-nish werk et faiv',
      translation: 'Saya selesai bekerja jam lima.',
      words: [['I', 'saya'], ['finish', 'menyelesaikan'], ['work', 'pekerjaan / kerja'], ['at', 'pada (jam)'], ['five', 'lima']],
      phrases: [['finish work', 'selesai bekerja / pulang kerja']],
      pattern: 'D02-P1'
    },
    {
      id: 'D02-S11',
      english: 'I go home.',
      pronunciation: 'ai gou houm',
      translation: 'Saya pulang.',
      words: [['I', 'saya'], ['go', 'pergi'], ['home', 'ke rumah']],
      phrases: [['go home', 'pulang (tanpa "to")']],
      pattern: 'D02-P3'
    },
    {
      id: 'D02-S12',
      english: 'I have dinner.',
      pronunciation: 'ai hev di-ner',
      translation: 'Saya makan malam.',
      words: [['I', 'saya'], ['have', 'makan (untuk makanan)'], ['dinner', 'makan malam']],
      phrases: [['have dinner', 'makan malam']],
      pattern: 'D02-P2'
    },
    {
      id: 'D02-S13',
      english: 'I read a book.',
      pronunciation: 'ai rid e buk',
      translation: 'Saya membaca buku.',
      words: [['I', 'saya'], ['read', 'membaca (sekarang, dibaca "rid")'], ['a', 'sebuah'], ['book', 'buku']]
    },
    {
      id: 'D02-S14',
      english: 'I practice English.',
      pronunciation: 'ai prek-tis ing-glish',
      translation: 'Saya berlatih bahasa Inggris.',
      words: [['I', 'saya'], ['practice', 'berlatih'], ['English', 'bahasa Inggris']]
    },
    {
      id: 'D02-S15',
      english: 'I go to bed at eleven.',
      pronunciation: 'ai gou tu bed et i-le-ven',
      translation: 'Saya tidur jam sebelas.',
      words: [['I', 'saya'], ['go', 'pergi'], ['to', 'ke'], ['bed', 'tempat tidur'], ['at', 'pada (jam)'], ['eleven', 'sebelas']],
      phrases: [['go to bed', 'pergi tidur']],
      pattern: 'D02-P3'
    }
  ],

  review: [
    { ref: 'D01-S06' },
    { ref: 'D01-S10' },
    { ref: 'D01-S13' }
  ],

  patterns: [
    {
      id: 'D02-P1',
      formula: 'I + KATA KERJA + at + JAM',
      meaning: 'Saya ... jam ...',
      examples: ['I wake up at seven.', 'I start work at eight.', 'I finish work at six.', 'I go to bed at ten.'],
      note: 'Jam memakai "at": at six, at 7:30, at noon.'
    },
    {
      id: 'D02-P2',
      formula: 'I have + breakfast / lunch / dinner',
      meaning: 'Saya sarapan / makan siang / makan malam',
      examples: ['I have breakfast at seven.', 'I have lunch with my team.', 'I have dinner at home.'],
      note: '"have" di sini artinya makan, bukan punya.'
    },
    {
      id: 'D02-P3',
      formula: 'I go + to work / to bed / home',
      meaning: 'Saya pergi ke ...',
      examples: ['I go to the office.', 'I go to the gym.', 'I go home at six.', 'I go to bed early.'],
      note: '"home" tidak memakai "to": go home, bukan go to home.'
    }
  ],

  shadowing: ['D02-S01', 'D02-S07', 'D02-S09', 'D02-S15'],

  speaking: [
    { q: 'What time do you wake up?', qId: 'Kamu bangun jam berapa?', hint: 'I wake up at ...', example: 'I wake up at five thirty.' },
    { q: 'What time do you start work?', qId: 'Kamu mulai kerja jam berapa?', hint: 'I start work at ...', example: 'I start work at eight.' },
    { q: 'What do you do after work?', qId: 'Apa yang kamu lakukan setelah kerja?', hint: 'I go home. I have dinner. I ...', example: 'I go home, I have dinner, and I practice English.' },
    { q: 'Describe your morning routine.', qId: 'Ceritakan rutinitas pagimu.', hint: 'I wake up ... I take ... I have ...', example: 'I wake up at six. I take a shower and I have breakfast.' }
  ],

  talk321: null
});
