E90.registerDay({
  day: 73,
  titleId: 'Masalah di Production',
  goal: 'Memberi update saat ada masalah di production: dampak ke user, investigasi, perbaikan sementara, perbaikan permanen, dan pemantauan.',

  learn: [
    {
      id: 'D73-S01',
      english: 'The issue only happens in production.',
      pronunciation: 'di i-shu oun-li he-penz in pre-dak-shen',
      translation: 'Masalahnya hanya terjadi di production.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala teknis'], ['only', 'hanya'], ['happens', 'terjadi', 'happen'], ['in', 'di'], ['production', 'production: server yang dipakai user asli']],
      pattern: 'D42-P5'
    },
    {
      id: 'D73-S02',
      english: 'Users are getting a 500 error on the login page.',
      pronunciation: 'yu-zerz ar ge-ting e faiv-han-dred e-rer on de lo-gin peij',
      translation: 'User mendapat error 500 di halaman login.',
      words: [['Users', 'pengguna (jamak)', 'user'], ['are', '(kata bantu "are + -ing", tidak diterjemahkan)', 'be'], ['getting', 'mendapat', 'get'], ['a', 'sebuah (tidak diterjemahkan)'], ['500', '500: kode status "ada masalah di server"'], ['error', 'error / kesalahan'], ['on', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['login', 'login: proses masuk ke akun'], ['page', 'halaman']],
      pattern: 'D73-P1'
    },
    {
      id: 'D73-S03',
      english: "Some users can't access their accounts.",
      pronunciation: 'sam yu-zerz kent ek-ses der e-kaunts',
      translation: 'Sebagian user tidak bisa mengakses akunnya.',
      words: [['Some', 'sebagian / beberapa'], ['users', 'pengguna (jamak)', 'user'], ["can't", 'tidak bisa (cannot)', 'can'], ['access', 'mengakses'], ['their', 'milik mereka'], ['accounts', 'akun (jamak)', 'account']],
      pattern: 'D73-P1'
    },
    {
      id: 'D73-S04',
      english: "We're investigating the problem right now.",
      pronunciation: 'wir in-ves-ti-gei-ting de prob-lem rait nau',
      translation: 'Kami sedang menyelidiki masalahnya sekarang.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['investigating', 'menyelidiki / menginvestigasi', 'investigate'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['problem', 'masalah'], ['right', 'tepat (dalam "right now")'], ['now', 'sekarang']],
      pattern: 'D73-P2'
    },
    {
      id: 'D73-S05',
      english: "We've identified the service that's causing the errors.",
      pronunciation: 'wiv ai-den-ti-faid de ser-vis dets ko-zing di e-rerz',
      translation: 'Kami sudah menemukan service yang menyebabkan error-nya.',
      words: [["We've", 'kami sudah (we have)', 'have'], ['identified', 'mengidentifikasi / menemukan', 'identify'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['service', 'service: bagian sistem yang menjalankan satu fungsi'], ["that's", 'yang (that is)', 'that'], ['causing', 'menyebabkan', 'cause'], ['errors', 'error (jamak)', 'error']],
      pattern: 'D73-P2'
    },
    {
      id: 'D73-S06',
      english: 'We applied a temporary fix.',
      pronunciation: 'wi e-plaid e tem-pe-re-ri fiks',
      translation: 'Kami sudah menerapkan perbaikan sementara.',
      words: [['We', 'kami'], ['applied', 'menerapkan (lampau)', 'apply'], ['a', 'sebuah (tidak diterjemahkan)'], ['temporary', 'sementara'], ['fix', 'perbaikan (kata benda)']],
      phrases: [['temporary fix', 'solusi sementara agar sistem jalan dulu']],
      pattern: 'D73-P3'
    },
    {
      id: 'D73-S07',
      english: 'The permanent fix will be deployed tomorrow.',
      pronunciation: 'de per-me-nent fiks wil bi di-ploid tu-mo-rou',
      translation: 'Perbaikan permanennya akan di-deploy besok.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['permanent', 'permanen / tuntas'], ['fix', 'perbaikan (kata benda)'], ['will', 'akan'], ['be', '(to be, tidak diterjemahkan)'], ['deployed', 'di-deploy / dirilis ke server', 'deploy'], ['tomorrow', 'besok']],
      pattern: 'D73-P3'
    },
    {
      id: 'D73-S08',
      english: 'The system is back to normal now.',
      pronunciation: 'de sis-tem iz bek tu nor-mel nau',
      translation: 'Sistemnya sudah kembali normal sekarang.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['back', 'kembali'], ['to', 'ke'], ['normal', 'normal (keadaan biasa)'], ['now', 'sekarang']],
      phrases: [['back to normal', 'kembali normal']],
      pattern: 'D73-P4'
    },
    {
      id: 'D73-S09',
      english: 'The issue lasted about forty minutes.',
      pronunciation: 'di i-shu les-tid e-baut for-ti mi-nits',
      translation: 'Masalahnya berlangsung sekitar empat puluh menit.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala teknis'], ['lasted', 'berlangsung (lampau)', 'last'], ['about', 'sekitar'], ['forty', 'empat puluh'], ['minutes', 'menit (jamak)', 'minute']],
      pattern: 'D73-P4'
    },
    {
      id: 'D73-S10',
      english: "We're monitoring the system closely.",
      pronunciation: 'wir mo-ni-te-ring de sis-tem klous-li',
      translation: 'Kami memantau sistemnya dengan saksama.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['monitoring', 'memantau', 'monitor'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['closely', 'dengan saksama / ketat', 'close']],
      pattern: 'D73-P4'
    }
  ],

  review: [
    {
      id: 'D73-S11',
      english: 'This is causing problems for many customers.',
      pronunciation: 'dis iz ko-zing prob-lemz for me-ni kas-te-merz',
      translation: 'Ini menimbulkan masalah bagi banyak pelanggan.',
      words: [['This', 'ini'], ['is', '(kata bantu "is + -ing", tidak diterjemahkan)', 'be'], ['causing', 'menyebabkan / menimbulkan', 'cause'], ['problems', 'masalah (jamak)', 'problem'], ['for', 'bagi / untuk'], ['many', 'banyak'], ['customers', 'pelanggan (jamak)', 'customer']],
      pattern: 'D42-P3'
    },
    {
      id: 'D73-S12',
      english: 'We rolled back the last deployment.',
      pronunciation: 'wi rould bek de last di-ploi-ment',
      translation: 'Kami rollback deploy terakhir.',
      words: [['We', 'kami'], ['rolled', 'mengembalikan (dalam "roll back", lampau)', 'roll'], ['back', 'kembali (dalam "roll back")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['last', 'terakhir'], ['deployment', 'deployment: proses merilis ke server']],
      pattern: 'D72-P5'
    },
    {
      id: 'D73-S13',
      english: "I'll send an update every thirty minutes.",
      pronunciation: 'ail send en ap-deit ev-ri ther-ti mi-nits',
      translation: 'Saya akan kirim update setiap tiga puluh menit.',
      words: [["I'll", 'saya akan (I will)', 'will'], ['send', 'mengirim'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['update', 'kabar terbaru / update'], ['every', 'setiap'], ['thirty', 'tiga puluh'], ['minutes', 'menit (jamak)', 'minute']],
      pattern: 'D18-P2'
    },
    { ref: 'D70-S09' },
    { ref: 'D44-S08' }
  ],

  patterns: [
    {
      id: 'D73-P1',
      formula: "Users are getting + BENDA  ·  Some users can't + KATA KERJA",
      meaning: 'Describe what users experience.',
      examples: ['Users are getting a timeout on the payment page.', "Some users can't upload files.", 'Customers are seeing the wrong prices.']
    },
    {
      id: 'D73-P2',
      formula: "We're investigating + BENDA  ·  We've identified + BENDA",
      meaning: 'Show progress during an incident.',
      examples: ["We're investigating the login issue.", "We've identified the cause.", "We've found the server that is failing."]
    },
    {
      id: 'D73-P3',
      formula: 'We applied a temporary fix  ·  The permanent fix will be + KATA KERJA-ed + WAKTU',
      meaning: 'Explain the fix.',
      examples: ['We restarted the service as a temporary fix.', 'We turned off the new feature for now.', 'The permanent fix will be released next week.'],
      note: 'temporary fix = solusi sementara (sering disebut workaround) · permanent fix = perbaikan tuntas.'
    },
    {
      id: 'D73-P4',
      formula: "The system is back to normal  ·  The issue lasted + WAKTU  ·  We're monitoring + BENDA",
      meaning: 'Close an incident update.',
      examples: ['Everything is back to normal.', 'The outage lasted fifteen minutes.', "We're monitoring the error rate."]
    }
  ],

  shadowing: ['D73-S02', 'D73-S04', 'D73-S06', 'D73-S08'],

  speaking: [
    { q: 'There is a production issue right now. Give a first update to your manager.', qId: 'Sedang ada masalah di production. Beri update pertama ke atasanmu.', hint: "Users are getting ... Some users can't ... We're investigating ...", example: "We have a production issue. Users are getting a 500 error on the login page, and some users can't access their accounts. We're investigating the problem right now." },
    { q: 'You found a temporary fix. Give a second update.', qId: 'Kamu menemukan perbaikan sementara. Beri update kedua.', hint: "We've identified ... We applied a temporary fix ... The permanent fix will ...", example: "We've identified the service that's causing the errors. We applied a temporary fix by restarting it, and users can log in again. The permanent fix will be deployed tomorrow." },
    { q: 'The issue is solved. Give a final update.', qId: 'Masalahnya sudah selesai. Beri update terakhir.', hint: "The system is back to normal. The issue lasted ... We're monitoring ... The next step is ...", example: "The system is back to normal now. The issue lasted about forty minutes. We're monitoring the system closely, and the next step is to write a short report about what happened." }
  ],

  talk321: { topic: 'Explain a production issue: what happened, who was affected, and what the team did.' }
});
