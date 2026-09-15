# English 90 Hari · Personal English Trainer

Aplikasi latihan bahasa Inggris statis, mobile-first, tanpa backend/database/API key.
Programnya 120 hari: dari dasar sampai bisa memakai English untuk kerja dan interview sebagai Software Engineer.

🔗 **Buka aplikasi: [ikbalyuliyanto.github.io/english-90-hari](https://ikbalyuliyanto.github.io/english-90-hari/)**

Metode: **Understand → Listen → Recall → Speak → Modify → Respond → Use**, bukan sekadar hafal kalimat.

## Program
| Phase | Day | Fokus |
|---|---|---|
| 1 | 1–30 | Foundation & Basic Conversation |
| 2 | 31–60 | Work English (standup, meeting, deadline) |
| 3 | 61–90 | Software Engineering English |
| 4 | 91–120 | Speaking, Real Work & Job Interview (terjemahan disembunyikan secara default) |

Konten yang sudah tersedia: **Day 1–60** (Phase 1 dan Phase 2 Work English lengkap). Day lain tampil di roadmap sebagai "segera hadir".

## Fitur
- **Dashboard**: Day saat ini, progress program, streak, active study days, menit belajar, kalimat learned/mastered/weak, review due, vocabulary.
- **3 mode belajar per Day**
  - Normal (±2 jam): Vocabulary Review → Learn → Active Recall → Listening → Shadowing → Sentence Variation → Speaking Challenge → Review. 3-2-1 Speaking hanya muncul di Day yang punya `talk321` (mulai sekitar Day 31, 2–3 kali per minggu), bersifat opsional, dan tidak memengaruhi Daily Completion.
  - Quick (±30 menit) dan Emergency (±10 menit): tetap dihitung sebagai hari aktif agar tidak ada zero-day.
- **Daily completion**: Day selesai jika Learn, Recall, Listening, Shadowing, dan Speaking sudah dikerjakan.
- **Sentence card**: English, cara baca ala Indonesia, arti natural, arti per kata sesuai konteks, frasa, pola, 🔊 Listen / 🐢 Slow, sembunyikan English/arti, ⭐ Mastered, ↺ Reset progress.
- **SRS sederhana** (Again / Hard / Good / Easy) untuk kalimat dan kosakata.
- **Review**: Random, Due, Weak, Mastered, Listening, Indonesia → English, English → Indonesia (5/10/20).
- **Vocabulary Bank** otomatis dari kalimat yang dipelajari, dengan arti per konteks (mis. *cold* = pilek / dingin); latihan EN→ID, ID→EN, fill in the blank.
- **Search** kalimat, arti, kata, dan topik.
- **Settings**: nama (untuk kalimat "My name is ..."), tema, ukuran teks, backup/restore progress.
- Audio memakai Web Speech API bawaan browser. Jika tidak didukung, aplikasi tetap berjalan.

## Struktur
```
index.html
css/styles.css
data/
  curriculum.js        roadmap Day 1–120, fase, AVAILABLE_DAYS
  days/day-01.js ...   konten per hari
  legacy/lessons-v1.js data versi pertama (arsip, tidak dimuat aplikasi)
js/
  core/   util, store (localStorage + SRS), speech, content (loader, search, vocab bank)
  ui/     components, activities-core (learn/recall/listening),
          activities-speak (shadowing/variation/speaking/3-2-1), activities-vocab
  views/  dashboard, day, review, vocab, misc (search & settings)
  app.js  router berbasis hash
tools/validate-content.js
```

## Menjalankan lokal
Buka `index.html` langsung di browser, atau jalankan server sederhana:

```bash
npx serve .
# atau
python -m http.server 8080
```

## Menambah batch Day baru
1. Salin salah satu file, misalnya `data/days/day-20.js`, menjadi `day-21.js`, lalu isi kontennya.
2. Tambahkan nomor harinya ke `AVAILABLE_DAYS` di `data/curriculum.js`.
3. Jalankan validator:
   ```bash
   node tools/validate-content.js
   ```

Format satu kalimat:
```js
{
  id: 'D21-S01',                               // unik: D<hari>-S<nomor>
  english: "I'm currently working on the backend.",
  pronunciation: 'aim ker-ren-li wer-king on de bek-end',
  translation: 'Saat ini saya sedang mengerjakan backend.',
  words: [["I'm", 'saya sedang', 'be'], ['currently', 'saat ini'], ...], // [kata, arti di konteks ini, bentuk dasar?]
  phrases: [['work on', 'mengerjakan']],
  pattern: 'D21-P1'                            // id pola di bagian patterns
}
```
Setiap Day juga punya `review` (kalimat variasi baru atau `{ ref: 'D18-S05' }`), `patterns`, `shadowing` (3–5 id), `speaking` (3–5 pertanyaan; tambahkan `timers: [3, 5]` untuk timer opsional), dan `talk321` (opsional).

Mulai Phase 2, arti pertanyaan speaking dilipat secara default (`questionTranslation: 'collapsed'` di `data/curriculum.js`) agar latihan semakin English-oriented. Mulai Day 46, kolom `meaning` pada pattern ditulis dalam English sederhana; catatan untuk hal yang mudah disalahpahami tetap berbahasa Indonesia.

Validator memeriksa: setiap kata punya arti, cara baca tidak kosong, id unik, kalimat tidak duplikat (pakai `{ ref }` untuk review), referensi valid, jumlah shadowing/speaking, dan memastikan 225 kalimat versi lama tidak ada yang hilang.

### Aturan konten
- **Arti per kata ditulis sesuai konteks.** Kata fungsi yang tidak punya arti langsung (do/does/did, to, the, a) dijelaskan fungsinya, misalnya `did` = "(kata bantu pertanyaan bentuk lampau, tidak diterjemahkan)".
- **Cara baca** adalah alat bantu pemula; audio adalah referensi utama. Konvensi (juga tampil di aplikasi, menu "Konvensi cara baca" di Learn/Shadowing):

| Tulisan | Bunyi | Contoh |
|---|---|---|
| `-` | pemisah suku kata | de-ve-lo-per |
| ai / ei / ou / au | I · name · go · now | mai, neim, gou, nau |
| e | bunyi lemah atau "a" pendek | e (a), hev (have) |
| th / d | th tak bersuara / th bersuara | thingk / de, dis, det |
| sh, ch, j, zh | sh, ch, j, s di pleasure | shur, lanch, me-ne-jer, ple-zher |
| -ed | t / d / id | werkt, steid, star-tid |
| de → di | "the" sebelum vokal | di o-fis |

- Setiap Day membawa kembali pattern lama di konteks baru (field `pattern` boleh menunjuk pattern hari sebelumnya).

## Deploy
Push ke branch `main`. GitHub Actions (`.github/workflows/deploy-pages.yml`) menjalankan validator lalu deploy ke GitHub Pages.
