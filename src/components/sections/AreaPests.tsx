import { Bug } from "lucide-react";
import { Prose } from "@/components/ui/Prose";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { Prose as ProseContent } from "@/content/types";

/** "Common pest problems in [Area]": each pest with the local reason it's common. */
export function AreaPests({
  title,
  intro,
  pests,
  tone = "surface",
  id = "common-pests",
}: {
  title: string;
  intro?: ProseContent;
  pests: { name: string; why: string }[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
      {intro && <Prose paragraphs={intro} className="-mt-4 mb-8 max-w-3xl" />}
      <ul className="grid gap-5 md:grid-cols-2">
        {pests.map((pest) => (
          <li key={pest.name} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
            <Bug aria-hidden className="mt-1 size-6 shrink-0 text-primary" />
            <div>
              <h3 className="text-xl font-bold text-secondary">{pest.name}</h3>
              <p className="mt-2 text-ink-muted">{pest.why}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
