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
          <LargeHeading className={"py-[50px] uppercase"}>Dinko</LargeHeading>
          <LargeParagraph className={"w-full max-w-[800px] mb-elementSpace"}>
            WE PROVIDE 3D SPORTS ARCHITECTURE FOR SPORTS CLUBS, CREATING
            CUTTING-EDGE, HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS.
          </LargeParagraph>
          <img
            src="/d1.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img
            src="/d2.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img
            src="/d3.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img src="/d4.png" className="w-full " alt="" />
        </div>
      </Wrapper>
    </main>
  );
}
