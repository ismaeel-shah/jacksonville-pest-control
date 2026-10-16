import { MapPin, MessageCircleQuestion, PawPrint, Phone } from "lucide-react";
import type { WhyPoint } from "@/components/sections/WhyChooseUs";
import type { TitledItem } from "./types";

/**
 * Why calling helps. Describes the referral service only: no promises about the
 * providers' work, prices, licensing, or ratings (pay-per-call network rules).
 */
export const callBenefits: WhyPoint[] = [
  {
    title: "One call instead of many",
    description:
      "Skip searching and calling around. One call connects you with a local pest control provider who serves your part of Northeast Florida.",
    icon: Phone,
  },
  {
    title: "Providers who know the area",
    description:
      "Jacksonville's heat, humidity, and sandy soil shape which pests show up and how they behave. Local providers deal with these problems every day.",
    icon: MapPin,
  },
  {
    title: "Ask anything before you decide",
    description:
      "Describe what you're seeing, ask how treatment works, and talk through your options. You decide whether to set up a visit.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Questions about kids and pets",
    description:
      "If you have children, pets, a fish tank, or someone with health concerns at home, say so on the call and ask the provider about lower-impact options.",
    icon: PawPrint,
  },
];

/** What typically happens after a visitor calls. */
export const serviceProcess: TitledItem[] = [
  {
    title: "Call and Describe the Problem",
    description:
      "Tell the provider what pests you're seeing, where, and for how long. Photos or a sample can help them understand the problem.",
  },
  {
    title: "Inspection and Plan",
    description:
      "A technician looks inside and out, finds where pests are living and getting in, and explains the treatment options for your property.",
  },
  {
    title: "Treatment and Prevention",
    description:
      "The technician treats the source and shares steps you can take, like sealing gaps or fixing leaks, to help keep pests from coming back.",
  },
];
