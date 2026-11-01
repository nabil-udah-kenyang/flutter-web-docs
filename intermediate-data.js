// Dibuat dari /home/nabil/Documents/flutter-intermediete oleh tools/import-intermediate-content.mjs.
window.INTERMEDIATE_MODULES = [
  {
    "id": "I01",
    "folder": "01_mediaquery",
    "slug": "media-query-responsive",
    "title": "MediaQuery & Ukuran Layar",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Membaca ukuran layar, safe area, dan padding perangkat untuk membuat UI yang responsif.",
    "learn": [
      "Membaca `size.width` dan `size.height`.",
      "Menggunakan padding safe area perangkat.",
      "Membuat ukuran widget proporsional terhadap layar."
    ],
    "detail": "MediaQuery memberi informasi lingkungan layar kepada widget. Materi ini memakai lebar, tinggi, dan padding perangkat untuk menunjukkan bahwa ukuran UI tidak seharusnya selalu hard-code.",
    "concept": [
      "MediaQuery.of",
      "Size",
      "Safe area padding",
      "Responsive dimension"
    ],
    "explanation": [
      "`MediaQuery.of(context).size` memberi ukuran layar saat ini.",
      "Gunakan ukuran relatif dengan hati-hati; layout widget seperti `Expanded` sering lebih aman untuk area yang fleksibel."
    ],
    "exercise": [
      "Buat card yang lebarnya 80% layar.",
      "Tambahkan jarak atas dari `MediaQuery.padding.top`."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    //INFO: Membuat container dengan ukuran fleksibel berdasarkan lebar piksel device yang berbeda beda(Responsif)\n    //MediaQuery digunakan untuk mengetahui ukuran height / width dari device nya\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    //MediaQuery juga bisa dipakai untuk mengambil padding atas/bawah kanan/kiri dan banyak lainya\n    double paddingTop = MediaQuery.of(context).padding.top;\n    return Scaffold(\n      body: Container(\n        margin: EdgeInsets.only(top: paddingTop),\n        height: heightDevice,\n        width: widthDevice / 2,\n        color: Colors.red,\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I02",
    "folder": "02_flexible",
    "slug": "flexible-layout",
    "title": "Flexible Layout",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Membagi ruang `Column` atau `Row` secara proporsional menggunakan Flexible.",
    "learn": [
      "Membagi ruang memakai `flex`.",
      "Membedakan ukuran absolut dan ruang fleksibel.",
      "Mencegah overflow pada layout vertikal."
    ],
    "detail": "`Flexible` membiarkan child berbagi ruang dari parent yang terbatas. Ini cocok untuk layout yang harus menyesuaikan tinggi dan lebar berbagai perangkat.",
    "concept": [
      "Flexible",
      "flex factor",
      "Column",
      "layout constraint"
    ],
    "explanation": [
      "Nilai `flex` adalah perbandingan ruang antar-child.",
      "Parent seperti `Column` harus memiliki constraint yang jelas agar pembagian ruang bisa dihitung."
    ],
    "exercise": [
      "Ubah perbandingan warna menjadi 2:5:3.",
      "Coba pindahkan Flexible ke dalam Row."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    //harus membuat appBar terpisah untuk mengetahui tinggi body dari aplikasi\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //tinggi body adalah = tinggi device dikurangi tinggi appBar\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //maka dengan mudah kita mengetahui besar layar dan luas body dengan memanggil variabel\n      body: Column(\n        //sebenarnya kita juga bisa membuat seperti command dibawah tanpa MediaQuery hanya dengan widget Flexible\n        //dengan menggunakan flex dia akan secara otomatis memberikan ukuran sesuai proporsi value dari \"flex\"\n        children: [\n          Flexible(flex: 7, child: Container(color: Colors.red)),\n          Flexible(flex: 3, child: Container(color: Colors.amber)),\n          Flexible(flex: 1, child: Container(color: Colors.green)),\n        ],\n      ),\n      // body: Column(\n      //   children: [\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.5,\n      //       color: Colors.red,\n      //     ),\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.3,\n      //       color: Colors.amber,\n      //     ),\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.2,\n      //       color: Colors.green,\n      //     ),\n      //   ],\n      // ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I03",
    "folder": "03_expanded",
    "slug": "expanded-fill-space",
    "title": "Expanded & Sisa Ruang",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Mengisi sisa ruang yang tersedia tanpa menghitung ukuran layar secara manual.",
    "learn": [
      "Memahami perbedaan `Expanded` dan `Flexible`.",
      "Mengisi area tersisa dalam Column.",
      "Menghindari tinggi hard-code yang rapuh."
    ],
    "detail": "`Expanded` adalah pilihan tepat saat sebuah child harus mengambil semua ruang tersisa setelah widget lain diukur.",
    "concept": [
      "Expanded",
      "remaining space",
      "Column",
      "constraints"
    ],
    "explanation": [
      "Expanded memaksa child mengisi ruang tersedia.",
      "Gunakan `flex` pada Expanded ketika ada lebih dari satu child yang berbagi sisa ruang."
    ],
    "exercise": [
      "Tambahkan dua Expanded dengan flex berbeda.",
      "Bandingkan hasilnya dengan Flexible."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    //harus membuat appBar terpisah untuk mengetahui tinggi body dari aplikasi\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //tinggi body adalah = tinggi device dikurangi tinggi appBar\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //maka dengan mudah kita mengetahui besar layar dan luas body dengan memanggil variabel\n      body: Column(\n        children: [\n          Container(\n            color: Colors.red,\n            width: widthDevice * 0.5,\n            height: heightBody * 0.3,\n          ),\n          Container(\n            color: Colors.amber,\n            width: widthDevice * 0.5,\n            height: heightBody * 0.2,\n          ),\n          //INFO: Penggunaan Expanded anggap saja sebagai pengambil sisa dari ukuran yang susah ditentukan\n          Expanded(\n            child: Container(color: Colors.green, width: widthDevice * 0.5),\n          ),\n        ],\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I04",
    "folder": "04_fitted_box",
    "slug": "fitted-box-overflow",
    "title": "FittedBox & Anti Overflow",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Menskalakan child agar tetap muat di dalam batas parent.",
    "learn": [
      "Memahami overflow teks/widget.",
      "Menggunakan `FittedBox` untuk scaling.",
      "Memilih kasus penggunaan yang tepat."
    ],
    "detail": "FittedBox menghitung skala child agar cocok dengan ruang yang tersedia. Ia berguna untuk logo atau konten visual, tetapi bukan pengganti layout responsif pada semua kasus.",
    "concept": [
      "FittedBox",
      "BoxFit",
      "scale down",
      "overflow"
    ],
    "explanation": [
      "FittedBox menskalakan child, bukan mengubah constraint parent.",
      "Untuk teks panjang, pertimbangkan wrapping atau ellipsis terlebih dahulu."
    ],
    "exercise": [
      "Ganti child menjadi icon besar.",
      "Coba `fit: BoxFit.contain` dan amati perbedaannya."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Container(\n        width: 200,\n        height: 100,\n        color: Colors.green,\n        child: Center(\n          //dengan FittedBox dia akan secara otomatis membuat ukuran dari isi konten dalam container mengecil apabila value nya menjadi overflow\n          child: FittedBox(\n            child: Text(\n              \"Haalooooooooooo\",\n              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 90),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I05",
    "folder": "05_wrap",
    "slug": "wrap-responsive-grid",
    "title": "Wrap Responsive Grid",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Menyusun banyak child yang otomatis pindah baris ketika ruang horizontal habis.",
    "learn": [
      "Menggunakan Wrap sebagai alternatif Row.",
      "Mengatur arah, spacing, dan runSpacing.",
      "Mencegah overflow daftar chip atau card kecil."
    ],
    "detail": "`Wrap` mengalirkan child ke baris atau kolom berikutnya ketika tidak cukup ruang. Materi ini cocok sebagai fondasi grid ringan sebelum memakai GridView.",
    "concept": [
      "Wrap",
      "spacing",
      "runSpacing",
      "Axis"
    ],
    "explanation": [
      "Wrap default mengalir secara horizontal lalu membuat baris baru.",
      "Gunakan `spacing` dan `runSpacing` agar jarak antaritem konsisten."
    ],
    "exercise": [
      "Tambahkan spacing dan runSpacing.",
      "Ubah arah menjadi vertikal lalu amati alirannya."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //NOTE: dengan wrap ini dapat mengatasi overflow widget dengan otomatis menurunkan widget kebawah apabila tidak ada lagi ruang di sebelah kanan\n      //by Default directionya secara horizontal (kanan -> kiri), namun bisa di ubah menjadi vertikan (atas -> bawah)\n      body: Wrap(\n        //gunakan ini untuk mengubah direction(arah)\n        // direction: Axis.vertical,\n        children: [\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n        ],\n      ),\n    );\n  }\n}\n\nclass KotakKuning extends StatelessWidget {\n  const KotakKuning({super.key, required this.widthDevice});\n\n  final double widthDevice;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      margin: EdgeInsets.all(10),\n      width: widthDevice * 0.15,\n      height: 35,\n      color: Colors.amber,\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I06",
    "folder": "06_get_width_height",
    "slug": "getx-screen-size",
    "title": "GetX Width & Height",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Mengakses ukuran layar dan safe area melalui helper GetX.",
    "learn": [
      "Menggunakan `Get.width` dan `Get.height`.",
      "Menggunakan extension MediaQuery dari GetX.",
      "Membandingkan helper GetX dengan MediaQuery."
    ],
    "detail": "GetX menyediakan shortcut untuk ukuran layar. Ini nyaman saat context tidak diperlukan, tetapi widget layout seperti Flexible dan LayoutBuilder tetap penting untuk layout yang benar-benar adaptif.",
    "concept": [
      "Get.width",
      "Get.height",
      "context.mediaQueryPadding",
      "GetX extensions"
    ],
    "explanation": [
      "Get.width membaca ukuran layar global saat ini.",
      "Untuk ukuran parent tertentu, gunakan LayoutBuilder, bukan ukuran layar global."
    ],
    "exercise": [
      "Buat card dengan lebar `Get.width * .8`.",
      "Bandingkan hasil Get.width dengan MediaQuery."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Wrap(\n        //gunakan ini untuk mengubah direction(arah)\n        // direction: Axis.vertical,\n        children: [\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n        ],\n      ),\n    );\n  }\n}\n\nclass KotakKuning extends StatelessWidget {\n  const KotakKuning({super.key, required this.widthDevice});\n\n  final double widthDevice;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      margin: EdgeInsets.all(10),\n      width: Get.width * 0.15,\n      height: 35,\n      color: Colors.amber,\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I07",
    "folder": "07_layout_builder",
    "slug": "layout-builder-constraints",
    "title": "LayoutBuilder & Constraints",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Membangun UI berdasarkan ruang parent, bukan hanya ukuran perangkat.",
    "learn": [
      "Membaca `BoxConstraints`.",
      "Menggunakan maxWidth dan maxHeight dari parent.",
      "Membedakan LayoutBuilder dan MediaQuery."
    ],
    "detail": "LayoutBuilder memberi ukuran ruang yang benar-benar diberikan parent kepada widget. Ini sangat berguna untuk card, panel, atau layout yang bisa dipakai ulang di area berbeda.",
    "concept": [
      "LayoutBuilder",
      "BoxConstraints",
      "maxWidth",
      "maxHeight"
    ],
    "explanation": [
      "Constraints berasal dari parent dan dapat berbeda dari ukuran layar.",
      "Gunakan breakpoint berdasarkan `constraints.maxWidth` saat layout card berubah."
    ],
    "exercise": [
      "Tampilkan dua kolom bila maxWidth lebih dari 600.",
      "Buat child yang lebarnya 50% parent."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //INFO: Ini cara mendapatkan nilai dari tingi body aplikasi dengan GetX\n    double heightBody =\n        context.height - myAppBar().preferredSize.height - paddingTop;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Container(\n        width: Get.width * 0.5,\n        height: heightBody * 0.3,\n        color: Colors.amber,\n        child: LayoutBuilder(\n          builder: (context, bebas) {\n            //ini digunakan untuk mengambil heigh dan width dari parrent widget alias container kuning\n            double widthKuning = bebas.maxWidth;\n            double heightKuning = bebas.maxHeight;\n            return Stack(\n              children: [\n                Container(\n                  //setelah itu tinggal dipanggil dan di sesuaikan ukuran nya\n                  width: widthKuning * 0.5,\n                  height: heightKuning * 0.5,\n                  color: Colors.green,\n                ),\n              ],\n            );\n          },\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I08",
    "folder": "08_constrained_box",
    "slug": "constrained-box",
    "title": "ConstrainedBox & Batas Ukuran",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Memberi batas minimum dan maksimum ukuran pada child.",
    "learn": [
      "Menentukan min/max width dan height.",
      "Memahami constraint parent-child.",
      "Menjaga ukuran card tetap masuk akal."
    ],
    "detail": "ConstrainedBox menetapkan aturan ukuran yang harus dipatuhi child. Ia membantu menjaga komponen tetap proporsional ketika konten atau layar berubah.",
    "concept": [
      "ConstrainedBox",
      "BoxConstraints",
      "minWidth",
      "maxWidth"
    ],
    "explanation": [
      "Constraint parent dapat tetap membatasi ConstrainedBox.",
      "Gunakan ukuran maksimum untuk mencegah konten membentang berlebihan di desktop."
    ],
    "exercise": [
      "Buat card dengan maxWidth 420.",
      "Coba child dengan ukuran lebih kecil dan lebih besar dari constraint."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //INFO: Ini cara mendapatkan nilai dari tingi body aplikasi dengan GetX\n    double heightBody =\n        context.height - myAppBar().preferredSize.height - paddingTop;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Column(\n        children: [\n          ConstrainedBox(\n            //pada ConstrainedBox kita dapat membuat aturan ukuran untuk di patuhi oleh child widget\n            constraints: BoxConstraints(\n              minWidth: 300,\n              minHeight: 100,\n              maxHeight: 150,\n              maxWidth: 350,\n            ),\n            child: Container(\n              //ukuran height/width dalam container ini tidak akan bisa kurang ataupun melewati dari min/max yang ada pada ConstrainedBox\n              height: 1000,\n              width: 500,\n              color: Colors.red,\n              child: Text(\n                'Haloooo',\n                style: TextStyle(\n                  color: Colors.white,\n                  fontWeight: FontWeight.bold,\n                  fontSize: 30,\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I09",
    "folder": "09_orientation_builder",
    "slug": "orientation-builder",
    "title": "OrientationBuilder",
    "track": "Responsive Layout",
    "stage": "Intermediate",
    "level": "Intermediate",
    "goal": "Mengubah struktur UI untuk orientasi portrait dan landscape.",
    "learn": [
      "Mendeteksi `Orientation`.",
      "Membuat dua layout berdasarkan orientasi.",
      "Menguji perubahan ketika perangkat diputar."
    ],
    "detail": "OrientationBuilder memberi informasi portrait atau landscape di area widget. Gunakan ketika struktur layout memang berbeda, bukan hanya untuk mengubah beberapa ukuran kecil.",
    "concept": [
      "OrientationBuilder",
      "portrait",
      "landscape",
      "adaptive layout"
    ],
    "explanation": [
      "Builder dipanggil ulang ketika orientasi berubah.",
      "LayoutBuilder tetap lebih tepat bila keputusan didasarkan pada lebar parent."
    ],
    "exercise": [
      "Buat GridView 2 kolom portrait dan 4 kolom landscape.",
      "Tampilkan label orientasi aktif."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    //INFO : ini cara membuat adaptive layout dengan memanfaatkan orientation (potrait / landscape )\n    // dengan OrientationBuilder kita dapat membuat 2 sistem layout secara bersamaan\n    return OrientationBuilder(\n      builder: (context, orientation) {\n        if (orientation == Orientation.portrait) {\n          return Scaffold(\n            appBar: AppBar(\n              title: Text('Home', style: TextStyle(color: Colors.white)),\n              backgroundColor: Colors.blue,\n              centerTitle: true,\n            ),\n            body: Center(\n              child: Container(width: 300, height: 300, color: Colors.amber),\n            ),\n          );\n        } else {\n          return Scaffold(\n            appBar: AppBar(\n              title: Text('Home', style: TextStyle(color: Colors.white)),\n              backgroundColor: Colors.blue,\n              centerTitle: true,\n            ),\n            body: Center(\n              child: Container(width: 300, height: 100, color: Colors.red),\n            ),\n          );\n        }\n      },\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I10",
    "folder": "10_animated_container",
    "slug": "animated-container",
    "title": "AnimatedContainer",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Membuat animasi implicit ketika ukuran, warna, atau dekorasi berubah.",
    "learn": [
      "Menggunakan `AnimatedContainer`.",
      "Mengatur duration dan curve.",
      "Mengubah state reaktif dengan GetX."
    ],
    "detail": "AnimatedContainer menganimasikan perubahan properti tanpa AnimationController manual. Ini titik masuk yang baik untuk micro-interaction Flutter.",
    "concept": [
      "AnimatedContainer",
      "implicit animation",
      "duration",
      "curve",
      "Obx"
    ],
    "explanation": [
      "Setiap perubahan properti animatable akan diinterpolasi otomatis.",
      "Pilih curve sesuai karakter gerakan, lalu jaga durasi tetap singkat untuk interaksi."
    ],
    "exercise": [
      "Tambahkan perubahan border radius.",
      "Ubah durasi menjadi 300 ms lalu bandingkan feel-nya."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Obx(\n            () => AnimatedContainer(\n              //NOTE: Curves digunakan untuk animasi template\n              curve: Curves.fastLinearToSlowEaseIn,\n              duration: Duration(seconds: 2),\n              width: controller.selected.isFalse ? 300 : 100,\n              height: controller.selected.isFalse ? 300 : 100,\n              color: controller.selected.isFalse\n                  ? Colors.cyan\n                  : Colors.redAccent,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I11",
    "folder": "11_animated_alignment",
    "slug": "animated-align",
    "title": "AnimatedAlign",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Menganimasikan perpindahan posisi child di dalam parent.",
    "learn": [
      "Menggunakan AnimatedAlign.",
      "Mengubah Alignment berdasarkan state.",
      "Memilih curve gerakan."
    ],
    "detail": "AnimatedAlign menggerakkan satu child dari satu posisi alignment ke posisi lain. Ini lebih sederhana daripada Stack ketika perpindahan hanya mengikuti area parent.",
    "concept": [
      "AnimatedAlign",
      "Alignment",
      "implicit animation",
      "curve"
    ],
    "explanation": [
      "Alignment menentukan titik lokasi child di dalam parent.",
      "Untuk koordinat yang lebih bebas dalam Stack, gunakan AnimatedPositioned."
    ],
    "exercise": [
      "Tambahkan empat target alignment.",
      "Ubah child menjadi Icon dan animasikan ukurannya bersamaan."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      //NOTE: sama aja kayak container animted hanya ini untuk posisi\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Obx(\n            () => Container(\n              alignment: Alignment.center,\n              width: 300,\n              height: 300,\n              color: Colors.cyan,\n              child: AnimatedAlign(\n                duration: Duration(seconds: 1),\n                curve: Curves.easeOutCirc,\n                child: Text(\"Halo\"),\n                alignment: controller.selected.isFalse\n                    ? Alignment.topLeft\n                    : Alignment.center,\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I12",
    "folder": "12_animated_position",
    "slug": "animated-positioned",
    "title": "AnimatedPositioned",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Menganimasikan posisi detail child di dalam Stack.",
    "learn": [
      "Menggunakan Stack dan Positioned.",
      "Menganimasikan top/right/left/bottom.",
      "Mengontrol perpindahan berbasis state."
    ],
    "detail": "AnimatedPositioned cocok untuk elemen yang perlu berpindah pada koordinat tertentu. Widget ini harus berada di dalam Stack.",
    "concept": [
      "Stack",
      "AnimatedPositioned",
      "top",
      "right",
      "state"
    ],
    "explanation": [
      "Perubahan nilai posisi akan dianimasikan sepanjang duration.",
      "Gunakan ukuran parent yang jelas agar perhitungan posisi bisa diprediksi."
    ],
    "exercise": [
      "Gerakkan kotak dalam diagonal.",
      "Tambahkan tombol reset ke posisi awal."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      //INFO: Dengan widget position memiliki keunggulan dimana dapat memposisikan sebuah widget dengan lebih detail\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Container(\n            width: 300,\n            height: 500,\n            color: Colors.purple,\n            child: Stack(\n              children: [\n                Obx(\n                  () => AnimatedPositioned(\n                    curve: Curves.easeInOutCirc,\n                    top: 0,\n                    right: controller.selected.isFalse ? 0 : 250,\n                    child: Container(\n                      width: 50,\n                      height: 50,\n                      color: Colors.yellow,\n                    ),\n                    duration: Duration(milliseconds: 500),\n                  ),\n                ),\n              ],\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I13",
    "folder": "13_animated_builder",
    "slug": "animated-builder",
    "title": "AnimatedBuilder",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Membangun animasi eksplisit dengan AnimationController secara efisien.",
    "learn": [
      "Mendengarkan nilai Animation.",
      "Membatasi rebuild lewat parameter child.",
      "Mengubah nilai 0–1 menjadi posisi UI."
    ],
    "detail": "AnimatedBuilder memberi kontrol lebih besar untuk animasi khusus, sekaligus memungkinkan widget statis dikirim sebagai `child` agar tidak dibangun ulang setiap frame.",
    "concept": [
      "AnimatedBuilder",
      "AnimationController",
      "animation value",
      "child optimization"
    ],
    "explanation": [
      "Animation menghasilkan nilai yang berubah sepanjang waktu.",
      "Letakkan bagian UI yang tidak berubah pada parameter `child` agar builder lebih ringan."
    ],
    "exercise": [
      "Ubah rumus menjadi animasi vertikal.",
      "Tambahkan RotatedBox berdasarkan nilai animation."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: Center(\n        child: Container(\n          width: 300,\n          height: 500,\n          color: Colors.purple,\n          child: Stack(\n            children: [\n              AnimatedBuilder(\n                child: Container(width: 50, height: 50, color: Colors.yellow),\n                animation: controller.animationC,\n                builder: (context, widget) {\n                  // value 0 -> 1 => convert (0 -> 1 -> 0)\n                  return Positioned(\n                    top: 0,\n                    //ini adalah rumus untuk mengconvert dari 0 ke satu lalu kembali ke 0 (posisi)\n                    right:\n                        2 *\n                        (0.5 - (0.5 - controller.animationC.value).abs()) *\n                        250,\n                    child: widget!,\n                  );\n                },\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I14",
    "folder": "14_hero_navigasi",
    "slug": "hero-navigation",
    "title": "Hero Navigation",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Membuat transisi shared element antarhalaman dengan Hero.",
    "learn": [
      "Memberi Hero tag unik.",
      "Menghubungkan Hero di dua route.",
      "Memadukan Hero dengan GetX navigation."
    ],
    "detail": "Hero membuat Flutter menerbangkan elemen yang memiliki tag sama dari halaman asal ke tujuan. Efek ini efektif untuk gambar profil, produk, atau galeri.",
    "concept": [
      "Hero",
      "tag",
      "Get.toNamed",
      "shared element transition"
    ],
    "explanation": [
      "Tag yang sama menghubungkan dua Hero pada route berbeda.",
      "Setiap Hero yang muncul bersamaan wajib memiliki tag unik."
    ],
    "exercise": [
      "Buat detail gambar dengan tag dinamis.",
      "Tambahkan Hero pada judul produk."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/modules/profile/bindings/profile_binding.dart",
      "lib/app/modules/profile/controllers/profile_controller.dart",
      "lib/app/modules/profile/views/profile_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:hero_navigasi/app/routes/app_pages.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView'),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Center(\n        child: GestureDetector(\n          onTap: () => Get.toNamed(Routes.PROFILE),\n          //NOTE: Dengan Hero navigasi akan terasa lebih smooth seacar default\n          child: Hero(\n            tag: \"tag1\",\n            child: ClipOval(\n              child: Container(\n                width: 200,\n                height: 200,\n                child: Image.network(\n                  \"https://picsum.photos/200/300\",\n                  fit: BoxFit.cover,\n                ),\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I15",
    "folder": "15_widget_clip",
    "slug": "clip-widgets",
    "title": "Clip Widgets & Typography",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Memotong tampilan widget menjadi bentuk oval dan rounded rectangle.",
    "learn": [
      "Menggunakan ClipOval.",
      "Menggunakan ClipRRect.",
      "Menerapkan Google Fonts pada teks."
    ],
    "detail": "Clip widgets membantu membatasi area render child. Materi ini mempraktikkan avatar bulat dan card dengan sudut membulat serta penggunaan typography eksternal.",
    "concept": [
      "ClipOval",
      "ClipRRect",
      "BorderRadius",
      "Google Fonts"
    ],
    "explanation": [
      "ClipOval cocok untuk avatar atau elemen bulat.",
      "ClipRRect memotong child berdasarkan BorderRadius yang disediakan."
    ],
    "exercise": [
      "Buat avatar dari Image.network.",
      "Coba radius berbeda untuk masing-masing sudut."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:google_fonts/google_fonts.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n      ),\n      body: Row(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          Column(\n            children: [\n              SizedBox(height: 20),\n              //NOTE:Clip digunakan untuk memotong\n              //INFO:ClipOval digunakan untuk membuat widget didalamnya memiliki radius templat FULL\n              Text(\n                \"ClipOval\",\n                //NOTE:Ini cara penggunaan Google Fonts\n                style: GoogleFonts.manrope(\n                  fontSize: 20,\n                  fontWeight: FontWeight.w800,\n                ),\n              ),\n              ClipOval(\n                child: Container(\n                  height: 150,\n                  width: 150,\n                  color: Colors.green[300],\n                  child: FlutterLogo(size: 300),\n                ),\n              ),\n\n              SizedBox(height: 20),\n\n              //INFO:ClipRRect digunakan untuk mendapatkan \"Border radius\", alias lebi mudah di kustomisasi radiusnya\n              //ClipRRect => clip radius rectangle\n              Text(\"CliprRect\", style: TextStyle(fontSize: 20)),\n              ClipRRect(\n                borderRadius: BorderRadiusGeometry.circular(20),\n                child: Container(\n                  height: 150,\n                  width: 150,\n                  color: Colors.green[300],\n                  child: FlutterLogo(size: 300),\n                ),\n              ),\n            ],\n          ),\n        ],\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I16",
    "folder": "16_widget_carousel_slider",
    "slug": "carousel-slider",
    "title": "Carousel Slider",
    "track": "Motion & Navigation",
    "stage": "Intermediate",
    "level": "Intermediate+",
    "goal": "Membuat carousel dengan package dan mengatur perilaku autoplay.",
    "learn": [
      "Menambahkan carousel_slider.",
      "Menyetel autoplay dan interval.",
      "Membuat item slider dari List."
    ],
    "detail": "Carousel Slider menunjukkan cara mengintegrasikan package Flutter dan mengubah daftar data menjadi UI horizontal yang bisa digeser.",
    "concept": [
      "carousel_slider",
      "CarouselOptions",
      "autoplay",
      "map"
    ],
    "explanation": [
      "`CarouselOptions` mengatur tinggi, interval, dan efek slide.",
      "Bangun item dari data agar carousel mudah dipakai ulang pada konten nyata."
    ],
    "exercise": [
      "Ganti daftar angka menjadi model banner.",
      "Tambahkan indicator posisi slider."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:carousel_slider/carousel_slider.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n      ),\n      body: Column(\n        children: [\n          SizedBox(height: 20),\n          CarouselSlider(\n            options: CarouselOptions(\n              height: 200,\n              autoPlay: true,\n              enableInfiniteScroll: false,\n              autoPlayInterval: Duration(seconds: 3),\n              enlargeCenterPage: true,\n              //ini untuk mengatur sebarapa zoom center\n              enlargeFactor: 0.2,\n              //pakai ini jika ingin membuat carousel vertikal\n              // scrollDirection: Axis.vertical,\n              autoPlayCurve: Curves.easeInQuart,\n            ),\n            items: [1, 2, 3, 4, 5].map((i) {\n              return Builder(\n                builder: (BuildContext context) {\n                  return Container(\n                    width: MediaQuery.of(context).size.width,\n                    margin: EdgeInsets.symmetric(horizontal: 5.0),\n                    decoration: BoxDecoration(\n                      color: Colors.grey[500],\n                      borderRadius: BorderRadius.circular(15),\n                    ),\n                    child: Center(\n                      child: Text(\n                        'text $i',\n                        style: TextStyle(\n                          fontSize: 30,\n                          fontWeight: FontWeight.bold,\n                        ),\n                      ),\n                    ),\n                  );\n                },\n              );\n            }).toList(),\n          ),\n        ],\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I17",
    "folder": "17_belajar_firebase",
    "slug": "firebase-firestore-basics",
    "title": "Firebase & Cloud Firestore",
    "track": "Cloud Backend",
    "stage": "Advanced",
    "level": "Advanced",
    "goal": "Menginisialisasi Firebase dan membaca koleksi Cloud Firestore dari Flutter.",
    "learn": [
      "Menggunakan FlutterFire CLI.",
      "Menginisialisasi Firebase sebelum runApp.",
      "Membaca collection Firestore dengan FutureBuilder."
    ],
    "detail": "Modul ini menghubungkan Flutter ke Firebase dan mengambil data satu kali dari Cloud Firestore. Ia menjadi fondasi sebelum masuk ke auth dan CRUD realtime.",
    "concept": [
      "Firebase.initializeApp",
      "FlutterFire CLI",
      "Cloud Firestore",
      "FutureBuilder",
      "QuerySnapshot"
    ],
    "explanation": [
      "Binding harus siap sebelum Firebase diinisialisasi.",
      "`get()` mengambil snapshot sekali; gunakan stream saat UI harus mengikuti perubahan realtime."
    ],
    "exercise": [
      "Tambahkan dokumen buku baru dari Firebase Console.",
      "Tampilkan loading dan error state pada FutureBuilder."
    ],
    "files": [
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/firebase_options.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView'),\n        centerTitle: true,\n      ),\n      body: FutureBuilder(\n        future: controller.getRakData(),\n        builder: (context, snapshot) {\n          if (snapshot.connectionState == ConnectionState.done) {\n            if (snapshot.hasData) {\n              return Center(\n                child: Column(\n                  mainAxisAlignment: MainAxisAlignment.center,\n                  children: [\n                    for (var doc in snapshot.data!.docs) Text(doc[\"penulis\"]),\n                  ],\n                ),\n              );\n            }\n          }\n\n          return const Center(child: CircularProgressIndicator());\n        },\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I18",
    "folder": "18_praktik_firebase_CRUD",
    "slug": "firebase-auth-crud",
    "title": "Firebase Auth & Firestore CRUD",
    "track": "Cloud Backend",
    "stage": "Advanced",
    "level": "Advanced",
    "goal": "Membangun autentikasi email, verifikasi, reset password, dan CRUD produk dengan Firebase.",
    "learn": [
      "Memantau auth state secara realtime.",
      "Sign in, sign up, email verification, dan reset password.",
      "Membuat, membaca, mengubah, dan menghapus data Firestore."
    ],
    "detail": "Project ini menggabungkan Firebase Authentication, Cloud Firestore, GetX controller, routing, dan form lifecycle menjadi aplikasi CRUD dengan alur login lengkap.",
    "concept": [
      "FirebaseAuth",
      "authStateChanges",
      "Firestore snapshots",
      "CRUD",
      "TextEditingController lifecycle"
    ],
    "explanation": [
      "Auth state menentukan route awal aplikasi.",
      "Controller input harus dispose pada `onClose` agar resource tidak bocor.",
      "Firestore `snapshots()` mengalirkan perubahan data secara realtime."
    ],
    "exercise": [
      "Tambahkan validasi nama dan harga produk.",
      "Buat loading state saat tombol form dikirim.",
      "Atur Firestore Security Rules sebelum memakai data nyata."
    ],
    "files": [
      "lib/app/controllers/auth_controller.dart",
      "lib/app/modules/add_product/bindings/add_product_binding.dart",
      "lib/app/modules/add_product/controllers/add_product_controller.dart",
      "lib/app/modules/add_product/views/add_product_view.dart",
      "lib/app/modules/edit_product/bindings/edit_product_binding.dart",
      "lib/app/modules/edit_product/controllers/edit_product_controller.dart",
      "lib/app/modules/edit_product/views/edit_product_view.dart",
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/modules/login/bindings/login_binding.dart",
      "lib/app/modules/login/controllers/login_controller.dart",
      "lib/app/modules/login/views/login_view.dart",
      "lib/app/modules/reset_password/bindings/reset_password_binding.dart",
      "lib/app/modules/reset_password/controllers/reset_password_controller.dart",
      "lib/app/modules/reset_password/views/reset_password_view.dart",
      "lib/app/modules/signup/bindings/signup_binding.dart",
      "lib/app/modules/signup/controllers/signup_controller.dart",
      "lib/app/modules/signup/views/signup_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/firebase_options.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\nimport 'package:auth_firebase/app/controllers/auth_controller.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  final authC = Get.find<AuthController>();\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n        actions: [\n          IconButton(\n            onPressed: () {\n              authC.logout();\n            },\n            icon: Icon(Icons.logout),\n          ),\n        ],\n      ),\n\n      //Ini untuk One Time Get data menggunakan FutureBuilder dari firebase(Read)\n      // body: FutureBuilder<QuerySnapshot<Object?>>(\n      //   future: controller.tampilDataProduk(),\n      //   builder: (context, Snapshot) {\n      //     //cek apakah masih loading atau udah done\n      //     if (Snapshot.connectionState == ConnectionState.waiting) {\n      //       return Center(child: CircularProgressIndicator());\n      //     }\n      //     //cek apakah databse memiliki data\n      //     else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {\n      //       return Center(child: Text(\"Belum ada produk\"));\n      //     }\n      //     //jika semua aman maka tampilkan data nya\n      //     else {\n      //       var listAllDocs = Snapshot.data!.docs;\n      //       return ListView.builder(\n      //         itemCount: listAllDocs.length,\n      //         itemBuilder: (context, index) => ListTile(\n      //           title: Text(\"${listAllDocs[index][\"name\"]}\"),\n      //           subtitle: Text(\"Rp.${listAllDocs[index][\"price\"]}\"),\n      //         ),\n      //       );\n      //     }\n      //   },\n      // ),\n\n      //Ini untuk Realtime Get Data menggunakan StreamBuilder dari firebase(Read)\n      body: StreamBuilder<QuerySnapshot<Object?>>(\n        stream: controller.streamDataProduk(),\n        builder: (context, Snapshot) {\n          //cek apakah masih loading atau udah done\n          if (Snapshot.connectionState == ConnectionState.waiting) {\n            return Center(child: CircularProgressIndicator());\n          }\n          //cek apakah databse memiliki data\n          else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {\n            return Center(child: Text(\"Belum ada produk\"));\n          }\n          //jika semua aman maka tampilkan data nya\n          else {\n            var listAllDocs = Snapshot.data!.docs;\n            return ListView.builder(\n              itemCount: listAllDocs.length,\n              itemBuilder: (context, index) => ListTile(\n                //ini digunakan untk mengambil id berdasarkan apa yang di klik\n                onTap: () => Get.toNamed(\n                  Routes.EDIT_PRODUCT,\n                  arguments: listAllDocs[index].id,\n                ),\n                title: Text(\"${listAllDocs[index][\"name\"]}\"),\n                subtitle: Text(\"Rp.${listAllDocs[index][\"price\"]}\"),\n                trailing: IconButton(\n                  onPressed: () =>\n                      //memanggil fungsi pada controller dengan melempar id melalui argument\n                      controller.deleteProduct(listAllDocs[index].id),\n                  icon: Icon(Icons.delete),\n                ),\n              ),\n            );\n          }\n        },\n      ),\n\n      //ini tombol untuk menambah data ke firebase\n      floatingActionButton: FloatingActionButton(\n        backgroundColor: Colors.blue,\n        foregroundColor: Colors.white,\n        tooltip: \"Tambah Data\",\n        shape: RoundedRectangleBorder(\n          borderRadius: BorderRadiusGeometry.circular(50),\n        ),\n        onPressed: () => Get.toNamed(Routes.ADD_PRODUCT),\n        child: Icon(Icons.add),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  },
  {
    "id": "I19",
    "folder": "19_belajar_supabase",
    "slug": "supabase-auth-storage-crud",
    "title": "Supabase Auth, Storage & CRUD",
    "track": "Cloud Backend",
    "stage": "Advanced",
    "level": "Advanced",
    "goal": "Membangun auth, database realtime, upload gambar Storage, dan CRUD produk dengan Supabase.",
    "learn": [
      "Menginisialisasi Supabase dan membaca session.",
      "Membuat register, login, reset password, dan logout.",
      "Stream tabel realtime serta upload/hapus gambar di Storage."
    ],
    "detail": "Modul puncak ini memadukan Supabase Auth, Postgres realtime, Storage, image picker, dan GetX untuk membangun aplikasi produk yang lebih mendekati kebutuhan produksi.",
    "concept": [
      "Supabase Auth",
      "Realtime stream",
      "Storage bucket",
      "image_picker",
      "RLS",
      "CRUD"
    ],
    "explanation": [
      "Session menentukan halaman pertama saat app dibuka.",
      "Untuk realtime, Supabase perlu primary key tabel agar perubahan baris dapat dilacak.",
      "Storage dan row database perlu dibersihkan bersama ketika produk dihapus."
    ],
    "exercise": [
      "Tambahkan validasi ukuran dan format gambar.",
      "Aktifkan serta uji RLS policy untuk tabel dan bucket.",
      "Gunakan environment/build configuration untuk URL dan publishable key."
    ],
    "files": [
      "lib/app/controllers/auth_controller.dart",
      "lib/app/modules/add_product/bindings/add_product_binding.dart",
      "lib/app/modules/add_product/controllers/add_product_controller.dart",
      "lib/app/modules/add_product/views/add_product_view.dart",
      "lib/app/modules/edit_product/bindings/edit_product_binding.dart",
      "lib/app/modules/edit_product/controllers/edit_product_controller.dart",
      "lib/app/modules/edit_product/views/edit_product_view.dart",
      "lib/app/modules/home/bindings/home_binding.dart",
      "lib/app/modules/home/controllers/home_controller.dart",
      "lib/app/modules/home/views/home_view.dart",
      "lib/app/modules/login/bindings/login_binding.dart",
      "lib/app/modules/login/controllers/login_controller.dart",
      "lib/app/modules/login/views/login_view.dart",
      "lib/app/modules/products/bindings/products_binding.dart",
      "lib/app/modules/products/controllers/products_controller.dart",
      "lib/app/modules/products/views/products_view.dart",
      "lib/app/modules/register/bindings/register_binding.dart",
      "lib/app/modules/register/controllers/register_controller.dart",
      "lib/app/modules/register/views/register_view.dart",
      "lib/app/modules/reset_password/bindings/reset_password_binding.dart",
      "lib/app/modules/reset_password/controllers/reset_password_controller.dart",
      "lib/app/modules/reset_password/views/reset_password_view.dart",
      "lib/app/routes/app_pages.dart",
      "lib/app/routes/app_routes.dart",
      "lib/main.dart",
      "pubspec.yaml"
    ],
    "snippet": "import 'package:belajar_supabase/app/controllers/auth_controller.dart';\nimport 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  final authC = Get.find<AuthController>();\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n        actions: [\n          IconButton(icon: Icon(Icons.logout), onPressed: authC.logout),\n        ],\n      ),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            Get.toNamed(Routes.PRODUCTS);\n          },\n          child: Text(\"Produk\"),\n          style: ElevatedButton.styleFrom(\n            backgroundColor: Colors.blue,\n            foregroundColor: Colors.white,\n          ),\n        ),\n      ),\n    );\n  }\n}\n",
    "run": "flutter pub get\nflutter run"
  }
];

window.INTERMEDIATE_CODE_SNAPSHOTS = {
  "01_mediaquery": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: mediaquery\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    //INFO: Membuat container dengan ukuran fleksibel berdasarkan lebar piksel device yang berbeda beda(Responsif)\n    //MediaQuery digunakan untuk mengetahui ukuran height / width dari device nya\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    //MediaQuery juga bisa dipakai untuk mengambil padding atas/bawah kanan/kiri dan banyak lainya\n    double paddingTop = MediaQuery.of(context).padding.top;\n    return Scaffold(\n      body: Container(\n        margin: EdgeInsets.only(top: paddingTop),\n        height: heightDevice,\n        width: widthDevice / 2,\n        color: Colors.red,\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "02_flexible": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: flexible\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    //harus membuat appBar terpisah untuk mengetahui tinggi body dari aplikasi\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //tinggi body adalah = tinggi device dikurangi tinggi appBar\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //maka dengan mudah kita mengetahui besar layar dan luas body dengan memanggil variabel\n      body: Column(\n        //sebenarnya kita juga bisa membuat seperti command dibawah tanpa MediaQuery hanya dengan widget Flexible\n        //dengan menggunakan flex dia akan secara otomatis memberikan ukuran sesuai proporsi value dari \"flex\"\n        children: [\n          Flexible(flex: 7, child: Container(color: Colors.red)),\n          Flexible(flex: 3, child: Container(color: Colors.amber)),\n          Flexible(flex: 1, child: Container(color: Colors.green)),\n        ],\n      ),\n      // body: Column(\n      //   children: [\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.5,\n      //       color: Colors.red,\n      //     ),\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.3,\n      //       color: Colors.amber,\n      //     ),\n      //     Container(\n      //       width: widthDevice * 0.5,\n      //       height: heightBody * 0.2,\n      //       color: Colors.green,\n      //     ),\n      //   ],\n      // ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "03_expanded": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: expanded\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    //harus membuat appBar terpisah untuk mengetahui tinggi body dari aplikasi\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //tinggi body adalah = tinggi device dikurangi tinggi appBar\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //maka dengan mudah kita mengetahui besar layar dan luas body dengan memanggil variabel\n      body: Column(\n        children: [\n          Container(\n            color: Colors.red,\n            width: widthDevice * 0.5,\n            height: heightBody * 0.3,\n          ),\n          Container(\n            color: Colors.amber,\n            width: widthDevice * 0.5,\n            height: heightBody * 0.2,\n          ),\n          //INFO: Penggunaan Expanded anggap saja sebagai pengambil sisa dari ukuran yang susah ditentukan\n          Expanded(\n            child: Container(color: Colors.green, width: widthDevice * 0.5),\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "04_fitted_box": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: fitted_box\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Container(\n        width: 200,\n        height: 100,\n        color: Colors.green,\n        child: Center(\n          //dengan FittedBox dia akan secara otomatis membuat ukuran dari isi konten dalam container mengecil apabila value nya menjadi overflow\n          child: FittedBox(\n            child: Text(\n              \"Haalooooooooooo\",\n              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 90),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "05_wrap": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: wrap\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    double widthDevice = MediaQuery.of(context).size.width;\n    double heightDevice = MediaQuery.of(context).size.height;\n    double paddingTop = MediaQuery.of(context).padding.top;\n\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    double heightBody = heightDevice - myAppBar().preferredSize.height;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      //NOTE: dengan wrap ini dapat mengatasi overflow widget dengan otomatis menurunkan widget kebawah apabila tidak ada lagi ruang di sebelah kanan\n      //by Default directionya secara horizontal (kanan -> kiri), namun bisa di ubah menjadi vertikan (atas -> bawah)\n      body: Wrap(\n        //gunakan ini untuk mengubah direction(arah)\n        // direction: Axis.vertical,\n        children: [\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n        ],\n      ),\n    );\n  }\n}\n\nclass KotakKuning extends StatelessWidget {\n  const KotakKuning({super.key, required this.widthDevice});\n\n  final double widthDevice;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      margin: EdgeInsets.all(10),\n      width: widthDevice * 0.15,\n      height: 35,\n      color: Colors.amber,\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "06_get_width_height": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: get_width_height\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Wrap(\n        //gunakan ini untuk mengubah direction(arah)\n        // direction: Axis.vertical,\n        children: [\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n          KotakKuning(widthDevice: widthDevice),\n        ],\n      ),\n    );\n  }\n}\n\nclass KotakKuning extends StatelessWidget {\n  const KotakKuning({super.key, required this.widthDevice});\n\n  final double widthDevice;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      margin: EdgeInsets.all(10),\n      width: Get.width * 0.15,\n      height: 35,\n      color: Colors.amber,\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "07_layout_builder": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: layout_builder\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //INFO: Ini cara mendapatkan nilai dari tingi body aplikasi dengan GetX\n    double heightBody =\n        context.height - myAppBar().preferredSize.height - paddingTop;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Container(\n        width: Get.width * 0.5,\n        height: heightBody * 0.3,\n        color: Colors.amber,\n        child: LayoutBuilder(\n          builder: (context, bebas) {\n            //ini digunakan untuk mengambil heigh dan width dari parrent widget alias container kuning\n            double widthKuning = bebas.maxWidth;\n            double heightKuning = bebas.maxHeight;\n            return Stack(\n              children: [\n                Container(\n                  //setelah itu tinggal dipanggil dan di sesuaikan ukuran nya\n                  width: widthKuning * 0.5,\n                  height: heightKuning * 0.5,\n                  color: Colors.green,\n                ),\n              ],\n            );\n          },\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "08_constrained_box": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: constrained_box\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  //NOTE: Penggunaan Getx sebagai pengganti dari MEDIAQUERY\n  double widthDevice = Get.width;\n  double heightDevice = Get.height;\n\n  @override\n  Widget build(BuildContext context) {\n    //NOTE: Ini juga untuk mendapatkan padding\n    double paddingTop = context.mediaQueryPadding.top;\n    double paddingBottom = context.mediaQueryPadding.bottom;\n    AppBar myAppBar() {\n      return AppBar(\n        title: Text('Flexible', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      );\n    }\n\n    //INFO: Ini cara mendapatkan nilai dari tingi body aplikasi dengan GetX\n    double heightBody =\n        context.height - myAppBar().preferredSize.height - paddingTop;\n\n    return Scaffold(\n      appBar: myAppBar(),\n      body: Column(\n        children: [\n          ConstrainedBox(\n            //pada ConstrainedBox kita dapat membuat aturan ukuran untuk di patuhi oleh child widget\n            constraints: BoxConstraints(\n              minWidth: 300,\n              minHeight: 100,\n              maxHeight: 150,\n              maxWidth: 350,\n            ),\n            child: Container(\n              //ukuran height/width dalam container ini tidak akan bisa kurang ataupun melewati dari min/max yang ada pada ConstrainedBox\n              height: 1000,\n              width: 500,\n              color: Colors.red,\n              child: Text(\n                'Haloooo',\n                style: TextStyle(\n                  color: Colors.white,\n                  fontWeight: FontWeight.bold,\n                  fontSize: 30,\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "09_orientation_builder": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: orientation_builder\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    //INFO : ini cara membuat adaptive layout dengan memanfaatkan orientation (potrait / landscape )\n    // dengan OrientationBuilder kita dapat membuat 2 sistem layout secara bersamaan\n    return OrientationBuilder(\n      builder: (context, orientation) {\n        if (orientation == Orientation.portrait) {\n          return Scaffold(\n            appBar: AppBar(\n              title: Text('Home', style: TextStyle(color: Colors.white)),\n              backgroundColor: Colors.blue,\n              centerTitle: true,\n            ),\n            body: Center(\n              child: Container(width: 300, height: 300, color: Colors.amber),\n            ),\n          );\n        } else {\n          return Scaffold(\n            appBar: AppBar(\n              title: Text('Home', style: TextStyle(color: Colors.white)),\n              backgroundColor: Colors.blue,\n              centerTitle: true,\n            ),\n            body: Center(\n              child: Container(width: 300, height: 100, color: Colors.red),\n            ),\n          );\n        }\n      },\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "10_animated_container": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: animated_container\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  RxBool selected = false.obs;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Obx(\n            () => AnimatedContainer(\n              //NOTE: Curves digunakan untuk animasi template\n              curve: Curves.fastLinearToSlowEaseIn,\n              duration: Duration(seconds: 2),\n              width: controller.selected.isFalse ? 300 : 100,\n              height: controller.selected.isFalse ? 300 : 100,\n              color: controller.selected.isFalse\n                  ? Colors.cyan\n                  : Colors.redAccent,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "11_animated_alignment": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: animated_alignment\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  RxBool selected = false.obs;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      //NOTE: sama aja kayak container animted hanya ini untuk posisi\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Obx(\n            () => Container(\n              alignment: Alignment.center,\n              width: 300,\n              height: 300,\n              color: Colors.cyan,\n              child: AnimatedAlign(\n                duration: Duration(seconds: 1),\n                curve: Curves.easeOutCirc,\n                child: Text(\"Halo\"),\n                alignment: controller.selected.isFalse\n                    ? Alignment.topLeft\n                    : Alignment.center,\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "12_animated_position": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: animated_position\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  RxBool selected = false.obs;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      //INFO: Dengan widget position memiliki keunggulan dimana dapat memposisikan sebuah widget dengan lebih detail\n      body: Center(\n        child: GestureDetector(\n          onTap: () => controller.selected.toggle(),\n          child: Container(\n            width: 300,\n            height: 500,\n            color: Colors.purple,\n            child: Stack(\n              children: [\n                Obx(\n                  () => AnimatedPositioned(\n                    curve: Curves.easeInOutCirc,\n                    top: 0,\n                    right: controller.selected.isFalse ? 0 : 250,\n                    child: Container(\n                      width: 50,\n                      height: 50,\n                      color: Colors.yellow,\n                    ),\n                    duration: Duration(milliseconds: 500),\n                  ),\n                ),\n              ],\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "13_animated_builder": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: animated_builder\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass HomeController extends GetxController\n    with GetSingleTickerProviderStateMixin {\n  late AnimationController animationC = AnimationController(\n    vsync: this,\n    duration: Duration(seconds: 2),\n  )..repeat();\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: Center(\n        child: Container(\n          width: 300,\n          height: 500,\n          color: Colors.purple,\n          child: Stack(\n            children: [\n              AnimatedBuilder(\n                child: Container(width: 50, height: 50, color: Colors.yellow),\n                animation: controller.animationC,\n                builder: (context, widget) {\n                  // value 0 -> 1 => convert (0 -> 1 -> 0)\n                  return Positioned(\n                    top: 0,\n                    //ini adalah rumus untuk mengconvert dari 0 ke satu lalu kembali ke 0 (posisi)\n                    right:\n                        2 *\n                        (0.5 - (0.5 - controller.animationC.value).abs()) *\n                        250,\n                    child: widget!,\n                  );\n                },\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "14_hero_navigasi": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: hero_navigasi\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:hero_navigasi/app/routes/app_pages.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView'),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Center(\n        child: GestureDetector(\n          onTap: () => Get.toNamed(Routes.PROFILE),\n          //NOTE: Dengan Hero navigasi akan terasa lebih smooth seacar default\n          child: Hero(\n            tag: \"tag1\",\n            child: ClipOval(\n              child: Container(\n                width: 200,\n                height: 200,\n                child: Image.network(\n                  \"https://picsum.photos/200/300\",\n                  fit: BoxFit.cover,\n                ),\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/profile/bindings/profile_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/profile_controller.dart';\n\nclass ProfileBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<ProfileController>(\n      () => ProfileController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/profile/controllers/profile_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass ProfileController extends GetxController {\n  //TODO: Implement ProfileController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/profile/views/profile_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:hero_navigasi/app/routes/app_pages.dart';\n\nimport '../controllers/profile_controller.dart';\n\nclass ProfileView extends GetView<ProfileController> {\n  const ProfileView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView'),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Center(\n        child: GestureDetector(\n          onTap: () => Get.toNamed(Routes.HOME),\n          child: Hero(\n            tag: \"tag1\",\n            child: ClipOval(\n              child: Container(\n                width: 350,\n                height: 350,\n                child: Image.network(\n                  \"https://picsum.photos/200/300\",\n                  fit: BoxFit.cover,\n                ),\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\nimport '../modules/profile/bindings/profile_binding.dart';\nimport '../modules/profile/views/profile_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n    GetPage(\n      name: _Paths.PROFILE,\n      page: () => const ProfileView(),\n      binding: ProfileBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n  static const PROFILE = _Paths.PROFILE;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n  static const PROFILE = '/profile';\n}\n"
    }
  ],
  "15_widget_clip": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: wiget_clip\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n  google_fonts: ^8.2.1\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:google_fonts/google_fonts.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n      ),\n      body: Row(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          Column(\n            children: [\n              SizedBox(height: 20),\n              //NOTE:Clip digunakan untuk memotong\n              //INFO:ClipOval digunakan untuk membuat widget didalamnya memiliki radius templat FULL\n              Text(\n                \"ClipOval\",\n                //NOTE:Ini cara penggunaan Google Fonts\n                style: GoogleFonts.manrope(\n                  fontSize: 20,\n                  fontWeight: FontWeight.w800,\n                ),\n              ),\n              ClipOval(\n                child: Container(\n                  height: 150,\n                  width: 150,\n                  color: Colors.green[300],\n                  child: FlutterLogo(size: 300),\n                ),\n              ),\n\n              SizedBox(height: 20),\n\n              //INFO:ClipRRect digunakan untuk mendapatkan \"Border radius\", alias lebi mudah di kustomisasi radiusnya\n              //ClipRRect => clip radius rectangle\n              Text(\"CliprRect\", style: TextStyle(fontSize: 20)),\n              ClipRRect(\n                borderRadius: BorderRadiusGeometry.circular(20),\n                child: Container(\n                  height: 150,\n                  width: 150,\n                  color: Colors.green[300],\n                  child: FlutterLogo(size: 300),\n                ),\n              ),\n            ],\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "16_widget_carousel_slider": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\nvoid main() {\n  runApp(\n    GetMaterialApp(\n      debugShowMaterialGrid: false,\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: widget_carousel_slider\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n  carousel_slider: ^5.1.2\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:carousel_slider/carousel_slider.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n      ),\n      body: Column(\n        children: [\n          SizedBox(height: 20),\n          CarouselSlider(\n            options: CarouselOptions(\n              height: 200,\n              autoPlay: true,\n              enableInfiniteScroll: false,\n              autoPlayInterval: Duration(seconds: 3),\n              enlargeCenterPage: true,\n              //ini untuk mengatur sebarapa zoom center\n              enlargeFactor: 0.2,\n              //pakai ini jika ingin membuat carousel vertikal\n              // scrollDirection: Axis.vertical,\n              autoPlayCurve: Curves.easeInQuart,\n            ),\n            items: [1, 2, 3, 4, 5].map((i) {\n              return Builder(\n                builder: (BuildContext context) {\n                  return Container(\n                    width: MediaQuery.of(context).size.width,\n                    margin: EdgeInsets.symmetric(horizontal: 5.0),\n                    decoration: BoxDecoration(\n                      color: Colors.grey[500],\n                      borderRadius: BorderRadius.circular(15),\n                    ),\n                    child: Center(\n                      child: Text(\n                        'text $i',\n                        style: TextStyle(\n                          fontSize: 30,\n                          fontWeight: FontWeight.bold,\n                        ),\n                      ),\n                    ),\n                  );\n                },\n              );\n            }).toList(),\n          ),\n        ],\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    }
  ],
  "17_belajar_firebase": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:belajar_firebase/firebase_options.dart';\nimport 'package:firebase_core/firebase_core.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport 'app/routes/app_pages.dart';\n\n//NOTE:Untuk menginisialisasi firebase sebelum aplikasi dijalankan (runApp), menggunakan tipe data Future\nFuture<void> main() async {\n  //ini diperlukan agar memastikan lagi kalau semua , sebelum menjalankan aplikasi kita, sudah terinisialisasi dengan sempurna\n  WidgetsFlutterBinding.ensureInitialized();\n  //syntax untuk inisialisasi firebase dengan default settingan firebase\n  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: AppPages.INITIAL,\n      getPages: AppPages.routes,\n    ),\n  );\n}\n\n\n//Firebase cli note:\n// - firebase login => untuk login ke aku firebase\n// - firebae projects:list => menampilkan keseluruhan projek pada akun firebase\n\n\n//step yang dilakukan :\n// - dart pub global activate flutterfire_cli => untuk mengaktifkan flutterfire cli => \"cukup sekali saja\"\n// - flutterfire configure => berfungsi untuk mengkonfigurasi secara otomatis project flutter untuk terhubung ke firebase\n// - download firebase_core dari pub.dev (Pubspec yaml)\n// - download package yang dibutuhkan seperti cloud_firestore dll\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: belajar_firebase\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n  firebase_core: ^4.13.0\n  cloud_firestore: ^6.8.0\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  Future<QuerySnapshot<Map<String, dynamic>>> getRakData() async {\n    return FirebaseFirestore.instance.collection(\"rak-buku\").get();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  const HomeView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('HomeView'),\n        centerTitle: true,\n      ),\n      body: FutureBuilder(\n        future: controller.getRakData(),\n        builder: (context, snapshot) {\n          if (snapshot.connectionState == ConnectionState.done) {\n            if (snapshot.hasData) {\n              return Center(\n                child: Column(\n                  mainAxisAlignment: MainAxisAlignment.center,\n                  children: [\n                    for (var doc in snapshot.data!.docs) Text(doc[\"penulis\"]),\n                  ],\n                ),\n              );\n            }\n          }\n\n          return const Center(child: CircularProgressIndicator());\n        },\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(\n      name: _Paths.HOME,\n      page: () => const HomeView(),\n      binding: HomeBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n}\n"
    },
    {
      "path": "lib/firebase_options.dart",
      "language": "dart",
      "purpose": "Konfigurasi FlutterFire yang dihasilkan CLI; nilai credential telah disamarkan untuk dokumentasi.",
      "source": "// File generated by FlutterFire CLI.\n// ignore_for_file: type=lint\nimport 'package:firebase_core/firebase_core.dart' show FirebaseOptions;\nimport 'package:flutter/foundation.dart'\n    show defaultTargetPlatform, kIsWeb, TargetPlatform;\n\n/// Default [FirebaseOptions] for use with your Firebase apps.\n///\n/// Example:\n/// ```dart\n/// import 'firebase_options.dart';\n/// // ...\n/// await Firebase.initializeApp(\n///   options: DefaultFirebaseOptions.currentPlatform,\n/// );\n/// ```\nclass DefaultFirebaseOptions {\n  static FirebaseOptions get currentPlatform {\n    if (kIsWeb) {\n      return web;\n    }\n    switch (defaultTargetPlatform) {\n      case TargetPlatform.android:\n        return android;\n      case TargetPlatform.iOS:\n        return ios;\n      case TargetPlatform.macOS:\n        return macos;\n      case TargetPlatform.windows:\n        return windows;\n      case TargetPlatform.linux:\n        throw UnsupportedError(\n          'DefaultFirebaseOptions have not been configured for linux - '\n          'you can reconfigure this by running the FlutterFire CLI again.',\n        );\n      default:\n        throw UnsupportedError(\n          'DefaultFirebaseOptions are not supported for this platform.',\n        );\n    }\n  }\n\n  static const FirebaseOptions web = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    authDomain: \"FIREBASE-AUTH-DOMAIN\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n\n  static const FirebaseOptions android = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n\n  static const FirebaseOptions ios = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n    iosBundleId: \"com.example.app\",\n  );\n\n  static const FirebaseOptions macos = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n    iosBundleId: \"com.example.app\",\n  );\n\n  static const FirebaseOptions windows = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    authDomain: \"FIREBASE-AUTH-DOMAIN\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n}\n"
    }
  ],
  "18_praktik_firebase_CRUD": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:auth_firebase/app/controllers/auth_controller.dart';\nimport 'package:auth_firebase/firebase_options.dart';\nimport 'package:firebase_auth/firebase_auth.dart';\nimport 'package:firebase_core/firebase_core.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'app/routes/app_pages.dart';\n\nFuture<void> main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);\n\n  runApp(Myapp());\n}\n\nclass Myapp extends StatelessWidget {\n  //put controlller karna bukan controller bawaan yang sudah di binding\n  final authC = Get.put(AuthController(), permanent: true);\n  @override\n  Widget build(BuildContext context) {\n    //wajib membungkus material dengan stream karna untuk pemantauan realtime\n    return StreamBuilder<User?>(\n      stream: authC.AuthStatus(),\n      builder: (context, snapshot) {\n        //cek untuk pengkondisian apakah ada sesi login, jika tidak lempar ke halaman login\n        if (snapshot.connectionState == ConnectionState.active) {\n          return GetMaterialApp(\n            debugShowCheckedModeBanner: false,\n            title: \"Application\",\n            //pada tahap routing pastikan data tidak null dan email sudah verified\n            initialRoute:\n                snapshot.data != null && snapshot.data!.emailVerified == true\n                ? Routes.HOME\n                : Routes.LOGIN,\n            getPages: AppPages.routes,\n          );\n        }\n\n        return Center(child: CircularProgressIndicator());\n      },\n    );\n  }\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: auth_firebase\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n  firebase_core: ^4.13.0\n  firebase_auth: ^6.5.7\n  cloud_firestore: ^6.9.0\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/controllers/auth_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:firebase_auth/firebase_auth.dart';\nimport 'package:get/get.dart';\n\nclass AuthController extends GetxController {\n  //jika menggunakan getx maka lakuka inisiasi FirebaseAuth dengan syntax dibawah ini\n  FirebaseAuth auth = FirebaseAuth.instance;\n\n  //membuat function untuk memantau status autentikasi secara realtime dengan method authStateChanges()\n  Stream<User?> AuthStatus() {\n    return auth.authStateChanges();\n  }\n\n  void login(String email, String password) async {\n    try {\n      UserCredential myuser = await auth.signInWithEmailAndPassword(\n        email: email,\n        password: password,\n      );\n      //cek kembali apakah user sudah memverfikasi email, jika belum lempar eror message\n      if (myuser.user!.emailVerified) {\n        Get.offAllNamed(Routes.HOME);\n      } else {\n        Get.snackbar(\"Gagal\", \"Tolong verifikasi email terlebih dahulu\");\n      }\n    } on FirebaseAuthException catch (e) {\n      if (e.code == 'user-not-found') {\n        print('No user found for that email.');\n      } else if (e.code == 'wrong-password') {\n        Get.defaultDialog(title: \"Gagal\", middleText: \"Maaf password salah\");\n      }\n    }\n  }\n\n  void signup(String email, String password) async {\n    try {\n      UserCredential myuser = await FirebaseAuth.instance\n          .createUserWithEmailAndPassword(email: email, password: password);\n      Get.defaultDialog(\n        title: \"Berhasil\",\n        middleText:\n            \"Silahkan klik link email yang telah kami kirim ke $email. harap segera di klik \",\n        textConfirm: \"Baik,akan saya cek\",\n        onConfirm: () {\n          //ini untuk close dialog\n          Get.back();\n          Get.back();\n        },\n      );\n\n      await myuser.user!.sendEmailVerification();\n    } on FirebaseAuthException catch (e) {\n      if (e.code == 'weak-password') {\n        print('The password provided is too weak.');\n      } else if (e.code == 'email-already-in-use') {\n        print('The account already exists for that email.');\n      }\n    } catch (e) {\n      print(e);\n    }\n  }\n\n  void ResetPassword(String email) async {\n    //Ini untuk cek apakah benar sebuah email menggunaka getutils\n    if (email != \"\" && GetUtils.isEmail(email)) {\n      try {\n        await auth.sendPasswordResetEmail(email: email);\n        Get.defaultDialog(\n          middleText: \"Email berhasil dikirim silahkan cek\",\n          title: \"Berhasil\",\n          onConfirm: () {\n            Get.back();\n            Get.back();\n          },\n          textConfirm: \"Baik\",\n        );\n      } catch (e) {\n        Get.defaultDialog(\n          middleText: \"Tidak dapat mengirim email ResetPassword\",\n          title: \"Gagal\",\n        );\n      }\n    } else {\n      Get.defaultDialog(middleText: \"Email Tidak valid\", title: \"Gagal\");\n    }\n  }\n\n  void logout() async {\n    await auth.signOut();\n    Get.offAllNamed(Routes.LOGIN);\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/bindings/add_product_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/add_product_controller.dart';\n\nclass AddProductBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<AddProductController>(\n      () => AddProductController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/controllers/add_product_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass AddProductController extends GetxController {\n  late TextEditingController nameC;\n  late TextEditingController priceC;\n\n  final db = FirebaseFirestore.instance;\n\n  void addProduct(String name, String harga) async {\n    try {\n      //makai date untuk nantinya bisa enggunaka order by time\n      String DateNow = DateTime.now().toIso8601String();\n      await db.collection(\"product\").add({\n        \"name\": name,\n        \"price\": int.parse(harga),\n        \"time\": DateNow,\n      });\n\n      Get.snackbar(\"Berhasil\", \"Data telah ditambahkan\");\n      Get.toNamed(Routes.HOME);\n    } catch (e) {\n      Get.snackbar(\"Gagal\", \"Data tidak berhasil ditambahkan\");\n    }\n  }\n\n  // on init dan juga on close dibuat utuk mencegah kebocoran text controller\n\n  @override\n  void onInit() {\n    // TODO: implement onInit\n    nameC = TextEditingController();\n    priceC = TextEditingController();\n    super.onInit();\n  }\n\n  @override\n  void onClose() {\n    // TODO: implement onClose\n    nameC.dispose();\n    priceC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/views/add_product_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/add_product_controller.dart';\n\nclass AddProductView extends GetView<AddProductController> {\n  const AddProductView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text(\n          'Tambah produk',\n          style: TextStyle(color: Colors.white),\n        ),\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(8.0),\n        child: Column(\n          children: [\n            TextField(\n              decoration: InputDecoration(\n                labelText: \"Nama Produk\",\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              textInputAction: TextInputAction.next,\n              controller: controller.nameC,\n            ),\n            SizedBox(height: 10),\n            TextField(\n              decoration: InputDecoration(\n                labelText: \"Harga produk\",\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              controller: controller.priceC,\n            ),\n            SizedBox(height: 30),\n            ElevatedButton(\n              onPressed: () => controller.addProduct(\n                controller.nameC.text,\n                controller.priceC.text,\n              ),\n              child: Text(\"Tambah Product\"),\n              style: ElevatedButton.styleFrom(\n                backgroundColor: Colors.blue,\n                foregroundColor: Colors.white,\n                shape: RoundedRectangleBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/bindings/edit_product_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/edit_product_controller.dart';\n\nclass EditProductBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<EditProductController>(\n      () => EditProductController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/controllers/edit_product_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass EditProductController extends GetxController {\n  late TextEditingController nameC;\n  late TextEditingController priceC;\n\n  final db = FirebaseFirestore.instance;\n\n  //function untuk edit data by id, mengambil data\n  Future<DocumentSnapshot<Object?>> getDataByID(String docID) {\n    return db.collection(\"product\").doc(docID).get();\n  }\n\n  void editProduct(String name, String harga, String? docID) async {\n    try {\n      await db.collection(\"product\").doc(docID).update({\n        \"name\": name,\n        \"price\": int.parse(harga),\n      });\n\n      Get.snackbar(\"Berhasil\", \"Data telah di Update\");\n      Get.toNamed(Routes.HOME);\n    } catch (e) {\n      Get.snackbar(\"Gagal\", \"Data tidak berhasil di Update\");\n    }\n  }\n\n  // on init dan juga on close dibuat utuk mencegah kebocoran text controller\n  @override\n  void onInit() {\n    // TODO: implement onInit\n    nameC = TextEditingController();\n    priceC = TextEditingController();\n    super.onInit();\n  }\n\n  @override\n  void onClose() {\n    // TODO: implement onClose\n    nameC.dispose();\n    priceC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/views/edit_product_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/edit_product_controller.dart';\n\nclass EditProductView extends GetView<EditProductController> {\n  const EditProductView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\n          'Edit product',\n          style: TextStyle(color: Colors.white),\n        ),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: FutureBuilder<DocumentSnapshot<Object?>>(\n        //tangkap argument ID dari Homeview lalu lempar ke edit controller\n        future: controller.getDataByID(Get.arguments),\n        builder: (context, snapshot) {\n          if (snapshot.connectionState == ConnectionState.waiting) {\n            return Center(child: CircularProgressIndicator());\n          }\n          //ubah data  input field berdasarkan id yang ditangkap oleh snapshot\n          var dataById = snapshot.data!.data() as Map<String, dynamic>;\n          controller.nameC.text = dataById[\"name\"];\n          controller.priceC.text = dataById[\"price\"];\n          return Padding(\n            padding: const EdgeInsets.all(8.0),\n            child: Column(\n              children: [\n                TextField(\n                  controller: controller.nameC,\n                  decoration: InputDecoration(\n                    labelText: \"Nama Produk\",\n                    border: OutlineInputBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                  textInputAction: TextInputAction.next,\n                ),\n                SizedBox(height: 10),\n                TextField(\n                  controller: controller.priceC,\n                  decoration: InputDecoration(\n                    labelText: \"Harga produk\",\n                    border: OutlineInputBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                ),\n                SizedBox(height: 30),\n                ElevatedButton(\n                  onPressed: () {\n                    controller.editProduct(\n                      controller.nameC.text,\n                      controller.priceC.text,\n                      //jangan lupa lempar id yg ada pada arguments sebagai parameter\n                      Get.arguments,\n                    );\n                  },\n\n                  child: Text(\"Simpan Perubahan\"),\n                  style: ElevatedButton.styleFrom(\n                    backgroundColor: Colors.blue,\n                    foregroundColor: Colors.white,\n                    shape: RoundedRectangleBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                ),\n              ],\n            ),\n          );\n        },\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(\n      () => HomeController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  final db = FirebaseFirestore.instance;\n\n  //ini untuk one time take menggunakan get() dan juga Future\n  Future<QuerySnapshot<Object?>> tampilDataProduk() async {\n    return await db.collection(\"product\").get();\n  }\n\n  //ini untuk realtime menggunakan stream dan snapshots()\n  Stream<QuerySnapshot<Object?>> streamDataProduk() {\n    //menampilkan stream data secara descending/asc berdasarkan kolom waktu\n    return db\n        .collection(\"product\")\n        // .where(\"price\", isGreaterThan: 100)\n        .orderBy(\n          \"time\",\n          descending:\n              true, //secara default descending false, ini untuk menampilkan data terbaru\n        )\n        .snapshots();\n\n    //NOTE:untuk link dokumentasi query lebih lanjut ada disini\n    // 1. basic query => https://firebase.google.com/docs/firestore/query-data/queries\n    // 2. order and limit => https://firebase.google.com/docs/firestore/query-data/order-limit-data\n    // 3. Query with range => https://firebase.google.com/docs/firestore/query-data/multiple-range-fields\n  }\n\n  Future<void> deleteProduct(String docId) async {\n    Get.defaultDialog(\n      title: \"Hapus data\",\n      middleText: \"Apakah anda yakin untuk menghapus produk ini?\",\n      textConfirm: \"ya\",\n      textCancel: \"Tidak\",\n      buttonColor: Colors.red,\n      onConfirm: () async {\n        try {\n          Get.back(); // menutup dialog\n          //ini syntax untuk hapus berdasarkan id dengan documnet reference\n          await db.collection(\"product\").doc(docId).delete();\n          Get.snackbar(\"Berhasil\", \"Produk telah berhasil dihapus\");\n        } catch (e) {\n          Get.snackbar(\"Gagal\", \"produk tidak dapat dihapus\");\n        }\n      },\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:flutter/material.dart';\nimport 'package:auth_firebase/app/controllers/auth_controller.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  final authC = Get.find<AuthController>();\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n        actions: [\n          IconButton(\n            onPressed: () {\n              authC.logout();\n            },\n            icon: Icon(Icons.logout),\n          ),\n        ],\n      ),\n\n      //Ini untuk One Time Get data menggunakan FutureBuilder dari firebase(Read)\n      // body: FutureBuilder<QuerySnapshot<Object?>>(\n      //   future: controller.tampilDataProduk(),\n      //   builder: (context, Snapshot) {\n      //     //cek apakah masih loading atau udah done\n      //     if (Snapshot.connectionState == ConnectionState.waiting) {\n      //       return Center(child: CircularProgressIndicator());\n      //     }\n      //     //cek apakah databse memiliki data\n      //     else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {\n      //       return Center(child: Text(\"Belum ada produk\"));\n      //     }\n      //     //jika semua aman maka tampilkan data nya\n      //     else {\n      //       var listAllDocs = Snapshot.data!.docs;\n      //       return ListView.builder(\n      //         itemCount: listAllDocs.length,\n      //         itemBuilder: (context, index) => ListTile(\n      //           title: Text(\"${listAllDocs[index][\"name\"]}\"),\n      //           subtitle: Text(\"Rp.${listAllDocs[index][\"price\"]}\"),\n      //         ),\n      //       );\n      //     }\n      //   },\n      // ),\n\n      //Ini untuk Realtime Get Data menggunakan StreamBuilder dari firebase(Read)\n      body: StreamBuilder<QuerySnapshot<Object?>>(\n        stream: controller.streamDataProduk(),\n        builder: (context, Snapshot) {\n          //cek apakah masih loading atau udah done\n          if (Snapshot.connectionState == ConnectionState.waiting) {\n            return Center(child: CircularProgressIndicator());\n          }\n          //cek apakah databse memiliki data\n          else if (!Snapshot.hasData || Snapshot.data!.docs.isEmpty) {\n            return Center(child: Text(\"Belum ada produk\"));\n          }\n          //jika semua aman maka tampilkan data nya\n          else {\n            var listAllDocs = Snapshot.data!.docs;\n            return ListView.builder(\n              itemCount: listAllDocs.length,\n              itemBuilder: (context, index) => ListTile(\n                //ini digunakan untk mengambil id berdasarkan apa yang di klik\n                onTap: () => Get.toNamed(\n                  Routes.EDIT_PRODUCT,\n                  arguments: listAllDocs[index].id,\n                ),\n                title: Text(\"${listAllDocs[index][\"name\"]}\"),\n                subtitle: Text(\"Rp.${listAllDocs[index][\"price\"]}\"),\n                trailing: IconButton(\n                  onPressed: () =>\n                      //memanggil fungsi pada controller dengan melempar id melalui argument\n                      controller.deleteProduct(listAllDocs[index].id),\n                  icon: Icon(Icons.delete),\n                ),\n              ),\n            );\n          }\n        },\n      ),\n\n      //ini tombol untuk menambah data ke firebase\n      floatingActionButton: FloatingActionButton(\n        backgroundColor: Colors.blue,\n        foregroundColor: Colors.white,\n        tooltip: \"Tambah Data\",\n        shape: RoundedRectangleBorder(\n          borderRadius: BorderRadiusGeometry.circular(50),\n        ),\n        onPressed: () => Get.toNamed(Routes.ADD_PRODUCT),\n        child: Icon(Icons.add),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/bindings/login_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/login_controller.dart';\n\nclass LoginBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<LoginController>(\n      () => LoginController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/controllers/login_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass LoginController extends GetxController {\n  final TextEditingController emailC = TextEditingController();\n  final TextEditingController passC = TextEditingController();\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    passC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/views/login_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:auth_firebase/app/controllers/auth_controller.dart';\nimport 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/login_controller.dart';\n\nclass LoginView extends GetView<LoginController> {\n  final authC = Get.find<AuthController>();\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\n          'Login Screen',\n          style: TextStyle(color: Colors.white),\n        ),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(10),\n        child: Center(\n          child: Column(\n            children: [\n              Text('LOGIN', style: TextStyle(fontSize: 30)),\n              SizedBox(height: 30),\n              TextField(\n                controller: controller.emailC,\n                decoration: InputDecoration(\n                  label: Text(\"email\"),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 20),\n              TextField(\n                controller: controller.passC,\n                decoration: InputDecoration(\n                  label: Text(\"password\"),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 5),\n              Align(\n                alignment: Alignment.centerRight,\n                child: TextButton(\n                  onPressed: () {\n                    Get.toNamed(Routes.RESET_PASSWORD);\n                  },\n                  child: Text(\"Lupa password?\"),\n                ),\n              ),\n              ElevatedButton(\n                onPressed: () =>\n                    authC.login(controller.emailC.text, controller.passC.text),\n                child: Text(\"Login\"),\n                style: ElevatedButton.styleFrom(\n                  backgroundColor: Colors.blue,\n                  foregroundColor: Colors.white,\n                  shape: RoundedRectangleBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n\n              Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: [\n                  Text(\"Belum punya akun?\"),\n                  TextButton(\n                    onPressed: () {\n                      Get.toNamed(Routes.SIGNUP);\n                    },\n                    child: Text(\"Daftar sekarang\"),\n                  ),\n                ],\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/bindings/reset_password_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/reset_password_controller.dart';\n\nclass ResetPasswordBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<ResetPasswordController>(\n      () => ResetPasswordController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/controllers/reset_password_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass ResetPasswordController extends GetxController {\n  final TextEditingController emailC = TextEditingController();\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/views/reset_password_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:auth_firebase/app/controllers/auth_controller.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/reset_password_controller.dart';\n\nclass ResetPasswordView extends GetView<ResetPasswordController> {\n  final authC = Get.find<AuthController>();\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\n          'Reset password',\n          style: TextStyle(color: Colors.white),\n        ),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(10),\n        child: Center(\n          child: Column(\n            children: [\n              Text('Reset password', style: TextStyle(fontSize: 30)),\n              SizedBox(height: 30),\n              TextField(\n                controller: controller.emailC,\n                decoration: InputDecoration(\n                  label: Text(\"masukan email terdaftar\"),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 20),\n\n              ElevatedButton(\n                onPressed: () => authC.ResetPassword(controller.emailC.text),\n                child: Text(\"Reset\"),\n                style: ElevatedButton.styleFrom(\n                  backgroundColor: Colors.blue,\n                  foregroundColor: Colors.white,\n                  shape: RoundedRectangleBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/signup/bindings/signup_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/signup_controller.dart';\n\nclass SignupBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<SignupController>(\n      () => SignupController(),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/signup/controllers/signup_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass SignupController extends GetxController {\n  TextEditingController emailC = TextEditingController();\n  TextEditingController passC = TextEditingController();\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    passC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/signup/views/signup_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:auth_firebase/app/controllers/auth_controller.dart';\nimport 'package:auth_firebase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/signup_controller.dart';\n\nclass SignupView extends GetView<SignupController> {\n  final authC = Get.find<AuthController>();\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Sign Up'), centerTitle: true),\n      body: Padding(\n        padding: const EdgeInsets.all(10),\n        child: Center(\n          child: Column(\n            children: [\n              Text('DAFTAR', style: TextStyle(fontSize: 30)),\n              SizedBox(height: 30),\n\n              TextField(\n                controller: controller.emailC,\n                decoration: InputDecoration(\n                  label: Text(\"email\"),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 20),\n              TextField(\n                controller: controller.passC,\n                decoration: InputDecoration(\n                  label: Text(\"password\"),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 50),\n              ElevatedButton(\n                onPressed: () =>\n                    authC.signup(controller.emailC.text, controller.passC.text),\n                child: Text(\"Daftar\"),\n                style: ElevatedButton.styleFrom(\n                  backgroundColor: Colors.blue,\n                  foregroundColor: Colors.white,\n                  shape: RoundedRectangleBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              SizedBox(height: 5),\n              Row(\n                mainAxisAlignment: MainAxisAlignment.center,\n                children: [\n                  Text(\"sudah punya akun?\"),\n                  TextButton(\n                    onPressed: () {\n                      Get.back();\n                    },\n                    child: Text(\"Login sekarang\"),\n                  ),\n                ],\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/add_product/bindings/add_product_binding.dart';\nimport '../modules/add_product/views/add_product_view.dart';\nimport '../modules/edit_product/bindings/edit_product_binding.dart';\nimport '../modules/edit_product/views/edit_product_view.dart';\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\nimport '../modules/login/bindings/login_binding.dart';\nimport '../modules/login/views/login_view.dart';\nimport '../modules/reset_password/bindings/reset_password_binding.dart';\nimport '../modules/reset_password/views/reset_password_view.dart';\nimport '../modules/signup/bindings/signup_binding.dart';\nimport '../modules/signup/views/signup_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.HOME;\n\n  static final routes = [\n    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),\n    GetPage(\n      name: _Paths.LOGIN,\n      page: () => LoginView(),\n      binding: LoginBinding(),\n    ),\n    GetPage(\n      name: _Paths.SIGNUP,\n      page: () => SignupView(),\n      binding: SignupBinding(),\n    ),\n    GetPage(\n      name: _Paths.RESET_PASSWORD,\n      page: () => ResetPasswordView(),\n      binding: ResetPasswordBinding(),\n    ),\n    GetPage(\n      name: _Paths.ADD_PRODUCT,\n      page: () => AddProductView(),\n      binding: AddProductBinding(),\n    ),\n    GetPage(\n      name: _Paths.EDIT_PRODUCT,\n      page: () => EditProductView(),\n      binding: EditProductBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n  static const LOGIN = _Paths.LOGIN;\n  static const SIGNUP = _Paths.SIGNUP;\n  static const RESET_PASSWORD = _Paths.RESET_PASSWORD;\n  static const ADD_PRODUCT = _Paths.ADD_PRODUCT;\n  static const EDIT_PRODUCT = _Paths.EDIT_PRODUCT;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n  static const LOGIN = '/login';\n  static const SIGNUP = '/signup';\n  static const RESET_PASSWORD = '/reset-password';\n  static const ADD_PRODUCT = '/add-product';\n  static const EDIT_PRODUCT = '/edit-product';\n}\n"
    },
    {
      "path": "lib/firebase_options.dart",
      "language": "dart",
      "purpose": "Konfigurasi FlutterFire yang dihasilkan CLI; nilai credential telah disamarkan untuk dokumentasi.",
      "source": "// File generated by FlutterFire CLI.\n// ignore_for_file: type=lint\nimport 'package:firebase_core/firebase_core.dart' show FirebaseOptions;\nimport 'package:flutter/foundation.dart'\n    show defaultTargetPlatform, kIsWeb, TargetPlatform;\n\n/// Default [FirebaseOptions] for use with your Firebase apps.\n///\n/// Example:\n/// ```dart\n/// import 'firebase_options.dart';\n/// // ...\n/// await Firebase.initializeApp(\n///   options: DefaultFirebaseOptions.currentPlatform,\n/// );\n/// ```\nclass DefaultFirebaseOptions {\n  static FirebaseOptions get currentPlatform {\n    if (kIsWeb) {\n      return web;\n    }\n    switch (defaultTargetPlatform) {\n      case TargetPlatform.android:\n        return android;\n      case TargetPlatform.iOS:\n        return ios;\n      case TargetPlatform.macOS:\n        return macos;\n      case TargetPlatform.windows:\n        return windows;\n      case TargetPlatform.linux:\n        throw UnsupportedError(\n          'DefaultFirebaseOptions have not been configured for linux - '\n          'you can reconfigure this by running the FlutterFire CLI again.',\n        );\n      default:\n        throw UnsupportedError(\n          'DefaultFirebaseOptions are not supported for this platform.',\n        );\n    }\n  }\n\n  static const FirebaseOptions web = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    authDomain: \"FIREBASE-AUTH-DOMAIN\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n\n  static const FirebaseOptions android = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n\n  static const FirebaseOptions ios = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n    iosBundleId: \"com.example.app\",\n  );\n\n  static const FirebaseOptions macos = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n    iosBundleId: \"com.example.app\",\n  );\n\n  static const FirebaseOptions windows = FirebaseOptions(\n    apiKey: \"API-KEY-KAMU\",\n    appId: \"FIREBASE-APP-ID\",\n    messagingSenderId: \"FIREBASE-SENDER-ID\",\n    projectId: \"FIREBASE-PROJECT-ID\",\n    authDomain: \"FIREBASE-AUTH-DOMAIN\",\n    databaseURL: \"https://FIREBASE-DATABASE-URL\",\n    storageBucket: \"FIREBASE-STORAGE-BUCKET\",\n  );\n}\n"
    }
  ],
  "19_belajar_supabase": [
    {
      "path": "lib/main.dart",
      "language": "dart",
      "purpose": "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nimport 'app/controllers/auth_controller.dart';\nimport 'app/routes/app_pages.dart';\n\nFuture<void> main() async {\n  //Karena main() sekarang async, Flutter perlu memastikan binding sudah siap sebelum melakukan inisialisasi plugin.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  //ini untuk inisialisasi menghubungkan ke projek database supabase\n  await Supabase.initialize(\n    url: \"https://PROJECT.supabase.co\",\n    publishableKey: \"API-KEY-KAMU\",\n  );\n\n  final session = Supabase.instance.client.auth.currentSession;\n  final initialRoute = session != null ? Routes.HOME : Routes.LOGIN;\n\n  runApp(\n    GetMaterialApp(\n      debugShowCheckedModeBanner: false,\n      title: \"Application\",\n      initialRoute: initialRoute,\n      getPages: AppPages.routes,\n      initialBinding: BindingsBuilder(() {\n        Get.put(AuthController(), permanent: true);\n      }),\n    ),\n  );\n}\n"
    },
    {
      "path": "pubspec.yaml",
      "language": "yaml",
      "purpose": "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.",
      "source": "name: belajar_supabase\ndescription: \"A new Flutter project.\"\n# The following line prevents the package from being accidentally published to\n# pub.dev using `flutter pub publish`. This is preferred for private packages.\npublish_to: 'none' # Remove this line if you wish to publish to pub.dev\n\n# The following defines the version and build number for your application.\n# A version number is three numbers separated by dots, like 1.2.43\n# followed by an optional build number separated by a +.\n# Both the version and the builder number may be overridden in flutter\n# build by specifying --build-name and --build-number, respectively.\n# In Android, build-name is used as versionName while build-number used as versionCode.\n# Read more about Android versioning at https://developer.android.com/studio/publish/versioning\n# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.\n# Read more about iOS versioning at\n# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html\n# In Windows, build-name is used as the major, minor, and patch parts\n# of the product and file versions while build-number is used as the build suffix.\nversion: 1.0.0+1\n\nenvironment:\n  sdk: ^3.11.1\n\n# Dependencies specify other packages that your package needs in order to work.\n# To automatically upgrade your package dependencies to the latest versions\n# consider running `flutter pub upgrade --major-versions`. Alternatively,\n# dependencies can be manually updated by changing the version numbers below to\n# the latest version available on pub.dev. To see which dependencies have newer\n# versions available, run `flutter pub outdated`.\ndependencies:\n  flutter:\n    sdk: flutter\n\n  # The following adds the Cupertino Icons font to your application.\n  # Use with the CupertinoIcons class for iOS style icons.\n  cupertino_icons: ^1.0.8\n  get: ^4.7.3\n  supabase_flutter: ^2.18.0\n  image_picker: ^1.2.4\n  mime: ^2.1.0\n\ndev_dependencies:\n  flutter_test:\n    sdk: flutter\n\n  # The \"flutter_lints\" package below contains a set of recommended lints to\n  # encourage good coding practices. The lint set provided by the package is\n  # activated in the `analysis_options.yaml` file located at the root of your\n  # package. See that file for information about deactivating specific lint\n  # rules and activating additional ones.\n  flutter_lints: ^6.0.0\n\n# For information on the generic Dart part of this file, see the\n# following page: https://dart.dev/tools/pub/pubspec\n\n# The following section is specific to Flutter packages.\nflutter:\n\n  # The following line ensures that the Material Icons font is\n  # included with your application, so that you can use the icons in\n  # the material Icons class.\n  uses-material-design: true\n\n  # To add assets to your application, add an assets section, like this:\n  # assets:\n  #   - images/a_dot_burr.jpeg\n  #   - images/a_dot_ham.jpeg\n\n  # An image asset can refer to one or more resolution-specific \"variants\", see\n  # https://flutter.dev/to/resolution-aware-images\n\n  # For details regarding adding assets from package dependencies, see\n  # https://flutter.dev/to/asset-from-package\n\n  # To add custom fonts to your application, add a fonts section here,\n  # in this \"flutter\" section. Each entry in this list should have a\n  # \"family\" key with the font family name, and a \"fonts\" key with a\n  # list giving the asset and other descriptors for the font. For\n  # example:\n  # fonts:\n  #   - family: Schyler\n  #     fonts:\n  #       - asset: fonts/Schyler-Regular.ttf\n  #       - asset: fonts/Schyler-Italic.ttf\n  #         style: italic\n  #   - family: Trajan Pro\n  #     fonts:\n  #       - asset: fonts/TrajanPro.ttf\n  #       - asset: fonts/TrajanPro_Bold.ttf\n  #         weight: 700\n  #\n  # For details regarding fonts from package dependencies,\n  # see https://flutter.dev/to/font-from-package\n"
    },
    {
      "path": "lib/app/controllers/auth_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass AuthController extends GetxController {\n  final supabase = Supabase.instance.client;\n\n  Future<AuthResponse> register(String email, String password) {\n    return supabase.auth.signUp(email: email.trim(), password: password);\n  }\n\n  Future<AuthResponse> login(String email, String password) {\n    return supabase.auth.signInWithPassword(\n      email: email.trim(),\n      password: password,\n    );\n  }\n\n  void resetPassword(String email) async {\n    //untuk cek apakah email valid atau tidak, jika valid maka akan mengirim email reset password\n    if (email.isNotEmpty && GetUtils.isEmail(email)) {\n      try {\n        await supabase.auth.resetPasswordForEmail(email.trim());\n\n        Get.defaultDialog(\n          title: 'Berhasil',\n          middleText:\n              'Email reset password berhasil dikirim. Silakan cek email.',\n          textConfirm: 'Baik',\n          onConfirm: () {\n            Get.back();\n            Get.back();\n          },\n        );\n      } on AuthException catch (error) {\n        Get.defaultDialog(title: 'Gagal', middleText: error.message);\n      } catch (error) {\n        Get.defaultDialog(\n          title: 'Gagal',\n          middleText: 'Tidak dapat mengirim email reset password: $error',\n        );\n      }\n    } else {\n      Get.defaultDialog(title: 'Gagal', middleText: 'Email tidak valid');\n    }\n  }\n\n  Future<void> logout() async {\n    try {\n      await supabase.auth.signOut();\n      Get.offAllNamed(Routes.LOGIN);\n    } on AuthException catch (error) {\n      Get.snackbar('Logout gagal', error.message);\n    }\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/bindings/add_product_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/add_product_controller.dart';\n\nclass AddProductBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<AddProductController>(() => AddProductController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/controllers/add_product_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'dart:io';\n\nimport 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\nimport 'package:image_picker/image_picker.dart';\nimport 'package:mime/mime.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass AddProductController extends GetxController {\n  //Inisialisi lagi untuk supabase nya\n  final supabase = Supabase.instance.client;\n\n  late TextEditingController nameC;\n  late TextEditingController priceC;\n\n  final ImagePicker picker = ImagePicker();\n\n  //variabel tempat dimana foto yang dipilih akan disimpan\n  final Rxn<File> selectedImage = Rxn<File>();\n\n  //fungsi untuk memilih foto\n  Future<void> pickImage() async {\n    final image = await picker.pickImage(source: ImageSource.gallery);\n\n    if (image != null) {\n      selectedImage.value = File(image.path);\n    }\n  }\n\n  Future<void> addProduct(String nama, int harga) async {\n    try {\n      //validasi foto terlebih dahulu\n      if (selectedImage.value == null) {\n        Get.snackbar(\"Gagal\", \"Silahkan masukan gambar terlebih dahulu\");\n        return;\n      }\n\n      String dateNow = DateTime.now().toIso8601String();\n      final product = await supabase\n          .from('product')\n          .insert({'name': nama, 'price': harga, 'created_at': dateNow})\n          .select()\n          .single(); //pakai select dan single agar supabase mengembalikan data yang udah diupload\n\n      //tampung id product yang baru dibuat\n      final int productId = product['id'];\n\n      //ambil extension dari file yang udah dipilih untuk di upload\n      final extension = selectedImage.value!.path.split('.').last;\n\n      //buat file path di storage\n      final String imagePath =\n          'products/$productId-${DateTime.now().millisecondsSinceEpoch}.$extension';\n\n      //tentukan mime type\n      final String? mimeType = lookupMimeType(selectedImage.value!.path);\n\n      //upload foto ke supabase storage\n      await supabase.storage\n          .from('product-images')\n          .upload(\n            imagePath,\n            selectedImage.value!,\n            fileOptions: FileOptions(contentType: mimeType),\n          );\n\n      //ambil public url\n      final String imageUrl = await supabase.storage\n          .from('product-images')\n          .getPublicUrl(imagePath);\n\n      //update url dan path di database\n      await supabase\n          .from('product')\n          .update({'image_url': imageUrl, 'image_path': imagePath})\n          .eq('id', productId);\n\n      Get.snackbar(\"Berhasil\", \"Produk Telah ditambahkan\");\n      Get.toNamed(Routes.PRODUCTS);\n    } catch (e) {\n      Get.snackbar(\"Gagal\", \"Produk Gagal ditambahkan\");\n    }\n  }\n\n  // on init dan juga on close dibuat utuk mencegah kebocoran text controller\n  @override\n  void onInit() {\n    // TODO: implement onInit\n    nameC = TextEditingController();\n    priceC = TextEditingController();\n    super.onInit();\n  }\n\n  @override\n  void onClose() {\n    // TODO: implement onClose\n    nameC.dispose();\n    priceC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/add_product/views/add_product_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/add_product_controller.dart';\n\nclass AddProductView extends GetView<AddProductController> {\n  const AddProductView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text(\n          'Tambah produk',\n          style: TextStyle(color: Colors.white),\n        ),\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(8.0),\n        child: Column(\n          children: [\n            TextField(\n              controller: controller.nameC,\n              decoration: InputDecoration(\n                labelText: \"Nama Produk\",\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              textInputAction: TextInputAction.next,\n            ),\n            SizedBox(height: 10),\n            TextField(\n              controller: controller.priceC,\n              decoration: InputDecoration(\n                labelText: \"Harga produk\",\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n            ),\n\n            const SizedBox(height: 20),\n\n            // Upload Foto\n            Row(\n              mainAxisAlignment: MainAxisAlignment.start,\n              children: [\n                Text(\n                  'Foto Produk',\n                  style: TextStyle(\n                    fontSize: 16,\n                    fontWeight: FontWeight.w600,\n                    color: Colors.grey.shade800,\n                  ),\n                ),\n              ],\n            ),\n\n            const SizedBox(height: 8),\n\n            Obx(\n              () => GestureDetector(\n                onTap: controller.pickImage,\n                child: Container(\n                  width: double.infinity,\n                  height: 220,\n                  decoration: BoxDecoration(\n                    color: Colors.grey.shade50,\n                    borderRadius: BorderRadius.circular(16),\n                    border: Border.all(color: Colors.grey.shade300, width: 1.5),\n                  ),\n                  child: controller.selectedImage.value != null\n                      ? Stack(\n                          children: [\n                            // Preview foto\n                            ClipRRect(\n                              borderRadius: BorderRadius.circular(15),\n                              child: Image.file(\n                                controller.selectedImage.value!,\n                                width: double.infinity,\n                                height: double.infinity,\n                                fit: BoxFit.cover,\n                              ),\n                            ),\n\n                            // Overlay\n                            Positioned.fill(\n                              child: Container(\n                                decoration: BoxDecoration(\n                                  borderRadius: BorderRadius.circular(15),\n                                  color: Colors.black.withOpacity(0.25),\n                                ),\n                              ),\n                            ),\n\n                            // Tombol ganti foto\n                            Center(\n                              child: Container(\n                                padding: const EdgeInsets.symmetric(\n                                  horizontal: 16,\n                                  vertical: 10,\n                                ),\n                                decoration: BoxDecoration(\n                                  color: Colors.white,\n                                  borderRadius: BorderRadius.circular(10),\n                                ),\n                                child: const Row(\n                                  mainAxisSize: MainAxisSize.min,\n                                  children: [\n                                    Icon(Icons.camera_alt_outlined, size: 20),\n                                    SizedBox(width: 8),\n                                    Text(\n                                      'Ganti Foto',\n                                      style: TextStyle(\n                                        fontWeight: FontWeight.w600,\n                                      ),\n                                    ),\n                                  ],\n                                ),\n                              ),\n                            ),\n                          ],\n                        )\n                      : Column(\n                          mainAxisAlignment: MainAxisAlignment.center,\n                          children: [\n                            Container(\n                              width: 64,\n                              height: 64,\n                              decoration: BoxDecoration(\n                                color: Colors.blue.shade50,\n                                shape: BoxShape.circle,\n                              ),\n                              child: Icon(\n                                Icons.cloud_upload_outlined,\n                                size: 32,\n                                color: Colors.blue,\n                              ),\n                            ),\n\n                            const SizedBox(height: 14),\n\n                            const Text(\n                              'Upload Foto Produk',\n                              style: TextStyle(\n                                fontSize: 16,\n                                fontWeight: FontWeight.w600,\n                              ),\n                            ),\n\n                            const SizedBox(height: 6),\n\n                            Text(\n                              'Ketuk untuk memilih foto',\n                              style: TextStyle(\n                                fontSize: 13,\n                                color: Colors.grey.shade600,\n                              ),\n                            ),\n\n                            const SizedBox(height: 4),\n\n                            Text(\n                              'JPG, JPEG atau PNG',\n                              style: TextStyle(\n                                fontSize: 12,\n                                color: Colors.grey.shade500,\n                              ),\n                            ),\n                          ],\n                        ),\n                ),\n              ),\n            ),\n\n            const SizedBox(height: 20),\n            SizedBox(height: 30),\n            ElevatedButton(\n              onPressed: () => controller.addProduct(\n                controller.nameC.text,\n                //karna harga berupa integer dan kita menampungnya di TextEditingController maka kita convert ke integer\n                int.parse(controller.priceC.text),\n              ),\n              child: Text(\"Tambah Product\"),\n              style: ElevatedButton.styleFrom(\n                backgroundColor: Colors.blue,\n                foregroundColor: Colors.white,\n                shape: RoundedRectangleBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/bindings/edit_product_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/edit_product_controller.dart';\n\nclass EditProductBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<EditProductController>(() => EditProductController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/controllers/edit_product_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass EditProductController extends GetxController {\n  late TextEditingController nameC;\n  late TextEditingController priceC;\n\n  final supabase = Supabase.instance.client;\n\n  //function untuk edit data by id, menggunakna future agar di build data nya sebelum kebuka halamanya\n  Future<Map<String, dynamic>?> getDataByID(int id) async {\n    final dataById = await supabase\n        .from(\"product\")\n        .select()\n        .eq('id', id)\n        .maybeSingle();\n\n    return dataById;\n  }\n\n  //function update data\n  Future<void> updateData(int id, String nama, int harga) async {\n    try {\n      await supabase\n          .from('product')\n          .update({'name': nama, 'price': harga})\n          .eq('id', id);\n\n      Get.back();\n      Get.snackbar(\"Berhasil\", \"Produk berhasil diperbarui\");\n    } catch (e) {\n      Get.snackbar(\"Gagal\", \"Produk gagal diperbarui: $e\");\n    }\n  }\n\n  // on init dan juga on close dibuat utuk mencegah kebocoran text controller\n  @override\n  void onInit() {\n    // TODO: implement onInit\n    nameC = TextEditingController();\n    priceC = TextEditingController();\n    super.onInit();\n  }\n\n  @override\n  void onClose() {\n    // TODO: implement onClose\n    nameC.dispose();\n    priceC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/edit_product/views/edit_product_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/edit_product_controller.dart';\n\nclass EditProductView extends GetView<EditProductController> {\n  const EditProductView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\n          'Edit product',\n          style: TextStyle(color: Colors.white),\n        ),\n        centerTitle: true,\n        backgroundColor: Colors.blue,\n      ),\n      body: FutureBuilder<Map<String, dynamic>?>(\n        //tangkap argument ID dari Homeview lalu lempar ke edit controller\n        future: controller.getDataByID(Get.arguments),\n        builder: (context, snapshot) {\n          if (snapshot.connectionState == ConnectionState.waiting) {\n            return Center(child: CircularProgressIndicator());\n          }\n          //tangkap data  input field berdasarkan id yang ditangkap oleh snapshot\n          var dataById = snapshot.data!;\n          controller.nameC.text = dataById[\"name\"];\n          controller.priceC.text = dataById[\"price\"].toString();\n\n          return Padding(\n            padding: const EdgeInsets.all(8.0),\n            child: Column(\n              children: [\n                TextField(\n                  controller: controller.nameC,\n                  decoration: InputDecoration(\n                    labelText: \"Nama Produk\",\n                    border: OutlineInputBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                  textInputAction: TextInputAction.next,\n                ),\n                SizedBox(height: 10),\n                TextField(\n                  controller: controller.priceC,\n                  decoration: InputDecoration(\n                    labelText: \"Harga produk\",\n                    border: OutlineInputBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                ),\n                SizedBox(height: 30),\n                ElevatedButton(\n                  onPressed: () {\n                    controller.updateData(\n                      //jangan lupa lempar id yg ada pada arguments sebagai parameter\n                      Get.arguments,\n                      controller.nameC.text,\n                      int.parse(controller.priceC.text),\n                    );\n                  },\n\n                  child: Text(\"Simpan Perubahan\"),\n                  style: ElevatedButton.styleFrom(\n                    backgroundColor: Colors.blue,\n                    foregroundColor: Colors.white,\n                    shape: RoundedRectangleBorder(\n                      borderRadius: BorderRadius.circular(10),\n                    ),\n                  ),\n                ),\n              ],\n            ),\n          );\n        },\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/bindings/home_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<HomeController>(() => HomeController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/home/controllers/home_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:get/get.dart';\n\nclass HomeController extends GetxController {\n  //TODO: Implement HomeController\n\n  final count = 0.obs;\n  @override\n  void onInit() {\n    super.onInit();\n  }\n\n  @override\n  void onReady() {\n    super.onReady();\n  }\n\n  @override\n  void onClose() {\n    super.onClose();\n  }\n\n  void increment() => count.value++;\n}\n"
    },
    {
      "path": "lib/app/modules/home/views/home_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:belajar_supabase/app/controllers/auth_controller.dart';\nimport 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/home_controller.dart';\n\nclass HomeView extends GetView<HomeController> {\n  final authC = Get.find<AuthController>();\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('HomeView', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n        actions: [\n          IconButton(icon: Icon(Icons.logout), onPressed: authC.logout),\n        ],\n      ),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            Get.toNamed(Routes.PRODUCTS);\n          },\n          child: Text(\"Produk\"),\n          style: ElevatedButton.styleFrom(\n            backgroundColor: Colors.blue,\n            foregroundColor: Colors.white,\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/bindings/login_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/login_controller.dart';\n\nclass LoginBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<LoginController>(() => LoginController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/controllers/login_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:belajar_supabase/app/controllers/auth_controller.dart';\nimport 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass LoginController extends GetxController {\n  final authController = Get.find<AuthController>();\n\n  final emailC = TextEditingController();\n  final passwordC = TextEditingController();\n\n  Future<void> login() async {\n    final email = emailC.text.trim();\n    final password = passwordC.text;\n\n    if (email.isEmpty || password.isEmpty) {\n      Get.snackbar('Error', 'Email dan password tidak boleh kosong');\n      return;\n    }\n\n    try {\n      final AuthResponse response = await authController.login(email, password);\n\n      if (response.user == null || response.session == null) {\n        Get.snackbar('Error', 'Login gagal. Silakan coba lagi.');\n        return;\n      }\n\n      Get.snackbar('Berhasil', 'Login berhasil');\n      Get.offAllNamed(Routes.HOME);\n    } on AuthException catch (error) {\n      Get.snackbar('Login gagal', error.message);\n    } catch (error) {\n      Get.snackbar('Error', error.toString());\n    }\n  }\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    passwordC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/login/views/login_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/gestures.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../../../routes/app_pages.dart';\nimport '../controllers/login_controller.dart';\n\nclass LoginView extends GetView<LoginController> {\n  const LoginView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text('Login', style: TextStyle(color: Colors.white)),\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(8.0),\n        child: Column(\n          children: [\n            SizedBox(height: 20),\n            TextField(\n              controller: controller.emailC,\n              keyboardType: TextInputType.emailAddress,\n              textInputAction: TextInputAction.next,\n              decoration: InputDecoration(\n                label: Text('email'),\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n            ),\n            SizedBox(height: 20),\n\n            TextField(\n              controller: controller.passwordC,\n              decoration: InputDecoration(\n                label: Text('password'),\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              obscureText: true,\n            ),\n            SizedBox(height: 35),\n            ElevatedButton(\n              style: ElevatedButton.styleFrom(\n                backgroundColor: Colors.blue,\n                foregroundColor: Colors.white,\n                shape: RoundedRectangleBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              onPressed: () {\n                controller.login();\n              },\n              child: const Text('Login'),\n            ),\n            SizedBox(height: 20),\n            TextButton(\n              onPressed: () {\n                Get.toNamed(Routes.RESET_PASSWORD);\n              },\n              child: const Text('Lupa password?'),\n            ),\n\n            RichText(\n              text: TextSpan(\n                text: \"Belum punya akun? \",\n                style: TextStyle(color: Colors.black),\n                children: [\n                  TextSpan(\n                    text: 'Daftar',\n                    recognizer: TapGestureRecognizer()\n                      //..onTap = langsung mengatur properti objek menggunakan cascade.\n                      ..onTap = () {\n                        Get.toNamed(Routes.REGISTER);\n                      },\n                    style: TextStyle(\n                      color: Colors.blue,\n                      fontWeight: FontWeight.bold,\n                    ),\n                  ),\n                ],\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/products/bindings/products_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/products_controller.dart';\n\nclass ProductsBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<ProductsController>(() => ProductsController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/products/controllers/products_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass ProductsController extends GetxController {\n  //inisialisasi client terlebih dahulu, tampung dalam variabel\n  final supabase = Supabase.instance.client;\n\n  //gunakan stream untuk realtime database dengan memantau stream(primaryKey: ['id'])\n  //dipanatu id karena Supabase perlu tahu primary key tabel product untuk melacak perubahan baris.\n  Stream<List<Map<String, dynamic>>> TampilDataProduk() {\n    final data = supabase.from('product').stream(primaryKey: ['id']);\n    //cukup return variabelnya\n    return data;\n  }\n\n  //fungsi delet product\n  //tampung paramatere id yng dikirim dari view\n  Future<void> deleteProduk(int id) async {\n    Get.defaultDialog(\n      middleText: \"Yakin Ingin menghapus produk ini?\",\n      title: \"Hapus Produk\",\n      textConfirm: \"Ya\",\n      textCancel: \"Tidak\",\n      buttonColor: Colors.red,\n      onConfirm: () async {\n        try {\n          Get.back();\n          //sytax dasar delete row\n          // await supabase.from('product').delete().eq('id', id);\n          //pastikan untuk mengaktifkan policies RlS di supabase\n          // 1. Ambil data product berdasarkan ID\n          final product = await supabase\n              .from('product')\n              .select('image_path')\n              .eq('id', id)\n              .maybeSingle();\n\n          // 2. Kalau product mempunyai foto,\n          // hapus foto tersebut dari Storage\n          if (product != null && product['image_path'] != null) {\n            await supabase.storage.from('product-images').remove([\n              product['image_path'],\n            ]);\n          }\n\n          // 3. Hapus product dari database\n          await supabase.from('product').delete().eq('id', id);\n\n          Get.snackbar(\"Berhasil\", \"Produk telah berhasil dihapus\");\n        } catch (e) {\n          Get.snackbar(\"Gagal\", \"Produk tidak bisa dihapus: $e\");\n        }\n      },\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/products/views/products_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/products_controller.dart';\n\nclass ProductsView extends GetView<ProductsController> {\n  const ProductsView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.blue,\n        title: const Text(\n          'ProductsView',\n          style: TextStyle(color: Colors.white),\n        ),\n        centerTitle: true,\n      ),\n\n      body: Center(\n        // Menggunakan StreamBuilder untuk mendengarkan perubahan data dari Stream\n        child: StreamBuilder(\n          // Stream digunakan untuk menerima data yang dapat berubah secara realtime\n          stream: controller.TampilDataProduk(),\n          // Builder digunakan untuk membangun UI berdasarkan kondisi dan data dari Stream\n          builder: (context, asyncSnapshot) {\n            if (asyncSnapshot.connectionState == ConnectionState.waiting) {\n              return CircularProgressIndicator();\n            }\n            // Mengambil data dari AsyncSnapshot yang berasal dari Stream\n            final products = asyncSnapshot.data ?? [];\n\n            return ListView.builder(\n              itemCount: products.length,\n              itemBuilder: (context, index) {\n                final product = products[index];\n                return ListTile(\n                  onTap: () => Get.toNamed(\n                    Routes.EDIT_PRODUCT,\n                    //NOTE: wajib mengirim argument ketika pindah ke halaman edit dengan arguments\n                    arguments: product['id'],\n                  ),\n\n                  //foto Produk\n                  leading: SizedBox(\n                    width: 50,\n                    height: 50,\n                    child: product['image_url'] != null\n                        ? Image.network(\n                            product['image_url'],\n                            fit: BoxFit.cover,\n                            errorBuilder: (context, error, stackTrace) {\n                              return const Icon(Icons.broken_image);\n                            },\n                          )\n                        : const Icon(Icons.image),\n                  ),\n                  title: Text(product[\"name\"]),\n                  subtitle: Text(\"Rp.${product['price'].toString()}\"),\n                  trailing: IconButton(\n                    //kirim index dengan paramater primary key table\n                    onPressed: () => controller.deleteProduk(product['id']),\n                    icon: Icon(Icons.delete),\n                  ),\n                );\n              },\n            );\n          },\n        ),\n      ),\n\n      //ini tombol untuk menambah data ke firebase\n      floatingActionButton: FloatingActionButton(\n        backgroundColor: Colors.blue,\n        foregroundColor: Colors.white,\n        tooltip: \"Tambah Data\",\n        shape: RoundedRectangleBorder(\n          borderRadius: BorderRadiusGeometry.circular(50),\n        ),\n        onPressed: () => Get.toNamed(Routes.ADD_PRODUCT),\n        child: Icon(Icons.add),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/register/bindings/register_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/register_controller.dart';\n\nclass RegisterBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<RegisterController>(() => RegisterController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/register/controllers/register_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:belajar_supabase/app/controllers/auth_controller.dart';\nimport 'package:belajar_supabase/app/routes/app_pages.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\nimport 'package:supabase_flutter/supabase_flutter.dart';\n\nclass RegisterController extends GetxController {\n  final authController = Get.find<AuthController>();\n\n  TextEditingController emailC = TextEditingController();\n  TextEditingController passwordC = TextEditingController();\n\n  Future<void> register() async {\n    final email = emailC.text.trim();\n    final password = passwordC.text;\n\n    if (email.isEmpty || password.isEmpty) {\n      Get.snackbar('Error', 'Email dan Password tidak boleh kosong');\n      return;\n    }\n    try {\n      final AuthResponse response = await authController.register(\n        email,\n        password,\n      );\n      final user = response.user;\n      final session = response.session;\n\n      if (user == null) {\n        Get.snackbar('Error', 'Registrasi gagal. Silakan coba lagi.');\n        return;\n      }\n\n      if (session == null) {\n        Get.snackbar(\n          'Berhasil',\n          'Akun dibuat. Silakan cek email untuk verifikasi.',\n        );\n        Get.offAllNamed(Routes.LOGIN);\n        return;\n      }\n\n      Get.snackbar('Berhasil', 'Akun berhasil dibuat');\n\n      Get.offAllNamed(Routes.HOME);\n    } on AuthException catch (error) {\n      Get.snackbar('Registrasi gagal', error.message);\n    } catch (error) {\n      Get.snackbar('Error', error.toString());\n    }\n  }\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    passwordC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/register/views/register_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:flutter/material.dart';\n\nimport 'package:get/get.dart';\n\nimport '../controllers/register_controller.dart';\n\nclass RegisterView extends GetView<RegisterController> {\n  const RegisterView({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('Register', style: TextStyle(color: Colors.white)),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(8.0),\n        child: Column(\n          children: [\n            SizedBox(height: 20),\n\n            TextField(\n              controller: controller.emailC,\n              keyboardType: TextInputType.emailAddress,\n              textInputAction: TextInputAction.next,\n              decoration: InputDecoration(\n                label: Text('email'),\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n            ),\n            SizedBox(height: 20),\n\n            TextField(\n              controller: controller.passwordC,\n              decoration: InputDecoration(\n                label: Text('password'),\n                border: OutlineInputBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              obscureText: true,\n            ),\n            SizedBox(height: 35),\n            ElevatedButton(\n              style: ElevatedButton.styleFrom(\n                backgroundColor: Colors.blue,\n                foregroundColor: Colors.white,\n                shape: RoundedRectangleBorder(\n                  borderRadius: BorderRadius.circular(10),\n                ),\n              ),\n              onPressed: () {\n                controller.register();\n              },\n              child: const Text('Register'),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/bindings/reset_password_binding.dart",
      "language": "dart",
      "purpose": "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.",
      "source": "import 'package:get/get.dart';\n\nimport '../controllers/reset_password_controller.dart';\n\nclass ResetPasswordBinding extends Bindings {\n  @override\n  void dependencies() {\n    Get.lazyPut<ResetPasswordController>(() => ResetPasswordController());\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/controllers/reset_password_controller.dart",
      "language": "dart",
      "purpose": "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.",
      "source": "import 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nclass ResetPasswordController extends GetxController {\n  final emailC = TextEditingController();\n\n  @override\n  void onClose() {\n    emailC.dispose();\n    super.onClose();\n  }\n}\n"
    },
    {
      "path": "lib/app/modules/reset_password/views/reset_password_view.dart",
      "language": "dart",
      "purpose": "View: tampilan halaman pada struktur GetX/Get CLI.",
      "source": "import 'package:belajar_supabase/app/controllers/auth_controller.dart';\nimport 'package:flutter/material.dart';\nimport 'package:get/get.dart';\n\nimport '../controllers/reset_password_controller.dart';\n\nclass ResetPasswordView extends GetView<ResetPasswordController> {\n  final authController = Get.find<AuthController>();\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text(\n          'Reset password',\n          style: TextStyle(color: Colors.white),\n        ),\n        backgroundColor: Colors.blue,\n        centerTitle: true,\n      ),\n      body: Padding(\n        padding: const EdgeInsets.all(10),\n        child: Center(\n          child: Column(\n            children: [\n              const SizedBox(height: 30),\n              TextField(\n                controller: controller.emailC,\n                keyboardType: TextInputType.emailAddress,\n                decoration: InputDecoration(\n                  label: const Text('Masukkan email terdaftar'),\n                  border: OutlineInputBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n              ),\n              const SizedBox(height: 20),\n              ElevatedButton(\n                onPressed: () =>\n                    authController.resetPassword(controller.emailC.text),\n                style: ElevatedButton.styleFrom(\n                  backgroundColor: Colors.blue,\n                  foregroundColor: Colors.white,\n                  shape: RoundedRectangleBorder(\n                    borderRadius: BorderRadius.circular(10),\n                  ),\n                ),\n                child: const Text('Reset'),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n"
    },
    {
      "path": "lib/app/routes/app_pages.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "import 'package:get/get.dart';\n\nimport '../modules/add_product/bindings/add_product_binding.dart';\nimport '../modules/add_product/views/add_product_view.dart';\nimport '../modules/edit_product/bindings/edit_product_binding.dart';\nimport '../modules/edit_product/views/edit_product_view.dart';\nimport '../modules/home/bindings/home_binding.dart';\nimport '../modules/home/views/home_view.dart';\nimport '../modules/login/bindings/login_binding.dart';\nimport '../modules/login/views/login_view.dart';\nimport '../modules/products/bindings/products_binding.dart';\nimport '../modules/products/views/products_view.dart';\nimport '../modules/register/bindings/register_binding.dart';\nimport '../modules/register/views/register_view.dart';\nimport '../modules/reset_password/bindings/reset_password_binding.dart';\nimport '../modules/reset_password/views/reset_password_view.dart';\n\npart 'app_routes.dart';\n\nclass AppPages {\n  AppPages._();\n\n  static const INITIAL = Routes.LOGIN;\n\n  static final routes = [\n    GetPage(name: _Paths.HOME, page: () => HomeView(), binding: HomeBinding()),\n    GetPage(\n      name: _Paths.PRODUCTS,\n      page: () => const ProductsView(),\n      binding: ProductsBinding(),\n    ),\n    GetPage(\n      name: _Paths.ADD_PRODUCT,\n      page: () => const AddProductView(),\n      binding: AddProductBinding(),\n    ),\n    GetPage(\n      name: _Paths.EDIT_PRODUCT,\n      page: () => const EditProductView(),\n      binding: EditProductBinding(),\n    ),\n    GetPage(\n      name: _Paths.LOGIN,\n      page: () => const LoginView(),\n      binding: LoginBinding(),\n    ),\n    GetPage(\n      name: _Paths.REGISTER,\n      page: () => const RegisterView(),\n      binding: RegisterBinding(),\n    ),\n    GetPage(\n      name: _Paths.RESET_PASSWORD,\n      page: () => ResetPasswordView(),\n      binding: ResetPasswordBinding(),\n    ),\n  ];\n}\n"
    },
    {
      "path": "lib/app/routes/app_routes.dart",
      "language": "dart",
      "purpose": "Route config: nama route dan halaman aplikasi yang terdaftar.",
      "source": "part of 'app_pages.dart';\n// DO NOT EDIT. This is code generated via package:get_cli/get_cli.dart\n\nabstract class Routes {\n  Routes._();\n  static const HOME = _Paths.HOME;\n  static const PRODUCTS = _Paths.PRODUCTS;\n  static const ADD_PRODUCT = _Paths.ADD_PRODUCT;\n  static const EDIT_PRODUCT = _Paths.EDIT_PRODUCT;\n  static const LOGIN = _Paths.LOGIN;\n  static const REGISTER = _Paths.REGISTER;\n  static const RESET_PASSWORD = _Paths.RESET_PASSWORD;\n}\n\nabstract class _Paths {\n  _Paths._();\n  static const HOME = '/home';\n  static const PRODUCTS = '/products';\n  static const ADD_PRODUCT = '/add-product';\n  static const EDIT_PRODUCT = '/edit-product';\n  static const LOGIN = '/login';\n  static const REGISTER = '/register';\n  static const RESET_PASSWORD = '/reset-password';\n}\n"
    }
  ]
};

window.INTERMEDIATE_PACKAGE_LINKS = {
  "01_mediaquery": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "02_flexible": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "03_expanded": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "04_fitted_box": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "05_wrap": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "06_get_width_height": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "07_layout_builder": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "08_constrained_box": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "09_orientation_builder": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "10_animated_container": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "11_animated_alignment": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "12_animated_position": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "13_animated_builder": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "14_hero_navigasi": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    }
  ],
  "15_widget_clip": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    },
    {
      "name": "google_fonts",
      "version": "^8.2.1",
      "url": "https://pub.dev/packages/google_fonts"
    }
  ],
  "16_widget_carousel_slider": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    },
    {
      "name": "carousel_slider",
      "version": "^5.1.2",
      "url": "https://pub.dev/packages/carousel_slider"
    }
  ],
  "17_belajar_firebase": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    },
    {
      "name": "firebase_core",
      "version": "^4.13.0",
      "url": "https://pub.dev/packages/firebase_core"
    },
    {
      "name": "cloud_firestore",
      "version": "^6.8.0",
      "url": "https://pub.dev/packages/cloud_firestore"
    }
  ],
  "18_praktik_firebase_CRUD": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    },
    {
      "name": "firebase_core",
      "version": "^4.13.0",
      "url": "https://pub.dev/packages/firebase_core"
    },
    {
      "name": "firebase_auth",
      "version": "^6.5.7",
      "url": "https://pub.dev/packages/firebase_auth"
    },
    {
      "name": "cloud_firestore",
      "version": "^6.9.0",
      "url": "https://pub.dev/packages/cloud_firestore"
    }
  ],
  "19_belajar_supabase": [
    {
      "name": "cupertino_icons",
      "version": "^1.0.8",
      "url": "https://pub.dev/packages/cupertino_icons"
    },
    {
      "name": "get",
      "version": "^4.7.3",
      "url": "https://pub.dev/packages/get"
    },
    {
      "name": "supabase_flutter",
      "version": "^2.18.0",
      "url": "https://pub.dev/packages/supabase_flutter"
    },
    {
      "name": "image_picker",
      "version": "^1.2.4",
      "url": "https://pub.dev/packages/image_picker"
    },
    {
      "name": "mime",
      "version": "^2.1.0",
      "url": "https://pub.dev/packages/mime"
    }
  ]
};
