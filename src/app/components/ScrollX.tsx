"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const ScrollX = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to('.tryh1',{
      transform: "translateX(-150%)",
      ease:'sine.inOut',
      scrollTrigger:{
        trigger:'.box1',
        start:'top top',
        end: '125% top',
        scrub:5,
        pin:true,
        markers:true
      }
    })
  },[])

  return (
    <div>
      <div className='h-[150vh] w-screen'>
      </div>

      <div className=' box1 bg-sky-300 overflow-x-hidden text-gray-700'>
        <h1 className=' tryh1 text text-[30vw] flex whitespace-nowrap'>
          Shegei kageyama
        </h1>
      </div>

      <div className=' h-[80vh] w-screen'></div>

    </div>
  )
}

export default ScrollX