"use client"

import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const SVGstring = () => {
  const [iinitialPath, setInitialPath] = useState(200)
  const pathRef = useRef<SVGPathElement>(null)

  // Animate the path's "d" attribute with GSAP when iinitialPath changes
  useGSAP(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: `M 10 200 Q 645 ${iinitialPath}, 1270 200` },
        duration: 0.8,
        ease: "elastic.out(1,0.2)"
      })
    }
  }, [iinitialPath])

  return (
    <div>
      <div
        id='string'
        onMouseEnter={() => setInitialPath(200)}
        onMouseMove={dets => setInitialPath(dets.clientY)}
        onMouseLeave={() => setInitialPath(200)}
      >
        <svg className='bg-gray-800 w-full h-96 flex justify-center items-center'>
          <path
            ref={pathRef}
            d={`M 10 200 Q 505 ${iinitialPath}, 1000 200`}
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  )
}

export default SVGstring