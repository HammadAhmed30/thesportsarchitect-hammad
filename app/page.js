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
import { motion } from "framer-motion";
import Link from "next/link";
import ReuseableButton from "@/components/button";

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
      {/* <LandingPageCursor/> */}
      <Navbar scrollToServices={scrollToServices} scrollToPortfolio={scrollToPortfolio} scrollToReviews={scrollToReviews}  />
      <LandingSection />
      <AboutUsSection/>
      <div className="w-full" ref={servicesTarget}></div>
      <ServicesSection/>
      <div className="w-full" ref={portfolioTarget}></div>
      <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] py-elementSpace items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
          Our Work
        </MediumHeading>
      <PortfolioSection/>
      <CallUsSection/>
      <div className="w-full" ref={reviewsTarget}></div>
      <ReviewsSection/>


    <motion.div className="fixed bottom-[35px] right-[31px] md:bottom-[50px] md:right-[60px] z-[20]" initial={{ y: "20px",x:"0px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", x:"0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }}>

        <Link href={"/callus"}>
        
        <ReuseableButton className={"shadow-lg md:scale-[1.2]"}>
          START A PROJECT
        </ReuseableButton>
        </Link>
        </motion.div>


    </main>
    </ReactLenis>
  )
}
