import Link from "next/link";
import { TPricingPlan } from "@/types";

export type PricingPlanCardProps = TPricingPlan & { displayMonthlyPrice: boolean };

export default function PricingPlanCard({
  title,
  description,
  price,
  promoted,
  displayMonthlyPrice,
}: PricingPlanCardProps) {
  const { monthly, yearly } = price;
  const formattedMonthly = Number(monthly).toFixed(2);
  const formattedYearly = Number(yearly).toFixed(2);

  return (
    <div
      className={`relative flex flex-col gap-10 pb-10 pl-9.25 pr-9 pt-14 sm:items-start sm:gap-8 sm:pb-10 sm:pl-10 sm:pr-12 sm:pt-10 3xl:max-w-[21.875rem] 3xl:items-stretch 3xl:gap-10 3xl:px-10 ${promoted ? "bg-color-black 3xl:pb-17.75 3xl:pt-22" : "bg-color-very-light-grey 3xl:pb-10 3xl:pt-14"}`}
    >
      <div className="flex flex-col gap-4.5 sm:w-1/2 3xl:w-auto">
        <p
          className={`text-center text-6/6.25 font-bold sm:text-left 3xl:text-center ${promoted ? "text-color-white" : "text-color-black"}`}
        >
          {title}
        </p>
        <p
          className={`text-center text-3.75/6.25 sm:text-left 3xl:text-center ${promoted ? "text-color-white/60" : "text-color-black/60"}`}
        >
          {description}
        </p>
      </div>
      <div className="sm:absolute sm:right-12 sm:top-10.5 3xl:static">
        <p>
          <span
            className={`block text-center text-10/12 font-bold tracking-[4.17px] sm:text-right 3xl:text-center ${promoted ? "text-color-white" : "text-color-black"}`}
          >
            {`$${displayMonthlyPrice ? formattedMonthly : formattedYearly}`}{" "}
          </span>
          <span
            className={`block text-center text-3.75/6.25 sm:text-right 3xl:text-center ${promoted ? "text-color-white/60" : "text-color-black/60"}`}
          >{`${displayMonthlyPrice ? "per month" : "per year"}`}</span>
        </p>
      </div>
      <Link
        href="/pricing#"
        className={`block py-3 text-center text-3/4 font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-color-light-grey hover:text-color-black focus-visible:bg-color-light-grey focus-visible:text-color-black sm:w-1/2 3xl:w-full ${promoted ? "bg-color-white text-color-black" : "bg-color-black text-color-white"}`}
      >
        Pick plan
      </Link>
      {promoted && (
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-tr from-color-main-accent-1 via-color-main-accent-2 via-[52%] to-color-main-accent-3 sm:inset-y-0 sm:left-0 sm:h-auto sm:w-1.5 3xl:inset-x-0 3xl:h-1.5 3xl:w-auto" />
      )}
    </div>
  );
}
