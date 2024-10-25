"use client"

import SmallHeading from '@/components/TypoGraphy/heading-small'
import LargeParagraph from '@/components/TypoGraphy/paragraph-large'
import SmallParagraph from '@/components/TypoGraphy/paragraph-small'
import Wrapper from '@/components/wrapper'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'



export default function PortfolioSection() {
  
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef
  })
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-90%"])

  return (
    <section ref={targetRef} className='relative h-[400vh] pb-elementSpace'>
      <Wrapper className={" h-[100vh] sticky top-0 overflow-hidden flex items-center pb-[12px]"}>
        
        <motion.div style={{x}} className='flex gap-[12px]'>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </motion.div>
      </Wrapper>
    </section>
  )
}


const Card = () =>{
  return(
    <div className='h-[100vh] md:h-[100vh] min-w-[90vw] md:min-w-[600px] bg-mainColor group hover:scale-[.92] transition-all'>
      <div className='w-full h-[62%] overflow-hidden '>
        <img src="/1-min.jpg" className='w-full h-full object-cover bg-center group-hover:scale-[1.1] transition-all' alt="" />
      </div>
      <div className='w-full h-[38%] p-[25px]'>
        <SmallHeading>Base Ball</SmallHeading>
        <LargeParagraph className={"mt-[20px]"}>SERVING IN 3D ARCHITECTURE FIELD FOR MORE THAT 10 YEARS AND HAVE OVER 250+ HAPPY CLIENTS FROM ALL OVER THE WORLD</LargeParagraph>
      </div>
    </div>
  )
}