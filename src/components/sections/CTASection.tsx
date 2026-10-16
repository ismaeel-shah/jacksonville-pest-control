import { CircleCheck } from "lucide-react";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";

const POINTS = [
  "Talk to a local pest control pro",
  "Describe the problem and ask your questions",
  "Set up a visit at a time that works for you",
];

/**
 * Closing call to action shown at the end of every page. Calls only: the site has no
 * contact form (pay-per-call network rule).
 *
 * Uses a light background on purpose, so it reads as its own block above the navy footer.
 */
export function CTASection({
  title = "Ready to Deal With Your Pest Problem?",
  text = "One call connects you with a local pest control pro who serves your area and can help you figure out the next step.",
  id = "get-started",
}: {
  title?: string;
  text?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-line bg-linear-to-br from-primary-soft via-white to-primary-soft py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">One call · Local pros</p>
          <h2 id={`${id}-heading`} className="mt-3 text-3xl font-extrabold text-secondary md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-xl text-ink-muted">{text}</p>

          <ul className="mx-auto mt-8 inline-block space-y-3 text-left">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-lg font-semibold text-ink">
                <CircleCheck aria-hidden className="size-6 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <CallButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
