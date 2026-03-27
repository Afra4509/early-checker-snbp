# 🎓 Early Checker SNBP

Script sederhana untuk melakukan **early check hasil SNBP** melalui **Developer Console** menggunakan data dari portal SNPMB.

⚠️ **Disclaimer:**
Tool ini hanya membaca data dari API yang tersedia saat kamu login.
Hasil ini **bukan pengumuman resmi**, hanya indikasi awal.

---

# 🚀 Cara Menggunakan

Ikuti langkah berikut dengan urut.

---

## 1️⃣ Masuk ke Portal SNPMB

Buka:

```bash
https://portal.snpmb.id/dashboard/index.html
```

Login menggunakan akun SNPMB kamu seperti biasa.

---

## 2️⃣ Klik Menu SNBT

Setelah login berhasil:

* Masuk ke **Dashboard**
* Klik menu **SNBT**
* Tunggu sampai halaman SNBT terbuka

📷 Contoh:

![Step 1](hasil%20\(1\).png)

---

## 3️⃣ Buka Developer Mode

Tekan:

```bash
F12
```

Lalu:

* Pilih tab **Console**

📷 Contoh:

![Step 2](hasil%20\(2\).png)

---

## 4️⃣ Copy Script

Copy seluruh isi script dari repo ini
atau dari file:

```bash
early-checker.js
```

Paste ke **Console**.

📷 Contoh:

![Step 3](hasil%20\(3\).png)

---

## 5️⃣ Tekan Enter dan Lihat Hasil

Setelah paste:

Tekan:

```bash
Enter
```

Jika berhasil, hasil akan muncul di console.

📷 Contoh:

![Step 4](hasil%20\(4\).png)

---

# 📊 Cara Membaca Hasil

Perhatikan bagian ini:

```text
🎉 LOLOS SNBP
```

Artinya:

✅ Kemungkinan **LOLOS SNBP**

---

Jika muncul:

```text
❌ TIDAK LOLOS SNBP
```

Artinya:

❌ Kemungkinan **TIDAK LOLOS SNBP**

---

Field penting:

| Field                  | Arti                  |
| ---------------------- | --------------------- |
| `is_lolos_snbp`        | Status kelulusan SNBP |
| `is_mendaftar_snbp`    | Status pendaftaran    |
| `is_lolos_snbt`        | Status kelulusan SNBT |
| `is_lulus_snbt`        | Status hasil SNBT     |
| `is_tahun_lulus_valid` | Validitas tahun lulus |

---

# ⚙️ Cara Kerja Script

Script akan mengambil data dari endpoint berikut:

```bash
/api/auth/user
/api/umum/eligibilitas
/api/umum/jadwal
```

Data mentah juga bisa diakses lewat:

```bash
window.__snpmb.user
window.__snpmb.eligibilitas
window.__snpmb.jadwal
```

---

# ⚠️ Disclaimer Penting

* Ini **bukan tools resmi SNPMB**
* Tidak menjamin hasil final
* Bisa berubah kapan saja
* Gunakan untuk edukasi dan eksplorasi teknis

---

# 🧠 Tips

Jika tidak muncul hasil:

Coba:

* Refresh halaman
* Pastikan sudah login
* Pastikan berada di menu **SNBT**
* Paste script ulang

---

# ⭐ Credits

Made by:

**Afra4509**

Jika project ini membantu:

⭐ Star repo
🍴 Fork repo
🐛 Laporkan bug jika ada
