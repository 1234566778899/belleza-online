import Link from "next/link";
import { ChevronDown, User } from "lucide-react";
import { HeaderCart } from "./cart/HeaderCart";
import { HeaderSearch } from "./search/HeaderSearch";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { mainNav as nav } from "./nav";

/** Header de la plantilla: logo a la izquierda, menú al centro e íconos a la derecha (en móvil el logo va al centro). */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white text-ink">
      <div className="container-page grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-x-5 lg:h-20 lg:grid-cols-[auto_1fr_auto] lg:gap-x-8">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <Logo />
        <nav aria-label="Principal" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-1 text-[16px] font-medium xl:gap-3">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className="flex h-20 items-center gap-1 px-2.5" aria-haspopup={item.children ? "true" : undefined}>
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-bottom-left bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                    {item.label}
                  </span>
                  {item.badge && <span className="rounded-[10px] bg-sale px-1.5 text-[11px] leading-[18px] text-white">{item.badge}</span>}
                  {item.children && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" strokeWidth={1.75} />}
                </Link>
                {item.children && (
                  // Submenú al pasar el mouse o con el foco del teclado.
                  <ul className="invisible absolute top-full left-0 z-10 min-w-[230px] translate-y-2 rounded-[10px] bg-white p-3 text-[15px] font-normal opacity-0 shadow-[0_10px_30px_rgba(0,0,0,.12)] transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="block rounded-[6px] px-3 py-2 hover:bg-field">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-0.5 md:gap-1.5">
          <HeaderSearch />
          <Link href="/cuenta" aria-label="Mi cuenta" className="hidden size-10 place-items-center rounded-full transition-colors hover:bg-field md:grid">
            <User className="size-[22px]" strokeWidth={1.5} />
          </Link>
          <HeaderCart />
        </div>
      </div>
    </header>
  );
}
