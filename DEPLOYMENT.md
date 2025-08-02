# Panduan Deploy ke Netlify - MA Almanshuriyah Portfolio

## Langkah-langkah Deploy

### 1. Persiapan Repository
Pastikan semua file sudah ter-commit ke Git repository Anda.

### 2. Deploy ke Netlify

#### Opsi A: Melalui Git Repository (Disarankan)
1. Login ke [Netlify.com](https://www.netlify.com)
2. Klik "New site from Git"
3. Pilih provider Git Anda (GitHub, GitLab, atau Bitbucket)
4. Pilih repository "MA-Almanshuriyah-Portfolio"
5. Konfigurasi build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Functions directory**: `netlify/functions`

#### Opsi B: Manual Deploy
1. Login ke [Netlify.com](https://www.netlify.com)
2. Drag & drop folder `dist/public` ke area deploy
3. Atau upload file zip dari folder `dist/public`

### 3. Konfigurasi Environment Variables (Jika diperlukan)
Di Netlify dashboard:
1. Masuk ke Site settings
2. Klik Environment variables
3. Tambahkan variabel yang diperlukan:
   - `NODE_VERSION`: `20`
   - `DATABASE_URL`: (jika menggunakan database)

### 4. Custom Domain (Opsional)
1. Di Site settings > Domain management
2. Klik "Add custom domain"
3. Masukkan domain Anda (contoh: `ma-almanshuriyah.com`)
4. Ikuti instruksi untuk mengatur DNS

## File Konfigurasi yang Sudah Disiapkan

### `netlify.toml`
```toml
[build]
  publish = "dist/public"
  command = "npm run build"
  functions = "netlify/functions"

[dev]
  command = "npm run dev"
  port = 5000
  targetPort = 5000

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/server/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"
```

### `_redirects`
```
/api/*  /.netlify/functions/server/:splat  200
/*      /index.html   200
```

## Fitur yang Sudah Disiapkan

✅ **Static Site Generation**: Website akan di-build sebagai static files
✅ **Serverless Functions**: API endpoints untuk blog dan data dinamis
✅ **SPA Routing**: Single Page Application dengan routing yang proper
✅ **Responsive Design**: Optimized untuk desktop, tablet, dan mobile
✅ **SEO Friendly**: Meta tags dan struktur HTML yang baik
✅ **PWA Ready**: Service worker dan manifest sudah disiapkan

## Testing Setelah Deploy

1. **Homepage**: Pastikan intro sequence dan semua gambar muncul
2. **Responsive**: Test di berbagai ukuran layar
3. **Navigation**: Test semua link dan menu
4. **Blog**: Test halaman blog dan artikel
5. **API**: Test endpoint `/api/health` dan `/api/blog`

## Domain Gratis dari Netlify
Setelah deploy, Anda akan mendapat URL gratis seperti:
`https://happy-unicorn-123456.netlify.app`

## Troubleshooting

### Jika build gagal:
1. Cek build logs di Netlify dashboard
2. Pastikan semua dependencies ter-install
3. Cek file `package.json` dan `netlify.toml`

### Jika routing tidak bekerja:
1. Pastikan file `_redirects` ada di root folder
2. Cek konfigurasi redirects di `netlify.toml`

### Jika API tidak bekerja:
1. Cek functions folder di Netlify dashboard
2. Pastikan file `netlify/functions/api.js` ter-build dengan benar
3. Cek redirect configuration: `/api/*` → `/.netlify/functions/api/:splat`

## Support
Jika ada masalah, silakan hubungi developer atau cek dokumentasi Netlify.