import { CalendarDays, ChevronDown, Clock, ListOrdered } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import { InlineProse, Prose } from "@/components/ui/Prose";
import { SidebarCta } from "@/components/ui/SidebarCta";
import { TableOfContents } from "@/components/ui/TableOfContents";
import type { ContentSection } from "@/content/types";
import { getPost, getPostsBySlugs, getPublishedPosts, getReadingMinutes, getServicesBySlugs } from "@/lib/content";
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
  const services = getServicesBySlugs(post.relatedServices);
  const related = getPostsBySlugs(post.relatedPosts);
  const showToc = post.sections.length >= TOC_MIN_SECTIONS;
  const tocItems = post.sections.map(({ id, heading }) => ({ id, heading }));
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

      <article>
        <header className="bg-linear-to-b from-primary-soft to-white pt-10 md:pt-14">
          <Container className="max-w-4xl">
            <p>
              <Link
                href={STATIC_ROUTES.blog}
                className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-dark"
              >
                {post.category}
              </Link>
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-secondary md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-xl text-ink-muted">{post.excerpt}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarDays aria-hidden className="size-4" />
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock aria-hidden className="size-4" />
                  {getReadingMinutes(post)} min read
                </span>
                {updated && (
                  <span>
                    Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                  </span>
                )}
              </p>
            </div>
          </Container>

          {willRenderImage(post.image) && (
            <Container className="mt-10 max-w-5xl">
              <ImageSlot
                image={post.image}
                aspect="aspect-[16/9]"
                preload
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="shadow-xl ring-1 ring-black/5"
              />
            </Container>
          )}
        </header>

        <Container className="py-12 md:py-16">
          <div className={showToc ? "lg:grid lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-14" : "mx-auto max-w-3xl"}>
            <div className="min-w-0 max-w-3xl">
              {showToc && (
                <details className="group/toc mb-10 rounded-xl border border-line bg-surface lg:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-bold text-secondary [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2">
                      <ListOrdered aria-hidden className="size-5 text-primary" />
                      In this article
                    </span>
                    <ChevronDown aria-hidden className="size-5 transition-transform group-open/toc:rotate-180" />
                  </summary>
                  <ol className="list-decimal space-y-2 border-t border-line py-4 pl-10 pr-4 marker:font-semibold marker:text-primary">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-ink hover:text-primary hover:underline">
                          {item.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <Prose paragraphs={post.intro} className="text-xl" />

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
                    Local pest control pros deal with this every day in Jacksonville homes. Call to talk with one about your situation.
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
                  </div>
                </aside>
              )}
            </div>

            {showToc && (
              <aside aria-label="Article sidebar" className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                    <TableOfContents items={tocItems} />
                  </div>
                  <SidebarCta title={`Dealing with ${post.category.toLowerCase()}?`} />
                </div>
              </aside>
            )}
          </div>
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
                <li key={item.slug}>
                  <BlogCard post={item} headingLevel="h3" sizes="(min-width: 768px) 33vw, 100vw" />
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
