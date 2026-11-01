---
title: "Study Case RajaOngkir"
description: "Membangun fitur cek ongkir dengan GetX, model, provider, controller, dan reactive UI."
---

# Study Case RajaOngkir

> **Beginner Track** · Modul 45 · Study Case · Beginner+

## Target belajar

Membangun fitur cek ongkir dengan GetX, model, provider, controller, dan reactive UI.

## Yang akan dipelajari

- Membuat model provinsi, kota, kurir, dan cost.
- Mengambil data melalui provider.
- Mengelola pilihan dropdown dengan `Rxn`.
- Menampilkan loading state terpisah.
- Mengirim request ongkir dengan body dan header API key placeholder.

## Ringkasan

Studi Kasus Puncak! Di sini kamu membangun aplikasi Cek Ongkos Kirim riil menggunakan API RajaOngkir. Menggabungkan seluruh konsep yang dipelajari: Arsitektur Get CLI, Provider `GetConnect`, Objek Model, Reactive State (`Rxn`, `assignAll`), Dropdown saling tergantung (Dependent Dropdown), dan indikator Loading.

::: warning API key di aplikasi
Placeholder pada contoh aman untuk dokumentasi, tetapi secret produksi tidak boleh dibundel ke aplikasi Flutter. Pindahkan secret dan aturan bisnis sensitif ke backend/proxy, lalu batasi key publik di dashboard penyedia API.
:::

## Konsep kunci

- Model
- Provider
- Get.find
- RxList
- Rxn
- assignAll
- Loading state
- POST request

## Contoh inti

```dart
class HomeController extends GetxController {
  final ProvinceProvider provinceProvider = Get.find();
  final CityProvider cityProvider = Get.find();
  final CostProvider costProvider = Get.find();

  final provinceList = <Province>[].obs;
  final originCityList = <City>[].obs;
  final destinationCityList = <City>[].obs;

  final selectedOriginProvince = Rxn<Province>();
  final selectedOriginCity = Rxn<City>();

  Future<void> loadProvince() async {
    try {
      isLoadingProvince.value = true;
      final result = await provinceProvider.getProvinces();
      provinceList.assignAll(result);
    } finally {
      isLoadingProvince.value = false;
    }
  }
}
```

## Penjelasan

- `Rxn<Province>()` — Variabel reaktif nullable yang cocok untuk menampung opsi Dropdown yang awalnya kosong.
- `provinceList.assignAll(result)` — Memperbarui seluruh isi list reaktif sekaligus dan memicu pembaruan UI secara instan.
- `try ... finally` — Blok penanganan yang menjamin status `isLoading` akan selalu dimatikan kembali, baik saat data sukses diunduh maupun saat terjadi kegagalan jaringan.

## Latihan

- Validasi semua dropdown sebelum cek ongkir.
- Tambahkan error snackbar jika request gagal.
- Pisahkan constant API key dan base URL ke file config.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`
- [animated_custom_dropdown](https://pub.dev/packages/animated_custom_dropdown) — `^4.0.0`
- [dio](https://pub.dev/packages/dio) — `^5.11.0`

## Full source

### `assets/model/city.json`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```json
{
      "id": 1370,
      "name": "CILANDAK",
      "zip_code": "12430"
    }
```

### `assets/model/province.json`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```json
{
      "id": 1,
      "name": "NUSA TENGGARA BARAT (NTB)"
}
```

### `lib/app/data/models/city_model.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
class City {
  int? id;
  String? name;
  String? zipCode;

  City({this.id, this.name, this.zipCode});

  City.fromJson(Map<String, dynamic> json) {
    // Nama key-nya ngikut dari response API RajaOngkir.
    id = json['id'];
    name = json['name'];
    zipCode = json['zip_code'];
  }

  Map<String, dynamic> toJson() {
    // Ini kebalikannya fromJson, object City diubah lagi jadi Map.
    final data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    data['zip_code'] = zipCode;
    return data;
  }

  static List<City> fromJsonList(List? data) {
    // Kalau API balikin null, kita amanin jadi list kosong biar UI nggak error.
    if (data == null) return [];
    return data.map((e) => City.fromJson(e)).toList();
  }

  @override
  // Dropdown bakal nampilin hasil toString ini, jadi yang kelihatan nama kotanya.
  String toString() => name ?? "";
}
```

### `lib/app/data/models/cost_model.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
class Cost {
  String? name;
  String? code;
  String? service;
  String? description;
  int? cost;
  String? etd;
  String? shipmentDuration;

  Cost({
    this.name,
    this.code,
    this.service,
    this.description,
    this.cost,
    this.etd,
    this.shipmentDuration,
  });

  Cost.fromJson(Map<String, dynamic> json) {
    // Ambil data ongkir dari response API, lalu masukin ke property model.
    name = json['name'];
    code = json['code'];
    service = json['service'];
    description = json['description'];
    cost = json['cost'];
    etd = json['etd'];
    shipmentDuration = json['shipment_duration'];
  }

  Map<String, dynamic> toJson() {
    // Kalau nanti butuh kirim/simpan data Cost, bentuknya sudah siap jadi Map.
    return {
      "name": name,
      "code": code,
      "service": service,
      "description": description,
      "cost": cost,
      "etd": etd,
      "shipment_duration": shipmentDuration,
    };
  }

  static List<Cost> fromJsonList(List? data) {
    // Jaga-jaga kalau data dari API kosong/null, app tetap aman.
    if (data == null) return [];

    return data.map((e) => Cost.fromJson(e)).toList();
  }
}
```

### `lib/app/data/models/courier_model.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
class Courier {
  final String code;
  final String name;

  Courier({required this.code, required this.name});

  @override
  // CustomDropdown pakai toString buat teks yang ditampilin.
  String toString() => name;
}
```

### `lib/app/data/models/province_model.dart`

Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe.

```dart
class Province {
  int? id;
  String? name;

  Province({this.id, this.name});

  Province.fromJson(Map<String, dynamic> json) {
    // Ubah data mentah dari API jadi object Province yang enak dipakai di Flutter.
    id = json['id'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    // Ini versi Map-nya Province, biasanya kepakai kalau mau dikirim/simpan lagi.
    final data = <String, dynamic>{};
    data['id'] = id;
    data['name'] = name;
    return data;
  }

  static List<Province> fromJsonList(List? data) {
    // Kalau response kosong, balikin list kosong supaya dropdown nggak pecah.
    if (data == null) return [];
    return data.map((e) => Province.fromJson(e)).toList();
  }

  @override
  // Yang muncul di dropdown cukup nama provinsinya.
  String toString() => name ?? "";
}
```

### `lib/app/data/providers/city_provider.dart`

Provider/service: mengambil data dari API atau sumber eksternal, lalu mengembalikannya ke controller.

```dart
import 'package:get/get.dart';

import '../models/city_model.dart';

class CityProvider extends GetConnect {
  Future<List<City>> getCity(int provinceId) async {
    // provinceId dimasukin ke URL biar API tahu kota dari provinsi mana yang diminta.
    final response = await get(
      'https://rajaongkir.komerce.id/api/v1/destination/city/${provinceId}',
      headers: {'key': 'API-KEY-KAMU'},
    );

    // Bagian "data" dari response API langsung diubah jadi List<City>.
    return City.fromJsonList(response.body["data"]);
  }
}
```

### `lib/app/data/providers/cost_provider.dart`

Provider/service: mengambil data dari API atau sumber eksternal, lalu mengembalikannya ke controller.

```dart
import 'package:get/get.dart';
import '../models/cost_model.dart';

class CostProvider extends GetConnect {
  Future<List<Cost>> getCost({
    required int origin,
    required int destination,
    required int weight,
    required String courier,
  }) async {
    // Endpoint ini butuh POST karena kita ngirim data asal, tujuan, berat, dan kurir.
    final response = await post(
      "https://rajaongkir.komerce.id/api/v1/calculate/district/domestic-cost",
      {
        "origin": origin,
        "destination": destination,
        "weight": weight,
        "courier": courier,
        "price": "lowest",
      },
      headers: {"key": "API-KEY-KAMU"},
      contentType: "application/x-www-form-urlencoded",
    );

    // Response ongkir biasanya list beberapa layanan, misalnya REG/YES/dll.
    return Cost.fromJsonList(response.body["data"]);
  }
}
```

### `lib/app/data/providers/province_provider.dart`

Provider/service: mengambil data dari API atau sumber eksternal, lalu mengembalikannya ke controller.

```dart
import 'package:get/get.dart';

import '../models/province_model.dart';

class ProvinceProvider extends GetConnect {
  Future<List<Province>> getProvinces() async {
    // Ambil semua provinsi dari API RajaOngkir.
    final response = await get(
      'https://rajaongkir.komerce.id/api/v1/destination/province',
      headers: {'key': 'API-KEY-KAMU'},
    );

    // Data mentah dari API diubah jadi list Province biar gampang dipakai dropdown.
    return Province.fromJsonList(response.body["data"]);
  }
}
```

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan controller/provider sebelum halaman digunakan.

```dart
import 'package:get/get.dart';
import 'package:studycase_rajaongkir/app/data/providers/city_provider.dart';
import 'package:studycase_rajaongkir/app/data/providers/cost_provider.dart';
import 'package:studycase_rajaongkir/app/data/providers/province_provider.dart';

import '../controllers/home_controller.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    // lazyPut artinya object baru dibuat pas pertama kali dipakai, jadi lebih hemat.
    Get.lazyPut<ProvinceProvider>(() => ProvinceProvider());
    Get.lazyPut<CostProvider>(() => CostProvider());
    Get.lazyPut<CityProvider>(() => CityProvider());
    // Controller juga didaftarin di sini supaya HomeView bisa langsung pakai controller.
    Get.lazyPut<HomeController>(() => HomeController());
  }
}
```

### `lib/app/modules/home/controllers/home_controller.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:get/get.dart';
import 'package:studycase_rajaongkir/app/data/models/city_model.dart';
import 'package:studycase_rajaongkir/app/data/models/cost_model.dart';
import 'package:studycase_rajaongkir/app/data/models/courier_model.dart';
import 'package:studycase_rajaongkir/app/data/models/province_model.dart';
import 'package:studycase_rajaongkir/app/data/providers/city_provider.dart';
import 'package:studycase_rajaongkir/app/data/providers/cost_provider.dart';
import 'package:studycase_rajaongkir/app/data/providers/province_provider.dart';

class HomeController extends GetxController {
  // Get.find() ngambil provider yang tadi sudah didaftarin di HomeBinding.
  final ProvinceProvider provinceProvider = Get.find();
  final CityProvider cityProvider = Get.find();

  // .obs bikin data ini reactive, jadi kalau berubah UI yang pakai Obx ikut ke-refresh.
  final provinceList = <Province>[].obs;
  final originCityList = <City>[].obs;
  final destinationCityList = <City>[].obs;

  // Pilihan asal. Rxn dipakai karena awalnya memang boleh kosong/null.
  final selectedOriginProvince = Rxn<Province>();
  final selectedOriginCity = Rxn<City>();

  // Pilihan tujuan. Nanti keisi setelah user pilih dari dropdown.
  final selectedDestinationProvince = Rxn<Province>();
  final selectedDestinationCity = Rxn<City>();

  // Loading dipisah-pisah supaya spinner yang muncul cuma di bagian yang lagi ambil data.
  final isLoadingProvince = false.obs;
  final isLoadingOriginCity = false.obs;
  final isLoadingDestinationCity = false.obs;

  // List kurir masih hardcode di sini, jadi dropdown kurir nggak ambil dari API.
  final courierList = <Courier>[
    Courier(code: "jne", name: "JNE"),
    Courier(code: "pos", name: "POS Indonesia"),
  ].obs;
  final selectedCourier = Rxn<Courier>();

  // Berat disimpan dalam gram, sesuai input user di TextField.
  RxInt selectedWeight = 0.obs;

  // Hasil cek ongkir dari API nanti masuk ke list ini, terus ditampilin di bawah tombol.
  final costList = <Cost>[].obs;

  final isLoadingCost = false.obs;

  @override
  void onInit() {
    super.onInit();

    // Begitu controller hidup, langsung ambil daftar provinsi buat dropdown.
    loadProvince();
  }

  Future<void> loadProvince() async {
    try {
      // true dulu supaya UI bisa nampilin loading.
      isLoadingProvince.value = true;

      final result = await provinceProvider.getProvinces();

      // assignAll ganti isi list lama dengan data baru dari API.
      provinceList.assignAll(result);
    } finally {
      // finally tetap jalan walaupun request error, jadi loading nggak nyangkut.
      isLoadingProvince.value = false;
    }
  }

  Future<void> loadOriginCity(int provinceId) async {
    try {
      isLoadingOriginCity.value = true;

      final result = await cityProvider.getCity(provinceId);

      originCityList.assignAll(result);

      // Kalau provinsi asal berubah, kota yang kepilih sebelumnya harus dikosongin.
      selectedOriginCity.value = null;
    } finally {
      isLoadingOriginCity.value = false;
    }
  }

  Future<void> loadDestinationCity(int provinceId) async {
    try {
      isLoadingDestinationCity.value = true;

      final result = await cityProvider.getCity(provinceId);

      destinationCityList.assignAll(result);

      // Sama seperti asal, pilihan kota tujuan lama dibuang setelah provinsi berubah.
      selectedDestinationCity.value = null;
    } finally {
      isLoadingDestinationCity.value = false;
    }
  }

  // Provider ongkir dipisah karena tugasnya khusus hitung biaya kirim.
  final costProvider = Get.find<CostProvider>();

  Future<void> cekOngkir() async {
    try {
      isLoadingCost.value = true;

      // Tanda ! artinya kita yakin datanya sudah dipilih user sebelum tombol ditekan.
      final result = await costProvider.getCost(
        origin: selectedOriginCity.value!.id!,
        destination: selectedDestinationCity.value!.id!,
        weight: selectedWeight.value,
        courier: selectedCourier.value!.code,
      );

      // Begitu hasil masuk, Obx di view bakal otomatis nampilin daftar ongkir.
      costList.assignAll(result);
    } finally {
      isLoadingCost.value = false;
    }
  }
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:animated_custom_dropdown/custom_dropdown.dart';
import 'package:studycase_rajaongkir/app/data/models/city_model.dart';
import 'package:studycase_rajaongkir/app/data/models/courier_model.dart';
import 'package:studycase_rajaongkir/app/data/models/province_model.dart';
import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    // GetView sudah otomatis punya "controller", jadi nggak perlu bikin manual lagi.
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Cek Ongkir Tercepat',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      body: ListView(
        padding: EdgeInsets.all(20),
        children: [
          // Bagian ini buat ngatur lokasi asal paket.
          Text(
            "Pilih Provinsi & Kota Asal",
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          Obx(() {
            // Obx bakal rebuild bagian ini kalau isLoadingProvince/provinceList berubah.
            if (controller.isLoadingProvince.value == true) {
              return Center(child: CircularProgressIndicator());
            }
            return CustomDropdown<Province>.search(
              autofocusOnSearch: true,
              hintText: "Pilih Provinsi",
              items: controller.provinceList,
              onChanged: (province) {
                controller.selectedOriginProvince.value = province;
                // Kota asal dikosongin dulu karena provinsinya baru dipilih lagi.
                controller.originCityList.clear();
                if (province != null) {
                  controller.loadOriginCity(province.id!);
                }
              },
            );
          }),
          SizedBox(height: 20),
          Obx(() {
            if (controller.isLoadingOriginCity.value) {
              return const CircularProgressIndicator();
            }

            // Isi dropdown kota asal bergantung dari provinsi asal yang dipilih.
            return CustomDropdown<City>.search(
              hintText: "Pilih Kota",
              items: controller.originCityList,
              onChanged: (city) {
                controller.selectedOriginCity.value = city;
              },
            );
          }),
          SizedBox(height: 40),
          // Bagian ini mirip asal, tapi datanya disimpan ke pilihan tujuan.
          Text(
            "Pilih Provinsi & Kota Tujuan",
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          Obx(() {
            if (controller.isLoadingProvince.value == true) {
              return Center(child: CircularProgressIndicator());
            }
            return CustomDropdown<Province>.search(
              autofocusOnSearch: true,
              hintText: "Pilih Provinsi",
              items: controller.provinceList,
              onChanged: (province) {
                controller.selectedDestinationProvince.value = province;
                if (province != null) {
                  // Setelah provinsi tujuan dipilih, baru ambil daftar kotanya.
                  controller.loadDestinationCity(province.id!);
                }
              },
            );
          }),
          SizedBox(height: 20),
          Obx(() {
            if (controller.isLoadingDestinationCity.value) {
              return const CircularProgressIndicator();
            }

            // Dropdown kota tujuan baru keisi setelah user pilih provinsi tujuan.
            return CustomDropdown<City>.search(
              hintText: "Pilih Kota",
              items: controller.destinationCityList,
              onChanged: (city) {
                controller.selectedDestinationCity.value = city;
              },
            );
          }),

          SizedBox(height: 40),
          // Kurirnya dari list manual di controller, bukan dari request API.
          Text(
            "Pilih Jasa Pengiriman",
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          Obx(() {
            if (controller.isLoadingProvince.value == true) {
              return Center(child: CircularProgressIndicator());
            }
            return CustomDropdown<Courier>.search(
              autofocusOnSearch: true,
              hintText: "Pilih Kurir",
              items: controller.courierList,
              onChanged: (courir) {
                controller.selectedCourier.value = courir;
              },
            );
          }),
          SizedBox(height: 40),
          Text(
            "Berat Paket (gram)",
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          TextField(
            keyboardType: TextInputType.number,
            decoration: InputDecoration(
              label: Text("Masukan berat"),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
              ),
            ),
            onChanged: (weight) {
              // TextField ngasih String, jadi diubah dulu ke int buat dikirim ke API.
              controller.selectedWeight.value = int.parse(weight);
            },
          ),
          SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {
              // Tombol ini mulai request hitung ongkir pakai data yang sudah dipilih.
              controller.cekOngkir();
            },
            child: Text("Cek Ongkir"),
            style: ElevatedButton.styleFrom(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10),
              ),
              foregroundColor: Colors.white,
              backgroundColor: Colors.blue,
            ),
          ),
          Obx(() {
            // Daftar hasil ongkir otomatis berubah kalau controller.costList berubah.
            return ListView.builder(
              shrinkWrap: true,
              // Karena sudah ada ListView utama, list hasil ini jangan ikut scroll sendiri.
              physics: const NeverScrollableScrollPhysics(),
              itemCount: controller.costList.length,
              itemBuilder: (_, index) {
                final cost = controller.costList[index];

                return Card(
                  child: ListTile(
                    title: Text(cost.service ?? "-"),
                    subtitle: Text(
                      "${cost.description}\nEstimasi ${cost.etd} ",
                    ),
                    trailing: Text("Rp ${cost.cost}"),
                  ),
                );
              },
            );
          }),
        ],
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
  // Constructor private, jadi class ini memang cuma buat naruh config route.
  AppPages._();

  // Route awal app, sekarang diarahkan ke halaman HOME.
  static const INITIAL = Routes.HOME;

  static final routes = [
    GetPage(
      // Kalau route '/home' dipanggil, GetX bakal buka HomeView.
      name: _Paths.HOME,
      page: () => const HomeView(),
      // Binding ini yang nyiapin controller + provider sebelum halaman dipakai.
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
      // Biar tulisan "DEBUG" merah di pojok kanan atas nggak muncul.
      debugShowCheckedModeBanner: false,
      title: "Application",
      // Halaman pertama yang langsung dibuka pas app jalan.
      initialRoute: AppPages.INITIAL,
      // Daftar semua route/halaman yang dikenalin sama GetX.
      getPages: AppPages.routes,
    ),
  );
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: studycase_rajaongkir
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
  # sdkConstraint: ">=2.12.0 <4.0.0"
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
  animated_custom_dropdown: ^4.0.0
  dio: ^5.11.0

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
