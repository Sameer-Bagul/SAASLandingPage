import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const navigationData = {
  pages: [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Blog post",
    "Pricing",
    "Pricing single",
  ],
  secondColumn: [
    "Features",
    "Careers",
    "Careers single",
    "Request a demo",
    "Login",
    "Sign Up",
  ],
  utilityPages: [
    "Style guide",
    "Password protected",
    "404 Not found",
    "Licenses",
    "Changelog",
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex-col w-full pt-[100px] pb-10 px-0 bg-neutralblack-1000 flex items-center relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative px-4">
        <img
          className="absolute top-[calc(50.00%_-_326px)] left-[calc(50.00%_-_960px)] w-[1920px] h-[586px]"
          alt="Bg shape color"
          src="/figmaAssets/bg-shape-color-2.png"
        />

        <div className="inline-flex flex-col items-start gap-[45px] relative w-full">
          <div className="items-start gap-[158px] w-full inline-flex relative">
            <div className="inline-flex items-start gap-[35px] flex-[0_0_auto] flex-col relative">
              <img
                className="relative flex-[0_0_auto] mt-[-2.19px]"
                alt="Logo"
                src="/figmaAssets/logo-2.svg"
              />

              <Card className="bg-neutralgray-800 border-[#282d45] rounded-[10px]">
                <CardContent className="p-10">
                  <div className="inline-flex flex-col items-start gap-[19px] relative">
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Subscribe to our newsletter
                    </h3>

                    <div className="flex flex-col w-[333px] items-start gap-[15px] relative">
                      <Input
                        placeholder="Enter your email"
                        className="bg-neutralgray-800 border-[#282d45] rounded-[50px] px-[27px] py-2.5 text-neutralgray-400 font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]"
                      />

                      <Button className="w-[330px] h-auto gap-2.5 px-[85px] py-[15px] bg-primaryblue-violet hover:bg-primaryblue-violet/90 rounded-[36px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)]">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <nav className="inline-flex flex-col items-start gap-9 relative self-stretch flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Pages
              </h4>

              <ul className="inline-flex flex-col items-start gap-[25px] relative">
                {navigationData.pages.map((page, index) => (
                  <li key={`page-${index}`}>
                    <a
                      href="#"
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors`}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="inline-flex flex-col h-[287px] items-start justify-end gap-[25px] relative flex-[0_0_auto]">
              <ul className="inline-flex flex-col items-start gap-[25px] relative">
                {navigationData.secondColumn.map((item, index) => (
                  <li key={`second-${index}`}>
                    <a
                      href="#"
                      className="relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="inline-flex flex-col items-start gap-9 relative self-stretch flex-[0_0_auto]">
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Utility Pages
              </h4>

              <ul className="inline-flex flex-col items-start gap-[25px] relative">
                {navigationData.utilityPages.map((page, index) => (
                  <li key={`utility-${index}`}>
                    <a
                      href="#"
                      className={`${index === 0 ? "mt-[-1.00px]" : ""} relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralgray-300 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)] hover:text-neutralwhite-200 transition-colors`}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="inline-flex flex-col items-start gap-[30px] relative w-full">
            <Separator className="w-full h-px bg-[#282d45]" />

            <div className="w-full justify-between flex items-center relative">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-base tracking-[0] leading-4">
                <span className="text-[#8f9bb7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  Copyright © Product | Designed by
                </span>

                <span className="text-[#f6f6f7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  &nbsp;
                </span>

                <a
                  href="https://webocean.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#f6f6f7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)] hover:text-primaryblue-violet transition-colors"
                >
                  Webocean LTD
                </a>

                <span className="text-[#f6f6f7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  &nbsp;
                </span>

                <span className="text-[#8f9bb7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  - Powered by
                </span>

                <span className="text-[#f6f6f7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  &nbsp;
                </span>

                <a
                  href="https://webflow.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#f6f6f7] leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)] hover:text-primaryblue-violet transition-colors"
                >
                  Webflow
                </a>
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
