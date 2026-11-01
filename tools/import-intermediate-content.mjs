import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const defaultSourceRoot = "/home/nabil/Documents/flutter-intermediete";
const sourceRoot = resolve(process.argv[2] ?? defaultSourceRoot);
const output = resolve(root, "assets/intermediate-data.js");

const lessons = [
  {
    id: "I01", folder: "01_mediaquery", slug: "media-query-responsive", title: "MediaQuery & Ukuran Layar", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Membaca ukuran layar, safe area, dan padding perangkat untuk membuat UI yang responsif.",
    learn: ["Membaca `size.width` dan `size.height`.", "Menggunakan padding safe area perangkat.", "Membuat ukuran widget proporsional terhadap layar."],
    detail: "MediaQuery memberi informasi lingkungan layar kepada widget. Materi ini memakai lebar, tinggi, dan padding perangkat untuk menunjukkan bahwa ukuran UI tidak seharusnya selalu hard-code.",
    concept: ["MediaQuery.of", "Size", "Safe area padding", "Responsive dimension"],
    explanation: ["`MediaQuery.of(context).size` memberi ukuran layar saat ini.", "Gunakan ukuran relatif dengan hati-hati; layout widget seperti `Expanded` sering lebih aman untuk area yang fleksibel."],
    exercise: ["Buat card yang lebarnya 80% layar.", "Tambahkan jarak atas dari `MediaQuery.padding.top`."]
  },
  {
    id: "I02", folder: "02_flexible", slug: "flexible-layout", title: "Flexible Layout", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Membagi ruang `Column` atau `Row` secara proporsional menggunakan Flexible.",
    learn: ["Membagi ruang memakai `flex`.", "Membedakan ukuran absolut dan ruang fleksibel.", "Mencegah overflow pada layout vertikal."],
    detail: "`Flexible` membiarkan child berbagi ruang dari parent yang terbatas. Ini cocok untuk layout yang harus menyesuaikan tinggi dan lebar berbagai perangkat.",
    concept: ["Flexible", "flex factor", "Column", "layout constraint"],
    explanation: ["Nilai `flex` adalah perbandingan ruang antar-child.", "Parent seperti `Column` harus memiliki constraint yang jelas agar pembagian ruang bisa dihitung."],
    exercise: ["Ubah perbandingan warna menjadi 2:5:3.", "Coba pindahkan Flexible ke dalam Row."]
  },
  {
    id: "I03", folder: "03_expanded", slug: "expanded-fill-space", title: "Expanded & Sisa Ruang", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Mengisi sisa ruang yang tersedia tanpa menghitung ukuran layar secara manual.",
    learn: ["Memahami perbedaan `Expanded` dan `Flexible`.", "Mengisi area tersisa dalam Column.", "Menghindari tinggi hard-code yang rapuh."],
    detail: "`Expanded` adalah pilihan tepat saat sebuah child harus mengambil semua ruang tersisa setelah widget lain diukur.",
    concept: ["Expanded", "remaining space", "Column", "constraints"],
    explanation: ["Expanded memaksa child mengisi ruang tersedia.", "Gunakan `flex` pada Expanded ketika ada lebih dari satu child yang berbagi sisa ruang."],
    exercise: ["Tambahkan dua Expanded dengan flex berbeda.", "Bandingkan hasilnya dengan Flexible."]
  },
  {
    id: "I04", folder: "04_fitted_box", slug: "fitted-box-overflow", title: "FittedBox & Anti Overflow", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Menskalakan child agar tetap muat di dalam batas parent.",
    learn: ["Memahami overflow teks/widget.", "Menggunakan `FittedBox` untuk scaling.", "Memilih kasus penggunaan yang tepat."],
    detail: "FittedBox menghitung skala child agar cocok dengan ruang yang tersedia. Ia berguna untuk logo atau konten visual, tetapi bukan pengganti layout responsif pada semua kasus.",
    concept: ["FittedBox", "BoxFit", "scale down", "overflow"],
    explanation: ["FittedBox menskalakan child, bukan mengubah constraint parent.", "Untuk teks panjang, pertimbangkan wrapping atau ellipsis terlebih dahulu."],
    exercise: ["Ganti child menjadi icon besar.", "Coba `fit: BoxFit.contain` dan amati perbedaannya."]
  },
  {
    id: "I05", folder: "05_wrap", slug: "wrap-responsive-grid", title: "Wrap Responsive Grid", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Menyusun banyak child yang otomatis pindah baris ketika ruang horizontal habis.",
    learn: ["Menggunakan Wrap sebagai alternatif Row.", "Mengatur arah, spacing, dan runSpacing.", "Mencegah overflow daftar chip atau card kecil."],
    detail: "`Wrap` mengalirkan child ke baris atau kolom berikutnya ketika tidak cukup ruang. Materi ini cocok sebagai fondasi grid ringan sebelum memakai GridView.",
    concept: ["Wrap", "spacing", "runSpacing", "Axis"],
    explanation: ["Wrap default mengalir secara horizontal lalu membuat baris baru.", "Gunakan `spacing` dan `runSpacing` agar jarak antaritem konsisten."],
    exercise: ["Tambahkan spacing dan runSpacing.", "Ubah arah menjadi vertikal lalu amati alirannya."]
  },
  {
    id: "I06", folder: "06_get_width_height", slug: "getx-screen-size", title: "GetX Width & Height", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Mengakses ukuran layar dan safe area melalui helper GetX.",
    learn: ["Menggunakan `Get.width` dan `Get.height`.", "Menggunakan extension MediaQuery dari GetX.", "Membandingkan helper GetX dengan MediaQuery."],
    detail: "GetX menyediakan shortcut untuk ukuran layar. Ini nyaman saat context tidak diperlukan, tetapi widget layout seperti Flexible dan LayoutBuilder tetap penting untuk layout yang benar-benar adaptif.",
    concept: ["Get.width", "Get.height", "context.mediaQueryPadding", "GetX extensions"],
    explanation: ["Get.width membaca ukuran layar global saat ini.", "Untuk ukuran parent tertentu, gunakan LayoutBuilder, bukan ukuran layar global."],
    exercise: ["Buat card dengan lebar `Get.width * .8`.", "Bandingkan hasil Get.width dengan MediaQuery."]
  },
  {
    id: "I07", folder: "07_layout_builder", slug: "layout-builder-constraints", title: "LayoutBuilder & Constraints", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Membangun UI berdasarkan ruang parent, bukan hanya ukuran perangkat.",
    learn: ["Membaca `BoxConstraints`.", "Menggunakan maxWidth dan maxHeight dari parent.", "Membedakan LayoutBuilder dan MediaQuery."],
    detail: "LayoutBuilder memberi ukuran ruang yang benar-benar diberikan parent kepada widget. Ini sangat berguna untuk card, panel, atau layout yang bisa dipakai ulang di area berbeda.",
    concept: ["LayoutBuilder", "BoxConstraints", "maxWidth", "maxHeight"],
    explanation: ["Constraints berasal dari parent dan dapat berbeda dari ukuran layar.", "Gunakan breakpoint berdasarkan `constraints.maxWidth` saat layout card berubah."],
    exercise: ["Tampilkan dua kolom bila maxWidth lebih dari 600.", "Buat child yang lebarnya 50% parent."]
  },
  {
    id: "I08", folder: "08_constrained_box", slug: "constrained-box", title: "ConstrainedBox & Batas Ukuran", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Memberi batas minimum dan maksimum ukuran pada child.",
    learn: ["Menentukan min/max width dan height.", "Memahami constraint parent-child.", "Menjaga ukuran card tetap masuk akal."],
    detail: "ConstrainedBox menetapkan aturan ukuran yang harus dipatuhi child. Ia membantu menjaga komponen tetap proporsional ketika konten atau layar berubah.",
    concept: ["ConstrainedBox", "BoxConstraints", "minWidth", "maxWidth"],
    explanation: ["Constraint parent dapat tetap membatasi ConstrainedBox.", "Gunakan ukuran maksimum untuk mencegah konten membentang berlebihan di desktop."],
    exercise: ["Buat card dengan maxWidth 420.", "Coba child dengan ukuran lebih kecil dan lebih besar dari constraint."]
  },
  {
    id: "I09", folder: "09_orientation_builder", slug: "orientation-builder", title: "OrientationBuilder", track: "Responsive Layout", stage: "Intermediate", level: "Intermediate",
    goal: "Mengubah struktur UI untuk orientasi portrait dan landscape.",
    learn: ["Mendeteksi `Orientation`.", "Membuat dua layout berdasarkan orientasi.", "Menguji perubahan ketika perangkat diputar."],
    detail: "OrientationBuilder memberi informasi portrait atau landscape di area widget. Gunakan ketika struktur layout memang berbeda, bukan hanya untuk mengubah beberapa ukuran kecil.",
    concept: ["OrientationBuilder", "portrait", "landscape", "adaptive layout"],
    explanation: ["Builder dipanggil ulang ketika orientasi berubah.", "LayoutBuilder tetap lebih tepat bila keputusan didasarkan pada lebar parent."],
    exercise: ["Buat GridView 2 kolom portrait dan 4 kolom landscape.", "Tampilkan label orientasi aktif."]
  },
  {
    id: "I10", folder: "10_animated_container", slug: "animated-container", title: "AnimatedContainer", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Membuat animasi implicit ketika ukuran, warna, atau dekorasi berubah.",
    learn: ["Menggunakan `AnimatedContainer`.", "Mengatur duration dan curve.", "Mengubah state reaktif dengan GetX."],
    detail: "AnimatedContainer menganimasikan perubahan properti tanpa AnimationController manual. Ini titik masuk yang baik untuk micro-interaction Flutter.",
    concept: ["AnimatedContainer", "implicit animation", "duration", "curve", "Obx"],
    explanation: ["Setiap perubahan properti animatable akan diinterpolasi otomatis.", "Pilih curve sesuai karakter gerakan, lalu jaga durasi tetap singkat untuk interaksi."],
    exercise: ["Tambahkan perubahan border radius.", "Ubah durasi menjadi 300 ms lalu bandingkan feel-nya."]
  },
  {
    id: "I11", folder: "11_animated_alignment", slug: "animated-align", title: "AnimatedAlign", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Menganimasikan perpindahan posisi child di dalam parent.",
    learn: ["Menggunakan AnimatedAlign.", "Mengubah Alignment berdasarkan state.", "Memilih curve gerakan."],
    detail: "AnimatedAlign menggerakkan satu child dari satu posisi alignment ke posisi lain. Ini lebih sederhana daripada Stack ketika perpindahan hanya mengikuti area parent.",
    concept: ["AnimatedAlign", "Alignment", "implicit animation", "curve"],
    explanation: ["Alignment menentukan titik lokasi child di dalam parent.", "Untuk koordinat yang lebih bebas dalam Stack, gunakan AnimatedPositioned."],
    exercise: ["Tambahkan empat target alignment.", "Ubah child menjadi Icon dan animasikan ukurannya bersamaan."]
  },
  {
    id: "I12", folder: "12_animated_position", slug: "animated-positioned", title: "AnimatedPositioned", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Menganimasikan posisi detail child di dalam Stack.",
    learn: ["Menggunakan Stack dan Positioned.", "Menganimasikan top/right/left/bottom.", "Mengontrol perpindahan berbasis state."],
    detail: "AnimatedPositioned cocok untuk elemen yang perlu berpindah pada koordinat tertentu. Widget ini harus berada di dalam Stack.",
    concept: ["Stack", "AnimatedPositioned", "top", "right", "state"],
    explanation: ["Perubahan nilai posisi akan dianimasikan sepanjang duration.", "Gunakan ukuran parent yang jelas agar perhitungan posisi bisa diprediksi."],
    exercise: ["Gerakkan kotak dalam diagonal.", "Tambahkan tombol reset ke posisi awal."]
  },
  {
    id: "I13", folder: "13_animated_builder", slug: "animated-builder", title: "AnimatedBuilder", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Membangun animasi eksplisit dengan AnimationController secara efisien.",
    learn: ["Mendengarkan nilai Animation.", "Membatasi rebuild lewat parameter child.", "Mengubah nilai 0–1 menjadi posisi UI."],
    detail: "AnimatedBuilder memberi kontrol lebih besar untuk animasi khusus, sekaligus memungkinkan widget statis dikirim sebagai `child` agar tidak dibangun ulang setiap frame.",
    concept: ["AnimatedBuilder", "AnimationController", "animation value", "child optimization"],
    explanation: ["Animation menghasilkan nilai yang berubah sepanjang waktu.", "Letakkan bagian UI yang tidak berubah pada parameter `child` agar builder lebih ringan."],
    exercise: ["Ubah rumus menjadi animasi vertikal.", "Tambahkan RotatedBox berdasarkan nilai animation."]
  },
  {
    id: "I14", folder: "14_hero_navigasi", slug: "hero-navigation", title: "Hero Navigation", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Membuat transisi shared element antarhalaman dengan Hero.",
    learn: ["Memberi Hero tag unik.", "Menghubungkan Hero di dua route.", "Memadukan Hero dengan GetX navigation."],
    detail: "Hero membuat Flutter menerbangkan elemen yang memiliki tag sama dari halaman asal ke tujuan. Efek ini efektif untuk gambar profil, produk, atau galeri.",
    concept: ["Hero", "tag", "Get.toNamed", "shared element transition"],
    explanation: ["Tag yang sama menghubungkan dua Hero pada route berbeda.", "Setiap Hero yang muncul bersamaan wajib memiliki tag unik."],
    exercise: ["Buat detail gambar dengan tag dinamis.", "Tambahkan Hero pada judul produk."]
  },
  {
    id: "I15", folder: "15_widget_clip", slug: "clip-widgets", title: "Clip Widgets & Typography", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Memotong tampilan widget menjadi bentuk oval dan rounded rectangle.",
    learn: ["Menggunakan ClipOval.", "Menggunakan ClipRRect.", "Menerapkan Google Fonts pada teks."],
    detail: "Clip widgets membantu membatasi area render child. Materi ini mempraktikkan avatar bulat dan card dengan sudut membulat serta penggunaan typography eksternal.",
    concept: ["ClipOval", "ClipRRect", "BorderRadius", "Google Fonts"],
    explanation: ["ClipOval cocok untuk avatar atau elemen bulat.", "ClipRRect memotong child berdasarkan BorderRadius yang disediakan."],
    exercise: ["Buat avatar dari Image.network.", "Coba radius berbeda untuk masing-masing sudut."]
  },
  {
    id: "I16", folder: "16_widget_carousel_slider", slug: "carousel-slider", title: "Carousel Slider", track: "Motion & Navigation", stage: "Intermediate", level: "Intermediate+",
    goal: "Membuat carousel dengan package dan mengatur perilaku autoplay.",
    learn: ["Menambahkan carousel_slider.", "Menyetel autoplay dan interval.", "Membuat item slider dari List."],
    detail: "Carousel Slider menunjukkan cara mengintegrasikan package Flutter dan mengubah daftar data menjadi UI horizontal yang bisa digeser.",
    concept: ["carousel_slider", "CarouselOptions", "autoplay", "map"],
    explanation: ["`CarouselOptions` mengatur tinggi, interval, dan efek slide.", "Bangun item dari data agar carousel mudah dipakai ulang pada konten nyata."],
    exercise: ["Ganti daftar angka menjadi model banner.", "Tambahkan indicator posisi slider."]
  },
  {
    id: "I17", folder: "17_belajar_firebase", slug: "firebase-firestore-basics", title: "Firebase & Cloud Firestore", track: "Cloud Backend", stage: "Advanced", level: "Advanced",
    goal: "Menginisialisasi Firebase dan membaca koleksi Cloud Firestore dari Flutter.",
    learn: ["Menggunakan FlutterFire CLI.", "Menginisialisasi Firebase sebelum runApp.", "Membaca collection Firestore dengan FutureBuilder."],
    detail: "Modul ini menghubungkan Flutter ke Firebase dan mengambil data satu kali dari Cloud Firestore. Ia menjadi fondasi sebelum masuk ke auth dan CRUD realtime.",
    concept: ["Firebase.initializeApp", "FlutterFire CLI", "Cloud Firestore", "FutureBuilder", "QuerySnapshot"],
    explanation: ["Binding harus siap sebelum Firebase diinisialisasi.", "`get()` mengambil snapshot sekali; gunakan stream saat UI harus mengikuti perubahan realtime."],
    exercise: ["Tambahkan dokumen buku baru dari Firebase Console.", "Tampilkan loading dan error state pada FutureBuilder."]
  },
  {
    id: "I18", folder: "18_praktik_firebase_CRUD", slug: "firebase-auth-crud", title: "Firebase Auth & Firestore CRUD", track: "Cloud Backend", stage: "Advanced", level: "Advanced",
    goal: "Membangun autentikasi email, verifikasi, reset password, dan CRUD produk dengan Firebase.",
    learn: ["Memantau auth state secara realtime.", "Sign in, sign up, email verification, dan reset password.", "Membuat, membaca, mengubah, dan menghapus data Firestore."],
    detail: "Project ini menggabungkan Firebase Authentication, Cloud Firestore, GetX controller, routing, dan form lifecycle menjadi aplikasi CRUD dengan alur login lengkap.",
    concept: ["FirebaseAuth", "authStateChanges", "Firestore snapshots", "CRUD", "TextEditingController lifecycle"],
    explanation: ["Auth state menentukan route awal aplikasi.", "Controller input harus dispose pada `onClose` agar resource tidak bocor.", "Firestore `snapshots()` mengalirkan perubahan data secara realtime."],
    exercise: ["Tambahkan validasi nama dan harga produk.", "Buat loading state saat tombol form dikirim.", "Atur Firestore Security Rules sebelum memakai data nyata."]
  },
  {
    id: "I19", folder: "19_belajar_supabase", slug: "supabase-auth-storage-crud", title: "Supabase Auth, Storage & CRUD", track: "Cloud Backend", stage: "Advanced", level: "Advanced",
    goal: "Membangun auth, database realtime, upload gambar Storage, dan CRUD produk dengan Supabase.",
    learn: ["Menginisialisasi Supabase dan membaca session.", "Membuat register, login, reset password, dan logout.", "Stream tabel realtime serta upload/hapus gambar di Storage."],
    detail: "Modul puncak ini memadukan Supabase Auth, Postgres realtime, Storage, image picker, dan GetX untuk membangun aplikasi produk yang lebih mendekati kebutuhan produksi.",
    concept: ["Supabase Auth", "Realtime stream", "Storage bucket", "image_picker", "RLS", "CRUD"],
    explanation: ["Session menentukan halaman pertama saat app dibuka.", "Untuk realtime, Supabase perlu primary key tabel agar perubahan baris dapat dilacak.", "Storage dan row database perlu dibersihkan bersama ketika produk dihapus."],
    exercise: ["Tambahkan validasi ukuran dan format gambar.", "Aktifkan serta uji RLS policy untuk tabel dan bucket.", "Gunakan environment/build configuration untuk URL dan publishable key."]
  }
];

const excluded = new Set([".dart_tool", "build", ".git", ".idea", ".vscode"]);
const packagesToSkip = new Set(["flutter", "flutter_test", "flutter_lints"]);
const redacted = "API-KEY-KAMU";

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (excluded.has(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    if (entry.isFile()) files.push(path);
  }
  return files;
};

const purpose = (path) => {
  const lower = path.toLowerCase();
  if (path === "pubspec.yaml") return "Konfigurasi project Flutter: dependency, asset, dan metadata aplikasi.";
  if (path.endsWith("main.dart")) return "Entry point aplikasi: inisialisasi layanan, GetMaterialApp, route awal, dan konfigurasi global.";
  if (path.endsWith("firebase_options.dart")) return "Konfigurasi FlutterFire yang dihasilkan CLI; nilai credential telah disamarkan untuk dokumentasi.";
  if (lower.includes("/controllers/")) return "Controller: state, aksi pengguna, lifecycle, dan penghubung view dengan data.";
  if (lower.includes("/bindings/")) return "Binding: mendaftarkan dependency/controller sebelum halaman dibuka.";
  if (lower.includes("/routes/")) return "Route config: nama route dan halaman aplikasi yang terdaftar.";
  if (lower.includes("/views/")) return "View: tampilan halaman pada struktur GetX/Get CLI.";
  return "Source Dart pendukung untuk modul pembelajaran ini.";
};

const configPlaceholders = {
  apikey: redacted,
  publishablekey: redacted,
  anonkey: redacted,
  secret: redacted,
  token: redacted,
  clientsecret: redacted,
  appid: "FIREBASE-APP-ID",
  messagingsenderid: "FIREBASE-SENDER-ID",
  projectid: "FIREBASE-PROJECT-ID",
  authdomain: "FIREBASE-AUTH-DOMAIN",
  databaseurl: "https://FIREBASE-DATABASE-URL",
  storagebucket: "FIREBASE-STORAGE-BUCKET",
  iosbundleid: "com.example.app",
  url: "https://PROJECT.supabase.co"
};

const sanitize = (source) => source
  .replace(
    /\b(api[_-]?key|publishablekey|anonkey|secret|token|client[_-]?secret|appid|messagingsenderid|projectid|authdomain|databaseurl|storagebucket|iosbundleid|url)\s*(:|=)\s*(["'])[^"']*\3/gi,
    (_, key, delimiter) => {
      const normalized = key.replace(/[_-]/g, "").toLowerCase();
      return `${key}${delimiter} "${configPlaceholders[normalized] ?? redacted}"`;
    }
  )
  .replace(/((?:["'](?:api[_-]?key|publishablekey|anonkey|secret|token|client[_-]?secret)["']\s*:\s*))["'][^"']+["']/gi, `$1"${redacted}"`)
  .replace(/https:\/\/[a-z0-9-]+\.supabase\.co/gi, "https://PROJECT.supabase.co")
  .replace(/AIza[\w-]{20,}/g, redacted)
  .replace(/sb_(?:publishable|secret)_[\w-]+/gi, redacted);

const parsePackages = (source) => {
  const packages = [];
  let dependencies = false;
  for (const rawLine of source.split("\n")) {
    const line = rawLine.replace(/\s+$/, "");
    if (/^(dependencies|dev_dependencies):\s*$/.test(line)) {
      dependencies = true;
      continue;
    }
    if (dependencies && /^[A-Za-z_][\w-]*:\s*$/.test(line)) dependencies = false;
    if (!dependencies) continue;
    const match = line.match(/^\s{2}([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!match || packagesToSkip.has(match[1])) continue;
    packages.push({ name: match[1], version: match[2].trim(), url: `https://pub.dev/packages/${match[1]}` });
  }
  return packages;
};

const sourceSort = (left, right) => {
  const weight = (path) => path === "lib/main.dart" ? 0 : path === "pubspec.yaml" ? 1 : 2;
  return weight(left.path) - weight(right.path) || left.path.localeCompare(right.path);
};

const buildModule = async (lesson) => {
  const moduleRoot = resolve(sourceRoot, lesson.folder);
  const files = await walk(moduleRoot);
  const snapshots = [];
  let packageLinks = [];

  for (const file of files) {
    const relative = file.slice(moduleRoot.length + 1).replaceAll("\\", "/");
    if (relative !== "pubspec.yaml" && !(relative.startsWith("lib/") && relative.endsWith(".dart"))) continue;
    const source = await readFile(file, "utf8");
    if (relative === "pubspec.yaml") packageLinks = parsePackages(source);
    snapshots.push({ path: relative, language: relative.endsWith(".yaml") ? "yaml" : "dart", purpose: purpose(relative), source: `${sanitize(source).trimEnd()}\n` });
  }

  const snippetFile = snapshots.find((file) => file.path.includes("/views/home_view.dart")) ?? snapshots.find((file) => file.path === "lib/main.dart");
  return {
    ...lesson,
    files: snapshots.map((file) => file.path),
    snippet: snippetFile?.source ?? "// Source belum tersedia.",
    run: "flutter pub get\nflutter run",
    snapshots: snapshots.sort(sourceSort),
    packageLinks
  };
};

const main = async () => {
  await stat(sourceRoot);
  const imported = await Promise.all(lessons.map(buildModule));
  const modules = imported.map(({ snapshots, packageLinks, ...lesson }) => lesson);
  const snapshots = Object.fromEntries(imported.map((lesson) => [lesson.folder, lesson.snapshots]));
  const packageLinks = Object.fromEntries(imported.map((lesson) => [lesson.folder, lesson.packageLinks]));
  const sourceCount = Object.values(snapshots).reduce((total, files) => total + files.length, 0);

  await writeFile(
    output,
    `// Dibuat dari ${sourceRoot} oleh tools/import-intermediate-content.mjs.\nwindow.INTERMEDIATE_MODULES = ${JSON.stringify(modules, null, 2)};\n\nwindow.INTERMEDIATE_CODE_SNAPSHOTS = ${JSON.stringify(snapshots, null, 2)};\n\nwindow.INTERMEDIATE_PACKAGE_LINKS = ${JSON.stringify(packageLinks, null, 2)};\n`,
    "utf8"
  );
  console.log(`Imported ${modules.length} intermediate lessons and ${sourceCount} source files.`);
};

main().catch((error) => {
  console.error(`Could not import intermediate content: ${error.message}`);
  process.exitCode = 1;
});
