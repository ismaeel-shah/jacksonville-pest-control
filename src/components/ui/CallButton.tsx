import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPhone, previewable } from "@/lib/config";
import { type ButtonVariant, buttonClasses } from "./ButtonLink";

/**
 * "Call Now: (904) 555-0123" tel: link. click_to_call is tracked globally for every tel: link.
 * Hidden in production until the phone number is set; shown as a dashed preview in development.
 */
export function CallButton({
  label = "Call Now",
  showNumber = true,
  variant = "cta",
  className,
}: {
  label?: string;
  showNumber?: boolean;
  variant?: ButtonVariant;
  className?: string;
}) {
  const phone = getPhone();
  const text = (display: string) => (showNumber ? `${label}: ${display}` : label);

  if (!phone) {
    const preview = previewable(siteConfig.phoneDisplay);
    if (!preview) return null;
    return (
      <span className={buttonClasses(variant, `cursor-not-allowed border-2 border-dashed border-current opacity-70 ${className ?? ""}`)}>
        <Phone aria-hidden className="size-5" />
        {text(preview)}
      </span>
    );
  }

  return (
    <a href={phone.href} className={buttonClasses(variant, className)}>
      <Phone aria-hidden className="size-5" />
      {text(phone.display)}
    </a>
  );
}
