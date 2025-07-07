"use client"

import React from 'react'
import { motion } from 'motion/react'

const FrameSimulCards = () => {

  const arr = Array(6).fill(null)

  return (
    <div className='mt-[800px] mb-[800px]'>
      <div className=' main-contain h-[200vh] w-screen bg-gray-800 flex flex-wrap justify-between items-center p-10'>
        {
          arr.map((_,idx)=>(
            <motion.div
            key={idx}
            onClick={()=>console.log(idx)}
            initial={{
              opacity:0,
              x: idx%2===0?-300:300
            }}
            whileInView={{
              opacity:1,
              x:0,
              transition:{duration:0.7},
            }}
            viewport={{ once: false, amount: 0.2 }}
            className='leftone h-[29%] w-[40%] bg-gray-900 rounded-3xl flex flex-col gap-3 justify-center items-center p-6'>
              <p className=' font-mono'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsum magni necessitatibus laboriosam veritatis quae soluta consequatur quidem maxime, harum a. Voluptatem similique quis autem placeat impedit architecto amet tempore?
              Suscipit explicabo harum deserunt rerum unde? Iusto in assumenda voluptatem velit recusandae. Neque, veniam minus?</p>

              <button className='px-4 py-1.5 text-2xl bg-gradient-to-r from-black to-gray-700 rounded-2xl font-bold w-full'>GET NOW!</button>

            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default FrameSimulCards