import Script from "next/script";
import type { CSSProperties } from "react";
import { getFormEmbed, getPhone } from "@/lib/config";
import { getPestOptions } from "@/lib/pest-options";
import { QUOTE_FORM_ID } from "@/lib/routes";
import { QuoteFormClient } from "./QuoteFormClient";

type QuoteFormProps = {
  title?: string;
  intro?: string;
  defaultPropertyType?: "residential" | "commercial";
};

/**
 * Free inspection / quote form. Renders with id="quote-form", so use it once per
 * page; every "Free Quote" button scrolls to it.
 *
 * If `formEmbed.src` is set in src/config/site.ts, the renter's own embedded form
 * is shown instead of the built-in one, everywhere at once.
 */
export function QuoteForm({
  title = "Get Your Free Inspection",
  intro = "Tell us a little about the problem. We'll call you to set up a time.",
  defaultPropertyType,
}: QuoteFormProps) {
  const embed = getFormEmbed();
  if (embed) return <EmbeddedQuoteForm embed={embed} title={title} intro={intro} />;

  return (
    <QuoteFormClient
      pestOptions={getPestOptions()}
      phoneDisplay={getPhone()?.display ?? null}
      title={title}
      intro={intro}
      defaultPropertyType={defaultPropertyType}
    />
  );
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
