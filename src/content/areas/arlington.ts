import type { AreaContent } from "../types";

export const arlington: AreaContent = {
  slug: "arlington",
  published: true,
  name: "Arlington",
  region: "jacksonville",
  hubBlurb: "Mid-century neighborhoods between the St. Johns River and big nature preserves, where termites, rodents, and wildlife are everyday concerns.",
  seo: {
    title: "Pest Control in Arlington, FL | Termites & Wildlife",
    description:
      "Arlington pest control for mid-century homes near the river and preserves. Termites, rodents, wildlife, and mosquitoes handled locally. Book a free inspection.",
    primaryKeyword: "pest control Arlington FL",
    secondaryKeywords: [
      "termite control Arlington Jacksonville",
      "wildlife removal Arlington",
      "rodent control Arlington Jacksonville",
      "32211 pest control",
    ],
  },
  hero: {
    h1: "Pest Control in Arlington, FL",
    subheadline: "Termite, rodent, and wildlife work tailored to Arlington's postwar homes, river lots, and wooded streets near Fort Caroline and Tree Hill.",
    image: {
      file: "arlington-jacksonville-mid-century-ranch-home.webp",
      alt: "Mid-century ranch home with a low roofline and mature trees in Arlington, Jacksonville",
    },
  },
  intro: [
    "When the Mathews Bridge opened in 1953, Arlington took off. For about two decades it grew faster than any other part of Jacksonville, and many of the homes built during that boom are still standing today. That history shapes almost every pest call we answer east of the river.",
    "Homes that are now 60 or 70 years old have had a long time for wood to soften and small gaps to open up. Add the St. Johns River, the Arlington River, and green spaces like Tree Hill Nature Preserve and the Jacksonville Arboretum, and you get neighborhoods where termites, rats, raccoons, and squirrels all have easy access. Our goal in Arlington is simple: protect the structure first, then keep wildlife and everyday bugs on the outside where they belong.",
  ],
  commonPests: {
    heading: "What Bugs Arlington Homeowners Most",
    pests: [
      {
        name: "Subterranean termites",
        why: "Many Arlington houses date to the 1950s and 1960s. Decades of Florida humidity can wear down wood framing, sill plates, and trim, giving termites from the sandy soil plenty to work with.",
      },
      {
        name: "Raccoons, opossums, and squirrels",
        why: "Wooded lots near Fort Caroline, the Timucuan Preserve, and Tree Hill put wildlife right next door. Older roofs and loose soffits make attics an easy target.",
      },
      {
        name: "Roof rats",
        why: "Tall trees planted when these neighborhoods were new now tower over the rooftops, and rats use the branches to reach vents and gaps in aging rooflines.",
      },
      {
        name: "Mosquitoes",
        why: "Shoreline along the St. Johns and Arlington rivers, plus creeks, marsh edges, and shady backyards, keeps mosquito numbers high from spring into fall.",
      },
    ],
  },
  homes: {
    heading: "Postwar Homes and Wooded Lots",
    body: [
      "Arlington is known for its mid-century homes, including some notable modern designs by local architects. Many houses here are single-story ranches on concrete slabs with wood roof framing and trim. Over time, small slab cracks, gaps around plumbing, and soft fascia boards become entry points. A yearly [termite inspection](/termite-inspection) is one of the best habits an Arlington homeowner can have.",
      "Neighborhoods such as Lake Lucina and Woodland Acres grew up in the 1940s through the 1960s, so their trees are now huge. That shade is wonderful in July, but it also keeps roofs damp and gives animals a bridge to the attic. When we inspect, we check rooflines, vents, and chimneys and suggest which limbs to trim.",
      "Closer to the river and the Intracoastal, you'll find docks, seawalls, and wetter soil. Those spots need extra attention for moisture, mosquitoes, and termites working up from the ground.",
    ],
  },
  popularServices: [
    { slug: "termite-control", reason: "Arlington's many 1950s and 1960s homes are at the age where termite damage often shows up." },
    { slug: "wildlife-removal", reason: "Raccoons and squirrels from nearby preserves regularly move into Arlington attics." },
    { slug: "rodent-control", reason: "Roof rats use the area's tall, mature trees to reach older rooflines." },
    { slug: "termite-inspection", reason: "Older Arlington homes sell often, and lenders usually ask for a WDO report during the sale." },
    { slug: "mosquito-control", reason: "River frontage and shady, creek-side yards keep mosquitoes active for months." },
  ],
  neighborhoods: ["Old Arlington", "Arlington Heights", "Lake Lucina", "Woodland Acres", "Sandalwood", "Fort Caroline area"], // OWNER: verify neighborhood names and ZIP codes before launch
  zipCodes: ["32211", "32225", "32277"],
  faqs: [
    {
      question: "Is my 1960s Arlington home at higher risk for termites?",
      answer:
        "It can be. Homes from that era have had decades of exposure to humidity and sandy, moist soil, and any original termite treatment has long since worn off. That doesn't mean your house has termites, but it does mean regular inspections matter. We check the foundation, door frames, garage, and attic for mud tubes, damaged wood, and swarm signs.",
    },
    {
      question: "What should I do if I hear animals in my attic in Arlington?",
      answer:
        "Call for an inspection before you seal anything up. Raccoons, squirrels, and opossums from Arlington's wooded areas often have young in the attic, and closing the hole too soon can trap them inside. We find out what animal it is, remove it in a humane, legal way, then repair or seal the entry points so others can't follow.",
    },
    {
      question: "Do you treat homes near Tree Hill and Fort Caroline?",
      answer:
        "Yes, and those homes get extra care. Properties beside preserves see more wildlife, more mosquitoes, and more insects wandering in from the woods. We focus on the house and yard itself, create a protective barrier around the structure, and choose methods that suit a property bordering protected land. Your technician will explain each product and any re-entry time.",
    },
  ],
  nearbyAreas: ["southside", "atlantic-beach", "san-marco", "northside-oceanway"],
  lastUpdated: "2026-10-12",
};
