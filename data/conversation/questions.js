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
 *   sampleAnswers:  contoh jawaban (yang pertama ditampilkan saat salah),
 *   yesNo:          jawaban pendek untuk pertanyaan yes/no ('i am', 'i do', ...), dipakai koreksi "Yes." -> "Yes, I am.",
 *   frame:          kerangka kalimat untuk jawaban satu-dua kata ("5" -> "I woke up at 5."),
 *   correctionHint: petunjuk pola singkat saat jawaban salah
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
      { id: 'C-WAKE-00', context: 'wake', en: 'Good morning! How are you?', idn: 'Selamat pagi! Apa kabar?', minDay: 1,
        answerPatterns: ['(i am )?(very |so |really )?(fine|good|great|ok|okay|not bad|well|tired|sleepy|happy)( thank you| thanks)?( and you)?', 'good morning'],
        sampleAnswers: ['I am fine, thank you.'], frame: 'i am {X}', correctionHint: 'Pola: I am fine.' },
      { id: 'C-WAKE-01', context: 'wake', en: 'Are you awake?', idn: 'Kamu sudah bangun?', minDay: 2, ref: 'D02-S01',
        answerPatterns: be('awake'), yesNo: 'i am', sampleAnswers: ['Yes, I am awake.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-WAKE-02', context: 'wake', en: 'What time is it now?', idn: 'Sekarang jam berapa?', minDay: 5, ref: 'D05-S01',
        answerPatterns: ['it is( about| around)? {TIME}{WHEN}', '((about|around) )?{TIME}{WHEN}'],
        sampleAnswers: ["It is six o'clock."], frame: 'it is {X}', correctionHint: 'Pola: It is ...' },
      { id: 'C-WAKE-03', context: 'wake', en: 'What time did you wake up?', idn: 'Jam berapa kamu bangun?', minDay: 17,
        answerPatterns: ['i (woke|got) up( at| around| about| at about| at around) {TIME}{WHEN}'],
        sampleAnswers: ['I woke up at five.'], frame: 'i woke up at {X}', correctionHint: 'Pola: I woke up at ...' },
      { id: 'C-WAKE-04', context: 'wake', en: 'What time do you usually get up?', idn: 'Biasanya kamu bangun jam berapa?', minDay: 21, ref: 'D21-S01',
        answerPatterns: ['i{FREQ} (get|wake) up( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I usually get up at six.'], frame: 'i usually get up at {X}', correctionHint: 'Pola: I usually get up at ...' },

      // Sarapan
      { id: 'C-BREAK-01', context: 'breakfast', en: 'Do you have breakfast?', idn: 'Apakah kamu sarapan?', minDay: 2, ref: 'D02-S05',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? (have|eat) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have breakfast.'], correctionHint: 'Pola: Yes, I do. / I have breakfast.' },
      { id: 'C-BREAK-02', context: 'breakfast', en: 'What do you want to eat?', idn: 'Kamu mau makan apa?', minDay: 3, ref: 'D03-S01',
        answerPatterns: ['i (want|would like|like)( to eat| to have)? {X}'],
        sampleAnswers: ['I want some bread.'], frame: 'i want {X}', correctionHint: 'Pola: I want ...' },
      { id: 'C-BREAK-03', context: 'breakfast', en: 'What did you eat this morning?', idn: 'Tadi pagi kamu makan apa?', minDay: 17,
        answerPatterns: ['i (ate|had) {X}', 'i did not (eat|have) {X}'],
        sampleAnswers: ['I ate bread.'], frame: 'i ate {X}', correctionHint: 'Pola: I ate ...' },
      { id: 'C-BREAK-04', context: 'breakfast', en: 'Do you always drink coffee in the morning?', idn: 'Apakah kamu selalu minum kopi di pagi hari?', minDay: 21, ref: 'D21-S02',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? drink {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I always drink coffee.'], correctionHint: 'Pola: Yes, I do. / I usually drink ...' },

      // Persiapan berangkat
      { id: 'C-PREP-01', context: 'prepare', en: 'Are you ready?', idn: 'Kamu sudah siap?', minDay: 6,
        answerPatterns: be('ready'), yesNo: 'i am', sampleAnswers: ['Yes, I am ready.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-PREP-02', context: 'prepare', en: 'Do you have your bag?', idn: 'Tasmu sudah dibawa?', minDay: 6, ref: 'D06-S01',
        answerPatterns: [...yn('i do'), 'i( do not)? (have|bring|brought|have got) (my|it|the|a){ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have my bag.'], correctionHint: 'Pola: Yes, I do. / I have my bag.' },
      { id: 'C-PREP-03', context: 'prepare', en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01',
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am getting ready.'], correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-PREP-04', context: 'prepare', en: 'Are you going to work today?', idn: 'Apakah kamu akan berangkat kerja hari ini?', minDay: 18,
        answerPatterns: yn('i am', 'going( to work| to go to work| to the office)?'), yesNo: 'i am',
        sampleAnswers: ['Yes, I am going to work.'], correctionHint: 'Pola: Yes, I am. / I am going to work.' },

      // Perjalanan ke stasiun
      { id: 'C-STAT-01', context: 'station', en: 'Where are you going?', idn: 'Kamu mau ke mana?', minDay: 6,
        answerPatterns: ['i am going( to)? {X}', 'i am going home{ANY}'],
        sampleAnswers: ['I am going to the station.'], frame: 'i am going to {X}', correctionHint: 'Pola: I am going to ...' },
      { id: 'C-STAT-02', context: 'station', en: 'Where is the station?', idn: 'Stasiunnya di mana?', minDay: 7, ref: 'D07-S01',
        answerPatterns: ['(it is|the station is) {X}', '(go straight|turn left|turn right){ANY}'],
        sampleAnswers: ['It is near my house.'], frame: 'it is {X}', correctionHint: 'Pola: It is near ...' },
      { id: 'C-STAT-03', context: 'station', en: 'Where are you going now?', idn: 'Kamu sedang menuju ke mana sekarang?', minDay: 16, ref: 'D16-S04',
        answerPatterns: ['i am going( to)? {X}', 'i am going home{ANY}'],
        sampleAnswers: ['I am going to the office.'], frame: 'i am going to {X}', correctionHint: 'Pola: I am going to ...' },
      { id: 'C-STAT-04', context: 'station', en: 'Is the station far from here?', idn: 'Apakah stasiunnya jauh dari sini?', minDay: 25,
        answerPatterns: ['(it is|the station is)( not)?( (very |so |really )?(far|near|close))?{ANY}'], yesNo: 'it is',
        sampleAnswers: ['No, it is not far.'], correctionHint: 'Pola: Yes, it is. / No, it is not far.' },

      // Di kereta
      { id: 'C-TRAIN-01', context: 'train', en: 'How long does it take?', idn: 'Berapa lama perjalanannya?', minDay: 5, ref: 'D05-S04',
        answerPatterns: ['it takes( about| around)? {X}', '(about |around )?{NUM} (minutes?|hours?){ANY}', '(about |around )?half an hour'],
        sampleAnswers: ['It takes about thirty minutes.'], frame: 'it takes {X}', correctionHint: 'Pola: It takes about ... minutes.' },
      { id: 'C-TRAIN-02', context: 'train', en: 'Are you on the train now?', idn: 'Apakah kamu sedang di kereta sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'on the train'), yesNo: 'i am', sampleAnswers: ['Yes, I am on the train.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-TRAIN-03', context: 'train', en: 'What are you doing on the train?', idn: 'Kamu sedang apa di kereta?', minDay: 16,
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am reading a book.'], correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-TRAIN-04', context: 'train', en: 'How often do you take the train?', idn: 'Seberapa sering kamu naik kereta?', minDay: 21,
        answerPatterns: ['i{FREQ} take (the|a) train{ANY}', '(every day|every morning|every weekday|twice a week|once a week|\\d+ times a week|sometimes|always|often|never|usually|rarely){ANY}'],
        sampleAnswers: ['I take the train every day.'], correctionHint: 'Pola: I take the train every day.' },

      // Mulai kerja
      { id: 'C-WORK-00', context: 'work', en: 'Where do you work?', idn: 'Kamu kerja di mana?', minDay: 1, ref: 'D01-S06',
        answerPatterns: ['i work (at|in|for|from) {X}'], sampleAnswers: ['I work at a software company.'], frame: 'i work at {X}', correctionHint: 'Pola: I work at ...' },
      { id: 'C-WORK-01', context: 'work', en: 'What time do you start work?', idn: 'Kamu mulai kerja jam berapa?', minDay: 2, ref: 'D02-S07',
        answerPatterns: ['i{FREQ} start (work|working)( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I start work at nine.'], frame: 'i start work at {X}', correctionHint: 'Pola: I start work at ...' },
      { id: 'C-WORK-02', context: 'work', en: 'Do you have a meeting today?', idn: 'Apakah hari ini kamu ada meeting?', minDay: 5, ref: 'D05-S02',
        answerPatterns: [...yn('i do'), 'i( do not)? have( a| an| {NUM}| two| no)? meetings?{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I have a meeting at ten.'], correctionHint: 'Pola: Yes, I do. / I have a meeting at ...' },
      { id: 'C-WORK-03', context: 'work', en: 'Are you working now?', idn: 'Apakah kamu sedang bekerja sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'working'), yesNo: 'i am', sampleAnswers: ['Yes, I am working.'], correctionHint: 'Pola: Yes, I am. / I am working.' },
      { id: 'C-WORK-04', context: 'work', en: 'Are you busy right now?', idn: 'Kamu sedang sibuk sekarang?', minDay: 16, ref: 'D16-S02',
        answerPatterns: be('busy'), yesNo: 'i am', sampleAnswers: ['Yes, I am busy.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-WORK-05', context: 'work', en: 'What are you working on today?', idn: 'Hari ini kamu mengerjakan apa?', minDay: 32,
        answerPatterns: ['i am working on {X}', 'i am {ING}{ANY}'], sampleAnswers: ['I am working on the login feature.'], frame: 'i am working on {X}', correctionHint: 'Pola: I am working on ...' },
      { id: 'C-WORK-06', context: 'work', en: 'Can you speak English?', idn: 'Kamu bisa bahasa Inggris?', minDay: 19, ref: 'D19-S01',
        answerPatterns: yn('i can', '(speak )?((a little|a bit|some) )?(english)?( a little)?'), yesNo: 'i can',
        sampleAnswers: ['Yes, I can speak a little English.'], correctionHint: 'Pola: Yes, I can. / I can speak a little English.' },

      // Makan siang
      { id: 'C-LUNCH-01', context: 'lunch', en: 'Are you hungry?', idn: 'Kamu lapar?', minDay: 3,
        answerPatterns: be('hungry'), yesNo: 'i am', sampleAnswers: ['Yes, I am hungry.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-LUNCH-02', context: 'lunch', en: 'What do you want to eat for lunch?', idn: 'Kamu mau makan siang apa?', minDay: 3, ref: 'D03-S01',
        answerPatterns: ['i (want|would like|like)( to eat| to have)? {X}'], sampleAnswers: ['I want fried rice.'], frame: 'i want {X}', correctionHint: 'Pola: I want ...' },
      { id: 'C-LUNCH-03', context: 'lunch', en: 'Is the food delicious?', idn: 'Makanannya enak?', minDay: 3, ref: 'D03-S03',
        answerPatterns: ['(it is|the food is|this is)( not)?( (very |really |so )?(delicious|good|nice|great|tasty))?{ANY}'], yesNo: 'it is',
        sampleAnswers: ['Yes, it is delicious.'], correctionHint: 'Pola: Yes, it is. / It is delicious.' },
      { id: 'C-LUNCH-04', context: 'lunch', en: 'Did you have lunch?', idn: 'Kamu sudah makan siang?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i (had|ate) {X}', 'not yet{ANY}', 'i did not (have|eat){ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I had lunch.'], correctionHint: 'Pola: Yes, I did. / I had lunch.' },

      // Selesai kerja
      { id: 'C-AFTER-01', context: 'afterwork', en: 'How was your day?', idn: 'Bagaimana harimu?', minDay: 15, ref: 'D15-S01',
        answerPatterns: ['(it was|my day was)( very| really| so| quite)? (great|good|fine|ok|okay|busy|tiring|long|bad|nice|not bad|productive){ANY}'],
        sampleAnswers: ['It was great.'], frame: 'it was {X}', correctionHint: 'Pola: It was ...' },
      { id: 'C-AFTER-02', context: 'afterwork', en: 'What did you do today?', idn: 'Hari ini kamu ngapain saja?', minDay: 15, ref: 'D15-S03',
        answerPatterns: ['i( just| also)? {PAST}{ANY}', 'not much'], sampleAnswers: ['I went to work.'], correctionHint: 'Pola: I + verb lampau, contoh: I went to work.' },
      { id: 'C-AFTER-03', context: 'afterwork', en: 'Did you finish your work?', idn: 'Pekerjaanmu sudah selesai?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i( already)? finished{ANY}', 'i did not finish{ANY}', 'not yet{ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I finished my work.'], correctionHint: 'Pola: Yes, I did. / I finished my work.' },
      { id: 'C-AFTER-04', context: 'afterwork', en: 'What is the status of your task?', idn: 'Bagaimana status tugasmu?', minDay: 34,
        answerPatterns: ['(it is|the task is|my task is) {X}', 'i am( still)? working on it{ANY}', '(it is )?(done|finished|almost done|in progress|on track|blocked){ANY}'],
        sampleAnswers: ['It is almost done.'], frame: 'it is {X}', correctionHint: 'Pola: It is almost done.' },

      // Perjalanan pulang
      { id: 'C-HOME-01', context: 'home', en: 'Are you going home now?', idn: 'Kamu sedang pulang sekarang?', minDay: 16,
        answerPatterns: yn('i am', 'going home'), yesNo: 'i am', sampleAnswers: ['Yes, I am going home.'], correctionHint: 'Pola: Yes, I am. / I am going home.' },
      { id: 'C-HOME-02', context: 'home', en: 'Are you tired?', idn: 'Kamu capek?', minDay: 11, ref: 'D11-S06',
        answerPatterns: be('tired'), yesNo: 'i am', sampleAnswers: ['Yes, I am a little tired.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-HOME-03', context: 'home', en: 'What time did you leave the office?', idn: 'Jam berapa kamu pulang dari kantor?', minDay: 17,
        answerPatterns: ['i left( the office| work| home)?( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I left the office at six.'], frame: 'i left at {X}', correctionHint: 'Pola: I left the office at ...' },
      { id: 'C-HOME-04', context: 'home', en: 'Do you often work late?', idn: 'Apakah kamu sering kerja sampai malam?', minDay: 21, ref: 'D21-S03',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? work late{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I often work late.'], correctionHint: 'Pola: Yes, I do. / I often work late.' },

      // Malam
      { id: 'C-EVE-00', context: 'evening', en: 'Where do you live?', idn: 'Kamu tinggal di mana?', minDay: 1, ref: 'D01-S05',
        answerPatterns: ['i live (in|near) {X}'], sampleAnswers: ['I live in Bandung.'], frame: 'i live in {X}', correctionHint: 'Pola: I live in ...' },
      { id: 'C-EVE-01', context: 'evening', en: 'Do you want to eat dinner?', idn: 'Kamu mau makan malam?', minDay: 3,
        answerPatterns: [...yn('i do'), 'i( do not)? (want|would like)( to eat| to have)?( dinner)?{ANY}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I want to eat dinner.'], correctionHint: 'Pola: Yes, I do. / I want to eat ...' },
      { id: 'C-EVE-02', context: 'evening', en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01',
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am watching TV.'], correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-EVE-03', context: 'evening', en: 'Did you have a good day?', idn: 'Harimu menyenangkan?', minDay: 17,
        answerPatterns: [...yn('i did'), 'i did( not)? (it|my day) was {X}', '(it was|my day was){ANY}'], yesNo: 'i did',
        sampleAnswers: ['Yes, I did. It was great.'], correctionHint: 'Pola: Yes, I did. / It was ...' },
      { id: 'C-EVE-04', context: 'evening', en: 'Do you like watching movies?', idn: 'Kamu suka nonton film?', minDay: 9, ref: 'D09-S02',
        answerPatterns: [...yn('i do'), 'i( really)?( do not)? (like|love|enjoy) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I like watching movies.'], correctionHint: 'Pola: Yes, I do. / I like ...' },
      { id: 'C-EVE-05', context: 'evening', en: 'Can you cook?', idn: 'Kamu bisa masak?', minDay: 19,
        answerPatterns: yn('i can', '(cook)( a little| well)?'), yesNo: 'i can',
        sampleAnswers: ['Yes, I can cook a little.'], correctionHint: 'Pola: Yes, I can. / I can cook.' },

      // Sebelum tidur
      { id: 'C-BED-01', context: 'bedtime', en: 'Are you sleepy?', idn: 'Kamu mengantuk?', minDay: 11,
        answerPatterns: be('sleepy|tired'), yesNo: 'i am', sampleAnswers: ['Yes, I am sleepy.'], correctionHint: 'Pola: Yes, I am. / No, I am not.' },
      { id: 'C-BED-02', context: 'bedtime', en: 'What time do you go to bed?', idn: 'Kamu tidur jam berapa?', minDay: 5,
        answerPatterns: ['i{FREQ} (go to bed|sleep|go to sleep)( at| around| about) {TIME}{WHEN}'],
        sampleAnswers: ['I go to bed at ten.'], frame: 'i go to bed at {X}', correctionHint: 'Pola: I go to bed at ...' },
      { id: 'C-BED-03', context: 'bedtime', en: 'What did you learn today?', idn: 'Hari ini kamu belajar apa?', minDay: 17,
        answerPatterns: ['i (learned|learnt|studied|practiced) {X}'], sampleAnswers: ['I learned new words.'], frame: 'i learned {X}', correctionHint: 'Pola: I learned ...' },
      { id: 'C-BED-04', context: 'bedtime', en: 'What are you going to do tomorrow?', idn: 'Besok kamu mau ngapain?', minDay: 18,
        answerPatterns: ['i am going to (?!to ){X}', 'i will (?!to ){X}'], sampleAnswers: ['I am going to work.'], correctionHint: 'Pola: I am going to ...' },

      // Weekend
      { id: 'C-WKND-01', context: 'weekend', en: 'Do you like sports?', idn: 'Kamu suka olahraga?', minDay: 9, ref: 'D09-S08',
        answerPatterns: [...yn('i do'), 'i( really)?( do not)? (like|love|enjoy) {X}'], yesNo: 'i do',
        sampleAnswers: ['Yes, I like sports.'], correctionHint: 'Pola: Yes, I do. / I like ...' },
      { id: 'C-WKND-02', context: 'weekend', en: 'What are you doing today?', idn: 'Hari ini kamu sedang apa?', minDay: 16,
        answerPatterns: ['i am( still)? {ING}{ANY}'], sampleAnswers: ['I am resting at home.'], correctionHint: 'Pola: I am ...-ing' },
      { id: 'C-WKND-03', context: 'weekend', en: 'What did you do yesterday?', idn: 'Kemarin kamu ngapain?', minDay: 17, ref: 'D17-S01',
        answerPatterns: ['i( just| also)? {PAST}{ANY}', 'not much'], sampleAnswers: ['I worked from home.'], correctionHint: 'Pola: I + verb lampau, contoh: I worked from home.' },
      { id: 'C-WKND-04', context: 'weekend', en: 'What are you going to do this weekend?', idn: 'Weekend ini kamu mau ngapain?', minDay: 18, ref: 'D18-S01',
        answerPatterns: ['i am going to (?!to ){X}', 'i will (?!to ){X}'], sampleAnswers: ['I am going to visit my family.'], correctionHint: 'Pola: I am going to ...' },
      { id: 'C-WKND-05', context: 'weekend', en: 'Do you work on Sundays?', idn: 'Apakah kamu kerja di hari Minggu?', minDay: 21, ref: 'D21-S06',
        answerPatterns: [...yn('i do'), 'i{FREQ}( do not)? work on (sundays?|weekends?){ANY}'], yesNo: 'i do',
        sampleAnswers: ['No, I never work on Sundays.'], correctionHint: 'Pola: No, I do not. / I never work on Sundays.' }
    ]
  };
})();
