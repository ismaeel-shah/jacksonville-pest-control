import { Search } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { TitledItem } from "@/content/types";

/** "Signs you have [pest]" checklist, 5-7 specific signs. */
export function PestSigns({
  title,
  intro,
  signs,
  tone = "white",
  id = "signs",
}: {
  title: string;
  intro?: string;
  signs: TitledItem[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <ul className="grid gap-5 md:grid-cols-2">
        {signs.map((sign) => (
          <li key={sign.title} className="flex gap-4 rounded-xl border-l-4 border-primary bg-surface p-5">
            <Search aria-hidden className="mt-1 size-6 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-bold text-secondary">{sign.title}</h3>
              <p className="mt-1 text-base text-ink-muted">{sign.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
