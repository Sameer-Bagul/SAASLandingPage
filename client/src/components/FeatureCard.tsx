import React from "react";
import { BentoFeature } from "@/config/landingPageContent";

interface FeatureCardProps {
  feature: BentoFeature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div
      className={`glass-card rounded-2xl p-4 sm:p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-300 ${feature.colSpan} ${feature.rowSpan} relative overflow-hidden`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-col gap-3 sm:gap-4">
           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primaryblue-violet to-purple-600 flex items-center justify-center shadow-lg shadow-primaryblue-violet/50" aria-hidden="true">
             <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
           </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-base sm:text-lg lg:text-xl tracking-[var(--heading-h6-letter-spacing)] leading-tight [font-style:var(--heading-h6-font-style)]">
              {feature.title}
            </h3>

            <p className="font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-sm sm:text-base tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed [font-style:var(--paragraph-RG-font-style)]">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};