// Catálogo de demostración con la misma forma que la RPC `store_catalog()`.
// Se usa mientras la tienda no tenga su propio proyecto de Supabase (sin NEXT_PUBLIC_SUPABASE_URL).
// Cuando conectes la base de datos, carga estos productos desde el admin y este archivo deja de usarse.
import { img } from "@/lib/images";
import type { CatalogRow } from "@/lib/catalog/map";

type DemoProduct = {
  handle: string;
  title: string;
  vendor: string;
  image: string;
  category: string;
  price: number;
  compareAt?: number;
  tags?: string[];
  collections?: string[];
  /** Variantes por tono o tamaño: [valor, precio?]. */
  option?: { title: string; values: string[] };
  stock?: number;
};

const products: DemoProduct[] = [
  { handle: "perfume-floral-mujer", title: "Perfume floral para mujer 50 ml", vendor: "Ésika", image: "p-perfume-floral", category: "perfumes", price: 89.9, compareAt: 129.9, tags: ["dia-de-la-madre", "cumpleanos"], collections: ["mas-vendidos", "ofertas", "ella", "esika"] },
  { handle: "perfume-amaderado-hombre", title: "Perfume amaderado para hombre 100 ml", vendor: "L'Bel", image: "p-perfume-amaderado", category: "perfumes", price: 119.9, tags: ["cumpleanos", "navidad"], collections: ["mas-vendidos", "el", "lbel"] },
  { handle: "colonia-citrica-unisex", title: "Colonia cítrica unisex 150 ml", vendor: "Natura", image: "p-colonia-citrica", category: "perfumes", price: 69.9, collections: ["novedades", "unisex", "natura"] },
  { handle: "body-splash-vainilla", title: "Body splash de vainilla 200 ml", vendor: "Cyzone", image: "p-body-splash", category: "perfumes", price: 29.9, compareAt: 39.9, tags: ["san-valentin"], collections: ["novedades", "ofertas", "ella", "cyzone"] },
  { handle: "labial-mate-larga-duracion", title: "Labial mate de larga duración", vendor: "Ésika", image: "p-labial-mate", category: "maquillaje", price: 24.9, tags: ["rojo", "rosa", "nude"], collections: ["mas-vendidos", "ella", "esika"], option: { title: "Tono", values: ["Rojo", "Rosa", "Nude"] } },
  { handle: "base-liquida-cobertura-media", title: "Base líquida cobertura media 30 ml", vendor: "L'Bel", image: "p-base-liquida", category: "maquillaje", price: 59.9, tags: ["claro", "medio"], collections: ["ella", "lbel"], option: { title: "Tono", values: ["Claro", "Medio", "Canela"] } },
  { handle: "mascara-pestanas-waterproof", title: "Máscara de pestañas a prueba de agua", vendor: "Cyzone", image: "p-mascara", category: "maquillaje", price: 22.9, compareAt: 32.9, collections: ["ofertas", "ella", "cyzone"], stock: 3 },
  { handle: "paleta-sombras-nude", title: "Paleta de sombras nude 12 tonos", vendor: "Yanbal", image: "p-paleta-sombras", category: "maquillaje", price: 49.9, tags: ["nude", "cumpleanos"], collections: ["novedades", "ella", "yanbal"] },
  { handle: "serum-vitamina-c", title: "Sérum facial con vitamina C 30 ml", vendor: "Natura", image: "p-serum-vitamina-c", category: "cuidado-facial", price: 79.9, collections: ["mas-vendidos", "unisex", "natura"] },
  { handle: "crema-hidratante-facial", title: "Crema hidratante facial 50 g", vendor: "L'Bel", image: "p-crema-facial", category: "cuidado-facial", price: 69.9, compareAt: 89.9, collections: ["ofertas", "ella", "lbel"] },
  { handle: "protector-solar-fps-50", title: "Protector solar facial FPS 50", vendor: "Yanbal", image: "p-protector-solar", category: "cuidado-facial", price: 54.9, collections: ["novedades", "mas-vendidos", "unisex", "yanbal"] },
  { handle: "agua-micelar-3-en-1", title: "Agua micelar 3 en 1 200 ml", vendor: "Cyzone", image: "p-agua-micelar", category: "cuidado-facial", price: 27.9, collections: ["unisex", "cyzone"], stock: 0 },
  { handle: "crema-corporal-nutritiva", title: "Crema corporal nutritiva 400 ml", vendor: "Natura", image: "p-crema-corporal", category: "cuidado-corporal", price: 45.9, collections: ["mas-vendidos", "unisex", "natura"] },
  { handle: "jabones-vegetales-x5", title: "Pack de jabones vegetales x5", vendor: "Natura", image: "p-jabones", category: "cuidado-corporal", price: 32.9, compareAt: 39.9, collections: ["ofertas", "unisex", "natura"] },
  { handle: "shampoo-reparador", title: "Shampoo reparador 300 ml", vendor: "Ésika", image: "p-shampoo", category: "cabello", price: 26.9, collections: ["novedades", "unisex", "esika"] },
  { handle: "set-regalo-perfume-crema", title: "Set de regalo perfume + crema corporal", vendor: "Ésika", image: "p-set-regalo", category: "sets-de-regalo", price: 129.9, compareAt: 159.9, tags: ["dia-de-la-madre", "navidad", "san-valentin"], collections: ["mas-vendidos", "ofertas", "ella", "esika"] },
];

const categories = [
  ["perfumes", "Perfumes"],
  ["maquillaje", "Maquillaje"],
  ["cuidado-facial", "Cuidado facial"],
  ["cuidado-corporal", "Cuidado corporal"],
  ["cabello", "Cabello"],
  ["sets-de-regalo", "Sets de regalo"],
];

const collections = [
  ["mas-vendidos", "Más vendidos"],
  ["novedades", "Novedades"],
  ["ofertas", "Ofertas"],
  ["ella", "Para ella"],
  ["el", "Para él"],
  ["unisex", "Unisex"],
  ["esika", "Ésika"],
  ["natura", "Natura"],
  ["lbel", "L'Bel"],
  ["cyzone", "Cyzone"],
  ["yanbal", "Yanbal"],
];

export const demoCatalog: CatalogRow = {
  products: products.map((p) => {
    const values = p.option?.values ?? ["Predeterminado"];
    return {
      id: `demo-${p.handle}`,
      handle: p.handle,
      title: p.title,
      description: null,
      vendor: p.vendor,
      thumbnail: img(p.image),
      images: [img(p.image), img(`${p.image}-alt`)],
      tags: p.tags ?? [],
      categories: [p.category],
      collections: p.collections ?? [],
      options: [{ title: p.option?.title ?? "Título", values }],
      variants: values.map((value, i) => ({
        id: `demo-${p.handle}-${i}`,
        title: value,
        sku: `DEMO-${p.handle.slice(0, 12).toUpperCase()}-${i + 1}`,
        price: p.price,
        compare_at: p.compareAt ?? null,
        available: p.stock ?? 20,
        allow_backorder: false,
        manage_inventory: true,
        options: { [p.option?.title ?? "Título"]: value },
      })),
    };
  }),
  collections: collections.map(([handle, title]) => ({
    handle,
    title,
    description: null,
    image_url: null,
    product_handles: products.filter((p) => p.collections?.includes(handle)).map((p) => p.handle),
  })),
  categories: categories.map(([handle, name]) => ({ id: `cat-${handle}`, handle, name, parent_id: null })),
  shipping_options: [
    { id: "ship-lima", name: "Envío a Lima Metropolitana", amount: 10, free_over_amount: 150, delivery_estimate: "1 a 2 días hábiles", type: "shipping", location_id: null, departments: ["Lima"] },
    { id: "ship-provincias", name: "Envío a provincias", amount: 18, free_over_amount: 250, delivery_estimate: "3 a 5 días hábiles", type: "shipping", location_id: null, departments: [null] },
    { id: "pickup-miraflores", name: "Recojo en tienda", amount: 0, free_over_amount: null, delivery_estimate: "Listo en 24 horas", type: "pickup", location_id: "loc-miraflores", departments: [null] },
  ],
  locations: [
    { id: "loc-miraflores", name: "Tienda Miraflores", address_1: "Av. José Larco 345", district: "Miraflores", province: "Lima", department: "Lima", postal_code: "15074", phone: "+51 904 435 631", is_pickup_enabled: true },
  ],
};
