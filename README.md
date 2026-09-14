# English 90 Hari

Aplikasi belajar Bahasa Inggris statis, mobile-first, tanpa backend/database.

## Fitur
- 1 hari = 15 kalimat
- Cara baca gaya Indonesia
- Arti natural Bahasa Indonesia
- Arti per kata yang bisa dibuka/tutup
- Audio menggunakan Web Speech API browser
- Tandai hari selesai; progres tersimpan di `localStorage`
- Pencarian materi
- Review acak
- Dark mode & ukuran teks
- Siap GitHub Pages, tanpa proses build

## Menjalankan lokal
Cukup buka `index.html`, atau lebih aman gunakan server sederhana:

```bash
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Publish ke GitHub Pages
1. Buat repository GitHub baru.
2. Push seluruh isi folder ini ke branch `main`.
3. GitHub → **Settings → Pages**.
4. Pada **Build and deployment**, pilih **GitHub Actions**.
5. Workflow `.github/workflows/deploy-pages.yml` otomatis deploy.

Setelah sukses, URL biasanya:
`https://USERNAME.github.io/NAMA-REPO/`

## Menambah Hari 16–90
Edit `data/lessons.js`. Ikuti struktur lesson yang sudah ada. UI otomatis membuat card baru.
