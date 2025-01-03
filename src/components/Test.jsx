import React from 'react'
import  Spotlight  from './UI/spotlight'
import TdPin from './UI/3d-pin'

const Test = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-b from-[#1d1027] to-[#08030B] relative'>
        <Spotlight className= "-top-40 h-[90%] -left-32" />
        <Spotlight className= "-top-40 right-0 h-[90%] transform rotate-80" />
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='h-96 w-64 md:h-96 md:w-96 rounded-full bg-[#6F245A] blur-3xl opacity-50'></div>
        <div className='h-96  w-64 md:h-96 md:w-96 rounded-full  bg-[#2E418D] blur-3xl opacity-50 mt-8 -ml-16 md:-ml-32'></div>
      </div>
      <div className='absolute inset-0 bg-white/3 backdrop-blur-md'></div>
      <h1 className='text-white z-10 font-extrabold text-6xl md:text-9xl flex flex-col items-center gap-4'>
        <span className='block md:inline text-transparent bg-clip-text bg-gradient-to-r from-[#FF69B4] via-[#6F245A] to-[#2E418D] mix-blend-overlay'>Digital</span>
        <span className='block  text-transparent bg-clip-text bg-gradient-to-r from-[#FF69B4] via-[#6F245A] to-[#2E418D] mix-blend-overlay'>Craftman</span>
       </h1>
       <div className="h-36 w-36 bg-pink-800 z-10 " > <TdPin/></div>
      
    </div>
  )
}

export default Test
