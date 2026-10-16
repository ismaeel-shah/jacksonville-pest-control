# Jacksonville Pest Control Website

A fast, statically generated pay-per-call site for pest control in Jacksonville, FL and the surrounding area. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

The site is a referral service, not a pest control company: every call goes through a Ringba tracking number to an independent local provider. Every site detail lives in one file, `src/config/site.ts`.

- 50 pages + 6 blog posts, all prerendered at build time
- Calls only: every call to action is the tracking phone number
- Structured data (JSON-LD), sitemap, robots.txt, and social share image generated from the config (`npm run og-image`)
- Follows the Ringba network rules (see [Ringba rules](#ringba-rules))

Open items (missing details, notes to confirm, photos) are listed in [`CONTENT-TODO.md`](CONTENT-TODO.md).

---

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev                  # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server. Shows a yellow banner listing config values that are still placeholders. |
| `npm run build` | Production build. Fails on type errors or content mistakes (duplicate slugs, etc.). |
| `npm start` | Serves the production build. |
| `npm run lint` | ESLint. |
| `npm run content-todo` | Regenerates `CONTENT-TODO.md` from every `// OWNER:` note in the code. |

No environment variables are needed.

---

## Ringba rules

The site is a traffic source for Ringba pay-per-call campaigns. Their rules for websites, and how the site meets them:

| Rule | How the site handles it |
|---|---|
| No contact forms | There are no forms. Every CTA is a `tel:` link to the tracking number. |
| No prices or cost content | No prices, cost sections, "free inspection", "quote", or "no hidden fees" wording, including in SEO titles and schema. |
| No reviews or ratings | No reviews page, testimonials, star ratings, or review schema. |
| No "our team" or licensed/insured claims | All copy is in a neutral voice ("a local pest control pro", "the technician"). No license, insurance, years-in-business, guarantee, or reviewer byline. |
| Footer disclaimer on every page | `disclaimer` in `src/config/site.ts`, shown in the footer of every page. |

Keep new copy inside these rules. Before publishing changes, search the content for words like "we", "our", "free", "cost", "quote", "review", "licensed", and "insured".

## Edit site information

Open `src/config/site.ts`. Everything on the site reads from here: header, footer, contact page, schema markup, legal pages, and the social image.

- Replace each `"[PLACEHOLDER]"` with the real value. Anything still a placeholder is **hidden** on the live site (for example, no call buttons until both `phoneDisplay` and `phoneHref` are set, and no disclaimer until `disclaimer` is set).
- `phoneDisplay` / `phoneHref`: the Ringba tracking number. `phoneHref` must be in E.164 format, e.g. `+19045550123`.
- `disclaimer`: paste Ringba's footer disclaimer exactly as they give it. Line breaks are kept.
- `hours`: the hours calls are answered, from the Ringba campaign.
- `logo`: put the file in `public/images/` and set e.g. `"/images/logo.png"`.
- After changing `businessName` or `tagline`, run `npm run og-image` and commit the result. The social share image (`src/app/opengraph-image.png`) is a static file, so it doesn't update on its own.

## Add photos

Every image on the site is a named "photo slot". Save a photo in `public/images/` with the exact file name listed in `CONTENT-TODO.md` (section 4) and it appears on the next deploy (restart `npm run dev` to see it locally); no code changes needed. Photos are always shown whole, at their own shape, so any aspect ratio works. Use realistic photos (WebP or JPG, at least 1600px wide). Avoid cartoon bugs.

## Publish or unpublish a page

Each service, area, industry, and blog post has its own file in `src/content/` with a `published` flag.

```ts
// src/content/services/wildlife-removal.ts
published: false, // hides the page everywhere
```

When `published` is `false`, the page returns a 404 and is removed from the navigation, footer, sitemap, hub pages, and every in-text link (links to it turn into plain text automatically). Set it back to `true` to restore it. Use this if the campaign doesn't cover a service, or if an area page still needs work.

## Add a blog post

1. Copy an existing post in `src/content/blog/`, e.g. `termite-swarm-season-jacksonville.ts`, to a new file named after the new slug.
2. Rename the export and update every field: `slug`, `title`, `excerpt`, `category`, dates, `seo`, `image`, `intro`, and `sections` (each section needs a unique kebab-case `id`; 4+ sections show a table of contents).
3. Inside text you can write links as `[anchor text](/termite-control)` and bold as `**words**`. Link to at least one service page and to `/service-areas` or an area page.
4. Register it in `src/content/index.ts` (import it and add it to `blogPosts`).
5. Run `npm run build` to check it.

Services, areas, and industries work the same way: one file per page in `src/content/`, registered in `src/content/index.ts`.

## Content rules

- **Ringba rules first** (see above): no forms, no prices or cost content, no reviews or ratings, no team or licensed/insured claims.
- **Every page is written separately.** Never copy a page and swap the city or pest name; search engines penalize that.
- **Nothing invented:** no fake statistics, awards, or claims about providers.
- **Careful safety language:** no "100% safe", "non-toxic", or "chemical-free" claims.
- Anything to confirm is marked `// OWNER:` in the code and collected in `CONTENT-TODO.md`.

---

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In [Vercel](https://vercel.com/new), import the repository. The defaults (framework: Next.js, build command `next build`) are correct.
3. Set the tracking number and `disclaimer` in `src/config/site.ts`.
4. Deploy, then add your domain under Project → Settings → Domains.
5. Set `siteUrl` in `src/config/site.ts` to the final domain (e.g. `https://www.example.com`) and redeploy. Canonical URLs, the sitemap, and schema all use it.
6. Submit `https://your-domain/sitemap.xml` in Google Search Console.
7. Place a test call from a phone and confirm it shows up in Ringba.

## How it's built

```
src/
  app/                    Routes (App Router). [service], service-areas/[area],
                          commercial/[industry], blog/[slug] are content-driven.
  components/
    layout/               Header, Footer, MobileCallBar, Breadcrumbs
    sections/             Page sections (Hero, FAQSection, CTASection, ...)
    ui/                   Buttons, links, prose renderer, image slots
    seo/                  JsonLd
  config/site.ts          All site details
  content/                One file per service, area, industry, and blog post
  lib/                    Content helpers, schema builders, metadata, analytics
scripts/content-todo.mjs  Builds CONTENT-TODO.md
```

Notes for developers:

- **Cache Components is on** (the Next.js 16 default). Because it doesn't allow `dynamicParams = false`, dynamic routes call `notFound()` for unknown slugs instead, and the root layout sets `ensureStatic = 'navigation'` so the build fails if any page stops being fully static.
- The sitewide schema is an `Organization`, not `PestControl`/`LocalBusiness`, because the site doesn't perform the service.
- GA4 loads after the first interaction (or a few idle seconds) and tracks `click_to_call`. Set `ga4Id` in the config to turn it on.
- CSS is inlined (`experimental.inlineCss`) because most visitors are first-time mobile searchers.
- This Next.js version differs from older docs; see `AGENTS.md` and the bundled docs in `node_modules/next/dist/docs/`.
