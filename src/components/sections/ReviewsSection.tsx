import { Quote, Star } from "lucide-react";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import type { Review } from "@/content/types";
import { filled } from "@/lib/config";
import { formatDate } from "@/lib/format";

/**
 * Real customer reviews from content/reviews.ts. With no reviews it shows a friendly
 * note and a Google review link, or nothing at all when `hideWhenEmpty` is set.
 */
export function ReviewsSection({
  title = "What Our Customers Say",
  intro,
  reviews,
  hideWhenEmpty = false,
  tone = "surface",
  id = "reviews",
}: {
  title?: string;
  intro?: string;
  reviews: Review[];
  hideWhenEmpty?: boolean;
  tone?: SectionTone;
  id?: string;
}) {
  if (reviews.length === 0 && hideWhenEmpty) return null;
  const reviewUrl = filled(siteConfig.googleReviewUrl);

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} title={title} intro={intro} tone={tone} />
      {reviews.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={`${review.name}-${review.date}`}>
              <figure className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
                {review.rating && (
                  <div className="mb-3 flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        aria-hidden
                        className={`size-5 ${i < review.rating! ? "fill-accent text-accent" : "text-line"}`}
                      />
                    ))}
                  </div>
                )}
                <Quote aria-hidden className="mb-2 size-6 text-primary-soft" />
                <blockquote className="flex-1 text-ink">{review.text}</blockquote>
                <figcaption className="mt-4 text-base text-ink-muted">
                  <span className="font-bold text-secondary">{review.name}</span> · {review.area}
                  <br />
                  <time dateTime={review.date}>{formatDate(review.date)}</time>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <div className="max-w-2xl rounded-xl bg-white p-6 shadow-sm">
          <p>
            We&apos;re collecting reviews from our Jacksonville customers. If we&apos;ve helped you, we&apos;d be
            grateful if you shared your experience.
          </p>
          {reviewUrl && (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-bold text-primary underline underline-offset-2"
            >
              Leave us a Google review
            </a>
          )}
        </div>
      )}
    </Section>
  );
}
