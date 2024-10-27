"use client"

import SmallHeading from '@/components/TypoGraphy/heading-small'
import LargeParagraph from '@/components/TypoGraphy/paragraph-large'
import SmallParagraph from '@/components/TypoGraphy/paragraph-small'
import Wrapper from '@/components/wrapper'
import { state } from '@/store'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'



export default function PortfolioSection() {

  const projects = [
    {
      url:"/baseball",
      name:"Base Ball",
      image : "/b1.png",
      desc : "WE PROVIDE 3D SPORTS ARCHITECTURE FOR BASEBALL GROUNDS, DELIVERING INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS."
    },
    {
      url:"/clubdipickle",
      name:"Club Dipickle",
      image : "/uk1.png",
      desc : "WE OFFER 3D SPORTS ARCHITECTURE FOR TENNIS COURTS, CREATING UNIQUE, HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS."
    },
    {
      url:"/complex",
      name:"Complex",
      image : "/c1.png",
      desc : "WE OFFER 3D SPORTS ARCHITECTURE FOR SPORTS FACILITIES, DELIVERING INNOVATIVE, HIGH-QUALITY, AND SUSTAINABLE DESIGNS."
    },
    {
      url:"/dinko",
      name:"Dinko",
      image : "/d1.png",
      desc : "WE PROVIDE 3D SPORTS ARCHITECTURE FOR SPORTS CLUBS, CREATING CUTTING-EDGE, HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS."
    },
    {
      url:"/icehockey",
      name:"Ice Hockey",
      image : "/ic1.png",
      desc : "WE PROVIDE 3D SPORTS ARCHITECTURE FOR ICE HOCKEY ARENAS, DELIVERING INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS."
    },
    {
      url:"/pickle",
      name:"Pickle",
      image : "/p1.png",
      desc : "WE OFFER 3D SPORTS ARCHITECTURE FOR PLAYING AND SPORTS GROUNDS, CREATING INNOVATIVE, HIGH-QUALITY, AND SUSTAINABLE DESIGNS."
    },
  ]
  
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef
  })
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-90%"])

  return (
    <section ref={targetRef} className='relative h-[400vh] pb-elementSpace md:bg-transparent bg-black'>
      <Wrapper className={"h-[100vh] sticky top-0 overflow-hidden flex items-center pb-[12px]"}>
        
        <motion.div style={{x}} className='flex gap-[12px]'>

          {projects.map((project, index)=> (<Card project={project} index={index} />))}
        
        </motion.div>
      </Wrapper>
    </section>
  )
}


const Card = ({project}) =>{
  return(
    <Link href={project.url}  className='h-[10vh] min-h-[550px] md:h-[100vh] z-[2] min-w-[90vw] md:min-w-[600px] bg-mainColor relative group transition-all'>

      <div className='w-[150px] h-[150px] z-[10] absolute top-[10%] group-hover:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center rounded-full group-hover:opacity-[1] opacity-0 transition-all bg-mainColor' style={{transitionDuration:"1100ms"}}>
        <SmallParagraph>Click to see</SmallParagraph>
      </div>

      <div className='w-full group-hover:h-[100%] transition-all h-[62%] overflow-hidden  ' style={{transitionDuration:"800ms"}}>
        <img src={project.image} className='group-hover:blur-[5px] w-full h-full object-cover bg-center group-hover:scale-[1.1] transition-all' alt="" />
      </div>
      <div className='w-full h-[38%] p-[25px]'>
        <SmallHeading>{project.name}</SmallHeading>
        <LargeParagraph className={"mt-[20px]"}>{project.desc}</LargeParagraph>
      </div>
    </Link>
  )
}