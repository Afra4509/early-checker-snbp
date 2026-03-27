# 🎓 Early Checker SNBP

Script sederhana untuk melakukan **early check hasil SNBP** melalui console browser menggunakan data dari endpoint SNPMB.

⚠️ **Disclaimer:**
Tool ini hanya menampilkan data yang tersedia dari API saat sesi login aktif. Tidak menjamin hasil final dan digunakan hanya untuk edukasi / eksplorasi teknis.

---

## 📌 Cara Menggunakan

Ikuti langkah berikut:

### 1️⃣ Login ke Portal SNPMB

Buka portal berikut:

```
https://portal.snpmb.id/dashboard/index.html
```

Login seperti biasa menggunakan akun SNPMB kamu.

---

### 2️⃣ Masuk Menu SNBT

Setelah login:

* Klik menu **SNBT**
* Pastikan halaman sudah terbuka dengan benar

---

### 3️⃣ Buka Developer Console

Tekan:

```
F12
```

Lalu:

* Pilih tab **Console**

---

### 4️⃣ Paste Script

Copy script dari file berikut:

```
early-checker.js
```

Lalu paste ke **Console**, kemudian tekan:

```
Enter
```

---

## 📷 Contoh Hasil

### Hasil 1 — Identitas Peserta

![Hasil 1](hasil%20\(1\).png)

---

### Hasil 2 — Eligibilitas

![Hasil 2](hasil%20\(2\).png)

---

### Hasil 3 — Detail Status

![Hasil 3](hasil%20\(3\).png)

---

### Hasil 4 — Verdict Akhir

![Hasil 4](hasil%20\(4\).png)

---

## 📊 Field Penting

Beberapa field utama yang perlu diperhatikan:

| Field                  | Arti                      |
| ---------------------- | ------------------------- |
| `is_lolos_snbp`        | Status lolos SNBP         |
| `is_mendaftar_snbp`    | Status pendaftaran SNBP   |
| `is_lolos_snbt`        | Status lolos SNBT         |
| `is_lulus_snbt`        | Status kelulusan SNBT     |
| `is_tahun_lulus_valid` | Validitas tahun kelulusan |

---

## 🧠 Cara Membaca Hasil

Jika muncul:

```
🎉 LOLOS SNBP
```

Artinya:

✅ Kamu kemungkinan **lolos SNBP**

Jika muncul:

```
❌ TIDAK LOLOS SNBP
```

Artinya:

❌ Kamu **belum lolos SNBP**

---

## 🛠️ Catatan Teknis

Script ini melakukan fetch ke endpoint berikut:

```
/api/auth/user
/api/umum/eligibilitas
/api/umum/jadwal
```

Data mentah juga tersedia di:

```
window.__snpmb.user
window.__snpmb.eligibilitas
window.__snpmb.jadwal
```

Script utama tersedia di repo ini:


---

## ⚠️ Disclaimer

* Tool ini **bukan tools resmi SNPMB**
* Hasil bisa berubah sewaktu-waktu
* Gunakan dengan bijak
* Tidak untuk penyalahgunaan sistem

---

## ⭐ Credits

Created by:

**Afra4509**

Jika project ini membantu, jangan lupa:

⭐ Star repo ini
🍴 Fork jika ingin modifikasi
