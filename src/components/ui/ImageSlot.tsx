import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import { Camera } from "lucide-react";
import Image from "next/image";
import type { ImageSlot as ImageSlotContent } from "@/content/types";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

// Dimensions of every photo in /public/images, read once when the module loads. Reading files
// while a page renders makes Next flag the render as unstable in dev (Cache Components).
const IMAGE_SIZES = new Map(
  readdirSync(IMAGES_DIR)
    .filter((file) => /\.(avif|gif|jpe?g|png|webp)$/i.test(file))
    .map((file) => [file, imageSize(readFileSync(path.join(IMAGES_DIR, file)))] as const),
);

const imageExists = (file: string) => IMAGE_SIZES.has(file);

/** True when ImageSlot will render something: the real photo, or the dev-only placeholder. */
export function willRenderImage(image: ImageSlotContent): boolean {
  return imageExists(image.file) || process.env.NODE_ENV === "development";
}

/**
 * A slot for a real photo supplied by the owner. Drop the file into
 * /public/images with the slot's file name and it appears on the next build
 * (in dev, restart `npm run dev`). Until then: a labeled placeholder in
 * development, nothing in production.
 *
 * The photo is shown at its own aspect ratio (read from the file at build time),
 * so it is never cropped, whatever shape it is. The one exception is `cover`, for
 * card grids that need every image the same shape.
 */
export function ImageSlot({
  image,
  preload = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  aspect = "aspect-[4/3]",
  cover = false,
  className = "",
  imageClassName = "",
}: {
  image: ImageSlotContent;
  /** Only for the hero (LCP) image. */
  preload?: boolean;
  sizes?: string;
  /** Shape of the dev-only placeholder, and of the frame when `cover` is set. */
  aspect?: string;
  /**
   * Fill an `aspect`-shaped frame instead of keeping the photo's own shape. Edges are
   * trimmed only if the photo's shape differs from the frame, so match them (e.g. 16:9).
   */
  cover?: boolean;
  className?: string;
  /** Extra classes on the <img> itself (e.g. a hover zoom), when `cover` is set. */
  imageClassName?: string;
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

  if (cover) {
    return (
      <div className={`relative ${aspect} overflow-hidden ${className}`}>
        <Image
          src={`/images/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    );
  }

  const { width, height } = IMAGE_SIZES.get(image.file)!;

  return (
    <Image
      src={`/images/${image.file}`}
      alt={image.alt}
      width={width}
      height={height}
      sizes={sizes}
      preload={preload}
      className={`block h-auto w-full rounded-xl ${className}`}
    />
  );
}
