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
      <Wrapper className={"px-[50px]"}>
        <MediumHeading className={"flex gap-[10px] items-center"}>
          <Triangle className={"mx-[20px]"} dark={true} />
          Reviews
        </MediumHeading>
        <Carousel opts={{loop:true}} plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full mt-elementSpace">
          <CarouselContent>
            <CarouselItem className="basis-1/2">
            <ReviewCard/>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
            <ReviewCard/>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
            <ReviewCard/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Wrapper>
    </section>
  );
}


const ReviewCard = () =>{
    return (
        <div className="bg-black p-[30px] rounded-tl-[50px]">
            <img src="/quotes.png" className="w-[50px]" alt="" />
            <SmallParagraph className={"mt-[20px] text-white"}>
            THIS IS SOME DUMMY TEXT THAT WILL BE CHANGED WITH SOME REVIEW TEXT FROM FIVERR LATER WHILE DEVELOPMENT TEXT THAT WILL BE CHANGED WITH SOME REVIEW TEXT FROM FIVERR LATER WHILE DEVELOPMENT PROCESS.
            </SmallParagraph>
            <div className="flex justify-end">
                <SmallParagraph className={"mt-[20px] text-white font-bold italic"}>~ HAMMAD AHMED</SmallParagraph>
            </div>
        </div>
    )
}