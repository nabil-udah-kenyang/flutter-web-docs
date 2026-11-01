---
title: "Dependency Management GetX"
description: "Mendaftarkan dan mengambil controller dengan GetX."
---

# Dependency Management GetX

> **Beginner Track** · Modul 38 · GetX Architecture · Beginner

## Target belajar

Mendaftarkan dan mengambil controller dengan GetX.

## Yang akan dipelajari

- Memahami dependency injection sederhana.
- Mendaftarkan controller dengan `Get.put` atau `Get.lazyPut`.
- Mengambil controller dengan `Get.find`.
- Memakai controller yang sama di beberapa halaman.

## Ringkasan

Dependency Management (Dependency Injection) di GetX memungkinkan kita mendaftarkan instance Controller ke memori global dan mengaksesnya di halaman mana pun hanya dengan memanggil `Get.find()`, tanpa perlu mengoper data controller lewat Constructor dari halaman ke halaman.

## Konsep kunci

- Get.put
- Get.lazyPut
- Get.find
- Dependency injection
- Controller reuse

## Contoh inti

```dart
class PageSatu extends StatelessWidget {
  PageSatuController pageSatuC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Text(
      "${pageSatuC.data['name']} - ${pageSatuC.data['age']} Tahun",
      style: const TextStyle(fontSize: 30),
    );
  }
}
```

## Penjelasan

- `Get.put(Controller())` — Langsung membuat dan menginisialisasi controller ke dalam memori aplikasi.
- `Get.lazyPut(() => Controller())` — Hanya akan membuat instansiasi controller saat pertama kali dipanggil oleh UI (lebih menghemat RAM).
- `Get.find<Controller>()` — Mengambil controller yang sudah terdaftar di memori tanpa perlu membuat objek baru.

## Latihan

- Daftarkan controller di `main.dart`.
- Ambil controller di dua page berbeda.
- Bandingkan `Get.put` dan `Get.lazyPut`.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/controllers/page_satu_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class PageSatuController extends GetxController {
  Map<String, dynamic> data = {"name": "nabil", "age": 19};
  Map<String, dynamic> data2 = {"name": "evi", "age": 22};
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'pages/page_satu.dart';
import 'controllers/page_satu_controller.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  //INFO: Gunakan get.put() untuk mengambil data yg ingin dipakai dari controller
  // final PageSatuC = Get.put(PageSatuController());

  //NOTE: Ada Cara yang lebih rekomended untuk menghemat memori yaitu lazyput
  //(dia hanya akan mengambil data ketika suatu hal dibutuhkan "ketrigger")
  final PageSatuC = Get.lazyPut(() => PageSatuController());

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(debugShowCheckedModeBanner: false, home: PageSatu());
  }
}
```

### `lib/pages/page_dua.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/page_satu_controller.dart';

class PageDua extends StatelessWidget {
  //NOTE: Jika sudah di get.put() data di page sebelumnya, tinggal pakai Get.find dengan tipe data controllernya maka otomatis juga
  //telah mengambil data nya yang sama

  PageSatuController PageSatuC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Page 2", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "${PageSatuC.data2['name']} - ${PageSatuC.data2['age']} Tahun",
              style: TextStyle(fontSize: 30),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/page_satu.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:dependency_management_getx/controllers/page_satu_controller.dart';
import 'package:dependency_management_getx/pages/page_dua.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_navigation/src/extension_navigation.dart';

class PageSatu extends StatelessWidget {
  //Karena Sudah di put, alias diambil data nya pada saat aweal launch (main.dart)
  //tinggal pasang get.find dengan tipe data class controllernya
  //NOTE: Jadi Setiap mau pakai tinggal Get.find
  PageSatuController PageSatuC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Page 1", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "${PageSatuC.data['name']} - ${PageSatuC.data['age']} Tahun",
              style: TextStyle(fontSize: 30),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => PageDua()),
                );
              },
              child: Text(" Next Page"),
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
name: dependency_management_getx
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
