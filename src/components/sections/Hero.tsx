import type { ReactNode } from "react";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import type { ImageSlot as ImageSlotContent } from "@/content/types";

/**
 * Page hero: one H1, benefit line, Call button.
 * The right column shows `aside` (e.g. a call card) or the hero image.
 */
export function Hero({
  h1,
  subheadline,
  eyebrow,
  image,
  aside,
}: {
  h1: string;
  subheadline: string;
  eyebrow?: string;
  image?: ImageSlotContent;
  aside?: ReactNode;
}) {
  const right = aside ?? (image && willRenderImage(image) ? <ImageSlot image={image} preload /> : null);

  return (
    <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16 lg:py-20">
      <Container className={right ? `grid gap-10 lg:grid-cols-2 ${aside ? "items-start" : "items-center"}` : ""}>
        <div className={right ? "" : "max-w-3xl"}>
          {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{eyebrow}</p>}
          <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">{h1}</h1>
          <p className="mt-5 text-xl text-ink-muted md:text-2xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton />
          </div>
          <p className="mt-4 text-base text-ink-muted">Your call connects you with an independent local pest control provider.</p>
        </div>
        {right && <div>{right}</div>}
      </Container>
    </section>
  );
}
