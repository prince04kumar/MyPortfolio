import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='h-screen w-screen text-white bg-black p-4'>
      <Navbar />
      <div className='h-full w-full flex flex-col md:flex-row justify-center items-center'>
        <div className='h-full w-full flex justify-center items-center'>
         <span className='block'>PRINCE </span>
         
         <span className='block'>KUMAR</span>
                 </div>
        <div className='h-full w-full flex justify-center items-center'>
        <video width="600" controls autoPlay loop muted>
        <source src="./framer-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                </div>
      </div>
    </div>
  )
}

export default Hero