import type { ReactNode } from "react";
import { Container } from "./Container";

export type SectionTone = "white" | "surface" | "navy";

const TONES: Record<SectionTone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  navy: "bg-secondary text-white",
};

export function Section({
  children,
  tone = "white",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  /** id of the section's heading, for aria-labelledby. */
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-14 md:py-20 ${TONES[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  intro,
  eyebrow,
  align = "left",
  tone = "white",
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  tone?: SectionTone;
}) {
  const dark = tone === "navy";
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold uppercase tracking-wider ${dark ? "text-white/80" : "text-primary"}`}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-3xl font-extrabold md:text-4xl ${dark ? "text-white" : "text-secondary"}`}>
        {title}
      </h2>
      {intro && <div className={`mt-4 ${dark ? "text-white/90" : "text-ink-muted"}`}>{intro}</div>}
    </div>
  );
}
