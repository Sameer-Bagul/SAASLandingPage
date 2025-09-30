import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  media?: React.ReactNode;
  backgroundImage?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  media,
  backgroundImage = "/figmaAssets/hero-bg-color-blur.png",
}: HeroSectionProps): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-70 relative">
      <img
        className="absolute top-0 left-0 w-full h-[933px] object-cover"
        alt="Hero bg color blur"
        src={backgroundImage}
      />

      <div className="flex w-full max-w-[1224px] items-center justify-center relative z-10">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-22 w-full">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 w-full">
            <h1 className="w-full lg:w-fit text-center bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-transparent text-3xl sm:text-4xl lg:text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-tight lg:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              {title}
            </h1>

            <p className="w-full max-w-[799px] font-subtitle-LG font-[number:var(--subtitle-LG-font-weight)] text-neutralgray-300 text-base sm:text-lg lg:text-[length:var(--subtitle-LG-font-size)] text-center tracking-[var(--subtitle-LG-letter-spacing)] leading-relaxed lg:leading-[var(--subtitle-LG-line-height)] [font-style:var(--subtitle-LG-font-style)]">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto">
            <Button
              aria-label={primaryButtonText}
              className="w-full sm:w-auto px-8 py-4 bg-primaryblue-violet rounded-[36px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primaryblue-violet"
            >
              {primaryButtonText}
            </Button>

            <Button
              variant="outline"
              aria-label={secondaryButtonText}
              className="w-full sm:w-auto px-8 py-4 rounded-[46px] border-[1.2px] border-solid border-border-primary bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-[linear-gradient(216deg,rgba(21,25,52,0.62)_0%,rgba(21,25,52,0.18)_48%,rgba(21,25,52,0.59)_100%)] transition-all focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {secondaryButtonText}
            </Button>
          </div>

          {media && (
            <div className="w-full max-w-[1134px] aspect-video rounded-lg overflow-hidden mt-8 sm:mt-12 lg:mt-16">
              {media}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};