import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import React from 'react'

const Home = () => {
  return (
    <>
     
     <Hero/>
     <About/>
     <Skills/>
     <Education/>
     <Footer/>
     <main/>
    </>
  )
}

export default Home
