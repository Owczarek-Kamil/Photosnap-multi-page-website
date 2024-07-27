export type PriceToggleProps = {
  displayMonthlyPrice: boolean;
  setPriceDisplayToMonthly: () => void;
  setPriceDisplayToYearly: () => void;
  togglePriceDisplay: () => void;
};

export default function PriceToggle({
  displayMonthlyPrice,
  setPriceDisplayToMonthly,
  setPriceDisplayToYearly,
  togglePriceDisplay,
}: PriceToggleProps) {
  return (
    <div className="flex justify-center gap-8 3xl:gap-7.5">
      <button
        type="button"
        onClick={setPriceDisplayToMonthly}
        aria-label="Display monthly price"
        title="Display monthly price"
        className={`text-4.5/6.25 font-bold transition-colors ${displayMonthlyPrice ? "text-color-black" : "text-color-black/60"}`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={togglePriceDisplay}
        aria-label="Toggle price display"
        title="Toggle price display"
        className="relative h-8 w-16 rounded-full bg-color-light-grey"
      >
        <div
          className={`absolute top-1/2 size-6 -translate-y-1/2 rounded-full bg-color-black transition-all duration-300 ${displayMonthlyPrice ? "left-1" : "left-[calc(100%_-_1.5rem_-_0.25rem)]"}`}
        />
      </button>
      <button
        type="button"
        onClick={setPriceDisplayToYearly}
        aria-label="Display yearly price"
        title="Display yearly price"
        className={`text-4.5/6.25 font-bold transition-colors ${!displayMonthlyPrice ? "text-color-black" : "text-color-black/60"}`}
      >
        Yearly
      </button>
    </div>
  );
}
