Core berbicara dengan model lewat API yang kompatibel dengan OpenAI: `POST {base_url}/chat/completions` dengan streaming, pemanggilan alat, dan teks penalaran. Artinya hampir semua provider atau server model bisa dipakai.

## Preset bawaan

| Provider | Base URL | Variabel key | Model bawaan |
|---|---|---|---|
| `openai` | `https://api.openai.com/v1` | `OPENAI_API_KEY` | `gpt-4o-mini` |
| `openrouter` | `https://openrouter.ai/api/v1` | `OPENROUTER_API_KEY` | `openai/gpt-4o-mini` |
| `groq` | `https://api.groq.com/openai/v1` | `GROQ_API_KEY` | `llama-3.3-70b-versatile` |
| `deepseek` | `https://api.deepseek.com/v1` | `DEEPSEEK_API_KEY` | `deepseek-chat` |
| `ollama` | `http://127.0.0.1:11434/v1` | (tanpa key) | `llama3.1` |

Sebuah preset dianggap "terhubung" bila key-nya ada di `~/.neovarch/.env`. Pasang lewat terminal:

```bash
neovarch setup --provider groq --api-key gsk_... --non-interactive
```

## Endpoint kustom lewat CLI

Untuk server apa pun yang kompatibel OpenAI:

```bash
neovarch setup --provider custom --base-url https://router.contoh.com/v1 --model nama-model --api-key sk-...
```

API key untuk provider `custom` disimpan di `.env` sebagai `NEOVARCH_API_KEY`. Atau ubah langsung `config.yaml`:

```yaml
model:
  provider: custom
  base_url: http://192.168.1.20:4000/v1
  default: qwen2.5-coder
```

## Endpoint kustom dari aplikasi {{soon}}

Di v1.4.0 aplikasi desktop punya form **Endpoint kustom** di Pengaturan ▸ Provider. Isinya:

| Kolom | Keterangan |
|---|---|
| Nama | Label endpoint, juga dipakai sebagai id (`custom:<id>`). |
| URL | `https://gateway-online/v1` atau `http://localhost:PORT/v1`. Port bebas. Tanpa skema, alamat lokal (localhost, `127.*`, `10.*`, `192.168.*`, `172.16-31.*`) otomatis memakai `http://`, selain itu `https://`. |
| API key | Opsional. Disimpan di `.env` sebagai `NEOVARCH_EP_<ID>_API_KEY`. |
| Header tambahan | Opsional, satu per baris dengan format `Nama: nilai`. Disimpan di `.env` sebagai `NEOVARCH_EP_<ID>_HEADERS`. |
| Izinkan sertifikat self-signed | Mati secara bawaan. Nyalakan hanya untuk server milikmu sendiri dengan sertifikat buatan sendiri. |
| Model | Dipilih dari daftar otomatis, atau diketik manual. |

Tombol **Tes koneksi** memanggil `GET {base_url}/models` (dan `{base_url}/v1/models` bila URL tanpa `/v1`). Bila berhasil, daftar model terisi otomatis. Bila server tidak punya `/models`, ketik nama model secara manual; endpoint tetap bisa dipakai.

Setelah disimpan, endpoint tercatat di `custom_providers` di `config.yaml`:

```yaml
custom_providers:
  - id: litellm-lokal
    name: LiteLLM lokal
    base_url: http://127.0.0.1:4000/v1
    model: qwen2.5-coder
    discover_models: true
    allow_insecure_tls: false
    key_env: NEOVARCH_EP_LITELLM_LOKAL_API_KEY
    headers_env: NEOVARCH_EP_LITELLM_LOKAL_HEADERS
```

## Contoh server yang bisa dipakai

- **Lokal di PC yang sama**: Ollama (`http://127.0.0.1:11434/v1`), LM Studio, LiteLLM, llama.cpp server.
- **Di PC lain dalam LAN**: `http://192.168.x.y:PORT/v1`.
- **Gateway online**: OpenRouter, router AI, atau gateway perusahaan dengan `https://`.

## Masalah umum

| Gejala | Penyebab dan solusi |
|---|---|
| Tes koneksi gagal dengan error sertifikat | Server memakai sertifikat self-signed. Nyalakan "Izinkan sertifikat self-signed", atau pasang CA-nya di sistem. |
| Terhubung tapi 0 model | Server tidak punya `/models`. Ketik nama model secara manual. |
| 401 / 403 | API key salah, atau gateway butuh header tambahan. |
| Tidak bisa terhubung ke IP LAN | Pastikan server mendengarkan di `0.0.0.0`, bukan hanya `127.0.0.1`, dan port diizinkan di firewall. |
| Add model di aplikasi v1.3.0 tidak berfungsi | Diketahui di v1.3.0. Pakai `neovarch setup`; diperbaiki di v1.4.0. |
