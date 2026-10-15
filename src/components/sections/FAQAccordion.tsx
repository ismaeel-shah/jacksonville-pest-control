"use client";

import { Plus } from "lucide-react";
import { type ReactNode, useId, useState } from "react";

export type AccordionItem = { question: string; answer: ReactNode };

/**
 * Accessible accordion. Closed answers are hidden but still rendered into the
 * static HTML, so search engines see every answer.
 */
export function FAQAccordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div
            key={item.question}
            className={`rounded-xl border bg-white transition-shadow ${isOpen ? "border-primary/40 shadow-md" : "border-line hover:border-primary/40 hover:shadow-sm"}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={`flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-lg font-bold md:px-6 md:py-5 ${isOpen ? "text-primary" : "text-secondary hover:text-primary"}`}
              >
                {item.question}
                <span
                  aria-hidden
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-primary text-white" : "bg-primary-soft text-primary"}`}
                >
                  <Plus className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 leading-relaxed text-ink md:px-6 md:pb-6"
            >
              <div className="border-t border-line pt-4">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
