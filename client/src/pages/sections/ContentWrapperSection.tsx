import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { landingPageContent } from "@/config/landingPageContent";

export const ContentWrapperSection = (): JSX.Element => {

  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative">
        <header className="inline-flex flex-col gap-5 items-center relative">
          <h1 className="relative w-[771px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            {landingPageContent.contentWrapper.heading}
          </h1>

          <div className="inline-flex items-start gap-[30px] relative">
            {landingPageContent.contentWrapper.appTypes.map((app, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 relative"
              >
                <img
                  className={`relative ${app.width} ${app.height}`}
                  alt="Icon"
                  src={app.icon}
                />
                <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-transparent text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
                  {app.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="inline-flex flex-col items-start gap-10 relative">
          <Card className="flex w-full items-center gap-[104px] p-[70px] relative bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
            <img
              className="absolute top-0 left-0 w-[577px] h-[512px]"
              alt="Bg shape color"
              src="/figmaAssets/bg-shape-color.png"
            />

            <CardContent className="flex w-[465px] items-start gap-[35px] flex-col relative p-0">
              <div className="self-stretch w-full flex flex-col items-start gap-[15px] relative">
                <h2 className="relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                  {landingPageContent.contentWrapper.encryptedInboxHeading}
                </h2>

                <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                  {landingPageContent.contentWrapper.encryptedInboxDescription}
                </p>
              </div>

              <Button className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative rounded-[46px] border-[1.2px] border-solid border-[#282d45] bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] h-auto">
                <span className="relative w-fit mt-[-1.20px] font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
                  {landingPageContent.contentWrapper.learnMoreText}
                </span>
              </Button>
            </CardContent>

            <Card className="relative flex-1 grow h-[373px] bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
              <CardContent className="p-0 h-full">
                <img
                  className="absolute top-5 left-5 w-[473px] h-6"
                  alt="Group"
                  src="/figmaAssets/group-30.png"
                />

                <div className="absolute top-[69px] left-[19px] w-[472px] h-[283px] flex flex-col">
                  <h3 className="w-[234.18px] h-[18px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralwhite-200 text-lg tracking-[-0.54px] leading-[18px]">
                    Invitation to present at Bsides
                  </h3>

                  {landingPageContent.contentWrapper.emailMessages.map((message, index) => (
                    <Card
                      key={index}
                      className={`inline-flex ml-[1.0px] w-[469px] h-[118px] relative ${index === 0 ? "mt-3.5" : "mt-[15px]"} flex-col items-start gap-[13px] p-[15px] bg-neutralgray-600 rounded border border-solid border-[#282d45]`}
                    >
                      <CardContent className="p-0 w-full">
                        <div className="inline-flex items-start gap-[187px] relative">
                          <div className="inline-flex items-start gap-2 relative">
                            <img
                              className="relative w-[30px] h-[30px] rounded-[5px] object-cover"
                              alt="Rectangle"
                              src={message.avatar}
                            />

                            <div className="inline-flex flex-col items-start gap-[5px] relative">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutralwhite-200 text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                                {message.name}
                              </div>

                              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-xs tracking-[0] leading-3 whitespace-nowrap">
                                {message.email}
                              </div>
                            </div>
                          </div>

                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-xs tracking-[0] leading-3 whitespace-nowrap">
                            {message.date}
                          </div>
                        </div>

                        <p className="relative self-stretch font-paragraph-SM font-[number:var(--paragraph-SM-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-SM-font-size)] tracking-[var(--paragraph-SM-letter-spacing)] leading-[var(--paragraph-SM-line-height)] [font-style:var(--paragraph-SM-font-style)] mt-[13px]">
                          {message.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <img
              className="absolute top-0 left-[605px] w-[619px] h-[512px]"
              alt="Bg shape"
              src="/figmaAssets/bg-shape.png"
            />
          </Card>

          <div className="inline-flex items-start gap-[38px] relative">
            <Card className="inline-flex flex-col items-center gap-[38px] px-[55px] py-[50px] relative bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
              <img
                className="absolute top-[356px] left-0 w-[496px] h-[215px]"
                alt="Bg shape"
                src="/figmaAssets/bg-shape-1.png"
              />

              <CardContent className="flex flex-col items-center gap-[38px] p-0">
                <img
                  className="relative w-[271px] h-[306px]"
                  alt="Image wrapper"
                  src="/figmaAssets/image-wrapper.png"
                />

                <div className="flex w-[386px] items-start gap-[15px] flex-col relative">
                  <h3 className="self-stretch relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {landingPageContent.contentWrapper.mobileAppsHeading}
                  </h3>

                  <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                    {landingPageContent.contentWrapper.mobileAppsDescription}
                  </p>
                </div>
              </CardContent>

              <img
                className="absolute top-0 left-0 w-[496px] h-[356px]"
                alt="Bg shape"
                src="/figmaAssets/bg-shape-2.png"
              />
            </Card>

            <Card className="inline-flex flex-col items-center gap-[30px] pt-[50px] pb-0 px-[55px] relative bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
              <img
                className="absolute top-0 left-0 w-[689px] h-[183px]"
                alt="Bg shape"
                src="/figmaAssets/bg-shape-3.png"
              />

              <CardContent className="flex flex-col items-center gap-[30px] p-0">
                <div className="flex w-[578px] items-start gap-[15px] flex-col relative">
                  <h3 className="w-[562px] relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {landingPageContent.contentWrapper.uploadShareHeading}
                  </h3>

                  <p className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                    {landingPageContent.contentWrapper.uploadShareDescription}
                  </p>
                </div>

                <Card className="relative w-[580px] h-[393px] bg-neutralgray-600 border border-solid border-[#282d45]">
                  <CardContent className="p-0 h-full">
                    <div className="absolute top-5 left-[13px] w-[562px] h-[373px] flex flex-col">
                      <div className="flex ml-[7px] w-[540px] h-4 relative items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 relative">
                          <div className="inline-flex items-center gap-[15px] relative">
                            <div className="relative w-4 h-4 rounded-[3px] border border-solid border-[#3a3f57]" />

                            <div className="relative w-fit [font-family:'Inter',Helvetica] text-[#474e6f] text-sm leading-[14px] font-normal tracking-[0] whitespace-nowrap">
                              Name
                            </div>
                          </div>

                          <img
                            className="relative w-4 h-4"
                            alt="Arrow up"
                            src="/figmaAssets/arrow-up.svg"
                          />
                        </div>

                        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#474e6f] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          Type
                        </div>

                        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#474e6f] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          Size
                        </div>
                      </div>

                      <img
                        className="ml-[7px] w-[539px] h-px mt-3.5 object-cover"
                        alt="Line"
                        src="/figmaAssets/line-14.svg"
                      />

                      <img
                        className="w-[562px] h-[330px] mt-3"
                        alt="Mask group"
                        src="/figmaAssets/mask-group.png"
                      />
                    </div>

                    <div className="absolute top-[190px] left-px w-[578px] h-[203px] bg-[linear-gradient(0deg,rgba(14,19,48,1)_0%,rgba(21,25,52,0)_100%)]" />
                  </CardContent>
                </Card>
              </CardContent>

              <img
                className="absolute top-[183px] left-0 w-[689px] h-[393px]"
                alt="Bg shape"
                src="/figmaAssets/bg-shape-4.png"
              />
            </Card>
          </div>
        </div>

        <div className="inline-flex items-start gap-[30px] relative">
          <Button className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative bg-primaryblue-violet rounded-[36px] h-auto">
            <span className="relative w-fit mt-[-1.00px] font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
              {landingPageContent.contentWrapper.getStartedText}
            </span>
          </Button>

          <Button className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative rounded-[46px] border-[1.2px] border-solid border-[#282d45] bg-[linear-gradient(216deg,rgba(21,25,52,0.52)_0%,rgba(21,25,52,0.08)_48%,rgba(21,25,52,0.49)_100%)] h-auto">
            <span className="relative w-fit mt-[-1.20px] font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite-200 text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
              {landingPageContent.contentWrapper.browseAllFeatureText}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
