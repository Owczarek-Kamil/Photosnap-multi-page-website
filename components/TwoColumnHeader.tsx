import Image from "next/image";
import Link from "next/link";

export type TwoColumnHeaderProps = {
  imagesSrc: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
  displayGetInviteLink: boolean;
};

export default function TwoColumnHeader({ imagesSrc, title, description, displayGetInviteLink }: TwoColumnHeaderProps) {
  const { mobile, tablet, desktop } = imagesSrc;

  return (
    <header className="max-h-[40.625rem] sm:flex">
      <div className="relative min-h-73.5 sm:order-last sm:min-w-[35.5%] 2xl:min-w-[57.64%]">
        <Image
          src={mobile}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 100vw, 0"
          className="object-cover sm:hidden"
        />
        <Image
          src={tablet}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 0, (max-width: 1151px) 35vw, 0"
          className="hidden object-cover sm:block 2xl:hidden"
        />
        <Image
          src={desktop}
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 1151px) 0, 58vw"
          className="hidden object-cover 2xl:block"
        />
      </div>
      <div className="relative flex min-h-full items-center bg-color-black py-18 pl-8.25 pr-6 sm:py-43.25 md:px-13.5 4xl:pl-28 4xl:pr-27.75">
        <div className="flex flex-col gap-5.75 sm:relative md:gap-12">
          <div className="flex flex-col gap-4 md:gap-5.25">
            <h1 className="text-balance text-8/10 font-bold uppercase tracking-[3.33px] text-color-white md:text-10/12 md:tracking-[4.17px]">
              {title}
            </h1>
            <p className="text-3.75/6.25 text-color-white/60">{description}</p>
          </div>
          {displayGetInviteLink && (
            <Link
              href="/#"
              className="group flex items-center gap-5.5 text-3/4 font-bold uppercase tracking-[2px] text-color-white"
            >
              <div className="relative">
                <span>Get an invite</span>
                <div className="absolute h-0.25 w-full bg-color-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              </div>
              <Image src="/shared/desktop/arrow-white.svg" width={42} height={12} alt="" />
            </Link>
          )}
          <div className="absolute top-0 h-1.5 w-32 bg-gradient-to-tr from-color-main-accent-1 via-color-main-accent-2 via-[52%] to-color-main-accent-3 sm:-left-8.25 sm:h-full sm:w-1.5 md:-left-13.5 4xl:-left-28" />
        </div>
      </div>
    </header>
  );
}
