import { ArrowRight, MessageSquareHeart, Star } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { customerPromises, serviceProcess } from "@/content/promises";
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
 * content/reviews.ts are displayed. Until there are some, the page shows what every
 * customer can count on instead (the same promises as the home page), never
 * placeholder or invented reviews.
 */
export default function ReviewsPage() {
  const reviewUrl = filled(siteConfig.googleReviewUrl);
  const rating = siteConfig.googleRating;
  const sorted = [...reviews].sort((a, b) => b.date.localeCompare(a.date));
  const hasReviews = sorted.length > 0;

  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", href: STATIC_ROUTES.reviews }]} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Reviews</p>
            <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">What Our Customers Say</h1>
            <p className="mt-5 text-xl text-ink-muted">
              {hasReviews
                ? "Every review here comes from a real customer in the Jacksonville area. We read every one, and we use your feedback to keep improving."
                : "We're gathering reviews from our Jacksonville customers and will post them here as they come in, exactly as written. Until then, here's what you can count on from every visit."}
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
          </div>
        </Container>
      </section>

      {hasReviews && <ReviewsSection title="Recent Reviews" reviews={sorted} tone="white" />}

      <TrustBar />

      <WhyChooseUs
        id="promise"
        title="Our Promise to Every Customer"
        intro="These are the standards we hold ourselves to on every visit, and the ones we'd ask you to judge us by."
        tone="surface"
        points={customerPromises}
      />

      <ProcessSteps
        title="What to Expect From Your First Visit"
        intro="Whether it's a single wasp nest or a full termite treatment, every visit follows the same simple process."
        steps={serviceProcess}
      />

      <section aria-labelledby="feedback-heading" className="pb-16 md:pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-primary-soft p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <MessageSquareHeart aria-hidden className="size-6" />
              </span>
              <div>
                <h2 id="feedback-heading" className="text-2xl font-extrabold text-secondary">
                  Already a customer? Tell us how we did.
                </h2>
                <p className="mt-2 max-w-xl text-ink-muted">
                  Your honest feedback helps your neighbors choose with confidence and helps us keep improving.
                </p>
              </div>
            </div>
            {reviewUrl ? (
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg bg-primary px-6 font-bold text-white hover:bg-primary-dark"
              >
                Leave a Google review
                <ArrowRight aria-hidden className="size-5" />
              </a>
            ) : (
              <Link
                href={STATIC_ROUTES.contact}
                className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg bg-primary px-6 font-bold text-white hover:bg-primary-dark"
              >
                Share your feedback
                <ArrowRight aria-hidden className="size-5" />
              </Link>
            )}
          </div>
        </Container>
      </section>

      <CTASection title="Ready for a Free Inspection?" />
    </>
  );
}
