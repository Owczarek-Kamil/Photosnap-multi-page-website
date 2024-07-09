import TwoColumnHeader from "@/components/TwoColumnHeader";
import TwoColumnStoryShowcaseSection, {
  TwoColumnStoryShowcaseSectionProps,
} from "@/components/TwoColumnStoryShowcaseSection";

const BEAUTIFUL_STORIES_SECTION: TwoColumnStoryShowcaseSectionProps = {
  imagesSrc: {
    mobile: "/home/mobile/beautiful-stories.jpg",
    tablet: "/home/tablet/beautiful-stories.jpg",
    desktop: "/home/desktop/beautiful-stories.jpg",
  },
  title: "Beautiful stories every time",
  description: "We provide design and development teams with a simple way to access, manage and share design tokens.",
  imageOnLeft: true,
};

const DESIGNED_FOR_EVERYONE_SECTION: TwoColumnStoryShowcaseSectionProps = {
  imagesSrc: {
    mobile: "/home/mobile/designed-for-everyone.jpg",
    tablet: "/home/tablet/designed-for-everyone.jpg",
    desktop: "/home/desktop/designed-for-everyone.jpg",
  },
  title: "Designed for everyone",
  description:
    "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
  imageOnLeft: false,
};

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-[90rem]">
        <TwoColumnHeader />
        <TwoColumnStoryShowcaseSection
          imagesSrc={BEAUTIFUL_STORIES_SECTION.imagesSrc}
          title={BEAUTIFUL_STORIES_SECTION.title}
          description={BEAUTIFUL_STORIES_SECTION.description}
          imageOnLeft={BEAUTIFUL_STORIES_SECTION.imageOnLeft}
        />
        <TwoColumnStoryShowcaseSection
          imagesSrc={DESIGNED_FOR_EVERYONE_SECTION.imagesSrc}
          title={DESIGNED_FOR_EVERYONE_SECTION.title}
          description={DESIGNED_FOR_EVERYONE_SECTION.description}
          imageOnLeft={DESIGNED_FOR_EVERYONE_SECTION.imageOnLeft}
        />
      </div>
    </main>
  );
}
