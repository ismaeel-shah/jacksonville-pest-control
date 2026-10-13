import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { ConfigWarningBanner } from "@/components/dev/ConfigWarningBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName, getPhone, getSiteUrl } from "@/lib/config";
import { getPublishedAreas } from "@/lib/content";
import { buildBusinessSchema } from "@/lib/schema";
import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading-face",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Every page must be fully prerendered at build time (brief section 3).
export const ensureStatic = "navigation";

const businessName = getBusinessName();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: businessName ? `${siteConfig.tagline} | ${businessName}` : siteConfig.tagline,
    template: businessName ? `%s | ${businessName}` : "%s",
  },
  description:
    "Licensed, local pest control in Jacksonville, FL. Termites, rodents, mosquitoes, roaches and more. Call today for a free inspection and an upfront quote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}>
      {/* Bottom padding keeps content clear of the fixed mobile call bar. */}
      <body className="flex min-h-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-primary focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ConfigWarningBanner />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar phoneHref={getPhone()?.href ?? null} />
        <JsonLd data={buildBusinessSchema(getPublishedAreas())} />
        <Analytics gaId={filled(siteConfig.ga4Id)} />
      </body>
    </html>
  );
}
