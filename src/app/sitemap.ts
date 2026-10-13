import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";
import { getPublishedAreas, getPublishedIndustries, getPublishedPosts, getPublishedServices } from "@/lib/content";
import { STATIC_ROUTES, areaHref, blogPostHref, industryHref, serviceHref } from "@/lib/routes";

/** Update when the copy on a core page (home, about, FAQ, etc.) changes. */
const CORE_PAGES_UPDATED = "2026-10-12";

type Entry = MetadataRoute.Sitemap[number];

/** Every published, indexable page. /thank-you and unpublished pages are left out (brief 11.5). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const entry = (path: string, lastModified: string, priority: number): Entry => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    priority,
  });

  return [
    entry(STATIC_ROUTES.home, CORE_PAGES_UPDATED, 1),
    entry(STATIC_ROUTES.residential, CORE_PAGES_UPDATED, 0.9),
    entry(STATIC_ROUTES.commercial, CORE_PAGES_UPDATED, 0.9),
    entry(STATIC_ROUTES.contact, CORE_PAGES_UPDATED, 0.8),
    entry(STATIC_ROUTES.serviceAreas, CORE_PAGES_UPDATED, 0.8),
    entry(STATIC_ROUTES.about, CORE_PAGES_UPDATED, 0.6),
    entry(STATIC_ROUTES.reviews, CORE_PAGES_UPDATED, 0.6),
    entry(STATIC_ROUTES.faq, CORE_PAGES_UPDATED, 0.6),
    entry(STATIC_ROUTES.blog, CORE_PAGES_UPDATED, 0.5),
    ...getPublishedServices().map((s) => entry(serviceHref(s.slug), s.lastUpdated, 0.9)),
    ...getPublishedAreas().map((a) => entry(areaHref(a.slug), a.lastUpdated, 0.8)),
    ...getPublishedIndustries().map((i) => entry(industryHref(i.slug), i.lastUpdated, 0.7)),
    ...getPublishedPosts().map((p) => entry(blogPostHref(p.slug), p.dateModified, 0.5)),
    entry(STATIC_ROUTES.privacy, CORE_PAGES_UPDATED, 0.1),
    entry(STATIC_ROUTES.terms, CORE_PAGES_UPDATED, 0.1),
  ];
}
