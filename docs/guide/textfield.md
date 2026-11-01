---
title: "TextField"
description: "Mengambil input user dari form sederhana."
---

# TextField

> **Beginner Track** · Modul 09 · Flutter Interaction · Beginner

## Target belajar

Mengambil input user dari form sederhana.

## Yang akan dipelajari

- Membuat input dengan `TextField`.
- Membaca value memakai `TextEditingController`.
- Mengatur label, hint, dan border input.
- Menjalankan aksi submit.

## Ringkasan

`TextField` adalah komponen masukan teks tempat pengguna mengetikkan informasi (misalnya nama, email, password, atau pesan pencarian). Di Flutter, membaca teks yang diketikkan pengguna dikendalikan oleh objek pengontrol bernama `TextEditingController`.

## Konsep kunci

- TextField
- TextEditingController
- InputDecoration
- Form input

## Contoh inti

```dart
final TextEditingController namaC = TextEditingController();

TextField(
  controller: namaC,
  decoration: const InputDecoration(
    labelText: "Nama",
    border: OutlineInputBorder(),
  ),
);

ElevatedButton(
  onPressed: () {
    print(namaC.text);
  },
  child: const Text("Submit"),
);
```

## Penjelasan

- `TextEditingController namaC = TextEditingController()` — Pengontrol yang bertindak menyimpan teks inputan secara real-time.
- `controller: namaC` — Menghubungkan widget `TextField` ke variabel pengontrol `namaC`.
- `InputDecoration` — Mengatur tampilan visual bidang input, seperti `labelText` (label di atas border), `hintText` (teks samar petunjuk), dan `border: OutlineInputBorder()` (garis tepi).
- `namaC.text` — Properti untuk mengambil isi teks yang sedang diketikkan pengguna saat tombol diklik.

## Latihan

- Tambahkan field email.
- Validasi jika input kosong.
- Tampilkan hasil input ke Text di halaman.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [convex_bottom_bar](https://pub.dev/packages/convex_bottom_bar) — `^3.2.0`
- [http](https://pub.dev/packages/http) — `^1.6.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

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

bool isHidden = true;

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Textfield'),
        backgroundColor: Colors.amber[400],
        centerTitle: true,
        leading: Icon(Icons.text_fields),
      ),
      body: ListView(
        padding: EdgeInsets.all(50),
        children: [
          TextField(
            autocorrect: false,
            keyboardType: TextInputType.emailAddress,
            textInputAction: TextInputAction
                .next, //ini akan menbuat ketika tekan enter pad akeyboard langsung ke input text berikutnya(next), defaultnya adalah done
            decoration: InputDecoration(
              labelText: 'email',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              contentPadding: EdgeInsets.symmetric(horizontal: 20),
              prefixIcon: Icon(
                Icons.email, //icon disebelah kiri textfield
              ), //memberikan jarak ke kiri agar tidak terlalu rapat
            ),
          ),
          SizedBox(height: 20),
          TextField(
            autocorrect: false,
            obscureText: isHidden,
            decoration: InputDecoration(
              labelText: 'password',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              prefixIcon: Icon(
                Icons.vpn_key, //icon disebelah kiri textfield
              ),
              suffixIcon: IconButton(
                onPressed: () {
                  if (isHidden == true) {
                    isHidden = false;
                  } else {
                    isHidden = true;
                  }
                  setState(() {});
                },
                icon: Icon(Icons.remove_red_eye),
              ),
            ),
          ),
          SizedBox(height: 50),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5),
              ),
            ),
            child: Text('Login', style: TextStyle(color: Colors.white)),
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
name: textfield
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
  convex_bottom_bar: ^3.2.0
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
