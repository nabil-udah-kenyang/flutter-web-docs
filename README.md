# Dart & Flutter Beginner Docs

Created by **Naufal Nabil**. © 2026 Naufal Nabil.

Static documentation site untuk repository latihan Dart dan Flutter.

## Cara Pakai

Buka intro docs:

```text
docs/index.html
```

Halaman materi lengkap:

```text
docs/docs.html
```

Atau aktifkan GitHub Pages dari folder `docs/` di repository.

## Struktur

```text
docs/
  index.html
  docs.html
  assets/
    styles.css
    app.js
    code-data.js
```

Project ini memakai Tailwind CDN, jadi tidak butuh build step.

## Generate Full Source Code

Kalau folder modul `00_...` sampai `46_...` ada di root repo, jalankan:

```bash
python3 docs/tools/generate_code_data.py
```

Kalau mau generate dari clone/repo lain:

```bash
python3 docs/tools/generate_code_data.py /path/ke/flutter_beginner_lesson
```

Script ini akan mengisi `docs/assets/code-data.js` dari `lib/**/*.dart`, `pubspec.yaml`, dan file Dart dasar di `00_belajar_dart`.
File model/data di luar `lib` seperti `assets/**/*.dart` atau `assets/**/*.json` juga ikut dimasukkan.
