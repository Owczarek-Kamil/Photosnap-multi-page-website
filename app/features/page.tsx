import { FEATURES_PAGE_HEADER } from "@/content/pagesContent";
import ProductFeatureList from "@/components/ProductFeatureList";
import TwoColumnHeader from "@/components/TwoColumnHeader";
import CallToActionWithBackgroundImage from "@/components/CallToActionWithBackgroundImage";

export default function FeaturesPage() {
  return (
    <>
      <TwoColumnHeader
        title={FEATURES_PAGE_HEADER.title}
        description={FEATURES_PAGE_HEADER.description}
        displayGetInviteLink={FEATURES_PAGE_HEADER.displayGetInviteLink}
        imagesSrc={FEATURES_PAGE_HEADER.imagesSrc}
      />
      <ProductFeatureList isHomepage={false} />
      <CallToActionWithBackgroundImage />
    </>
  );
}
