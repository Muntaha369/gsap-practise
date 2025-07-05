"use client"

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const NavBar = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  const navRef = useRef(null)

  useGSAP(() => {
    gsap.to('.nav1', {
    scrollTrigger: {
      trigger: '.panel',
      start: 'top 10%',
      end: 'bottom bottom',
      toggleClass: {targets:navRef.current, className:"sunshine"},
      onUpdate:(self)=>console.log(self)
      // markers: true,
      // scrub: false
    }
  });
  }, []);
  return (
    <div>
      <nav
      ref={navRef}
       className=" nav1 sticky top-0 bg-amber-300 flex justify-end p-6 gap-3 ">
        <p>Home</p>
        <p>Community</p>
        <p>help</p>
      </nav>
      <div className=" panel h-[140vh] bg-amber-300 "></div>
    </div>
  )
}

export default NavBar

