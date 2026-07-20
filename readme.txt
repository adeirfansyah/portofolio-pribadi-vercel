Bisa. Berikut seluruh alurnya setiap kali Anda mengganti PDF.

### 1. Ganti PDF

Buka folder:

```text
D:\portofolio-pribadi-vercel\public\modul
```

Masukkan PDF baru dan gunakan nama yang sama persis dengan file lama, misalnya:

```text
modul-ai-slide-architect.pdf
```

### 2. Buka terminal VS Code

Tekan:

```text
Ctrl + `
```

Pastikan terminal menunjukkan:

```text
PS D:\portofolio-pribadi-vercel>
```

Jika berbeda, jalankan:

```powershell
cd D:\portofolio-pribadi-vercel
```

### 3. Periksa perubahan

```powershell
git status
```

PDF yang diganti seharusnya tampil sebagai `modified`.

### 4. Kirim perubahan ke GitHub

Jalankan secara berurutan:

```powershell
git add .
git commit -m "Memperbarui file modul pelatihan"
git push
```

### 5. Tunggu pembaruan Vercel

Vercel akan otomatis membuat deployment baru setelah `git push`. Biasanya hanya membutuhkan beberapa menit.

Buka:

[portofolio-pribadi-vercel.vercel.app](https://portofolio-pribadi-vercel.vercel.app/)

Kemudian tekan:

```text
Ctrl + F5
```

Klik tombol unduh dan periksa apakah PDF terbaru sudah terbuka.

Catatan: jika browser masih membuka PDF lama, coba mode Incognito atau ubah nama PDF dan sesuaikan tautannya di `page.js`, karena browser dapat menyimpan PDF lama dalam cache.