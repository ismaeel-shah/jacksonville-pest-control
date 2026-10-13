import { CallButton } from "@/components/ui/CallButton";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { TitledItem } from "@/content/types";

/**
 * "What Affects the Cost of [Service]?" — factors only. Never add prices,
 * ranges, or dollar amounts here (brief section 10).
 */
export function CostFactors({
  serviceName,
  factors,
  tone = "surface",
  id = "cost",
}: {
  serviceName: string;
  factors: TitledItem[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading
        id={`${id}-heading`}
        title={`What Affects the Cost of ${serviceName}?`}
        intro="Every home and every pest problem is different, so we price each job after we see it. These are the main things that shape your quote."
        tone={tone}
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {factors.map((factor) => (
          <li key={factor.title} className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-lg font-bold text-secondary">{factor.title}</h3>
            <p className="mt-2 text-base text-ink-muted">{factor.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 rounded-xl bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
        <p className="text-xl font-bold text-secondary">
          Call us for a free inspection and an accurate, upfront quote.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
          <CallButton showNumber={false} />
          <QuoteButton cta={`${id}_free_inspection`} />
        </div>
      </div>
    </Section>
  );
}
