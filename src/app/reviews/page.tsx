import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { reviews } from "@/content/reviews";
import { filled } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";

export const metadata = buildMetadata({
  title: "Customer Reviews | Pest Control in Jacksonville, FL",
  description:
    "Read what Jacksonville homeowners and businesses say about our pest control service, and share your own experience. Call today for a free inspection.",
  path: STATIC_ROUTES.reviews,
});

/*
 * No review structured data here on purpose: Google does not show review rich
 * results for reviews a business publishes about itself. Only real reviews from
 * content/reviews.ts are displayed.
 */
export default function ReviewsPage() {
  const reviewUrl = filled(siteConfig.googleReviewUrl);
  const rating = siteConfig.googleRating;
  const sorted = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", href: STATIC_ROUTES.reviews }]} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">What Our Customers Say</h1>
          <p className="mt-5 text-xl text-ink-muted">
            Every review here comes from a real customer in the Jacksonville area. We read every one, and we use your
            feedback to keep improving.
          </p>
          {rating && (
            <p className="mt-6 flex items-center gap-2 text-lg font-bold text-secondary">
              <Star aria-hidden className="size-6 fill-accent text-accent" />
              Rated {rating.rating.toFixed(1)} out of 5 on Google from {rating.count} reviews
            </p>
          )}
          {reviewUrl && (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center rounded-lg border-2 border-primary px-6 font-bold text-primary hover:bg-primary-soft"
            >
              Leave us a Google review
            </a>
          )}
        </Container>
      </section>

      <ReviewsSection title="Recent Reviews" reviews={sorted} tone="white" />

      <CTASection title="Join Our Happy Customers" />
    </>
  );
}
