---
title: "Date Format"
description: "Memformat tanggal dengan package `intl`."
---

# Date Format

> **Beginner Track** · Modul 24 · Packages · Beginner

## Target belajar

Memformat tanggal dengan package `intl`.

## Yang akan dipelajari

- Menggunakan `DateTime.now()`.
- Memakai `DateFormat`.
- Mengubah pattern tanggal.
- Menampilkan tanggal yang ramah dibaca.

## Ringkasan

Tanggal mentah sering tidak cocok langsung ditampilkan. Package `intl` membantu mengubah tanggal menjadi format yang sesuai kebutuhan UI, seperti hari, bulan, tahun, dan jam.

## Konsep kunci

- DateTime
- intl
- DateFormat
- Format pattern

## Contoh inti

```dart
final now = DateTime.now();
final formattedDate = DateFormat("EEEE, dd MMMM yyyy").format(now);

Text(formattedDate);
```

## Penjelasan

- `DateTime.now()` mengambil waktu saat ini.
- `DateFormat(...).format(now)` mengubah tanggal ke string.
- Pattern menentukan bentuk output tanggal.

## Latihan

- Tampilkan format jam.
- Coba format `dd/MM/yyyy`.
- Buat card yang menampilkan tanggal hari ini.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [faker](https://pub.dev/packages/faker) — `^2.2.0`
- [intl](https://pub.dev/packages/intl) — `^0.20.3`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'package:faker/faker.dart';
import 'pages/home.dart';

final faker = Faker();

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
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../main.dart';

class Homepage extends StatelessWidget {
  String tanggal = DateTime.now().toIso8601String();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Faker", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: false,
      ),
      body: ListView.builder(
        itemCount: 20,
        itemBuilder: (context, index) => ListTile(
          leading: CircleAvatar(
            backgroundColor: Colors.grey,
            backgroundImage: NetworkImage(
              "https://picsum.photos/id/${index + 870}/200/300",
            ),
          ),
          title: Text(faker.person.name()),
          //ini syntax formatnya
          subtitle: Text(
            DateFormat.MMMMd().add_Hms().format(DateTime.parse(tanggal)),
          ),
        ),
      ),
    );
  }
}

//Documentation formating

 // ICU Name                   Skeleton
 // --------                   --------
 // DAY                          d
 // ABBR_WEEKDAY                 E
 // WEEKDAY                      EEEE
 // ABBR_STANDALONE_MONTH        LLL
 // STANDALONE_MONTH             LLLL
 // NUM_MONTH                    M
 // NUM_MONTH_DAY                Md
 // NUM_MONTH_WEEKDAY_DAY        MEd
 // ABBR_MONTH                   MMM
 // ABBR_MONTH_DAY               MMMd
 // ABBR_MONTH_WEEKDAY_DAY       MMMEd
 // MONTH                        MMMM
 // MONTH_DAY                    MMMMd
 // MONTH_WEEKDAY_DAY            MMMMEEEEd
 // ABBR_QUARTER                 QQQ
 // QUARTER                      QQQQ
 // YEAR                         y
 // YEAR_NUM_MONTH               yM
 // YEAR_NUM_MONTH_DAY           yMd
 // YEAR_NUM_MONTH_WEEKDAY_DAY   yMEd
 // YEAR_ABBR_MONTH              yMMM
 // YEAR_ABBR_MONTH_DAY          yMMMd
 // YEAR_ABBR_MONTH_WEEKDAY_DAY  yMMMEd
 // YEAR_MONTH                   yMMMM
 // YEAR_MONTH_DAY               yMMMMd
 // YEAR_MONTH_WEEKDAY_DAY       yMMMMEEEEd
 // YEAR_ABBR_QUARTER            yQQQ
 // YEAR_QUARTER                 yQQQQ
 // HOUR24                       H
 // HOUR24_MINUTE                Hm
 // HOUR24_MINUTE_SECOND         Hms
 // HOUR                         j
 // HOUR_MINUTE                  jm
 // HOUR_MINUTE_SECOND           jms
 // HOUR_MINUTE_GENERIC_TZ       jmv   (not yet implemented)
 // HOUR_MINUTE_TZ               jmz   (not yet implemented)
 // HOUR_GENERIC_TZ              jv    (not yet implemented)
 // HOUR_TZ                      jz    (not yet implemented)
 // MINUTE                       m
 // MINUTE_SECOND                ms
 // SECOND                       s

//Examples Using the US Locale:

 // Pattern                           Result
 // ----------------                  -------
 // DateFormat.yMd()                 -> 7/10/1996
 // DateFormat('yMd')                -> 7/10/1996
 // DateFormat.yMMMMd('en_US')       -> July 10, 1996
 // DateFormat.jm()                  -> 5:08 PM
 // DateFormat.yMd().add_jm()        -> 7/10/1996 5:08 PM
 // DateFormat.Hm()                  -> 17:08 // force 24 hour time
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: date_format
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
  faker: ^2.2.0
  intl: ^0.20.3

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
