---
title: "FutureBuilder"
description: "Menampilkan data async dengan state loading, error, dan success."
---

# FutureBuilder

> **Beginner Track** · Modul 21 · HTTP & API · Beginner

## Target belajar

Menampilkan data async dengan state loading, error, dan success.

## Yang akan dipelajari

- Membuat function `Future`.
- Menhubungkan `future` ke UI.
- Membaca `snapshot.connectionState`.
- Menangani error dan data kosong.

## Ringkasan

`FutureBuilder` adalah widget ajaib di Flutter yang secara otomatis memantau status pengunduhan data asinkron (Future). Widget ini secara otomatis mengganti tampilan UI dari kondisi **Sedang Memuat (Loading)**, **Terjadi Error (Error)**, hingga **Data Berhasil Diterima (Success)** tanpa perlu mengelola variabel `setState` secara manual.

## Konsep kunci

- Future
- FutureBuilder
- snapshot
- loading
- error
- ListView.builder

## Contoh inti

```dart
FutureBuilder<List<dynamic>>(
  future: getData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }

    if (snapshot.hasError) {
      return Center(child: Text("Error: ${snapshot.error}"));
    }

    final data = snapshot.data!;
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (context, index) => ListTile(
        title: Text(data[index]["title"]),
      ),
    );
  },
);
```

## Penjelasan

- `future: getData()` — Menghubungkan fungsi asinkron pengambil API ke `FutureBuilder`.
- `snapshot.connectionState == ConnectionState.waiting` — Kondisi saat jaringan sedang sibuk mengunduh data -> tampilkan animasi spinner `CircularProgressIndicator`.
- `snapshot.hasError` — Kondisi jika jaringan putus atau server crash -> tampilkan teks pesan error.
- `snapshot.data!` — Kondisi ketika data dari API telah sukses diterima -> rendet data ke dalam `ListView.builder`.

## Latihan

- Ubah itemCount menjadi `data.length`.
- Tambahkan empty state.
- Pisahkan item list ke widget sendiri.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [http](https://pub.dev/packages/http) — `^1.6.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as myhttp;

void main() {
  runApp(const Myapp());
}

class Myapp extends StatelessWidget {
  const Myapp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Homepage(),
    );
  }
}

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  Future<List<dynamic>> getData() async {
    await Future.delayed(const Duration(seconds: 1));
    var response = await myhttp.get(
      Uri.parse("https://jsonplaceholder.typicode.com/posts"),
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception("Gagal mengambil data");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Future Builder"),
        backgroundColor: Colors.blue,
      ),
      body: FutureBuilder<List<dynamic>>(
        future: getData(),
        builder: (context, snapshot) {
          // Saat loading
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          // Jika terjadi error
          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          // Jika tidak ada data
          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("Data tidak ditemukan"));
          }

          // Data berhasil didapat
          final data = snapshot.data!;

          return ListView.builder(
            itemCount: 10,
            itemBuilder: (context, index) {
              return Card(
                margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                child: ListTile(
                  leading: CircleAvatar(child: Text("${data[index]["id"]}")),
                  title: Text(data[index]["title"]),
                  subtitle: Text(data[index]["body"]),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: future_builder
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
  http: ^1.6.0

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
