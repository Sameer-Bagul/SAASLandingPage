import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", isActive: true },
  { label: "Features", isActive: false },
  { label: "Pricing", isActive: false },
  { label: "How It Works", isActive: false },
  { label: "Contact", isActive: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col w-full items-center px-4 py-6 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#151934]">
      <div className="flex w-full max-w-[1224px] items-center justify-between relative flex-[0_0_auto]">
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Wyse Reports
          </div>
        </div>

        <div className="hidden md:inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] cursor-pointer hover:text-white transition-colors"
            >
              <div
                className={`relative w-fit mt-[-1.00px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-[length:var(--subtitle-RG-font-size)] tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] whitespace-nowrap [font-style:var(--subtitle-RG-font-style)] ${
                  item.isActive ? "text-neutralwhite" : "text-neutralgray-300"
                }`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-3 relative flex-[0_0_auto] bg-primaryblue-violet rounded-[36px] h-auto hover:bg-primaryblue-violet/90">
          <div className="relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
            Start Free Trial
          </div>
        </Button>
      </div>
    </nav>
  );
};
