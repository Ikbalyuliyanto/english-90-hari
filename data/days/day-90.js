E90.registerDay({
  day: 90,
  titleId: 'Checkpoint Akhir Software Engineering English',
  goal: 'Simulasi 8–10 menit berdiskusi dengan sesama Software Engineer tentang sistemmu: tujuan, arsitektur, frontend, backend, alur API dan data, keamanan, keputusan teknis, perbandingan, trade-off, bug dan debugging, testing, deployment, production, performa, pertanyaan lanjutan, dan langkah berikutnya. Tidak perlu sempurna; bicara tanpa membaca script.',

  // Sedikit kalimat baru: penghubung untuk diskusi teknis yang panjang.
  learn: [
    {
      id: 'D90-S01',
      english: 'Let me start with the big picture.',
      pronunciation: 'let mi start with de big pik-cher',
      translation: 'Saya mulai dari gambaran besarnya.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['start', 'mulai'], ['with', 'dengan / dari'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['big', 'besar'], ['picture', 'gambar / gambaran']],
      phrases: [['the big picture', 'gambaran besar / keseluruhan']],
      pattern: 'D90-P2'
    },
    {
      id: 'D90-S02',
      english: 'Let me zoom in on the most important part.',
      pronunciation: 'let mi zum in on de moust im-por-tent part',
      translation: 'Saya fokus ke bagian yang paling penting.',
      words: [['Let', 'biarkan'], ['me', 'saya (sebagai objek)'], ['zoom', '(bagian dari "zoom in on")'], ['in', '(bagian dari "zoom in on")'], ['on', 'pada'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['most', 'paling'], ['important', 'penting'], ['part', 'bagian']],
      phrases: [['zoom in on', 'membahas lebih dekat / lebih rinci']],
      pattern: 'D90-P2'
    },
    {
      id: 'D90-S03',
      english: "That's how the system works at a high level.",
      pronunciation: 'dets hau de sis-tem werks et e hai le-vel',
      translation: 'Begitulah cara kerja sistemnya secara garis besar.',
      words: [["That's", 'itulah (that is)', 'that'], ['how', 'bagaimana / cara'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['system', 'sistem'], ['works', 'bekerja / berjalan', 'work'], ['at', 'pada'], ['a', 'sebuah (tidak diterjemahkan)'], ['high', 'tinggi'], ['level', 'tingkat / level']],
      phrases: [['at a high level', 'secara garis besar']],
      pattern: 'D90-P2'
    },
    {
      id: 'D90-S04',
      english: 'Looking ahead, our biggest challenge is scaling.',
      pronunciation: 'lu-king e-hed, a-wer bi-gest che-lenj iz skei-ling',
      translation: 'Ke depannya, tantangan terbesar kami adalah scaling.',
      words: [['Looking', '(bagian dari "looking ahead")', 'look'], ['ahead', 'ke depan'], ['our', 'milik kami'], ['biggest', 'terbesar', 'big'], ['challenge', 'tantangan'], ['is', 'adalah', 'be'], ['scaling', 'scaling: menambah kapasitas agar sanggup melayani lebih banyak user', 'scale']],
      phrases: [['looking ahead', 'ke depannya']],
      pattern: 'D90-P3'
    },
    {
      id: 'D90-S05',
      english: 'If I had more time, I would improve the test coverage.',
      pronunciation: 'if ai hed mor taim, ai wud im-pruv de test ka-ve-rij',
      translation: 'Kalau saya punya waktu lebih, saya akan meningkatkan test coverage.',
      words: [['If', 'kalau / seandainya'], ['I', 'saya'], ['had', 'punya (bentuk lampau untuk pengandaian)', 'have'], ['more', 'lebih banyak'], ['time', 'waktu'], ['would', 'akan (pengandaian)', 'will'], ['improve', 'meningkatkan'], ['the', '(penanda kata benda, tidak diterjemahkan)'], ['test', 'test / pengujian'], ['coverage', 'cakupan']],
      pattern: 'D90-P3'
    },
    {
      id: 'D90-S06',
      english: "Happy to go deeper into any part you're interested in.",
      pronunciation: 'he-pi tu gou di-per in-tu e-ni part yor in-tres-tid in',
      translation: 'Saya senang membahas lebih dalam bagian mana pun yang Anda minati.',
      words: [['Happy', 'senang'], ['to', '(penanda kata kerja, tidak diterjemahkan)'], ['go', '(bagian dari "go deeper")'], ['deeper', 'lebih dalam', 'deep'], ['into', 'ke dalam'], ['any', 'mana pun'], ['part', 'bagian'], ["you're", 'Anda (you are)', 'be'], ['interested', 'tertarik', 'interest'], ['in', '(bagian dari "interested in")']],
      phrases: [['go deeper into', 'membahas lebih dalam'], ['be interested in', 'tertarik pada']],
      pattern: 'D90-P4'
    }
  ],

  // Review aktif Phase 3: satu kalimat untuk setiap bagian simulasi.
  review: [
    { ref: 'D61-S03' },
    { ref: 'D76-S03' },
    { ref: 'D64-S01' },
    { ref: 'D77-S05' },
    { ref: 'D66-S08' },
    { ref: 'D83-S01' },
    { ref: 'D84-S06' },
    { ref: 'D85-S03' },
    { ref: 'D69-S08' },
    { ref: 'D70-S07' },
    { ref: 'D71-S05' },
    { ref: 'D72-S07' },
    { ref: 'D88-S04' },
    { ref: 'D82-S04' }
  ],

  patterns: [
    {
      id: 'D90-P1',
      formula: 'Big picture → Architecture → Frontend → Backend → Data → Security → Decisions → Trade-offs → Bugs → Testing → Deployment → Production → Performance → Questions → Next steps',
      meaning: 'A structure for a full technical conversation.',
      examples: ['Let me start with the big picture.', 'The request goes through the API before it reaches the service layer.', 'We chose this approach because it is easier to maintain.', 'Happy to go deeper into any part.'],
      note: 'Dalam diskusi nyata, lawan bicara akan menyela dengan pertanyaan. Tidak apa-apa keluar dari urutan, lalu kembali ke struktur.'
    },
    {
      id: 'D90-P2',
      formula: "Let me start with the big picture  ·  Let me zoom in on + BENDA  ·  That's how it works at a high level",
      meaning: 'Move between a high-level view and the details.',
      examples: ['Let me start with the big picture, then I will go into the details.', 'Let me zoom in on the payment flow.', "That's the overall design. Now let's look at one request."]
    },
    {
      id: 'D90-P3',
      formula: 'Looking ahead, + KALIMAT  ·  If I had more time, I would + KATA KERJA',
      meaning: 'Talk about future improvements.',
      examples: ['Looking ahead, we want to support more countries.', 'If I had more time, I would rewrite the report module.', 'If we had more people, we would split the service.'],
      note: '"If I had ..., I would ..." = pengandaian tentang sesuatu yang (belum) terjadi.'
    },
    {
      id: 'D90-P4',
      formula: 'Happy to go deeper into + BENDA  ·  What would you like to know more about?',
      meaning: 'Invite follow-up questions.',
      examples: ['Happy to go deeper into the database design.', 'What would you like to know more about?', 'I can show you the code if that helps.']
    }
  ],

  shadowing: ['D90-S01', 'D90-S02', 'D90-S04', 'D90-S06'],

  speaking: [
    { q: 'Part 1: Introduce your project and its purpose, then explain the architecture, the frontend, and the backend.', qId: 'Bagian 1: Perkenalkan proyek dan tujuannya, lalu jelaskan arsitektur, frontend, dan backend.', hint: "Let me start with the big picture. I'm working on ... The main goal is ... The system has ... The frontend ... The backend ...", example: "Let me start with the big picture. I'm working on an appointment system for a group of clinics. The main goal is to reduce waiting time. The system has a layered architecture: a React frontend, a backend API, a PostgreSQL database, and a separate notification service. The frontend shows the doctors' schedules, and the backend handles validation and business rules." },
    { q: 'Part 2: Explain one API flow, how the data moves, and how authentication and authorization work.', qId: 'Bagian 2: Jelaskan satu alur API, perpindahan data, serta cara kerja authentication dan authorization.', hint: 'The frontend sends a ... request to ... The request goes through ... The data is ... Users log in with ... Authorization checks ...', example: "When a patient books a visit, the frontend sends a POST request to the appointments endpoint. The request goes through the authentication middleware before it reaches the service layer. The service checks the time slot, saves the appointment, and publishes an event. Users log in with email and password, and authorization checks their role. If they don't have the right role, the API returns a 403 error." },
    { q: 'Part 3: Explain one technical decision, compare it with another approach, and describe the trade-off.', qId: 'Bagian 3: Jelaskan satu keputusan teknis, bandingkan dengan pendekatan lain, dan jelaskan trade-off-nya.', hint: "We decided to use ... instead of ... We chose it because ... In terms of ..., ... We're trading ... for ...", example: "We decided to use one backend application instead of microservices. We chose it because the team is small and it's easier to maintain. In terms of scaling, microservices would be better, but in terms of complexity, our approach is much simpler. We're trading some flexibility for speed of development." },
    { q: 'Part 4: Describe a bug and how you debugged it, then explain testing, deployment, one production issue, and one performance concern.', qId: 'Bagian 4: Ceritakan satu bug dan cara men-debug-nya, lalu jelaskan testing, deployment, satu masalah production, dan satu kekhawatiran performa.', hint: "I found a bug ... I checked the logs ... We found the root cause ... I added tests ... We deploy ... We had an incident ... The bottleneck is ...", example: "Last month, some patients got two reminders. I checked the logs and reproduced it on staging. We found the root cause: the job ran twice after a restart. I fixed it and added a test for that case. Our pipeline runs the tests and deploys to staging, and we deploy to production every Thursday. We once had an incident when a certificate expired, and we mitigated it by switching to a backup provider. Right now, my main performance concern is the calendar page, because most of the time is spent in one query." },
    { q: 'FINAL SOFTWARE ENGINEERING SIMULATION: You are discussing your system with another Software Engineer. Speak for 8–10 minutes without reading. Introduce the project and its purpose, explain the architecture, frontend, backend, an API flow, the data flow, authentication and authorization, one technical decision, a comparison of two approaches, one trade-off, a bug, your debugging process, testing, deployment, a production issue, a performance concern, answer follow-up questions, and give the next steps.', qId: 'SIMULASI AKHIR: Kamu berdiskusi tentang sistemmu dengan Software Engineer lain. Bicara 8–10 menit tanpa membaca, mencakup kesembilan belas poin. Minta teman atau bayangkan lawan bicara mengajukan pertanyaan lanjutan. Timer opsional. Jangan hafalkan contoh — pakai sistemmu sendiri.', hint: "Let me start with the big picture ... The main goal is ... It consists of ... Let me zoom in on ... We chose ... because ... In terms of ... We're trading ... I found a bug ... We found the root cause ... We deploy ... We had an incident ... The bottleneck is ... That's a great question ... Looking ahead ... Happy to go deeper into ...", outline: [
          "Big picture: what the system is, who uses it, and the main goal",
          "Architecture: main components, frontend, and backend",
          "One flow: request → validation → database → event",
          "Security: login, token, roles, and permissions",
          "Decision: what you chose, the alternative, and the trade-off",
          "Bug: symptom → logs → root cause → fix → test",
          "Delivery: testing, pipeline, deployment, and rollback",
          "Production and performance: one incident and one concern",
          "Follow-up question: repeat it in your own words, then answer briefly",
          "Close: next steps and an invitation for more questions"
        ],
        followUps: [
          "Why did you decide not to use microservices?",
          "How did you make sure the bug fix really worked?",
          "What would you improve first if you had more time?",
          "How would the system handle ten times more users?"
        ],
        example: [
          "Let me start with the big picture. I'm working on an appointment system for a group of five clinics. The main goal is to reduce waiting time and phone calls. Patients can book online, doctors can see their schedules, and the admin team manages the clinics and user accounts.",
          "The system has a layered architecture. It consists of a React frontend, a backend API written in Java, a PostgreSQL database, and a separate notification service. The frontend shows available time slots, and while the data is loading, we show a spinner. The backend contains the business logic in the service layer, and the repository layer talks to the database.",
          "Let me zoom in on the booking flow. The frontend sends a POST request with the patient ID and the time slot. The request goes through the authentication middleware before it reaches the service. The service validates the data, checks that the slot is still free, and saves the appointment. Then an event is published, and the notification service listens to it and sends a confirmation email. Every night, the data is also copied to the reporting database.",
          "For security, users log in with email and password, and the server creates a token that expires after one hour. Authorization checks the role. For example, doctors can only see their own patients. We check permissions on every request, and sensitive data is encrypted before it's stored.",
          "One important decision was to build one backend application instead of microservices. We chose this approach because the team is small and it's easier to maintain. We considered microservices, but, given our deadline, it was the safest choice. In terms of scaling, microservices would be better. In terms of complexity, our approach is simpler. So we're trading some flexibility for speed of development. It's a good trade-off for now.",
          "Let me give you an example of a bug. Some patients received two reminder emails. It only happened after a server restart, so it was hard to reproduce. I checked the logs and saw that the reminder job ran twice. We found the root cause: two servers started the same job at the same time. I fixed it with a lock and added a test for that case. We also need to test more edge cases, so test coverage is something we're improving.",
          "For deployment, the pipeline runs all the tests, deploys to staging, and after QA checks it, we deploy to production every Thursday. If something goes wrong, we can roll back quickly.",
          "We had one production incident last quarter. A certificate expired, and about ten percent of users couldn't log in. We mitigated the impact in twenty minutes, renewed the certificate, and added an alert. We shared a post-mortem with the team.",
          "My main performance concern is the calendar page. It's slow when a doctor has many appointments, and most of the time is spent in one query. My hypothesis is that we need a better index. To test this, I'll compare the query plans on staging.",
          "That's a great question about caching. If I understand your question correctly, you're asking why we don't cache the calendar. We could, but the data changes often, so the risk is showing old time slots. I'd rather fix the query first.",
          "Looking ahead, our biggest challenge is scaling to more clinics. The next steps are to improve the calendar query, add more tests, and split the reporting part if the load grows. That's how the system works at a high level. Happy to go deeper into any part you're interested in."
        ],
        timers: [8, 10] }
  ],

  talk321: null
});
