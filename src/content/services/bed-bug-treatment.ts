import type { ServiceContent } from "../types";

export const bedBugTreatment: ServiceContent = {
  slug: "bed-bug-treatment",
  published: true,
  name: "Bed Bug Treatment",
  navLabel: "Bed Bugs",
  icon: "bed",
  audience: ["residential", "commercial"],
  cardDescription: "Thorough bed bug inspections, treatment, and follow-up visits for homes, apartments, and hotels.",
  seo: {
    title: "Bed Bug Treatment in Jacksonville, FL | Call a Local Pro",
    description:
      "Bed bug treatment in Jacksonville, FL with a careful inspection, a clear prep checklist, and follow-up visits. Call to speak with a local pest control pro.",
    primaryKeyword: "bed bug treatment Jacksonville FL",
    secondaryKeywords: ["bed bug exterminator", "bed bug inspection", "bed bug heat treatment", "signs of bed bugs", "bed bugs in apartments"],
  },
  hero: {
    h1: "Bed Bug Treatment in Jacksonville, FL",
    subheadline: "Get a good night's sleep again with a careful inspection, a plan that fits your home, and follow-up visits to confirm the bugs are gone.",
    image: {
      file: "bed-bug-inspection-jacksonville-mattress-seam.webp",
      alt: "Technician using a flashlight to check mattress seams and a headboard for bed bugs in a Jacksonville bedroom",
    },
  },
  intro: [
    "Finding bed bugs is stressful, and it has nothing to do with how clean your home is. These small, flat insects ride in on luggage, used furniture, and even clothing, then hide in mattress seams and bed frames and come out at night to feed.",
    "Bed bug treatment in Jacksonville begins with a close inspection to confirm what you have and how far it has spread. A local pest control pro walks you through a simple preparation checklist, treats every room where bugs are found, and comes back for follow-up visits. Eggs can survive one treatment, so checking again is how you know the problem is truly over.",
  ],
  localProblem: {
    heading: "Why Bed Bugs Show Up in Jacksonville Homes",
    body: [
      "Bed bugs don't care about the weather. They live indoors, close to people, so they're as active in January as in July. What spreads them is movement, and Jacksonville has plenty: an airport, cruise traffic, military moves, and beach visitors.",
      "**Apartments and condos** are a common source, since bed bugs can travel between units along pipes, wiring, and shared walls. **Used furniture** is another. A mattress or couch picked up from the curb or an online listing can bring an infestation home in one trip. Bed bugs aren't known to spread disease, but their bites itch and the worry steals sleep.",
    ],
  },
  signs: {
    heading: "Signs You Have Bed Bugs",
    intro: "Bed bugs hide during the day. Check your bed and nearby furniture for these clues.",
    items: [
      { title: "Itchy bites in a line or cluster", description: "Red welts in rows of three or four, often noticed in the morning. Some people don't react at all." },
      { title: "Rusty or dark spots on sheets", description: "Blood smears from crushed bugs, or tiny black dots of droppings on bedding and the mattress." },
      { title: "Shed skins", description: "Pale, empty shells left behind as bed bugs grow, often tucked along seams." },
      { title: "Live bugs in seams and crevices", description: "Flat, reddish-brown insects about the size of an apple seed in mattress piping and headboard joints." },
      { title: "Tiny white eggs", description: "Grain-sized eggs stuck in cracks of the bed frame, nightstand, or nearby baseboards." },
    ],
  },
  process: {
    heading: "How Bed Bug Treatment Works",
    steps: [
      { title: "Room-by-room inspection", description: "The technician checks beds, furniture, baseboards, and nearby rooms to confirm bed bugs and map how far they've spread." },
      { title: "Your preparation checklist", description: "You get a list of what to wash, bag, and move, so treatment reaches every hiding spot." },
      { title: "Treatment of every affected area", description: "Beds, furniture, cracks, and voids are treated using the method that best fits your home." },
      { title: "Follow-up visits", description: "The technician returns to inspect and treat again as needed, catching bugs that hatch after the first visit." },
      { title: "Final check", description: "Once no more activity is found, you get tips to help you avoid bringing bed bugs home again." },
    ],
  },
  treatmentOptions: {
    heading: "Bed Bug Treatment Options",
    intro: [
      "The best method depends on how widespread the bugs are and what's in the rooms. Ask your technician to explain the trade-offs before treatment starts.",
    ],
    options: [
      {
        title: "Heat treatment",
        description:
          "Special equipment raises room temperatures high enough to kill bed bugs and their eggs, reaching places sprays can't. It's often done in one day, but some heat-sensitive items must be removed first.",
      },
      {
        title: "Targeted chemical treatment",
        description:
          "Products labeled for bed bugs are applied to cracks, seams, furniture joints, and wall voids. It usually takes more than one visit to reach bugs that hatch later.",
      },
      {
        title: "Combined approach",
        description:
          "For heavier infestations, a technician may pair heat with targeted treatments and mattress encasements to catch bugs that escape to nearby areas.",
      },
    ],
  },
  safety: {
    heading: "Is Bed Bug Treatment Safe for Kids and Pets?",
    body: [
      "It can be, when it's planned carefully. Products registered for bed bug control should be applied as the label directs, mostly into cracks, seams, and voids rather than across open surfaces. Heat treatment uses no pesticides, but rooms get very hot, so people and pets stay out until it's done.",
      "Tell your technician about babies, pets, fish tanks, or health concerns before treatment day. Your technician will tell you when it's safe to use treated rooms and beds again.",
    ],
  },
  prevention: {
    heading: "Bed Bug Prep and Prevention Tips",
    tips: [
      "Before treatment, wash bedding, curtains, and clothing from affected rooms in hot water, dry on high heat, and seal them in clean plastic bags.",
      "Pull beds a few inches from walls and clear items from floors, under beds, and closets so the technician can reach every area.",
      "Don't move furniture or belongings into other rooms, which can spread bugs.",
      "When traveling, keep luggage on a rack and check the hotel headboard and mattress seams.",
      "Inspect used furniture closely before it comes inside, and skip curbside mattresses and couches.",
      "Use bed bug-proof encasements on mattresses and box springs to remove hiding spots.",
    ],
  },
  forBusinesses: [
    "Hotels, apartment communities, and short-term rentals can't wait on bed bugs. A local pest control pro can handle unit inspections, treatment, and records of the work. Learn more about [commercial pest control](/commercial).",
  ],
  faqs: [
    {
      question: "How long does it take to get rid of bed bugs?",
      answer:
        "Most bed bug jobs take a few weeks from the first treatment to the final check. Heat treatment can kill bugs and eggs in one day, but a return visit still confirms nothing survived. Targeted chemical treatment usually needs two or more visits spaced apart to catch bugs as eggs hatch.",
    },
    {
      question: "Can I get rid of bed bugs myself?",
      answer:
        "Full removal on your own is hard. Hot laundry, vacuuming, and encasements can slow a small problem, but bed bugs hide deep in cracks and furniture joints, and store-bought foggers often scatter them into new rooms. If you're still getting bites after a week or two, a professional inspection saves time and frustration.",
    },
    {
      question: "Do I have to throw away my mattress?",
      answer:
        "Usually not. Most mattresses and box springs can be treated and then covered with bed bug-proof encasements, which trap remaining bugs and keep new ones out. Replacing a mattress without treating the room rarely helps, because bugs also live in the frame, nightstands, and walls nearby.",
    },
    {
      question: "Can bed bugs spread between apartments?",
      answer:
        "Yes. Bed bugs can crawl through gaps around pipes, wiring, and outlets in shared walls, and ride on belongings in hallways and laundry rooms. Tell your landlord or property manager right away. Inspecting the units beside, above, and below yours gives treatment the best chance of working for good.",
    },
  ],
  relatedServices: ["general-pest-control", "flea-tick-control", "eco-friendly-pest-control"],
  lastUpdated: "2026-10-16",
};
