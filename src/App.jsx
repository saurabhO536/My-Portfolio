import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
// import Snowfall from 'react-snowfall'

function App() {

  
MouseFollower.registerGSAP(gsap);

// const cursor = new MouseFollower();

return (
  
      <BrowserRouter>
      <Snowfall />
      <Navbar/>
      <Home />
      <Skills/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
     
    
    
  )
}

export default App
