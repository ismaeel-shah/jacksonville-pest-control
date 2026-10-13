import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "cta" | "outline" | "outline-light" | "primary";

const VARIANTS: Record<ButtonVariant, string> = {
  // Orange is reserved for call/quote actions only (brief section 4).
  cta: "bg-accent text-accent-foreground hover:bg-accent-hover",
  outline: "border-2 border-primary text-primary hover:bg-primary-soft",
  "outline-light": "border-2 border-white text-white hover:bg-white/10",
  primary: "bg-primary text-white hover:bg-primary-dark",
};

export const buttonClasses = (variant: ButtonVariant, className = "") =>
  `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-center text-lg font-bold leading-tight no-underline transition-colors ${VARIANTS[variant]} ${className}`;

/** A link styled as a button. `cta` is sent as the cta_click analytics label. */
export function ButtonLink({
  href,
  children,
  variant = "cta",
  cta,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  cta?: string;
  className?: string;
}) {
  const classes = buttonClasses(variant, className);
  // Same-page anchors and tel: links skip client-side routing.
  if (!href.startsWith("/")) {
    return (
      <a href={href} className={classes} data-cta={cta}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} data-cta={cta}>
      {children}
    </Link>
  );
}
