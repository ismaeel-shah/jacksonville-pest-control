import type { AreaContent } from "../types";

export const northsideOceanway: AreaContent = {
  slug: "northside-oceanway",
  published: true,
  name: "Northside / Oceanway",
  region: "jacksonville",
  hubBlurb: "New subdivisions beside salt marshes and preserves, plus warehouses near the airport and port, make mosquitoes, fire ants, and rodents the big three here.",
  seo: {
    title: "Pest Control in Northside & Oceanway, FL",
    description:
      "Northside and Oceanway pest control for new homes near the marsh and for warehouses. Mosquitoes, fire ants, termites, and rodents. Call for a free inspection.",
    primaryKeyword: "pest control Northside Oceanway FL",
    secondaryKeywords: [
      "pest control Oceanway Jacksonville",
      "mosquito control Northside Jacksonville",
      "warehouse pest control Jacksonville",
      "32218 pest control",
    ],
  },
  hero: {
    h1: "Pest Control in Northside & Oceanway, FL",
    subheadline: "Yard, home, and warehouse pest control for Jacksonville's fast-growing Northside, from Oceanway subdivisions to the marsh edges near Cedar Point.",
    image: {
      file: "oceanway-jacksonville-new-subdivision-near-marsh.webp",
      alt: "New single-family homes in an Oceanway subdivision with a salt marsh and tree line in the background",
    },
  },
  intro: [
    "Not long ago, Oceanway was mostly small farms and scattered houses. Since the early 1980s it has grown dramatically, and new subdivisions keep going up. Across the wider Northside, much of that growth sits close to the Trout and St. Johns rivers, tidal creeks, and the salt marshes of the Timucuan Preserve.",
    "Building near wild land changes the pest picture. Clearing woods sends raccoons, armadillos, and rodents looking for new shelter, often in the closest garage or attic. Marsh and wetlands bring mosquitoes and no-see-ums, and freshly graded yards are perfect for fire ants. The Northside is also home to Jacksonville International Airport, River City Marketplace, and busy port and distribution areas, so we take care of warehouses and loading docks as well as family homes.",
  ],
  commonPests: {
    heading: "Pests We Treat Most on the Northside",
    pests: [
      {
        name: "Mosquitoes and no-see-ums",
        why: "Salt marsh, tidal creeks, and retention ponds surround many Northside subdivisions. Biting insects breed there and drift into backyards, especially on calm evenings.",
      },
      {
        name: "Fire ants",
        why: "New construction leaves bare, disturbed soil and fresh sod, which fire ants colonize quickly. Mounds often appear along driveways, sidewalks, and playgrounds.",
      },
      {
        name: "Wildlife",
        why: "As wooded parcels become neighborhoods, raccoons, opossums, and armadillos lose cover and move toward homes, digging under slabs and slipping into attics.",
      },
      {
        name: "Rats and mice",
        why: "Warehouses, distribution centers, and shipping areas near the airport and Blount Island attract rodents with stored goods and pallets, and they can spread to nearby homes.",
      },
      {
        name: "Subterranean termites",
        why: "Sandy, damp soil near wetlands suits termites, and even new homes need protection once their builder's treatment begins to wear off.",
      },
    ],
  },
  homes: {
    heading: "New Subdivisions, Rural Lots, and Industrial Sites",
    body: [
      "Many Oceanway homes were built in the last few decades, often in planned subdivisions with retention ponds, sod lawns, and woods at the edges. Newer construction usually has fewer gaps, but the surrounding land is still settling. Building a new house out here? Soil-applied [termite protection during construction](/pre-construction-termite-treatment) is far easier than treating later.",
      "Mixed in are older ranch homes and rural lots, plus places like Black Hammock Island where houses sit right beside marsh. These properties see more wildlife and more water. Oceanway also flooded badly during Hurricane Irma in 2017, and homes that took on water may still have damp spots that attract termites and roaches.",
      "Warehouses, logistics yards, and shops near the airport, River City Marketplace, and the port need steady rodent and insect control. Our [commercial pest programs](/commercial) focus on dock doors, stored products, and clear documentation.",
    ],
  },
  popularServices: [
    { slug: "mosquito-control", reason: "Salt marsh and tidal creeks keep mosquito and no-see-um pressure high across the Northside." },
    { slug: "ant-control", reason: "Fire ants move quickly into fresh sod and disturbed soil in new Oceanway subdivisions." },
    { slug: "wildlife-removal", reason: "Land clearing pushes raccoons, opossums, and armadillos toward new homes." },
    { slug: "rodent-control", reason: "Warehouses near the airport and port draw rats that can spread into homes." },
    { slug: "pre-construction-termite-treatment", reason: "Ongoing home building in Oceanway makes soil treatment before the slab a smart step." },
  ],
  neighborhoods: ["Oceanway", "Oceanway Manor", "Pecan Park", "Highlands", "Black Hammock Island", "Cedar Point area"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32218", "32226"],
  faqs: [
    {
      question: "Why are there so many mosquitoes and no-see-ums in Oceanway?",
      answer:
        "Oceanway and the rest of the Northside sit close to salt marshes, tidal creeks, and wetlands that are perfect breeding grounds. No-see-ums are especially active near the marsh at dawn and dusk, and they can slip through standard window screens. Fine-mesh screens on porches help. We can't treat the marsh itself, but we can make your yard and lanai much more comfortable.",
    },
    {
      question: "My Oceanway home is brand new. Do I still need pest control?",
      answer:
        "In most cases, yes. New homes are often built on land that was recently wooded, so ants, wildlife, and insects are still nearby and looking for shelter. Fresh sod invites fire ants, and builder termite treatments don't last forever. A regular service plan and a termite protection plan help you start out on the right foot.",
    },
    {
      question: "Our Oceanway home flooded during Hurricane Irma. Could that still cause pest problems?",
      answer:
        "It can. Water that soaked into wall cavities, subfloors, or framing may have left damp or softened wood behind, and that is exactly what termites and roaches look for. If repairs were rushed or never fully dried out, it's worth a closer look. We check moisture levels, inspect for termite activity, and let you know if anything needs attention.",
    },
  ],
  nearbyAreas: ["yulee", "arlington", "westside", "fernandina-beach"],
  lastUpdated: "2026-10-12",
};
