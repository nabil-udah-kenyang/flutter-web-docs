---
title: "GetStorage"
description: "Menyimpan data kecil di local storage."
---

# GetStorage

> **Beginner Track** · Modul 42 · GetX Storage · Beginner

## Target belajar

Menyimpan data kecil di local storage.

## Yang akan dipelajari

- Inisialisasi `GetStorage` sebelum app berjalan.
- Menyimpan data dengan `write`.
- Membaca data dengan `read`.
- Menghapus data dengan `remove`.

## Ringkasan

`GetStorage` adalah pustaka penyimpanan lokal (Local Key-Value Storage) super cepat dan efisien. Sangat ideal untuk menyimpan data kecil seperti status 'Ingat Saya' (Remember Me), token autentikasi, status Dark Mode, atau pengaturan preferensi pengguna.

::: danger Jangan simpan password mentah
Contoh source lama menyimpan email dan password untuk demonstrasi alur "Remember me". Jangan gunakan pola itu pada aplikasi nyata. Simpan hanya preferensi yang tidak sensitif; autentikasi sebaiknya memakai token berumur pendek dan penyimpanan aman yang sesuai platform, bukan `GetStorage` biasa.
:::

## Konsep kunci

- GetStorage.init
- write
- read
- remove
- Remember login
- Local cache

## Contoh inti

```dart
void main() async {
  await GetStorage.init();
  runApp(const MyApp());
}

final box = GetStorage();

box.write("dataRemember", {
  "email": emailC.text,
  "password": passwordC.text,
});

box.remove("dataRemember");
```

## Penjelasan

- `await GetStorage.init()` — Proses inisialisasi awal driver memori lokal sebelum `runApp` dipanggil.
- `box.write('key', data)` — Menyimpan data ke memori HP berbasis pasangan Key-Value.
- `box.read('key')` — Membaca data tersimpan berdasarkan nama Key-nya.
- `box.remove('key')` — Menghapus data spesifik saat logout atau reset.

## Latihan

- Simpan status dark mode.
- Baca data remember saat halaman login dibuka.
- Hapus data saat logout.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`
- [get_storage](https://pub.dev/packages/get_storage) — `^2.1.1`

## Full source

### `lib/controller/login.dart`

Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:getstorage/pages/home.dart';
import '../pages/login.dart';

class LoginControlller extends GetxController {
  RxBool isHidden = true.obs;
  RxBool isRemember = false.obs;

  TextEditingController emailC = TextEditingController();
  TextEditingController passwordC = TextEditingController();

  void buttonLogin() async {
    //Simpan data email dan password di lokal memori hp
    final box = GetStorage();

    if (emailC.text == "admin@gmail.com" && passwordC.text == "123") {
      if (box.read("dataRemember") != null) {
        box.remove("dataRemember");
      }
      if (isRemember.isTrue) {
        box.write("dataRemember", {
          "email": emailC.text,
          "password": passwordC.text,
        });
      }
      Get.offAll(Home());
    } else {
      Get.snackbar("Maaf Terjadi kesalahan", "email atau password salah");
    }
  }

  void logout() {
    Get.offAll(LoginPage());
  }
}
```

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:getstorage/pages/login.dart';

void main() async {
  await GetStorage.init();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(debugShowCheckedModeBanner: false, home: LoginPage());
  }
}

//NOTE : Get.storage digunakan untuk menyimpan suatu data kedalam memori lokal handphone user
//(hanya disarankan untuk data kecil seperti data cache email / pw login,ataupun tema "gelap/terang")
```

### `lib/pages/home.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controller/login.dart';

class Home extends StatelessWidget {
  final LoginControlller loginC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Home", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => loginC.logout(),
        child: Icon(Icons.logout),
      ),
    );
  }
}
```

### `lib/pages/login.dart`

Page: tampilan layar utama atau subhalaman pada modul ini.

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controller/login.dart';
import 'package:get_storage/get_storage.dart';

class LoginPage extends StatelessWidget {
  final box = GetStorage();
  final LoginControlller loginC = Get.put(LoginControlller());

  @override
  Widget build(BuildContext context) {
    if (box.read("dataRemember") != null) {
      loginC.isRemember.value = true;
      loginC.emailC.text = box.read("dataRemember")["email"];
      loginC.passwordC.text = box.read("dataRemember")["password"];
    }
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Page"),
        leading: Icon(Icons.login),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.only(top: 70, left: 20, right: 20),
        child: Column(
          children: [
            Column(
              children: [
                TextField(
                  textInputAction: TextInputAction.next,
                  controller: loginC.emailC,
                  keyboardType: TextInputType.text,
                  decoration: InputDecoration(
                    label: Text("email"),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
                SizedBox(height: 30),
                Obx(
                  () => TextField(
                    controller: loginC.passwordC,
                    //biar input jadi bulat (input type = passs)
                    obscureText: loginC.isHidden.value,
                    keyboardType: TextInputType.text,
                    decoration: InputDecoration(
                      suffixIcon: IconButton(
                        onPressed: () => loginC.isHidden.toggle(),
                        icon: Icon(Icons.remove_red_eye),
                      ),
                      label: Text("password"),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                Obx(
                  () => CheckboxListTile(
                    controlAffinity: ListTileControlAffinity.leading,
                    value: loginC.isRemember.value,
                    onChanged: (value) {
                      loginC.isRemember.toggle();
                    },
                    title: Text("Remember me"),
                  ),
                ),

                SizedBox(height: 50),
                ElevatedButton(
                  onPressed: () {
                    loginC.buttonLogin();
                  },
                  child: Text("Login"),
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
name: getstorage
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
  get_storage: ^2.1.1

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
