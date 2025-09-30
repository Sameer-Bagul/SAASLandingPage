import React from "react";
import { Button } from "@/components/ui/button";

export const AnalyticsDashboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <div className="flex-col gap-[60px] px-0 py-[90px] flex w-full max-w-[1224px] items-center justify-center relative">
        <img
          className="absolute top-[calc(50.00%_-_224px)] left-[calc(50.00%_-_508px)] w-[1016px] h-[450px]"
          alt="Bg shape color"
          src="/figmaAssets/bg-shape-color-1.png"
        />

        <img
          className="absolute top-0 left-[129px] w-[966px] h-[448px]"
          alt="Bg shape"
          src="/figmaAssets/bg-shape-5.svg"
        />

        <div className="inline-flex items-center gap-[30px] flex-[0_0_auto] flex-col relative">
          <img
            className="relative w-[65.38px] h-[50px]"
            alt="Logo"
            src="/figmaAssets/logo-1.svg"
          />

          <div className="flex flex-col w-full max-w-[485px] justify-center gap-[15px] items-center relative">
            <h2 className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Join the community
            </h2>

            <p className="relative self-stretch font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
              Join our 400,000+ person community and contribute to a more
              private and decentralized internet. Start for free.
            </p>
          </div>

          <Button className="inline-flex gap-1.5 px-[25px] py-[15px] bg-[#5865f2] items-center justify-center relative flex-[0_0_auto] rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-[#4752c4]">
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
};
