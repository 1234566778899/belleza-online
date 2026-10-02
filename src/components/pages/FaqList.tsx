"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export type Faq = { q: string; a: React.ReactNode };

/** Lista desplegable de preguntas (collapsible tabs de la plantilla). Solo una abierta a la vez. */
export function FaqList({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-ink/15">
      {items.map((item, i) => {
        const expanded = open === i;
        const id = `faq-${item.q.slice(0, 24).replace(/\W+/g, "-")}-${i}`;
        return (
          <div key={item.q} className="border-b border-ink/15 py-5">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                aria-expanded={expanded}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-5 text-left"
              >
                <span className="heading text-h4 text-ink">{item.q}</span>
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15"
                  aria-hidden
                >
                  {expanded ? <Minus className="size-4" strokeWidth={1.5} /> : <Plus className="size-4" strokeWidth={1.5} />}
                </span>
              </button>
            </h3>
            {expanded && (
              <div id={id} className="mt-3 pr-12 text-[16px] leading-[1.625] text-muted [&_a]:text-ink [&_a]:underline [&_p+p]:mt-2.5">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
