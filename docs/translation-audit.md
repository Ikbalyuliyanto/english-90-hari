# Final Translation Audit Day 1–120

Branch: `feat/primary-natural-translation`

Total sentence: 1399 · Total pattern: 518 · Conversation question: 55

## Aturan

- `translation` = **terjemahan utama**: sedekat mungkin dengan struktur English, tetapi tetap benar dalam bahasa Indonesia. Dipakai sebagai prompt Active Recall (Indonesia → English) dan Review.
- `naturalTranslation` (opsional) = **arti natural/percakapan**, hanya informasi tambahan. Terjemahan lama yang sudah natural dipindah ke sini.
- Pola: `meaning` mengikuti struktur formula; `naturalMeaning` dan `exampleMeanings` opsional.
- Conversation: `idn` = terjemahan utama pertanyaan; `naturalIdn` opsional. `translations` (arti jawaban user) sengaja tetap natural.
- Arti di `words` adalah arti pada kalimat tersebut, bukan arti universal.

## Metode

- Audit dilakukan **manual, kalimat per kalimat**, per batch 20 hari. Tidak ada replace massal berbasis regex.
- Skrining heuristik (perbandingan `words` vs `translation`) hanya dipakai di awal sebagai alat bantu. Hasilnya banyak false positive (mis. "I go home." = "Saya pulang."), dan false positive tidak diubah.
- Idiom dan ungkapan tetap diterjemahkan natural jika itu lebih benar (mis. "See you later", "How much is this?", "What's up?", "We're running behind", "Take care").
- Kalimat yang ragu tidak dipaksakan, sehingga tidak ada yang ditandai NEEDS_REVIEW.

## Hasil final

| Batch | Primary translation diubah | Word-context fix | Pattern fix |
|---|---|---|---|
| Day 1–20 | 40 | 2 | 0 |
| Day 21–40 | 82 | 0 | 3 |
| Day 41–60 | 103 | 3 | 74 |
| Day 61–80 | 45 | 0 | 98 |
| Day 81–100 | 36 | 0 | 83 |
| Day 101–120 | 14 | 0 | 77 |
| **Total** | **320** | **5** | **335** |

Sisa kalimat: KEEP.

- **Primary translation:** pertanyaan Do/Are/Can/Could → "Apakah / Bisakah ...", WH-question mengikuti urutan English ("Apa yang ...", "Di mana kamu ..."), "Let me" → "Biar saya ...", "I think" → "Saya pikir / rasa ..." (natural: "Menurut saya ..."), "I'll" → "Saya akan ...", "should" → "seharusnya" bila sesuai konteks.
- **Word-context:** finish (D02-S10), of course (D14-S10), should (D49-S05, D49-S06, D52-S08).
- **Pattern:** sebagian besar mengganti `meaning` pola Day 46–120 yang sebelumnya berbahasa Inggris menjadi bahasa Indonesia, plus penyelarasan "I think / What do you think" (D27-P2, D27-P4, D40-P1).

## Pattern reference (penyesuaian subjek)

| Kalimat | Sebelum | Sesudah |
|---|---|---|
| D49-S05 What should we do next? | D28-P3 `What should I + KATA KERJA?` | D28-P3 menjadi `What should I / we + KATA KERJA?` (+ contoh "What should we do next?") |
| D22-S12 Are you free on Thursday? | D05-P2 hanya `I'm + free ...` | D05-P2 ditambah `Are you free + WAKTU?` |
| D27-S10, D49-S13 Which ... do you prefer? | D27-P3 hanya `I prefer ...` | D27-P3 ditambah `Which + BENDA + do you prefer?` |
| D18-S01 What are you going to do this weekend? | D18-P1 `I'm going to ...` | D10-P3 `going to + KATA KERJA` |
| D48-S13 Could we move the meeting to Thursday? | D19-P2 `Can you / Could you ...` | D33-P4 `Can we move the deadline (to + WAKTU)?` |

Dibiarkan karena perbedaannya kecil (subjek saja): D39-S12 "Can everyone hear me?" → D19-P2, D49-S11 "What did the client say?" → D23-P1, D74-S12 → D05-P4.

## Conversation (55 pertanyaan)

- PRIMARY_CHANGED + NATURAL_ADDED: 41 (arti lama dipindah ke `naturalIdn`)
- KEEP: 14 (sudah dekat dengan struktur English atau berupa ungkapan, mis. "Good morning! How are you?", "How was your day?", "What time is it now?")
- NEEDS_REVIEW: 0

Notification, Worker (`worker/src/questions.json`) dan bot WhatsApp tetap memakai `idn` (= terjemahan utama). `naturalIdn` hanya muncul di halaman Conversation.

## Kompatibilitas

- Sentence ID: tidak berubah
- `english90:v2`: tidak berubah
- SRS, day completion, backup: tidak berubah
- Conversation history: tidak di-reset (ID pertanyaan tidak berubah)
