import { img } from "@/lib/images";

/**
 * Presentación de las colecciones (título, texto e imagen de cabecera).
 * Qué productos incluye cada una viene de Supabase:
 *   - `categories`: colección "virtual" = productos de esas categorías (y sus subcategorías).
 *   - si no, el handle se busca como colección y luego como categoría en la base de datos.
 * Una colección o categoría creada en el admin funciona aunque no esté aquí.
 */
export type CollectionMeta = { title: string; description: string; image: string; categories?: string[] };

export const ALL_PRODUCTS = "todos";

export const collectionMeta: Record<string, CollectionMeta> = {
  todos: { title: "Todos los productos", description: "Perfumes, maquillaje y cuidado personal de Ésika, Natura, L'Bel, Cyzone y Yanbal. Productos 100 % originales con envío a todo el Perú.", image: img("collection-default") },
  perfumes: { title: "Perfumes", description: "Fragancias para ella, para él y unisex: perfumes, colonias y body splash para cada momento del día.", image: img("col-perfumes") },
  maquillaje: { title: "Maquillaje", description: "Labiales, bases, máscaras y paletas de sombras de larga duración en los tonos que más se usan.", image: img("col-maquillaje") },
  "cuidado-facial": { title: "Cuidado facial", description: "Sérums, cremas hidratantes, protectores solares y limpiadores para una rutina simple y efectiva.", image: img("col-facial") },
  "cuidado-corporal": { title: "Cuidado corporal", description: "Cremas, jabones y aceites que nutren tu piel todos los días.", image: img("col-corporal") },
  cabello: { title: "Cabello", description: "Shampoos, acondicionadores y tratamientos para cada tipo de cabello.", image: img("col-cabello") },
  "sets-de-regalo": { title: "Sets de regalo", description: "Sets listos para regalar en cumpleaños, aniversarios, Día de la Madre y Navidad.", image: img("col-regalos") },
  "mas-vendidos": { title: "Más vendidos", description: "Los favoritos de nuestras clientas: los productos que más se repiten en los pedidos.", image: img("collection-default") },
  novedades: { title: "Novedades", description: "Lo último que llegó de cada marca.", image: img("collection-default") },
  ofertas: { title: "Ofertas", description: "Productos originales con descuento por tiempo limitado.", image: img("card-regalos") },
  ella: { title: "Para ella", description: "Perfumes, maquillaje y cuidado personal pensados para ella.", image: img("card-maquillaje") },
  el: { title: "Para él", description: "Perfumes, colonias y cuidado personal para hombre.", image: img("card-perfumes") },
  esika: { title: "Ésika", description: "Perfumes, maquillaje y cuidado personal de Ésika.", image: img("brand-esika") },
  natura: { title: "Natura", description: "Cuidado corporal, facial y fragancias de Natura, con ingredientes de origen vegetal.", image: img("brand-natura") },
  lbel: { title: "L'Bel", description: "Tratamientos faciales, maquillaje y perfumes de L'Bel.", image: img("brand-lbel") },
  cyzone: { title: "Cyzone", description: "Maquillaje y fragancias juveniles de Cyzone.", image: img("brand-cyzone") },
  yanbal: { title: "Yanbal", description: "Perfumes, maquillaje y cuidado de la piel de Yanbal.", image: img("brand-yanbal") },
};

/** Imagen de cabecera para colecciones sin imagen propia. */
export const fallbackCollectionImage = img("collection-default");

/** Colecciones de Supabase que se muestran como "Para quién". */
export const RECIPIENT_COLLECTIONS = ["ella", "el", "unisex"];

/** Opciones de filtro: clave del producto + etiqueta de cada valor (las ocasiones y tonos son etiquetas del producto). */
export const filterGroups = [
  { key: "recipients", title: "Para quién", options: { ella: "Ella", el: "Él", unisex: "Unisex" } },
  { key: "occasions", title: "Ideal para regalar en", options: { cumpleanos: "Cumpleaños", "dia-de-la-madre": "Día de la Madre", "san-valentin": "San Valentín", navidad: "Navidad" } },
  { key: "colors", title: "Tono", options: { rojo: "Rojo", rosa: "Rosa", nude: "Nude", claro: "Claro", medio: "Medio" } },
] as const;

export type FilterKey = (typeof filterGroups)[number]["key"];
