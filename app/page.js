"use client"

import { ReactLenis } from "@studio-freight/react-lenis";
import LandingSection from './_components/landing-section'
import AboutUsSection from './_components/about-us'
import ServicesSection from './_components/services-section'
import PortfolioSection from "./_components/portfolio-section";
import CallUsSection from "./_components/call-us.";
import ReviewsSection from "./_components/review-section";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import Triangle from "@/components/triangle";

export default function Page() {
  return (
    <ReactLenis root>

    <main className='w-full'>
      <LandingSection/>
      <AboutUsSection/>
      <ServicesSection/>
      <MediumHeading className={"flex gap-[10px] px-[50px] py-elementSpace items-center"}>
          <Triangle className={"mx-[20px]"} dark={true} />
          Reviews
        </MediumHeading>
      <PortfolioSection/>
      <CallUsSection/>
      <ReviewsSection/>
    </main>
    </ReactLenis>
  )
}
