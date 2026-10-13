import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/ui/QuoteButton";

// OWNER: confirm each point (the pet-friendly claim also appears in the trust bar)
const BENEFITS = [
  "Free, no-obligation inspection",
  "Upfront quote before any work begins",
  "Family- and pet-friendly treatment options",
];

/**
 * Closing call to action shown at the end of every page: phone first, then the
 * quote form. Pass `form={null}` on a page that already shows the form elsewhere
 * (the form id must be unique per page); a quote button replaces it.
 *
 * Uses a light background on purpose, so it reads as its own block above the navy footer.
 */
export function CTASection({
  title = "Ready for a Pest-Free Home?",
  defaultPropertyType,
  text = "Call us or request a free inspection. We'll look at the problem, explain your options, and give you an upfront quote before any work begins.",
  form = <QuoteForm defaultPropertyType={defaultPropertyType} />,
  id = "get-started",
}: {
  title?: string;
  /** Pre-selects Residential or Commercial in the default form. */
  defaultPropertyType?: "residential" | "commercial";
  text?: string;
  form?: ReactNode;
  id?: string;
}) {
  const centered = !form;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-line bg-linear-to-br from-primary-soft via-white to-primary-soft py-16 md:py-24"
    >
      <Container className={centered ? "" : "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-16"}>
        <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Free inspection · Upfront quote</p>
          <h2 id={`${id}-heading`} className="mt-3 text-3xl font-extrabold text-secondary md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-xl text-ink-muted">{text}</p>

          <ul className={`mt-8 space-y-3 ${centered ? "mx-auto inline-block text-left" : ""}`}>
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-lg font-semibold text-ink">
                <CircleCheck aria-hidden className="size-6 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className={`mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${centered ? "sm:justify-center" : ""}`}>
            <CallButton />
            {centered && <QuoteButton cta={`${id}_free_inspection`} />}
          </div>
        </div>

        {form && (
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-line md:p-8">{form}</div>
        )}
      </Container>
    </section>
  );
}
