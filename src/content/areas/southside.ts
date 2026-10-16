import type { AreaContent } from "../types";

export const southside: AreaContent = {
  slug: "southside",
  published: true,
  name: "Southside",
  region: "jacksonville",
  hubBlurb: "Apartments, offices, and busy retail corridors from Beach Boulevard to the Town Center, where roaches, bed bugs, and rats keep local pest pros busy.",
  seo: {
    title: "Pest Control in Southside, FL | Homes & Businesses",
    description:
      "Southside Jacksonville pest control for apartments, homes, and businesses. Roaches, bed bugs, rodents, and more. Call to talk with a local pest control pro.",
    primaryKeyword: "pest control Southside FL",
    secondaryKeywords: [
      "apartment pest control Southside Jacksonville",
      "bed bug treatment Southside",
      "commercial pest control Southside Jacksonville",
      "32216 exterminator",
    ],
  },
  hero: {
    h1: "Pest Control in Southside, FL",
    subheadline: "Pest control for Southside apartments, family homes, and the offices and shops along some of Jacksonville's busiest roads.",
    image: {
      file: "southside-jacksonville-apartment-building-pest-inspection.webp",
      alt: "Pest control technician inspecting the outside of a garden-style apartment building on Jacksonville's Southside",
    },
  },
  intro: [
    "Jacksonville's Southside packs a lot into a few ZIP codes. In one afternoon, a local technician might treat a ranch house in Englewood, a third-floor apartment near the St. Johns Town Center, and a restaurant kitchen on Beach Boulevard. Each one needs its own plan, and that variety is what pest control on the Southside is all about.",
    "Dense living is the big factor here. When dozens of families share walls, plumbing lines, and trash areas, German cockroaches and bed bugs can travel from unit to unit. At the same time, Pottsburg Creek and the ponds tucked behind office parks give mosquitoes and fire ants plenty of room to grow. Whether you rent, own, or manage a building, every treatment should be shaped around how your property is actually lived in and used.",
  ],
  commonPests: {
    heading: "Pests Southside Residents Run Into Most",
    intro: ["Some of these are apartment problems, some are yard problems, and a few turn up just about everywhere."],
    pests: [
      {
        name: "German cockroaches",
        why: "These small roaches live indoors and spread through shared plumbing walls and trash rooms in the Southside's many apartment and condo buildings. Treating one unit alone rarely solves it, so working with neighbors and managers helps.",
      },
      {
        name: "Bed bugs",
        why: "Frequent move-ins near UNF and the Town Center, plus hotels along the main roads, mean bed bugs often arrive in luggage and secondhand furniture.",
      },
      {
        name: "Rats",
        why: "Restaurant dumpsters and grocery loading docks along Beach Boulevard and Philips Highway give rats a steady food supply. From there, they move into nearby attics, garages, and storage rooms.",
      },
      {
        name: "Mosquitoes",
        why: "Pottsburg Creek winds through the middle of the Southside, and retention ponds sit beside many apartment complexes. After summer rains, both produce mosquitoes fast.",
      },
      {
        name: "Fire ants",
        why: "Open common areas, road medians, and office park lawns are favorite mound sites, and new mounds pop up after every heavy rain.",
      },
    ],
  },
  homes: {
    heading: "Southside Homes, Apartments, and Businesses",
    body: [
      "Older neighborhoods like Englewood, first laid out in the 1920s, filled in over the years with modest ranch houses and mid-century apartments. Homes from that era often have gaps around pipes, worn door sweeps, and aging wood trim, so sealing and termite signs along the foundation deserve close attention.",
      "Newer apartment communities cover much of the land near the Town Center and along Southside Boulevard. In these buildings, one unit's problem can quickly become the whole building's problem. A local provider can help property managers set up regular service, unit-turn inspections, and simple prep sheets for tenants.",
      "The Southside is also one of Jacksonville's big office and retail areas. Restaurants, medical offices around Southpoint, and shopping centers all need quiet, scheduled service that doesn't disrupt customers. That is where [business pest control programs](/commercial) come in.",
    ],
  },
  popularServices: [
    { slug: "cockroach-control", reason: "German roaches spread quickly through shared walls in Southside apartment buildings." },
    { slug: "bed-bug-treatment", reason: "High tenant turnover near UNF and the Town Center makes bed bugs a regular Southside call." },
    { slug: "rodent-control", reason: "Rats drawn to dumpsters along Beach Boulevard and Philips Highway often move into nearby homes." },
    { slug: "mosquito-control", reason: "Yards near Pottsburg Creek and apartment retention ponds see heavy mosquito activity after summer storms." },
    { slug: "general-pest-control", reason: "Regular service keeps ants, spiders, and palmetto bugs out of Southside homes and rentals." },
  ],
  neighborhoods: ["Englewood", "Southpoint", "St. Johns Town Center area", "Spring Glen", "Holiday Hill", "Windy Hill", "Glynlea/Grove Park"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32216", "32246", "32256"],
  faqs: [
    {
      question: "Can just my apartment be treated if my neighbors have roaches?",
      answer:
        "Yes, your unit can be treated on its own, but results last longer when the building is treated together. German cockroaches move through wall voids and plumbing lines, so a single treated apartment can get re-infested. On the Southside, technicians often coordinate with property managers so neighboring units are checked at the same time, and they can show you what to do between visits.",
    },
    {
      question: "Is pest control available for offices and restaurants on the Southside?",
      answer:
        "Yes. Businesses along Beach Boulevard, Philips Highway, and the Town Center area are a big part of pest work on the Southside. Visits can be scheduled around your hours, with focus on kitchens, break rooms, loading areas, and dumpster pads, plus written service records you can share with inspectors or building owners. Every plan should start with a walkthrough of your space.",
    },
    {
      question: "Why are mosquitoes worse near Pottsburg Creek?",
      answer:
        "Slow-moving water, thick plants along the banks, and nearby retention ponds create perfect breeding and hiding spots. Homes and apartments close to the creek usually notice them first after summer storms. Emptying saucers, buckets, and clogged gutters each week helps a lot. For heavier pressure, a regular yard treatment cuts down the biters around patios and walkways.",
    },
  ],
  nearbyAreas: ["baymeadows-deerwood", "arlington", "san-marco", "jacksonville-beach"],
  lastUpdated: "2026-10-16",
};
