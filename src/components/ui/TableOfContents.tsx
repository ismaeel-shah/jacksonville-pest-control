"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; heading: string };

/** How far below the top of the viewport a section must reach to count as "current" (clears the sticky header). */
const ACTIVE_OFFSET = 140;

/** Sidebar table of contents that highlights the section currently being read. */
export function TableOfContents({ items, title = "In this article" }: { items: TocItem[]; title?: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    function update() {
      let current = items[0]?.id;
      for (const { id } of items) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
      }
      setActiveId(current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);

  return (
    <nav aria-labelledby="toc-heading">
      <p id="toc-heading" className="text-sm font-bold uppercase tracking-wider text-secondary">
        {title}
      </p>
      <ol className="mt-4 border-l-2 border-line">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={`-ml-0.5 block border-l-2 py-2 pl-4 text-[15px] leading-snug transition-colors ${
                  active
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-ink-muted hover:border-ink-muted hover:text-secondary"
                }`}
              >
                {item.heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
