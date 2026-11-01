---
title: "State Management GetX"
description: "Mengelola state sederhana dengan GetBuilder dan update."
---

# State Management GetX

> **Beginner Track** · Modul 35 · GetX State · Beginner

## Target belajar

Mengelola state sederhana dengan GetBuilder dan update.

## Yang akan dipelajari

- Membuat class controller extend `GetxController`.
- Menyimpan state di controller.
- Memanggil `update()` untuk rebuild.
- Membaca state dengan `GetBuilder`.

## Ringkasan

Simple State Management pada GetX menggunakan `GetBuilder`. Berbeda dari `StatefulWidget` yang memicu rebuild seluruh widget, GetBuilder hanya memperbarui potongan widget spesifik yang dibungkus saja saat fungsi `update()` dipanggil manual di controller.

## Konsep kunci

- GetxController
- GetBuilder
- update
- Manual state

## Contoh inti

```dart
class HomeController extends GetxController {
  var angka = 0;

  void tambah() {
    angka++;
  }

  void refreshTampilan() {
    update();
  }
}
```

## Penjelasan

- `GetxController` — Kelas pengontrol logika tempat menyimpan data state dan fungsi aksi aplikasi.
- `update()` — Fungsi saklar manual yang memberitahu `GetBuilder` di UI untuk menggambar ulang tampilannya.
- Performa Efisien — Sangat ringan karena tidak menggunakan Stream atau Observer, cocok untuk data statis yang jarang berubah.

## Latihan

- Panggil `update()` langsung di `tambah`.
- Tambahkan function reset.
- Bandingkan dengan `.obs` di modul berikutnya.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/controllers/home_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class HomeController extends GetxController {
  //INFO:harus menambahkan ".obs" agar data bisa terus di pantau oleh getx,obs hanya ad ajika sudah import getx, ini untuk reactive
  // var angka = 0.obs;

  //WARNING:yang dibawah ini untuk simple state management tanpa obs(agar data tidak secara realtime berubah terus  *untuk kasus tertentu)
  var angka = 0;

  void tambah() {
    angka++;
  }

  void refreshTampilan() {
    update(); //INFO:: ini untuk ngetriger refresh state nya secara manual, letak function ini pada button "refresh"
  }
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'pages/home.dart';
import 'package:get/get.dart';

//INFO : SECARA UMUM STATE MANAGEMENT GET TERDAPAT 2 JENIS YAITU "SIMPLE & REACTIVE":
//REACTIVE : BERARTI SELALU BEREAKSI APABILA TERJADI PERUBAHAN PADA VARIABEL YANG DI PANTAU DENGAN .obs
//SIMPLE : BERARTI HARUS MELAKUKAN TRIGER MANUAL UNTUK MEREFRESH SUATU VARIABEL / STATE , BIASANYA DENGAN TOMBOL "REFRESH"

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:state_management_getx/controllers/home_controller.dart';

class Homepage extends StatelessWidget {
  final homeC = Get.put(HomeController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "State Management GET X",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // NOTE :obx digunakan untuk reactive

            // Obx(
            //   () => Text(
            //     "${homeC.angka}",
            //     style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
            //   ),
            // ),

            //NOTE :Sedangkan GetBuilder Dipakai Untuk Simple state management getx
            GetBuilder<HomeController>(
              builder: (controller) => Text(
                "${controller.angka}",
                style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
              ),
            ),

            SizedBox(height: 30),
            ElevatedButton.icon(
              onPressed: () {
                homeC.tambah();
              },
              label: Icon(Icons.add),
            ),
            SizedBox(height: 30),
            ElevatedButton.icon(
              onPressed: () {
                homeC.refreshTampilan();
              },
              label: Icon(Icons.refresh),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: state_management_getx
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
