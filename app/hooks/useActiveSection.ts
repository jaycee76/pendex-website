import { useState, useEffect } from "react";

/**
 * Custom hook to track the currently active navigation section
 * based on scroll position and URL hash
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sections = ["overview", "products", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky header height
      let currentSection = "overview"; // Default to overview

      // Check sections from bottom to top to prioritize lower sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop - 50) { // Small buffer for better UX
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Set initial active section based on hash
    handleHashChange();

    // Listen for scroll and hash changes
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeSection;
}
