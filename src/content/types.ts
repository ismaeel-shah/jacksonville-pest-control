/**
 * Content types shared by every content file.
 *
 * Each service, area, industry, and blog post lives in its own file with its
 * own hand-written copy. Page templates share layout only, never text.
 */

/**
 * A list of paragraphs. Inside a paragraph you can write:
 *   - links:  [termite inspection for home buyers](/termite-inspection)
 *   - bold:   **important words**
 * Links to unpublished pages are rendered as plain text automatically.
 */
export type Prose = string[];

export type FAQ = {
  question: string;
  /** 40-90 words, direct answer in the first sentence. May use Prose link syntax. */
  answer: string;
};

export type SeoMeta = {
  /** Full <title>, 50-60 chars, primary keyword first, brand added automatically. */
  title: string;
  /** 140-160 chars, benefit + call to action. */
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
};

/** A slot for a real photo the owner will supply. Rendered as a labeled placeholder until the file exists. */
export type ImageSlot = {
  /** File name under /public/images, e.g. "termite-inspection-jacksonville-home.webp". */
  file: string;
  alt: string;
};

export type TitledItem = { title: string; description: string };

export type ContentSection = {
  heading: string;
  body?: Prose;
  bullets?: string[];
};

/** Icon keys mapped to lucide-react icons in the UI layer. */
export type IconKey =
  | "bug"
  | "termite"
  | "inspection"
  | "construction"
  | "rodent"
  | "mosquito"
  | "bed"
  | "cockroach"
  | "ant"
  | "flea"
  | "wasp"
  | "wildlife"
  | "lawn"
  | "moisture"
  | "leaf"
  | "restaurant"
  | "building"
  | "warehouse"
  | "office";

type Publishable = {
  slug: string;
  /** Set to false to hide the page from the site, sitemap, navigation, and all links. */
  published: boolean;
};

// ---------------------------------------------------------------------------
// Services (brief section 7.12)
// ---------------------------------------------------------------------------

export type ServiceContent = Publishable & {
  name: string; // "Termite Control"
  navLabel: string; // short label for menus
  icon: IconKey;
  audience: ("residential" | "commercial")[];
  /** One sentence for service cards. */
  cardDescription: string;
  seo: SeoMeta;
  hero: { h1: string; subheadline: string; image: ImageSlot };
  intro: Prose;
  localProblem: { heading: string; body: Prose };
  signs: { heading: string; intro?: string; items: TitledItem[] };
  process: { heading: string; intro?: string; steps: TitledItem[] };
  treatmentOptions: { heading: string; intro?: Prose; options: TitledItem[] };
  safety: { heading: string; body: Prose };
  /** Rendered under "What Affects the Cost of {name}?" — factors only, never prices. */
  costFactors: TitledItem[];
  prevention: { heading: string; tips: string[] };
  forBusinesses?: Prose;
  faqs: FAQ[];
  relatedServices: string[]; // service slugs
  lastUpdated: string; // YYYY-MM-DD
};

// ---------------------------------------------------------------------------
// Areas (brief section 7.13)
// ---------------------------------------------------------------------------

export type AreaRegion =
  | "jacksonville"
  | "beaches"
  | "st-johns-county"
  | "clay-county"
  | "nassau-county";

export type AreaContent = Publishable & {
  name: string; // "Orange Park"
  region: AreaRegion;
  /** 1-2 unique sentences for the Service Areas hub card. */
  hubBlurb: string;
  seo: SeoMeta;
  hero: { h1: string; subheadline: string; image?: ImageSlot };
  intro: Prose;
  commonPests: { heading: string; intro?: Prose; pests: { name: string; why: string }[] };
  homes: { heading: string; body: Prose };
  popularServices: { slug: string; reason: string }[];
  /** OWNER: verify every neighborhood name and ZIP before launch. */
  neighborhoods: string[];
  zipCodes: string[];
  faqs: FAQ[];
  nearbyAreas: string[]; // area slugs
  lastUpdated: string;
};

// ---------------------------------------------------------------------------
// Commercial industries (brief section 7.11)
// ---------------------------------------------------------------------------

export type IndustryContent = Publishable & {
  name: string; // "Restaurants & Food Businesses"
  icon: IconKey;
  cardDescription: string;
  seo: SeoMeta;
  hero: { h1: string; subheadline: string; image: ImageSlot };
  intro: Prose;
  commonPests: { heading: string; items: TitledItem[] };
  sections: ContentSection[];
  process: { heading: string; steps: TitledItem[] };
  faqs: FAQ[];
  relatedServices: string[];
  lastUpdated: string;
};

// ---------------------------------------------------------------------------
// Blog (brief sections 7.7 and 9.6)
// ---------------------------------------------------------------------------

export type BlogSection = ContentSection & {
  /** Anchor id for the table of contents. */
  id: string;
  subsections?: ContentSection[];
};

export type BlogPost = Publishable & {
  title: string;
  excerpt: string;
  category: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string;
  seo: SeoMeta;
  image: ImageSlot;
  intro: Prose;
  sections: BlogSection[];
  /** Service slugs for the CTA box at the end of the post. */
  relatedServices: string[];
  relatedPosts: string[];
};

// ---------------------------------------------------------------------------
// FAQs and reviews
// ---------------------------------------------------------------------------

export type FAQGroup = {
  id: string;
  title: string; // "General", "Termites", ...
  faqs: FAQ[];
};

/** Only real customer reviews. Never invent one. */
export type Review = {
  name: string; // first name + last initial, e.g. "Maria G."
  area: string; // area slug or name
  service: string; // service slug
  date: string; // YYYY-MM-DD
  text: string;
  rating?: number; // 1-5, only if the customer gave one
  source?: "google" | "facebook" | "yelp" | "direct";
};
