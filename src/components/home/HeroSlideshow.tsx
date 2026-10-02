"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { SmartImage } from "../SmartImage";

type Slide = { subtitle: string; title: string; text: string; cta: string; href: string; image: string };

/**
 * Slideshow de la plantilla: imagen con radio de 20px dentro del ancho de página, texto a la izquierda
 * y controles debajo (flechas, puntos y pausa). Cambia cada 6 s.
 */
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearTimeout(id);
  }, [index, paused, slides.length]);

  return (
    <section aria-roledescription="carrusel" aria-label="Destacados" className="container-page pt-3 md:pt-5">
      <div className="relative grid overflow-hidden rounded-[16px] md:rounded-[20px]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== index}
            inert={i !== index}
            className={`col-start-1 row-start-1 grid transition-opacity duration-700 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <div className="relative col-start-1 row-start-1 aspect-[4/3] md:aspect-[1410/620]">
              <SmartImage src={s.image} alt="" fill preload={i === 0} sizes="(min-width: 1536px) 1410px, 100vw" className="object-cover object-right" />
            </div>
            {/* En móvil el texto va debajo de la imagen, como la plantilla (content-mobile--below). */}
            <div className="relative col-start-1 bg-blush px-6 py-8 text-center md:row-start-1 md:flex md:items-center md:bg-transparent md:px-[60px] md:py-0 md:text-left lg:px-[90px]">
              <div className="mx-auto max-w-[460px] md:mx-0">
                <p className="subheading">{s.subtitle}</p>
                <h2 className="heading text-hd1 mt-3">{s.title}</h2>
                <p className="mt-4 text-[17.6px] leading-[1.6]">{s.text}</p>
                <Link href={s.href} className="btn btn-primary mt-7">{s.cta}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button onClick={() => go(index - 1)} aria-label="Diapositiva anterior" className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-ink">
          <ChevronLeft className="size-4" strokeWidth={1.75} />
        </button>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => go(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-ink" : "w-2.5 bg-ink/20 hover:bg-ink/40"}`}
            />
          ))}
        </div>
        <button onClick={() => go(index + 1)} aria-label="Diapositiva siguiente" className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-ink">
          <ChevronRight className="size-4" strokeWidth={1.75} />
        </button>
        <button onClick={() => setPaused(!paused)} aria-label={paused ? "Reanudar" : "Pausar"} className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-ink">
          {paused ? <Play className="size-3.5" strokeWidth={1.75} /> : <Pause className="size-3.5" strokeWidth={1.75} />}
        </button>
      </div>
    </section>
  );
}
