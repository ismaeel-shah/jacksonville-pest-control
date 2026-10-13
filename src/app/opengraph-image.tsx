import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { getBusinessName } from "@/lib/config";

// Default social share image for every page, built at compile time from the config.
export const alt = siteConfig.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const name = getBusinessName();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#1e3a5f",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#e8f3ed" }}>{name ?? "Jacksonville, FL"}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>{siteConfig.tagline}</div>
          <div style={{ marginTop: 28, fontSize: 36, color: "#e8f3ed" }}>
            Termites · Rodents · Mosquitoes · Roaches · Free Inspections
          </div>
        </div>
        <div style={{ display: "flex", height: 16, width: 240, background: "#f28c28", borderRadius: 8 }} />
      </div>
    ),
    size,
  );
}
