import { BookOpen, Handshake, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TextSection } from "@/components/sections/TextSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceProcess } from "@/content/promises";
import { getBusinessName } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "About this Jacksonville pest control site: local pest guides for Northeast Florida homes and businesses, and one call to reach an independent local provider.";

export const metadata = buildMetadata({
  title: "About Us | Jacksonville Pest Control Help",
  description: DESCRIPTION,
  path: STATIC_ROUTES.about,
});

export default function AboutPage() {
  const name = getBusinessName() ?? "This site";

  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", href: STATIC_ROUTES.about }]} />
      <JsonLd data={buildWebPageSchema({ type: "AboutPage", name: "About Us", description: DESCRIPTION, path: STATIC_ROUTES.about })} />

      <Hero
        eyebrow="About us"
        h1="Pest Control Help for Jacksonville Homes and Businesses"
        subheadline="Plain-language guides to Northeast Florida's pests, and a simple way to reach a local pest control pro when you need one."
        image={{ file: "technician-greeting-homeowner-jacksonville.webp", alt: "Technician greeting a homeowner at the front door" }}
      />

      <TextSection
        afterHero
        id="why-this-site"
        title="Why This Site Exists"
        paragraphs={[
          "Pest problems in Jacksonville rarely wait for a convenient week. Swarming termites show up in spring, palmetto bugs come inside after heavy rain, and roof rats find their way into attics when nights cool off. When it happens, most people want two things: to understand what they're dealing with, and to talk with someone local who can help.",
          `${name} was built for both. The guides on this site explain how common local pests behave, the signs to watch for, and how treatment usually works, so you know what questions to ask. When you're ready, one call connects you with an independent pest control provider who serves your part of Northeast Florida.`,
        ]}
      />

      <TextSection
        id="what-this-site-is"
        tone="surface"
        title="What This Site Is, and What It Isn't"
        paragraphs={[
          `${name} is an information and referral service, not a pest control company. It does not employ technicians, perform inspections, or apply treatments.`,
          "The provider you speak with when you call runs their own business and handles everything from there: answering your questions, scheduling, the inspection, any treatment, and any agreement you make. Ask them directly about anything that matters to you, such as the products they use, re-entry times, and follow-up visits.",
        ]}
      />

      <WhyChooseUs
        id="what-matters"
        title="What This Site Stands For"
        intro="A few simple ideas shape every page here."
        tone="white"
        points={[
          {
            title: "Useful, local information",
            description:
              "Every guide is written for Northeast Florida: the climate, the soil, the homes, and the pests that come with them.",
            icon: BookOpen,
          },
          {
            title: "Focused on your area",
            description:
              "Pages for Jacksonville neighborhoods, the Beaches, and nearby counties explain what's most common where you live.",
            icon: MapPin,
          },
          {
            title: "Clear about how it works",
            description:
              "Calls are connected with independent local providers. This site says so plainly on every page.",
            icon: Handshake,
          },
          {
            title: "You stay in control",
            description:
              "Calling doesn't commit you to anything. Talk through the problem, ask your questions, then decide what to do next.",
            icon: Phone,
          },
        ]}
      />

      <ProcessSteps
        id="steps"
        tone="surface"
        title="What Happens When You Call"
        intro="Getting help follows the same simple steps, whatever the pest."
        steps={serviceProcess}
      />

      <CTASection title="Ready to Talk to a Local Pro?" />
    </>
  );
}
