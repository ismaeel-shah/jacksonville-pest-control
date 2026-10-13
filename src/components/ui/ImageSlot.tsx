import { existsSync } from "node:fs";
import path from "node:path";
import { Camera } from "lucide-react";
import Image from "next/image";
import type { ImageSlot as ImageSlotContent } from "@/content/types";

const imageExists = (file: string) => existsSync(path.join(process.cwd(), "public", "images", file));

/** True when ImageSlot will render something: the real photo, or the dev-only placeholder. */
export function willRenderImage(image: ImageSlotContent): boolean {
  return imageExists(image.file) || process.env.NODE_ENV === "development";
}

/**
 * A slot for a real photo supplied by the owner. Drop the file into
 * /public/images with the slot's file name and it appears automatically.
 * Until then: a labeled placeholder in development, nothing in production.
 */
export function ImageSlot({
  image,
  preload = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  aspect = "aspect-[4/3]",
  className = "",
}: {
  image: ImageSlotContent;
  /** Only for the hero (LCP) image. */
  preload?: boolean;
  sizes?: string;
  aspect?: string;
  className?: string;
}) {
  if (!imageExists(image.file)) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div
        className={`flex ${aspect} flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line bg-surface p-6 text-center text-sm text-ink-muted ${className}`}
      >
        <Camera aria-hidden className="size-8" />
        <span className="font-semibold">Photo slot: {image.file}</span>
        <span>{image.alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative ${aspect} overflow-hidden rounded-xl ${className}`}>
      <Image
        src={`/images/${image.file}`}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
