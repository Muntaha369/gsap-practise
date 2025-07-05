"use client"

import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const MouseFollow = () => {
  const MouseRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useGSAP(() => {
    if (MouseRef.current) {
      gsap.to(MouseRef.current, {
        x: pos.x,
        y: pos.y,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }, [pos])

  return (
    <div
      className='h-screen w-screen'
      onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div
        ref={MouseRef}
        className='bg-white h-10 w-10 rounded-full pointer-events-none'
        style={{ position: 'absolute', left: 0, top: 0 }}
      />
    </div>
  )
}

export default MouseFollow