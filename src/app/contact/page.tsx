import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallButton } from "@/components/ui/CallButton";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { serviceProcess } from "@/content/promises";
import { filled, getPhone } from "@/lib/config";
import { formatHoursRange } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Call to talk with a local pest control pro in Jacksonville, FL. Your call connects you with an independent provider who serves your neighborhood.";

export const metadata = buildMetadata({
  title: "Call a Local Pest Control Pro in Jacksonville, FL",
  description: DESCRIPTION,
  path: STATIC_ROUTES.contact,
});

export default function ContactPage() {
  const phone = getPhone();
  const email = filled(siteConfig.email);

  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: STATIC_ROUTES.contact }]} />
      <JsonLd
        data={buildWebPageSchema({ type: "ContactPage", name: "Contact", description: DESCRIPTION, path: STATIC_ROUTES.contact })}
      />

      <Hero
        h1="Talk to a Local Pest Control Pro in Jacksonville"
        subheadline="Call the number below. Your call connects you with an independent provider who serves your area and can answer your questions."
        aside={<CallCard />}
      />

      <Section id="contact-details" tone="surface" labelledBy="contact-details-heading">
        <SectionHeading id="contact-details-heading" title="Before You Call" tone="surface" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {phone && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Phone aria-hidden className="size-7 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-secondary">Phone</h3>
              <a href={phone.href} className="mt-2 block text-3xl font-extrabold text-primary hover:underline">
                {phone.display}
              </a>
              <p className="mt-2 text-base text-ink-muted">Have your ZIP code ready and a short description of the problem.</p>
            </div>
          )}
          {email && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Mail aria-hidden className="size-7 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-secondary">Questions about this site</h3>
              <a href={`mailto:${email}`} className="mt-2 block break-all text-lg font-bold text-primary hover:underline">
                {email}
              </a>
              <p className="mt-2 text-base text-ink-muted">For questions about this website. For pest problems, please call.</p>
            </div>
          )}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Clock aria-hidden className="size-7 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">Call hours</h3>
            <dl className="mt-2 space-y-1">
              {siteConfig.hours.map((hours) => (
                <div key={hours.days} className="flex justify-between gap-4">
                  <dt className="font-semibold">{hours.days}</dt>
                  <dd className="text-ink-muted">{formatHoursRange(hours)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <MapPin aria-hidden className="size-7 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">Areas covered</h3>
            <p className="mt-2 text-ink-muted">
              Calls are connected with providers serving Jacksonville, including the Beaches, Mandarin, Arlington, the
              Southside, and the Northside, plus nearby communities in St. Johns, Clay, and Nassau counties.{" "}
              <Link href={STATIC_ROUTES.serviceAreas} className="font-semibold text-primary underline underline-offset-2">
                See all service areas
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <ProcessSteps id="after-calling" title="What Happens When You Call" steps={serviceProcess} />

      <CTASection
        title="Have a Question About a Pest?"
        text="Call and describe what you're seeing. A local pro can help you figure out the next step, even if you're not ready to set up a visit."
      />
    </>
  );
}

/** Hero aside: the phone number front and center (the site has no contact form). */
function CallCard() {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-lg md:p-8">
      <h2 className="text-2xl font-extrabold text-secondary">Call to Get Started</h2>
      <p className="mt-2 text-base text-ink-muted">
        Tell the provider what pests you&apos;re seeing, where, and for how long. They can explain the options and, if you&apos;d
        like, set up a time to visit.
      </p>
      <CallButton className="mt-6 w-full" />
      {siteConfig.hours.length > 0 && (
        <div className="mt-6 rounded-xl bg-surface p-4">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
            <Clock aria-hidden className="size-4 text-primary" />
            Call hours
          </p>
          <dl className="mt-3 space-y-1.5 text-base">
            {siteConfig.hours.map((hours) => (
              <div key={hours.days} className="flex justify-between gap-4">
                <dt className="font-semibold text-ink">{hours.days}</dt>
                <dd className="text-ink-muted">{formatHoursRange(hours)}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
