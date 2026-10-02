import Link from "next/link";
import { site } from "@/lib/site";

/** Logotipo de texto provisional (como "SLEEK GLOSSY" de la plantilla). Cambia el nombre en src/lib/site.ts. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name}, ir al inicio`} className={`inline-flex shrink-0 flex-col items-center leading-none text-ink ${className}`}>
      <span className="text-[22px] font-bold tracking-[0.18em] uppercase md:text-[26px]">{site.name.split(" ")[0]}</span>
      <span className="mt-1 text-[9px] font-medium tracking-[0.5em] uppercase md:text-[10px]">{site.name.split(" ").slice(1).join(" ") || "Perú"}</span>
    </Link>
  );
}
