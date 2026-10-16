import { MapPin } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getAreasByRegion, getUnpublishedAreas } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { AREA_REGIONS, STATIC_ROUTES, areaHref } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "See the Jacksonville neighborhoods, beach towns, and St. Johns, Clay, and Nassau County communities where you can reach a local pest control pro by phone.";

export const metadata = buildMetadata({
  title: "Pest Control Service Areas Around Jacksonville, FL",
  description: DESCRIPTION,
  path: STATIC_ROUTES.serviceAreas,
});

const REGION_INTROS: Record<(typeof AREA_REGIONS)[number]["id"], string> = {
  jacksonville:
    "From historic homes near the river to newer subdivisions on the Northside, Jacksonville's neighborhoods each have their own pest pressures.",
  beaches:
    "Salt air, sandy soil, and older beach cottages bring their own mix of termites, no-see-ums, and humidity-loving pests.",
  "st-johns-county":
    "Fast-growing master-planned communities and golf neighborhoods south of Jacksonville, where new construction and big irrigated lawns shape the pest picture.",
  "clay-county":
    "Riverfront towns, lakes, and wooded lots southwest of Jacksonville, where mosquitoes, wildlife, and fire ants are common.",
  "nassau-county":
    "Amelia Island and the fast-growing communities north of Jacksonville, surrounded by salt marsh and newly cleared woodland.",
};

export default function ServiceAreasPage() {
  const regions = AREA_REGIONS.map((region) => ({ ...region, areas: getAreasByRegion(region.id) })).filter(
    (region) => region.areas.length > 0,
  );
  const alsoServe = getUnpublishedAreas();

  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", href: STATIC_ROUTES.serviceAreas }]} />
      <JsonLd
        data={buildWebPageSchema({
          type: "CollectionPage",
          name: "Service Areas",
          description: DESCRIPTION,
          path: STATIC_ROUTES.serviceAreas,
        })}
      />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">Pest Control Service Areas Around Jacksonville</h1>
          <p className="mt-5 text-xl text-ink-muted">
            Calls are connected with pest control providers across Duval County and the communities around it, from the Beaches to Clay County and
            up to Amelia Island. Pick your area below to learn about the pests that are most common there and the services
            your neighbors ask for most.
          </p>
          <p className="mt-4 text-ink-muted">
            Don&apos;t see your neighborhood? Call and share your ZIP code to find out whether a local provider serves
            your address.
          </p>
          <div className="mt-8">
            <CallButton />
          </div>
        </Container>
      </section>

      {regions.map((region, index) => (
        <Section key={region.id} id={region.id} tone={index % 2 === 0 ? "white" : "surface"} labelledBy={`${region.id}-heading`}>
          <h2 id={`${region.id}-heading`} className="text-3xl font-extrabold text-secondary">
            {region.label}
          </h2>
          <p className="mt-3 max-w-3xl text-ink-muted">{REGION_INTROS[region.id]}</p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {region.areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={areaHref(area.slug)}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm hover:shadow-md"
                >
                  <span className="flex items-center gap-2 text-xl font-bold text-secondary group-hover:text-primary">
                    <MapPin aria-hidden className="size-5 text-primary" />
                    {area.name}
                  </span>
                  <span className="mt-2 flex-1 text-base text-ink-muted">{area.hubBlurb}</span>
                  <span className="mt-4 font-semibold text-primary">Pest control in {area.name} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      {alsoServe.length > 0 && (
        <Section id="also-serve" tone="surface" labelledBy="also-serve-heading">
          <h2 id="also-serve-heading" className="text-2xl font-extrabold text-secondary">
            Also Covered
          </h2>
          <p className="mt-3 text-ink-muted">{alsoServe.map((area) => area.name).join(", ")}.</p>
        </Section>
      )}

      <CTASection title="Not Sure If Your Area Is Covered?" text="Call and share your ZIP code. If a local provider serves your neighborhood, you can talk through the problem right away." />
    </>
  );
}
