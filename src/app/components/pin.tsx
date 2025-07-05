"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import scrollTrigger from 'gsap/ScrollTrigger'

const Pin = () => {

  gsap.registerPlugin(scrollTrigger)

  useGSAP(()=>{
    gsap.to('pinner',{
      scrollTrigger:{
        trigger:'.contain',
        start:'top top',
        pin:'.pinner',
        end:'bottom 30%',
        // markers:true,
        scrub:true
      }
    })
  })

  return (
    <div className=' h-screen w-screen mt-[1000px] mb-[1000px]'>
      <div className=' contain flex h-full w-full'>
        <div className=' pinner h-[30%] w-[65%] bg-gray-900 flex justify-center items-center'>
          <p className='text-4xl bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent font-bold'>Boxing IMG</p>
        </div>
        <div className='h-full w-[35%] bg-amber-200'><img className='h-full w-full' src="https://img.freepik.com/free-photo/digital-art-style-boxing-day-celebration_23-2151040902.jpg" alt="an-image" /></div>
      </div>
    </div>
  )
}

export default Pin