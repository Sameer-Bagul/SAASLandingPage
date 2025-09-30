import React from "react";
import { Button } from "@/components/ui/button";
import { landingPageContent } from "@/config/landingPageContent";

export const AnalyticsDashboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 md:px-0 py-12 md:py-[70px] relative">
      <div className="flex-col gap-8 md:gap-[60px] px-4 py-12 md:py-[90px] flex w-full max-w-[1224px] items-center justify-center relative">
        <img
          className="absolute top-[calc(50.00%_-_224px)] left-[calc(50.00%_-_508px)] w-[1016px] h-[450px]"
          alt=""
          aria-hidden="true"
          src="/figmaAssets/bg-shape-color-1.png"
        />

        <img
          className="absolute top-0 left-[129px] w-[966px] h-[448px]"
          alt=""
          aria-hidden="true"
          src="/figmaAssets/bg-shape-5.svg"
        />

        <div className="inline-flex items-center gap-6 md:gap-[30px] flex-[0_0_auto] flex-col relative z-10">
          <div className="flex flex-col w-full max-w-[640px] justify-center gap-4 md:gap-[15px] items-center relative">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutralwhite-200 text-2xl sm:text-3xl lg:text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-tight lg:leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              {landingPageContent.analyticsDashboard.heading}
            </h2>

            <p className="relative self-stretch font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base md:text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed md:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
              {landingPageContent.analyticsDashboard.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button
              aria-label={landingPageContent.analyticsDashboard.startFreeTrialText}
              className="w-full md:w-auto inline-flex gap-2 px-8 py-4 bg-primaryblue-violet items-center justify-center relative flex-[0_0_auto] rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primaryblue-violet"
            >
              {landingPageContent.analyticsDashboard.startFreeTrialText}
            </Button>
            <Button
              variant="outline"
              aria-label={landingPageContent.analyticsDashboard.scheduleDemoText}
              className="w-full md:w-auto inline-flex gap-2 px-8 py-4 bg-transparent border-2 border-primaryblue-violet text-primaryblue-violet items-center justify-center relative flex-[0_0_auto] rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet hover:text-white focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {landingPageContent.analyticsDashboard.scheduleDemoText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
