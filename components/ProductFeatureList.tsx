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
      className={`mx-auto flex max-w-[69.375rem] flex-col *:mx-auto ${isHomepage ? "gap-14 md:gap-y-20 xl:grid xl:grid-cols-3 xl:gap-x-7.5" : "gap-13.75 md:grid md:grid-cols-2 md:gap-x-2.75 md:gap-y-18 xl:grid-cols-3 xl:gap-x-7.5 xl:gap-y-26"}`}
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
