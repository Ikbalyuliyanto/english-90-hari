E90.registerDay({
  day: 76,
  titleId: 'Menjelaskan Arsitektur Sistem',
  goal: 'Menjelaskan arsitektur dari gambaran besar: komponen, lapisan, jalur request, tanggung jawab tiap bagian, dan cara bagian-bagian terhubung.',

  learn: [
    {
      id: 'D76-S01',
      english: 'The system has a layered architecture.',
      pronunciation: 'de sis-tem hez e lei-erd ar-ki-tek-cher',
      translation: 'Sistemnya memakai arsitektur berlapis.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['has', 'punya / memakai (have untuk it)', 'have'], ['a', 'sebuah (tidak diterjemahkan)'], ['layered', 'berlapis', 'layer'], ['architecture', 'arsitektur: struktur besar sebuah sistem (dibaca "ar-ki-tek-cher")']],
      pattern: 'D76-P1'
    },
    {
      id: 'D76-S02',
      english: 'It consists of three main components.',
      pronunciation: 'it ken-sists ov thri mein kem-pou-nents',
      translation: 'Sistemnya terdiri dari tiga komponen utama.',
      words: [['It', 'itu (sistemnya)'], ['consists', 'terdiri (dalam "consist of"); -s karena "it"', 'consist'], ['of', 'dari'], ['three', 'tiga'], ['main', 'utama'], ['components', 'komponen: bagian dari sistem (jamak)', 'component']],
      phrases: [['consist of', 'terdiri dari']],
      pattern: 'D76-P1'
    },
    {
      id: 'D76-S03',
      english: 'The request goes through the API before it reaches the service layer.',
      pronunciation: 'de ri-kwest gouz thru di ei-pi-ai bi-for it ri-chiz de ser-vis lei-er',
      translation: 'Request-nya melewati API sebelum sampai ke service layer.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['request', 'request: permintaan ke server'], ['goes', 'lewat (dalam "go through"); -es karena "the request"', 'go'], ['through', 'melalui'], ['API', 'API: pintu komunikasi antar aplikasi'], ['before', 'sebelum'], ['it', 'itu (request-nya)'], ['reaches', 'sampai ke / mencapai; -es karena "it"', 'reach'], ['service', 'service: bagian kode yang menjalankan logika'], ['layer', 'lapisan (bagian kode)']],
      phrases: [['go through', 'melewati']],
      pattern: 'D76-P2'
    },
    {
      id: 'D76-S04',
      english: 'The controller receives the request and calls the service.',
      pronunciation: 'de ken-trou-ler ri-sivz de ri-kwest en kolz de ser-vis',
      translation: 'Controller menerima request lalu memanggil service.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['controller', 'controller: bagian kode yang menerima request'], ['receives', 'menerima', 'receive'], ['request', 'request: permintaan ke server'], ['and', 'lalu / dan'], ['calls', 'memanggil (fungsi / bagian kode); -s karena "the controller"', 'call'], ['service', 'service: bagian kode yang menjalankan logika']],
      phrases: [['call a service', 'memanggil service (bukan "menelepon")']],
      pattern: 'D76-P2'
    },
    {
      id: 'D76-S05',
      english: 'The service layer contains the business logic.',
      pronunciation: 'de ser-vis lei-er ken-teinz de biz-nis lo-jik',
      translation: 'Service layer berisi logika bisnis.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['service', 'service: bagian kode yang menjalankan logika'], ['layer', 'lapisan (bagian kode)'], ['contains', 'berisi; -s karena "the service layer"', 'contain'], ['business', 'bisnis'], ['logic', 'logika']],
      pattern: 'D76-P3'
    },
    {
      id: 'D76-S06',
      english: 'The repository layer is responsible for talking to the database.',
      pronunciation: 'de ri-pa-ze-to-ri lei-er iz ri-spon-si-bel for to-king tu de dei-te-beis',
      translation: 'Repository layer bertugas berkomunikasi dengan database.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['repository', 'repository layer: bagian kode yang mengakses database (beda dengan Git repository)'], ['layer', 'lapisan (bagian kode)'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['responsible', 'bertanggung jawab / bertugas'], ['for', 'atas / untuk'], ['talking', 'berkomunikasi (dalam "talk to")', 'talk'], ['to', 'dengan'], ['database', 'database: tempat data disimpan']],
      pattern: 'D76-P3'
    },
    {
      id: 'D76-S07',
      english: 'We use a message queue to process orders in the background.',
      pronunciation: 'wi yuz e me-sij kyu tu pro-ses or-derz in de bek-graund',
      translation: 'Kami memakai message queue untuk memproses pesanan di belakang layar.',
      words: [['We', 'kami'], ['use', 'memakai'], ['a', 'sebuah (tidak diterjemahkan)'], ['message', 'pesan'], ['queue', 'queue: antrean (dibaca "kyu")'], ['to', 'untuk (penanda kata kerja)'], ['process', 'memproses'], ['orders', 'pesanan (jamak)', 'order'], ['in', 'di'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['background', 'latar belakang']],
      phrases: [['message queue', 'antrean pesan agar proses berjalan bergiliran di belakang'], ['in the background', 'di belakang layar, tanpa membuat user menunggu']],
      pattern: 'D76-P4'
    },
    {
      id: 'D76-S08',
      english: 'The payment service is a separate application.',
      pronunciation: 'de pei-ment ser-vis iz e se-pe-ret ep-li-kei-shen',
      translation: 'Service pembayaran adalah aplikasi yang terpisah.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['payment', 'pembayaran'], ['service', 'service: bagian sistem yang menjalankan satu fungsi'], ['is', 'adalah', 'be'], ['a', 'sebuah (tidak diterjemahkan)'], ['separate', 'terpisah (kata sifat, dibaca "se-pe-ret")'], ['application', 'aplikasi']],
      pattern: 'D76-P5'
    },
    {
      id: 'D76-S09',
      english: 'The services communicate through REST APIs.',
      pronunciation: 'de ser-vi-siz ke-myu-ni-keits thru rest ei-pi-aiz',
      translation: 'Service-service itu saling berkomunikasi lewat REST API.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['services', 'service (jamak)', 'service'], ['communicate', 'berkomunikasi'], ['through', 'lewat / melalui'], ['REST', 'REST: gaya desain API berbasis HTTP'], ['APIs', 'API (jamak)', 'API']],
      pattern: 'D76-P5'
    },
    {
      id: 'D76-S10',
      english: 'This design makes the system easier to maintain.',
      pronunciation: 'dis di-zain meiks de sis-tem i-zi-er tu mein-tein',
      translation: 'Desain ini membuat sistemnya lebih mudah dirawat.',
      words: [['This', 'ini'], ['design', 'desain / rancangan'], ['makes', 'membuat; -s karena "this design"', 'make'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['easier', 'lebih mudah', 'easy'], ['to', 'untuk (penanda kata kerja)'], ['maintain', 'merawat / memelihara (kode agar mudah diubah dan diperbaiki)']]
    }
  ],

  review: [
    {
      id: 'D76-S11',
      english: 'In short, the backend is split into three layers.',
      pronunciation: 'in short, de bek-end iz split in-tu thri lei-erz',
      translation: 'Singkatnya, backend dibagi menjadi tiga lapisan.',
      words: [['In', '(bagian dari "in short")'], ['short', 'singkat (dalam "in short")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['split', 'dibagi (bentuk lampau sama)'], ['into', 'menjadi / ke dalam'], ['three', 'tiga'], ['layers', 'lapisan (jamak)', 'layer']],
      pattern: 'D75-P4'
    },
    {
      id: 'D76-S12',
      english: 'Let me give you an example of a request.',
      pronunciation: 'let mi giv yu en eg-zem-pel ov e ri-kwest',
      translation: 'Saya beri contoh sebuah request.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['give', 'memberi'], ['you', 'kepada kamu / Anda'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['example', 'contoh'], ['of', 'dari'], ['a', 'sebuah (tidak diterjemahkan)'], ['request', 'request: permintaan ke server']],
      pattern: 'D75-P3'
    },
    {
      id: 'D76-S13',
      english: 'Could you draw the architecture on the whiteboard?',
      pronunciation: 'kud yu dro di ar-ki-tek-cher on de wait-bord?',
      translation: 'Bisa gambarkan arsitekturnya di papan tulis?',
      words: [['Could', 'bisakah (sopan)', 'can'], ['you', 'kamu / Anda'], ['draw', 'menggambar'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['architecture', 'arsitektur: struktur besar sebuah sistem'], ['on', 'di'], ['whiteboard', 'papan tulis putih']],
      pattern: 'D19-P2'
    },
    { ref: 'D63-S06' },
    { ref: 'D75-S03' }
  ],

  patterns: [
    {
      id: 'D76-P1',
      formula: 'The system has a + JENIS + architecture  ·  It consists of + BENDA',
      meaning: 'Give a high-level view of the architecture.',
      examples: ['The system has a microservice architecture.', 'It consists of a web app, an API, and a database.', 'The platform is made up of four services.'],
      note: 'Cara baca: architecture = ar-ki-tek-cher · component = kem-pou-nent · queue = kyu.'
    },
    {
      id: 'D76-P2',
      formula: 'The request goes through A before it reaches B',
      meaning: 'Describe the path of a request.',
      examples: ['The request goes through the load balancer before it reaches the server.', 'The data goes through validation before it reaches the database.', 'Every call goes through the API gateway first.']
    },
    {
      id: 'D76-P3',
      formula: 'LAPISAN + contains / is responsible for + BENDA',
      meaning: 'Explain the responsibility of each part.',
      examples: ['The controller is responsible for handling HTTP requests.', 'The service layer contains the business rules.', 'The data layer is responsible for database queries.'],
      note: '"repository layer" = bagian kode yang mengakses database — berbeda dengan Git repository.'
    },
    {
      id: 'D76-P4',
      formula: 'We use + BENDA + to + KATA KERJA',
      meaning: 'Explain why a component exists.',
      examples: ['We use Redis to cache frequent queries.', 'We use a queue to send emails in the background.', 'We use a CDN to deliver images faster.']
    },
    {
      id: 'D76-P5',
      formula: 'BENDA + is a separate + BENDA  ·  The services communicate through + BENDA',
      meaning: 'Explain how the parts connect.',
      examples: ['The notification service is a separate application.', 'The services communicate through events.', 'The mobile app talks to the same API as the web app.']
    }
  ],

  shadowing: ['D76-S01', 'D76-S03', 'D76-S05', 'D76-S07'],

  speaking: [
    { q: "Can you give a high-level overview of your system's architecture?", qId: 'Beri gambaran besar arsitektur sistemmu.', hint: 'The system has ... architecture. It consists of ...', example: 'The system has a layered architecture. It consists of a React frontend, a backend API, a PostgreSQL database, and a separate service for notifications.' },
    { q: 'What happens to a request from the moment it reaches the backend?', qId: 'Apa yang terjadi pada sebuah request sejak sampai di backend?', hint: 'The request goes through ... before it reaches ... The controller ... The service ...', example: 'The request goes through the authentication middleware before it reaches the controller. The controller calls the service, the service applies the business rules, and the repository saves the data.' },
    { q: 'What is each layer or component responsible for?', qId: 'Apa tanggung jawab tiap lapisan atau komponen?', hint: 'The ... layer is responsible for ... The ... contains ...', example: 'The controller is responsible for handling requests and responses. The service layer contains the business logic, and the repository layer is responsible for talking to the database.' },
    { q: 'Why did your team add a separate service, a queue, or a cache?', qId: 'Kenapa timmu menambahkan service terpisah, queue, atau cache?', hint: 'We use ... to ... This design makes the system ...', example: 'We use a message queue to send emails in the background, so users don\'t have to wait. This design makes the system faster and easier to maintain.' }
  ],

  talk321: null
});
