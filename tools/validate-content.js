#!/usr/bin/env node
/*
 * Validator konten English 90 Hari.
 * Jalankan: node tools/validate-content.js
 * Dipakai juga di GitHub Actions sebelum deploy; exit code 1 jika ada error.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const sandbox = { window: {}, console };
sandbox.window.E90 = {};
sandbox.E90 = sandbox.window.E90;
vm.createContext(sandbox);
const run = (file) => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });

run('data/curriculum.js');
const C = sandbox.E90.CURRICULUM;
const days = [];
sandbox.E90.registerDay = (d) => days.push(d);

// --- Kurikulum ---
if (C.titles.length !== C.totalDays) err(`curriculum: titles berjumlah ${C.titles.length}, seharusnya ${C.totalDays}`);
let expectFrom = 1;
for (const p of C.phases) {
  if (p.from !== expectFrom) err(`curriculum: phase ${p.id} mulai di ${p.from}, seharusnya ${expectFrom}`);
  expectFrom = p.to + 1;
}
if (expectFrom - 1 !== C.totalDays) err('curriculum: phase tidak menutup seluruh hari');

for (const d of C.AVAILABLE_DAYS) {
  const file = `data/days/day-${String(d).padStart(2, '0')}.js`;
  if (!fs.existsSync(path.join(root, file))) { err(`${file} tidak ditemukan`); continue; }
  try { run(file); } catch (e) { err(`${file}: ${e.message}`); }
}

// --- Token helper (sama dengan js/core/util.js) ---
const tokens = (s) => String(s).replace(/[’‘]/g, "'").split(/\s+/)
  .map((t) => t.toLowerCase().replace(/^[^a-z0-9'{]+|[^a-z0-9'}]+$/g, '')).filter(Boolean);

const ids = new Map();
const patternIds = new Set();
const pad = (n) => String(n).padStart(2, '0');

function checkSentence(s, day, where) {
  const tag = `Day ${day} ${where} ${s.id || '(tanpa id)'}`;
  if (!/^D\d{2,3}-S\d{2}$/.test(s.id || '')) err(`${tag}: format id harus DXX-SYY`);
  else if (!s.id.startsWith(`D${pad(day)}-`)) err(`${tag}: prefix id tidak sesuai Day`);
  if (ids.has(s.id)) err(`${tag}: id duplikat`);
  ids.set(s.id, s);
  for (const f of ['english', 'pronunciation', 'translation']) {
    if (!s[f] || !String(s[f]).trim()) err(`${tag}: field ${f} kosong`);
  }
  if (!Array.isArray(s.words) || !s.words.length) { err(`${tag}: words kosong`); return; }
  const glossed = new Set(s.words.map(([w]) => String(w).toLowerCase()));
  for (const [w, m] of s.words) {
    if (!m || !String(m).trim()) err(`${tag}: arti kata "${w}" kosong`);
  }
  for (const t of tokens(s.english)) {
    if (!glossed.has(t)) err(`${tag}: kata "${t}" belum punya arti per kata`);
  }
  for (const w of glossed) {
    if (!tokens(s.english).includes(w)) err(`${tag}: words berisi "${w}" yang tidak ada di kalimat`);
  }
  for (const ph of s.phrases || []) {
    if (!Array.isArray(ph) || ph.length < 2) err(`${tag}: format phrases harus [phrase, arti]`);
  }
  if (/[a-z]\s*=\s*/i.test(s.pronunciation)) warn(`${tag}: pronunciation terlihat seperti arti`);
}

const refs = [];
for (const d of days.sort((a, b) => a.day - b.day)) {
  const tag = `Day ${d.day}`;
  if (!C.AVAILABLE_DAYS.includes(d.day)) err(`${tag}: terdaftar tapi tidak ada di AVAILABLE_DAYS`);
  if (!Array.isArray(d.learn) || !d.learn.length) { err(`${tag}: learn kosong`); continue; }
  d.learn.forEach((s) => checkSentence(s, d.day, 'learn'));
  (d.review || []).forEach((r) => (r.ref ? refs.push([d.day, r.ref]) : checkSentence(r, d.day, 'review')));
  for (const p of d.patterns || []) {
    if (patternIds.has(p.id)) err(`${tag}: pattern id duplikat ${p.id}`);
    patternIds.add(p.id);
    if (!p.formula || !p.meaning) err(`${tag}: pattern ${p.id} butuh formula dan meaning`);
    if (!Array.isArray(p.examples) || p.examples.length < 3) err(`${tag}: pattern ${p.id} minimal 3 examples`);
  }
  if (!(d.patterns || []).length) err(`${tag}: minimal 1 pattern`);
  const total = d.learn.length + (d.review || []).length;
  if (total < 12 || total > 20) warn(`${tag}: total latihan ${total} (disarankan sekitar 15)`);
  const sh = d.shadowing || [];
  if (sh.length < 3 || sh.length > 5) err(`${tag}: shadowing harus 3–5 kalimat (sekarang ${sh.length})`);
  const sp = d.speaking || [];
  if (sp.length < 3 || sp.length > 5) err(`${tag}: speaking harus 3–5 pertanyaan (sekarang ${sp.length})`);
  sp.forEach((q, i) => { if (!q.q || !q.hint || !q.example) err(`${tag}: speaking #${i + 1} butuh q, hint, example`); });
}

// Validasi setelah semua id terkumpul.
for (const d of days) {
  for (const s of [...d.learn, ...(d.review || []).filter((r) => !r.ref)]) {
    if (s.pattern && !patternIds.has(s.pattern)) err(`${s.id}: pattern ${s.pattern} tidak ditemukan`);
  }
  for (const id of d.shadowing || []) {
    if (!ids.has(id)) err(`Day ${d.day}: shadowing ${id} tidak ditemukan`);
  }
}
for (const [day, ref] of refs) {
  if (!ids.has(ref)) err(`Day ${day}: review ref ${ref} tidak ditemukan`);
  else if (Number(ref.slice(1, ref.indexOf('-'))) >= day) err(`Day ${day}: review ref ${ref} harus dari hari sebelumnya`);
}

// --- Materi lama tidak boleh hilang ---
const legacy = { window: {} };
vm.createContext(legacy);
vm.runInContext(fs.readFileSync(path.join(root, 'data/legacy/lessons-v1.js'), 'utf8'), legacy);
const allEnglish = new Set([...ids.values()].map((s) => s.english.replace(/\{name\}/g, 'Andi')));
let legacyCount = 0;
for (const l of legacy.window.LESSONS) {
  for (const [en] of l.phrases) {
    legacyCount++;
    if (!allEnglish.has(en)) err(`Materi lama hilang: Day ${l.day} "${en}"`);
  }
}

warnings.forEach((w) => console.log('WARN ', w));
errors.forEach((e) => console.log('ERROR', e));
console.log(`\nDays: ${days.length} | Sentences: ${ids.size} | Patterns: ${patternIds.size} | Legacy dicek: ${legacyCount}`);
console.log(errors.length ? `GAGAL: ${errors.length} error` : 'OK: konten valid');
process.exit(errors.length ? 1 : 0);
