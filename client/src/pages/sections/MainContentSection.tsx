import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    icon: "/figmaAssets/icon-8.svg",
    iconWidth: "w-[53.05px]",
    iconHeight: "h-[45px]",
    title: "Lightning-Fast Reports",
    description:
      "Get comprehensive market research reports in minutes, not weeks. Our AI processes vast amounts of data to deliver insights when you need them most.",
  },
  {
    icon: "/figmaAssets/icon-2.svg",
    iconWidth: "w-[47.94px]",
    iconHeight: "h-[45px]",
    title: "Unbeatable Pricing",
    description:
      "Access professional-grade market research at a fraction of traditional costs. Democratizing insights for businesses of all sizes.",
  },
  {
    icon: "/figmaAssets/group.png",
    iconWidth: "w-[45px]",
    iconHeight: "h-[45px]",
    title: "AI-Driven Analytics",
    description:
      "Advanced machine learning algorithms uncover hidden patterns, predict trends, and provide deeper intelligence for strategic decisions.",
    isBackground: true,
  },
  {
    icon: "/figmaAssets/icon.png",
    iconWidth: "w-[34.29px]",
    iconHeight: "h-[45px]",
    title: "Global Market Coverage",
    description:
      "Analyze markets across the globe with detailed reports on market size, growth forecasts, and regional insights tailored to your needs.",
  },
  {
    icon: "/figmaAssets/icon-7.svg",
    iconWidth: "w-[45px]",
    iconHeight: "h-[45px]",
    title: "Competitor Analysis",
    description:
      "Get detailed competitor profiles, market positioning, and strategic insights to stay ahead in your industry.",
  },
  {
    icon: "/figmaAssets/icon-5.svg",
    iconWidth: "w-[47.26px]",
    iconHeight: "h-[45px]",
    title: "Custom Reports",
    description:
      "Tailored analyses for specific industries and geographies. User-friendly dashboards make complex data easy to understand and act upon.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-4 md:px-0 py-12 md:py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-10 md:gap-[60px] relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[121px] relative w-full">
          <h2 className="relative w-full md:w-[712px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-2xl md:text-[length:var(--heading-h2-font-size)] text-center md:text-left tracking-[var(--heading-h2-letter-spacing)] leading-tight md:leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Powerful AI features to revolutionize your market research
          </h2>

          <p className="relative w-full md:w-[392px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-base md:text-[length:var(--subtitle-RG-font-size)] text-center md:text-left tracking-[var(--subtitle-RG-letter-spacing)] leading-relaxed md:leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            From global market analysis to competitor insights, our AI-powered platform delivers comprehensive intelligence at unprecedented speed and value.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 items-stretch gap-6 w-full relative">
          <div className="contents md:flex md:flex-row md:gap-6">
            {featureCards.slice(0, 3).map((card, index) => (
              <Card
                key={`feature-card-${index}`}
                className="flex flex-col w-full md:w-auto items-start gap-6 md:gap-[30px] p-6 md:pl-[30px] md:pr-10 md:py-[30px] relative bg-neutralgray-800 rounded border border-solid border-[#282d45] hover:border-primaryblue-violet/50 transition-colors"
              >
                <CardContent className="p-0 flex flex-col gap-6 md:gap-[30px] w-full">
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
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-lg md:text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-tight md:leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {card.title}
                    </h3>

                    <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed md:leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="contents md:flex md:flex-row md:gap-6 md:col-span-3">
            {featureCards.slice(3, 6).map((card, index) => (
              <Card
                key={`feature-card-${index + 3}`}
                className="flex flex-col w-full md:w-auto items-start gap-6 md:gap-[30px] p-6 md:pl-[30px] md:pr-10 md:py-[30px] relative bg-neutralgray-800 rounded border border-solid border-[#282d45] hover:border-primaryblue-violet/50 transition-colors"
              >
                <CardContent className="p-0 flex flex-col gap-6 md:gap-[30px] w-full">
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
                    <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-lg md:text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-tight md:leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {card.title}
                    </h3>

                    <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-sm md:text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-relaxed md:leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
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
