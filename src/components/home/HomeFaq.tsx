import Link from "next/link";
import { img } from "@/lib/images";
import { whatsappUrl } from "@/lib/site";
import { FaqList } from "../pages/FaqList";
import { SmartImage } from "../SmartImage";

const faqs = [
  { q: "¿Los productos son originales?", a: <p>Sí. Todos nuestros productos son 100 % originales, con sello de la marca y fecha de vencimiento vigente.</p> },
  { q: "¿Cuánto demora el envío?", a: <p>En Lima Metropolitana entregamos en 1 a 2 días hábiles y a provincias en 3 a 5 días hábiles. El envío en Lima es gratis desde S/. 150.</p> },
  { q: "¿Qué medios de pago aceptan?", a: <p>Por ahora puedes pagar con Yape, Plin o transferencia bancaria. Al confirmar tu pedido te enviamos los datos de pago.</p> },
  { q: "¿Puedo cambiar un producto?", a: <p>Sí, si el producto está cerrado y sin uso tienes 7 días para cambiarlo. Revisa las <Link href="/preguntas-frecuentes">preguntas frecuentes</Link> para más detalles.</p> },
];

/** Preguntas frecuentes con imagen a la izquierda sobre fondo crema (collapsible tabs de la plantilla). */
export function HomeFaq() {
  return (
    <section className="bg-cream py-[60px] md:py-20">
      <div className="container-page grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] max-md:hidden">
          <SmartImage src={img("faq-image")} alt="" fill sizes="40vw" className="object-cover" />
        </div>
        <div className="self-center">
          <h2 className="heading text-h1">¿Tienes preguntas?</h2>
          <p className="mt-3 text-muted">
            Aquí respondemos las dudas más comunes. Si no encuentras la tuya,{" "}
            <a href={whatsappUrl("Hola, tengo una consulta")} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">escríbenos por WhatsApp</a>.
          </p>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
          <Link href="/preguntas-frecuentes" className="link-underline mt-8 inline-block">Ver más respuestas</Link>
        </div>
      </div>
    </section>
  );
}
