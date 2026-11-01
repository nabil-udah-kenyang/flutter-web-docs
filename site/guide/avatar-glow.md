---
title: "Avatar Glow"
description: "Membuat efek animasi glow pada avatar."
---

# Avatar Glow

> **Beginner Track** · Modul 26 · Packages · Beginner

## Target belajar

Membuat efek animasi glow pada avatar.

## Yang akan dipelajari

- Menggunakan package `avatar_glow`.
- Membungkus widget dengan efek animasi.
- Mengatur warna dan ukuran glow.
- Memakai animasi sebagai status visual.

## Ringkasan

Efek glow bisa memberi kesan aktif, recording, scanning, atau highlight profile. Gunakan secukupnya agar UI tetap fokus dan tidak terlalu ramai.

## Konsep kunci

- AvatarGlow
- CircleAvatar
- Animation effect
- Visual status

## Contoh inti

```dart
AvatarGlow(
  glowColor: Colors.blue,
  child: const CircleAvatar(
    radius: 40,
    child: Icon(Icons.person),
  ),
);
```

## Penjelasan

- `AvatarGlow` membungkus widget target.
- `glowColor` mengatur warna animasi.
- Child bisa berupa avatar, icon, atau widget lain.

## Latihan

- Ganti icon menjadi mic.
- Ubah warna glow berdasarkan status.
- Tambahkan tombol start/stop animasi.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [http](https://pub.dev/packages/http) — `^1.6.0`
- [convex_bottom_bar_plus](https://pub.dev/packages/convex_bottom_bar_plus) — `^4.0.1`
- [convex_bottom_bar](https://pub.dev/packages/convex_bottom_bar) — `^3.2.0`
- [intl](https://pub.dev/packages/intl) — `^0.20.3`
- [faker](https://pub.dev/packages/faker) — `^2.2.0`
- [avatar_glow](https://pub.dev/packages/avatar_glow) — `^3.0.1`

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
import 'package:convex_bottom_bar/convex_bottom_bar.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../main.dart';
import 'package:avatar_glow/avatar_glow.dart';

class Homepage extends StatefulWidget {
  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  String tanggal = DateTime.now().toIso8601String();
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    List<Widget> widgets = [
      ListView.builder(
        itemCount: 20,
        itemBuilder: (context, index) => ListTile(
          leading: AvatarGlow(
            glowRadiusFactor: 0.3,
            curve: Curves.easeInOutBack,
            glowColor: Colors.blue,
            glowShape: BoxShape.circle,
            child: CircleAvatar(
              backgroundColor: Colors.grey,
              backgroundImage: NetworkImage(
                "https://picsum.photos/id/${index + 870}/200/300",
              ),
            ),
          ),

          title: Text(faker.person.name()),
          //ini syntax formatnya
          subtitle: Text(
            DateFormat.MMMMd().add_Hms().format(DateTime.parse(tanggal)),
          ),
        ),
      ),
      Center(child: Text("MENU KE 2")),
      Center(child: Text("MENU KE 3")),
      Center(child: Text("MENU KE 4")),
      Center(child: Text("MENU KE 5")),
    ];
    return Scaffold(
      appBar: AppBar(
        title: Text("Convex Bottom Bar", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: false,
      ),
      body: widgets[currentIndex],
      bottomNavigationBar: ConvexAppBar(
        initialActiveIndex: 0,
        height: 60,
        style: TabStyle.react,
        items: [
          TabItem(icon: Icons.home, title: 'Home'),
          TabItem(icon: Icons.map, title: 'Discovery'),
          TabItem(icon: Icons.add, title: 'Add'),
          TabItem(icon: Icons.message, title: 'Message'),
          TabItem(icon: Icons.people, title: 'Profile'),
        ],
        onTap: (int i) {
          setState(() {
            currentIndex = i;
          });
        },
      ),
    );
  }
}

//DOCUMENTATION 
//https://pub.dev/packages/avatar_glow
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: package_avatar_glow
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
  convex_bottom_bar_plus: ^4.0.1
  convex_bottom_bar: ^3.2.0
  intl: ^0.20.3
  faker: ^2.2.0
  avatar_glow: ^3.0.1

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
