import type { IndustryContent } from "../types";

export const offices: IndustryContent = {
  slug: "offices",
  published: true,
  name: "Offices",
  icon: "office",
  cardDescription: "Quiet pest control for break rooms, restrooms, and shared workspaces, scheduled so your team and clients never notice.",
  seo: {
    title: "Office Pest Control in Jacksonville, FL",
    description:
      "Office pest control in Jacksonville, FL. Ant, roach, and rodent control for break rooms and shared spaces, with quiet visits. Request a free site visit.",
    primaryKeyword: "office pest control Jacksonville",
    secondaryKeywords: ["office building pest control", "break room pest control", "medical office pest control", "commercial office pest control"],
  },
  hero: {
    h1: "Office Pest Control in Jacksonville, FL",
    subheadline: "A clean, comfortable workplace for your staff and clients, without interrupting the workday.",
    image: {
      file: "office-break-room-pest-inspection-jacksonville.webp",
      alt: "Technician inspecting under the sink cabinet in an office break room kitchenette",
    },
  },
  intro: [
    "Office pest control in Jacksonville is mostly about the little things. A line of ants on the break room counter or a roach in the restroom doesn't shut down your business, but it does make employees uncomfortable and clients wonder about the rest of the building.",
    "We help office managers, building owners, and small business owners keep workspaces clean and pest-free. That includes single-suite offices, multi-tenant buildings, coworking spaces, and medical and dental offices. Our service is low-key and scheduled to fit your week.",
  ],
  commonPests: {
    heading: "Pests Commonly Found in Office Buildings",
    items: [
      {
        title: "Ghost ants and other sweet-loving ants",
        description: "They find crumbs and spilled coffee in break rooms and around desks where people snack, often trailing along cords and baseboards.",
      },
      {
        title: "Cockroaches",
        description: "German roaches hide in kitchenettes, vending machines, and copy rooms, while palmetto bugs slip in through doors and drains.",
      },
      {
        title: "Mice and rats",
        description: "They nest above ceiling tiles and inside walls, chew wiring, and follow food left in desk drawers and pantry cabinets.",
      },
      {
        title: "Spiders and occasional invaders",
        description: "Spiders, silverfish, and crickets settle in storage rooms, stairwells, and quiet corners that don't get much foot traffic.",
      },
    ],
  },
  sections: [
    {
      heading: "Break Rooms, Restrooms, and Shared Spaces",
      body: [
        "Pests in an office almost always gather where there's food and water. We focus on kitchenettes, coffee stations, vending areas, restrooms, and conference rooms where catered lunches are served. Under sinks, behind refrigerators, and inside cabinet voids are the usual hiding spots.",
        "Ants are often the first sign of trouble, especially after heavy rain. We follow trails back to where they're coming in and use baits that the colony carries home, which is how lasting [ant control](/ant-control) works.",
      ],
      bullets: [
        "Break rooms, kitchenettes, and coffee stations",
        "Restrooms and janitorial closets",
        "Conference rooms and reception areas",
        "Mail rooms, storage, and server rooms",
      ],
    },
    {
      heading: "Service That Doesn't Interrupt the Workday",
      body: [
        "Nobody wants a technician working around their desk during a client call. We can schedule visits early in the morning, after hours, or on weekends, and we keep inside work focused and quiet.", // OWNER: confirm after-hours availability
        "Most office treatments use baits, crack-and-crevice applications, and monitors rather than broad spraying. That means little to no odor and no need to clear the floor. Your technician will explain any re-entry times based on the product label before work begins.",
      ],
    },
    {
      heading: "Medical, Dental, and Multi-Tenant Offices",
      body: [
        "Medical and dental offices need extra care because patients expect spotless rooms. We plan service around patient hours, avoid exam and treatment areas when possible, and use careful, targeted methods. [Ask us about a plan for your practice](/contact).",
        "In multi-tenant buildings, pests move between suites through shared walls and ceilings. We work with property managers to cover common hallways, lobbies, and restrooms, and we can service individual suites as part of one building-wide program.",
      ],
    },
  ],
  process: {
    heading: "How Our Office Pest Program Works",
    steps: [
      { title: "Walkthrough", description: "We tour your break rooms, restrooms, storage areas, and exterior, and ask your staff where they've seen pests." },
      { title: "Simple plan", description: "We recommend a service schedule and treatment approach that fits your space and your office hours." },
      { title: "Quiet service", description: "We service at agreed times, check monitors, treat as needed, and leave a short report." },
      { title: "Quick follow-up", description: "If an employee spots a pest between visits, call us and we'll come back to take care of it." },
    ],
  },
  faqs: [
    {
      question: "Do employees need to leave the office during treatment?",
      answer:
        "Usually not. Most routine office service uses baits and small, targeted treatments in cracks and under cabinets, so people can keep working nearby. If a treatment does require an area to be empty for a while, we'll tell you ahead of time and schedule it when the space is closed.",
    },
    {
      question: "Why do we keep seeing ants in our break room?",
      answer:
        "Ants keep coming back because they're finding food and a way in. Crumbs, sticky counters, open sugar, and dirty coffee makers are common draws. Spraying the ants you see often scatters the colony. We use baits that reach the nest and seal entry points to keep new trails from forming.",
    },
    {
      question: "Who is responsible for pest control in a leased office?",
      answer:
        "It depends on your lease. Often the landlord or property manager handles common areas and the exterior, while tenants handle their own suite. Check your lease or ask your property manager. We work with both tenants and building managers and can coordinate so nothing falls through the cracks.",
    },
    {
      question: "What can our staff do to help keep pests away?",
      answer:
        "A few easy habits help a lot. Store snacks in sealed containers, wipe counters at the end of the day, empty break room trash nightly, and don't leave dirty dishes in the sink. Report any sightings to your office manager so we can respond quickly before a small problem grows.",
    },
  ],
  relatedServices: ["ant-control", "cockroach-control", "rodent-control"],
  lastUpdated: "2026-10-12",
};
