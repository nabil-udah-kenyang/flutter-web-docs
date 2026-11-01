# Dart & Flutter Beginner Docs

Dokumentasi belajar Dart dan Flutter dengan **67 modul**, dari Beginner Track (Dart, Flutter, HTTP/API, GetX) hingga Intermediate Track (responsive layout dan animasi) dan Advanced Track (Firebase serta Supabase). Situs ini memakai **VitePress**.

## Menjalankan lokal

```bash
npm install
npm run docs:dev
```

VitePress akan membuka server lokal dan memperbarui halaman ketika source Markdown berubah.

## Build produksi

```bash
npm run docs:build
npm run docs:preview
```

Hasil build ada di `docs/.vitepress/dist/`.

## Deploy manual ke GitHub Pages

Dokumentasi dideploy secara manual dari komputer lokal. Branch `main` hanya menyimpan source; branch `gh-pages` hanya menyimpan hasil HTML statis.

Satu kali saja, buka **GitHub → repository → Settings → Pages**, pilih **Deploy from a branch**, lalu pilih branch `gh-pages` dan folder `/(root)`.

Setiap ada perubahan materi:

```bash
npm run docs:deploy
```

Perintah tersebut membuat build dengan base URL `/flutter-web-docs/`, lalu mengirim isi `docs/.vitepress/dist/` ke branch `gh-pages`. Pada pemakaian pertama, `npx` mengunduh utilitas deploy sementara. Token GitHub biasa dengan izin menulis repository sudah cukup; tidak memerlukan izin `workflow`.

## Sumber materi

- `assets/app.js` — metadata, penjelasan, latihan, dan snippet 48 modul Beginner Track.
- `assets/code-data.js` — 218 snapshot source code dan 92 link package Beginner Track.
- `assets/intermediate-data.js` — 19 modul Intermediate/Advanced Track, 173 snapshot source, serta 48 link package dari folder latihan intermediate.
- `tools/build-vitepress-content.mjs` — mengubah semua sumber materi menjadi halaman Markdown dan sidebar VitePress.
- `docs/guide/` — halaman hasil generate yang siap dicari, dinavigasi, dan di-render VitePress.

Jalankan ini bila metadata atau snapshot source berubah:

```bash
npm run docs:generate
```

## Memuat ulang materi intermediate

Snapshot Intermediate dan Advanced Track berasal dari `/home/nabil/Documents/flutter-intermediete`. Jika folder itu berubah, buat ulang snapshot lalu bangun dokumentasi:

```bash
npm run docs:import-intermediate
npm run docs:build
```

## Memuat ulang source dari folder latihan

Apabila folder modul Flutter asli tersedia, buat ulang snapshot source terlebih dahulu:

```bash
python3 tools/generate_code_data.py /path/ke/flutter_beginner_lesson
npm run docs:build
```

Generator menyertakan source Dart, asset data, `pubspec.yaml`, serta file konfigurasi Android/iOS/native yang relevan. Folder hasil build dan `.dart_tool` sengaja tidak dimasukkan.
