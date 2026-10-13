# Jacksonville Pest Control Website

A fast, statically generated lead-generation site for pest control in Jacksonville, FL and the surrounding area. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

The site is built so it can be rented to any pest control company: every business detail lives in one file, `src/config/site.ts`.

- 50 pages + 6 blog posts, all prerendered at build time
- Quote form with spam protection that emails each lead
- Structured data (JSON-LD), sitemap, robots.txt, and social share image generated automatically
- No prices anywhere on the site, by design

Open items for the business owner (claims to confirm, missing details, photos) are listed in [`CONTENT-TODO.md`](CONTENT-TODO.md).

---

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional for local work, see "Environment variables"
npm run dev                  # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server. Shows a yellow banner listing config values that are still placeholders. |
| `npm run build` | Production build. Fails on type errors or content mistakes (duplicate slugs, etc.). |
| `npm start` | Serves the production build. |
| `npm run lint` | ESLint. |
| `npm run content-todo` | Regenerates `CONTENT-TODO.md` from every `// OWNER:` note in the code. |

## Environment variables

Set these in `.env.local` locally and in Vercel → Project → Settings → Environment Variables for production. See `.env.example`.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com), used to email new leads. |
| `LEAD_NOTIFY_EMAIL` | Where lead emails go. Separate several addresses with commas. |
| `LEAD_FROM_EMAIL` | Sender address on a domain verified in Resend, e.g. `Website Leads <leads@yourdomain.com>`. |

In development, if these are missing, submitted leads are printed in the terminal instead of emailed so the form can be tested. **In production they are required:** without them, visitors see an error asking them to call, and the lead is not delivered.

---

## Edit business information

Open `src/config/site.ts`. Everything on the site reads from here: header, footer, contact page, schema markup, legal pages, and the social image.

- Replace each `"[PLACEHOLDER]"` with the real value. Anything still a placeholder is **hidden** on the live site (for example, no phone buttons until both `phoneDisplay` and `phoneHref` are set).
- `phoneHref` must be in E.164 format, e.g. `+19045550123`.
- `address.showPublicly: false` hides the street address (right for a service-area business).
- `googleRating`: leave `null` unless you have real numbers from your Google Business Profile.
- `memberships`: only real memberships.
- `contentReviewer`: the licensed technician shown as the reviewer on service pages and blog posts.
- `logo`: put the file in `public/images/` and set e.g. `"/images/logo.png"`.

## Use the renting company's own contact form

Most companies want leads to go straight into their own CRM or scheduling tool (for example GoHighLevel, Jobber, or Housecall Pro). Their form is usually an `<iframe>` embed code. You can swap it in for the whole site from `src/config/site.ts`:

```ts
formEmbed: {
  src: "https://forms.their-crm.com/widget/form/abc123", // the URL inside src="..." of their iframe code
  height: 680,                                          // pixels on tablets/desktops
  mobileHeight: 770,                                    // pixels on phones (forms get taller); 0 = same as height
  title: "Request a free pest inspection",              // read by screen readers
  scriptSrc: "",                                        // only if their code also has <script src="...">
},
```

- **Leave `src` empty** to keep the site's built-in form (which emails leads via Resend).
- **When `src` is set**, the contact page form and the form at the end of every page all become their iframe. The "Free Quote" and "Get a Free Inspection" buttons still scroll to it, and the Privacy Policy automatically mentions the third-party form provider.
- Only `https://` URLs are accepted. Protocol-relative URLs starting with `//` (common in embed codes) are converted to `https://` automatically.
- **Check the heights on a phone and a desktop.** The height in their iframe code is often too short, which cuts off the bottom of the form (usually the consent text). Increase `height` / `mobileHeight` until the whole form shows without an inner scrollbar.
- Paste only the URL, not the whole `<iframe>` tag.
- If their embed code includes a script (often used to auto-resize the form), put that script's URL in `scriptSrc`.
- **Set their form to redirect to your `/thank-you` page** after submission, in their tool's settings. Choose the option that redirects the whole page (often called "parent page" or "top window"); otherwise the thank-you page opens inside the small form box.
- With an embedded form, submissions happen inside their tool, so GA4 can't see them. `click_to_call` and `cta_click` still work. To track conversions, use the renter's own form analytics or their thank-you redirect.
- The Resend environment variables aren't needed while an embedded form is in use.

## Add photos

Every image on the site is a named "photo slot". Save a photo in `public/images/` with the exact file name listed in `CONTENT-TODO.md` (section 4) and it appears automatically; no code changes needed. Use real photos of your team, trucks, and work (WebP or JPG, at least 1600px wide). Avoid stock photos and cartoon bugs.

## Publish or unpublish a page

Each service, area, industry, and blog post has its own file in `src/content/` with a `published` flag.

```ts
// src/content/services/wildlife-removal.ts
published: false, // hides the page everywhere
```

When `published` is `false`, the page returns a 404 and is removed from the navigation, footer, sitemap, hub pages, quote form, and every in-text link (links to it turn into plain text automatically). Set it back to `true` to restore it. Use this if a company doesn't offer a service, or if an area page still needs work.

## Add a customer review

Open `src/content/reviews.ts` and add an entry:

```ts
{
  name: "Maria G.",          // first name + last initial
  area: "mandarin",          // area slug, so it also shows on that area page
  service: "rodent-control", // service slug, so it also shows on that service page
  date: "2026-11-02",
  text: "Exactly what the customer wrote.",
  rating: 5,                 // optional, only if the customer gave one
  source: "google",          // optional
},
```

**Only add real reviews, word for word.** Never write, edit, or invent one. Reviews appear on the Reviews page, the home page, and the matching service and area pages.

## Add a blog post

1. Copy an existing post in `src/content/blog/`, e.g. `termite-swarm-season-jacksonville.ts`, to a new file named after the new slug.
2. Rename the export and update every field: `slug`, `title`, `excerpt`, `category`, dates, `seo`, `image`, `intro`, and `sections` (each section needs a unique kebab-case `id`; 4+ sections show a table of contents).
3. Inside text you can write links as `[anchor text](/termite-control)` and bold as `**words**`. Link to at least one service page and to `/service-areas` or an area page.
4. Register it in `src/content/index.ts` (import it and add it to `blogPosts`).
5. Run `npm run build` to check it.

Services, areas, and industries work the same way: one file per page in `src/content/`, registered in `src/content/index.ts`.

## Content rules

These come from the original brief and are why the site looks and reads the way it does.

- **No prices**, price ranges, or dollar amounts anywhere, including schema. Cost sections list factors only and end with a call for a free inspection.
- **Every page is written separately.** Never copy a page and swap the city or pest name; search engines penalize that.
- **Nothing invented:** no fake reviews, ratings, statistics, awards, or license numbers.
- **Careful safety language:** no "100% safe", "non-toxic", or "chemical-free" claims.
- Anything the owner must confirm is marked `// OWNER:` in the code and collected in `CONTENT-TODO.md`.

---

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In [Vercel](https://vercel.com/new), import the repository. The defaults (framework: Next.js, build command `next build`) are correct.
3. Add the three environment variables above.
4. Deploy, then add your domain under Project → Settings → Domains.
5. Set `siteUrl` in `src/config/site.ts` to the final domain (e.g. `https://www.example.com`) and redeploy. Canonical URLs, the sitemap, and schema all use it.
6. Submit `https://your-domain/sitemap.xml` in Google Search Console.
7. Send a test request through the quote form and confirm the email arrives.

## How it's built

```
src/
  app/                    Routes (App Router). [service], service-areas/[area],
                          commercial/[industry], blog/[slug] are content-driven.
  components/
    layout/               Header, Footer, MobileCallBar, Breadcrumbs
    sections/             Page sections (Hero, FAQSection, CostFactors, ...)
    forms/                QuoteForm (client) and its server wrapper
    ui/                   Buttons, links, prose renderer, image slots
    seo/                  JsonLd
  config/site.ts          All business details
  content/                One file per service, area, industry, and blog post
  lib/                    Content helpers, schema builders, metadata, analytics
scripts/content-todo.mjs  Builds CONTENT-TODO.md
```

Notes for developers:

- **Cache Components is on** (the Next.js 16 default). Because it doesn't allow `dynamicParams = false`, dynamic routes call `notFound()` for unknown slugs instead, and the root layout sets `ensureStatic = 'navigation'` so the build fails if any page stops being fully static.
- The quote form uses a Server Action (`src/app/actions/quote.ts`) with the same zod schema on the client and server, plus a hidden honeypot field.
- GA4 loads after the first interaction (or a few idle seconds) and tracks `click_to_call`, `cta_click`, and `form_submit`. Set `ga4Id` in the config to turn it on.
- CSS is inlined (`experimental.inlineCss`) because most visitors are first-time mobile searchers.
- This Next.js version differs from older docs; see `AGENTS.md` and the bundled docs in `node_modules/next/dist/docs/`.

---

## Local SEO notes for the owner

These happen off the website but matter as much as the site itself.

- **Keep your name, address, and phone (NAP) identical everywhere:** this site, your Google Business Profile, and directories such as Yelp, BBB, Angi, Nextdoor, and Yellow Pages. Small differences ("Ste." vs "Suite", old phone numbers) weaken local rankings.
- **Google Business Profile needs a real business location.** Don't use a fake or virtual address; it can get the profile suspended. As a service-area business you can hide the address and list the areas you serve.
- **Build local backlinks:** join the local chamber of commerce, get mentioned by local blogs and news, and build relationships with real estate agents (WDO inspections) and HOAs.
- **Ask every customer for a Google review,** and set `googleReviewUrl` in the config so the site can link to it. Add the real reviews to `src/content/reviews.ts` too.
