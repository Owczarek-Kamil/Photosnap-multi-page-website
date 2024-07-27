import STORIES_CARDS_DATA from "@/content/storiesCards";
import StoryCard from "@/components/StoryCard";

type StoryCardProps = {
  isHomepage: boolean;
};

export default function StoryCardList({ isHomepage }: StoryCardProps) {
  const storiesToPresent = isHomepage
    ? STORIES_CARDS_DATA.filter((story) => story.isVisibleOnMainPage)
    : STORIES_CARDS_DATA;

  return (
    <section className="xsm:grid xsm:grid-cols-2 xl:grid-cols-4">
      {storiesToPresent.map((story) => (
        <StoryCard
          key={story.title}
          imagesSrc={story.imagesSrc}
          title={story.title}
          author={story.author}
          date={story.date}
          isVisibleOnMainPage={isHomepage ? story.isVisibleOnMainPage : false}
        />
      ))}
    </section>
  );
}
