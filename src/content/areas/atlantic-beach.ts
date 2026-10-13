import type { AreaContent } from "../types";

export const atlanticBeach: AreaContent = {
  slug: "atlantic-beach",
  published: true,
  name: "Atlantic Beach",
  region: "beaches",
  hubBlurb: "Shady maritime oaks, marsh on the west side, and Navy families near Mayport. Termites in older cottages and new rebuilds lead our list here.",
  seo: {
    title: "Pest Control in Atlantic Beach, FL | Termites & More",
    description:
      "Atlantic Beach, FL pest control for termites, rodents and no-see-ums. Help for older cottages, rebuilds and Navy families near Mayport. Book a free inspection.",
    primaryKeyword: "pest control Atlantic Beach FL",
    secondaryKeywords: ["termite control Atlantic Beach", "no-see-ums Atlantic Beach", "pest control near Naval Station Mayport", "32233 exterminator"],
  },
  hero: {
    h1: "Pest Control in Atlantic Beach, FL",
    subheadline: "Careful pest and termite protection for homes under the oak canopy, from original cottages to brand-new rebuilds.",
    image: {
      file: "atlantic-beach-cottage-under-maritime-oaks.webp",
      alt: "Small coastal cottage under twisted maritime live oaks on a shady Atlantic Beach street",
    },
  },
  intro: [
    "Atlantic Beach feels different from its neighbors. Many streets sit under low, twisted maritime oaks, and the city works hard to keep that canopy. The west side of town runs out to the salt marsh and the Intracoastal Waterway, with places like Dutton Island Preserve tucked into the marsh.",
    "That mix of shade, sand, and salt water shapes the pests we find. Termites thrive in humid, sandy soil. Roof rats travel through the oak limbs. No-see-ums and salt-marsh mosquitoes drift in from the wetlands on still evenings. Add a steady flow of Navy families moving in and out near Naval Station Mayport, and you get plenty of move-in inspections and WDO reports for home sales. Whether you've lived near the old town center for decades or just got orders to Mayport, we'll explain what we find in plain terms and suggest only what your home needs.",
  ],
  commonPests: {
    heading: "What Bugs Atlantic Beach Homes",
    intro: ["These four pests account for most of our Atlantic Beach visits."],
    pests: [
      {
        name: "Subterranean termites",
        why: "Original beach cottages have older wood, and new homes built on cleared lots disturb termite colonies already in the soil. Both are common side by side in Atlantic Beach.",
      },
      {
        name: "Roof rats",
        why: "Wide, low oak branches reach over many roofs here. Rats use them to get to soffits and attic vents, then nest in insulation during cooler months.",
      },
      {
        name: "No-see-ums",
        why: "The marsh around Dutton Island and along the Intracoastal is ideal breeding ground. Homes on the west side of town tend to feel them most at sunset.",
      },
      {
        name: "Salt-marsh mosquitoes",
        why: "High tides and summer rain flood the marsh edges, and mosquitoes hatch in large numbers afterward. Steady ocean breezes help on the east side, but marsh-side yards stay buggy.",
      },
    ],
  },
  homes: {
    heading: "Old Cottages, New Rebuilds, and Navy Rentals",
    body: [
      "Atlantic Beach has a lot of teardowns. A small 1950s block home might sit right next to a new two-story house. Older homes often have aging wood trim and gaps around windows. New construction should get a soil treatment before the slab is poured, so ask your builder about [pre-construction termite treatment](/pre-construction-termite-treatment) early.", // OWNER: confirm teardown and rebuild trend is accurate for current market
      "The city has rules that protect many larger trees. Check with the city before cutting any big limbs or trees. Instead of heavy trimming, we focus on sealing rooflines, screening vents, and setting rodent stations so you can keep the shade and still keep rats out.", // OWNER: confirm this description of Atlantic Beach tree rules is current
      "Many homes near Mayport are rented to military families who move every few years. When a lease changes hands, a quick inspection protects both the owner and the new tenant.",
    ],
  },
  popularServices: [
    { slug: "termite-control", reason: "Old wood in original cottages and disturbed soil from rebuilds keep termites busy in Atlantic Beach." },
    { slug: "termite-inspection", reason: "Navy families buying and selling on PCS timelines need WDO reports done quickly." },
    { slug: "rodent-control", reason: "Roof rats use the low maritime oak limbs to reach attics all over town." },
    { slug: "mosquito-control", reason: "Marsh-side homes near Dutton Island deal with mosquitoes and no-see-ums for much of the year." },
    { slug: "general-pest-control", reason: "A move-in treatment gives military families a fresh start in a new rental." },
  ],
  // OWNER: verify neighborhood names and ZIP codes before launch
  neighborhoods: ["Selva Marina", "Royal Palms", "Selva Lakes", "Saltair", "Seminole Beach", "Dutton Island area"],
  zipCodes: ["32233"],
  faqs: [
    {
      question: "Can you do a WDO inspection quickly if I'm moving on military orders?",
      answer:
        "Yes, in most cases we can schedule a WDO inspection within a few days. We know Mayport families often have tight closing dates. The inspection covers the visible, accessible parts of the home, and we send a written report you can share with your lender and agent. Call as soon as you have a contract so we can fit your timeline.", // OWNER: confirm typical scheduling time
    },
    {
      question: "Do I have to cut down my oak trees to get rid of roof rats?",
      answer:
        "No. Keeping trees is usually fine. Trimming branches back from the roof helps, but the most important step is sealing the gaps rats use to get inside. We close up soffit gaps, vents, and roof openings, then use traps or stations to remove the rats already there. Check city rules before removing any large trees or limbs.",
    },
    {
      question: "I saw winged bugs near a window in my old cottage. Are they termites?",
      answer:
        "They might be. In spring, subterranean termites send out winged swarmers, and older Atlantic Beach cottages are a common place to see them. Termite swarmers have straight antennae and four wings of equal length, and they shed those wings quickly. Save a few in a bag or jar and call us. A swarm indoors usually means a colony is nearby, so it's worth a prompt inspection.",
    },
  ],
  nearbyAreas: ["neptune-beach", "jacksonville-beach", "arlington"],
  lastUpdated: "2026-10-12",
};
