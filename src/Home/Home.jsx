import React from "react";
import developer from '../assets/developer.png'
import './Home.css'
import bgDark from '../assets/backgroundimg/bg-dark.png'
import bgLight from '../assets/backgroundimg/bg-light.png'

const Home = ({darkMode}) => {

    return <>
    <section id="home-section">
        <div className="maincontainer">
            <img
                className="background-img fade"
                src={bgDark}
                // src={darkMode ? bgDark : bgLight}
                alt="background"/>

            <div className="container-left">
                <h4>Welcome to my world ✨</h4>
                <p>Hi, I'm Saurabh Patil</p>
                <h1>Web developer</h1>
                <p>I'm a passionate Web Developer specializing in building responsive,
                    user-friendly websites and web applications. With a strong foundation in HTML,
                    CSS, JavaScript, and modern framework like React,
                    I create digital experiences that are both functional and visually engaging.
                </p>
            </div>

            <div className="container-right">
                <img src={developer} alt="img" />
            </div>

        </div>
        </section>
    </>
}
export default Home