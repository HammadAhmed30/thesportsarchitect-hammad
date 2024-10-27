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
import Navbar from "@/components/navbar";
import { useRef } from "react";
import LandingPageCursor from "@/components/landing-page-cursor";

export default function Page() {


  const servicesTarget = useRef(null);
  const portfolioTarget = useRef(null);
  const reviewsTarget = useRef(null);

  // Target Ref Funtions
  const scrollToServices = () => {
    servicesTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPortfolio = () => {
    portfolioTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToReviews = () => {
    reviewsTarget.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <ReactLenis root>

    <main className='w-full relative'>
      <LandingPageCursor/>
      <Navbar scrollToServices={scrollToServices} scrollToPortfolio={scrollToPortfolio} scrollToReviews={scrollToReviews}  />
      <LandingSection />
      <AboutUsSection/>
      <div className="w-full" ref={servicesTarget}></div>
      <ServicesSection/>
      <div className="w-full" ref={portfolioTarget}></div>
      <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] py-elementSpace items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
          Portfolio
        </MediumHeading>
      <PortfolioSection/>
      <CallUsSection/>
      <div className="w-full" ref={reviewsTarget}></div>
      <ReviewsSection/>
    </main>
    </ReactLenis>
  )
}
