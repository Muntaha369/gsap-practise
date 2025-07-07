"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SimulCards = () => {

useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-contain',
      markers:true,
      start:"top 50%",
      toggleActions: "play reverse play reverse", //This makes the animation play every time you came accross the screen
      // scrub:true
    }
  });

  tl.from('.leftone',{
    opacity:0,
    x:-200,
    ease:"back.inOut"
  },"crocodilo") //The crocodilo plays animation Together not necessary ton name crocodillo but the name share between them should be same

  tl.from('.rightone',{
    opacity:0,
    x:200,
    ease:"back.inOut"
  },"crocodilo") //The crocodilo plays animation Together not necessary ton name crocodillo but the name share between them should be same

})

  return (
    <div className='mt-[800px] mb-[800px]'>
      <div className=' main-contain h-96 w-screen bg-gray-800 flex justify-between items-center p-10'>
        <div className='leftone h-[100%] w-[40%] bg-gray-900 rounded-3xl flex flex-col gap-3 justify-center items-center p-6'>
          <p className=' font-mono'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsum magni necessitatibus laboriosam veritatis quae soluta consequatur quidem maxime, harum a. Voluptatem similique quis autem placeat impedit architecto amet tempore?
          Suscipit explicabo harum deserunt rerum unde? Iusto in assumenda voluptatem velit recusandae. Neque, veniam minus?</p>

          <button className='px-4 py-1.5 text-2xl bg-gradient-to-r from-black to-gray-700 rounded-2xl font-bold w-full'>GET NOW!</button>

        </div>
        <div className='rightone h-[100%] w-[40%] bg-gray-900 rounded-3xl flex flex-col gap-3 justify-center items-center p-6'>
          <p className=' font-mono'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsum magni necessitatibus laboriosam veritatis quae soluta consequatur quidem maxime, harum a. Voluptatem similique quis autem placeat impedit architecto amet tempore?
          Suscipit explicabo harum deserunt rerum unde? Iusto in assumenda voluptatem velit recusandae. Neque, veniam minus?</p>

          <button className='px-4 py-1.5 text-2xl bg-gradient-to-r from-black to-gray-700 rounded-2xl font-bold w-full'>GET NOW!</button>

        </div>
      </div>
    </div>
  )
}

export default SimulCards