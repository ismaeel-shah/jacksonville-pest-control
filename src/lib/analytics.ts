/** Analytics event names used across the site (brief section 3). */
export type AnalyticsEvent = "click_to_call" | "form_submit" | "cta_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 event. Safe to call before gtag.js has loaded: events queue in
 * dataLayer and are sent once the script arrives. No-op when GA4 is not configured.
 */
export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV === "development") console.debug("[analytics]", name, params);
  window.gtag?.("event", name, params);
}
