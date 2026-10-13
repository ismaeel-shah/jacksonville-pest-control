import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ImageSlot, willRenderImage } from "@/components/ui/ImageSlot";
import { getPublishedPosts } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES, blogPostHref } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Practical pest advice for Jacksonville homeowners: termite swarm season, palmetto bugs, fire ants, mosquitoes, rats in the attic, and WDO inspections.";

export const metadata = buildMetadata({
  title: "Pest Control Blog | Jacksonville, FL Pest Tips",
  description: DESCRIPTION,
  path: STATIC_ROUTES.blog,
});

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: STATIC_ROUTES.blog }]} />
      <JsonLd data={buildWebPageSchema({ type: "CollectionPage", name: "Pest Control Blog", description: DESCRIPTION, path: STATIC_ROUTES.blog })} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">Pest Tips for Northeast Florida Homes</h1>
          <p className="mt-5 text-xl text-ink-muted">
            Straightforward advice from our technicians about the pests Jacksonville homeowners deal with most, and what you
            can do about them.
          </p>
        </Container>
      </section>

      <section aria-label="Articles" className="py-12 md:py-16">
        <Container>
          {posts.length === 0 ? (
            <p className="text-ink-muted">New articles are on the way. Check back soon.</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                    {willRenderImage(post.image) && (
                      <ImageSlot image={post.image} aspect="aspect-[16/9]" className="rounded-none" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-bold uppercase tracking-wider text-primary">{post.category}</p>
                      <h2 className="mt-2 text-xl font-bold text-secondary">
                        <Link href={blogPostHref(post.slug)} className="hover:text-primary hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 flex-1 text-base text-ink-muted">{post.excerpt}</p>
                      <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                        <CalendarDays aria-hidden className="size-4" />
                        <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <CTASection title="Have a Pest Problem Right Now?" />
    </>
  );
}
