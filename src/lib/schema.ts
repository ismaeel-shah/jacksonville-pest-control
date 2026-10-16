/**
 * JSON-LD builders. All business data comes from siteConfig, and empty or
 * placeholder values are stripped so nothing incomplete reaches production.
 */
import { siteConfig } from "@/config/site";
import type { AreaContent, BlogPost, FAQ } from "@/content/types";
import { filled, getBusinessName, getSiteUrl } from "./config";
import { proseToPlainText } from "./prose";

type JsonValue = string | number | boolean | null | undefined | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

/** Recursively removes null, undefined, empty strings, empty arrays, and empty objects. */
function compact<T extends JsonValue>(value: T): T | undefined {
  if (value === null || value === undefined || value === "") return undefined;
  if (Array.isArray(value)) {
    const items = value.map((item) => compact(item)).filter((item) => item !== undefined);
    return (items.length ? items : undefined) as T | undefined;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value)
      .map(([key, child]) => [key, compact(child)] as const)
      .filter(([, child]) => child !== undefined);
    return (entries.length ? Object.fromEntries(entries) : undefined) as T | undefined;
  }
  return value;
}

const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${getSiteUrl()}${path}`);

const BUSINESS_ID = () => `${getSiteUrl()}/#business`;

/** Reference to the sitewide business node, for provider/publisher fields. */
export const businessRef = () => ({ "@id": BUSINESS_ID() });

const placeOf = (name: string): JsonObject => ({
  "@type": "City",
  name: `${name}, FL`,
});

/**
 * Sitewide Organization node. This is a referral site, not a pest control business, so it is
 * not marked up as PestControl/LocalBusiness: no address, hours, ratings, or priceRange.
 */
export function buildBusinessSchema(publishedAreas: Pick<AreaContent, "name">[]): JsonObject | null {
  const name = getBusinessName();
  if (!name) return null;

  const logo = filled(siteConfig.logo);

  return (
    compact({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": BUSINESS_ID(),
      name,
      legalName: filled(siteConfig.legalName),
      url: getSiteUrl(),
      email: filled(siteConfig.email),
      logo: logo ? absoluteUrl(logo) : undefined,
      areaServed: [placeOf("Jacksonville"), ...publishedAreas.map((area) => placeOf(area.name))],
      sameAs: Object.values(siteConfig.social).map(filled),
    }) ?? null
  );
}

export function buildBreadcrumbSchema(items: { name: string; href: string }[]): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** WebPage-type node for About, Contact, and similar pages, pointing at the business. */
export function buildWebPageSchema(input: {
  type: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage";
  name: string;
  description: string;
  path: string;
}): JsonObject {
  return compact({
    "@context": "https://schema.org",
    "@type": input.type,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    about: getBusinessName() ? businessRef() : undefined,
  })!;
}

/** Only pass FAQs that are visible on the same page. */
export function buildFaqSchema(faqs: FAQ[]): JsonObject | null {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: proseToPlainText(faq.answer) },
    })),
  };
}

/** Service pages (areaServed = Jacksonville + areas) and area pages (areaServed = that place). No provider: the site does not perform the service. */
export function buildServiceSchema(input: {
  serviceType: string;
  description: string;
  path: string;
  areaNames: string[];
}): JsonObject {
  return compact({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.serviceType,
    name: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    areaServed: input.areaNames.map(placeOf),
  })!;
}

export function buildBlogPostingSchema(post: BlogPost, path: string, imageUrl?: string): JsonObject {
  return compact({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: imageUrl ? absoluteUrl(imageUrl) : undefined,
    author: getBusinessName() ? businessRef() : undefined,
    publisher: getBusinessName() ? businessRef() : undefined,
  })!;
}
