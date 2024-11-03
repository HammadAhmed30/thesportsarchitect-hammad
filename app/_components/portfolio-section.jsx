"use client";

import SmallHeading from "@/components/TypoGraphy/heading-small";
import LargeParagraph from "@/components/TypoGraphy/paragraph-large";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IoCloseSharp } from "react-icons/io5";

export default function PortfolioSection() {
  const projects = [
    {
      url: "/baseball",
      name: "Base Ball",
      image: "/b1.png",
      desc: "WE PROVIDE 3D SPORTS ARCHITECTURE FOR BASEBALL GROUNDS, DELIVERING INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS.",
    },
    {
      url: "/clubdipickle",
      name: "Club Dipickle",
      image: "/uk1.png",
      desc: "WE OFFER 3D SPORTS ARCHITECTURE FOR TENNIS COURTS, CREATING UNIQUE, HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS.",
    },
    {
      url: "/complex",
      name: "Complex",
      image: "/c1.png",
      desc: "WE OFFER 3D SPORTS ARCHITECTURE FOR SPORTS FACILITIES, DELIVERING INNOVATIVE, HIGH-QUALITY, AND SUSTAINABLE DESIGNS.",
    },
    {
      url: "/dinko",
      name: "Dinko",
      image: "/d1.png",
      desc: "WE PROVIDE 3D SPORTS ARCHITECTURE FOR SPORTS CLUBS, CREATING CUTTING-EDGE, HIGH-QUALITY, AND ECO-FRIENDLY DESIGNS.",
    },
    {
      url: "/icehockey",
      name: "Ice Hockey",
      image: "/ic1.png",
      desc: "WE PROVIDE 3D SPORTS ARCHITECTURE FOR ICE HOCKEY ARENAS, DELIVERING INNOVATIVE, HIGH-PERFORMANCE, AND SUSTAINABLE DESIGNS.",
    },
    {
      url: "/pickle",
      name: "Pickle",
      image: "/p1.png",
      desc: "WE OFFER 3D SPORTS ARCHITECTURE FOR PLAYING AND SPORTS GROUNDS, CREATING INNOVATIVE, HIGH-QUALITY, AND SUSTAINABLE DESIGNS.",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);


  const [seeImage, setSeeImage] = useState("")


  return (
    <section
      ref={targetRef}
      className="relative pb-elementSpace"
    >

      {seeImage!=="" && <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-[rgb(0,0,0,0.8)] z-[25]">
      <IoCloseSharp
          onClick={() => setSeeImage("")}
          className="absolute top-[15px] right-[15px] text-white cursor-pointer"
          size={24}
        />

        <img className="w-[90%] h-[90%] object-contain" src={seeImage} alt="" />
      </div>}
      <LargeParagraph className={"text-center uppercase"}>Render Animation for videos</LargeParagraph>
      <Wrapper
        className={" overflow-hidden flex items-center pb-[12px]"}
      >
        {/* <motion.div style={{x}} className='flex gap-[12px]'>

          {projects.map((project, index)=> (<Card project={project} index={index} />))}
        
        </motion.div> */}

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full mt-[30px] relative overflow-hidden"
        >
          <CarouselContent>
            <CarouselItem className="lg:basis-1/4">
              <div className="md:h-[600px] h-[600px] cursor-pointer overflow-hidden rounded-[15px]">
                <video
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                  loop
                  className="object-cover w-full h-full"
                >
                  <source src="/v1.mp4" type="video/mp4" />
                </video>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
              <div className="md:h-[600px] h-[600px] cursor-pointer overflow-hidden rounded-[15px]">
                <video
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                  loop
                  className="object-cover w-full h-full"
                >
                  <source src="/v2.mp4" type="video/mp4" />
                </video>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
              <div className="md:h-[600px] h-[600px] cursor-pointer overflow-hidden rounded-[15px]">
                <video
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                  loop
                  className="object-cover w-full h-full"
                >
                  <source src="/v3.mp4" type="video/mp4" />
                </video>
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
              <div className="md:h-[600px] h-[600px] cursor-pointer overflow-hidden rounded-[15px]">
                <video
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  muted
                  loop
                  className="object-cover w-full h-full"
                >
                  <source src="/v4.mp4" type="video/mp4" />
                </video>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="md:hidden flex" />
          <CarouselNext className="md:hidden flex" />
        </Carousel>
      </Wrapper>
      <LargeParagraph className={"text-center mt-elementSpace uppercase"}>Render Images for  photos</LargeParagraph>
      <Wrapper
        className={"overflow-hidden flex items-center pb-[12px] relative"}
      >
        {/* <motion.div style={{x}} className='flex gap-[12px]'>

          {projects.map((project, index)=> (<Card project={project} index={index} />))}
        
        </motion.div> */}

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full mt-elementSpace relative overflow-hidden"
        >
          <CarouselContent>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/b1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/b1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/b2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
              <img src="/b2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/g1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/g1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/g2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/g2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/g4.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/g4.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/g5.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/g5.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/p1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/p1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/p2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/p2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/p3.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/p3.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/p4.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/p4.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/par1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/par1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/par2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/par2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/r1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/r1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/r2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/r2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/r3.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/r3.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/r4.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/r4.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/n1.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/n1.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/n2.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/n2.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/n3.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/n3.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/n4.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/n4.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem className="lg:basis-1/4">
            <div onClick={()=>setSeeImage("/n5.jpg")} className="md:h-[350px] h-[400px] cursor-pointer overflow-hidden rounded-[15px]">
            <img src="/n5.jpg" className="object-cover w-full h-full" alt="" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className=" absolute left-[5px] top-[50%] translate-y-[-50%]" />
          <CarouselNext className=" absolute right-[5px] top-[50%] translate-y-[-50%]" />
        </Carousel>
      </Wrapper>
    </section>
  );
}

const Card = ({ project }) => {
  return (
    <Link
      href={project.url}
      className="h-[10vh] min-h-[550px] md:h-[100vh] z-[2] min-w-[90vw] md:min-w-[600px] bg-mainColor relative group transition-all"
    >
      <div
        className="w-[150px] h-[150px] z-[10] absolute top-[10%] group-hover:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center rounded-full group-hover:opacity-[1] opacity-0 transition-all bg-mainColor"
        style={{ transitionDuration: "1100ms" }}
      >
        <SmallParagraph>Click to see</SmallParagraph>
      </div>

      <div
        className="w-full group-hover:h-[100%] transition-all h-[62%] overflow-hidden  "
        style={{ transitionDuration: "800ms" }}
      >
        <img
          src={project.image}
          className="group-hover:blur-[5px] w-full h-full object-cover bg-center group-hover:scale-[1.1] transition-all"
          alt=""
        />
      </div>
      <div className="w-full h-[38%] p-[25px]">
        <SmallHeading>{project.name}</SmallHeading>
        <LargeParagraph className={"mt-[20px]"}>{project.desc}</LargeParagraph>
      </div>
    </Link>
  );
};

const VideoCard = () => {
  return <div></div>;
};
