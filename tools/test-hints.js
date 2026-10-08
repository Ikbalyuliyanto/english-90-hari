#!/usr/bin/env node
/*
 * Uji kisi-kisi bertahap Conversation (hintFor di js/core/answer-check.js) dengan bank pertanyaan asli.
 * Jalankan: node tools/test-hints.js — exit code 1 jika ada kasus gagal.
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
const { hintFor, check, GRAMMAR, translate, meaningFor } = sandbox.window.E90.answerCheck;
const Q = Object.fromEntries(sandbox.window.E90.CONVERSATION.questions.map((q) => [q.id, q]));

let fail = 0, total = 0;
const expect = (name, actual, expected) => {
  total++;
  const ok = actual === expected;
  if (!ok) fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: ${actual}${ok ? '' : `  (harap: ${expected})`}`);
};
const show = (h) => `${h.hintLabel}: ${h.hintText}`;

// [jenis, questionId, day, [level1, level2, level3, level4]]
const LADDERS = [
  ['past simple', 'C-BREAK-03', 21, ['Kisi-kisi: gunakan past simple: I + verb lampau.', 'Kata bantu: ate', 'Pola: I ate ...', 'Contoh: I ate bread.']],
  ['past simple (jam)', 'C-WAKE-03', 21, ['Kisi-kisi: gunakan past simple: I + verb lampau.', 'Kata bantu: woke up / at', 'Pola: I woke up at ...', 'Contoh: I woke up at five.']],
  ['present continuous', 'C-PREP-03', 21, ['Kisi-kisi: gunakan present continuous: I am + verb-ing.', 'Kata bantu: I am / -ing', 'Pola: I am ...-ing', 'Contoh: I am getting ready.']],
  ['yes/no + continuous', 'C-WORK-03', 21, ['Kisi-kisi: gunakan present continuous: I am + verb-ing.', 'Kata bantu: am / working', 'Pola: Yes, I am. / I am working.', 'Contoh: Yes, I am working.']],
  ['future', 'C-BED-04', 21, ['Kisi-kisi: gunakan going to / will: I am going to + verb.', 'Kata bantu: going to / will', 'Pola: I am going to ...', 'Contoh: I am going to work.']],
  ['can/could', 'C-WORK-06', 21, ['Kisi-kisi: gunakan can + verb dasar.', 'Kata bantu: can / speak', 'Pola: Yes, I can. / I can speak a little English.', 'Contoh: Yes, I can speak a little English.']],
  ['frequency', 'C-WAKE-04', 21, ['Kisi-kisi: gunakan kata frekuensi: usually / always / often / never.', 'Kata bantu: usually / get up / at', 'Pola: I usually get up at ...', 'Contoh: I usually get up at six.']],
  ['yes/no (be)', 'C-LUNCH-01', 21, ['Kisi-kisi: gunakan I am / It is + keadaan.', 'Kata bantu: I am / hungry', 'Pola: Yes, I am. / No, I am not.', 'Contoh: Yes, I am hungry.']],
  ['time', 'C-WAKE-02', 21, ['Kisi-kisi: sebut waktunya dengan jelas, misalnya at + jam.', "Kata bantu: It is / o'clock", 'Pola: It is ...', "Contoh: It is six o'clock."]],
  ['time (durasi)', 'C-TRAIN-01', 21, ['Kisi-kisi: sebut waktunya dengan jelas, misalnya at + jam.', 'Kata bantu: It takes / minutes', 'Pola: It takes about ... minutes.', 'Contoh: It takes about thirty minutes.']]
];

console.log('# Kisi-kisi bertahap per jenis');
for (const [kind, id, day, steps] of LADDERS) {
  steps.forEach((want, i) => expect(`${kind} [${id}] salah ${i + 1}x`, show(hintFor(Q[id], i + 1, day)), want));
  expect(`${kind} [${id}] salah 6x tetap Contoh`, hintFor(Q[id], 6, day).hintLevel, 4);
}

console.log('\n# currentDay membatasi kisi-kisi');
// Day 13: belum ada short answer (Day 14) -> pola tanpa "Yes, I do."
expect('Day 13, yes/no present: Pola tanpa short answer', show(hintFor(Q['C-BREAK-01'], 3, 13)), 'Pola: I have breakfast.');
expect('Day 14, yes/no present: short answer boleh', show(hintFor(Q['C-BREAK-01'], 3, 14)), 'Pola: Yes, I do. / I have breakfast.');
expect('Day 13, yes/no be: Pola dibangun tanpa Yes/No', show(hintFor(Q['C-LUNCH-01'], 3, 13)), 'Pola: I am ... / I am not ...');
expect('Day 13, Are you tired?: tanpa short answer', show(hintFor(Q['C-HOME-02'], 3, 13)), 'Pola: I am ... / I am not ...');
// Day 15-16: past belum boleh disebut (Day 17) untuk pertanyaan Day 15
expect('Day 15, past belum dipelajari -> kisi-kisi umum', show(hintFor(Q['C-AFTER-02'], 1, 15)), 'Kisi-kisi: jawab dengan kalimat lengkap, mulai dengan I ...');
expect('Day 16, past masih belum', hintFor(Q['C-AFTER-01'], 1, 16).hintText, 'jawab dengan kalimat lengkap, mulai dengan I ...');
expect('Day 17, past boleh', hintFor(Q['C-AFTER-02'], 1, 17).hintText, GRAMMAR.past.text);
expect('Day 16, continuous boleh', hintFor(Q['C-WORK-03'], 1, 16).hintText, GRAMMAR.continuous.text);
expect('Day 18, future boleh', hintFor(Q['C-PREP-04'], 1, 18).hintText, GRAMMAR.future.text);
// Semua pertanyaan, semua Day: kisi-kisi level 1 tidak pernah menyebut grammar di atas current day.
let leak = 0;
for (const q of Object.values(Q)) {
  for (let day = q.minDay; day <= 120; day++) {
    const h = hintFor(q, 1, day);
    const g = Object.values(GRAMMAR).find((x) => x.text === h.hintText);
    if (g && g.minDay > day) leak++;
    const frame = hintFor(q, 3, day).hintText;
    if (day < 14 && /^(Yes|No),/.test(frame)) leak++;
  }
}
expect('tidak ada kisi-kisi grammar/short answer di atas current day (semua pertanyaan x Day)', leak, 0);

console.log('\n# Setiap pertanyaan punya 4 level berisi');
let empty = 0;
for (const q of Object.values(Q)) for (let l = 1; l <= 4; l++) if (!hintFor(q, l, 120).hintText) empty++;
expect('kisi-kisi kosong', empty, 0);

console.log('\n# Validator existing tidak berubah');
expect('benar', check(Q['C-WAKE-03'], 'I woke up at 5.', 21).verdict, 'correct');
expect('hampir', check(Q['C-WAKE-03'], 'I wake up at 5 this morning.', 21).verdict, 'almost');
expect('salah', check(Q['C-WAKE-03'], 'I am happy', 21).verdict, 'wrong');

console.log('\n# Arti Indonesia (hanya dari translations di bank pertanyaan)');
const run = (id, answer, day = 21) => { const r = check(Q[id], answer, day); return { ...r, ...meaningFor(Q[id], r, answer) }; };
let r = run('C-BREAK-03', 'I ate bread.');
expect('correct, kalimat dikenal -> arti jawaban user', `${r.verdict} | ${r.meaningSource} | ${r.meaningIdn}`, 'correct | answer | Saya makan roti.');
r = run('C-BREAK-03', 'i ate rice and chicken');
expect('correct, beda huruf/tanda baca -> tetap dikenal', r.meaningIdn, 'Saya makan nasi dan ayam.');
r = run('C-WORK-03', 'Yes, I am working now.');
expect('yes/no correct -> arti', r.meaningIdn, 'Ya, saya sedang bekerja sekarang.');
r = run('C-WAKE-03', 'I woke up at 5');
expect('angka 5 = five -> arti dikenal', r.meaningIdn, 'Saya bangun jam lima.');
r = run('C-BREAK-03', 'I ate noodles with my friend.');
expect('correct, kalimat bebas -> contoh + arti (tanpa terjemahan palsu)', `${r.meaningSource} | ${r.meaningEn} | ${r.meaningIdn}`, 'sample | I ate bread. | Saya makan roti.');
r = run('C-WAKE-03', 'I wake up at 5 this morning.');
expect('almost -> arti kalimat koreksi', `${r.verdict} | ${r.correction} | ${r.meaningSource} | ${r.meaningIdn}`, 'almost | I woke up at 5 this morning. | correction | Saya bangun jam lima pagi ini.');
r = run('C-BREAK-03', 'I eat rice');
expect('almost "I eat rice" -> I ate rice. + arti', `${r.correction} | ${r.meaningIdn}`, 'I ate rice. | Saya makan nasi.');
r = run('C-BREAK-03', 'I eat noodles');
expect('almost, koreksi tidak dikenal -> contoh + arti', `${r.meaningSource} | ${r.meaningEn}`, 'sample | I ate bread.');
r = run('C-BREAK-03', 'I am happy');
expect('wrong -> tidak ada arti jawaban', r.meaningIdn, undefined);
for (let l = 1; l <= 3; l++) expect(`wrong level ${l} -> arti contoh tidak bocor`, hintFor(Q['C-BREAK-03'], l, 21).hintIdn, undefined);
const h4 = hintFor(Q['C-BREAK-03'], 4, 21);
expect('wrong level 4 -> contoh + arti', `${h4.hintText} | ${h4.hintIdn}`, 'I ate bread. | Saya makan roti.');
expect('future', translate(Q['C-BED-04'], 'I am going to work tomorrow.'), 'Saya akan bekerja besok.');
expect('can', translate(Q['C-WORK-06'], 'Yes, I can speak a little English.'), 'Ya, saya bisa berbicara sedikit bahasa Inggris.');
let missing = 0;
for (const q of Object.values(Q)) {
  for (const a of q.sampleAnswers) if (!translate(q, a)) missing++;
  if (!hintFor(q, 4, 120).hintIdn) missing++;
}
expect('coverage sampleAnswers + kisi-kisi level 4', `${Object.keys(Q).length} pertanyaan, ${missing} tanpa arti`, '55 pertanyaan, 0 tanpa arti');

console.log(`\n${total - fail}/${total} lulus`);
process.exit(fail ? 1 : 0);
