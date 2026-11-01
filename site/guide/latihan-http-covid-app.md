---
title: "Latihan HTTP Covid App"
description: "Membuat mini app API dengan model dan widget info."
---

# Latihan HTTP Covid App

> **Beginner Track** · Modul 22 · Mini Project · Beginner

## Target belajar

Membuat mini app API dengan model dan widget info.

## Yang akan dipelajari

- Memisahkan model data API.
- Membuat widget `InfoCard` untuk tampilan ringkas.
- Menggabungkan HTTP dengan UI card.
- Membaca response API ke object.

## Ringkasan

Ini langkah awal ke mini project yang lebih rapi. Kamu mulai memisahkan model, page, dan widget. Walau sederhana, pola ini membantu saat data API makin kompleks.

## Konsep kunci

- Model
- fromJson
- InfoCard
- API summary
- Widget split

## Contoh inti

```dart
Future<Summary> getSummary() async {
  final response = await http.get(Uri.parse(apiUrl));

  if (response.statusCode == 200) {
    return Summary.fromJson(jsonDecode(response.body));
  }

  throw Exception("Gagal mengambil data");
}
```

## Penjelasan

- `Summary.fromJson` mengubah Map JSON menjadi object Dart.
- Model membuat akses data lebih jelas daripada Map mentah.
- Widget info card menjaga UI tetap reusable.

## Latihan

- Tambahkan loading state.
- Tambahkan card baru untuk data lain.
- Ubah warna card berdasarkan status data.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [http](https://pub.dev/packages/http) — `^1.6.0`

## Full source

### `lib/Models/summary.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
import 'dart:convert';

CovidModel covidModelFromJson(String str) =>
    CovidModel.fromJson(json.decode(str));

String covidModelToJson(CovidModel data) => json.encode(data.toJson());

class CovidModel {
  int updated;
  int cases;
  int todayCases;
  int deaths;
  int todayDeaths;
  int recovered;
  int todayRecovered;
  int active;
  int critical;
  int casesPerOneMillion;
  double deathsPerOneMillion;
  int tests;
  double testsPerOneMillion;
  int population;
  int oneCasePerPeople;
  int oneDeathPerPeople;
  int oneTestPerPeople;
  double activePerOneMillion;
  double recoveredPerOneMillion;
  double criticalPerOneMillion;
  int affectedCountries;

  CovidModel({
    required this.updated,
    required this.cases,
    required this.todayCases,
    required this.deaths,
    required this.todayDeaths,
    required this.recovered,
    required this.todayRecovered,
    required this.active,
    required this.critical,
    required this.casesPerOneMillion,
    required this.deathsPerOneMillion,
    required this.tests,
    required this.testsPerOneMillion,
    required this.population,
    required this.oneCasePerPeople,
    required this.oneDeathPerPeople,
    required this.oneTestPerPeople,
    required this.activePerOneMillion,
    required this.recoveredPerOneMillion,
    required this.criticalPerOneMillion,
    required this.affectedCountries,
  });

  factory CovidModel.fromJson(Map<String, dynamic> json) => CovidModel(
    updated: json["updated"],
    cases: json["cases"],
    todayCases: json["todayCases"],
    deaths: json["deaths"],
    todayDeaths: json["todayDeaths"],
    recovered: json["recovered"],
    todayRecovered: json["todayRecovered"],
    active: json["active"],
    critical: json["critical"],
    casesPerOneMillion: json["casesPerOneMillion"],
    deathsPerOneMillion: (json["deathsPerOneMillion"] as num).toDouble(),
    tests: json["tests"],
    testsPerOneMillion: (json["testsPerOneMillion"] as num).toDouble(),
    population: json["population"],
    oneCasePerPeople: json["oneCasePerPeople"],
    oneDeathPerPeople: json["oneDeathPerPeople"],
    oneTestPerPeople: json["oneTestPerPeople"],
    activePerOneMillion: (json["activePerOneMillion"] as num).toDouble(),
    recoveredPerOneMillion: (json["recoveredPerOneMillion"] as num).toDouble(),
    criticalPerOneMillion: (json["criticalPerOneMillion"] as num).toDouble(),
    affectedCountries: json["affectedCountries"],
  );

  Map<String, dynamic> toJson() => {
    "updated": updated,
    "cases": cases,
    "todayCases": todayCases,
    "deaths": deaths,
    "todayDeaths": todayDeaths,
    "recovered": recovered,
    "todayRecovered": todayRecovered,
    "active": active,
    "critical": critical,
    "casesPerOneMillion": casesPerOneMillion,
    "deathsPerOneMillion": deathsPerOneMillion,
    "tests": tests,
    "testsPerOneMillion": testsPerOneMillion,
    "population": population,
    "oneCasePerPeople": oneCasePerPeople,
    "oneDeathPerPeople": oneDeathPerPeople,
    "oneTestPerPeople": oneTestPerPeople,
    "activePerOneMillion": activePerOneMillion,
    "recoveredPerOneMillion": recoveredPerOneMillion,
    "criticalPerOneMillion": criticalPerOneMillion,
    "affectedCountries": affectedCountries,
  };
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'pages/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: Homepage());
  }
}
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import '../widgets/InfoCard.dart';
import '../Models/summary.dart';
import 'package:http/http.dart' as myhttp;

class Homepage extends StatelessWidget {
  late CovidModel dataSummary;

  Future getsummary() async {
    var response = await myhttp.get(
      Uri.parse("https://disease.sh/v3/covid-19/all"),
    );
    var data = json.decode(response.body) as Map<String, dynamic>;
    dataSummary = CovidModel.fromJson(data);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Covid Summary", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: FutureBuilder(
        future: getsummary(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: Text("Loading Data ..."));
          }
          return Column(
            children: [
              InfoCard("TOTAL KASUS", "${dataSummary.cases}"),
              InfoCard("TOTAL KEMATIAN", "${dataSummary.deaths}"),
              InfoCard("TELAH SEMBUH", "${dataSummary.recovered}"),
            ],
          );
        },
      ),
    );
  }
}
```

### `lib/widgets/InfoCard.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class InfoCard extends StatelessWidget {
  InfoCard(this.title, this.value);

  String title;
  String value;

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      elevation: 6,
      margin: EdgeInsets.all(20),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15),
          color: Colors.blue,
        ),
        width: double.infinity,
        height: 150,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(title, style: TextStyle(color: Colors.white)),
            SizedBox(height: 30),
            Text(
              value,
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
                color: Colors.white,
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
name: latihan_http_covid_app
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
