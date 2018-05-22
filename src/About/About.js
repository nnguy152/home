import React, { Component } from 'react'
import '../About/About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className='page-h1'>&lt; About /&gt;</h1>
        <section>
          <div className="about-sections">
            {/* <img
              src={require('../About/person.png')}
              alt="icons"
              className="icon"
            /> */}
            {/* <h3>&#123; Me &#125;</h3> */}
            <p>
              <span className='about-i'>I am</span> a full-stack web developer who takes in pride in my yearning
              for some learning- to improve my skills and push myself to the next
              level.
            </p>
            
            <p>
            <span className='about-i'>I was</span> a full-time oral surgery assistant straight out of University of Maryland (Go Terps!) 
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
            <p>
            <span className='about-i'>I love</span> to learn about differents ways to approach a
            programming problem, hang with my dog, pick heavy things up ... and put them down.
            </p>
            </div>
        </section>
      </div>
    )
  }
}

export default About
