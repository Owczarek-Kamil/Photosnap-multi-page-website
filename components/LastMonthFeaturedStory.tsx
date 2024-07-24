import Image from "next/image";
import Link from "next/link";
import { TLastMonthFeaturedStory } from "@/types";

export type LastMonthFeaturedStoryProps = TLastMonthFeaturedStory;

export default function LastMonthFeaturedStory({
  title,
  date,
  author,
  description,
  imagesSrc,
}: LastMonthFeaturedStoryProps) {
  const { mobile, tablet, desktop } = imagesSrc;

  return (
    <header className="relative">
      <div className="relative min-h-[19.8125rem] sm:min-h-[40.625rem]">
        <Image
          src={mobile}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 100vw, 0"
          className="object-cover object-top sm:hidden"
        />
        <Image
          src={tablet}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 0, (max-width: 1151px) 100vw, 0"
          className="hidden object-cover object-top sm:block 2xl:hidden"
        />
        <Image
          src={desktop}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 1151px) 0, 100vw"
          className="hidden object-cover object-top 2xl:block"
        />
      </div>
      <div className="flex flex-col gap-6 bg-color-black py-12 pl-7.25 pr-7 sm:absolute sm:left-9.75 sm:top-30.5 sm:z-10 sm:max-w-[24.1875rem] sm:bg-color-black/0 sm:p-0 2xl:left-28">
        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-3/4 font-bold uppercase tracking-[2px] text-color-white">
            Last month&apos;s featured story
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-8/10 font-bold uppercase tracking-[3.33px] text-color-white md:text-10/12 md:tracking-[4.17px]">
              {title}
            </h1>
            <p className="space-x-2.25 text-3.25/4.25">
              <span className="text-color-white/75">{date}</span>
              <span className="text-color-white">by {author}</span>
            </p>
          </div>
        </div>
        <p className="text-3.75/6.25 text-color-white/60">{description}</p>
        <Link
          href="/#"
          className="group flex items-center gap-4 text-3/4 font-bold uppercase tracking-[2px] text-color-white"
        >
          <div className="relative">
            <span>Read the story</span>
            <div className="absolute h-0.25 w-full bg-color-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          </div>
          <Image src="/shared/desktop/arrow-white.svg" width={42} height={12} alt="" />
        </Link>
      </div>
    </header>
  );
}
