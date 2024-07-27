import { TProductFeature } from "@/types";

const PRODUCT_FEATURES: TProductFeature[] = [
  {
    title: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    imageSrc: "/features/desktop/responsive.svg",
    displayOnHomepage: true,
  },
  {
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    imageSrc: "/features/desktop/no-limit.svg",
    displayOnHomepage: true,
    offsetImgInYAxis: true,
  },
  {
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    imageSrc: "/features/desktop/embed.svg",
    displayOnHomepage: true,
  },
  {
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    imageSrc: "/features/desktop/custom-domain.svg",
    displayOnHomepage: false,
  },
  {
    title: "Boost Your Exposure",
    description:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    imageSrc: "/features/desktop/boost-exposure.svg",
    displayOnHomepage: false,
  },
  {
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    imageSrc: "/features/desktop/drag-drop.svg",
    displayOnHomepage: false,
  },
];

export default PRODUCT_FEATURES;
