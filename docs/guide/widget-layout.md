---
title: "Widget Layout"
description: "Belajar menyusun widget di layar dengan layout dasar."
---

# Widget Layout

> **Beginner Track** · Modul 02 · Flutter Basic · Beginner

## Target belajar

Belajar menyusun widget di layar dengan layout dasar.

## Yang akan dipelajari

- Menggunakan `Column` untuk menyusun widget vertikal.
- Menggunakan `Row` untuk menyusun widget horizontal.
- Mengatur posisi dengan `mainAxisAlignment` dan `crossAxisAlignment`.
- Memahami ukuran dan warna lewat `Container`.

## Ringkasan

Layout adalah fondasi utama dalam mendesain UI Flutter. Hampir 90% tampilan aplikasi nyata diciptakan dari kombinasi `Row` (baris kesamping), `Column` (kolom ke bawah), `Container` (kotak serbaguna), dan `Padding` (jarak dalam). Di modul ini, kamu akan melatih intuisi dalam mengatur arah sumbu utama (main axis) dan sumbu silang (cross axis).

## Konsep kunci

- Column
- Row
- Container
- Alignment
- Spacing
- Padding

## Contoh inti

```dart
Scaffold(
  appBar: AppBar(title: const Text("Widget Layout")),
  body: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Container(width: 100, height: 100, color: Colors.red),
      Container(width: 100, height: 100, color: Colors.green),
    ],
  ),
);
```

## Penjelasan

- `Column` — Menyusun anak-anaknya (`children`) secara vertikal dari atas ke bawah.
- `Row` — Alternatif dari `Column`, menyusun anak-anaknya secara horizontal dari kiri ke kanan.
- `mainAxisAlignment: MainAxisAlignment.center` — Menata posisi elemen di sepanjang sumbu utama. Untuk `Column`, sumbu utamanya adalah vertikal (atas-bawah). Untuk `Row`, sumbu utamanya adalah horizontal (kiri-kanan).
- `crossAxisAlignment` — Menata posisi elemen di sumbu silang (kebalikan dari sumbu utama).
- `Container` — Widget kotak serbaguna untuk mengatur `width` (lebar), `height` (tinggi), `color` (warna latar), `padding` (jarak dalam), dan `margin` (jarak luar).
- `children: [...]` — Menerima List widget karena `Column` atau `Row` bisa menampung banyak elemen sekaligus.

## Latihan

- Ubah `Column` menjadi `Row`.
- Tambahkan `SizedBox` sebagai jarak antar kotak.
- Bungkus kotak dengan `Padding`.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const HomePage());
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.green[800],
          leading: const Icon(Icons.home),
          title: const Text("Flutter Layout"),
        ),

        body: Container(
          margin: EdgeInsets.all(10.0), // ✅ ditutup di sini
          child: SingleChildScrollView(
            child: Column(
              //membuat layout kebawah (Column),kalau mau nyamping pakainya (Row)
              //Listview -> membuat scrolling dengan lebih mudah tanpa widget singlechild scrolling
              children: [
                Row(
                  children: const [
                    Icon(Icons.archive),
                    SizedBox(width: 5), // biar ga nempel
                    Text(
                      "Artikel Terbaru",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Colors.cyan,
                        fontStyle: FontStyle.italic,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 15),

                Card(
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 15),

                Card(
                  color: Colors.red,
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 15),

                Card(
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 15),

                Card(
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 15),

                Card(
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),

                const SizedBox(height: 15),

                Card(
                  child: Column(
                    children: [
                      Image.network(
                        'https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561', // ✅ ganti ke URL gambar langsung
                      ),
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text('Candi Borobudur'),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: widget_layout
description: "A new Flutter project."
# The following line prevents the package from being accidentally published to
# pub.dev using `flutter pub publish`. This is preferred for private packages.
publish_to: 'none' # Remove this line if you wish to publish to pub.dev

# The following defines the version and build number for your application.
# A version number is three numbers separated by dots, like 1.2.43
# followed by an optional build number separated by a +.
# Both the version and the builder number may be overridden in flutter
# build by specifying --build-name and --build-number, respectively.
# In Android, build-name is used as versionName while build-number used as versionCode.
# Read more about Android versioning at https://developer.android.com/studio/publish/versioning
# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.
# Read more about iOS versioning at
# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html
# In Windows, build-name is used as the major, minor, and patch parts
# of the product and file versions while build-number is used as the build suffix.
version: 1.0.0+1

environment:
  sdk: ^3.11.1

# Dependencies specify other packages that your package needs in order to work.
# To automatically upgrade your package dependencies to the latest versions
# consider running `flutter pub upgrade --major-versions`. Alternatively,
# dependencies can be manually updated by changing the version numbers below to
# the latest version available on pub.dev. To see which dependencies have newer
# versions available, run `flutter pub outdated`.
dependencies:
  flutter:
    sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^1.0.8

dev_dependencies:
  flutter_test:
    sdk: flutter

  # The "flutter_lints" package below contains a set of recommended lints to
  # encourage good coding practices. The lint set provided by the package is
  # activated in the `analysis_options.yaml` file located at the root of your
  # package. See that file for information about deactivating specific lint
  # rules and activating additional ones.
  flutter_lints: ^6.0.0

# For information on the generic Dart part of this file, see the
# following page: https://dart.dev/tools/pub/pubspec

# The following section is specific to Flutter packages.
flutter:

  # The following line ensures that the Material Icons font is
  # included with your application, so that you can use the icons in
  # the material Icons class.
  uses-material-design: true

  # To add assets to your application, add an assets section, like this:
  # assets:
  #   - images/a_dot_burr.jpeg
  #   - images/a_dot_ham.jpeg

  # An image asset can refer to one or more resolution-specific "variants", see
  # https://flutter.dev/to/resolution-aware-images

  # For details regarding adding assets from package dependencies, see
  # https://flutter.dev/to/asset-from-package

  # To add custom fonts to your application, add a fonts section here,
  # in this "flutter" section. Each entry in this list should have a
  # "family" key with the font family name, and a "fonts" key with a
  # list giving the asset and other descriptors for the font. For
  # example:
  # fonts:
  #   - family: Schyler
  #     fonts:
  #       - asset: fonts/Schyler-Regular.ttf
  #       - asset: fonts/Schyler-Italic.ttf
  #         style: italic
  #   - family: Trajan Pro
  #     fonts:
  #       - asset: fonts/TrajanPro.ttf
  #       - asset: fonts/TrajanPro_Bold.ttf
  #         weight: 700
  #
  # For details regarding fonts from package dependencies,
  # see https://flutter.dev/to/font-from-package
```
