E90.registerDay({
  day: 75,
  titleId: 'Checkpoint Technical English 1',
  goal: 'Simulasi teknis 5–7 menit: menjelaskan aplikasi, fitur, frontend, backend, API, database, autentikasi, Git/PR, bug, debugging, testing, deployment, masalah production/performa, dan langkah berikutnya. Tidak perlu sempurna; bicara tanpa membaca script.',

  // Sedikit kalimat baru: penghubung untuk menjelaskan sistem.
  learn: [
    {
      id: 'D75-S01',
      english: 'Let me walk you through the system.',
      pronunciation: 'let mi wok yu thru de sis-tem',
      translation: 'Saya jelaskan sistemnya langkah demi langkah.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['walk', '(bagian dari "walk through")'], ['you', 'kamu / Anda'], ['through', '(bagian dari "walk through")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem']],
      phrases: [['walk someone through something', 'menjelaskan sesuatu langkah demi langkah']],
      pattern: 'D75-P1'
    },
    {
      id: 'D75-S02',
      english: "From a user's point of view, it works like this.",
      pronunciation: 'from e yu-zerz point ov vyu, it werks laik dis',
      translation: 'Dari sudut pandang user, cara kerjanya seperti ini.',
      words: [['From', 'dari'], ['a', 'sebuah (tidak diterjemahkan)'], ["user's", 'milik user', 'user'], ['point', '(bagian dari "point of view")'], ['of', '(bagian dari "point of view")'], ['view', 'pandangan'], ['it', 'itu (sistemnya)'], ['works', 'berjalan / bekerja; -s karena "it"', 'work'], ['like', 'seperti'], ['this', 'ini']],
      phrases: [['point of view', 'sudut pandang'], ['like this', 'seperti ini']],
      pattern: 'D75-P2'
    },
    {
      id: 'D75-S03',
      english: 'Behind the scenes, the backend does most of the work.',
      pronunciation: 'bi-haind de sinz, de bek-end daz moust ov de werk',
      translation: 'Di balik layar, backend yang mengerjakan sebagian besar prosesnya.',
      words: [['Behind', 'di balik / di belakang'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['scenes', 'layar / adegan (dalam "behind the scenes")', 'scene'], ['backend', 'backend: bagian server yang memproses data'], ['does', 'mengerjakan; -es karena "the backend"', 'do'], ['most', 'sebagian besar'], ['of', 'dari'], ['work', 'pekerjaan / proses']],
      phrases: [['behind the scenes', 'di balik layar (yang tidak terlihat user)']],
      pattern: 'D75-P2'
    },
    {
      id: 'D75-S04',
      english: 'Let me give you an example.',
      pronunciation: 'let mi giv yu en eg-zem-pel',
      translation: 'Saya beri contoh.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['give', 'memberi'], ['you', 'kepada kamu / Anda'], ['an', 'sebuah (sebelum bunyi vokal, tidak diterjemahkan)'], ['example', 'contoh']],
      pattern: 'D75-P3'
    },
    {
      id: 'D75-S05',
      english: 'In short, the frontend shows the data, and the backend handles the logic.',
      pronunciation: 'in short, de front-end shouz de dei-ta, en de bek-end hen-delz de lo-jik',
      translation: 'Singkatnya, frontend menampilkan data, dan backend menangani logikanya.',
      words: [['In', '(bagian dari "in short")'], ['short', 'singkat (dalam "in short")'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['frontend', 'frontend: bagian aplikasi yang dilihat user'], ['shows', 'menampilkan', 'show'], ['data', 'data'], ['and', 'dan'], ['backend', 'backend: bagian server yang memproses data'], ['handles', 'menangani; -s karena "the backend"', 'handle'], ['logic', 'logika / aturan proses']],
      phrases: [['in short', 'singkatnya']],
      pattern: 'D75-P4'
    },
    {
      id: 'D75-S06',
      english: 'Does that make sense so far?',
      pronunciation: 'daz det meik sens sou far?',
      translation: 'Sejauh ini bisa dipahami?',
      words: [['Does', '(kata bantu pertanyaan untuk it/that, tidak diterjemahkan)', 'do'], ['that', 'itu'], ['make', 'membuat (dalam "make sense")'], ['sense', 'makna / akal'], ['so', '(bagian dari "so far")'], ['far', '(bagian dari "so far")']],
      phrases: [['make sense', 'masuk akal / bisa dipahami'], ['so far', 'sejauh ini']],
      pattern: 'D75-P5'
    }
  ],

  // Review aktif Day 61–74: satu kalimat untuk setiap bagian simulasi.
  review: [
    { ref: 'D61-S02' },
    { ref: 'D61-S05' },
    { ref: 'D62-S02' },
    { ref: 'D63-S03' },
    { ref: 'D64-S03' },
    { ref: 'D65-S01' },
    { ref: 'D66-S05' },
    { ref: 'D68-S01' },
    { ref: 'D69-S02' },
    { ref: 'D70-S01' },
    { ref: 'D71-S04' },
    { ref: 'D72-S02' },
    { ref: 'D74-S05' }
  ],

  patterns: [
    {
      id: 'D75-P1',
      formula: 'Application → Feature → Frontend → Backend → Endpoint → Database → Login → Git → Bug → Debugging → Testing → Deployment → Production → Next steps',
      meaning: 'A structure for explaining a system.',
      examples: ['Let me walk you through the system.', 'The system helps staff manage appointments.', 'Behind the scenes, the backend validates every request.', "In short, it's a web app with a REST API."],
      note: 'Urutan tidak harus sempurna. Mulai dari gambaran besar, lalu turun ke detail.'
    },
    {
      id: 'D75-P2',
      formula: "From a user's point of view, ...  ·  Behind the scenes, ...",
      meaning: 'Switch between what users see and what the system does.',
      examples: ["From a user's point of view, it's just one button.", 'Behind the scenes, three services work together.', "From the admin's point of view, it saves a lot of time."]
    },
    {
      id: 'D75-P3',
      formula: 'Let me give you an example  ·  For example, ...',
      meaning: 'Make a technical explanation concrete.',
      examples: ['Let me give you an example from last week.', 'For example, when a nurse books an appointment, the doctor gets a notification.', "Here's a real example."]
    },
    {
      id: 'D75-P4',
      formula: 'In short, + KALIMAT',
      meaning: 'Summarize a long technical explanation.',
      examples: ["In short, it's a simple REST API.", 'In short, the problem was the cache.', 'In short, we need two more days.']
    },
    {
      id: 'D75-P5',
      formula: 'Does that make sense so far?  ·  Any questions so far?',
      meaning: 'Check that the listener is following you.',
      examples: ['Does that make sense?', 'Any questions so far?', 'Should I go into more detail?']
    }
  ],

  shadowing: ['D75-S01', 'D75-S02', 'D75-S03', 'D75-S05'],

  speaking: [
    { q: 'Part 1: Explain the application, one main feature, and what the user sees on the frontend.', qId: 'Bagian 1: Jelaskan aplikasinya, satu fitur utama, dan apa yang dilihat user di frontend.', hint: "Let me walk you through ... The system helps ... From a user's point of view, ... When the user clicks ...", example: "Let me walk you through the system. It's a clinic app that helps staff manage appointments. From a user's point of view, the patient chooses a doctor and a time. When the user clicks Book, a confirmation page opens." },
    { q: 'Part 2: Explain the backend flow, one API endpoint, where the data is stored, and how authentication works.', qId: 'Bagian 2: Jelaskan alur backend, satu endpoint API, tempat data disimpan, dan cara kerja autentikasi.', hint: 'Behind the scenes, the backend ... This endpoint ... The data is stored in ... Users log in with ...', example: 'Behind the scenes, the frontend sends a POST request to the appointments endpoint. The backend checks the token, validates the data, and saves it in the appointments table. Users log in with their email, and only staff can see all appointments.' },
    { q: 'Part 3: Explain your Git and pull request workflow, one bug you found, and how you debugged it.', qId: 'Bagian 3: Jelaskan alur Git dan pull request, satu bug yang kamu temukan, dan cara kamu men-debug-nya.', hint: 'I create a branch ... I open a pull request ... I found a bug ... I checked the logs ... We found the root cause ...', example: 'I create a branch for each task and open a pull request when it is ready. Last week I found a bug: when two patients booked the same time, both bookings were saved. I checked the logs and reproduced it locally. We found the root cause: the backend didn\'t check the time slot again before saving.' },
    { q: 'Part 4: Explain how you test and deploy, mention a production or performance problem, and give the next steps.', qId: 'Bagian 4: Jelaskan cara testing dan deploy, sebutkan masalah production atau performa, dan beri langkah berikutnya.', hint: 'I wrote tests ... We deploy ... The issue ... The bottleneck is ... The next step is ...', example: "I added a test that checks double bookings. We test everything on staging and deploy to production every Thursday. Right now, the calendar page is slow when there are many appointments. The bottleneck is the database query. The next step is to add an index and cache the results." },
    { q: 'TECHNICAL SIMULATION: Explain your system to a new engineer for 5–7 minutes without reading. Cover the application, one feature, the frontend, the backend flow, an API, the database, authentication, Git and pull requests, a bug, debugging, testing, deployment, a production or performance problem, and the next steps.', qId: 'SIMULASI TEKNIS: Jelaskan sistemmu ke engineer baru selama 5–7 menit tanpa membaca, mencakup keempat belas poin. Timer opsional. Jangan hafalkan contoh — pakai proyekmu sendiri.', hint: "Let me walk you through ... From a user's point of view ... Behind the scenes ... This endpoint ... The data is stored in ... I opened a pull request ... I found a bug ... I checked the logs ... I wrote tests ... We deploy ... The bottleneck ... The next step is ... Does that make sense so far?", example: "Let me walk you through the system. We're building a web application for a small clinic. The system helps staff manage patient appointments, and the main goal is to reduce waiting time. One main feature is online booking. From a user's point of view, the patient chooses a doctor, picks a time, and clicks Book. The frontend shows the available times, and while the data is loading, we show a spinner. Behind the scenes, the frontend sends a POST request to the appointments endpoint. The backend receives the request, checks the token, and validates the data before saving it. If the time is already taken, it returns a 409 error. The data is stored in PostgreSQL. Each appointment is one row in the appointments table, and each appointment belongs to one doctor. For authentication, users log in with their email and password, and the server creates a token that expires after one hour. Authorization checks what each role can do. For example, doctors can only see their own patients. For our Git workflow, I create a new branch for every task, commit small changes, and open a pull request. Another developer reviews it before we merge into main. Last month, I found a bug. When two patients booked the same time, both bookings were saved. I reproduced it locally and checked the logs. We found the root cause: the backend didn't check the time slot again right before saving. I fixed it and added a test that checks double bookings, and all the tests passed. We deploy through a pipeline. It runs the tests, deploys to staging, and after QA checks it, we deploy to production every Thursday. If something goes wrong, we can roll back quickly. Right now, we have a performance problem. The calendar page is slow when a doctor has many appointments. The bottleneck is the database query. So the next step is to add an index and cache the results for a few minutes. I'll keep the team updated. Does that make sense so far?", timers: [5, 7] }
  ],

  talk321: null
});
