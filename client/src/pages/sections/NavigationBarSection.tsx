import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", isActive: true },
  { label: "About", isActive: false },
  { label: "Features", isActive: false },
  { label: "Pricing", isActive: false },
  { label: "Blog", isActive: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col w-full items-center px-0 py-[25px] relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#151934]">
      <div className="flex w-full max-w-[1224px] items-center justify-between relative flex-[0_0_auto] px-4">
        <div className="flex w-[158px] items-start gap-px px-[3px] py-0.5 relative">
          <img
            className="relative flex-[0_0_auto] mt-[-2.00px]"
            alt="Logo"
            src="/figmaAssets/logo.png"
          />

          <img
            className="absolute top-[25px] left-[152px] w-[5px] h-1"
            alt="Vector"
            src="/figmaAssets/vector.svg"
          />
        </div>

        <div className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] cursor-pointer"
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

        <Button className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative flex-[0_0_auto] bg-primaryblue-violet rounded-[36px] h-auto hover:bg-primaryblue-violet/90">
          <div className="relative w-fit mt-[-1.00px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
            Get a demo
          </div>
        </Button>
      </div>
    </nav>
  );
};
