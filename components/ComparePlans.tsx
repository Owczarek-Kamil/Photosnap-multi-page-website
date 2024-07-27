import Image from "next/image";
import BUSINESS_PLANS from "@/content/businessPlans";
import FEATURES_AVAILABILITY from "@/content/featuresAvailability";

export default function ComparePlans() {
  const featuresList = Object.entries(FEATURES_AVAILABILITY).map(([feature, plans]) => ({
    feature,
    plans,
  }));

  return (
    <section>
      <div className="mx-auto flex max-w-[45.6875rem] flex-col gap-16 2xl:gap-14">
        <p className="hidden text-center text-10/12 font-bold uppercase tracking-[4.17px] sm:block">Compare</p>
        <div>
          <div className="border-b border-color-black pb-5.5 sm:grid sm:grid-cols-2">
            <p className="text-3/4 font-bold uppercase tracking-[2px]">The features</p>
            <div className="hidden sm:grid sm:grid-cols-3 sm:justify-items-center">
              {BUSINESS_PLANS.map((plan) => (
                <p key={plan} className="text-3/4 font-bold uppercase tracking-[2px]">
                  {plan}
                </p>
              ))}
            </div>
          </div>
          <ul>
            {featuresList.map(({ feature, plans }) => (
              <li
                key={feature}
                className="flex flex-col gap-4 border-b border-color-light-grey pb-5.75 pt-5.5 sm:grid sm:grid-cols-2 sm:gap-0"
              >
                <p className="text-3/4 font-bold uppercase tracking-[2px]">{feature}</p>
                <div className="flex justify-between sm:grid sm:grid-cols-3 sm:justify-items-center">
                  {BUSINESS_PLANS.map((plan) => (
                    <div key={plan} className="flex flex-col gap-2 sm:gap-0">
                      <p className="text-2.5/3.25 uppercase tracking-[1.67px] text-color-black/50 sm:hidden">{plan}</p>
                      {plans.includes(plan) ? (
                        <>
                          <Image src="/pricing/desktop/check.svg" width={16} height={12} alt="" />
                          <p className="sr-only">{`Feature "${feature}" available in "${plan}" plan`}</p>
                        </>
                      ) : (
                        <p className="sr-only">{`Feature "${feature}" not available in "${plan}" plan`}</p>
                      )}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
