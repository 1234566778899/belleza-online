"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { ProductCard } from "../ProductCard";

type Tab = { label: string; href: string; products: Product[] };

/** Pestañas de productos de la plantilla: los títulos son las pestañas (h2) y "Ver todo" va a la derecha. */
export function ProductTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="container-page py-[60px] md:py-20">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div role="tablist" className="no-scrollbar -mx-[15px] flex max-w-[calc(100%+30px)] gap-x-6 overflow-x-auto px-[15px] whitespace-nowrap md:mx-0 md:max-w-none md:gap-x-10 md:px-0">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`heading text-h2 transition-colors ${i === active ? "text-ink" : "text-ink/30 hover:text-ink/60"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <Link href={tab.href} className="link-underline hidden md:block">Ver todo</Link>
      </div>
      <div role="tabpanel" className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-10 md:gap-x-6 lg:grid-cols-4">
        {tab.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link href={tab.href} className="link-underline">Ver todo</Link>
      </div>
    </section>
  );
}
