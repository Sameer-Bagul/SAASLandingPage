import React from "react";
import { AnalyticsDashboardSection } from "./sections/AnalyticsDashboardSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";

export const SaasLandingPage = (): JSX.Element => {
  return (
    <main className="bg-[#060b27] w-full flex flex-col">
      <NavigationBarSection />
      <OverviewSection />
      <MainContentSection />
      <ContentWrapperSection />
      <ClientTestimonialsSection />
      <FeatureHighlightSection />
      <AnalyticsDashboardSection />
      <ProductShowcaseSection />
      <FooterSection />
    </main>
  );
};
