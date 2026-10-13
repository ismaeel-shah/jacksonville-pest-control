type JsonLdData = Record<string, unknown> | Record<string, unknown>[] | null | undefined;

/** Renders JSON-LD structured data. `<` is escaped to prevent script injection. */
export function JsonLd({ data }: { data: JsonLdData }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
