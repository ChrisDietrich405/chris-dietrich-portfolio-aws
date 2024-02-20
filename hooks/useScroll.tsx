import { useEffect, useState } from "react";

export default function useScroll() {
  const [shouldScrollToTop, setShouldScrollToTop] = useState<boolean>(false); 

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      if (pageYOffset >= 500) {
        setShouldScrollToTop(true);
      } else {
        setShouldScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const scrollToSection = (position) => {
    window.scrollTo({ top: position, left: 0, behavior: "smooth" });
  };

  return { shouldScrollToTop, scrollToTop, scrollToSection };
}
