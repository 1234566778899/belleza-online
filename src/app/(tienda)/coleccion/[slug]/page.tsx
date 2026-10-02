import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollectionView } from "@/components/collection/CollectionView";
import { SmartImage } from "@/components/SmartImage";
import { collectionSlugs, resolveCollection } from "@/lib/catalog/queries";
import { getCatalog } from "@/lib/catalog/server";

// Colecciones y categorías nuevas del admin se generan al primer visitante.
export const revalidate = 60;

export async function generateStaticParams() {
  return collectionSlugs(await getCatalog()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/coleccion/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const collection = resolveCollection(await getCatalog(), slug);
  return { title: collection ? `${collection.title}` : "Colección no encontrada" };
}

export default async function CollectionPage(props: PageProps<"/coleccion/[slug]">) {
  const { slug } = await props.params;
  const collection = resolveCollection(await getCatalog(), slug);
  if (!collection) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: collection.title, href: `/coleccion/${collection.slug}` }]} />

      {/* Cabecera de colección: imagen con radio de 20px y el título encima, como la plantilla. */}
      <section className="container-page pt-4">
        <div className="relative grid min-h-[220px] overflow-hidden rounded-[16px] md:min-h-[320px] md:rounded-[20px]">
          <SmartImage src={collection.image} alt="" fill preload sizes="(min-width: 1536px) 1410px, 100vw" className="object-cover" />
          <div className="relative flex flex-col items-center justify-center px-6 py-10 text-center">
            <h1 className="heading text-hd1">{collection.title}</h1>
            {collection.description && <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6]">{collection.description}</p>}
          </div>
        </div>
      </section>

      <CollectionView slug={collection.slug} products={collection.products} />
    </>
  );
}
