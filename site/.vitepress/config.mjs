import { defineConfig } from "vitepress";
import { resolve } from "node:path";
import { sidebar } from "./course-meta.mjs";

export default defineConfig({
  // GitHub Pages project site berada pada /flutter-web-docs/.
  // Lokal tetap di root; perintah build Pages mengisi DOCS_BASE.
  base: process.env.DOCS_BASE || "/",
  // Output ini dilacak di main agar GitHub Pages dapat menerbitkan /docs
  // tanpa branch deployment terpisah.
  outDir: resolve(import.meta.dirname, "../../docs"),
  title: "Dart & Flutter Beginner",
  description: "Dokumentasi latihan Dart, Flutter, API, GetX, dan studi kasus.",
  lang: "id-ID",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/images/logo.png" }],
    ["meta", { name: "theme-color", content: "#0b1220" }]
  ],
  markdown: {
    // Palet dengan keyword ungu, function biru, type kuning, dan string hijau.
    // Nomor baris membantu pemula merujuk bagian kode dengan tepat.
    theme: {
      light: "github-light",
      dark: "material-theme-palenight"
    },
    lineNumbers: true
  },
  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: "Flutter Track",
    nav: [
      { text: "Mulai belajar", link: "/guide/belajar-dart" },
      { text: "Backend & Native", link: "/guide/backend-native" },
      {
        text: "GitHub",
        link: "https://github.com/nabil-udah-kenyang/flutter_beginner_lesson"
      }
    ],
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/nabil-udah-kenyang/flutter_beginner_lesson"
      }
    ],
    footer: {
      message: "Dibangun dengan VitePress.",
      copyright: "© 2026 Naufal Nabil"
    },
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "Di halaman ini"
    },
    docFooter: {
      prev: "Sebelumnya",
      next: "Berikutnya"
    },
    returnToTopLabel: "Kembali ke atas",
    sidebarMenuLabel: "Menu"
  },
  vite: {
    // Reuse logo dan aset yang sudah ada tanpa menyalin binary ke sumber docs.
    publicDir: resolve(import.meta.dirname, "../../assets"),
    // Server dokumentasi hanya untuk pengembangan lokal; jangan diekspos ke LAN.
    server: {
      host: "127.0.0.1"
    }
  }
});
