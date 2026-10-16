import type { AreaContent } from "../types";

export const stJohns: AreaContent = {
  slug: "st-johns",
  published: true,
  name: "St. Johns",
  region: "st-johns-county",
  hubBlurb: "Fast-growing master-planned communities on former woods and farmland, where new slabs need termite pre-treatment and displaced wildlife looks for new homes.",
  seo: {
    title: "Pest Control in St. Johns, FL | New Construction Pros",
    description:
      "St. Johns, FL pest control for new and growing neighborhoods. Pre-construction termite treatment, fire ants, and wildlife. Call to reach a local pro today.",
    primaryKeyword: "pest control St. Johns FL",
    secondaryKeywords: ["termite pre-treatment St. Johns County", "exterminator St. Johns FL", "pest control Fruit Cove", "32259 pest control"],
  },
  hero: {
    h1: "Pest Control in St. Johns, FL",
    subheadline: "From slab pre-treatment to first-year protection, pest help for St. Johns homeowners who want to start pest-free in a fast-growing community.",
    image: {
      file: "st-johns-fl-new-construction-subdivision.webp",
      alt: "Row of newly built homes with young landscaping in a St. Johns, Florida subdivision",
    },
  },
  intro: [
    "St. Johns has changed fast. The area along State Road 13 and County Road 210 was once mostly woods, farms, and older riverside communities like Fruit Cove and Switzerland. Now it's filled with master-planned neighborhoods such as Julington Creek Plantation, Durbin Crossing, Aberdeen, and RiverTown, and new streets keep opening.",
    "Every time land is cleared, pests are pushed out of their old homes. Termite colonies stay in the soil under new slabs. Armadillos, raccoons, and snakes wander into fresh backyards. Fire ants move into new sod within weeks. Many St. Johns homeowners are also young families with kids and pets, so they want protection that starts on day one and fits busy schedules. Local pest control pros work with homeowners and builders here, from treating the soil before a foundation is poured to setting up a plan once you get the keys.",
  ],
  commonPests: {
    heading: "Common Pest Problems in St. Johns",
    intro: ["Growth is the common thread behind most of these calls."],
    pests: [
      {
        name: "Subterranean termites",
        why: "Clearing and grading disturb existing colonies, but they don't remove them. Those termites look for wood in the new homes built on top of them.",
      },
      {
        name: "Fire ants",
        why: "Fresh sod, playgrounds, and sports fields in new communities are easy places for fire ants to build mounds, especially after summer rains.",
      },
      {
        name: "Armadillos and other displaced wildlife",
        why: "Armadillos dig up new lawns hunting for grubs. Raccoons and opossums that lost wooded habitat explore garages, crawl spaces, and trash cans.",
      },
      {
        name: "Mosquitoes",
        why: "Each new subdivision adds stormwater ponds, and older homes near the St. Johns River and its creeks sit close to marshy shoreline.",
      },
    ],
  },
  homes: {
    heading: "New Construction, Older Riverfront Homes, and Everything Between",
    body: [
      "Most St. Johns homes were built from the 1990s on. Julington Creek Plantation has many homes from the 1990s and 2000s that are now old enough to need regular termite checks. Durbin Crossing came a bit later, and newer phases like RiverTown and Aberdeen are still adding homes.",
      "If you're building, the easiest time to protect your home is before the slab goes down. [Pre-construction termite treatment](/pre-construction-termite-treatment) treats the soil under the footprint and is timed around your builder's schedule. Once you move in, a new-home plan keeps that protection going.",
      "Older homes in Fruit Cove and Switzerland often sit on larger, wooded lots near the river. Those properties have more in common with classic Florida riverfront homes, with more shade, more moisture, and more wildlife.",
    ],
  },
  popularServices: [
    { slug: "pre-construction-termite-treatment", reason: "Ongoing construction across St. Johns means many slabs need soil treatment before they're poured." },
    { slug: "termite-control", reason: "Homes in older communities like Julington Creek Plantation are reaching the age where termite risk climbs." },
    { slug: "ant-control", reason: "Fire ants move into new sod and play areas quickly in growing neighborhoods." },
    { slug: "wildlife-removal", reason: "Land clearing pushes armadillos, raccoons, and snakes into fresh backyards." },
    { slug: "mosquito-control", reason: "Stormwater ponds and riverfront marsh keep mosquitoes active across St. Johns." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Julington Creek Plantation", "Durbin Crossing", "RiverTown", "Aberdeen", "Fruit Cove", "Switzerland", "Cimarrone"],
  zipCodes: ["32259"],
  faqs: [
    {
      question: "Should I ask my builder about termite pre-treatment?",
      answer:
        "Yes, and the earlier the better. Most builders in St. Johns County arrange a soil treatment before the slab is poured, but methods differ. Ask what product or system is used, whether it comes with ongoing coverage, and how long that coverage lasts. Keep the paperwork. It will help you plan protection after the builder's coverage ends.", // OWNER: confirm builder pre-treatment practice
    },
    {
      question: "How do I stop armadillos from digging up my new lawn?",
      answer:
        "Armadillos dig for grubs and other insects in the soil, and fresh sod in new St. Johns neighborhoods is easy digging. Reducing lawn grubs makes your yard less attractive. Fencing that extends below ground can keep them out. For a steady problem, a wildlife pro can trap and remove the animal and seal spots under porches or sheds where it may be sleeping.",
    },
    {
      question: "I just moved into a new home. Do I need pest control right away?",
      answer:
        "It's a good idea. Building sites stir up ants, roaches, and spiders, and they often move into new homes once landscaping goes in. A move-in treatment around the foundation, garage, and entry points sets a clean starting point. Then quarterly visits keep pests from settling in as your neighborhood fills up around you.",
    },
  ],
  nearbyAreas: ["mandarin", "nocatee", "green-cove-springs", "ponte-vedra-beach"],
  lastUpdated: "2026-10-16",
};
