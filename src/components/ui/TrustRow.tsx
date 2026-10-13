import { BadgeCheck, ClipboardCheck, House, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Short trust badges under hero buttons. The rating badge appears only with real data. */
export function TrustRow({ dark = false }: { dark?: boolean }) {
  const rating = siteConfig.googleRating;
  const items = [
    { icon: BadgeCheck, label: "Licensed & Insured" },
    // OWNER: confirm "Locally Owned" is accurate for the current company
    { icon: House, label: "Locally Owned" },
    { icon: ClipboardCheck, label: "Free Inspections" },
  ];

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold ${dark ? "text-white" : "text-ink"}`}>
      {rating && (
        <li className="flex items-center gap-2">
          <Star aria-hidden className="size-5 fill-accent text-accent" />
          {rating.rating.toFixed(1)} on Google ({rating.count} reviews)
        </li>
      )}
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon aria-hidden className={`size-5 ${dark ? "text-white" : "text-primary"}`} />
          {label}
        </li>
      ))}
    </ul>
  );
}
