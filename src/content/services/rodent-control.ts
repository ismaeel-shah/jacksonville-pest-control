import type { ServiceContent } from "../types";

export const rodentControl: ServiceContent = {
  slug: "rodent-control",
  published: true,
  name: "Rodent Control",
  navLabel: "Rodent Control",
  icon: "rodent",
  audience: ["residential", "commercial"],
  cardDescription: "Trapping and exclusion for roof rats, Norway rats, and house mice, so they're removed and can't get back in.",
  seo: {
    title: "Rodent Control in Jacksonville, FL | Free Inspection",
    description:
      "Rodent control in Jacksonville, FL for roof rats, Norway rats, and mice. We trap, seal entry points, and clean up so they stay out. Call for a free inspection.",
    primaryKeyword: "rodent control Jacksonville FL",
    secondaryKeywords: ["roof rats", "rats in attic", "mouse control", "rodent exclusion", "rat removal"],
  },
  hero: {
    h1: "Rodent Control in Jacksonville, FL",
    subheadline: "Get rats and mice out of your attic and walls for good, by removing them and sealing the way in.",
    image: {
      file: "rodent-control-jacksonville-attic-exclusion.webp",
      alt: "Technician sealing a gap at the roofline of a Jacksonville home to keep roof rats out of the attic",
    },
  },
  intro: [
    "Scratching in the ceiling at 2 a.m. is not something you get used to. Rats and mice chew wiring, ruin attic insulation, and leave droppings wherever they travel.",
    "Our rodent control focuses on fixing the problem at its source. We inspect your home to find how rodents are getting in, trap the ones already inside, and then seal the entry points so new ones can't follow. When the activity stops, we can help clean up the mess they left behind. It's a more lasting fix than tossing out poison and hoping for the best, and it keeps rodents from dying somewhere inside your walls.",
  ],
  localProblem: {
    heading: "Why Rats and Mice Are a Problem in Jacksonville",
    body: [
      "**Roof rats** are the rodent we see most in Northeast Florida. They're excellent climbers that travel along oak limbs, palm fronds, fences, and power lines, then slip into attics through gaps at the roofline. Fruit trees, bird feeders, and dense vines make a yard even more inviting.",
      "**Norway rats** are heavier and stay closer to the ground. They burrow under slabs, sheds, and woodpiles and often come in through garages and crawl spaces. **House mice** can squeeze through a gap about the width of a pencil and nest inside walls and cabinets.",
      "Our mild winters let rodents breed most of the year, and cool fall nights push many indoors.",
    ],
  },
  signs: {
    heading: "Signs You Have Rats or Mice",
    intro: "Rodents are active at night, so you'll often notice what they leave behind before you see one.",
    items: [
      { title: "Noises at night", description: "Scratching, running, or gnawing sounds in the attic, ceiling, or walls after dark." },
      { title: "Droppings", description: "Dark pellets in the attic, garage, pantry, or under sinks. Rat droppings are larger than mouse droppings." },
      { title: "Gnaw marks", description: "Chewed wires, wood, plastic, or food packaging, often with fresh, light-colored edges." },
      { title: "Grease marks along walls", description: "Dark smudges where rodents brush against beams, pipes, or entry holes over and over." },
      { title: "Damaged attic insulation", description: "Trampled paths, tunnels, or shredded nesting material in the insulation." },
      { title: "Half-eaten fruit in the yard", description: "Hollowed-out citrus or avocados still on the tree are a classic roof rat sign." },
      { title: "Pets acting strange", description: "Dogs or cats staring at or pawing one wall may hear rodents." },
    ],
  },
  process: {
    heading: "Our Rodent Control Process",
    steps: [
      { title: "Full inspection", description: "We check the roofline, attic, soffits, vents, garage, and foundation to find entry points and activity." },
      { title: "Trapping", description: "We set traps in the attic and other active areas, then return to check and remove them on a set schedule." }, // OWNER: confirm trap check schedule
      { title: "Exclusion", description: "We seal gaps and entry points with durable materials like metal flashing, hardware cloth, and sealant that rodents can't chew through." },
      { title: "Sanitation and cleanup", description: "Once activity stops, we can remove droppings and nesting material and sanitize affected areas." }, // OWNER: confirm cleanup and insulation services offered
      { title: "Follow-up", description: "A return visit confirms no new activity and that all seals are holding." },
    ],
  },
  treatmentOptions: {
    heading: "Rodent Control Options",
    intro: [
      "Most homes need a combination of methods. Here's how each one fits in.",
    ],
    options: [
      {
        title: "Trapping inside the home",
        description: "Traps remove rodents that are already inside, and we can confirm the catch instead of guessing where they went.",
      },
      {
        title: "Exclusion and sealing",
        description: "The most important step for long-term results. Without sealing entry points, new rodents will keep finding the same way in.",
      },
      {
        title: "Exterior bait stations",
        description: "Locked, tamper-resistant stations placed outside can reduce rodent numbers around the property before they reach the house.",
      },
      {
        title: "Why we avoid poison-only treatment indoors",
        description: "Rodents that eat poison often die inside walls or the attic, causing odors and attracting flies. Poison also doesn't fix how they got in.",
      },
    ],
  },
  safety: {
    heading: "Is Rodent Control Safe for Kids and Pets?",
    body: [
      "We plan every job with your family and pets in mind. Traps inside the home go in places kids and pets can't reach, like the attic, behind appliances, or in enclosed boxes.",
      "If we use bait outside, it goes inside locked, tamper-resistant stations, and we use only products registered for that purpose, applied according to the label. Tell us about outdoor pets or nearby wildlife so we can place stations carefully. Your technician will also explain how to stay safe around droppings until cleanup is done.",
    ],
  },
  costFactors: [
    { title: "Type of rodent", description: "Roof rats, Norway rats, and mice use different routes into a home and need different trap placement." },
    { title: "Number of entry points", description: "Exclusion work depends on how many gaps, vents, and openings need to be sealed." },
    { title: "Roof height and access", description: "Two-story homes, steep roofs, and tight attics take more time and equipment to reach safely." },
    { title: "Length of trapping", description: "A larger or longer-established population takes more trap checks before activity stops." },
    { title: "Cleanup needed", description: "Removing droppings, nesting, or damaged insulation is extra work beyond trapping and sealing." },
    { title: "Ongoing monitoring", description: "Exterior bait stations and regular checks are an optional add-on after the main job." },
  ],
  prevention: {
    heading: "How to Keep Rodents Out",
    tips: [
      "Trim tree limbs and palm fronds back several feet from your roof.",
      "Pick up fallen fruit and harvest ripe citrus and avocados quickly.",
      "Store bird seed, pet food, and grass seed in sealed metal or hard plastic containers.",
      "Keep garbage cans tightly closed and away from the side of the house.",
      "Close garage doors at night and fix gaps along the bottom seal.",
      "Move woodpiles and clutter away from the foundation.",
    ],
  },
  forBusinesses: [
    "Rodents can cause failed inspections and damaged stock. We set up monitoring and exclusion programs for restaurants, warehouses, and apartment communities. Learn more about our [commercial pest control](/commercial).",
  ],
  faqs: [
    {
      question: "How do I know if it's rats or squirrels in my attic?",
      answer:
        "The timing of the noise is the best clue. Rats are most active at night, while squirrels are busy in the early morning and daytime. Rat droppings are small and dark, and squirrel damage is usually larger holes at the roofline. If raccoons or squirrels are the problem, our [wildlife removal](/wildlife-removal) service can help.",
    },
    {
      question: "How long does it take to get rid of roof rats?",
      answer:
        "Most homes see activity stop within a few weeks once trapping and exclusion are done together. The exact time depends on how many rats are inside and how many entry points need sealing. We keep checking traps until there's no new activity, then make sure the sealed openings are holding before we close out the job.", // OWNER: confirm typical timeline
    },
    {
      question: "Why not just put rat poison in the attic?",
      answer:
        "Poison alone usually creates new problems. A rat that eats bait can crawl into a wall void and die there, leaving a strong odor for weeks. Poison can also harm pets or other animals, and it does nothing to stop new rats from coming in. Trapping plus sealing entry points is cleaner and longer lasting.",
    },
    {
      question: "Are rodent droppings dangerous to clean up?",
      answer:
        "They can be, so take care. Rodent droppings and urine can carry germs, and sweeping or vacuuming them dry can stir up dust. If you clean small areas yourself, wear gloves, wet the area with a disinfectant first, and wipe it up instead of sweeping. For heavy attic contamination, professional cleanup is the safer choice.",
    },
  ],
  relatedServices: ["wildlife-removal", "general-pest-control", "moisture-control"],
  lastUpdated: "2026-10-12",
};
