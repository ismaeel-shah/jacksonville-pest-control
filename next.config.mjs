// Hostinger's build servers can't load Next's native SWC binary (glibc too old), so the build
// falls back to WASM SWC. That fallback can't compile a TypeScript config (hence .mjs) and
// can't run Turbopack (hence `next build --webpack` in package.json).

/** @type {import("next").NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
