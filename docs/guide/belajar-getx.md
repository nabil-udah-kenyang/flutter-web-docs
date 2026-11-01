---
title: "Belajar GetX"
description: "Memulai GetX dengan `GetMaterialApp`."
---

# Belajar GetX

> **Beginner Track** · Modul 31 · GetX · Beginner

## Target belajar

Memulai GetX dengan `GetMaterialApp`.

## Yang akan dipelajari

- Menambahkan package `get`.
- Mengganti `MaterialApp` menjadi `GetMaterialApp`.
- Menyiapkan fitur GetX untuk snackbar, dialog, route, dan state.
- Memahami root app untuk GetX.

## Ringkasan

`GetMaterialApp` adalah gerbang utama jika kita ingin memanfaatkan seluruh ekosistem dan keajaiban GetX (seperti navigasi tanpa context, snackbar instan, dialog cepat, dan reactive state). Modul ini mengajarkan cara mengganti root widget `MaterialApp` bawaan menjadi `GetMaterialApp`.

## Konsep kunci

- GetX
- GetMaterialApp
- Package get
- Root app

## Contoh inti

```dart
void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    ),
  );
}
```

## Penjelasan

- `GetMaterialApp` — Menggantikan `MaterialApp` standar untuk menyuntikkan pengelola navigasi dan Overlay global milik GetX.
- Navigasi Tanpa Context — Setelah menggunakan `GetMaterialApp`, seluruh perintah navigasi dan dialog tidak lagi membutuhkan objek `BuildContext`.
- Kompabilitas Penuh — Tetap mendukung penuh seluruh widget dasar Flutter bawaan tanpa ada yang rusak.

## Latihan

- Ubah title aplikasi.
- Tambahkan route sederhana.
- Coba panggil `Get.snackbar` dari tombol.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  const Myapp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}

class Homepage extends StatelessWidget {
  //inisiasi class mu menggutanakan Get.put() untuk membuatnya berubah state.
  final mycontroller = Get.put(Perhitungan());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "GetX State Management",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Jumlah Tekan saat ini :", style: TextStyle(fontSize: 15)),
            SizedBox(height: 20),

            //OBX diperlukan untuk rebuild ulang sebuahb widget,selain widget yang dibungkus oleh obx
            //Tidak akan dibuat ulang
            Obx(
              () => Text(
                "${mycontroller.angka.value}",
                style: TextStyle(fontSize: 25),
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: Padding(
        padding: const EdgeInsets.only(bottom: 30, right: 30),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            ElevatedButton(
              onPressed: () {
                mycontroller.increment();
              },
              child: Text("+", style: TextStyle(fontSize: 30)),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                mycontroller.decrement();
              },
              child: Text(
                "-",
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Perhitungan extends GetxController {
  var angka = 0.obs; //ini untuk state yang akan selalu dipantau perubahan nya
  increment() => angka.value++;
  decrement() => angka.value--;
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: belajar_getx
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
  get: ^4.7.3

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
