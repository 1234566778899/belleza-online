@AGENTS.md

# Tienda (belleza-web)

Next.js 16 (App Router) + TypeScript + Tailwind 4 + Supabase. Duplicado de cielo-web con el diseño de la plantilla Sleek (ver `../CLAUDE.md`).

## Comandos

```bash
npm run dev -- -p 3100      # http://localhost:3100 (así no choca con la tienda de Cielo, que usa el 3000)
npm run build               # sin variables de Supabase usa el catálogo de demostración
npx tsc --noEmit && npm run lint
npm run images:placeholders # regenera los SVG de public/images desde src/data/images.json
```

Si borras `.next`, `tsc` falla con "Cannot find name 'PageProps'". Corre `npm run build` o `next dev` una vez para regenerar los tipos de rutas.

## Next.js 16

- Lee la guía en `node_modules/next/dist/docs/` antes de usar una API; muchas cambiaron.
- `params` y `searchParams` son Promises. Tipa las páginas con `PageProps<"/ruta">` y los layouts con `LayoutProps<"/">`, que son globales.
- `fetch` no se cachea por defecto; el catálogo usa `unstable_cache`.
- No pases funciones de un Server Component a un Client Component: pasa datos, por ejemplo `query: string`.

## Datos

- **Catálogo:** `getCatalog()` (`src/lib/catalog/server.ts`) llama a la RPC `store_catalog()`. Sin `NEXT_PUBLIC_SUPABASE_URL` devuelve `src/data/demo-catalog.ts` (misma forma que la RPC).
  - Usa un cliente sin cookies (`src/lib/supabase/public.ts`), así que se cachea 60 s entre visitantes (tag `catalog`).
  - El root layout lo pasa a los componentes cliente con `CatalogProvider` / `useCatalog()`.
  - Las consultas son puras y viven en `src/lib/catalog/queries.ts`: colecciones, búsqueda, envío, relacionados.
- **Colecciones:** `src/data/collections.ts` solo tiene presentación (título, texto, imagen) y las colecciones virtuales (`categories: [...]`). Qué productos entran lo decide Supabase: colección → categoría → virtual.
- **Carrito:** va por `variantId` (localStorage) y limita la cantidad al stock.
- **Checkout:** llama a `store_place_order`, que recalcula precios, stock, IGV y promoción en el servidor. Nunca confíes en precios del cliente.
- **Descuentos:** se previsualizan con `store_validate_promotion`.
- **Cuentas:**
  - Supabase Auth con código por correo (`signInWithOtp` + `verifyOtp`) y la ruta `/auth/callback`.
  - `store_link_customer()` vincula al cliente con su cuenta al iniciar sesión.
  - Perfil, direcciones y pedidos se leen con RLS: cada cliente solo ve lo suyo. El perfil se edita solo por `store_update_customer`.
- **Guest checkout:** el invitado no puede leer pedidos, así que la página de gracias usa el resumen guardado en `sessionStorage` (`saveLastOrder`).
- **Sucursales:** vienen de Supabase y se combinan con fotos y horarios locales en `src/data/stores.ts`.

## Convenciones

- `src/app/(tienda)/` tiene las páginas con TopBar/Header/Footer. `cuenta/` y `checkout/` tienen su propio layout.
- Menús: `src/components/nav.ts` alimenta el menú desktop y el `MobileMenu`. La barra negra de anuncios (`TopBar.tsx`) tiene sus propios mensajes.
- Imágenes: todas se registran en `src/data/images.json` con su prompt (se generan después con ChatGPT o `npm run images:generate`). Usa `img("clave")` y `SmartImage`, que no optimiza SVG.
- Contenedores: `container-page` (1410 px de contenido, márgenes de Sleek) y `container-narrow` (940 px, páginas de texto).
- Inicio: secciones en `src/components/home/` en el mismo orden que la plantilla Sleek.
- Imágenes provisionales: `npm run images:placeholders` dibuja siluetas de envases (campo `shape`) para productos y degradados con etiqueta para el resto.
- Mobile first: revisa a 393 px que no haya scroll horizontal. El buscador se abre con la lupa en un panel bajo el header.
- Estilos: los tokens de color están en `@theme` de `globals.css` (`brand`, `accent`, `cream`, `nude`, `blush`, `card`, `field`, `sale`, `new`, `ink`, `muted`, `line`). Las clases `.btn`, `.heading` y `text-h*` van en `@layer components` para que las utilidades de Tailwind puedan ajustarlas.
- Contenido de presentación (slides, categorías destacadas, marcas, textos por defecto de producto) en `src/data/catalog.ts`. Filtros de colección ("Para quién", "Ideal para regalar en", "Tono") en `src/data/collections.ts`: salen de las etiquetas y colecciones del producto.
- Variables de entorno (también en Vercel): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` y, opcional, `NEXT_PUBLIC_AUTH_GOOGLE=true`. Sin ellas los clientes de Supabase usan una URL local de relleno para que la tienda cargue en modo demostración.
