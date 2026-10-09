#!/usr/bin/env node
/*
 * Menyalin file web app ke www/ untuk dibungkus Capacitor (APK Android).
 * Sumber tetap file yang sama dengan GitHub Pages; folder worker/, tools/, android/ tidak ikut.
 * Jalankan: node scripts/build-www.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'www');
const ENTRIES = ['index.html', 'manifest.webmanifest', 'sw.js', 'css', 'js', 'data', 'assets'];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
let files = 0;
for (const entry of ENTRIES) {
  const src = path.join(root, entry);
  if (!fs.existsSync(src)) throw new Error(`Tidak ditemukan: ${entry}`);
  fs.cpSync(src, path.join(out, entry), { recursive: true });
}
const count = (dir) => fs.readdirSync(dir, { withFileTypes: true }).reduce((n, d) => n + (d.isDirectory() ? count(path.join(dir, d.name)) : 1), 0);
files = count(out);
console.log(`www/ siap: ${files} file`);
