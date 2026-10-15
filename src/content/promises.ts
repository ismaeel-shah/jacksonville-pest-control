import { CalendarClock, ClipboardCheck, PawPrint, ShieldCheck } from "lucide-react";
import type { WhyPoint } from "@/components/sections/WhyChooseUs";
import { siteConfig } from "@/config/site";
import type { TitledItem } from "./types";

/**
 * What every customer can count on. Shared by the home page and the reviews page,
 * so the two never drift apart. Only claims the owner can stand behind.
 */
export const customerPromises: WhyPoint[] = [
  {
    // OWNER: confirm same-day availability before launch
    title: "Fast response when you need it",
    description:
      "Pest problems don't wait for a convenient week. We offer same-day or next-day visits when our schedule allows, and we'll always tell you honestly when we can be there.",
    icon: CalendarClock,
  },
  {
    title: "An upfront quote before any work",
    description:
      "After your free inspection, you'll know exactly what we recommend and what it costs before we start. No hidden fees and no pressure to add services you don't need.",
    icon: ClipboardCheck,
  },
  {
    // OWNER: confirm pet- and family-friendly options are offered
    title: "Family- and pet-friendly options",
    description:
      "We focus treatments where pests live, use baits and targeted products where they make sense, and explain re-entry times so your family and pets stay safe.",
    icon: PawPrint,
  },
  {
    title: "We come back if pests do",
    description: siteConfig.guarantee,
    icon: ShieldCheck,
  },
];

/** The three steps every visit follows. */
export const serviceProcess: TitledItem[] = [
  {
    title: "Free Inspection",
    description:
      "Your technician inspects inside and out, finds where pests are living and getting in, and shows you what they found.",
  },
  {
    title: "Custom Treatment",
    description:
      "We build a plan around your home and the pest, treat the source, and explain exactly what we applied and where.",
  },
  {
    title: "Follow-Up & Prevention",
    description:
      "We check that the treatment worked, seal up entry points where possible, and help you keep pests from coming back.",
  },
];
