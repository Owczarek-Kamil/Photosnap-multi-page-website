import { PRICING_PAGE_HEADER } from "@/content/pagesContent";
import TwoColumnHeader from "@/components/TwoColumnHeader";
import CallToActionWithBackgroundImage from "@/components/CallToActionWithBackgroundImage";
import PricingPlanCardList from "@/components/PricingPlanCardList";
import ComparePlans from "@/components/ComparePlans";

export default function PricingPage() {
  return (
    <>
      <TwoColumnHeader
        title={PRICING_PAGE_HEADER.title}
        description={PRICING_PAGE_HEADER.description}
        displayGetInviteLink={PRICING_PAGE_HEADER.displayGetInviteLink}
        imagesSrc={PRICING_PAGE_HEADER.imagesSrc}
      />
      <div className="pl-7.25 pr-7 pt-16 md:pl-9.75 md:pr-10 md:pt-28 3xl:pt-30">
        <PricingPlanCardList />
      </div>
      <div className="py-16 pl-7.25 pr-7 sm:pl-9.75 sm:pr-10 md:py-28 3xl:py-40">
        <ComparePlans />
      </div>
      <CallToActionWithBackgroundImage />
    </>
  );
}
