import Link from "next/link";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import NavigationBar from "./NavigationBar";

export type MobileMenuModalProps = {
  isOpen: boolean;
  closeFn: () => void;
};

export default function MobileMenuModal({ isOpen, closeFn }: MobileMenuModalProps) {
  return (
    <Dialog open={isOpen} onClose={closeFn} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-color-black/30 duration-300 ease-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0">
        <DialogPanel transition className="bg-color-white duration-300 ease-out data-[closed]:opacity-0">
          <NavigationBar renderedInMobileMenu toggleMobileMenuFn={closeFn} />
          <div className="flex flex-col items-center gap-5 py-8 pl-8.25 pr-8">
            <ul className="flex w-full flex-col items-center gap-5 border-b border-color-light-grey pb-5">
              {["stories", "features", "pricing"].map((page) => (
                <li key={page}>
                  <Link
                    href={`/${page}`}
                    className="block text-3.75/5 font-bold uppercase tracking-[2.5px] text-color-black outline-offset-4"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#"
              className="w-full bg-color-black py-3.5 text-center text-3.75/5 font-bold uppercase tracking-[2.5px] text-color-white"
            >
              Get an invite
            </Link>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
