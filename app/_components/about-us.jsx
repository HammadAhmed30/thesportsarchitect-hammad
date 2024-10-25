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
    <section className='py-sectionSepration'>
        <Wrapper className={"px-[50px] "}>
            <MediumHeading className={"flex gap-[10px] items-center"}>
                <Triangle className={"mx-[20px]"} dark={true} />
                About Us
            </MediumHeading>
            <LargeParagraph className={"w-full max-w-[800px] mt-[30px]"}>SERVING IN 3D ARCHITECTURE FIELD FOR MORE THAT 10 YEARS AND HAVE OVER 250+ HAPPY CLIENTS FROM ALL OVER THE WORLD</LargeParagraph>
            <div className='mt-elementSpace flex justify-evenly items-center'>
                <div className='flex flex-col justify-center items-center'>
                <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            // onExit={() => setCounterOn(false)}
          >
                    <h1 className={"text-[70px] font-[600] relative flex"}>
                    {counterOn && (
                <CountUp start={0} end={250} duration={5} delay={0} />
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
                <CountUp start={0} end={10} duration={4} delay={0} />
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

            <MediumHeading className={"flex gap-[10px] px-[50px] items-center"}>
                <Triangle className={"mx-[20px]"} dark={true} />
                Our Clients
            </MediumHeading>
            <div className='mt-elementSpace'>

            </div>
            <Marquee pauseOnHover={true}>
            <img src="/logo1.png" className='mr-[30px] h-[70px]' alt="" />
                <img src="/logo2.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo3.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo5.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo6.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo7.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo8.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo9.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo10.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo11.png" className='mr-[100px] h-[80px]' alt="" />
                <img src="/logo12.png" className='mr-[100px] h-[80px]' alt="" />
            </Marquee>
        </div>
    )
}