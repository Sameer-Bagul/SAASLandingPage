import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { landingPageContent } from "@/config/landingPageContent";

export const FooterSection = (): JSX.Element => {
  return (
    <footer aria-label="Site footer" className="flex-col w-full pt-16 sm:pt-20 lg:pt-30 pb-10 px-4 sm:px-6 lg:px-0 bg-neutralblack-1000 flex items-center relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-12 sm:gap-14 lg:gap-16 relative">
        <img
          className="absolute top-[calc(50.00%_-_326px)] left-[calc(50.00%_-_960px)] w-[1920px] h-[586px]"
          alt="Bg shape color"
          src="/figmaAssets/bg-shape-color-2.png"
        />

        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-12 relative w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24 w-full relative">
            <div className="flex items-start gap-6 sm:gap-8 lg:gap-10 flex-col relative">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {landingPageContent.footer.brandName}
              </div>

              <Card className="bg-neutralgray-800 border-border-primary rounded-[10px] w-full md:w-auto">
                <CardContent className="p-6 md:p-10">
                  <div className="inline-flex flex-col items-start gap-4 md:gap-[19px] relative">
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-lg sm:text-xl lg:text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-tight lg:leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {landingPageContent.footer.newsletterHeading}
                    </h3>

                    <div className="flex flex-col w-full md:w-[333px] items-start gap-4 md:gap-[15px] relative">
                      <Input
                        placeholder="Enter your email"
                        className="w-full bg-neutralgray-800 border-border-primary rounded-[50px] px-6 py-2.5 text-neutralgray-400 font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]"
                      />

                      <Button className="w-full h-auto gap-2.5 px-8 py-4 bg-primaryblue-violet hover:bg-primaryblue-violet/90 rounded-[36px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)]">
                        {landingPageContent.footer.subscribeText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <nav aria-label="Product links" className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-9 relative self-stretch">
              <h4 className="w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg sm:text-xl lg:text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Product
              </h4>

              <ul className="flex flex-col items-start gap-4 sm:gap-6 relative">
                {landingPageContent.footer.navigationData.pages.map((page, index) => (
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

            <nav aria-label="Company links" className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-9 relative self-stretch">
              <h4 className="w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg sm:text-xl lg:text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Company
              </h4>

              <ul className="flex flex-col items-start gap-4 sm:gap-6 relative">
                {landingPageContent.footer.navigationData.secondColumn.map((item, index) => (
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

            <nav aria-label="Resources links" className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-9 relative self-stretch">
              <h4 className="w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-lg sm:text-xl lg:text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap">
                Resources
              </h4>

              <ul className="flex flex-col items-start gap-4 sm:gap-6 relative">
                {landingPageContent.footer.navigationData.utilityPages.map((page, index) => (
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
            <Separator className="w-full h-px bg-border-primary" />

            <div className="w-full flex-col md:flex-row justify-between flex items-center gap-4 md:gap-0 relative">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-sm md:text-base tracking-[0] leading-4 text-center md:text-left">
                <span className="text-text-secondary leading-[var(--paragraph-RG-line-height)] font-paragraph-RG [font-style:var(--paragraph-RG-font-style)] font-[number:var(--paragraph-RG-font-weight)] tracking-[var(--paragraph-RG-letter-spacing)] text-[length:var(--paragraph-RG-font-size)]">
                  {landingPageContent.footer.copyrightText}
                </span>
              </div>

              <img
                className="relative flex-[0_0_auto]"
                alt=""
                aria-hidden="true"
                src="/figmaAssets/social-link-list.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
