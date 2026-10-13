/**
 * Central business config.
 *
 * Every business detail on the site (name, phone, license, hours, schema, etc.)
 * comes from this file. To rent the site to a different company, change the
 * values here and nowhere else.
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
  address: {
    street?: string;
    city: string;
    state: string;
    zip?: string;
    showPublicly: boolean;
  };
  geo: { lat?: string; lng?: string };
  licenseNumber?: string;
  yearsInBusiness: string;
  hours: DayHours[];
  googleBusinessProfileUrl?: string;
  googleReviewUrl?: string;
  googleRating: null | { rating: number; count: number };
  social: {
    facebook: string;
    instagram: string;
    nextdoor: string;
    yelp: string;
    bbb: string;
  };
  memberships: string[];
  guarantee: string;
  logo: string;
  contentReviewer: { name: string; role: string };
  siteUrl: string;
  ga4Id?: string;
  formEmbed: {
    src: string;
    height: number;
    mobileHeight: number;
    title: string;
    scriptSrc: string;
  };
};

export const siteConfig: SiteConfig = {
  businessName: "Pest Control Jacksonville",
  legalName: "Pest Control Jacksonville",
  tagline: "Trusted Pest Control in Jacksonville, FL",
  phoneDisplay: "(904) 555-0123", // e.g. (904) 555-0123
  phoneHref: "+19045550123", // e.g. +19045550123
  // email: "[EMAIL]",
  address: {
    // street: "[STREET]",
    city: "Jacksonville",
    state: "FL",
    // zip: "[ZIP]",
    showPublicly: false, // service-area business: hide street address if false
  },
  geo: {
    // lat: "[LAT]",
    // lng: "[LNG]",
  },
  // licenseNumber: "[FDACS_LICENSE_NUMBER]", // Florida Dept. of Agriculture & Consumer Services
  yearsInBusiness: "18",
  hours: [
    { days: "Mon-Fri", open: "07:00", close: "19:00" },
    { days: "Sat", open: "08:00", close: "16:00" },
    { days: "Sun", open: "closed", close: "closed" },
  ],
  // googleBusinessProfileUrl: "[GBP_URL]",
  // googleReviewUrl: "[GOOGLE_REVIEW_LINK]",
  googleRating: null, // fill only with REAL data, e.g. { rating: 4.9, count: 87 }
  social: { facebook: "", instagram: "", nextdoor: "", yelp: "", bbb: "" },
  memberships: [], // e.g. ["Florida Pest Management Association"] ONLY if real
  // OWNER: confirm guarantee wording
  guarantee:
    "If pests come back between scheduled services, we re-treat at no extra cost.",
  logo: "", // OWNER: path under /public, e.g. "/images/logo.png"
  // OWNER: replace with the licensed technician who reviews service pages and blog posts
  contentReviewer: {
    name: "Seth Pikus",
    role: "Licensed Pest Control Technician",
  },
  siteUrl: "https://pestcontrolservicesjacksonville.com",
  // ga4Id: "[GA4_ID]",
  /**
   * The renting company's own contact form (from their CRM or scheduling tool).
   * Leave `src` empty to use the site's built-in quote form. When set, every quote
   * form on the site (contact page and the end of every page) becomes this iframe.
   * Copy only the URL from inside src="..." of the iframe code they give you.
   */
  formEmbed: {
    src: "", // e.g. "https://forms.example-crm.com/widget/form/abc123" (a "//host/..." URL also works)
    height: 680, // pixels on tablets and desktops; tall enough to show the whole form, including any consent text
    mobileHeight: 770, // pixels on phones, where forms get taller; 0 = same as height
    title: "Request a free pest inspection", // read by screen readers
    scriptSrc: "", // only if their embed code includes a <script src="..."> (e.g. for auto-resizing)
  },
};
