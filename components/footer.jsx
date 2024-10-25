import React from 'react'
import SmallParagraph from './TypoGraphy/paragraph-small'

export default function Footer() {
  return (
    <section className='w-full px-[12px]'>
    <div className='w-full rounded-t-[80px] bg-black flex flex-col items-center py-elementSpace px-[15px]'>
      <img src="/logowhite.png" className='h-[100px]' alt="" />
      <div className=' flex gap-[15px] mt-[15px]'>

        <a href='#' className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-mainColor'>
          <img className='w-[30px] h-[30px]' src="/insta.png" alt="" />
        </a>
        <a href='#' className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-mainColor'>
          <img className='w-[30px] h-[30px]' src="/youtube.png" alt="" />
        </a>

      </div>
        <a className='text-[17px] mt-[40px] font-[400] leading-[130%] text-white' href="mainto:the.sportsarchitect@gmail.com" >the.sportsarchitect@gmail.com</a>
        <SmallParagraph className={"text-white mt-[40px]"}>
        © ALL RIGHTS ARE RESERVED 2024
        </SmallParagraph>
    </div>
    </section>
  )
}
