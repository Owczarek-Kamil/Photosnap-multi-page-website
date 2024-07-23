import { BEAUTIFUL_STORIES_SECTION, DESIGNED_FOR_EVERYONE_SECTION, MAIN_PAGE_HEADER } from "@/content/pagesContent";
import TwoColumnHeader from "@/components/TwoColumnHeader";
import TwoColumnStoryShowcaseSection from "@/components/TwoColumnStoryShowcaseSection";
import StoryCardList from "@/components/StoryCardList";
import ProductFeatureList from "@/components/ProductFeatureList";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-[90rem]">
        <TwoColumnHeader
          imagesSrc={MAIN_PAGE_HEADER.imagesSrc}
          title={MAIN_PAGE_HEADER.title}
          description={MAIN_PAGE_HEADER.description}
          displayGetInviteLink={MAIN_PAGE_HEADER.displayGetInviteLink}
        />
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
        <StoryCardList isHomepage />
        <ProductFeatureList isHomepage />
      </div>
    </main>
  );
}
