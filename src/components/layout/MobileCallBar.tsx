"use client";

import { ClipboardCheck, Phone } from "lucide-react";
import Link from "next/link";
import { QUOTE_FORM_ID, scrollToQuoteForm } from "@/components/ui/QuoteButton";

/**
 * Fixed bottom bar on small screens: Call Now + Free Quote.
 * Free Quote scrolls to the quote form when the current page has one,
 * otherwise opens the contact page form. The body has matching bottom padding.
 */
export function MobileCallBar({ phoneHref }: { phoneHref: string | null }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid auto-cols-fr grid-flow-col gap-2 border-t border-line bg-white p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      {phoneHref && (
        <a
          href={phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent text-lg font-bold text-accent-foreground"
        >
          <Phone aria-hidden className="size-5" />
          Call Now
        </a>
      )}
      <Link
        href={`/contact#${QUOTE_FORM_ID}`}
        data-cta="mobile_bar_free_quote"
        onClick={scrollToQuoteForm}
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary text-lg font-bold text-primary"
      >
        <ClipboardCheck aria-hidden className="size-5" />
        Free Quote
      </Link>
    </div>
  );
}
