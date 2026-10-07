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
 *   ref:     id kalimat/pattern materi rujukan (opsional, untuk jejak)
 * }
 *
 * Aturan: pertanyaan hanya muncul jika minDay <= current day user.
 * Tambah pertanyaan baru cukup dengan menambah item di sini; tidak ada yang di-hardcode per Day.
 */
window.E90 = window.E90 || {};

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
    { id: 'C-WAKE-00', context: 'wake', en: 'Good morning! How are you?', idn: 'Selamat pagi! Apa kabar?', minDay: 1 },
    { id: 'C-WAKE-01', context: 'wake', en: 'Are you awake?', idn: 'Kamu sudah bangun?', minDay: 2, ref: 'D02-S01' },
    { id: 'C-WAKE-02', context: 'wake', en: 'What time is it now?', idn: 'Sekarang jam berapa?', minDay: 5, ref: 'D05-S01' },
    { id: 'C-WAKE-03', context: 'wake', en: 'What time did you wake up?', idn: 'Jam berapa kamu bangun?', minDay: 17 },
    { id: 'C-WAKE-04', context: 'wake', en: 'What time do you usually get up?', idn: 'Biasanya kamu bangun jam berapa?', minDay: 21, ref: 'D21-S01' },

    // Sarapan
    { id: 'C-BREAK-01', context: 'breakfast', en: 'Do you have breakfast?', idn: 'Apakah kamu sarapan?', minDay: 2, ref: 'D02-S05' },
    { id: 'C-BREAK-02', context: 'breakfast', en: 'What do you want to eat?', idn: 'Kamu mau makan apa?', minDay: 3, ref: 'D03-S01' },
    { id: 'C-BREAK-03', context: 'breakfast', en: 'What did you eat this morning?', idn: 'Tadi pagi kamu makan apa?', minDay: 17 },
    { id: 'C-BREAK-04', context: 'breakfast', en: 'Do you always drink coffee in the morning?', idn: 'Apakah kamu selalu minum kopi di pagi hari?', minDay: 21, ref: 'D21-S02' },

    // Persiapan berangkat
    { id: 'C-PREP-01', context: 'prepare', en: 'Are you ready?', idn: 'Kamu sudah siap?', minDay: 6 },
    { id: 'C-PREP-02', context: 'prepare', en: 'Do you have your bag?', idn: 'Tasmu sudah dibawa?', minDay: 6, ref: 'D06-S01' },
    { id: 'C-PREP-03', context: 'prepare', en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01' },
    { id: 'C-PREP-04', context: 'prepare', en: 'Are you going to work today?', idn: 'Apakah kamu akan berangkat kerja hari ini?', minDay: 18 },

    // Perjalanan ke stasiun
    { id: 'C-STAT-01', context: 'station', en: 'Where are you going?', idn: 'Kamu mau ke mana?', minDay: 6 },
    { id: 'C-STAT-02', context: 'station', en: 'Where is the station?', idn: 'Stasiunnya di mana?', minDay: 7, ref: 'D07-S01' },
    { id: 'C-STAT-03', context: 'station', en: 'Where are you going now?', idn: 'Kamu sedang menuju ke mana sekarang?', minDay: 16, ref: 'D16-S04' },
    { id: 'C-STAT-04', context: 'station', en: 'Is the station far from here?', idn: 'Apakah stasiunnya jauh dari sini?', minDay: 25 },

    // Di kereta
    { id: 'C-TRAIN-01', context: 'train', en: 'How long does it take?', idn: 'Berapa lama perjalanannya?', minDay: 5, ref: 'D05-S04' },
    { id: 'C-TRAIN-02', context: 'train', en: 'Are you on the train now?', idn: 'Apakah kamu sedang di kereta sekarang?', minDay: 16 },
    { id: 'C-TRAIN-03', context: 'train', en: 'What are you doing on the train?', idn: 'Kamu sedang apa di kereta?', minDay: 16 },
    { id: 'C-TRAIN-04', context: 'train', en: 'How often do you take the train?', idn: 'Seberapa sering kamu naik kereta?', minDay: 21 },

    // Mulai kerja
    { id: 'C-WORK-00', context: 'work', en: 'Where do you work?', idn: 'Kamu kerja di mana?', minDay: 1, ref: 'D01-S06' },
    { id: 'C-WORK-01', context: 'work', en: 'What time do you start work?', idn: 'Kamu mulai kerja jam berapa?', minDay: 2, ref: 'D02-S07' },
    { id: 'C-WORK-02', context: 'work', en: 'Do you have a meeting today?', idn: 'Apakah hari ini kamu ada meeting?', minDay: 5, ref: 'D05-S02' },
    { id: 'C-WORK-03', context: 'work', en: 'Are you working now?', idn: 'Apakah kamu sedang bekerja sekarang?', minDay: 16 },
    { id: 'C-WORK-04', context: 'work', en: 'Are you busy right now?', idn: 'Kamu sedang sibuk sekarang?', minDay: 16, ref: 'D16-S02' },
    { id: 'C-WORK-05', context: 'work', en: 'What are you working on today?', idn: 'Hari ini kamu mengerjakan apa?', minDay: 32 },

    // Makan siang
    { id: 'C-LUNCH-01', context: 'lunch', en: 'Are you hungry?', idn: 'Kamu lapar?', minDay: 3 },
    { id: 'C-LUNCH-02', context: 'lunch', en: 'What do you want to eat for lunch?', idn: 'Kamu mau makan siang apa?', minDay: 3, ref: 'D03-S01' },
    { id: 'C-LUNCH-03', context: 'lunch', en: 'Is the food delicious?', idn: 'Makanannya enak?', minDay: 3, ref: 'D03-S03' },
    { id: 'C-LUNCH-04', context: 'lunch', en: 'Did you have lunch?', idn: 'Kamu sudah makan siang?', minDay: 17 },

    // Selesai kerja
    { id: 'C-AFTER-01', context: 'afterwork', en: 'How was your day?', idn: 'Bagaimana harimu?', minDay: 15, ref: 'D15-S01' },
    { id: 'C-AFTER-02', context: 'afterwork', en: 'What did you do today?', idn: 'Hari ini kamu ngapain saja?', minDay: 15, ref: 'D15-S03' },
    { id: 'C-AFTER-03', context: 'afterwork', en: 'Did you finish your work?', idn: 'Pekerjaanmu sudah selesai?', minDay: 17 },
    { id: 'C-AFTER-04', context: 'afterwork', en: 'What is the status of your task?', idn: 'Bagaimana status tugasmu?', minDay: 34 },

    // Perjalanan pulang
    { id: 'C-HOME-01', context: 'home', en: 'Are you going home now?', idn: 'Kamu sedang pulang sekarang?', minDay: 16 },
    { id: 'C-HOME-02', context: 'home', en: 'Are you tired?', idn: 'Kamu capek?', minDay: 11, ref: 'D11-S06' },
    { id: 'C-HOME-03', context: 'home', en: 'What time did you leave the office?', idn: 'Jam berapa kamu pulang dari kantor?', minDay: 17 },
    { id: 'C-HOME-04', context: 'home', en: 'Do you often work late?', idn: 'Apakah kamu sering kerja sampai malam?', minDay: 21, ref: 'D21-S03' },

    // Malam
    { id: 'C-EVE-00', context: 'evening', en: 'Where do you live?', idn: 'Kamu tinggal di mana?', minDay: 1, ref: 'D01-S05' },
    { id: 'C-EVE-01', context: 'evening', en: 'Do you want to eat dinner?', idn: 'Kamu mau makan malam?', minDay: 3 },
    { id: 'C-EVE-02', context: 'evening', en: 'What are you doing now?', idn: 'Kamu sedang apa sekarang?', minDay: 16, ref: 'D16-S01' },
    { id: 'C-EVE-03', context: 'evening', en: 'Did you have a good day?', idn: 'Harimu menyenangkan?', minDay: 17 },
    { id: 'C-EVE-04', context: 'evening', en: 'Do you like watching movies?', idn: 'Kamu suka nonton film?', minDay: 9, ref: 'D09-S02' },

    // Sebelum tidur
    { id: 'C-BED-01', context: 'bedtime', en: 'Are you sleepy?', idn: 'Kamu mengantuk?', minDay: 11 },
    { id: 'C-BED-02', context: 'bedtime', en: 'What time do you go to bed?', idn: 'Kamu tidur jam berapa?', minDay: 5 },
    { id: 'C-BED-03', context: 'bedtime', en: 'What did you learn today?', idn: 'Hari ini kamu belajar apa?', minDay: 17 },
    { id: 'C-BED-04', context: 'bedtime', en: 'What are you going to do tomorrow?', idn: 'Besok kamu mau ngapain?', minDay: 18 },

    // Weekend
    { id: 'C-WKND-01', context: 'weekend', en: 'Do you like sports?', idn: 'Kamu suka olahraga?', minDay: 9, ref: 'D09-S08' },
    { id: 'C-WKND-02', context: 'weekend', en: 'What are you doing today?', idn: 'Hari ini kamu sedang apa?', minDay: 16 },
    { id: 'C-WKND-03', context: 'weekend', en: 'What did you do yesterday?', idn: 'Kemarin kamu ngapain?', minDay: 17, ref: 'D17-S01' },
    { id: 'C-WKND-04', context: 'weekend', en: 'What are you going to do this weekend?', idn: 'Weekend ini kamu mau ngapain?', minDay: 18, ref: 'D18-S01' },
    { id: 'C-WKND-05', context: 'weekend', en: 'Do you work on Sundays?', idn: 'Apakah kamu kerja di hari Minggu?', minDay: 21, ref: 'D21-S06' }
  ]
};
