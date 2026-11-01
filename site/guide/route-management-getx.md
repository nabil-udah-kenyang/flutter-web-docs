---
title: "Route Management GetX"
description: "Navigasi halaman tanpa BuildContext."
---

# Route Management GetX

> **Beginner Track** · Modul 39 · GetX Navigation · Beginner

## Target belajar

Navigasi halaman tanpa BuildContext.

## Yang akan dipelajari

- Menggunakan `Get.to`.
- Menggunakan `Get.off`.
- Menggunakan `Get.offAll`.
- Kembali dengan `Get.back`.

## Ringkasan

GetX Route Management menyederhanakan sistem navigasi Flutter secara drastis. Kita tidak lagi membutuhkan objek `BuildContext` atau penulisan panjang `Navigator.push(context, MaterialPageRoute(...))`. Cukup gunakan perintah ringkas seperti `Get.to()`, `Get.off()`, atau `Get.back()`.

## Konsep kunci

- Get.to
- Get.off
- Get.offAll
- Get.back
- Navigation stack

## Contoh inti

```dart
Get.to(() => const Page1());
Get.off(() => const Page2());
Get.offAll(() => const Page3());
Get.back();
```

## Penjelasan

- `Get.to(() => Page())` — Membuka halaman baru (menumpuk di atas rute lama).
- `Get.off(() => Page())` — Membuka halaman baru sambil MENGHAPUS halaman saat ini dari stack (misalnya perpindahan dari Splash Screen ke Login).
- `Get.offAll(() => Page())` — MENGHAPUS SELURUH tumpukan halaman sebelumnya dan membuka halaman baru sebagai root (misalnya saat Logout kembali ke Login).
- `Get.back()` — Menutup halaman/dialog/bottomsheet aktif dan kembali ke layar sebelumnya.

## Latihan

- Buat flow login ke home dengan `Get.offAll`.
- Kirim argument ke halaman tujuan.
- Coba kembali dengan `Get.back(result: data)`.

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
import 'pages/home.dart';

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
import 'package:route_management_getx/pages/page_1.dart';
import 'package:route_management_getx/pages/page_2.dart';

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Home", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: ListView(
        padding: EdgeInsets.all(20),
        children: [
          ElevatedButton(
            onPressed: () {
              //NOTE: cara Manual menggunakan navigator
              Navigator.of(
                context,
              ).push(MaterialPageRoute(builder: (context) => pagesSatu()));
            },
            style: ElevatedButton.styleFrom(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5),
              ),
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
            ),
            child: Text("Page 1"),
          ),
          SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {
              //NOTE: lebih simpel menggunalann route management dari GetX,"Sangat simpel dan rekomended"
              Get.to(pagesDua());
              //INFO: kalau get.off fungsinya mirip seperti pushReplacement,bisa dibilang sebagai penggantinya
              // Get.off(pagesDua());
            },
            style: ElevatedButton.styleFrom(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5),
              ),
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
            ),
            child: Text("Page 2"),
          ),
        ],
      ),
    );
  }
}
```

### `lib/pages/page_1.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class pagesSatu extends StatelessWidget {
  const pagesSatu({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: SizedBox(),
        title: Text("PAGE 1", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('PAGE SATU', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: () {
                //NOTE: cara Manual menggunakan navigator untuk back "pop"
                // Navigator.of(context).pop();

                //NOTE: dengan getx kita bisa menggunakan get.back()
                Get.back();
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              label: Icon(Icons.arrow_back_ios_new),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/page_2.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:route_management_getx/pages/page_3.dart';

class pagesDua extends StatelessWidget {
  const pagesDua({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("PAGE 2", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('PAGE DUA', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Get.to(pagesTiga());
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              child: Text('Page 3 >>'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/page_3.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:route_management_getx/pages/page_4.dart';

class pagesTiga extends StatelessWidget {
  const pagesTiga({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("PAGE 3", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('PAGE TIGA', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Get.to(pagesEmpat());
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              child: Text('Page 4 >>'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/page_4.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'page_5.dart';

class pagesEmpat extends StatelessWidget {
  const pagesEmpat({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("PAGE 4", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('PAGE EMPAT', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Get.to(pagesLima());
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              child: Text('Page 5 >>'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/page_5.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:route_management_getx/pages/home.dart';
import 'package:route_management_getx/pages/page_2.dart';

class pagesLima extends StatelessWidget {
  const pagesLima({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("PAGE 5", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('PAGE LIMA', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                //NOTE: get.offAll digunakana seperti replacemnt tetapi bisa di masukin parameter mau ke page mana
                Get.offAll(Homepage());
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              child: Text('Back To Home'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                //NOTE: get.offAll digunakana seperti replacemnt untuk menghapus semua layering histori
                //tetapi bisa di masukin parameter mau ke page mana
                Get.offAll(pagesDua());
              },
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5),
                ),
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
              ),
              child: Text('Back To Page 2'),
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
name: route_management_getx
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
