export type NavItem = { label: string; href: string; badge?: string; children?: { label: string; href: string }[] };

/** Menú principal (desktop y menú móvil). */
export const mainNav: NavItem[] = [
  { label: "Novedades", href: "/coleccion/novedades" },
  {
    label: "Perfumes",
    href: "/coleccion/perfumes",
    children: [
      { label: "Para ella", href: "/coleccion/ella" },
      { label: "Para él", href: "/coleccion/el" },
      { label: "Todos los perfumes", href: "/coleccion/perfumes" },
    ],
  },
  { label: "Maquillaje", href: "/coleccion/maquillaje" },
  {
    label: "Cuidado personal",
    href: "/coleccion/cuidado-facial",
    children: [
      { label: "Cuidado facial", href: "/coleccion/cuidado-facial" },
      { label: "Cuidado corporal", href: "/coleccion/cuidado-corporal" },
      { label: "Cabello", href: "/coleccion/cabello" },
    ],
  },
  {
    label: "Marcas",
    href: "/coleccion/todos",
    children: [
      { label: "Ésika", href: "/coleccion/esika" },
      { label: "Natura", href: "/coleccion/natura" },
      { label: "L'Bel", href: "/coleccion/lbel" },
      { label: "Cyzone", href: "/coleccion/cyzone" },
      { label: "Yanbal", href: "/coleccion/yanbal" },
    ],
  },
  { label: "Regalos", href: "/coleccion/sets-de-regalo" },
  { label: "Ofertas", href: "/coleccion/ofertas", badge: "-30%" },
];

export const secondaryNav = [
  { label: "Tiendas", href: "/tiendas" },
  { label: "Contacto", href: "/contacto" },
];

export const infoNav = [
  { label: "Opciones de envío", href: "/opciones-de-envio" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Nosotros", href: "/tiendas" },
  { label: "Contacto", href: "/contacto" },
];
