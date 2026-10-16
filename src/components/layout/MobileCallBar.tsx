import { Phone } from "lucide-react";

/**
 * Fixed bottom Call Now bar on small screens. The body has matching bottom padding.
 * Not rendered until the phone number is set.
 */
export function MobileCallBar({ phoneHref }: { phoneHref: string | null }) {
  if (!phoneHref) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={phoneHref}
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent text-lg font-bold text-accent-foreground"
      >
        <Phone aria-hidden className="size-5" />
        Call Now
      </a>
    </div>
  );
}
