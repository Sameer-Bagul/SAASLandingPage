import React from "react";
import { Button } from "@/components/ui/button";
import { landingPageContent } from "@/config/landingPageContent";

export const NavigationBarSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navigation"
      aria-label="Main navigation"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[min(96%,1200px)] z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? 'glass-card shadow-2xl'
          : 'glass-card'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a
          href="#"
          aria-label={`${landingPageContent.brandName} home`}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-transparent rounded-md"
        >
          {landingPageContent.brandName}
        </a>

        <div className="hidden md:flex md:items-center md:gap-8" role="list">
          {landingPageContent.navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              role="listitem"
              className="relative font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 hover:text-primaryblue-violet transition-colors focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            aria-label={landingPageContent.signInText}
            className="hidden md:block font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 hover:text-primaryblue-violet hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {landingPageContent.signInText}
          </Button>

          <Button
            aria-label={landingPageContent.getStartedText}
            className="bg-primaryblue-violet hover:bg-primaryblue-violet/90 rounded-full px-5 py-2 font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-white shadow-lg shadow-primaryblue-violet/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primaryblue-violet"
          >
            {landingPageContent.getStartedText}
          </Button>
        </div>
      </div>
    </nav>
  );
};
