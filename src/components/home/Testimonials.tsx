import { BadgeCheck, Star } from "lucide-react";
import { Carousel } from "./Carousel";

const reviews = [
  { name: "Lucía R.", city: "Lima", product: "Perfume floral para mujer", text: "Llegó al día siguiente y bien empacado. El perfume es original, se nota en la duración del aroma. Ya hice mi segundo pedido." },
  { name: "Andrea M.", city: "Arequipa", product: "Sérum facial con vitamina C", text: "Me asesoraron por WhatsApp para elegir el sérum según mi tipo de piel. Excelente atención y precio." },
  { name: "Carla P.", city: "Trujillo", product: "Labial mate de larga duración", text: "El tono es igual al de la foto y de verdad dura todo el día. Pagué con Yape y fue rapidísimo." },
  { name: "José G.", city: "Lima", product: "Perfume amaderado para hombre", text: "Lo compré para regalo y lo enviaron con una tarjeta. Llegó en la fecha que pedí. Muy recomendados." },
];

/** Testimonios sobre fondo crema (color-scheme-2), en tarjetas blancas de 4 columnas. */
export function Testimonials() {
  return (
    <section className="bg-cream py-[60px] md:py-20">
      <div className="container-page">
        <Carousel header={<h2 className="heading text-h2 text-center md:text-left">Más de 2,000 clientas felices</h2>}>
          {reviews.map((r) => (
            <figure key={r.name} className="flex w-[85%] shrink-0 snap-start flex-col rounded-[20px] bg-white p-6 sm:w-[48%] lg:w-[calc((100%-72px)/4)] md:p-8">
              <div className="flex gap-0.5 text-[#ebbf20]" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[17px] leading-[1.6]">“{r.text}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="flex items-center gap-1.5 font-medium">
                  {r.name}
                  <BadgeCheck className="size-4 text-new" strokeWidth={1.75} aria-label="Compra verificada" />
                </p>
                <p className="text-[14px] text-muted">{r.city} · {r.product}</p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
