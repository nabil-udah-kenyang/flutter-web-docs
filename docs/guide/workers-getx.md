---
title: "Workers GetX"
description: "Memantau perubahan state reactive."
---

# Workers GetX

> **Beginner Track** · Modul 37 · GetX State · Beginner

## Target belajar

Memantau perubahan state reactive.

## Yang akan dipelajari

- Menggunakan `ever` untuk setiap perubahan.
- Menggunakan `once` untuk perubahan pertama.
- Menggunakan `debounce` untuk menunggu user berhenti mengetik.
- Menggunakan `interval` untuk membatasi frekuensi eksekusi.

## Ringkasan

Workers di GetX adalah fungsi pendengar (Listener) yang memantau perubahan variabel `.obs` untuk memicu efek samping (Side Effect). Fitur ini sangat berguna untuk fitur pencarian (Search Input), simpan otomatis (Auto-Save), atau analitik tanpa mengotori logika UI.

## Konsep kunci

- ever
- once
- debounce
- interval
- Side effect
- onInit

## Contoh inti

```dart
@override
void onInit() {
  ever(dataPantau, (data) => print("Perubahan"));

  debounce(
    dataPantau,
    (data) => print("Jalan setelah berhenti berubah"),
    time: const Duration(seconds: 2),
  );

  interval(
    dataPantau,
    (data) => print("Jalan tiap interval"),
    time: const Duration(seconds: 2),
  );

  super.onInit();
}
```

## Penjelasan

- `ever(rx, callback)` — Menjalankan fungsi callback SETIAP KALI nilai variabel `rx` berubah.
- `once(rx, callback)` — Hanya menjalankan fungsi callback SATU KALI SAJA saat variabel berubah pertama kali.
- `debounce(rx, callback, time)` — Menunggu pengguna BERHENTI melakukan input selama rentang waktu tertentu (sangat penting untuk fitur Search Bar agar tidak menembak API setiap huruf diketik).
- `interval(rx, callback, time)` — Mencegah aksi eksekusi berlebihan dengan membatasi eksekusi maksimum per jeda durasi.

## Latihan

- Buat search input dengan debounce.
- Tambahkan worker `once`.
- Cetak value terbaru setiap worker berjalan.

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
  RxInt dataPantau = 0.obs;

  void change() {
    dataPantau++;
  }

  @override
  void onInit() {
    // worker ever digunakan untuk memantau setiap perubahan secara terus menerus
    ever(dataPantau, (data) => print("Perubahan"));

    // worker once digunakan untuk memantau perubahan data hanya sekali "once", pada pertama kali berubah
    ever(dataPantau, (data) => print("cuma 1x pantau"));

    // worker debounce digunakan untuk memantau data sesuai interval yng ditentukan pada "Duration",hanya memantau ketika berhenti melakukan perubahan
    // selama waktu yang ditentukan, baik untuk mengelakan dari serangan DDos
    debounce(
      dataPantau,
      (data) => print("dieksekusi n detik setelah berhenti memantau"),
      time: Duration(seconds: 2),
    );

    //worker interval mirip seperti debounce hanya saja dia menghitung ketika perubahan masih terjadi
    //bukan ketika berhenti, dan dihitung per setiap n duration
    interval(
      dataPantau,
      (data) => print("dieksekusi n detik setelah berhenti memantau"),
      time: Duration(seconds: 2),
    );

    super.onInit();
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
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Obx(
                () => Text(
                  "terjadi perubahan : ${homeC.dataPantau} x",
                  style: TextStyle(fontSize: 20),
                ),
              ),
              SizedBox(height: 20),
              TextField(
                onChanged: (value) => homeC.change(),
                decoration: InputDecoration(
                  labelText: "Data",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: workers_getx
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
