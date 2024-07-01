import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 bg-color-white px-6 py-7 md:pl-9.75 md:pr-10">
        <div className="mx-auto flex max-w-[69.375rem] items-center justify-between">
          <Link href="/" aria-label="Go to homepage" className="outline-offset-4">
            <Image src="/shared/desktop/logo.svg" width={170} height={16} alt="Photosnap logo" />
          </Link>
          <button type="button" aria-label="Open menu" className="h-4 w-5 outline-offset-4 md:hidden">
            <Image src="/shared/mobile/menu.svg" width={20} height={6} alt="" />
          </button>
          <ul className="hidden items-center gap-9.25 md:flex">
            <li>
              <Link
                href="/stories"
                className="block text-3/4 font-bold uppercase tracking-[2px] text-color-black outline-offset-4 transition-colors hover:text-color-black/30 focus-visible:text-color-black/30"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="block text-3/4 font-bold uppercase tracking-[2px] text-color-black outline-offset-4 transition-colors hover:text-color-black/30 focus-visible:text-color-black/30"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block text-3/4 font-bold uppercase tracking-[2px] text-color-black outline-offset-4 transition-colors hover:text-color-black/30 focus-visible:text-color-black/30"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link
            href="/#"
            className="hidden bg-color-black px-6 py-3 text-3/4 font-bold uppercase tracking-[2px] text-color-white transition-colors hover:bg-color-light-grey hover:text-color-black focus-visible:bg-color-light-grey focus-visible:text-color-black md:block"
          >
            Get an invite
          </Link>
        </div>
      </nav>
      <main>main</main>
      <footer className="bg-color-black px-15 py-14 md:py-16 md:pl-9.75 md:pr-10">
        <div className="mx-auto flex max-w-[69.375rem] flex-col items-center gap-29.75 md:flex-row md:items-stretch md:justify-between md:gap-0">
          <div className="flex flex-col items-center justify-center gap-8 md:items-start 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-x-27.5 2xl:gap-y-0">
            <Link href="/" aria-label="Go to homepage" className="outline-offset-4">
              <Image src="/shared/desktop/logo-white.svg" width={170} height={16} alt="Photosnap logo" />
            </Link>
            <ul className="flex items-center gap-3.25 md:order-last md:mt-10">
              <li>
                <a
                  href="https://facebook.com"
                  target="_parent"
                  aria-label="Go to our Facebook page"
                  className="group grid grid-cols-1 grid-rows-1 outline-offset-2"
                >
                  <Image
                    src="/shared/desktop/facebook.svg"
                    width={20}
                    height={20}
                    alt="Facebook logo"
                    className="col-span-full row-span-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <Image
                    src="/shared/desktop/facebook-white.svg"
                    width={20}
                    height={20}
                    alt="Facebook logo"
                    className="col-span-full row-span-full opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_parent"
                  aria-label="Go to our YouTube channel"
                  className="group grid grid-cols-1 grid-rows-1 outline-offset-2"
                >
                  <Image
                    src="/shared/desktop/youtube.svg"
                    width={20}
                    height={20}
                    alt="Youtube logo"
                    className="col-span-full row-span-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <Image
                    src="/shared/desktop/youtube-white.svg"
                    width={20}
                    height={20}
                    alt="Youtube logo"
                    className="col-span-full row-span-full opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_parent"
                  aria-label="Go to our Twitter profile"
                  className="group grid grid-cols-1 grid-rows-1 outline-offset-2"
                >
                  <Image
                    src="/shared/desktop/twitter.svg"
                    width={20}
                    height={20}
                    alt="Twitter logo"
                    className="col-span-full row-span-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <Image
                    src="/shared/desktop/twitter-white.svg"
                    width={20}
                    height={20}
                    alt="Twitter logo"
                    className="col-span-full row-span-full opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_parent"
                  aria-label="Go to our Pinterest page"
                  className="group grid grid-cols-1 grid-rows-1 outline-offset-2"
                >
                  <Image
                    src="/shared/desktop/pinterest.svg"
                    width={20}
                    height={20}
                    alt="Pinterest logo"
                    className="col-span-full row-span-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <Image
                    src="/shared/desktop/pinterest-white.svg"
                    width={20}
                    height={20}
                    alt="Pinterest logo"
                    className="col-span-full row-span-full opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_parent"
                  aria-label="Go to our Instagram profile"
                  className="group grid grid-cols-1 grid-rows-1 outline-offset-2"
                >
                  <Image
                    src="/shared/desktop/instagram.svg"
                    width={20}
                    height={20}
                    alt="Instagram logo"
                    className="col-span-full row-span-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <Image
                    src="/shared/desktop/instagram-white.svg"
                    width={20}
                    height={20}
                    alt="Instagram logo"
                    className="col-span-full row-span-full opacity-100 transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                </a>
              </li>
            </ul>
            <ul className="mt-4.25 flex flex-col items-center gap-4.75 md:mt-0 md:flex-row md:gap-6.5 2xl:col-start-2 2xl:col-end-3 2xl:row-span-full 2xl:flex-col 2xl:items-start 2xl:gap-4.75">
              <li>
                <Link
                  href="/"
                  className="block text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4 transition-colors hover:text-color-white/30 focus-visible:text-color-white/30"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="block text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4 transition-colors hover:text-color-white/30 focus-visible:text-color-white/30"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="block text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4 transition-colors hover:text-color-white/30 focus-visible:text-color-white/30"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block text-3/4 font-bold uppercase tracking-[2px] text-color-white outline-offset-4 transition-colors hover:text-color-white/30 focus-visible:text-color-white/30"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-8.5 md:items-end md:justify-between">
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
            <p className="text-3.75/5 text-color-white/50">Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
