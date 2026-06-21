# Bot.Jewelry — AI Gold Advisor & Jewelry Intelligence Platform

AI-powered gold advisor and jewelry intelligence platform. Built with Next.js 15, React, TypeScript, and Tailwind CSS. Uses **only one external API: OpenRouter**.

## Features

- AI Gold Advisor (chat)
- Gold Knowledge Center (AI-generated educational articles)
- Gold Purity Comparison Tool (24K / 22K / 21K / 18K / 14K)
- Gold Value Estimator (educational, approximate)
- Jewelry Buying Assistant
- Research Center (buying guides, investment reports, wedding guides, purity guides, country comparisons) with Copy / Print / Export PDF
- Local Image Gallery
- Blog system structured for 200 SEO articles, generated on-demand via AI and cached in localStorage
- Multilingual: English, Arabic (RTL), French
- Dark mode, mobile responsive, PWA support
- Favorites saved with LocalStorage (no database required)

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- TailwindCSS
- Next.js API Routes (server-side only — your API key never reaches the browser)
- OpenRouter API (only external API used)

---

## 1. Get an OpenRouter API Key

1. Create an account at https://openrouter.ai
2. Generate an API key from your OpenRouter dashboard
3. Keep it secret — never commit it to GitHub

Suggested models (already configured in `lib/openrouter.ts`):
- `deepseek/deepseek-r1`
- `meta-llama/llama-3.3-70b-instruct`
- `qwen/qwen3-235b-a22b`

---

## 2. Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local and paste your real OPENROUTER_API_KEY
npm run dev
```

Visit http://localhost:3000

---

## 3. Deploying on Netlify (Recommended — this project uses server API routes)

This project needs a Node.js server runtime for its `/app/api/*` routes (chat, estimator, buying assistant, research, knowledge, blog post generation). **Netlify and Vercel support this out of the box. Static GitHub Pages hosting does NOT support server API routes**, so use Netlify or Vercel for the live site.

### Steps:

1. Push this project to a GitHub repository.
2. Go to https://app.netlify.com → **Add new site** → **Import an existing project** → connect your GitHub repo.
3. Netlify will detect the `netlify.toml` file automatically:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs` (handles API routes automatically)
4. **Set your environment variable**:
   - Go to **Site configuration → Environment variables**
   - Add a new variable:
     - Key: `OPENROUTER_API_KEY`
     - Value: *(your real OpenRouter key)*
     - Scope: Production (and Deploy Previews if desired)
5. Deploy the site.
6. Once live, go to **Domain management** and connect your custom domain `bot.jewelry`.

That's it — your API key stays securely server-side on Netlify and is never exposed to visitors' browsers.

---

## 4. Deploying on Vercel (Alternative)

```bash
npm install -g vercel
vercel
```

Then add `OPENROUTER_API_KEY` under **Project Settings → Environment Variables** in the Vercel dashboard, and redeploy.

---

## 5. Security Best Practices

- `OPENROUTER_API_KEY` is read only inside server-side API routes (`app/api/*/route.ts`) via `process.env.OPENROUTER_API_KEY`. It is never sent to the client.
- `.env`, `.env.local`, and `.env.production` are listed in `.gitignore` — never commit real keys.
- Always rotate your OpenRouter key if it is ever accidentally exposed.
- No database is used; favorites/settings are stored in the browser's LocalStorage only.

---

## 6. Project Structure

```
app/
  api/            → Server-side routes calling OpenRouter (chat, estimate, research, etc.)
  chat/           → AI Gold Advisor page
  knowledge/      → Knowledge Center
  compare/        → Gold purity comparison tool
  estimator/      → Gold value estimator
  buying-assistant/
  research/       → Research Center (reports, PDF export)
  gallery/        → Local image gallery
  blog/           → 200-article SEO blog system
  sitemap.ts      → Dynamic sitemap (Next.js metadata route)
  robots.ts       → Dynamic robots.txt (Next.js metadata route)
components/
  layout/         → Header, Footer
  providers/      → Locale (i18n) provider
lib/
  openrouter.ts   → OpenRouter API client (server-only)
  goldData.ts     → Gold purity / category reference data
  blogData.ts     → 200-article topic structure
  i18n.ts         → English / Arabic / French strings
  storage.ts      → LocalStorage helpers (favorites, locale)
public/
  images/         → Local SVG images (gallery, OG cover, favicon)
  manifest.json   → PWA manifest
```

---

## Disclaimer

Bot.Jewelry provides educational information only and does not provide financial, legal, investment, or professional advice. Gold value estimates are approximate and not real-time market prices.

Contact: salatrir@gmail.com

Copyright © 2026 Bot.Jewelry
