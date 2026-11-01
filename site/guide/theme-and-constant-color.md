---
title: "Theme and Constant Color"
description: "Mengatur theme dan warna global aplikasi."
---

# Theme and Constant Color

> **Beginner Track** · Modul 46 · GetX UI · Beginner+

## Target belajar

Mengatur theme dan warna global aplikasi.

## Yang akan dipelajari

- Memindahkan konfigurasi warna ke file constant.
- Menggunakan theme di `GetMaterialApp`.
- Membuat style aplikasi lebih konsisten.
- Menyiapkan pondasi light/dark theme.

## Ringkasan

Manajemen Warna dan Tema Global. Daripada menuliskan kode warna secara acak (`Colors.blue`, `Color(0xFF123456)`) di setiap file UI yang membuat aplikasi tidak konsisten, modul ini mengajarkan memusatkan seluruh tema warna ke dalam `app/constant/color.dart` dan `ThemeData`.

## Konsep kunci

- ThemeData
- Constant color
- GetMaterialApp theme
- Design consistency

## Contoh inti

```dart
GetMaterialApp(
  theme: Light,
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);
```

## Penjelasan

- Konsistensi Desain — Mengubah warna utama aplikasi di satu file constant otomatis akan mengubah warna di seluruh layar aplikasi.
- `ThemeData` — Menyediakan tema standar untuk warna tombol, font, background, dan kustomisasi Dark Mode.
- Kerapihan Kode — Menjadikan kode produksi siap dipelihara dan mudah dikembangkan untuk jangka panjang.

## Latihan

- Buat `Dark` theme.
- Tambahkan tombol ganti theme.
- Simpan pilihan theme dengan GetStorage.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/app/constant/color.dart`

Constant/theme: nilai warna atau style global agar tampilan aplikasi konsisten.

```dart
import 'package:flutter/material.dart';

//ini memmbuat warna constant, konsepnya sederhana seperti menampung semuanya kedalam variable yang kemudian bisa di panggil

const appPink = Color(0xFFf528cc);
const appRed = Color(0xFFB71C1C);
const appBlack = Colors.black;
const appwhite = Colors.white;
const appGreen = Color.fromARGB(255, 91, 199, 98);

ThemeData Light = ThemeData(
  //INFO:Pakai colorScheme untuk secara otomatis membuat tema warna dari bawaan flutter material
  // useMaterial3: true,
  // colorScheme: ColorScheme.fromSeed(
  //   seedColor: Colors.deepPurple,
  //   brightness: Brightness.light,
  // ),
  brightness: Brightness.light,
  //INFO: ini untuk text
  textTheme: TextTheme(
    bodyMedium: TextStyle(color: appPink),
    bodyLarge: TextStyle(color: Colors.yellow[900]),
  ),
  //WARNING: ini untuk tema appbar
  appBarTheme: AppBarTheme(
    backgroundColor: appGreen,
    titleTextStyle: TextStyle(color: Colors.white),
  ),
  //HACK:: ini untuk tema tombol(elevated Button)
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5)),
      //biar seakan akan mengambang tombol nya dengan elevation
      elevation: 10,
      backgroundColor: appPink,
      foregroundColor: Colors.white,
    ),
  ),
);

ThemeData Dark = ThemeData(
  //NOTE: ini cara membuat tema,ia akan menjadi template default, namu nantinya bisa di override
  //INFO:Pakai colorScheme untuk secara otomatis membuat tema warna dari bawaan flutter material
  // useMaterial3: true,
  // colorScheme: ColorScheme.fromSeed(
  //   seedColor: Colors.deepPurple,
  //   brightness: Brightness.light,
  // ),
  brightness: Brightness.dark,
  //INFO: ini untuk text
  textTheme: TextTheme(
    bodyMedium: TextStyle(color: appwhite),
    bodyLarge: TextStyle(color: Colors.yellow[900]),
  ),
  //WARNING: ini untuk tema appbar
  appBarTheme: AppBarTheme(
    backgroundColor: appBlack,
    titleTextStyle: TextStyle(color: Colors.white),
  ),
  //HACK:: ini untuk tema tombol(elevated Button)
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5)),
      //biar seakan akan mengambang tombol nya dengan elevation
      elevation: 10,
      backgroundColor: appPink,
      foregroundColor: Colors.white,
    ),
  ),
);
```

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

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

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class HomeController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:theme_and_contscolor/app/constant/color.dart';
import 'package:theme_and_contscolor/app/routes/app_pages.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //INFO: ini cara memanggilnya seperti variable biasa
        title: const Text('HomeView'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text("Teks biasa"),
            Text("fontSize : 15", style: TextStyle(fontSize: 15)),
            Text("fontSize : 20", style: TextStyle(fontSize: 20)),
            Text("fontSize : 30", style: TextStyle(fontSize: 30)),
            //INI mengambil properti dari theme data dengan get
            Text(
              "fontSize : 40",
              style: TextStyle(
                fontSize: 40,
                color: Get.textTheme.bodyLarge?.color,
              ),
            ),
            //NOTE: ini tombol untuk ganti warna tema aplikasi
            ElevatedButton(
              onPressed: () => Get.changeTheme(Get.isDarkMode ? Light : Dark),
              child: Text("Change Theme"),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Get.toNamed(Routes.OTHER),
        child: Icon(Icons.arrow_forward),
      ),
    );
  }
}
```

### `lib/app/modules/other/bindings/other_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:get/get.dart';

import '../controllers/other_controller.dart';

class OtherBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<OtherController>(
      () => OtherController(),
    );
  }
}
```

### `lib/app/modules/other/controllers/other_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class OtherController extends GetxController {
  //TODO: Implement OtherController

  final count = 0.obs;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;
}
```

### `lib/app/modules/other/views/other_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:theme_and_contscolor/app/routes/app_pages.dart';

import '../controllers/other_controller.dart';

class OtherView extends GetView<OtherController> {
  const OtherView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('OtherView'), centerTitle: true),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.toNamed(Routes.HOME),
          child: Text("Balik ke home"),
        ),
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: daftar nama route dan halaman yang dikenali aplikasi.

```dart
import 'package:get/get.dart';

import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/other/bindings/other_binding.dart';
import '../modules/other/views/other_view.dart';

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
    GetPage(
      name: _Paths.OTHER,
      page: () => const OtherView(),
      binding: OtherBinding(),
    ),
  ];
}
```

### `lib/app/routes/app_routes.dart`

Route config: daftar nama route dan halaman yang dikenali aplikasi.

```dart
part of 'app_pages.dart';
// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart

abstract class Routes {
  Routes._();
  static const HOME = _Paths.HOME;
  static const OTHER = _Paths.OTHER;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
  static const OTHER = '/other';
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import './app/constant/color.dart';
import 'app/routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      //NOTE: ini untk ganti tema, dimana udah di simpan pada variabel di file ./app/constant/color.dart
      theme: Light,
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    ),
  );
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: theme_and_contscolor
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
