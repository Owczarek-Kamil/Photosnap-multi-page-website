"use client";

import { useState, useEffect } from "react";
import MobileMenuModal from "./MobileMenuModal";
import NavigationBar from "./NavigationBar";
import useIsTableView from "@/hooks/useIsTabletView";

export default function NavigationController() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const isTabletView = useIsTableView();

  const toggleMobileMenu = () => setMobileMenuIsOpen((x) => !x);

  useEffect(() => {
    if (isTabletView && mobileMenuIsOpen) {
      toggleMobileMenu();
    }
  }, [isTabletView, mobileMenuIsOpen]);

  return (
    <>
      <NavigationBar renderedInMobileMenu={false} toggleMobileMenuFn={toggleMobileMenu} />
      <MobileMenuModal isOpen={mobileMenuIsOpen} closeFn={toggleMobileMenu} />
    </>
  );
}
