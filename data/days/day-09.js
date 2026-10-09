E90.registerDay({
  day: 9,
  titleId: 'Hobi dan Minat',
  goal: 'Menceritakan kegiatan yang kamu suka dan menanggapi orang lain.',

  learn: [
    {
      id: 'D09-S01',
      english: 'I like music.',
      pronunciation: 'ai laik myu-zik',
      translation: 'Saya suka musik.',
      words: [['I', 'saya'], ['like', 'suka'], ['music', 'musik']]
    },
    {
      id: 'D09-S02',
      english: 'I like watching movies.',
      pronunciation: 'ai laik wo-ching mu-viz',
      translation: 'Saya suka menonton film.',
      words: [['I', 'saya'], ['like', 'suka'], ['watching', 'menonton', 'watch'], ['movies', 'film-film', 'movie']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S03',
      english: 'I like reading books.',
      pronunciation: 'ai laik ri-ding buks',
      translation: 'Saya suka membaca buku.',
      words: [['I', 'saya'], ['like', 'suka'], ['reading', 'membaca', 'read'], ['books', 'buku-buku', 'book']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S04',
      english: 'I like playing games.',
      pronunciation: 'ai laik plei-ing geimz',
      translation: 'Saya suka bermain game.',
      words: [['I', 'saya'], ['like', 'suka'], ['playing', 'bermain', 'play'], ['games', 'permainan / game', 'game']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S05',
      english: 'I like cooking.',
      pronunciation: 'ai laik ku-king',
      translation: 'Saya suka memasak.',
      words: [['I', 'saya'], ['like', 'suka'], ['cooking', 'memasak', 'cook']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S06',
      english: 'I like traveling.',
      pronunciation: 'ai laik tre-ve-ling',
      translation: 'Saya suka bepergian.',
      words: [['I', 'saya'], ['like', 'suka'], ['traveling', 'bepergian / jalan-jalan', 'travel']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S07',
      english: 'I like photography.',
      pronunciation: 'ai laik fe-to-gre-fi',
      translation: 'Saya suka fotografi.',
      words: [['I', 'saya'], ['like', 'suka'], ['photography', 'fotografi']]
    },
    {
      id: 'D09-S08',
      english: 'I like sports.',
      pronunciation: 'ai laik sports',
      translation: 'Saya suka olahraga.',
      words: [['I', 'saya'], ['like', 'suka'], ['sports', 'olahraga (jamak)', 'sport']]
    },
    {
      id: 'D09-S09',
      english: 'I like learning new things.',
      pronunciation: 'ai laik ler-ning nyu thingz',
      translation: 'Saya suka mempelajari hal-hal baru.',
      words: [['I', 'saya'], ['like', 'suka'], ['learning', 'mempelajari', 'learn'], ['new', 'baru'], ['things', 'hal-hal', 'thing']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S10',
      english: 'My hobby is reading.',
      pronunciation: 'mai ho-bi iz ri-ding',
      translation: 'Hobi saya membaca.',
      words: [['My', 'milik saya'], ['hobby', 'hobi'], ['is', 'adalah', 'be'], ['reading', 'membaca', 'read']]
    },
    {
      id: 'D09-S11',
      english: 'What do you like?',
      pronunciation: 'wat du yu laik?',
      translation: 'Kamu suka apa?',
      words: [['What', 'apa'], ['do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['like', 'suka']]
    },
    {
      id: 'D09-S12',
      english: 'Do you like music?',
      pronunciation: 'du yu laik myu-zik?',
      translation: 'Kamu suka musik?',
      words: [['Do', '(kata bantu pertanyaan, tidak diterjemahkan)'], ['you', 'kamu'], ['like', 'suka'], ['music', 'musik']],
      pattern: 'D09-P2'
    },
    {
      id: 'D09-S13',
      english: "I don't like cooking.",
      pronunciation: 'ai dount laik ku-king',
      translation: 'Saya tidak suka memasak.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['like', 'suka'], ['cooking', 'memasak', 'cook']],
      pattern: 'D09-P1'
    },
    {
      id: 'D09-S14',
      english: 'That sounds fun.',
      pronunciation: 'det saundz fan',
      translation: 'Kedengarannya menyenangkan.',
      words: [['That', 'itu'], ['sounds', 'terdengar', 'sound'], ['fun', 'menyenangkan / seru']],
      pattern: 'D09-P3'
    },
    {
      id: 'D09-S15',
      english: "Let's do it together.",
      pronunciation: 'lets du it tu-ge-der',
      translation: 'Ayo lakukan bersama-sama.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['do', 'melakukan'], ['it', 'itu / hal itu'], ['together', 'bersama-sama']]
    }
  ],

  review: [
    { ref: 'D01-S12' },
    { ref: 'D03-S06' },
    { ref: 'D06-S01' }
  ],

  patterns: [
    {
      id: 'D09-P1',
      formula: "I like / I don't like + KATA KERJA-ing",
      meaning: 'Saya suka / tidak suka (melakukan) ...',
      examples: ['I like swimming.', 'I like coding.', "I don't like waking up early.", 'I like working with a team.'],
      note: 'Untuk kegiatan, pakai bentuk -ing setelah "like".'
    },
    {
      id: 'D09-P2',
      formula: 'Do you like + BENDA / KATA KERJA-ing?',
      meaning: 'Kamu suka ...?',
      examples: ['Do you like coffee?', 'Do you like working from home?', 'Do you like traveling?']
    },
    {
      id: 'D09-P3',
      formula: 'That sounds + KATA SIFAT',
      meaning: 'Kedengarannya ...',
      examples: ['That sounds great.', 'That sounds interesting.', 'That sounds difficult.', 'That sounds like a good idea.'],
      note: 'Respons cepat supaya percakapan tetap berjalan.'
    }
  ],

  shadowing: ['D09-S02', 'D09-S09', 'D09-S12', 'D09-S14'],

  speaking: [
    { q: 'What do you do in your free time?', qId: 'Apa yang kamu lakukan di waktu luang?', hint: 'I like ...-ing. My hobby is ...', example: 'I like playing badminton and watching movies.' },
    { q: "What don't you like doing?", qId: 'Kegiatan apa yang tidak kamu suka?', hint: "I don't like ...-ing", example: "I don't like waiting in traffic." },
    { q: 'Your friend says: "I play football every Sunday." Respond and ask a question.', qId: 'Temanmu bilang ia main bola tiap Minggu. Tanggapi dan bertanya balik.', hint: 'That sounds ... Do you like ...?', example: 'That sounds fun! Do you play with your colleagues?' }
  ],

  talk321: null
});
