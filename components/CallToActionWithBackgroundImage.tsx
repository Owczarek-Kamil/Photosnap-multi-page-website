import Image from "next/image";
import Link from "next/link";

export default function CallToActionWithBackgroundImage() {
  return (
    <section className="relative py-16 pl-8.25 pr-8 md:py-17 md:pl-9.75 md:pr-10 2xl:px-41.25">
      <div className="mx-auto max-w-[69.375rem]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/shared/mobile/bg-beta.jpg"
            alt=""
            fill
            quality={100}
            sizes="(max-width: 639px) 100vw, 0"
            className="object-cover sm:hidden"
          />
          <Image
            src="/shared/tablet/bg-beta.jpg"
            alt=""
            fill
            quality={100}
            sizes="(max-width: 639px) 0, (max-width: 1151px) 100vw, 0"
            className="hidden object-cover sm:block 2xl:hidden"
          />
          <Image
            src="/shared/desktop/bg-beta.jpg"
            alt=""
            fill
            quality={100}
            sizes="(max-width: 1151px) 0, 100vw"
            className="hidden object-cover 2xl:block"
          />
        </div>
        <div className="absolute left-8.25 top-0 h-1.5 w-32 bg-gradient-to-tr from-color-main-accent-1 via-color-main-accent-2 via-[52%] to-color-main-accent-3 md:inset-y-0 md:left-0 md:h-auto md:w-1.5" />
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-8/10 font-bold uppercase text-color-white md:text-10/12">
            <span className="block">We&apos;re in beta. </span>
            <span className="block">Get your invite </span>
            <span className="block">today!</span>
          </p>
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
        </div>
      </div>
    </section>
  );
}
