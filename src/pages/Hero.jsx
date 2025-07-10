import React from 'react'
import HomePageHero from '../componants/HomePageHero'
import Features from '../componants/Features'
import CallToAction from '../componants/CallToAction'
import FAQSection from '../componants/FAQSection'
function Hero() {
  return (
    <div>
      <HomePageHero/>
      <Features/>
      <FAQSection/>
      <CallToAction/>
      
    </div>
  )
}

export default Hero
