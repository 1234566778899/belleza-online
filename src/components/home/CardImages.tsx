import Link from "next/link";
import { SmartImage } from "../SmartImage";
import { Carousel } from "./Carousel";

type Card = { subtitle: string; title: string; text: string; cta: string; href: string; image: string };

/** Tarjetas con imagen y texto encima (card images de la plantilla). */
export function CardImages({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <section className="container-page py-[60px] md:py-20">
      <Carousel header={<h2 className="heading text-h1 text-center md:text-left">{title}</h2>}>
        {cards.map((c) => (
          <Link key={c.title} href={c.href} className="group relative grid w-[85%] shrink-0 snap-start overflow-hidden rounded-[20px] text-white sm:w-[60%] lg:w-[calc((100%-48px)/3)]">
            <div className="relative col-start-1 row-start-1 aspect-[9/11]">
              <SmartImage src={c.image} alt="" fill sizes="(min-width: 1024px) 33vw, 85vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
            <div className="relative col-start-1 row-start-1 flex flex-col items-center justify-end p-8 text-center">
              <p className="subheading">{c.subtitle}</p>
              <h3 className="heading text-h2 mt-2">{c.title}</h3>
              <p className="mt-2 max-w-[310px] text-white/90">{c.text}</p>
              <span className="btn btn-light mt-6 group-hover:bg-ink group-hover:text-white">{c.cta}</span>
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
