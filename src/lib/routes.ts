import type { AreaRegion } from "@/content/types";

/** Fixed (non-content) pages that are always published. */
export const STATIC_ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  serviceAreas: "/service-areas",
  reviews: "/reviews",
  faq: "/faq",
  blog: "/blog",
  residential: "/residential",
  commercial: "/commercial",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  thankYou: "/thank-you",
} as const;

/** id of the quote form wrapper; every "Free Quote" button scrolls to it. Keep one per page. */
export const QUOTE_FORM_ID = "quote-form";

export const serviceHref = (slug: string) => `/${slug}`;
export const areaHref = (slug: string) => `/service-areas/${slug}`;
export const industryHref = (slug: string) => `/commercial/${slug}`;
export const blogPostHref = (slug: string) => `/blog/${slug}`;

/**
 * Top-level path segments owned by other routes. Service pages live at "/{slug}",
 * so a service slug may never use one of these.
 */
export const RESERVED_TOP_LEVEL_SLUGS = new Set([
  ...Object.values(STATIC_ROUTES).map((path) => path.slice(1)).filter(Boolean),
  "api",
  "sitemap.xml",
  "robots.txt",
]);

/** Area regions in the order they appear on the Service Areas hub. */
export const AREA_REGIONS: { id: AreaRegion; label: string }[] = [
  { id: "jacksonville", label: "Jacksonville Neighborhoods" },
  { id: "beaches", label: "The Beaches" },
  { id: "st-johns-county", label: "St. Johns County" },
  { id: "clay-county", label: "Clay County" },
  { id: "nassau-county", label: "Nassau County" },
];
