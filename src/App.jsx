import React, { useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Works"
import Experience from './components/Experience'
import Tech from './components/Tech'
import Contact from "./components/Contact"
import StarsCanvas from "./components/StarsCanvas"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GitHubStats from "./components/GitHubStats"
import LoadingScreen from "./components/LoadingScreen"
import SmoothScroll from "./components/SmoothScroll"
import CustomCursor from "./components/CustomCursor"
import ScrollProgress from "./components/ScrollProgress"
import FloatingActionButton from "./components/FloatingActionButton"
import ParticleSystem from "./components/ParticleSystem"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        <ParticleSystem />
        <FloatingActionButton />
        <ThemeToggle />
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Work />
          <GitHubStats />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
