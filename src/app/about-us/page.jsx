import React from 'react'
import HeroSection2 from '../_components/hero-section2'
import AboutUs2 from '../_components/about-us2'
import HappyClient from '../_components/happy-client'
import AboutDetail from '../_components/about-detail'

export default function page() {
  return (
    <div>
        
      <HeroSection2 name={'About us'} img={'https://cdn.prod.website-files.com/605f2547102fdbbeff1b21e0/64ac31de0e5239f5ed8b3be0_trade_1900x924.jpg'} />
      <AboutUs2 />
      <HappyClient />
      <AboutDetail />
    </div>
  )
}
