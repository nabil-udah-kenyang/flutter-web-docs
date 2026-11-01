---
title: "Daftar Wilayah Indonesia"
description: "Menggabungkan API key, HTTP, dropdown search, dan dependent dropdown."
---

# Daftar Wilayah Indonesia

> **Beginner Track** · Modul 29 · HTTP & API · Beginner

## Target belajar

Menggabungkan API key, HTTP, dropdown search, dan dependent dropdown.

## Yang akan dipelajari

- Menyimpan API key sebagai variable placeholder.
- Mengambil data provinsi dari API.
- Mengambil kabupaten berdasarkan provinsi terpilih.
- Menggunakan dropdown search untuk data wilayah.

## Ringkasan

Modul ini mulai terasa seperti fitur nyata: dropdown kedua bergantung pada pilihan dropdown pertama. Pola ini sering dipakai untuk alamat, kategori-subkategori, atau filter bertingkat.

::: warning API key di aplikasi
Placeholder pada contoh aman untuk dokumentasi, tetapi secret produksi tidak boleh dibundel ke aplikasi Flutter. Pindahkan secret dan aturan bisnis sensitif ke backend/proxy, lalu batasi key publik di dashboard penyedia API.
:::

## Konsep kunci

- API key placeholder
- HTTP GET
- Dependent dropdown
- jsonDecode
- setState

## Contoh inti

```dart
final String api = "API-KEY-KAMU";

var response = await myhttp.get(
  Uri.parse("https://api.binderbyte.com/wilayah/provinsi?api_key=$api"),
);

if (response.statusCode == 200) {
  final json = jsonDecode(response.body);
  dataProvinsi = json["value"];
}
```

## Penjelasan

- `API-KEY-KAMU` adalah placeholder agar key asli aman saat push ke GitHub.
- Endpoint provinsi mengambil daftar provinsi.
- Endpoint kabupaten memakai `id_provinsi` dari pilihan user.

## Latihan

- Tambahkan loading untuk kabupaten.
- Tambahkan dropdown kecamatan jika API tersedia.
- Pindahkan logic API ke service/provider.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [animated_custom_dropdown](https://pub.dev/packages/animated_custom_dropdown) — `^4.0.0`
- [http](https://pub.dev/packages/http) — `^1.6.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'pages/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}

//LINK DOKUMENTASI
// https://pub.dev/packages/animated_custom_dropdown

//Link API Wilayah Indonesia
//https://dashboard.binderbyte.com/
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:animated_custom_dropdown/custom_dropdown.dart';
import 'package:http/http.dart' as myhttp;
import 'dart:convert';

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  final String api = "API-KEY-KAMU";

  List<dynamic> dataProvinsi = [];
  List<String> provinsi = [];

  List<String> kabupaten = [];

  // INI FUTURE PROVINSI
  Future<List<dynamic>> getData() async {
    var response = await myhttp.get(
      Uri.parse("https://api.binderbyte.com/wilayah/provinsi?api_key=$api"),
    );

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);

      dataProvinsi = json["value"];

      provinsi = dataProvinsi
          .map<String>((item) => item["name"].toString())
          .toList();

      return dataProvinsi;
    } else {
      throw Exception("Gagal mengambil data");
    }
  }

  //INI FUTURE KABUPATEN
  Future<void> getKabupaten(String idProvinsi) async {
    var response = await myhttp.get(
      Uri.parse(
        "https://api.binderbyte.com/wilayah/kabupaten?api_key=$api&id_provinsi=$idProvinsi",
      ),
    );
    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);

      setState(() {
        kabupaten = (json["value"] as List)
            .map<String>((item) => item["name"].toString())
            .toList();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Daftar Wilayah Indonesia",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.lightBlue,
        leading: const Icon(Icons.map, color: Colors.white),
      ),
      body: FutureBuilder(
        future: getData(),
        builder: (context, snapshot) {
          return SingleChildScrollView(
            child: Column(
              children: [
                const SizedBox(height: 20),

                const Text(
                  "Pilih Wilayah",
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),

                /// DROPDOWN PROVINSI
                Padding(
                  padding: const EdgeInsets.all(30),
                  child: CustomDropdown<String>.search(
                    animation: const CustomDropdownAnimation(
                      type: DropdownAnimationType.fade,
                    ),
                    hintText: "Pilih Provinsi",
                    items: provinsi,
                    onChanged: (value) {
                      if (value == null) return [];

                      final selected = dataProvinsi.firstWhere(
                        (e) => e["name"] == value,
                      );

                      getKabupaten(selected["id"]);
                    },
                  ),
                ),

                /// DROPDOWN KABUPATEN
                Padding(
                  padding: const EdgeInsets.all(30),
                  child: CustomDropdown<String>.search(
                    animation: const CustomDropdownAnimation(
                      type: DropdownAnimationType.fade,
                    ),
                    hintText: "Pilih Kabupaten",
                    items: kabupaten,
                    onChanged: (value) {
                      print(value);
                    },
                  ),
                ),
              ],
            ),
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
name: daftar_wilayah_indo
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
