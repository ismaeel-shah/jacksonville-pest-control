import type { AreaContent } from "../types";

export const ponteVedraBeach: AreaContent = {
  slug: "ponte-vedra-beach",
  published: true,
  name: "Ponte Vedra Beach",
  region: "st-johns-county",
  hubBlurb: "Gated golf communities and large irrigated lawns between the ocean and the Intracoastal, where chinch bugs, mole crickets, and termite protection matter most.",
  seo: {
    title: "Pest Control in Ponte Vedra Beach, FL | Lawn & Termite",
    description:
      "Discreet pest control in Ponte Vedra Beach, FL for golf community homes. Termite protection, lawn pests and mosquito control on your schedule. Get a free quote.",
    primaryKeyword: "pest control Ponte Vedra Beach FL",
    secondaryKeywords: ["termite protection Ponte Vedra", "chinch bug treatment Ponte Vedra Beach", "mosquito control Ponte Vedra", "32082 pest control"],
  },
  hero: {
    h1: "Pest Control in Ponte Vedra Beach, FL",
    subheadline: "Scheduled, low-key service for Ponte Vedra homes, from gated golf neighborhoods to oceanfront estates.",
    image: {
      file: "ponte-vedra-beach-golf-community-home-lawn.webp",
      alt: "Large Ponte Vedra Beach home with a green St. Augustine grass lawn facing a golf course pond",
    },
  },
  intro: [
    "Ponte Vedra Beach stretches along the ocean between the Duval County line and the Guana Tolomato Matanzas reserve, with the Intracoastal Waterway on its west side. It's best known for golf, including TPC Sawgrass, home of The Players Championship, and for gated neighborhoods like Marsh Landing and Sawgrass Country Club.",
    "Homes here tend to be large, with big irrigated lawns, lush landscaping, and golf course ponds out back. That setting brings its own set of problems. Chinch bugs and mole crickets damage St. Augustine and other turf grasses. Ponds and marsh edges breed mosquitoes. And a high-value home deserves strong termite protection. We know many Ponte Vedra homeowners want service that is quiet, on time, and easy to schedule around gate access, travel, and landscaping crews, and we plan our visits that way.", // OWNER: confirm gate-access scheduling process
  ],
  commonPests: {
    heading: "Top Pest Concerns in Ponte Vedra Beach",
    intro: ["Lawn and landscape pests rank higher here than in most of our service area, along with these familiar coastal problems."],
    pests: [
      {
        name: "Chinch bugs",
        why: "Sunny, heavily irrigated St. Augustine lawns are their favorite food. Damage shows up as yellow, dry-looking patches in hot weather, often near driveways and sidewalks.",
      },
      {
        name: "Mole crickets",
        why: "Sandy soil makes tunneling easy. They loosen grass roots, leaving spongy, thinning turf, and they're most noticeable in spring and early summer.",
      },
      {
        name: "Subterranean termites",
        why: "Irrigation keeps soil near foundations moist, and many homes have wood decks, trim, and landscaping right against the walls. That steady moisture attracts termites.",
      },
      {
        name: "Mosquitoes",
        why: "Golf course ponds, marsh along the Intracoastal, and thick shrub beds give mosquitoes water to breed in and shade to rest in.",
      },
    ],
  },
  homes: {
    heading: "Golf Communities, Estates, and HOAs",
    body: [
      "Many Ponte Vedra neighborhoods are gated, with HOA guidelines for landscaping and exterior work. We follow those rules, check in at the gate, and keep our trucks and equipment tidy. If you're away for part of the year, we can work with a house manager or schedule visits around your travel.",
      "Larger homes mean more square footage to protect and more places for pests to get in, like multiple garages, pool cages, outdoor kitchens, and long rooflines. For homes of this value, we usually suggest a full termite protection plan with yearly inspections rather than waiting for signs of damage.",
      "Lawns here are a big investment, too. Our [lawn pest control](/lawn-pest-control) targets chinch bugs, mole crickets, and fire ants and can be coordinated with your landscaper's fertilizer and mowing schedule.",
    ],
  },
  popularServices: [
    { slug: "termite-control", reason: "A long-term termite plan protects high-value Ponte Vedra homes before damage starts." },
    { slug: "lawn-pest-control", reason: "Chinch bugs and mole crickets can quickly ruin the irrigated St. Augustine lawns common here." },
    { slug: "mosquito-control", reason: "Golf course ponds and marsh along the Intracoastal keep mosquitoes active near pools and patios." },
    { slug: "general-pest-control", reason: "Scheduled quarterly visits fit around HOA rules, travel, and landscaping crews." },
    { slug: "wildlife-removal", reason: "Raccoons and other wildlife from nearby preserves and marsh can get into attics and garages." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Marsh Landing", "Sawgrass Country Club", "Sawgrass Players Club", "The Plantation at Ponte Vedra", "Old Ponte Vedra", "South Ponte Vedra Beach"],
  zipCodes: ["32082"],
  faqs: [
    {
      question: "What are the brown patches in my St. Augustine lawn?",
      answer:
        "Brown or yellow patches in sunny areas during hot weather are often chinch bug damage. They suck the juice from grass blades, and the patches grow outward. Drought stress and fungus can look similar, so a close inspection matters. We check the edges of the damage for live insects before choosing a treatment, so you only treat what's really there.",
    },
    {
      question: "Can you work with my HOA and gate rules?",
      answer:
        "Yes. We service many gated communities and follow their check-in steps and work hours. Just let us know your gate process when you book. Most of our work is around the outside of the home, and we keep visits quick and quiet. If you're out of town, we can coordinate access with a house manager or neighbor.",
    },
    {
      question: "Is a termite plan worth it for a newer home in Ponte Vedra?",
      answer:
        "For most homes, yes. The builder's original soil treatment breaks down over time, and irrigation keeps the ground moist near your foundation. A termite plan includes yearly inspections and treatment if termites show up. Repairs to a large home can be costly, so steady protection is usually the smarter choice. We'll explain your options at a free inspection.",
    },
  ],
  nearbyAreas: ["jacksonville-beach", "nocatee", "neptune-beach", "st-johns"],
  lastUpdated: "2026-10-12",
};
