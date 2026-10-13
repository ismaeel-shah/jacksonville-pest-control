import Link from "next/link";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = {
  title: { absolute: "Page Not Found" },
  robots: { index: false, follow: true },
};

const HELPFUL_LINKS = [
  { label: "Residential pest control", href: STATIC_ROUTES.residential },
  { label: "Commercial pest control", href: STATIC_ROUTES.commercial },
  { label: "Service areas", href: STATIC_ROUTES.serviceAreas },
  { label: "Common questions", href: STATIC_ROUTES.faq },
  { label: "Contact us", href: STATIC_ROUTES.contact },
];

export default function NotFound() {
  return (
    <section className="bg-linear-to-b from-primary-soft to-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-secondary md:text-5xl">We Couldn&apos;t Find That Page</h1>
        <p className="mt-5 text-xl text-ink-muted">
          The page may have moved, or the link might be mistyped. If you&apos;re dealing with a pest problem, we can still
          help. Call us or request a free inspection.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CallButton />
          <QuoteButton cta="404_free_inspection" />
        </div>
        <h2 className="mt-12 text-2xl font-bold text-secondary">Helpful pages</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          <li>
            <Link href={STATIC_ROUTES.home} className="font-semibold text-primary hover:underline">
              Home page →
            </Link>
          </li>
          {HELPFUL_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold text-primary hover:underline">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
