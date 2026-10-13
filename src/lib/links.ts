import { getArea, getIndustry, getPost, getService } from "./content";
import { STATIC_ROUTES } from "./routes";

const LINKABLE_STATIC_PATHS = new Set<string>(
  Object.values(STATIC_ROUTES).filter((path) => path !== STATIC_ROUTES.thankYou),
);

/**
 * True if a link may be rendered. Internal links to missing or unpublished pages
 * return false so they can be shown as plain text instead (brief section 8).
 * External, tel:, mailto:, and same-page anchors are always linkable.
 */
export function isLinkable(href: string): boolean {
  if (!href.startsWith("/")) return true;

  const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (LINKABLE_STATIC_PATHS.has(path)) return true;

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 1) return getService(segments[0]) !== undefined;
  if (segments.length === 2) {
    const [section, slug] = segments;
    if (section === "service-areas") return getArea(slug) !== undefined;
    if (section === "commercial") return getIndustry(slug) !== undefined;
    if (section === "blog") return getPost(slug) !== undefined;
  }
  return false;
}
