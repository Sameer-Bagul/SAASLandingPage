import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    icon: "/figmaAssets/icon-8.svg",
    iconWidth: "w-[53.05px]",
    iconHeight: "h-[45px]",
    title: "User information",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/figmaAssets/icon-2.svg",
    iconWidth: "w-[47.94px]",
    iconHeight: "h-[45px]",
    title: "Deal tracking",
    description:
      "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/figmaAssets/group.png",
    iconWidth: "w-[45px]",
    iconHeight: "h-[45px]",
    title: "Pipeline management",
    description:
      "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    isBackground: true,
  },
  {
    icon: "/figmaAssets/icon.png",
    iconWidth: "w-[34.29px]",
    iconHeight: "h-[45px]",
    title: "Reporting dashboard",
    description:
      "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/figmaAssets/icon-7.svg",
    iconWidth: "w-[45px]",
    iconHeight: "h-[45px]",
    title: "Meeting scheduling",
    description:
      "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
  {
    icon: "/figmaAssets/icon-5.svg",
    iconWidth: "w-[47.26px]",
    iconHeight: "h-[45px]",
    title: "Email tracking",
    description:
      "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative">
        <div className="inline-flex items-center gap-[121px] relative flex-[0_0_auto] ml-[-0.50px] mr-[-0.50px]">
          <h2 className="relative w-[712px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Powerful features to help you manage all your leads
          </h2>

          <p className="relative w-[392px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-RG-font-size)] tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="inline-flex items-start gap-6 flex-[0_0_auto] ml-[-1.50px] mr-[-1.50px] flex-col relative">
          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            {featureCards.slice(0, 3).map((card, index) => (
              <Card
                key={`feature-card-${index}`}
                className="flex flex-col w-[393px] items-start gap-[30px] pl-[30px] pr-10 py-[30px] relative bg-neutralgray-800 rounded border border-solid border-[#282d45]"
              >
                <CardContent className="p-0 flex flex-col gap-[30px] w-full">
                  {card.isBackground ? (
                    <div
                      className={`relative ${card.iconWidth} ${card.iconHeight} bg-[url(${card.icon})] bg-[100%_100%]`}
                    />
                  ) : (
                    <img
                      className={`relative ${card.iconWidth} ${card.iconHeight}`}
                      alt="Icon"
                      src={card.icon}
                    />
                  )}

                  <div className="flex-col items-start gap-3 self-stretch w-full flex relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {card.title}
                    </h3>

                    <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            {featureCards.slice(3, 6).map((card, index) => (
              <Card
                key={`feature-card-${index + 3}`}
                className="flex flex-col w-[393px] items-start gap-[30px] pl-[30px] pr-10 py-[30px] relative bg-neutralgray-800 rounded border border-solid border-[#282d45]"
              >
                <CardContent className="p-0 flex flex-col gap-[30px] w-full">
                  {card.isBackground ? (
                    <div
                      className={`relative ${card.iconWidth} ${card.iconHeight} bg-[url(${card.icon})] bg-[100%_100%]`}
                    />
                  ) : (
                    <img
                      className={`relative ${card.iconWidth} ${card.iconHeight}`}
                      alt="Icon"
                      src={card.icon}
                    />
                  )}

                  <div className="flex-col items-start gap-3 self-stretch w-full flex relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {card.title}
                    </h3>

                    <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
