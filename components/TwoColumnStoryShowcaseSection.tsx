import Image from "next/image";
import Link from "next/link";

export type TwoColumnStoryShowcaseSectionProps = {
  imagesSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
  imageOnLeft: boolean;
};

export default function TwoColumnStoryShowcaseSection({
  imagesSrc,
  title,
  description,
  imageOnLeft,
}: TwoColumnStoryShowcaseSectionProps) {
  const { mobile, tablet, desktop } = imagesSrc;

  return (
    <section className="sm:flex">
      <div
        className={`relative h-67.75 sm:h-[37.5rem] sm:min-w-[35.5%] 2xl:min-w-[57.64%] ${imageOnLeft ? "sm:order-first" : "sm:order-last"}`}
      >
        <Image src={mobile} alt="" fill sizes="(max-width: 639px) 100vw, 0" className="object-cover sm:hidden" />
        <Image
          src={tablet}
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 0, (max-width: 1151px) 35vw, 0"
          className="hidden object-cover sm:block 2xl:hidden"
        />
        <Image
          src={desktop}
          alt=""
          fill
          priority
          sizes="(max-width: 1151px) 0, 58vw"
          className="hidden object-cover 2xl:block"
        />
      </div>
      <div className="relative flex items-center bg-color-white py-18 pl-8.25 pr-6 md:px-13.5 4xl:pl-28 4xl:pr-27.75">
        <div className="flex flex-col gap-5.75 sm:relative md:gap-12">
          <div className="flex flex-col gap-4 md:gap-5.25">
            <h2 className="text-balance text-8/10 font-bold uppercase tracking-[3.33px] text-color-black md:text-10/12 md:tracking-[4.17px]">
              {title}
            </h2>
            <p className="text-3.75/6.25 text-color-black/60">{description}</p>
          </div>
          <Link
            href="/#"
            className="group flex items-center gap-5.5 text-3/4 font-bold uppercase tracking-[2px] text-color-black outline-offset-4"
          >
            <div className="relative">
              <span>View the stories</span>
              <div className="absolute h-0.25 w-full bg-color-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
            </div>
            <Image src="/shared/desktop/arrow.svg" width={42} height={12} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
