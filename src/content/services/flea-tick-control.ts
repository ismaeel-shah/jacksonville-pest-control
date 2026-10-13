import type { ServiceContent } from "../types";

export const fleaTickControl: ServiceContent = {
  slug: "flea-tick-control",
  published: true,
  name: "Flea & Tick Control",
  navLabel: "Fleas & Ticks",
  icon: "flea",
  audience: ["residential"],
  cardDescription: "Inside-and-out flea and tick treatment for pet households, timed to work with your vet's care.",
  seo: {
    title: "Flea & Tick Control in Jacksonville, FL | Home & Yard",
    description:
      "Flea and tick control in Jacksonville, FL that treats your home and yard while your vet cares for your pets. Clear prep steps and follow-up. Call us today.",
    primaryKeyword: "flea and tick control Jacksonville FL",
    secondaryKeywords: ["flea exterminator", "flea treatment for house", "tick yard treatment", "fleas in carpet"],
  },
  hero: {
    h1: "Flea & Tick Control in Jacksonville, FL",
    subheadline: "Break the flea cycle in your home and yard, so your pets and your family can get back to normal.",
    image: {
      file: "flea-tick-yard-treatment-jacksonville-shaded-fence-line.webp",
      alt: "Technician treating a shaded area along a backyard fence where a dog rests in a Jacksonville yard",
    },
  },
  intro: [
    "If your dog won't stop scratching or you're finding itchy bites around your ankles, fleas have probably moved in. Ticks are a quieter problem, but they turn up on pets and people after time in shady yards and wooded edges.",
    "Our flea and tick control treats the places pests live when they're not on your pet: carpets, furniture, pet bedding, and the shaded parts of your yard. We don't treat animals. Instead, we time our work with the flea and tick product your veterinarian recommends, so the home, yard, and pet are all covered at once. Hitting all three is what finally ends the cycle.",
  ],
  localProblem: {
    heading: "Why Fleas and Ticks Thrive in Jacksonville",
    body: [
      "In colder states, fleas and ticks slow down in winter. Here, warm temperatures and high humidity let them stay active most of the year, with the heaviest pressure from spring through fall. Shady yards, thick ground cover, and moist soil give flea larvae and ticks the damp spots they need.",
      "Raccoons, opossums, squirrels, and stray cats carry fleas and ticks through Jacksonville neighborhoods and drop them in yards and under decks. Homes near wooded lots, creeks, and marsh edges tend to see more ticks.",
      "Most of a flea problem isn't on the pet at all. Eggs fall into carpets and bedding and develop out of sight for weeks, so treating only the pet, or only the house, rarely works for long.",
    ],
  },
  signs: {
    heading: "Signs of Fleas or Ticks",
    items: [
      { title: "Pets scratching or chewing their skin", description: "Constant scratching, especially around the neck, back, and base of the tail." },
      { title: "Flea dirt on pets or bedding", description: "Tiny black specks that turn reddish when pressed on a damp paper towel." },
      { title: "Bites around ankles", description: "Small, very itchy red bumps, often in clusters, after walking through carpeted rooms." },
      { title: "Jumping insects on carpets", description: "Tiny dark-brown bugs that hop when disturbed. White socks make them easy to spot." },
      { title: "Ticks on pets after yard time", description: "Small, flat or swollen bugs clinging near ears, between toes, or under the collar." },
      { title: "Fleas returning after a pet treatment", description: "If fleas keep showing up despite a vet-recommended product, the home is likely the source." },
    ],
  },
  process: {
    heading: "Our Flea and Tick Treatment Process",
    steps: [
      { title: "Inspection inside and out", description: "We find where pets rest and where fleas and ticks are concentrated, from bedrooms to shady corners of the yard." },
      { title: "Prep checklist and vet coordination", description: "We send you prep steps and ask you to schedule your pet's flea and tick treatment with your vet around the same time." },
      { title: "Interior treatment", description: "We treat carpets, rugs, furniture, and pet areas, often including a growth regulator that stops young fleas from maturing." },
      { title: "Yard treatment", description: "We treat shaded areas, fence lines, under decks, and other spots where pets and wildlife spend time." },
      { title: "Follow-up visit", description: "We come back to treat fleas that hatch from protected pupae after the first visit." }, // OWNER: confirm standard follow-up timing for flea jobs
    ],
  },
  treatmentOptions: {
    heading: "Flea and Tick Treatment Options",
    intro: [
      "Most homes need both inside and outside treatment, but the balance depends on where the problem started and where your pets spend time.",
    ],
    options: [
      {
        title: "Indoor treatment with growth regulators",
        description:
          "Treating carpets, furniture, and pet areas kills adult fleas, while a growth regulator stops eggs and larvae from becoming biting adults. This is the core of most flea jobs.",
      },
      {
        title: "Yard treatment",
        description:
          "Focused on shade, ground cover, and resting spots rather than open sunny lawn, where fleas and ticks don't survive as well. It cuts down on pests hitching a ride back inside.",
      },
      {
        title: "Recurring yard program",
        description:
          "For homes near woods or with heavy wildlife traffic, scheduled yard treatments during the warm months help keep ticks and fleas from building back up.", // OWNER: confirm recurring flea/tick yard program is offered
      },
    ],
  },
  safety: {
    heading: "Is Flea and Tick Treatment Safe for Kids and Pets?",
    body: [
      "Yes, when everyone follows the timing your technician gives you. We use products registered for flea and tick control and apply them according to the label. People and pets stay out of treated rooms and off the treated yard until everything has dried.",
      "We never apply products to your animals. That's your veterinarian's job. Cover or remove fish tanks and birdcages before we arrive, and tell us about any family members with health concerns.",
    ],
  },
  costFactors: [
    { title: "Size of the home", description: "More rooms and carpeted space mean more area to treat indoors." },
    { title: "Yard size and shade", description: "Large, shady yards with lots of ground cover take more time to treat than small, sunny ones." },
    { title: "How established the fleas are", description: "A problem that's been building for months usually needs more thorough work and follow-up." },
    { title: "Inside only or inside and out", description: "Treating both the home and the yard is a bigger job than either one alone." },
    { title: "Follow-up visits", description: "Heavier flea problems often need an extra return visit to catch late-hatching fleas." },
    { title: "Number of pets and wildlife pressure", description: "Multiple pets or regular wildlife visits can widen the area that needs treatment." },
  ],
  prevention: {
    heading: "Prep and Prevention Tips",
    tips: [
      "Before treatment, vacuum all carpets, rugs, and furniture, then empty the vacuum outside into a sealed trash bag.",
      "Wash pet bedding, throw blankets, and pillows in hot water and dry them on high heat.",
      "Keep your pets on a year-round flea and tick product recommended by your veterinarian.",
      "Keep grass mowed, rake leaves, and trim shrubs to let sunlight into shady spots.",
      "Block access under decks and sheds so raccoons, opossums, and strays can't bed down there.",
      "Keep vacuuming often for a few weeks after treatment to bring fleas out of hiding.",
    ],
  },
  faqs: [
    {
      question: "Do you treat my pets for fleas?",
      answer:
        "No. We treat your home and yard, but we never apply products to animals. Your veterinarian is the right person to choose a flea and tick product for your pet based on its age, size, and health. For best results, have your pet treated around the same time as our service, so fleas have nowhere left to hide.",
    },
    {
      question: "Why am I still seeing fleas after treatment?",
      answer:
        "Some fleas after treatment are normal for a few weeks. Flea pupae sit inside tough cocoons and hatch over time when they sense movement or warmth, then contact the treated surfaces. Vacuuming often encourages hatching. If you're still seeing many fleas after a few weeks, call us.",
    },
    {
      question: "How long do we need to stay out of the house?",
      answer:
        "Most families stay out until the treated areas are completely dry, which usually takes a few hours. Drying time depends on humidity, airflow, and carpet thickness, so open windows or run fans if you can. Your technician will tell you when it's safe for people and pets to come back in and walk on treated floors.", // OWNER: confirm typical re-entry time for flea treatment
    },
    {
      question: "Can I get fleas without having pets?",
      answer:
        "Yes. Fleas can come from wildlife living under a deck or in a crawl space, from a previous owner's pets, or from stray cats resting near doors. People don't keep fleas going the way pets do, but hungry fleas will bite humans. If you have no pets and see fleas, we'll look for the animal source too.",
    },
  ],
  relatedServices: ["wildlife-removal", "lawn-pest-control", "mosquito-control"],
  lastUpdated: "2026-10-12",
};
