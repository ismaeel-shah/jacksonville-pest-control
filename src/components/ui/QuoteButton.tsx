"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { type ButtonVariant, buttonClasses } from "./ButtonLink";

import { QUOTE_FORM_ID } from "@/lib/routes";

export { QUOTE_FORM_ID };

/** Scrolls to the quote form when it exists on this page; otherwise lets the link open /contact. */
export function scrollToQuoteForm(event: MouseEvent) {
  const form = document.getElementById(QUOTE_FORM_ID);
  if (!form) return;
  event.preventDefault();
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  form.querySelector<HTMLElement>("input, select, textarea")?.focus({ preventScroll: true });
}

/** "Get a Free Inspection" button that jumps to the nearest quote form. */
export function QuoteButton({
  children = "Get a Free Inspection",
  variant = "outline",
  cta,
  className,
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  cta: string;
  className?: string;
}) {
  return (
    <Link
      href={`/contact#${QUOTE_FORM_ID}`}
      onClick={scrollToQuoteForm}
      data-cta={cta}
      className={buttonClasses(variant, className)}
    >
      {children}
    </Link>
  );
}
