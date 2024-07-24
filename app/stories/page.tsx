import LastMonthFeaturedStory from "@/components/LastMonthFeaturedStory";
import StoryCardList from "@/components/StoryCardList";
import LAST_MONTH_FEATURED_STORY from "@/content/lastMonthFeaturedStory";

export default function StoriesPage() {
  return (
    <>
      <LastMonthFeaturedStory
        title={LAST_MONTH_FEATURED_STORY.title}
        date={LAST_MONTH_FEATURED_STORY.date}
        author={LAST_MONTH_FEATURED_STORY.author}
        description={LAST_MONTH_FEATURED_STORY.description}
        imagesSrc={LAST_MONTH_FEATURED_STORY.imagesSrc}
      />
      <StoryCardList isHomepage={false} />
    </>
  );
}
