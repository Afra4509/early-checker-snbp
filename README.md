# 🎓 Early Checker SNBP

Script sederhana untuk melakukan *early check* (pengecekan awal) hasil SNBP melalui Developer Console menggunakan data dari portal resmi SNPMB.

> **⚠️ DISCLAIMER PENTING:** > Tool ini hanya membaca data dari API yang tersedia secara lokal di *browser* saat kamu login. Hasil ini **bukan pengumuman resmi**, melainkan hanya indikasi awal. Hasil final tetap mengacu pada pengumuman resmi SNPMB dan bisa berubah sewaktu-waktu. Gunakan script ini murni untuk edukasi dan eksplorasi teknis.

---

## 🚀 Cara Menggunakan

Ikuti langkah-langkah berikut secara berurutan:

### 1️⃣ Masuk ke Portal SNPMB
1. Buka tautan berikut: [Portal Dashboard SNPMB](https://portal.snpmb.id/dashboard/index.html)
2. Login menggunakan akun SNPMB kamu seperti biasa.

### 2️⃣ Klik Menu SNBT
1. Setelah berhasil login, masuk ke halaman **Dashboard**.
2. Klik menu **SNBT**.
3. Tunggu sampai halaman pendaftaran/informasi SNBT terbuka sepenuhnya.
*(Ganti tulisan ini dengan URL gambar contohmu: `![Contoh Halaman SNBT](link-gambar-disini.png)`)*

### 3️⃣ Buka Developer Console
1. Tekan tombol `F12` di *keyboard* kamu (atau `Ctrl + Shift + I` / `Cmd + Option + I` di Mac).
2. Pilih tab **Console**.
*(Ganti tulisan ini dengan URL gambar contohmu: `![Contoh Tab Console](link-gambar-disini.png)`)*

### 4️⃣ Eksekusi Script
1. Copy seluruh isi script dari repositori ini, tepatnya dari file `early-checker.js`.
2. Paste (tempel) kode tersebut ke dalam **Console** yang sudah kamu buka tadi.
*(Ganti tulisan ini dengan URL gambar contohmu: `![Contoh Paste Script](link-gambar-disini.png)`)*
3. Tekan `Enter`. Jika berhasil, hasil pengecekan akan langsung muncul di *console*.
*(Ganti tulisan ini dengan URL gambar contohmu: `![Contoh Hasil](link-gambar-disini.png)`)*

---

## 📊 Cara Membaca Hasil

Perhatikan *output* yang muncul di console:

* 🎉 **`LOLOS SNBP`** 👉 Kemungkinan besar kamu **LOLOS** SNBP.
* ❌ **`TIDAK LOLOS SNBP`** 👉 Kemungkinan kamu **TIDAK LOLOS** SNBP.

### Keterangan Field Data

Berikut adalah arti dari beberapa data teknis yang mungkin muncul:

| Field | Arti / Keterangan |
| :--- | :--- |
| `is_lolos_snbp` | Status kelulusan SNBP kamu |
| `is_mendaftar_snbp` | Status apakah kamu terdaftar sebagai peserta SNBP |
| `is_lolos_snbt` | Status kelulusan SNBT |
| `is_lulus_snbt` | Status hasil akhir SNBT |
| `is_tahun_lulus_valid` | Validitas tahun kelulusan sekolahmu |

---

## ⚙️ Cara Kerja Script

Script ini bekerja dengan mengambil (*fetch*) data mentah dari *endpoint* API milik SNPMB yang sedang aktif di sesimu, antara lain:
* `/api/auth/user`
* `/api/umum/eligibilitas`
* `/api/umum/jadwal`

Secara alternatif, data mentah ini sebenarnya juga bisa diakses langsung lewat *global object window* di browser:
* `window.__snpmb.user`
* `window.__snpmb.eligibilitas`
* `window.__snpmb.jadwal`

---

## 🧠 Tips & *Troubleshooting*

Jika hasil tidak muncul atau terjadi *error*, coba lakukan hal berikut:
* 🔄 **Refresh halaman** portal SNPMB kamu.
* ✅ Pastikan kamu **sudah login** dan sesi belum *expired*.
* 📍 Pastikan kamu sudah berada di dalam menu **SNBT** sebelum membuka *console*.
* 📋 Coba *copy* dan *paste* script-nya ulang.

---

## ⭐ Credits

Dibuat dengan 💻 oleh **[Afra4509](https://github.com/Afra4509)**.

Jika *project* ini membantu rasa penasaranmu, jangan lupa:
⭐ **Star** repo ini  
🍴 **Fork** repo ini  
🐛 **Laporkan bug** (buat *Issue*) jika kamu menemukan masalah.
