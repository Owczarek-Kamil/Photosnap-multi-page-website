"use client";

import PRICING_PLANS from "@/content/pricingPlans";
import PricingPlanCard from "./PricingPlanCard";
import useMonthlyPrice from "@/hooks/useMonthlyPrice";
import PriceToggle from "./PriceToggle";

export default function PricingPlanCardList() {
  const { displayMonthlyPrice, setPriceDisplayToMonthly, setPriceDisplayToYearly, togglePriceDisplay } =
    useMonthlyPrice();

  return (
    <section className="flex flex-col gap-10 3xl:gap-12">
      <PriceToggle
        displayMonthlyPrice={displayMonthlyPrice}
        setPriceDisplayToMonthly={setPriceDisplayToMonthly}
        setPriceDisplayToYearly={setPriceDisplayToYearly}
        togglePriceDisplay={togglePriceDisplay}
      />
      <div className="mx-auto flex max-w-[69.375rem] flex-col gap-6 3xl:flex-row 3xl:items-center">
        {PRICING_PLANS.map((pricingPlan) => (
          <PricingPlanCard
            key={pricingPlan.title}
            title={pricingPlan.title}
            description={pricingPlan.description}
            price={pricingPlan.price}
            promoted={pricingPlan.promoted}
            displayMonthlyPrice={displayMonthlyPrice}
          />
        ))}
      </div>
    </section>
  );
}
