import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    // Sin base de datos (modo demostración) se usa una URL local: las cuentas y pedidos no funcionan, pero la tienda carga.
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "http://127.0.0.1:54321",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "demo",
  );
}
