# personal-site-template

A generic personal website template built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## Features

- **Password protection** for private pages (intro, projects) via `PasswordGuard`
- **Internationalization** (i18n) with bilingual support (Chinese / English)
- **Theme & font switching** — multiple built-in UI themes and font choices
- **Lively typography** — optional animated text effects (Pretext-powered)
- **Blog system** — markdown-based blog with auto-generated static pages
- **Project showcase** — project list + detail pages with protected access
- **Life / moments feed** — photo timeline with map footprint visualization
- **Friends page** — simple friend links grid
- **Scroll progress bar** — cute slime animation at the bottom of the viewport
- **Mobile responsive** — hamburger drawer menu for small screens

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

Copy `.env.example` to `.env.local` and fill in your own values:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SITE_PASSWORD=your_password_here
SITE_ACCESS_KEY=your_access_key_here
```

## Customize Your Content

### 1. Personal info (Intro page)
Edit `lib/siteCopy.ts` to replace all `[Your ...]` placeholders with your real info.

### 2. Projects
Add project JSON files under `data/projects/<slug>/` and update `lib/projects.ts`.

### 3. Blog posts
Add markdown files under `data/blogs/` with frontmatter.

### 4. Friends
Add friend data entries in `lib/friends.ts`.

### 5. Life moments & footprint
Add photos under `data/life_photos/moments/` and edit `data/life_photos/footprint.json`.

### 6. Logo
Replace `public/logo.png` with your own avatar/logo.

## Deployment

Deploy to [Vercel](https://vercel.com) or any platform supporting Next.js. Remember to set the environment variables in your hosting dashboard.
