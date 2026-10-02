"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function HeaderCart() {
  const { count, open } = useCart();
  return (
    <button onClick={open} aria-label={`Abrir carrito (${count})`} className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-field">
      <ShoppingBag className="size-[22px]" strokeWidth={1.5} />
      <span className="absolute top-0 right-0 grid size-[18px] place-items-center rounded-full bg-sale text-[11px] leading-none font-medium text-white">{count}</span>
    </button>
  );
}
