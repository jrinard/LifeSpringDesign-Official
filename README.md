# LifeSpring Starter

A reusable Next.js starter template for LifeSpring Design client websites. Clone, configure, deploy.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## New Client Setup

1. Clone this repo
2. Update `config/site.ts` with client details (name, domain, contact info, nav)
3. Replace `public/logo.png` with client logo
4. Build out pages using the section component library
5. Deploy to Vercel

## Project Structure

```
app/                  # Pages and routes
components/
  layout/             # Header-v*, Footer-v*, Nav
  sections/           # Reusable page sections (Hero-v1, Services-v1, etc.)
  ui/                 # Primitives (Button, Input, Container)
  forms/              # ContactForm (mocked lead submission)
  under-construction/ # Landing page for pre-launch
config/site.ts        # Client configuration (single source of truth)
lib/                  # SEO helpers, utils, lead submission
```

## Section Components

### Layout

| Component | File | Description |
|-----------|------|-------------|
| `Nav` | `Nav.tsx` | Reusable nav links — compose into any header |
| `HeaderV1` | `Header-v1.tsx` | Logo left, nav right |
| `HeaderV2` | `Header-v2.tsx` | Logo centered, nav split left/right |
| `HeaderV3` | `Header-v3.tsx` | Double bar — nav above and below logo |
| `Header` | `Header.tsx` | Alias for `HeaderV1` (used on scaffold pages) |

### Core sections

| Component | File | Description |
|-----------|------|-------------|
| `HeroV1` | `Hero-v1.tsx` | Centered headline + CTA |
| `HeroV2` | `Hero-v2.tsx` | Split layout with image placeholder |
| `HeroV3` | `Hero-v3.tsx` | Bold stacked multi-line headline (agency-style) |
| `HeroVideoV1` | `HeroVideo-v1.tsx` | Split hero — copy + CTA left, video right |
| `FeatureTilesV1` | `FeatureTiles-v1.tsx` | Three-up tiles linking to deeper pages |
| `ServicesV1` | `Services-v1.tsx` | Simple service grid |
| `ServicesV2` | `Services-v2.tsx` | Detailed alternating service blocks with bullets |
| `ServicesIconsV1` | `ServicesIcons-v1.tsx` | Icon grid service overview |
| `TestimonialsV1` | `Testimonials-v1.tsx` | Testimonial card grid |
| `TestimonialsV2` | `Testimonials-v2.tsx` | Horizontal testimonial scroller |
| `PortfolioV1` | `Portfolio-v1.tsx` | Featured work / project grid |
| `NarrativeV1` | `Narrative-v1.tsx` | Long-form story block with optional CTA |
| `StoryFrameV1` | `StoryFrame-v1.tsx` | Hero & guide dual-panel story section |
| `LogoBarV1` | `LogoBar-v1.tsx` | Partner / client logo strip |
| `CTAV1` | `CTA-v1.tsx` | Centered gradient conversion block |
| `CTAV2` | `CTA-v2.tsx` | Asymmetric card CTA with horizon glow |
| `FooterV1` | `Footer-v1.tsx` | Rich footer variant |
| `FooterV2` | `Footer-v2.tsx` | Rich footer + bottom bar with social icons |
| `FooterV3` | `Footer-v3.tsx` | Curved cap footer with pill nav + prominent email |

### Preview routes

Preview pages wrap content in `PreviewShell`, which adds the internal **Creative Bar** (font themes, etc.) and is not used on customer-facing routes.

| Route | Layout |
|-------|--------|
| `/playground` | Full agency-style page (all sections) |
| `/preview` | Video hero + tiles + carousel + icon services |

## Contact Form

The `ContactForm` component uses `submitLead()` in `lib/leads.ts`, which currently logs to console. Swap this function for Hub/CRM API integration when ready.

## SEO

- Metadata via `createMetadata()` in `lib/seo.ts`
- Automatic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## Current Status

Homepage displays an **Under Construction** page. Other routes are scaffolded with placeholder content.
