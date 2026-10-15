import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName, getFormEmbed, getPhone } from "@/lib/config";
import { formatHoursRange } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Schedule your free pest inspection in Jacksonville, FL. Call us or send the form and we'll call you back to set a time. Upfront quotes, no obligation.";

export const metadata = buildMetadata({
  title: "Free Pest Inspection in Jacksonville, FL | Contact",
  description: DESCRIPTION,
  path: STATIC_ROUTES.contact,
});

export default function ContactPage() {
  const phone = getPhone();
  const email = filled(siteConfig.email);
  const name = getBusinessName();
  const { address } = siteConfig;
  const street = address.showPublicly ? filled(address.street) : null;
  const zip = filled(address.zip);
  const showMap = filled(siteConfig.googleBusinessProfileUrl) && name;

  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: STATIC_ROUTES.contact }]} />
      <JsonLd
        data={buildWebPageSchema({ type: "ContactPage", name: "Contact Us", description: DESCRIPTION, path: STATIC_ROUTES.contact })}
      />

      <Hero
        h1="Schedule Your Free Pest Inspection in Jacksonville"
        subheadline={
          getFormEmbed()
            ? "Call us for the fastest help, or send the form and we'll call you back to set up a time that works for you."
            : "Call us and we'll set up a time that works for you. The inspection is free, with an upfront quote before any work."
        }
        aside={
          <div className="rounded-xl border border-line bg-white p-6 shadow-lg md:p-8">
            <QuoteForm title="Request Your Free Inspection" />
          </div>
        }
      />

      <Section id="contact-details" tone="surface" labelledBy="contact-details-heading">
        <SectionHeading id="contact-details-heading" title="How to Reach Us" tone="surface" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {phone && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Phone aria-hidden className="size-7 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-secondary">Call us</h3>
              <a href={phone.href} className="mt-2 block text-3xl font-extrabold text-primary hover:underline">
                {phone.display}
              </a>
              <p className="mt-2 text-base text-ink-muted">The fastest way to schedule or ask a question.</p>
            </div>
          )}
          {email && (
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Mail aria-hidden className="size-7 text-primary" />
              <h3 className="mt-3 text-xl font-bold text-secondary">Email us</h3>
              <a href={`mailto:${email}`} className="mt-2 block break-all text-lg font-bold text-primary hover:underline">
                {email}
              </a>
              <p className="mt-2 text-base text-ink-muted">We reply to emails during business hours.</p>
            </div>
          )}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Clock aria-hidden className="size-7 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">Office hours</h3>
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
            <h3 className="mt-3 text-xl font-bold text-secondary">Where we work</h3>
            {street && (
              <address className="mt-2 not-italic">
                {street}, {address.city}, {address.state} {zip}
              </address>
            )}
            <p className="mt-2 text-ink-muted">
              We come to you anywhere in Jacksonville, including the Beaches, Mandarin, Arlington, the Southside, and the
              Northside, plus nearby communities in St. Johns, Clay, and Nassau counties.{" "}
              <Link href={STATIC_ROUTES.serviceAreas} className="font-semibold text-primary underline underline-offset-2">
                See all service areas
              </Link>
              .
            </p>
            {showMap && (
              <div className="mt-6">
                <MapEmbed query={`${name}, ${address.city}, ${address.state}`} title={`Map showing ${name}`} />
              </div>
            )}
          </div>
        </div>
      </Section>

      <ProcessSteps
        id="after-contact"
        title="What Happens After You Contact Us"
        steps={[
          {
            title: "We call you back",
            description:
              "A real person from our team calls to hear about the problem and find a time for your free inspection.", // OWNER: confirm callback promise
          },
          {
            title: "We inspect and explain",
            description:
              "Your technician inspects the property, shows you what they found, and walks you through the options.",
          },
          {
            title: "You get an upfront quote",
            description:
              "You'll know the plan and the price before any work begins. There's no obligation and no pressure.",
          },
        ]}
      />

      <CTASection
        form={null}
        title="Prefer to Talk It Through?"
        text="Give us a call. We'll answer your questions and help you figure out the next step, even if you're not ready to book."
      />
    </>
  );
}
