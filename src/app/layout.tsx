import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { AccountProvider } from "@/components/account/AccountProvider";
import { CartProvider } from "@/components/cart/CartProvider";
import { CatalogProvider } from "@/components/catalog/CatalogProvider";
import { getCatalog } from "@/lib/catalog/server";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: { default: `${site.name} | Perfumes, maquillaje y cuidado personal`, template: `%s | ${site.name}` },
  description: "Perfumes, maquillaje y cuidado personal de Ésika, Natura, L'Bel, Cyzone y Yanbal. Productos 100 % originales con envío a todo el Perú.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const catalog = await getCatalog();
  return (
    <html lang="es-PE" suppressHydrationWarning className={`${dmSans.variable} antialiased`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <CatalogProvider catalog={catalog}>
          <AccountProvider>
            <CartProvider>{children}</CartProvider>
          </AccountProvider>
        </CatalogProvider>
      </body>
    </html>
  );
}
