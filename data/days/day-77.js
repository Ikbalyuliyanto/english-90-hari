E90.registerDay({
  day: 77,
  titleId: 'Menjelaskan Alur Data',
  goal: 'Menjelaskan perjalanan data: dari mana data dimulai, ke mana dikirim, apa yang diubah, event yang dipicu, dan di mana data berakhir.',

  learn: [
    {
      id: 'D77-S01',
      english: 'Let me explain how the data flows through the system.',
      pronunciation: 'let mi eks-plein hau de dei-ta flouz thru de sis-tem',
      translation: 'Saya jelaskan bagaimana data mengalir di dalam sistem.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['explain', 'menjelaskan'], ['how', 'bagaimana'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['flows', 'mengalir / berpindah; -s karena "the data"', 'flow'], ['through', 'melalui / di dalam'], ['system', 'sistem']],
      phrases: [['data flow', 'alur perpindahan data']],
      pattern: 'D77-P1'
    },
    {
      id: 'D77-S02',
      english: 'The data starts in the form on the frontend.',
      pronunciation: 'de dei-ta starts in de form on de front-end',
      translation: 'Datanya berawal dari formulir di frontend.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['starts', 'berawal / dimulai; -s karena "the data"', 'start'], ['in', 'di / dari'], ['form', 'formulir'], ['on', 'di'], ['frontend', 'frontend: bagian aplikasi yang dilihat user']],
      pattern: 'D77-P2'
    },
    {
      id: 'D77-S03',
      english: "Then it's sent to the backend as JSON.",
      pronunciation: 'den its sent tu de bek-end ez jei-sen',
      translation: 'Lalu datanya dikirim ke backend dalam format JSON.',
      words: [['Then', 'lalu / kemudian'], ["it's", 'itu (it is)', 'be'], ['sent', 'dikirim', 'send'], ['to', 'ke'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['as', 'sebagai / dalam bentuk'], ['JSON', 'JSON: format teks untuk bertukar data']],
      pattern: 'D77-P2'
    },
    {
      id: 'D77-S04',
      english: 'The backend transforms the data before storing it.',
      pronunciation: 'de bek-end trens-formz de dei-ta bi-for sto-ring it',
      translation: 'Backend mengubah bentuk datanya sebelum menyimpannya.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['backend', 'backend: bagian server yang memproses data'], ['transforms', 'mengubah bentuk / format; -s karena "the backend"', 'transform'], ['data', 'data'], ['before', 'sebelum'], ['storing', 'menyimpan', 'store'], ['it', 'itu / -nya']],
      pattern: 'D77-P3'
    },
    {
      id: 'D77-S05',
      english: 'The order is saved, and an event is published.',
      pronunciation: 'di or-der iz seivd, en en i-vent iz pa-blisht',
      translation: 'Pesanannya disimpan, lalu sebuah event dikirim.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['order', 'pesanan'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['saved', 'disimpan', 'save'], ['and', 'lalu / dan'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['event', 'event: sinyal bahwa sesuatu sudah terjadi'], ['published', 'dikirim / diterbitkan (ke sistem lain)', 'publish']],
      phrases: [['publish an event', 'mengirim sinyal bahwa sesuatu terjadi, agar service lain bisa bereaksi']],
      pattern: 'D77-P4'
    },
    {
      id: 'D77-S06',
      english: 'The email service listens to this event.',
      pronunciation: 'di i-meil ser-vis li-senz tu dis i-vent',
      translation: 'Service email menunggu event ini.',
      words: [['The', '(dibaca "di" sebelum vokal, tidak diterjemahkan)'], ['email', 'email / surel'], ['service', 'service: bagian sistem yang menjalankan satu fungsi'], ['listens', 'mendengarkan / menunggu (event); -s karena "the email service"; huruf t tidak dibaca', 'listen'], ['to', '(bagian dari "listen to")'], ['this', 'ini'], ['event', 'event: sinyal bahwa sesuatu sudah terjadi']],
      phrases: [['listen to an event', 'menunggu event lalu bereaksi saat event itu datang']],
      pattern: 'D77-P4'
    },
    {
      id: 'D77-S07',
      english: 'The data is copied to the reporting database every hour.',
      pronunciation: 'de dei-ta iz ko-pid tu de ri-por-ting dei-te-beis ev-ri a-wer',
      translation: 'Datanya disalin ke database laporan setiap jam.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['data', 'data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['copied', 'disalin', 'copy'], ['to', 'ke'], ['reporting', 'pelaporan (untuk laporan)', 'report'], ['database', 'database: tempat data disimpan'], ['every', 'setiap'], ['hour', 'jam (huruf h tidak dibaca)']],
      pattern: 'D77-P5'
    },
    {
      id: 'D77-S08',
      english: 'The mobile app reads the same data from the API.',
      pronunciation: 'de mou-bail ep ridz de seim dei-ta from di ei-pi-ai',
      translation: 'Aplikasi mobile membaca data yang sama dari API.',
      words: [['The', '(penanda kata benda; "di" sebelum vokal)'], ['mobile', 'mobile / ponsel'], ['app', 'aplikasi'], ['reads', 'membaca (sekarang, dibaca "ridz"); -s karena "the mobile app"', 'read'], ['same', 'sama'], ['data', 'data'], ['from', 'dari'], ['API', 'API: pintu komunikasi antar aplikasi']],
      pattern: 'D77-P5'
    },
    {
      id: 'D77-S09',
      english: "Sensitive data is encrypted before it's stored.",
      pronunciation: 'sen-si-tiv dei-ta iz en-krip-tid bi-for its stord',
      translation: 'Data sensitif dienkripsi sebelum disimpan.',
      words: [['Sensitive', 'sensitif / rahasia'], ['data', 'data'], ['is', '(to be, tidak diterjemahkan)', 'be'], ['encrypted', 'dienkripsi: diacak agar tidak bisa dibaca orang lain', 'encrypt'], ['before', 'sebelum'], ["it's", 'itu (it is)', 'be'], ['stored', 'disimpan', 'store']],
      pattern: 'D77-P3'
    },
    {
      id: 'D77-S10',
      english: 'At the end, the user sees the updated status.',
      pronunciation: 'et di end, de yu-zer siz di ap-dei-tid stei-tes',
      translation: 'Pada akhirnya, user melihat status yang sudah diperbarui.',
      words: [['At', 'pada'], ['the', '(penanda kata benda; "di" sebelum vokal)'], ['end', 'akhir'], ['user', 'pengguna / user'], ['sees', 'melihat; -s karena "the user"', 'see'], ['updated', 'yang sudah diperbarui', 'update'], ['status', 'status / keadaan']],
      phrases: [['at the end', 'pada akhirnya']],
      pattern: 'D77-P2'
    }
  ],

  review: [
    {
      id: 'D77-S11',
      english: 'The request goes through the gateway before it reaches the service.',
      pronunciation: 'de ri-kwest gouz thru de geit-wei bi-for it ri-chiz de ser-vis',
      translation: 'Request-nya melewati gateway sebelum sampai ke service.',
      words: [['The', '(penanda kata benda, tidak diterjemahkan)'], ['request', 'request: permintaan ke server'], ['goes', 'lewat (dalam "go through")', 'go'], ['through', 'melalui'], ['gateway', 'gateway: pintu masuk request ke sistem'], ['before', 'sebelum'], ['it', 'itu (request-nya)'], ['reaches', 'sampai ke', 'reach'], ['service', 'service: bagian sistem yang menjalankan satu fungsi']],
      pattern: 'D76-P2'
    },
    {
      id: 'D77-S12',
      english: 'Where does this data come from?',
      pronunciation: 'wer daz dis dei-ta kam from?',
      translation: 'Data ini asalnya dari mana?',
      words: [['Where', 'di mana / dari mana'], ['does', '(kata bantu pertanyaan untuk it, tidak diterjemahkan)', 'do'], ['this', 'ini'], ['data', 'data'], ['come', 'datang (dalam "come from")'], ['from', 'dari']],
      phrases: [['come from', 'berasal dari']]
    },
    {
      id: 'D77-S13',
      english: 'After that, the service updates the stock.',
      pronunciation: 'ef-ter det, de ser-vis ap-deits de stok',
      translation: 'Setelah itu, service memperbarui stoknya.',
      words: [['After', 'setelah'], ['that', 'itu'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['service', 'service: bagian sistem yang menjalankan satu fungsi'], ['updates', 'memperbarui; -s karena "the service"', 'update'], ['stock', 'stok barang']],
      pattern: 'D63-P2'
    },
    { ref: 'D64-S05' },
    { ref: 'D76-S07' }
  ],

  patterns: [
    {
      id: 'D77-P1',
      formula: 'Let me explain how the data flows through + BENDA',
      meaning: 'Introduce a data flow explanation.',
      examples: ['Let me explain how an order moves through the system.', "Here's how the data flows from the app to the database.", "Let's follow one request from start to finish."]
    },
    {
      id: 'D77-P2',
      formula: "The data starts in A  ·  Then it's sent to B  ·  At the end, ...",
      meaning: 'Describe each step of the flow.',
      examples: ['The data starts in the mobile app.', "Then it's sent to the API.", "At the end, it's stored in the database."]
    },
    {
      id: 'D77-P3',
      formula: 'The backend + transforms / encrypts + BENDA + before + KATA KERJA-ing',
      meaning: 'Explain what happens to the data on the way.',
      examples: ['The backend converts the dates to UTC before saving them.', "Passwords are hashed before they're stored.", 'The service removes personal data before sending it.']
    },
    {
      id: 'D77-P4',
      formula: 'When A happens, an event is published  ·  B listens to this event',
      meaning: 'Explain event-based communication.',
      examples: ['When a payment is completed, an event is published.', 'The invoice service listens to this event.', 'When a user signs up, the email service sends a welcome message.']
    },
    {
      id: 'D77-P5',
      formula: 'The data is copied / synced to + BENDA + every + WAKTU',
      meaning: 'Explain data moving between systems.',
      examples: ['The data is synced to the data warehouse every night.', 'Changes are copied to the backup server.', 'The mobile app reads the same data from the API.']
    }
  ],

  shadowing: ['D77-S01', 'D77-S03', 'D77-S05', 'D77-S09'],

  speaking: [
    { q: 'Choose one feature. Explain how the data flows from the user to the database.', qId: 'Pilih satu fitur. Jelaskan alur data dari user sampai ke database.', hint: "Let me explain how ... The data starts in ... Then it's sent to ... The backend ... At the end, ...", example: "Let me explain how a new booking works. The data starts in the booking form on the frontend. Then it's sent to the backend as JSON. The backend validates it and saves it in the database. At the end, the user sees the confirmation." },
    { q: 'What happens to the data before it is stored?', qId: 'Apa yang terjadi pada data sebelum disimpan?', hint: 'The backend ... before ... Sensitive data is ...', example: "The backend converts the date to the server time zone before storing it. Sensitive data, like the patient's ID number, is encrypted before it's stored." },
    { q: 'Does any part of your system react to events or copy data to another system?', qId: 'Apakah ada bagian sistemmu yang bereaksi terhadap event atau menyalin data ke sistem lain?', hint: 'When ..., an event is published. The ... service listens ... The data is copied to ...', example: 'Yes. When an order is paid, an event is published. The email service listens to this event and sends a receipt. The data is also copied to the reporting database every hour.' }
  ],

  talk321: { topic: 'Explain how data moves through your system for one feature.' }
});
