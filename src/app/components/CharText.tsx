'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { Dela_Gothic_One } from 'next/font/google'

const DelaGothicOne = Dela_Gothic_One({ subsets:['latin'], weight:'400'});

const CharText = () => {

  useGSAP(()=>{

    const heroSplit = new SplitText('.berserk',{ type:'chars'});

    gsap.from(heroSplit.chars,
    {
      opacity:0,
      yPercent:100,
      duration:1,
      stagger:0.06,
      ease:"expo.out"
    });
  },[]);

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <p className={`berserk text-7xl ${DelaGothicOne.className}`}
      >Berserk</p>
    </div>
  )
}

export default CharText