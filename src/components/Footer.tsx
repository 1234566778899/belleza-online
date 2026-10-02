import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { ComplaintBookIcon } from "./ComplaintBookIcon";
import { Logo } from "./Logo";
import { PaymentIcons } from "./PaymentIcons";
import { SocialIcons } from "./SocialIcons";

const columns = [
  {
    title: "Tienda",
    links: [
      { label: "Todos los productos", href: "/coleccion/todos" },
      { label: "Perfumes", href: "/coleccion/perfumes" },
      { label: "Maquillaje", href: "/coleccion/maquillaje" },
      { label: "Cuidado facial", href: "/coleccion/cuidado-facial" },
      { label: "Ofertas", href: "/coleccion/ofertas" },
    ],
  },
  {
    title: "Atención al cliente",
    links: [
      { label: "Mi cuenta", href: "/cuenta" },
      { label: "Contacto", href: "/contacto" },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      { label: "Opciones de envío", href: "/opciones-de-envio" },
      { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
    ],
  },
];

/** Footer de la plantilla: suscripción arriba, columnas de enlaces y barra inferior con pagos y redes. */
export function Footer() {
  return (
    <footer className="mt-[60px] border-t border-line bg-white text-ink md:mt-20">
      <div className="container-page">
        <div className="grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))_minmax(0,1.2fr)] lg:gap-12">
          <div>
            <h2 className="heading text-h3">Suscríbete y obtén 10 % de descuento</h2>
            <p className="mt-3 text-muted">Recibe novedades, lanzamientos y ofertas exclusivas de tus marcas favoritas.</p>
            <form className="mt-6">
              <div className="relative">
                <input
                  type="email"
                  required
                  aria-label="Correo electrónico"
                  placeholder="Correo electrónico"
                  className="h-12 w-full rounded-full border border-transparent bg-field pr-16 pl-6 text-[15px] placeholder:text-muted focus:border-ink focus:outline-none"
                />
                <button aria-label="Suscribirme" className="absolute top-1 right-1 grid size-10 place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark">
                  <ArrowRight className="size-[18px]" strokeWidth={1.75} />
                </button>
              </div>
              <p className="mt-3 text-[13px] text-muted">
                Al suscribirte aceptas nuestros <Link href="/terminos-y-condiciones" className="underline underline-offset-2">términos y condiciones</Link>.
              </p>
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="heading text-[18px]">{col.title}</h3>
              <ul className="mt-4 space-y-1.5 text-[15px] text-muted">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="inline-block py-0.5 hover:text-ink hover:underline hover:underline-offset-4">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Logo className="items-start!" />
            <p className="mt-4 text-[15px] text-muted">
              Perfumes, maquillaje y cuidado personal 100 % originales. Te asesoramos por WhatsApp al{" "}
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">{site.phoneDisplay}</a>.
            </p>
            <p className="mt-2 text-[15px] text-muted">{site.hours}</p>
            <Link href="/libro-de-reclamaciones" className="mt-5 inline-flex items-center gap-3 rounded-full border border-line py-1.5 pr-5 pl-2 transition-colors hover:border-ink">
              <ComplaintBookIcon className="size-8" />
              <span className="text-[13px] leading-tight font-medium">Libro de Reclamaciones</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 border-t border-line py-6 text-[14px] text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Precios en soles, incluyen IGV.</p>
          <SocialIcons className="text-ink" gap="gap-5" />
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
