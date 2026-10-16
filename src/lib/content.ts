import { areas, blogPosts, industries, services } from "@/content";
import type { AreaContent, AreaRegion, BlogPost, IndustryContent, ServiceContent } from "@/content/types";
import { proseToPlainText } from "./prose";
import { RESERVED_TOP_LEVEL_SLUGS } from "./routes";

type Publishable = { slug: string; published: boolean };

function assertUniqueSlugs(kind: string, items: Publishable[]) {
  const seen = new Set<string>();
  for (const { slug } of items) {
    if (seen.has(slug)) throw new Error(`Duplicate ${kind} slug: "${slug}"`);
    seen.add(slug);
  }
}

// Fail the build early on content mistakes instead of shipping broken routes.
assertUniqueSlugs("service", services);
assertUniqueSlugs("area", areas);
assertUniqueSlugs("industry", industries);
assertUniqueSlugs("blog post", blogPosts);
for (const { slug } of services) {
  if (RESERVED_TOP_LEVEL_SLUGS.has(slug)) {
    throw new Error(`Service slug "${slug}" collides with an existing top-level route`);
  }
}

const published = <T extends Publishable>(items: T[]) => items.filter((item) => item.published);

const findPublished = <T extends Publishable>(items: T[], slug: string) =>
  items.find((item) => item.slug === slug && item.published);

/** Keeps the given order, drops slugs that are missing or unpublished. */
const pickPublished = <T extends Publishable>(items: T[], slugs: string[]) =>
  slugs.map((slug) => findPublished(items, slug)).filter((item): item is T => item !== undefined);

// Services
export const getPublishedServices = (): ServiceContent[] => published(services);
export const getService = (slug: string) => findPublished(services, slug);
export const getServicesBySlugs = (slugs: string[]) => pickPublished(services, slugs);

// Areas
export const getPublishedAreas = (): AreaContent[] => published(areas);
export const getArea = (slug: string) => findPublished(areas, slug);
export const getAreasBySlugs = (slugs: string[]) => pickPublished(areas, slugs);
export const getAreasByRegion = (region: AreaRegion) =>
  published(areas).filter((area) => area.region === region);
/** Unpublished areas, for the plain-text "Also covered" list on the hub. */
export const getUnpublishedAreas = (): AreaContent[] => areas.filter((area) => !area.published);

// Industries
export const getPublishedIndustries = (): IndustryContent[] => published(industries);
export const getIndustry = (slug: string) => findPublished(industries, slug);

// Blog
export const getPublishedPosts = (): BlogPost[] =>
  published(blogPosts).sort((a, b) => b.datePublished.localeCompare(a.datePublished));
export const getPost = (slug: string) => findPublished(blogPosts, slug);
export const getPostsBySlugs = (slugs: string[]) => pickPublished(blogPosts, slugs);

/** Average adult reading speed, used for the "5 min read" label. */
const WORDS_PER_MINUTE = 225;

/** Estimated reading time in whole minutes (at least 1). */
export function getReadingMinutes(post: BlogPost): number {
  const sections = post.sections.flatMap((section) => [section, ...(section.subsections ?? [])]);
  const text = [
    ...post.intro,
    ...sections.flatMap((section) => [section.heading, ...(section.body ?? []), ...(section.bullets ?? [])]),
  ]
    .map(proseToPlainText)
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
