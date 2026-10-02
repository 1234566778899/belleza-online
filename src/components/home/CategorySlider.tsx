import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SmartImage } from "../SmartImage";
import { Carousel } from "./Carousel";

type Item = { slug: string; name: string; image: string; count: number };

/** Lista de colecciones sobre fondo crema (color-scheme-2): cabecera a la izquierda y tarjetas en slider. */
export function CategorySlider({ items }: { items: Item[] }) {
  return (
    <section className="bg-cream py-[60px] md:py-20">
      <div className="container-page">
        <Carousel
          header={
            <div className="text-center md:text-left">
              <p className="subheading">Compra por categoría</p>
              <h2 className="heading text-h1 mt-2">Todo para tu rutina de belleza</h2>
              <p className="mt-3 max-w-[520px] text-muted max-md:mx-auto">Productos originales de las marcas que ya conoces, elegidos para cuidarte todos los días.</p>
            </div>
          }
        >
          {items.map((c) => (
            <Link key={c.slug} href={`/coleccion/${c.slug}`} className="group w-[70%] shrink-0 snap-start sm:w-[42%] lg:w-[calc((100%-72px)/4)]">
              <div className="relative aspect-[9/11] overflow-hidden rounded-[20px]">
                <SmartImage src={c.image} alt="" fill sizes="(min-width: 1024px) 25vw, 70vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="heading text-h4">{c.name}</h3>
                  <p className="text-[14px] text-muted">{c.count === 1 ? "1 producto" : `${c.count} productos`}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white transition-colors group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight className="size-[18px]" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
