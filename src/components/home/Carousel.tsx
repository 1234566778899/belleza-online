"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/** Fila deslizable con flechas circulares en la cabecera, como los sliders de la plantilla. */
export function Carousel({ header, children, className = "" }: { header: React.ReactNode; children: React.ReactNode; className?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });
  const arrow = "grid size-12 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";

  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-6">
        <div className="flex-1">{header}</div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <button onClick={() => scroll(-1)} aria-label="Anterior" className={arrow}>
            <ArrowLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button onClick={() => scroll(1)} aria-label="Siguiente" className={arrow}>
            <ArrowRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div ref={track} className="no-scrollbar mt-8 -mx-[15px] flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-[15px] px-[15px] md:mx-0 md:mt-10 md:gap-6 md:scroll-px-0 md:px-0">
        {children}
      </div>
    </div>
  );
}
