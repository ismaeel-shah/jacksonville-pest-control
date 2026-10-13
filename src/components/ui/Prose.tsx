import type { Prose as ProseContent } from "@/content/types";
import { tokenizeProse } from "@/lib/prose";
import { SmartLink } from "./SmartLink";

const LINK_CLASSES = "font-semibold text-primary underline underline-offset-2 hover:text-primary-dark";

/** One paragraph's inline content, with [links](/path) and **bold**. */
export function InlineProse({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <>
      {tokenizeProse(text).map((token, i) => {
        if (token.type === "bold") return <strong key={i}>{token.value}</strong>;
        if (token.type === "link") {
          return (
            <SmartLink key={i} href={token.href} className={dark ? "font-semibold text-white underline" : LINK_CLASSES}>
              {token.value}
            </SmartLink>
          );
        }
        return token.value;
      })}
    </>
  );
}

/** A list of paragraphs from a content file. */
export function Prose({
  paragraphs,
  className = "",
  dark = false,
}: {
  paragraphs: ProseContent;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>
          <InlineProse text={paragraph} dark={dark} />
        </p>
      ))}
    </div>
  );
}
