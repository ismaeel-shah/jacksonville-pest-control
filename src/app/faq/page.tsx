import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { InlineProse } from "@/components/ui/Prose";
import { faqGroups } from "@/content/faqs";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildFaqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Pest Control FAQ | Jacksonville, FL Answers",
  description:
    "Answers to common pest control questions in Jacksonville, FL: termites, safety for kids and pets, scheduling, and cost. Call us for a free inspection.",
  path: STATIC_ROUTES.faq,
});

export default function FAQPage() {
  const allFaqs = faqGroups.flatMap((group) => group.faqs);

  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", href: STATIC_ROUTES.faq }]} />
      <JsonLd data={buildFaqSchema(allFaqs)} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">Pest Control Questions, Answered</h1>
          <p className="mt-5 text-xl text-ink-muted">
            Straight answers to the questions Jacksonville homeowners ask us most. Don&apos;t see yours? Call us or{" "}
            <Link href={STATIC_ROUTES.contact} className="font-semibold text-primary underline underline-offset-2">
              send us a message
            </Link>
            . We&apos;re happy to help, even if you&apos;re not ready to book.
          </p>
          <nav aria-label="FAQ topics" className="mt-8">
            <ul className="flex flex-wrap gap-3">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex min-h-12 items-center rounded-full border border-line bg-white px-5 font-semibold text-secondary hover:border-primary hover:text-primary"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {faqGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-heading`}
          className={`py-12 md:py-16 ${index % 2 === 1 ? "bg-surface" : "bg-white"}`}
        >
          <Container className="max-w-3xl">
            <h2 id={`${group.id}-heading`} className="mb-6 text-3xl font-extrabold text-secondary">
              {group.title}
            </h2>
            <FAQAccordion
              items={group.faqs.map((faq) => ({ question: faq.question, answer: <InlineProse text={faq.answer} /> }))}
            />
          </Container>
        </section>
      ))}

      <CTASection title="Still Have Questions?" text="Call us and talk to a real person, or request your free inspection and we'll answer everything in person." />
    </>
  );
}
