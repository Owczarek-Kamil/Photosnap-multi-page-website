import { useState } from "react";

export default function useMonthlyPrice() {
  const [displayMonthlyPrice, setDisplayMonthlyPrice] = useState(true);

  const setPriceDisplayToMonthly = () => setDisplayMonthlyPrice(true);
  const setPriceDisplayToYearly = () => setDisplayMonthlyPrice(false);
  const togglePriceDisplay = () => setDisplayMonthlyPrice((prev) => !prev);

  return { displayMonthlyPrice, setPriceDisplayToMonthly, setPriceDisplayToYearly, togglePriceDisplay };
}
