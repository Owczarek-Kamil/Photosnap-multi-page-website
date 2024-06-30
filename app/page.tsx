import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="px-6 py-7 md:pl-9.75 md:pr-10">
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
                className="text-3/4 font-bold uppercase tracking-[2px] text-color-black transition-colors hover:text-color-light-grey focus-visible:text-color-light-grey"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="text-3/4 font-bold uppercase tracking-[2px] text-color-black transition-colors hover:text-color-light-grey focus-visible:text-color-light-grey"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-3/4 font-bold uppercase tracking-[2px] text-color-black transition-colors hover:text-color-light-grey focus-visible:text-color-light-grey"
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
      <footer>footer</footer>
    </>
  );
}
