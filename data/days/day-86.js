E90.registerDay({
  day: 86,
  titleId: 'Diskusi Code Review Lanjutan',
  goal: 'Berdiskusi dalam code review secara profesional: menyampaikan kekhawatiran, memberi saran sebagai pertanyaan, membedakan blocker dan nitpick, menyebut risiko, dan menanggapi komentar.',

  learn: [
    {
      id: 'D86-S01',
      english: "This works, but I'm worried about readability.",
      pronunciation: 'dis werks, bat aim wa-rid e-baut ri-de-bi-li-ti',
      translation: 'Ini sudah jalan, tapi saya khawatir soal keterbacaan kodenya.',
      words: [['This', 'ini'], ['works', 'berfungsi / jalan; -s karena "this"', 'work'], ['but', 'tetapi'], ["I'm", 'saya (I am)', 'be'], ['worried', 'khawatir', 'worry'], ['about', 'tentang / soal'], ['readability', 'keterbacaan: seberapa mudah kode dibaca']],
      pattern: 'D86-P1'
    },
    {
      id: 'D86-S02',
      english: 'Could we extract this logic into a separate function?',
      pronunciation: 'kud wi ek-strekt dis lo-jik in-tu e se-pe-ret fangk-shen?',
      translation: 'Bisakah logika ini kita pisahkan ke fungsi tersendiri?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['we', 'kita'], ['extract', 'memisahkan / mengeluarkan (bagian kode)'], ['this', 'ini'], ['logic', 'logika'], ['into', 'ke dalam / menjadi'], ['a', 'sebuah (tidak diterjemahkan)'], ['separate', 'terpisah / tersendiri'], ['function', 'fungsi (dalam kode)']],
      pattern: 'D86-P2'
    },
    {
      id: 'D86-S03',
      english: 'Have you considered using a map here?',
      pronunciation: 'hev yu ken-si-derd yu-zing e mep hir?',
      translation: 'Sudah pertimbangkan memakai map di sini?',
      words: [['Have', '(kata bantu pertanyaan "sudah ...?", tidak diterjemahkan)'], ['you', 'kamu'], ['considered', 'mempertimbangkan', 'consider'], ['using', 'memakai', 'use'], ['a', 'sebuah (tidak diterjemahkan)'], ['map', 'map: fungsi untuk mengubah setiap item di daftar'], ['here', 'di sini']],
      pattern: 'D86-P2'
    },
    {
      id: 'D86-S04',
      english: 'This is just a nitpick, so feel free to ignore it.',
      pronunciation: 'dis iz jast e nit-pik, sou fil fri tu ig-nor it',
      translation: 'Ini cuma komentar kecil, jadi boleh diabaikan.',
      words: [['This', 'ini'], ['is', 'adalah', 'be'], ['just', 'hanya / cuma'], ['a', 'sebuah (tidak diterjemahkan)'], ['nitpick', 'nitpick: komentar kecil soal detail yang tidak wajib diubah'], ['so', 'jadi'], ['feel', '(bagian dari "feel free")'], ['free', 'bebas (dalam "feel free")'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['ignore', 'mengabaikan'], ['it', 'itu / -nya']],
      phrases: [['feel free to', 'silakan saja / boleh saja']],
      pattern: 'D86-P3'
    },
    {
      id: 'D86-S05',
      english: "This isn't a blocker, but it would be nice to fix.",
      pronunciation: 'dis i-zent e blo-ker, bat it wud bi nais tu fiks',
      translation: 'Ini bukan hal wajib, tapi bagus kalau diperbaiki.',
      words: [['This', 'ini'], ["isn't", 'bukan (is not)', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['blocker', 'blocker: masalah yang harus diperbaiki sebelum merge'], ['but', 'tetapi'], ['it', 'hal itu'], ['would', 'akan (pengandaian)', 'will'], ['be', 'menjadi'], ['nice', 'bagus / baik'], ['to', 'untuk (penanda kata kerja)'], ['fix', 'diperbaiki']],
      pattern: 'D86-P3'
    },
    {
      id: 'D86-S06',
      english: 'This change could break the mobile app.',
      pronunciation: 'dis cheinj kud breik de mou-bail ep',
      translation: 'Perubahan ini bisa merusak aplikasi mobile.',
      words: [['This', 'ini'], ['change', 'perubahan'], ['could', 'bisa (kemungkinan)', 'can'], ['break', 'merusak / membuat tidak jalan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['mobile', 'mobile / ponsel'], ['app', 'aplikasi']],
      pattern: 'D86-P4'
    },
    {
      id: 'D86-S07',
      english: 'Is this change backward compatible?',
      pronunciation: 'iz dis cheinj bek-werd kem-pe-te-bel?',
      translation: 'Apakah perubahan ini tetap kompatibel dengan versi lama?',
      words: [['Is', '(kata bantu pertanyaan "is ...?", tidak diterjemahkan)', 'be'], ['this', 'ini'], ['change', 'perubahan'], ['backward', 'ke belakang / versi lama'], ['compatible', 'kompatibel / cocok']],
      phrases: [['backward compatible', 'tetap bisa dipakai oleh versi / client yang lama']],
      pattern: 'D86-P4'
    },
    {
      id: 'D86-S08',
      english: 'I did it this way on purpose because the API is limited.',
      pronunciation: 'ai did it dis wei on per-pes bi-koz di ei-pi-ai iz li-mi-tid',
      translation: 'Saya sengaja membuatnya begini karena API-nya terbatas.',
      words: [['I', 'saya'], ['did', 'melakukan (lampau)', 'do'], ['it', 'itu / -nya'], ['this', 'ini'], ['way', 'cara'], ['on', '(bagian dari "on purpose")'], ['purpose', 'tujuan (dalam "on purpose": sengaja)'], ['because', 'karena'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['API', 'API: pintu komunikasi antar aplikasi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['limited', 'terbatas', 'limit']],
      phrases: [['on purpose', 'dengan sengaja'], ['this way', 'dengan cara ini']],
      pattern: 'D86-P5'
    },
    {
      id: 'D86-S09',
      english: "Good catch! I'll fix it.",
      pronunciation: 'gud kech! ail fiks it',
      translation: 'Temuan yang bagus! Akan saya perbaiki.',
      words: [['Good', 'bagus'], ['catch', 'temuan (kata benda, dalam "good catch")'], ["I'll", 'saya akan (I will)', 'will'], ['fix', 'memperbaiki'], ['it', 'itu / -nya']],
      phrases: [['good catch', 'temuan yang bagus (berterima kasih karena kesalahan ditemukan)']],
      pattern: 'D86-P5'
    },
    {
      id: 'D86-S10',
      english: 'Can we discuss this in a quick call instead?',
      pronunciation: 'ken wi dis-kas dis in e kwik kol in-sted?',
      translation: 'Bisa kita bahas lewat call singkat saja?',
      words: [['Can', 'bisakah'], ['we', 'kita'], ['discuss', 'membahas'], ['this', 'ini'], ['in', 'lewat / dalam'], ['a', 'sebuah (tidak diterjemahkan)'], ['quick', 'singkat / cepat'], ['call', 'panggilan / call'], ['instead', 'sebagai gantinya']],
      pattern: 'D39-P2'
    }
  ],

  review: [
    {
      id: 'D86-S11',
      english: "One thing I'd suggest is adding error handling here.",
      pronunciation: 'wan thing aid sag-jest iz e-ding e-rer hen-dling hir',
      translation: 'Satu saran saya: tambahkan error handling di sini.',
      words: [['One', 'satu'], ['thing', 'hal'], ["I'd", 'saya akan (I would)', 'will'], ['suggest', 'menyarankan'], ['is', 'adalah', 'be'], ['adding', 'menambahkan', 'add'], ['error', 'error / kesalahan'], ['handling', 'penanganan', 'handle'], ['here', 'di sini']],
      phrases: [['error handling', 'penanganan error']],
      pattern: 'D53-P3'
    },
    {
      id: 'D86-S12',
      english: "I've addressed your comments and updated the tests.",
      pronunciation: 'aiv e-drest yor ko-ments en ap-dei-tid de tests',
      translation: 'Komentarmu sudah saya tindak lanjuti dan test-nya sudah saya perbarui.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['addressed', 'menindaklanjuti', 'address'], ['your', 'milikmu'], ['comments', 'komentar (jamak)', 'comment'], ['and', 'dan'], ['updated', 'memperbarui', 'update'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['tests', 'test (jamak)', 'test']],
      pattern: 'D68-P5'
    },
    {
      id: 'D86-S13',
      english: 'I see your point, but a loop is easier to debug here.',
      pronunciation: 'ai si yor point, bat e lup iz i-zi-er tu di-bag hir',
      translation: 'Saya paham maksudmu, tapi di sini loop lebih mudah di-debug.',
      words: [['I', 'saya'], ['see', 'memahami (dalam "see your point")'], ['your', 'milikmu'], ['point', 'poin / maksud'], ['but', 'tetapi'], ['a', 'sebuah (tidak diterjemahkan)'], ['loop', 'loop: perulangan dalam kode'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['easier', 'lebih mudah', 'easy'], ['to', 'untuk (penanda kata kerja)'], ['debug', 'di-debug: dicari kesalahannya'], ['here', 'di sini']],
      pattern: 'D41-P3'
    },
    { ref: 'D68-S10' },
    { ref: 'D68-S05' }
  ],

  patterns: [
    {
      id: 'D86-P1',
      formula: "This works, but I'm worried about + BENDA",
      meaning: 'Start a review comment by accepting what is good.',
      examples: ["This works, but I'm worried about performance with large lists.", "The logic looks correct, but I'm not sure about the naming.", "Nice solution, but I think we're missing a test."]
    },
    {
      id: 'D86-P2',
      formula: 'Could we + KATA KERJA?  ·  Have you considered + KATA KERJA-ing?',
      meaning: 'Suggest changes as questions.',
      examples: ['Could we move this to the service layer?', 'Have you considered using a constant here?', 'What do you think about renaming this variable?'],
      note: 'Bertanya ("Could we ...?") terdengar lebih kolaboratif daripada memerintah ("Change this.").'
    },
    {
      id: 'D86-P3',
      formula: "Nitpick: ...  ·  This isn't a blocker, but + KALIMAT",
      meaning: 'Show how important a comment is.',
      examples: ["Nitpick: there's an extra space here.", "This isn't a blocker, but the name could be clearer.", 'This is a blocker: it will fail if the list is empty.'],
      note: 'nitpick = komentar kecil, tidak wajib diubah · blocker = harus diperbaiki sebelum merge.'
    },
    {
      id: 'D86-P4',
      formula: 'This change could break + BENDA  ·  Is this backward compatible?',
      meaning: 'Raise a risk in a code review.',
      examples: ['This change could break older clients.', 'Is this database change backward compatible?', 'Did you check where else this function is used?']
    },
    {
      id: 'D86-P5',
      formula: "I did it this way on purpose because ...  ·  Good catch, I'll fix it.",
      meaning: 'Respond to review comments.',
      examples: ['I did it this way on purpose because the list is always small.', 'Good catch! I missed that case.', "Fair point. I'll update it."]
    }
  ],

  shadowing: ['D86-S01', 'D86-S02', 'D86-S05', 'D86-S07'],

  speaking: [
    { q: 'You are reviewing a pull request. The code works, but it is hard to read. Write a helpful comment.', qId: 'Kamu mereview pull request. Kodenya jalan, tapi sulit dibaca. Tulis komentar yang membantu.', hint: "This works, but I'm worried about ... Could we ...?", example: "This works, but I'm worried about readability. The function does three different things. Could we extract the validation into a separate function?" },
    { q: 'Give one blocking comment and one small nitpick on the same pull request.', qId: 'Beri satu komentar blocker dan satu nitpick kecil pada pull request yang sama.', hint: 'This is a blocker because ... Nitpick: ...', example: "This is a blocker: this change could break the mobile app because the field name changed. Nitpick: the variable name could be clearer, but feel free to ignore it." },
    { q: 'A reviewer comments on something you did intentionally. Respond.', qId: 'Reviewer mengomentari sesuatu yang sengaja kamu buat. Tanggapi.', hint: 'I did it this way on purpose because ... Happy to change it if ...', example: "I did it this way on purpose because the external API only allows ten requests per second. Happy to change it if you have a better idea." },
    { q: 'The discussion in the review comments is getting long. Suggest another way.', qId: 'Diskusi di komentar review makin panjang. Usulkan cara lain.', hint: "Can we discuss this in a quick call instead? I think ...", example: "We have a lot of comments on this. Can we discuss it in a quick call instead? I think it'll be faster." }
  ],

  talk321: null
});
