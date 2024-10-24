import MediumHeading from '@/components/TypoGraphy/heading-medium'
import SmallHeading from '@/components/TypoGraphy/heading-small'
import LargeHeading from '@/components/TypoGraphy/heaidng-large'
import LargeParagraph from '@/components/TypoGraphy/paragraph-large'
import SmallParagraph from '@/components/TypoGraphy/paragraph-small'
import Wrapper from '@/components/wrapper'
import React from 'react'
import LandingSection from './_components/landing-section'
import AboutUsSection from './_components/about-us'

export default function Page() {
  return (
    <main className='w-full'>
      <LandingSection/>
      <AboutUsSection/>
    </main>
  )
}
