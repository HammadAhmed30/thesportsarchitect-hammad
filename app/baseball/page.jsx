import NavbarOther from "@/components/navbar-other";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import Wrapper from "@/components/wrapper";
import React from "react";

export default function BaseballPage() {
  return (
    <main className="w-full pb-elementSpace">
      <NavbarOther/>
      <Wrapper>
        <div className="w-full px-[0px] md:px-[40px] ">
          <LargeHeading className={"py-[50px]"}>BASE BALL</LargeHeading>
          <LargeParagraph className={"w-full max-w-[800px] mb-elementSpace"}>
            WE PROVIDE 3D SPORTS ARCHITECTURE FOR BASEBALL GROUNDS, DELIVERING
            INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS.
          </LargeParagraph>
          <img
            src="/b1.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img src="/b2.png" className="w-full " alt="" />
        </div>
      </Wrapper>
    </main>
  );
}
