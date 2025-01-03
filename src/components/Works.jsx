import { div } from 'framer-motion/client'
import React from 'react'


const Work = () => {
  return (
    <div className="  inset-0 bg-black">
    <div className='h-full md:h-screen w-screen text-white  inset-0 bg-[radial-gradient(circle_at_top,rgba(50,50,50,0.8)_0%,transparent_100%)] flex flex-col'>
      <div className='font-sans flex flex-col text-lg font-[900] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 p-16'>
        <span className='block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0'>MY </span>
        <span className='block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0'>&nbsp;&nbsp;&nbsp;PROJECTS</span>
      </div>

      <div className='flex flex-wrap justify-center gap-4 p-16 overflow-scroll'>
        <a href='#' className='w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <img src='https://picsum.photos/200/300' alt='Card Image' className='w-full h-1/2 object-cover rounded-t-lg' />
          <div className='p-4'>
            <h2 className='text-lg font-bold mb-2'>Card Title</h2>
            <p className='text-gray-600'>Card Details</p>
          </div>
        </a>
        <a href='#' className='w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <img src='https://picsum.photos/200/301' alt='Card Image' className='w-full h-1/2 object-cover rounded-t-lg' />
          <div className='p-4'>
            <h2 className='text-lg font-bold mb-2'>Card Title</h2>
            <p className='text-gray-600'>Card Details</p>
          </div>
        </a>
        <a href='#' className='w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          <img src='https://picsum.photos/200/302' alt='Card Image' className='w-full h-1/2 object-cover rounded-t-lg' />
          <div className='p-4'>
            <h2 className='text-lg font-bold mb-2'>Card Title</h2>
            <p className='text-gray-600'>Card Details</p>
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Work