import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { landingPageContent } from "@/config/landingPageContent";

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-70 relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-12 sm:gap-14 lg:gap-16 relative">
        <header className="flex flex-col gap-6 items-center relative">
          <h2 className="w-full lg:w-fit bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-3xl sm:text-4xl lg:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-tight lg:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            {landingPageContent.pricing.heading}
          </h2>

          <p className="w-full max-w-[636px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base sm:text-lg lg:text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed lg:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            {landingPageContent.pricing.description}
          </p>
        </header>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 sm:gap-6 relative w-full">
          {landingPageContent.pricing.plans.map((plan, index) => (
            <Card 
              key={index}
              className={`flex flex-col w-full items-start gap-8 p-8 relative bg-neutralgray-800 rounded-[10px] border-2 transition-all hover:scale-105 ${
                plan.highlighted 
                  ? "border-primaryblue-violet shadow-lg shadow-primaryblue-violet/20"
                  : "border-border-primary hover:border-primaryblue-violet/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primaryblue-violet px-4 py-1 rounded-full">
                  <span className="text-white text-sm font-semibold">Most Popular</span>
                </div>
              )}
              
              <CardContent className="p-0 w-full flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-neutralwhite-200 text-xl sm:text-2xl lg:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-tight lg:leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-neutralwhite-200">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-neutralgray-300 text-base">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed md:leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primaryblue-violet flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralwhite-200 text-sm md:text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed [font-style:var(--paragraph-RG-font-style)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  aria-label={`${plan.cta} for ${plan.name} plan`}
                  className={`w-full py-6 rounded-[36px] font-button-RG font-[number:var(--button-RG-font-weight)] text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-neutralgray-800 ${
                    plan.highlighted
                      ? "bg-primaryblue-violet hover:bg-primaryblue-violet/90 text-white"
                      : "bg-transparent border-2 border-primaryblue-violet text-primaryblue-violet hover:bg-primaryblue-violet hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-neutralgray-300 text-sm">
          {landingPageContent.pricing.footerText}
        </div>
      </div>
    </section>
  );
};
