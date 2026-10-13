import { siteConfig } from "@/config/site";

const PLACEHOLDER_PATTERN = /\[[A-Z0-9_]+\]/;

/** True when a config value is empty or still contains a "[PLACEHOLDER]". */
export function isPlaceholder(value: string | null | undefined): boolean {
  return value == null || value.trim() === "" || PLACEHOLDER_PATTERN.test(value);
}

/** Returns the value if it is real, otherwise null. Use this before rendering any config value. */
export function filled(value: string | null | undefined): string | null {
  return isPlaceholder(value) ? null : value!;
}

/**
 * Like filled(), but in development returns the raw placeholder so the layout can be
 * reviewed before real data exists. Never shows a placeholder in production.
 */
export function previewable(value: string | null | undefined): string | null {
  if (!isPlaceholder(value)) return value!;
  return process.env.NODE_ENV === "development" && value ? value : null;
}

/** Dotted paths of every config value that is still a "[PLACEHOLDER]". */
export function getPlaceholderPaths(): string[] {
  const paths: string[] = [];

  function walk(value: unknown, path: string) {
    if (typeof value === "string") {
      if (PLACEHOLDER_PATTERN.test(value)) paths.push(path);
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => walk(item, `${path}[${i}]`));
    } else if (value && typeof value === "object") {
      for (const [key, child] of Object.entries(value)) {
        walk(child, path ? `${path}.${key}` : key);
      }
    }
  }

  walk(siteConfig, "");
  return paths;
}

/** Absolute site URL without a trailing slash. Falls back to localhost until the domain is set. */
export function getSiteUrl(): string {
  return (filled(siteConfig.siteUrl) ?? "http://localhost:3000").replace(/\/+$/, "");
}

/** Business name, or null while it is still a placeholder. */
export function getBusinessName(): string | null {
  return filled(siteConfig.businessName);
}

/** Turns protocol-relative "//host/path" (common in embed codes) into https; rejects anything not https. */
function toHttpsUrl(value: string | null): string | null {
  if (!value) return null;
  const url = value.trim().startsWith("//") ? `https:${value.trim()}` : value.trim();
  return url.startsWith("https://") ? url : null;
}

/**
 * The renter's embedded contact form, or null to use the built-in quote form.
 * Only https URLs are accepted so a typo can't load an insecure page.
 */
export function getFormEmbed(): {
  src: string;
  height: number;
  mobileHeight: number;
  title: string;
  scriptSrc: string | null;
} | null {
  const { src, height, mobileHeight, title, scriptSrc } = siteConfig.formEmbed;
  const url = toHttpsUrl(filled(src));
  if (!url) return null;
  return { src: url, height, mobileHeight: mobileHeight || height, title, scriptSrc: toHttpsUrl(filled(scriptSrc)) };
}

/** Phone details for tel: links, or null until both phone fields are filled in. */
export function getPhone(): { display: string; href: string } | null {
  const display = filled(siteConfig.phoneDisplay);
  const e164 = filled(siteConfig.phoneHref);
  return display && e164 ? { display, href: `tel:${e164}` } : null;
}
