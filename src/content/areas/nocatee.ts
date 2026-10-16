import type { AreaContent } from "../types";

export const nocatee: AreaContent = {
  slug: "nocatee",
  published: true,
  name: "Nocatee",
  region: "st-johns-county",
  hubBlurb: "Newer homes, young families, and lots of dogs next to preserves and ponds, so fire ants, fleas, ticks, and mosquitoes lead the list.",
  seo: {
    title: "Pest Control in Nocatee, FL | Call a Local Pest Pro",
    description:
      "Pest control in Nocatee, FL with kid- and pet-conscious options for fire ants, mosquitoes, fleas and termites in newer homes. Call to reach a local pro today.",
    primaryKeyword: "pest control Nocatee FL",
    secondaryKeywords: ["Nocatee exterminator", "mosquito control Nocatee", "pet friendly pest control Ponte Vedra", "32081 pest control"],
  },
  hero: {
    h1: "Pest Control in Nocatee, FL",
    subheadline: "Thoughtful pest protection for Nocatee families, pets, and newer homes near the preserve and the Intracoastal.",
    image: {
      file: "nocatee-new-home-family-yard-preserve.webp",
      alt: "Newer two-story home in Nocatee with a fenced backyard backing up to pine woods",
    },
  },
  intro: [
    "Nocatee is one of the largest master-planned communities in Northeast Florida, with dozens of villages spread across more than 13,000 acres in northern St. Johns County. Construction started in the mid-2000s, so most homes are fairly new, and many of the people living in them are families with young kids and dogs.",
    "Newer homes don't mean no pests. Nocatee was built on former pine woods and wetlands, and much of that land is still nearby in the Nocatee Preserve and the greenway along the Intracoastal Waterway. Wildlife, ticks, and mosquitoes live right at the edge of many backyards. Fresh sod and open common areas are quick to grow fire ant mounds. A local pest control pro can offer treatment options chosen with kids and pets in mind and explain how long to keep everyone off treated areas.",
  ],
  commonPests: {
    heading: "Common Pests in Nocatee Neighborhoods",
    pests: [
      {
        name: "Fire ants",
        why: "New sod, playgrounds, and open green spaces are ideal for fire ant mounds. They pop up fast after rain and are a real concern where kids play barefoot.",
      },
      {
        name: "Mosquitoes",
        why: "Stormwater ponds sit throughout the villages, and the preserve and Intracoastal marsh are close by. Yards that back up to water or woods see the most bites.",
      },
      {
        name: "Fleas and ticks",
        why: "Dogs walk the trails, dog parks, and preserve edges every day. Ticks wait in tall grass and brush, and fleas hitch a ride home on pets.",
      },
      {
        name: "Subterranean termites",
        why: "These homes are young, but termites already live in the soil around them. Protection set up during building does not last forever, so ongoing coverage matters.",
      },
    ],
  },
  homes: {
    heading: "New Homes, HOA Rules, and Busy Families",
    body: [
      "Most Nocatee homes were built from the mid-2000s on, with newer phases still going up. Tight construction means fewer cracks and gaps for pests, but pests still find ways in around plumbing, garage doors, and pool cages. A first-year check helps catch these weak spots early.",
      "HOA rules set the standards for landscaping and exterior work, and a local pest control pro can plan treatment within them. Many villages have fenced yards, shared walls in townhomes, or homes backing up to conservation land, and each needs a slightly different plan.",
      "With kids and pets in the yard, how pests are treated matters as much as what gets treated. Targeted baits, spot treatments, and products chosen for the situation are common choices. Ask about [eco-friendly pest control](/eco-friendly-pest-control) options if you want a lighter approach.",
    ],
  },
  popularServices: [
    { slug: "ant-control", reason: "Fire ant mounds show up quickly in new sod, play areas, and common spaces across Nocatee." },
    { slug: "mosquito-control", reason: "Ponds and the nearby preserve keep mosquitoes active in many Nocatee backyards." },
    { slug: "flea-tick-control", reason: "Dogs that walk the trails and preserve edges can bring fleas and ticks home." },
    { slug: "termite-control", reason: "Ongoing termite coverage protects newer homes after the builder's protection runs out." },
    { slug: "eco-friendly-pest-control", reason: "Many Nocatee families prefer lower-impact options with kids and pets at home." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Coastal Oaks", "Del Webb Ponte Vedra", "Austin Park", "Crosswater", "Twenty Mile", "Greenleaf Village", "Seabrook Village"],
  zipCodes: ["32081"],
  faqs: [
    {
      question: "Is pest control safe for my kids and dog in Nocatee?",
      answer:
        "It can be, when it's done with care. Every product should be applied according to its label, and your technician should tell you how long to keep children and pets away from treated areas, usually until sprays dry. Baits and targeted treatments are often a better fit than broad spraying. Mention your pets when you call so the provider can plan around them.",
    },
    {
      question: "My home is only a few years old. Does it need termite protection?",
      answer:
        "Yes. Your home likely had a soil treatment or other termite protection during construction, but that coverage can wear off or expire. Termites already live in the soil around Nocatee. Check your closing paperwork to see what was done and when it ends. A local pest control pro can review it with you and set up protection that picks up where the builder's left off.",
    },
    {
      question: "Why are mosquitoes so bad in my backyard?",
      answer:
        "If your yard backs up to a pond, the preserve, or wooded conservation land, mosquitoes have breeding water and shade right next door. Also check for water in toys, planters, and gutters after rain. Treatments that target the shrubs and shady spots where adult mosquitoes rest cut down bites in the areas you use most.",
    },
  ],
  nearbyAreas: ["ponte-vedra-beach", "st-johns", "jacksonville-beach", "mandarin"],
  lastUpdated: "2026-10-16",
};
