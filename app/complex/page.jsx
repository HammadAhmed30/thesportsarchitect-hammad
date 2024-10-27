import NavbarOther from "@/components/navbar-other";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import Wrapper from "@/components/wrapper";
import React from "react";

export const metadata = {
  title: "Complex | The Sports Architect",
  description: "We are 3d sports architecture designer agency with over 10 years of experience and 250+ happy clients from all over the world. We are experienced in 3d sports architect designing and animation.",
};

export default function BaseballPage() {
  return (
    <main className="w-full pb-elementSpace">
      <NavbarOther/>

      <Wrapper>
        <div className="w-full px-[0px] md:px-[40px] ">
          <h1 className={"md:text-[55px] text-[35px] font-[700] py-[50px] uppercase"}>Complex</h1>
          <p className={"md:text-[28px] text-[18px] font-[400] leading-[120%] w-full max-w-[800px] mb-elementSpace"}>
            WE OFFER 3D SPORTS ARCHITECTURE FOR SPORTS FACILITIES, DELIVERING
            INNOVATIVE, HIGH-QUALITY, AND SUSTAINABLE DESIGNS.
          </p>
          <img
            src="/c1.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img src="/c2.png" className="w-full " alt="" />
        </div>
      </Wrapper>
    </main>
  );
}
