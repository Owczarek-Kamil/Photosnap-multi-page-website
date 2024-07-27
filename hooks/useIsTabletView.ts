import { useState, useEffect } from "react";

export default function useIsTableView() {
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., the code is running in the browser)

    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsTabletView(window.innerWidth >= 768);
      };

      window.addEventListener("resize", handleResize);

      // Initial check
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    return undefined;
  }, []);

  return isTabletView;
}
