# LifeSpring Design — Official Website

The marketing site for [LifeSpring Design](https://lifespringdesign.com) — custom websites, software, and branding for businesses in Washington, Oregon, and Idaho.

Built on the LifeSpring boilerplate (modular sections, design preview, SEO from the start). This repo is the live official site, not the reusable starter template.

---

## Current status

- **`/`** — under construction holding page (soft launch)
- **`/playground`** — internal section builder for designing the real homepage
- **`/preview`** — agency-style layout preview

Full launch replaces `/` with the approved homepage from the playground.

---

## Tech stack

- **Next.js** (App Router) · **TypeScript** · **Tailwind CSS**
- **Vercel** for hosting
- **Resend** for contact form email · **reCAPTCHA Enterprise** for spam protection

---

## Local setup

**Requirements:** Node.js 20+ and npm.

```bash
git clone <repo-url>
cd LifeSpringDesign-Official
npm install
cp .env.local.example .env.local   # fill in keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Run production build locally
npm run lint    # Lint
```

### Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Contact form email delivery |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA site key |
| `RECAPTCHA_PROJECT_ID` | Google Cloud project |
| `RECAPTCHA_API_KEY_SECRET` | reCAPTCHA API secret |

Optional: `CONTACT_LEAD_TO`, `CONTACT_LEAD_FROM` (see `docs/resend-setup.md`).

Never commit `.env.local`.

---

## Key files

| File | Purpose |
|------|---------|
| `config/site.ts` | Business identity, nav, logos, contact info |
| `lib/seo-content.ts` | Page titles, descriptions, metadata |
| `lib/color-themes.ts` | Theme defaults for `/playground` |
| `app/page.tsx` | Public homepage (under construction until full launch) |

Launch checklists: `docs/NEW-CLIENT.md` · `docs/SEO.md` · `docs/resend-setup.md`

---

## Deployment

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Mirror `.env.local` vars in the Vercel dashboard
4. Connect **lifespringdesign.com** in Vercel and confirm `config/site.ts` matches

Before production go-live: verify the sending domain in Resend and set `CONTACT_LEAD_FROM`.

---

## About LifeSpring Design

LifeSpring Design builds modern marketing websites for businesses that want a polished online presence without unnecessary complexity.

**Contact:** [lifespringdesign.com](https://lifespringdesign.com) · 208-316-8338 · josh@lifespringdesign.com
