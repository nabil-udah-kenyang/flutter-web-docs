---
title: "Package Dropdown Search"
description: "Membuat dropdown dengan fitur pencarian."
---

# Package Dropdown Search

> **Beginner Track** · Modul 28 · Packages · Beginner

## Target belajar

Membuat dropdown dengan fitur pencarian.

## Yang akan dipelajari

- Menggunakan package dropdown search/custom dropdown.
- Mengaktifkan search box.
- Menangkap item yang dipilih.
- Menyiapkan UI untuk data banyak.

## Ringkasan

Dropdown biasa kurang nyaman jika item sangat banyak. Searchable dropdown cocok untuk provinsi, kota, kategori produk, atau data master lain.

## Konsep kunci

- Searchable dropdown
- onChanged
- Items list
- Package UI

## Contoh inti

```dart
DropdownSearch<String>(
  items: const ["Dart", "Flutter", "GetX"],
  popupProps: const PopupProps.menu(showSearchBox: true),
  onChanged: (value) {
    print(value);
  },
);
```

## Penjelasan

- Search box membantu mencari item panjang.
- `onChanged` menangkap pilihan user.
- Pola ini dipakai lagi di modul wilayah Indonesia.

## Latihan

- Buat list 30 nama kota.
- Tampilkan pilihan di Text.
- Tambahkan empty state jika data kosong.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [animated_custom_dropdown](https://pub.dev/packages/animated_custom_dropdown) — `^4.0.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'package:animated_custom_dropdown/custom_dropdown.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dropdown Search", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.lightBlue,
        centerTitle: false,
      ),
      body: Column(
        children: [
          SizedBox(height: 20),
          Text(
            "Pilih Pekerjaanmu",
            style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
          ),
          Padding(
            padding: const EdgeInsets.all(30),
            child: CustomDropdown<String>.search(
              hintText: 'Pilih kerjaanmu',
              autofocusOnSearch: true,
              items: ['serabutan', 'kantoran'],
              animation: const CustomDropdownAnimation(
                type: DropdownAnimationType
                    .fade, // size, fade, sizeFade, scale, scaleFade, slide
                duration: Duration(milliseconds: 350),
                curve: Curves.easeOutCubic,
                staggerItems: true, // cascading list-item entrance
              ),
              onChanged: (value) {},
            ),
          ),
        ],
      ),
    );
  }
}

//LINK DOKUMENTASI
// https://pub.dev/packages/animated_custom_dropdown
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: package_dropdown_search
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
  animated_custom_dropdown: ^4.0.0

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
