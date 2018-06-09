import React, { Component } from 'react'
import './About.css'
import Skill from './Skill'

const skills = ['HTML5', 'CSS3', 'JavaScript (ES5, ES6)', 'React.js', 'Handlebars.js', 'Express.js','Node.js', 'JSON', 'Ruby', 'Ruby on Rails', 'MongoDB']
class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className='about-header'>About</h1>
        <section>
          <div className="about-sections">
            <p className='about-i'>I am...</p>
            <p className='about-p'> 
              A full-stack web developer who takes in pride in my yearning
              for some learning- to improve my skills and push myself to the next
              level.
            </p>

            <p className='about-i'>I was...</p>
            <p className='about-p'> 
              A full-time oral surgery assistant straight out of University of Maryland (Go Terps!)
              before I decided it was time for a career change.
            </p>

            {/* <div className="about-sections">
            <img
              src={require('../About/glasses.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Skills &#125;</h3>
            <p>Including, but not limited to: HTML, CSS, JavaScript, Node.js, Express.js, 
            MongoDB, Handlebars, React.js, Ruby & Ruby on Rails, and Adobe Photoshop.</p>
          </div> */}
            {/* <h3>&#123; Now &#125;</h3> */}
            <p className='about-i'>I love...</p>
            <p className='about-p'> 
              To learn about differents ways to approach a
              programming problem, hang with my dog, and pick heavy things up ... and put them down.
            </p>
            <p className='about-i'>My skills include...</p>
            <Skill skills={skills}/>
          </div>
        </section>
      </div>
    )
  }
}

export default About
