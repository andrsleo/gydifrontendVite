# GYDI Frontend (Vite) — Legacy

> ⚠️ **Superseded by [GydiFrontNext](https://github.com/andrsleo/GydiFrontNext)** (Next.js 15). This repo was GYDI's first frontend iteration and is kept for reference.

First-generation web client for **GYDI**, the vacation-property affiliate platform. SPA built with React 19 + Vite, later replaced by a Next.js 15 app to gain SSR/ISR and better SEO for property listings.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

## Tech Stack

- React 19 + TypeScript, Vite 7 (SWC)
- React Router 7
- React Hook Form + Zod 4
- TailwindCSS 3.4, lucide-react, react-icons
- Environments: .env.development / .env.test / .env.production

## Getting Started

```bash
git clone https://github.com/andrsleo/gydifrontendVite.git
cd gydifrontendVite
npm install
npm run dev       # http://localhost:5173
```

## Scripts

```bash
npm run dev       # dev server
npm run build     # type-check + build
npm run preview   # preview build
npm run lint      # ESLint
```

## Why it was replaced

The affiliate platform needed **SEO-indexable property pages** (SSR/ISR), **server components**, and a BFF layer — capabilities that motivated the migration to Next.js 15 in [GydiFrontNext](https://github.com/andrsleo/GydiFrontNext). This migration is itself a useful case study of choosing rendering strategy by business need.

---
Built by [Andrés Vargas](https://github.com/andrsleo) · Property of GYDI
