import { JsonLd } from "@/components/seo/JsonLd";
import { InlineProse } from "@/components/ui/Prose";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { FAQ } from "@/content/types";
import { buildFaqSchema } from "@/lib/schema";
import { FAQAccordion } from "./FAQAccordion";

/**
 * FAQ accordion with FAQPage schema built from exactly the questions shown.
 * Set `withSchema={false}` when another FAQSection on the same page already outputs it.
 */
export function FAQSection({
  title = "Frequently Asked Questions",
  intro,
  faqs,
  withSchema = true,
  tone = "white",
  id = "faq",
}: {
  title?: string;
  intro?: string;
  faqs: FAQ[];
  withSchema?: boolean;
  tone?: SectionTone;
  id?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      {withSchema && <JsonLd data={buildFaqSchema(faqs)} />}
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <div className="max-w-3xl">
        <FAQAccordion
          items={faqs.map((faq) => ({ question: faq.question, answer: <InlineProse text={faq.answer} /> }))}
        />
      </div>
    </Section>
  );
}
