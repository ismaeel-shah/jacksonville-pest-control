import { BadgeCheck, Handshake, House, PawPrint, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { TextSection } from "@/components/sections/TextSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { filled, getBusinessName } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Meet the local, licensed pest control team serving Jacksonville, FL. Learn about our values, our Florida license, and the guarantee behind every visit.";

export const metadata = buildMetadata({
  title: "About Our Jacksonville Pest Control Company",
  description: DESCRIPTION,
  path: STATIC_ROUTES.about,
});

const TEAM_PHOTOS = [
  { file: "team-photo-jacksonville-pest-control.webp", alt: "Our pest control team standing together in uniform" },
  { file: "technician-inspecting-crawl-space.webp", alt: "Technician inspecting a crawl space with a flashlight" },
  { file: "branded-service-truck-jacksonville.webp", alt: "Company service truck parked in a Jacksonville neighborhood" },
];

export default function AboutPage() {
  const name = getBusinessName();
  const license = filled(siteConfig.licenseNumber);
  const years = filled(siteConfig.yearsInBusiness);
  const memberships = siteConfig.memberships;
  const photos = TEAM_PHOTOS.filter(willRenderImage);

  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", href: STATIC_ROUTES.about }]} />
      <JsonLd data={buildWebPageSchema({ type: "AboutPage", name: "About Us", description: DESCRIPTION, path: STATIC_ROUTES.about })} />

      <Hero
        eyebrow="About us"
        h1="A Local Pest Control Company That Treats Your Home Like Our Own"
        subheadline="We're Jacksonville people helping Jacksonville families and businesses deal with Florida's pests, honestly and carefully."
        image={{ file: "technician-greeting-homeowner-jacksonville.webp", alt: "Technician greeting a homeowner at the front door" }}
      />

      {/* OWNER: replace this story with the company's real history: who started it, when, and why. */}
      <TextSection
        id="story"
        title="Our Story"
        paragraphs={[
          `${name ?? "Our company"} was built around a simple idea: pest control should feel like a visit from a knowledgeable neighbor, not a sales pitch. Homeowners deserve someone who explains what's really going on, recommends only what's needed, and does the job right the first time.`,
          years
            ? `For more than ${years} years, we've worked in homes and businesses across Northeast Florida. We know how a wet summer brings palmetto bugs indoors, how quickly roof rats find a gap in a soffit, and why termite swarms show up every spring.`
            : "We work in homes and businesses across Northeast Florida every day. We know how a wet summer brings palmetto bugs indoors, how quickly roof rats find a gap in a soffit, and why termite swarms show up every spring.",
          "That local experience shapes every visit. We look for the reason pests are getting in, not just the bugs you can see, and we leave you with a clear plan to keep them out.",
        ]}
      />

      <Section id="credentials" tone="surface" labelledBy="credentials-heading">
        <SectionHeading id="credentials-heading" title="Licensed, Insured, and Accountable" tone="surface" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <BadgeCheck aria-hidden className="size-8 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">State licensed</h3>
            <p className="mt-2 text-ink-muted">
              In Florida, pest control companies are licensed by the Florida Department of Agriculture and Consumer
              Services (FDACS). Our technicians are trained to apply every product safely and exactly as its label directs.
            </p>
            {license && (
              <p className="mt-3 font-bold text-secondary">
                FDACS license #{license}
              </p>
            )}
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <ShieldCheck aria-hidden className="size-8 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">Fully insured</h3>
            {/* OWNER: confirm insurance coverage wording */}
            <p className="mt-2 text-ink-muted">
              We carry general liability insurance on every job, so your home and property are protected while we work.
              Commercial clients can request a certificate of insurance at any time.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm md:col-span-2">
            <Handshake aria-hidden className="size-8 text-primary" />
            <h3 className="mt-3 text-xl font-bold text-secondary">Our guarantee</h3>
            <p className="mt-2 text-ink-muted">{siteConfig.guarantee}</p>
          </div>
        </div>
        {memberships.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-secondary">Memberships</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {memberships.map((membership) => (
                <li key={membership} className="rounded-full border border-line bg-white px-4 py-2 font-semibold">
                  {membership}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <WhyChooseUs
        id="values"
        title="What We Believe In"
        intro="These values guide how we treat every home, every business, and every customer."
        tone="white"
        points={[
          {
            title: "Safety first",
            description:
              "We follow every product label, use targeted treatments where they work, and explain exactly how to keep kids and pets safe.",
            icon: PawPrint,
          },
          {
            title: "Honest recommendations",
            description:
              "If you don't need a service, we'll tell you. You get a straight answer about what we found and a clear quote before any work.",
            icon: BadgeCheck,
          },
          {
            // OWNER: confirm shoe covers are standard practice
            title: "Respect for your home",
            description:
              "We arrive on time, wear shoe covers indoors, and leave your home the way we found it. Your property is treated with care.",
            icon: House,
          },
          {
            title: "Work we stand behind",
            description:
              "If pests come back between scheduled services, so do we. Our job isn't finished until the problem is solved.",
            icon: ShieldCheck,
          },
        ]}
      />

      {photos.length > 0 && (
        <Section id="team" tone="surface" labelledBy="team-heading">
          <SectionHeading
            id="team-heading"
            title="Meet the Team"
            intro="When you call us, these are the people who show up at your door."
            tone="surface"
          />
          {/* OWNER: add real team photos and technician names */}
          <div className="grid gap-6 md:grid-cols-3">
            {photos.map((photo) => (
              <ImageSlot key={photo.file} image={photo} sizes="(min-width: 768px) 33vw, 100vw" />
            ))}
          </div>
        </Section>
      )}

      <CTASection title="Let's Take Care of Your Pest Problem" />
    </>
  );
}
