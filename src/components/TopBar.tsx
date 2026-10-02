import { Sparkles } from "lucide-react";

const messages = ["Productos 100 % originales", "Envío gratis en Lima desde S/. 150", "Paga con Yape, Plin o transferencia", "Envíos a todo el Perú"];

/** Barra de anuncios negra con textos en bucle (sección "scrolling promotion" de la plantilla). */
export function TopBar() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {[...messages, ...messages].map((m, i) => (
              <li key={i} className="flex h-10 items-center gap-[50px] pr-[50px] text-[13px] font-medium tracking-[0.04em] whitespace-nowrap uppercase">
                {m}
                <Sparkles className="size-3.5" strokeWidth={1.5} aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
