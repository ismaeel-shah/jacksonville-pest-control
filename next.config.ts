import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: false,
  poweredByHeader: false,
  experimental: {
    // Most visitors are first-time mobile searchers, and Tailwind's CSS is small (~8 KB gzipped),
    // so inlining it removes the render-blocking stylesheet request and speeds up LCP.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
