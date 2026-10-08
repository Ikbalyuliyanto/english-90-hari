/*
 * Bank pertanyaan conversation (lokal, statis — belum AI).
 * Dipakai untuk notification dan halaman #/conversation.
 *
 * Question = {
 *   id:      'C-WAKE-01' (unik),
 *   context: id konteks aktivitas (lihat contexts),
 *   en:      pertanyaan English singkat,
 *   idn:     arti Indonesia,
 *   minDay:  Day paling awal yang materinya membuat pertanyaan ini boleh dipakai,
 *   ref:     id kalimat materi rujukan (opsional, untuk jejak),
 *   answerPatterns: pola jawaban benar (regex atas jawaban yang sudah dinormalisasi; lihat js/core/answer-check.js).
 *                   Placeholder: {TIME} {WHEN} {FREQ} {NUM} {ING} {PAST} {X} (beberapa kata) {ANY} (ekor opsional)
 *                   {TAIL} (ekor ringan: now/today/yet/with ... — tidak menerima verb baru).
 *                   Kontraksi sudah dibuka (I'm -> i am), angka kata jadi digit, awalan yes/no/ok diabaikan.
 *   sampleAnswers:  contoh jawaban (yang pertama ditampilkan saat salah / kisi-kisi level 4),
 *   translations:   { 'English': 'arti Indonesia' } untuk sampleAnswers dan jawaban benar umum lain.
 *                   Dicocokkan setelah normalisasi; arti hanya ditampilkan jika kalimatnya ada di sini.
 *   yesNo:          jawaban pendek untuk pertanyaan yes/no ('i am', 'i do', ...), dipakai koreksi "Yes." -> "Yes, I am.",
 *   frame:          kerangka kalimat untuk jawaban satu-dua kata ("5" -> "I woke up at 5."),
 *   correctionHint: petunjuk pola singkat saat jawaban salah (dipakai juga sebagai kisi-kisi level 3 "Pola"),
 *   grammar:        materi grammar utama (lihat GRAMMAR di js/core/answer-check.js) -> kisi-kisi level 1,
 *   hintKeywords:   kata bantu -> kisi-kisi level 2. Level 4 = sampleAnswers[0].
 * }
 *
 * Aturan: pertanyaan hanya muncul jika minDay <= current day user.
 * Tambah pertanyaan baru cukup dengan menambah item di sini; tidak ada yang di-hardcode per Day.
 */
window.E90 = window.E90 || {};

(() => {
  // Pola jawaban yes/no: "Yes, I am (busy)." / "No, I am not."
  const yn = (aux, words = '') => [`${aux}( not)?${words ? `( ${words})?` : ''}{TAIL}`];
  const be = (adj) => yn('i am', `(very |a little |so |really )?(${adj})`);

  E90.CONVERSATION = {
    contexts: [
      { id: 'wake',      label: 'Bangun tidur',          greeting: 'Good morning!',  hours: [4, 7] },
      { id: 'breakfast', label: 'Sarapan',               greeting: 'Good morning!',  hours: [6, 8] },
      { id: 'prepare',   label: 'Persiapan berangkat',   greeting: 'English Time',   hours: [6, 8] },
      { id: 'station',   label: 'Perjalanan ke stasiun', greeting: 'English Time',   hours: [7, 9] },
      { id: 'train',     label: 'Di kereta',             greeting: 'English Time',   hours: [7, 9] },
      { id: 'work',      label: 'Mulai kerja',           greeting: 'English Time',   hours: [9, 11] },
      { id: 'lunch',     label: 'Makan siang',           greeting: 'Lunch time!',    hours: [11, 13] },
      { id: 'afterwork', label: 'Selesai kerja',         greeting: 'English Time',   hours: [17, 18] },
      { id: 'home',      label: 'Perjalanan pulang',     greeting: 'English Time',   hours: [18, 19] },
      { id: 'evening',   label: 'Malam',                 greeting: 'Good evening!',  hours: [19, 21] },
      { id: 'bedtime',   label: 'Sebelum tidur',         greeting: 'Good night!',    hours: [21, 23] },
      { id: 'weekend',   label: 'Weekend',               greeting: 'Happy weekend!', hours: [8, 20], weekend: true }
    ],

    questions: [
      // Bangun tidur
      { id: 'C-WAKE-00', context: 'wake', grammar: 'be', hintKeywords: ['I am', 'fine'], en: 'Good morning! How are you?', idn: 'Selamat pagi! Apa kabar?', minDay: 1,
        answerPatterns: ['(i am )?(very |so |really )?(fine|good|great|ok|okay|not bad|well|tired|sleepy|happy)( thank you| thanks)?( and you)?', 'good morning'],
        sampleAnswers: ['I am fine, thank you.'],
        translations: { 'I am fine, thank you.': 'Saya baik, terima kasih.', 'I am fine.': 'Saya baik.', 'I am good.': 'Saya baik.', 'I am tired.': 'Saya capek.', 'I am sleepy.': 'Saya mengantuk.' }, frame: 'i am {X}', correctionHint: 'Pola: I am fine.' },
      { id: 'C-WAKE-01', context: 'wake', grammar: 'be', hintKeywords: ['I am', 'awake'], en: 'Are you awake?', idn: 'Kamu sudah bangun?', minDay: 2, ref: 'D02-S01',
        answerPatterns: be('awake'), yesNo: 'i am', sampleAnswers: ['Yes, I am awake.'],
        translations: { 'Yes, I am awake.': 'Ya, saya sudah bangun.', 'Yes, I am.': 'Ya, sudah.', 'No, I am not.': 'Belum.', 'I am awake.': 'Saya sudah bangun.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-WAKE-02', context: 'wake', grammar: 'time', hintKeywords: ['It is', "o'clock"], en: 'What time is it now?', idn: 'Sekarang jam berapa?', minDay: 5, ref: 'D05-S01',
        answerPatterns: ['it is( about| around)? {TIME}{WHEN}', '((about|around) )?{TIME}{WHEN}'],
        sampleAnswers: ["It is six o'clock."],
        translations: { "It is six o'clock.": 'Sekarang jam enam.', 'It is five.': 'Sekarang jam lima.', 'It is six.': 'Sekarang jam enam.', 'It is seven.': 'Sekarang jam tujuh.' }, frame: 'it is {X}', correctionHint: 'Pola: It is ...' },
      { id: 'C-WAKE-03', context: 'wake', grammar: 'past', hintKeywords: ['woke up', 'at'], en: 'What time did you wake up?', idn: 'Jam berapa kamu bangun?', minDay: 17,
        answerPatterns: ['i (woke|got) up( at| around| about| at about| at around) {TIME}{WHEN}'],
        sampleAnswers: ['I woke up at five.'],
        translations: { 'I woke up at five.': 'Saya bangun jam lima.', 'I woke up at five this morning.': 'Saya bangun jam lima pagi ini.', 'I woke up at six.': 'Saya bangun jam enam.', 'I woke up at four.': 'Saya bangun jam empat.' }, frame: 'i woke up at {X}', correctionHint: 'Pola: I woke up at ...' },
      { id: 'C-WAKE-04', context: 'wake', grammar: 'frequency', hintKeywords: ['usually', 'get up', 'at'], en: 'What time do you usually get up?', idn: 'Biasanya kamu bangun jam berapa?', minDay: 21, ref: 'D21-S01',
        answerPatterns: ['i{FREQ} (get|wake) up( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I usually get up at six.'],
        translations: { 'I usually get up at six.': 'Saya biasanya bangun jam enam.', 'I usually get up at five.': 'Saya biasanya bangun jam lima.', 'I usually wake up at five.': 'Saya biasanya bangun jam lima.', 'I always get up at five.': 'Saya selalu bangun jam lima.' }, frame: 'i usually get up at {X}', correctionHint: 'Pola: I usually get up at ...' },

      // Sarapan
      { id: 'C-BREAK-01', context: 'breakfast', grammar: 'present', hintKeywords: ['have', 'breakfast'], en: 'Do you have breakfast?', idn: 'Apakah kamu sarapan?', minDay: 2, ref: 'D02-S05',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? (have|eat) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have breakfast.'],
        translations: { 'Yes, I have breakfast.': 'Ya, saya sarapan.', 'Yes, I do.': 'Ya.', 'No, I do not.': 'Tidak.', 'I have breakfast.': 'Saya sarapan.' }, correctionHint: 'Pola: Yes, I do. / I have breakfast.' },
      { id: 'C-BREAK-02', context: 'breakfast', grammar: 'present', hintKeywords: ['I want'], en: 'What do you want to eat?', idn: 'Kamu mau makan apa?', minDay: 3, ref: 'D03-S01',
        answerPatterns: ['i (want|would like|like)( to eat| to have)? {X}'],
        sampleAnswers: ['I want some bread.'],
        translations: { 'I want some bread.': 'Saya mau roti.', 'I want rice.': 'Saya mau nasi.', 'I want bread.': 'Saya mau roti.', 'I want fried rice.': 'Saya mau nasi goreng.' }, frame: 'i want {X}', correctionHint: 'Pola: I want ...' },
      { id: 'C-BREAK-03', context: 'breakfast', grammar: 'past', hintKeywords: ['ate'], en: 'What did you eat this morning?', idn: 'Tadi pagi kamu makan apa?', minDay: 17,
        answerPatterns: ['i (ate|had) {X}', 'i did not (eat|have) {X}'],
        sampleAnswers: ['I ate bread.'],
        translations: { 'I ate bread.': 'Saya makan roti.', 'I ate rice.': 'Saya makan nasi.', 'I ate bread this morning.': 'Saya makan roti pagi ini.', 'I ate rice and chicken.': 'Saya makan nasi dan ayam.', 'I ate fried rice.': 'Saya makan nasi goreng.', 'I had bread.': 'Saya makan roti.' }, frame: 'i ate {X}', correctionHint: 'Pola: I ate ...' },
      { id: 'C-BREAK-04', context: 'breakfast', grammar: 'frequency', hintKeywords: ['always', 'drink'], en: 'Do you always drink coffee in the morning?', idn: 'Apakah kamu selalu minum kopi di pagi hari?', minDay: 21, ref: 'D21-S02',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? drink {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I always drink coffee.'],
        translations: { 'Yes, I always drink coffee.': 'Ya, saya selalu minum kopi.', 'Yes, I do.': 'Ya.', 'No, I do not.': 'Tidak.', 'I usually drink tea.': 'Saya biasanya minum teh.' }, correctionHint: 'Pola: Yes, I do. / I usually drink ...' },

      // Persiapan berangkat
      { id: 'C-PREP-01', context: 'prepare', grammar: 'be', hintKeywords: ['I am', 'ready'], en: 'Are you ready?', idn: 'Kamu sudah siap?', minDay: 6,
        answerPatterns: be('ready'), yesNo: 'i am', sampleAnswers: ['Yes, I am ready.'],
        translations: { 'Yes, I am ready.': 'Ya, saya sudah siap.', 'Yes, I am.': 'Ya, sudah.', 'No, I am not.': 'Belum.', 'I am ready.': 'Saya sudah siap.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-PREP-02', context: 'prepare', grammar: 'present', hintKeywords: ['have', 'my bag'], en: 'Do you have your bag?', idn: 'Tasmu sudah dibawa?', minDay: 6, ref: 'D06-S01',
        answerPatterns: [...yn('i do'), 'i( do not)? (have|bring|brought|have got) (my|it|the|a){ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have my bag.'],
        translations: { 'Yes, I have my bag.': 'Ya, tas saya sudah dibawa.', 'Yes, I do.': 'Ya, sudah.', 'No, I do not.': 'Belum.', 'I have my bag.': 'Tas saya sudah dibawa.' }, correctionHint: 'Pola: Yes, I do. / I have my bag.' },
      { id: 'C-PREP-03', context: 'prepare', grammar: 'continuous', hintKeywords: ['I am', '-ing'], en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01',
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am getting ready.'],
        translations: { 'I am getting ready.': 'Saya sedang bersiap-siap.', 'I am having breakfast.': 'Saya sedang sarapan.', 'I am taking a shower.': 'Saya sedang mandi.', 'I am getting dressed.': 'Saya sedang berpakaian.' }, correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-PREP-04', context: 'prepare', grammar: 'future', hintKeywords: ['I am', 'going to'], en: 'Are you going to work today?', idn: 'Apakah kamu akan berangkat kerja hari ini?', minDay: 18,
        answerPatterns: yn('i am', 'going( to work| to go to work| to the office)?'), yesNo: 'i am',
        sampleAnswers: ['Yes, I am going to work.'],
        translations: { 'Yes, I am going to work.': 'Ya, saya akan berangkat kerja.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I am. / I am going to work.' },

      // Perjalanan ke stasiun
      { id: 'C-STAT-01', context: 'station', grammar: 'be', hintKeywords: ['I am going', 'to'], en: 'Where are you going?', idn: 'Kamu mau ke mana?', minDay: 6,
        answerPatterns: ['i am going( to)? {X}', 'i am going home{ANY}'],
        sampleAnswers: ['I am going to the station.'],
        translations: { 'I am going to the station.': 'Saya mau ke stasiun.', 'I am going to work.': 'Saya mau berangkat kerja.', 'I am going to the office.': 'Saya mau ke kantor.', 'I am going home.': 'Saya mau pulang.' }, frame: 'i am going to {X}', correctionHint: 'Pola: I am going to ...' },
      { id: 'C-STAT-02', context: 'station', grammar: 'be', hintKeywords: ['It is', 'near'], en: 'Where is the station?', idn: 'Stasiunnya di mana?', minDay: 7, ref: 'D07-S01',
        answerPatterns: ['(it is|the station is) {X}', '(go straight|turn left|turn right){ANY}'],
        sampleAnswers: ['It is near my house.'],
        translations: { 'It is near my house.': 'Stasiunnya dekat rumah saya.', 'It is near here.': 'Stasiunnya dekat sini.', 'Go straight.': 'Jalan lurus.' }, frame: 'it is {X}', correctionHint: 'Pola: It is near ...' },
      { id: 'C-STAT-03', context: 'station', grammar: 'continuous', hintKeywords: ['I am going', 'to'], en: 'Where are you going now?', idn: 'Kamu sedang menuju ke mana sekarang?', minDay: 16, ref: 'D16-S04',
        answerPatterns: ['i am going( to)? {X}', 'i am going home{ANY}'],
        sampleAnswers: ['I am going to the office.'],
        translations: { 'I am going to the office.': 'Saya sedang menuju kantor.', 'I am going to the station.': 'Saya sedang menuju stasiun.', 'I am going home.': 'Saya sedang pulang.' }, frame: 'i am going to {X}', correctionHint: 'Pola: I am going to ...' },
      { id: 'C-STAT-04', context: 'station', grammar: 'be', hintKeywords: ['It is', 'far / near'], en: 'Is the station far from here?', idn: 'Apakah stasiunnya jauh dari sini?', minDay: 25,
        answerPatterns: ['(it is|the station is)( not)?( (very |so |really )?(far|near|close))?{ANY}'], yesNo: 'it is',
        sampleAnswers: ['No, it is not far.'],
        translations: { 'No, it is not far.': 'Tidak, tidak jauh.', 'Yes, it is.': 'Ya, jauh.', 'No, it is not.': 'Tidak.', 'It is near.': 'Dekat.' }, correctionHint: 'Pola: Yes, it is. / No, it is not far.' },

      // Di kereta
      { id: 'C-TRAIN-01', context: 'train', grammar: 'time', hintKeywords: ['It takes', 'minutes'], en: 'How long does it take?', idn: 'Berapa lama perjalanannya?', minDay: 5, ref: 'D05-S04',
        answerPatterns: ['it takes( about| around)? {X}', '(about |around )?{NUM} (minutes?|hours?){ANY}', '(about |around )?half an hour'],
        sampleAnswers: ['It takes about thirty minutes.'],
        translations: { 'It takes about thirty minutes.': 'Kira-kira tiga puluh menit.', 'It takes thirty minutes.': 'Tiga puluh menit.', 'About thirty minutes.': 'Kira-kira tiga puluh menit.', 'It takes about one hour.': 'Kira-kira satu jam.' }, frame: 'it takes {X}', correctionHint: 'Pola: It takes about ... minutes.' },
      { id: 'C-TRAIN-02', context: 'train', grammar: 'be', hintKeywords: ['I am', 'on the train'], en: 'Are you on the train now?', idn: 'Apakah kamu sedang di kereta sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'on the train'), yesNo: 'i am', sampleAnswers: ['Yes, I am on the train.'],
        translations: { 'Yes, I am on the train.': 'Ya, saya sedang di kereta.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-TRAIN-03', context: 'train', grammar: 'continuous', hintKeywords: ['I am', '-ing'], en: 'What are you doing on the train?', idn: 'Kamu sedang apa di kereta?', minDay: 16,
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am reading a book.'],
        translations: { 'I am reading a book.': 'Saya sedang membaca buku.', 'I am listening to music.': 'Saya sedang mendengarkan musik.', 'I am studying English.': 'Saya sedang belajar bahasa Inggris.' }, correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-TRAIN-04', context: 'train', grammar: 'frequency', hintKeywords: ['take the train', 'every day'], en: 'How often do you take the train?', idn: 'Seberapa sering kamu naik kereta?', minDay: 21,
        answerPatterns: ['i{FREQ} take (the|a) train{ANY}', '(every day|every morning|every weekday|twice a week|once a week|\\d+ times a week|sometimes|always|often|never|usually|rarely){ANY}'],
        sampleAnswers: ['I take the train every day.'],
        translations: { 'I take the train every day.': 'Saya naik kereta setiap hari.', 'Every day.': 'Setiap hari.', 'I usually take the train.': 'Saya biasanya naik kereta.' }, correctionHint: 'Pola: I take the train every day.' },

      // Mulai kerja
      { id: 'C-WORK-00', context: 'work', grammar: 'present', hintKeywords: ['I work', 'at'], en: 'Where do you work?', idn: 'Kamu kerja di mana?', minDay: 1, ref: 'D01-S06',
        answerPatterns: ['i work (at|in|for|from) {X}'], sampleAnswers: ['I work at a software company.'],
        translations: { 'I work at a software company.': 'Saya bekerja di perusahaan software.', 'I work at a bank.': 'Saya bekerja di bank.', 'I work from home.': 'Saya bekerja dari rumah.' }, frame: 'i work at {X}', correctionHint: 'Pola: I work at ...' },
      { id: 'C-WORK-01', context: 'work', grammar: 'time', hintKeywords: ['start work', 'at'], en: 'What time do you start work?', idn: 'Kamu mulai kerja jam berapa?', minDay: 2, ref: 'D02-S07',
        answerPatterns: ['i{FREQ} start (work|working)( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I start work at nine.'],
        translations: { 'I start work at nine.': 'Saya mulai kerja jam sembilan.', 'I start work at eight.': 'Saya mulai kerja jam delapan.', 'I usually start work at nine.': 'Saya biasanya mulai kerja jam sembilan.' }, frame: 'i start work at {X}', correctionHint: 'Pola: I start work at ...' },
      { id: 'C-WORK-02', context: 'work', grammar: 'present', hintKeywords: ['have', 'a meeting'], en: 'Do you have a meeting today?', idn: 'Apakah hari ini kamu ada meeting?', minDay: 5, ref: 'D05-S02',
        answerPatterns: [...yn('i do'), 'i( do not)? have( a| an| {NUM}| two| no)? meetings?{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have a meeting at ten.'],
        translations: { 'Yes, I have a meeting at ten.': 'Ya, saya ada meeting jam sepuluh.', 'Yes, I do.': 'Ya, ada.', 'No, I do not.': 'Tidak ada.', 'I have a meeting.': 'Saya ada meeting.' }, correctionHint: 'Pola: Yes, I do. / I have a meeting at ...' },
      { id: 'C-WORK-03', context: 'work', grammar: 'continuous', hintKeywords: ['am', 'working'], en: 'Are you working now?', idn: 'Apakah kamu sedang bekerja sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'working'), yesNo: 'i am', sampleAnswers: ['Yes, I am working.'],
        translations: { 'Yes, I am working.': 'Ya, saya sedang bekerja.', 'Yes, I am working now.': 'Ya, saya sedang bekerja sekarang.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I am. / I am working.' },
      { id: 'C-WORK-04', context: 'work', grammar: 'be', hintKeywords: ['I am', 'busy'], en: 'Are you busy right now?', idn: 'Kamu sedang sibuk sekarang?', minDay: 16, ref: 'D16-S02',
        answerPatterns: be('busy'), yesNo: 'i am', sampleAnswers: ['Yes, I am busy.'],
        translations: { 'Yes, I am busy.': 'Ya, saya sedang sibuk.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.', 'I am very busy.': 'Saya sangat sibuk.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-WORK-05', context: 'work', grammar: 'continuous', hintKeywords: ['working on'], en: 'What are you working on today?', idn: 'Hari ini kamu mengerjakan apa?', minDay: 32,
        answerPatterns: ['i am working on {X}', 'i am {ING}{ANY}'], sampleAnswers: ['I am working on the login feature.'],
        translations: { 'I am working on the login feature.': 'Saya sedang mengerjakan fitur login.', 'I am fixing a bug.': 'Saya sedang memperbaiki bug.' }, frame: 'i am working on {X}', correctionHint: 'Pola: I am working on ...' },
      { id: 'C-WORK-06', context: 'work', grammar: 'can', hintKeywords: ['can', 'speak'], en: 'Can you speak English?', idn: 'Kamu bisa bahasa Inggris?', minDay: 19, ref: 'D19-S01',
        answerPatterns: yn('i can', '(speak )?((a little|a bit|some) )?(english)?( a little)?'), yesNo: 'i can',
        sampleAnswers: ['Yes, I can speak a little English.'],
        translations: { 'Yes, I can speak a little English.': 'Ya, saya bisa berbicara sedikit bahasa Inggris.', 'Yes, I can.': 'Ya, bisa.', 'No, I can not.': 'Tidak bisa.', 'I can speak English.': 'Saya bisa berbicara bahasa Inggris.' }, correctionHint: 'Pola: Yes, I can. / I can speak a little English.' },

      // Makan siang
      { id: 'C-LUNCH-01', context: 'lunch', grammar: 'be', hintKeywords: ['I am', 'hungry'], en: 'Are you hungry?', idn: 'Kamu lapar?', minDay: 3,
        answerPatterns: be('hungry'), yesNo: 'i am', sampleAnswers: ['Yes, I am hungry.'],
        translations: { 'Yes, I am hungry.': 'Ya, saya lapar.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.', 'I am very hungry.': 'Saya sangat lapar.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-LUNCH-02', context: 'lunch', grammar: 'present', hintKeywords: ['I want'], en: 'What do you want to eat for lunch?', idn: 'Kamu mau makan siang apa?', minDay: 3, ref: 'D03-S01',
        answerPatterns: ['i (want|would like|like)( to eat| to have)? {X}'], sampleAnswers: ['I want fried rice.'],
        translations: { 'I want fried rice.': 'Saya mau nasi goreng.', 'I want chicken.': 'Saya mau ayam.', 'I want rice.': 'Saya mau nasi.' }, frame: 'i want {X}', correctionHint: 'Pola: I want ...' },
      { id: 'C-LUNCH-03', context: 'lunch', grammar: 'be', hintKeywords: ['It is', 'delicious'], en: 'Is the food delicious?', idn: 'Makanannya enak?', minDay: 3, ref: 'D03-S03',
        answerPatterns: ['(it is|the food is|this is)( not)?( (very |really |so )?(delicious|good|nice|great|tasty))?{ANY}'], yesNo: 'it is',
        sampleAnswers: ['Yes, it is delicious.'],
        translations: { 'Yes, it is delicious.': 'Ya, enak.', 'Yes, it is.': 'Ya.', 'No, it is not.': 'Tidak.', 'It is very delicious.': 'Sangat enak.' }, correctionHint: 'Pola: Yes, it is. / It is delicious.' },
      { id: 'C-LUNCH-04', context: 'lunch', grammar: 'past', hintKeywords: ['had', 'lunch'], en: 'Did you have lunch?', idn: 'Kamu sudah makan siang?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i (had|ate) {X}', 'not yet{ANY}', 'i did not (have|eat){ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I had lunch.'],
        translations: { 'Yes, I had lunch.': 'Ya, saya sudah makan siang.', 'Yes, I did.': 'Ya, sudah.', 'No, I did not.': 'Belum.', 'Not yet.': 'Belum.' }, correctionHint: 'Pola: Yes, I did. / I had lunch.' },

      // Selesai kerja
      { id: 'C-AFTER-01', context: 'afterwork', grammar: 'past', hintKeywords: ['It was'], en: 'How was your day?', idn: 'Bagaimana harimu?', minDay: 15, ref: 'D15-S01',
        answerPatterns: ['(it was|my day was)( very| really| so| quite)? (great|good|fine|ok|okay|busy|tiring|long|bad|nice|not bad|productive){ANY}'],
        sampleAnswers: ['It was great.'],
        translations: { 'It was great.': 'Harinya menyenangkan.', 'It was good.': 'Harinya baik.', 'It was busy.': 'Harinya sibuk.', 'It was tiring.': 'Harinya melelahkan.' }, frame: 'it was {X}', correctionHint: 'Pola: It was ...' },
      { id: 'C-AFTER-02', context: 'afterwork', grammar: 'past', hintKeywords: ['went', 'worked', 'had'], en: 'What did you do today?', idn: 'Hari ini kamu ngapain saja?', minDay: 15, ref: 'D15-S03',
        answerPatterns: ['i( just| also)? {PAST}{ANY}', 'not much'], sampleAnswers: ['I went to work.'],
        translations: { 'I went to work.': 'Saya pergi bekerja.', 'I worked.': 'Saya bekerja.', 'I had a meeting.': 'Saya ada meeting.' }, correctionHint: 'Pola: I went ... / I worked ...' },
      { id: 'C-AFTER-03', context: 'afterwork', grammar: 'past', hintKeywords: ['finished'], en: 'Did you finish your work?', idn: 'Pekerjaanmu sudah selesai?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i( already)? finished{ANY}', 'i did not finish{ANY}', 'not yet{ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I finished my work.'],
        translations: { 'Yes, I finished my work.': 'Ya, pekerjaan saya sudah selesai.', 'Yes, I did.': 'Ya, sudah.', 'No, I did not.': 'Belum.', 'Not yet.': 'Belum.' }, correctionHint: 'Pola: Yes, I did. / I finished my work.' },
      { id: 'C-AFTER-04', context: 'afterwork', grammar: 'be', hintKeywords: ['It is', 'almost done'], en: 'What is the status of your task?', idn: 'Bagaimana status tugasmu?', minDay: 34,
        answerPatterns: ['(it is|the task is|my task is) {X}', 'i am( still)? working on it{ANY}', '(it is )?(done|finished|almost done|in progress|on track|blocked){ANY}'],
        sampleAnswers: ['It is almost done.'],
        translations: { 'It is almost done.': 'Hampir selesai.', 'It is done.': 'Sudah selesai.', 'It is in progress.': 'Sedang dikerjakan.' }, frame: 'it is {X}', correctionHint: 'Pola: It is almost done.' },

      // Perjalanan pulang
      { id: 'C-HOME-01', context: 'home', grammar: 'continuous', hintKeywords: ['am', 'going home'], en: 'Are you going home now?', idn: 'Kamu sedang pulang sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'going home'), yesNo: 'i am', sampleAnswers: ['Yes, I am going home.'],
        translations: { 'Yes, I am going home.': 'Ya, saya sedang pulang.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I am. / I am going home.' },
      { id: 'C-HOME-02', context: 'home', grammar: 'be', hintKeywords: ['I am', 'tired'], en: 'Are you tired?', idn: 'Kamu capek?', minDay: 11, ref: 'D11-S06',
        answerPatterns: be('tired'), yesNo: 'i am', sampleAnswers: ['Yes, I am a little tired.'],
        translations: { 'Yes, I am a little tired.': 'Ya, saya agak capek.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.', 'Yes, I am tired.': 'Ya, saya capek.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-HOME-03', context: 'home', grammar: 'past', hintKeywords: ['left', 'at'], en: 'What time did you leave the office?', idn: 'Jam berapa kamu pulang dari kantor?', minDay: 17,
        answerPatterns: ['i left( the office| work| home)?( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I left the office at six.'],
        translations: { 'I left the office at six.': 'Saya pulang dari kantor jam enam.', 'I left at six.': 'Saya pulang jam enam.', 'I left the office at five.': 'Saya pulang dari kantor jam lima.' }, frame: 'i left at {X}', correctionHint: 'Pola: I left the office at ...' },
      { id: 'C-HOME-04', context: 'home', grammar: 'frequency', hintKeywords: ['often', 'work late'], en: 'Do you often work late?', idn: 'Apakah kamu sering kerja sampai malam?', minDay: 21, ref: 'D21-S03',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? work late{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I often work late.'],
        translations: { 'Yes, I often work late.': 'Ya, saya sering kerja sampai malam.', 'Yes, I do.': 'Ya.', 'No, I do not.': 'Tidak.', 'I sometimes work late.': 'Saya kadang-kadang kerja sampai malam.' }, correctionHint: 'Pola: Yes, I do. / I often work late.' },

      // Malam
      { id: 'C-EVE-00', context: 'evening', grammar: 'present', hintKeywords: ['I live', 'in'], en: 'Where do you live?', idn: 'Kamu tinggal di mana?', minDay: 1, ref: 'D01-S05',
        answerPatterns: ['i live (in|near) {X}'], sampleAnswers: ['I live in Bandung.'],
        translations: { 'I live in Bandung.': 'Saya tinggal di Bandung.', 'I live in Jakarta.': 'Saya tinggal di Jakarta.' }, frame: 'i live in {X}', correctionHint: 'Pola: I live in ...' },
      { id: 'C-EVE-01', context: 'evening', grammar: 'present', hintKeywords: ['want to eat', 'dinner'], en: 'Do you want to eat dinner?', idn: 'Kamu mau makan malam?', minDay: 3,
        answerPatterns: [...yn('i do'), 'i( do not)? (want|would like)( to eat| to have)?( dinner)?{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I want to eat dinner.'],
        translations: { 'Yes, I want to eat dinner.': 'Ya, saya mau makan malam.', 'Yes, I do.': 'Ya.', 'No, I do not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I do. / I want to eat ...' },
      { id: 'C-EVE-02', context: 'evening', grammar: 'continuous', hintKeywords: ['I am', '-ing'], en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01',
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am watching TV.'],
        translations: { 'I am watching TV.': 'Saya sedang menonton TV.', 'I am resting.': 'Saya sedang istirahat.', 'I am studying English.': 'Saya sedang belajar bahasa Inggris.', 'I am cooking.': 'Saya sedang memasak.' }, correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-EVE-03', context: 'evening', grammar: 'past', hintKeywords: ['did', 'It was'], en: 'Did you have a good day?', idn: 'Harimu menyenangkan?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i did( not)? (it|my day) was {X}', '(it was|my day was){ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I did. It was great.'],
        translations: { 'Yes, I did. It was great.': 'Ya. Harinya menyenangkan.', 'Yes, I did.': 'Ya.', 'No, I did not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I did. / It was ...' },
      { id: 'C-EVE-04', context: 'evening', grammar: 'present', hintKeywords: ['like', 'watching'], en: 'Do you like watching movies?', idn: 'Kamu suka nonton film?', minDay: 9, ref: 'D09-S02',
        answerPatterns: [...yn('i do'), 'i( really)?( do not)? (like|love|enjoy) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I like watching movies.'],
        translations: { 'Yes, I like watching movies.': 'Ya, saya suka nonton film.', 'Yes, I do.': 'Ya, suka.', 'No, I do not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I do. / I like ...' },
      { id: 'C-EVE-05', context: 'evening', grammar: 'can', hintKeywords: ['can', 'cook'], en: 'Can you cook?', idn: 'Kamu bisa masak?', minDay: 19,
        answerPatterns: yn('i can', '(cook)( a little| well)?'), yesNo: 'i can',
        sampleAnswers: ['Yes, I can cook a little.'],
        translations: { 'Yes, I can cook a little.': 'Ya, saya bisa sedikit memasak.', 'Yes, I can.': 'Ya, bisa.', 'No, I can not.': 'Tidak bisa.' }, correctionHint: 'Pola: Yes, I can. / I can cook.' },

      // Sebelum tidur
      { id: 'C-BED-01', context: 'bedtime', grammar: 'be', hintKeywords: ['I am', 'sleepy'], en: 'Are you sleepy?', idn: 'Kamu mengantuk?', minDay: 11,
        answerPatterns: be('sleepy|tired'), yesNo: 'i am', sampleAnswers: ['Yes, I am sleepy.'],
        translations: { 'Yes, I am sleepy.': 'Ya, saya mengantuk.', 'Yes, I am.': 'Ya.', 'No, I am not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-BED-02', context: 'bedtime', grammar: 'time', hintKeywords: ['go to bed', 'at'], en: 'What time do you go to bed?', idn: 'Kamu tidur jam berapa?', minDay: 5,
        answerPatterns: ['i{FREQ} (go to bed|sleep|go to sleep)( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I go to bed at ten.'],
        translations: { 'I go to bed at ten.': 'Saya tidur jam sepuluh.', 'I go to bed at eleven.': 'Saya tidur jam sebelas.', 'I usually go to bed at ten.': 'Saya biasanya tidur jam sepuluh.' }, frame: 'i go to bed at {X}', correctionHint: 'Pola: I go to bed at ...' },
      { id: 'C-BED-03', context: 'bedtime', grammar: 'past', hintKeywords: ['learned'], en: 'What did you learn today?', idn: 'Hari ini kamu belajar apa?', minDay: 17,
        answerPatterns: ['i (learned|learnt|studied|practiced) {X}'], sampleAnswers: ['I learned new words.'],
        translations: { 'I learned new words.': 'Saya belajar kata-kata baru.', 'I learned English.': 'Saya belajar bahasa Inggris.', 'I studied English.': 'Saya belajar bahasa Inggris.' }, frame: 'i learned {X}', correctionHint: 'Pola: I learned ...' },
      { id: 'C-BED-04', context: 'bedtime', grammar: 'future', hintKeywords: ['going to', 'will'], en: 'What are you going to do tomorrow?', idn: 'Besok kamu mau ngapain?', minDay: 18,
        answerPatterns: ['i am going to (?!to ){X}', 'i will (?!to ){X}'], sampleAnswers: ['I am going to work.'],
        translations: { 'I am going to work.': 'Saya akan bekerja.', 'I am going to work tomorrow.': 'Saya akan bekerja besok.', 'I will work.': 'Saya akan bekerja.' }, correctionHint: 'Pola: I am going to ...' },

      // Weekend
      { id: 'C-WKND-01', context: 'weekend', grammar: 'present', hintKeywords: ['like', 'sports'], en: 'Do you like sports?', idn: 'Kamu suka olahraga?', minDay: 9, ref: 'D09-S08',
        answerPatterns: [...yn('i do'), 'i( really)?( do not)? (like|love|enjoy) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I like sports.'],
        translations: { 'Yes, I like sports.': 'Ya, saya suka olahraga.', 'Yes, I do.': 'Ya, suka.', 'No, I do not.': 'Tidak.' }, correctionHint: 'Pola: Yes, I do. / I like ...' },
      { id: 'C-WKND-02', context: 'weekend', grammar: 'continuous', hintKeywords: ['I am', '-ing'], en: 'What are you doing today?', idn: 'Hari ini kamu sedang apa?', minDay: 16,
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am resting at home.'],
        translations: { 'I am resting at home.': 'Saya sedang istirahat di rumah.', 'I am watching TV.': 'Saya sedang menonton TV.', 'I am cooking.': 'Saya sedang memasak.' }, correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-WKND-03', context: 'weekend', grammar: 'past', hintKeywords: ['went', 'worked', 'stayed'], en: 'What did you do yesterday?', idn: 'Kemarin kamu ngapain?', minDay: 17, ref: 'D17-S01',
        answerPatterns: ['i( just| also)? {PAST}{ANY}', 'not much'], sampleAnswers: ['I worked from home.'],
        translations: { 'I worked from home.': 'Saya bekerja dari rumah.', 'I stayed at home.': 'Saya di rumah saja.', 'I went to the mall.': 'Saya pergi ke mal.' }, correctionHint: 'Pola: I worked ... / I stayed ...' },
      { id: 'C-WKND-04', context: 'weekend', grammar: 'future', hintKeywords: ['going to', 'visit'], en: 'What are you going to do this weekend?', idn: 'Weekend ini kamu mau ngapain?', minDay: 18, ref: 'D18-S01',
        answerPatterns: ['i am going to (?!to ){X}', 'i will (?!to ){X}'], sampleAnswers: ['I am going to visit my family.'],
        translations: { 'I am going to visit my family.': 'Saya akan mengunjungi keluarga saya.', 'I am going to rest.': 'Saya akan istirahat.', 'I will stay at home.': 'Saya akan di rumah saja.' }, correctionHint: 'Pola: I am going to ...' },
      { id: 'C-WKND-05', context: 'weekend', grammar: 'frequency', hintKeywords: ['never', 'work on Sundays'], en: 'Do you work on Sundays?', idn: 'Apakah kamu kerja di hari Minggu?', minDay: 21, ref: 'D21-S06',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? work on (sundays?|weekends?){ANY}'], yesNo: 'i do',
        sampleAnswers: ['No, I never work on Sundays.'],
        translations: { 'No, I never work on Sundays.': 'Tidak, saya tidak pernah kerja di hari Minggu.', 'No, I do not.': 'Tidak.', 'Yes, I do.': 'Ya.' }, correctionHint: 'Pola: No, I do not. / I never work on Sundays.' }
    ]
  };
})();
