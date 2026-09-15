E90.registerDay({
  day: 69,
  titleId: 'Menjelaskan Bug',
  goal: 'Melaporkan bug dengan jelas: apa yang terjadi, kapan terjadi, hasil yang diharapkan vs yang terjadi, cara memunculkannya, dan dampaknya.',

  learn: [
    {
      id: 'D69-S01',
      english: 'I found a bug in the checkout page.',
      pronunciation: 'ai faund e bag in de chek-aut peij',
      translation: 'Saya menemukan bug di halaman checkout.',
      words: [['I', 'saya'], ['found', 'menemukan (lampau)', 'find'], ['a', 'sebuah (tidak diterjemahkan)'], ['bug', 'bug: kesalahan dalam program'], ['in', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['checkout', 'checkout: proses pembayaran belanja online'], ['page', 'halaman']],
      pattern: 'D69-P1'
    },
    {
      id: 'D69-S02',
      english: 'When I click "Pay", nothing happens.',
      pronunciation: 'wen ai klik pei, na-thing he-penz',
      translation: 'Saat saya klik "Pay", tidak terjadi apa-apa.',
      words: [['When', 'saat / ketika'], ['I', 'saya'], ['click', 'mengklik'], ['Pay', 'Bayar (nama tombol)'], ['nothing', 'tidak ada apa-apa'], ['happens', 'terjadi; -s karena "nothing"', 'happen']],
      pattern: 'D69-P2'
    },
    {
      id: 'D69-S03',
      english: 'The expected result is a confirmation message.',
      pronunciation: 'di ek-spek-tid ri-zalt iz e kon-fer-mei-shen me-sij',
      translation: 'Hasil yang seharusnya adalah pesan konfirmasi.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['expected', 'yang diharapkan / seharusnya', 'expect'], ['result', 'hasil'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['confirmation', 'konfirmasi'], ['message', 'pesan']],
      pattern: 'D69-P3'
    },
    {
      id: 'D69-S04',
      english: 'But the actual result is a blank page.',
      pronunciation: 'bat di ek-chu-el ri-zalt iz e blengk peij',
      translation: 'Tapi yang benar-benar terjadi adalah halaman kosong.',
      words: [['But', 'tetapi'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['actual', 'sebenarnya / yang terjadi'], ['result', 'hasil'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['blank', 'kosong (tanpa isi)'], ['page', 'halaman']],
      phrases: [['actual result', 'hasil yang benar-benar terjadi (bukan "aktual/terkini")']],
      pattern: 'D69-P3'
    },
    {
      id: 'D69-S05',
      english: 'The issue only happens on iOS.',
      pronunciation: 'di i-shu oun-li he-penz on ai-o-es',
      translation: 'Masalahnya hanya terjadi di iOS.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala teknis'], ['only', 'hanya'], ['happens', 'terjadi', 'happen'], ['on', 'di / pada'], ['iOS', 'iOS: sistem operasi iPhone']],
      pattern: 'D42-P5'
    },
    {
      id: 'D69-S06',
      english: 'I can reproduce it every time.',
      pronunciation: 'ai ken ri-pre-dyus it ev-ri taim',
      translation: 'Saya bisa memunculkannya lagi setiap kali mencoba.',
      words: [['I', 'saya'], ['can', 'bisa'], ['reproduce', 'memunculkan ulang (bug) dengan langkah yang sama'], ['it', 'itu (bug-nya)'], ['every', 'setiap'], ['time', 'kali']],
      phrases: [['reproduce a bug', 'mengulang langkah sampai bug muncul lagi']],
      pattern: 'D69-P4'
    },
    {
      id: 'D69-S07',
      english: 'Here are the steps to reproduce it.',
      pronunciation: 'hir ar de steps tu ri-pre-dyus it',
      translation: 'Ini langkah-langkah untuk memunculkan bug-nya.',
      words: [['Here', 'ini (dalam "here are")'], ['are', '(bagian dari "here are")', 'be'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['steps', 'langkah (jamak)', 'step'], ['to', 'untuk (penanda kata kerja)'], ['reproduce', 'memunculkan ulang (bug)'], ['it', 'itu (bug-nya)']],
      phrases: [['steps to reproduce', 'langkah-langkah untuk memunculkan bug']],
      pattern: 'D69-P4'
    },
    {
      id: 'D69-S08',
      english: 'It affects all users who pay by card.',
      pronunciation: 'it e-fekts ol yu-zerz hu pei bai kard',
      translation: 'Bug ini berdampak ke semua user yang bayar pakai kartu.',
      words: [['It', 'itu (bug-nya)'], ['affects', 'memengaruhi / berdampak ke; -s karena "it"', 'affect'], ['all', 'semua'], ['users', 'pengguna (jamak)', 'user'], ['who', 'yang'], ['pay', 'membayar'], ['by', 'dengan (cara)'], ['card', 'kartu']],
      pattern: 'D69-P5'
    },
    {
      id: 'D69-S09',
      english: "This is a critical bug because customers can't pay.",
      pronunciation: 'dis iz e kri-ti-kel bag bi-koz kas-te-merz kent pei',
      translation: 'Ini bug kritis karena pelanggan tidak bisa membayar.',
      words: [['This', 'ini'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['critical', 'kritis / sangat serius'], ['bug', 'bug: kesalahan dalam program'], ['because', 'karena'], ['customers', 'pelanggan (jamak)', 'customer'], ["can't", 'tidak bisa (cannot)', 'can'], ['pay', 'membayar']],
      pattern: 'D69-P5'
    },
    {
      id: 'D69-S10',
      english: "It's a minor bug, so it can wait.",
      pronunciation: 'its e mai-ner bag, sou it ken weit',
      translation: 'Ini bug kecil, jadi bisa ditunda.',
      words: [["It's", 'ini (it is)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['minor', 'kecil / tidak serius'], ['bug', 'bug: kesalahan dalam program'], ['so', 'jadi'], ['it', 'itu'], ['can', 'bisa'], ['wait', 'menunggu / ditunda']],
      pattern: 'D69-P5'
    }
  ],

  review: [
    {
      id: 'D69-S11',
      english: "I've attached a screenshot of the error.",
      pronunciation: 'aiv e-techt e skrin-shot ov di e-rer',
      translation: 'Saya sudah melampirkan screenshot error-nya.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['attached', 'melampirkan (-ed dibaca "t")', 'attach'], ['a', 'sebuah (tidak diterjemahkan)'], ['screenshot', 'tangkapan layar'], ['of', 'dari'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['error', 'error / pesan kesalahan']],
      pattern: 'D34-P1'
    },
    {
      id: 'D69-S12',
      english: 'When did the problem start?',
      pronunciation: 'wen did de prob-lem start?',
      translation: 'Kapan masalahnya mulai?',
      words: [['When', 'kapan'], ['did', '(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)', 'do'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['problem', 'masalah'], ['start', 'mulai']],
      pattern: 'D23-P1'
    },
    {
      id: 'D69-S13',
      english: "It started after yesterday's update.",
      pronunciation: 'it star-tid ef-ter yes-ter-deiz ap-deit',
      translation: 'Masalahnya mulai setelah update kemarin.',
      words: [['It', 'itu (masalahnya)'], ['started', 'mulai (lampau, -ed dibaca "id")', 'start'], ['after', 'setelah'], ["yesterday's", 'kemarin (punya kemarin)', 'yesterday'], ['update', 'pembaruan / update']],
      pattern: 'D17-P1'
    },
    { ref: 'D42-S07' },
    { ref: 'D42-S10' }
  ],

  patterns: [
    {
      id: 'D69-P1',
      formula: 'I found a bug in + BENDA',
      meaning: 'Start a bug report.',
      examples: ['I found a bug in the login form.', "There's a bug in the export feature.", 'A user reported a bug on the profile page.']
    },
    {
      id: 'D69-P2',
      formula: 'When I + KATA KERJA, + HASIL',
      meaning: 'Describe what goes wrong.',
      examples: ['When I upload a PDF, the page freezes.', 'When I change the language, the menu disappears.', 'When I refresh the page, I get logged out.']
    },
    {
      id: 'D69-P3',
      formula: 'The expected result is ...  ·  The actual result is ...',
      meaning: 'Compare what should happen with what really happens.',
      examples: ['The expected result is a success message.', 'The actual result is a 500 error.', 'Expected: the total is updated. Actual: the total stays the same.']
    },
    {
      id: 'D69-P4',
      formula: "I can / can't reproduce it + ...  ·  Here are the steps to reproduce it",
      meaning: 'Talk about reproducing a bug.',
      examples: ['I can reproduce it on my laptop.', "I can't reproduce it locally.", "It only happens sometimes, so it's hard to reproduce."],
      note: 'reproduce (ri-pre-dyus) = memunculkan bug lagi dengan langkah yang sama.'
    },
    {
      id: 'D69-P5',
      formula: "It affects + ORANG + who + ...  ·  It's a critical / minor bug",
      meaning: 'Explain the impact and how serious it is.',
      examples: ['It affects users who log in with Google.', "It's a critical bug because nobody can check out.", "It's a minor bug. It's only a typo."]
    }
  ],

  shadowing: ['D69-S02', 'D69-S04', 'D69-S06', 'D69-S08'],

  speaking: [
    { q: 'Describe a bug you found recently. What happens, and when does it happen?', qId: 'Ceritakan bug yang baru kamu temukan. Apa yang terjadi, dan kapan terjadinya?', hint: 'I found a bug in ... When I ..., ... It only happens ...', example: 'I found a bug in the report page. When I choose a date range longer than one month, the page shows no data. It only happens in the production environment.' },
    { q: 'Explain the expected result and the actual result of that bug.', qId: 'Jelaskan hasil yang seharusnya dan hasil yang terjadi untuk bug itu.', hint: 'The expected result is ... But the actual result is ...', example: 'The expected result is a table with all orders in that period. But the actual result is an empty table with no error message.' },
    { q: 'How serious is the bug, and who does it affect?', qId: 'Seberapa serius bug-nya, dan siapa yang terdampak?', hint: "It affects ... who ... It's a critical / minor bug because ...", example: "It affects managers who need monthly reports. It's not critical, but it's important because they use the report every Monday." }
  ],

  talk321: { topic: 'Describe a bug: what happens, when it happens, and how serious it is.' }
});
