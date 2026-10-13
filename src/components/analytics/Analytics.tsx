"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const LOAD_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
const IDLE_FALLBACK_MS = 5000;

/**
 * GA4, loaded lazily on the first interaction (or after a few idle seconds) so it
 * never blocks rendering. Also tracks every tel: link (click_to_call) and every
 * element with data-cta (cta_click) through one delegated listener.
 */
export function Analytics({ gaId }: { gaId: string | null }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId || window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js expects the arguments object itself, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      document.head.appendChild(script);
      cleanup();
    };
    const timer = window.setTimeout(load, IDLE_FALLBACK_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      LOAD_EVENTS.forEach((event) => window.removeEventListener(event, load));
    };
    LOAD_EVENTS.forEach((event) => window.addEventListener(event, load, { once: true, passive: true }));
    return cleanup;
  }, [gaId]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const tel = target?.closest('a[href^="tel:"]');
      if (tel) {
        trackEvent("click_to_call", { page_path: pathname });
        return;
      }
      const cta = target?.closest("[data-cta]");
      if (cta) {
        trackEvent("cta_click", { label: cta.getAttribute("data-cta") ?? "", page_path: pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
