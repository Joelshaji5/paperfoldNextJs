'use client'

import Image from 'next/image'
import Hero from './Component/HomePageComponent/Hero'
import Ourclient from './Component/HomePageComponent/Ourclient'
import CustomSlider from './Component/HomePageComponent/twoCarousel'
import Testing from './Component/HomePageComponent/OurclientCarousel/Testing'
import Counter from './Component/HomePageComponent/Counter'
import Timeline from './Component/Timeline'
import SnapScrollPage from './Component/snapScrollPage'


export default function Home() {
  return (
    
    
    <div>
      {/* <Testing /> */}
      < SnapScrollPage/>
    {/* <Timeline />
    <Hero />
    <Ourclient />
    <Counter />

    <CustomSlider /> */}


    </div>
    )
}
