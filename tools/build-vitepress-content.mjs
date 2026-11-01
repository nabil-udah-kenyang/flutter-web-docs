import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const guideDir = resolve(root, "site/guide");
const metaFile = resolve(root, "site/.vitepress/course-meta.mjs");
const manualGuides = new Set(["backend-native.md"]);

const readModules = async () => {
  const source = await readFile(resolve(root, "assets/app.js"), "utf8");
  const end = source.indexOf("\nconst tracks = [");
  if (end === -1) throw new Error("Tidak menemukan data modul di assets/app.js.");

  return vm.runInNewContext(`${source.slice(0, end)}\nmodules`, Object.create(null), {
    timeout: 1_000
  });
};

const readSnapshots = async () => {
  const context = { window: {} };
  const source = await readFile(resolve(root, "assets/code-data.js"), "utf8");
  vm.runInNewContext(source, context, { timeout: 2_000 });
  return {
    snapshots: context.window.CODE_SNAPSHOTS ?? {},
    packages: context.window.PACKAGE_LINKS ?? {}
  };
};

const readIntermediate = async () => {
  const context = { window: {} };
  const source = await readFile(resolve(root, "assets/intermediate-data.js"), "utf8");
  vm.runInNewContext(source, context, { timeout: 2_000 });
  return {
    modules: context.window.INTERMEDIATE_MODULES ?? [],
    snapshots: context.window.INTERMEDIATE_CODE_SNAPSHOTS ?? {},
    packages: context.window.INTERMEDIATE_PACKAGE_LINKS ?? {}
  };
};

const fence = (source, language = "text") => {
  const marker = source.includes("```") ? "````" : "```";
  return `${marker}${language}\n${source.trimEnd()}\n${marker}`;
};

const inlineList = (items = []) => items.map((item) => `- ${item}`).join("\n");

const securityNote = (slug) => {
  if (slug === "getstorage") {
    return `::: danger Jangan simpan password mentah
Contoh source lama menyimpan email dan password untuk demonstrasi alur "Remember me". Jangan gunakan pola itu pada aplikasi nyata. Simpan hanya preferensi yang tidak sensitif; autentikasi sebaiknya memakai token berumur pendek dan penyimpanan aman yang sesuai platform, bukan \`GetStorage\` biasa.
:::`;
  }

  if (["daftar-wilayah-indo", "latihan-get-cli", "studycase-rajaongkir"].includes(slug)) {
    return `::: warning API key di aplikasi
Placeholder pada contoh aman untuk dokumentasi, tetapi secret produksi tidak boleh dibundel ke aplikasi Flutter. Pindahkan secret dan aturan bisnis sensitif ke backend/proxy, lalu batasi key publik di dashboard penyedia API.
:::`;
  }

  if (["firebase-firestore-basics", "firebase-auth-crud", "supabase-auth-storage-crud"].includes(slug)) {
    return `::: warning Konfigurasi cloud & keamanan
Snapshot konfigurasi pada dokumentasi telah disamarkan. Untuk aplikasi nyata, gunakan konfigurasi environment/build yang tepat, aktifkan Firestore Rules atau Supabase RLS, dan jangan menganggap key di aplikasi sebagai tempat untuk menyimpan secret server.
:::`;
  }

  return "";
};

const sourceMarkdown = (files = []) => {
  if (!files.length) return "_Source snapshot belum tersedia untuk modul ini._";

  return files
    .map(
      (file) =>
        `### \`${file.path}\`\n\n${file.purpose}\n\n${fence(file.source, file.language)}`
    )
    .join("\n\n");
};

const deepDiveMarkdown = (topics = []) =>
  topics
    .map((topic) => {
      const sections = [`## ${topic.title}`, topic.description ?? ""];
      if (topic.tree) sections.push(fence(topic.tree, "text"));
      if (topic.code) sections.push(fence(topic.code, topic.language ?? "dart"));
      if (topic.codeExplanation?.length) {
        sections.push("### Catatan", inlineList(topic.codeExplanation));
      }
      if (topic.items?.length) {
        sections.push(
          "### Rincian",
          topic.items.map((item) => `- **${item.name}** — ${item.detail}`).join("\n")
        );
      }
      if (topic.symbols?.length) {
        sections.push(
          "### Referensi cepat",
          "| Simbol | Nama | Kegunaan |\n| --- | --- | --- |\n" +
            topic.symbols
              .map((item) => `| \`${item.symbol}\` | ${item.name} | ${item.usage.replaceAll("|", "\\|")} |`)
              .join("\n")
        );
      }
      if (topic.left && topic.right) {
        for (const item of [topic.left, topic.right]) {
          sections.push(`### ${item.title}`, inlineList(item.points));
          if (item.code) sections.push(fence(item.code, "dart"));
        }
      }
      if (topic.steps?.length) {
        sections.push(
          "### Urutan",
          topic.steps.map((item) => `${item.step}. **${item.label}** — ${item.detail}`).join("\n")
        );
      }
      return sections.filter(Boolean).join("\n\n");
    })
    .join("\n\n");

const moduleMarkdown = (module, snapshots, packageLinks) => {
  const packages = packageLinks[module.folder] ?? [];
  const sections = [
    "---",
    `title: ${JSON.stringify(module.title)}`,
    `description: ${JSON.stringify(module.goal)}`,
    "---",
    "",
    `# ${module.title}`,
    "",
    `> **${module.stage ?? "Beginner"} Track** · Modul ${module.id} · ${module.track} · ${module.level}`,
    "",
    "## Target belajar",
    "",
    module.goal,
    "",
    "## Yang akan dipelajari",
    "",
    inlineList(module.learn),
    "",
    "## Ringkasan",
    "",
    module.detail,
    ...(securityNote(module.slug) ? ["", securityNote(module.slug)] : []),
    "",
    "## Konsep kunci",
    "",
    inlineList(module.concept),
    "",
    "## Contoh inti",
    "",
    fence(module.snippet, "dart")
  ];

  if (module.explanation?.length) {
    sections.push("", "## Penjelasan", "", inlineList(module.explanation));
  }
  if (module.exercise?.length) {
    sections.push("", "## Latihan", "", inlineList(module.exercise));
  }
  if (module.run) {
    sections.push("", "## Jalankan", "", fence(module.run, "bash"));
  }
  if (module.deepDive?.length) sections.push("", deepDiveMarkdown(module.deepDive));
  if (packages.length) {
    sections.push(
      "",
      "## Package terkait",
      "",
      packages
        .map((item) => `- [${item.name}](${item.url})${item.version ? ` — \`${item.version}\`` : ""}`)
        .join("\n")
    );
  }
  sections.push("", "## Full source", "", sourceMarkdown(snapshots[module.folder]));
  return `${sections.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
};

const sidebarFrom = (modules) => {
  const stages = new Map();
  for (const module of modules) {
    const stage = module.stage ?? "Beginner";
    const tracks = stages.get(stage) ?? new Map();
    const items = tracks.get(module.track) ?? [];
    items.push({ text: `${module.id}. ${module.title}`, link: `/guide/${module.slug}` });
    tracks.set(module.track, items);
    stages.set(stage, tracks);
  }

  const stageOrder = ["Beginner", "Intermediate", "Advanced"];

  return [
    {
      text: "Mulai di sini",
      items: [
        { text: "Peta Backend & Native", link: "/guide/backend-native" },
        { text: "Daftar semua modul", link: "/guide/" }
      ]
    },
    ...stageOrder
      .filter((stage) => stages.has(stage))
      .map((stage) => ({
        text: `${stage} Track`,
        collapsed: true,
        items: [...stages.get(stage)].map(([text, items]) => ({
          text,
          collapsed: true,
          items
        }))
      }))
  ];
};

const guideIndex = (modules) => {
  const stages = new Map();
  for (const module of modules) {
    const stage = module.stage ?? "Beginner";
    const tracks = stages.get(stage) ?? new Map();
    const items = tracks.get(module.track) ?? [];
    items.push(module);
    tracks.set(module.track, items);
    stages.set(stage, tracks);
  }
  const stageOrder = ["Beginner", "Intermediate", "Advanced"];

  return `---\ntitle: Learning Tracks\n---\n\n# Learning Tracks\n\nIkuti jalur sesuai pengalamanmu. Total **${modules.length} modul** tersusun dari fondasi Dart sampai cloud backend dan aplikasi CRUD.\n\n${stageOrder
    .filter((stage) => stages.has(stage))
    .map(
      (stage) =>
        `## ${stage} Track\n\n${[...stages.get(stage)]
          .map(
            ([track, items]) =>
              `### ${track}\n\n${items.map((item) => `- [${item.id}. ${item.title}](./${item.slug})`).join("\n")}`
          )
          .join("\n\n")}`
    )
    .join("\n\n")}\n`;
};

const main = async () => {
  const [legacyModules, legacyData, intermediateData] = await Promise.all([
    readModules(),
    readSnapshots(),
    readIntermediate()
  ]);
  const modules = [...legacyModules, ...intermediateData.modules];
  const snapshots = { ...legacyData.snapshots, ...intermediateData.snapshots };
  const packages = { ...legacyData.packages, ...intermediateData.packages };
  await mkdir(guideDir, { recursive: true });

  const previous = await readdir(guideDir, { withFileTypes: true });
  await Promise.all(
    previous
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !manualGuides.has(entry.name))
      .map((entry) => rm(resolve(guideDir, entry.name)))
  );

  await Promise.all([
    ...modules.map((module) =>
      writeFile(
        resolve(guideDir, `${module.slug}.md`),
        moduleMarkdown(module, snapshots, packages),
        "utf8"
      )
    ),
    writeFile(resolve(guideDir, "index.md"), guideIndex(modules), "utf8"),
    writeFile(
      metaFile,
      `// Dibuat otomatis oleh tools/build-vitepress-content.mjs.\nexport const sidebar = ${JSON.stringify(
        sidebarFrom(modules),
        null,
        2
      )};\n`,
      "utf8"
    )
  ]);

  const fileCount = Object.values(snapshots).reduce((total, files) => total + files.length, 0);
  console.log(`Generated ${modules.length} VitePress lessons from ${fileCount} source snapshots.`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
