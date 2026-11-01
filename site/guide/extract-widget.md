---
title: "Extract Widget"
description: "Memecah UI menjadi widget kecil agar kode lebih rapi."
---

# Extract Widget

> **Beginner Track** · Modul 03 · Flutter Basic · Beginner

## Target belajar

Memecah UI menjadi widget kecil agar kode lebih rapi.

## Yang akan dipelajari

- Mengenal custom widget.
- Memindahkan potongan UI ke file terpisah.
- Mengirim data ke widget lewat constructor.
- Membuat komponen reusable.

## Ringkasan

Ketika tampilan aplikasi semakin rumit, menumpuk ratusan baris kode di `main.dart` akan menciptakan 'Spaghetti Code' yang membingungkan. Extract Widget adalah teknik memecah UI menjadi komponen-komponen kecil tersendiri yang bisa dipakai berulang kali (reusable) dan dipisahkan ke dalam folder `widgets/`.

## Konsep kunci

- Custom widget
- Constructor
- Required parameter
- Reusable component

## Contoh inti

```dart
class KotakWarna extends StatelessWidget {
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
}
```

## Penjelasan

- `class KotakWarna extends StatelessWidget` — Membuat widget buatan sendiri (custom widget) yang siap dipakai berulang kali.
- `final Color warna` — Variabel penampung data (properti) yang akan diterima widget dari parent.
- `required this.warna` — Constructor yang wajib diisi saat widget dipanggil. Tanda `required` memastikan data warna tidak boleh kosong saat dipanggil.
- Manfaat Extract Widget — Kode `main.dart` menjadi sangat bersih, komponen mudah diuji secara terpisah, dan jika adaperubahan tampilan, kita cukup mengubah satu file widget saja.

## Latihan

- Tambahkan parameter `tinggi` dan `lebar`.
- Tambahkan parameter `child` untuk isi kotak.
- Buat widget baru bernama `JudulSection`.

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
import 'widgets/kotakwarna.dart';

void main() {
  runApp(extractWidget());
}

class extractWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('extractWidget'),
          leading: Icon(Icons.android),
          backgroundColor: Colors.indigo[400],
        ),
        body: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Column(
            children: [
              KotakWarna(text: 'Merah', warna: Colors.red),
              KotakWarna(text: 'Kuning', warna: Colors.yellow),
              KotakWarna(text: 'Hijau', warna: Colors.green),
              KotakWarna(text: 'Biru', warna: Colors.blue),
              KotakWarna(text: 'Pink', warna: Colors.pink),
              KotakWarna(text: 'Amber', warna: Colors.amber),
              KotakWarna(text: 'Lime', warna: Colors.lime),
              KotakWarna(text: 'Abu', warna: Colors.grey),
              KotakWarna(text: 'Coklat', warna: Colors.brown),
              KotakWarna(text: 'Ungu', warna: Colors.purple),
            ],
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
      width: 100,
      height: 100,
      color: warna,
      child: Center(child: Text(text)),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: extract_widget
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
