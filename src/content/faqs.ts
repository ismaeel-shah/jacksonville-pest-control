import type { FAQGroup } from "./types";

/**
 * FAQ page questions. Answers: 40-90 words, direct answer first, neutral voice.
 * Links to unpublished pages render as plain text.
 */
export const faqGroups: FAQGroup[] = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What pests can a local pest control pro treat in Jacksonville?",
        answer:
          "Local pest control pros treat the pests Northeast Florida homes and businesses deal with most: ants, cockroaches and palmetto bugs, spiders, termites, rodents, mosquitoes, fleas and ticks, bed bugs, stinging insects, and lawn pests. [General pest control](/general-pest-control) plans cover the everyday insects, while termites, bed bugs, and wildlife usually get their own specialized treatment plans.",
      },
      {
        question: "How often should I get pest control service in Florida?",
        answer:
          "Most Jacksonville homes do well with service every three months. Because Northeast Florida's climate keeps pests active all year, a quarterly exterior barrier plus interior treatment as needed stops most problems before they start. Homes with heavy activity, nearby water, or dense landscaping sometimes need bi-monthly service at first. Your technician will recommend a schedule after the inspection.",
      },
      {
        question: "Do I need to be home for my pest control service?",
        answer:
          "Not always. For routine exterior service, you usually don't need to be home as long as the technician can reach the yard and any gates are unlocked. For the first visit, interior treatments, termite work, and bed bug service, an adult should be home to walk through the property with the technician and ask questions.",
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
          "Termite swarms in Jacksonville happen mostly from late winter through late spring. Subterranean termites tend to swarm during the day after a warm rain, while Formosan termites usually swarm on humid evenings around lights. Swarmers inside your home are a strong sign of a nearby colony, so call to have a local pro inspect rather than just vacuuming them up.",
      },
      {
        question: "What is a WDO inspection and when do I need one?",
        answer:
          "A WDO (wood-destroying organism) inspection checks a home for termites, wood-decay fungi, and wood-boring beetles. Results go on an official Florida report used in real estate sales. Buyers usually order one during the inspection period, and many lenders require it. Learn more on the [WDO inspection page](/termite-inspection).",
      },
      {
        question: "Liquid treatment or bait stations: which is better for termites?",
        answer:
          "Both work well, and the right choice depends on your home. A liquid soil treatment creates a protective zone around the foundation and works quickly. Bait stations are placed around the yard, need less disruption to your property, and are monitored over time. During the inspection, the technician can explain which fits your home's construction and your preferences. See [termite control](/termite-control) for details.",
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
          "Yes, when products are applied correctly. Pest control pros use products registered for residential use and follow every label direction, which is what makes them safe. Keep children and pets away from treated areas until sprays have dried, usually 30 minutes to a few hours. Your technician will give you specific re-entry guidance for each treatment.", // OWNER: confirm typical drying-time guidance
      },
      {
        question: "Are eco-friendly or lower-impact treatment options available?",
        answer:
          "Yes. Many local providers follow Integrated Pest Management (IPM), which means inspecting first, fixing conditions that attract pests, sealing entry points, and using targeted baits or lower-impact products where they work. Broad spraying is avoided when a precise treatment will do. Read more about [eco-friendly pest control](/eco-friendly-pest-control) options.",
      },
      {
        question: "Should I leave my home during treatment?",
        answer:
          "For most routine treatments, no. You can stay home and simply avoid treated areas until they dry. Some specialized services, such as certain bed bug or fumigation treatments, do require leaving for a set time. If your treatment needs you to leave, the provider should tell you in advance and give you a clear preparation checklist.",
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling",
    faqs: [
      {
        question: "How do I schedule a pest control visit?",
        answer:
          "Call the number on this page to be connected with a local pest control pro who serves your part of Northeast Florida. Describe what you're seeing, where in the home, and how long it's been going on. The provider will talk through next steps and set a time that works for you. For urgent problems like stinging insect nests or rodents indoors, mention that on the call.",
      },
      {
        question: "What should I do to prepare for my first visit?",
        answer:
          "For most visits, clear access to the areas where you've seen pests, especially under kitchen and bathroom sinks, plus garage corners and the attic hatch. Put pet food and dishes away and secure pets during treatment. If you have a specific problem, like bed bugs, ask the provider for a detailed preparation checklist before the appointment.",
      },
      {
        question: "What happens if pests come back after treatment?",
        answer:
          "Some activity right after treatment is normal as pests come out of hiding and contact the product. If you're still seeing them after a week or two, contact your provider and describe what you're noticing so the technician can take another look. Before service starts, ask how follow-up visits work between scheduled treatments on a recurring plan.",
      },
    ],
  },
];
