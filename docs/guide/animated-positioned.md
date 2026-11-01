---
title: "AnimatedPositioned"
description: "Menganimasikan posisi detail child di dalam Stack."
---

# AnimatedPositioned

> **Intermediate Track** · Modul I12 · Motion & Navigation · Intermediate+

## Target belajar

Menganimasikan posisi detail child di dalam Stack.

## Yang akan dipelajari

- Menggunakan Stack dan Positioned.
- Menganimasikan top/right/left/bottom.
- Mengontrol perpindahan berbasis state.

## Ringkasan

AnimatedPositioned cocok untuk elemen yang perlu berpindah pada koordinat tertentu. Widget ini harus berada di dalam Stack.

## Konsep kunci

- Stack
- AnimatedPositioned
- top
- right
- state

## Contoh inti

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      //INFO: Dengan widget position memiliki keunggulan dimana dapat memposisikan sebuah widget dengan lebih detail
      body: Center(
        child: GestureDetector(
          onTap: () => controller.selected.toggle(),
          child: Container(
            width: 300,
            height: 500,
            color: Colors.purple,
            child: Stack(
              children: [
                Obx(
                  () => AnimatedPositioned(
                    curve: Curves.easeInOutCirc,
                    top: 0,
                    right: controller.selected.isFalse ? 0 : 250,
                    child: Container(
                      width: 50,
                      height: 50,
                      color: Colors.yellow,
                    ),
                    duration: Duration(milliseconds: 500),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

## Penjelasan

- Perubahan nilai posisi akan dianimasikan sepanjang duration.
- Gunakan ukuran parent yang jelas agar perhitungan posisi bisa diprediksi.

## Latihan

- Gerakkan kotak dalam diagonal.
- Tambahkan tombol reset ke posisi awal.

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

Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    ),
  );
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.

```yaml
name: animated_position
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

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(
      () => HomeController(),
    );
  }
}
```

### `lib/app/modules/home/controllers/home_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:get/get.dart';

class HomeController extends GetxController {
  RxBool selected = false.obs;
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      //INFO: Dengan widget position memiliki keunggulan dimana dapat memposisikan sebuah widget dengan lebih detail
      body: Center(
        child: GestureDetector(
          onTap: () => controller.selected.toggle(),
          child: Container(
            width: 300,
            height: 500,
            color: Colors.purple,
            child: Stack(
              children: [
                Obx(
                  () => AnimatedPositioned(
                    curve: Curves.easeInOutCirc,
                    top: 0,
                    right: controller.selected.isFalse ? 0 : 250,
                    child: Container(
                      width: 50,
                      height: 50,
                      color: Colors.yellow,
                    ),
                    duration: Duration(milliseconds: 500),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: nama route dan halaman aplikasi yang terdaftar.

```dart
import 'package:get/get.dart';

import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.HOME;

  static final routes = [
    GetPage(
      name: _Paths.HOME,
      page: () => const HomeView(),
      binding: HomeBinding(),
    ),
  ];
}
```

### `lib/app/routes/app_routes.dart`

Route config: nama route dan halaman aplikasi yang terdaftar.

```dart
part of 'app_pages.dart';
// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart

abstract class Routes {
  Routes._();
  static const HOME = _Paths.HOME;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
}
```
