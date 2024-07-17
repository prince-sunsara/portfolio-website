import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSection();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Projects");
        }
      }, [inView, setActiveSection, timeOfLastClick]);
}