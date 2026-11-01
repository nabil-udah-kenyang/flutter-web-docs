---
title: "Introduction Flutter: Basic Syntax"
description: "Membaca kode Flutter paling dasar dengan lebih santai sebelum mulai membuat widget sederhana."
---

# Introduction Flutter: Basic Syntax

> **Beginner Track** · Modul 00A · Flutter Basic · Beginner

## Target belajar

Membaca kode Flutter paling dasar dengan lebih santai sebelum mulai membuat widget sederhana.

## Yang akan dipelajari

- Memahami bahwa Flutter membuat tampilan dari susunan widget, bukan dari HTML dan CSS.
- Mengenal alur `main`, `runApp`, `MaterialApp`, `Scaffold`, `AppBar`, `body`, dan `child`.
- Membaca tanda syntax penting seperti kurung `()`, kurung kurawal `{}`, titik koma `;`, koma `,`, dan named parameter.
- Membedakan class, object, constructor, method `build`, property, dan callback function.
- Memahami fungsi `BuildContext`, `StatelessWidget`, `StatefulWidget`, `setState`, dan `const` secara beginner-friendly.
- Melihat cara komentar, import package, nesting widget, dan format kode yang rapi.

## Ringkasan

Sebelum masuk ke folder widget sederhana, bagian ini adalah peta awal supaya orang awam tidak langsung kaget melihat banyak kurung dan nama widget. Flutter memakai bahasa Dart, jadi bentuk kodenya mirip menyusun object: ada nama widget, lalu di dalamnya ada property seperti `home`, `appBar`, `body`, `child`, atau `children`. Cara bacanya bisa dari luar ke dalam: aplikasi dimulai dari `main`, lalu `runApp` menjalankan widget utama, kemudian `MaterialApp` menyiapkan gaya aplikasi, `Scaffold` membuat kerangka halaman, dan isi layar ditempatkan di `body`. Kalau sudah paham pola ini, materi widget sederhana akan terasa jauh lebih masuk akal karena kamu tidak cuma menyalin kode, tapi tahu tiap bagian sedang bekerja untuk apa.

## Konsep kunci

- main function
- runApp
- Widget tree
- Named parameter
- child dan children
- Build method
- BuildContext
- const
- Callback
- setState

## Contoh inti

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Belajar Flutter'),
          backgroundColor: Colors.green,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Halo, pemula Flutter!',
                style: TextStyle(fontSize: 22),
              ),
              const SizedBox(height: 12),
              ElevatedButton(
                onPressed: () {
                  print('Tombol ditekan');
                },
                child: const Text('Klik aku'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

## Penjelasan

- `import 'package:flutter/material.dart';` mengambil library Material Design. Tanpa import ini, widget seperti `MaterialApp`, `Scaffold`, `Text`, `Column`, dan `ElevatedButton` tidak dikenali.
- `void main()` adalah function pertama yang dijalankan saat aplikasi dibuka. Hampir semua project Dart dan Flutter punya titik mulai bernama `main`.
- `runApp(const MyApp())` memberi tahu Flutter widget apa yang menjadi akar aplikasi. Bayangkan ini seperti menaruh halaman pertama ke layar.
- `class MyApp extends StatelessWidget` berarti kita membuat widget sendiri bernama `MyApp`. `StatelessWidget` cocok untuk tampilan yang tidak menyimpan perubahan data lokal.
- `const MyApp({super.key});` adalah constructor. Untuk pemula, cukup pahami bahwa constructor adalah pintu untuk membuat object/widget. `super.key` membantu Flutter mengenali widget saat rebuild.
- `@override` artinya method di bawahnya mengganti method bawaan dari parent class. Di Flutter, method `build` wajib ada pada widget karena dari sinilah tampilan dikembalikan.
- `Widget build(BuildContext context)` adalah function yang menghasilkan tampilan. `BuildContext` membawa informasi posisi widget di widget tree, misalnya untuk theme, navigation, dialog, snackbar, dan ukuran layar.
- `return MaterialApp(...)` berarti hasil dari `build` adalah widget `MaterialApp`. Di dalam tanda kurung, kita mengisi property menggunakan named parameter seperti `home:`, `title:`, `body:`, dan `child:`.
- `MaterialApp` adalah pembungkus aplikasi Material. Biasanya dipakai untuk konfigurasi global seperti theme, route, title, dan banner debug.
- `Scaffold` adalah kerangka halaman. Di sinilah kita biasa memasang `appBar`, `body`, `drawer`, `floatingActionButton`, dan `bottomNavigationBar`.
- `AppBar` adalah bagian header atas aplikasi. `title` menerima widget, jadi kita isi dengan `Text('Belajar Flutter')`.
- `body` adalah area utama layar. Pada contoh ini, `body` diisi `Center`, lalu `Center` punya satu `child`, yaitu `Column`.
- `child` dipakai kalau widget hanya menerima satu anak. Contohnya `Center(child: ...)`, `Container(child: ...)`, dan `Padding(child: ...)`.
- `children` dipakai kalau widget menerima banyak anak dalam bentuk list. Contohnya `Column(children: [...])`, `Row(children: [...])`, dan `Stack(children: [...])`.
- `Column` menyusun widget dari atas ke bawah. Kalau ingin menyamping, biasanya memakai `Row`.
- `mainAxisAlignment: MainAxisAlignment.center` mengatur posisi anak-anak `Column` pada sumbu utama. Karena `Column` arahnya vertikal, berarti ini menaruh isi ke tengah secara vertikal.
- `Text` menampilkan tulisan. Styling tulisan diatur lewat `TextStyle`, misalnya `fontSize`, `fontWeight`, `color`, dan `fontStyle`.
- `SizedBox(height: 12)` sering dipakai untuk memberi jarak kosong. Ini lebih rapi daripada memberi margin asal-asalan di banyak tempat.
- `ElevatedButton` adalah tombol. Property `child` menentukan isi tombol, sedangkan `onPressed` menentukan aksi saat tombol ditekan.
- `onPressed: () { ... }` adalah callback function. Artinya function kecil ini tidak langsung jalan saat halaman dibuat, tapi disimpan dulu dan baru dijalankan ketika user menekan tombol.
- `print('Tombol ditekan')` mencetak teks ke debug console. Untuk latihan awal, ini berguna untuk membuktikan bahwa sebuah function benar-benar terpanggil.
- `const` dipakai untuk widget atau nilai yang tidak berubah. Memakai `const` membantu Flutter bekerja lebih efisien dan membuat niat kode lebih jelas.
- Titik koma `;` menutup statement. Koma `,` memisahkan parameter atau item list. Kurung `()` dipakai untuk memanggil function/constructor. Kurung `{}` dipakai untuk body function/class. Kurung `[]` dipakai untuk list seperti `children`.
- Indentasi atau jarak menjorok tidak mengubah logic, tapi sangat membantu membaca widget tree. Setiap widget yang masuk ke dalam widget lain sebaiknya dibuat lebih menjorok.

## Latihan

- Baca snippet dari `main` sampai `Text('Klik aku')`, lalu tulis ulang dengan komentar fungsi tiap bagian.
- Ganti text, warna AppBar, dan ukuran font supaya terasa bahwa property mengubah tampilan.
- Tambahkan satu `Text` lagi di dalam `children` dan beri jarak dengan `SizedBox`.
- Ubah `Column` menjadi `Row`, lalu amati kenapa susunan widget berubah dari vertikal ke horizontal.
- Buat tombol kedua dengan `onPressed` yang mencetak pesan berbeda.
- Hapus satu koma atau titik koma dengan sengaja, baca error-nya, lalu kembalikan lagi agar terbiasa memahami pesan error.

## Jalankan

```bash
flutter create intro_flutter
cd intro_flutter
flutter run
```

## Struktur Folder Project Flutter

Saat kamu menjalankan `flutter create nama_project`, Flutter akan membuat satu folder project lengkap. Berikut gambaran struktur folder yang dihasilkan beserta penjelasan isi setiap bagian.

```text
nama_project/
├── android/          → Konfigurasi native Android (Gradle, Manifest, dsb.)
│   ├── app/
│   │   ├── build.gradle        → Build config modul app
│   │   └── src/main/
│   │       ├── AndroidManifest.xml  → Permission, nama app, icon
│   │       └── kotlin/…             → Kode native Android (jarang disentuh pemula)
│   ├── build.gradle              → Build config project-level
│   └── settings.gradle           → Daftar modul Gradle
│
├── ios/              → Konfigurasi native iOS (Xcode, Podfile, dsb.)
│   ├── Runner/
│   │   ├── Info.plist            → Metadata app iOS (nama, permission)
│   │   ├── AppDelegate.swift     → Entry point native iOS
│   │   └── Assets.xcassets/      → Icon & splash screen iOS
│   └── Podfile                   → Dependency manager iOS (CocoaPods)
│
├── lib/              → FOLDER UTAMA KODE DART/FLUTTER
│   └── main.dart                 → Entry point aplikasi Flutter
│
├── test/             → Unit test dan widget test
│   └── widget_test.dart          → Contoh test bawaan
│
├── build/            → Hasil build (auto-generated, jangan diedit)
│
├── web/              → Konfigurasi untuk Flutter Web
│   ├── index.html                → HTML host untuk Flutter Web
│   └── manifest.json             → PWA manifest
│
├── linux/            → Konfigurasi untuk Flutter Linux desktop
├── macos/            → Konfigurasi untuk Flutter macOS desktop
├── windows/          → Konfigurasi untuk Flutter Windows desktop
│
├── .gitignore        → File/folder yang diabaikan Git
├── .metadata         → Metadata project Flutter (auto-generated)
├── analysis_options.yaml → Aturan linting Dart
├── pubspec.yaml      → FILE KONFIGURASI UTAMA (dependency, assets, nama app)
├── pubspec.lock      → Versi dependency yang terkunci (auto-generated)
└── README.md         → Dokumentasi project
```

### Rincian

- **lib/** — Folder paling penting. Semua kode Dart dan Flutter yang kamu tulis akan berada di sini. Secara default hanya berisi `main.dart`, tapi seiring project membesar, kamu akan membuat subfolder seperti `screens/`, `widgets/`, `models/`, `controllers/`, dan `services/`.
- **lib/main.dart** — File entry point aplikasi. Di sinilah function `main()` dan `runApp()` berada. Flutter memulai semua eksekusi dari file ini. Kamu bisa menganggapnya seperti pintu gerbang utama rumah.
- **pubspec.yaml** — File konfigurasi utama project. Di sini kamu menentukan nama app, versi, dependency/package (misalnya `get:`, `http:`, `google_fonts:`), dan daftar assets (gambar, font). Setiap kali menambah package baru, kamu edit file ini lalu jalankan `flutter pub get`.
- **pubspec.lock** — File auto-generated yang mengunci versi exact setiap dependency. Jangan edit manual — file ini memastikan semua developer di tim menggunakan versi package yang sama.
- **android/** — Berisi konfigurasi native Android. File penting: `AndroidManifest.xml` (permission, nama app), `build.gradle` (SDK version, signing). Untuk pemula, folder ini jarang disentuh kecuali menambah permission (kamera, lokasi) atau mengubah nama/icon app.
- **ios/** — Berisi konfigurasi native iOS. File penting: `Info.plist` (permission, metadata), `Podfile` (dependency CocoaPods). Sama seperti `android/`, pemula jarang perlu masuk ke sini kecuali untuk setting permission atau icon.
- **web/** — Konfigurasi untuk menjalankan Flutter di browser. Berisi `index.html` sebagai host page dan `manifest.json` untuk PWA. Folder ini muncul kalau project di-create dengan dukungan web.
- **test/** — Tempat menulis unit test dan widget test. File bawaan `widget_test.dart` berisi contoh test sederhana. Testing sangat penting tapi untuk pemula, bisa dipelajari belakangan setelah paham widget dan state.
- **build/** — Folder hasil kompilasi. Isinya auto-generated oleh Flutter saat kamu menjalankan `flutter run` atau `flutter build`. Jangan edit manual dan biasanya di-`.gitignore`.
- **analysis_options.yaml** — Mengatur aturan linting dan analisis kode Dart. Misalnya menentukan apakah `print()` boleh dipakai, apakah variabel unused harus jadi warning, dsb. Bawaan Flutter sudah cukup bagus untuk pemula.

## Isi pubspec.yaml — File Konfigurasi Utama

File `pubspec.yaml` adalah jantung konfigurasi project. Berikut contoh isi dan penjelasan setiap bagiannya.

```yaml
name: nama_project
description: "Aplikasi Flutter pertamaku."
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: ^3.7.0

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.8
  get: ^4.6.6
  http: ^1.2.2
  google_fonts: ^6.2.1

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^5.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
    - assets/icons/
  fonts:
    - family: Poppins
      fonts:
        - asset: assets/fonts/Poppins-Regular.ttf
        - asset: assets/fonts/Poppins-Bold.ttf
          weight: 700
```

### Catatan

- `name` — Nama project, harus lowercase dan pakai underscore. Nama ini juga jadi nama package Dart.
- `description` — Deskripsi singkat project. Berguna kalau kamu publish sebagai package.
- `publish_to: 'none'` — Menandakan project ini bukan package publik, jadi tidak akan di-publish ke pub.dev.
- `version: 1.0.0+1` — Versi app. Format: `major.minor.patch+buildNumber`. Build number penting untuk Play Store dan App Store.
- `environment.sdk` — Versi minimum Dart SDK yang dibutuhkan. Tanda `^` berarti 'versi ini atau lebih baru yang kompatibel'.
- `dependencies` — Daftar package yang dipakai app. `flutter` wajib ada. Package lain ditambahkan di sini, lalu jalankan `flutter pub get`.
- `dev_dependencies` — Package yang hanya dibutuhkan saat development (testing, linting). Tidak masuk ke build produksi.
- `flutter.uses-material-design: true` — Mengaktifkan icon Material Design bawaan Flutter.
- `flutter.assets` — Mendaftarkan folder asset (gambar, file JSON, dsb.) agar bisa diakses dari kode Dart.
- `flutter.fonts` — Mendaftarkan font kustom. Setiap font butuh `family` (nama) dan `asset` (path file `.ttf` atau `.otf`).

## Struktur Folder lib/ yang Rapi (Best Practice)

Saat project mulai membesar, folder `lib/` perlu diorganisir. Berikut pola yang umum dipakai developer Flutter, terutama yang menggunakan GetX dan Get CLI.

```text
lib/
├── main.dart                → Entry point, runApp()
├── app/
│   ├── routes/
│   │   ├── app_pages.dart   → Daftar semua halaman & route
│   │   └── app_routes.dart  → Konstanta nama route
│   ├── modules/
│   │   ├── home/
│   │   │   ├── bindings/home_binding.dart
│   │   │   ├── controllers/home_controller.dart
│   │   │   └── views/home_view.dart
│   │   └── login/
│   │       ├── bindings/login_binding.dart
│   │       ├── controllers/login_controller.dart
│   │       └── views/login_view.dart
│   ├── data/
│   │   ├── models/           → Class model data (User, Product, dsb.)
│   │   ├── providers/        → API call / HTTP request
│   │   └── services/         → Logic bisnis (auth, storage, dsb.)
│   └── global_widgets/       → Widget yang dipakai di banyak halaman
│       ├── custom_button.dart
│       └── loading_indicator.dart
├── core/
│   ├── theme/
│   │   ├── app_colors.dart   → Konstanta warna
│   │   └── app_theme.dart    → ThemeData lengkap
│   ├── utils/
│   │   └── helpers.dart      → Fungsi utilitas
│   └── constants/
│       └── api_constants.dart → Base URL, endpoint, dsb.
└── generated/                → File auto-generated (intl, dsb.)
```

### Rincian

- **main.dart** — Titik awal. Hanya berisi `main()`, `runApp()`, dan konfigurasi `GetMaterialApp` atau `MaterialApp`. Tidak ada logic bisnis di sini.
- **app/routes/** — Mengatur navigasi. `app_pages.dart` mendaftarkan semua `GetPage`, sedangkan `app_routes.dart` berisi nama-nama route sebagai konstanta agar tidak typo.
- **app/modules/** — Setiap fitur/halaman punya folder sendiri berisi `views/` (tampilan), `controllers/` (logic), dan `bindings/` (dependency injection). Ini pola standar Get CLI.
- **app/data/** — Berisi `models/` (class data seperti `UserModel`), `providers/` (HTTP request ke API), dan `services/` (logic bisnis seperti auth, cache, dsb.).
- **core/theme/** — Menyimpan konfigurasi tema: warna, typography, ThemeData. Dengan file terpisah, mengubah tampilan seluruh app cukup di satu tempat.
- **global_widgets/** — Widget reusable yang dipakai di banyak halaman, seperti `CustomButton`, `LoadingIndicator`, `EmptyState`, dsb.

## Visualisasi Widget Tree

Flutter membangun tampilan dari pohon widget (widget tree). Setiap widget bisa punya child atau children. Berikut visualisasi widget tree dari snippet kode di atas.

```text
MaterialApp
└── Scaffold
    ├── AppBar
    │   └── Text('Belajar Flutter')
    └── body: Center
        └── Column
            ├── Text('Halo, pemula Flutter!')
            ├── SizedBox(height: 12)
            └── ElevatedButton
                └── Text('Klik aku')
```

### Rincian

- **Cara baca widget tree** — Baca dari atas ke bawah. Widget paling atas (`MaterialApp`) membungkus semuanya. Semakin ke dalam (indentasi lebih dalam), semakin detail/kecil widget-nya. Ini mirip seperti membaca HTML dari tag terluar ke tag terdalam.
- **Parent & Child** — `Scaffold` adalah child dari `MaterialApp`, dan parent dari `AppBar` serta `Center`. Hubungan parent-child ini menentukan posisi dan ukuran widget di layar.
- **child vs children** — Widget yang hanya menerima SATU anak menggunakan `child:` (contoh: `Center`, `Container`). Widget yang menerima BANYAK anak menggunakan `children: [...]` (contoh: `Column`, `Row`, `Stack`).

## Referensi Simbol Syntax Dart/Flutter

Kode Flutter penuh dengan simbol-simbol yang bisa membingungkan pemula. Berikut panduan cepat setiap simbol yang sering kamu temui.

### Referensi cepat

| Simbol | Nama | Kegunaan |
| --- | --- | --- |
| `()` | Parentheses | Memanggil function atau constructor. Contoh: `runApp()`, `Text('Halo')` |
| `{}` | Curly Braces | Body dari function/class, atau named parameter. Contoh: `void main() { }`, `MyApp({super.key})` |
| `[]` | Square Brackets | Membuat List. Contoh: `children: [Text('A'), Text('B')]` |
| `;` | Semicolon | Menutup statement. Setiap perintah Dart diakhiri titik koma, kecuali di dalam kurung kurawal class/function. |
| `,` | Comma | Memisahkan parameter, item list, atau property. Trailing comma di akhir sangat disarankan untuk format rapi. |
| `:` | Colon | Menghubungkan nama parameter dengan nilainya. Contoh: `title: Text('Home')`, `color: Colors.red` |
| `=>` | Arrow | Shorthand untuk function yang cuma return satu expression. Contoh: `String greet() => 'Halo';` |
| `@override` | Annotation | Menandai bahwa method ini mengganti method dari parent class. Wajib untuk `build()` di StatelessWidget/StatefulWidget. |
| `const` | Constant | Menandai nilai/widget yang tidak berubah. Membantu Flutter mengoptimasi performa rebuild. |
| `final` | Final Variable | Variabel yang hanya bisa diisi sekali. Cocok untuk data dari constructor. Contoh: `final String name;` |
| `?` | Nullable | Menandai bahwa nilai boleh `null`. Contoh: `String? nama;` berarti `nama` bisa berisi String atau null. |
| `!` | Bang Operator | Memaksa nilai nullable dianggap non-null. Hati-hati, bisa crash kalau nilainya benar-benar null. |
| `??` | Null-aware | Memberikan nilai default kalau sebelahnya null. Contoh: `nama ?? 'Anonim'` |
| `${}` | String Interpolation | Menyisipkan variabel/expression ke dalam String. Contoh: `'Halo ${nama}'` |

## StatelessWidget vs StatefulWidget

Dua jenis widget dasar di Flutter. Memahami perbedaannya akan membantu kamu memilih kapan harus pakai yang mana.

### StatelessWidget

- Tampilan TIDAK berubah setelah dibuat
- Tidak punya `State` internal
- Hanya punya method `build()` saja
- Lebih ringan dan sederhana
- Contoh: halaman About, icon statis, label teks
- Cocok untuk UI yang datanya dari luar (parent)

```dart
class Kartu extends StatelessWidget {
  final String judul;
  const Kartu({super.key, required this.judul});

  @override
  Widget build(BuildContext context) {
    return Text(judul);
  }
}
```

### StatefulWidget

- Tampilan BISA berubah saat runtime
- Punya `State` internal yang bisa di-update
- Punya `createState()` + class `State` terpisah
- Sedikit lebih kompleks
- Contoh: counter, form input, toggle, animasi
- Pakai `setState()` untuk trigger rebuild UI

```dart
class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int angka = 0;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => setState(() => angka++),
      child: Text('Klik: $angka'),
    );
  }
}
```

## Alur Eksekusi Aplikasi Flutter

Memahami urutan bagaimana Flutter menjalankan kode dari awal sampai tampilan muncul di layar.

### Urutan

1. **main()** — Dart mulai dari function `main()`. Ini adalah titik masuk semua aplikasi Dart.
2. **runApp()** — `runApp()` menerima satu widget dan menjadikannya root dari widget tree. Widget ini akan mengisi seluruh layar.
3. **MaterialApp** — `MaterialApp` menyiapkan konfigurasi global: theme, routes, locale, dan Material Design style.
4. **Scaffold** — `Scaffold` membangun kerangka halaman: area untuk AppBar di atas, body di tengah, FAB, drawer, bottom nav.
5. **build()** — Method `build()` dipanggil untuk menghasilkan widget tree. Setiap kali state berubah, `build()` dipanggil ulang.
6. **Render** — Flutter engine mengubah widget tree menjadi piksel di layar melalui proses layout, paint, dan compositing.

## Full source

_Source snapshot belum tersedia untuk modul ini._
