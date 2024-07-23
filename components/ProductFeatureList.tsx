import ProductFeature from "./ProductFeature";
import PRODUCT_FEATURES from "@/content/productFeatures";

type ProductFeatureListProps = {
  isHomepage: boolean;
};

export default function ProductFeatureList({ isHomepage }: ProductFeatureListProps) {
  const featuresToPresent = isHomepage
    ? PRODUCT_FEATURES.filter((feature) => feature.displayOnHomepage)
    : PRODUCT_FEATURES;

  return (
    <section
      className={`mx-auto flex max-w-[69.375rem] flex-col pl-8.25 pr-8 *:mx-auto md:pl-9.5 md:pr-10 3xl:px-0 ${isHomepage ? "gap-14 py-20 md:gap-y-20 md:py-30 xl:grid xl:grid-cols-3 xl:gap-x-7.5" : "gap-13.75 pb-22.75 pt-16 md:grid md:grid-cols-2 md:gap-x-2.75 md:gap-y-18 md:py-28 xl:grid-cols-3 xl:gap-x-7.5 xl:gap-y-26 xl:py-40"}`}
    >
      {featuresToPresent.map((feature) => (
        <ProductFeature
          key={feature.title}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          offsetImgInYAxis={feature.offsetImgInYAxis}
        />
      ))}
    </section>
  );
}
