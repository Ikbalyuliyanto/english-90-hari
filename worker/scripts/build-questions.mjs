// Membuat src/questions.json dari bank pertanyaan app (data/conversation/questions.js),
// supaya scheduler Worker memakai sumber yang sama dengan frontend. Dijalankan otomatis oleh
// wrangler (build.command) dan oleh npm test.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', '..', 'data', 'conversation', 'questions.js');
const out = path.join(here, '..', 'src', 'questions.json');

const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(src, 'utf8'), sandbox, { filename: src });
const { contexts, questions } = sandbox.E90.CONVERSATION;

const data = {
  contexts: contexts.map(({ id, label, greeting }) => ({ id, label, greeting })),
  questions: questions.map(({ id, context, en, idn, minDay }) => ({ id, context, en, idn, minDay }))
};
const json = JSON.stringify(data, null, 2) + '\n';
if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== json) fs.writeFileSync(out, json);
console.log(`questions.json: ${data.questions.length} pertanyaan, ${data.contexts.length} konteks`);
