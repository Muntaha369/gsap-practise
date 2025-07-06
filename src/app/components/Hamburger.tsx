"use client"

import React,{useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Mr_De_Haviland } from 'next/font/google'
import { Mr_Dafoe } from 'next/font/google'

const mrDafoe = Mr_Dafoe({ subsets: ['latin'], weight: '400' })

const Hamburger = () => {

  const [xdirection, setxdirection] = useState<number>()

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to('#hamMenu',{
      x:xdirection,
      duration:0.3,
      ease:"power1.inOut"
    })

  },[xdirection])

  return (
    <div className='h-screen w-screen flex'>
      <div className={`w-screen h-20 bg-gray-800 text-white px-10 flex items-center justify-between text-5xl ${mrDafoe.className}`}>
        <p>Mojito</p>
        <svg 
        onClick={()=>setxdirection(-265)}
        className='h-7'
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </div>

      <div id='hamMenu' className={`h-screen w-64 bg-gray-900 absolute flex flex-col justify-start top-0 right-[-265px]`}>
        <div className='h-20 border-b border-white flex items-center px-5'>
          <svg 
          onClick={()=>setxdirection(265)}
          className='h-7'
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Hamburger