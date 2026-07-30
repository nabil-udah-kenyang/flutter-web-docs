import json
import re
import sys
from pathlib import Path

DOCS_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_ROOT = Path(__file__).resolve().parents[2]
OUTPUT = DOCS_ROOT / "assets" / "code-data.js"

EXCLUDED_DIRS = {
    ".git",
    ".dart_tool",
    "build",
    "android",
    "ios",
    "macos",
    "windows",
    "linux",
    "web",
}

PACKAGE_SKIP = {
    "flutter",
    "flutter_test",
    "flutter_lints",
}


def file_purpose(path: str) -> str:
    low = path.lower()
    if path == "pubspec.yaml":
        return "Konfigurasi project Flutter: nama package, dependency, asset, dan tool generator."
    if path.endswith("main.dart"):
        return "Entry point aplikasi: tempat runApp, MaterialApp/GetMaterialApp, route awal, dan konfigurasi global dimulai."
    if "/controllers/" in low or "/controller/" in low:
        return "Controller: menyimpan state, function aksi, lifecycle, dan penghubung antara view dengan data."
    if "/providers/" in low:
        return "Provider/service: mengambil data dari API atau sumber eksternal, lalu mengembalikannya ke controller."
    if "/models/" in low or "/model/" in low:
        return "Model data: bentuk object Dart dari response JSON agar data lebih rapi dan type-safe."
    if "/bindings/" in low:
        return "Binding: mendaftarkan controller/provider sebelum halaman digunakan."
    if "/routes/" in low:
        return "Route config: daftar nama route dan halaman yang dikenali aplikasi."
    if "/views/" in low:
        return "View: tampilan halaman pada struktur Get CLI."
    if "/pages/" in low:
        return "Page: tampilan layar utama atau subhalaman pada modul ini."
    if "/widgets/" in low:
        return "Reusable widget: potongan UI kecil yang dipisahkan agar mudah dipakai ulang."
    if "/constant/" in low:
        return "Constant/theme: nilai warna atau style global agar tampilan aplikasi konsisten."
    if path.endswith(".dart"):
        return "File Dart latihan: berisi konsep utama yang sedang dipelajari di modul ini."
    return "File pendukung yang dipakai modul ini."


def language(path: str) -> str:
    if path.endswith(".dart"):
        return "dart"
    if path.endswith((".yaml", ".yml")):
        return "yaml"
    if path.endswith(".json"):
        return "json"
    return "text"


def sanitize(source: str) -> str:
    source = re.sub(
        r"(api\s*=\s*)[\"'][A-Za-z0-9_\-]{20,}[\"']",
        r'\1"API-KEY-KAMU"',
        source,
    )
    source = re.sub(
        r"([\"']x-api-key[\"']\s*:\s*)[\"'][^\"']+[\"']",
        r"\1'API-KEY-KAMU'",
        source,
    )
    source = re.sub(
        r"([\"']key[\"']\s*:\s*)[\"'][A-Za-z0-9_\-]{16,}[\"']",
        r"\1'API-KEY-KAMU'",
        source,
    )
    source = re.sub(
        r"(request\.headers\[[\"']x-api-key[\"']\]\s*=\s*)[\"'][^\"']+[\"']",
        r"\1'API-KEY-KAMU'",
        source,
    )
    return source


def should_include(file: Path, module: Path) -> bool:
    relative_parts = file.relative_to(module).parts
    if any(part in EXCLUDED_DIRS for part in relative_parts):
        return False

    if file.name == "pubspec.lock":
        return False

    if file.name == "pubspec.yaml":
        return True

    suffix = file.suffix.lower()
    if suffix not in {".dart", ".json", ".yaml", ".yml"}:
        return False

    if module.name == "00_belajar_dart":
        return suffix == ".dart"

    return (
        relative_parts[0] == "lib"
        or relative_parts[0] == "assets"
        or "model" in file.as_posix().lower()
    )


def important_files(module: Path) -> list[Path]:
    return sorted(file for file in module.rglob("*") if file.is_file() and should_include(file, module))


def parse_packages(pubspec: Path) -> list[dict[str, str]]:
    if not pubspec.exists():
        return []

    packages: list[dict[str, str]] = []
    in_deps = False
    for raw in pubspec.read_text(encoding="utf-8").splitlines():
        line = raw.rstrip()
        if not line.strip() or line.strip().startswith("#"):
            continue

        if re.match(r"^(dependencies|dev_dependencies):\s*$", line):
            in_deps = True
            continue

        if in_deps and re.match(r"^[A-Za-z_][\w-]*:", line):
            in_deps = False

        if not in_deps:
            continue

        match = re.match(r"^\s{2}([A-Za-z_][\w-]*):\s*(.*)$", line)
        if not match:
            continue

        name = match.group(1)
        version = match.group(2).strip()
        if name in PACKAGE_SKIP:
            continue

        packages.append(
            {
                "name": name,
                "version": version or "",
                "url": f"https://pub.dev/packages/{name}",
            }
        )

    return packages


def main() -> None:
    source_root = Path(sys.argv[1]).expanduser().resolve() if len(sys.argv) > 1 else DEFAULT_SOURCE_ROOT
    snapshots = {}
    package_links = {}

    for module in sorted(path for path in source_root.iterdir() if path.is_dir() and path.name[:2].isdigit()):
        module_files = []
        for file in important_files(module):
            try:
                source = sanitize(file.read_text(encoding="utf-8"))
            except UnicodeDecodeError:
                continue

            relative = file.relative_to(module).as_posix()
            module_files.append(
                {
                    "path": relative,
                    "language": language(relative),
                    "purpose": file_purpose(relative),
                    "source": source.rstrip() + "\n",
                }
            )

        snapshots[module.name] = module_files
        package_links[module.name] = parse_packages(module / "pubspec.yaml")

    OUTPUT.write_text(
        "window.CODE_SNAPSHOTS = "
        + json.dumps(snapshots, ensure_ascii=False, indent=2)
        + ";\n\nwindow.PACKAGE_LINKS = "
        + json.dumps(package_links, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    print(
        f"Generated {sum(len(files) for files in snapshots.values())} files "
        f"and {sum(len(items) for items in package_links.values())} package links "
        f"from {len(snapshots)} modules"
    )


if __name__ == "__main__":
    main()
