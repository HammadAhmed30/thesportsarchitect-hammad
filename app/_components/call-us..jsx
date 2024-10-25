"use client"

import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import Wrapper from "@/components/wrapper";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


export default function CallUsSection() {
  return (
    <section className="w-full relative ">
      <Wrapper>
        <div className="rounded-[80px] h-full overflow-hidden bg-black py-[50px] px-[15px] relative">
          <MediumHeading
            className={"flex gap-[10px] px-[20px] text-white items-center"}
          >
            <Triangle className={"mx-[20px]"} dark={false} />
            Call Us
          </MediumHeading>

<div className="mt-sectionSepration"></div>
          <CallBox/>

        </div>

      </Wrapper>
    </section>
  );
}



function CallBox() {
useEffect(()=>{
  (async function () {
  const cal = await getCalApi({"namespace":"15min"});
  cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
  })();
}, [])
return <Cal namespace="15min"
  calLink="etralbit/15min"
  style={{width:"100%",height:"100%",overflow:"scroll"}}
  config={{"layout":"month_view"}}
  
  
/>;
};
