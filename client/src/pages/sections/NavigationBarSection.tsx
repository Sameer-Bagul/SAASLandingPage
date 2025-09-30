import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
];

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[min(96%,1200px)] z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card shadow-2xl' 
          : 'glass-card'
      }`}
      style={{
        borderRadius: '9999px',
      }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Wyse Reports
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 hover:text-primaryblue-violet transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden md:block font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 hover:text-primaryblue-violet hover:bg-white/5"
          >
            Sign In
          </Button>

          <Button className="bg-primaryblue-violet hover:bg-primaryblue-violet/90 rounded-full px-5 py-2 font-button-RG text-sm font-[number:var(--button-RG-font-weight)] text-white shadow-lg shadow-primaryblue-violet/50">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
