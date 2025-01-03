import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='h-full md:h-screen w-screen text-white bg-black relative'>
      <Navbar />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,50,50,0.8)_0%,transparent_100%)]'></div>
      <div className='h-full w-full flex flex-col md:flex-row justify-center items-center relative pt-10'>
        <div className='h-full w-full flex flex-col  gap-20 justify-center overflow-hidden items-center'>
          <div className='  font-sans flex flex-col text-lg font-[900] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mt-16'>
            <span className='block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0'>PRINCE </span>
            <span className='block md:text-8xl text-4xl md:leading-[85px] leading-normal m-0 p-0'>&nbsp;&nbsp;&nbsp;KUMAR</span>
          </div>
          <p className='text-center text-lg font-sans font-[900] mt-4 md:mt-0 md:w-[80%] text-transparent bg-clip-text px-6 bg-gradient-to-r from-white to-gray-300'>
            As a driven developer, I specialize in full-stack web development, AI integrations, and innovative projects, combining technical expertise and creativity to deliver impactful solutions and exceptional user experiences.
          </p>
        </div>
        <div className='h-full w-full flex flex-col items-center md:justify-center overflow-hidden md:items-center'>
          <video className='w-48 h-48 rounded-md md:absolute md:top-16 md:right-40' autoPlay loop muted>
            <source src="./framer-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='p-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore nesciunt perferendis officia facere odit tempore dolores amet omnis, adipisci reiciendis fugiat, ratione placeat nisi maxime maiores mollitia nam consequatur nostrum repellat. Ipsum fugit deleniti eaque voluptate ipsa ad facilis nesciunt non enim, ipsam totam soluta praesentium reiciendis animi vitae voluptatibus inventore sequi, itaque, quam distinctio error commodi perspiciatis in.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero