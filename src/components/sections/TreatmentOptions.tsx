import { Prose } from "@/components/ui/Prose";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { Prose as ProseContent, TitledItem } from "@/content/types";

/** Treatment methods compared side by side, described honestly. */
export function TreatmentOptions({
  title,
  intro,
  options,
  tone = "white",
  id = "treatment-options",
}: {
  title: string;
  intro?: ProseContent;
  options: TitledItem[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
      {intro && <Prose paragraphs={intro} className="-mt-4 mb-8 max-w-3xl" />}
      <ul className={`grid gap-5 ${options.length === 2 || options.length === 4 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {options.map((option) => (
          <li key={option.title} className="rounded-xl border-t-4 border-primary bg-surface p-6">
            <h3 className="text-xl font-bold text-secondary">{option.title}</h3>
            <p className="mt-2 text-ink-muted">{option.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
