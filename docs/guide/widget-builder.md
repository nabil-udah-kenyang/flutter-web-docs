---
title: "Widget Builder"
description: "Membuat widget berulang dengan builder."
---

# Widget Builder

> **Beginner Track** · Modul 04 · Flutter Basic · Beginner

## Target belajar

Membuat widget berulang dengan builder.

## Yang akan dipelajari

- Menggunakan `ListView.builder` untuk list dinamis.
- Memakai `index` untuk mengambil data.
- Menghindari penulisan widget berulang secara manual.
- Menyiapkan pola untuk list API.

## Ringkasan

`ListView.builder` adalah teknik pembuatan daftar item secara efisien (Lazy Loading). Alih-alih membuat seluruh 1000 item sekaligus yang menguras memori HP, `builder` hanya merender item yang sedang tampil di layar ponsel penggunanya.

## Konsep kunci

- ListView.builder
- itemCount
- itemBuilder
- index
- Dynamic UI

## Contoh inti

```dart
ListView.builder(
  itemCount: 10,
  itemBuilder: (context, index) {
    return KotakWarna(
      warna: Colors.primaries[index % Colors.primaries.length],
    );
  },
);
```

## Penjelasan

- `itemCount: 10` — Menentukan total jumlah elemen yang akan dibuat dalam daftar.
- `itemBuilder: (context, index) { ... }` — Fungsi pembuat tampilan yang akan dipanggil berulang kali untuk setiap posisi `index` (dimulai dari 0 hingga itemCount-1).
- `index` — Urutan nomor posisi item saat ini (0, 1, 2, ...).
- Sumbu scroll otomatis — `ListView` secara default sudah memiliki kemampuan scroll vertikal tanpa perlu dibungkus widget scroll tambahan.

## Latihan

- Buat list nama lalu tampilkan dengan `ListTile`.
- Tambahkan nomor urut dari `index + 1`.
- Ubah `ListView` menjadi `GridView.builder`.

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
import 'dart:math';

import 'package:flutter/material.dart';
import 'widgets/kotakwarna.dart';

void main() {
  runApp(BuilderWidget());
}

class BuilderWidget extends StatelessWidget {
  // //ini list mapping manual untuk data ke widget
  // List data = List.generate(
  //   15,
  //   (index) => {
  //     "text": "Kotak - ${index + 1}",
  //     "color": Color.fromARGB(
  //       255,
  //       200 + Random().nextInt(256),
  //       200 + Random().nextInt(256),
  //       200 + Random().nextInt(256),
  //     ),
  //   },
  // );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Widget Builder'),
          leading: Icon(Icons.android),
          backgroundColor: Colors.indigo[400],
        ),
        //kalau ini menggunakan builder (umumnya da listview builder,dan gridView builder)
        body: ListView.builder(
          itemCount: 5,
          itemBuilder: (context, index) => KotakWarna(
            text: "Kotak ke - ${index + 1}",
            warna: Color.fromARGB(
              255,
              Random().nextInt(255),
              Random().nextInt(255),
              Random().nextInt(255),
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/widgets/kotakwarna.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

//Class ini dibuat dengan extractWidget, mirip seperti komponen berulang dan bisa di letak dalam folder lainya, dan dibuatkan file sendiri
class KotakWarna extends StatelessWidget {
  const KotakWarna({super.key, required this.text, required this.warna});

  final String text;
  final Color warna;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      height: 150,
      color: warna,
      child: Center(child: Text(text)),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: widget_builder
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
