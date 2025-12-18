/*
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {


  return (
    <nav className={`nav ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <nav className='nav'>
      <h1>SAURABH.DEV</h1>

      <ul className="list" id="list">
         <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button> 

        <li> <Link to="home-section" smooth={true} duration={1000} offset={-70}>Home</Link></li>

        <li><Link to="skills-section" smooth={true} duration={1000}offset={-50} >Skills</Link></li>

        <li><Link to="project-section" smooth={true} duration={1000}offset={-70} >Projects</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">      
      
      <h1 className="logo">SAURABH.DEV</h1>

      <button
        className="menu-button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        <span className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      <ul className={`list ${menuOpen ? 'open' : ''}`} id="list">
        <li>
          <Link to="home-section" smooth duration={800} offset={-70} onClick={handleLinkClick}>
            Home
          </Link>
        </li>

        <li>
          <Link to="skills-section" smooth duration={800} offset={-50} onClick={handleLinkClick}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="project-section" smooth duration={800} offset={-40} onClick={handleLinkClick}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact-section" smooth duration={800} offset={-40} onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
