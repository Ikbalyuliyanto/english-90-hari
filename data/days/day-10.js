E90.registerDay({
  day: 10,
  titleId: 'Cuaca',
  goal: 'Small talk tentang cuaca dan perubahan keadaan.',

  learn: [
    {
      id: 'D10-S01',
      english: "It's sunny.",
      pronunciation: 'its sa-ni',
      translation: 'Cuacanya cerah.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['sunny', 'cerah']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S02',
      english: "It's cloudy.",
      pronunciation: 'its klau-di',
      translation: 'Cuacanya berawan.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['cloudy', 'berawan']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S03',
      english: "It's rainy.",
      pronunciation: 'its rei-ni',
      translation: 'Cuacanya hujan.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['rainy', 'hujan / sering hujan']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S04',
      english: "It's windy.",
      pronunciation: 'its win-di',
      translation: 'Cuacanya berangin.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['windy', 'berangin']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S05',
      english: "It's cold.",
      pronunciation: 'its kould',
      translation: 'Cuacanya dingin.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['cold', 'dingin (suhu)']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S06',
      english: "It's hot.",
      pronunciation: 'its hot',
      translation: 'Cuacanya panas.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['hot', 'panas']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S07',
      english: "It's warm.",
      pronunciation: 'its worm',
      translation: 'Cuacanya hangat.',
      words: [["It's", 'cuacanya (it is — "it" untuk cuaca)', 'be'], ['warm', 'hangat']],
      pattern: 'D10-P1'
    },
    {
      id: 'D10-S08',
      english: 'I like this weather.',
      pronunciation: 'ai laik dis we-der',
      translation: 'Saya suka cuaca ini.',
      words: [['I', 'saya'], ['like', 'suka'], ['this', 'ini'], ['weather', 'cuaca']]
    },
    {
      id: 'D10-S09',
      english: "I don't like the rain.",
      pronunciation: 'ai dount laik de rein',
      translation: 'Saya tidak suka hujan.',
      words: [['I', 'saya'], ["don't", 'tidak (do not)'], ['like', 'suka'], ['the', '(tidak diterjemahkan)'], ['rain', 'hujan (kata benda)']]
    },
    {
      id: 'D10-S10',
      english: "It's a beautiful day.",
      pronunciation: 'its e byu-ti-ful dei',
      translation: 'Hari ini indah.',
      words: [["It's", 'ini (adalah) — it is', 'be'], ['a', 'sebuah'], ['beautiful', 'indah'], ['day', 'hari']]
    },
    {
      id: 'D10-S11',
      english: 'The sky is blue.',
      pronunciation: 'de skai iz blu',
      translation: 'Langitnya biru.',
      words: [['The', 'itu / -nya'], ['sky', 'langit'], ['is', 'adalah', 'be'], ['blue', 'biru']]
    },
    {
      id: 'D10-S12',
      english: 'The weather is nice.',
      pronunciation: 'de we-der iz nais',
      translation: 'Cuacanya bagus.',
      words: [['The', 'itu / -nya'], ['weather', 'cuaca'], ['is', 'adalah', 'be'], ['nice', 'bagus / menyenangkan']]
    },
    {
      id: 'D10-S13',
      english: "It's getting colder.",
      pronunciation: 'its ge-ting koul-der',
      translation: 'Cuacanya semakin dingin.',
      words: [["It's", 'cuacanya sedang (it is)', 'be'], ['getting', 'menjadi / semakin', 'get'], ['colder', 'lebih dingin', 'cold']],
      phrases: [['getting + -er', 'semakin ...']],
      pattern: 'D10-P2'
    },
    {
      id: 'D10-S14',
      english: "It's going to rain.",
      pronunciation: 'its gou-ing tu rein',
      translation: 'Sepertinya akan hujan.',
      words: [["It's", 'cuacanya (it is)', 'be'], ['going', 'akan (dalam "going to")', 'go'], ['to', '(bagian dari "going to")'], ['rain', 'hujan (kata kerja)']],
      phrases: [['be going to', 'akan (prediksi / rencana) — bukan "pergi"']],
      pattern: 'D10-P3'
    },
    {
      id: 'D10-S15',
      english: "Let's go outside.",
      pronunciation: 'lets gou aut-said',
      translation: 'Ayo keluar.',
      words: [["Let's", 'mari kita (let us)', 'let'], ['go', 'pergi'], ['outside', 'ke luar']]
    }
  ],

  review: [
    { ref: 'D09-S14' },
    { ref: 'D05-S04' },
    { ref: 'D06-S15' }
  ],

  patterns: [
    {
      id: 'D10-P1',
      formula: "It's + CUACA",
      meaning: 'Cuacanya ...',
      examples: ["It's humid today.", "It's very hot in Singapore.", "It's raining now.", "It's not too cold."],
      note: 'Bahasa Inggris selalu butuh subjek. Untuk cuaca dan waktu, subjeknya "it".'
    },
    {
      id: 'D10-P2',
      formula: "It's getting + KATA SIFAT(-er)",
      meaning: 'Semakin ...',
      examples: ["It's getting late.", "It's getting better.", "It's getting dark.", "It's getting busier."]
    },
    {
      id: 'D10-P3',
      formula: 'going to + KATA KERJA',
      meaning: 'akan ... (prediksi atau rencana)',
      examples: ["It's going to be hot.", "It's going to be a busy day.", "I'm going to call you tonight.", "We're going to finish soon."]
    }
  ],

  shadowing: ['D10-S08', 'D10-S12', 'D10-S13', 'D10-S14'],

  speaking: [
    { q: "How's the weather today?", qId: 'Bagaimana cuaca hari ini?', hint: "It's ... / It's going to ...", example: "It's cloudy and a bit windy. I think it's going to rain." },
    { q: 'What kind of weather do you like?', qId: 'Kamu suka cuaca seperti apa?', hint: "I like ... weather. I don't like ...", example: "I like cool weather. I don't like the heat." },
    { q: 'Start small talk with a colleague about the weather.', qId: 'Mulai obrolan ringan tentang cuaca dengan rekan kerja.', hint: "It's ... today, isn't it?", example: "It's really hot today, isn't it?" }
  ],

  talk321: null
});
