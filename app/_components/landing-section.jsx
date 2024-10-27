"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { state } from "@/store";
import { motion } from "framer-motion";


import Wrapper from "@/components/wrapper";
import Autoplay from "embla-carousel-autoplay";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import Triangle from "@/components/triangle";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";

export default function LandingSection() {
  return (
    <section
      className="h-[100vh] cursor-none"
      onMouseEnter={() => {
        state.cursorHovered = true;
        state.cursorText = "Scroll Down";
      }}
      onMouseLeave={() => {
        state.cursorHovered = false;
        state.cursorText = "";
      }}
    >
      {/* <img src="/1-min.jpg" alt="" /> */}
      <Wrapper className={"h-full overflow-hidden"}>
        <div className="w-full h-full relative overflow-hidden md:rounded-[80px] rounded-[50px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black z-[2] opacity-[.6] md:rounded-[80px] rounded-[50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black z-[4] opacity-[0] md:rounded-[80px] rounded-[50px]"></div>
          <div className="absolute top-0 left-0 w-full h-full z-[3] md:p-[50px] p-[15px] flex items-center">
            <div>
              <LargeHeading
                className={"hidden md:flex items-center gap-[10px] text-white"}
              >
                {" "}
                <Triangle className={"mx-[20px]"} dark={false} /> Innovative 3D
                Sports
              </LargeHeading>
              <LargeHeading
                className={"text-white hidden md:flex leading-[100%]"}
              >
                Architecture Solutions.
              </LargeHeading>
              <LargeHeading
                className={"text-white block md:hidden leading-[120%]"}
              >
                Innovative 3D Sports Architecture Solutions.
              </LargeHeading>
              <SmallParagraph className={"text-white mt-[25px]"}>
                Transforming Concepts into Immersive 3D Virtual Arenas.
              </SmallParagraph>
            </div>
          </div>
          <motion.div initial={{ y: "30px", transform:"scale(1.2)", filter:"blur(10px)" }}
        whileInView={{ y: "0px", transform:"scale(1)", filter:"blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full"
        >

          <Carousel
            className="h-full overflow-hidden md:rounded-[80px] rounded-[50px]"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/b1.png"
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh] ">
                  <img
                    src="/c2.png"
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/d2.png"
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full h-[100vh]">
                  <img
                    src="/ic1.png"
                    className="w-full h-full object-cover md:rounded-[80px] rounded-[50px]"
                    alt=""
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
}
