import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const FeatureHighlightSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVentures",
      avatar: "/figmaAssets/avatar.png",
      testimonial:
        "Wyse Reports transformed our market research process. We got comprehensive competitor analysis in under 10 minutes - work that used to take weeks. The AI insights helped us identify a $50M market opportunity.",
      shape: "/figmaAssets/shape.png",
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, InnovateCo",
      avatar: "/figmaAssets/avatar-1.png",
      testimonial:
        "The pricing is unbelievable for the quality of insights we get. We've saved over $100K in research costs this year alone, and the AI predictions have been remarkably accurate for our product launches.",
      shape: "/figmaAssets/shape-1.png",
    },
    {
      name: "Emma Thompson",
      role: "Strategy Director, GlobalBrands",
      avatar: "/figmaAssets/avatar-2.png",
      testimonial:
        "Lightning-fast reports with incredible depth. The global market coverage and trend analysis are exactly what we needed to expand into new regions. This platform is a game-changer for strategic planning.",
      shape: "/figmaAssets/shape-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center px-4 md:px-0 py-12 md:py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-10 md:gap-[60px] relative">
        <header className="inline-flex flex-col gap-6 items-center relative flex-[0_0_auto]">
          <h2 className="relative w-full md:w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-2xl md:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-tight md:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Trusted by leading businesses
          </h2>

          <p className="relative w-full max-w-[636px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base md:text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed md:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            See how companies are transforming their market research with AI-powered insights and saving time and money in the process.
          </p>
        </header>

        <div className="flex flex-col md:grid md:grid-cols-3 items-stretch gap-6 relative w-full">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="flex flex-col w-full items-start gap-6 p-6 relative bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45] hover:border-primaryblue-violet/50 transition-colors"
            >
              <CardContent className="p-0 w-full">
                <div className="items-center gap-3 self-stretch w-full flex relative flex-[0_0_auto] mb-6">
                  <Avatar className="relative w-12 h-12 rounded-[10px]">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt="Avatar"
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
                  alt="Quote mark"
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
