import { BadgeCheck, CalendarCheck, PawPrint, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { filled } from "@/lib/config";

/**
 * Column classes by item count, so the bar always fills its width evenly
 * (the years item is hidden until `yearsInBusiness` is set). Full class names
 * are written out so Tailwind can find them.
 */
const COLUMNS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Navy strip of trust facts. Items backed by config are hidden until the real value is set. */
export function TrustBar() {
  const license = filled(siteConfig.licenseNumber);
  const years = filled(siteConfig.yearsInBusiness);

  const items = [
    license
      ? { icon: BadgeCheck, title: "Licensed in Florida", text: `FDACS license #${license}` }
      : { icon: BadgeCheck, title: "Licensed & Insured", text: "Licensed by the state of Florida" },
    years ? { icon: CalendarCheck, title: `${years}+ Years`, text: "Serving Northeast Florida" } : null,
    { icon: ShieldCheck, title: "Re-Treatment Guarantee", text: siteConfig.guarantee },
    // OWNER: confirm pet- and family-friendly treatment options are offered
    { icon: PawPrint, title: "Pet & Family Friendly", text: "Lower-impact options available on request" },
  ].filter((item) => item !== null);

  return (
    <section aria-label="Why homeowners trust us" className="bg-secondary py-10 text-white md:py-12">
      <Container>
        <ul className={`grid gap-8 lg:gap-10 ${COLUMNS[items.length] ?? "md:grid-cols-3"}`}>
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon aria-hidden className="size-6 text-white" />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-lg font-bold leading-snug">{title}</p>
                <p className="mt-1 text-base leading-relaxed text-white/85">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
