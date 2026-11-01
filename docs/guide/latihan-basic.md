---
title: "Latihan Basic Flutter"
description: "Menguatkan skill widget dan layout lewat banyak soal kecil."
---

# Latihan Basic Flutter

> **Beginner Track** · Modul 05 · Flutter Basic · Beginner

## Target belajar

Menguatkan skill widget dan layout lewat banyak soal kecil.

## Yang akan dipelajari

- Membaca requirement visual sederhana.
- Menggabungkan widget dasar menjadi tampilan.
- Melatih spacing, warna, alignment, dan ukuran.
- Membiasakan struktur file latihan.

## Ringkasan

Folder latihan ini dirancang untuk membentuk 'Muscle Memory' mengetik struktur widget. Dengan menyelesaikan puluhan bentuk layout mini (kotak, lingkaran, deretan teks, kombinasi warna), kamu akan terbiasa menyusun susunan hirarki Flutter tanpa perlu melihat dokumentasi berulang kali.

## Konsep kunci

- Practice repetition
- Layout composition
- Spacing
- Color
- Widget nesting

## Contoh inti

```dart
class Soal1 extends StatelessWidget {
  const Soal1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(width: 100, height: 100, color: Colors.blue),
      ),
    );
  }
}
```

## Penjelasan

- Pola latihan terpisah — Setiap file `soal_*.dart` menangani satu kasus tantangan desain visual.
- Latihan Hirarki Widget — Mengasah kemampuan berpikir dalam bentuk kotak di dalam kotak (Nesting Widgets).
- Pondasi Slicing UI — Menjadi bekal sebelum memotong desain kompleks dari Figma ke dalam kode Flutter.

## Latihan

- Pilih 3 soal lalu ubah warnanya.
- Tambahkan border radius di salah satu soal.
- Gabungkan dua soal ke satu halaman dengan `Column`.

## Jalankan

```bash
flutter pub get
flutter run
```

## Package terkait

- [cupertino_icons](https://pub.dev/packages/cupertino_icons) — `^1.0.8`

## Full source

### `lib/main.dart`

Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai.

```dart
import 'package:flutter/material.dart';
import 'widgets/soal_1.dart';
import 'widgets/soal_2.dart';
import 'widgets/soal_3.dart';
import 'widgets/soal_4.dart';
import 'widgets/soal_5.dart';
import 'widgets/soal_6.dart';
import 'widgets/soal_7.dart';
import 'widgets/soal_8.dart';
import 'widgets/soal_9.dart';
import 'widgets/soal_10.dart';
import 'widgets/soal_11.dart';
import 'widgets/soal_12.dart';
import 'widgets/soal_13.dart';
import 'widgets/soal_14.dart';
import 'widgets/soal_15.dart';
import 'widgets/soal_16.dart';
import 'widgets/soal_17.dart';
import 'widgets/soal_18.dart';
import 'widgets/soal_19.dart';
import 'widgets/soal_20.dart';
import 'widgets/soal_21.dart';
import 'widgets/soal_22.dart';
import 'widgets/soal_23.dart';
import 'widgets/soal_24.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(debugShowCheckedModeBanner: false, home: soal24());
  }
}
```

### `lib/widgets/soal_1.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal1 extends StatelessWidget {
  const soal1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(child: Text('Hello World', style: TextStyle(fontSize: 40))),
    );
  }
}
```

### `lib/widgets/soal_10.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal10 extends StatelessWidget {
  const soal10({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        children: [
          Container(
            margin: EdgeInsets.only(
              bottom: 20,
            ), //pakai margin juga bisa mirip kayak pakai html/css
            width: 100,
            height: 100,
            color: Colors.blue,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          ),
          //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
          Container(
            width: 100,
            height: 100,
            color: Colors.amber,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_11.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal11 extends StatelessWidget {
  const soal11({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            width: 100,
            height: 100,
            color: Colors.blue,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          ),
          //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
          Container(
            width: 100,
            height: 100,
            color: Colors.amber,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_12.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal12 extends StatelessWidget {
  const soal12({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        children: [
          Row(
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20), //ngasih spasi antar kontainer atas dan bawah
          Row(
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_13.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal13 extends StatelessWidget {
  const soal13({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20), //ngasih spasi antar kontainer atas dan bawah
          Row(
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_14.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal14 extends StatelessWidget {
  const soal14({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 20), //ngasih spasi antar kontainer atas dan bawah
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_15.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal15 extends StatelessWidget {
  const soal15({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),

          FlutterLogo(size: 200), //ngasih logo flutter ditengah

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                margin: EdgeInsets.only(
                  right: 20,
                ), //pakai margin juga bisa mirip kayak pakai html/css
                width: 100,
                height: 100,
                color: Colors.blue,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
              //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: Center(
                  child: Text(
                    "Hello",
                    style: TextStyle(fontSize: 20, color: Colors.black),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_16.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal16 extends StatelessWidget {
  const soal16({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Column(
              children: [
                Container(
                  margin: EdgeInsets.only(
                    bottom: 20,
                  ), //pakai margin juga bisa mirip kayak pakai html/css
                  width: 100,
                  height: 100,
                  color: Colors.blue,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ),
                ),
                //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
                Container(
                  margin: EdgeInsets.only(bottom: 20),
                  width: 100,
                  height: 100,
                  color: Colors.amber,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(
                    bottom: 20,
                  ), //pakai margin juga bisa mirip kayak pakai html/css
                  width: 100,
                  height: 100,
                  color: Colors.blue,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ),
                ),
                //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
                Container(
                  margin: EdgeInsets.only(bottom: 20),
                  width: 100,
                  height: 100,
                  color: Colors.amber,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(
                    bottom: 20,
                  ), //pakai margin juga bisa mirip kayak pakai html/css
                  width: 100,
                  height: 100,
                  color: Colors.blue,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ),
                ),
                //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
                Container(
                  margin: EdgeInsets.only(bottom: 20),
                  width: 100,
                  height: 100,
                  color: Colors.amber,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.black),
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(
                    bottom: 20,
                  ), //pakai margin juga bisa mirip kayak pakai html/css
                  width: 100,
                  height: 100,
                  color: Colors.blue,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.white),
                    ),
                  ),
                ),
                //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
                Container(
                  margin: EdgeInsets.only(bottom: 20),
                  width: 100,
                  height: 100,
                  color: Colors.amber,
                  child: Center(
                    child: Text(
                      "Hello",
                      style: TextStyle(fontSize: 20, color: Colors.black),
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

### `lib/widgets/soal_17.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal17 extends StatelessWidget {
  const soal17({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: GridView.builder(
        itemCount: 60,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
          mainAxisSpacing: 20,
          crossAxisSpacing: 20,
        ),
        itemBuilder: (context, index) {
          if (index % 2 == 1) {
            return Container(
              width: 100,
              height: 100,
              color: Colors.amber,
              child: Center(
                child: Text(
                  "Hello",
                  style: TextStyle(fontSize: 20, color: Colors.black),
                ),
              ),
            );
          } else {
            return Container(
              width: 100,
              height: 100,
              color: Colors.blue,
              child: Center(
                child: Text(
                  "Hello",
                  style: TextStyle(fontSize: 20, color: Colors.white),
                ),
              ),
            );
          }
        },
      ),
    );
  }
}
```

### `lib/widgets/soal_18.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal18 extends StatelessWidget {
  const soal18({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: ListView.builder(
        itemCount: 30,
        padding: EdgeInsets.all(20),
        itemBuilder: (context, index) {
          if (index % 2 == 1) {
            return Padding(
              padding: const EdgeInsets.only(bottom: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(height: 100, color: Colors.amber),
                  SizedBox(height: 15),
                  Text(
                    "Hello ${index + 1}",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            );
          } else {
            return Padding(
              padding: const EdgeInsets.only(bottom: 30),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(height: 100, color: Colors.blue),
                  SizedBox(height: 15),
                  Text(
                    "Hello ${index + 1}",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
            );
          }
        },
      ),
    );
  }
}
```

### `lib/widgets/soal_19.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal19 extends StatelessWidget {
  const soal19({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: ListView.builder(
        itemCount: 30,
        padding: EdgeInsets.all(20),
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.only(bottom: 20),
            child: Container(
              padding: EdgeInsets.all(10),
              alignment: Alignment.bottomLeft,
              height: 200,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(25),
                color: Colors.grey[300],
                image: DecorationImage(
                  fit: BoxFit.cover,
                  image: NetworkImage(
                    "https://picsum.photos/id/${555 + index}/200/300",
                  ),
                ),
              ),
              child: Text(
                "Hello ${index + 1}",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
```

### `lib/widgets/soal_2.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal2 extends StatelessWidget {
  const soal2({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Text(
          'Hello World',
          style: TextStyle(
            fontSize: 40,
            fontStyle: FontStyle.italic,
            decoration: TextDecoration.underline,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_20.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal20 extends StatelessWidget {
  const soal20({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Stack(
        children: [
          Container(width: 250, height: 250, color: Colors.red),
          Container(width: 200, height: 200, color: Colors.blue),
          Container(width: 150, height: 150, color: Colors.green),
          Container(width: 100, height: 100, color: Colors.yellow),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_21.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal21 extends StatelessWidget {
  const soal21({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            Container(width: 250, height: 250, color: Colors.red),
            Container(width: 200, height: 200, color: Colors.blue),
            Container(width: 150, height: 150, color: Colors.green),
            Container(width: 100, height: 100, color: Colors.yellow),
          ],
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_22.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal22 extends StatelessWidget {
  const soal22({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Container(
          width: 300,
          height: 300,
          decoration: BoxDecoration(
            color: Colors.grey[400],
            borderRadius: BorderRadius.circular(300),
            border: BoxBorder.all(color: Colors.blue, width: 10),
            image: DecorationImage(
              fit: BoxFit.cover,

              image: NetworkImage("https://picsum.photos/id/500/200/300"),
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_23.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal23 extends StatelessWidget {
  const soal23({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Stack(
              alignment: Alignment.center,
              children: [
                ClipOval(
                  child: Container(height: 265, width: 265, color: Colors.blue),
                ),
                Container(
                  width: 250,
                  height: 250,
                  decoration: BoxDecoration(
                    color: Colors.grey[400],
                    borderRadius: BorderRadius.circular(300),
                    border: BoxBorder.all(color: Colors.white, width: 5),
                    image: DecorationImage(
                      fit: BoxFit.cover,
                      image: NetworkImage(
                        "https://picsum.photos/id/500/200/300",
                      ),
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 40),
            Text(
              "Hello world",
              style: TextStyle(
                fontSize: 50,
                fontStyle: FontStyle.italic,
                fontWeight: FontWeight.bold,
                decoration: TextDecoration.underline,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_24.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal24 extends StatelessWidget {
  const soal24({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Column(
        children: [
          Container(
            height: 125,
            padding: EdgeInsets.only(left: 10),
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: 10,
              itemBuilder: (context, index) {
                if (index % 2 == 1) {
                  return Container(
                    width: 100,
                    height: 100,
                    color: Colors.amber,
                    margin: EdgeInsets.all(10),
                  );
                } else {
                  return Container(
                    width: 100,
                    height: 100,
                    color: Colors.blue[800],
                    margin: EdgeInsets.all(10),
                  );
                }
              },
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: 10,
              padding: EdgeInsets.all(20),
              itemBuilder: (context, index) {
                if (index % 2 == 1) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(height: 150, color: Colors.amber),
                        SizedBox(height: 15),
                        Text(
                          "Hello ${index + 1}",
                          style: TextStyle(fontSize: 25),
                        ),
                      ],
                    ),
                  );
                } else {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 30),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(height: 150, color: Colors.blue[800]),
                        SizedBox(height: 15),
                        Text(
                          "Hello ${index + 1}",
                          style: TextStyle(fontSize: 25),
                        ),
                      ],
                    ),
                  );
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_3.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal3 extends StatelessWidget {
  const soal3({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(child: FlutterLogo(size: 200.0)),
    );
  }
}
```

### `lib/widgets/soal_4.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'dart:math';

import 'package:flutter/material.dart';

class soal4 extends StatelessWidget {
  const soal4({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Transform.rotate(
          //pi = 180 derajat
          angle: pi / (180 / 90),
          child: FlutterLogo(size: 200.0),
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_5.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal5 extends StatelessWidget {
  const soal5({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Container(
          width: 300,
          height: 300,
          color: Colors.blue[500],
          child: Center(
            child: Text(
              "Hello",
              style: TextStyle(color: Colors.white, fontSize: 30),
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_6.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal6 extends StatelessWidget {
  const soal6({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Center(
        child: Container(
          width: 300,
          height: 300,
          decoration: BoxDecoration(
            color: Colors
                .blue[500], //untuk kasus BoxDecoration warna harus masuk ke Widget box decoration
            // borderRadius: BorderRadius.only(
            //   topRight: Radius.circular(50),
            //   bottomLeft: Radius.circular(50),
            // ), //ini untuk seleksi bagian sudut mana yg ingin rounded
            borderRadius: BorderRadius.circular(
              150,
            ), //ini untuk membulatkan, hanya di bagi 2 dari nilai width & height
          ),

          child: Center(
            child: Text(
              "Hello",
              style: TextStyle(color: Colors.white, fontSize: 30),
            ),
          ),
        ),
      ),
    );
  }
}
```

### `lib/widgets/soal_7.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal7 extends StatelessWidget {
  const soal7({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Row(
        children: [
          Container(
            margin: EdgeInsets.only(
              right: 20,
            ), //pakai margin juga bisa mirip kayak pakai html/css
            width: 100,
            height: 100,
            color: Colors.blue,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          ),
          //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
          Container(
            width: 100,
            height: 100,
            color: Colors.amber,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_8.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal8 extends StatelessWidget {
  const soal8({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween, //untuk misahin nya
        children: [
          Container(
            width: 100,
            height: 100,
            color: Colors.blue,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          ),
          Container(
            width: 100,
            height: 100,
            color: Colors.amber,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `lib/widgets/soal_9.dart`

Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang.

```dart
import 'package:flutter/material.dart';

class soal9 extends StatelessWidget {
  const soal9({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Latihan"), //untuk di tengah appbar
        leading: FlutterLogo(), //untuk di sebelah kiri appbar
        backgroundColor: Colors.grey[400],
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
        ], //untuk di sebelah kanan appbar
      ),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Container(
            margin: EdgeInsets.only(
              right: 20,
            ), //pakai margin juga bisa mirip kayak pakai html/css
            width: 100,
            height: 100,
            color: Colors.blue,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
            ),
          ),
          //SizedBox(width: 20), //bisa pakai SizedBox untuk ngakali biar nampak ada spasi
          Container(
            width: 100,
            height: 100,
            color: Colors.amber,
            child: Center(
              child: Text(
                "Hello",
                style: TextStyle(fontSize: 20, color: Colors.black),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### `pubspec.yaml`

Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator.

```yaml
name: latihan_basic_1
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
