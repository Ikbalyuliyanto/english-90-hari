E90.registerDay({
  day: 72,
  titleId: 'Deployment & Environment',
  goal: 'Menjelaskan proses rilis: environment, pipeline otomatis, deploy yang gagal, dan rollback.',

  learn: [
    {
      id: 'D72-S01',
      english: 'We deploy to production every Thursday.',
      pronunciation: 'wi di-ploi tu pre-dak-shen ev-ri therz-dei',
      translation: 'Kami deploy ke production setiap hari Kamis.',
      words: [['We', 'kami'], ['deploy', 'deploy: merilis aplikasi ke server'], ['to', 'ke'], ['production', 'production: server yang dipakai user asli'], ['every', 'setiap'], ['Thursday', 'Kamis']],
      pattern: 'D72-P1'
    },
    {
      id: 'D72-S02',
      english: 'First, we test everything on staging.',
      pronunciation: 'ferst, wi test ev-ri-thing on stei-jing',
      translation: 'Pertama, kami mengetes semuanya di staging.',
      words: [['First', 'pertama'], ['we', 'kami'], ['test', 'mengetes / menguji'], ['everything', 'semuanya'], ['on', 'di'], ['staging', 'staging: server uji yang mirip production']],
      pattern: 'D72-P2'
    },
    {
      id: 'D72-S03',
      english: 'We have three environments: development, staging, and production.',
      pronunciation: 'wi hev thri in-vai-ren-ments: di-ve-lop-ment, stei-jing, en pre-dak-shen',
      translation: 'Kami punya tiga environment: development, staging, dan production.',
      words: [['We', 'kami'], ['have', 'punya'], ['three', 'tiga'], ['environments', 'environment: lingkungan server tempat aplikasi berjalan (jamak)', 'environment'], ['development', 'development: environment untuk developer'], ['staging', 'staging: server uji yang mirip production'], ['and', 'dan'], ['production', 'production: server yang dipakai user asli']],
      pattern: 'D72-P2'
    },
    {
      id: 'D72-S04',
      english: 'The deployment failed because an environment variable was missing.',
      pronunciation: 'de di-ploi-ment feild bi-koz en in-vai-ren-ment ve-ri-e-bel woz mi-sing',
      translation: 'Deploy-nya gagal karena ada environment variable yang belum diisi.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['deployment', 'deployment: proses merilis ke server'], ['failed', 'gagal (lampau)', 'fail'], ['because', 'karena'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['environment', 'environment: lingkungan server'], ['variable', 'variabel: nilai pengaturan'], ['was', '(to be bentuk lampau, tidak diterjemahkan)', 'be'], ['missing', 'tidak ada / belum diisi', 'miss']],
      phrases: [['environment variable', 'nilai pengaturan (mis. password database) yang disimpan di server, bukan di kode']],
      pattern: 'D72-P3'
    },
    {
      id: 'D72-S05',
      english: 'The pipeline runs the tests automatically.',
      pronunciation: 'de paip-lain ranz de tests o-to-me-ti-ke-li',
      translation: 'Pipeline-nya menjalankan test secara otomatis.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['pipeline', 'pipeline: rangkaian proses otomatis (build, test, deploy)'], ['runs', 'menjalankan; -s karena "the pipeline"', 'run'], ['tests', 'test (jamak)', 'test'], ['automatically', 'secara otomatis', 'automatic']],
      pattern: 'D72-P4'
    },
    {
      id: 'D72-S06',
      english: 'After the tests pass, it deploys the app to staging.',
      pronunciation: 'ef-ter de tests pas, it di-ploiz di ep tu stei-jing',
      translation: 'Setelah test lulus, pipeline men-deploy aplikasi ke staging.',
      words: [['After', 'setelah'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['tests', 'test (jamak)', 'test'], ['pass', 'lulus / berhasil'], ['it', 'itu (pipeline-nya)'], ['deploys', 'men-deploy; -s karena "it"', 'deploy'], ['app', 'aplikasi'], ['to', 'ke'], ['staging', 'staging: server uji yang mirip production']],
      pattern: 'D72-P4'
    },
    {
      id: 'D72-S07',
      english: 'We rolled back to the previous version.',
      pronunciation: 'wi rould bek tu de pri-vi-es ver-shen',
      translation: 'Kami rollback ke versi sebelumnya.',
      words: [['We', 'kami'], ['rolled', 'mengembalikan (dalam "roll back", lampau)', 'roll'], ['back', 'kembali (dalam "roll back")'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['previous', 'sebelumnya'], ['version', 'versi']],
      phrases: [['roll back', 'kembali ke versi aplikasi sebelumnya']],
      pattern: 'D72-P5'
    },
    {
      id: 'D72-S08',
      english: 'If something goes wrong, we can roll back quickly.',
      pronunciation: 'if sam-thing gouz rong, wi ken roul bek kwik-li',
      translation: 'Kalau ada yang salah, kami bisa rollback dengan cepat.',
      words: [['If', 'kalau / jika'], ['something', 'sesuatu'], ['goes', 'menjadi (dalam "go wrong"); -es karena "something"', 'go'], ['wrong', 'salah / bermasalah'], ['we', 'kami'], ['can', 'bisa'], ['roll', '(bagian dari "roll back")'], ['back', 'kembali (dalam "roll back")'], ['quickly', 'dengan cepat', 'quick']],
      phrases: [['go wrong', 'terjadi masalah']],
      pattern: 'D72-P5'
    },
    {
      id: 'D72-S09',
      english: 'The new version is live now.',
      pronunciation: 'de nyu ver-shen iz laiv nau',
      translation: 'Versi barunya sudah live sekarang.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['new', 'baru'], ['version', 'versi'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['live', 'live: sudah aktif dan dipakai user (dibaca "laiv")'], ['now', 'sekarang']],
      phrases: [['go live', 'mulai aktif dipakai user']]
    },
    {
      id: 'D72-S10',
      english: 'It works on my machine, but not on the server.',
      pronunciation: 'it werks on mai me-shin, bat not on de ser-ver',
      translation: 'Di komputer saya jalan, tapi di server tidak.',
      words: [['It', 'itu (aplikasinya)'], ['works', 'berfungsi / jalan; -s karena "it"', 'work'], ['on', 'di'], ['my', 'milik saya'], ['machine', 'komputer / mesin'], ['but', 'tetapi'], ['not', 'tidak'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['server', 'server: komputer yang menjalankan aplikasi']]
    }
  ],

  review: [
    {
      id: 'D72-S11',
      english: "I've already deployed the fix to staging.",
      pronunciation: 'aiv ol-re-di di-ploid de fiks tu stei-jing',
      translation: 'Perbaikannya sudah saya deploy ke staging.',
      words: [["I've", 'saya sudah (I have)', 'have'], ['already', 'sudah'], ['deployed', 'men-deploy (lampau)', 'deploy'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['fix', 'perbaikan (kata benda)'], ['to', 'ke'], ['staging', 'staging: server uji yang mirip production']],
      pattern: 'D46-P2'
    },
    {
      id: 'D72-S12',
      english: 'Just to confirm, are we deploying today or tomorrow?',
      pronunciation: 'jast tu ken-ferm, ar wi di-ploi-ing tu-dei or tu-mo-rou?',
      translation: 'Sekadar memastikan, kita deploy hari ini atau besok?',
      words: [['Just', 'sekadar'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['confirm', 'memastikan'], ['are', '(kata bantu pertanyaan "are ... -ing?", tidak diterjemahkan)', 'be'], ['we', 'kita'], ['deploying', 'men-deploy', 'deploy'], ['today', 'hari ini'], ['or', 'atau'], ['tomorrow', 'besok']],
      pattern: 'D52-P1'
    },
    {
      id: 'D72-S13',
      english: 'We need to postpone the release until Monday.',
      pronunciation: 'wi nid tu pous-poun de ri-lis an-til man-dei',
      translation: 'Kita perlu menunda rilisnya sampai hari Senin.',
      words: [['We', 'kita'], ['need', 'perlu'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['postpone', 'menunda'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['release', 'rilis / versi yang dirilis'], ['until', 'sampai'], ['Monday', 'Senin']],
      pattern: 'D48-P2'
    },
    { ref: 'D71-S02' },
    { ref: 'D70-S08' }
  ],

  patterns: [
    {
      id: 'D72-P1',
      formula: 'We deploy to + ENVIRONMENT + every / on + WAKTU',
      meaning: 'Describe your release schedule.',
      examples: ['We deploy to production twice a week.', 'We deploy small changes every day.', 'We usually release on Tuesday mornings.']
    },
    {
      id: 'D72-P2',
      formula: 'We have + ANGKA + environments  ·  We test it on staging before + KALIMAT',
      meaning: 'Explain your environments.',
      examples: ['We have a test server and a production server.', 'We test everything on staging before we release.', 'Developers use the development environment.'],
      note: 'development = untuk developer · staging = uji yang mirip production · production = dipakai user asli. "environment" dibaca in-vai-ren-ment.'
    },
    {
      id: 'D72-P3',
      formula: 'The deployment failed because + KALIMAT',
      meaning: 'Explain a failed deployment.',
      examples: ['The deployment failed because a test was broken.', 'The build failed because of a missing package.', 'The release failed because the server was out of disk space.']
    },
    {
      id: 'D72-P4',
      formula: 'The pipeline + builds / runs / deploys + BENDA',
      meaning: 'Describe CI/CD in simple words.',
      examples: ['The pipeline builds the app.', 'It runs all the tests.', 'If everything passes, it deploys to production.']
    },
    {
      id: 'D72-P5',
      formula: 'We rolled back to + BENDA  ·  We can roll back quickly',
      meaning: 'Talk about undoing a release.',
      examples: ['We rolled back to version 2.3.', 'We had to roll back the release.', "If the error rate goes up, we'll roll back."],
      note: '"roll back" (kata kerja, dua kata) · "rollback" (kata benda, satu kata).'
    }
  ],

  shadowing: ['D72-S01', 'D72-S03', 'D72-S04', 'D72-S07'],

  speaking: [
    { q: 'How does your team deploy a new version?', qId: 'Bagaimana timmu men-deploy versi baru?', hint: 'First, we ... on staging. The pipeline ... After that, we deploy to production ...', example: 'First, we merge the changes into main. The pipeline runs the tests and deploys the app to staging. After the QA team checks it, we deploy to production on Thursday.' },
    { q: 'What environments do you have, and what are they used for?', qId: 'Environment apa saja yang kalian punya, dan untuk apa?', hint: 'We have ... environments: ... We use ... for ...', example: 'We have three environments. We use development for daily work, staging for testing with the client, and production for real users.' },
    { q: 'A deployment failed. Explain what happened and what you did.', qId: 'Sebuah deploy gagal. Jelaskan apa yang terjadi dan apa yang kamu lakukan.', hint: 'The deployment failed because ... We rolled back to ... The next step is ...', example: 'The deployment failed because an environment variable was missing on the new server. We rolled back to the previous version. The next step is to add the variable and deploy again tonight.' },
    { q: 'A teammate says: "It works on my machine." What could be the reason, and what would you check?', qId: 'Rekan bilang: "Di komputerku jalan." Apa kemungkinan penyebabnya, dan apa yang akan kamu cek?', hint: "The possible cause is ... I would check ...", example: 'The possible cause is a difference between the environments. I would check the environment variables, the database version, and the logs on the server.' }
  ],

  talk321: null
});
