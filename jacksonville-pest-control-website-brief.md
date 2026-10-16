# Website Build Brief: Jacksonville Pest Control (Next.js)

> **For the AI building this site:** Read this entire brief before writing any code. Follow every instruction. Where this brief uses a placeholder in `[SQUARE_BRACKETS]`, do not invent a value — leave the placeholder in the central config file so the owner can fill it in. Never fabricate reviews, statistics, license numbers, awards, or prices. If something in this brief is unclear, choose the option that is simplest, fastest-loading, and most trustworthy for a homeowner.

---

## 1. Project Overview

**What we are building:** A local lead-generation website for pest control services in Jacksonville, Florida (USA) and its surrounding areas.

**Main goal:** Get visitors to **call the phone number** or **submit the free quote/inspection form**. Every page must make calling easy.

**Business model note:** This site may be rented to or used by different pest control companies over time. Therefore **all business details (name, phone, email, address, license number, hours, etc.) must live in ONE central config file** so they can be changed in one place and update everywhere on the site, including schema markup.

**Target audience:**
- Homeowners in Jacksonville and nearby suburbs (many are middle-aged or older, often searching on mobile while dealing with an active pest problem).
- Real estate buyers/sellers/agents who need WDO (termite) inspections.
- Home builders (pre-construction termite treatment).
- Commercial clients: restaurants, property managers/apartments, warehouses, offices.

**Core principles (apply to everything):**
1. **Trust first.** The site must look like a real, local, licensed, professional company — not a template or a lead-gen farm.
2. **Every page has unique, hand-written content.** This is NOT a programmatic SEO site. No page may be a copy of another page with only the city or pest name swapped.
3. **No pricing anywhere.** Prices are discussed only on the phone (see Section 10).
4. **Mobile first and fast.** Most visitors are on phones.
5. **Language:** All website content is in clear, simple American English.

---

## 2. Central Business Config

Create `src/config/site.ts` containing all business details. Every component, page, metadata function, and schema block must read from this file. Nothing below may be hard-coded anywhere else.

```ts
export const siteConfig = {
  businessName: "[BUSINESS_NAME]",
  legalName: "[LEGAL_BUSINESS_NAME]",
  tagline: "Trusted Pest Control in Jacksonville, FL",
  phoneDisplay: "[PHONE_DISPLAY]",        // e.g. (904) 555-0123
  phoneHref: "[PHONE_E164]",              // e.g. +19045550123
  email: "[EMAIL]",
  address: {
    street: "[STREET]",
    city: "Jacksonville",
    state: "FL",
    zip: "[ZIP]",
    showPublicly: false,                   // service-area business: hide street address if false
  },
  geo: { lat: "[LAT]", lng: "[LNG]" },
  licenseNumber: "[FDACS_LICENSE_NUMBER]", // Florida Dept. of Agriculture & Consumer Services
  yearsInBusiness: "[YEARS]",
  hours: [
    { days: "Mon-Fri", open: "07:00", close: "19:00" },
    { days: "Sat", open: "08:00", close: "16:00" },
    { days: "Sun", open: "closed", close: "closed" },
  ],
  googleBusinessProfileUrl: "[GBP_URL]",
  googleReviewUrl: "[GOOGLE_REVIEW_LINK]",
  googleRating: null as null | { rating: number; count: number }, // fill only with REAL data
  social: { facebook: "", instagram: "", nextdoor: "", yelp: "", bbb: "" },
  memberships: [] as string[],             // e.g. ["Florida Pest Management Association"] ONLY if real
  guarantee: "If pests come back between scheduled services, we re-treat at no extra cost.", // owner to confirm
  siteUrl: "https://[DOMAIN]",
  ga4Id: "[GA4_ID]",
};
```

Rules:
- If a value is still a placeholder or empty, **hide the UI element that uses it** (e.g. do not show a rating badge if `googleRating` is null; do not show membership badges if the array is empty). Never display a raw `[PLACEHOLDER]` to visitors in production.
- In development, show a small, visible warning banner listing which config values are still placeholders.

---

## 3. Tech Stack & Architecture

- **Framework:** Latest stable **Next.js** with the **App Router** and **TypeScript**.
- **Styling:** **Tailwind CSS**. No heavy UI libraries. Small icon set only (e.g. `lucide-react`).
- **Rendering:** Every page must be **statically generated (SSG)** at build time. Use `generateStaticParams` for dynamic routes and set `dynamicParams = false` so unknown slugs return 404.
- **Content storage:** Page content lives in typed content files under `src/content/` (TypeScript objects or MDX). Each service page, area page, industry page, and blog post has **its own file with its own unique copy**. A shared React template for layout is fine; shared *text* is not.
- **Fonts:** `next/font` (self-hosted, e.g. Inter or Source Sans 3 for body, a sturdy sans like Plus Jakarta Sans or Manrope for headings). Max 2 font families.
- **Images:** `next/image` for every image, with width/height set, modern formats (WebP/AVIF), lazy loading below the fold, `priority` only on the hero image.
- **Metadata:** Next.js Metadata API (`generateMetadata`) on every page.
- **Sitemap & robots:** `app/sitemap.ts` and `app/robots.ts`.
- **Structured data:** JSON-LD injected via `<script type="application/ld+json">` per page.
- **Forms:** Server Action or Route Handler, validated with `zod`, sending email via a provider configured by env vars (e.g. Resend). Include honeypot spam protection. See Section 12.
- **Analytics:** GA4 via `@next/third-parties` (or equivalent, loaded after interaction/idle). Track `click_to_call`, `form_submit`, and `cta_click` events.
- **Hosting:** Vercel-ready. Provide `.env.example`.
- **Publish toggle:** Every content file has `published: boolean`. **All pages launch with `published: true`** (there is no phased launch). The toggle exists so the owner can later hide a page (e.g. a service a future company doesn't offer). Unpublished pages: excluded from `generateStaticParams`, sitemap, navigation, and internal links.

### Suggested folder structure

```
src/
  app/
    layout.tsx
    page.tsx                         # Home
    about/page.tsx
    contact/page.tsx
    reviews/page.tsx
    faq/page.tsx
    service-areas/page.tsx
    service-areas/[area]/page.tsx
    residential/page.tsx
    commercial/page.tsx
    commercial/[industry]/page.tsx
    [service]/page.tsx               # top-level service URLs, e.g. /termite-control
    blog/page.tsx
    blog/[slug]/page.tsx
    privacy-policy/page.tsx
    terms-of-service/page.tsx
    thank-you/page.tsx               # noindex
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/ (Header, Footer, MobileCallBar, Breadcrumbs)
    sections/ (Hero, TrustBar, ServicesGrid, WhyChooseUs, ProcessSteps,
               ReviewsSection, ServiceAreasList, FAQSection, CTASection,
               CostFactors, PestSigns, RelatedServices, RelatedAreas)
    forms/ (QuoteForm)
    seo/ (JsonLd)
  content/
    services/*.ts
    areas/*.ts
    industries/*.ts
    blog/*.mdx
    faqs.ts
    reviews.ts
  config/site.ts
  lib/ (schema builders, link helpers, analytics)
```

Note on the `[service]` dynamic route at the root: ensure it cannot collide with other top-level routes. Only slugs listed in `src/content/services/` are valid.

---

## 4. Design System & UI

### Overall feel
Clean, calm, professional, local. Think "reliable neighborhood company with trucks and uniforms", not "flashy startup". Plenty of white space. No heavy animations, no parallax, no autoplay video, no popups.

### Colors (Tailwind theme tokens)
- **Primary:** deep trustworthy green (e.g. `#1F6F43`) — headers, links, icons.
- **Secondary:** navy/dark blue (e.g. `#1E3A5F`) — footer, section backgrounds.
- **Accent (CTA only):** warm orange (e.g. `#F28C28`) — used **only** for call/quote buttons so they always stand out.
- **Neutrals:** white background, light gray sections (`#F5F7F6`), dark gray body text (`#1F2933`).
- Text contrast must meet WCAG AA.

### Typography
- Body text minimum **17-18px** on mobile, line-height ~1.6. Many visitors are older homeowners.
- Clear heading hierarchy (one H1 per page, then H2/H3).

### Buttons
- Primary CTA: orange, large tap target (min 48px tall), text like **"Call Now: [phone]"** or **"Get a Free Inspection"**.
- Secondary CTA: outlined green.

### Imagery
- Use **placeholder image slots** clearly named for real photos the owner will supply: technician in uniform, branded service truck, team photo, technician inspecting a home, before/after.
- Provide descriptive `alt` text for every image slot.
- **Do not use cheesy stock photos** (smiling models, giant cartoon bugs). Simple icons for pest types are fine.

### Trust elements (show sitewide where data exists)
- Florida license number (from config) — in footer and on About and Contact pages.
- "Licensed & Insured", "Locally Owned", "Free Inspections", "Pet & Family Friendly Options".
- Google rating badge (only if real data in config).
- Membership/BBB badges (only if real).
- Guarantee statement.

---

## 5. Global Components

### Header (sticky)
- Logo/business name (left).
- Navigation: **Residential**, **Commercial**, **Services** (dropdown/mega menu listing all published services), **Service Areas** (dropdown of published areas + "View All"), **About**, **Reviews**, **Contact**.
- Right side: clickable phone number + orange "Free Inspection" button.
- Mobile: hamburger menu; phone icon button always visible in header.

### Mobile fixed bottom bar
On screens below `md`, a fixed bar at the bottom with two buttons: **Call Now** (tel: link) and **Free Quote** (scrolls to/opens form). Must not cover content (add bottom padding to body).

### Footer
- Business name, phone, email, hours, address (only if `showPublicly`), license number.
- Links: all published services, all published areas, Residential, Commercial, About, Reviews, FAQ, Blog, Contact, Privacy Policy, Terms.
- Short trust line + guarantee.
- Copyright with current year.

### Breadcrumbs
On every page except Home, with `BreadcrumbList` schema.

### Reusable sections
`Hero`, `TrustBar`, `ServicesGrid`, `WhyChooseUs`, `ProcessSteps` (Inspect → Treat → Follow Up), `ReviewsSection`, `ServiceAreasList`, `FAQSection` (accordion, with FAQPage schema), `CTASection`, `CostFactors`, `PestSigns`, `RelatedServices`, `RelatedAreas`, `QuoteForm`.

---

## 6. Complete Site Map (50 pages + blog posts)

**All 50 pages and all 6 blog posts launch together, every one `published: true`.** No page is held back.

### 6.1 Core pages (9)
| # | Page | URL |
|---|------|-----|
| 1 | Home | `/` |
| 2 | About Us | `/about` |
| 3 | Contact / Free Inspection | `/contact` |
| 4 | Service Areas (hub) | `/service-areas` |
| 5 | Reviews | `/reviews` |
| 6 | FAQ | `/faq` |
| 7 | Blog (index) | `/blog` |
| 8 | Privacy Policy | `/privacy-policy` |
| 9 | Terms of Service | `/terms-of-service` |

Plus `/thank-you` (noindex, not counted) and a custom 404 page.

### 6.2 Category pages (2)
| # | Page | URL |
|---|------|-----|
| 10 | Residential Pest Control | `/residential` |
| 11 | Commercial Pest Control | `/commercial` |

### 6.3 Service pages (15)
| # | Page | URL |
|---|------|-----|
| 12 | General Pest Control | `/general-pest-control` |
| 13 | Termite Control | `/termite-control` |
| 14 | Termite Inspection / WDO Reports | `/termite-inspection` |
| 15 | Pre-Construction Termite Treatment | `/pre-construction-termite-treatment` |
| 16 | Rodent Control | `/rodent-control` |
| 17 | Mosquito Control | `/mosquito-control` |
| 18 | Bed Bug Treatment | `/bed-bug-treatment` |
| 19 | Cockroach & Palmetto Bug Control | `/cockroach-control` |
| 20 | Ant Control (incl. Fire Ants) | `/ant-control` |
| 21 | Flea & Tick Control | `/flea-tick-control` |
| 22 | Wasp, Hornet & Yellow Jacket Removal | `/wasp-removal` |
| 23 | Wildlife Removal | `/wildlife-removal` |
| 24 | Lawn Pest Control | `/lawn-pest-control` |
| 25 | Moisture Control / Crawl Space | `/moisture-control` |
| 26 | Eco-Friendly & Pet-Safe Pest Control | `/eco-friendly-pest-control` |

### 6.4 Commercial industry pages (4)
| # | Page | URL |
|---|------|-----|
| 27 | Restaurants & Food Businesses | `/commercial/restaurants` |
| 28 | Property Management & Apartments | `/commercial/property-management` |
| 29 | Warehouses | `/commercial/warehouses` |
| 30 | Offices | `/commercial/offices` |

### 6.5 Area pages (20)
| # | Area | URL |
|---|------|-----|
| 31 | Orange Park | `/service-areas/orange-park` |
| 32 | Jacksonville Beach | `/service-areas/jacksonville-beach` |
| 33 | Ponte Vedra Beach | `/service-areas/ponte-vedra-beach` |
| 34 | Mandarin | `/service-areas/mandarin` |
| 35 | St. Johns | `/service-areas/st-johns` |
| 36 | Fleming Island | `/service-areas/fleming-island` |
| 37 | Southside | `/service-areas/southside` |
| 38 | Arlington | `/service-areas/arlington` |
| 39 | Riverside / Avondale | `/service-areas/riverside-avondale` |
| 40 | San Marco | `/service-areas/san-marco` |
| 41 | Baymeadows / Deerwood | `/service-areas/baymeadows-deerwood` |
| 42 | Atlantic Beach | `/service-areas/atlantic-beach` |
| 43 | Neptune Beach | `/service-areas/neptune-beach` |
| 44 | Nocatee | `/service-areas/nocatee` |
| 45 | Fernandina Beach | `/service-areas/fernandina-beach` |
| 46 | Yulee | `/service-areas/yulee` |
| 47 | Middleburg | `/service-areas/middleburg` |
| 48 | Green Cove Springs | `/service-areas/green-cove-springs` |
| 49 | Northside / Oceanway | `/service-areas/northside-oceanway` |
| 50 | Westside | `/service-areas/westside` |

**Do not** create a page for St. Augustine (separate market, out of scope).

### 6.6 Blog posts
Create 6 starter posts (Section 9.6). URL pattern: `/blog/[slug]`.

---

## 7. Page-by-Page Specifications

### 7.1 Home (`/`)
Primary keyword: **pest control Jacksonville FL**. Section order:

1. **Hero:** H1 "Trusted Pest Control in Jacksonville, FL" (or close variant). One-line benefit sub-headline. Buttons: "Call Now: [phone]" (orange) and "Get a Free Inspection" (outlined). Trust row below: rating badge (if real), "Licensed & Insured", "Locally Owned", "Free Inspections". Hero image slot: technician/truck. On desktop, the quote form may sit in the hero's right column.
2. **TrustBar:** license number, years in business, guarantee, pet-friendly options.
3. **ServicesGrid:** cards for the main services (icon, name, 1-sentence description, link). Show 8-9 most important on home, plus "View All Services".
4. **Residential vs Commercial:** two large cards linking to `/residential` and `/commercial`.
5. **WhyChooseUs:** 4 points (e.g. fast/same-day response when available, family & pet-friendly options, upfront quote before any work, re-treatment guarantee). Only claims the owner can stand behind; mark uncertain claims with `// OWNER: confirm` comments.
6. **Local section:** Why pests are a year-round problem in Jacksonville (warm, humid climate; long mosquito season; termite swarm season in spring; palmetto bugs). 150-250 words, genuinely informative.
7. **ProcessSteps:** Free Inspection → Custom Treatment → Follow-Up & Prevention.
8. **ReviewsSection:** from `content/reviews.ts`.
9. **ServiceAreasList:** published areas as links, plus link to hub.
10. **FAQSection:** 5-6 general questions (FAQPage schema).
11. **CTASection** with phone + form.

Target length: ~900-1,200 words of visible text.

### 7.2 About (`/about`)
Company story (placeholder paragraphs marked `// OWNER: replace with real story`), local roots, team/technician photos slots, license number with note that Florida pest control companies are licensed by FDACS, insurance statement, memberships (if real), guarantee, values (safety, honesty, respect for homes and pets). CTA at end. Schema: `AboutPage` + organization reference.

### 7.3 Contact / Free Inspection (`/contact`)
H1 "Schedule Your Free Pest Inspection in Jacksonville". Large phone number, QuoteForm, hours, service-area summary with link to hub, email. Address only if `showPublicly`. Short "What happens after you contact us" 3-step explainer. Optional Google Map embed **only if** a real GBP exists (lazy-loaded, click-to-load to protect performance).

### 7.4 Service Areas Hub (`/service-areas`)
H1 "Pest Control Service Areas Around Jacksonville". Intro paragraph. Group areas by region: **Jacksonville Neighborhoods**, **The Beaches**, **St. Johns County**, **Clay County**, **Nassau County**. Each published area (all 20 at launch) as a card with 1-2 unique sentences and link. If the owner later unpublishes an area, it may be listed as plain text (no link) under "We also serve" so customers know they're covered. CTA.

### 7.5 Reviews (`/reviews`)
Pull from `content/reviews.ts`. **Ship with an empty array and a clear comment: only real customer reviews may be added (first name + last initial, area, service, date).** If empty, show a friendly message and a "Leave us a Google review" link (if configured). Never fabricate reviews. Review schema only for real reviews and only in a way that complies with Google's review snippet guidelines (no self-serving aggregate rating markup on the LocalBusiness if it violates guidelines — prefer omitting AggregateRating unless sourced from real third-party data the owner confirms).

### 7.6 FAQ (`/faq`)
15-20 questions grouped (General, Termites, Safety, Scheduling, Cost). Must include "How much does pest control cost in Jacksonville?" answered with **factors, not numbers** (see Section 10). FAQPage schema. Each answer links to the relevant service page where useful.

### 7.7 Blog Index (`/blog`) and Posts (`/blog/[slug]`)
Index: cards with title, excerpt, date, category. Post template: H1, author box (placeholder name + "Licensed Pest Control Technician" role, marked for owner to replace), published/updated dates, table of contents for long posts, body, related service CTA box, related posts. `BlogPosting` schema.

### 7.8 Privacy Policy & Terms
Standard, plain-language templates for a US small business collecting form data and using analytics. Mark with `// OWNER: have reviewed by a legal professional`. `noindex` is NOT required; keep them indexable but out of the sitemap priority focus.

### 7.9 Residential (`/residential`)
H1 "Residential Pest Control in Jacksonville, FL". Speak to homeowners: family/pet safety, protecting the home's value, recurring protection plans (described without prices), what a typical visit looks like, seasonal pest calendar for Northeast Florida (short table or list by season). Grid linking to every residential-relevant service. Reviews, FAQ (5), CTA. ~1,000 words.

### 7.10 Commercial (`/commercial`)
H1 "Commercial Pest Control in Jacksonville, FL". Speak to business owners/managers: discreet scheduling (after hours), documentation/service logs for health inspections and audits, Integrated Pest Management (IPM), protecting reputation and reviews. Cards linking to industry pages (when published) and relevant services. Separate commercial quote CTA (form has a "Business name" field shown when "Commercial" is selected). ~1,000 words.

### 7.11 Commercial Industry Pages (4)
Each ~700-1,000 words, unique, focused on that industry's specific pests, risks, compliance needs, and service approach:
- **Restaurants:** roaches, rodents, flies; health inspections; kitchen/drain areas; after-hours service; documentation.
- **Property Management & Apartments:** unit turnover treatments, bed bugs in multi-unit buildings, tenant communication, common areas, scheduled programs across properties.
- **Warehouses:** rodents, stored-product pests, birds (only if the business offers it — mark `// OWNER: confirm`), large perimeters, loading docks, audit documentation.
- **Offices:** ants, roaches, rodents in break rooms; minimal disruption; after-hours service.

### 7.12 Service Page Template (applies to all 15 services)
Shared **layout**, unique **content** per service. Structure:

1. **Hero:** H1 "[Service] in Jacksonville, FL"; one-line benefit; Call + Free Inspection buttons; trust row.
2. **Intro (100-150 words):** the problem and how we solve it.
3. **Why this pest is a problem in Jacksonville:** climate, season, local factors (specific to the pest).
4. **Signs you have [pest]:** `PestSigns` component, 5-7 specific signs.
5. **Our treatment process:** step-by-step (4-6 steps), specific to this service.
6. **Treatment options:** e.g. liquid vs bait for termites; describe honestly, no brand claims unless owner confirms.
7. **Is it safe for kids and pets?** Honest, careful answer (follow label directions, re-entry guidance from technician).
8. **What affects the cost:** `CostFactors` component — factors only, no numbers (Section 10).
9. **Prevention tips:** 5-7 practical tips homeowners can do.
10. **For businesses (short block):** 2-3 sentences + link to `/commercial` (where relevant).
11. **Reviews** mentioning this service (if any real ones exist).
12. **FAQ:** 4-6 service-specific questions with FAQPage schema.
13. **Related services** (2-3) and **Areas we serve** (links to published areas).
14. **Final CTA.**

Target length: **800-1,500 words**. Schema: `Service` (provider = business from config, areaServed = Jacksonville + published areas), `FAQPage`, `BreadcrumbList`.

#### Unique content notes per service
Use these as the starting angle for each page. Expand with accurate, general pest-control knowledge. Do not invent statistics.

| Service | Unique angle / must-cover points |
|---|---|
| General Pest Control | Recurring (quarterly/bi-monthly/monthly) protection plans; pests covered (ants, roaches, spiders, silverfish, earwigs); exterior barrier + interior as needed; what's included vs. specialty services. |
| Termite Control | Subterranean termites and Formosan termites in Northeast Florida; spring swarm season; mud tubes, discarded wings, damaged wood; liquid soil treatment vs. bait/monitoring systems; tent fumigation for drywood termites (mention as an option where appropriate); ongoing warranty/renewal concept (no prices). |
| Termite Inspection / WDO | Florida Wood-Destroying Organism (WDO) inspection report (official FDACS form) used in real estate transactions; who needs it (buyers, sellers, lenders, agents); what the inspector checks; turnaround time (placeholder); link to Termite Control. Include a short section for real estate agents. |
| Pre-Construction Termite Treatment | For builders/contractors and homeowners building new; soil treatment before slab pour; Florida Building Code requires termite protection for new construction (state generally, no section numbers unless verified); coordination with build schedule; certificate of compliance. |
| Rodent Control | Roof rats (very common in Florida, love attics and trees), Norway rats, house mice; signs (droppings, gnawing, noises at night); inspection → trapping → **exclusion** (sealing entry points) → sanitation/cleanup; why poison-only is a bad idea indoors. |
| Mosquito Control | Long mosquito season in humid NE Florida; standing water, rainy summers; yard barrier treatments, larvicide in breeding spots; seasonal programs; health concerns stated responsibly; tips for removing standing water. |
| Bed Bug Treatment | Hitchhiking via travel, used furniture, apartments; signs (bites in lines, blood spots, shed skins); inspection; heat treatment vs. targeted chemical treatment (only list methods owner offers — mark confirm); preparation checklist; follow-up visits. |
| Cockroach & Palmetto Bug Control | Explain "palmetto bug" = local name for American cockroach (and similar large roaches); difference vs. German cockroaches (kitchen infestations); why they come inside in heat/rain; gel baits, growth regulators, exterior treatment; sanitation tips. |
| Ant Control | Fire ants in Florida lawns (painful stings, mounds after rain), ghost ants, carpenter ants, Argentine/sugar ants; why spraying visible ants doesn't work (colony); baits and targeted treatments; yard vs. indoor. |
| Flea & Tick Control | Pet households; year-round warmth; treat home + yard + coordinate with vet treatment of pets; preparation steps; follow-up. |
| Wasp, Hornet & Yellow Jacket Removal | Paper wasps, hornets, yellow jackets (ground nests), mud daubers; safety warning against DIY on large nests. No bee removal content: Ringba buyers don't cover bee calls. |
| Wildlife Removal | Raccoons, squirrels, armadillos (dig up yards), opossums, snakes; humane trapping/removal and exclusion; follow Florida wildlife rules (state generally; do not cite specific regulations unless verified); attic damage and cleanup. Mark entire service `// OWNER: confirm offered`. |
| Lawn Pest Control | St. Augustine grass is the dominant lawn in Jacksonville; chinch bugs (yellow/brown patches in hot dry spots), sod webworms, mole crickets, grubs, fire ants; difference from fertilization services; seasonal timing. |
| Moisture Control / Crawl Space | High humidity attracts termites, roaches, silverfish; crawl space moisture, vapor barriers, ventilation, fixing leaks; connection to termite risk. Mark `// OWNER: confirm offered`. |
| Eco-Friendly & Pet-Safe | Integrated Pest Management (IPM): inspection first, prevention, targeted lower-impact products, exclusion; honest language — avoid absolute claims like "100% non-toxic" or "chemical-free". |

### 7.13 Area Page Template (applies to all 20 areas)
**CRITICAL: This is where sites get penalized for duplicate/doorway content. Each area page must be genuinely unique.** A shared layout component is fine; the written text must be different on every page, and each page must contain area-specific information that would be useless on any other area page.

Structure:
1. **Hero:** H1 "Pest Control in [Area], FL"; sub-headline specific to the area; Call + Free Inspection buttons.
2. **Intro (120-180 words):** written specifically for this area's residents.
3. **Common pest problems in [Area]:** top 3-5 pests **and why they're common here** (geography, housing, water, trees, coast).
4. **Homes & properties in [Area]:** housing types and what that means for pest control (historic homes, new construction/HOA, coastal cottages, large wooded lots, apartments, etc.).
5. **Services popular in [Area]:** 4-6 links to the most relevant service pages with 1-sentence area-specific reason each.
6. **Neighborhoods & ZIP codes we serve in [Area]:** list. **Verify every ZIP code and neighborhood name before publishing** — the ZIPs below are a starting point and must be double-checked.
7. **Local reviews** (only real ones from that area, if any).
8. **Area FAQ:** 3-4 questions specific to that area.
9. **Nearby areas we serve:** links to 3-4 geographically adjacent published area pages.
10. **Final CTA.**

Target length: **600-1,000 words**. Schema: `Service` with `areaServed` = this place, plus `FAQPage` and `BreadcrumbList`.

**Quality gate:** All 20 area pages launch live, so none can be hidden as a fallback. Each must have at least 4 genuinely area-specific points. If you cannot find them, do not pad with generic text — leave a `// OWNER: needs local details` note and list that page at the top of `CONTENT-TODO.md` as a **must-fix before launch** item.

#### Unique content notes per area
Use as the starting angle. Expand with accurate, verifiable local knowledge. No invented statistics, no fake landmarks.

| Area | Region | Starting ZIPs (verify) | Unique angle |
|---|---|---|---|
| Orange Park | Clay County | 32073, 32065 | Near the St. Johns River and Doctors Lake → mosquitoes; mix of established and newer neighborhoods; near NAS Jacksonville, many military families moving in/out → move-in pest inspections, WDO for home sales. |
| Jacksonville Beach | The Beaches | 32250 | Coastal humidity and salt air; sand fleas/no-see-ums near the dunes and marsh; older beach cottages and condos; vacation rentals; beachfront restaurants (link commercial). |
| Ponte Vedra Beach | St. Johns County | 32082 | Upscale homes and golf communities; large irrigated lawns (chinch bugs, mole crickets); HOA communities; discreet, scheduled service; termite protection for high-value homes. |
| Mandarin | Jacksonville | 32223, 32257, 32258 | Along the St. Johns River; large mature oak trees → roof rats and squirrels in attics; many homes built in the 1970s-90s (aging wood, termite risk). |
| St. Johns | St. Johns County | 32259 | Fast-growing area with lots of new construction and master-planned communities → pre-construction termite treatment, new homeowner protection plans; families with kids and pets. |
| Fleming Island | Clay County | 32003 | Master-planned communities and HOAs; on the St. Johns River with ponds and golf course water features → mosquitoes; lawn pests. |
| Southside | Jacksonville | 32216, 32246, 32256 | Dense mix of apartments, offices, and retail corridors → strong commercial angle (property management, restaurants, offices); apartment bed bugs and roaches. |
| Arlington | Jacksonville | 32211, 32225, 32277 | Many mid-century homes (1950s-60s) and wooded lots near the river and preserves → termites, rodents, wildlife. |
| Riverside / Avondale | Jacksonville | 32204, 32205 | Historic districts with early-1900s homes, bungalows, crawl spaces and old wood → termite and moisture concerns; careful treatment methods for historic homes; rodents in older structures; restaurant scene. |
| San Marco | Jacksonville | 32207 | Historic homes plus San Marco Square restaurants and shops → mix of residential termite/rodent and commercial service. |
| Baymeadows / Deerwood | Jacksonville | 32256 | Large apartment complexes and office parks plus gated, wooded residential communities → commercial + residential; roaches, ants, rodents. |
| Atlantic Beach | The Beaches | 32233 | Coastal, older cottages and newer rebuilds; near Naval Station Mayport (military families); humidity, no-see-ums, termites. |
| Neptune Beach | The Beaches | 32266 | Small, walkable beach town; Town Center shops/restaurants; coastal homes; humidity-driven pests. |
| Nocatee | St. Johns County | 32081 | Large master-planned community, mostly newer homes, HOA rules, young families and pets → pet-friendly options, mosquitoes near preserves and water, termite protection for new homes. |
| Fernandina Beach | Nassau County | 32034 | Amelia Island; historic downtown buildings; salt marsh → heavy mosquitoes and no-see-ums; vacation rentals; coastal humidity. |
| Yulee | Nassau County | 32097 | Rapid growth with new subdivisions on formerly wooded land → displaced wildlife, fire ants, termites; near marshes. |
| Middleburg | Clay County | 32068 | Semi-rural, larger lots, wooded land → wildlife, snakes, fire ants, ticks; well-suited to perimeter and yard programs. |
| Green Cove Springs | Clay County | 32043 | Clay County seat on the St. Johns River; mix of historic town homes and new development → mosquitoes, termites in older homes. |
| Northside / Oceanway | Jacksonville | 32218, 32226 | Newer subdivisions near marshes and preserves → mosquitoes; near the airport and River City Marketplace; warehouses/logistics nearby (commercial angle). |
| Westside | Jacksonville | 32210, 32221, 32244 | Large area with established neighborhoods and industrial/warehouse districts → rodents, roaches; strong commercial (warehouses) angle. |

---

## 8. Internal Linking Rules

- Every service page links to: 2-3 related services, the Residential or Commercial page, and all published area pages relevant to it (at least 4).
- Every area page links to: 4-6 relevant service pages and 3-4 nearby published area pages.
- Every blog post links to at least one service page (in-body, natural anchor) and one area or hub page where relevant.
- Residential and Commercial pages link to all relevant services/industries.
- Use natural, descriptive anchor text ("termite inspection for home buyers", "pest control in Mandarin"). Vary it. Do not repeat the exact same keyword anchor everywhere.
- Never link to unpublished pages (helpers must check `published`).
- No orphan pages: every published page must be reachable from navigation, footer, or a hub.

---

## 9. Content Writing Rules

### 9.1 Voice and style
- Write like an experienced, friendly local technician explaining things to a homeowner. Clear, calm, helpful, honest.
- Simple American English (roughly 7th-9th grade reading level). Short paragraphs (2-4 sentences). Use subheadings often.
- Speak to the reader as "you"; refer to the company as "we".
- No hype, no fear-mongering, no fake urgency ("Act now before it's too late!").

### 9.2 Uniqueness (non-negotiable)
- Every page's body text must be original and different. No templated paragraphs reused with names swapped.
- The only repeated text allowed: short CTA lines, trust badges, footer, and short boilerplate like "Call us for a free inspection."
- Before finishing, compare pages of the same type (services vs services, areas vs areas). If two pages share whole sentences or paragraph structures with only names changed, rewrite them.

### 9.3 Keywords
- Each page has one primary keyword (in title tag, H1, first 100 words, URL, meta description) and 3-5 natural secondary terms.
- Include "Jacksonville" (or the area name) naturally; do not stuff it into every sentence.
- Use local terms people actually use: "palmetto bugs", "no-see-ums", "WDO inspection", "St. Augustine grass", "termite swarm season".

### 9.4 E-E-A-T and accuracy
- Show real expertise: specific signs, specific process steps, honest limitations.
- Add an author/reviewer box on blog posts and a "Reviewed by a licensed technician" line on service pages (placeholder name, marked for owner).
- **Do not invent:** statistics, study results, awards, years, license numbers, review counts, regulation section numbers, or product brand names the company uses. If a fact can't be stated confidently, state it generally or leave a `// OWNER: verify` note.
- Safety statements must be careful and responsible (always follow product labels; technician explains re-entry times).

### 9.5 Formatting on page
- Use bullet lists for signs, tips, and steps; prose for explanations.
- Include at least one image slot per long page with descriptive alt text.
- Each FAQ answer: 40-90 words, direct answer in the first sentence.

### 9.6 Starter blog posts (write all 6, 900-1,400 words each)
1. "When Is Termite Swarm Season in Jacksonville?" → links to Termite Control, Termite Inspection.
2. "Palmetto Bugs vs. Cockroaches: What's the Difference?" → links to Cockroach Control.
3. "How to Get Rid of Fire Ants in Your Florida Lawn" → links to Ant Control, Lawn Pest Control.
4. "Do You Need a WDO Inspection When Buying a Home in Florida?" → links to Termite Inspection.
5. "Why Mosquitoes Are So Bad in Jacksonville (and What Helps)" → links to Mosquito Control.
6. "Signs of Rats in Your Attic (and What to Do Next)" → links to Rodent Control, Wildlife Removal.

---

## 10. Pricing Policy (IMPORTANT)

- **Do not show any prices, price ranges, "starting at" amounts, or discounts with dollar values anywhere on the site** — not in content, not in schema (no `priceRange`, no `Offer` with price), not in FAQs.
- Pricing is discussed only by phone after understanding the customer's situation.
- Instead, on every service page include a `CostFactors` section titled "What Affects the Cost of [Service]?" listing real factors (home size/square footage, type and severity of infestation, treatment method, number of visits, one-time vs. recurring plan, accessibility such as crawl spaces/attics), ending with: "Call us for a free inspection and an accurate, upfront quote."
- Use trust phrases (owner to confirm each): "Free inspections", "Upfront quote before any work begins", "No hidden fees", "No long-term contract required".

---

## 11. Technical SEO Requirements

### 11.1 Metadata (every page)
- Unique `<title>` (50-60 chars), primary keyword first, brand at end. Example: `Termite Control in Jacksonville, FL | Free Inspection | [Brand]`.
- Unique meta description (140-160 chars) with benefit + CTA.
- Self-referencing canonical URL.
- Open Graph and Twitter card tags (title, description, image).
- `lang="en-US"` on `<html>`.
- `/thank-you` is `noindex`.

### 11.2 Headings
Exactly one H1 per page. Logical H2/H3 nesting. No skipped levels.

### 11.3 URLs
Lowercase, hyphenated, short, no trailing junk. Configure consistent trailing-slash behavior. 301 redirects not needed at launch.

### 11.4 Structured data (JSON-LD)
Build schema from `siteConfig` via helper functions in `src/lib/schema.ts`.
- **Sitewide (in layout or Home):** `PestControl` (a LocalBusiness subtype) with name, url, telephone, email, address (or only city/state/postal if `showPublicly` false), geo, openingHoursSpecification, areaServed (list of published areas + Jacksonville), sameAs (social/GBP links that exist), logo, image. **No `priceRange`.**
- **Service pages:** `Service` (serviceType, provider → business, areaServed).
- **Area pages:** `Service` with `areaServed` = that place (`City` or `Place`).
- **FAQ sections:** `FAQPage` (only questions visibly on the page).
- **Blog posts:** `BlogPosting` (headline, datePublished, dateModified, author, image).
- **All pages except Home:** `BreadcrumbList`.
- **Reviews:** only for real reviews; do not add self-serving AggregateRating unless the owner confirms it's compliant.
- Validate all schema shapes (no empty or placeholder values output in production).

### 11.5 Sitemap & robots
- `app/sitemap.ts`: all **published** indexable pages with `lastModified`. Exclude `/thank-you` and unpublished pages.
- `app/robots.ts`: allow all, point to sitemap, disallow `/thank-you` and any API routes.

### 11.6 Performance (Core Web Vitals)
- Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile. Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices, SEO.
- Static generation everywhere; minimal client JavaScript (Server Components by default; `"use client"` only for menu, accordion, form).
- Optimize hero image; preload only the LCP image; no render-blocking third-party scripts; analytics loaded lazily.
- No carousels/sliders on the hero.

### 11.7 Images
- `next/image` everywhere; descriptive file names (e.g. `termite-inspection-jacksonville-home.webp`); descriptive alt text; compressed.

### 11.8 Local SEO notes for the owner (put in README, not on site)
- Keep Name, Address, Phone identical across site, Google Business Profile, and directories (Yelp, BBB, Angi, Nextdoor, Yellow Pages).
- Google Business Profile requires a real business location; do not use fake or virtual addresses.
- Build local backlinks (chamber of commerce, local blogs/news, real estate agents, HOAs).
- Ask every customer for a Google review.

---

## 12. Forms & Conversion

### QuoteForm fields
- Full name (required)
- Phone (required, US format validation)
- Email (optional)
- ZIP code (required, 5 digits)
- Property type: Residential / Commercial (required) → if Commercial, show "Business name"
- Pest problem: dropdown of services + "Not sure" (required)
- Message (optional, short textarea)
- Hidden honeypot field for spam

### Behavior
- Validate client- and server-side with `zod`. Clear, friendly error messages.
- On success: redirect to `/thank-you` (says we'll call shortly, shows phone number for urgent issues) and fire `form_submit` analytics event.
- Send email notification to the address from env (`LEAD_NOTIFY_EMAIL`) via provider API key in env. Include page URL the form was submitted from (useful for knowing which page converts).
- Form must work without layout shift and be fully keyboard accessible.
- Keep the form short — do not add extra required fields.

### Click-to-call
- Every phone number is a `tel:` link and fires a `click_to_call` event with the page path.
- Phone and CTA visible above the fold on every page (header + hero), and again at the end of every page.

---

## 13. Accessibility

- WCAG 2.1 AA: color contrast, focus states visible, keyboard navigable menus and accordions, labels on all form inputs, `aria-expanded` on toggles, skip-to-content link, semantic HTML landmarks.
- Respect `prefers-reduced-motion`.

---

## 14. Do NOT Do List

- ❌ No prices or price ranges anywhere (including schema).
- ❌ No fake reviews, ratings, review counts, awards, badges, statistics, or license numbers.
- ❌ No duplicate/spun content across area or service pages; no city-name-swap templates.
- ❌ No St. Augustine page.
- ❌ No popups, autoplay video, chat widgets, or heavy animations.
- ❌ No cheesy stock photos or giant cartoon bugs.
- ❌ No keyword stuffing.
- ❌ No absolute safety claims ("100% safe", "chemical-free", "non-toxic") unless owner confirms and they're accurate.
- ❌ No hard-coded business details outside `src/config/site.ts`.
- ❌ No links to unpublished pages.
- ❌ No `localStorage` dependence for core functionality.

---

## 15. Deliverables

1. Complete Next.js project (App Router, TypeScript, Tailwind) that builds with no errors or type errors.
2. All 50 pages + 6 blog posts + thank-you + 404, with content written per this brief. Every page and post `published: true`.
3. `src/config/site.ts` with all placeholders.
4. `.env.example` listing every environment variable.
5. `README.md` covering: how to run locally, how to edit business info, how to unpublish/republish a page, how to add a review, how to add a blog post, how to deploy to Vercel, and the local SEO notes from 11.8.
6. A `CONTENT-TODO.md` listing every `// OWNER:` note in the codebase (file + line + what's needed).

---

## 16. Final Acceptance Checklist

Before finishing, verify each item:

- [ ] `npm run build` succeeds; no TypeScript or lint errors.
- [ ] All 50 pages and 6 blog posts render and are in the sitemap (`/thank-you` excluded).
- [ ] Every page has a unique title, meta description, canonical, and exactly one H1.
- [ ] No page contains a price or dollar amount.
- [ ] No raw `[PLACEHOLDER]` text renders in production build.
- [ ] Phone number is clickable and visible above the fold on every page; mobile bottom call bar works.
- [ ] Quote form validates, submits, redirects to `/thank-you`, and sends the email.
- [ ] JSON-LD present and valid on Home, services, areas, FAQ, blog posts; breadcrumbs everywhere except Home.
- [ ] Each service page is 800-1,500 words; each area page 600-1,000 words; content is unique (spot-check pairs of area pages for repeated sentences).
- [ ] Internal linking rules in Section 8 followed; no links to unpublished pages; no orphan pages.
- [ ] Lighthouse mobile ≥ 90 on Home, one service page, one area page.
- [ ] Accessibility: keyboard navigation works, form labels present, contrast passes.
- [ ] `README.md` and `CONTENT-TODO.md` delivered.
