import { Clock, FileCode2 } from "lucide-react";
import Script from "next/script";
import type { CSSProperties } from "react";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/config/site";
import { getFormEmbed } from "@/lib/config";
import { formatHoursRange } from "@/lib/format";
import { QUOTE_FORM_ID } from "@/lib/routes";

type QuoteFormProps = {
  title?: string;
  intro?: string;
  /** Kept for callers; the embedded form has its own property-type field. */
  defaultPropertyType?: "residential" | "commercial";
};

/**
 * Free inspection / quote form slot. Renders with id="quote-form", so use it once per
 * page; every "Free Quote" button scrolls to it.
 *
 * Shows the renter's own form from `formEmbed.src` in src/config/site.ts. The site's
 * built-in form is intentionally not used: until `formEmbed.src` is set, visitors get
 * a call-us card instead (and a reminder to set it, in development).
 */
export function QuoteForm({
  title = "Get Your Free Inspection",
  intro = "Tell us a little about the problem. We'll call you to set up a time.",
}: QuoteFormProps) {
  const embed = getFormEmbed();
  if (embed) return <EmbeddedQuoteForm embed={embed} title={title} intro={intro} />;
  return <CallUsCard title={title} />;
}

function EmbeddedQuoteForm({
  embed,
  title,
  intro,
}: {
  embed: NonNullable<ReturnType<typeof getFormEmbed>>;
  title: string;
  intro: string;
}) {
  return (
    <div id={QUOTE_FORM_ID} className="scroll-mt-28">
      <h2 className="text-2xl font-extrabold text-secondary">{title}</h2>
      {intro && <p className="mt-2 text-base text-ink-muted">{intro}</p>}
      {/* Fixed heights reserve the space up front, so the page doesn't jump when the form loads. */}
      <iframe
        src={embed.src}
        title={embed.title}
        loading="lazy"
        className="mt-4 block h-[var(--form-h-mobile)] w-full rounded-lg border-0 bg-white md:h-[var(--form-h)]"
        style={{ "--form-h": `${embed.height}px`, "--form-h-mobile": `${embed.mobileHeight}px` } as CSSProperties}
      />
      {embed.scriptSrc && <Script id="form-embed-script" src={embed.scriptSrc} strategy="lazyOnload" />}
    </div>
  );
}

/** Stand-in while no form is embedded: the phone number and hours, so quote buttons still lead somewhere useful. */
function CallUsCard({ title }: { title: string }) {
  return (
    <div id={QUOTE_FORM_ID} className="scroll-mt-28">
      {process.env.NODE_ENV === "development" && (
        <p className="mb-5 flex gap-2 rounded-lg border-2 border-dashed border-line bg-surface p-3 text-sm text-ink-muted">
          <FileCode2 aria-hidden className="size-5 shrink-0" />
          <span>
            Dev only: no contact form yet. Set <code className="font-semibold">formEmbed.src</code> in src/config/site.ts to
            show your form here.
          </span>
        </p>
      )}
      <h2 className="text-2xl font-extrabold text-secondary">{title}</h2>
      <p className="mt-2 text-base text-ink-muted">
        Call us and we&apos;ll set up a time that works for you. The inspection is free, with an upfront quote before any
        work begins.
      </p>
      <CallButton className="mt-6 w-full" />
      {siteConfig.hours.length > 0 && (
        <div className="mt-6 rounded-xl bg-surface p-4">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
            <Clock aria-hidden className="size-4 text-primary" />
            Hours
          </p>
          <dl className="mt-3 space-y-1.5 text-base">
            {siteConfig.hours.map((hours) => (
              <div key={hours.days} className="flex justify-between gap-4">
                <dt className="font-semibold text-ink">{hours.days}</dt>
                <dd className="text-ink-muted">{formatHoursRange(hours)}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
