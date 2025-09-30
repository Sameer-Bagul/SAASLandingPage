import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { landingPageContent } from "@/config/landingPageContent";

export const ProductShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center pt-[70px] pb-[140px] px-0 relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative">
        <header className="flex w-full justify-between items-center relative">
          <h2 className="relative w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] whitespace-nowrap [font-style:var(--heading-h2-font-style)]">
            {landingPageContent.productShowcase.heading}
          </h2>

          <Button
            aria-label={landingPageContent.productShowcase.browseAllNewsText}
            className="inline-flex items-center justify-center gap-2.5 px-[25px] py-[15px] relative bg-primaryblue-violet rounded-[36px] h-auto font-button-RG font-[number:var(--button-RG-font-weight)] text-white text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] [font-style:var(--button-RG-font-style)] hover:bg-primaryblue-violet/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primaryblue-violet"
          >
            {landingPageContent.productShowcase.browseAllNewsText}
          </Button>
        </header>

        <div className="flex items-start gap-6 w-full">
          {landingPageContent.productShowcase.newsArticles.map((article, index) => (
            <Card
              key={index}
              className="inline-flex flex-col items-start gap-[19px] p-[25px] relative flex-1 bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]"
            >
              <CardContent className="p-0 w-full">
                <div className="relative w-full h-[230px] bg-neutralblack-1000 rounded mb-[19px]">
                  {index === 0 && (
                    <>
                      <img
                        className="absolute top-[23px] left-[210px] w-11 h-11"
                        alt=""
                        aria-hidden="true"
                        src={article.previewImage.iconSrc}
                      />

                      <div className="absolute top-[65px] left-[31px] w-[137px] h-[106px] rotate-[6.23deg]">
                        <div className="absolute top-0 left-0 w-[135px] h-[106px] bg-neutralgray-800 rounded-[10.27px] border-[1.03px] border-solid border-[#282d45]" />

                        <img
                          className="absolute top-2.5 left-[11px] w-10 h-5 rotate-[-6.23deg]"
                          alt="Frame"
                          src={article.previewImage.frameSrc}
                        />

                        <img
                          className="absolute top-2.5 left-[67px] w-[18px] h-[18px] rotate-[-6.23deg] object-cover"
                          alt="Ellipse"
                          src={article.previewImage.ellipseSrc}
                        />

                        <img
                          className="absolute top-4 left-[89px] w-[27px] h-[7px] rotate-[-6.23deg]"
                          alt="Line"
                          src={article.previewImage.lineSrc}
                        />

                        <div className="absolute top-[41px] left-3.5 w-[105px] h-[52px] flex gap-[6.2px]">
                          <div className="mt-[39.0px] w-[21.57px] h-[13.36px] ml-0 bg-primaryblue-violet rounded-[2.05px]" />
                          <div className="mt-[24.7px] w-[21.57px] h-[27.74px] bg-primaryblue-violet rounded-[2.05px]" />
                          <div className="mt-[12.3px] w-[21.57px] h-[40.07px] bg-primaryblue-violet rounded-[2.05px]" />
                          <div className="mt-0 w-[21.57px] h-[52.4px] bg-primaryblue-violet rounded-[2.05px]" />
                        </div>

                        <div className="absolute top-[41px] left-[11px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 text-[12.3px] tracking-[0] leading-[16.4px] whitespace-nowrap">
                          2,100
                        </div>
                      </div>

                      <div className="absolute top-[94px] left-[214px] w-[92px] h-28 rotate-[-4.12deg]">
                        <div className="absolute top-0 left-0 w-[88px] h-28 bg-neutralgray-800 rounded-md border border-solid border-[#282d45]" />
                        <div className="absolute top-[15px] left-[25px] w-[38px] h-[38px] bg-secondarysummer-sky rounded-[19px]" />
                        <img
                          className="absolute top-[23px] left-[33px] w-[21px] h-[21px] rotate-[4.12deg]"
                          alt="Activity"
                          src={article.previewImage.activitySrc}
                        />
                        <div className="absolute top-[63px] left-[29px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 text-2xl tracking-[0] leading-[17.1px] whitespace-nowrap">
                          85
                        </div>
                        <div className="absolute top-[85px] left-[18px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-xs tracking-[0] leading-[17.1px] whitespace-nowrap">
                          Complate
                        </div>
                      </div>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <div className="absolute top-[65px] left-[146px] w-[168px] h-[133px] rotate-[13.32deg]">
                        <div className="absolute top-0 left-0 w-[166px] h-[133px] bg-neutralgray-800 rounded-[8.08px] border-[0.81px] border-solid border-[#282d45]" />
                        <div className="absolute top-3 left-2.5 [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 text-[11.3px] tracking-[0] leading-[13.8px] whitespace-nowrap">
                          Dashboard Report
                        </div>
                        <div className="absolute top-9 left-2.5 w-[143px] h-[88px]">
                          <div className="absolute top-[7px] left-[23px] w-[120px] h-[73px]">
                            <img
                              className="absolute -top-3.5 left-2.5 w-[117px] h-[29px]"
                              alt="Line"
                              src={article.previewImage.lineSrc}
                            />
                            <img
                              className="absolute top-2.5 left-1 w-[117px] h-[29px]"
                              alt="Line"
                              src={article.previewImage.lineSrc}
                            />
                            <img
                              className="absolute top-[34px] -left-px w-[117px] h-[29px]"
                              alt="Line"
                              src={article.previewImage.lineSrc}
                            />
                            <img
                              className="absolute top-[57px] left-[-7px] w-[117px] h-[29px]"
                              alt="Line"
                              src={article.previewImage.lineSrc}
                            />
                          </div>
                          <div className="absolute top-0 left-0 w-[26px] h-[88px] flex flex-col">
                            <div className="w-[18px] h-3.5 text-[9.7px] leading-[13.8px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 tracking-[0] whitespace-nowrap">
                              100
                            </div>
                            <div className="ml-[4.8px] w-[13px] h-3.5 mt-[10.2px] text-[9.7px] leading-[13.8px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 tracking-[0] whitespace-nowrap">
                              60
                            </div>
                            <div className="ml-[4.8px] w-[13px] h-3.5 mt-[11.1px] text-[9.7px] leading-[13.8px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 tracking-[0] whitespace-nowrap">
                              30
                            </div>
                            <div className="ml-[10.5px] w-[7px] h-3.5 mt-[11.1px] text-[9.7px] leading-[13.8px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 tracking-[0] whitespace-nowrap">
                              0
                            </div>
                          </div>
                          <img
                            className="absolute top-[-3px] left-[17px] w-[131px] h-24"
                            alt="Group"
                            src={article.previewImage.groupSrc}
                          />
                        </div>
                      </div>

                      <img
                        className="absolute top-[19px] left-[81px] w-11 h-11"
                        alt="Group"
                        src={article.previewImage.iconSrc}
                      />

                      <div className="absolute top-[89px] left-[29px] w-[92px] h-28 rotate-[-4.12deg]">
                        <div className="absolute top-0 left-0 w-[88px] h-28 bg-neutralgray-800 rounded-md border border-solid border-[#282d45]" />
                        <div className="bg-primaryblue-violet absolute top-[15px] left-[25px] w-[38px] h-[38px] rounded-[19px]" />
                        <img
                          className="absolute top-[22px] left-8 w-6 h-6 rotate-[4.12deg]"
                          alt="Chart"
                          src={article.previewImage.chartSrc}
                        />
                        <div className="absolute top-[63px] left-[23px] text-2xl leading-[17.1px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 tracking-[0] whitespace-nowrap">
                          134
                        </div>
                        <div className="absolute top-[85px] left-6 [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-xs tracking-[0] leading-[17.1px] whitespace-nowrap">
                          Project
                        </div>
                      </div>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <div className="absolute top-[35px] left-[29px] w-[139px] h-[166px] flex bg-neutralgray-800 rounded-[9.25px] border-[0.93px] border-solid border-[#282d45] rotate-[5.15deg]">
                        <div className="mt-[18.5px] w-[96.24px] h-[132.33px] ml-[21.3px] flex flex-col gap-[7.6px]">
                          <div className="ml-[5.6px] w-[85.14px] h-[85.14px] relative mt-0">
                            <div className="absolute top-0 left-0 w-[85px] h-[85px]">
                              <img
                                className="absolute top-[11px] left-0 w-[84px] h-[74px]"
                                alt="Ellipse"
                                src={article.previewImage.ellipse26Src}
                              />
                              <img
                                className="absolute top-0 left-3.5 w-9 h-4"
                                alt="Ellipse"
                                src={article.previewImage.ellipse27Src}
                              />
                              <img
                                className="absolute top-px left-12 w-[37px] h-[53px]"
                                alt="Ellipse"
                                src={article.previewImage.ellipse28Src}
                              />
                            </div>
                            <div className="absolute top-[29px] left-6 w-[42px] h-[33px] flex flex-col gap-[0.7px]">
                              <div className="w-[38px] h-4 [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 text-[14.8px] tracking-[0] leading-[15.9px] whitespace-nowrap">
                                264K
                              </div>
                              <div className="ml-[8.3px] w-[21px] h-4 [font-family:'Satoshi-Regular',Helvetica] text-neutralgray-300 text-[9.3px] leading-[15.9px] font-normal tracking-[0] whitespace-nowrap">
                                Sales
                              </div>
                            </div>
                          </div>
                          <img
                            className="ml-[-5.7px] w-[99.01px] h-[43.66px]"
                            alt="Group"
                            src={article.previewImage.groupSrc}
                          />
                        </div>
                      </div>

                      <img
                        className="absolute top-[23px] left-[210px] w-11 h-11"
                        alt="Group"
                        src={article.previewImage.iconSrc}
                      />

                      <div className="absolute top-[94px] left-[214px] w-[92px] h-28 rotate-[-4.12deg]">
                        <div className="absolute top-0 left-0 w-[88px] h-28 bg-neutralgray-800 rounded-md border border-solid border-[#282d45]" />
                        <div className="bg-secondaryspicy-pink absolute top-[15px] left-[25px] w-[38px] h-[38px] rounded-[19px]" />
                        <img
                          className="absolute top-6 left-[34px] w-5 h-5 rotate-[4.12deg]"
                          alt="Time circle"
                          src={article.previewImage.timeCircleSrc}
                        />
                        <div className="absolute top-[63px] left-[29px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-neutralgray-300 text-2xl tracking-[0] leading-[17.1px] whitespace-nowrap">
                          45
                        </div>
                        <div className="absolute top-[84px] left-[21px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutralgray-300 text-xs tracking-[0] leading-[17.1px] whitespace-nowrap">
                          Assigned
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col w-full items-start gap-[19px] relative flex-1">
                  <div className="flex-col w-full items-start gap-[15px] flex relative">
                    <h3 className="relative w-full mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-neutralwhite-200 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      {article.title}
                    </h3>

                    <p className="relative w-full font-paragraph-SM font-[number:var(--paragraph-SM-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-SM-font-size)] tracking-[var(--paragraph-SM-letter-spacing)] leading-[var(--paragraph-SM-line-height)] [font-style:var(--paragraph-SM-font-style)]">
                      {article.description}
                    </p>
                  </div>

                  <img
                    className="relative w-full h-px object-cover"
                    alt="Line"
                    src="/figmaAssets/line-1.svg"
                  />

                  <div className="flex w-full items-center justify-between relative">
                    <time className="relative w-fit font-paragraph-SM font-[number:var(--paragraph-SM-font-weight)] text-neutralgray-300 text-[length:var(--paragraph-SM-font-size)] tracking-[var(--paragraph-SM-letter-spacing)] leading-[var(--paragraph-SM-line-height)] whitespace-nowrap [font-style:var(--paragraph-SM-font-style)]">
                      {article.date}
                    </time>

                    <Button
                      variant="ghost"
                      aria-label={`Read more about ${article.title}`}
                      className="inline-flex items-center justify-center gap-0.5 relative p-0 h-auto bg-transparent hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-primaryblue-violet focus:ring-offset-2 focus:ring-offset-neutralgray-800"
                    >
                      <span className="relative w-fit font-button-RG font-[number:var(--button-RG-font-weight)] text-neutralwhite text-[length:var(--button-RG-font-size)] tracking-[var(--button-RG-letter-spacing)] leading-[var(--button-RG-line-height)] whitespace-nowrap [font-style:var(--button-RG-font-style)]">
                        Read more
                      </span>
                      <ArrowRightIcon className="relative w-6 h-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
