---
title: "Reactive Variables GetX"
description: "Membuat state otomatis rebuild dengan `.obs` dan Obx."
---

# Reactive Variables GetX

> **Beginner Track** · Modul 36 · GetX State · Beginner

## Target belajar

Membuat state otomatis rebuild dengan `.obs` dan Obx.

## Yang akan dipelajari

- Membuat `RxInt`, `RxString`, `RxBool`, dan `RxList`.
- Menggunakan `.obs`.
- Mengubah value reactive.
- Menampilkan state dengan `Obx`.

## Ringkasan

Reactive State Management (`Rx`) adalah keunggulan utama GetX. Cukup menambahkan `.obs` pada variabel (menjadikannya Observable), maka setiap kali nilai variabel tersebut berubah, seluruh widget yang dibungkus `Obx(...)` akan menggambar ulang tampilannya secara OTOMATIS tanpa perlu memanggil `setState` atau `update()`!

## Konsep kunci

- .obs
- RxInt
- RxString
- RxBool
- RxList
- Obx

## Contoh inti

```dart
class HomeController extends GetxController {
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
}
```

## Penjelasan

- `.obs` — Mengubah variabel biasa menjadi variabel reaktif (Observable) yang dipantau oleh GetX.
- `Obx(() => Text('${controller.dataInt}'))` — Widget pendengar yang akan merender ulang tampilannya secara instan begitu variabel `.obs` di dalamnya berubah.
- Tanpa `setState()` — Mengeliminasi boilerplate code dan pemanggilan `setState` secara keseluruhan di layer View.

## Latihan

- Buat reactive loading.
- Buat selected category dengan `RxString`.
- Tampilkan list reactive dengan `Obx`.

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
import 'dart:math';

import 'package:get/get.dart';

class HomeController extends GetxController {
  RxInt dataInt = 0.obs;
  RxString dataString = "data".obs;
  RxDouble dataDouble = 0.5.obs;
  RxBool dataBool = false.obs;
  RxList<int> dataList = [1, 2, 3].obs;
  //variabel dibawah ini untuk kebutuhan tambah data list
  int angka = 4;

  void incrementINT() {
    dataInt++;
  }

  void decrementINT() {
    dataInt--;
  }

  void updateString() {
    dataString.value = "data Updated";
  }

  void resetString() {
    dataString.value = "data";
  }

  void incrementDouble() {
    dataDouble.value = dataDouble.value + 0.5;
  }

  void decrementDouble() {
    dataDouble.value = dataDouble.value - 0.5;
  }

  void gantiBool() {
    // if (dataBool.isTrue) {
    //   dataBool.value = false;
    // } else {
    //   dataBool.value == true;
    // }
    dataBool.toggle();
  }

  void tambahDataList() {
    dataList.add(angka);
    angka++;
  }

  void ubahDataList() {
    dataList[0] = Random().nextInt(100);
    dataList[1] = Random().nextInt(100);
    dataList[2] = Random().nextInt(100);
  }
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'pages/home.dart';
import 'package:get/get.dart';

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
import '../controllers/home_controller.dart';

class Homepage extends StatelessWidget {
  final homeC = Get.put(HomeController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Tipe Data RX (Reactive)",
          style: TextStyle(color: Colors.white),
        ),
        leading: Icon(Icons.type_specimen, color: Colors.white),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      body: ListView(
        padding: EdgeInsets.all(20),
        children: [
          //INFO: ini untuk integer (RXint)
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Obx(
                () => Text("${homeC.dataInt}", style: TextStyle(fontSize: 20)),
              ),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      homeC.incrementINT();
                    },
                    child: Text("+"),
                  ),
                  SizedBox(width: 20),
                  ElevatedButton(
                    onPressed: () {
                      homeC.decrementINT();
                    },
                    child: Text("-"),
                  ),
                ],
              ),
            ],
          ),

          //INFO: ini untuk string (RXString)
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Obx(
                () =>
                    Text("${homeC.dataString}", style: TextStyle(fontSize: 20)),
              ),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      homeC.updateString();
                    },
                    child: Text("Update"),
                  ),
                  SizedBox(width: 20),
                  ElevatedButton(
                    onPressed: () {
                      homeC.resetString();
                    },
                    child: Text("reset"),
                  ),
                ],
              ),
            ],
          ),

          //INFO: ini untuk Double (RXDouble)
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Obx(
                () =>
                    Text("${homeC.dataDouble}", style: TextStyle(fontSize: 20)),
              ),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      homeC.incrementDouble();
                    },
                    child: Text("+"),
                  ),
                  SizedBox(width: 20),
                  ElevatedButton(
                    onPressed: () {
                      homeC.decrementDouble();
                    },
                    child: Text("-"),
                  ),
                ],
              ),
            ],
          ),

          //INFO: ini untuk Boolean (RXBool)
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Obx(
                () => Text("${homeC.dataBool}", style: TextStyle(fontSize: 20)),
              ),

              SizedBox(width: 20),
              ElevatedButton(
                onPressed: () {
                  homeC.gantiBool();
                },
                child: Text("Update Bools"),
              ),
            ],
          ),

          //INFO: ini untuk List (RXList)
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Obx(
                () => Text("${homeC.dataList}", style: TextStyle(fontSize: 20)),
              ),

              SizedBox(width: 20),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      homeC.tambahDataList();
                    },
                    child: Text("Tambah Data"),
                  ),
                  SizedBox(width: 10),
                  ElevatedButton(
                    onPressed: () {
                      homeC.ubahDataList();
                    },
                    child: Text("Ubah Data"),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: reactive_variables
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
