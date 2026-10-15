import { CalendarClock, CircleHelp, House, type LucideIcon, ReceiptText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { InlineProse } from "@/components/ui/Prose";
import { SidebarCta } from "@/components/ui/SidebarCta";
import { TableOfContents } from "@/components/ui/TableOfContents";
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

/** Icon for each FAQ group in src/content/faqs.ts; new groups fall back to a question mark. */
const GROUP_ICONS: Record<string, LucideIcon> = {
  general: CircleHelp,
  termites: House,
  safety: ShieldCheck,
  scheduling: CalendarClock,
  cost: ReceiptText,
};

const questionCount = (count: number) => `${count} ${count === 1 ? "question" : "questions"}`;

export default function FAQPage() {
  const allFaqs = faqGroups.flatMap((group) => group.faqs);

  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", href: STATIC_ROUTES.faq }]} />
      <JsonLd data={buildFaqSchema(allFaqs)} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">FAQ</p>
            <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">Pest Control Questions, Answered</h1>
            <p className="mt-5 text-xl text-ink-muted">
              Straight answers to the {allFaqs.length} questions Jacksonville homeowners ask us most. Don&apos;t see yours?
              Call us or{" "}
              <Link href={STATIC_ROUTES.contact} className="font-semibold text-primary underline underline-offset-2">
                send us a message
              </Link>
              . We&apos;re happy to help, even if you&apos;re not ready to book.
            </p>
          </div>

          {/* Topic chips on phones and tablets; the sticky sidebar takes over on large screens. */}
          <nav aria-label="FAQ topics" className="mt-8 lg:hidden">
            <ul className="flex flex-wrap gap-2">
              {faqGroups.map((group) => {
                const Icon = GROUP_ICONS[group.id] ?? CircleHelp;
                return (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 font-semibold text-secondary hover:border-primary hover:text-primary"
                    >
                      <Icon aria-hidden className="size-4 text-primary" />
                      {group.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      <section aria-label="Questions by topic" className="pb-16 pt-4 md:pb-20 lg:pt-8">
        <Container>
          <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
            <aside aria-label="FAQ sidebar" className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <TableOfContents title="Topics" items={faqGroups.map((group) => ({ id: group.id, heading: group.title }))} />
                </div>
                <SidebarCta title="Still have a question?" text="Talk to a real person, or book a free inspection and ask us in person." cta="faq_sidebar_free_inspection" />
              </div>
            </aside>

            <div className="min-w-0 max-w-3xl space-y-14">
              {faqGroups.map((group) => {
                const Icon = GROUP_ICONS[group.id] ?? CircleHelp;
                return (
                  <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-28">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon aria-hidden className="size-6" />
                      </span>
                      <div>
                        <h2 id={`${group.id}-heading`} className="text-2xl font-extrabold text-secondary md:text-3xl">
                          {group.title}
                        </h2>
                        <p className="text-sm text-ink-muted">{questionCount(group.faqs.length)}</p>
                      </div>
                    </div>
                    <FAQAccordion
                      items={group.faqs.map((faq) => ({ question: faq.question, answer: <InlineProse text={faq.answer} /> }))}
                    />
                  </section>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="Still Have Questions?" text="Call us and talk to a real person, or request your free inspection and we'll answer everything in person." />
    </>
  );
}
