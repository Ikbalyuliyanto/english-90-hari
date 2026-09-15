/*
 * Roadmap program Day 1–120.
 * Konten tiap hari ada di data/days/day-XX.js. Hari yang file-nya belum ada
 * tetap tampil di roadmap sebagai "segera hadir".
 * Menambah batch baru: buat file day-XX.js, lalu tambahkan nomornya ke AVAILABLE_DAYS.
 */
window.E90 = window.E90 || {};

E90.CURRICULUM = {
  totalDays: 120,

  // Hari yang file kontennya sudah tersedia.
  AVAILABLE_DAYS: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
  ],

  phases: [
    {
      id: 1, from: 1, to: 30,
      title: 'Foundation & Basic Conversation',
      titleId: 'Dasar & Percakapan Sederhana',
      target: 'Bisa percakapan dasar sekitar 2–3 menit.',
      translation: 'shown'
    },
    {
      id: 2, from: 31, to: 60,
      title: 'Work English',
      titleId: 'Bahasa Inggris di Kantor',
      target: 'Bisa daily standup dan komunikasi kantor sederhana.',
      translation: 'shown',
      // Mulai English-oriented: arti pertanyaan speaking dilipat (tetap bisa dibuka).
      questionTranslation: 'collapsed'
    },
    {
      id: 3, from: 61, to: 90,
      title: 'Software Engineering English',
      titleId: 'Bahasa Inggris Software Engineer',
      target: 'Bisa menjelaskan sistem, bug, API, dan keputusan teknis.',
      translation: 'shown',
      questionTranslation: 'collapsed'
    },
    {
      id: 4, from: 91, to: 120,
      title: 'Speaking, Real Work & Job Interview',
      titleId: 'Simulasi Kerja & Interview',
      target: 'English → Understand → Respond in English.',
      // Terjemahan disembunyikan secara default agar terbiasa berpikir langsung dalam English.
      translation: 'hidden'
    }
  ],

  // Satu judul per hari. Index 0 = Day 1.
  titles: [
    // Phase 1 — Day 1–30
    'Introductions',
    'Daily Routine',
    'Food & Drinks',
    'At Home',
    'Time & Schedule',
    'Going Out',
    'Asking for Directions',
    'Shopping',
    'Hobbies & Interests',
    'Weather',
    'Health',
    'Feelings',
    'Common Questions',
    'Short Answers',
    'Small Talk',
    'What Are You Doing? (Present Continuous)',
    'Yesterday (Past Simple)',
    'Plans & Future (going to / will)',
    'Can & Could: Ability and Requests',
    'Asking for Clarification',
    'Daily Routines & Frequency',
    'Time, Schedule & Appointments',
    'Asking Follow-up Questions',
    'Describing People, Places & Things',
    'Directions & Getting Around',
    'Requests, Offers & Permission',
    'Opinions & Preferences',
    'Problems & Asking for Help',
    'Phone, Chat & Remote Communication',
    'Foundation Checkpoint',
    // Phase 2 — Day 31–60
    'Your Job & Responsibilities',
    'Tasks & Priorities',
    'Deadlines & Estimates',
    'Work Progress',
    'Daily Standup: Basic',
    'Asking for Help at Work',
    'Giving Simple Instructions',
    'Clarification at Work',
    'Meeting Basics',
    'Giving Opinions at Work',
    'Agreeing & Disagreeing Politely',
    'Problems & Blockers',
    'Decisions & Next Steps',
    'Work Chat & Follow-up',
    'Work English Checkpoint 1',
    'Detailed Status Update',
    'Explaining Reasons & Causes',
    'Delays & Changing Plans',
    'Follow-up Questions in Meetings',
    'Priorities & Trade-offs',
    'Ownership & Delegation',
    'Confirming Requirements',
    'Giving Feedback',
    'Receiving Feedback',
    'Mistakes & Corrections',
    'Presenting an Idea',
    'Comparing Options',
    'Negotiating Scope & Deadline',
    'Handover & Action Items',
    'Work English Checkpoint 2',
    // Phase 3 — Day 61–90
    'Explaining a Software Project',
    'Frontend English',
    'Backend English',
    'HTTP, API, Request & Response',
    'Database & SQL',
    'Authentication & Authorization',
    'Git, Branch & Commit',
    'Pull Request & Code Review',
    'Describing Bugs',
    'Debugging & Logs',
    'Testing',
    'Deployment & Environments',
    'Production Issues',
    'Performance Problems',
    'Technical English Checkpoint 1',
    'Explaining System Architecture',
    'Explaining Data Flow',
    'Frontend–Backend Integration',
    'Error Handling',
    'Validation & Business Rules',
    'Security Basics for Engineers',
    'Performance Investigation',
    'Explaining Technical Decisions',
    'Comparing Technical Approaches',
    'Technical Trade-offs',
    'Advanced Code Review Discussion',
    'Technical Meeting & Discussion',
    'Production Incident Communication',
    'Technical Presentation & Q&A',
    'Final Software Engineering English Checkpoint',
    // Phase 4 — Day 91–120
    'Tell Me About Yourself',
    'Your Experience & Projects',
    'Why This Company, Why Singapore',
    'Strengths & Weaknesses',
    'Behavioral Interview: STAR Method',
    'Behavioral: Handling Conflict',
    'Behavioral: Failure & Learning',
    'Behavioral: Leadership',
    'Technical Interview: Thinking Out Loud',
    'Technical Interview: Explaining Complexity',
    'System Design: Requirements',
    'System Design: High-Level Design',
    'System Design: Scaling & Trade-offs',
    'Questions for the Interviewer',
    'Offer & Salary Conversation',
    'First Week at a New Job',
    'Standup Simulation',
    'Meeting Simulation',
    'Technical Disagreement',
    'Explaining Decisions to Stakeholders',
    'Code Review Discussion',
    'Client Communication',
    'Production Incident Communication',
    'Post-mortem',
    'Leading a Team',
    'Mentoring',
    'Presentation: Product Demo',
    'Singapore Workplace Communication',
    'Full Mock Interview',
    'Final Check: Respond in English'
  ]

  /*
   * 3-2-1 Speaking tidak diatur di sini. Tambahkan `talk321: { topic }` langsung di file Day
   * yang cocok (mulai sekitar Day 31, 2–3 kali per minggu). Latihan ini opsional dan
   * tidak memengaruhi Daily Completion.
   */
};
