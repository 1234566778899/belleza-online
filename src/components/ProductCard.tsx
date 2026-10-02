import Link from "next/link";
import { discountPercent, formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";
import { AddToCartButton } from "./cart/AddToCartButton";
import { SmartImage } from "./SmartImage";

/**
 * Tarjeta de producto de la plantilla: imagen sobre gris claro con radio de 20px, badges arriba a la
 * izquierda, segunda imagen y botón de compra al pasar el mouse; marca, nombre y precio debajo.
 */
export function ProductCard({ product, className = "", footer, showSku = false }: { product: Product; className?: string; footer?: React.ReactNode; showSku?: boolean }) {
  const discount = discountPercent(product.price, product.compareAtPrice);
  const onSale = discount > 0;
  const hover = product.gallery[1];
  const isNew = product.collections.includes("novedades");
  const lowStock = product.inStock && product.variants.every((v) => v.available !== null && v.available <= 5);

  return (
    <article className={`group relative flex flex-col ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-card">
        <Link href={`/producto/${product.slug}`} aria-label={product.name} className="absolute inset-0">
          <SmartImage
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`object-cover transition-opacity duration-700 ${hover ? "group-hover:opacity-0" : ""}`}
          />
          {hover && (
            <SmartImage
              src={hover}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="scale-[1.08] object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
            />
          )}
        </Link>
        <div className="pointer-events-none absolute top-3 left-3 flex flex-wrap gap-1.5 text-[12px] leading-[22px] font-medium text-white">
          {!product.inStock && <span className="rounded-[10px] bg-[#77767c] px-2">Agotado</span>}
          {onSale && <span className="rounded-[10px] bg-sale px-2">-{discount}%</span>}
          {isNew && <span className="rounded-[10px] bg-new px-2">Nuevo</span>}
          {lowStock && <span className="rounded-[10px] bg-[#5d5bc4] px-2">¡Últimas unidades!</span>}
        </div>
        {/* Botón de compra: aparece al pasar el mouse en desktop; en pantallas táctiles queda bajo el precio. */}
        <div className="absolute inset-x-5 bottom-5 hidden translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 lg:block">
          <AddToCartButton product={product} className="btn btn-light h-11 w-full px-4 text-[15px] shadow-[0_4px_14px_rgba(0,0,0,.08)]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 pt-4">
        <p className="flex gap-3 text-[14px] text-muted">
          {product.brand}
          {showSku && <span>{product.sku}</span>}
        </p>
        <h3 className="text-[17.9px] leading-[1.35] font-medium">
          <Link href={`/producto/${product.slug}`} className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-bottom-left bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_1px]">
            {product.name}
          </Link>
        </h3>
        <p className="flex flex-wrap items-baseline gap-x-2 text-[16px]">
          <span className={onSale ? "text-sale" : "text-ink"}>
            {new Set(product.variants.map((v) => v.price)).size > 1 && "Desde "}
            {formatPrice(product.price)}
          </span>
          {onSale && <s className="text-[14px] text-muted">{formatPrice(product.compareAtPrice!)}</s>}
        </p>
        <AddToCartButton product={product} className="btn btn-outline mt-3 h-10 w-full px-3 text-[14px] lg:hidden" />
        {footer}
      </div>
    </article>
  );
}
