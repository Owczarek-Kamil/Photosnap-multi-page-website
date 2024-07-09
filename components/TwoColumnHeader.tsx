import Image from "next/image";
import Link from "next/link";

export default function TwoColumnHeader() {
  return (
    <header className="sm:flex">
      <div className="relative h-73.5 sm:order-last sm:h-[40.625rem] sm:min-w-[35.5%] 2xl:min-w-[57.64%]">
        <Image
          src="/home/mobile/create-and-share.jpg"
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 100vw, 0"
          className="object-cover sm:hidden"
        />
        <Image
          src="/home/tablet/create-and-share.jpg"
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 639px) 0, (max-width: 1151px) 35vw, 0"
          className="hidden object-cover sm:block 2xl:hidden"
        />
        <Image
          src="/home/desktop/create-and-share.jpg"
          alt=""
          fill
          quality={100}
          priority
          sizes="(max-width: 1151px) 0, 58vw"
          className="hidden object-cover 2xl:block"
        />
      </div>
      <div className="relative flex min-h-full items-center bg-color-black py-18 pl-8.25 pr-6 md:px-13.5 4xl:pl-28 4xl:pr-27.75">
        <div className="flex flex-col gap-5.75 sm:relative md:gap-12">
          <div className="flex flex-col gap-4 md:gap-5.25">
            <h1 className="text-balance text-8/10 font-bold uppercase tracking-[3.33px] text-color-white md:text-10/12 md:tracking-[4.17px]">
              Create and share your photo stories.
            </h1>
            <p className="text-3.75/6.25 text-color-white/60">
              Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell
              stories and connect with others.
            </p>
          </div>
          <Link
            href="/#"
            className="group flex items-center gap-5.5 text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4"
          >
            <div className="relative">
              <span>Get an invite</span>
              <div className="absolute h-0.25 w-full bg-color-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
            </div>
            <Image src="/shared/desktop/arrow-white.svg" width={42} height={12} alt="" />
          </Link>
          <div className="absolute top-0 h-1.5 w-32 bg-gradient-to-tr from-color-main-accent-1 via-color-main-accent-2 via-[52%] to-color-main-accent-3 sm:-left-8.25 sm:h-full sm:w-1.5 md:-left-13.5 4xl:-left-28" />
        </div>
      </div>
    </header>
  );
}
