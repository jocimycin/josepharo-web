# Joseph Aro — Web Portfolio

Personal portfolio and writing platform for Joseph Aro, geospatial intelligence professional specialising in GIS, remote sensing, hydrography, UAV mapping, and spatial data strategy. Based in BC, Canada and Lagos, Nigeria.

Live at **[josepharo.me](https://www.josepharo.me)**

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| CMS | Sanity v5 (self-hosted studio at `/studio`) |
| Email | Resend |
| Animation | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |
| Runtime | React 19 |

---

## Project Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Home
  about/                # About page
  work/                 # Work/projects index + [slug] detail
  writing/              # Field Notes index + [slug] article
  speaking/             # Speaking page
  contact/              # Contact page
  studio/               # Embedded Sanity Studio
  api/
    contact/            # Contact form handler (Resend)
    newsletter/         # Newsletter subscribe handler (Resend)

components/             # Shared UI components
  ContactForm.tsx
  NewsletterForm.tsx
  PortableTextRenderer.tsx  # Sanity Portable Text → styled HTML
  ShareButtons.tsx
  JaLogo.tsx
  RevealSection.tsx

lib/
  data.ts               # Static site content (projects, roles, copy)
  sanity.ts             # Sanity client + GROQ queries

sanity/
  schemas/              # Sanity content schemas (post, category, tag)

sanity.config.ts        # Sanity Studio configuration
```

---

## Content Management

Articles are authored and published via the embedded Sanity Studio at `/studio`. The writing index and article pages fetch live from Sanity on every request (`force-dynamic`).

**Publishing an article:**
1. Go to `/studio`
2. Create a new Article document
3. Set **Status** → `Published` (the radio field — not just the Studio publish button)
4. Set a **Publish Date**
5. Click **Publish**

The article will appear on `/writing` immediately — no rebuild required.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | No | Defaults to `production` |
| `RESEND_API_KEY` | Yes | Resend API key for contact + newsletter emails |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

Deployed automatically via Vercel on push to `main`. Environment variables must be set in the Vercel project dashboard.

```bash
npm run build   # verify build locally before pushing
```
