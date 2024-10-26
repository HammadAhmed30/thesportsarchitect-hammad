import LargeHeading from '@/components/TypoGraphy/heaidng-large'
import Wrapper from '@/components/wrapper'
import React from 'react'

export default function BaseballPage() {
  return (
    <main className='w-full'>
        <Wrapper>
            <div className='w-full px-[0px] md:px-[40px] '>
                <LargeHeading className={"mb-[50px]"}>BASE BALL</LargeHeading>
                <img src="/bb2.jpg" className='w-full mb-[40px]' alt="" />
                <img src="/bb1.jpg" alt="" />
            </div>
        </Wrapper>
    </main>
  )
}
