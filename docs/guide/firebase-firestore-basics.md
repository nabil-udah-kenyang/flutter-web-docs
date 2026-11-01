---
title: "Firebase & Cloud Firestore"
description: "Menginisialisasi Firebase dan membaca koleksi Cloud Firestore dari Flutter."
---

# Firebase & Cloud Firestore

> **Advanced Track** · Modul I17 · Cloud Backend · Advanced

## Target belajar

Menginisialisasi Firebase dan membaca koleksi Cloud Firestore dari Flutter.

## Yang akan dipelajari

- Menggunakan FlutterFire CLI.
- Menginisialisasi Firebase sebelum runApp.
- Membaca collection Firestore dengan FutureBuilder.

## Ringkasan

Modul ini menghubungkan Flutter ke Firebase dan mengambil data satu kali dari Cloud Firestore. Ia menjadi fondasi sebelum masuk ke auth dan CRUD realtime.

::: warning Konfigurasi cloud & keamanan
Snapshot konfigurasi pada dokumentasi telah disamarkan. Untuk aplikasi nyata, gunakan konfigurasi environment/build yang tepat, aktifkan Firestore Rules atau Supabase RLS, dan jangan menganggap key di aplikasi sebagai tempat untuk menyimpan secret server.
:::

## Konsep kunci

- Firebase.initializeApp
- FlutterFire CLI
- Cloud Firestore
- FutureBuilder
- QuerySnapshot

## Contoh inti

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('HomeView'),
        centerTitle: true,
      ),
      body: FutureBuilder(
        future: controller.getRakData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasData) {
              return Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (var doc in snapshot.data!.docs) Text(doc["penulis"]),
                  ],
                ),
              );
            }
          }

          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
```

## Penjelasan

- Binding harus siap sebelum Firebase diinisialisasi.
- `get()` mengambil snapshot sekali; gunakan stream saat UI harus mengikuti perubahan realtime.

## Latihan

- Tambahkan dokumen buku baru dari Firebase Console.
- Tampilkan loading dan error state pada FutureBuilder.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`
- [firebase_core](https://pub.dev/packages/firebase_core) — `^4.13.0`
- [cloud_firestore](https://pub.dev/packages/cloud_firestore) — `^6.8.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.

```dart
import 'package:belajar_firebase/firebase_options.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

//NOTE:Untuk menginisialisasi firebase sebelum aplikasi dijalankan (runApp), menggunakan tipe data Future
Future<void> main() async {
  //ini diperlukan agar memastikan lagi kalau semua , sebelum menjalankan aplikasi kita, sudah terinisialisasi dengan sempurna
  WidgetsFlutterBinding.ensureInitialized();
  //syntax untuk inisialisasi firebase dengan default settingan firebase
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    ),
  );
}

//Firebase cli note:
// - firebase login => untuk login ke aku firebase
// - firebae projects:list => menampilkan keseluruhan projek pada akun firebase

//step yang dilakukan :
// - dart pub global activate flutterfire_cli => untuk mengaktifkan flutterfire cli => "cukup sekali saja"
// - flutterfire configure => berfungsi untuk mengkonfigurasi secara otomatis project flutter untuk terhubung ke firebase
// - download firebase_core dari pub.dev (Pubspec yaml)
// - download package yang dibutuhkan seperti cloud_firestore dll
```

### `pubspec.yaml`

Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.

```yaml
name: belajar_firebase
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
  get: ^4.7.3
  firebase_core: ^4.13.0
  cloud_firestore: ^6.8.0

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

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(
      () => HomeController(),
    );
  }
}
```

### `lib/app/modules/home/controllers/home_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:get/get.dart';

class HomeController extends GetxController {
  Future<QuerySnapshot<Map<String, dynamic>>> getRakData() async {
    return FirebaseFirestore.instance.collection("rak-buku").get();
  }
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('HomeView'),
        centerTitle: true,
      ),
      body: FutureBuilder(
        future: controller.getRakData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasData) {
              return Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (var doc in snapshot.data!.docs) Text(doc["penulis"]),
                  ],
                ),
              );
            }
          }

          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: nama route dan halaman aplikasi yang terdaftar.

```dart
import 'package:get/get.dart';

import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.HOME;

  static final routes = [
    GetPage(
      name: _Paths.HOME,
      page: () => const HomeView(),
      binding: HomeBinding(),
    ),
  ];
}
```

### `lib/app/routes/app_routes.dart`

Route config: nama route dan halaman aplikasi yang terdaftar.

```dart
part of 'app_pages.dart';
// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart

abstract class Routes {
  Routes._();
  static const HOME = _Paths.HOME;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
}
```

### `lib/firebase_options.dart`

Konfigurasi FlutterFire yang dihasilkan CLI; nilai credential telah disamarkan untuk dokumentasi.

````dart
// File generated by FlutterFire CLI.
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: "API-KEY-KAMU",
    appId: "FIREBASE-APP-ID",
    messagingSenderId: "FIREBASE-SENDER-ID",
    projectId: "FIREBASE-PROJECT-ID",
    authDomain: "FIREBASE-AUTH-DOMAIN",
    databaseURL: "https://FIREBASE-DATABASE-URL",
    storageBucket: "FIREBASE-STORAGE-BUCKET",
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: "API-KEY-KAMU",
    appId: "FIREBASE-APP-ID",
    messagingSenderId: "FIREBASE-SENDER-ID",
    projectId: "FIREBASE-PROJECT-ID",
    databaseURL: "https://FIREBASE-DATABASE-URL",
    storageBucket: "FIREBASE-STORAGE-BUCKET",
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: "API-KEY-KAMU",
    appId: "FIREBASE-APP-ID",
    messagingSenderId: "FIREBASE-SENDER-ID",
    projectId: "FIREBASE-PROJECT-ID",
    databaseURL: "https://FIREBASE-DATABASE-URL",
    storageBucket: "FIREBASE-STORAGE-BUCKET",
    iosBundleId: "com.example.app",
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: "API-KEY-KAMU",
    appId: "FIREBASE-APP-ID",
    messagingSenderId: "FIREBASE-SENDER-ID",
    projectId: "FIREBASE-PROJECT-ID",
    databaseURL: "https://FIREBASE-DATABASE-URL",
    storageBucket: "FIREBASE-STORAGE-BUCKET",
    iosBundleId: "com.example.app",
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: "API-KEY-KAMU",
    appId: "FIREBASE-APP-ID",
    messagingSenderId: "FIREBASE-SENDER-ID",
    projectId: "FIREBASE-PROJECT-ID",
    authDomain: "FIREBASE-AUTH-DOMAIN",
    databaseURL: "https://FIREBASE-DATABASE-URL",
    storageBucket: "FIREBASE-STORAGE-BUCKET",
  );
}
````
