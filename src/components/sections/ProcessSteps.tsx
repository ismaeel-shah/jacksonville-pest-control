import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { TitledItem } from "@/content/types";

/** Numbered steps, e.g. Free Inspection → Custom Treatment → Follow-Up & Prevention. */
export function ProcessSteps({
  title,
  intro,
  steps,
  tone = "white",
  id = "process",
}: {
  title: string;
  intro?: string;
  steps: TitledItem[];
  tone?: SectionTone;
  id?: string;
}) {
  const columns = steps.length <= 3 ? "md:grid-cols-3" : steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <ol className={`grid gap-6 ${columns}`}>
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-xl border border-line bg-white p-6">
            <span
              aria-hidden
              className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary font-heading text-xl font-extrabold text-white"
            >
              {index + 1}
            </span>
            <h3 className="text-xl font-bold text-secondary">
              <span className="sr-only">Step {index + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
