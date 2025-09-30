import React from "react";
import { Button } from "@/components/ui/button";

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 md:px-0 py-12 md:py-[70px] relative">
      <img
        className="absolute top-0 left-0 w-full h-[933px] object-cover"
        alt="Hero bg color blur"
        src="/figmaAssets/hero-bg-color-blur.png"
      />

      <div className="flex w-full max-w-[1224px] items-center justify-center relative">
        <div className="inline-flex items-center gap-8 md:gap-[50px] flex-col relative w-full">
          <div className="inline-flex flex-col items-center gap-6 md:gap-[30px] relative w-full">
            <div className="inline-flex flex-col items-center gap-6 md:gap-[30px] relative w-full px-4">
              <h1 className="relative w-full md:w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-transparent text-3xl md:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-tight md:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                AI-Powered Market Research in Minutes
              </h1>

              <p className="relative w-full max-w-[799px] font-subtitle-LG font-[number:var(--subtitle-LG-font-weight)] text-neutralgray-300 text-base md:text-[length:var(--subtitle-LG-font-size)] text-center tracking-[var(--subtitle-LG-letter-spacing)] leading-relaxed md:leading-[var(--subtitle-LG-line-height)] [font-style:var(--subtitle-LG-font-style)]">
                Get lightning-fast, comprehensive market research reports with unbeatable pricing. 
                Our AI analyzes global markets, industry trends, and competitor insights to deliver 
                actionable intelligence for your business decisions.
              </p>
            </div>

            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-[30px] relative w-full md:w-auto px-4">
              <Button className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 relative bg-primaryblue-violet rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet/90">
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 relative rounded-[46px] border-[1.2px] border-solid border-[#282d45] bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-[linear-gradient(216deg,rgba(21,25,52,0.62)_0%,rgba(21,25,52,0.18)_48%,rgba(21,25,52,0.59)_100%)]"
              >
                View Pricing
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-[1134px] aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Z8E3g-C5324"
              title="Wyse Reports Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
