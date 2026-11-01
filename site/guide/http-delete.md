---
title: "HTTP DELETE"
description: "Menghapus data melalui API."
---

# HTTP DELETE

> **Beginner Track** · Modul 20 · HTTP & API · Beginner

## Target belajar

Menghapus data melalui API.

## Yang akan dipelajari

- Mengirim request DELETE.
- Menentukan endpoint dengan id.
- Mengecek status berhasil.
- Memahami pentingnya konfirmasi sebelum delete.

## Ringkasan

Metode `DELETE` digunakan untuk menghapus data permanen dari database server berdasarkan nomor ID unik data tersebut. Karena aksi ini tidak bisa dibatalkan (destructive action), sangat disarankan untuk selalu menampilkan konfirmasi `AlertDialog` sebelum perintah ini dieksekusi.

## Konsep kunci

- HTTP DELETE
- Delete by id
- Status code
- Confirmation flow

## Contoh inti

```dart
var response = await myhttp.delete(
  Uri.parse("https://jsonplaceholder.typicode.com/posts/1"),
);

if (response.statusCode == 200) {
  print("Data berhasil dihapus");
}
```

## Penjelasan

- `myhttp.delete(...)` — Mengirim instruksi penghapusan ke URL endpoint dengan ID spesifik (`/posts/1`).
- `statusCode == 200` atau `204 (No Content)` — Menandakan bahwa server telah sukses menghapus data tersebut.
- Alur UX Terbaik — Gabungkan aksi DELETE dengan konfirmasi Dialog dan `SnackBar` sukses untuk kenyamanan pengguna.

## Latihan

- Tambahkan AlertDialog sebelum delete.
- Tampilkan snackbar setelah berhasil.
- Buat input id data yang ingin dihapus.

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
import 'package:http/http.dart' as http;

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

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  String userId = "-";
  String id = "-";
  String title = "-";
  String completed = "-";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("http DELETE"),
        backgroundColor: Colors.blue,
        centerTitle: false,
        actions: [
          IconButton(
            onPressed: () async {
              var myresponse = await http.get(
                Uri.parse('https://jsonplaceholder.typicode.com/todos/3'),
              );

              if (myresponse.statusCode == 200) {
                var data = jsonDecode(myresponse.body);

                setState(() {
                  userId = data["userId"].toString();
                  id = data["id"].toString();
                  title = data["title"];
                  completed = data["completed"].toString();
                });
              }
            },
            icon: Icon(Icons.get_app),
          ),
        ],
      ),
      body: ListView(
        padding: EdgeInsets.all(20),
        children: [
          Text("User ID : $userId", style: TextStyle(fontSize: 20)),
          Text("ID : $id", style: TextStyle(fontSize: 20)),
          Text("Title : $title", style: TextStyle(fontSize: 20)),
          Text("Completed : $completed", style: TextStyle(fontSize: 20)),
          SizedBox(height: 35),
          ElevatedButton(
            onPressed: () async {
              var myresponse = await http.delete(
                Uri.parse('https://jsonplaceholder.typicode.com/todos/3'),
              );

              if (myresponse.statusCode == 200) {
                setState(() {
                  userId = "Berhasil Dihapus";
                  id = "Berhasil Dihapus";
                  title = "Berhasil Dihapus";
                  completed = "Berhasil Dihapus";
                });
              }
            },
            child: Text("Hapus", style: TextStyle(color: Colors.black)),
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
name: http_delete
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
