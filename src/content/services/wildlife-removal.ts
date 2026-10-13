import type { ServiceContent } from "../types";

// OWNER: confirm this service is offered before launch (set published: false if not)
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
      "Humane wildlife removal in Jacksonville, FL for raccoons, squirrels, armadillos, and snakes. We remove animals, seal entry points, and clean up. Call today.",
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
    "Our wildlife removal service handles the whole job. We figure out which animal you have and where it's getting in, remove it humanely, and seal the openings so another one can't take its place. If an animal has been living in your attic, we can also clean up the mess it left behind. Through every step, we follow Florida wildlife rules for how animals are trapped, handled, and released.",
  ],
  localProblem: {
    heading: "Why Wild Animals Move Into Jacksonville Homes",
    body: [
      "Jacksonville neighborhoods sit beside creeks, marshes, wooded lots, and the St. Johns River. Wildlife lives right next door, and many animals have learned that houses offer easy food and shelter.",
      "Our mild winters keep animals active all year. From late winter into spring, raccoons and squirrels look for warm, dry places to raise their young, and a loose soffit can turn your attic into a nursery.",
      "Armadillos bring a different headache. Our sandy soil is easy to dig, and they root through lawns at night looking for grubs. Snakes follow the rodents and frogs around woodpiles. Most local snakes are harmless, but a few venomous species live here, so leave any snake you can't identify alone.",
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
    heading: "Our Wildlife Removal Process",
    steps: [
      { title: "Inspect and identify", description: "We check the roofline, attic, crawl space, and yard to confirm the animal, find entry points, and look for babies." },
      { title: "Explain the plan", description: "You get a clear plan and an upfront quote before any work begins." },
      { title: "Remove the animals humanely", description: "We use live traps or one-way doors, check traps often, and follow Florida wildlife rules for handling and release." },
      { title: "Seal the entry points", description: "Once the animals are out, we close gaps, screen vents, and repair openings so new animals can't move in." },
      { title: "Clean up and follow up", description: "We remove droppings and nesting material, sanitize the area, and return to make sure the repairs are holding." }, // OWNER: confirm attic cleanup and sanitizing are offered
    ],
  },
  treatmentOptions: {
    heading: "Wildlife Removal Methods",
    intro: ["The best method depends on the animal, where it's living, and the time of year. We often combine these."],
    options: [
      {
        title: "Live trapping",
        description: "Cage traps set along the paths an animal travels. This works well for raccoons, opossums, and armadillos in yards or under buildings.",
      },
      {
        title: "One-way exclusion doors",
        description:
          "A door over the main entry lets animals leave but not get back in. It's often the gentlest choice for squirrels in an attic, once we know no young are left inside.",
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
      "Keep children and pets away from any traps. If we sanitize during cleanup, we follow the product label and tell you when the area is ready to use.",
    ],
  },
  costFactors: [
    { title: "Type of animal", description: "A squirrel in the attic and an armadillo in the yard call for different traps, tools, and time." },
    { title: "Number of animals and young", description: "A mother with babies takes more care, and often more visits, than one adult." },
    { title: "Number of entry points", description: "A roofline with several gaps needs more sealing than a single opening." },
    { title: "Where the animal is", description: "A squirrel in a second-story soffit or an opossum under a low crawl space takes more setup than a raccoon in the yard." },
    { title: "Repairs and materials", description: "Chewed vents, torn screens, and damaged soffits add materials to the job." },
    { title: "Cleanup needed", description: "Removing a few droppings is a smaller job than replacing soiled insulation." }, // OWNER: confirm insulation replacement is offered
  ],
  prevention: {
    heading: "How to Keep Wildlife Away From Your Home",
    tips: [
      "Trim tree limbs back several feet from the roof.",
      "Use trash cans with locking lids, and put them out the morning of pickup.",
      "Feed pets indoors, and pick up fallen fruit and spilled birdseed.",
      "Cover chimney tops, gable vents, and crawl space openings with sturdy metal screening.",
      "Close off the space under decks and sheds with wire mesh buried a few inches deep.",
      "Keep grubs in check so armadillos have less reason to dig. Our [lawn pest treatments](/lawn-pest-control) can help.",
    ],
  },
  forBusinesses: [
    "Raccoons in dumpster areas and squirrels in office ceilings cause real trouble for businesses. We handle removal and exclusion for apartment communities, retail centers, and other [commercial properties](/commercial).",
  ],
  faqs: [
    {
      question: "Do you relocate the animals you trap?",
      answer:
        "It depends on the species and what Florida wildlife rules allow. Some animals can be released on the property or nearby, while others have stricter handling requirements. We follow state rules for every animal we trap and will explain what happens to it before we start. We never use cruel methods.", // OWNER: confirm release and relocation practices
    },
    {
      question: "How long does it take to get animals out of my attic?",
      answer:
        "Most attic jobs take several days to a couple of weeks. The removal itself can be quick, but we wait until we're sure every animal, including any babies, is out before sealing the last opening. Closing up too early can trap an animal inside, which leads to more damage and a bad odor.",
    },
    {
      question: "What's digging holes in my lawn overnight?",
      answer:
        "In Jacksonville, overnight holes in the lawn are most often armadillo damage. Armadillos dig shallow, cone-shaped holes while hunting for grubs and worms in loose, sandy soil. Raccoons can also tear up fresh sod looking for food. We can trap the animal and help you reduce the grubs that keep drawing it back.",
    },
    {
      question: "What should I do if I find a snake in my house or garage?",
      answer:
        "Keep your distance, move kids and pets away, and call us. Most snakes around Jacksonville are harmless, but some species are hard to tell apart, and a few venomous snakes live in this area. If it's safe, close the door to that room. We'll remove the snake and look for how it got in.", // OWNER: confirm snake removal is offered
    },
  ],
  relatedServices: ["rodent-control", "lawn-pest-control", "general-pest-control"],
  lastUpdated: "2026-10-12",
};
