---
title: "Supabase Auth, Storage & CRUD"
description: "Membangun auth, database realtime, upload gambar Storage, dan CRUD produk dengan Supabase."
---

# Supabase Auth, Storage & CRUD

> **Advanced Track** · Modul I19 · Cloud Backend · Advanced

## Target belajar

Membangun auth, database realtime, upload gambar Storage, dan CRUD produk dengan Supabase.

## Yang akan dipelajari

- Menginisialisasi Supabase dan membaca session.
- Membuat register, login, reset password, dan logout.
- Stream tabel realtime serta upload/hapus gambar di Storage.

## Ringkasan

Modul puncak ini memadukan Supabase Auth, Postgres realtime, Storage, image picker, dan GetX untuk membangun aplikasi produk yang lebih mendekati kebutuhan produksi.

::: warning Konfigurasi cloud & keamanan
Snapshot konfigurasi pada dokumentasi telah disamarkan. Untuk aplikasi nyata, gunakan konfigurasi environment/build yang tepat, aktifkan Firestore Rules atau Supabase RLS, dan jangan menganggap key di aplikasi sebagai tempat untuk menyimpan secret server.
:::

## Konsep kunci

- Supabase Auth
- Realtime stream
- Storage bucket
- image_picker
- RLS
- CRUD

## Contoh inti

```dart
import 'package:belajar_supabase/app/controllers/auth_controller.dart';
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  final authC = Get.find<AuthController>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
        actions: [
          IconButton(icon: Icon(Icons.logout), onPressed: authC.logout),
        ],
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Get.toNamed(Routes.PRODUCTS);
          },
          child: Text("Produk"),
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
          ),
        ),
      ),
    );
  }
}
```

## Penjelasan

- Session menentukan halaman pertama saat app dibuka.
- Untuk realtime, Supabase perlu primary key tabel agar perubahan baris dapat dilacak.
- Storage dan row database perlu dibersihkan bersama ketika produk dihapus.

## Latihan

- Tambahkan validasi ukuran dan format gambar.
- Aktifkan serta uji RLS policy untuk tabel dan bucket.
- Gunakan environment/build configuration untuk URL dan publishable key.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`
- [supabase_flutter](https://pub.dev/packages/supabase_flutter) — `^2.18.0`
- [image_picker](https://pub.dev/packages/image_picker) — `^1.2.4`
- [mime](https://pub.dev/packages/mime) — `^2.1.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'app/controllers/auth_controller.dart';
import 'app/routes/app_pages.dart';

Future<void> main() async {
  //Karena main() sekarang async, Flutter perlu memastikan binding sudah siap sebelum melakukan inisialisasi plugin.
  WidgetsFlutterBinding.ensureInitialized();

  //ini untuk inisialisasi menghubungkan ke projek database supabase
  await Supabase.initialize(
    url: "https://PROJECT.supabase.co",
    publishableKey: "API-KEY-KAMU",
  );

  final session = Supabase.instance.client.auth.currentSession;
  final initialRoute = session != null ? Routes.HOME : Routes.LOGIN;

  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: initialRoute,
      getPages: AppPages.routes,
      initialBinding: BindingsBuilder(() {
        Get.put(AuthController(), permanent: true);
      }),
    ),
  );
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.

```yaml
name: belajar_supabase
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
  supabase_flutter: ^2.18.0
  image_picker: ^1.2.4
  mime: ^2.1.0

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

### `lib/app/controllers/auth_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthController extends GetxController {
  final supabase = Supabase.instance.client;

  Future<AuthResponse> register(String email, String password) {
    return supabase.auth.signUp(email: email.trim(), password: password);
  }

  Future<AuthResponse> login(String email, String password) {
    return supabase.auth.signInWithPassword(
      email: email.trim(),
      password: password,
    );
  }

  void resetPassword(String email) async {
    //untuk cek apakah email valid atau tidak, jika valid maka akan mengirim email reset password
    if (email.isNotEmpty && GetUtils.isEmail(email)) {
      try {
        await supabase.auth.resetPasswordForEmail(email.trim());

        Get.defaultDialog(
          title: 'Berhasil',
          middleText:
              'Email reset password berhasil dikirim. Silakan cek email.',
          textConfirm: 'Baik',
          onConfirm: () {
            Get.back();
            Get.back();
          },
        );
      } on AuthException catch (error) {
        Get.defaultDialog(title: 'Gagal', middleText: error.message);
      } catch (error) {
        Get.defaultDialog(
          title: 'Gagal',
          middleText: 'Tidak dapat mengirim email reset password: $error',
        );
      }
    } else {
      Get.defaultDialog(title: 'Gagal', middleText: 'Email tidak valid');
    }
  }

  Future<void> logout() async {
    try {
      await supabase.auth.signOut();
      Get.offAllNamed(Routes.LOGIN);
    } on AuthException catch (error) {
      Get.snackbar('Logout gagal', error.message);
    }
  }
}
```

### `lib/app/modules/add_product/bindings/add_product_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/add_product_controller.dart';

class AddProductBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<AddProductController>(() => AddProductController());
  }
}
```

### `lib/app/modules/add_product/controllers/add_product_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'dart:io';

import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mime/mime.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AddProductController extends GetxController {
  //Inisialisi lagi untuk supabase nya
  final supabase = Supabase.instance.client;

  late TextEditingController nameC;
  late TextEditingController priceC;

  final ImagePicker picker = ImagePicker();

  //variabel tempat dimana foto yang dipilih akan disimpan
  final Rxn<File> selectedImage = Rxn<File>();

  //fungsi untuk memilih foto
  Future<void> pickImage() async {
    final image = await picker.pickImage(source: ImageSource.gallery);

    if (image != null) {
      selectedImage.value = File(image.path);
    }
  }

  Future<void> addProduct(String nama, int harga) async {
    try {
      //validasi foto terlebih dahulu
      if (selectedImage.value == null) {
        Get.snackbar("Gagal", "Silahkan masukan gambar terlebih dahulu");
        return;
      }

      String dateNow = DateTime.now().toIso8601String();
      final product = await supabase
          .from('product')
          .insert({'name': nama, 'price': harga, 'created_at': dateNow})
          .select()
          .single(); //pakai select dan single agar supabase mengembalikan data yang udah diupload

      //tampung id product yang baru dibuat
      final int productId = product['id'];

      //ambil extension dari file yang udah dipilih untuk di upload
      final extension = selectedImage.value!.path.split('.').last;

      //buat file path di storage
      final String imagePath =
          'products/$productId-${DateTime.now().millisecondsSinceEpoch}.$extension';

      //tentukan mime type
      final String? mimeType = lookupMimeType(selectedImage.value!.path);

      //upload foto ke supabase storage
      await supabase.storage
          .from('product-images')
          .upload(
            imagePath,
            selectedImage.value!,
            fileOptions: FileOptions(contentType: mimeType),
          );

      //ambil public url
      final String imageUrl = await supabase.storage
          .from('product-images')
          .getPublicUrl(imagePath);

      //update url dan path di database
      await supabase
          .from('product')
          .update({'image_url': imageUrl, 'image_path': imagePath})
          .eq('id', productId);

      Get.snackbar("Berhasil", "Produk Telah ditambahkan");
      Get.toNamed(Routes.PRODUCTS);
    } catch (e) {
      Get.snackbar("Gagal", "Produk Gagal ditambahkan");
    }
  }

  // on init dan juga on close dibuat utuk mencegah kebocoran text controller
  @override
  void onInit() {
    // TODO: implement onInit
    nameC = TextEditingController();
    priceC = TextEditingController();
    super.onInit();
  }

  @override
  void onClose() {
    // TODO: implement onClose
    nameC.dispose();
    priceC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/add_product/views/add_product_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/add_product_controller.dart';

class AddProductView extends GetView<AddProductController> {
  const AddProductView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text(
          'Tambah produk',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            TextField(
              controller: controller.nameC,
              decoration: InputDecoration(
                labelText: "Nama Produk",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              textInputAction: TextInputAction.next,
            ),
            SizedBox(height: 10),
            TextField(
              controller: controller.priceC,
              decoration: InputDecoration(
                labelText: "Harga produk",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),

            const SizedBox(height: 20),

            // Upload Foto
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(
                  'Foto Produk',
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                    color: Colors.grey.shade800,
                  ),
                ),
              ],
            ),

            const SizedBox(height: 8),

            Obx(
              () => GestureDetector(
                onTap: controller.pickImage,
                child: Container(
                  width: double.infinity,
                  height: 220,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade50,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.grey.shade300, width: 1.5),
                  ),
                  child: controller.selectedImage.value != null
                      ? Stack(
                          children: [
                            // Preview foto
                            ClipRRect(
                              borderRadius: BorderRadius.circular(15),
                              child: Image.file(
                                controller.selectedImage.value!,
                                width: double.infinity,
                                height: double.infinity,
                                fit: BoxFit.cover,
                              ),
                            ),

                            // Overlay
                            Positioned.fill(
                              child: Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(15),
                                  color: Colors.black.withOpacity(0.25),
                                ),
                              ),
                            ),

                            // Tombol ganti foto
                            Center(
                              child: Container(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 16,
                                  vertical: 10,
                                ),
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: const Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.camera_alt_outlined, size: 20),
                                    SizedBox(width: 8),
                                    Text(
                                      'Ganti Foto',
                                      style: TextStyle(
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        )
                      : Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              width: 64,
                              height: 64,
                              decoration: BoxDecoration(
                                color: Colors.blue.shade50,
                                shape: BoxShape.circle,
                              ),
                              child: Icon(
                                Icons.cloud_upload_outlined,
                                size: 32,
                                color: Colors.blue,
                              ),
                            ),

                            const SizedBox(height: 14),

                            const Text(
                              'Upload Foto Produk',
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                              ),
                            ),

                            const SizedBox(height: 6),

                            Text(
                              'Ketuk untuk memilih foto',
                              style: TextStyle(
                                fontSize: 13,
                                color: Colors.grey.shade600,
                              ),
                            ),

                            const SizedBox(height: 4),

                            Text(
                              'JPG, JPEG atau PNG',
                              style: TextStyle(
                                fontSize: 12,
                                color: Colors.grey.shade500,
                              ),
                            ),
                          ],
                        ),
                ),
              ),
            ),

            const SizedBox(height: 20),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: () => controller.addProduct(
                controller.nameC.text,
                //karna harga berupa integer dan kita menampungnya di TextEditingController maka kita convert ke integer
                int.parse(controller.priceC.text),
              ),
              child: Text("Tambah Product"),
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
      ),
    );
  }
}
```

### `lib/app/modules/edit_product/bindings/edit_product_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/edit_product_controller.dart';

class EditProductBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<EditProductController>(() => EditProductController());
  }
}
```

### `lib/app/modules/edit_product/controllers/edit_product_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class EditProductController extends GetxController {
  late TextEditingController nameC;
  late TextEditingController priceC;

  final supabase = Supabase.instance.client;

  //function untuk edit data by id, menggunakna future agar di build data nya sebelum kebuka halamanya
  Future<Map<String, dynamic>?> getDataByID(int id) async {
    final dataById = await supabase
        .from("product")
        .select()
        .eq('id', id)
        .maybeSingle();

    return dataById;
  }

  //function update data
  Future<void> updateData(int id, String nama, int harga) async {
    try {
      await supabase
          .from('product')
          .update({'name': nama, 'price': harga})
          .eq('id', id);

      Get.back();
      Get.snackbar("Berhasil", "Produk berhasil diperbarui");
    } catch (e) {
      Get.snackbar("Gagal", "Produk gagal diperbarui: $e");
    }
  }

  // on init dan juga on close dibuat utuk mencegah kebocoran text controller
  @override
  void onInit() {
    // TODO: implement onInit
    nameC = TextEditingController();
    priceC = TextEditingController();
    super.onInit();
  }

  @override
  void onClose() {
    // TODO: implement onClose
    nameC.dispose();
    priceC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/edit_product/views/edit_product_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/edit_product_controller.dart';

class EditProductView extends GetView<EditProductController> {
  const EditProductView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Edit product',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
      ),
      body: FutureBuilder<Map<String, dynamic>?>(
        //tangkap argument ID dari Homeview lalu lempar ke edit controller
        future: controller.getDataByID(Get.arguments),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          //tangkap data  input field berdasarkan id yang ditangkap oleh snapshot
          var dataById = snapshot.data!;
          controller.nameC.text = dataById["name"];
          controller.priceC.text = dataById["price"].toString();

          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: [
                TextField(
                  controller: controller.nameC,
                  decoration: InputDecoration(
                    labelText: "Nama Produk",
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                  textInputAction: TextInputAction.next,
                ),
                SizedBox(height: 10),
                TextField(
                  controller: controller.priceC,
                  decoration: InputDecoration(
                    labelText: "Harga produk",
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
                SizedBox(height: 30),
                ElevatedButton(
                  onPressed: () {
                    controller.updateData(
                      //jangan lupa lempar id yg ada pada arguments sebagai parameter
                      Get.arguments,
                      controller.nameC.text,
                      int.parse(controller.priceC.text),
                    );
                  },

                  child: Text("Simpan Perubahan"),
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
        },
      ),
    );
  }
}
```

### `lib/app/modules/home/bindings/home_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(() => HomeController());
  }
}
```

### `lib/app/modules/home/controllers/home_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

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

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:belajar_supabase/app/controllers/auth_controller.dart';
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  final authC = Get.find<AuthController>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HomeView', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
        actions: [
          IconButton(icon: Icon(Icons.logout), onPressed: authC.logout),
        ],
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Get.toNamed(Routes.PRODUCTS);
          },
          child: Text("Produk"),
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
          ),
        ),
      ),
    );
  }
}
```

### `lib/app/modules/login/bindings/login_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<LoginController>(() => LoginController());
  }
}
```

### `lib/app/modules/login/controllers/login_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:belajar_supabase/app/controllers/auth_controller.dart';
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class LoginController extends GetxController {
  final authController = Get.find<AuthController>();

  final emailC = TextEditingController();
  final passwordC = TextEditingController();

  Future<void> login() async {
    final email = emailC.text.trim();
    final password = passwordC.text;

    if (email.isEmpty || password.isEmpty) {
      Get.snackbar('Error', 'Email dan password tidak boleh kosong');
      return;
    }

    try {
      final AuthResponse response = await authController.login(email, password);

      if (response.user == null || response.session == null) {
        Get.snackbar('Error', 'Login gagal. Silakan coba lagi.');
        return;
      }

      Get.snackbar('Berhasil', 'Login berhasil');
      Get.offAllNamed(Routes.HOME);
    } on AuthException catch (error) {
      Get.snackbar('Login gagal', error.message);
    } catch (error) {
      Get.snackbar('Error', error.toString());
    }
  }

  @override
  void onClose() {
    emailC.dispose();
    passwordC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/login/views/login_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../routes/app_pages.dart';
import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('Login', style: TextStyle(color: Colors.white)),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            SizedBox(height: 20),
            TextField(
              controller: controller.emailC,
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.next,
              decoration: InputDecoration(
                label: Text('email'),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
            SizedBox(height: 20),

            TextField(
              controller: controller.passwordC,
              decoration: InputDecoration(
                label: Text('password'),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              obscureText: true,
            ),
            SizedBox(height: 35),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              onPressed: () {
                controller.login();
              },
              child: const Text('Login'),
            ),
            SizedBox(height: 20),
            TextButton(
              onPressed: () {
                Get.toNamed(Routes.RESET_PASSWORD);
              },
              child: const Text('Lupa password?'),
            ),

            RichText(
              text: TextSpan(
                text: "Belum punya akun? ",
                style: TextStyle(color: Colors.black),
                children: [
                  TextSpan(
                    text: 'Daftar',
                    recognizer: TapGestureRecognizer()
                      //..onTap = langsung mengatur properti objek menggunakan cascade.
                      ..onTap = () {
                        Get.toNamed(Routes.REGISTER);
                      },
                    style: TextStyle(
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/app/modules/products/bindings/products_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/products_controller.dart';

class ProductsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ProductsController>(() => ProductsController());
  }
}
```

### `lib/app/modules/products/controllers/products_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ProductsController extends GetxController {
  //inisialisasi client terlebih dahulu, tampung dalam variabel
  final supabase = Supabase.instance.client;

  //gunakan stream untuk realtime database dengan memantau stream(primaryKey: ['id'])
  //dipanatu id karena Supabase perlu tahu primary key tabel product untuk melacak perubahan baris.
  Stream<List<Map<String, dynamic>>> TampilDataProduk() {
    final data = supabase.from('product').stream(primaryKey: ['id']);
    //cukup return variabelnya
    return data;
  }

  //fungsi delet product
  //tampung paramatere id yng dikirim dari view
  Future<void> deleteProduk(int id) async {
    Get.defaultDialog(
      middleText: "Yakin Ingin menghapus produk ini?",
      title: "Hapus Produk",
      textConfirm: "Ya",
      textCancel: "Tidak",
      buttonColor: Colors.red,
      onConfirm: () async {
        try {
          Get.back();
          //sytax dasar delete row
          // await supabase.from('product').delete().eq('id', id);
          //pastikan untuk mengaktifkan policies RlS di supabase
          // 1. Ambil data product berdasarkan ID
          final product = await supabase
              .from('product')
              .select('image_path')
              .eq('id', id)
              .maybeSingle();

          // 2. Kalau product mempunyai foto,
          // hapus foto tersebut dari Storage
          if (product != null && product['image_path'] != null) {
            await supabase.storage.from('product-images').remove([
              product['image_path'],
            ]);
          }

          // 3. Hapus product dari database
          await supabase.from('product').delete().eq('id', id);

          Get.snackbar("Berhasil", "Produk telah berhasil dihapus");
        } catch (e) {
          Get.snackbar("Gagal", "Produk tidak bisa dihapus: $e");
        }
      },
    );
  }
}
```

### `lib/app/modules/products/views/products_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/products_controller.dart';

class ProductsView extends GetView<ProductsController> {
  const ProductsView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text(
          'ProductsView',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
      ),

      body: Center(
        // Menggunakan StreamBuilder untuk mendengarkan perubahan data dari Stream
        child: StreamBuilder(
          // Stream digunakan untuk menerima data yang dapat berubah secara realtime
          stream: controller.TampilDataProduk(),
          // Builder digunakan untuk membangun UI berdasarkan kondisi dan data dari Stream
          builder: (context, asyncSnapshot) {
            if (asyncSnapshot.connectionState == ConnectionState.waiting) {
              return CircularProgressIndicator();
            }
            // Mengambil data dari AsyncSnapshot yang berasal dari Stream
            final products = asyncSnapshot.data ?? [];

            return ListView.builder(
              itemCount: products.length,
              itemBuilder: (context, index) {
                final product = products[index];
                return ListTile(
                  onTap: () => Get.toNamed(
                    Routes.EDIT_PRODUCT,
                    //NOTE: wajib mengirim argument ketika pindah ke halaman edit dengan arguments
                    arguments: product['id'],
                  ),

                  //foto Produk
                  leading: SizedBox(
                    width: 50,
                    height: 50,
                    child: product['image_url'] != null
                        ? Image.network(
                            product['image_url'],
                            fit: BoxFit.cover,
                            errorBuilder: (context, error, stackTrace) {
                              return const Icon(Icons.broken_image);
                            },
                          )
                        : const Icon(Icons.image),
                  ),
                  title: Text(product["name"]),
                  subtitle: Text("Rp.${product['price'].toString()}"),
                  trailing: IconButton(
                    //kirim index dengan paramater primary key table
                    onPressed: () => controller.deleteProduk(product['id']),
                    icon: Icon(Icons.delete),
                  ),
                );
              },
            );
          },
        ),
      ),

      //ini tombol untuk menambah data ke firebase
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        tooltip: "Tambah Data",
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadiusGeometry.circular(50),
        ),
        onPressed: () => Get.toNamed(Routes.ADD_PRODUCT),
        child: Icon(Icons.add),
      ),
    );
  }
}
```

### `lib/app/modules/register/bindings/register_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/register_controller.dart';

class RegisterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<RegisterController>(() => RegisterController());
  }
}
```

### `lib/app/modules/register/controllers/register_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:belajar_supabase/app/controllers/auth_controller.dart';
import 'package:belajar_supabase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RegisterController extends GetxController {
  final authController = Get.find<AuthController>();

  TextEditingController emailC = TextEditingController();
  TextEditingController passwordC = TextEditingController();

  Future<void> register() async {
    final email = emailC.text.trim();
    final password = passwordC.text;

    if (email.isEmpty || password.isEmpty) {
      Get.snackbar('Error', 'Email dan Password tidak boleh kosong');
      return;
    }
    try {
      final AuthResponse response = await authController.register(
        email,
        password,
      );
      final user = response.user;
      final session = response.session;

      if (user == null) {
        Get.snackbar('Error', 'Registrasi gagal. Silakan coba lagi.');
        return;
      }

      if (session == null) {
        Get.snackbar(
          'Berhasil',
          'Akun dibuat. Silakan cek email untuk verifikasi.',
        );
        Get.offAllNamed(Routes.LOGIN);
        return;
      }

      Get.snackbar('Berhasil', 'Akun berhasil dibuat');

      Get.offAllNamed(Routes.HOME);
    } on AuthException catch (error) {
      Get.snackbar('Registrasi gagal', error.message);
    } catch (error) {
      Get.snackbar('Error', error.toString());
    }
  }

  @override
  void onClose() {
    emailC.dispose();
    passwordC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/register/views/register_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/register_controller.dart';

class RegisterView extends GetView<RegisterController> {
  const RegisterView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Register', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            SizedBox(height: 20),

            TextField(
              controller: controller.emailC,
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.next,
              decoration: InputDecoration(
                label: Text('email'),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
            SizedBox(height: 20),

            TextField(
              controller: controller.passwordC,
              decoration: InputDecoration(
                label: Text('password'),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              obscureText: true,
            ),
            SizedBox(height: 35),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              onPressed: () {
                controller.register();
              },
              child: const Text('Register'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/app/modules/reset_password/bindings/reset_password_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/reset_password_controller.dart';

class ResetPasswordBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ResetPasswordController>(() => ResetPasswordController());
  }
}
```

### `lib/app/modules/reset_password/controllers/reset_password_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ResetPasswordController extends GetxController {
  final emailC = TextEditingController();

  @override
  void onClose() {
    emailC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/reset_password/views/reset_password_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:belajar_supabase/app/controllers/auth_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controllers/reset_password_controller.dart';

class ResetPasswordView extends GetView<ResetPasswordController> {
  final authController = Get.find<AuthController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Reset password',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.blue,
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Center(
          child: Column(
            children: [
              const SizedBox(height: 30),
              TextField(
                controller: controller.emailC,
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  label: const Text('Masukkan email terdaftar'),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () =>
                    authController.resetPassword(controller.emailC.text),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                child: const Text('Reset'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

### `lib/app/routes/app_pages.dart`

Route config: nama route dan halaman aplikasi yang terdaftar.

```dart
import 'package:get/get.dart';

import '../modules/add_product/bindings/add_product_binding.dart';
import '../modules/add_product/views/add_product_view.dart';
import '../modules/edit_product/bindings/edit_product_binding.dart';
import '../modules/edit_product/views/edit_product_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/login/bindings/login_binding.dart';
import '../modules/login/views/login_view.dart';
import '../modules/products/bindings/products_binding.dart';
import '../modules/products/views/products_view.dart';
import '../modules/register/bindings/register_binding.dart';
import '../modules/register/views/register_view.dart';
import '../modules/reset_password/bindings/reset_password_binding.dart';
import '../modules/reset_password/views/reset_password_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.LOGIN;

  static final routes = [
    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),
    GetPage(
      name: _Paths.PRODUCTS,
      page: () => const ProductsView(),
      binding: ProductsBinding(),
    ),
    GetPage(
      name: _Paths.ADD_PRODUCT,
      page: () => const AddProductView(),
      binding: AddProductBinding(),
    ),
    GetPage(
      name: _Paths.EDIT_PRODUCT,
      page: () => const EditProductView(),
      binding: EditProductBinding(),
    ),
    GetPage(
      name: _Paths.LOGIN,
      page: () => const LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.REGISTER,
      page: () => const RegisterView(),
      binding: RegisterBinding(),
    ),
    GetPage(
      name: _Paths.RESET_PASSWORD,
      page: () => ResetPasswordView(),
      binding: ResetPasswordBinding(),
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
  static const PRODUCTS = _Paths.PRODUCTS;
  static const ADD_PRODUCT = _Paths.ADD_PRODUCT;
  static const EDIT_PRODUCT = _Paths.EDIT_PRODUCT;
  static const LOGIN = _Paths.LOGIN;
  static const REGISTER = _Paths.REGISTER;
  static const RESET_PASSWORD = _Paths.RESET_PASSWORD;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
  static const PRODUCTS = '/products';
  static const ADD_PRODUCT = '/add-product';
  static const EDIT_PRODUCT = '/edit-product';
  static const LOGIN = '/login';
  static const REGISTER = '/register';
  static const RESET_PASSWORD = '/reset-password';
}
```
