#!/usr/bin/env node
/*
 * Validator bank pertanyaan conversation (data/conversation/questions.js).
 * Jalankan: node tools/validate-conversation.js — exit code 1 jika ada error.
 * Cek: id unik, konteks valid, minDay dalam rentang, ref ada di materi dan tidak lebih baru dari minDay.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const errors = [];
const sandbox = { window: {}, console };
sandbox.window.E90 = {};
sandbox.E90 = sandbox.window.E90;
vm.createContext(sandbox);
const run = (file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });

run('data/curriculum.js');
const C = sandbox.E90.CURRICULUM;
const sentenceIds = new Set();
sandbox.E90.registerDay = (d) => [...(d.learn || []), ...(d.review || [])].forEach((s) => s.id && sentenceIds.add(s.id));
for (const d of C.AVAILABLE_DAYS) run(`data/days/day-${String(d).padStart(2, '0')}.js`);
run('data/conversation/questions.js');

const { contexts, questions } = sandbox.E90.CONVERSATION;
const ctxIds = new Set(contexts.map((c) => c.id));
const seen = new Set();
const perCtx = {};
for (const q of questions) {
  const where = q.id || JSON.stringify(q);
  if (!q.id || seen.has(q.id)) errors.push(`${where}: id kosong/duplikat`);
  seen.add(q.id);
  if (!ctxIds.has(q.context)) errors.push(`${where}: context "${q.context}" tidak dikenal`);
  if (!q.en || !q.idn) errors.push(`${where}: en/idn wajib diisi`);
  if (!Number.isInteger(q.minDay) || q.minDay < 1 || q.minDay > C.totalDays) errors.push(`${where}: minDay tidak valid`);
  if (q.ref) {
    if (!sentenceIds.has(q.ref)) errors.push(`${where}: ref ${q.ref} tidak ditemukan di materi`);
    else if (Number(q.ref.match(/^D(\d+)/)[1]) > q.minDay) errors.push(`${where}: ref ${q.ref} lebih baru dari minDay ${q.minDay}`);
  }
  perCtx[q.context] = (perCtx[q.context] || 0) + 1;
}
for (const c of contexts) if (!perCtx[c.id]) errors.push(`context ${c.id}: belum ada pertanyaan`);

console.log(`Conversation: ${questions.length} pertanyaan, ${contexts.length} konteks`);
console.log(Object.entries(perCtx).map(([k, v]) => `${k}=${v}`).join(' '));
if (errors.length) {
  errors.forEach((e) => console.error('✗', e));
  process.exit(1);
}
console.log('✓ Valid');
