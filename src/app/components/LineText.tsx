"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { DotGothic16 } from 'next/font/google'

const DelaGothicOne = DotGothic16({ subsets:['cyrillic'], weight:'400'});


const LineText = () => {

  useGSAP(()=>{
  const paraGrapSplit = new SplitText('.berserk',{type:'lines'})
  
  gsap.from(paraGrapSplit.lines,{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.06,
    ease:'back.out'
  })
  },[])

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='w-96'>
      <p className={` berserk text-xl ${DelaGothicOne.className}`}>
        Berserk is a dark fantasy anime that follows the journey of a lone mercenary named Guts as he battles through a brutal, medieval-inspired world filled with war, betrayal, and supernatural forces. The story explores themes of destiny, ambition, trauma, and the struggle between light and darkness. Guts wields a massive sword and fights against overwhelming odds while forming complicated bonds with allies and enemies alike. With intense action, emotional depth, and philosophical undertones, Berserk stands out for its raw storytelling and gritty atmosphere. It’s a powerful tale of survival, purpose, and what it means to fight for one's own path.
      </p>
      </div>
    </div>
  )
}

export default LineText