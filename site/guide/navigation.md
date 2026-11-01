---
title: "Navigation"
description: "Berpindah antar halaman dengan Navigator."
---

# Navigation

> **Beginner Track** · Modul 15 · Flutter Navigation · Beginner

## Target belajar

Berpindah antar halaman dengan Navigator.

## Yang akan dipelajari

- Membuat beberapa file page.
- Membuka halaman baru dengan `Navigator.push`.
- Kembali dengan `Navigator.pop`.
- Memahami stack navigation.

## Ringkasan

Navigasi di Flutter dikelola menggunakan konsep tumpukan kartu (Navigation Stack). Ketika membuka halaman baru, halaman tersebut ditumpuk di atas halaman lama (`push`). Ketika menekan tombol Kembali (Back), halaman paling atas dibuang dari tumpukan (`pop`).

## Konsep kunci

- Navigator
- MaterialPageRoute
- push
- pop
- Navigation stack

## Contoh inti

```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const ProductPage(),
  ),
);

Navigator.pop(context);
```

## Penjelasan

- `Navigator.push(context, route)` — Menumpuk halaman baru ke atas tumpukan navigasi.
- `MaterialPageRoute` — Kelas pembuat rute navigasi yang menyertakan animasi transisi khas platform (geser kanan untuk iOS / muncul ke atas untuk Android).
- `Navigator.pop(context)` — Menghapus halaman teratas dan menutupnya sehingga pengguna kembali ke layar sebelumnya.

## Latihan

- Kirim data dari Home ke Product.
- Tambahkan halaman Detail.
- Buat tombol back custom.

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
import 'pages/home.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  const Myapp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Navigation",
      home: Homepage(),
    );
  }
}
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'product.dart';

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.teal, title: Text("Navigation")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(
              context,
            ).push(MaterialPageRoute(builder: (context) => ProductPage()));
          },
          child: Text('Next Page'),
        ),
      ),
    );
  }
}
```

### `lib/pages/product.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'profile.dart';

class ProductPage extends StatelessWidget {
  const ProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Product Page"), backgroundColor: Colors.teal),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Ini Halaman Produk'),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text(' < Kembali'),
                ),
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => profilePage()),
                    );
                  },
                  child: Text('Next Page >'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/pages/profile.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';

class profilePage extends StatelessWidget {
  const profilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profile page'), backgroundColor: Colors.teal),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Ini Halaman Profile'),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text(' < Kembali'),
                ),
              ],
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
name: navigation
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
