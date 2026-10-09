E90.registerDay({
  day: 88,
  titleId: 'Komunikasi Insiden Production',
  goal: 'Berkomunikasi selama insiden: mengumumkan insiden, menjelaskan dampak dengan tepat, mitigasi, penyebab yang belum atau sudah dipastikan, jadwal update, dan post-mortem.',

  learn: [
    {
      id: 'D88-S01',
      english: "We're currently experiencing an incident with the payment service.",
      pronunciation: 'wir ker-ent-li eks-pi-ri-en-sing en in-si-dent with de pei-ment ser-vis',
      translation: 'Saat ini kami sedang mengalami insiden pada service pembayaran.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['currently', 'saat ini', 'current'], ['experiencing', 'mengalami', 'experience'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['incident', 'insiden: gangguan pada sistem'], ['with', 'pada / dengan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['payment', 'pembayaran'], ['service', 'service: bagian sistem yang menjalankan satu fungsi']],
      pattern: 'D88-P1'
    },
    {
      id: 'D88-S02',
      english: 'The issue affects users who try to submit this form.',
      pronunciation: 'di i-shu e-fekts yu-zerz hu trai tu sab-mit dis form',
      translation: 'Masalah ini berdampak pada user yang mencoba mengirim formulir ini.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['issue', 'masalah / kendala teknis'], ['affects', 'berdampak pada / memengaruhi; -s karena "the issue"', 'affect'], ['users', 'pengguna (jamak)', 'user'], ['who', 'yang'], ['try', 'mencoba'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['submit', 'mengirim (formulir)'], ['this', 'ini'], ['form', 'formulir']],
      pattern: 'D88-P2'
    },
    {
      id: 'D88-S03',
      english: 'About ten percent of users are affected.',
      pronunciation: 'e-baut ten per-sent ov yu-zerz ar e-fek-tid',
      translation: 'Sekitar sepuluh persen user terdampak.',
      words: [['About', 'sekitar'], ['ten', 'sepuluh'], ['percent', 'persen'], ['of', 'dari'], ['users', 'pengguna (jamak)', 'user'], ['are', '(to be, tidak diterjemahkan)', 'be'], ['affected', 'terdampak', 'affect']],
      pattern: 'D88-P2'
    },
    {
      id: 'D88-S04',
      english: "We've mitigated the impact by switching to the backup provider.",
      pronunciation: 'wiv mi-ti-gei-tid di im-pekt bai swi-ching tu de bek-ap pre-vai-der',
      translation: 'Kami sudah mengurangi dampaknya dengan beralih ke penyedia cadangan.',
      words: [["We've", 'kami sudah (we have)', 'have'], ['mitigated', 'mengurangi dampak', 'mitigate'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['impact', 'dampak'], ['by', 'dengan (cara)'], ['switching', 'beralih', 'switch'], ['to', 'ke'], ['backup', 'cadangan'], ['provider', 'penyedia layanan']],
      phrases: [['mitigate the impact', 'mengurangi dampak (belum tentu menyelesaikan penyebabnya)']],
      pattern: 'D88-P3'
    },
    {
      id: 'D88-S05',
      english: 'The root cause is still under investigation.',
      pronunciation: 'de rut koz iz stil an-der in-ves-ti-gei-shen',
      translation: 'Akar penyebabnya masih diselidiki.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['root', 'akar'], ['cause', 'penyebab'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['still', 'masih'], ['under', '(bagian dari "under investigation")'], ['investigation', 'penyelidikan / investigasi']],
      phrases: [['under investigation', 'sedang diselidiki']],
      pattern: 'D88-P4'
    },
    {
      id: 'D88-S06',
      english: 'It appears to be related to a certificate that expired last night.',
      pronunciation: 'it e-pirz tu bi ri-lei-tid tu e ser-ti-fi-ket det ek-spai-erd last nait',
      translation: 'Tampaknya ini berhubungan dengan sertifikat yang kedaluwarsa tadi malam.',
      words: [['It', 'itu (masalahnya)'], ['appears', 'tampaknya (dalam "appear to be"); -s karena "it"', 'appear'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['be', '(to be, tidak diterjemahkan)'], ['related', 'berhubungan / terkait', 'relate'], ['a', 'sebuah (tidak diterjemahkan)'], ['certificate', 'sertifikat (keamanan, untuk HTTPS)'], ['that', 'yang'], ['expired', 'kedaluwarsa (lampau)', 'expire'], ['last', 'tadi / lalu (dalam "last night")'], ['night', 'malam']],
      phrases: [['appear to be', 'tampaknya (belum pasti)'], ['last night', 'tadi malam / semalam']],
      pattern: 'D88-P4'
    },
    {
      id: 'D88-S07',
      english: 'The next update will be at 3 PM.',
      pronunciation: 'de nekst ap-deit wil bi et thri pi-em',
      translation: 'Update berikutnya akan disampaikan jam 3 sore.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['next', 'berikutnya'], ['update', 'kabar terbaru / update'], ['will', 'akan'], ['be', '(to be, tidak diterjemahkan)'], ['at', 'pada (jam)'], ['3', 'tiga'], ['PM', 'PM: waktu setelah jam 12 siang']],
      pattern: 'D88-P5'
    },
    {
      id: 'D88-S08',
      english: 'The incident is resolved, and all services are working normally.',
      pronunciation: 'di in-si-dent iz ri-zolvd, en ol ser-vi-siz ar wer-king nor-me-li',
      translation: 'Insidennya sudah selesai, dan semua service berjalan normal.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['incident', 'insiden: gangguan pada sistem'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['resolved', 'terselesaikan', 'resolve'], ['and', 'dan'], ['all', 'semua'], ['services', 'service (jamak)', 'service'], ['are', '(kata bantu "are + -ing", tidak diterjemahkan)', 'be'], ['working', 'berfungsi / berjalan', 'work'], ['normally', 'secara normal', 'normal']],
      pattern: 'D88-P5'
    },
    {
      id: 'D88-S09',
      english: "We'll share a post-mortem by Friday.",
      pronunciation: 'wil sher e poust-mor-tem bai frai-dei',
      translation: 'Kami akan membagikan laporan post-mortem paling lambat hari Jumat.',
      words: [["We'll", 'kami akan (we will)', 'will'], ['share', 'membagikan'], ['a', 'sebuah (tidak diterjemahkan)'], ['post-mortem', 'post-mortem: laporan evaluasi setelah insiden'], ['by', 'paling lambat'], ['Friday', 'Jumat']],
      pattern: 'D88-P5'
    },
    {
      id: 'D88-S10',
      english: 'We apologize for the inconvenience.',
      pronunciation: 'wi e-po-le-jaiz for di in-ken-vi-ni-ens',
      translation: 'Kami mohon maaf atas ketidaknyamanannya.',
      words: [['We', 'kami'], ['apologize', 'meminta maaf (formal)'], ['for', 'atas'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['inconvenience', 'ketidaknyamanan']],
      phrases: [['we apologize for the inconvenience', 'kalimat formal untuk pelanggan saat ada gangguan']]
    }
  ],

  review: [
    {
      id: 'D88-S11',
      english: 'We rolled back the deployment as a temporary fix.',
      pronunciation: 'wi rould bek de di-ploi-ment ez e tem-pe-re-ri fiks',
      translation: 'Kami rollback deploy-nya sebagai perbaikan sementara.',
      words: [['We', 'kami'], ['rolled', 'mengembalikan (dalam "roll back", lampau)', 'roll'], ['back', 'kembali (dalam "roll back")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['deployment', 'deployment: proses merilis ke server'], ['as', 'sebagai'], ['a', 'sebuah (tidak diterjemahkan)'], ['temporary', 'sementara'], ['fix', 'perbaikan (kata benda)']],
      pattern: 'D73-P3'
    },
    {
      id: 'D88-S12',
      english: "Some users can't complete their payments.",
      pronunciation: 'sam yu-zerz kent kem-plit der pei-ments',
      translation: 'Sebagian user tidak bisa menyelesaikan pembayarannya.',
      words: [['Some', 'sebagian / beberapa'], ['users', 'pengguna (jamak)', 'user'], ["can't", 'tidak bisa (cannot)', 'can'], ['complete', 'menyelesaikan'], ['their', 'milik mereka'], ['payments', 'pembayaran (jamak)', 'payment']],
      pattern: 'D73-P1'
    },
    {
      id: 'D88-S13',
      english: "We're monitoring the error rate closely.",
      pronunciation: 'wir mo-ni-te-ring di e-rer reit klous-li',
      translation: 'Kami memantau tingkat error-nya dengan saksama.',
      words: [["We're", 'kami sedang (we are)', 'be'], ['monitoring', 'memantau', 'monitor'], ['the', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['error', 'error / kesalahan'], ['rate', 'tingkat / persentase'], ['closely', 'dengan saksama', 'close']],
      pattern: 'D73-P4'
    },
    { ref: 'D70-S09' },
    { ref: 'D73-S08' }
  ],

  patterns: [
    {
      id: 'D88-P1',
      formula: "We're currently experiencing an incident with + BENDA",
      meaning: 'Announce an incident clearly.',
      examples: ["We're currently experiencing an outage in the login service.", "We're seeing high error rates on the API.", "We're aware of the issue and working on it."]
    },
    {
      id: 'D88-P2',
      formula: 'The issue affects + ORANG + who + KALIMAT  ·  About + ANGKA + percent of users are affected',
      meaning: 'Describe the impact precisely.',
      examples: ['The issue affects customers who pay by bank transfer.', 'About five percent of requests are failing.', 'Mobile users are not affected.']
    },
    {
      id: 'D88-P3',
      formula: "We've mitigated the impact by + KATA KERJA-ing",
      meaning: 'Explain what reduced the impact.',
      examples: ["We've mitigated the impact by rolling back the release.", 'We reduced the load by turning off the reports feature.', 'Users can use the web app as a workaround.'],
      note: 'mitigate = mengurangi dampak (belum tentu menyelesaikan tuntas) · workaround = cara sementara agar user tetap bisa bekerja.'
    },
    {
      id: 'D88-P4',
      formula: 'The root cause is still under investigation  ·  It appears to be related to + BENDA',
      meaning: 'Share what you know without guessing.',
      examples: ['The root cause is still under investigation.', 'It appears to be related to the database upgrade.', "We'll confirm once we have more information."],
      note: '"appears to be" / "may be related to" = belum pasti. "The root cause was ..." = sudah dipastikan.'
    },
    {
      id: 'D88-P5',
      formula: "The next update will be at + WAKTU  ·  The incident is resolved  ·  We'll share a post-mortem",
      meaning: 'Set expectations and close the incident.',
      examples: ['The next update will be in thirty minutes.', 'The incident was resolved at 2:40 PM.', "We'll share a post-mortem with the timeline and next steps."],
      note: 'post-mortem = laporan setelah insiden: apa yang terjadi, penyebabnya, dan cara mencegahnya terulang.'
    }
  ],

  shadowing: ['D88-S01', 'D88-S02', 'D88-S04', 'D88-S07'],

  speaking: [
    { q: "Write the first message about an incident in your company's incident channel.", qId: 'Tulis pesan pertama tentang insiden di channel insiden perusahaanmu.', hint: "We're currently experiencing an incident with ... The issue affects ... The next update will be at ...", example: "We're currently experiencing an incident with the payment service. The issue affects users who try to pay by card. About ten percent of payments are failing. The next update will be at 3 PM." },
    { q: 'Give an update: the impact is reduced, but the cause is not confirmed yet.', qId: 'Beri update: dampaknya sudah berkurang, tapi penyebabnya belum dipastikan.', hint: "We've mitigated the impact by ... The root cause is still under investigation. It appears to be related to ...", example: "We've mitigated the impact by switching to the backup payment provider, and payments are working again. The root cause is still under investigation. It appears to be related to a certificate that expired last night." },
    { q: 'Close the incident and explain what happens next.', qId: 'Tutup insidennya dan jelaskan langkah selanjutnya.', hint: "The incident is resolved ... We'll share a post-mortem ... We apologize for ...", example: "The incident is resolved, and all services are working normally. We've renewed the certificate and added an alert. We'll share a post-mortem by Friday. We apologize for the inconvenience." }
  ],

  talk321: { topic: 'Give a production incident update: the impact, what the team is doing, and when the next update will be.' }
});
