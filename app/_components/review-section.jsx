import Triangle from "@/components/triangle";
import MediumHeading from "@/components/TypoGraphy/heading-medium";
import SmallParagraph from "@/components/TypoGraphy/paragraph-small";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import Autoplay from "embla-carousel-autoplay"


export default function ReviewsSection() {
  return (
    <section className="pt-[48px] pb-elementSpace">
      <Wrapper className={"md:px-[50px] px-[12px]"}>
        <MediumHeading className={"flex gap-[10px] items-center"}>
          <Triangle className={"md:mx-[20px] mx-[5px]"} dark={true} />
          Reviews
        </MediumHeading>
        <Carousel opts={{loop:true}} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full mt-elementSpace relative overflow-hidden">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2">
            <ReviewCard/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
            <ReviewCard/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
            <ReviewCard/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10px] md:flex hidden" />
          <CarouselNext className="absolute bottom-0 right-[10px] md:flex hidden" />
        </Carousel>
      </Wrapper>
    </section>
  );
}


const ReviewCard = () =>{
    return (
        <div className="bg-black md:p-[30px] p-[20px] rounded-tl-[50px]">
            <img src="/quotes.png" className="md:w-[50px] w-[35px]" alt="" />
            <SmallParagraph className={"mt-[20px] text-white"}>
            THIS IS SOME DUMMY TEXT THAT WILL BE CHANGED WITH SOME REVIEW TEXT FROM FIVERR LATER WHILE DEVELOPMENT TEXT THAT WILL BE CHANGED WITH SOME REVIEW TEXT FROM FIVERR LATER WHILE DEVELOPMENT PROCESS.
            </SmallParagraph>
            <div className="flex justify-end">
                <SmallParagraph className={"mt-[20px] text-white font-bold italic"}>~ HAMMAD AHMED</SmallParagraph>
            </div>
        </div>
    )
}