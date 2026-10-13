import { CalendarDays, UserRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import { InlineProse, Prose } from "@/components/ui/Prose";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { siteConfig } from "@/config/site";
import type { ContentSection } from "@/content/types";
import { getBusinessName, previewable } from "@/lib/config";
import { getPost, getPostsBySlugs, getPublishedPosts, getServicesBySlugs } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, blogPostHref, serviceHref } from "@/lib/routes";
import { buildBlogPostingSchema } from "@/lib/schema";

/** Posts with at least this many sections get a table of contents. */
const TOC_MIN_SECTIONS = 4;

// Only slugs from src/content/blog are valid; anything else calls notFound() below.
export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: blogPostHref(post.slug),
    image: willRenderImage(post.image) ? `/images/${post.image.file}` : undefined,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const path = blogPostHref(post.slug);
  const reviewer = previewable(siteConfig.contentReviewer.name);
  const businessName = getBusinessName();
  const services = getServicesBySlugs(post.relatedServices);
  const related = getPostsBySlugs(post.relatedPosts);
  const showToc = post.sections.length >= TOC_MIN_SECTIONS;
  const updated = post.dateModified !== post.datePublished;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", href: STATIC_ROUTES.blog },
          { name: post.title, href: path },
        ]}
      />
      <JsonLd data={buildBlogPostingSchema(post, path, willRenderImage(post.image) ? `/images/${post.image.file}` : undefined)} />

      <article className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <header>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">{post.category}</p>
            <h1 className="mt-3 text-4xl font-extrabold text-secondary md:text-5xl">{post.title}</h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-base text-ink-muted">
              <span className="flex items-center gap-2">
                <CalendarDays aria-hidden className="size-4" />
                Published <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              </span>
              {updated && (
                <span>
                  Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                </span>
              )}
            </p>
            {(reviewer || businessName) && (
              // OWNER: replace contentReviewer in src/config/site.ts with the real licensed technician
              <div className="mt-6 flex items-center gap-4 rounded-xl bg-surface p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <UserRound aria-hidden className="size-6" />
                </span>
                <p className="text-base">
                  <span className="block font-bold text-secondary">{reviewer ?? `The ${businessName} team`}</span>
                  <span className="text-ink-muted">{reviewer ? siteConfig.contentReviewer.role : "Licensed pest control professionals"}</span>
                </p>
              </div>
            )}
          </header>

          {willRenderImage(post.image) && (
            <div className="mt-8">
              <ImageSlot image={post.image} aspect="aspect-[16/9]" preload sizes="(min-width: 768px) 768px, 100vw" />
            </div>
          )}

          <Prose paragraphs={post.intro} className="mt-8 text-xl" />

          {showToc && (
            <nav aria-labelledby="toc-heading" className="mt-10 rounded-xl border border-line p-6">
              <h2 id="toc-heading" className="text-lg font-bold text-secondary">
                In this article
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-6">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-primary underline-offset-2 hover:underline">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="mt-12 scroll-mt-28">
              <h2 id={`${section.id}-heading`} className="text-3xl font-extrabold text-secondary">
                {section.heading}
              </h2>
              <SectionBody section={section} />
              {section.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-8">
                  <h3 className="text-2xl font-bold text-secondary">{sub.heading}</h3>
                  <SectionBody section={sub} />
                </div>
              ))}
            </section>
          ))}

          {services.length > 0 && (
            <aside aria-labelledby="related-service-heading" className="mt-14 rounded-xl border-l-4 border-accent bg-surface p-6 md:p-8">
              <h2 id="related-service-heading" className="text-2xl font-bold text-secondary">
                Need Help With This?
              </h2>
              <p className="mt-2 text-ink-muted">
                Our technicians handle this every day in Jacksonville homes. Start with a free inspection and an upfront quote.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={serviceHref(service.slug)} className="font-bold text-primary hover:underline">
                      {service.name} →
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <QuoteButton cta="blog_free_inspection" />
              </div>
            </aside>
          )}
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-posts-heading" className="bg-surface py-12 md:py-16">
          <Container>
            <h2 id="related-posts-heading" className="text-3xl font-extrabold text-secondary">
              Related Articles
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">{item.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-secondary">
                    <Link href={blogPostHref(item.slug)} className="hover:text-primary hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-base text-ink-muted">{item.excerpt}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}

function SectionBody({ section }: { section: ContentSection }) {
  return (
    <>
      {section.body && <Prose paragraphs={section.body} className="mt-4" />}
      {section.bullets && (
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-primary">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <InlineProse text={bullet} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
