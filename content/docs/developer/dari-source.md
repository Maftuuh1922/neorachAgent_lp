## Core

Butuh Python 3.11+ dan [uv](https://docs.astral.sh/uv/) (atau `pip`).

```bash
git clone https://github.com/Maftuuh1922/neovrach_Agent.git
cd neovrach_Agent/core
uv venv .venv && uv pip install -p .venv -e '.[test]'
.venv/bin/neovarch --version
.venv/bin/neovarch setup
.venv/bin/neovarch            # chat di terminal
```

Jalankan gateway:

```bash
.venv/bin/neovarch serve --port 9319
```

Tanpa token yang diberikan, gateway membuat token sendiri dan mencetaknya. Gunakan token itu sebagai `Authorization: Bearer <token>`.

Agar tidak mengganggu data aslimu, pakai folder data terpisah:

```bash
NEOVARCH_HOME=/tmp/nv-dev .venv/bin/neovarch serve --port 9320
```

### Provider tiruan

Untuk mencoba tanpa API key:

```bash
python tests/mock_llm.py --port 18080
neovarch setup --provider custom --base-url http://127.0.0.1:18080/v1 --model mock-model --non-interactive
python scripts/smoke_serve.py --port 9319   # gateway + mock: session.create, prompt.submit, balasan + satu alat
```

## Desktop

Butuh Node 22 (`^22.22.0`) dan npm 11.

```bash
cd desktop
npm ci
npm run dev --workspace apps/desktop      # Vite + Electron dengan hot reload
```

Build dan paket:

```bash
npm run build --workspace apps/desktop
cd apps/desktop
npx electron-builder --config electron-builder.config.cjs --linux AppImage tar.gz deb --x64
# Windows: npm run dist:win
```

Aplikasi desktop memakai core dari `~/.neovarch/neovarch-agent`. Untuk memakai core dari checkout-mu, pasang core dari folder lokal:

```bash
NEOVARCH_CORE_SRC=$PWD/core sh scripts/install.sh --core-only
```

## Android

Butuh Flutter 3.38+ (CI memakai 3.47.6) dan JDK 17.

```bash
flutter pub get
flutter run                                   # ke HP/emulator yang tersambung
flutter build apk --release --split-per-abi   # APK arm64 dan lainnya
```

iOS butuh macOS + Xcode (`flutter build ipa`).

## Landing dan dokumentasi

```bash
git clone https://github.com/Maftuuh1922/neorachAgent_lp.git
cd neorachAgent_lp
npm ci
npm run dev        # http://localhost:3000, dokumentasi di /docs
npm run build      # output statis di out/
BASE_PATH=/neorachAgent_lp npm run build   # untuk hosting di sub-path
```
