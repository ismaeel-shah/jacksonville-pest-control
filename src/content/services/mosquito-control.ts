import type { ServiceContent } from "../types";

export const mosquitoControl: ServiceContent = {
  slug: "mosquito-control",
  published: true,
  name: "Mosquito Control",
  navLabel: "Mosquito Control",
  icon: "mosquito",
  audience: ["residential", "commercial"],
  cardDescription: "Seasonal yard treatments that cut down mosquitoes where they rest and breed, so you can enjoy your backyard again.",
  seo: {
    title: "Mosquito Control in Jacksonville, FL | Yard Treatments",
    description:
      "Mosquito control in Jacksonville, FL with yard barrier treatments, larvicide, and seasonal programs. Take back your backyard. Call today for a free quote.",
    primaryKeyword: "mosquito control Jacksonville FL",
    secondaryKeywords: ["mosquito yard treatment", "mosquito barrier spray", "seasonal mosquito program", "standing water mosquitoes", "no-see-ums"],
  },
  hero: {
    h1: "Mosquito Control in Jacksonville, FL",
    subheadline: "Spend summer evenings on the patio instead of swatting, with yard treatments that keep mosquito numbers down all season.",
    image: {
      file: "mosquito-control-jacksonville-backyard-shrub-treatment.webp",
      alt: "Technician treating shrubs and shaded plants in a Jacksonville backyard to reduce mosquitoes",
    },
  },
  intro: [
    "In Jacksonville, a few minutes outside on a summer evening can leave you covered in bites. Mosquitoes make it hard to grill, garden, or let the kids play in the yard.",
    "Our mosquito control targets them in two places: where adults rest during the day and where they breed. We treat the shady shrubs, fence lines, and under-deck areas around your yard, and we treat standing water that can't be dumped out. Regular visits through the warm season keep numbers down as new mosquitoes hatch. No service can remove every mosquito in the neighborhood, but most families notice a real difference in how much time they can comfortably spend outside.",
  ],
  localProblem: {
    heading: "Why Mosquitoes Are So Bad in Jacksonville",
    body: [
      "Mosquitoes need warmth and standing water, and Northeast Florida has plenty of both. Our season starts early in spring and often runs well into fall, and on warm winter days you may still see a few.",
      "Summer afternoon storms fill gutters, plant saucers, tarps, and low spots in the lawn. Mosquito eggs can hatch and develop into biting adults in about a week in hot weather. Homes near marshes, creeks, retention ponds, and the St. Johns River often see heavier pressure, but even a small backyard can produce plenty of mosquitoes on its own.",
      "Mosquitoes can also spread certain illnesses to people and pets, including heartworm in dogs. Reducing them around your home is a sensible step, along with repellent and advice from your doctor or vet.",
    ],
  },
  signs: {
    heading: "Signs Your Yard Needs Mosquito Control",
    intro: "If any of these sound familiar, your yard may be producing its own mosquitoes.",
    items: [
      { title: "Bites within minutes of going outside", description: "Especially at dawn, dusk, or in shady parts of the yard." },
      { title: "Mosquitoes around the back door", description: "Swarms waiting near doors and getting inside every time someone goes in or out." },
      { title: "Water that sits after rain", description: "Puddles, clogged gutters, or low spots that stay wet for days after a storm." },
      { title: "Wigglers in containers", description: "Tiny swimming larvae in buckets, birdbaths, plant saucers, or old tires." },
      { title: "Dense, shady landscaping", description: "Thick shrubs, ivy, and ground cover where adult mosquitoes rest during the heat of the day." },
      { title: "Outdoor plans keep getting cut short", description: "You avoid the patio or pool deck in the evening because of bites." },
    ],
  },
  process: {
    heading: "How Our Mosquito Control Works",
    steps: [
      { title: "Yard inspection", description: "We walk your property to find resting areas and breeding spots, including hidden ones like gutters and drains." },
      { title: "Remove what we can", description: "We dump out or point out containers holding water, since removing breeding sites is the most effective step." },
      { title: "Barrier treatment", description: "We treat the undersides of leaves, shrubs, fence lines, and shaded areas where adult mosquitoes rest." },
      { title: "Larvicide in breeding spots", description: "Water that can't be drained, like drains or ornamental features, gets a larvicide that stops larvae from becoming adults." },
      { title: "Regular return visits", description: "We come back on a set schedule through the season, since treatments wear off and new mosquitoes keep hatching." }, // OWNER: confirm visit interval for mosquito program
    ],
  },
  treatmentOptions: {
    heading: "Mosquito Treatment Options",
    intro: [
      "Most yards do best with a regular program, but we also offer options for one-time needs.", // OWNER: confirm one-time event treatments are offered
    ],
    options: [
      {
        title: "Seasonal mosquito program",
        description: "Recurring treatments through the warm months to keep populations down as new mosquitoes hatch after rains.",
      },
      {
        title: "One-time event treatment",
        description: "A treatment a day or two before a backyard party, wedding, or graduation to reduce mosquitoes for the occasion.",
      },
      {
        title: "Larvicide and breeding site control",
        description: "Targeted treatment of standing water that can't be removed. It's included in our programs and can help with problem drainage areas.",
      },
    ],
  },
  safety: {
    heading: "Is Mosquito Control Safe for Kids and Pets?",
    body: [
      "We handle it with care. Products are applied to plants and resting areas, not sprayed across your patio furniture or play equipment, and we use only products registered for mosquito control, applied according to label directions.",
      "Plan on keeping kids and pets out of the treated yard until the leaves have dried; your technician will confirm the timing on the day. We avoid spraying flowering plants where bees are feeding, and we keep treatments away from fish ponds and vegetable gardens. Let us know about these before we start.",
    ],
  },
  costFactors: [
    { title: "Yard size", description: "Bigger properties have more shrubs, fence lines, and resting areas to treat." },
    { title: "Amount of vegetation", description: "Thick landscaping and wooded edges take more time and product than an open lawn." },
    { title: "Water nearby", description: "Ponds, ditches, and marsh edges can increase pressure and the need for larvicide." },
    { title: "Program length", description: "A full-season program involves more visits than a single treatment." },
    { title: "One-time vs. recurring", description: "An event treatment is scheduled differently from regular seasonal service." },
  ],
  prevention: {
    heading: "How to Cut Down on Mosquitoes at Home",
    tips: [
      "Walk your yard after every heavy rain and dump out anything holding water.",
      "Change birdbath and pet bowl water at least once or twice a week.",
      "Clean gutters so they drain completely, and check downspout extensions.",
      "Drill drainage holes in tire swings, recycling bins, and toys left outside.",
      "Pull tarps tight on boats, grills, and woodpiles so water can't pool in folds.",
      "Keep pool water circulating and covers free of standing water.",
      "Trim back shrubs and ground cover to cut down on shady resting spots.",
    ],
  },
  forBusinesses: [
    "Restaurants with outdoor seating, apartment communities, and event venues can benefit from regular mosquito service. Ask us about [mosquito programs for businesses](/commercial).",
  ],
  faqs: [
    {
      question: "How long do mosquito treatments last?",
      answer:
        "A barrier treatment typically keeps mosquito numbers down for a few weeks, depending on rain, heat, and how thick your landscaping is. That's why we recommend regular visits through the season. Heavy storms can shorten the effect, and removing standing water between visits helps the treatment work longer.",
    },
    {
      question: "Do mosquito treatments help with no-see-ums?",
      answer:
        "They can help somewhat, but no-see-ums are harder to control. These tiny biting midges breed in wet soil and marsh edges, especially near the coast and the Intracoastal. A yard treatment may reduce them around your home, but they can drift in from nearby areas. Fine-mesh screens and fans on the porch also help.",
    },
    {
      question: "When should I start mosquito service in Jacksonville?",
      answer:
        "Spring is the best time to start, before populations build up with the summer rains. Starting early keeps mosquito numbers from getting out of hand. Many Jacksonville homeowners keep service going into fall, since warm weather here lasts long after summer ends. Your technician can suggest a schedule based on your yard.",
    },
    {
      question: "Will mosquito treatment harm bees and butterflies?",
      answer:
        "We take steps to limit the impact on pollinators. Our technicians avoid treating blooming flowers where bees and butterflies feed and focus on the shady leaves and resting areas mosquitoes prefer. If pollinators are important to you, let us know, and we can discuss options and our [eco-friendly pest control](/eco-friendly-pest-control) approach.",
    },
  ],
  relatedServices: ["lawn-pest-control", "flea-tick-control", "eco-friendly-pest-control"],
  lastUpdated: "2026-10-12",
};
