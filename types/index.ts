export type TProductFeature = {
  title: string;
  description: string;
  imageSrc: string;
  displayOnHomepage: boolean;
  offsetImgInYAxis?: boolean;
};

export type TLastMonthFeaturedStory = {
  title: string;
  date: string;
  author: string;
  description: string;
  imagesSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export type THeader = {
  imagesSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
  displayGetInviteLink: boolean;
};

export type TStoryShowcase = {
  imagesSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
  imageOnLeft: boolean;
};

export type TStoryCard = {
  imagesSrc: {
    mobile: string;
    desktop: string;
  };
  title: string;
  author: string;
  date: string;
  isVisibleOnMainPage: boolean;
};

export type TPricingPlan = {
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  promoted?: boolean;
};

export type TBusinessPlanName = "basic" | "pro" | "business";

export type TFeaturesAvailability = {
  "unlimited story posting": TBusinessPlanName[];
  "unlimited photo upload": TBusinessPlanName[];
  "embeding custom content": TBusinessPlanName[];
  "customize metadata": TBusinessPlanName[];
  "advanced metrics": TBusinessPlanName[];
  "photo downloads": TBusinessPlanName[];
  "search engine indexing": TBusinessPlanName[];
  "custom analytics": TBusinessPlanName[];
};
