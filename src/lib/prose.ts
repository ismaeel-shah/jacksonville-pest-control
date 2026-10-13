/**
 * Tokenizer for the tiny inline syntax used in content files:
 *   [anchor text](/path)   and   **bold**
 */

export type ProseToken =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string }
  | { type: "bold"; value: string };

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function tokenizeProse(input: string): ProseToken[] {
  const tokens: ProseToken[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(INLINE_PATTERN)) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: input.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      tokens.push({ type: "link", value: match[1], href: match[2] });
    } else {
      tokens.push({ type: "bold", value: match[3] });
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < input.length) tokens.push({ type: "text", value: input.slice(lastIndex) });
  return tokens;
}

/** Strips link and bold syntax, e.g. for JSON-LD and meta tags. */
export function proseToPlainText(input: string): string {
  return tokenizeProse(input)
    .map((token) => token.value)
    .join("");
}
