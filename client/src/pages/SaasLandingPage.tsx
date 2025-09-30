import React from "react";
import { AnalyticsDashboardSection } from "./sections/AnalyticsDashboardSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { OverviewSection } from "./sections/OverviewSection";
import { PricingSection } from "./sections/PricingSection";

export const SaasLandingPage = (): JSX.Element => {
  return (
    <main className="bg-[#060b27] w-full flex flex-col pt-20">
      <NavigationBarSection />
      <OverviewSection />
      <MainContentSection />
      <PricingSection />
      <FeatureHighlightSection />
      <AnalyticsDashboardSection />
      <FooterSection />
    </main>
  );
};
