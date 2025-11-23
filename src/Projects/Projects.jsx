
import React from 'react'
import '../Projects/Project.css'
import bgDark from '../assets/backgroundimg/bg-dark.png'
import leftproject1 from '../assets/Projectimg/project-left1.png'
import centerproject from '../assets/Projectimg/project-center1.png'
import rightproject from '../assets/Projectimg/project-right1.png'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <section id="project-section">
    <div className='mainContainer'>
      <img className="background-img fade" src={bgDark} alt="background"/>
      <h2>PROJECTS</h2>

      <div className='container'>
        
        <Link target='_blank' to={"https://github.com/saurabhO536/Shopper-Clothing-Website"} className="left-project project">
          <img className='img1' src={leftproject1} alt="" />
          <h4 className='projectName'>Shopper Clothing website</h4>
          <p className='projectDesc'>SHOPPER is a modern clothing e-commerce website where users can browse
            and order clothes for men, women, and kids. The platform includes full
            login/signup authentication and a dynamic cart system with checkout features.</p>
          
        </Link>

        <Link target='_blank' to={"https://github.com/saurabhO536/Food-ordering-"} className="center-project project">
          <img className='img1' src={centerproject} alt="" />
          <h4 className='projectName'>HungerBeatz Food website</h4>
          <p className='projectDesc'>This food ordering website offers a wide variety of food items with an intuitive and 
            user-friendly interface. Key features include: Search Functionality, Categorized Items,
             Shopping Cart, Notifications & Alerts, Increment or decrement item quantities.</p>
          
        </Link>

        <div className="right-project project">
          <img className='img1' src={rightproject} alt="" />
           <h4 className='projectName'>My Portfolio</h4>
          <p className='projectDesc'>This is my personal portfolio website built using React. 
            It presents my work as a Web Developer through a sleek, modern, and responsive design. 
            The site includes sections for About, Skills, Projects, and Contact. 
            The goal of this portfolio is to provide a professional digital presence where 
            I can display my projects, introduce myself, and allow people to connect with me easily...</p>
         
        </div>

      </div>
    </div>
    </section>
  )
}

export default Projects
