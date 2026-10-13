import type { Metadata } from "next";
import { getBusinessName } from "./config";

/** Google shows roughly 60 characters of a title; the brand is dropped rather than truncated. */
const MAX_TITLE_LENGTH = 60;

type PageMetaInput = {
  /** Page title without the brand; the brand is appended when it fits in 60 characters. */
  title: string;
  description: string;
  /** Path of the page, e.g. "/termite-control". Used for the canonical URL. */
  path: string;
  image?: string;
  noindex?: boolean;
};

/** Standard metadata for every page: unique title, description, canonical, Open Graph, Twitter. */
export function buildMetadata({ title, description, path, image, noindex }: PageMetaInput): Metadata {
  const brand = getBusinessName();
  const branded = brand ? `${title} | ${brand}` : title;
  const fullTitle = branded.length <= MAX_TITLE_LENGTH ? branded : title;
  // A page's own openGraph replaces the inherited one, so point at the root
  // app/opengraph-image explicitly when the page has no image of its own.
  const images = [image ? { url: image } : { url: "/opengraph-image", width: 1200, height: 630, alt: title }];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      siteName: brand ?? undefined,
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
