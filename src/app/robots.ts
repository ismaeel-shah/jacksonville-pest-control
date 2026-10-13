import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";
import { STATIC_ROUTES } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [STATIC_ROUTES.thankYou, "/api/"] },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
