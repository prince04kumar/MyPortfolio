import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row gap-4 text-white justify-center p-4 items-center'>
      <motion.div 
        className='w-full'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
            <section className="">
              {/* Add circles here */}
            </section>
            <section className='h-1/2 flex flex-col justify-center items-center'>
            <motion.p 
              className='font-bold'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </motion.p>
            <motion.h1 
              className='text-6xl scale-y-110 font-extrabold tracking-wider'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Prince Kumar
            </motion.h1>
            </section>
      </motion.div>
      
        <video className='w-64 md:absolute rounded-md top-40 right-40' autoPlay loop muted>
          <source src="./framer-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.p 
          className='ml-32 font-extrabold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          To Shape Your Future With me!!!!
        </motion.p> 
    
    </div>
  )
}

export default Hero