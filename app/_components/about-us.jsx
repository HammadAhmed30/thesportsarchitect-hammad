"use client"

import Triangle from '@/components/triangle'
import MediumHeading from '@/components/TypoGraphy/heading-medium'
import LargeParagraph from '@/components/TypoGraphy/paragraph-large'
import Wrapper from '@/components/wrapper'
import React, { useState } from 'react'
import CountUp from 'react-countup'

import Marquee from "react-fast-marquee";
import ScrollTrigger from 'react-scroll-trigger'

export default function AboutUsSection() {


    const [counterOn, setCounterOn] = useState(false);


  return (
    <section className='md:py-sectionSepration py-elementSpace'>
        <Wrapper className={"md:px-[50px] px-[15px] "}>
            <MediumHeading className={"flex gap-[10px] mt-[-15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                About Us
            </MediumHeading>
            <LargeParagraph className={"w-full max-w-[90%] mt-elementSpace"}>SERVING IN 3D ARCHITECTURE FIELD FOR MORE THAT 10 YEARS AND HAVE OVER 250+ HAPPY CLIENTS FROM ALL OVER THE WORLD</LargeParagraph>
            <div className='mt-elementSpace flex flex-col md:gap-[0px] gap-elementSpace md:flex-row justify-evenly items-center'>
                <div className='flex flex-col justify-center items-center'>
                <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
                    <h1 className={"text-[70px] font-[600] relative flex"}>
                    {counterOn && (
                <CountUp start={0} end={250} duration={2} delay={0} />
              )}+
                        <div className='absolute bottom-[15px] left-[-10%] w-[120%] h-[25px] z-[-1] bg-mainColor'></div>
                    </h1>

          </ScrollTrigger>
                    <LargeParagraph>Happy Clients</LargeParagraph>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
                    <h1 className={"text-[70px] font-[600] relative flex"}>
                    {counterOn && (
                <CountUp start={0} end={5} duration={4} delay={0} />
              )}+
                        <div className='absolute bottom-[15px] left-[-10%] w-[120%] h-[25px] z-[-1] bg-mainColor'></div>
                    </h1>

          </ScrollTrigger>
                    <LargeParagraph>Years of Experience</LargeParagraph>
                </div>
            </div>
        </Wrapper>
        <OurClients/>
    </section>
  )
}


const OurClients = () =>{
    return (
        <div className='w-full mt-sectionSepration'>

            <MediumHeading className={"flex gap-[10px] md:px-[50px] px-[15px] items-center"}>
                <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
                Our Clients
            </MediumHeading>
            <div className='mt-elementSpace py-[25px] relative'>

            <div className="absolute h-[100%] md:w-[270px] w-[50px] z-[10] top-0 left-0" style={{
              backgroundImage:
                "linear-gradient(to right, white, rgb(255,255,255,0.2))",
            }}></div>
            <div className="absolute h-[100%] md:w-[270px] w-[50px] z-[10] top-0 right-0" style={{
              backgroundImage:
                "linear-gradient(to left, white, rgb(255,255,255,0.1))",
            }}></div>
            <Marquee pauseOnHover={true} className='relative'>


                <img src="/logo1.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo2.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo3.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo5.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo6.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo7.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo8.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo9.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo10.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo11.png" className='mr-[120px] h-[50px]' alt="" />
                <img src="/logo12.png" className='mr-[120px] h-[50px]' alt="" />
            </Marquee>
            </div>
        </div>
    )
}