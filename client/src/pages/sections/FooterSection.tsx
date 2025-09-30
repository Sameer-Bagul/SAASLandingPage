import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const navigationData = {
  pages: [
    "Home",
    "Features",
    "Pricing",
    "How It Works",
    "Case Studies",
    "Resources",
    "Blog",
  ],
  secondColumn: [
    "About Us",
    "Contact",
    "Careers",
    "Request Demo",
    "Login",
    "Sign Up",
  ],
  utilityPages: [
    "Privacy Policy",
    "Terms of Service",
    "Documentation",
    "API Access",
    "Support",
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex-col w-full pt-12 md:pt-[100px] pb-10 px-4 md:px-0 bg-neutralblack-1000 flex items-center relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-10 md:gap-[60px] relative">
        <img
          className="absolute top-[calc(50.00%_-_326px)] left-[calc(50.00%_-_960px)] w-[1920px] h-[586px]"
          alt="Bg shape color"
          src="/figmaAssets/bg-shape-color-2.png"
        />

        <div className="inline-flex flex-col items-start gap-8 md:gap-[45px] relative w-full">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[158px] w-full relative">
            <div className="inline-flex items-start gap-6 md:gap-[35px] flex-[0_0_auto] flex-col relative">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Wyse Reports
              </div>

              <Card className="bg-neutralgray-800 border-[#282d45] rounded-[10px] w-full md:w-auto">
                <CardContent className="p-6 md:p-10">
                  <div className="inline-flex flex-col items-start gap-4 md:gap-[19px] relative">
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-lg md:text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-tight md:leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Get market insights in your inbox
                    </h3>

                    <div className="flex flex-col w-full md:w-[333px] items-start gap-4 md:gap-[15px] relative">
                      <Input
                        placeholder="Enter your email"
                        className="w-full bg-neutralgray-800 border-[#282d45] rounded-[50px] px-6 py-2.5 text-neutralgray-400 font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]"
                      />

                      <Button className="w-full h-auto gap-2.5 px-8 py-4 bg-primaryblue-violet hover:bg-primaryblue-violet/90 rounded-[36px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)]">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <nav className="inline-flex flex-col items-start gap-6 md:gap-9 relative self-stretch flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg md:text-xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Product
              </h4>

              <ul className="inline-flex flex-col items-start gap-4 md:gap-[25px] relative">
                {navigationData.pages.map((page, index) => (
                  <li key={`page-${index}`}>
                    <a
                      href="#"
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors`}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="inline-flex flex-col items-start gap-6 md:gap-9 relative self-stretch flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg md:text-xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Company
              </h4>
              
              <ul className="inline-flex flex-col items-start gap-4 md:gap-[25px] relative">
                {navigationData.secondColumn.map((item, index) => (
                  <li key={`second-${index}`}>
                    <a
                      href="#"
                      className="relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="inline-flex flex-col items-start gap-6 md:gap-9 relative self-stretch flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg md:text-xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Resources
              </h4>

              <ul className="inline-flex flex-col items-start gap-4 md:gap-[25px] relative">
                {navigationData.utilityPages.map((page, index) => (
                  <li key={`utility-${index}`}>
                    <a
                      href="#"
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors`}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="inline-flex flex-col items-start gap-6 md:gap-[30px] relative w-full">
            <Separator className="w-full h-px bg-[#282d45]" />

            <div className="w-full flex-col md:flex-row justify-between flex items-center gap-4 md:gap-0 relative">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-sm md:text-base tracking-[0] leading-4 text-center md:text-left">
                <span className="text-[#8f9bb7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  © 2024 Wyse Reports. All rights reserved. AI-Powered Market Research Platform.
                </span>
              </div>

              <img
                className="relative flex-[0_0_auto]"
                alt="Social link list"
                src="/figmaAssets/social-link-list.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
