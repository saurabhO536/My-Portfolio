// import React, { useEffect, useState } from 'react'
// import './App.css'
// import Navbar from './Navbar/Navbar'
// import Home from './Home/Home'
// import Skills from './Skills/Skills'
// import Projects from './Projects/Projects'


// function App() {

//   // const [darkMode, setDarkMode] = useState(false);

//   // useEffect(() => {
//   //   if (darkMode) {
//   //     document.body.classList.add('dark');
//   //   } else {
//   //     document.body.classList.remove('dark');
//   //   }
//   // }, [darkMode]);

//   return (
//     <div>    
//     {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//     <Home darkMode={darkMode} />
//     <Skills darkMode={darkMode} /> */}
    
//     <Navbar/>
//     <Home/>
//     <Skills/>
//     <Projects/>

//     </div>
//   )
// }

// export default App


import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
// import MouseFollower from "mouse-follower";
// import gsap from "gsap";

function App() {

  
// MouseFollower.registerGSAP(gsap);

// const cursor = new MouseFollower();


  return (
    <BrowserRouter>
      <Navbar/>
      <Home />
      <Skills/>
      <Projects/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Contact/>
    </BrowserRouter>
  )
}

export default App
