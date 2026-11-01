---
title: "Stateless vs Stateful"
description: "Memahami kapan widget perlu state."
---

# Stateless vs Stateful

> **Beginner Track** · Modul 06 · Flutter Basic · Beginner

## Target belajar

Memahami kapan widget perlu state.

## Yang akan dipelajari

- Membedakan UI statis dan UI yang berubah.
- Mengenal `StatefulWidget` dan object `State`.
- Menggunakan `setState` untuk rebuild UI.
- Membuat counter sederhana.

## Ringkasan

Dalam Flutter, 'State' adalah data atau informasi yang bisa berubah saat aplikasi berjalan (misalnya jumlah keranjang belanja, teks input, atau status centang). `StatelessWidget` dipakai untuk tampilan yang tidak pernah berubah setelah digambar, sedangkan `StatefulWidget` dipakai ketika tampilan harus merespon perubahan data pengguna secara real-time.

## Konsep kunci

- StatelessWidget
- StatefulWidget
- State object
- setState
- Rebuild

## Contoh inti

```dart
class CounterPage extends StatefulWidget {
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
}
```

## Penjelasan

- `StatefulWidget` — Widget yang memiliki variabel data yang nilainya dinamis (bisa berubah).
- `class _CounterPageState` — Objek State tempat menyimpan logika dan variabel internal (`counter`).
- `setState(() { ... })` — Perintah KUNCI di Flutter! Fungsi ini memberitahu Flutter bahwa data di dalamnya telah berubah, sehingga Flutter akan secara otomatis memanggil ulang method `build()` untuk menggambar ulang tampilan dengan angka baru.
- Apa yang terjadi jika lupa `setState`? — Nilai variabel di memori HP berubah, tetapi tampilan di layar HP TIDAK AKAN ter-update karena Flutter tidak tahu ada data yang berubah.

## Latihan

- Tambahkan tombol kurang.
- Tambahkan tombol reset.
- Tampilkan pesan jika counter lebih dari 10.

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
  runApp(myApp());
}
// note : StatelessWidget tidak bisa merubha tampilan , gunakabn statefullwidget untuk update data ke tampilan agar bisa berubah,
// dan gunakan fungsi setState(),singkatnya statefullwidget untuk tampilan data dinamis,sedangkan StatelessWidget untuk data statik

class myApp extends StatefulWidget {
  @override
  State<myApp> createState() => _myAppState();
}

class _myAppState extends State<myApp> {
  int nilai = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Counter Apps'),
          centerTitle: true,
          backgroundColor: Colors.blue[200],
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "$nilai",
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 40),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      nilai--;
                      setState(
                        () {},
                      ); //fungsi untuk refresh tampilan otomatis setiap terjadi perubahan
                    },
                    child: Icon(Icons.remove),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      nilai++;
                      setState(() {});
                    },
                    child: Icon(Icons.add),
                  ),
                ],
              ),
            ],
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
name: stateless_vs_statefull
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
