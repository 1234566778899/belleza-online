/** Datos de contacto y de la tienda en un solo lugar. El nombre es provisional: cámbialo aquí. */
export const site = {
  name: "Belleza Online",
  /** Datos del proveedor para el libro de reclamaciones. Completa el RUC cuando lo tengas. */
  legalName: "Belleza Online",
  ruc: "",
  email: "hola@bellezaonline.pe",
  phoneDisplay: "+51 904 435 631",
  whatsappNumber: "51904435631",
  hours: "Lun-Sáb 9AM a 7PM",
  address: "Av. José Larco 345, Miraflores, Lima 15074, Perú",
  currencyLabel: "PE (PEN S/.)",
};

/** Enlace a WhatsApp, opcionalmente con un mensaje prellenado. */
export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
