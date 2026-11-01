---
title: "Firebase Auth & Firestore CRUD"
description: "Membangun autentikasi email, verifikasi, reset password, dan CRUD produk dengan Firebase."
---

# Firebase Auth & Firestore CRUD

> **Advanced Track** · Modul I18 · Cloud Backend · Advanced

## Target belajar

Membangun autentikasi email, verifikasi, reset password, dan CRUD produk dengan Firebase.

## Yang akan dipelajari

- Memantau auth state secara realtime.
- Sign in, sign up, email verification, dan reset password.
- Membuat, membaca, mengubah, dan menghapus data Firestore.

## Ringkasan

Project ini menggabungkan Firebase Authentication, Cloud Firestore, GetX controller, routing, dan form lifecycle menjadi aplikasi CRUD dengan alur login lengkap.

::: warning Konfigurasi cloud & keamanan
Snapshot konfigurasi pada dokumentasi telah disamarkan. Untuk aplikasi nyata, gunakan konfigurasi environment/build yang tepat, aktifkan Firestore Rules atau Supabase RLS, dan jangan menganggap key di aplikasi sebagai tempat untuk menyimpan secret server.
:::

## Konsep kunci

- FirebaseAuth
- authStateChanges
- Firestore snapshots
- CRUD
- TextEditingController lifecycle

## Contoh inti

```dart
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:auth_firebase/app/controllers/auth_controller.dart';

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
          IconButton(
            onPressed: () {
              authC.logout();
            },
            icon: Icon(Icons.logout),
          ),
        ],
      ),

      //Ini untuk One Time Get data menggunakan FutureBuilder dari firebase(Read)
      // body: FutureBuilder<QuerySnapshot<Object?>>(
      //   future: controller.tampilDataProduk(),
      //   builder: (context, Snapshot) {
      //     //cek apakah masih loading atau udah done
      //     if (Snapshot.connectionState == ConnectionState.waiting) {
      //       return Center(child: CircularProgressIndicator());
      //     }
      //     //cek apakah databse memiliki data
      //     else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {
      //       return Center(child: Text("Belum ada produk"));
      //     }
      //     //jika semua aman maka tampilkan data nya
      //     else {
      //       var listAllDocs = Snapshot.data!.docs;
      //       return ListView.builder(
      //         itemCount: listAllDocs.length,
      //         itemBuilder: (context, index) => ListTile(
      //           title: Text("${listAllDocs[index]["name"]}"),
      //           subtitle: Text("Rp.${listAllDocs[index]["price"]}"),
      //         ),
      //       );
      //     }
      //   },
      // ),

      //Ini untuk Realtime Get Data menggunakan StreamBuilder dari firebase(Read)
      body: StreamBuilder<QuerySnapshot<Object?>>(
        stream: controller.streamDataProduk(),
        builder: (context, Snapshot) {
          //cek apakah masih loading atau udah done
          if (Snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          //cek apakah databse memiliki data
          else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {
            return Center(child: Text("Belum ada produk"));
          }
          //jika semua aman maka tampilkan data nya
          else {
            var listAllDocs = Snapshot.data!.docs;
            return ListView.builder(
              itemCount: listAllDocs.length,
              itemBuilder: (context, index) => ListTile(
                //ini digunakan untk mengambil id berdasarkan apa yang di klik
                onTap: () => Get.toNamed(
                  Routes.EDIT_PRODUCT,
                  arguments: listAllDocs[index].id,
                ),
                title: Text("${listAllDocs[index]["name"]}"),
                subtitle: Text("Rp.${listAllDocs[index]["price"]}"),
                trailing: IconButton(
                  onPressed: () =>
                      //memanggil fungsi pada controller dengan melempar id melalui argument
                      controller.deleteProduct(listAllDocs[index].id),
                  icon: Icon(Icons.delete),
                ),
              ),
            );
          }
        },
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

## Penjelasan

- Auth state menentukan route awal aplikasi.
- Controller input harus dispose pada `onClose` agar resource tidak bocor.
- Firestore `snapshots()` mengalirkan perubahan data secara realtime.

## Latihan

- Tambahkan validasi nama dan harga produk.
- Buat loading state saat tombol form dikirim.
- Atur Firestore Security Rules sebelum memakai data nyata.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get](https://pub.dev/packages/get) — `^4.7.3`
- [firebase_core](https://pub.dev/packages/firebase_core) — `^4.13.0`
- [firebase_auth](https://pub.dev/packages/firebase_auth) — `^6.5.7`
- [cloud_firestore](https://pub.dev/packages/cloud_firestore) — `^6.9.0`

## Full source

### `lib/main.dart`

Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.

```dart
import 'package:auth_firebase/app/controllers/auth_controller.dart';
import 'package:auth_firebase/firebase_options.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';
import 'app/routes/app_pages.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  //put controlller karna bukan controller bawaan yang sudah di binding
  final authC = Get.put(AuthController(), permanent: true);
  @override
  Widget build(BuildContext context) {
    //wajib membungkus material dengan stream karna untuk pemantauan realtime
    return StreamBuilder<User?>(
      stream: authC.AuthStatus(),
      builder: (context, snapshot) {
        //cek untuk pengkondisian apakah ada sesi login, jika tidak lempar ke halaman login
        if (snapshot.connectionState == ConnectionState.active) {
          return GetMaterialApp(
            debugShowCheckedModeBanner: false,
            title: "Application",
            //pada tahap routing pastikan data tidak null dan email sudah verified
            initialRoute:
                snapshot.data != null && snapshot.data!.emailVerified == true
                ? Routes.HOME
                : Routes.LOGIN,
            getPages: AppPages.routes,
          );
        }

        return Center(child: CircularProgressIndicator());
      },
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.

```yaml
name: auth_firebase
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
  firebase_auth: ^6.5.7
  cloud_firestore: ^6.9.0

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
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';

class AuthController extends GetxController {
  //jika menggunakan getx maka lakuka inisiasi FirebaseAuth dengan syntax dibawah ini
  FirebaseAuth auth = FirebaseAuth.instance;

  //membuat function untuk memantau status autentikasi secara realtime dengan method authStateChanges()
  Stream<User?> AuthStatus() {
    return auth.authStateChanges();
  }

  void login(String email, String password) async {
    try {
      UserCredential myuser = await auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      //cek kembali apakah user sudah memverfikasi email, jika belum lempar eror message
      if (myuser.user!.emailVerified) {
        Get.offAllNamed(Routes.HOME);
      } else {
        Get.snackbar("Gagal", "Tolong verifikasi email terlebih dahulu");
      }
    } on FirebaseAuthException catch (e) {
      if (e.code == 'user-not-found') {
        print('No user found for that email.');
      } else if (e.code == 'wrong-password') {
        Get.defaultDialog(title: "Gagal", middleText: "Maaf password salah");
      }
    }
  }

  void signup(String email, String password) async {
    try {
      UserCredential myuser = await FirebaseAuth.instance
          .createUserWithEmailAndPassword(email: email, password: password);
      Get.defaultDialog(
        title: "Berhasil",
        middleText:
            "Silahkan klik link email yang telah kami kirim ke $email. harap segera di klik ",
        textConfirm: "Baik,akan saya cek",
        onConfirm: () {
          //ini untuk close dialog
          Get.back();
          Get.back();
        },
      );

      await myuser.user!.sendEmailVerification();
    } on FirebaseAuthException catch (e) {
      if (e.code == 'weak-password') {
        print('The password provided is too weak.');
      } else if (e.code == 'email-already-in-use') {
        print('The account already exists for that email.');
      }
    } catch (e) {
      print(e);
    }
  }

  void ResetPassword(String email) async {
    //Ini untuk cek apakah benar sebuah email menggunaka getutils
    if (email != "" && GetUtils.isEmail(email)) {
      try {
        await auth.sendPasswordResetEmail(email: email);
        Get.defaultDialog(
          middleText: "Email berhasil dikirim silahkan cek",
          title: "Berhasil",
          onConfirm: () {
            Get.back();
            Get.back();
          },
          textConfirm: "Baik",
        );
      } catch (e) {
        Get.defaultDialog(
          middleText: "Tidak dapat mengirim email ResetPassword",
          title: "Gagal",
        );
      }
    } else {
      Get.defaultDialog(middleText: "Email Tidak valid", title: "Gagal");
    }
  }

  void logout() async {
    await auth.signOut();
    Get.offAllNamed(Routes.LOGIN);
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
    Get.lazyPut<AddProductController>(
      () => AddProductController(),
    );
  }
}
```

### `lib/app/modules/add_product/controllers/add_product_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AddProductController extends GetxController {
  late TextEditingController nameC;
  late TextEditingController priceC;

  final db = FirebaseFirestore.instance;

  void addProduct(String name, String harga) async {
    try {
      //makai date untuk nantinya bisa enggunaka order by time
      String DateNow = DateTime.now().toIso8601String();
      await db.collection("product").add({
        "name": name,
        "price": int.parse(harga),
        "time": DateNow,
      });

      Get.snackbar("Berhasil", "Data telah ditambahkan");
      Get.toNamed(Routes.HOME);
    } catch (e) {
      Get.snackbar("Gagal", "Data tidak berhasil ditambahkan");
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
              decoration: InputDecoration(
                labelText: "Nama Produk",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              textInputAction: TextInputAction.next,
              controller: controller.nameC,
            ),
            SizedBox(height: 10),
            TextField(
              decoration: InputDecoration(
                labelText: "Harga produk",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              controller: controller.priceC,
            ),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: () => controller.addProduct(
                controller.nameC.text,
                controller.priceC.text,
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
    Get.lazyPut<EditProductController>(
      () => EditProductController(),
    );
  }
}
```

### `lib/app/modules/edit_product/controllers/edit_product_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class EditProductController extends GetxController {
  late TextEditingController nameC;
  late TextEditingController priceC;

  final db = FirebaseFirestore.instance;

  //function untuk edit data by id, mengambil data
  Future<DocumentSnapshot<Object?>> getDataByID(String docID) {
    return db.collection("product").doc(docID).get();
  }

  void editProduct(String name, String harga, String? docID) async {
    try {
      await db.collection("product").doc(docID).update({
        "name": name,
        "price": int.parse(harga),
      });

      Get.snackbar("Berhasil", "Data telah di Update");
      Get.toNamed(Routes.HOME);
    } catch (e) {
      Get.snackbar("Gagal", "Data tidak berhasil di Update");
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
import 'package:cloud_firestore/cloud_firestore.dart';
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
      body: FutureBuilder<DocumentSnapshot<Object?>>(
        //tangkap argument ID dari Homeview lalu lempar ke edit controller
        future: controller.getDataByID(Get.arguments),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          //ubah data  input field berdasarkan id yang ditangkap oleh snapshot
          var dataById = snapshot.data!.data() as Map<String, dynamic>;
          controller.nameC.text = dataById["name"];
          controller.priceC.text = dataById["price"];
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
                    controller.editProduct(
                      controller.nameC.text,
                      controller.priceC.text,
                      //jangan lupa lempar id yg ada pada arguments sebagai parameter
                      Get.arguments,
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
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomeController extends GetxController {
  final db = FirebaseFirestore.instance;

  //ini untuk one time take menggunakan get() dan juga Future
  Future<QuerySnapshot<Object?>> tampilDataProduk() async {
    return await db.collection("product").get();
  }

  //ini untuk realtime menggunakan stream dan snapshots()
  Stream<QuerySnapshot<Object?>> streamDataProduk() {
    //menampilkan stream data secara descending/asc berdasarkan kolom waktu
    return db
        .collection("product")
        // .where("price", isGreaterThan: 100)
        .orderBy(
          "time",
          descending:
              true, //secara default descending false, ini untuk menampilkan data terbaru
        )
        .snapshots();

    //NOTE:untuk link dokumentasi query lebih lanjut ada disini
    // 1. basic query => https://firebase.google.com/docs/firestore/query-data/queries
    // 2. order and limit => https://firebase.google.com/docs/firestore/query-data/order-limit-data
    // 3. Query with range => https://firebase.google.com/docs/firestore/query-data/multiple-range-fields
  }

  Future<void> deleteProduct(String docId) async {
    Get.defaultDialog(
      title: "Hapus data",
      middleText: "Apakah anda yakin untuk menghapus produk ini?",
      textConfirm: "ya",
      textCancel: "Tidak",
      buttonColor: Colors.red,
      onConfirm: () async {
        try {
          Get.back(); // menutup dialog
          //ini syntax untuk hapus berdasarkan id dengan documnet reference
          await db.collection("product").doc(docId).delete();
          Get.snackbar("Berhasil", "Produk telah berhasil dihapus");
        } catch (e) {
          Get.snackbar("Gagal", "produk tidak dapat dihapus");
        }
      },
    );
  }
}
```

### `lib/app/modules/home/views/home_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:auth_firebase/app/controllers/auth_controller.dart';

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
          IconButton(
            onPressed: () {
              authC.logout();
            },
            icon: Icon(Icons.logout),
          ),
        ],
      ),

      //Ini untuk One Time Get data menggunakan FutureBuilder dari firebase(Read)
      // body: FutureBuilder<QuerySnapshot<Object?>>(
      //   future: controller.tampilDataProduk(),
      //   builder: (context, Snapshot) {
      //     //cek apakah masih loading atau udah done
      //     if (Snapshot.connectionState == ConnectionState.waiting) {
      //       return Center(child: CircularProgressIndicator());
      //     }
      //     //cek apakah databse memiliki data
      //     else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {
      //       return Center(child: Text("Belum ada produk"));
      //     }
      //     //jika semua aman maka tampilkan data nya
      //     else {
      //       var listAllDocs = Snapshot.data!.docs;
      //       return ListView.builder(
      //         itemCount: listAllDocs.length,
      //         itemBuilder: (context, index) => ListTile(
      //           title: Text("${listAllDocs[index]["name"]}"),
      //           subtitle: Text("Rp.${listAllDocs[index]["price"]}"),
      //         ),
      //       );
      //     }
      //   },
      // ),

      //Ini untuk Realtime Get Data menggunakan StreamBuilder dari firebase(Read)
      body: StreamBuilder<QuerySnapshot<Object?>>(
        stream: controller.streamDataProduk(),
        builder: (context, Snapshot) {
          //cek apakah masih loading atau udah done
          if (Snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }
          //cek apakah databse memiliki data
          else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {
            return Center(child: Text("Belum ada produk"));
          }
          //jika semua aman maka tampilkan data nya
          else {
            var listAllDocs = Snapshot.data!.docs;
            return ListView.builder(
              itemCount: listAllDocs.length,
              itemBuilder: (context, index) => ListTile(
                //ini digunakan untk mengambil id berdasarkan apa yang di klik
                onTap: () => Get.toNamed(
                  Routes.EDIT_PRODUCT,
                  arguments: listAllDocs[index].id,
                ),
                title: Text("${listAllDocs[index]["name"]}"),
                subtitle: Text("Rp.${listAllDocs[index]["price"]}"),
                trailing: IconButton(
                  onPressed: () =>
                      //memanggil fungsi pada controller dengan melempar id melalui argument
                      controller.deleteProduct(listAllDocs[index].id),
                  icon: Icon(Icons.delete),
                ),
              ),
            );
          }
        },
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

### `lib/app/modules/login/bindings/login_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<LoginController>(
      () => LoginController(),
    );
  }
}
```

### `lib/app/modules/login/controllers/login_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LoginController extends GetxController {
  final TextEditingController emailC = TextEditingController();
  final TextEditingController passC = TextEditingController();

  @override
  void onClose() {
    emailC.dispose();
    passC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/login/views/login_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:auth_firebase/app/controllers/auth_controller.dart';
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  final authC = Get.find<AuthController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Login Screen',
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
              Text('LOGIN', style: TextStyle(fontSize: 30)),
              SizedBox(height: 30),
              TextField(
                controller: controller.emailC,
                decoration: InputDecoration(
                  label: Text("email"),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 20),
              TextField(
                controller: controller.passC,
                decoration: InputDecoration(
                  label: Text("password"),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 5),
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: () {
                    Get.toNamed(Routes.RESET_PASSWORD);
                  },
                  child: Text("Lupa password?"),
                ),
              ),
              ElevatedButton(
                onPressed: () =>
                    authC.login(controller.emailC.text, controller.passC.text),
                child: Text("Login"),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),

              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Belum punya akun?"),
                  TextButton(
                    onPressed: () {
                      Get.toNamed(Routes.SIGNUP);
                    },
                    child: Text("Daftar sekarang"),
                  ),
                ],
              ),
            ],
          ),
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
    Get.lazyPut<ResetPasswordController>(
      () => ResetPasswordController(),
    );
  }
}
```

### `lib/app/modules/reset_password/controllers/reset_password_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ResetPasswordController extends GetxController {
  final TextEditingController emailC = TextEditingController();

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
import 'package:auth_firebase/app/controllers/auth_controller.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/reset_password_controller.dart';

class ResetPasswordView extends GetView<ResetPasswordController> {
  final authC = Get.find<AuthController>();
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
              Text('Reset password', style: TextStyle(fontSize: 30)),
              SizedBox(height: 30),
              TextField(
                controller: controller.emailC,
                decoration: InputDecoration(
                  label: Text("masukan email terdaftar"),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 20),

              ElevatedButton(
                onPressed: () => authC.ResetPassword(controller.emailC.text),
                child: Text("Reset"),
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
      ),
    );
  }
}
```

### `lib/app/modules/signup/bindings/signup_binding.dart`

Binding: mendaftarkan dependency/controller sebelum halaman dibuka.

```dart
import 'package:get/get.dart';

import '../controllers/signup_controller.dart';

class SignupBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<SignupController>(
      () => SignupController(),
    );
  }
}
```

### `lib/app/modules/signup/controllers/signup_controller.dart`

Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignupController extends GetxController {
  TextEditingController emailC = TextEditingController();
  TextEditingController passC = TextEditingController();

  @override
  void onClose() {
    emailC.dispose();
    passC.dispose();
    super.onClose();
  }
}
```

### `lib/app/modules/signup/views/signup_view.dart`

View: tampilan halaman pada struktur GetX/Get CLI.

```dart
import 'package:auth_firebase/app/controllers/auth_controller.dart';
import 'package:auth_firebase/app/routes/app_pages.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/signup_controller.dart';

class SignupView extends GetView<SignupController> {
  final authC = Get.find<AuthController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sign Up'), centerTitle: true),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Center(
          child: Column(
            children: [
              Text('DAFTAR', style: TextStyle(fontSize: 30)),
              SizedBox(height: 30),

              TextField(
                controller: controller.emailC,
                decoration: InputDecoration(
                  label: Text("email"),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 20),
              TextField(
                controller: controller.passC,
                decoration: InputDecoration(
                  label: Text("password"),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 50),
              ElevatedButton(
                onPressed: () =>
                    authC.signup(controller.emailC.text, controller.passC.text),
                child: Text("Daftar"),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              SizedBox(height: 5),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("sudah punya akun?"),
                  TextButton(
                    onPressed: () {
                      Get.back();
                    },
                    child: Text("Login sekarang"),
                  ),
                ],
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
import '../modules/reset_password/bindings/reset_password_binding.dart';
import '../modules/reset_password/views/reset_password_view.dart';
import '../modules/signup/bindings/signup_binding.dart';
import '../modules/signup/views/signup_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.HOME;

  static final routes = [
    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),
    GetPage(
      name: _Paths.LOGIN,
      page: () => LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.SIGNUP,
      page: () => SignupView(),
      binding: SignupBinding(),
    ),
    GetPage(
      name: _Paths.RESET_PASSWORD,
      page: () => ResetPasswordView(),
      binding: ResetPasswordBinding(),
    ),
    GetPage(
      name: _Paths.ADD_PRODUCT,
      page: () => AddProductView(),
      binding: AddProductBinding(),
    ),
    GetPage(
      name: _Paths.EDIT_PRODUCT,
      page: () => EditProductView(),
      binding: EditProductBinding(),
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
  static const LOGIN = _Paths.LOGIN;
  static const SIGNUP = _Paths.SIGNUP;
  static const RESET_PASSWORD = _Paths.RESET_PASSWORD;
  static const ADD_PRODUCT = _Paths.ADD_PRODUCT;
  static const EDIT_PRODUCT = _Paths.EDIT_PRODUCT;
}

abstract class _Paths {
  _Paths._();
  static const HOME = '/home';
  static const LOGIN = '/login';
  static const SIGNUP = '/signup';
  static const RESET_PASSWORD = '/reset-password';
  static const ADD_PRODUCT = '/add-product';
  static const EDIT_PRODUCT = '/edit-product';
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
