E90.registerDay({
  day: 1,
  titleId: 'Perkenalan Diri',
  goal: 'Memperkenalkan nama, asal, tempat tinggal, dan pekerjaan.',

  learn: [
    {
      id: 'D01-S01',
      english: 'I am a software developer.',
      pronunciation: 'ai em e sof-wer di-ve-lo-per',
      translation: 'Saya seorang software developer.',
      words: [['I', 'saya'], ['am', 'adalah (to be untuk "I")', 'be'], ['a', 'seorang'], ['software', 'perangkat lunak'], ['developer', 'pengembang']],
      pattern: 'D01-P1'
    },
    {
      id: 'D01-S02',
      english: 'My name is {name}.',
      pronunciation: 'mai neim iz ...',
      translation: 'Nama saya ....',
      words: [['My', 'milik saya'], ['name', 'nama'], ['is', 'adalah', 'be'], ['{name}', '(isi dengan namamu)']],
      pattern: 'D01-P2'
    },
    {
      id: 'D01-S03',
      english: 'Nice to meet you.',
      pronunciation: 'nais tu mit yu',
      translation: 'Senang bertemu dengan Anda.',
      words: [['Nice', 'senang / menyenangkan'], ['to', 'untuk'], ['meet', 'bertemu'], ['you', 'Anda']],
      phrases: [['nice to meet you', 'senang bertemu Anda (diucapkan saat pertama kenal)']]
    },
    {
      id: 'D01-S04',
      english: 'I am from Indonesia.',
      pronunciation: 'ai em from in-do-ni-zha',
      translation: 'Saya berasal dari Indonesia.',
      words: [['I', 'saya'], ['am', 'adalah', 'be'], ['from', 'dari'], ['Indonesia', 'Indonesia']],
      phrases: [['be from', 'berasal dari']],
      pattern: 'D01-P3'
    },
    {
      id: 'D01-S05',
      english: 'I live in Bandung.',
      pronunciation: 'ai liv in ban-dung',
      translation: 'Saya tinggal di Bandung.',
      words: [['I', 'saya'], ['live', 'tinggal'], ['in', 'di (dalam kota/negara)'], ['Bandung', 'Bandung']],
      pattern: 'D01-P4'
    },
    {
      id: 'D01-S06',
      english: 'I work at a software company.',
      pronunciation: 'ai werk et e sof-wer kam-pe-ni',
      translation: 'Saya bekerja di perusahaan software.',
      words: [['I', 'saya'], ['work', 'bekerja'], ['at', 'di (tempat tertentu)'], ['a', 'sebuah'], ['software', 'perangkat lunak'], ['company', 'perusahaan']],
      phrases: [['work at', 'bekerja di (tempat)'], ['software company', 'perusahaan software']],
      pattern: 'D01-P5'
    },
    {
      id: 'D01-S07',
      english: 'I lead a development team.',
      pronunciation: 'ai lid e di-ve-lop-ment tim',
      translation: 'Saya memimpin tim development.',
      words: [['I', 'saya'], ['lead', 'memimpin'], ['a', 'sebuah'], ['development', 'pengembangan'], ['team', 'tim']],
      phrases: [['development team', 'tim pengembangan']]
    },
    {
      id: 'D01-S08',
      english: 'I have seven team members.',
      pronunciation: 'ai hev se-ven tim mem-berz',
      translation: 'Saya mempunyai tujuh anggota tim.',
      words: [['I', 'saya'], ['have', 'mempunyai'], ['seven', 'tujuh'], ['team', 'tim'], ['members', 'anggota-anggota', 'member']],
      phrases: [['team members', 'anggota tim']]
    },
    {
      id: 'D01-S09',
      english: 'I have experience in web development.',
      pronunciation: 'ai hev eks-pi-ri-ens in web di-ve-lop-ment',
      translation: 'Saya mempunyai pengalaman di bidang pengembangan web.',
      words: [['I', 'saya'], ['have', 'mempunyai'], ['experience', 'pengalaman'], ['in', 'di (bidang)'], ['web', 'web'], ['development', 'pengembangan']],
      phrases: [['experience in', 'pengalaman di bidang'], ['web development', 'pengembangan web']]
    },
    {
      id: 'D01-S10',
      english: 'I am learning English.',
      pronunciation: 'ai em ler-ning ing-glish',
      translation: 'Saya sedang belajar bahasa Inggris.',
      words: [['I', 'saya'], ['am', 'sedang (am + -ing)', 'be'], ['learning', 'mempelajari', 'learn'], ['English', 'bahasa Inggris']],
      phrases: [['am learning', 'sedang belajar (kegiatan yang sedang berlangsung)']]
    },
    {
      id: 'D01-S11',
      english: 'I want to speak English better.',
      pronunciation: 'ai want tu spik ing-glish be-ter',
      translation: 'Saya ingin berbicara bahasa Inggris dengan lebih baik.',
      words: [['I', 'saya'], ['want', 'ingin'], ['to', 'untuk (penanda kata kerja)'], ['speak', 'berbicara'], ['English', 'bahasa Inggris'], ['better', 'lebih baik', 'good']],
      phrases: [['want to', 'ingin (diikuti kata kerja)']],
      pattern: 'D01-P6'
    },
    {
      id: 'D01-S12',
      english: 'My hobby is watching movies.',
      pronunciation: 'mai ho-bi iz wo-ching mu-viz',
      translation: 'Hobi saya menonton film.',
      words: [['My', 'milik saya'], ['hobby', 'hobi'], ['is', 'adalah', 'be'], ['watching', 'menonton', 'watch'], ['movies', 'film-film', 'movie']]
    },
    {
      id: 'D01-S13',
      english: 'I like coffee.',
      pronunciation: 'ai laik ko-fi',
      translation: 'Saya suka kopi.',
      words: [['I', 'saya'], ['like', 'suka'], ['coffee', 'kopi']]
    },
    {
      id: 'D01-S14',
      english: 'It is a pleasure to meet you.',
      pronunciation: 'it iz e ple-zher tu mit yu',
      translation: 'Senang sekali bertemu dengan Anda.',
      words: [['It', 'hal ini'], ['is', 'adalah', 'be'], ['a', 'sebuah'], ['pleasure', 'kesenangan / kehormatan'], ['to', 'untuk'], ['meet', 'bertemu'], ['you', 'Anda']],
      phrases: [['it is a pleasure to', 'suatu kehormatan untuk (lebih sopan dari "nice to")']]
    },
    {
      id: 'D01-S15',
      english: "Let's be friends.",
      pronunciation: 'lets bi frendz',
      translation: 'Ayo berteman.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['be', 'menjadi'], ['friends', 'teman-teman', 'friend']],
      phrases: [["let's + kata kerja", 'ayo / mari kita ...']]
    }
  ],

  review: [],

  patterns: [
    {
      id: 'D01-P1',
      formula: 'I am + a/an + PEKERJAAN',
      meaning: 'Saya (adalah) seorang ...',
      examples: ['I am a teacher.', 'I am an engineer.', 'I am a backend developer.', 'I am a student.'],
      note: 'Pakai "an" sebelum bunyi vokal: an engineer, an analyst.'
    },
    {
      id: 'D01-P2',
      formula: 'My name is + NAMA',
      meaning: 'Nama saya ...',
      examples: ['My name is Rina.', 'My name is Budi.', 'My name is Kevin.'],
      note: 'Versi santai: "I\'m Rina."'
    },
    {
      id: 'D01-P3',
      formula: 'I am from + NEGARA / KOTA',
      meaning: 'Saya berasal dari ...',
      examples: ['I am from Jakarta.', 'I am from Surabaya.', 'I am from Singapore.']
    },
    {
      id: 'D01-P4',
      formula: 'I live in + KOTA / NEGARA',
      meaning: 'Saya tinggal di ...',
      examples: ['I live in Jakarta.', 'I live in Singapore.', 'I live in a small city.']
    },
    {
      id: 'D01-P5',
      formula: 'I work at + TEMPAT / PERUSAHAAN',
      meaning: 'Saya bekerja di ...',
      examples: ['I work at a bank.', 'I work at a hospital.', 'I work at a tech company.'],
      note: '"work at" untuk tempat/perusahaan, "work in" untuk bidang atau kota: I work in IT.'
    },
    {
      id: 'D01-P6',
      formula: 'I want to + KATA KERJA',
      meaning: 'Saya ingin ...',
      examples: ['I want to learn English.', 'I want to work in Singapore.', 'I want to meet new people.', 'I want to speak more fluently.']
    }
  ],

  shadowing: ['D01-S01', 'D01-S03', 'D01-S06', 'D01-S11'],

  speaking: [
    { q: "What's your name?", qId: 'Siapa namamu?', hint: 'My name is ...', example: 'My name is Rina.' },
    { q: 'Where are you from?', qId: 'Kamu berasal dari mana?', hint: 'I am from ... / I live in ...', example: 'I am from Indonesia. I live in Jakarta.' },
    { q: 'What do you do?', qId: 'Apa pekerjaanmu?', hint: 'I am a/an ... / I work at ...', example: 'I am a software developer. I work at a software company.' },
    { q: 'Why are you learning English?', qId: 'Kenapa kamu belajar bahasa Inggris?', hint: 'I want to ...', example: 'I want to speak English better for my job.' }
  ],

  talk321: null
});
