#!/usr/bin/env node
/*
 * Generator ikon PWA (PNG) tanpa dependency: kotak biru + gelembung chat putih.
 * Jalankan: node tools/make-icons.js  -> assets/icons/icon-{192,512}.png, maskable-512.png
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const c = Buffer.alloc(4); c.writeUInt32BE(crc(td));
  return Buffer.concat([len, td, c]);
}

function draw(size, maskable) {
  const BLUE = [29, 78, 216], WHITE = [255, 255, 255], BG = [246, 247, 249];
  const r = maskable ? 0 : size * 0.22;               // radius sudut kotak
  const s = maskable ? 0.8 : 1;                       // safe zone maskable
  const px = (x, y) => {
    // sudut membulat (transparan di luar untuk ikon biasa)
    const cx = Math.min(Math.max(x, r), size - r), cy = Math.min(Math.max(y, r), size - r);
    if (r && (x - cx) ** 2 + (y - cy) ** 2 > r * r) return [...BG, 0];
    // koordinat normal -1..1 di dalam safe zone
    const u = ((x / size) * 2 - 1) / s, v = ((y / size) * 2 - 1) / s;
    // gelembung: elips + ekor
    const inBubble = (u / 0.62) ** 2 + ((v + 0.08) / 0.45) ** 2 <= 1;
    const inTail = v > 0.2 && v < 0.62 && u > -0.42 && u < -0.1 && (u + 0.42) > (v - 0.2) * 0.75;
    if (inBubble || inTail) {
      // tiga titik biru di dalam gelembung
      for (const dx of [-0.28, 0, 0.28]) if ((u - dx) ** 2 + (v + 0.08) ** 2 < 0.075 ** 2) return [...BLUE, 255];
      return [...WHITE, 255];
    }
    return [...BLUE, 255];
  };
  const rows = [];
  for (let y = 0; y < size; y++) {
    const row = Buffer.alloc(1 + size * 4);
    for (let x = 0; x < size; x++) Buffer.from(px(x + 0.5, y + 0.5)).copy(row, 1 + x * 4);
    rows.push(row);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(Buffer.concat(rows))), chunk('IEND', Buffer.alloc(0))
  ]);
}

const out = path.join(__dirname, '..', 'assets', 'icons');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'icon-192.png'), draw(192, false));
fs.writeFileSync(path.join(out, 'icon-512.png'), draw(512, false));
fs.writeFileSync(path.join(out, 'maskable-512.png'), draw(512, true));
console.log('✓ ikon dibuat di assets/icons');
