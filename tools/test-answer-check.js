#!/usr/bin/env node
/*
 * Uji penilai jawaban Conversation (js/core/answer-check.js) dengan bank pertanyaan asli.
 * Jalankan: node tools/test-answer-check.js — exit code 1 jika ada kasus gagal.
 * Format kasus: [questionId, jawaban, hasil yang diharapkan, limitDay (opsional, default 21)]
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const sandbox = { console };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'data/conversation/questions.js'), 'utf8'), sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'js/core/answer-check.js'), 'utf8'), sandbox);
const { check } = sandbox.window.E90.answerCheck;
const Q = Object.fromEntries(sandbox.window.E90.CONVERSATION.questions.map((q) => [q.id, q]));

const C = 'correct', A = 'almost', W = 'wrong';
const CASES = {
  introduction: [
    ['C-WORK-00', 'I work at a software company.', C],
    ['C-WORK-00', 'i work for a bank', C],
    ['C-WORK-00', 'A software company', A],
    ['C-WORK-00', 'I like coffee.', W],
    ['C-EVE-00', 'I live in Bandung.', C],
    ['C-EVE-00', 'Bandung', A],
    ['C-EVE-00', 'I from Bandung', W],
    ['C-WAKE-00', "I'm fine, thanks!", C],
    ['C-WAKE-00', 'Fine', C]
  ],
  routine: [
    ['C-WORK-01', 'I start work at 9.', C],
    ['C-WORK-01', 'I usually start work at nine o’clock', C],
    ['C-WORK-01', 'I started work at 9', A],
    ['C-WORK-01', 'I starts work in 9', A],
    ['C-WORK-01', 'Yes I do', W],
    ['C-BREAK-01', 'Yes, I do.', C],
    ['C-BREAK-01', 'Yes, I usually have breakfast.', C],
    ['C-BREAK-01', 'Yes.', A],
    ['C-BREAK-01', 'I am hungry', W]
  ],
  time: [
    ['C-WAKE-02', "It's 6:30.", C],
    ['C-WAKE-02', 'It is six thirty am', C],
    ['C-WAKE-02', 'six', C],
    ['C-WAKE-02', 'About 6 am', C],
    ['C-WAKE-02', 'I am six', W],
    ['C-TRAIN-01', 'It takes about thirty minutes.', C],
    ['C-TRAIN-01', 'About 1 hour', C],
    ['C-TRAIN-01', 'It take 30 minutes', W],
    ['C-BED-02', 'I go to bed at ten.', C],
    ['C-BED-02', 'I go to bed 10', A],
    ['C-BED-02', 'I went to bed at 10', A],
    ['C-BED-02', 'Bed', W]
  ],
  'present continuous': [
    ['C-WORK-03', 'Yes, I am working.', C],
    ['C-WORK-03', "No, I'm not.", C],
    ['C-WORK-03', 'Yes I working', A],
    ['C-WORK-03', 'Yes I am work now', A],
    ['C-WORK-03', 'Yes', A],
    ['C-WORK-03', 'I work at a bank', W],
    ['C-PREP-03', 'I am getting ready.', C],
    ['C-PREP-03', "I'm having breakfast now", C],
    ['C-PREP-03', 'I am eat breakfast', A],
    ['C-PREP-03', 'I eat breakfast', W]
  ],
  'past simple': [
    ['C-WAKE-03', 'I woke up at 5.', C],
    ['C-WAKE-03', 'I woke up at 5 am', C],
    ['C-WAKE-03', 'I woke up at five', C],
    ['C-WAKE-03', 'I woke up at 5 this morning', C],
    ['C-WAKE-03', 'i got up at 5:30 a.m.', C],
    ['C-WAKE-03', 'I wake up at 5 this morning.', A],
    ['C-WAKE-03', 'I waked up at 5', A],
    ['C-WAKE-03', '5', A],
    ['C-WAKE-03', 'I am happy', W],
    ['C-WAKE-03', 'I woke up', W],
    ['C-AFTER-02', 'I went to work and had a meeting.', C],
    ['C-AFTER-02', 'I go to work.', A],
    ['C-AFTER-02', 'Work', W]
  ],
  future: [
    ['C-BED-04', "I'm going to visit my parents.", C],
    ['C-BED-04', 'I will work from home.', C],
    ['C-BED-04', 'I going to work', A],
    ['C-BED-04', 'I will to go to the gym', A],
    ['C-BED-04', 'I went to work', W],
    ['C-PREP-04', 'Yes, I am.', C],
    ['C-PREP-04', 'Yes, I am going to work.', C],
    ['C-PREP-04', 'Yes', A],
    ['C-PREP-04', 'I work', W]
  ],
  'can/could': [
    ['C-WORK-06', 'Yes, I can.', C],
    ['C-WORK-06', 'I can speak a little English.', C],
    ['C-WORK-06', 'Yes, I can speaking English', A],
    ['C-WORK-06', 'I can to speak English', A],
    ['C-WORK-06', 'I speak Indonesian', W],
    ['C-EVE-05', "No, I can't.", C],
    ['C-EVE-05', 'I can cooks', A],
    ['C-EVE-05', 'Rice', W]
  ],
  frequency: [
    ['C-WAKE-04', 'I usually get up at six.', C],
    ['C-WAKE-04', 'I always wake up at 5 am', C],
    ['C-WAKE-04', 'I usually got up at six', A],
    ['C-WAKE-04', 'I usually gets up at 6', A],
    ['C-WAKE-04', 'Usually', W],
    ['C-TRAIN-04', 'I take the train every day.', C],
    ['C-TRAIN-04', 'Twice a week', C],
    ['C-TRAIN-04', 'I took the train every day', A],
    ['C-TRAIN-04', 'Train', W],
    ['C-HOME-04', 'Yes, I often work late.', C],
    ['C-HOME-04', 'No, I rarely work late', C],
    ['C-HOME-04', 'Yes I often works late', A],
    ['C-HOME-04', 'I am late', W]
  ],
  'batas Day (koreksi hanya dari materi yang sudah dipelajari)': [
    ['C-BREAK-01', 'Yes.', W, 13],          // short answer (Day 14) belum dipelajari
    ['C-BREAK-01', 'Yes.', A, 14],
    ['C-WORK-01', 'I started work at 9', W, 16], // koreksi past->present tetap boleh (Day 2) -> almost
  ]
};
// Kasus terakhir: present fixer (Day 2) tetap tersedia di Day 16.
CASES['batas Day (koreksi hanya dari materi yang sudah dipelajari)'][2][2] = A;

let fail = 0, total = 0;
for (const [group, list] of Object.entries(CASES)) {
  console.log(`\n# ${group}`);
  for (const [id, answer, expected, limit = 21] of list) {
    total++;
    const r = check(Q[id], answer, limit);
    const okay = r.verdict === expected;
    if (!okay) fail++;
    const extra = r.correction ? ` → ${r.correction}` : r.verdict === 'wrong' && r.sample ? ` → contoh: ${r.sample}` : '';
    console.log(`${okay ? 'PASS' : 'FAIL'} [${id}] "${answer}" = ${r.verdict}${okay ? '' : ` (harap ${expected})`}${extra}`);
  }
}
console.log(`\n${total - fail}/${total} lulus`);
process.exit(fail ? 1 : 0);
