import Image from "next/image";
import Link from "next/link";

export type NavigationBarProps = {
  renderedInMobileMenu: boolean;
  toggleMobileMenuFn: () => void;
};

export default function NavigationBar({ renderedInMobileMenu, toggleMobileMenuFn }: NavigationBarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-color-white px-6 py-7 md:pl-9.75 md:pr-10 2xl:py-4">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="outline-offset-4">
          <Image src="/shared/desktop/logo.svg" width={170} height={16} alt="Photosnap logo" />
        </Link>
        <button
          type="button"
          aria-label={renderedInMobileMenu ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenuFn}
          className="h-4 w-5 outline-offset-4 md:hidden"
        >
          {renderedInMobileMenu ? (
            <Image src="/shared/mobile/close.svg" width={20} height={6} alt="" />
          ) : (
            <Image src="/shared/mobile/menu.svg" width={20} height={6} alt="" />
          )}
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
  );
}
