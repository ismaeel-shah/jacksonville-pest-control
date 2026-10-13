import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { getPhone } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Thank You for Your Request",
  description: "Thanks for requesting a free pest inspection. We'll call you shortly to set up a time that works for you.",
  path: STATIC_ROUTES.thankYou,
  noindex: true,
});

const NEXT_STEPS = [
  "We review your request and call you back, usually during the same business day.", // OWNER: confirm response time
  "We set up a time for your free inspection that works for your schedule.",
  "Your technician inspects, explains what they found, and gives you an upfront quote before any work begins.",
];

export default function ThankYouPage() {
  const phone = getPhone();

  return (
    <>
      <Breadcrumbs items={[{ name: "Thank You", href: STATIC_ROUTES.thankYou }]} />
      <section className="bg-linear-to-b from-primary-soft to-white py-14 md:py-20">
        <Container className="max-w-3xl">
          <CircleCheck aria-hidden className="size-14 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold text-secondary md:text-5xl">Thank You! We&apos;ll Call You Shortly</h1>
          <p className="mt-5 text-xl text-ink-muted">
            We received your free inspection request. A member of our team will reach out soon to talk about your pest
            problem and set up a visit.
          </p>

          {phone && (
            <div className="mt-8 rounded-xl border-l-4 border-accent bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-secondary">Dealing with something urgent?</h2>
              <p className="mt-2 text-ink-muted">
                For stinging insects near your door, a rodent inside, or anything that can&apos;t wait, call us now.
              </p>
              <div className="mt-4">
                <CallButton />
              </div>
            </div>
          )}

          <h2 className="mt-12 text-2xl font-bold text-secondary">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {NEXT_STEPS.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white"
                >
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <Link href={STATIC_ROUTES.home} className="font-bold text-primary hover:underline">
              ← Back to home
            </Link>
            <Link href={STATIC_ROUTES.faq} className="font-bold text-primary hover:underline">
              Read common questions
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
