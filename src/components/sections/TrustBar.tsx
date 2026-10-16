import { Building2, MapPin, PawPrint, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ITEMS = [
  { icon: Phone, title: "One Call", text: "Connects you with an independent local pest control provider" },
  { icon: MapPin, title: "Local Coverage", text: "Jacksonville, the Beaches, and nearby counties" },
  { icon: Building2, title: "Homes & Businesses", text: "Residential and commercial pest problems" },
  { icon: PawPrint, title: "Pet & Family Questions", text: "Ask the provider about lower-impact treatment options" },
];

/** Navy strip of facts about how the service works. No license, rating, or guarantee claims (network rules). */
export function TrustBar() {
  return (
    <section aria-label="How this service works" className="bg-secondary py-10 text-white md:py-12">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon aria-hidden className="size-6 text-white" />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-lg font-bold leading-snug">{title}</p>
                <p className="mt-1 text-base leading-relaxed text-white/85">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
