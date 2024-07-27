import { TPricingPlan } from "@/types";

const PRICING_PLANS: TPricingPlan[] = [
  {
    title: "Basic",
    description: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: {
      monthly: 19,
      yearly: 190,
    },
  },
  {
    title: "Pro",
    description: "More advanced features available. Recommended for photography veterans and professionals.",
    price: {
      monthly: 39,
      yearly: 390,
    },
    promoted: true,
  },
  {
    title: "Business",
    description: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: {
      monthly: 99,
      yearly: 990,
    },
  },
];

export default PRICING_PLANS;
