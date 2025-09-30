import React, { Suspense, lazy } from "react";
import { Loading } from "../components/Loading";
import ErrorBoundary from "../components/ErrorBoundary";

const AnalyticsDashboardSection = lazy(() => import("./sections/AnalyticsDashboardSection").then(module => ({ default: module.AnalyticsDashboardSection })));
const FeatureHighlightSection = lazy(() => import("./sections/FeatureHighlightSection").then(module => ({ default: module.FeatureHighlightSection })));
const FooterSection = lazy(() => import("./sections/FooterSection").then(module => ({ default: module.FooterSection })));
const MainContentSection = lazy(() => import("./sections/MainContentSection").then(module => ({ default: module.MainContentSection })));
const NavigationBarSection = lazy(() => import("./sections/NavigationBarSection").then(module => ({ default: module.NavigationBarSection })));
const OverviewSection = lazy(() => import("./sections/OverviewSection").then(module => ({ default: module.OverviewSection })));
const PricingSection = lazy(() => import("./sections/PricingSection").then(module => ({ default: module.PricingSection })));

export const SaasLandingPage = (): JSX.Element => {
  return (
    <main className="bg-brand-dark w-full flex flex-col pt-20">
      {/* Skip Links */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primaryblue-violet text-white px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 focus:z-50 bg-primaryblue-violet text-white px-4 py-2 rounded-md font-medium"
      >
        Skip to navigation
      </a>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <NavigationBarSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OverviewSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <MainContentSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <PricingSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <FeatureHighlightSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <AnalyticsDashboardSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <FooterSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};
