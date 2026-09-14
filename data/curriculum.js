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
  AVAILABLE_DAYS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

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
      translation: 'shown'
    },
    {
      id: 3, from: 61, to: 90,
      title: 'Software Engineering English',
      titleId: 'Bahasa Inggris Software Engineer',
      target: 'Bisa menjelaskan sistem, bug, API, dan keputusan teknis.',
      translation: 'shown'
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
    'Have / Has: Things and People',
    'Do / Does Questions',
    'Want, Need & Like',
    'Family & People Around You',
    'Past Experiences',
    'Giving Opinions',
    'Suggestions & Invitations',
    'Phone & Chat Conversation',
    'Simple Office Conversation',
    'Basic Conversation Check',
    // Phase 2 — Day 31–60
    'Talking About Your Job',
    'Tasks & To-Dos',
    'Work Progress',
    'Deadlines',
    'Priorities',
    'Asking for Help',
    'Offering Help',
    'Giving Instructions',
    'Following Instructions',
    'Scheduling Meetings',
    'Opening a Meeting',
    'Clarification at Work',
    'Agreeing',
    'Disagreeing Politely',
    'Explaining Problems',
    'Daily Standup: Yesterday',
    'Daily Standup: Today',
    'Daily Standup: Blockers',
    'Progress Report',
    'Follow-up Questions',
    'Making Decisions',
    'Problem Solving Discussion',
    'Work Chat & Email',
    'Updating Your Manager',
    'Handling Delays',
    'Giving & Receiving Feedback',
    'Presentation Basics',
    'Meeting Wrap-up & Action Items',
    'Remote Work Communication',
    'Work English Check: Standup Simulation',
    // Phase 3 — Day 61–90
    'Frontend Basics',
    'Backend Basics',
    'REST API',
    'HTTP Methods & Status Codes',
    'Databases',
    'SQL Queries',
    'Authentication',
    'Authorization & Roles',
    'Git Basics',
    'Branch & Merge',
    'Pull Requests',
    'Code Review: Giving Comments',
    'Code Review: Responding',
    'Reporting a Bug',
    'Debugging',
    'Logs & Monitoring',
    'Testing',
    'Deployment',
    'CI/CD',
    'Production Issues',
    'Performance',
    'Requirements',
    'Estimation',
    'Architecture Overview',
    'Integration with Other Systems',
    'When a Request Fails',
    'Explaining Technical Decisions',
    'Security Basics',
    'Documentation',
    'SE English Check: Explain Your System',
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
  ],

  // Latihan 3-2-1 Speaking (mulai Phase 2). Dipakai jika Day tidak punya talk321 sendiri.
  talk321Topics: {
    2: ['Explain your current project.', 'Describe your typical workday.', 'Explain a problem you had at work.'],
    3: ['Explain how your API works.', 'Describe a bug you fixed.', 'Explain a technical problem you solved.'],
    4: ['Tell me about yourself.', 'Explain the architecture of your last project.', 'Describe a time you disagreed with a teammate.']
  }
};
