import React from 'react'
import './Skills.css'
import logohtml from '../assets/logo/html.png'
import logoCss from '../assets/logo/css.png'
import logoJs from '../assets/logo/javascript.png'
import logoReact from '../assets/logo/react.png'
import logojava from '../assets/logo/java.png'
import logosql from '../assets/logo/sql.png'
import bgDark from '../assets/backgroundimg/bg-dark.png'
import bgLight from '../assets/backgroundimg/bg-light.png'

const Skills = ({darkMode}) => {
  
  return (
  <>
  <section id="skills-section">
    <div className='mainContainer'>
      
        <img
          className="background-img fade" src={bgDark}
          // src={darkMode ? bgDark : bgLight}
          alt="background"/>

        <h2>My Skills</h2>
        <div className='Container'>
        <div className='logoContainer'><img className='logohtml' src={logohtml} alt="" /></div>
        <div className='logoContainer'><img className='logocss' src={logoCss} alt="" /></div>
        <div className='logoContainer'><img className='logojs' src={logoJs} alt="" /></div>
        <div className='logoContainer'><img className='logoreact' src={logoReact} alt="" /></div>
        <div className='logoContainer'><img className='logojava' src={logojava} alt="" /></div>
        <div className='logoContainer'><img className='logosql' src={logosql} alt="" /></div>
        </div>
    </div>
    </section>
  </>
  )
}

export default Skills