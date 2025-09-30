import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { landingPageContent } from "@/config/landingPageContent";

export const FeatureHighlightSection = (): JSX.Element => {

  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-70 relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-12 sm:gap-14 lg:gap-16 relative">
        <header className="flex flex-col gap-6 items-center relative">
          <h2 className="w-full lg:w-fit bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-3xl sm:text-4xl lg:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-tight lg:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            {landingPageContent.testimonials.heading}
          </h2>

          <p className="w-full max-w-[636px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base sm:text-lg lg:text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed lg:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            {landingPageContent.testimonials.description}
          </p>
        </header>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 sm:gap-6 relative w-full">
          {landingPageContent.testimonials.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="flex flex-col w-full items-start gap-6 p-6 relative bg-neutralgray-800 rounded-[10px] border border-solid border-border-primary hover:border-primaryblue-violet/50 transition-colors"
            >
              <CardContent className="p-0 w-full">
                <div className="items-center gap-3 self-stretch w-full flex relative flex-[0_0_auto] mb-6">
                  <Avatar className="relative w-12 h-12 rounded-[10px]">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="object-cover"
                    />
                  </Avatar>

                  <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                    <div className="relative mt-[-1.00px] font-paragraph-MD font-[number:var(--paragraph-MD-font-weight)] text-neutralwhite-200 text-base md:text-[length:var(--paragraph-MD-font-size)] tracking-[var(--paragraph-MD-letter-spacing)] leading-tight md:leading-[var(--paragraph-MD-line-height)] [font-style:var(--paragraph-MD-font-style)]">
                      {testimonial.name}
                    </div>

                    <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-sm tracking-[0] leading-tight">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <div className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralwhite-200 text-sm md:text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed md:leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                  "{testimonial.testimonial}"
                </div>

                <img
                  className="absolute top-6 right-6 w-[57px] h-[41px] opacity-20"
                  alt=""
                  aria-hidden="true"
                  src="/figmaAssets/-.svg"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
