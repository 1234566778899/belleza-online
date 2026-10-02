import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CardImages } from "@/components/home/CardImages";
import { CategorySlider } from "@/components/home/CategorySlider";
import { FeatureList } from "@/components/home/FeatureList";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ImageWithText } from "@/components/home/ImageWithText";
import { ProductTabs } from "@/components/home/ProductTabs";
import { Testimonials } from "@/components/home/Testimonials";
import { brands, featuredCategories, heroSlides } from "@/data/catalog";
import { collectionProducts } from "@/lib/catalog/queries";
import { getCatalog } from "@/lib/catalog/server";
import { img } from "@/lib/images";

// Mismo orden de secciones que el inicio de la plantilla Sleek.
export default async function Home() {
  const catalog = await getCatalog();
  const tab = (label: string, slug: string) => ({ label, href: `/coleccion/${slug}`, products: collectionProducts(catalog, slug).slice(0, 8) });

  return (
    <>
      <HeroSlideshow slides={heroSlides} />

      <ProductTabs tabs={[tab("Más vendidos", "mas-vendidos"), tab("Novedades", "novedades"), tab("Ofertas", "ofertas")]} />

      <CategorySlider items={featuredCategories.map((c) => ({ ...c, count: collectionProducts(catalog, c.slug).length }))} />

      <ImageWithText
        subtitle="Originales y seguros"
        title="Belleza en la que confías"
        text="Compramos directamente a las marcas y revisamos cada lote. Si tienes dudas sobre un tono o una fragancia, te asesoramos por WhatsApp."
        cta="Comprar ahora"
        href="/coleccion/todos"
        image={img("iwt-original")}
      />

      <FeatureList />

      <CardImages
        title="Lo más buscado esta semana"
        cards={[
          { subtitle: "Fragancias", title: "Encuentra tu aroma", text: "Perfumes florales, frescos y amaderados para cada ocasión.", cta: "Ver perfumes", href: "/coleccion/perfumes", image: img("card-perfumes") },
          { subtitle: "Maquillaje", title: "Muestra tu color", text: "Labiales, bases y sombras de larga duración.", cta: "Ver maquillaje", href: "/coleccion/maquillaje", image: img("card-maquillaje") },
          { subtitle: "Regalos", title: "Sorprende con un set", text: "Sets listos para regalar, con empaque incluido.", cta: "Ver sets", href: "/coleccion/sets-de-regalo", image: img("card-regalos") },
        ]}
      />

      <BrandMarquee brands={brands} />

      <div className="h-[60px] md:h-20" />
      <Testimonials />
      {/* La última sección crema llega hasta el footer, sin su margen superior. */}
      <div className="-mb-[60px] md:-mb-20">
        <HomeFaq />
      </div>
    </>
  );
}
