
import NavbarOther from "@/components/navbar-other";
import LargeHeading from "@/components/TypoGraphy/heaidng-large";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import Wrapper from "@/components/wrapper";
import React from "react";


export const metadata = {
  title: "Club Dipickle | The Sports Architect",
  description: "We are 3d sports architecture designer agency with over 10 years of experience and 250+ happy clients from all over the world. We are experienced in 3d sports architect designing and animation.",
};


export default function BaseballPage() {
  return (
    <main className="w-full pb-elementSpace">
      <NavbarOther/>

      <Wrapper>
        <div className="w-full px-[0px] md:px-[40px] ">
          <LargeHeading className={"py-[50px] uppercase"}>
            Club Dipickle
          </LargeHeading>
          <LargeParagraph className={"w-full max-w-[800px] mb-elementSpace"}>
            WE OFFER 3D SPORTS ARCHITECTURE FOR TENNIS COURTS, CREATING UNIQUE,
            HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS.
          </LargeParagraph>
          <img
            src="/uk1.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img
            src="/uk2.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img
            src="/uk3.png"
            className="w-full md:mb-[50px] mb-[13px] "
            alt=""
          />
          <img src="/uk4.png" className="w-full " alt="" />
        </div>
      </Wrapper>
    </main>
  );
}
