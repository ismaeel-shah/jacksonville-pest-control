import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/format";

/** Plain, readable layout for the Privacy Policy and Terms of Service. */
export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <article className="py-12 md:py-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-secondary md:text-5xl">{title}</h1>
        <p className="mt-3 text-ink-muted">
          Last updated: <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
        </p>
        <div className="mt-10 space-y-4 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-secondary [&_li]:ml-6 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </Container>
    </article>
  );
}
