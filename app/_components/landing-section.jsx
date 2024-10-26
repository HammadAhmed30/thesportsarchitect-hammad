"use client"
import Wrapper from "@/components/wrapper";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import Triangle from "@/components/triangle";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";

export default function LandingSection() {
  return (
    <section className="h-[100vh]">
      {/* <img src="/1-min.jpg" alt="" /> */}
      <Wrapper className={"h-full"}>
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-[2] opacity-[.6] rounded-[80px]"></div>
          <div className="absolute top-0 left-0 w-full h-full z-[3] md:p-[50px] p-[15px] flex items-center">
            <div>

            <LargeHeading className={"hidden md:flex items-center gap-[10px] text-white"}> <Triangle className={"mx-[20px]"} dark={false} /> Innovative 3D Sports</LargeHeading>
            <LargeHeading className={"text-white hidden md:flex leading-[100%]"}>Architecture Solutions.</LargeHeading>
            <LargeHeading className={"text-white block md:hidden leading-[120%]"}>Innovative 3D Sports Architecture Solutions.</LargeHeading>
            <SmallParagraph className={"text-white mt-[25px]"}>Transforming Concepts into Immersive 3D Virtual Arenas.</SmallParagraph>
            </div>
          </div>
          <Carousel
            className="h-full overflow-hidden rounded-[80px]"
            // plugins={[
            //   Autoplay({
            //     delay: 5000,
            //   }),
            // ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/1-min.jpg"
                    className="w-full h-full object-cover rounded-[80px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              {/* <CarouselItem>
                <div className="w-full h-[100vh] ">
                  <img
                    src="/2-min.jpg"
                    className="w-full h-full object-cover rounded-[80px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/3-min.jpg"
                    className="w-full h-full object-cover rounded-[80px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/4-min.jpg"
                    className="w-full h-full object-cover rounded-[80px]"
                    alt=""
                  />
                </div>
              </CarouselItem> */}
            </CarouselContent>
          </Carousel>
        </div>
      </Wrapper>
    </section>
  );
}
