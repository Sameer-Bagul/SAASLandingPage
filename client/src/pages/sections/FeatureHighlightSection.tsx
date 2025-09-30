import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const FeatureHighlightSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Cameron Williamson",
      role: "Web Designer",
      avatar: "/figmaAssets/avatar.png",
      testimonial:
        "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus.",
      shape: "/figmaAssets/shape.png",
    },
    {
      name: "Esther Howard",
      role: "Web Developer",
      avatar: "/figmaAssets/avatar-1.png",
      testimonial:
        "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus",
      shape: "/figmaAssets/shape-1.png",
    },
    {
      name: "Jenny Wilson",
      role: "UI/UX Designer",
      avatar: "/figmaAssets/avatar-2.png",
      testimonial:
        "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.",
      shape: "/figmaAssets/shape-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center px-0 py-[70px] relative">
      <div className="flex flex-col w-full max-w-[1224px] items-center justify-center gap-[60px] relative">
        <header className="inline-flex flex-col gap-6 items-center relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgba(246,246,247,1)_0%,rgba(126,128,143,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] whitespace-nowrap [font-style:var(--heading-h2-font-style)]">
            What our clients say
          </h2>

          <p className="relative w-[636px] font-subtitle-RG font-[number:var(--subtitle-RG-font-weight)] text-neutralgray-300 text-[length:var(--subtitle-RG-font-size)] text-center tracking-[var(--subtitle-RG-letter-spacing)] leading-[var(--subtitle-RG-line-height)] [font-style:var(--subtitle-RG-font-style)]">
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </header>

        <div className="inline-flex flex-col items-center justify-center gap-[70px] relative flex-[0_0_auto]">
          <div className="inline-flex h-[235px] items-start gap-[73px] relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center relative self-stretch flex-[0_0_auto]"
              >
                <img
                  className="absolute top-[150px] left-[calc(50.00%_-_196px)] w-[392px] h-[110px]"
                  alt="Shape"
                  src={testimonial.shape}
                />

                <Card className="flex flex-col w-[343px] items-start gap-[25px] p-[25px] relative flex-1 grow bg-neutralgray-800 rounded-[10px] border border-solid border-[#282d45]">
                  <CardContent className="p-0 w-full">
                    <div className="items-center gap-2.5 self-stretch w-full flex relative flex-[0_0_auto] mb-[25px]">
                      <Avatar className="relative w-10 h-10 rounded-[10px]">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt="Avatar"
                          className="object-cover"
                        />
                      </Avatar>

                      <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                        <div className="relative w-40 mt-[-1.00px] font-paragraph-MD font-[number:var(--paragraph-MD-font-weight)] text-neutralwhite-200 text-[length:var(--paragraph-MD-font-size)] tracking-[var(--paragraph-MD-letter-spacing)] leading-[var(--paragraph-MD-line-height)] [font-style:var(--paragraph-MD-font-style)]">
                          {testimonial.name}
                        </div>

                        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-neutralgray-300 text-xs tracking-[0] leading-3">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="relative self-stretch font-paragraph-RG font-[number:var(--paragraph-RG-font-weight)] text-neutralwhite-200 text-[length:var(--paragraph-RG-font-size)] tracking-[var(--paragraph-RG-letter-spacing)] leading-[var(--paragraph-RG-line-height)] [font-style:var(--paragraph-RG-font-style)]">
                      {testimonial.testimonial}
                    </div>

                    <img
                      className="absolute top-[25px] right-[25px] w-[57px] h-[41px]"
                      alt="Image"
                      src="/figmaAssets/-.svg"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <img
            className="relative flex-[0_0_auto]"
            alt="Slider icon"
            src="/figmaAssets/slider-icon.svg"
          />
        </div>
      </div>
    </section>
  );
};
