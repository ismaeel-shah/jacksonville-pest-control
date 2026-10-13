// Regenerates the default social share image (src/app/opengraph-image.png and its alt text)
// from src/config/site.ts. Run after changing the business name or tagline:
//   npm run og-image
// It's a committed static file rather than an opengraph-image.tsx route because Hostinger's
// WASM-only build can't bundle next/og's ImageResponse.
import { writeFileSync } from "node:fs";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const { siteConfig } = await import(new URL("../src/config/site.ts", import.meta.url));

// Same placeholder rule as src/lib/config.ts.
const filled = (value) => (value && value.trim() !== "" && !/\[[A-Z0-9_]+\]/.test(value) ? value : null);

const size = { width: 1200, height: 630 };
const name = filled(siteConfig.businessName);

const image = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#1e3a5f",
        color: "#ffffff",
        fontFamily: "sans-serif",
      },
    },
    h("div", { style: { display: "flex", fontSize: 36, fontWeight: 700, color: "#e8f3ed" } }, name ?? "Jacksonville, FL"),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h("div", { style: { fontSize: 76, fontWeight: 800, lineHeight: 1.1 } }, siteConfig.tagline),
      h(
        "div",
        { style: { marginTop: 28, fontSize: 36, color: "#e8f3ed" } },
        "Termites · Rodents · Mosquitoes · Roaches · Free Inspections",
      ),
    ),
    h("div", { style: { display: "flex", height: 16, width: 240, background: "#f28c28", borderRadius: 8 } }),
  ),
  size,
);

const out = new URL("../src/app/", import.meta.url);
writeFileSync(new URL("opengraph-image.png", out), Buffer.from(await image.arrayBuffer()));
writeFileSync(new URL("opengraph-image.alt.txt", out), siteConfig.tagline);
console.log("Wrote src/app/opengraph-image.png and opengraph-image.alt.txt");
