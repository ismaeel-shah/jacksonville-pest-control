import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getPublishedPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { STATIC_ROUTES } from "@/lib/routes";
import { buildWebPageSchema } from "@/lib/schema";

const DESCRIPTION =
  "Practical pest advice for Jacksonville homeowners: termite swarm season, palmetto bugs, fire ants, mosquitoes, rats in the attic, and WDO inspections.";

export const metadata = buildMetadata({
  title: "Pest Control Blog | Jacksonville, FL Pest Tips",
  description: DESCRIPTION,
  path: STATIC_ROUTES.blog,
});

export default function BlogIndexPage() {
  const [featured, ...rest] = getPublishedPosts();

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: STATIC_ROUTES.blog }]} />
      <JsonLd data={buildWebPageSchema({ type: "CollectionPage", name: "Pest Control Blog", description: DESCRIPTION, path: STATIC_ROUTES.blog })} />

      <section className="bg-linear-to-b from-primary-soft to-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Pest Control Blog</p>
            <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">Pest Tips for Northeast Florida Homes</h1>
            <p className="mt-5 text-xl text-ink-muted">
              Straightforward advice from our technicians about the pests Jacksonville homeowners deal with most, and what you
              can do about them.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Articles" className="pb-16 pt-4 md:pb-20">
        <Container>
          {!featured ? (
            <p className="text-ink-muted">New articles are on the way. Check back soon.</p>
          ) : (
            <>
              <BlogCard post={featured} featured />
              {rest.length > 0 && (
                <>
                  <h2 className="mt-14 text-2xl font-extrabold text-secondary md:text-3xl">More Pest Tips</h2>
                  <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                      <li key={post.slug}>
                        <BlogCard post={post} headingLevel="h3" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </Container>
      </section>

      <CTASection title="Have a Pest Problem Right Now?" />
    </>
  );
}
