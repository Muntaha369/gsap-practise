import React from 'react'
import NavBar from './components/nav'
import Pin from './components/pin'
import ScrollX from './components/ScrollX'
import SVGstring from './components/SVGstring'
import MouseFollow from './components/MouseFollow'
import Hamburger from './components/Hamburger'
import CharText from './components/CharText'

const page = () => {
  return (
    <div>
      {/* 1.NavBar class change animation using toggleClass (scrollTrigger) */}
      {/* <NavBar/>  */}
      {/* 2.Pin makes particular DOM sticky interval relative start & end (scrollTrigger) */}
      {/* <Pin/> */}
      {/* 3.Pin X axis scroll */}
      {/* <ScrollX /> */}
      {/* 4.SVG String animation */}
      {/* <SVGstring/> */}
      {/* 5. Mouse follow up animation */}
      {/* <MouseFollow/> */}
      {/* 6. Hamburger animation */}
      {/* <Hamburger/> */}
      {/* 7. One by One Char animation*/}
      {/* <CharText/> */}
    </div>
  )
}

export default page