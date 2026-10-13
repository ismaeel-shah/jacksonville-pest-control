import type { ReactNode } from "react";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import { InlineProse, Prose } from "@/components/ui/Prose";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import type { ImageSlot as ImageSlotContent, Prose as ProseContent } from "@/content/types";

/**
 * General content block: H2, paragraphs, optional bullet list, optional photo
 * slot beside the text, and optional extra content below.
 */
export function TextSection({
  title,
  paragraphs,
  bullets,
  image,
  children,
  tone = "white",
  id,
}: {
  title: string;
  paragraphs: ProseContent;
  bullets?: string[];
  image?: ImageSlotContent;
  children?: ReactNode;
  tone?: SectionTone;
  id: string;
}) {
  const showImage = image && willRenderImage(image);
  const dark = tone === "navy";

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <div className={showImage ? "grid items-start gap-10 lg:grid-cols-2" : "max-w-3xl"}>
        <div>
          <SectionHeading id={`${id}-heading`} title={title} tone={tone} />
          <Prose paragraphs={paragraphs} dark={dark} className="-mt-4" />
          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden className={`mt-2.5 size-2 shrink-0 rounded-full ${dark ? "bg-white" : "bg-primary"}`} />
                  <span>
                    <InlineProse text={bullet} dark={dark} />
                  </span>
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
        {showImage && <ImageSlot image={image} />}
      </div>
    </Section>
  );
}
