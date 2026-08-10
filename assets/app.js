const modules = [
  {
    id: "00",
    slug: "belajar-dart",
    title: "Belajar Dart Fundamental",
    track: "Dart Core",
    folder: "00_belajar_dart",
    level: "Beginner",
    goal: "Membangun fondasi kuat bahasa pemrograman Dart sebelum masuk ke pengembangan aplikasi Flutter.",
    files: [
      "01_variable_list.dart",
      "02_tipe_data.dart",
      "03_function.dart",
      "04_looping.dart",
      "05_conditional.dart",
      "06_null_safety.dart",
      "07_class_object.dart",
      "08_async_future.dart",
      "09_collection_methods.dart"
    ],
    learn: [
      "Memahami deklarasi variabel (`var`, `final`, `const`) dan tipe data dasar (`String`, `int`, `double`, `num`, `bool`, `List`, `Map`).",
      "Membuat fungsi (Functions) baik `void`, fungsi ber-return type, hingga penggunaan *Named Parameters* (`{required ...}`).",
      "Menguasai alur kontrol perulangan (`for`, `for-in`, `while`) dan percabangan (`if-else`, `switch-case`).",
      "Memahami *Sound Null Safety* (operator `?`, `??`, `!`) untuk mencegah kesalahan NullPointer secara dini.",
      "Menguasai Object-Oriented Programming (OOP): membuat Class, Objek, Properti, dan Named Constructor.",
      "Memahami pemrograman Asinkron (`Future`, `async`, `await`) untuk persiapan mengambil data API di Flutter.",
      "Menggunakan manipulasi koleksi data modern seperti `.map()`, `.where()`, dan Operator Spread (`...`)."
    ],
    detail: "Dart adalah bahasa pemrograman modern berikatan kuat (strongly typed language) buatan Google yang digunakan sebagai mesin penggerak utama Flutter. Di modul fondasi ini, kamu tidak hanya belajar sintaksis dasar, tetapi dibimbing untuk memahami cara berpikir sistematis: bagaimana data disimpan, bagaimana fungsi beraksi, bagaimana mencegah crash akibat data kosong (`null`), serta bagaimana pemrograman Objek (OOP) dan Asinkron (`async`/`await`) menjadi tulang punggung pembuatan aplikasi Flutter berkualitas.",
    concept: [
      "Variable & Type Inference",
      "String Interpolation",
      "List & Map Data Structure",
      "Function & Named Parameters",
      "Control Flow & Loops",
      "Sound Null Safety (?, ??, !)",
      "OOP Class & Named Constructor",
      "Async, Await & Future",
      "Collection Methods (map, where)"
    ],
    snippet: `class Pakaian {
  String jenis;
  String warna;

  // Named Constructor dengan parameter wajib
  Pakaian({required this.jenis, required this.warna});

  void info() => print("Pakaian: $jenis ($warna)");
}

Future<void> main() async {
  final pakaian1 = Pakaian(jenis: "Baju Kaos", warna: "Hitam");
  pakaian1.info();

  // Contoh Async & Future sederahana
  await Future.delayed(Duration(seconds: 1));
  print("Dart Fundamental Siap!");
}`,
    explanation: [
      "`class Pakaian` — Struktur cetak biru (blueprint) Objek dalam Dart.",
      "`Pakaian({required this.jenis, required this.warna})` — Direct Named Constructor untuk memastikan pembuatan objek lebih jelas dan aman dari data kosong.",
      "`final` — Kata kunci untuk membuat variabel yang nilainya hanya bisa diisi satu kali saat runtime.",
      "`Future<void> main() async` — Menandai fungsi `main` berjalan secara asinkron.",
      "`await Future.delayed(...)` — Menghentikan eksekusi sejenak (1 detik) di latar belakang tanpa memblokir sistem."
    ],
    exercise: [
      "Buka file `01_variable_list.dart` hingga `03_function.dart`, coba jalankan dengan perintah `dart <nama_file>` di terminal.",
      "Buat class `Mahasiswa` dengan properti `nama`, `nim`, dan `ipk` menggunakan Named Constructor `required`.",
      "Buat fungsi asinkron `Future<String> fetchUser()` yang mengembalikan nama user setelah menunggu 2 detik.",
      "Gunakan fungsi `.where()` untuk menyaring daftar angka genap dari sebuah List."
    ],
    run: "dart 01_variable_list.dart"
  },
  {
    id: "00A",
    slug: "introduction-flutter-basic-syntax",
    title: "Introduction Flutter: Basic Syntax",
    track: "Flutter Basic",
    folder: "00_introduction_flutter",
    level: "Beginner",
    goal: "Membaca kode Flutter paling dasar dengan lebih santai sebelum mulai membuat widget sederhana.",
    files: ["intro/basic_syntax.dart", "intro/widget_tree.dart"],
    learn: [
      "Memahami bahwa Flutter membuat tampilan dari susunan widget, bukan dari HTML dan CSS.",
      "Mengenal alur `main`, `runApp`, `MaterialApp`, `Scaffold`, `AppBar`, `body`, dan `child`.",
      "Membaca tanda syntax penting seperti kurung `()`, kurung kurawal `{}`, titik koma `;`, koma `,`, dan named parameter.",
      "Membedakan class, object, constructor, method `build`, property, dan callback function.",
      "Memahami fungsi `BuildContext`, `StatelessWidget`, `StatefulWidget`, `setState`, dan `const` secara beginner-friendly.",
      "Melihat cara komentar, import package, nesting widget, dan format kode yang rapi."
    ],
    detail: "Sebelum masuk ke folder widget sederhana, bagian ini adalah peta awal supaya orang awam tidak langsung kaget melihat banyak kurung dan nama widget. Flutter memakai bahasa Dart, jadi bentuk kodenya mirip menyusun object: ada nama widget, lalu di dalamnya ada property seperti `home`, `appBar`, `body`, `child`, atau `children`. Cara bacanya bisa dari luar ke dalam: aplikasi dimulai dari `main`, lalu `runApp` menjalankan widget utama, kemudian `MaterialApp` menyiapkan gaya aplikasi, `Scaffold` membuat kerangka halaman, dan isi layar ditempatkan di `body`. Kalau sudah paham pola ini, materi widget sederhana akan terasa jauh lebih masuk akal karena kamu tidak cuma menyalin kode, tapi tahu tiap bagian sedang bekerja untuk apa.",
    concept: ["main function", "runApp", "Widget tree", "Named parameter", "child dan children", "Build method", "BuildContext", "const", "Callback", "setState"],
    snippet: `import 'package:flutter/material.dart';

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
}`,
    explanation: [
      "`import 'package:flutter/material.dart';` mengambil library Material Design. Tanpa import ini, widget seperti `MaterialApp`, `Scaffold`, `Text`, `Column`, dan `ElevatedButton` tidak dikenali.",
      "`void main()` adalah function pertama yang dijalankan saat aplikasi dibuka. Hampir semua project Dart dan Flutter punya titik mulai bernama `main`.",
      "`runApp(const MyApp())` memberi tahu Flutter widget apa yang menjadi akar aplikasi. Bayangkan ini seperti menaruh halaman pertama ke layar.",
      "`class MyApp extends StatelessWidget` berarti kita membuat widget sendiri bernama `MyApp`. `StatelessWidget` cocok untuk tampilan yang tidak menyimpan perubahan data lokal.",
      "`const MyApp({super.key});` adalah constructor. Untuk pemula, cukup pahami bahwa constructor adalah pintu untuk membuat object/widget. `super.key` membantu Flutter mengenali widget saat rebuild.",
      "`@override` artinya method di bawahnya mengganti method bawaan dari parent class. Di Flutter, method `build` wajib ada pada widget karena dari sinilah tampilan dikembalikan.",
      "`Widget build(BuildContext context)` adalah function yang menghasilkan tampilan. `BuildContext` membawa informasi posisi widget di widget tree, misalnya untuk theme, navigation, dialog, snackbar, dan ukuran layar.",
      "`return MaterialApp(...)` berarti hasil dari `build` adalah widget `MaterialApp`. Di dalam tanda kurung, kita mengisi property menggunakan named parameter seperti `home:`, `title:`, `body:`, dan `child:`.",
      "`MaterialApp` adalah pembungkus aplikasi Material. Biasanya dipakai untuk konfigurasi global seperti theme, route, title, dan banner debug.",
      "`Scaffold` adalah kerangka halaman. Di sinilah kita biasa memasang `appBar`, `body`, `drawer`, `floatingActionButton`, dan `bottomNavigationBar`.",
      "`AppBar` adalah bagian header atas aplikasi. `title` menerima widget, jadi kita isi dengan `Text('Belajar Flutter')`.",
      "`body` adalah area utama layar. Pada contoh ini, `body` diisi `Center`, lalu `Center` punya satu `child`, yaitu `Column`.",
      "`child` dipakai kalau widget hanya menerima satu anak. Contohnya `Center(child: ...)`, `Container(child: ...)`, dan `Padding(child: ...)`.",
      "`children` dipakai kalau widget menerima banyak anak dalam bentuk list. Contohnya `Column(children: [...])`, `Row(children: [...])`, dan `Stack(children: [...])`.",
      "`Column` menyusun widget dari atas ke bawah. Kalau ingin menyamping, biasanya memakai `Row`.",
      "`mainAxisAlignment: MainAxisAlignment.center` mengatur posisi anak-anak `Column` pada sumbu utama. Karena `Column` arahnya vertikal, berarti ini menaruh isi ke tengah secara vertikal.",
      "`Text` menampilkan tulisan. Styling tulisan diatur lewat `TextStyle`, misalnya `fontSize`, `fontWeight`, `color`, dan `fontStyle`.",
      "`SizedBox(height: 12)` sering dipakai untuk memberi jarak kosong. Ini lebih rapi daripada memberi margin asal-asalan di banyak tempat.",
      "`ElevatedButton` adalah tombol. Property `child` menentukan isi tombol, sedangkan `onPressed` menentukan aksi saat tombol ditekan.",
      "`onPressed: () { ... }` adalah callback function. Artinya function kecil ini tidak langsung jalan saat halaman dibuat, tapi disimpan dulu dan baru dijalankan ketika user menekan tombol.",
      "`print('Tombol ditekan')` mencetak teks ke debug console. Untuk latihan awal, ini berguna untuk membuktikan bahwa sebuah function benar-benar terpanggil.",
      "`const` dipakai untuk widget atau nilai yang tidak berubah. Memakai `const` membantu Flutter bekerja lebih efisien dan membuat niat kode lebih jelas.",
      "Titik koma `;` menutup statement. Koma `,` memisahkan parameter atau item list. Kurung `()` dipakai untuk memanggil function/constructor. Kurung `{}` dipakai untuk body function/class. Kurung `[]` dipakai untuk list seperti `children`.",
      "Indentasi atau jarak menjorok tidak mengubah logic, tapi sangat membantu membaca widget tree. Setiap widget yang masuk ke dalam widget lain sebaiknya dibuat lebih menjorok."
    ],
    exercise: [
      "Baca snippet dari `main` sampai `Text('Klik aku')`, lalu tulis ulang dengan komentar fungsi tiap bagian.",
      "Ganti text, warna AppBar, dan ukuran font supaya terasa bahwa property mengubah tampilan.",
      "Tambahkan satu `Text` lagi di dalam `children` dan beri jarak dengan `SizedBox`.",
      "Ubah `Column` menjadi `Row`, lalu amati kenapa susunan widget berubah dari vertikal ke horizontal.",
      "Buat tombol kedua dengan `onPressed` yang mencetak pesan berbeda.",
      "Hapus satu koma atau titik koma dengan sengaja, baca error-nya, lalu kembalikan lagi agar terbiasa memahami pesan error."
    ],
    deepDive: [
      {
        title: "Struktur Folder Project Flutter",
        type: "folder-tree",
        description: "Saat kamu menjalankan `flutter create nama_project`, Flutter akan membuat satu folder project lengkap. Berikut gambaran struktur folder yang dihasilkan beserta penjelasan isi setiap bagian.",
        tree: `nama_project/
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
└── README.md         → Dokumentasi project`,
        items: [
          {
            icon: "folder-code",
            name: "lib/",
            color: "cyan",
            detail: "Folder paling penting. Semua kode Dart dan Flutter yang kamu tulis akan berada di sini. Secara default hanya berisi `main.dart`, tapi seiring project membesar, kamu akan membuat subfolder seperti `screens/`, `widgets/`, `models/`, `controllers/`, dan `services/`."
          },
          {
            icon: "file-code-2",
            name: "lib/main.dart",
            color: "cyan",
            detail: "File entry point aplikasi. Di sinilah function `main()` dan `runApp()` berada. Flutter memulai semua eksekusi dari file ini. Kamu bisa menganggapnya seperti pintu gerbang utama rumah."
          },
          {
            icon: "package",
            name: "pubspec.yaml",
            color: "emerald",
            detail: "File konfigurasi utama project. Di sini kamu menentukan nama app, versi, dependency/package (misalnya `get:`, `http:`, `google_fonts:`), dan daftar assets (gambar, font). Setiap kali menambah package baru, kamu edit file ini lalu jalankan `flutter pub get`."
          },
          {
            icon: "lock",
            name: "pubspec.lock",
            color: "slate",
            detail: "File auto-generated yang mengunci versi exact setiap dependency. Jangan edit manual — file ini memastikan semua developer di tim menggunakan versi package yang sama."
          },
          {
            icon: "smartphone",
            name: "android/",
            color: "emerald",
            detail: "Berisi konfigurasi native Android. File penting: `AndroidManifest.xml` (permission, nama app), `build.gradle` (SDK version, signing). Untuk pemula, folder ini jarang disentuh kecuali menambah permission (kamera, lokasi) atau mengubah nama/icon app."
          },
          {
            icon: "tablet-smartphone",
            name: "ios/",
            color: "slate",
            detail: "Berisi konfigurasi native iOS. File penting: `Info.plist` (permission, metadata), `Podfile` (dependency CocoaPods). Sama seperti `android/`, pemula jarang perlu masuk ke sini kecuali untuk setting permission atau icon."
          },
          {
            icon: "globe",
            name: "web/",
            color: "violet",
            detail: "Konfigurasi untuk menjalankan Flutter di browser. Berisi `index.html` sebagai host page dan `manifest.json` untuk PWA. Folder ini muncul kalau project di-create dengan dukungan web."
          },
          {
            icon: "flask-conical",
            name: "test/",
            color: "amber",
            detail: "Tempat menulis unit test dan widget test. File bawaan `widget_test.dart` berisi contoh test sederhana. Testing sangat penting tapi untuk pemula, bisa dipelajari belakangan setelah paham widget dan state."
          },
          {
            icon: "hammer",
            name: "build/",
            color: "slate",
            detail: "Folder hasil kompilasi. Isinya auto-generated oleh Flutter saat kamu menjalankan `flutter run` atau `flutter build`. Jangan edit manual dan biasanya di-`.gitignore`."
          },
          {
            icon: "clipboard-list",
            name: "analysis_options.yaml",
            color: "slate",
            detail: "Mengatur aturan linting dan analisis kode Dart. Misalnya menentukan apakah `print()` boleh dipakai, apakah variabel unused harus jadi warning, dsb. Bawaan Flutter sudah cukup bagus untuk pemula."
          }
        ]
      },
      {
        title: "Isi pubspec.yaml — File Konfigurasi Utama",
        type: "code-explain",
        description: "File `pubspec.yaml` adalah jantung konfigurasi project. Berikut contoh isi dan penjelasan setiap bagiannya.",
        code: `name: nama_project
description: \"Aplikasi Flutter pertamaku.\"
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
          weight: 700`,
        language: "yaml",
        codeExplanation: [
          "`name` — Nama project, harus lowercase dan pakai underscore. Nama ini juga jadi nama package Dart.",
          "`description` — Deskripsi singkat project. Berguna kalau kamu publish sebagai package.",
          "`publish_to: 'none'` — Menandakan project ini bukan package publik, jadi tidak akan di-publish ke pub.dev.",
          "`version: 1.0.0+1` — Versi app. Format: `major.minor.patch+buildNumber`. Build number penting untuk Play Store dan App Store.",
          "`environment.sdk` — Versi minimum Dart SDK yang dibutuhkan. Tanda `^` berarti 'versi ini atau lebih baru yang kompatibel'.",
          "`dependencies` — Daftar package yang dipakai app. `flutter` wajib ada. Package lain ditambahkan di sini, lalu jalankan `flutter pub get`.",
          "`dev_dependencies` — Package yang hanya dibutuhkan saat development (testing, linting). Tidak masuk ke build produksi.",
          "`flutter.uses-material-design: true` — Mengaktifkan icon Material Design bawaan Flutter.",
          "`flutter.assets` — Mendaftarkan folder asset (gambar, file JSON, dsb.) agar bisa diakses dari kode Dart.",
          "`flutter.fonts` — Mendaftarkan font kustom. Setiap font butuh `family` (nama) dan `asset` (path file `.ttf` atau `.otf`)."
        ]
      },
      {
        title: "Struktur Folder lib/ yang Rapi (Best Practice)",
        type: "folder-tree-mini",
        description: "Saat project mulai membesar, folder `lib/` perlu diorganisir. Berikut pola yang umum dipakai developer Flutter, terutama yang menggunakan GetX dan Get CLI.",
        tree: `lib/
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
└── generated/                → File auto-generated (intl, dsb.)`,
        items: [
          {
            icon: "log-in",
            name: "main.dart",
            color: "cyan",
            detail: "Titik awal. Hanya berisi `main()`, `runApp()`, dan konfigurasi `GetMaterialApp` atau `MaterialApp`. Tidak ada logic bisnis di sini."
          },
          {
            icon: "map",
            name: "app/routes/",
            color: "violet",
            detail: "Mengatur navigasi. `app_pages.dart` mendaftarkan semua `GetPage`, sedangkan `app_routes.dart` berisi nama-nama route sebagai konstanta agar tidak typo."
          },
          {
            icon: "boxes",
            name: "app/modules/",
            color: "emerald",
            detail: "Setiap fitur/halaman punya folder sendiri berisi `views/` (tampilan), `controllers/` (logic), dan `bindings/` (dependency injection). Ini pola standar Get CLI."
          },
          {
            icon: "database",
            name: "app/data/",
            color: "amber",
            detail: "Berisi `models/` (class data seperti `UserModel`), `providers/` (HTTP request ke API), dan `services/` (logic bisnis seperti auth, cache, dsb.)."
          },
          {
            icon: "palette",
            name: "core/theme/",
            color: "violet",
            detail: "Menyimpan konfigurasi tema: warna, typography, ThemeData. Dengan file terpisah, mengubah tampilan seluruh app cukup di satu tempat."
          },
          {
            icon: "puzzle",
            name: "global_widgets/",
            color: "cyan",
            detail: "Widget reusable yang dipakai di banyak halaman, seperti `CustomButton`, `LoadingIndicator`, `EmptyState`, dsb."
          }
        ]
      },
      {
        title: "Visualisasi Widget Tree",
        type: "widget-tree",
        description: "Flutter membangun tampilan dari pohon widget (widget tree). Setiap widget bisa punya child atau children. Berikut visualisasi widget tree dari snippet kode di atas.",
        tree: `MaterialApp
└── Scaffold
    ├── AppBar
    │   └── Text('Belajar Flutter')
    └── body: Center
        └── Column
            ├── Text('Halo, pemula Flutter!')
            ├── SizedBox(height: 12)
            └── ElevatedButton
                └── Text('Klik aku')`,
        items: [
          {
            icon: "tree-deciduous",
            name: "Cara baca widget tree",
            color: "cyan",
            detail: "Baca dari atas ke bawah. Widget paling atas (`MaterialApp`) membungkus semuanya. Semakin ke dalam (indentasi lebih dalam), semakin detail/kecil widget-nya. Ini mirip seperti membaca HTML dari tag terluar ke tag terdalam."
          },
          {
            icon: "git-branch",
            name: "Parent & Child",
            color: "emerald",
            detail: "`Scaffold` adalah child dari `MaterialApp`, dan parent dari `AppBar` serta `Center`. Hubungan parent-child ini menentukan posisi dan ukuran widget di layar."
          },
          {
            icon: "split",
            name: "child vs children",
            color: "violet",
            detail: "Widget yang hanya menerima SATU anak menggunakan `child:` (contoh: `Center`, `Container`). Widget yang menerima BANYAK anak menggunakan `children: [...]` (contoh: `Column`, `Row`, `Stack`)."
          }
        ]
      },
      {
        title: "Referensi Simbol Syntax Dart/Flutter",
        type: "symbol-table",
        description: "Kode Flutter penuh dengan simbol-simbol yang bisa membingungkan pemula. Berikut panduan cepat setiap simbol yang sering kamu temui.",
        symbols: [
          { symbol: "()", name: "Parentheses", usage: "Memanggil function atau constructor. Contoh: `runApp()`, `Text('Halo')`" },
          { symbol: "{}", name: "Curly Braces", usage: "Body dari function/class, atau named parameter. Contoh: `void main() { }`, `MyApp({super.key})`" },
          { symbol: "[]", name: "Square Brackets", usage: "Membuat List. Contoh: `children: [Text('A'), Text('B')]`" },
          { symbol: ";", name: "Semicolon", usage: "Menutup statement. Setiap perintah Dart diakhiri titik koma, kecuali di dalam kurung kurawal class/function." },
          { symbol: ",", name: "Comma", usage: "Memisahkan parameter, item list, atau property. Trailing comma di akhir sangat disarankan untuk format rapi." },
          { symbol: ":", name: "Colon", usage: "Menghubungkan nama parameter dengan nilainya. Contoh: `title: Text('Home')`, `color: Colors.red`" },
          { symbol: "=>", name: "Arrow", usage: "Shorthand untuk function yang cuma return satu expression. Contoh: `String greet() => 'Halo';`" },
          { symbol: "@override", name: "Annotation", usage: "Menandai bahwa method ini mengganti method dari parent class. Wajib untuk `build()` di StatelessWidget/StatefulWidget." },
          { symbol: "const", name: "Constant", usage: "Menandai nilai/widget yang tidak berubah. Membantu Flutter mengoptimasi performa rebuild." },
          { symbol: "final", name: "Final Variable", usage: "Variabel yang hanya bisa diisi sekali. Cocok untuk data dari constructor. Contoh: `final String name;`" },
          { symbol: "?", name: "Nullable", usage: "Menandai bahwa nilai boleh `null`. Contoh: `String? nama;` berarti `nama` bisa berisi String atau null." },
          { symbol: "!", name: "Bang Operator", usage: "Memaksa nilai nullable dianggap non-null. Hati-hati, bisa crash kalau nilainya benar-benar null." },
          { symbol: "??", name: "Null-aware", usage: "Memberikan nilai default kalau sebelahnya null. Contoh: `nama ?? 'Anonim'`" },
          { symbol: "${}", name: "String Interpolation", usage: "Menyisipkan variabel/expression ke dalam String. Contoh: `'Halo ${nama}'`" }
        ]
      },
      {
        title: "StatelessWidget vs StatefulWidget",
        type: "comparison",
        description: "Dua jenis widget dasar di Flutter. Memahami perbedaannya akan membantu kamu memilih kapan harus pakai yang mana.",
        left: {
          title: "StatelessWidget",
          color: "cyan",
          points: [
            "Tampilan TIDAK berubah setelah dibuat",
            "Tidak punya `State` internal",
            "Hanya punya method `build()` saja",
            "Lebih ringan dan sederhana",
            "Contoh: halaman About, icon statis, label teks",
            "Cocok untuk UI yang datanya dari luar (parent)"
          ],
          code: `class Kartu extends StatelessWidget {
  final String judul;
  const Kartu({super.key, required this.judul});

  @override
  Widget build(BuildContext context) {
    return Text(judul);
  }
}`
        },
        right: {
          title: "StatefulWidget",
          color: "amber",
          points: [
            "Tampilan BISA berubah saat runtime",
            "Punya `State` internal yang bisa di-update",
            "Punya `createState()` + class `State` terpisah",
            "Sedikit lebih kompleks",
            "Contoh: counter, form input, toggle, animasi",
            "Pakai `setState()` untuk trigger rebuild UI"
          ],
          code: `class Counter extends StatefulWidget {
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
}`
        }
      },
      {
        title: "Alur Eksekusi Aplikasi Flutter",
        type: "flow",
        description: "Memahami urutan bagaimana Flutter menjalankan kode dari awal sampai tampilan muncul di layar.",
        steps: [
          { step: "1", label: "main()", detail: "Dart mulai dari function `main()`. Ini adalah titik masuk semua aplikasi Dart." },
          { step: "2", label: "runApp()", detail: "`runApp()` menerima satu widget dan menjadikannya root dari widget tree. Widget ini akan mengisi seluruh layar." },
          { step: "3", label: "MaterialApp", detail: "`MaterialApp` menyiapkan konfigurasi global: theme, routes, locale, dan Material Design style." },
          { step: "4", label: "Scaffold", detail: "`Scaffold` membangun kerangka halaman: area untuk AppBar di atas, body di tengah, FAB, drawer, bottom nav." },
          { step: "5", label: "build()", detail: "Method `build()` dipanggil untuk menghasilkan widget tree. Setiap kali state berubah, `build()` dipanggil ulang." },
          { step: "6", label: "Render", detail: "Flutter engine mengubah widget tree menjadi piksel di layar melalui proses layout, paint, dan compositing." }
        ]
      }
    ],
    run: "flutter create intro_flutter\ncd intro_flutter\nflutter run"
  },
  {
    id: "01",
    slug: "widget-sederhana",
    title: "Widget Sederhana",
    track: "Flutter Basic",
    folder: "01_widget_sederhana",
    level: "Beginner",
    goal: "Mengenal struktur aplikasi Flutter paling dasar.",
    files: ["lib/main.dart"],
    learn: [
      "Memahami `runApp` sebagai pintu masuk aplikasi Flutter.",
      "Mengenal `MaterialApp`, `Scaffold`, `AppBar`, `Container`, dan `ElevatedButton`.",
      "Menjalankan aksi sederhana lewat `onPressed`.",
      "Melihat hubungan antara widget parent dan child."
    ],
    detail: "Modul pertama Flutter ini memperlihatkan konsep inti bahwa seluruh tampilan layar aplikasi Flutter dibangun dari susunan widget (Widget Tree). Kamu mulai dari halaman sederhana, lalu memberi struktur kerangka dengan Scaffold dan AppBar. Tombol (ElevatedButton) menjadi contoh interaksi paling kecil yang memicu sebuah fungsi saat ditekan.",
    concept: ["Widget tree", "MaterialApp", "Scaffold", "AppBar", "Body", "Button action"],
    snippet: `void main() {
  runApp(HomePage());
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text("Home")),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              log("terimakasih udah di klik");
            },
            child: Text("Klik aku"),
          ),
        ),
      ),
    );
  }
}`,
    explanation: [
      "`void main()` — Titik gerbang pertama saat aplikasi dijalankan.",
      "`runApp(...)` — Memasang widget utama sebagai fondasi awal di layar HP.",
      "`MaterialApp` — Konfigurasi global yang menyediakan tema, navigasi, dan aturan desain ala Google (Material Design). `debugShowCheckedModeBanner: false` menghilangkan pita merah 'DEBUG'.",
      "`Scaffold` — Struktur kerangka baku halaman mobile. Menyediakan tempat untuk header (`appBar`), area utama (`body`), tombol aksi (`floatingActionButton`), dan drawer menu.",
      "`Center` & `ElevatedButton` — `Center` menempatkan widget anaknya di tengah layar, sedangkan `ElevatedButton` membuat tombol timbul yang bisa di-klik.",
      "`onPressed: () { ... }` — Callback function (fungsi respon) yang langsung dieksekusi begitu tombol ditekan oleh pengguna."
    ],
    exercise: ["Ganti warna `AppBar` dan `backgroundColor`.", "Tambahkan dua tombol dengan aksi berbeda.", "Coba ganti `Center` dengan `Column`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "02",
    slug: "widget-layout",
    title: "Widget Layout",
    track: "Flutter Basic",
    folder: "02_widget_layout",
    level: "Beginner",
    goal: "Belajar menyusun widget di layar dengan layout dasar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `Column` untuk menyusun widget vertikal.",
      "Menggunakan `Row` untuk menyusun widget horizontal.",
      "Mengatur posisi dengan `mainAxisAlignment` dan `crossAxisAlignment`.",
      "Memahami ukuran dan warna lewat `Container`."
    ],
    detail: "Layout adalah fondasi utama dalam mendesain UI Flutter. Hampir 90% tampilan aplikasi nyata diciptakan dari kombinasi `Row` (baris kesamping), `Column` (kolom ke bawah), `Container` (kotak serbaguna), dan `Padding` (jarak dalam). Di modul ini, kamu akan melatih intuisi dalam mengatur arah sumbu utama (main axis) dan sumbu silang (cross axis).",
    concept: ["Column", "Row", "Container", "Alignment", "Spacing", "Padding"],
    snippet: `Scaffold(
  appBar: AppBar(title: const Text("Widget Layout")),
  body: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Container(width: 100, height: 100, color: Colors.red),
      Container(width: 100, height: 100, color: Colors.green),
    ],
  ),
);`,
    explanation: [
      "`Column` — Menyusun anak-anaknya (`children`) secara vertikal dari atas ke bawah.",
      "`Row` — Alternatif dari `Column`, menyusun anak-anaknya secara horizontal dari kiri ke kanan.",
      "`mainAxisAlignment: MainAxisAlignment.center` — Menata posisi elemen di sepanjang sumbu utama. Untuk `Column`, sumbu utamanya adalah vertikal (atas-bawah). Untuk `Row`, sumbu utamanya adalah horizontal (kiri-kanan).",
      "`crossAxisAlignment` — Menata posisi elemen di sumbu silang (kebalikan dari sumbu utama).",
      "`Container` — Widget kotak serbaguna untuk mengatur `width` (lebar), `height` (tinggi), `color` (warna latar), `padding` (jarak dalam), dan `margin` (jarak luar).",
      "`children: [...]` — Menerima List widget karena `Column` atau `Row` bisa menampung banyak elemen sekaligus."
    ],
    exercise: ["Ubah `Column` menjadi `Row`.", "Tambahkan `SizedBox` sebagai jarak antar kotak.", "Bungkus kotak dengan `Padding`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "03",
    slug: "extract-widget",
    title: "Extract Widget",
    track: "Flutter Basic",
    folder: "03_extract_widget",
    level: "Beginner",
    goal: "Memecah UI menjadi widget kecil agar kode lebih rapi.",
    files: ["lib/main.dart", "lib/widgets/kotakwarna.dart"],
    learn: [
      "Mengenal custom widget.",
      "Memindahkan potongan UI ke file terpisah.",
      "Mengirim data ke widget lewat constructor.",
      "Membuat komponen reusable."
    ],
    detail: "Ketika tampilan aplikasi semakin rumit, menumpuk ratusan baris kode di `main.dart` akan menciptakan 'Spaghetti Code' yang membingungkan. Extract Widget adalah teknik memecah UI menjadi komponen-komponen kecil tersendiri yang bisa dipakai berulang kali (reusable) dan dipisahkan ke dalam folder `widgets/`.",
    concept: ["Custom widget", "Constructor", "Required parameter", "Reusable component"],
    snippet: `class KotakWarna extends StatelessWidget {
  final Color warna;

  const KotakWarna({super.key, required this.warna});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height: 100,
      color: warna,
    );
  }
}`,
    explanation: [
      "`class KotakWarna extends StatelessWidget` — Membuat widget buatan sendiri (custom widget) yang siap dipakai berulang kali.",
      "`final Color warna` — Variabel penampung data (properti) yang akan diterima widget dari parent.",
      "`required this.warna` — Constructor yang wajib diisi saat widget dipanggil. Tanda `required` memastikan data warna tidak boleh kosong saat dipanggil.",
      "Manfaat Extract Widget — Kode `main.dart` menjadi sangat bersih, komponen mudah diuji secara terpisah, dan jika adaperubahan tampilan, kita cukup mengubah satu file widget saja."
    ],
    exercise: ["Tambahkan parameter `tinggi` dan `lebar`.", "Tambahkan parameter `child` untuk isi kotak.", "Buat widget baru bernama `JudulSection`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "04",
    slug: "widget-builder",
    title: "Widget Builder",
    track: "Flutter Basic",
    folder: "04_widget_builder",
    level: "Beginner",
    goal: "Membuat widget berulang dengan builder.",
    files: ["lib/main.dart", "lib/widgets/kotakwarna.dart"],
    learn: [
      "Menggunakan `ListView.builder` untuk list dinamis.",
      "Memakai `index` untuk mengambil data.",
      "Menghindari penulisan widget berulang secara manual.",
      "Menyiapkan pola untuk list API."
    ],
    detail: "`ListView.builder` adalah teknik pembuatan daftar item secara efisien (Lazy Loading). Alih-alih membuat seluruh 1000 item sekaligus yang menguras memori HP, `builder` hanya merender item yang sedang tampil di layar ponsel penggunanya.",
    concept: ["ListView.builder", "itemCount", "itemBuilder", "index", "Dynamic UI"],
    snippet: `ListView.builder(
  itemCount: 10,
  itemBuilder: (context, index) {
    return KotakWarna(
      warna: Colors.primaries[index % Colors.primaries.length],
    );
  },
);`,
    explanation: [
      "`itemCount: 10` — Menentukan total jumlah elemen yang akan dibuat dalam daftar.",
      "`itemBuilder: (context, index) { ... }` — Fungsi pembuat tampilan yang akan dipanggil berulang kali untuk setiap posisi `index` (dimulai dari 0 hingga itemCount-1).",
      "`index` — Urutan nomor posisi item saat ini (0, 1, 2, ...).",
      "Sumbu scroll otomatis — `ListView` secara default sudah memiliki kemampuan scroll vertikal tanpa perlu dibungkus widget scroll tambahan."
    ],
    exercise: ["Buat list nama lalu tampilkan dengan `ListTile`.", "Tambahkan nomor urut dari `index + 1`.", "Ubah `ListView` menjadi `GridView.builder`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "05",
    slug: "latihan-basic",
    title: "Latihan Basic Flutter",
    track: "Flutter Basic",
    folder: "05_latihan_basic_1",
    level: "Beginner",
    goal: "Menguatkan skill widget dan layout lewat banyak soal kecil.",
    files: ["lib/main.dart", "lib/widgets/soal_*.dart"],
    learn: [
      "Membaca requirement visual sederhana.",
      "Menggabungkan widget dasar menjadi tampilan.",
      "Melatih spacing, warna, alignment, dan ukuran.",
      "Membiasakan struktur file latihan."
    ],
    detail: "Folder latihan ini dirancang untuk membentuk 'Muscle Memory' mengetik struktur widget. Dengan menyelesaikan puluhan bentuk layout mini (kotak, lingkaran, deretan teks, kombinasi warna), kamu akan terbiasa menyusun susunan hirarki Flutter tanpa perlu melihat dokumentasi berulang kali.",
    concept: ["Practice repetition", "Layout composition", "Spacing", "Color", "Widget nesting"],
    snippet: `class Soal1 extends StatelessWidget {
  const Soal1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(width: 100, height: 100, color: Colors.blue),
      ),
    );
  }
}`,
    explanation: [
      "Pola latihan terpisah — Setiap file `soal_*.dart` menangani satu kasus tantangan desain visual.",
      "Latihan Hirarki Widget — Mengasah kemampuan berpikir dalam bentuk kotak di dalam kotak (Nesting Widgets).",
      "Pondasi Slicing UI — Menjadi bekal sebelum memotong desain kompleks dari Figma ke dalam kode Flutter."
    ],
    exercise: ["Pilih 3 soal lalu ubah warnanya.", "Tambahkan border radius di salah satu soal.", "Gabungkan dua soal ke satu halaman dengan `Column`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "06",
    slug: "stateless-vs-stateful",
    title: "Stateless vs Stateful",
    track: "Flutter Basic",
    folder: "06_stateless_vs_statefull",
    level: "Beginner",
    goal: "Memahami kapan widget perlu state.",
    files: ["lib/main.dart"],
    learn: [
      "Membedakan UI statis dan UI yang berubah.",
      "Mengenal `StatefulWidget` dan object `State`.",
      "Menggunakan `setState` untuk rebuild UI.",
      "Membuat counter sederhana."
    ],
    detail: "Dalam Flutter, 'State' adalah data atau informasi yang bisa berubah saat aplikasi berjalan (misalnya jumlah keranjang belanja, teks input, atau status centang). `StatelessWidget` dipakai untuk tampilan yang tidak pernah berubah setelah digambar, sedangkan `StatefulWidget` dipakai ketika tampilan harus merespon perubahan data pengguna secara real-time.",
    concept: ["StatelessWidget", "StatefulWidget", "State object", "setState", "Rebuild"],
    snippet: `class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int counter = 0;

  void tambah() {
    setState(() {
      counter++;
    });
  }
}`,
    explanation: [
      "`StatefulWidget` — Widget yang memiliki variabel data yang nilainya dinamis (bisa berubah).",
      "`class _CounterPageState` — Objek State tempat menyimpan logika dan variabel internal (`counter`).",
      "`setState(() { ... })` — Perintah KUNCI di Flutter! Fungsi ini memberitahu Flutter bahwa data di dalamnya telah berubah, sehingga Flutter akan secara otomatis memanggil ulang method `build()` untuk menggambar ulang tampilan dengan angka baru.",
      "Apa yang terjadi jika lupa `setState`? — Nilai variabel di memori HP berubah, tetapi tampilan di layar HP TIDAK AKAN ter-update karena Flutter tidak tahu ada data yang berubah."
    ],
    exercise: ["Tambahkan tombol kurang.", "Tambahkan tombol reset.", "Tampilkan pesan jika counter lebih dari 10."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "07",
    slug: "dialog",
    title: "Dialog",
    track: "Flutter Interaction",
    folder: "07_dialog",
    level: "Beginner",
    goal: "Menampilkan pop up untuk konfirmasi atau informasi.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `showDialog`.",
      "Membuat `AlertDialog`.",
      "Menutup dialog dengan `Navigator.pop`.",
      "Menentukan kapan dialog cocok dipakai."
    ],
    detail: "Dialog adalah pop-up modal yang muncul melayang di atas tampilan layar aktif. Fitur ini sangat penting untuk meminta keputusan atau konfirmasi krusial dari pengguna sebelum aksi berbahaya dilakukan (seperti konfirmasi hapus data, keluar aplikasi, atau peringatan koneksi terputus). Karena dialog bertindak sebagai 'route modal', menutupnya dilakukan dengan `Navigator.pop(context)`.",
    concept: ["showDialog", "AlertDialog", "actions", "Navigator.pop", "BuildContext"],
    snippet: `showDialog(
  context: context,
  builder: (context) {
    return AlertDialog(
      title: const Text("Konfirmasi"),
      content: const Text("Apakah kamu yakin?"),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text("Tutup"),
        ),
      ],
    );
  },
);`,
    explanation: [
      "`showDialog(context: context, ...)` — Fungsi pembuka dialog yang memerlukan `context` untuk mengetahui posisi hirarki di layar.",
      "`builder: (context) { ... }` — Closure pembentuk UI dialog yang mengembalikan widget `AlertDialog`.",
      "`AlertDialog` — Widget standar Material yang memiliki area `title` (judul), `content` (pesan penjelasan), dan `actions` (daftar tombol pilihan di bagian kanan bawah).",
      "`Navigator.pop(context)` — Menutup dialog yang sedang melayang dan mengembalikan kontrol ke layar sebelumnya."
    ],
    exercise: ["Tambahkan tombol `Ya` dan `Batal`.", "Buat dialog sukses setelah tombol ditekan.", "Ubah content dialog menjadi widget custom."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "08",
    slug: "snackbar",
    title: "Snackbar",
    track: "Flutter Interaction",
    folder: "08_snackbar",
    level: "Beginner",
    goal: "Memberi feedback singkat ke user.",
    files: ["lib/main.dart"],
    learn: [
      "Menampilkan snackbar dengan `ScaffoldMessenger`.",
      "Mengatur isi dan durasi pesan.",
      "Membedakan snackbar dengan dialog.",
      "Memberikan feedback setelah user menekan tombol."
    ],
    detail: "Berbeda dari Dialog yang menghentikan aktivitas user, `SnackBar` adalah pesan notifikasi melayang di bawah layar yang bersifat ringan dan otomatis menghilang setelah beberapa detik. Sangat cocok untuk memberikan konfirmasi instan seperti 'Data berhasil disimpan', 'Item masuk keranjang', atau 'Koneksi gagal'.",
    concept: ["ScaffoldMessenger", "SnackBar", "Feedback UI", "Duration"],
    snippet: `ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(
    content: Text("Data berhasil diproses"),
    duration: Duration(seconds: 2),
  ),
);`,
    explanation: [
      "`ScaffoldMessenger.of(context)` — Pengelola notifikasi pesan di Flutter yang mencari `Scaffold` aktif terdekat.",
      "`showSnackBar(...)` — Perintah untuk menayangkan widget `SnackBar` ke layar HP.",
      "`SnackBar` — Berisi properti `content` (biasanya widget `Text`), `duration` (jangka waktu tayang sebelum hilang otomatis), serta warna latar `backgroundColor`.",
      "Perbedaan dengan Dialog — SnackBar TIDAK mengunci layar HP, pengguna tetap bisa menekan tombol lain saat SnackBar muncul."
    ],
    exercise: ["Buat snackbar sukses dan gagal.", "Tambahkan action button di snackbar.", "Ubah posisi snackbar dengan behavior floating."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "09",
    slug: "textfield",
    title: "TextField",
    track: "Flutter Interaction",
    folder: "09_textfield",
    level: "Beginner",
    goal: "Mengambil input user dari form sederhana.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membuat input dengan `TextField`.",
      "Membaca value memakai `TextEditingController`.",
      "Mengatur label, hint, dan border input.",
      "Menjalankan aksi submit."
    ],
    detail: "`TextField` adalah komponen masukan teks tempat pengguna mengetikkan informasi (misalnya nama, email, password, atau pesan pencarian). Di Flutter, membaca teks yang diketikkan pengguna dikendalikan oleh objek pengontrol bernama `TextEditingController`.",
    concept: ["TextField", "TextEditingController", "InputDecoration", "Form input"],
    snippet: `final TextEditingController namaC = TextEditingController();

TextField(
  controller: namaC,
  decoration: const InputDecoration(
    labelText: "Nama",
    border: OutlineInputBorder(),
  ),
);

ElevatedButton(
  onPressed: () {
    print(namaC.text);
  },
  child: const Text("Submit"),
);`,
    explanation: [
      "`TextEditingController namaC = TextEditingController()` — Pengontrol yang bertindak menyimpan teks inputan secara real-time.",
      "`controller: namaC` — Menghubungkan widget `TextField` ke variabel pengontrol `namaC`.",
      "`InputDecoration` — Mengatur tampilan visual bidang input, seperti `labelText` (label di atas border), `hintText` (teks samar petunjuk), dan `border: OutlineInputBorder()` (garis tepi).",
      "`namaC.text` — Properti untuk mengambil isi teks yang sedang diketikkan pengguna saat tombol diklik."
    ],
    exercise: ["Tambahkan field email.", "Validasi jika input kosong.", "Tampilkan hasil input ke Text di halaman."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "10",
    slug: "tabbar",
    title: "TabBar",
    track: "Flutter Navigation",
    folder: "10_tabbar",
    level: "Beginner",
    goal: "Membuat navigasi tab dalam satu halaman.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `DefaultTabController`.",
      "Membuat `TabBar` sebagai menu tab.",
      "Menghubungkan tab dengan `TabBarView`.",
      "Menjaga jumlah tab dan view tetap sama."
    ],
    detail: "Navigasi Tab (`TabBar`) digunakan untuk membagi konten satu halaman menjadi beberapa kategori yang relevan (misalnya di aplikasi WhatsApp: Tab CHATS, STATUS, dan CALLS). Pengguna dapat berpindah antar kategori dengan mengetap tombol tab atau mengusap (swipe) layar ke kiri dan kanan.",
    concept: ["DefaultTabController", "TabBar", "TabBarView", "Tab"],
    snippet: `DefaultTabController(
  length: 3,
  child: Scaffold(
    appBar: AppBar(
      bottom: const TabBar(
        tabs: [Tab(text: "Home"), Tab(text: "Chat"), Tab(text: "Profile")],
      ),
    ),
    body: const TabBarView(
      children: [Text("Home"), Text("Chat"), Text("Profile")],
    ),
  ),
);`,
    explanation: [
      "`DefaultTabController(length: 3)` — Pengatur state tab yang mengoordinasikan indeks tab aktif secara otomatis. `length` menentukan total jumlah tab.",
      "`TabBar` — Deretan tombol navigasi tab yang dipasang di bagian bawah `AppBar` (`appBar: AppBar(bottom: TabBar(...)))`.",
      "`TabBarView` — Tampilan isi konten untuk setiap tab. Jumlah anak (`children`) di `TabBarView` WAJIB SAMA persis dengan jumlah `tabs` di `TabBar`.",
      "Dukungan Gestur Swipe — `TabBarView` secara otomatis mendukung gestur geser jari (swipe) untuk berpindah antar halaman."
    ],
    exercise: ["Tambahkan icon di setiap tab.", "Buat isi tiap tab menjadi widget sendiri.", "Ubah warna indicator tab."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "11",
    slug: "dropdown",
    title: "Dropdown",
    track: "Flutter Interaction",
    folder: "11_dropdown",
    level: "Beginner",
    goal: "Membuat pilihan dari daftar data.",
    files: ["lib/main.dart"],
    learn: [
      "Membuat `DropdownButton`.",
      "Mengelola selected value.",
      "Mengubah state saat pilihan berubah.",
      "Menampilkan data pilihan user."
    ],
    detail: "`DropdownButton` dipakai ketika pengguna harus memilih satu opsi pilihan dari daftar opsi yang sudah ditentukan (misalnya memilih jenis kelamin, daftar kota, atau agama). Teknik utamanya adalah mencocokkan variabel pilihan aktif (`value`) dengan daftar `DropdownMenuItem`.",
    concept: ["DropdownButton", "DropdownMenuItem", "selectedValue", "onChanged"],
    snippet: `DropdownButton<String>(
  value: selectedValue,
  items: const [
    DropdownMenuItem(value: "dart", child: Text("Dart")),
    DropdownMenuItem(value: "flutter", child: Text("Flutter")),
  ],
  onChanged: (value) {
    setState(() {
      selectedValue = value;
    });
  },
);`,
    explanation: [
      "`DropdownButton<String>` — Widget dropdown berspesifikasi tipe data (dalam contoh ini `String`).",
      "`value: selectedValue` — Nilai terpilih saat ini yang ditampilkan di kotak dropdown.",
      "`items: [...]` — Daftar opsi pilihan yang dibungkus oleh widget `DropdownMenuItem`.",
      "`onChanged: (newValue) { setState(() { selectedValue = newValue; }); }` — Fungsi yang dipanggil saat pengguna memilih opsi baru untuk meng-update variabel `selectedValue` via `setState`."
    ],
    exercise: ["Buat dropdown level belajar.", "Tampilkan keterangan berdasarkan pilihan.", "Buat pilihan default bernilai null."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "12",
    slug: "bottom-navigation-bar",
    title: "Bottom Navigation Bar",
    track: "Flutter Navigation",
    folder: "12_bottom_navigation_bar",
    level: "Beginner",
    goal: "Membuat navigasi menu utama aplikasi.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `BottomNavigationBar`.",
      "Menyimpan menu aktif dengan `currentIndex`.",
      "Mengganti body halaman berdasarkan index.",
      "Memahami pola navigasi aplikasi mobile."
    ],
    detail: "`BottomNavigationBar` adalah pola navigasi paling populer di aplikasi mobile modern (seperti Instagram, Tokopedia, YouTube). Menempatkan 3 sampai 5 menu utama permanen di bagian bawah layar ponsel agar mudah dijangkau jempol tangan.",
    concept: ["BottomNavigationBar", "currentIndex", "onTap", "Indexed content"],
    snippet: `int currentIndex = 0;

BottomNavigationBar(
  currentIndex: currentIndex,
  onTap: (index) {
    setState(() {
      currentIndex = index;
    });
  },
  items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
    BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
  ],
);`,
    explanation: [
      "`currentIndex` — Variabel penyimpan indeks menu mana yang sedang aktif (dimulai dari 0 untuk menu pertama).",
      "`onTap: (index) { ... }` — Fungsi pembalik nilai saat salah satu item menu ditekan oleh pengguna.",
      "`BottomNavigationBarItem` — Komponen penyusun menu yang membutuhkan `icon` dan `label`.",
      "Mengganti Halaman `body` — Properti `body` pada `Scaffold` dihubungkan dengan indeks array daftar halaman: `body: listHalaman[currentIndex]`."
    ],
    exercise: ["Tambahkan menu Settings.", "Buat list halaman untuk setiap menu.", "Ubah selected item color."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "13",
    slug: "bottom-sheet",
    title: "Bottom Sheet",
    track: "Flutter Interaction",
    folder: "13_bottom_sheet",
    level: "Beginner",
    goal: "Menampilkan panel tambahan dari bawah layar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `showModalBottomSheet`.",
      "Mengisi bottom sheet dengan widget.",
      "Menutup bottom sheet dengan `Navigator.pop`.",
      "Memilih kapan bottom sheet lebih cocok daripada dialog."
    ],
    detail: "`Bottom Sheet` adalah panel dialog khusus yang meluncur keluar dari tepi bawah layar ponsel. Sangat nyaman untuk perangkat layar sentuh saat menampilkan menu pilihan opsi, filter produk, rincian pembayaran, atau opsi bagikan (share).",
    concept: ["showModalBottomSheet", "Modal panel", "Action menu", "Navigator.pop"],
    snippet: `showModalBottomSheet(
  context: context,
  builder: (context) {
    return SizedBox(
      height: 200,
      child: Center(
        child: TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text("Tutup"),
        ),
      ),
    );
  },
);`,
    explanation: [
      "`showModalBottomSheet` — Fungsi pemanggil panel modal dari dasar layar HP.",
      "`builder: (context) { ... }` — Fungsi pembentuk komponen UI yang akan tampil di dalam panel modal bawah.",
      "Desain Ergonomis — Berbeda dari Dialog tengah yang mengharuskan tangan menjangkau tengah layar, Bottom Sheet sangat mudah dioperasikan dengan satu jempol tangan.",
      "`Navigator.pop(context)` — Menutup panel bottom sheet dan mengembalikannya turun ke bawah."
    ],
    exercise: ["Buat bottom sheet berisi 3 menu.", "Tambahkan icon di mebuhan.", "Buat bottom sheet untuk filter data."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "14",
    slug: "drawer",
    title: "Drawer",
    track: "Flutter Navigation",
    folder: "14_drawer",
    level: "Beginner",
    goal: "Membuat side navigation dari kiri layar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan property `drawer` di `Scaffold`.",
      "Membuat `DrawerHeader`.",
      "Menyusun menu dengan `ListTile`.",
      "Menutup drawer mebuhan."
    ],
    detail: "`Drawer` adalah panel navigasi samping (Side Menu) yang tersembunyi di luar layar kiri dan akan bergeser keluar ketika pengguna menekan tombol ikon tiga garis (Hamburger Menu) atau mengusap layar dari tepi paling kiri.",
    concept: ["Drawer", "DrawerHeader", "ListView", "ListTile"],
    snippet: `Scaffold(
  appBar: AppBar(title: const Text("Drawer")),
  drawer: Drawer(
    child: ListView(
      children: const [
        DrawerHeader(child: Text("Menu")),
        ListTile(leading: Icon(Icons.home), title: Text("Home")),
      ],
    ),
  ),
);`,
    explanation: [
      "`drawer: Drawer(...)` — Properti bawaan `Scaffold`. Saat properti ini diisi, Flutter secara OTOMATIS membuatkan ikon 3 garis (Hamburger Icon) di AppBar kiri.",
      "`DrawerHeader` — Area paling atas drawer yang biasa diisi nama profil, foto avatar, atau logo aplikasi.",
      "`ListTile` — Baris menu dengan icon di sebelah kiri (`leading`) dan teks judul (`title`)."
    ],
    exercise: ["Tambahkan menu Profile dan Settings.", "Buat header berisi avatar.", "Tambahkan aksi navigasi saat menu ditekan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "15",
    slug: "navigation",
    title: "Navigation",
    track: "Flutter Navigation",
    folder: "15_navigation",
    level: "Beginner",
    goal: "Berpindah antar halaman dengan Navigator.",
    files: ["lib/main.dart", "lib/pages/home.dart", "lib/pages/product.dart", "lib/pages/profile.dart"],
    learn: [
      "Membuat beberapa file page.",
      "Membuka halaman baru dengan `Navigator.push`.",
      "Kembali dengan `Navigator.pop`.",
      "Memahami stack navigation."
    ],
    detail: "Navigasi di Flutter dikelola menggunakan konsep tumpukan kartu (Navigation Stack). Ketika membuka halaman baru, halaman tersebut ditumpuk di atas halaman lama (`push`). Ketika menekan tombol Kembali (Back), halaman paling atas dibuang dari tumpukan (`pop`).",
    concept: ["Navigator", "MaterialPageRoute", "push", "pop", "Navigation stack"],
    snippet: `Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const ProductPage(),
  ),
);

Navigator.pop(context);`,
    explanation: [
      "`Navigator.push(context, route)` — Menumpuk halaman baru ke atas tumpukan navigasi.",
      "`MaterialPageRoute` — Kelas pembuat rute navigasi yang menyertakan animasi transisi khas platform (geser kanan untuk iOS / muncul ke atas untuk Android).",
      "`Navigator.pop(context)` — Menghapus halaman teratas dan menutupnya sehingga pengguna kembali ke layar sebelumnya."
    ],
    exercise: ["Kirim data dari Home ke Product.", "Tambahkan halaman Detail.", "Buat tombol back custom."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "16",
    slug: "latihan-ui-instagram",
    title: "Latihan UI Instagram",
    track: "UI Practice",
    folder: "16_latihan_ui_instagram",
    level: "Beginner",
    goal: "Melatih slicing UI profile Instagram.",
    files: ["lib/main.dart", "lib/pages/profile.dart", "lib/widgets/Iteminfo.dart", "lib/widgets/ProfilePicture.dart", "lib/widgets/StoryHIghlight.dart", "lib/widgets/TableItem.dart"],
    learn: [
      "Memecah profile page menjadi widget kecil.",
      "Menyusun row info profile.",
      "Membuat highlight/story section.",
      "Membuat grid item untuk konten visual."
    ],
    detail: "Latihan slicing UI menggabungkan semua dasar sebelumnya: layout, image, text, spacing, dan extract widget. Fokusnya bukan cloning sempurna, tapi melatih cara membagi UI besar menjadi komponen kecil.",
    concept: ["Slicing UI", "Reusable widgets", "Profile layout", "Grid", "Network image"],
    snippet: `Column(
  children: [
    Row(
      children: [
        ProfilePicture(),
        ItemInfo(title: "Posts", value: "120"),
        ItemInfo(title: "Followers", value: "10K"),
      ],
    ),
    StoryHighlight(),
    TableItem(),
  ],
);`,
    explanation: [
      "`ProfilePicture`, `ItemInfo`, dan widget lain dipisahkan agar file profile tidak terlalu panjang.",
      "`Row` cocok untuk statistik horizontal.",
      "Grid cocok untuk daftar foto/post."
    ],
    exercise: ["Tambahkan tombol Follow/Edit Profile.", "Buat data story dari list.", "Ubah grid menjadi 3 kolom responsif."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "17",
    slug: "http-get",
    title: "HTTP GET",
    track: "HTTP & API",
    folder: "17_http_get",
    level: "Beginner",
    goal: "Mengambil data dari API dan menampilkannya ke UI.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package `http`.",
      "Mengirim request GET.",
      "Membaca status code.",
      "Decode JSON dan update UI."
    ],
    detail: "HTTP GET adalah metode protokol internet paling dasar untuk meminta dan mengambil data dari server Backend (REST API). Di Flutter, kita menggunakan package `http` dengan kata kunci `async` dan `await` untuk menunggu proses pengiriman data dari jaringan internet tanpa membuat aplikasi kita macet (freeze).",
    concept: ["HTTP GET", "async await", "statusCode", "jsonDecode", "setState"],
    snippet: `var response = await myhttp.get(
  Uri.parse("https://jsonplaceholder.typicode.com/todos/3"),
);

if (response.statusCode == 200) {
  var data = jsonDecode(response.body);

  setState(() {
    userId = data["userId"].toString();
    title = data["title"];
  });
}`,
    explanation: [
      "`async` & `await` — `async` menandai fungsi berjalan secara asinkron (di latar belakang), sedangkan `await` menginstruksikan program untuk menunggu hingga respon dari server selesai diunduh.",
      "`Uri.parse(...)` — Mengubah teks URL string menjadi objek URI yang valid untuk dikirimkan melalui protokol HTTP.",
      "`response.statusCode == 200` — Kode status HTTP standar yang menandakan bahwa server berhasil memproses dan memberikan data dengan sukses.",
      "`jsonDecode(response.body)` — Mengonversi teks JSON mentah dari `response.body` menjadi struktur data `Map` atau `List` di Dart.",
      "`setState(() { ... })` — Memasukkan data baru hasil API ke variabel lokal dan menggambar ulang UI agar data terbaru langsung tampil."
    ],
    exercise: ["Ganti endpoint ke `/posts/1`.", "Tampilkan field `body`.", "Tambahkan pesan jika status code bukan 200."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "18",
    slug: "http-post",
    title: "HTTP POST",
    track: "HTTP & API",
    folder: "18_http_post",
    level: "Beginner",
    goal: "Mengirim data baru ke API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membedakan GET dan POST.",
      "Mengirim body request.",
      "Mengecek response server.",
      "Membaca hasil data yang dibuat."
    ],
    detail: "Berbeda dari `GET` yang hanya mengambil data, metode `POST` digunakan untuk membuat atau menambahkan data baru ke database server (misalnya saat mendaftarkan akun baru, mengirim formulir kontak, atau membuat postingan). Data yang dikirim dimasukkan ke dalam properti `body` request.",
    concept: ["HTTP POST", "Request body", "Create data", "Response body"],
    snippet: `var response = await myhttp.post(
  Uri.parse("https://jsonplaceholder.typicode.com/posts"),
  body: {
    "title": "Belajar Flutter",
    "body": "Latihan HTTP POST",
    "userId": "1",
  },
);

print(response.statusCode);
print(response.body);`,
    explanation: [
      "`myhttp.post(...)` — Mengirim perintah pembuat data baru ke endpoint API server.",
      "`body: { ... }` — Objek Map yang berisi payload/informasi data baru yang akan disimpan ke database server.",
      "`statusCode == 201 (Created)` — Kode status standar dari server yang mengonfirmasi bahwa data baru telah berhasil diciptakan.",
      "`response.body` — Server biasanya mengembalikan salinan data baru tersebut lengkap dengan nomor `id` unik yang baru dibuat oleh database."
    ],
    exercise: ["Ambil input dari TextField lalu kirim POST.", "Tampilkan response di UI.", "Tambahkan loading saat request berjalan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "19",
    slug: "http-put-patch",
    title: "HTTP PUT atau PATCH",
    track: "HTTP & API",
    folder: "19_http_put_or_patch",
    level: "Beginner",
    goal: "Mengubah data yang sudah ada di API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Memahami update data via API.",
      "Membedakan PUT dan PATCH secara sederhana.",
      "Mengirim field yang ingin diubah.",
      "Mengecek response update."
    ],
    detail: "Metode `PUT` dan `PATCH` digunakan untuk memperbarui (update) data yang sudah ada di server. Perbedaan utamanya: `PUT` digunakan untuk mengganti seluruh dokumen data secara menyeluruh, sedangkan `PATCH` hanya memperbarui bidang/field tertentu yang berubah saja.",
    concept: ["HTTP PUT", "HTTP PATCH", "Update data", "Endpoint by id"],
    snippet: `var response = await myhttp.patch(
  Uri.parse("https://jsonplaceholder.typicode.com/posts/1"),
  body: {
    "title": "Judul sudah diubah",
  },
);

print(response.statusCode);
print(response.body);`,
    explanation: [
      "`/posts/1` — URL endpoint API yang menyertakan nomor ID data spesifik (`1`) yang hendak diubah di server.",
      "`myhttp.patch(...)` — Mengirim pembaruan sebagian data tanpa mengganggu bidang data lainnya.",
      "`body: { 'title': '...' }` — Hanya mengirimkan properti `title` saja yang ingin diubah nilainya."
    ],
    exercise: ["Ubah dari PATCH ke PUT.", "Update title dari TextField.", "Tampilkan response title ke UI."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "20",
    slug: "http-delete",
    title: "HTTP DELETE",
    track: "HTTP & API",
    folder: "20_http_delete",
    level: "Beginner",
    goal: "Menghapus data melalui API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Mengirim request DELETE.",
      "Menentukan endpoint dengan id.",
      "Mengecek status berhasil.",
      "Memahami pentingnya konfirmasi sebelum delete."
    ],
    detail: "Metode `DELETE` digunakan untuk menghapus data permanen dari database server berdasarkan nomor ID unik data tersebut. Karena aksi ini tidak bisa dibatalkan (destructive action), sangat disarankan untuk selalu menampilkan konfirmasi `AlertDialog` sebelum perintah ini dieksekusi.",
    concept: ["HTTP DELETE", "Delete by id", "Status code", "Confirmation flow"],
    snippet: `var response = await myhttp.delete(
  Uri.parse("https://jsonplaceholder.typicode.com/posts/1"),
);

if (response.statusCode == 200) {
  print("Data berhasil dihapus");
}`,
    explanation: [
      "`myhttp.delete(...)` — Mengirim instruksi penghapusan ke URL endpoint dengan ID spesifik (`/posts/1`).",
      "`statusCode == 200` atau `204 (No Content)` — Menandakan bahwa server telah sukses menghapus data tersebut.",
      "Alur UX Terbaik — Gabungkan aksi DELETE dengan konfirmasi Dialog dan `SnackBar` sukses untuk kenyamanan pengguna."
    ],
    exercise: ["Tambahkan AlertDialog sebelum delete.", "Tampilkan snackbar setelah berhasil.", "Buat input id data yang ingin dihapus."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "21",
    slug: "future-builder",
    title: "FutureBuilder",
    track: "HTTP & API",
    folder: "21_future_builder",
    level: "Beginner",
    goal: "Menampilkan data async dengan state loading, error, dan success.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membuat function `Future`.",
      "Menhubungkan `future` ke UI.",
      "Membaca `snapshot.connectionState`.",
      "Menangani error dan data kosong."
    ],
    detail: "`FutureBuilder` adalah widget ajaib di Flutter yang secara otomatis memantau status pengunduhan data asinkron (Future). Widget ini secara otomatis mengganti tampilan UI dari kondisi **Sedang Memuat (Loading)**, **Terjadi Error (Error)**, hingga **Data Berhasil Diterima (Success)** tanpa perlu mengelola variabel `setState` secara manual.",
    concept: ["Future", "FutureBuilder", "snapshot", "loading", "error", "ListView.builder"],
    snippet: `FutureBuilder<List<dynamic>>(
  future: getData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }

    if (snapshot.hasError) {
      return Center(child: Text("Error: \${snapshot.error}"));
    }

    final data = snapshot.data!;
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (context, index) => ListTile(
        title: Text(data[index]["title"]),
      ),
    );
  },
);`,
    explanation: [
      "`future: getData()` — Menghubungkan fungsi asinkron pengambil API ke `FutureBuilder`.",
      "`snapshot.connectionState == ConnectionState.waiting` — Kondisi saat jaringan sedang sibuk mengunduh data -> tampilkan animasi spinner `CircularProgressIndicator`.",
      "`snapshot.hasError` — Kondisi jika jaringan putus atau server crash -> tampilkan teks pesan error.",
      "`snapshot.data!` — Kondisi ketika data dari API telah sukses diterima -> rendet data ke dalam `ListView.builder`."
    ],
    exercise: ["Ubah itemCount menjadi `data.length`.", "Tambahkan empty state.", "Pisahkan item list ke widget sendiri."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "22",
    slug: "latihan-http-covid-app",
    title: "Latihan HTTP Covid App",
    track: "Mini Project",
    folder: "22_latihan_http_covid_app",
    level: "Beginner",
    goal: "Membuat mini app API dengan model dan widget info.",
    files: ["lib/main.dart", "lib/Models/summary.dart", "lib/pages/home.dart", "lib/widgets/InfoCard.dart"],
    learn: [
      "Memisahkan model data API.",
      "Membuat widget `InfoCard` untuk tampilan ringkas.",
      "Menggabungkan HTTP dengan UI card.",
      "Membaca response API ke object."
    ],
    detail: "Ini langkah awal ke mini project yang lebih rapi. Kamu mulai memisahkan model, page, dan widget. Walau sederhana, pola ini membantu saat data API makin kompleks.",
    concept: ["Model", "fromJson", "InfoCard", "API summary", "Widget split"],
    snippet: `Future<Summary> getSummary() async {
  final response = await http.get(Uri.parse(apiUrl));

  if (response.statusCode == 200) {
    return Summary.fromJson(jsonDecode(response.body));
  }

  throw Exception("Gagal mengambil data");
}`,
    explanation: [
      "`Summary.fromJson` mengubah Map JSON menjadi object Dart.",
      "Model membuat akses data lebih jelas daripada Map mentah.",
      "Widget info card menjaga UI tetap reusable."
    ],
    exercise: ["Tambahkan loading state.", "Tambahkan card baru untuk data lain.", "Ubah warna card berdasarkan status data."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "23",
    slug: "faker",
    title: "Package Faker",
    track: "Packages",
    folder: "23_faker",
    level: "Beginner",
    goal: "Membuat dummy data untuk latihan UI.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package external.",
      "Membuat nama dan email palsu.",
      "Mengisi list UI tanpa API.",
      "Memahami manfaat dummy data."
    ],
    detail: "Faker berguna saat UI sudah perlu banyak data, tapi backend belum ada. Dengan dummy data yang realistis, kamu bisa menguji list, card, avatar, dan layout lebih cepat.",
    concept: ["faker", "Dummy data", "ListTile", "Package usage"],
    snippet: `final faker = Faker();

ListTile(
  leading: CircleAvatar(child: Text(faker.person.firstName()[0])),
  title: Text(faker.person.name()),
  subtitle: Text(faker.internet.email()),
);`,
    explanation: [
      "`Faker()` menyediakan generator data palsu.",
      "Data bisa berubah setiap rebuild/run.",
      "Cocok untuk prototype UI."
    ],
    exercise: ["Buat 20 data user palsu.", "Tambahkan avatar inisial.", "Buat card profile dari data faker."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "24",
    slug: "date-format",
    title: "Date Format",
    track: "Packages",
    folder: "24_date_format",
    level: "Beginner",
    goal: "Memformat tanggal dengan package `intl`.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `DateTime.now()`.",
      "Memakai `DateFormat`.",
      "Mengubah pattern tanggal.",
      "Menampilkan tanggal yang ramah dibaca."
    ],
    detail: "Tanggal mentah sering tidak cocok langsung ditampilkan. Package `intl` membantu mengubah tanggal menjadi format yang sesuai kebutuhan UI, seperti hari, bulan, tahun, dan jam.",
    concept: ["DateTime", "intl", "DateFormat", "Format pattern"],
    snippet: `final now = DateTime.now();
final formattedDate = DateFormat("EEEE, dd MMMM yyyy").format(now);

Text(formattedDate);`,
    explanation: [
      "`DateTime.now()` mengambil waktu saat ini.",
      "`DateFormat(...).format(now)` mengubah tanggal ke string.",
      "Pattern menentukan bentuk output tanggal."
    ],
    exercise: ["Tampilkan format jam.", "Coba format `dd/MM/yyyy`.", "Buat card yang menampilkan tanggal hari ini."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "25",
    slug: "package-bottom-bar",
    title: "Package Bottom Bar",
    track: "Packages",
    folder: "25_package_bottom_bar",
    level: "Beginner",
    goal: "Eksperimen tampilan bottom bar dari package/custom widget.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membandingkan bottom bar bawaan dan package.",
      "Mengelola selected index.",
      "Mengubah halaman berdasarkan menu.",
      "Memahami kapan package UI berguna."
    ],
    detail: "Package UI membantu mempercepat tampilan yang lebih menarik. Namun konsep state-nya tetap sama: ada index aktif, ada event tap, dan ada body yang berubah mengikuti pilihan.",
    concept: ["Bottom bar package", "selectedIndex", "Navigation state", "UI package"],
    snippet: `int selectedIndex = 0;

BottomNavigationBar(
  currentIndex: selectedIndex,
  onTap: (index) {
    setState(() {
      selectedIndex = index;
    });
  },
  items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
    BottomNavigationBarItem(icon: Icon(Icons.settings), label: "Setting"),
  ],
);`,
    explanation: [
      "Package biasanya mengubah visual, bukan konsep dasarnya.",
      "`selectedIndex` tetap menjadi sumber state utama.",
      "Pisahkan halaman menu ke list agar rapi."
    ],
    exercise: ["Tambahkan menu ketiga.", "Buat body berubah sesuai index.", "Ubah warna item aktif."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "26",
    slug: "avatar-glow",
    title: "Avatar Glow",
    track: "Packages",
    folder: "26_avatar_glow",
    level: "Beginner",
    goal: "Membuat efek animasi glow pada avatar.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan package `avatar_glow`.",
      "Membungkus widget dengan efek animasi.",
      "Mengatur warna dan ukuran glow.",
      "Memakai animasi sebagai status visual."
    ],
    detail: "Efek glow bisa memberi kesan aktif, recording, scanning, atau highlight profile. Gunakan secukupnya agar UI tetap fokus dan tidak terlalu ramai.",
    concept: ["AvatarGlow", "CircleAvatar", "Animation effect", "Visual status"],
    snippet: `AvatarGlow(
  glowColor: Colors.blue,
  child: const CircleAvatar(
    radius: 40,
    child: Icon(Icons.person),
  ),
);`,
    explanation: [
      "`AvatarGlow` membungkus widget target.",
      "`glowColor` mengatur warna animasi.",
      "Child bisa berupa avatar, icon, atau widget lain."
    ],
    exercise: ["Ganti icon menjadi mic.", "Ubah warna glow berdasarkan status.", "Tambahkan tombol start/stop animasi."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "27",
    slug: "package-intro-screen",
    title: "Package Intro Screen",
    track: "Packages",
    folder: "27_package_intro_screen",
    level: "Beginner",
    goal: "Membuat halaman onboarding sederhana.",
    files: ["lib/main.dart", "lib/pages/intro.dart", "lib/pages/home.dart"],
    learn: [
      "Mengenal alur intro/onboarding.",
      "Membuat beberapa slide pengenalan.",
      "Menambahkan tombol skip atau mulai.",
      "Menghubungkan intro ke halaman home."
    ],
    detail: "Intro screen membantu menjelaskan value aplikasi pada pembukaan pertama. Di project nyata, status sudah melihat intro biasanya disimpan agar onboarding tidak muncul terus.",
    concept: ["Onboarding", "PageView", "Skip", "Get started", "First run flow"],
    snippet: `PageView(
  children: const [
    Center(child: Text("Belajar Flutter")),
    Center(child: Text("Bangun UI")),
    Center(child: Text("Mulai App")),
  ],
);`,
    explanation: [
      "`PageView` membuat slide horizontal.",
      "Setiap child adalah satu halaman intro.",
      "Tombol mulai biasanya membuka `HomePage`."
    ],
    exercise: ["Tambahkan indicator titik.", "Tambahkan tombol skip.", "Simpan status intro memakai GetStorage di modul lanjutan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "28",
    slug: "package-dropdown-search",
    title: "Package Dropdown Search",
    track: "Packages",
    folder: "28_package_dropdown_search",
    level: "Beginner",
    goal: "Membuat dropdown dengan fitur pencarian.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan package dropdown search/custom dropdown.",
      "Mengaktifkan search box.",
      "Menangkap item yang dipilih.",
      "Menyiapkan UI untuk data banyak."
    ],
    detail: "Dropdown biasa kurang nyaman jika item sangat banyak. Searchable dropdown cocok untuk provinsi, kota, kategori produk, atau data master lain.",
    concept: ["Searchable dropdown", "onChanged", "Items list", "Package UI"],
    snippet: `DropdownSearch<String>(
  items: const ["Dart", "Flutter", "GetX"],
  popupProps: const PopupProps.menu(showSearchBox: true),
  onChanged: (value) {
    print(value);
  },
);`,
    explanation: [
      "Search box membantu mencari item panjang.",
      "`onChanged` menangkap pilihan user.",
      "Pola ini dipakai lagi di modul wilayah Indonesia."
    ],
    exercise: ["Buat list 30 nama kota.", "Tampilkan pilihan di Text.", "Tambahkan empty state jika data kosong."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "29",
    slug: "daftar-wilayah-indo",
    title: "Daftar Wilayah Indonesia",
    track: "HTTP & API",
    folder: "29_daftar_wilayah_indo",
    level: "Beginner",
    goal: "Menggabungkan API key, HTTP, dropdown search, dan dependent dropdown.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menyimpan API key sebagai variable placeholder.",
      "Mengambil data provinsi dari API.",
      "Mengambil kabupaten berdasarkan provinsi terpilih.",
      "Menggunakan dropdown search untuk data wilayah."
    ],
    detail: "Modul ini mulai terasa seperti fitur nyata: dropdown kedua bergantung pada pilihan dropdown pertama. Pola ini sering dipakai untuk alamat, kategori-subkategori, atau filter bertingkat.",
    concept: ["API key placeholder", "HTTP GET", "Dependent dropdown", "jsonDecode", "setState"],
    snippet: `final String api = "API-KEY-KAMU";

var response = await myhttp.get(
  Uri.parse("https://api.binderbyte.com/wilayah/provinsi?api_key=$api"),
);

if (response.statusCode == 200) {
  final json = jsonDecode(response.body);
  dataProvinsi = json["value"];
}`,
    explanation: [
      "`API-KEY-KAMU` adalah placeholder agar key asli aman saat push ke GitHub.",
      "Endpoint provinsi mengambil daftar provinsi.",
      "Endpoint kabupaten memakai `id_provinsi` dari pilihan user."
    ],
    exercise: ["Tambahkan loading untuk kabupaten.", "Tambahkan dropdown kecamatan jika API tersedia.", "Pindahkan logic API ke service/provider."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "30",
    slug: "change-app-icon",
    title: "Change App Icon",
    track: "Packages",
    folder: "30_change_app_icon",
    level: "Beginner",
    goal: "Mengubah launcher icon aplikasi.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan dev dependency `flutter_launcher_icons`.",
      "Menulis konfigurasi icon di `pubspec.yaml`.",
      "Menentukan path gambar icon.",
      "Menjalankan generator icon."
    ],
    detail: "Launcher icon adalah bagian branding aplikasi. Dengan package generator, Flutter bisa membuat asset icon untuk Android dan iOS berdasarkan satu source image.",
    concept: ["flutter_launcher_icons", "dev_dependencies", "image_path", "App branding"],
    snippet: `dev_dependencies:
  flutter_launcher_icons: ^0.14.4

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icon/app_icon.png"`,
    explanation: [
      "`dev_dependencies` dipakai untuk tool pengembangan.",
      "`image_path` menunjuk gambar sumber icon.",
      "Setelah config, jalankan command generator dari package."
    ],
    exercise: ["Siapkan icon ukuran besar.", "Tambahkan adaptive icon Android.", "Buat variasi icon untuk app latihan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "31",
    slug: "belajar-getx",
    title: "Belajar GetX",
    track: "GetX",
    folder: "31_belajar_getx",
    level: "Beginner",
    goal: "Memulai GetX dengan `GetMaterialApp`.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package `get`.",
      "Mengganti `MaterialApp` menjadi `GetMaterialApp`.",
      "Menyiapkan fitur GetX untuk snackbar, dialog, route, dan state.",
      "Memahami root app untuk GetX."
    ],
    detail: "`GetMaterialApp` adalah gerbang utama jika kita ingin memanfaatkan seluruh ekosistem dan keajaiban GetX (seperti navigasi tanpa context, snackbar instan, dialog cepat, dan reactive state). Modul ini mengajarkan cara mengganti root widget `MaterialApp` bawaan menjadi `GetMaterialApp`.",
    concept: ["GetX", "GetMaterialApp", "Package get", "Root app"],
    snippet: `void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    ),
  );
}`,
    explanation: [
      "`GetMaterialApp` — Menggantikan `MaterialApp` standar untuk menyuntikkan pengelola navigasi dan Overlay global milik GetX.",
      "Navigasi Tanpa Context — Setelah menggunakan `GetMaterialApp`, seluruh perintah navigasi dan dialog tidak lagi membutuhkan objek `BuildContext`.",
      "Kompabilitas Penuh — Tetap mendukung penuh seluruh widget dasar Flutter bawaan tanpa ada yang rusak."
    ],
    exercise: ["Ubah title aplikasi.", "Tambahkan route sederhana.", "Coba panggil `Get.snackbar` dari tombol."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "32",
    slug: "snackbar-getx",
    title: "Snackbar GetX",
    track: "GetX",
    folder: "32_snackbar_getx",
    level: "Beginner",
    goal: "Menampilkan snackbar tanpa BuildContext.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.snackbar`.",
      "Mengatur title dan message.",
      "Mengatur posisi snackbar.",
      "Membandingkan dengan ScaffoldMessenger."
    ],
    detail: "`Get.snackbar()` adalah cara ultra-ringkas untuk memunculkan pesan notifikasi indah melayang di layar tanpa memerlukan `BuildContext` atau `ScaffoldMessenger`. Sangat berguna saat dipanggil langsung dari kelas Controller (misalnya setelah sukses API login).",
    concept: ["Get.snackbar", "SnackPosition", "No context", "Feedback"],
    snippet: `Get.snackbar(
  "Berhasil",
  "Data berhasil disimpan",
  snackPosition: SnackPosition.BOTTOM,
);`,
    explanation: [
      "`Get.snackbar(title, message)` — Parameter pertama adalah Judul pesan, parameter kedua adalah Isi ringkasan pesan.",
      "`snackPosition: SnackPosition.BOTTOM` — Menentukan lokasi munculnya pesan di tepi bawah layar (default berada di bagian atas `TOP`).",
      "Tanpa BuildContext — Fungsi ini bisa dipanggil dari mana saja (bahkan di luar kelas Widget UI) tanpa perlu membawa parameter `context`."
    ],
    exercise: ["Buat snackbar error.", "Tambahkan icon.", "Panggil snackbar dari controller."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "33",
    slug: "dialog-getx",
    title: "Dialog GetX",
    track: "GetX",
    folder: "33_dialog_getx",
    level: "Beginner",
    goal: "Menampilkan dialog dengan API GetX.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.defaultDialog`.",
      "Menambahkan tombol confirm dan cancel.",
      "Menutup dialog dengan `Get.back`.",
      "Memakai dialog untuk konfirmasi."
    ],
    detail: "`Get.defaultDialog()` memotong kerumitan pembuatan `showDialog` standar Flutter. Cukup dalam satu panggilan fungsi sederhana, kita bisa menyusun judul, isi pesan, tombol konfirmasi ('Ya'), dan tombol pembatalan ('Batal') secara otomatis.",
    concept: ["Get.defaultDialog", "Get.back", "Confirm dialog", "No context"],
    snippet: `Get.defaultDialog(
  title: "Konfirmasi",
  middleText: "Apakah kamu yakin?",
  textConfirm: "Ya",
  textCancel: "Batal",
  onConfirm: () => Get.back(),
);`,
    explanation: [
      "`title` & `middleText` — Mengatur teks judul pop-up dan teks pesan utama konfirmasi.",
      "`textConfirm` & `textCancel` — Memberikan label otomatis untuk dua tombol aksi utama di bagian bawah dialog.",
      "`onConfirm: () { Get.back(); }` — Eksekusi logika saat tombol konfirmasi ditekan, dan `Get.back()` otomatis menutup dialog tersebut."
    ],
    exercise: ["Tambahkan aksi delete setelah confirm.", "Ubah dialog menjadi custom content.", "Tampilkan snackbar setelah dialog ditutup."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "34",
    slug: "bottomsheet-getx",
    title: "BottomSheet GetX",
    track: "GetX",
    folder: "34_bottomsheet_getx",
    level: "Beginner",
    goal: "Menampilkan bottom sheet tanpa context.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.bottomSheet`.",
      "Mengisi bottom sheet dengan widget custom.",
      "Menutup bottom sheet dengan `Get.back`.",
      "Membuat action menu cepat."
    ],
    detail: "`Get.bottomSheet()` memungkinkan kita memunculkan lembaran panel modal dari tepi bawah layar hanya dengan satu baris kode ringkas, tanpa memerlukan objek `BuildContext`.",
    concept: ["Get.bottomSheet", "Bottom panel", "No context", "Action menu"],
    snippet: `Get.bottomSheet(
  Container(
    padding: const EdgeInsets.all(16),
    color: Colors.white,
    child: const Text("Ini bottom sheet GetX"),
  ),
);`,
    explanation: [
      "`Get.bottomSheet(Widget)` — Menerima widget custom apapun yang ingin ditampilkan di dalam lembaran panel bawah.",
      "`Get.back()` — Perintah instan untuk menutup panel bottom sheet dari mana saja."
    ],
    exercise: ["Buat bottom sheet tema light/dark.", "Tambahkan list opsi.", "Panggil dari FloatingActionButton."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "35",
    slug: "state-management-getx",
    title: "State Management GetX",
    track: "GetX State",
    folder: "35_state_management_getx",
    level: "Beginner",
    goal: "Mengelola state sederhana dengan GetBuilder dan update.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membuat class controller extend `GetxController`.",
      "Menyimpan state di controller.",
      "Memanggil `update()` untuk rebuild.",
      "Membaca state dengan `GetBuilder`."
    ],
    detail: "Simple State Management pada GetX menggunakan `GetBuilder`. Berbeda dari `StatefulWidget` yang memicu rebuild seluruh widget, GetBuilder hanya memperbarui potongan widget spesifik yang dibungkus saja saat fungsi `update()` dipanggil manual di controller.",
    concept: ["GetxController", "GetBuilder", "update", "Manual state"],
    snippet: `class HomeController extends GetxController {
  var angka = 0;

  void tambah() {
    angka++;
  }

  void refreshTampilan() {
    update();
  }
}`,
    explanation: [
      "`GetxController` — Kelas pengontrol logika tempat menyimpan data state dan fungsi aksi aplikasi.",
      "`update()` — Fungsi saklar manual yang memberitahu `GetBuilder` di UI untuk menggambar ulang tampilannya.",
      "Performa Efisien — Sangat ringan karena tidak menggunakan Stream atau Observer, cocok untuk data statis yang jarang berubah."
    ],
    exercise: ["Panggil `update()` langsung di `tambah`.", "Tambahkan function reset.", "Bandingkan dengan `.obs` di modul berikutnya."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "36",
    slug: "reactive-variables",
    title: "Reactive Variables GetX",
    track: "GetX State",
    folder: "36_reactive_variables",
    level: "Beginner",
    goal: "Membuat state otomatis rebuild dengan `.obs` dan Obx.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membuat `RxInt`, `RxString`, `RxBool`, dan `RxList`.",
      "Menggunakan `.obs`.",
      "Mengubah value reactive.",
      "Menampilkan state dengan `Obx`."
    ],
    detail: "Reactive State Management (`Rx`) adalah keunggulan utama GetX. Cukup menambahkan `.obs` pada variabel (menjadikannya Observable), maka setiap kali nilai variabel tersebut berubah, seluruh widget yang dibungkus `Obx(...)` akan menggambar ulang tampilannya secara OTOMATIS tanpa perlu memanggil `setState` atau `update()`!",
    concept: [".obs", "RxInt", "RxString", "RxBool", "RxList", "Obx"],
    snippet: `class HomeController extends GetxController {
  RxInt dataInt = 0.obs;
  RxString dataString = "data".obs;
  RxBool dataBool = false.obs;
  RxList<int> dataList = [1, 2, 3].obs;

  void incrementINT() {
    dataInt++;
  }

  void gantiBool() {
    dataBool.toggle();
  }
}`,
    explanation: [
      "`.obs` — Mengubah variabel biasa menjadi variabel reaktif (Observable) yang dipantau oleh GetX.",
      "`Obx(() => Text('${controller.dataInt}'))` — Widget pendengar yang akan merender ulang tampilannya secara instan begitu variabel `.obs` di dalamnya berubah.",
      "Tanpa `setState()` — Mengeliminasi boilerplate code dan pemanggilan `setState` secara keseluruhan di layer View."
    ],
    exercise: ["Buat reactive loading.", "Buat selected category dengan `RxString`.", "Tampilkan list reactive dengan `Obx`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "37",
    slug: "workers-getx",
    title: "Workers GetX",
    track: "GetX State",
    folder: "37_workers_getx",
    level: "Beginner",
    goal: "Memantau perubahan state reactive.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `ever` untuk setiap perubahan.",
      "Menggunakan `once` untuk perubahan pertama.",
      "Menggunakan `debounce` untuk menunggu user berhenti mengetik.",
      "Menggunakan `interval` untuk membatasi frekuensi eksekusi."
    ],
    detail: "Workers di GetX adalah fungsi pendengar (Listener) yang memantau perubahan variabel `.obs` untuk memicu efek samping (Side Effect). Fitur ini sangat berguna untuk fitur pencarian (Search Input), simpan otomatis (Auto-Save), atau analitik tanpa mengotori logika UI.",
    concept: ["ever", "once", "debounce", "interval", "Side effect", "onInit"],
    snippet: `@override
void onInit() {
  ever(dataPantau, (data) => print("Perubahan"));

  debounce(
    dataPantau,
    (data) => print("Jalan setelah berhenti berubah"),
    time: const Duration(seconds: 2),
  );

  interval(
    dataPantau,
    (data) => print("Jalan tiap interval"),
    time: const Duration(seconds: 2),
  );

  super.onInit();
}`,
    explanation: [
      "`ever(rx, callback)` — Menjalankan fungsi callback SETIAP KALI nilai variabel `rx` berubah.",
      "`once(rx, callback)` — Hanya menjalankan fungsi callback SATU KALI SAJA saat variabel berubah pertama kali.",
      "`debounce(rx, callback, time)` — Menunggu pengguna BERHENTI melakukan input selama rentang waktu tertentu (sangat penting untuk fitur Search Bar agar tidak menembak API setiap huruf diketik).",
      "`interval(rx, callback, time)` — Mencegah aksi eksekusi berlebihan dengan membatasi eksekusi maksimum per jeda durasi."
    ],
    exercise: ["Buat search input dengan debounce.", "Tambahkan worker `once`.", "Cetak value terbaru setiap worker berjalan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "38",
    slug: "dependency-management-getx",
    title: "Dependency Management GetX",
    track: "GetX Architecture",
    folder: "38_dependency_management_getx",
    level: "Beginner",
    goal: "Mendaftarkan dan mengambil controller dengan GetX.",
    files: ["lib/main.dart", "lib/controllers/page_satu_controller.dart", "lib/pages/page_satu.dart", "lib/pages/page_dua.dart", "pubspec.yaml"],
    learn: [
      "Memahami dependency injection sederhana.",
      "Mendaftarkan controller dengan `Get.put` atau `Get.lazyPut`.",
      "Mengambil controller dengan `Get.find`.",
      "Memakai controller yang sama di beberapa halaman."
    ],
    detail: "Dependency Management (Dependency Injection) di GetX memungkinkan kita mendaftarkan instance Controller ke memori global dan mengaksesnya di halaman mana pun hanya dengan memanggil `Get.find()`, tanpa perlu mengoper data controller lewat Constructor dari halaman ke halaman.",
    concept: ["Get.put", "Get.lazyPut", "Get.find", "Dependency injection", "Controller reuse"],
    snippet: `class PageSatu extends StatelessWidget {
  PageSatuController pageSatuC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Text(
      "\${pageSatuC.data['name']} - \${pageSatuC.data['age']} Tahun",
      style: const TextStyle(fontSize: 30),
    );
  }
}`,
    explanation: [
      "`Get.put(Controller())` — Langsung membuat dan menginisialisasi controller ke dalam memori aplikasi.",
      "`Get.lazyPut(() => Controller())` — Hanya akan membuat instansiasi controller saat pertama kali dipanggil oleh UI (lebih menghemat RAM).",
      "`Get.find<Controller>()` — Mengambil controller yang sudah terdaftar di memori tanpa perlu membuat objek baru."
    ],
    exercise: ["Daftarkan controller di `main.dart`.", "Ambil controller di dua page berbeda.", "Bandingkan `Get.put` dan `Get.lazyPut`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "39",
    slug: "route-management-getx",
    title: "Route Management GetX",
    track: "GetX Navigation",
    folder: "39_route_management_getx",
    level: "Beginner",
    goal: "Navigasi halaman tanpa BuildContext.",
    files: ["lib/main.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.to`.",
      "Menggunakan `Get.off`.",
      "Menggunakan `Get.offAll`.",
      "Kembali dengan `Get.back`."
    ],
    detail: "GetX Route Management menyederhanakan sistem navigasi Flutter secara drastis. Kita tidak lagi membutuhkan objek `BuildContext` atau penulisan panjang `Navigator.push(context, MaterialPageRoute(...))`. Cukup gunakan perintah ringkas seperti `Get.to()`, `Get.off()`, atau `Get.back()`.",
    concept: ["Get.to", "Get.off", "Get.offAll", "Get.back", "Navigation stack"],
    snippet: `Get.to(() => const Page1());
Get.off(() => const Page2());
Get.offAll(() => const Page3());
Get.back();`,
    explanation: [
      "`Get.to(() => Page())` — Membuka halaman baru (menumpuk di atas rute lama).",
      "`Get.off(() => Page())` — Membuka halaman baru sambil MENGHAPUS halaman saat ini dari stack (misalnya perpindahan dari Splash Screen ke Login).",
      "`Get.offAll(() => Page())` — MENGHAPUS SELURUH tumpukan halaman sebelumnya dan membuka halaman baru sebagai root (misalnya saat Logout kembali ke Login).",
      "`Get.back()` — Menutup halaman/dialog/bottomsheet aktif dan kembali ke layar sebelumnya."
    ],
    exercise: ["Buat flow login ke home dengan `Get.offAll`.", "Kirim argument ke halaman tujuan.", "Coba kembali dengan `Get.back(result: data)`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "40",
    slug: "routename-getx",
    title: "Route Name GetX",
    track: "GetX Navigation",
    folder: "40_routename_getx",
    level: "Beginner",
    goal: "Mengelola route dengan nama.",
    files: ["lib/main.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Membuat daftar `GetPage`.",
      "Menentukan `initialRoute`.",
      "Navigasi dengan `Get.toNamed`.",
      "Merapikan route yang makin banyak."
    ],
    detail: "Menggunakan Named Routes (Navigasi Berbasis Nama String seperti `/home` atau `/login`) membuat pengelolaan rute aplikasi skala besar menjadi sangat terstruktur, bersih, dan mudah dikelola dari satu file pustaka rute pusat.",
    concept: ["GetPage", "initialRoute", "getPages", "Get.toNamed", "Route table"],
    snippet: `GetMaterialApp(
  initialRoute: "/",
  getPages: [
    GetPage(name: "/", page: () => const HomePage()),
    GetPage(name: "/page-1", page: () => const Page1()),
  ],
);

Get.toNamed("/page-1");`,
    explanation: [
      "`GetMaterialApp` — Pengganti `MaterialApp` standar bawaan Flutter yang mengaktifkan seluruh fitur canggih GetX.",
      "`getPages: [...]` — Tabel pendaftaran seluruh nama rute halaman di aplikasi.",
      "`Get.toNamed('/halaman')` — Membuka halaman tujuan berdasarkan String nama rutenya."
    ],
    exercise: ["Tambahkan route detail.", "Kirim parameter route.", "Buat konstanta untuk nama route agar tidak typo."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "41",
    slug: "bindings-builder",
    title: "Bindings Builder GetX",
    track: "GetX Architecture",
    folder: "41_bindings_builder",
    level: "Beginner",
    goal: "Mendaftarkan dependency otomatis saat route dibuka.",
    files: ["lib/main.dart", "lib/bindings/counter_binding.dart", "lib/controllers/counterController.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Membuat class binding.",
      "Mendaftarkan controller di `dependencies`.",
      "Menghubungkan binding ke `GetPage`.",
      "Memisahkan dependency dari view."
    ],
    detail: "`Bindings` memisahkan pendaftaran Controller dari kelas View (UI). Dengan Bindings, Controller baru akan didaftarkan ke RAM tepat saat rute halaman tersebut dibuka, dan secara otomatis dibuang (dispose) dari RAM saat penggunanya keluar dari halaman tersebut.",
    concept: ["Bindings", "dependencies", "Get.lazyPut", "GetPage binding", "Route scoped dependency"],
    snippet: `class CounterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => CounterController());
  }
}

GetPage(
  name: "/counter",
  page: () => CounterPage(),
  binding: CounterBinding(),
);`,
    explanation: [
      "`class CounterBinding extends Bindings` — Kelas khusus wadah pendaftaran seluruh controller yang dibutuhkan oleh suatu halaman.",
      "`binding: CounterBinding()` — Menghubungkan file Binding ke rute `GetPage`.",
      "Manfaat Utama — Menjaga file UI (View) tetap murni 100% berisi kode tampilan tanpa adanya penginstansiasian controller secara manual."
    ],
    exercise: ["Tambahkan controller kedua di binding.", "Pindahkan `Get.put` dari view ke binding.", "Bandingkan lifecycle controller dengan dan tanpa binding."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "42",
    slug: "getstorage",
    title: "GetStorage",
    track: "GetX Storage",
    folder: "42_getstorage",
    level: "Beginner",
    goal: "Menyimpan data kecil di local storage.",
    files: ["lib/main.dart", "lib/controller/login.dart", "lib/pages/login.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Inisialisasi `GetStorage` sebelum app berjalan.",
      "Menyimpan data dengan `write`.",
      "Membaca data dengan `read`.",
      "Menghapus data dengan `remove`."
    ],
    detail: "`GetStorage` adalah pustaka penyimpanan lokal (Local Key-Value Storage) super cepat dan efisien. Sangat ideal untuk menyimpan data kecil seperti status 'Ingat Saya' (Remember Me), token autentikasi, status Dark Mode, atau pengaturan preferensi pengguna.",
    concept: ["GetStorage.init", "write", "read", "remove", "Remember login", "Local cache"],
    snippet: `void main() async {
  await GetStorage.init();
  runApp(const MyApp());
}

final box = GetStorage();

box.write("dataRemember", {
  "email": emailC.text,
  "password": passwordC.text,
});

box.remove("dataRemember");`,
    explanation: [
      "`await GetStorage.init()` — Proses inisialisasi awal driver memori lokal sebelum `runApp` dipanggil.",
      "`box.write('key', data)` — Menyimpan data ke memori HP berbasis pasangan Key-Value.",
      "`box.read('key')` — Membaca data tersimpan berdasarkan nama Key-nya.",
      "`box.remove('key')` — Menghapus data spesifik saat logout atau reset."
    ],
    exercise: ["Simpan status dark mode.", "Baca data remember saat halaman login dibuka.", "Hapus data saat logout."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "43",
    slug: "get-cli",
    title: "Get CLI",
    track: "GetX Architecture",
    folder: "43_get_cli",
    level: "Beginner",
    goal: "Mengenal struktur project Get CLI.",
    files: ["lib/main.dart", "lib/app/modules/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Memahami folder `modules`.",
      "Mengenal binding, controller, dan view per fitur.",
      "Melihat route di `app_pages.dart` dan `app_routes.dart`.",
      "Menyiapkan struktur yang lebih scalable."
    ],
    detail: "`Get CLI` adalah alat Command Line Interface bawaan GetX yang secara otomatis memotong dan merapikan arsitektur project Flutter ke dalam pola Modul (`modules`). Setiap fitur (misalnya Module Home, Module Login) diisolasi memiliki folder `bindings/`, `controllers/`, dan `views/` tersendiri.",
    concept: ["Get CLI", "Modules", "Bindings", "Controllers", "Views", "Routes"],
    snippet: `GetMaterialApp(
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);`,
    explanation: [
      "Struktur Modular — Memisahkan kode berdasarkan Fitur/Modul sehingga ketika tim berkembang, pengerjaan tidak akan saling bertabrakan.",
      "`AppPages.routes` — Seluruh daftar rute dikumpulkan teratur di folder `app/routes/`.",
      "Pola Standar Industri — Menjadi standar arsitektur profesional bagi pengembang aplikasi Flutter berbasis GetX."
    ],
    exercise: ["Tambahkan module baru.", "Tambahkan route baru.", "Pindahkan logic halaman ke controller."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "44",
    slug: "latihan-get-cli",
    title: "Latihan Get CLI",
    track: "GetX Architecture",
    folder: "44_latihan_get_cli",
    level: "Beginner",
    goal: "Menambahkan model dan provider pada struktur Get CLI.",
    files: ["lib/main.dart", "lib/app/data/models/user_model.dart", "lib/app/data/providers/user_provider.dart", "lib/app/modules/home/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Membuat provider dengan `GetConnect`.",
      "Mengatur base URL.",
      "Mengirim API key placeholder lewat header.",
      "Parsing response ke model."
    ],
    detail: "Modul ini melengkapi arsitektur Get CLI dengan menambahkan Lapisan Data (`app/data/`). `Provider` bertugas mengambil data dari API, `Model` mengonversi JSON menjadi Objek Dart, `Controller` memproses logika bisnis, dan `View` murni menampilkan UI.",
    concept: ["GetConnect", "Provider", "Model", "Base URL", "Header", "API key placeholder"],
    snippet: `class UserProvider extends GetConnect {
  @override
  void onInit() {
    httpClient.baseUrl = 'https://reqres.in';

    httpClient.addRequestModifier<dynamic>((request) {
      request.headers['x-api-key'] = 'API-KEY-KAMU';
      return request;
    });

    super.onInit();
  }

  Future<User?> getUser(int id) async {
    final response = await get('/api/users/$id');
    if (!response.isOk || response.body == null) return null;
    return User.fromJson(response.body["data"]);
  }
}`,
    explanation: [
      "`GetConnect` — Modul HTTP bawaan GetX yang ringkas tanpa memerlukan package eksternal `http`.",
      "`httpClient.baseUrl` — Mengatur URL domain utama backend sehingga pemanggilan endpoint cukup menuliskan path sisa (`/api/users`).",
      "`addRequestModifier` — Menyisipkan header atau API Key secara otomatis ke setiap request jaringannya."
    ],
    exercise: ["Tambahkan method create user.", "Tampilkan loading di view.", "Tangani response error dengan snackbar."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "45",
    slug: "studycase-rajaongkir",
    title: "Study Case RajaOngkir",
    track: "Study Case",
    folder: "45_studycase_rajaongkir",
    level: "Beginner+",
    goal: "Membangun fitur cek ongkir dengan GetX, model, provider, controller, dan reactive UI.",
    files: ["lib/main.dart", "lib/app/data/models/*", "lib/app/data/providers/*", "lib/app/modules/home/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Membuat model provinsi, kota, kurir, dan cost.",
      "Mengambil data melalui provider.",
      "Mengelola pilihan dropdown dengan `Rxn`.",
      "Menampilkan loading state terpisah.",
      "Mengirim request ongkir dengan body dan header API key placeholder."
    ],
    detail: "Studi Kasus Puncak! Di sini kamu membangun aplikasi Cek Ongkos Kirim riil menggunakan API RajaOngkir. Menggabungkan seluruh konsep yang dipelajari: Arsitektur Get CLI, Provider `GetConnect`, Objek Model, Reactive State (`Rxn`, `assignAll`), Dropdown saling tergantung (Dependent Dropdown), dan indikator Loading.",
    concept: ["Model", "Provider", "Get.find", "RxList", "Rxn", "assignAll", "Loading state", "POST request"],
    snippet: `class HomeController extends GetxController {
  final ProvinceProvider provinceProvider = Get.find();
  final CityProvider cityProvider = Get.find();
  final CostProvider costProvider = Get.find();

  final provinceList = <Province>[].obs;
  final originCityList = <City>[].obs;
  final destinationCityList = <City>[].obs;

  final selectedOriginProvince = Rxn<Province>();
  final selectedOriginCity = Rxn<City>();

  Future<void> loadProvince() async {
    try {
      isLoadingProvince.value = true;
      final result = await provinceProvider.getProvinces();
      provinceList.assignAll(result);
    } finally {
      isLoadingProvince.value = false;
    }
  }
}`,
    explanation: [
      "`Rxn<Province>()` — Variabel reaktif nullable yang cocok untuk menampung opsi Dropdown yang awalnya kosong.",
      "`provinceList.assignAll(result)` — Memperbarui seluruh isi list reaktif sekaligus dan memicu pembaruan UI secara instan.",
      "`try ... finally` — Blok penanganan yang menjamin status `isLoading` akan selalu dimatikan kembali, baik saat data sukses diunduh maupun saat terjadi kegagalan jaringan."
    ],
    exercise: ["Validasi semua dropdown sebelum cek ongkir.", "Tambahkan error snackbar jika request gagal.", "Pisahkan constant API key dan base URL ke file config."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "46",
    slug: "theme-and-constant-color",
    title: "Theme and Constant Color",
    track: "GetX UI",
    folder: "46_theme_and_contscolor",
    level: "Beginner+",
    goal: "Mengatur theme dan warna global aplikasi.",
    files: ["lib/main.dart", "lib/app/constant/color.dart", "lib/app/modules/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Memindahkan konfigurasi warna ke file constant.",
      "Menggunakan theme di `GetMaterialApp`.",
      "Membuat style aplikasi lebih konsisten.",
      "Menyiapkan pondasi light/dark theme."
    ],
    detail: "Manajemen Warna dan Tema Global. Daripada menuliskan kode warna secara acak (`Colors.blue`, `Color(0xFF123456)`) di setiap file UI yang membuat aplikasi tidak konsisten, modul ini mengajarkan memusatkan seluruh tema warna ke dalam `app/constant/color.dart` dan `ThemeData`.",
    concept: ["ThemeData", "Constant color", "GetMaterialApp theme", "Design consistency"],
    snippet: `GetMaterialApp(
  theme: Light,
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);`,
    explanation: [
      "Konsistensi Desain — Mengubah warna utama aplikasi di satu file constant otomatis akan mengubah warna di seluruh layar aplikasi.",
      "`ThemeData` — Menyediakan tema standar untuk warna tombol, font, background, dan kustomisasi Dark Mode.",
      "Kerapihan Kode — Menjadikan kode produksi siap dipelihara dan mudah dikembangkan untuk jangka panjang."
    ],
    exercise: ["Buat `Dark` theme.", "Tambahkan tombol ganti theme.", "Simpan pilihan theme dengan GetStorage."],
    run: "flutter pub get\nflutter run"
  }
];

const tracks = [
  "Dart Core",
  "Flutter Basic",
  "Flutter Interaction",
  "Flutter Navigation",
  "UI Practice",
  "HTTP & API",
  "Mini Project",
  "Packages",
  "GetX",
  "GetX State",
  "GetX Navigation",
  "GetX Architecture",
  "GetX Storage",
  "GetX UI",
  "Study Case"
];

const state = {
  current: modules[0],
  query: "",
  mobileOpen: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markdownInline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function getFilteredModules() {
  const q = state.query.trim().toLowerCase();
  if (!q) return modules;
  return modules.filter((module) => {
    const haystack = [
      module.id,
      module.title,
      module.track,
      module.folder,
      module.goal,
      ...module.learn,
      ...module.concept
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function getCodeFiles(module) {
  const files = (window.CODE_SNAPSHOTS && window.CODE_SNAPSHOTS[module.folder]) || [];
  if (files.length) return files;
  return [{
    path: module.files[0] || "highlight.dart",
    language: getSnippetLanguage(module),
    purpose: "Snapshot source lengkap belum tersedia di code-data.js, jadi docs menampilkan highlight utama modul ini sebagai fallback.",
    source: module.snippet
  }];
}

function getPackageLinks(module) {
  return (window.PACKAGE_LINKS && window.PACKAGE_LINKS[module.folder]) || [];
}

function languageFromFile(file) {
  if (!file) return "text";
  return file.language || (file.path.endsWith(".yaml") ? "yaml" : file.path.endsWith(".dart") ? "dart" : "text");
}

function getSnippetLanguage(module) {
  const text = module.snippet.trim();
  if (text.startsWith("dev_dependencies:") || text.includes("flutter_launcher_icons:")) return "yaml";
  return "dart";
}

function renderSidebar() {
  const wrapper = $("#moduleList");
  const filtered = getFilteredModules();
  wrapper.innerHTML = tracks.map((track) => {
    const items = filtered.filter((module) => module.track === track);
    if (!items.length) return "";
    return `
      <section class="mb-6">
        <p class="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">${track}</p>
        <div class="grid gap-1">
          ${items.map((module) => `
            <button data-slug="${module.slug}" class="module-link ${module.slug === state.current.slug ? "active" : ""} group flex w-full items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">
              <span class="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-slate-500 group-hover:bg-cyan-400/10 group-hover:text-cyan-200">${module.id}</span>
              <span class="min-w-0">
                <span class="block truncate font-bold">${module.title}</span>
                <span class="mt-0.5 block truncate text-xs text-slate-600">${module.folder}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  $$(".module-link").forEach((button) => {
    button.addEventListener("click", () => {
      openModule(button.dataset.slug);
      closeMobileSidebar();
    });
  });
}

function renderToc() {
  const toc = $("#toc");
  const module = state.current;
  const sections = [
    ["overview", "Overview"],
    ["target", "Target Belajar"],
    ["files", "File Penting"],
    ["packages", "Packages"],
    ["concepts", "Konsep"],
    ["code", "Highlight Kode"],
    ["source-files", "Source Files"],
  ];
  if (module.deepDive && module.deepDive.length) {
    sections.push(["deep-dive", "Deep Dive"]);
    module.deepDive.forEach((section, i) => {
      sections.push([`deep-dive-${i}`, section.title]);
    });
  }
  sections.push(["exercise", "Latihan"]);
  sections.push(["run", "Cara Run"]);
  toc.innerHTML = sections.map(([id, label]) => `
    <a href="#${id}" class="toc-link block border-l-2 border-white/10 py-1.5 pl-3 text-sm font-semibold text-slate-500 transition hover:border-cyan-300 hover:text-cyan-200">${label}</a>
  `).join("");
}

function renderPackageLinks(module) {
  const packages = getPackageLinks(module);
  if (!packages.length) {
    return `
      <section id="packages" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-semibold text-white">Package yang Dipakai</h2>
            <p class="mt-1 text-sm leading-6 text-slate-400">Modul ini tidak memakai package eksternal khusus selain bawaan Flutter/Dart.</p>
          </div>
          <span class="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-400">Core only</span>
        </div>
      </section>
    `;
  }

  return `
    <section id="packages" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-white">Package yang Dipakai</h2>
          <p class="mt-1 text-sm leading-6 text-slate-400">Link langsung ke pub.dev untuk dependency penting di modul ini.</p>
        </div>
        <span class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200">${packages.length} package</span>
      </div>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        ${packages.map((pkg) => `
          <a href="${pkg.url}" target="_blank" rel="noreferrer" class="group rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
            <span class="block font-bold text-slate-100 group-hover:text-cyan-200">${escapeHtml(pkg.name)}</span>
            <span class="mt-1 block text-sm font-semibold text-slate-500">${escapeHtml(pkg.version || "pub.dev")}</span>
            <span class="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">Buka package</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCodeFiles(module) {
  const files = getCodeFiles(module);
  if (!files.length) {
    return `
      <section id="source-files" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">Source Files Lengkap</h2>
        <p class="mt-3 text-sm leading-7 text-slate-400">Belum ada snapshot source file untuk modul ini.</p>
      </section>
    `;
  }

  return `
    <section id="source-files" class="lesson-card mt-6 overflow-hidden rounded-2xl">
      <div class="border-b border-white/10 px-5 py-4 sm:px-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-white">Source Files Lengkap</h2>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Semua file penting modul ini ditampilkan di sini. Pilih file, baca kegunaannya, lalu lihat kode lengkapnya.</p>
          </div>
          <span class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-200">${files.length} file</span>
        </div>
      </div>
      <div class="grid lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div class="docs-scrollbar max-h-[38rem] overflow-y-auto border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
          <div class="grid gap-2">
            ${files.map((file, index) => `
              <button data-file-index="${index}" class="code-tab ${index === 0 ? "active" : ""} rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">
                <span class="block truncate font-bold">${escapeHtml(file.path)}</span>
                <span class="mt-1 block text-xs font-semibold text-slate-600">${escapeHtml(file.language)}</span>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="min-w-0">
          ${files.map((file, index) => `
            <article class="source-panel" data-panel-index="${index}" ${index === 0 ? "" : "hidden"}>
              <div class="border-b border-white/10 bg-white/[0.025] px-5 py-4">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="truncate docs-code text-sm font-bold text-cyan-200">${escapeHtml(file.path)}</p>
                    <p class="mt-1 text-sm leading-6 text-slate-400">${escapeHtml(file.purpose)}</p>
                  </div>
                  <button data-copy-file="${index}" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">Copy file</button>
                </div>
              </div>
              <pre class="docs-code max-h-[38rem] overflow-auto bg-[#050816] p-5 text-sm leading-7"><code class="language-${languageFromFile(file)}">${escapeHtml(file.source)}</code></pre>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function bindCodeFileTabs(module) {
  const files = getCodeFiles(module);
  $$(".code-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.fileIndex;
      $$(".code-tab").forEach((item) => item.classList.remove("active"));
      $$(".source-panel").forEach((panel) => panel.hidden = panel.dataset.panelIndex !== index);
      button.classList.add("active");
      const activePanel = $(`.source-panel[data-panel-index="${index}"]`);
      if (window.Prism && activePanel) Prism.highlightAllUnder(activePanel);
    });
  });

  $$("[data-copy-file]").forEach((button) => {
    button.addEventListener("click", async () => {
      const file = files[Number(button.dataset.copyFile)];
      if (!file) return;
      await navigator.clipboard.writeText(file.source);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Copy file"), 1100);
    });
  });
}

function renderDeepDive(module) {
  if (!module.deepDive || !module.deepDive.length) return '';

  const colorMap = {
    cyan: { border: 'border-cyan-400/20', bg: 'bg-cyan-400/10', text: 'text-cyan-200', dot: 'bg-cyan-300' },
    emerald: { border: 'border-emerald-400/20', bg: 'bg-emerald-400/10', text: 'text-emerald-200', dot: 'bg-emerald-300' },
    violet: { border: 'border-violet-400/20', bg: 'bg-violet-400/10', text: 'text-violet-200', dot: 'bg-violet-300' },
    amber: { border: 'border-amber-400/20', bg: 'bg-amber-400/10', text: 'text-amber-200', dot: 'bg-amber-300' },
    slate: { border: 'border-white/10', bg: 'bg-white/[0.04]', text: 'text-slate-300', dot: 'bg-slate-400' },
  };

  function getColor(c) { return colorMap[c] || colorMap.slate; }

  const sections = module.deepDive.map((section, idx) => {
    let content = '';

    if (section.type === 'folder-tree' || section.type === 'folder-tree-mini' || section.type === 'widget-tree') {
      content = `
        <pre class="docs-code overflow-x-auto rounded-xl bg-[#050816] p-5 text-sm leading-7 text-emerald-200"><code>${escapeHtml(section.tree)}</code></pre>
        ${section.items ? `
          <div class="mt-5 grid gap-3">
            ${section.items.map(item => {
        const c = getColor(item.color);
        return `
                <div class="rounded-xl border ${c.border} ${c.bg} p-4">
                  <div class="flex items-center gap-2.5">
                    <i data-lucide="${item.icon}" class="w-5 h-5 ${c.text}"></i>
                    <code class="text-sm font-bold ${c.text}">${escapeHtml(item.name)}</code>
                  </div>
                  <p class="mt-2 text-sm leading-7 text-slate-300">${markdownInline(item.detail)}</p>
                </div>
              `;
      }).join('')}
          </div>
        ` : ''}
      `;
    }

    else if (section.type === 'code-explain') {
      content = `
        <pre class="docs-code overflow-x-auto rounded-xl bg-[#050816] p-5 text-sm leading-7"><code class="language-${section.language || 'dart'}">${escapeHtml(section.code)}</code></pre>
        ${section.codeExplanation ? `
          <ul class="mt-5 grid gap-3">
            ${section.codeExplanation.map(item => `
              <li class="flex gap-3 text-sm leading-7 text-slate-300">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300"></span>
                <span>${markdownInline(item)}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
      `;
    }

    else if (section.type === 'symbol-table') {
      content = `
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-white/10">
                <th class="px-4 py-3 text-left font-bold text-slate-400">Simbol</th>
                <th class="px-4 py-3 text-left font-bold text-slate-400">Nama</th>
                <th class="px-4 py-3 text-left font-bold text-slate-400">Kegunaan</th>
              </tr>
            </thead>
            <tbody>
              ${section.symbols.map((sym, i) => `
                <tr class="border-b border-white/[0.06] ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}">
                  <td class="px-4 py-3"><code class="rounded bg-cyan-400/15 px-2 py-1 text-sm font-bold text-cyan-200">${escapeHtml(sym.symbol)}</code></td>
                  <td class="px-4 py-3 font-semibold text-slate-200">${escapeHtml(sym.name)}</td>
                  <td class="px-4 py-3 leading-6 text-slate-300">${markdownInline(sym.usage)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    else if (section.type === 'comparison') {
      const lc = getColor(section.left.color);
      const rc = getColor(section.right.color);
      content = `
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="rounded-xl border ${lc.border} ${lc.bg} p-5">
            <h4 class="text-lg font-bold ${lc.text}">${escapeHtml(section.left.title)}</h4>
            <ul class="mt-3 grid gap-2">
              ${section.left.points.map(p => `
                <li class="flex gap-2 text-sm leading-7 text-slate-300">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full ${lc.dot}"></span>
                  <span>${markdownInline(p)}</span>
                </li>
              `).join('')}
            </ul>
            <pre class="docs-code mt-4 overflow-x-auto rounded-lg bg-[#050816] p-4 text-sm leading-7"><code class="language-dart">${escapeHtml(section.left.code)}</code></pre>
          </div>
          <div class="rounded-xl border ${rc.border} ${rc.bg} p-5">
            <h4 class="text-lg font-bold ${rc.text}">${escapeHtml(section.right.title)}</h4>
            <ul class="mt-3 grid gap-2">
              ${section.right.points.map(p => `
                <li class="flex gap-2 text-sm leading-7 text-slate-300">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full ${rc.dot}"></span>
                  <span>${markdownInline(p)}</span>
                </li>
              `).join('')}
            </ul>
            <pre class="docs-code mt-4 overflow-x-auto rounded-lg bg-[#050816] p-4 text-sm leading-7"><code class="language-dart">${escapeHtml(section.right.code)}</code></pre>
          </div>
        </div>
      `;
    }

    else if (section.type === 'flow') {
      content = `
        <div class="grid gap-3">
          ${section.steps.map((s, i) => `
            <div class="flex items-start gap-4">
              <div class="flex flex-col items-center">
                <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-sm font-bold text-cyan-200 shadow-lg shadow-cyan-900/20">${s.step}</span>
                ${i < section.steps.length - 1 ? '<div class="mt-1 h-full w-px bg-gradient-to-b from-cyan-400/30 to-transparent" style="min-height:24px"></div>' : ''}
              </div>
              <div class="pb-4">
                <p class="text-base font-bold text-white">${markdownInline(s.label)}</p>
                <p class="mt-1 text-sm leading-7 text-slate-400">${markdownInline(s.detail)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <section id="deep-dive-${idx}" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">${escapeHtml(section.title)}</h2>
        <p class="mt-2 text-sm leading-7 text-slate-400">${markdownInline(section.description)}</p>
        <div class="mt-5">${content}</div>
      </section>
    `;
  });

  return `
    <div id="deep-dive" class="mt-8">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
        <span class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Deep Dive</span>
        <div class="h-px flex-1 bg-gradient-to-l from-violet-400/30 to-transparent"></div>
      </div>
      ${sections.join('')}
    </div>
  `;
}

function renderContent() {
  const module = state.current;
  $("#breadcrumb").innerHTML = `
    <a href="./index.html" class="hover:text-cyan-200">Home</a>
    <span class="text-slate-700">/</span>
    <span>${module.track}</span>
    <span class="text-slate-700">/</span>
    <span class="font-bold text-slate-200">${module.id}. ${module.title}</span>
  `;

  $("#lesson").innerHTML = `
    <section id="overview" class="lesson-card rounded-2xl p-5 sm:p-7">
      <div class="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div class="mb-4 flex flex-wrap gap-2">
            <span class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-200">${module.track}</span>
            <span class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-200">${module.level}</span>
            <span class="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-bold text-slate-300">${module.folder}</span>
          </div>
          <h1 class="max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">${module.id}. ${module.title}</h1>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">${module.detail}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Goal</p>
          <p class="mt-1 max-w-xs text-sm font-bold leading-6 text-slate-200">${module.goal}</p>
        </div>
      </div>
    </section>

    <section id="target" class="mt-6 grid gap-4 lg:grid-cols-2">
      <div class="lesson-card rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">Target Belajar</h2>
        <ul class="mt-4 grid gap-3">
          ${module.learn.map((item) => `<li class="flex gap-3 text-sm leading-7 text-slate-300"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"></span><span>${markdownInline(item)}</span></li>`).join("")}
        </ul>
      </div>
      <div id="files" class="lesson-card rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">File Penting</h2>
        <div class="mt-4 grid gap-2">
          ${module.files.map((file) => `<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-bold text-slate-300"><span class="h-2 w-2 rounded-full bg-emerald-300"></span><code>${file}</code></div>`).join("")}
        </div>
      </div>
    </section>

    <section id="concepts" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Konsep Kunci</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        ${module.concept.map((item) => `<span class="rounded-lg border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-sm font-bold text-cyan-100">${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>

    ${renderPackageLinks(module)}

    <section id="code" class="lesson-card mt-6 overflow-hidden rounded-2xl">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.025] px-5 py-4">
        <div>
          <h2 class="text-xl font-semibold text-white">Highlight Kode</h2>
          <p class="mt-1 text-sm text-slate-400">Potongan kode inti yang menjelaskan konsep utama modul.</p>
        </div>
        <button id="copyCode" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">Copy</button>
      </div>
      <pre class="docs-code overflow-x-auto bg-[#050816] p-5 text-sm leading-7"><code class="language-${getSnippetLanguage(module)}">${escapeHtml(module.snippet)}</code></pre>
    </section>

    <section class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Keterangan Kode</h2>
      <ul class="mt-4 grid gap-3">
        ${module.explanation.map((item) => `<li class="flex gap-3 text-sm leading-7 text-slate-300"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-300"></span><span>${markdownInline(item)}</span></li>`).join("")}
      </ul>
    </section>

    ${renderCodeFiles(module)}

    ${renderDeepDive(module)}

    <section id="exercise" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Latihan Lanjutan</h2>
      <div class="mt-4 grid gap-3">
        ${module.exercise.map((item, index) => `
          <div class="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-300/15 text-sm font-bold text-amber-200">${index + 1}</span>
            <p class="text-sm leading-7 text-slate-300">${markdownInline(item)}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="run" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Cara Menjalankan</h2>
      <pre class="docs-code mt-4 overflow-x-auto rounded-xl bg-[#050816] p-4 text-sm leading-7"><code class="language-bash">cd ${module.folder}
${escapeHtml(module.run)}</code></pre>
    </section>

    <footer class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-sm font-semibold text-slate-500">
      <span>Created by <span class="text-slate-300">Naufal Nabil</span></span>
      <span>© 2026 Naufal Nabil</span>
    </footer>
  `;

  $("#copyCode").addEventListener("click", async () => {
    await navigator.clipboard.writeText(module.snippet);
    $("#copyCode").textContent = "Copied";
    setTimeout(() => ($("#copyCode").textContent = "Copy"), 1100);
  });

  bindCodeFileTabs(module);
  renderToc();
  updatePrevNext();
  if (window.Prism) Prism.highlightAllUnder($("#lesson"));
  if (window.lucide) lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePrevNext() {
  const index = modules.findIndex((module) => module.slug === state.current.slug);
  const prev = modules[index - 1];
  const next = modules[index + 1];
  $("#prevModule").disabled = !prev;
  $("#nextModule").disabled = !next;
  $("#prevModule").textContent = prev ? `← ${prev.id}. ${prev.title}` : "Awal materi";
  $("#nextModule").textContent = next ? `${next.id}. ${next.title} →` : "Selesai";
}

function openModule(slug, push = true) {
  const module = modules.find((item) => item.slug === slug) || modules[0];
  state.current = module;
  if (push) {
    history.replaceState(null, "", `#${module.slug}`);
  }
  renderSidebar();
  renderContent();
}

function openFromHash() {
  const slug = location.hash.replace("#", "");
  openModule(slug || modules[0].slug, false);
}

function openMobileSidebar() {
  state.mobileOpen = true;
  $("#sidebar").classList.remove("-translate-x-full");
  $("#overlay").classList.remove("hidden");
}

function closeMobileSidebar() {
  state.mobileOpen = false;
  $("#sidebar").classList.add("-translate-x-full");
  $("#overlay").classList.add("hidden");
}

function bindEvents() {
  const search = $("#search");
  if (search) search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSidebar();
  });

  const menuButton = $("#menuButton");
  const closeSidebarButton = $("#closeSidebar");
  const overlay = $("#overlay");
  if (menuButton) menuButton.addEventListener("click", openMobileSidebar);
  if (closeSidebarButton) closeSidebarButton.addEventListener("click", closeMobileSidebar);
  if (overlay) overlay.addEventListener("click", closeMobileSidebar);

  $("#prevModule").addEventListener("click", () => {
    const index = modules.findIndex((module) => module.slug === state.current.slug);
    if (modules[index - 1]) openModule(modules[index - 1].slug);
  });

  $("#nextModule").addEventListener("click", () => {
    const index = modules.findIndex((module) => module.slug === state.current.slug);
    if (modules[index + 1]) openModule(modules[index + 1].slug);
  });

  window.addEventListener("hashchange", openFromHash);
}

function renderStats() {
  $("#moduleCount").textContent = modules.length;
  $("#trackCount").textContent = tracks.length;
}

bindEvents();
renderStats();
openFromHash();
