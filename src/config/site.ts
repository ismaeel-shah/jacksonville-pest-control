/**
 * Central site config.
 *
 * Every site detail (name, tracking phone number, call hours, disclaimer, schema, etc.)
 * comes from this file. Change the values here and nowhere else.
 *
 * This is a pay-per-call referral site (Ringba): calls go to independent local pest
 * control providers. Network rules: no contact forms, no prices or cost content, no
 * reviews or ratings, no "our team" or licensed/insured claims, and the disclaimer in
 * the footer of every page. Keep new config and copy inside those rules.
 *
 * Values written like "[THIS]" are placeholders. While a value is still a
 * placeholder (or an empty string), any UI element that depends on it is hidden
 * in production, and a warning banner lists it in development.
 */

export type DayHours = {
  days: string; // "Mon-Fri", "Sat", "Sun"
  open: string; // "07:00" (24h) or "closed"
  close: string; // "19:00" (24h) or "closed"
};

export type SiteConfig = {
  businessName: string;
  legalName: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  email?: string;
  address: { city: string; state: string };
  hours: DayHours[];
  social: { facebook: string; instagram: string; nextdoor: string };
  /** Pay-per-call network disclaimer, shown in the footer of every page. Paste it exactly as given. */
  disclaimer: string;
  logo: string;
  siteUrl: string;
  ga4Id?: string;
  googleSiteVerification: string;
};

export const siteConfig: SiteConfig = {
  businessName: "Pest Control Services Jacksonville",
  legalName: "PestControlServicesJacksonville",
  tagline: "Connect With Local Pest Control Pros in Jacksonville, FL",
  phoneDisplay: "(000) 000-0000", // Ringba tracking number, e.g. (904) 555-0123
  phoneHref: "+10000000000", // same number in E.164, e.g. +19045550123
  // email: "[EMAIL]",
  address: { city: "Jacksonville", state: "FL" },
  // OWNER: set to the hours calls are answered (from the Ringba campaign)
  hours: [
    { days: "Mon-Fri", open: "07:00", close: "19:00" },
    { days: "Sat", open: "08:00", close: "16:00" },
    { days: "Sun", open: "closed", close: "closed" },
  ],
  social: { facebook: "", instagram: "", nextdoor: "" },
  // Footer disclaimer on every page (Ringba rule). If Ringba supplies its own wording, replace this with it exactly.
  disclaimer:
    "This website is a free service that helps homeowners connect with independent, third-party local pest control providers. We are not a pest control company and do not perform any services. We do not endorse or guarantee any provider or their work, and we are not responsible for services provided by third parties. Availability and results may vary. Before hiring, please verify that the provider holds the license and insurance required for your job. Any people shown in photos or videos on this site are actors or models, not the providers. Calls may be recorded for quality and training purposes.",
  logo: "/images/pest-control-services-jacksonville-logo.svg", // path under /public
  siteUrl: "https://pestcontrolservicesjacksonville.com",
  // ga4Id: "[GA4_ID]",
  // Search Console HTML-tag verification: only the content="..." value of the meta tag
  googleSiteVerification: "ydEQyriR766mLwXPFUVyoGHGJpoC6m61gtF0uaof_Is",
};
