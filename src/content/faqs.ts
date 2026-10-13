import type { FAQGroup } from "./types";

/**
 * FAQ page questions. Answers: 40-90 words, direct answer first, factors (never
 * prices) for cost questions. Links to unpublished pages render as plain text.
 */
export const faqGroups: FAQGroup[] = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What pests do you treat in Jacksonville?",
        answer:
          "We treat the pests Northeast Florida homes and businesses deal with most: ants, cockroaches and palmetto bugs, spiders, termites, rodents, mosquitoes, fleas and ticks, bed bugs, stinging insects, and lawn pests. Our [general pest control](/general-pest-control) plans cover the everyday insects, while termites, bed bugs, and wildlife get their own specialized treatment plans.",
      },
      {
        question: "How often should I get pest control service in Florida?",
        answer:
          "Most Jacksonville homes do well with service every three months. Because our climate keeps pests active all year, a quarterly exterior barrier plus interior treatment as needed stops most problems before they start. Homes with heavy activity, nearby water, or dense landscaping sometimes need bi-monthly service at first. Your technician will recommend a schedule after the inspection.",
      },
      {
        question: "Do I need to be home for my pest control service?",
        answer:
          "Not always. For routine exterior service, you don't need to be home as long as we can reach the yard and any gates are unlocked. For the first visit, interior treatments, termite work, and bed bug service, an adult should be home so we can walk through the property together and answer your questions.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. Pest control companies in Florida must be licensed by the Florida Department of Agriculture and Consumer Services (FDACS), and we carry liability insurance on every job. You can find our license number in the footer of every page and on our [About page](/about). We're happy to share proof of insurance for commercial accounts.",
      },
    ],
  },
  {
    id: "termites",
    title: "Termites",
    faqs: [
      {
        question: "How do I know if I have termites?",
        answer:
          "The most common signs are pencil-wide mud tubes on foundation walls, piles of discarded wings near windows and doors, and wood that sounds hollow when tapped. Many homeowners first notice winged termites swarming indoors in spring. Termites often cause damage out of sight, so a professional [termite inspection](/termite-inspection) is the most reliable way to know for sure.",
      },
      {
        question: "When is termite swarm season in Jacksonville?",
        answer:
          "Termite swarms in Jacksonville happen mostly from late winter through late spring. Subterranean termites tend to swarm during the day after a warm rain, while Formosan termites usually swarm on humid evenings around lights. Swarmers inside your home are a strong sign of a nearby colony, so call for an inspection rather than just vacuuming them up.",
      },
      {
        question: "What is a WDO inspection and when do I need one?",
        answer:
          "A WDO (wood-destroying organism) inspection checks a home for termites, wood-decay fungi, and wood-boring beetles. Results go on an official Florida report form used in real estate sales. Buyers usually order one during the inspection period, and many lenders require it. Learn more on our [WDO inspection page](/termite-inspection).",
      },
      {
        question: "Liquid treatment or bait stations: which is better for termites?",
        answer:
          "Both work well, and the right choice depends on your home. A liquid soil treatment creates a protective zone around the foundation and works quickly. Bait stations are placed around the yard, need less disruption to your property, and are monitored over time. During the inspection we'll explain which fits your home's construction and your preferences. See [termite control](/termite-control) for details.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    faqs: [
      {
        question: "Is pest control safe for kids and pets?",
        answer:
          "Yes, when products are applied correctly. We use products registered for residential use and follow every label direction, which is what makes them safe. Keep children and pets away from treated areas until sprays have dried, usually 30 minutes to a few hours. Your technician will give you specific re-entry guidance for each treatment.", // OWNER: confirm typical drying-time guidance
      },
      {
        question: "Do you offer eco-friendly or lower-impact treatment options?",
        answer:
          "Yes. We follow Integrated Pest Management (IPM), which means we inspect first, fix conditions that attract pests, seal entry points, and use targeted baits or lower-impact products where they work. We avoid broad spraying when a precise treatment will do. Read more about our [eco-friendly pest control](/eco-friendly-pest-control) options.",
      },
      {
        question: "Should I leave my home during treatment?",
        answer:
          "For most routine treatments, no. You can stay home and simply avoid treated areas until they dry. Some specialized services, such as certain bed bug or fumigation treatments, do require leaving for a set time. If your treatment needs you to leave, we'll tell you in advance and give you a clear preparation checklist.",
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling",
    faqs: [
      {
        question: "How quickly can you come out?",
        answer:
          "We often schedule inspections within a day or two, and same-day visits are sometimes available for urgent problems like stinging insect nests or rodents inside the home. Call us for the fastest scheduling, or send the form on our [contact page](/contact) and we'll call you back to set a time.", // OWNER: confirm typical response time
      },
      {
        question: "What should I do to prepare for my first visit?",
        answer:
          "For most visits, clear access to the areas where you've seen pests, especially under kitchen and bathroom sinks, plus garage corners and the attic hatch. Put pet food and dishes away and secure pets during treatment. If you have a specific problem, like bed bugs, we'll send a detailed checklist before your appointment.",
      },
      {
        question: "What happens if pests come back after treatment?",
        answer:
          "If pests come back between scheduled services on a protection plan, call us and we'll re-treat at no extra cost. Some activity right after treatment is normal as pests come out of hiding. If you're still seeing them after a week or two, let us know and we'll come take another look.", // OWNER: confirm guarantee terms
      },
    ],
  },
  {
    id: "cost",
    title: "Cost",
    faqs: [
      {
        question: "How much does pest control cost in Jacksonville?",
        answer:
          "It depends on your home and your pest problem. The main factors are your home's size, the type of pest, how severe the infestation is, the treatment method, and whether you need a one-time visit or a recurring plan. Access to crawl spaces and attics matters too. Call us for a free inspection and an accurate, upfront quote.",
      },
      {
        question: "Why don't you list prices on your website?",
        answer:
          "Because a price without an inspection is usually just a guess. Two homes on the same street can have very different problems. A small ant issue and a colony living in the walls need different treatments. We'd rather look first and give you one honest number than advertise a low price that changes when we arrive.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. After the free inspection, we give you a clear quote that explains what's included. If the plan needs to change, for example because we find a second pest problem, we'll explain why and get your approval before doing any additional work. You'll never be surprised by charges you didn't agree to.", // OWNER: confirm "no hidden fees" claim
      },
    ],
  },
];
