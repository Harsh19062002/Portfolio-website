import React from 'react'
import About from './components/About'
import Navbar from "./components/Navbar";
import Skills from './components/Skills'
import Project from "./components/Project";
import Contact from './components/Contact'
import Footer from "./components/Footer";
import Education from './components/Education';


const App = () => {
  return (
    <div className="bg-[#050414]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className='realtive pt-20'>
        <Navbar />
        <About />
        <Skills/>
        <Project/>
        <Education/>
        <Contact/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default App
