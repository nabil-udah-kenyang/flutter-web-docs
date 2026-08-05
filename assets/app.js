const modules = [
  {
    id: "00",
    slug: "belajar-dart",
    title: "Belajar Dart Fundamental",
    track: "Dart Core",
    folder: "00_belajar_dart",
    level: "Beginner",
    goal: "Membangun pondasi bahasa Dart sebelum masuk ke Flutter.",
    files: ["section1.dart", "section2.dart", "section3.dart", "section4.dart", "section5.dart", "nullable.dart", "class.dart"],
    learn: [
      "Membedakan tipe data dasar seperti String, int, double, bool, List, dan Map.",
      "Menggunakan function untuk memecah logic sederhana.",
      "Memahami loop, conditional, null safety, class, object, dan constructor.",
      "Membaca error null safety yang sering muncul saat mulai belajar Dart."
    ],
    detail: "Dart adalah bahasa yang dipakai Flutter. Di modul ini, fokusnya bukan membuat tampilan, melainkan membiasakan cara berpikir typed language: setiap data punya bentuk, nilai bisa null atau tidak, dan object dibuat dari class. Kalau bagian ini kuat, model API, controller, dan state di modul berikutnya akan jauh lebih mudah dipahami.",
    concept: ["Variable dan tipe data", "String interpolation", "List dan Map", "Function", "Loop dan conditional", "Null safety", "Class dan constructor"],
    snippet: `class Pakaian {
  String? jenis;
  String? warna;

  Pakaian({this.jenis, this.warna});
}

void main() {
  final pakaian = Pakaian(jenis: "baju", warna: "merah");
  print("Ini adalah \${pakaian.jenis} berwarna \${pakaian.warna}");
}`,
    explanation: [
      "`String?` berarti property boleh kosong/null.",
      "`Pakaian({this.jenis, this.warna})` adalah named constructor agar object lebih jelas saat dibuat.",
      "`final` dipakai karena variable `pakaian` tidak perlu diganti ke object lain."
    ],
    exercise: ["Buat class `Mahasiswa` dengan property `nama`, `umur`, dan `jurusan`.", "Tambahkan function yang mencetak kalimat profil.", "Ubah salah satu property menjadi nullable lalu coba handle dengan `??`."],
    run: "dart class.dart"
  },
  {
    id: "00A",
    slug: "introduction-flutter-basic-syntax",
    title: "Introduction Flutter: Basic Syntax",
    track: "Flutter Basic",
    folder: "00_introduction_flutter",
    level: "Beginner",
    goal: "Membaca kode Flutter paling dasar dengan lebih santai sebelum mulai membuat widget sederhana.",
    files: ["intro/basic_syntax.dart", "intro/widget_tree.dart"],
    learn: [
      "Memahami bahwa Flutter membuat tampilan dari susunan widget, bukan dari HTML dan CSS.",
      "Mengenal alur `main`, `runApp`, `MaterialApp`, `Scaffold`, `AppBar`, `body`, dan `child`.",
      "Membaca tanda syntax penting seperti kurung `()`, kurung kurawal `{}`, titik koma `;`, koma `,`, dan named parameter.",
      "Membedakan class, object, constructor, method `build`, property, dan callback function.",
      "Memahami fungsi `BuildContext`, `StatelessWidget`, `StatefulWidget`, `setState`, dan `const` secara beginner-friendly.",
      "Melihat cara komentar, import package, nesting widget, dan format kode yang rapi."
    ],
    detail: "Sebelum masuk ke folder widget sederhana, bagian ini adalah peta awal supaya orang awam tidak langsung kaget melihat banyak kurung dan nama widget. Flutter memakai bahasa Dart, jadi bentuk kodenya mirip menyusun object: ada nama widget, lalu di dalamnya ada property seperti `home`, `appBar`, `body`, `child`, atau `children`. Cara bacanya bisa dari luar ke dalam: aplikasi dimulai dari `main`, lalu `runApp` menjalankan widget utama, kemudian `MaterialApp` menyiapkan gaya aplikasi, `Scaffold` membuat kerangka halaman, dan isi layar ditempatkan di `body`. Kalau sudah paham pola ini, materi widget sederhana akan terasa jauh lebih masuk akal karena kamu tidak cuma menyalin kode, tapi tahu tiap bagian sedang bekerja untuk apa.",
    concept: ["main function", "runApp", "Widget tree", "Named parameter", "child dan children", "Build method", "BuildContext", "const", "Callback", "setState"],
    snippet: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Belajar Flutter'),
          backgroundColor: Colors.green,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Halo, pemula Flutter!',
                style: TextStyle(fontSize: 22),
              ),
              const SizedBox(height: 12),
              ElevatedButton(
                onPressed: () {
                  print('Tombol ditekan');
                },
                child: const Text('Klik aku'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`,
    explanation: [
      "`import 'package:flutter/material.dart';` mengambil library Material Design. Tanpa import ini, widget seperti `MaterialApp`, `Scaffold`, `Text`, `Column`, dan `ElevatedButton` tidak dikenali.",
      "`void main()` adalah function pertama yang dijalankan saat aplikasi dibuka. Hampir semua project Dart dan Flutter punya titik mulai bernama `main`.",
      "`runApp(const MyApp())` memberi tahu Flutter widget apa yang menjadi akar aplikasi. Bayangkan ini seperti menaruh halaman pertama ke layar.",
      "`class MyApp extends StatelessWidget` berarti kita membuat widget sendiri bernama `MyApp`. `StatelessWidget` cocok untuk tampilan yang tidak menyimpan perubahan data lokal.",
      "`const MyApp({super.key});` adalah constructor. Untuk pemula, cukup pahami bahwa constructor adalah pintu untuk membuat object/widget. `super.key` membantu Flutter mengenali widget saat rebuild.",
      "`@override` artinya method di bawahnya mengganti method bawaan dari parent class. Di Flutter, method `build` wajib ada pada widget karena dari sinilah tampilan dikembalikan.",
      "`Widget build(BuildContext context)` adalah function yang menghasilkan tampilan. `BuildContext` membawa informasi posisi widget di widget tree, misalnya untuk theme, navigation, dialog, snackbar, dan ukuran layar.",
      "`return MaterialApp(...)` berarti hasil dari `build` adalah widget `MaterialApp`. Di dalam tanda kurung, kita mengisi property menggunakan named parameter seperti `home:`, `title:`, `body:`, dan `child:`.",
      "`MaterialApp` adalah pembungkus aplikasi Material. Biasanya dipakai untuk konfigurasi global seperti theme, route, title, dan banner debug.",
      "`Scaffold` adalah kerangka halaman. Di sinilah kita biasa memasang `appBar`, `body`, `drawer`, `floatingActionButton`, dan `bottomNavigationBar`.",
      "`AppBar` adalah bagian header atas aplikasi. `title` menerima widget, jadi kita isi dengan `Text('Belajar Flutter')`.",
      "`body` adalah area utama layar. Pada contoh ini, `body` diisi `Center`, lalu `Center` punya satu `child`, yaitu `Column`.",
      "`child` dipakai kalau widget hanya menerima satu anak. Contohnya `Center(child: ...)`, `Container(child: ...)`, dan `Padding(child: ...)`.",
      "`children` dipakai kalau widget menerima banyak anak dalam bentuk list. Contohnya `Column(children: [...])`, `Row(children: [...])`, dan `Stack(children: [...])`.",
      "`Column` menyusun widget dari atas ke bawah. Kalau ingin menyamping, biasanya memakai `Row`.",
      "`mainAxisAlignment: MainAxisAlignment.center` mengatur posisi anak-anak `Column` pada sumbu utama. Karena `Column` arahnya vertikal, berarti ini menaruh isi ke tengah secara vertikal.",
      "`Text` menampilkan tulisan. Styling tulisan diatur lewat `TextStyle`, misalnya `fontSize`, `fontWeight`, `color`, dan `fontStyle`.",
      "`SizedBox(height: 12)` sering dipakai untuk memberi jarak kosong. Ini lebih rapi daripada memberi margin asal-asalan di banyak tempat.",
      "`ElevatedButton` adalah tombol. Property `child` menentukan isi tombol, sedangkan `onPressed` menentukan aksi saat tombol ditekan.",
      "`onPressed: () { ... }` adalah callback function. Artinya function kecil ini tidak langsung jalan saat halaman dibuat, tapi disimpan dulu dan baru dijalankan ketika user menekan tombol.",
      "`print('Tombol ditekan')` mencetak teks ke debug console. Untuk latihan awal, ini berguna untuk membuktikan bahwa sebuah function benar-benar terpanggil.",
      "`const` dipakai untuk widget atau nilai yang tidak berubah. Memakai `const` membantu Flutter bekerja lebih efisien dan membuat niat kode lebih jelas.",
      "Titik koma `;` menutup statement. Koma `,` memisahkan parameter atau item list. Kurung `()` dipakai untuk memanggil function/constructor. Kurung `{}` dipakai untuk body function/class. Kurung `[]` dipakai untuk list seperti `children`.",
      "Indentasi atau jarak menjorok tidak mengubah logic, tapi sangat membantu membaca widget tree. Setiap widget yang masuk ke dalam widget lain sebaiknya dibuat lebih menjorok."
    ],
    exercise: [
      "Baca snippet dari `main` sampai `Text('Klik aku')`, lalu tulis ulang dengan komentar fungsi tiap bagian.",
      "Ganti text, warna AppBar, dan ukuran font supaya terasa bahwa property mengubah tampilan.",
      "Tambahkan satu `Text` lagi di dalam `children` dan beri jarak dengan `SizedBox`.",
      "Ubah `Column` menjadi `Row`, lalu amati kenapa susunan widget berubah dari vertikal ke horizontal.",
      "Buat tombol kedua dengan `onPressed` yang mencetak pesan berbeda.",
      "Hapus satu koma atau titik koma dengan sengaja, baca error-nya, lalu kembalikan lagi agar terbiasa memahami pesan error."
    ],
    run: "flutter create intro_flutter\ncd intro_flutter\nflutter run"
  },
  {
    id: "01",
    slug: "widget-sederhana",
    title: "Widget Sederhana",
    track: "Flutter Basic",
    folder: "01_widget_sederhana",
    level: "Beginner",
    goal: "Mengenal struktur aplikasi Flutter paling dasar.",
    files: ["lib/main.dart"],
    learn: [
      "Memahami `runApp` sebagai pintu masuk aplikasi Flutter.",
      "Mengenal `MaterialApp`, `Scaffold`, `AppBar`, `Container`, dan `ElevatedButton`.",
      "Menjalankan aksi sederhana lewat `onPressed`.",
      "Melihat hubungan antara widget parent dan child."
    ],
    detail: "Modul pertama Flutter ini memperlihatkan bahwa tampilan Flutter dibangun dari susunan widget. Kamu mulai dari halaman sederhana, lalu memberi struktur dengan Scaffold dan AppBar. Tombol menjadi contoh interaksi paling kecil yang akan sering muncul di semua app.",
    concept: ["Widget tree", "MaterialApp", "Scaffold", "AppBar", "Body", "Button action"],
    snippet: `void main() {
  runApp(HomePage());
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text("Home")),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              log("terimakasih udah di klik");
            },
            child: Text("Klik aku"),
          ),
        ),
      ),
    );
  }
}`,
    explanation: [
      "`runApp` menjalankan widget utama aplikasi.",
      "`MaterialApp` menyediakan konfigurasi global Material Design.",
      "`Scaffold` memberi struktur halaman seperti app bar dan body.",
      "`onPressed` adalah callback yang berjalan ketika tombol ditekan."
    ],
    exercise: ["Ganti warna `AppBar` dan `backgroundColor`.", "Tambahkan dua tombol dengan aksi berbeda.", "Coba ganti `Center` dengan `Column`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "02",
    slug: "widget-layout",
    title: "Widget Layout",
    track: "Flutter Basic",
    folder: "02_widget_layout",
    level: "Beginner",
    goal: "Belajar menyusun widget di layar dengan layout dasar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `Column` untuk menyusun widget vertikal.",
      "Menggunakan `Row` untuk menyusun widget horizontal.",
      "Mengatur posisi dengan `mainAxisAlignment` dan `crossAxisAlignment`.",
      "Memahami ukuran dan warna lewat `Container`."
    ],
    detail: "Layout adalah skill inti Flutter. Hampir semua tampilan nyata berasal dari kombinasi Row, Column, Container, Padding, Expanded, dan Align. Modul ini melatih mata untuk memahami arah sumbu utama dan sumbu silang.",
    concept: ["Column", "Row", "Container", "Alignment", "Spacing", "Padding"],
    snippet: `Scaffold(
  appBar: AppBar(title: const Text("Widget Layout")),
  body: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Container(width: 100, height: 100, color: Colors.red),
      Container(width: 100, height: 100, color: Colors.green),
    ],
  ),
);`,
    explanation: [
      "`Column` menyusun child dari atas ke bawah.",
      "`mainAxisAlignment.center` menaruh child di tengah sumbu utama.",
      "`Container` sering dipakai untuk latihan ukuran, warna, margin, dan padding."
    ],
    exercise: ["Ubah `Column` menjadi `Row`.", "Tambahkan `SizedBox` sebagai jarak antar kotak.", "Bungkus kotak dengan `Padding`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "03",
    slug: "extract-widget",
    title: "Extract Widget",
    track: "Flutter Basic",
    folder: "03_extract_widget",
    level: "Beginner",
    goal: "Memecah UI menjadi widget kecil agar kode lebih rapi.",
    files: ["lib/main.dart", "lib/widgets/kotakwarna.dart"],
    learn: [
      "Mengenal custom widget.",
      "Memindahkan potongan UI ke file terpisah.",
      "Mengirim data ke widget lewat constructor.",
      "Membuat komponen reusable."
    ],
    detail: "Semakin panjang UI, `main.dart` akan cepat penuh. Extract widget membuat setiap bagian punya tanggung jawab sendiri. Ini kebiasaan penting sebelum masuk ke project besar, slicing UI, dan arsitektur Get CLI.",
    concept: ["Custom widget", "Constructor", "Required parameter", "Reusable component"],
    snippet: `class KotakWarna extends StatelessWidget {
  final Color warna;

  const KotakWarna({super.key, required this.warna});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height: 100,
      color: warna,
    );
  }
}`,
    explanation: [
      "`final Color warna` adalah data yang dikirim dari parent.",
      "`required` memastikan parent wajib mengirim warna.",
      "Widget ini bisa dipakai berkali-kali dengan warna berbeda."
    ],
    exercise: ["Tambahkan parameter `tinggi` dan `lebar`.", "Tambahkan parameter `child` untuk isi kotak.", "Buat widget baru bernama `JudulSection`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "04",
    slug: "widget-builder",
    title: "Widget Builder",
    track: "Flutter Basic",
    folder: "04_widget_builder",
    level: "Beginner",
    goal: "Membuat widget berulang dengan builder.",
    files: ["lib/main.dart", "lib/widgets/kotakwarna.dart"],
    learn: [
      "Menggunakan `ListView.builder` untuk list dinamis.",
      "Memakai `index` untuk mengambil data.",
      "Menghindari penulisan widget berulang secara manual.",
      "Menyiapkan pola untuk list API."
    ],
    detail: "Builder adalah pola penting untuk membuat item berdasarkan jumlah data. Di app nyata, data bisa datang dari array, database, atau API. Flutter hanya membangun item yang diperlukan sehingga lebih efisien untuk list panjang.",
    concept: ["ListView.builder", "itemCount", "itemBuilder", "index", "Dynamic UI"],
    snippet: `ListView.builder(
  itemCount: 10,
  itemBuilder: (context, index) {
    return KotakWarna(
      warna: Colors.primaries[index % Colors.primaries.length],
    );
  },
);`,
    explanation: [
      "`itemCount` menentukan jumlah item.",
      "`itemBuilder` membuat tampilan untuk setiap index.",
      "Modulo `%` dipakai agar index warna tetap aman meski item lebih banyak."
    ],
    exercise: ["Buat list nama lalu tampilkan dengan `ListTile`.", "Tambahkan nomor urut dari `index + 1`.", "Ubah `ListView` menjadi `GridView.builder`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "05",
    slug: "latihan-basic",
    title: "Latihan Basic Flutter",
    track: "Flutter Basic",
    folder: "05_latihan_basic_1",
    level: "Beginner",
    goal: "Menguatkan skill widget dan layout lewat banyak soal kecil.",
    files: ["lib/main.dart", "lib/widgets/soal_*.dart"],
    learn: [
      "Membaca requirement visual sederhana.",
      "Menggabungkan widget dasar menjadi tampilan.",
      "Melatih spacing, warna, alignment, dan ukuran.",
      "Membiasakan struktur file latihan."
    ],
    detail: "Folder ini berperan seperti gym kecil untuk Flutter. Banyak soal pendek membuat kamu tidak hanya paham teori, tapi terbiasa mengetik dan menyusun widget. Ini penting sebelum mengerjakan UI yang lebih kompleks.",
    concept: ["Practice repetition", "Layout composition", "Spacing", "Color", "Widget nesting"],
    snippet: `class Soal1 extends StatelessWidget {
  const Soal1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(width: 100, height: 100, color: Colors.blue),
      ),
    );
  }
}`,
    explanation: [
      "Setiap file `soal_*` mewakili latihan kecil.",
      "`Center` membantu menaruh widget di tengah layar.",
      "`Container` dipakai untuk latihan bentuk visual sederhana."
    ],
    exercise: ["Pilih 3 soal lalu ubah warnanya.", "Tambahkan border radius di salah satu soal.", "Gabungkan dua soal ke satu halaman dengan `Column`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "06",
    slug: "stateless-vs-stateful",
    title: "Stateless vs Stateful",
    track: "Flutter Basic",
    folder: "06_stateless_vs_statefull",
    level: "Beginner",
    goal: "Memahami kapan widget perlu state.",
    files: ["lib/main.dart"],
    learn: [
      "Membedakan UI statis dan UI yang berubah.",
      "Mengenal `StatefulWidget` dan object `State`.",
      "Menggunakan `setState` untuk rebuild UI.",
      "Membuat counter sederhana."
    ],
    detail: "Kalau tampilan berubah karena tombol, input, API, atau pilihan user, kamu membutuhkan state. Di Flutter basic, state lokal biasanya dikelola dengan `StatefulWidget` dan `setState`. Nanti di GetX, state ini dipindah ke controller.",
    concept: ["StatelessWidget", "StatefulWidget", "State object", "setState", "Rebuild"],
    snippet: `class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int counter = 0;

  void tambah() {
    setState(() {
      counter++;
    });
  }
}`,
    explanation: [
      "`counter` disimpan di class State karena nilainya berubah.",
      "`setState` memberi sinyal ke Flutter untuk menggambar ulang UI.",
      "Kalau lupa `setState`, data berubah tapi tampilan tidak ikut berubah."
    ],
    exercise: ["Tambahkan tombol kurang.", "Tambahkan tombol reset.", "Tampilkan pesan jika counter lebih dari 10."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "07",
    slug: "dialog",
    title: "Dialog",
    track: "Flutter Interaction",
    folder: "07_dialog",
    level: "Beginner",
    goal: "Menampilkan pop up untuk konfirmasi atau informasi.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `showDialog`.",
      "Membuat `AlertDialog`.",
      "Menutup dialog dengan `Navigator.pop`.",
      "Menentukan kapan dialog cocok dipakai."
    ],
    detail: "Dialog membantu user mengambil keputusan sebelum aksi penting seperti hapus data atau logout. Karena dialog adalah route kecil di atas halaman, ia bisa ditutup dengan `Navigator.pop`.",
    concept: ["showDialog", "AlertDialog", "actions", "Navigator.pop", "BuildContext"],
    snippet: `showDialog(
  context: context,
  builder: (context) {
    return AlertDialog(
      title: const Text("Konfirmasi"),
      content: const Text("Apakah kamu yakin?"),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text("Tutup"),
        ),
      ],
    );
  },
);`,
    explanation: [
      "`showDialog` membutuhkan `context` dari widget tree.",
      "`builder` mengembalikan widget dialog.",
      "`actions` biasanya berisi tombol batal dan konfirmasi."
    ],
    exercise: ["Tambahkan tombol `Ya` dan `Batal`.", "Buat dialog sukses setelah tombol ditekan.", "Ubah content dialog menjadi widget custom."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "08",
    slug: "snackbar",
    title: "Snackbar",
    track: "Flutter Interaction",
    folder: "08_snackbar",
    level: "Beginner",
    goal: "Memberi feedback singkat ke user.",
    files: ["lib/main.dart"],
    learn: [
      "Menampilkan snackbar dengan `ScaffoldMessenger`.",
      "Mengatur isi dan durasi pesan.",
      "Membedakan snackbar dengan dialog.",
      "Memberikan feedback setelah user menekan tombol."
    ],
    detail: "Snackbar cocok untuk pesan yang tidak memblokir user. Berbeda dengan dialog, snackbar hanya muncul sebentar lalu hilang, sehingga cocok untuk informasi sukses, gagal ringan, atau status proses.",
    concept: ["ScaffoldMessenger", "SnackBar", "Feedback UI", "Duration"],
    snippet: `ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(
    content: Text("Data berhasil diproses"),
    duration: Duration(seconds: 2),
  ),
);`,
    explanation: [
      "`ScaffoldMessenger` mencari scaffold aktif.",
      "`SnackBar` berisi widget content.",
      "Durasi pendek membuat pesan tidak mengganggu alur user."
    ],
    exercise: ["Buat snackbar sukses dan gagal.", "Tambahkan action button di snackbar.", "Ubah posisi snackbar dengan behavior floating."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "09",
    slug: "textfield",
    title: "TextField",
    track: "Flutter Interaction",
    folder: "09_textfield",
    level: "Beginner",
    goal: "Mengambil input user dari form sederhana.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membuat input dengan `TextField`.",
      "Membaca value memakai `TextEditingController`.",
      "Mengatur label, hint, dan border input.",
      "Menjalankan aksi submit."
    ],
    detail: "Input adalah pintu masuk data dari user. Controller menyimpan text yang sedang diketik. Di app nyata, kamu juga perlu validasi, keyboard type, dan dispose controller jika menggunakan StatefulWidget.",
    concept: ["TextField", "TextEditingController", "InputDecoration", "Form input"],
    snippet: `final TextEditingController namaC = TextEditingController();

TextField(
  controller: namaC,
  decoration: const InputDecoration(
    labelText: "Nama",
    border: OutlineInputBorder(),
  ),
);

ElevatedButton(
  onPressed: () {
    print(namaC.text);
  },
  child: const Text("Submit"),
);`,
    explanation: [
      "`TextEditingController` membaca dan mengubah isi input.",
      "`InputDecoration` mengatur tampilan field.",
      "`namaC.text` berisi value yang sedang diketik user."
    ],
    exercise: ["Tambahkan field email.", "Validasi jika input kosong.", "Tampilkan hasil input ke Text di halaman."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "10",
    slug: "tabbar",
    title: "TabBar",
    track: "Flutter Navigation",
    folder: "10_tabbar",
    level: "Beginner",
    goal: "Membuat navigasi tab dalam satu halaman.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `DefaultTabController`.",
      "Membuat `TabBar` sebagai menu tab.",
      "Menghubungkan tab dengan `TabBarView`.",
      "Menjaga jumlah tab dan view tetap sama."
    ],
    detail: "TabBar cocok untuk konten yang masih satu konteks, misalnya kategori chat, produk, atau status order. Berbeda dari navigation page, tab biasanya tidak terasa seperti pindah halaman besar.",
    concept: ["DefaultTabController", "TabBar", "TabBarView", "Tab"],
    snippet: `DefaultTabController(
  length: 3,
  child: Scaffold(
    appBar: AppBar(
      bottom: const TabBar(
        tabs: [Tab(text: "Home"), Tab(text: "Chat"), Tab(text: "Profile")],
      ),
    ),
    body: const TabBarView(
      children: [Text("Home"), Text("Chat"), Text("Profile")],
    ),
  ),
);`,
    explanation: [
      "`length` harus sama dengan jumlah tab.",
      "`TabBar` menampilkan tombol tab.",
      "`TabBarView` menampilkan isi dari tab aktif."
    ],
    exercise: ["Tambahkan icon di setiap tab.", "Buat isi tiap tab menjadi widget sendiri.", "Ubah warna indicator tab."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "11",
    slug: "dropdown",
    title: "Dropdown",
    track: "Flutter Interaction",
    folder: "11_dropdown",
    level: "Beginner",
    goal: "Membuat pilihan dari daftar data.",
    files: ["lib/main.dart"],
    learn: [
      "Membuat `DropdownButton`.",
      "Mengelola selected value.",
      "Mengubah state saat pilihan berubah.",
      "Menampilkan data pilihan user."
    ],
    detail: "Dropdown dipakai saat user harus memilih satu opsi dari daftar terbatas. Kunci utamanya adalah menyimpan value aktif dan memastikan value itu ada di daftar items.",
    concept: ["DropdownButton", "DropdownMenuItem", "selectedValue", "onChanged"],
    snippet: `DropdownButton<String>(
  value: selectedValue,
  items: const [
    DropdownMenuItem(value: "dart", child: Text("Dart")),
    DropdownMenuItem(value: "flutter", child: Text("Flutter")),
  ],
  onChanged: (value) {
    setState(() {
      selectedValue = value;
    });
  },
);`,
    explanation: [
      "`value` adalah pilihan saat ini.",
      "`items` adalah daftar pilihan yang tersedia.",
      "`onChanged` dipakai untuk menyimpan pilihan baru."
    ],
    exercise: ["Buat dropdown level belajar.", "Tampilkan keterangan berdasarkan pilihan.", "Buat pilihan default bernilai null."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "12",
    slug: "bottom-navigation-bar",
    title: "Bottom Navigation Bar",
    track: "Flutter Navigation",
    folder: "12_bottom_navigation_bar",
    level: "Beginner",
    goal: "Membuat navigasi menu utama aplikasi.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `BottomNavigationBar`.",
      "Menyimpan menu aktif dengan `currentIndex`.",
      "Mengganti body halaman berdasarkan index.",
      "Memahami pola navigasi aplikasi mobile."
    ],
    detail: "Bottom navigation cocok untuk menu utama yang sering dipakai seperti Home, Search, Favorite, Profile. Biasanya jumlah item idealnya 3 sampai 5 agar tetap nyaman di layar mobile.",
    concept: ["BottomNavigationBar", "currentIndex", "onTap", "Indexed content"],
    snippet: `int currentIndex = 0;

BottomNavigationBar(
  currentIndex: currentIndex,
  onTap: (index) {
    setState(() {
      currentIndex = index;
    });
  },
  items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
    BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
  ],
);`,
    explanation: [
      "`currentIndex` menentukan tab/menu aktif.",
      "`onTap` menerima index item yang ditekan.",
      "Isi body biasanya diambil dari list halaman berdasarkan index."
    ],
    exercise: ["Tambahkan menu Settings.", "Buat list halaman untuk setiap menu.", "Ubah selected item color."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "13",
    slug: "bottom-sheet",
    title: "Bottom Sheet",
    track: "Flutter Interaction",
    folder: "13_bottom_sheet",
    level: "Beginner",
    goal: "Menampilkan panel tambahan dari bawah layar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan `showModalBottomSheet`.",
      "Mengisi bottom sheet dengan widget.",
      "Menutup bottom sheet dengan `Navigator.pop`.",
      "Memilih kapan bottom sheet lebih cocok daripada dialog."
    ],
    detail: "Bottom sheet bagus untuk menu aksi, filter, share option, atau form pendek. Ia terasa lebih mobile-friendly karena muncul dari bawah, dekat dengan jangkauan jempol user.",
    concept: ["showModalBottomSheet", "Modal panel", "Action menu", "Navigator.pop"],
    snippet: `showModalBottomSheet(
  context: context,
  builder: (context) {
    return SizedBox(
      height: 200,
      child: Center(
        child: TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text("Tutup"),
        ),
      ),
    );
  },
);`,
    explanation: [
      "`builder` mengembalikan isi panel.",
      "`SizedBox` memberi tinggi panel.",
      "`Navigator.pop` menutup bottom sheet."
    ],
    exercise: ["Buat bottom sheet berisi 3 menu.", "Tambahkan icon di setiap menu.", "Buat bottom sheet untuk filter data."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "14",
    slug: "drawer",
    title: "Drawer",
    track: "Flutter Navigation",
    folder: "14_drawer",
    level: "Beginner",
    goal: "Membuat side navigation dari kiri layar.",
    files: ["lib/main.dart"],
    learn: [
      "Menggunakan property `drawer` di `Scaffold`.",
      "Membuat `DrawerHeader`.",
      "Menyusun menu dengan `ListTile`.",
      "Menutup drawer setelah item ditekan."
    ],
    detail: "Drawer biasanya berisi navigasi tambahan, profil user, atau setting. Untuk menu utama aplikasi mobile modern, drawer bisa dipadukan dengan bottom navigation jika menunya cukup banyak.",
    concept: ["Drawer", "DrawerHeader", "ListView", "ListTile"],
    snippet: `Scaffold(
  appBar: AppBar(title: const Text("Drawer")),
  drawer: Drawer(
    child: ListView(
      children: const [
        DrawerHeader(child: Text("Menu")),
        ListTile(leading: Icon(Icons.home), title: Text("Home")),
      ],
    ),
  ),
);`,
    explanation: [
      "`drawer` otomatis terhubung dengan hamburger menu di AppBar.",
      "`DrawerHeader` memberi area header.",
      "`ListTile` cocok untuk item menu karena punya icon, title, subtitle, dan trailing."
    ],
    exercise: ["Tambahkan menu Profile dan Settings.", "Buat header berisi avatar.", "Tambahkan aksi navigasi saat menu ditekan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "15",
    slug: "navigation",
    title: "Navigation",
    track: "Flutter Navigation",
    folder: "15_navigation",
    level: "Beginner",
    goal: "Berpindah antar halaman dengan Navigator.",
    files: ["lib/main.dart", "lib/pages/home.dart", "lib/pages/product.dart", "lib/pages/profile.dart"],
    learn: [
      "Membuat beberapa file page.",
      "Membuka halaman baru dengan `Navigator.push`.",
      "Kembali dengan `Navigator.pop`.",
      "Memahami stack navigation."
    ],
    detail: "Navigator bekerja seperti tumpukan halaman. `push` menaruh halaman baru di atas halaman lama, sedangkan `pop` menghapus halaman paling atas. Konsep ini akan dipakai ulang oleh GetX route management.",
    concept: ["Navigator", "MaterialPageRoute", "push", "pop", "Navigation stack"],
    snippet: `Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const ProductPage(),
  ),
);

Navigator.pop(context);`,
    explanation: [
      "`MaterialPageRoute` membuat route dengan animasi Material.",
      "`builder` menentukan halaman tujuan.",
      "`Navigator.pop` kembali ke halaman sebelumnya."
    ],
    exercise: ["Kirim data dari Home ke Product.", "Tambahkan halaman Detail.", "Buat tombol back custom."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "16",
    slug: "latihan-ui-instagram",
    title: "Latihan UI Instagram",
    track: "UI Practice",
    folder: "16_latihan_ui_instagram",
    level: "Beginner",
    goal: "Melatih slicing UI profile Instagram.",
    files: ["lib/main.dart", "lib/pages/profile.dart", "lib/widgets/Iteminfo.dart", "lib/widgets/ProfilePicture.dart", "lib/widgets/StoryHIghlight.dart", "lib/widgets/TableItem.dart"],
    learn: [
      "Memecah profile page menjadi widget kecil.",
      "Menyusun row info profile.",
      "Membuat highlight/story section.",
      "Membuat grid item untuk konten visual."
    ],
    detail: "Latihan slicing UI menggabungkan semua dasar sebelumnya: layout, image, text, spacing, dan extract widget. Fokusnya bukan cloning sempurna, tapi melatih cara membagi UI besar menjadi komponen kecil.",
    concept: ["Slicing UI", "Reusable widgets", "Profile layout", "Grid", "Network image"],
    snippet: `Column(
  children: [
    Row(
      children: [
        ProfilePicture(),
        ItemInfo(title: "Posts", value: "120"),
        ItemInfo(title: "Followers", value: "10K"),
      ],
    ),
    StoryHighlight(),
    TableItem(),
  ],
);`,
    explanation: [
      "`ProfilePicture`, `ItemInfo`, dan widget lain dipisahkan agar file profile tidak terlalu panjang.",
      "`Row` cocok untuk statistik horizontal.",
      "Grid cocok untuk daftar foto/post."
    ],
    exercise: ["Tambahkan tombol Follow/Edit Profile.", "Buat data story dari list.", "Ubah grid menjadi 3 kolom responsif."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "17",
    slug: "http-get",
    title: "HTTP GET",
    track: "HTTP & API",
    folder: "17_http_get",
    level: "Beginner",
    goal: "Mengambil data dari API dan menampilkannya ke UI.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package `http`.",
      "Mengirim request GET.",
      "Membaca status code.",
      "Decode JSON dan update UI."
    ],
    detail: "GET adalah metode API paling umum untuk mengambil data. Di modul ini kamu melihat alur lengkap: klik tombol, request ke endpoint, decode response, lalu setState agar data tampil.",
    concept: ["HTTP GET", "async await", "statusCode", "jsonDecode", "setState"],
    snippet: `var response = await myhttp.get(
  Uri.parse("https://jsonplaceholder.typicode.com/todos/3"),
);

if (response.statusCode == 200) {
  var data = jsonDecode(response.body);

  setState(() {
    userId = data["userId"].toString();
    title = data["title"];
  });
}`,
    explanation: [
      "`await` menunggu response selesai.",
      "`jsonDecode` mengubah JSON string menjadi Map/List.",
      "`setState` memicu UI untuk menampilkan data baru."
    ],
    exercise: ["Ganti endpoint ke `/posts/1`.", "Tampilkan field `body`.", "Tambahkan pesan jika status code bukan 200."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "18",
    slug: "http-post",
    title: "HTTP POST",
    track: "HTTP & API",
    folder: "18_http_post",
    level: "Beginner",
    goal: "Mengirim data baru ke API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membedakan GET dan POST.",
      "Mengirim body request.",
      "Mengecek response server.",
      "Membaca hasil data yang dibuat."
    ],
    detail: "POST dipakai saat app perlu membuat data baru, misalnya register, login, membuat post, atau menyimpan form. Meski API latihan tidak benar-benar menyimpan permanen, pola request-nya sama.",
    concept: ["HTTP POST", "Request body", "Create data", "Response body"],
    snippet: `var response = await myhttp.post(
  Uri.parse("https://jsonplaceholder.typicode.com/posts"),
  body: {
    "title": "Belajar Flutter",
    "body": "Latihan HTTP POST",
    "userId": "1",
  },
);

print(response.statusCode);
print(response.body);`,
    explanation: [
      "`body` berisi data yang dikirim.",
      "Server biasanya mengembalikan data baru atau id baru.",
      "Status code 201 sering berarti data berhasil dibuat."
    ],
    exercise: ["Ambil input dari TextField lalu kirim POST.", "Tampilkan response di UI.", "Tambahkan loading saat request berjalan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "19",
    slug: "http-put-patch",
    title: "HTTP PUT atau PATCH",
    track: "HTTP & API",
    folder: "19_http_put_or_patch",
    level: "Beginner",
    goal: "Mengubah data yang sudah ada di API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Memahami update data via API.",
      "Membedakan PUT dan PATCH secara sederhana.",
      "Mengirim field yang ingin diubah.",
      "Mengecek response update."
    ],
    detail: "PUT biasanya dipakai untuk mengganti data penuh, sedangkan PATCH untuk mengubah sebagian field. Dalam latihan beginner, yang penting adalah paham bahwa update butuh endpoint detail dengan id.",
    concept: ["HTTP PUT", "HTTP PATCH", "Update data", "Endpoint by id"],
    snippet: `var response = await myhttp.patch(
  Uri.parse("https://jsonplaceholder.typicode.com/posts/1"),
  body: {
    "title": "Judul sudah diubah",
  },
);

print(response.statusCode);
print(response.body);`,
    explanation: [
      "`/posts/1` berarti data dengan id 1.",
      "`PATCH` hanya mengirim field yang diubah.",
      "Response dipakai untuk memastikan update berhasil."
    ],
    exercise: ["Ubah dari PATCH ke PUT.", "Update title dari TextField.", "Tampilkan response title ke UI."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "20",
    slug: "http-delete",
    title: "HTTP DELETE",
    track: "HTTP & API",
    folder: "20_http_delete",
    level: "Beginner",
    goal: "Menghapus data melalui API.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Mengirim request DELETE.",
      "Menentukan endpoint dengan id.",
      "Mengecek status berhasil.",
      "Memahami pentingnya konfirmasi sebelum delete."
    ],
    detail: "DELETE adalah aksi yang rawan karena menghapus data. Di aplikasi sungguhan, tombol delete biasanya didahului dialog konfirmasi agar user tidak salah tekan.",
    concept: ["HTTP DELETE", "Delete by id", "Status code", "Confirmation flow"],
    snippet: `var response = await myhttp.delete(
  Uri.parse("https://jsonplaceholder.typicode.com/posts/1"),
);

if (response.statusCode == 200) {
  print("Data berhasil dihapus");
}`,
    explanation: [
      "Endpoint delete biasanya menyertakan id data.",
      "Status code dipakai sebagai penanda berhasil/gagal.",
      "Tambahkan dialog jika delete dipicu dari tombol UI."
    ],
    exercise: ["Tambahkan AlertDialog sebelum delete.", "Tampilkan snackbar setelah berhasil.", "Buat input id data yang ingin dihapus."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "21",
    slug: "future-builder",
    title: "FutureBuilder",
    track: "HTTP & API",
    folder: "21_future_builder",
    level: "Beginner",
    goal: "Menampilkan data async dengan state loading, error, dan success.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Membuat function `Future`.",
      "Menghubungkan `future` ke UI.",
      "Membaca `snapshot.connectionState`.",
      "Menangani error dan data kosong."
    ],
    detail: "FutureBuilder membuat UI lebih rapi saat membaca data async. Daripada membuat banyak variable manual untuk loading dan data, FutureBuilder menyediakan snapshot yang menggambarkan proses request.",
    concept: ["Future", "FutureBuilder", "snapshot", "loading", "error", "ListView.builder"],
    snippet: `FutureBuilder<List<dynamic>>(
  future: getData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }

    if (snapshot.hasError) {
      return Center(child: Text("Error: \${snapshot.error}"));
    }

    final data = snapshot.data!;
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (context, index) => ListTile(
        title: Text(data[index]["title"]),
      ),
    );
  },
);`,
    explanation: [
      "`waiting` berarti Future belum selesai.",
      "`hasError` menangkap error dari Future.",
      "Setelah sukses, data bisa ditampilkan dengan builder."
    ],
    exercise: ["Ubah itemCount menjadi `data.length`.", "Tambahkan empty state.", "Pisahkan item list ke widget sendiri."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "22",
    slug: "latihan-http-covid-app",
    title: "Latihan HTTP Covid App",
    track: "Mini Project",
    folder: "22_latihan_http_covid_app",
    level: "Beginner",
    goal: "Membuat mini app API dengan model dan widget info.",
    files: ["lib/main.dart", "lib/Models/summary.dart", "lib/pages/home.dart", "lib/widgets/InfoCard.dart"],
    learn: [
      "Memisahkan model data API.",
      "Membuat widget `InfoCard` untuk tampilan ringkas.",
      "Menggabungkan HTTP dengan UI card.",
      "Membaca response API ke object."
    ],
    detail: "Ini langkah awal ke mini project yang lebih rapi. Kamu mulai memisahkan model, page, dan widget. Walau sederhana, pola ini membantu saat data API makin kompleks.",
    concept: ["Model", "fromJson", "InfoCard", "API summary", "Widget split"],
    snippet: `Future<Summary> getSummary() async {
  final response = await http.get(Uri.parse(apiUrl));

  if (response.statusCode == 200) {
    return Summary.fromJson(jsonDecode(response.body));
  }

  throw Exception("Gagal mengambil data");
}`,
    explanation: [
      "`Summary.fromJson` mengubah Map JSON menjadi object Dart.",
      "Model membuat akses data lebih jelas daripada Map mentah.",
      "Widget info card menjaga UI tetap reusable."
    ],
    exercise: ["Tambahkan loading state.", "Tambahkan card baru untuk data lain.", "Ubah warna card berdasarkan status data."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "23",
    slug: "faker",
    title: "Package Faker",
    track: "Packages",
    folder: "23_faker",
    level: "Beginner",
    goal: "Membuat dummy data untuk latihan UI.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package external.",
      "Membuat nama dan email palsu.",
      "Mengisi list UI tanpa API.",
      "Memahami manfaat dummy data."
    ],
    detail: "Faker berguna saat UI sudah perlu banyak data, tapi backend belum ada. Dengan dummy data yang realistis, kamu bisa menguji list, card, avatar, dan layout lebih cepat.",
    concept: ["faker", "Dummy data", "ListTile", "Package usage"],
    snippet: `final faker = Faker();

ListTile(
  leading: CircleAvatar(child: Text(faker.person.firstName()[0])),
  title: Text(faker.person.name()),
  subtitle: Text(faker.internet.email()),
);`,
    explanation: [
      "`Faker()` menyediakan generator data palsu.",
      "Data bisa berubah setiap rebuild/run.",
      "Cocok untuk prototype UI."
    ],
    exercise: ["Buat 20 data user palsu.", "Tambahkan avatar inisial.", "Buat card profile dari data faker."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "24",
    slug: "date-format",
    title: "Date Format",
    track: "Packages",
    folder: "24_date_format",
    level: "Beginner",
    goal: "Memformat tanggal dengan package `intl`.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `DateTime.now()`.",
      "Memakai `DateFormat`.",
      "Mengubah pattern tanggal.",
      "Menampilkan tanggal yang ramah dibaca."
    ],
    detail: "Tanggal mentah sering tidak cocok langsung ditampilkan. Package `intl` membantu mengubah tanggal menjadi format yang sesuai kebutuhan UI, seperti hari, bulan, tahun, dan jam.",
    concept: ["DateTime", "intl", "DateFormat", "Format pattern"],
    snippet: `final now = DateTime.now();
final formattedDate = DateFormat("EEEE, dd MMMM yyyy").format(now);

Text(formattedDate);`,
    explanation: [
      "`DateTime.now()` mengambil waktu saat ini.",
      "`DateFormat(...).format(now)` mengubah tanggal ke string.",
      "Pattern menentukan bentuk output tanggal."
    ],
    exercise: ["Tampilkan format jam.", "Coba format `dd/MM/yyyy`.", "Buat card yang menampilkan tanggal hari ini."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "25",
    slug: "package-bottom-bar",
    title: "Package Bottom Bar",
    track: "Packages",
    folder: "25_package_bottom_bar",
    level: "Beginner",
    goal: "Eksperimen tampilan bottom bar dari package/custom widget.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membandingkan bottom bar bawaan dan package.",
      "Mengelola selected index.",
      "Mengubah halaman berdasarkan menu.",
      "Memahami kapan package UI berguna."
    ],
    detail: "Package UI membantu mempercepat tampilan yang lebih menarik. Namun konsep state-nya tetap sama: ada index aktif, ada event tap, dan ada body yang berubah mengikuti pilihan.",
    concept: ["Bottom bar package", "selectedIndex", "Navigation state", "UI package"],
    snippet: `int selectedIndex = 0;

BottomNavigationBar(
  currentIndex: selectedIndex,
  onTap: (index) {
    setState(() {
      selectedIndex = index;
    });
  },
  items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
    BottomNavigationBarItem(icon: Icon(Icons.settings), label: "Setting"),
  ],
);`,
    explanation: [
      "Package biasanya mengubah visual, bukan konsep dasarnya.",
      "`selectedIndex` tetap menjadi sumber state utama.",
      "Pisahkan halaman menu ke list agar rapi."
    ],
    exercise: ["Tambahkan menu ketiga.", "Buat body berubah sesuai index.", "Ubah warna item aktif."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "26",
    slug: "avatar-glow",
    title: "Avatar Glow",
    track: "Packages",
    folder: "26_avatar_glow",
    level: "Beginner",
    goal: "Membuat efek animasi glow pada avatar.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan package `avatar_glow`.",
      "Membungkus widget dengan efek animasi.",
      "Mengatur warna dan ukuran glow.",
      "Memakai animasi sebagai status visual."
    ],
    detail: "Efek glow bisa memberi kesan aktif, recording, scanning, atau highlight profile. Gunakan secukupnya agar UI tetap fokus dan tidak terlalu ramai.",
    concept: ["AvatarGlow", "CircleAvatar", "Animation effect", "Visual status"],
    snippet: `AvatarGlow(
  glowColor: Colors.blue,
  child: const CircleAvatar(
    radius: 40,
    child: Icon(Icons.person),
  ),
);`,
    explanation: [
      "`AvatarGlow` membungkus widget target.",
      "`glowColor` mengatur warna animasi.",
      "Child bisa berupa avatar, icon, atau widget lain."
    ],
    exercise: ["Ganti icon menjadi mic.", "Ubah warna glow berdasarkan status.", "Tambahkan tombol start/stop animasi."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "27",
    slug: "package-intro-screen",
    title: "Package Intro Screen",
    track: "Packages",
    folder: "27_package_intro_screen",
    level: "Beginner",
    goal: "Membuat halaman onboarding sederhana.",
    files: ["lib/main.dart", "lib/pages/intro.dart", "lib/pages/home.dart"],
    learn: [
      "Mengenal alur intro/onboarding.",
      "Membuat beberapa slide pengenalan.",
      "Menambahkan tombol skip atau mulai.",
      "Menghubungkan intro ke halaman home."
    ],
    detail: "Intro screen membantu menjelaskan value aplikasi pada pembukaan pertama. Di project nyata, status sudah melihat intro biasanya disimpan agar onboarding tidak muncul terus.",
    concept: ["Onboarding", "PageView", "Skip", "Get started", "First run flow"],
    snippet: `PageView(
  children: const [
    Center(child: Text("Belajar Flutter")),
    Center(child: Text("Bangun UI")),
    Center(child: Text("Mulai App")),
  ],
);`,
    explanation: [
      "`PageView` membuat slide horizontal.",
      "Setiap child adalah satu halaman intro.",
      "Tombol mulai biasanya membuka `HomePage`."
    ],
    exercise: ["Tambahkan indicator titik.", "Tambahkan tombol skip.", "Simpan status intro memakai GetStorage di modul lanjutan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "28",
    slug: "package-dropdown-search",
    title: "Package Dropdown Search",
    track: "Packages",
    folder: "28_package_dropdown_search",
    level: "Beginner",
    goal: "Membuat dropdown dengan fitur pencarian.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan package dropdown search/custom dropdown.",
      "Mengaktifkan search box.",
      "Menangkap item yang dipilih.",
      "Menyiapkan UI untuk data banyak."
    ],
    detail: "Dropdown biasa kurang nyaman jika item sangat banyak. Searchable dropdown cocok untuk provinsi, kota, kategori produk, atau data master lain.",
    concept: ["Searchable dropdown", "onChanged", "Items list", "Package UI"],
    snippet: `DropdownSearch<String>(
  items: const ["Dart", "Flutter", "GetX"],
  popupProps: const PopupProps.menu(showSearchBox: true),
  onChanged: (value) {
    print(value);
  },
);`,
    explanation: [
      "Search box membantu mencari item panjang.",
      "`onChanged` menangkap pilihan user.",
      "Pola ini dipakai lagi di modul wilayah Indonesia."
    ],
    exercise: ["Buat list 30 nama kota.", "Tampilkan pilihan di Text.", "Tambahkan empty state jika data kosong."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "29",
    slug: "daftar-wilayah-indo",
    title: "Daftar Wilayah Indonesia",
    track: "HTTP & API",
    folder: "29_daftar_wilayah_indo",
    level: "Beginner",
    goal: "Menggabungkan API key, HTTP, dropdown search, dan dependent dropdown.",
    files: ["lib/main.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menyimpan API key sebagai variable placeholder.",
      "Mengambil data provinsi dari API.",
      "Mengambil kabupaten berdasarkan provinsi terpilih.",
      "Menggunakan dropdown search untuk data wilayah."
    ],
    detail: "Modul ini mulai terasa seperti fitur nyata: dropdown kedua bergantung pada pilihan dropdown pertama. Pola ini sering dipakai untuk alamat, kategori-subkategori, atau filter bertingkat.",
    concept: ["API key placeholder", "HTTP GET", "Dependent dropdown", "jsonDecode", "setState"],
    snippet: `final String api = "API-KEY-KAMU";

var response = await myhttp.get(
  Uri.parse("https://api.binderbyte.com/wilayah/provinsi?api_key=$api"),
);

if (response.statusCode == 200) {
  final json = jsonDecode(response.body);
  dataProvinsi = json["value"];
}`,
    explanation: [
      "`API-KEY-KAMU` adalah placeholder agar key asli aman saat push ke GitHub.",
      "Endpoint provinsi mengambil daftar provinsi.",
      "Endpoint kabupaten memakai `id_provinsi` dari pilihan user."
    ],
    exercise: ["Tambahkan loading untuk kabupaten.", "Tambahkan dropdown kecamatan jika API tersedia.", "Pindahkan logic API ke service/provider."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "30",
    slug: "change-app-icon",
    title: "Change App Icon",
    track: "Packages",
    folder: "30_change_app_icon",
    level: "Beginner",
    goal: "Mengubah launcher icon aplikasi.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan dev dependency `flutter_launcher_icons`.",
      "Menulis konfigurasi icon di `pubspec.yaml`.",
      "Menentukan path gambar icon.",
      "Menjalankan generator icon."
    ],
    detail: "Launcher icon adalah bagian branding aplikasi. Dengan package generator, Flutter bisa membuat asset icon untuk Android dan iOS berdasarkan satu source image.",
    concept: ["flutter_launcher_icons", "dev_dependencies", "image_path", "App branding"],
    snippet: `dev_dependencies:
  flutter_launcher_icons: ^0.14.4

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icon/app_icon.png"`,
    explanation: [
      "`dev_dependencies` dipakai untuk tool pengembangan.",
      "`image_path` menunjuk gambar sumber icon.",
      "Setelah config, jalankan command generator dari package."
    ],
    exercise: ["Siapkan icon ukuran besar.", "Tambahkan adaptive icon Android.", "Buat variasi icon untuk app latihan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "31",
    slug: "belajar-getx",
    title: "Belajar GetX",
    track: "GetX",
    folder: "31_belajar_getx",
    level: "Beginner",
    goal: "Memulai GetX dengan `GetMaterialApp`.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menambahkan package `get`.",
      "Mengganti `MaterialApp` menjadi `GetMaterialApp`.",
      "Menyiapkan fitur GetX untuk snackbar, dialog, route, dan state.",
      "Memahami root app untuk GetX."
    ],
    detail: "`GetMaterialApp` adalah pintu masuk fitur GetX. Tanpa ini, beberapa fitur seperti navigation dan snackbar GetX tidak berjalan maksimal. Modul ini adalah gerbang ke semua materi GetX berikutnya.",
    concept: ["GetX", "GetMaterialApp", "Package get", "Root app"],
    snippet: `void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    ),
  );
}`,
    explanation: [
      "`GetMaterialApp` menggantikan `MaterialApp`.",
      "Fitur route/snackbar/dialog GetX siap dipakai.",
      "Struktur page tetap menggunakan widget Flutter biasa."
    ],
    exercise: ["Ubah title aplikasi.", "Tambahkan route sederhana.", "Coba panggil `Get.snackbar` dari tombol."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "32",
    slug: "snackbar-getx",
    title: "Snackbar GetX",
    track: "GetX",
    folder: "32_snackbar_getx",
    level: "Beginner",
    goal: "Menampilkan snackbar tanpa BuildContext.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.snackbar`.",
      "Mengatur title dan message.",
      "Mengatur posisi snackbar.",
      "Membandingkan dengan ScaffoldMessenger."
    ],
    detail: "GetX membuat feedback UI lebih ringkas karena tidak perlu mengambil `context`. Ini berguna saat logic ada di controller dan tetap ingin menampilkan pesan ke user.",
    concept: ["Get.snackbar", "SnackPosition", "No context", "Feedback"],
    snippet: `Get.snackbar(
  "Berhasil",
  "Data berhasil disimpan",
  snackPosition: SnackPosition.BOTTOM,
);`,
    explanation: [
      "Parameter pertama adalah title.",
      "Parameter kedua adalah message.",
      "`snackPosition` mengatur posisi muncul."
    ],
    exercise: ["Buat snackbar error.", "Tambahkan icon.", "Panggil snackbar dari controller."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "33",
    slug: "dialog-getx",
    title: "Dialog GetX",
    track: "GetX",
    folder: "33_dialog_getx",
    level: "Beginner",
    goal: "Menampilkan dialog dengan API GetX.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.defaultDialog`.",
      "Menambahkan tombol confirm dan cancel.",
      "Menutup dialog dengan `Get.back`.",
      "Memakai dialog untuk konfirmasi."
    ],
    detail: "Dialog GetX membuat kode lebih pendek dan bisa dipanggil dari mana saja selama root app memakai `GetMaterialApp`. Ini cocok untuk flow delete, logout, atau konfirmasi submit.",
    concept: ["Get.defaultDialog", "Get.back", "Confirm dialog", "No context"],
    snippet: `Get.defaultDialog(
  title: "Konfirmasi",
  middleText: "Apakah kamu yakin?",
  textConfirm: "Ya",
  textCancel: "Batal",
  onConfirm: () => Get.back(),
);`,
    explanation: [
      "`middleText` adalah isi pesan sederhana.",
      "`onConfirm` berjalan saat tombol confirm ditekan.",
      "`Get.back` menutup dialog."
    ],
    exercise: ["Tambahkan aksi delete setelah confirm.", "Ubah dialog menjadi custom content.", "Tampilkan snackbar setelah dialog ditutup."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "34",
    slug: "bottomsheet-getx",
    title: "BottomSheet GetX",
    track: "GetX",
    folder: "34_bottomsheet_getx",
    level: "Beginner",
    goal: "Menampilkan bottom sheet tanpa context.",
    files: ["lib/main.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.bottomSheet`.",
      "Mengisi bottom sheet dengan widget custom.",
      "Menutup bottom sheet dengan `Get.back`.",
      "Membuat action menu cepat."
    ],
    detail: "Sama seperti dialog dan snackbar GetX, bottom sheet bisa dipanggil tanpa context. Ini praktis untuk action menu yang logic-nya dipicu dari controller atau widget kecil.",
    concept: ["Get.bottomSheet", "Bottom panel", "No context", "Action menu"],
    snippet: `Get.bottomSheet(
  Container(
    padding: const EdgeInsets.all(16),
    color: Colors.white,
    child: const Text("Ini bottom sheet GetX"),
  ),
);`,
    explanation: [
      "Isi bottom sheet tetap widget Flutter biasa.",
      "`Get.bottomSheet` membuka panel dari bawah.",
      "`Get.back` bisa dipakai untuk menutupnya."
    ],
    exercise: ["Buat bottom sheet tema light/dark.", "Tambahkan list opsi.", "Panggil dari FloatingActionButton."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "35",
    slug: "state-management-getx",
    title: "State Management GetX",
    track: "GetX State",
    folder: "35_state_management_getx",
    level: "Beginner",
    goal: "Mengelola state sederhana dengan GetBuilder dan update.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membuat class controller extend `GetxController`.",
      "Menyimpan state di controller.",
      "Memanggil `update()` untuk rebuild.",
      "Membaca state dengan `GetBuilder`."
    ],
    detail: "Simple state GetX cocok saat kamu ingin kontrol manual kapan UI rebuild. Tidak semua data harus reactive. Kadang update manual lebih hemat dan lebih mudah dipahami.",
    concept: ["GetxController", "GetBuilder", "update", "Manual state"],
    snippet: `class HomeController extends GetxController {
  var angka = 0;

  void tambah() {
    angka++;
  }

  void refreshTampilan() {
    update();
  }
}`,
    explanation: [
      "`angka` adalah state biasa, belum reactive.",
      "`tambah` mengubah data.",
      "`update()` memberitahu `GetBuilder` agar rebuild."
    ],
    exercise: ["Panggil `update()` langsung di `tambah`.", "Tambahkan function reset.", "Bandingkan dengan `.obs` di modul berikutnya."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "36",
    slug: "reactive-variables",
    title: "Reactive Variables GetX",
    track: "GetX State",
    folder: "36_reactive_variables",
    level: "Beginner",
    goal: "Membuat state otomatis rebuild dengan `.obs` dan Obx.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Membuat `RxInt`, `RxString`, `RxBool`, dan `RxList`.",
      "Menggunakan `.obs`.",
      "Mengubah value reactive.",
      "Menampilkan state dengan `Obx`."
    ],
    detail: "Reactive variable membuat UI yang memakai data tersebut rebuild otomatis saat value berubah. Ini cocok untuk counter, form state, selected item, loading, dan list hasil API.",
    concept: [".obs", "RxInt", "RxString", "RxBool", "RxList", "Obx"],
    snippet: `class HomeController extends GetxController {
  RxInt dataInt = 0.obs;
  RxString dataString = "data".obs;
  RxBool dataBool = false.obs;
  RxList<int> dataList = [1, 2, 3].obs;

  void incrementINT() {
    dataInt++;
  }

  void gantiBool() {
    dataBool.toggle();
  }
}`,
    explanation: [
      "`.obs` membuat data dipantau oleh GetX.",
      "`Obx` rebuild otomatis saat data reactive berubah.",
      "Untuk beberapa tipe, value diubah lewat `.value`."
    ],
    exercise: ["Buat reactive loading.", "Buat selected category dengan `RxString`.", "Tampilkan list reactive dengan `Obx`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "37",
    slug: "workers-getx",
    title: "Workers GetX",
    track: "GetX State",
    folder: "37_workers_getx",
    level: "Beginner",
    goal: "Memantau perubahan state reactive.",
    files: ["lib/main.dart", "lib/controllers/home_controller.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Menggunakan `ever` untuk setiap perubahan.",
      "Menggunakan `once` untuk perubahan pertama.",
      "Menggunakan `debounce` untuk menunggu user berhenti mengetik.",
      "Menggunakan `interval` untuk membatasi frekuensi eksekusi."
    ],
    detail: "Workers berguna saat perubahan state perlu memicu side effect, seperti request search API, validasi, analytics, atau log. `debounce` sangat penting agar API tidak terpanggil setiap huruf diketik.",
    concept: ["ever", "once", "debounce", "interval", "Side effect", "onInit"],
    snippet: `@override
void onInit() {
  ever(dataPantau, (data) => print("Perubahan"));

  debounce(
    dataPantau,
    (data) => print("Jalan setelah berhenti berubah"),
    time: const Duration(seconds: 2),
  );

  interval(
    dataPantau,
    (data) => print("Jalan tiap interval"),
    time: const Duration(seconds: 2),
  );

  super.onInit();
}`,
    explanation: [
      "`ever` berjalan setiap data berubah.",
      "`debounce` menunggu perubahan berhenti selama durasi tertentu.",
      "`interval` membatasi eksekusi per interval waktu."
    ],
    exercise: ["Buat search input dengan debounce.", "Tambahkan worker `once`.", "Cetak value terbaru setiap worker berjalan."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "38",
    slug: "dependency-management-getx",
    title: "Dependency Management GetX",
    track: "GetX Architecture",
    folder: "38_dependency_management_getx",
    level: "Beginner",
    goal: "Mendaftarkan dan mengambil controller dengan GetX.",
    files: ["lib/main.dart", "lib/controllers/page_satu_controller.dart", "lib/pages/page_satu.dart", "lib/pages/page_dua.dart", "pubspec.yaml"],
    learn: [
      "Memahami dependency injection sederhana.",
      "Mendaftarkan controller dengan `Get.put` atau `Get.lazyPut`.",
      "Mengambil controller dengan `Get.find`.",
      "Memakai controller yang sama di beberapa halaman."
    ],
    detail: "Dependency management membuat object seperti controller tidak perlu dibuat manual di setiap widget. Ini membantu menjaga satu sumber data yang bisa dipakai lintas halaman.",
    concept: ["Get.put", "Get.lazyPut", "Get.find", "Dependency injection", "Controller reuse"],
    snippet: `class PageSatu extends StatelessWidget {
  PageSatuController pageSatuC = Get.find();

  @override
  Widget build(BuildContext context) {
    return Text(
      "\${pageSatuC.data['name']} - \${pageSatuC.data['age']} Tahun",
      style: const TextStyle(fontSize: 30),
    );
  }
}`,
    explanation: [
      "`Get.find()` mengambil controller yang sudah didaftarkan.",
      "Controller bisa dipakai ulang tanpa mengirim lewat constructor.",
      "Binding di modul berikutnya membuat proses pendaftaran lebih rapi."
    ],
    exercise: ["Daftarkan controller di `main.dart`.", "Ambil controller di dua page berbeda.", "Bandingkan `Get.put` dan `Get.lazyPut`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "39",
    slug: "route-management-getx",
    title: "Route Management GetX",
    track: "GetX Navigation",
    folder: "39_route_management_getx",
    level: "Beginner",
    goal: "Navigasi halaman tanpa BuildContext.",
    files: ["lib/main.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Menggunakan `Get.to`.",
      "Menggunakan `Get.off`.",
      "Menggunakan `Get.offAll`.",
      "Kembali dengan `Get.back`."
    ],
    detail: "GetX navigation memperpendek kode navigasi karena tidak perlu `Navigator.push(context, ...)`. Setiap method punya efek berbeda terhadap stack halaman.",
    concept: ["Get.to", "Get.off", "Get.offAll", "Get.back", "Navigation stack"],
    snippet: `Get.to(() => const Page1());
Get.off(() => const Page2());
Get.offAll(() => const Page3());
Get.back();`,
    explanation: [
      "`Get.to` menambah halaman baru.",
      "`Get.off` mengganti halaman aktif.",
      "`Get.offAll` membersihkan stack lalu membuka halaman baru.",
      "`Get.back` kembali atau menutup overlay."
    ],
    exercise: ["Buat flow login ke home dengan `Get.offAll`.", "Kirim argument ke halaman tujuan.", "Coba kembali dengan `Get.back(result: data)`."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "40",
    slug: "routename-getx",
    title: "Route Name GetX",
    track: "GetX Navigation",
    folder: "40_routename_getx",
    level: "Beginner",
    goal: "Mengelola route dengan nama.",
    files: ["lib/main.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Membuat daftar `GetPage`.",
      "Menentukan `initialRoute`.",
      "Navigasi dengan `Get.toNamed`.",
      "Merapikan route yang makin banyak."
    ],
    detail: "Named route membuat navigasi lebih terstruktur. Alih-alih membuat page langsung di banyak tempat, semua route dikumpulkan di satu daftar. Pola ini menjadi dasar struktur Get CLI.",
    concept: ["GetPage", "initialRoute", "getPages", "Get.toNamed", "Route table"],
    snippet: `GetMaterialApp(
  initialRoute: "/",
  getPages: [
    GetPage(name: "/", page: () => const HomePage()),
    GetPage(name: "/page-1", page: () => const Page1()),
  ],
);

Get.toNamed("/page-1");`,
    explanation: [
      "`getPages` berisi daftar route aplikasi.",
      "`initialRoute` menentukan halaman pertama.",
      "`Get.toNamed` membuka halaman berdasarkan nama route."
    ],
    exercise: ["Tambahkan route detail.", "Kirim parameter route.", "Buat konstanta untuk nama route agar tidak typo."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "41",
    slug: "bindings-builder",
    title: "Bindings Builder GetX",
    track: "GetX Architecture",
    folder: "41_bindings_builder",
    level: "Beginner",
    goal: "Mendaftarkan dependency otomatis saat route dibuka.",
    files: ["lib/main.dart", "lib/bindings/counter_binding.dart", "lib/controllers/counterController.dart", "lib/pages/*", "pubspec.yaml"],
    learn: [
      "Membuat class binding.",
      "Mendaftarkan controller di `dependencies`.",
      "Menghubungkan binding ke `GetPage`.",
      "Memisahkan dependency dari view."
    ],
    detail: "Binding membuat route bertanggung jawab menyiapkan controller yang dibutuhkan halamannya. View jadi lebih bersih karena tidak perlu `Get.put` langsung di UI.",
    concept: ["Bindings", "dependencies", "Get.lazyPut", "GetPage binding", "Route scoped dependency"],
    snippet: `class CounterBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => CounterController());
  }
}

GetPage(
  name: "/counter",
  page: () => CounterPage(),
  binding: CounterBinding(),
);`,
    explanation: [
      "`Bindings` adalah class khusus untuk mendaftarkan dependency.",
      "`Get.lazyPut` membuat controller saat dibutuhkan.",
      "Binding dihubungkan ke route lewat property `binding`."
    ],
    exercise: ["Tambahkan controller kedua di binding.", "Pindahkan `Get.put` dari view ke binding.", "Bandingkan lifecycle controller dengan dan tanpa binding."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "42",
    slug: "getstorage",
    title: "GetStorage",
    track: "GetX Storage",
    folder: "42_getstorage",
    level: "Beginner",
    goal: "Menyimpan data kecil di local storage.",
    files: ["lib/main.dart", "lib/controller/login.dart", "lib/pages/login.dart", "lib/pages/home.dart", "pubspec.yaml"],
    learn: [
      "Inisialisasi `GetStorage` sebelum app berjalan.",
      "Menyimpan data dengan `write`.",
      "Membaca data dengan `read`.",
      "Menghapus data dengan `remove`."
    ],
    detail: "GetStorage cocok untuk data kecil seperti remember login, cache ringan, dan theme mode. Untuk data sensitif, jangan menyimpan password plain text di app nyata; gunakan storage aman dan mekanisme auth yang benar.",
    concept: ["GetStorage.init", "write", "read", "remove", "Remember login", "Local cache"],
    snippet: `void main() async {
  await GetStorage.init();
  runApp(const MyApp());
}

final box = GetStorage();

box.write("dataRemember", {
  "email": emailC.text,
  "password": passwordC.text,
});

box.remove("dataRemember");`,
    explanation: [
      "`GetStorage.init()` wajib sebelum storage dipakai.",
      "`write` menyimpan data lokal.",
      "`remove` menghapus key tertentu."
    ],
    exercise: ["Simpan status dark mode.", "Baca data remember saat halaman login dibuka.", "Hapus data saat logout."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "43",
    slug: "get-cli",
    title: "Get CLI",
    track: "GetX Architecture",
    folder: "43_get_cli",
    level: "Beginner",
    goal: "Mengenal struktur project Get CLI.",
    files: ["lib/main.dart", "lib/app/modules/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Memahami folder `modules`.",
      "Mengenal binding, controller, dan view per fitur.",
      "Melihat route di `app_pages.dart` dan `app_routes.dart`.",
      "Menyiapkan struktur yang lebih scalable."
    ],
    detail: "Get CLI membantu membuat struktur project modular. Setiap fitur punya folder sendiri, sehingga app lebih mudah dirawat saat halaman dan controller makin banyak.",
    concept: ["Get CLI", "Modules", "Bindings", "Controllers", "Views", "Routes"],
    snippet: `GetMaterialApp(
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);`,
    explanation: [
      "`AppPages.INITIAL` menentukan route awal.",
      "`AppPages.routes` berisi semua route hasil struktur Get CLI.",
      "Setiap module biasanya memiliki binding, controller, dan view."
    ],
    exercise: ["Tambahkan module baru.", "Tambahkan route baru.", "Pindahkan logic halaman ke controller."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "44",
    slug: "latihan-get-cli",
    title: "Latihan Get CLI",
    track: "GetX Architecture",
    folder: "44_latihan_get_cli",
    level: "Beginner",
    goal: "Menambahkan model dan provider pada struktur Get CLI.",
    files: ["lib/main.dart", "lib/app/data/models/user_model.dart", "lib/app/data/providers/user_provider.dart", "lib/app/modules/home/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Membuat provider dengan `GetConnect`.",
      "Mengatur base URL.",
      "Mengirim API key placeholder lewat header.",
      "Parsing response ke model."
    ],
    detail: "Modul ini mulai memisahkan layer data. Provider menangani request, model menangani bentuk data, controller menjadi jembatan, dan view fokus ke tampilan.",
    concept: ["GetConnect", "Provider", "Model", "Base URL", "Header", "API key placeholder"],
    snippet: `class UserProvider extends GetConnect {
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
}`,
    explanation: [
      "`GetConnect` menyediakan method `get`, `post`, dan client config.",
      "`baseUrl` membuat request cukup memakai path.",
      "`API-KEY-KAMU` adalah placeholder agar key asli tidak bocor ke GitHub."
    ],
    exercise: ["Tambahkan method create user.", "Tampilkan loading di view.", "Tangani response error dengan snackbar."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "45",
    slug: "studycase-rajaongkir",
    title: "Study Case RajaOngkir",
    track: "Study Case",
    folder: "45_studycase_rajaongkir",
    level: "Beginner+",
    goal: "Membangun fitur cek ongkir dengan GetX, model, provider, controller, dan reactive UI.",
    files: ["lib/main.dart", "lib/app/data/models/*", "lib/app/data/providers/*", "lib/app/modules/home/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Membuat model provinsi, kota, kurir, dan cost.",
      "Mengambil data melalui provider.",
      "Mengelola pilihan dropdown dengan `Rxn`.",
      "Menampilkan loading state terpisah.",
      "Mengirim request ongkir dengan body dan header API key placeholder."
    ],
    detail: "Ini modul puncak yang menggabungkan banyak konsep: API, dropdown dependent, state reactive, provider, model, loading, dan struktur Get CLI. Alurnya mirip fitur produksi: user pilih asal, tujuan, kurir, berat, lalu aplikasi meminta hasil biaya kirim.",
    concept: ["Model", "Provider", "Get.find", "RxList", "Rxn", "assignAll", "Loading state", "POST request"],
    snippet: `class HomeController extends GetxController {
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
}`,
    explanation: [
      "`Get.find()` mengambil provider yang sudah didaftarkan binding.",
      "`Rxn<Province>()` dipakai karena pilihan awal boleh null.",
      "`assignAll` mengganti isi list reactive dengan hasil API.",
      "`finally` memastikan loading dimatikan meskipun request error."
    ],
    exercise: ["Validasi semua dropdown sebelum cek ongkir.", "Tambahkan error snackbar jika request gagal.", "Pisahkan constant API key dan base URL ke file config."],
    run: "flutter pub get\nflutter run"
  },
  {
    id: "46",
    slug: "theme-and-constant-color",
    title: "Theme and Constant Color",
    track: "GetX UI",
    folder: "46_theme_and_contscolor",
    level: "Beginner+",
    goal: "Mengatur theme dan warna global aplikasi.",
    files: ["lib/main.dart", "lib/app/constant/color.dart", "lib/app/modules/*", "lib/app/routes/*", "pubspec.yaml"],
    learn: [
      "Memindahkan konfigurasi warna ke file constant.",
      "Menggunakan theme di `GetMaterialApp`.",
      "Membuat style aplikasi lebih konsisten.",
      "Menyiapkan pondasi light/dark theme."
    ],
    detail: "Theme global membuat tampilan aplikasi lebih konsisten. Daripada menyebar warna di banyak file, warna utama dan konfigurasi style sebaiknya dipusatkan agar mudah dirawat.",
    concept: ["ThemeData", "Constant color", "GetMaterialApp theme", "Design consistency"],
    snippet: `GetMaterialApp(
  theme: Light,
  debugShowCheckedModeBanner: false,
  title: "Application",
  initialRoute: AppPages.INITIAL,
  getPages: AppPages.routes,
);`,
    explanation: [
      "`theme: Light` menerapkan konfigurasi theme global.",
      "Constant color membuat warna tidak tersebar acak.",
      "Pola ini bisa dikembangkan menjadi dark mode."
    ],
    exercise: ["Buat `Dark` theme.", "Tambahkan tombol ganti theme.", "Simpan pilihan theme dengan GetStorage."],
    run: "flutter pub get\nflutter run"
  }
];

const tracks = [
  "Dart Core",
  "Flutter Basic",
  "Flutter Interaction",
  "Flutter Navigation",
  "UI Practice",
  "HTTP & API",
  "Mini Project",
  "Packages",
  "GetX",
  "GetX State",
  "GetX Navigation",
  "GetX Architecture",
  "GetX Storage",
  "GetX UI",
  "Study Case"
];

const state = {
  current: modules[0],
  query: "",
  mobileOpen: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markdownInline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function getFilteredModules() {
  const q = state.query.trim().toLowerCase();
  if (!q) return modules;
  return modules.filter((module) => {
    const haystack = [
      module.id,
      module.title,
      module.track,
      module.folder,
      module.goal,
      ...module.learn,
      ...module.concept
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function getCodeFiles(module) {
  const files = (window.CODE_SNAPSHOTS && window.CODE_SNAPSHOTS[module.folder]) || [];
  if (files.length) return files;
  return [{
    path: module.files[0] || "highlight.dart",
    language: getSnippetLanguage(module),
    purpose: "Snapshot source lengkap belum tersedia di code-data.js, jadi docs menampilkan highlight utama modul ini sebagai fallback.",
    source: module.snippet
  }];
}

function getPackageLinks(module) {
  return (window.PACKAGE_LINKS && window.PACKAGE_LINKS[module.folder]) || [];
}

function languageFromFile(file) {
  if (!file) return "text";
  return file.language || (file.path.endsWith(".yaml") ? "yaml" : file.path.endsWith(".dart") ? "dart" : "text");
}

function getSnippetLanguage(module) {
  const text = module.snippet.trim();
  if (text.startsWith("dev_dependencies:") || text.includes("flutter_launcher_icons:")) return "yaml";
  return "dart";
}

function renderSidebar() {
  const wrapper = $("#moduleList");
  const filtered = getFilteredModules();
  wrapper.innerHTML = tracks.map((track) => {
    const items = filtered.filter((module) => module.track === track);
    if (!items.length) return "";
    return `
      <section class="mb-6">
        <p class="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">${track}</p>
        <div class="grid gap-1">
          ${items.map((module) => `
            <button data-slug="${module.slug}" class="module-link ${module.slug === state.current.slug ? "active" : ""} group flex w-full items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">
              <span class="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-slate-500 group-hover:bg-cyan-400/10 group-hover:text-cyan-200">${module.id}</span>
              <span class="min-w-0">
                <span class="block truncate font-bold">${module.title}</span>
                <span class="mt-0.5 block truncate text-xs text-slate-600">${module.folder}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  $$(".module-link").forEach((button) => {
    button.addEventListener("click", () => {
      openModule(button.dataset.slug);
      closeMobileSidebar();
    });
  });
}

function renderToc() {
  const toc = $("#toc");
  const sections = [
    ["overview", "Overview"],
    ["target", "Target Belajar"],
    ["files", "File Penting"],
    ["packages", "Packages"],
    ["concepts", "Konsep"],
    ["code", "Highlight Kode"],
    ["source-files", "Source Files"],
    ["exercise", "Latihan"],
    ["run", "Cara Run"]
  ];
  toc.innerHTML = sections.map(([id, label]) => `
    <a href="#${id}" class="toc-link block border-l-2 border-white/10 py-1.5 pl-3 text-sm font-semibold text-slate-500 transition hover:border-cyan-300 hover:text-cyan-200">${label}</a>
  `).join("");
}

function renderPackageLinks(module) {
  const packages = getPackageLinks(module);
  if (!packages.length) {
    return `
      <section id="packages" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-semibold text-white">Package yang Dipakai</h2>
            <p class="mt-1 text-sm leading-6 text-slate-400">Modul ini tidak memakai package eksternal khusus selain bawaan Flutter/Dart.</p>
          </div>
          <span class="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-400">Core only</span>
        </div>
      </section>
    `;
  }

  return `
    <section id="packages" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-white">Package yang Dipakai</h2>
          <p class="mt-1 text-sm leading-6 text-slate-400">Link langsung ke pub.dev untuk dependency penting di modul ini.</p>
        </div>
        <span class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200">${packages.length} package</span>
      </div>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        ${packages.map((pkg) => `
          <a href="${pkg.url}" target="_blank" rel="noreferrer" class="group rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
            <span class="block font-bold text-slate-100 group-hover:text-cyan-200">${escapeHtml(pkg.name)}</span>
            <span class="mt-1 block text-sm font-semibold text-slate-500">${escapeHtml(pkg.version || "pub.dev")}</span>
            <span class="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">Buka package</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCodeFiles(module) {
  const files = getCodeFiles(module);
  if (!files.length) {
    return `
      <section id="source-files" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">Source Files Lengkap</h2>
        <p class="mt-3 text-sm leading-7 text-slate-400">Belum ada snapshot source file untuk modul ini.</p>
      </section>
    `;
  }

  return `
    <section id="source-files" class="lesson-card mt-6 overflow-hidden rounded-2xl">
      <div class="border-b border-white/10 px-5 py-4 sm:px-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-white">Source Files Lengkap</h2>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-slate-400">Semua file penting modul ini ditampilkan di sini. Pilih file, baca kegunaannya, lalu lihat kode lengkapnya.</p>
          </div>
          <span class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-200">${files.length} file</span>
        </div>
      </div>
      <div class="grid lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div class="docs-scrollbar max-h-[38rem] overflow-y-auto border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
          <div class="grid gap-2">
            ${files.map((file, index) => `
              <button data-file-index="${index}" class="code-tab ${index === 0 ? "active" : ""} rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">
                <span class="block truncate font-bold">${escapeHtml(file.path)}</span>
                <span class="mt-1 block text-xs font-semibold text-slate-600">${escapeHtml(file.language)}</span>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="min-w-0">
          ${files.map((file, index) => `
            <article class="source-panel" data-panel-index="${index}" ${index === 0 ? "" : "hidden"}>
              <div class="border-b border-white/10 bg-white/[0.025] px-5 py-4">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div class="min-w-0">
                    <p class="truncate docs-code text-sm font-bold text-cyan-200">${escapeHtml(file.path)}</p>
                    <p class="mt-1 text-sm leading-6 text-slate-400">${escapeHtml(file.purpose)}</p>
                  </div>
                  <button data-copy-file="${index}" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">Copy file</button>
                </div>
              </div>
              <pre class="docs-code max-h-[38rem] overflow-auto bg-[#050816] p-5 text-sm leading-7"><code class="language-${languageFromFile(file)}">${escapeHtml(file.source)}</code></pre>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function bindCodeFileTabs(module) {
  const files = getCodeFiles(module);
  $$(".code-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.fileIndex;
      $$(".code-tab").forEach((item) => item.classList.remove("active"));
      $$(".source-panel").forEach((panel) => panel.hidden = panel.dataset.panelIndex !== index);
      button.classList.add("active");
      const activePanel = $(`.source-panel[data-panel-index="${index}"]`);
      if (window.Prism && activePanel) Prism.highlightAllUnder(activePanel);
    });
  });

  $$("[data-copy-file]").forEach((button) => {
    button.addEventListener("click", async () => {
      const file = files[Number(button.dataset.copyFile)];
      if (!file) return;
      await navigator.clipboard.writeText(file.source);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Copy file"), 1100);
    });
  });
}

function renderContent() {
  const module = state.current;
  $("#breadcrumb").innerHTML = `
    <a href="./index.html" class="hover:text-cyan-200">Home</a>
    <span class="text-slate-700">/</span>
    <span>${module.track}</span>
    <span class="text-slate-700">/</span>
    <span class="font-bold text-slate-200">${module.id}. ${module.title}</span>
  `;

  $("#lesson").innerHTML = `
    <section id="overview" class="lesson-card rounded-2xl p-5 sm:p-7">
      <div class="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div class="mb-4 flex flex-wrap gap-2">
            <span class="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-200">${module.track}</span>
            <span class="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-200">${module.level}</span>
            <span class="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-bold text-slate-300">${module.folder}</span>
          </div>
          <h1 class="max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">${module.id}. ${module.title}</h1>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300">${module.detail}</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Goal</p>
          <p class="mt-1 max-w-xs text-sm font-bold leading-6 text-slate-200">${module.goal}</p>
        </div>
      </div>
    </section>

    <section id="target" class="mt-6 grid gap-4 lg:grid-cols-2">
      <div class="lesson-card rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">Target Belajar</h2>
        <ul class="mt-4 grid gap-3">
          ${module.learn.map((item) => `<li class="flex gap-3 text-sm leading-7 text-slate-300"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"></span><span>${markdownInline(item)}</span></li>`).join("")}
        </ul>
      </div>
      <div id="files" class="lesson-card rounded-2xl p-5 sm:p-6">
        <h2 class="text-xl font-semibold text-white">File Penting</h2>
        <div class="mt-4 grid gap-2">
          ${module.files.map((file) => `<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-bold text-slate-300"><span class="h-2 w-2 rounded-full bg-emerald-300"></span><code>${file}</code></div>`).join("")}
        </div>
      </div>
    </section>

    <section id="concepts" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Konsep Kunci</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        ${module.concept.map((item) => `<span class="rounded-lg border border-cyan-400/15 bg-cyan-400/10 px-3 py-1.5 text-sm font-bold text-cyan-100">${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>

    ${renderPackageLinks(module)}

    <section id="code" class="lesson-card mt-6 overflow-hidden rounded-2xl">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.025] px-5 py-4">
        <div>
          <h2 class="text-xl font-semibold text-white">Highlight Kode</h2>
          <p class="mt-1 text-sm text-slate-400">Potongan kode inti yang menjelaskan konsep utama modul.</p>
        </div>
        <button id="copyCode" class="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200">Copy</button>
      </div>
      <pre class="docs-code overflow-x-auto bg-[#050816] p-5 text-sm leading-7"><code class="language-${getSnippetLanguage(module)}">${escapeHtml(module.snippet)}</code></pre>
    </section>

    <section class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Keterangan Kode</h2>
      <ul class="mt-4 grid gap-3">
        ${module.explanation.map((item) => `<li class="flex gap-3 text-sm leading-7 text-slate-300"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-300"></span><span>${markdownInline(item)}</span></li>`).join("")}
      </ul>
    </section>

    ${renderCodeFiles(module)}

    <section id="exercise" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Latihan Lanjutan</h2>
      <div class="mt-4 grid gap-3">
        ${module.exercise.map((item, index) => `
          <div class="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-300/15 text-sm font-bold text-amber-200">${index + 1}</span>
            <p class="text-sm leading-7 text-slate-300">${markdownInline(item)}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section id="run" class="lesson-card mt-6 rounded-2xl p-5 sm:p-6">
      <h2 class="text-xl font-semibold text-white">Cara Menjalankan</h2>
      <pre class="docs-code mt-4 overflow-x-auto rounded-xl bg-[#050816] p-4 text-sm leading-7"><code class="language-bash">cd ${module.folder}
${escapeHtml(module.run)}</code></pre>
    </section>

    <footer class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-sm font-semibold text-slate-500">
      <span>Created by <span class="text-slate-300">Naufal Nabil</span></span>
      <span>© 2026 Naufal Nabil</span>
    </footer>
  `;

  $("#copyCode").addEventListener("click", async () => {
    await navigator.clipboard.writeText(module.snippet);
    $("#copyCode").textContent = "Copied";
    setTimeout(() => ($("#copyCode").textContent = "Copy"), 1100);
  });

  bindCodeFileTabs(module);
  renderToc();
  updatePrevNext();
  if (window.Prism) Prism.highlightAllUnder($("#lesson"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePrevNext() {
  const index = modules.findIndex((module) => module.slug === state.current.slug);
  const prev = modules[index - 1];
  const next = modules[index + 1];
  $("#prevModule").disabled = !prev;
  $("#nextModule").disabled = !next;
  $("#prevModule").textContent = prev ? `← ${prev.id}. ${prev.title}` : "Awal materi";
  $("#nextModule").textContent = next ? `${next.id}. ${next.title} →` : "Selesai";
}

function openModule(slug, push = true) {
  const module = modules.find((item) => item.slug === slug) || modules[0];
  state.current = module;
  if (push) {
    history.replaceState(null, "", `#${module.slug}`);
  }
  renderSidebar();
  renderContent();
}

function openFromHash() {
  const slug = location.hash.replace("#", "");
  openModule(slug || modules[0].slug, false);
}

function openMobileSidebar() {
  state.mobileOpen = true;
  $("#sidebar").classList.remove("-translate-x-full");
  $("#overlay").classList.remove("hidden");
}

function closeMobileSidebar() {
  state.mobileOpen = false;
  $("#sidebar").classList.add("-translate-x-full");
  $("#overlay").classList.add("hidden");
}

function bindEvents() {
  const search = $("#search");
  if (search) search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSidebar();
  });

  const menuButton = $("#menuButton");
  const closeSidebarButton = $("#closeSidebar");
  const overlay = $("#overlay");
  if (menuButton) menuButton.addEventListener("click", openMobileSidebar);
  if (closeSidebarButton) closeSidebarButton.addEventListener("click", closeMobileSidebar);
  if (overlay) overlay.addEventListener("click", closeMobileSidebar);

  $("#prevModule").addEventListener("click", () => {
    const index = modules.findIndex((module) => module.slug === state.current.slug);
    if (modules[index - 1]) openModule(modules[index - 1].slug);
  });

  $("#nextModule").addEventListener("click", () => {
    const index = modules.findIndex((module) => module.slug === state.current.slug);
    if (modules[index + 1]) openModule(modules[index + 1].slug);
  });

  window.addEventListener("hashchange", openFromHash);
}

function renderStats() {
  $("#moduleCount").textContent = modules.length;
  $("#trackCount").textContent = tracks.length;
}

bindEvents();
renderStats();
openFromHash();
