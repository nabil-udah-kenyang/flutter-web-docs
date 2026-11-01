---
title: "Latihan Get CLI"
description: "Menambahkan model dan provider pada struktur Get CLI."
---

# Latihan Get CLI

> **Beginner Track** · Modul 44 · GetX Architecture · Beginner

## Target belajar

Menambahkan model dan provider pada struktur Get CLI.

## Yang akan dipelajari

- Membuat provider dengan `GetConnect`.
- Mengatur base URL.
- Mengirim API key placeholder lewat header.
- Parsing response ke model.

## Ringkasan

Modul ini melengkapi arsitektur Get CLI dengan menambahkan Lapisan Data (`app/data/`). `Provider` bertugas mengambil data dari API, `Model` mengonversi JSON menjadi Objek Dart, `Controller` memproses logika bisnis, dan `View` murni menampilkan UI.

::: warning API key di aplikasi
Placeholder pada contoh aman untuk dokumentasi, tetapi secret produksi tidak boleh dibundel ke aplikasi Flutter. Pindahkan secret dan aturan bisnis sensitif ke backend/proxy, lalu batasi key publik di dashboard penyedia API.
:::

## Konsep kunci

- GetConnect
- Provider
- Model
- Base URL
- Header
- API key placeholder

## Contoh inti

```dart
class UserProvider extends GetConnect {
  @override
  void onInit() {
    httpClient.baseUrl = 'https://reqres.in';

    httpClient.addRequestModifier<dynamic>((request) {
      request.headers['x-api-key'] = 'API-KEY-KAMU';
      return request;
    });

    super.onInit();
  }

  Future<User?> getUser(int id) async {
    final response = await get('/api/users/$id');
    if (!response.isOk || response.body == null) return null;
    return User.fromJson(response.body["data"]);
  }
}
```

## Penjelasan

- `GetConnect` — Modul HTTP bawaan GetX yang ringkas tanpa memerlukan package eksternal `http`.
- `httpClient.baseUrl` — Mengatur URL domain utama backend sehingga pemanggilan endpoint cukup menuliskan path sisa (`/api/users`).
- `addRequestModifier` — Menyisipkan header atau API Key secara otomatis ke setiap request jaringannya.

## Latihan

- Tambahkan method create user.
- Tampilkan loading di view.
- Tangani response error dengan snackbar.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `assets/models/user.json`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```json
{
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
}
```

### `assets/reqres.dart`

File Dart latihan: berisi konsep utama yang sedang dipelajari di modul ini.

```dart

```

### `lib/app/data/models/user_model.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
class User {
  // Dibikin nullable karena data dari API kadang bisa aja kosong/null.
  int? id;
  String? email;
  String? firstName;
  String? lastName;
  String? avatar;

  User({this.id, this.email, this.firstName, this.lastName, this.avatar});

  // Ini buat ngubah data JSON dari API jadi object User.
  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    email = json['email'];
    firstName = json['first_name'];
    lastName = json['last_name'];
    avatar = json['avatar'];
  }

  // Ini kebalikannya fromJson, dari object User jadi bentuk JSON lagi.
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['id'] = id;
    data['email'] = email;
    data['first_name'] = firstName;
    data['last_name'] = lastName;
    data['avatar'] = avatar;
    return data;
  }

  // Kalau API balikin banyak user, method ini bantu ubah List JSON jadi List<User>.
  static List<User> fromJsonList(List data) {
    if (data.length == 0) {
      return [];
    }
    return data.map((e) => User.fromJson(e)).toList();
  }
}
```

### `lib/app/data/providers/user_provider.dart`

Provider/service: mengambil data dari API atau sumber eksternal, lalu mengembalikannya ke controller.

```dart
import 'package:get/get.dart';

import '../models/user_model.dart';

class UserProvider extends GetConnect {
  @override
  void onInit() {
    // Base URL biar nanti di get() cukup tulis path-nya aja, ga usah full URL terus.
    httpClient.baseUrl = 'https://reqres.in';

    // ReqRes sekarang butuh API key, jadi header ini dikirim setiap request.
    httpClient.addRequestModifier<dynamic>((request) {
      request.headers['x-api-key'] = 'API-KEY-KAMU';
      return request;
    });

    super.onInit();
  }

  Future<User?> getUser(int id) async {
    // Karena baseUrl udah ada, ini jatuhnya jadi https://reqres.in/api/users/{id}
    final response = await get('/api/users/$id');

    // Kalau request gagal atau body kosong, jangan dipaksa parsing biar ga null error.
    if (!response.isOk || response.body == null) return null;

    // Di ReqRes, data user aslinya ada di key "data", bukan langsung di root response.
    final data = response.body["data"];
    if (data == null) return null;

    return User.fromJson(data);
  }

  Future<List<User>> getAllUsers() async {
    // Ambil semua user dari API ReqRes.
    final response = await get('/api/users');

    // Kalau gagal, balikin list kosong aja biar UI tetap aman.
    if (!response.isOk || response.body == null) return [];

    // Response ReqRes bentuknya { page, data, support }, jadi yang diambil cuma "data".
    final data = response.body["data"];
    if (data == null) return [];

    return User.fromJsonList(data);
  }

  //CRUD
}
```

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:get/get.dart';

import '../../../data/providers/user_provider.dart';
import '../controllers/home_controller.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<UserProvider>(
      () => UserProvider(),
    );

    Get.lazyPut<HomeController>(
      () => HomeController(),
    );
  }
}
```

### `lib/app/modules/home/controllers/home_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

import '../../../data/models/user_model.dart';
import '../../../data/providers/user_provider.dart';

class HomeController extends GetxController {
  // Ambil provider yang udah didaftarin di binding, jadi onInit provider tetap jalan.
  UserProvider userProv = Get.find<UserProvider>();

  // Controller jadi jembatan antara View dan Provider.
  Future<User?> getSingleUser(int id) async {
    return await userProv.getUser(id);
  }

  // View cukup panggil controller, urusan API biar provider yang handle.
  Future<List<User>> getAllUsers() async {
    return await userProv.getAllUsers();
  }
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';
import '../../../data/models/user_model.dart';
import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        centerTitle: true,
      ),
      body: FutureBuilder<List<User>>(
        // FutureBuilder ini nunggu data user dari API selesai diambil.
        future: controller.getAllUsers(),
        builder: (context, Snap) {
          // Pas data masih loading, tampilkan muter-muter dulu.
          if (Snap.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          // Kalau future-nya error, jangan langsung pakai Snap.data.
          if (Snap.hasError) {
            return Center(child: Text("Terjadi kesalahan"));
          }
          // Data bisa kosong, jadi dicek dulu sebelum pakai tanda seru (!).
          if (!Snap.hasData || Snap.data!.isEmpty) {
            return Center(child: Text("Maaf data tidak ada"));
          }

          return ListView.builder(
            itemCount: Snap.data!.length,
            itemBuilder: (context, index) {
              // Ambil satu user berdasarkan index list.
              User user = Snap.data![index];
              return ListTile(
                leading: CircleAvatar(
                  // Avatar dari API berupa link gambar.
                  backgroundImage: NetworkImage(user.avatar!),
                ),
                title: Text(
                  "${user.firstName}"
                  "${user.lastName}",
                ),
                subtitle: Text("${user.email}"),
              );
            },
          );
        },
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: daftar nama route dan halaman yang dikenali aplikasi.

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

Route config: daftar nama route dan halaman yang dikenali aplikasi.

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

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    ),
  );
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: latihan_get_cli
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
  assets:
    - assets/models/
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
