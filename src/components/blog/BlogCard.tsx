import { ArrowRight, Bug, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import type { BlogPost } from "@/content/types";
import { getReadingMinutes } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { blogPostHref } from "@/lib/routes";

/**
 * Article card for the blog index and "Related Articles". The whole card is one link
 * (the title's link is stretched over it). `featured` lays it out wide on large screens.
 */
export function BlogCard({
  post,
  featured = false,
  headingLevel: Heading = "h2",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  post: BlogPost;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
  sizes?: string;
}) {
  // Featured images fill the left column's full height on large screens.
  const aspect = featured ? "aspect-[16/9] lg:aspect-auto lg:h-full" : "aspect-[16/9]";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 focus-within:ring-2 focus-within:ring-primary hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${featured ? "lg:flex-row" : ""}`}
    >
      <div className={`relative shrink-0 ${featured ? "lg:min-h-96 lg:w-3/5" : ""}`}>
        {willRenderImage(post.image) ? (
          <ImageSlot
            image={post.image}
            cover
            aspect={aspect}
            className="rounded-none"
            imageClassName="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : sizes}
          />
        ) : (
          <div aria-hidden className={`flex ${aspect} items-center justify-center bg-linear-to-br from-primary to-secondary`}>
            <Bug className="size-16 text-white/25" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
          {post.category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        {featured && <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Latest article</p>}
        <Heading
          className={`font-bold text-secondary transition-colors group-hover:text-primary ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}
        >
          {/* Stretched over the whole card, so the card is one click target with one accessible name. */}
          <Link href={blogPostHref(post.slug)} className="after:absolute after:inset-0 focus:outline-none">
            {post.title}
          </Link>
        </Heading>
        <p className={`mb-5 mt-3 text-base text-ink-muted ${featured ? "lg:mb-8 lg:text-lg" : "line-clamp-3"}`}>{post.excerpt}</p>

        <div className={`flex items-center justify-between gap-4 border-t border-line pt-4 text-sm text-ink-muted ${featured ? "" : "mt-auto"}`}>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1.5">
              <CalendarDays aria-hidden className="size-4" />
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock aria-hidden className="size-4" />
              {getReadingMinutes(post)} min read
            </span>
          </span>
          <ArrowRight
            aria-hidden
            className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </div>
      </div>
    </article>
  );
}
