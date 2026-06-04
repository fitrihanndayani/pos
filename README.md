# TeaPOS Frontend

Frontend Point-of-Sale berbasis React, Vite, TypeScript, dan Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output production akan dibuat di folder `dist`.

## Deploy ke Vercel

Repository ini menggunakan Vite, bukan Create React App. Karena itu, Vercel harus memakai konfigurasi berikut:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Konfigurasi tersebut juga sudah disimpan di `vercel.json` supaya Vercel tidak menjalankan `react-scripts build`.

Jika dashboard Vercel masih menampilkan error `react-scripts build: command not found`, buka **Project Settings → Build & Development Settings**, lalu kosongkan override build command atau ubah menjadi `npm run build`.
