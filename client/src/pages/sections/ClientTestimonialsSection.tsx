import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { landingPageContent } from "@/config/landingPageContent";

export const ClientTestimonialsSection = (): JSX.Element => {
  const codeSnippets = [
    {
      content: landingPageContent.clientTestimonials.codeSnippets[0].content,
      className: landingPageContent.clientTestimonials.codeSnippets[0].className,
      textColor: landingPageContent.clientTestimonials.codeSnippets[0].textColor,
      width: landingPageContent.clientTestimonials.codeSnippets[0].width,
    },
    {
      content: (
        <>
          <span className="text-[#4f86ef]">const</span>
          <span className="text-[#f6f6f7]">&nbsp;</span>
          <span className="text-[#9ae7f2]">salt = srp.</span>
          <span className="text-[#f98e62]">generateSalt</span>
          <span className="text-[#f6f6f7]">
            ();
            <br />
          </span>
          <span className="text-[#4f86ef]">const</span>
          <span className="text-[#f6f6f7]">&nbsp;</span>
          <span className="text-[#9ae7f2]">masterSecret</span>
          <span className="text-[#f6f6f7]"> = </span>
          <span className="text-[#e9708b]">await</span>
          <span className="text-[#f6f6f7]"> createKeyFromSecret(</span>
          <span className="text-[#9ae7f2]">password, salt</span>
          <span className="text-[#f6f6f7]">
            );
            <br />
            <br />
          </span>
          <span className="text-[#4f86ef]">const</span>
          <span className="text-[#f6f6f7]">&nbsp;</span>
          <span className="text-[#9ae7f2]">verifierPrivateKey</span>
          <span className="text-[#f6f6f7]"> = </span>
          <span className="text-[#e9708b]">await </span>
          <span className="text-[#f98e62]">createSRPKey</span>
          <span className="text-[#f6f6f7]">(</span>
          <span className="text-[#9ae7f2]">password, salt</span>
          <span className="text-[#f6f6f7]">
            );
            <br />
          </span>
          <span className="text-[#4f86ef]">const</span>
          <span className="text-[#f6f6f7]">&nbsp;</span>
          <span className="text-[#9ae7f2]">verifier = srp.</span>
          <span className="text-[#f98e62]">deriveVerifier</span>
          <span className="text-[#f6f6f7]">(</span>
          <span className="text-[#9ae7f2]">verifierPrivateKey</span>
          <span className="text-[#f6f6f7]">);</span>
        </>
      ),
      className: landingPageContent.clientTestimonials.codeSnippets[1].className,
      textColor: landingPageContent.clientTestimonials.codeSnippets[1].textColor,
      width: landingPageContent.clientTestimonials.codeSnippets[1].width,
    },
  ];

  const featureCards = landingPageContent.clientTestimonials.featureCards;

  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative">
        <Card className="inline-flex flex-col items-start gap-10 px-[55px] py-[50px] relative bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
          <CardContent className="p-0">
            <img
              className="absolute top-0 left-px w-[1222px] h-[903px]"
              alt=""
              aria-hidden="true"
              src="/figmaAssets/bg--shape-color.png"
            />

            <div className="items-center gap-[132px] flex-[0_0_auto] inline-flex relative">
              <div className="inline-flex items-start gap-10 flex-[0_0_auto] flex-col relative">
                <div className="w-[454px] flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                  <h2 className="self-stretch relative mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-transparent text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                    Transparent, audited, &amp;open source
                  </h2>

                  <p className="relative self-stretch font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-RG-font-size)] tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
                    {landingPageContent.clientTestimonials.description}
                  </p>
                </div>

                <Button
                  aria-label={landingPageContent.clientTestimonials.browseAllFeatureText}
                  className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative flex-[0_0_auto] rounded-[46px] border-[1.2px] border-solid border-[#282d45] bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] h-auto focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-neutralgray-800"
                >
                  <span className="relative w-fit mt-[-1.20px] font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
                    {landingPageContent.clientTestimonials.browseAllFeatureText}
                  </span>
                </Button>
              </div>

              <div className="relative w-[527px] h-[400px] bg-[url(/figmaAssets/line.png)] bg-[100%_100%]">
                {codeSnippets.map((snippet, index) => (
                  <Card
                    key={index}
                    className={`inline-flex items-start gap-2.5 px-[26px] py-[25px] ${snippet.className} bg-neutralblack-1000 rounded-[10px]`}
                  >
                    <CardContent className="p-0">
                      <div
                        className={`relative ${snippet.width} mt-[-1.00px] font-caption-RG font-[number:var(--caption-RG-font-weight)] ${snippet.textColor} text-[length:var(--caption-RG-font-size)] tracking-[var(--caption-RG-letter-spacing)] leading-[var(--caption-RG-line-height)] [font-style:var(--caption-RG-font-style)]`}
                      >
                        {typeof snippet.content === "string"
                          ? snippet.content
                          : snippet.content}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="items-start gap-[26px] flex-[0_0_auto] inline-flex relative">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="inline-flex flex-col h-[365px] items-center gap-8 pt-[30px] pb-0 px-[30px] relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] bg-neutralblack-1000 rounded-[10px] border border-solid border-[#282d45]"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex flex-col w-[480px] h-[90px] items-start gap-2.5 relative">
                      <h3 className="relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                        {card.title}
                      </h3>

                      <p className="relative self-stretch font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-RG-font-size)] tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
                        {card.description}
                      </p>
                    </div>

                    {card.isBackgroundImage ? (
                      <div className="relative flex-1 w-[417px] grow bg-neutralgray-800 bg-[url(/figmaAssets/mask-group-1.png)] bg-[100%_100%]" />
                    ) : (
                      <img
                        className="relative w-[487px] h-[211px]"
                        alt={`${card.title} illustration`}
                        src={card.image}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
