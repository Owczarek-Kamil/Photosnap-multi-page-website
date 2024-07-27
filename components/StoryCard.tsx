import Image from "next/image";
import Link from "next/link";
import { TStoryCard } from "@/types";

export type StoryCardProps = TStoryCard;

export default function StoryCard({ imagesSrc, title, author, date, isVisibleOnMainPage }: StoryCardProps) {
  const { mobile, desktop } = imagesSrc;

  return (
    <Link
      href="/#"
      className="group relative block max-h-[31.25rem] pb-10 pl-8.25 pr-8 pt-59 transition-transform duration-300 focus-visible:z-20 md:px-10.75 md:pt-90.25 xl:hover:-translate-y-6 xl:focus-visible:-translate-y-6"
    >
      <Image src={mobile} alt="" fill sizes="(max-width: 639px) 100vw, 0" className="absolute object-cover sm:hidden" />
      <Image
        src={desktop}
        alt=""
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        className="absolute hidden object-cover sm:block"
      />
      <div className="absolute inset-0 bg-color-black/20" />
      <div className="relative z-10">
        <div className="flex flex-col gap-1 border-b border-b-color-white/25 pb-4">
          {!isVisibleOnMainPage && <p className="text-3.25/4.25 text-color-white">{date}</p>}
          <h2 className="text-4.5/6.25 font-bold text-color-white">{title}</h2>
          <p className="text-3.25/4.25 text-color-white">{author}</p>
        </div>
        <div className="pt-5">
          <span className="group flex items-center justify-between gap-5.5 text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4">
            <span>Read story</span>
            <Image src="/shared/desktop/arrow-white.svg" width={42} height={12} alt="" />
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-tr from-color-main-accent-1 via-color-main-accent-2 via-[52%] to-color-main-accent-3 opacity-0 transition-all xl:group-hover:opacity-100 xl:group-focus-visible:opacity-100" />
    </Link>
  );
}
