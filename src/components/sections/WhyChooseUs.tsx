import type { LucideIcon } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";

export type WhyPoint = { title: string; description: string; icon?: LucideIcon };

/** Reasons to choose the company. Pages pass only claims the owner can stand behind. */
export function WhyChooseUs({
  title,
  intro,
  points,
  tone = "surface",
  id = "why-us",
}: {
  title: string;
  intro?: string;
  points: WhyPoint[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      <ul className="grid gap-6 md:grid-cols-2">
        {points.map(({ title: pointTitle, description, icon: Icon = CircleCheck }) => (
          <li key={pointTitle} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
            <Icon aria-hidden className="mt-1 size-7 shrink-0 text-primary" />
            <div>
              <h3 className="text-xl font-bold text-secondary">{pointTitle}</h3>
              <p className="mt-2 text-ink-muted">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
