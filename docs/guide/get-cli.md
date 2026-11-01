---
title: "Get CLI"
description: "Mengenal struktur project Get CLI."
---

# Get CLI

> **Beginner Track** · Modul 43 · GetX Architecture · Beginner

## Target belajar

Mengenal struktur project Get CLI.

## Yang akan dipelajari

- Memahami folder `modules`.
- Mengenal binding, controller, dan view per fitur.
- Melihat route di `app_pages.dart` dan `app_routes.dart`.
- Menyiapkan struktur yang lebih scalable.

## Ringkasan

`Get CLI` adalah alat Command Line Interface bawaan GetX yang secara otomatis memotong dan merapikan arsitektur project Flutter ke dalam pola Modul (`modules`). Setiap fitur (misalnya Module Home, Module Login) diisolasi memiliki folder `bindings/`, `controllers/`, dan `views/` tersendiri.

## Konsep kunci

- Get CLI
- Modules
- Bindings
- Controllers
- Views
- Routes

## Contoh inti

```dart
GetMaterialApp(
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);
```

## Penjelasan

- Struktur Modular — Memisahkan kode berdasarkan Fitur/Modul sehingga ketika tim berkembang, pengerjaan tidak akan saling bertabrakan.
- `AppPages.routes` — Seluruh daftar rute dikumpulkan teratur di folder `app/routes/`.
- Pola Standar Industri — Menjadi standar arsitektur profesional bagi pengembang aplikasi Flutter berbasis GetX.

## Latihan

- Tambahkan module baru.
- Tambahkan route baru.
- Pindahkan logic halaman ke controller.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`

## Full source

### `lib/app/modules/add_product/bindings/add_product_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:get/get.dart';

import '../controllers/add_product_controller.dart';

class AddProductBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<AddProductController>(
      () => AddProductController(),
    );
  }
}
```

### `lib/app/modules/add_product/controllers/add_product_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AddProductController extends GetxController {
  TextEditingController namaC = TextEditingController();
  TextEditingController priceC = TextEditingController();
}
```

### `lib/app/modules/add_product/views/add_product_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';
import '../../products/controllers/products_controller.dart';
import 'package:get/get.dart';

import '../controllers/add_product_controller.dart';

class AddProductView extends GetView<AddProductController> {
  //INFO: jika butuh controller lain cukup find aja jangan ubah bagian atas
  final productC = Get.find<ProductsController>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AddProduct', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: ListView(
        padding: EdgeInsets.all(20),
        children: [
          TextField(
            controller: controller.namaC,
            decoration: InputDecoration(
              labelText: "Product Name",
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
              ),
            ),
          ),
          SizedBox(height: 20),
          TextField(
            controller: controller.priceC,
            keyboardType: TextInputType.number,
            decoration: InputDecoration(
              labelText: "Price Rp.",
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
              ),
            ),
          ),
          SizedBox(height: 35),
          ElevatedButton(
            onPressed: () {
              productC.addProduct(
                controller.namaC.text,
                controller.priceC.text,
              );
            },
            child: Text("Tambah"),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

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

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class HomeController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:test_get_cli/app/routes/app_pages.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Get.toNamed(Routes.PRODUCTS);
          },
          child: Text("Go To Product"),
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/app/modules/products/bindings/products_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:get/get.dart';

import '../controllers/products_controller.dart';

class ProductsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ProductsController>(
      () => ProductsController(),
    );
  }
}
```

### `lib/app/modules/products/controllers/products_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';

class ProductsController extends GetxController {
  RxList<Map<String, dynamic>> allProducts = <Map<String, dynamic>>[
    {"id": DateTime.now().toIso8601String(), "name": "sendal", "price": 10000},
    {"id": DateTime.now().toIso8601String(), "name": "sepatu", "price": 250000},
    {"id": DateTime.now().toIso8601String(), "name": "celana", "price": 17000},
    {"id": DateTime.now().toIso8601String(), "name": "baju", "price": 20000},
    {
      "id": DateTime.now().toIso8601String(),
      "name": "kaos kaki",
      "price": 1000,
    },
  ].obs;

  void addProduct(String name, String price) {
    if (name.isNotEmpty && price.isNotEmpty) {
      allProducts.add({
        "id": DateTime.now().toIso8601String(),
        "name": name,
        "price": int.parse(price),
      });
      Get.back();
    }
  }
}
```

### `lib/app/modules/products/views/products_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:test_get_cli/app/routes/app_pages.dart';

import '../controllers/products_controller.dart';

class ProductsView extends GetView<ProductsController> {
  //NOTE: Disini menggunakan Getview sebagai pengganti Get.find, makanya udah ga makai stateles lagi
  const ProductsView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'ProductsView',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      body: Obx(
        () => Center(
          child: ListView.builder(
            itemCount: controller.allProducts.length,
            itemBuilder: (context, index) => ListTile(
              title: Text(controller.allProducts[index]["name"]),
              subtitle: Text(controller.allProducts[index]["price"].toString()),
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Get.toNamed(Routes.ADD_PRODUCT),
        child: Icon(Icons.add),
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: daftar nama route dan halaman yang dikenali aplikasi.

```dart
import 'package:get/get.dart';

import '../modules/add_product/bindings/add_product_binding.dart';
import '../modules/add_product/views/add_product_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/products/bindings/products_binding.dart';
import '../modules/products/views/products_view.dart';

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
    GetPage(
      name: _Paths.PRODUCTS,
      page: () => const ProductsView(),
      binding: ProductsBinding(),
    ),
    GetPage(
      name: _Paths.ADD_PRODUCT,
      page: () => AddProductView(),
      binding: AddProductBinding(),
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
  static const PRODUCTS = _Paths.PRODUCTS;
  static const ADD_PRODUCT = _Paths.ADD_PRODUCT;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
  static const PRODUCTS = '/products';
  static const ADD_PRODUCT = '/add-product';
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
name: test_get_cli
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
