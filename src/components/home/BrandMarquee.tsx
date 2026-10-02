import Link from "next/link";
import { SmartImage } from "../SmartImage";

type Brand = { slug: string; name: string; image: string };

/** Promoción en bucle de la plantilla: nombres grandes alternados con imágenes circulares. Aquí, las marcas. */
export function BrandMarquee({ brands }: { brands: Brand[] }) {
  const row = [...brands, ...brands];
  return (
    <section aria-label="Marcas" className="overflow-hidden border-y border-line py-6 md:py-[26px]">
      <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {row.map((b, i) => (
              <li key={i} className="flex items-center gap-6 pr-6 md:gap-[50px] md:pr-[50px]">
                <span className="relative size-14 overflow-hidden rounded-full md:size-20">
                  <SmartImage src={b.image} alt="" fill sizes="80px" className="object-cover" />
                </span>
                <Link href={`/coleccion/${b.slug}`} tabIndex={copy === 1 ? -1 : undefined} className="heading text-h2 whitespace-nowrap hover:underline hover:underline-offset-8">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
