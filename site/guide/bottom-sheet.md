---
title: "Bottom Sheet"
description: "Menampilkan panel tambahan dari bawah layar."
---

# Bottom Sheet

> **Beginner Track** · Modul 13 · Flutter Interaction · Beginner

## Target belajar

Menampilkan panel tambahan dari bawah layar.

## Yang akan dipelajari

- Menggunakan `showModalBottomSheet`.
- Mengisi bottom sheet dengan widget.
- Menutup bottom sheet dengan `Navigator.pop`.
- Memilih kapan bottom sheet lebih cocok daripada dialog.

## Ringkasan

`Bottom Sheet` adalah panel dialog khusus yang meluncur keluar dari tepi bawah layar ponsel. Sangat nyaman untuk perangkat layar sentuh saat menampilkan menu pilihan opsi, filter produk, rincian pembayaran, atau opsi bagikan (share).

## Konsep kunci

- showModalBottomSheet
- Modal panel
- Action menu
- Navigator.pop

## Contoh inti

```dart
showModalBottomSheet(
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
);
```

## Penjelasan

- `showModalBottomSheet` — Fungsi pemanggil panel modal dari dasar layar HP.
- `builder: (context) { ... }` — Fungsi pembentuk komponen UI yang akan tampil di dalam panel modal bawah.
- Desain Ergonomis — Berbeda dari Dialog tengah yang mengharuskan tangan menjangkau tengah layar, Bottom Sheet sangat mudah dioperasikan dengan satu jempol tangan.
- `Navigator.pop(context)` — Menutup panel bottom sheet dan mengembalikannya turun ke bawah.

## Latihan

- Buat bottom sheet berisi 3 menu.
- Tambahkan icon di mebuhan.
- Buat bottom sheet untuk filter data.

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
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  const Myapp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bottom Sheet'),
        backgroundColor: Colors.amber[300],
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: ElevatedButton(
            onPressed: () {
              showModalBottomSheet(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.only(
                    topRight: Radius.circular(20),
                    topLeft: Radius.circular(20),
                  ),
                ),
                context: context,
                builder: (context) {
                  return Container(
                    height: 300,
                    // color: Colors.white,
                    child: ListView(
                      children: [
                        ListTile(
                          onTap: () => print('Klik foto'),
                          leading: Icon(Icons.photo),
                          title: Text('Foto'),
                        ),
                        ListTile(
                          onTap: () => print('Klik video'),
                          leading: Icon(Icons.videocam),
                          title: Text('Video'),
                        ),
                        ListTile(
                          onTap: () => print('Klik bagikan'),
                          leading: Icon(Icons.share),
                          title: Text('Share'),
                        ),
                        ListTile(
                          onTap: () => print('Klik like'),
                          leading: Icon(Icons.thumb_up),
                          title: Text('Like'),
                        ),
                        ListTile(
                          onTap: () => print('Klik Music'),
                          leading: Icon(Icons.music_video),
                          title: Text('Music'),
                        ),
                      ],
                    ),
                  );
                },
              );
            },
            child: Text("Show Buttom Sheet"),
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
name: bottom_sheet
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
