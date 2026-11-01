---
title: "Drawer"
description: "Membuat side navigation dari kiri layar."
---

# Drawer

> **Beginner Track** · Modul 14 · Flutter Navigation · Beginner

## Target belajar

Membuat side navigation dari kiri layar.

## Yang akan dipelajari

- Menggunakan property `drawer` di `Scaffold`.
- Membuat `DrawerHeader`.
- Menyusun menu dengan `ListTile`.
- Menutup drawer mebuhan.

## Ringkasan

`Drawer` adalah panel navigasi samping (Side Menu) yang tersembunyi di luar layar kiri dan akan bergeser keluar ketika pengguna menekan tombol ikon tiga garis (Hamburger Menu) atau mengusap layar dari tepi paling kiri.

## Konsep kunci

- Drawer
- DrawerHeader
- ListView
- ListTile

## Contoh inti

```dart
Scaffold(
  appBar: AppBar(title: const Text("Drawer")),
  drawer: Drawer(
    child: ListView(
      children: const [
        DrawerHeader(child: Text("Menu")),
        ListTile(leading: Icon(Icons.home), title: Text("Home")),
      ],
    ),
  ),
);
```

## Penjelasan

- `drawer: Drawer(...)` — Properti bawaan `Scaffold`. Saat properti ini diisi, Flutter secara OTOMATIS membuatkan ikon 3 garis (Hamburger Icon) di AppBar kiri.
- `DrawerHeader` — Area paling atas drawer yang biasa diisi nama profil, foto avatar, atau logo aplikasi.
- `ListTile` — Baris menu dengan icon di sebelah kiri (`leading`) dan teks judul (`title`).

## Latihan

- Tambahkan menu Profile dan Settings.
- Buat header berisi avatar.
- Tambahkan aksi navigasi saat menu ditekan.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  const Myapp({super.key});

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
      appBar: AppBar(title: Text('Drawer'), backgroundColor: Colors.blue[300]),
      drawer: Drawer(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              alignment: Alignment.bottomLeft,
              padding: EdgeInsets.all(10),
              width: double.infinity,
              height: 100,
              color: Colors.blue,
              child: Text(
                'Dashboard Admin',
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
            Expanded(
              child: ListView(
                children: [
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke home');
                    },
                    leading: Icon(Icons.home),
                    title: Text("home"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Product');
                    },
                    leading: Icon(Icons.shopping_cart),
                    title: Text("Product"),
                  ),
                  SizedBox(height: 10),
                  ListTile(
                    onTap: () {
                      print('Pindah Ke Profil');
                    },
                    leading: Icon(Icons.person),
                    title: Text("Profil"),
                  ),
                ],
              ),
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
name: drawer
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
