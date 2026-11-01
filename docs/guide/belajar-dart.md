---
title: "Belajar Dart Fundamental"
description: "Membangun fondasi kuat bahasa pemrograman Dart sebelum masuk ke pengembangan aplikasi Flutter."
---

# Belajar Dart Fundamental

> **Beginner Track** · Modul 00 · Dart Core · Beginner

## Target belajar

Membangun fondasi kuat bahasa pemrograman Dart sebelum masuk ke pengembangan aplikasi Flutter.

## Yang akan dipelajari

- Memahami deklarasi variabel (`var`, `final`, `const`) dan tipe data dasar (`String`, `int`, `double`, `num`, `bool`, `List`, `Map`).
- Membuat fungsi (Functions) baik `void`, fungsi ber-return type, hingga penggunaan *Named Parameters* (`{required ...}`).
- Menguasai alur kontrol perulangan (`for`, `for-in`, `while`) dan percabangan (`if-else`, `switch-case`).
- Memahami *Sound Null Safety* (operator `?`, `??`, `!`) untuk mencegah kesalahan NullPointer secara dini.
- Menguasai Object-Oriented Programming (OOP): membuat Class, Objek, Properti, dan Named Constructor.
- Memahami pemrograman Asinkron (`Future`, `async`, `await`) untuk persiapan mengambil data API di Flutter.
- Menggunakan manipulasi koleksi data modern seperti `.map()`, `.where()`, dan Operator Spread (`...`).

## Ringkasan

Dart adalah bahasa pemrograman modern berikatan kuat (strongly typed language) buatan Google yang digunakan sebagai mesin penggerak utama Flutter. Di modul fondasi ini, kamu tidak hanya belajar sintaksis dasar, tetapi dibimbing untuk memahami cara berpikir sistematis: bagaimana data disimpan, bagaimana fungsi beraksi, bagaimana mencegah crash akibat data kosong (`null`), serta bagaimana pemrograman Objek (OOP) dan Asinkron (`async`/`await`) menjadi tulang punggung pembuatan aplikasi Flutter berkualitas.

## Konsep kunci

- Variable & Type Inference
- String Interpolation
- List & Map Data Structure
- Function & Named Parameters
- Control Flow & Loops
- Sound Null Safety (?, ??, !)
- OOP Class & Named Constructor
- Async, Await & Future
- Collection Methods (map, where)

## Contoh inti

```dart
class Pakaian {
  String jenis;
  String warna;

  // Named Constructor dengan parameter wajib
  Pakaian({required this.jenis, required this.warna});

  void info() => print("Pakaian: $jenis ($warna)");
}

Future<void> main() async {
  final pakaian1 = Pakaian(jenis: "Baju Kaos", warna: "Hitam");
  pakaian1.info();

  // Contoh Async & Future sederahana
  await Future.delayed(Duration(seconds: 1));
  print("Dart Fundamental Siap!");
}
```

## Penjelasan

- `class Pakaian` — Struktur cetak biru (blueprint) Objek dalam Dart.
- `Pakaian({required this.jenis, required this.warna})` — Direct Named Constructor untuk memastikan pembuatan objek lebih jelas dan aman dari data kosong.
- `final` — Kata kunci untuk membuat variabel yang nilainya hanya bisa diisi satu kali saat runtime.
- `Future<void> main() async` — Menandai fungsi `main` berjalan secara asinkron.
- `await Future.delayed(...)` — Menghentikan eksekusi sejenak (1 detik) di latar belakang tanpa memblokir sistem.

## Latihan

- Buka file `01_variable_list.dart` hingga `03_function.dart`, coba jalankan dengan perintah `dart <nama_file>` di terminal.
- Buat class `Mahasiswa` dengan properti `nama`, `nim`, dan `ipk` menggunakan Named Constructor `required`.
- Buat fungsi asinkron `Future<String> fetchUser()` yang mengembalikan nama user setelah menunggu 2 detik.
- Gunakan fungsi `.where()` untuk menyaring daftar angka genap dari sebuah List.

## Jalankan

```bash
dart 01_variable_list.dart
```

## Full source

### `01_variable_list.dart`

Variabel & Interpolasi String: cara deklarasi variabel dan akses elemen List dasar di Dart.

```dart
void main() {
  var nama = "Nabil";

  // Tipe Data List (bisa berisi berbagai tipe data jika di-deklarasi dengan var)
  var umur = [20, 21, 22, 23, 24];
  var kelompok = ["Nabil", "Dimas", "Rizky", "Fajar", "Rizal"];
  var campuran = ["Nabil", 23, 2.3];

  // String Interpolation (menggabungkan teks dengan variabel)
  print("Halo nama saya $nama");

  // Menampilkan data elemen spesifik pada List berdasarkan index (mulai dari 0)
  print("Umur saya ${umur[3]}");
}
```

### `02_tipe_data.dart`

Tipe Data Dart: String, int, double, num, bool, List, Map, serta fungsi manipulasi String.

```dart
// ============== TIPE DATA UTAMA DART ============

void main() {
  String nama = 'Nabil';
  int angka = 3;
  num number = 3.3; // Num bisa berisi bilangan bulat (int) maupun desimal (double)
  bool benar = true;
  double pecahan = 0.5;

  // List (Daftar item berurutan)
  List anggota = ['Nabil', 'Kluivert', 'Jojo'];

  // Map (Pasangan Key - Value)
  Map kendaraan = {'merk': 'Toyota', 'tipe': 'Avanza', 'tahun': 2003};

  // Manipulasi String bawaan Dart
  print(nama.toLowerCase()); // Mengubah ke huruf kecil
  print(nama.toUpperCase()); // Mengubah ke huruf kapital
  print(nama.substring(0, 3)); // Memotong String (index start, index end)

  print(anggota[2]); // Membaca elemen List index ke-2
  print(kendaraan['merk']); // Membaca nilai dari Map menggunakan Key
}
```

### `03_function.dart`

Fungsi (Functions): cara membuat void function, return value, dan named parameters di Dart.

```dart
// Function tanpa nilai kembalian (void)
void sapaUser(String nama) {
  print("Selamat datang, $nama!");
}

// Function dengan nilai kembalian (return int)
int tambah(int a, int b) {
  return a + b;
}

// Function dengan Named Parameters ({ })
void cetakProfil({required String nama, int umur = 17}) {
  print("Profil: $nama, Umur: $umur tahun");
}

void main() {
  sapaUser("Nabil");
  int hasil = tambah(10, 5);
  print("Hasil penjumlahan: $hasil");

  // Memanggil function dengan named parameters
  cetakProfil(nama: "Naufal Nabil", umur: 20);
}
```

### `04_looping.dart`

Perulangan (Looping): penggunaan for loop, for-in, while, dan do-while di Dart.

```dart
void main() {
  // 1. Standar For Loop
  print("--- Standar For Loop ---");
  for (var i = 1; i <= 3; i++) {
    print("Iterasi ke-$i");
  }

  // 2. For-In Loop (Sangat sering dipakai untuk List)
  print("\n--- For-In Loop ---");
  var handphone = ["Xiaomi", "Samsung", "iPhone"];
  for (var hp in handphone) {
    print("Handphone: $hp");
  }

  // 3. While Loop
  print("\n--- While Loop ---");
  int b = 1;
  while (b <= 2) {
    print("While ke-$b");
    b++;
  }
}
```

### `05_conditional.dart`

Pengkondisian (Control Flow): percabangan logika if-else dan switch-case di Dart.

```dart
void main() {
  String nilai = "A";

  // 1. Percabangan If - Else If - Else
  if (nilai == "A") {
    print("Sangat Memuaskan!");
  } else if (nilai == "B") {
    print("Bagus!");
  } else {
    print("Tetap Semangat!");
  }

  // 2. Switch Case
  String peranan = "admin";
  switch (peranan) {
    case "admin":
      print("Akses penuh sistem dasar.");
      break;
    case "user":
      print("Akses halaman pengguna.");
      break;
    default:
      print("Akses tamu.");
  }
}
```

### `06_null_safety.dart`

Null Safety: memahami operator ?, ??, dan ! untuk mencegah NullPointerException di Dart.

```dart
void main() {
  // 1. Tanda ? menandakan variabel BISA bernilai null
  String? namaPengguna;

  // 2. Safe Navigation Operator (?.)
  // Mencegah crash saat mengakses properti dari variabel null
  print("Panjang nama: ${namaPengguna?.length}");

  // 3. Null-Coalescing Operator (??)
  // Memberikan nilai default jika variabel bernilai null
  String namaTampil = namaPengguna ?? "Tamu / Anonim";
  print("Halo, $namaTampil!");

  // 4. Bang Operator (!)
  // Memaksa Dart menganggap variabel pasti TIDAK null (hati-hati bisa crash jika null!)
  namaPengguna = "Nabil";
  print("Nama pasti: ${namaPengguna!.toUpperCase()}");
}
```

### `07_class_object.dart`

Object-Oriented Programming (OOP): membuat Class, Atribut, dan Named Constructor di Dart.

```dart
class Pakaian {
  // Atribut/Properti
  String jenis;
  String warna;

  // Named Constructor dengan required parameters
  Pakaian({required this.jenis, required this.warna});

  // Method/Fungsi di dalam Class
  void tampilkanInfo() {
    print("Pakaian: $jenis - Warna: $warna");
  }
}

void main() {
  // Inisialisasi Objek dari Class Pakaian
  var pakaian1 = Pakaian(jenis: "Baju Kaos", warna: "Hitam");
  var pakaian2 = Pakaian(jenis: "Celana Chino", warna: "Krem");

  // Memanggil method objek
  pakaian1.tampilkanInfo();
  pakaian2.tampilkanInfo();
}
```

### `08_async_future.dart`

Asynchronous & Future: memproses tugas di latar belakang dengan async, await, dan Future.delayed.

```dart
// Fungsi Asinkron yang mensimulasikan unduh data API selama 2 detik
Future<String> ambilDataAPI() async {
  print("1. Mengunduh data dari server...");
  
  await Future.delayed(const Duration(seconds: 2)); // Menunggu 2 detik
  
  return "2. Data berhasil diterima dari API!";
}

void main() async {
  print("--- Awal Program ---");
  
  // Memanggil fungsi async dengan await
  String hasil = await ambilDataAPI();
  print(hasil);
  
  print("--- Selesai Program ---");
}
```

### `09_collection_methods.dart`

Manipulasi List & Map: menggunakan map(), where(), forEach(), dan operator spread (...).

```dart
void main() {
  List<int> angka = [1, 2, 3, 4, 5, 6];

  // 1. .where() -> Menyaring item yang memenuhi kondisi (filtering)
  var angkaGenap = angka.where((n) => n % 2 == 0).toList();
  print("Angka Genap: $angkaGenap");

  // 2. .map() -> Mengubah setiap item menjadi bentuk baru (transformation)
  var angkaKuadrat = angka.map((n) => n * n).toList();
  print("Angka Kuadrat: $angkaKuadrat");

  // 3. Operator Spread (...) -> Menggabungkan List
  List<String> buahAwal = ["Apel", "Pisang"];
  List<String> semuaBuah = [...buahAwal, "Jeruk", "Mangga"];
  print("Daftar Buah: $semuaBuah");
}
```
