---
title: "Bindings Builder GetX"
description: "Mendaftarkan dependency otomatis saat route dibuka."
---

# Bindings Builder GetX

> **Beginner Track** · Modul 41 · GetX Architecture · Beginner

## Target belajar

Mendaftarkan dependency otomatis saat route dibuka.

## Yang akan dipelajari

- Membuat class binding.
- Mendaftarkan controller di `dependencies`.
- Menghubungkan binding ke `GetPage`.
- Memisahkan dependency dari view.

## Ringkasan

`Bindings` memisahkan pendaftaran Controller dari kelas View (UI). Dengan Bindings, Controller baru akan didaftarkan ke RAM tepat saat rute halaman tersebut dibuka, dan secara otomatis dibuang (dispose) dari RAM saat penggunanya keluar dari halaman tersebut.

## Konsep kunci

- Bindings
- dependencies
- Get.lazyPut
- GetPage binding
- Route scoped dependency

## Contoh inti

```dart
class CounterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => CounterController());
  }
}

GetPage(
  name: "/counter",
  page: () => CounterPage(),
  binding: CounterBinding(),
);
```

## Penjelasan

- `class CounterBinding extends Bindings` — Kelas khusus wadah pendaftaran seluruh controller yang dibutuhkan oleh suatu halaman.
- `binding: CounterBinding()` — Menghubungkan file Binding ke rute `GetPage`.
- Manfaat Utama — Menjaga file UI (View) tetap murni 100% berisi kode tampilan tanpa adanya penginstansiasian controller secara manual.

## Latihan

- Tambahkan controller kedua di binding.
- Pindahkan `Get.put` dari view ke binding.
- Bandingkan lifecycle controller dengan dan tanpa binding.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/bindings/counter_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:bindings_builder/controllers/counterController.dart';
import 'package:get/get.dart';

//NOTE: ini merupakan bagian dari pelajaran class bindings, dan class nya harus meng exteds "Bindings" bukan "GetxController"
//dan dengan class artinya kita bisa mengelompokan banyak binding controller
class CounterBinding extends Bindings {
  @override
  void dependencies() {
    //WARNING: dan dengan class juga bisa membawa banyak controller sekaligus
    Get.lazyPut(() => Countercontroller());
    Get.lazyPut(() => Countercontroller());
  }
}
```

### `lib/controllers/counterController.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class Countercontroller extends GetxController {
  RxInt angka = 0.obs;

  void tambah() => angka++;

  void minus() => angka--;
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:bindings_builder/controllers/counterController.dart';
import 'package:bindings_builder/pages/counter.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'pages/home.dart';
import 'bindings/counter_binding.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      //NOTE: Sangat direkomendasikan menggunakan binding dengan routenamed, karna bisa membawa lebih dari controller ke route dengan "bindings"
      getPages: [
        GetPage(
          name: "/counter",
          page: () => CounterPage(),
          binding: CounterBinding(),
        ),
      ],
    );
  }
}
```

### `lib/pages/counter.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:bindings_builder/controllers/counterController.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class CounterPage extends StatelessWidget {
  Countercontroller counterC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Counter Page', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Obx(
              () => Text(
                counterC.angka.toString(),
                style: TextStyle(fontSize: 45, fontWeight: FontWeight.bold),
              ),
            ),
            SizedBox(height: 30),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                FloatingActionButton(
                  onPressed: () {
                    counterC.minus();
                  },
                  child: Icon(Icons.remove),
                ),
                FloatingActionButton(
                  onPressed: () {
                    counterC.tambah();
                  },
                  child: Icon(Icons.add),
                ),
              ],
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Get.back(),
        child: Icon(Icons.arrow_back),
      ),
    );
  }
}
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

//NOTE: dengan binding ketika Get.to maka di halaman tujuan gaperlu put lagi, cukup dengan find

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(5),
            ),
          ),
          onPressed: () {
            //ini lebih rekomended dengan memamnggil page dengan anonim function agar menghapus sisa sisa operasi
            Get.toNamed('/counter');
          },
          child: Text('Counter Page >>'),
        ),
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: bindings_builder
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
