import type { ServiceContent } from "../types";

// OWNER: confirm local providers handle this service before launch (set published: false if not)
export const wildlifeRemoval: ServiceContent = {
  slug: "wildlife-removal",
  published: true,
  name: "Wildlife Removal",
  navLabel: "Wildlife Removal",
  icon: "wildlife",
  audience: ["residential", "commercial"],
  cardDescription: "Humane removal of raccoons, squirrels, opossums, armadillos, and snakes, plus sealing the openings they used to get in.",
  seo: {
    title: "Wildlife Removal in Jacksonville, FL | Humane Service",
    description:
      "Humane wildlife removal in Jacksonville, FL for raccoons, squirrels, armadillos, and snakes, plus entry-point sealing and cleanup. Call to reach a local pro.",
    primaryKeyword: "wildlife removal Jacksonville FL",
    secondaryKeywords: ["raccoon removal", "squirrels in attic", "armadillo removal", "snake removal", "animal exclusion"],
  },
  hero: {
    h1: "Wildlife Removal in Jacksonville, FL",
    subheadline: "Get raccoons, squirrels, and other uninvited animals out of your attic and yard, then keep them from coming back.",
    image: {
      file: "wildlife-removal-jacksonville-attic-exclusion.webp",
      alt: "Technician installing metal screening over a damaged soffit vent on a Jacksonville home",
    },
  },
  intro: [
    "Scratching in the ceiling at sunrise, a torn soffit vent, or fresh holes across your lawn usually mean an animal has moved in. Around Jacksonville, the usual suspects are raccoons, squirrels, opossums, armadillos, and the occasional snake.",
    "Wildlife removal covers the whole job: figuring out which animal you have and where it's getting in, removing it humanely, and sealing the openings so another one can't take its place. If an animal has been living in your attic, cleanup can take care of the mess it left behind. Every step should follow Florida wildlife rules for how animals are trapped, handled, and released.",
  ],
  localProblem: {
    heading: "Why Wild Animals Move Into Jacksonville Homes",
    body: [
      "Jacksonville neighborhoods sit beside creeks, marshes, wooded lots, and the St. Johns River. Wildlife lives right next door, and many animals have learned that houses offer easy food and shelter.",
      "Northeast Florida's mild winters keep animals active all year. From late winter into spring, raccoons and squirrels look for warm, dry places to raise their young, and a loose soffit can turn your attic into a nursery.",
      "Armadillos bring a different headache. The region's sandy soil is easy to dig, and they root through lawns at night looking for grubs. Snakes follow the rodents and frogs around woodpiles. Most local snakes are harmless, but a few venomous species live here, so leave any snake you can't identify alone.",
    ],
  },
  signs: {
    heading: "Signs You Have a Wildlife Problem",
    intro: "Most of these animals are nocturnal, which means damage, tracks, and noises usually tip you off before the animal itself does.",
    items: [
      { title: "Noises overhead at dawn or dusk", description: "Scurrying early and late in the day often means squirrels. Steady sounds all night may be [roof rats](/rodent-control) instead." },
      { title: "Damaged vents, soffits, or fascia", description: "Torn screens, chewed boards, or bent roof vents where an animal forced its way in." },
      { title: "Small holes and overturned sod", description: "Shallow, cone-shaped holes across the lawn are a classic sign of armadillos." },
      { title: "Droppings and musky odors", description: "Droppings in the attic or crawl space, or a smell that gets stronger on hot days." },
      { title: "Burrows under slabs, decks, or sheds", description: "Openings where opossums or armadillos may be living." },
      { title: "Shed snake skins", description: "Skins in the garage, attic, or crawl space, or snakes seen in the same spot again and again." },
    ],
  },
  process: {
    heading: "How Wildlife Removal Works",
    steps: [
      { title: "Inspect and identify", description: "The technician checks the roofline, attic, crawl space, and yard to confirm the animal, find entry points, and look for babies." },
      { title: "Explain the plan", description: "Your technician walks you through a clear plan before any work begins." },
      { title: "Remove the animals humanely", description: "Live traps or one-way doors are used, traps are checked often, and Florida wildlife rules for handling and release are followed." },
      { title: "Seal the entry points", description: "Once the animals are out, gaps are closed, vents screened, and openings repaired so new animals can't move in." },
      { title: "Clean up and follow up", description: "Droppings and nesting material are removed, the area is sanitized, and a return visit confirms the repairs are holding." },
    ],
  },
  treatmentOptions: {
    heading: "Wildlife Removal Methods",
    intro: ["The right method depends on the animal, where it's living, and the time of year. These methods are often combined."],
    options: [
      {
        title: "Live trapping",
        description: "Cage traps set along the paths an animal travels. This works well for raccoons, opossums, and armadillos in yards or under buildings.",
      },
      {
        title: "One-way exclusion doors",
        description:
          "A door over the main entry lets animals leave but not get back in. It's often the gentlest choice for squirrels in an attic, once it's clear no young are left inside.",
      },
      {
        title: "Exclusion repairs",
        description:
          "Sealing gaps, screening vents and chimneys, and burying wire mesh around decks and sheds. Without it, a new animal often moves right in.",
      },
    ],
  },
  safety: {
    heading: "Is Wildlife Removal Safe for Kids and Pets?",
    body: [
      "Yes. Wildlife work relies on traps, one-way doors, and repairs, not pesticides. The bigger risk is the animal itself. Wild animals may bite when cornered, and their droppings can carry germs and parasites, so please don't handle an animal or clean out an attic yourself.",
      "Keep children and pets away from any traps. If the area is sanitized during cleanup, the technician should follow the product label and tell you when it's ready to use.",
    ],
  },
  prevention: {
    heading: "How to Keep Wildlife Away From Your Home",
    tips: [
      "Trim tree limbs back several feet from the roof.",
      "Use trash cans with locking lids, and put them out the morning of pickup.",
      "Feed pets indoors, and pick up fallen fruit and spilled birdseed.",
      "Cover chimney tops, gable vents, and crawl space openings with sturdy metal screening.",
      "Close off the space under decks and sheds with wire mesh buried a few inches deep.",
      "Keep grubs in check so armadillos have less reason to dig. [Lawn pest treatments](/lawn-pest-control) can help.",
    ],
  },
  forBusinesses: [
    "Raccoons in dumpster areas and squirrels in office ceilings cause real trouble for businesses. Removal and exclusion work is common at apartment communities, retail centers, and other [commercial properties](/commercial).",
  ],
  faqs: [
    {
      question: "What happens to animals after they're trapped?",
      answer:
        "It depends on the species and what Florida wildlife rules allow. Some animals can be released on the property or nearby, while others have stricter handling requirements. A wildlife pro should follow state rules for every animal trapped and explain what will happen to it before starting. Ask about humane methods when you call.",
    },
    {
      question: "How long does it take to get animals out of my attic?",
      answer:
        "Most attic jobs take several days to a couple of weeks. The removal itself can be quick, but the technician waits until every animal, including any babies, is out before sealing the last opening. Closing up too early can trap an animal inside, which leads to more damage and a bad odor.",
    },
    {
      question: "What's digging holes in my lawn overnight?",
      answer:
        "In Jacksonville, overnight holes in the lawn are most often armadillo damage. Armadillos dig shallow, cone-shaped holes while hunting for grubs and worms in loose, sandy soil. Raccoons can also tear up fresh sod looking for food. A wildlife pro can trap the animal, and reducing the grubs helps keep it from coming back.",
    },
    {
      question: "What should I do if I find a snake in my house or garage?",
      answer:
        "Keep your distance, move kids and pets away, and call a wildlife removal pro. Most snakes around Jacksonville are harmless, but some species are hard to tell apart, and a few venomous snakes live in this area. If it's safe, close the door to that room. A pro can remove the snake and look for how it got in.",
    },
  ],
  relatedServices: ["rodent-control", "lawn-pest-control", "general-pest-control"],
  lastUpdated: "2026-10-16",
};
