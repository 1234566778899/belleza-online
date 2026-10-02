// Contenido de presentación de la tienda. Los productos, precios y stock vienen de Supabase (src/lib/catalog).
import { img } from "@/lib/images";

export const defaultDescription = (name: string) => [
  `${name} 100 % original, comprado directamente a la marca y guardado en un ambiente fresco y seco para que llegue a tus manos en perfecto estado. Revisa la fecha de vencimiento en el empaque: siempre enviamos lotes recientes.`,
  "Lo empacamos con cuidado y lo enviamos a todo el Perú. Si tienes dudas sobre el tono, la fragancia o cómo usarlo, escríbenos por WhatsApp y te asesoramos.",
];

export const defaultFeatures = [
  "Producto 100 % original con sello de la marca",
  "Lotes recientes, con fecha de vencimiento vigente",
  "Empaque protegido para el envío",
  "Asesoría gratuita por WhatsApp",
];

/** Diapositivas del slideshow del inicio. */
export const heroSlides = [
  { subtitle: "Nueva colección", title: "Tu belleza, a tu manera", text: "Maquillaje, perfumes y cuidado de la piel de tus marcas favoritas.", cta: "Comprar ahora", href: "/coleccion/todos", image: img("hero-1") },
  { subtitle: "Fragancias", title: "Un aroma para cada momento", text: "Perfumes de Ésika, L'Bel, Natura y Yanbal con hasta 30 % de descuento.", cta: "Ver perfumes", href: "/coleccion/perfumes", image: img("hero-2") },
  { subtitle: "Maquillaje", title: "Color que dura todo el día", text: "Labiales, bases y paletas para tu look de día o de noche.", cta: "Ver maquillaje", href: "/coleccion/maquillaje", image: img("hero-3") },
];

/** Tarjetas de "Compra por categoría" (slider sobre fondo crema). */
export const featuredCategories = [
  { slug: "perfumes", name: "Perfumes", image: img("col-perfumes") },
  { slug: "maquillaje", name: "Maquillaje", image: img("col-maquillaje") },
  { slug: "cuidado-facial", name: "Cuidado facial", image: img("col-facial") },
  { slug: "cuidado-corporal", name: "Cuidado corporal", image: img("col-corporal") },
  { slug: "cabello", name: "Cabello", image: img("col-cabello") },
  { slug: "sets-de-regalo", name: "Sets de regalo", image: img("col-regalos") },
];

/** Marcas que se venden en la tienda (cada una es una colección en Supabase). */
export const brands = [
  { slug: "esika", name: "Ésika", image: img("brand-esika") },
  { slug: "natura", name: "Natura", image: img("brand-natura") },
  { slug: "lbel", name: "L'Bel", image: img("brand-lbel") },
  { slug: "cyzone", name: "Cyzone", image: img("brand-cyzone") },
  { slug: "yanbal", name: "Yanbal", image: img("brand-yanbal") },
];
