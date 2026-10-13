import { CircleCheck } from "lucide-react";
import { InlineProse } from "@/components/ui/Prose";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";

/** Practical things homeowners can do themselves, 5-7 tips. */
export function PreventionTips({
  title,
  tips,
  tone = "surface",
  id = "prevention",
}: {
  title: string;
  tips: string[];
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
      <ul className="grid gap-4 md:grid-cols-2">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-3 rounded-xl bg-white p-5 shadow-sm">
            <CircleCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-primary" />
            <span>
              <InlineProse text={tip} />
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
