import React from "react";
import { Button } from "@/components/ui/button";

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <img
        className="absolute top-0 left-0 w-full h-[933px] object-cover"
        alt="Hero bg color blur"
        src="/figmaAssets/hero-bg-color-blur.png"
      />

      <div className="flex w-full max-w-[1224px] items-center justify-center relative">
        <div className="inline-flex items-center gap-[50px] flex-col relative">
          <div className="inline-flex flex-col items-center gap-[30px] relative">
            <div className="inline-flex flex-col items-center gap-[30px] relative">
              <h1 className="relative w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-transparent text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                A CRM dashboard for engineering teams
              </h1>

              <p className="relative w-full max-w-[799px] font-subtitle-LG font-[number:var(--subtitle-LG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-LG-font-size)] text-center tracking-[var(--subtitle-LG-letter-spacing)] leading-[var(--subtitle-LG-line-height)] [font-style:var(--subtitle-LG-font-style)]">
                Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
                ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet
                vitae orci ac penatibus consectetur.
              </p>
            </div>

            <div className="inline-flex items-start gap-[30px] relative">
              <Button className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative bg-primaryblue-violet rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet/90">
                Get a demo
              </Button>

              <Button
                variant="outline"
                className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative rounded-[46px] border-[1.2px] border-solid border-[#282d45] bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-[linear-gradient(216deg,rgba(21,25,52,0.62)_0%,rgba(21,25,52,0.18)_48%,rgba(21,25,52,0.59)_100%)]"
              >
                View pricing
              </Button>
            </div>
          </div>

          <img
            className="relative w-full max-w-[1134px] h-auto"
            alt="Hero image"
            src="/figmaAssets/hero-image.png"
          />
        </div>
      </div>
    </section>
  );
};
