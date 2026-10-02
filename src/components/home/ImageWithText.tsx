import Link from "next/link";
import { SmartImage } from "../SmartImage";

/** Imagen con texto de la plantilla: dos mitades con radio de 20px, el texto sobre fondo nude (color-scheme-4). */
export function ImageWithText({ subtitle, title, text, cta, href, image }: { subtitle: string; title: string; text: string; cta: string; href: string; image: string }) {
  return (
    <section className="container-page py-[60px] md:py-20">
      <div className="grid overflow-hidden rounded-[16px] md:grid-cols-2 md:rounded-[20px]">
        <div className="relative aspect-square md:order-2">
          <SmartImage src={image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center bg-nude px-6 py-12 md:px-12 md:text-center">
          <div className="mx-auto max-w-[400px]">
            <p className="subheading">{subtitle}</p>
            <h2 className="heading text-hd1 mt-3">{title}</h2>
            <p className="mt-4 text-[17.6px] leading-[1.6]">{text}</p>
            <Link href={href} className="btn btn-primary mt-7">{cta}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
