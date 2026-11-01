---
title: Backend & Native Platform
description: Peta integrasi API dan konfigurasi Android/iOS untuk project Flutter.
---

# Backend & Native Platform

Halaman ini menjadi peta saat aplikasi Flutter mulai berhubungan dengan server atau fitur perangkat. Kode UI dan state tetap tinggal di `lib/`; konfigurasi yang khusus Android/iOS ditempatkan di folder platform masing-masing.

## Arsitektur yang dianjurkan

```text
Widget / View
    ↓ aksi pengguna
Controller / State (GetX atau state management lain)
    ↓ meminta data
Provider / Repository
    ↓ HTTP request
Backend / API
```

- `models/` mengubah JSON API menjadi object Dart yang type-safe.
- `providers/` atau `services/` menyimpan base URL, request, dan parsing response.
- `controllers/` mengelola loading, error, dan state untuk UI.
- `views/` hanya menampilkan state; jangan simpan API key atau request rumit di widget.

## Audit source saat ini

Materi yang telah terindeks memuat **67 modul**, **391 source files**, dan **140 referensi package**. Beginner Track mencakup Dart, Flutter, HTTP/API, dan GetX; Intermediate Track melanjutkan ke responsive layout dan animasi; Advanced Track membawa Firebase serta Supabase sampai auth, CRUD, storage, dan realtime data.

Snapshot lama belum menyimpan file platform Android/iOS sebagai source tab. Generator sekarang diperluas supaya saat dijalankan terhadap folder latihan asli, file konfigurasi native yang relevan ikut didokumentasikan—tanpa memasukkan output build.

## Jalur cloud backend

Setelah menguasai HTTP dan state management, lanjutkan ke track cloud berikut:

- [Firebase & Cloud Firestore](/guide/firebase-firestore-basics) untuk inisialisasi Firebase dan membaca collection.
- [Firebase Auth & Firestore CRUD](/guide/firebase-auth-crud) untuk session, verifikasi email, reset password, dan CRUD realtime.
- [Supabase Auth, Storage & CRUD](/guide/supabase-auth-storage-crud) untuk autentikasi, Postgres realtime, RLS, upload gambar, dan Storage.

## Android dan iOS

| Kebutuhan | Android | iOS |
| --- | --- | --- |
| Permission | `android/app/src/main/AndroidManifest.xml` | `ios/Runner/Info.plist` |
| Entry native | `MainActivity.kt` atau `MainActivity.java` | `AppDelegate.swift` |
| Dependency/build | `build.gradle(.kts)`, `settings.gradle(.kts)` | `Podfile`, Xcode project |
| App icon/splash | resource `mipmap`/`drawable` | `Assets.xcassets` |

::: warning Jangan taruh secret di aplikasi
API key yang benar-benar rahasia tidak aman bila diletakkan di Flutter karena binary aplikasi dapat diperiksa. Gunakan backend sebagai perantara untuk secret, validasi request, dan aturan bisnis sensitif. Untuk key publik/restricted, gunakan environment/build configuration dan batasi pemakaiannya di sisi provider.
:::

## Menghasilkan ulang source docs

Jika folder modul ada di luar repository dokumentasi ini, jalankan generator source terlebih dahulu, kemudian bangun VitePress:

```bash
python3 tools/generate_code_data.py /path/ke/flutter_beginner_lesson
npm run docs:build
```

Generator akan mengabaikan `build/`, `.dart_tool/`, dan dependency generated agar dokumentasi tetap fokus ke source yang perlu dipelajari.
