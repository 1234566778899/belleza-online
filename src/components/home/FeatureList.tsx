import { BadgeCheck, MessageCircle, Smartphone, Truck } from "lucide-react";

const features = [
  { icon: Truck, text: "Envíos a todo el Perú" },
  { icon: BadgeCheck, text: "Productos 100 % originales" },
  { icon: Smartphone, text: "Paga con Yape o Plin" },
  { icon: MessageCircle, text: "Asesoría por WhatsApp" },
];

/** Lista de beneficios en píldoras (feature list de la plantilla). En móvil se desliza en una fila. */
export function FeatureList() {
  return (
    <section className="py-2">
      <ul className="no-scrollbar container-page flex gap-3 overflow-x-auto md:flex-wrap md:justify-center">
        {features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex shrink-0 items-center gap-2.5 rounded-full border border-line py-1.5 pr-5 pl-1.5 font-medium">
            <span className="grid size-9 place-items-center rounded-full bg-field">
              <Icon className="size-[18px]" strokeWidth={1.5} />
            </span>
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}
