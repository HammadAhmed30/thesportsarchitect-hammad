"use client";

import { RiMenu5Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

import ReuseableButton from "./button";
import SmallHeading from "./TypoGraphy/heading-small";
import Link from "next/link";

export default function Navbar({
  scrollToServices,
  scrollToPortfolio,
  scrollToReviews,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1300px] mx-auto p-[12px] absolute top-[15px] left-0 right-0 z-[10]">
      <div className="w-full px-[45px] pt-[10px] flex justify-between items-center">
        <img src="/logowhite.png" className="h-[60px]" alt="" />
        <div className="bg-black md:flex rounded-full p-[3px] hidden">
          <span
            className="text-[13px] cursor-pointer font-[500] px-[17px] py-[10px] bg-[#242424] rounded-full text-mainColor"
            href=""
          >
            HOME
          </span>
          <span
            onClick={scrollToServices}
            className="cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            SERVICES
          </span>
          <span
            onClick={scrollToPortfolio}
            className=" cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            PORTFOLIO
          </span>
          <span
            onClick={scrollToReviews}
            className=" cursor-pointer text-[13px] font-[500] px-[17px] py-[10px] rounded-full text-white"
            href=""
          >
            REVIEWS
          </span>
        </div>
        <ReuseableButton className={"hidden md:block"}>
          Start a call
        </ReuseableButton>
        <div
          onClick={() => {
            setMenuOpen(true);
          }}
          className="md:hidden flex justify-center items-center rounded-full w-[40px] h-[40px]  bg-mainColor"
        >
          <RiMenu5Line className="text-black  " size={24} />
        </div>
      </div>

      <div
        className={`fixed h-[100vh] w-full bg-black top-0 ${
          menuOpen ? "right-0" : "right-[-110vw]"
        } transition-all `}
        style={{ transitionDuration: "1000ms" }}
      >
        <IoCloseSharp
          onClick={() => setMenuOpen(false)}
          className="absolute top-[15px] right-[15px] text-white"
          size={24}
        />
        <div className="w-full h-full flex flex-col justify-evenly">
            <div className="flex w-full justify-center">

          <img src="/logowhite.png" className="w-[50%]" alt="" />
            </div>
          <div className="flex flex-col gap-[10px] pl-[35px]">
            <span
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                HOME
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToServices();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                SERVICES
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToPortfolio();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                PORTFOLIO
              </SmallHeading>
            </span>
            <span
              onClick={() => {
                scrollToReviews();
                setMenuOpen(false);
              }}
            >
              <SmallHeading
                className={
                  "text-white border-mainColor border-l-[7px] px-[10px] cursor-pointer"
                }
              >
                REVIEWS
              </SmallHeading>
            </span>
          </div>
          <div className="flex justify-center w-full">
            <Link href={"/call"} className="w-[70%]">
            <ReuseableButton className={"w-full"}>Start a call</ReuseableButton></Link>
            </div>
        </div>
      </div>
    </nav>
  );
}