import React from "react";
import { landingPageContent } from "@/config/landingPageContent";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const MainContentSection = (): JSX.Element => {
  return (
    <section id="features" className="relative flex flex-col w-full items-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <AnimatedBackground />

      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-12 sm:gap-14 lg:gap-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-24 relative w-full">
          <h2 className="w-full lg:w-[712px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-3xl sm:text-4xl lg:text-[length:var(--heading-h2-font-size)] text-center lg:text-left tracking-[var(--heading-h2-letter-spacing)] leading-tight lg:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            {landingPageContent.mainContent.heading}
          </h2>

          <p className="w-full lg:w-[392px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base sm:text-lg lg:text-[length:var(--subtitle-RG-font-size)] text-center lg:text-left tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed lg:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            {landingPageContent.mainContent.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4 sm:gap-6 w-full">
          {landingPageContent.mainContent.bentoFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
