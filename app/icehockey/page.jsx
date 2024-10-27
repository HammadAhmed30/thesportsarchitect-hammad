import NavbarOther from "@/components/navbar-other";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import Wrapper from "@/components/wrapper";
import React from "react";

export const metadata = {
  title: "Ice Hockey | The Sports Architect",
  description: "We are 3d sports architecture designer agency with over 10 years of experience and 250+ happy clients from all over the world. We are experienced in 3d sports architect designing and animation.",
};

export default function BaseballPage() {
  return (
    <main className="w-full pb-elementSpace">
      <NavbarOther/>
      <Wrapper>
        <div className="w-full px-[0px] md:px-[40px] ">
          <LargeHeading className={"py-[50px] uppercase"}>
            Ice Hockey
          </LargeHeading>
          <LargeParagraph className={"w-full max-w-[800px] mb-elementSpace"}>
            WE PROVIDE 3D SPORTS ARCHITECTURE FOR ICE HOCKEY ARENAS, DELIVERING
            INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS.
          </LargeParagraph>
          <img
            src="/ic1.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img src="/ic2.png" className="w-full " alt="" />
        </div>
      </Wrapper>
    </main>
  );
}
