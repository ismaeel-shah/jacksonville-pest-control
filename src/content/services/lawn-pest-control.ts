import type { ServiceContent } from "../types";

export const lawnPestControl: ServiceContent = {
  slug: "lawn-pest-control",
  published: true,
  name: "Lawn Pest Control",
  navLabel: "Lawn Pest Control",
  icon: "lawn",
  audience: ["residential", "commercial"],
  cardDescription: "Targeted treatment for chinch bugs, sod webworms, mole crickets, grubs, and fire ants in St. Augustine and other Florida lawns.",
  seo: {
    title: "Lawn Pest Control in Jacksonville, FL | Chinch Bugs",
    description:
      "Lawn pest control in Jacksonville, FL for chinch bugs, sod webworms, mole crickets, and fire ants. Protect your St. Augustine grass. Get a free inspection.",
    primaryKeyword: "lawn pest control Jacksonville FL",
    secondaryKeywords: ["chinch bugs St. Augustine grass", "sod webworms", "mole crickets", "lawn grubs", "fire ants in lawn"],
  },
  hero: {
    h1: "Lawn Pest Control in Jacksonville, FL",
    subheadline: "Find out what's really killing those brown patches, and stop the insects before they spread across your yard.",
    image: {
      file: "lawn-pest-control-jacksonville-st-augustine-chinch-bug-damage.webp",
      alt: "Yellowing patch of St. Augustine grass beside a driveway, a common sign of chinch bug damage in Jacksonville",
    },
  },
  intro: [
    "A yellow patch by the driveway that keeps growing, even though the sprinklers run on schedule, is one of the most common calls we get in summer. In Jacksonville, that kind of damage is often caused by insects feeding on the grass, not a lack of water.",
    "Our lawn pest control finds the insect behind the damage and treats it directly. We look for chinch bugs, sod webworms, mole crickets, grubs, and fire ants, then apply a targeted treatment to the areas that need it. Our focus is pests, not fertilizing or weed control, so you get a technician who knows how lawn insects behave in Northeast Florida.", // OWNER: confirm fertilization and weed control are not offered
  ],
  localProblem: {
    heading: "Why Lawn Pests Hit Jacksonville Yards So Hard",
    body: [
      "**St. Augustine grass** covers most lawns in Jacksonville. It handles our heat and humidity well, but it's also the favorite food of the southern chinch bug, the most damaging lawn insect in the area.",
      "Our long, warm growing season gives lawn pests many months to feed and breed. Chinch bugs build up fast in hot, dry spots along sidewalks and driveways. Sod webworm caterpillars chew grass blades at night, and mole crickets tunnel through our loose, sandy soil, cutting roots as they go.",
      "Because damage often looks like drought or fungus, many homeowners water more and wait. By the time the real cause is found, a small patch can become a large dead area.",
    ],
  },
  signs: {
    heading: "Signs of Lawn Pests",
    intro: "Check your lawn closely in the warm months, especially in the sunniest areas.",
    items: [
      { title: "Yellow patches that turn brown", description: "Spreading patches in hot, dry spots that don't recover after watering often point to chinch bugs." },
      { title: "Ragged or chewed grass blades", description: "Notched, uneven blades and thin areas can mean sod webworms are feeding at night." },
      { title: "Small moths at dusk", description: "Light-colored moths flying low over the grass in the evening may be laying webworm eggs." },
      { title: "Spongy soil and raised tunnels", description: "Ground that feels soft underfoot, with small ridges, suggests mole crickets." },
      { title: "Turf that lifts like a rug", description: "Dead grass that peels up easily with no roots attached is a classic grub sign." },
      { title: "Mounds after rain", description: "Fluffy dirt mounds that pop up after storms are usually [fire ant colonies](/ant-control)." },
    ],
  },
  process: {
    heading: "Our Lawn Pest Treatment Process",
    steps: [
      { title: "Walk the lawn", description: "We check damaged areas and the edges where healthy grass meets dying grass, where insects are easiest to find." },
      { title: "Confirm the cause", description: "We identify the pest, or tell you if the problem looks like fungus, watering, or mowing instead." },
      { title: "Treat the affected areas", description: "We apply a product labeled for that pest and for your grass type, focusing on where the insects are active." },
      { title: "Give you care tips", description: "We explain how to water and mow after treatment to help the lawn recover." },
      { title: "Follow up through the season", description: "Return visits catch new activity, since many lawn pests come back in waves." },
    ],
  },
  treatmentOptions: {
    heading: "Lawn Pest Treatment Options",
    intro: ["We match the treatment to the pest and how far it has spread, so we don't treat more lawn than needed."],
    options: [
      {
        title: "Spot treatments",
        description: "Targeted applications to active patches and a buffer around them. A good fit for chinch bugs caught early.",
      },
      {
        title: "Full lawn treatments",
        description: "Liquid or granular products applied across the turf when insects such as webworms or grubs are widespread.",
      },
      {
        title: "Fire ant baits and mound treatments",
        description: "Baits spread over the yard reach colonies you can't see, while mound treatments handle problem spots near walkways.",
      },
      {
        title: "Seasonal lawn pest programs",
        description: "Scheduled visits timed to when each pest is most active, with treatment only where we find activity.", // OWNER: confirm seasonal program and visit schedule
      },
    ],
  },
  safety: {
    heading: "Is Lawn Pest Treatment Safe for Kids and Pets?",
    body: [
      "It can be, when products are used exactly as the label directs. Keep children and pets off treated grass until liquid applications dry, or until granular products have been watered in. Your technician will tell you how long to wait.",
      "Tell us about vegetable gardens, ponds, wells, or pets that dig, so we can plan around them.",
    ],
  },
  costFactors: [
    { title: "Lawn size", description: "Larger lawns take more product and time to treat." },
    { title: "Which pest you have", description: "Chinch bugs, grubs, and mole crickets each need different products and timing." },
    { title: "How far the damage has spread", description: "A few patches can be spot-treated, while widespread activity calls for a full treatment." },
    { title: "One visit or a seasonal plan", description: "A single treatment differs from a program with return visits through the warm months." },
    { title: "Adding fire ant control", description: "Treating fire ants across the yard is extra work beyond insects in the grass." },
    { title: "Yard layout and access", description: "Fenced areas, slopes, and heavy landscaping can affect the time needed." },
  ],
  prevention: {
    heading: "How to Help Prevent Lawn Pests",
    tips: [
      "Keep your mower set high. St. Augustine that's cut too short gets stressed and attracts chinch bugs.",
      "Water deeply and less often, early in the morning, rather than a little every day.",
      "Don't overdo nitrogen fertilizer, which can feed lush growth that chinch bugs love.",
      "Check hot spots along driveways and sidewalks every week or two in summer.",
      "Remove heavy thatch so insects have fewer places to hide.",
      "Look for new mounds after rain and treat them early.",
    ],
  },
  forBusinesses: [
    "We also treat common areas for HOAs, apartment communities, and office parks, where fire ants near walkways and dead turf by entrances are hard to ignore. Learn more about our [commercial services](/commercial).",
  ],
  faqs: [
    {
      question: "How can I tell chinch bug damage from a dry lawn?",
      answer:
        "Chinch bug damage usually starts in the hottest, sunniest spots and keeps spreading even after you water. Drought stress tends to green up after a good soaking. To check, part the grass where green meets yellow and look near the soil for tiny black insects with white wings. We can confirm it during a free inspection.",
    },
    {
      question: "Do you fertilize or treat weeds too?",
      answer:
        "No, our focus is lawn pests. We treat the insects that damage turf, like chinch bugs, sod webworms, mole crickets, grubs, and fire ants. Feeding the grass and controlling weeds is usually handled by a lawn-care company. If we see a problem that isn't caused by insects, such as fungus or watering issues, we'll tell you.", // OWNER: confirm fertilization and weed control are not offered
    },
    {
      question: "When is the best time to treat lawn pests in Jacksonville?",
      answer:
        "The best time is as soon as you notice damage, because lawn pests spread fast in warm weather. Each pest also has its season here. Mole crickets are most noticeable in spring, chinch bugs peak in the summer heat, and sod webworms often show up in late summer and fall. A seasonal program times visits to match.",
    },
    {
      question: "Will my grass grow back after insect damage?",
      answer:
        "Often, yes. St. Augustine spreads by runners, so lightly damaged areas usually fill back in once the insects are controlled and the lawn gets steady water. Patches that are completely dead, with no green runners left, won't recover on their own and may need new sod or plugs. We'll point out which areas are likely to bounce back.",
    },
  ],
  relatedServices: ["ant-control", "mosquito-control", "wildlife-removal"],
  lastUpdated: "2026-10-12",
};
