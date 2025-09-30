import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { landingPageContent } from "@/config/landingPageContent";

export const OverviewSection = (): JSX.Element => {
  return (
    <section id="main-content">
      <HeroSection
      title={landingPageContent.overview.heading}
      subtitle={landingPageContent.overview.description}
      primaryButtonText={landingPageContent.overview.startFreeTrialText}
      secondaryButtonText={landingPageContent.overview.viewPricingText}
      media={
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Z8E3g-C5324"
          title="Wyse Reports Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      }
    />
   </section>
 );
};
