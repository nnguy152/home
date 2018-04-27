import React, { Component } from 'react'
import '../About/About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>&lt;About /&gt;</h1>
        <section>
          <div className="about-sections">
            <img
              src={require('../About/person.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Me &#125;</h3>
            <p>I am a full-stack web developer who takes in pride in my yearning
            for some learning- to improve my skills and push myself to the next
            level. Every new thing I learn about coding opens up the door to a
            thousand new unknowns that I can't wait to explore.</p>
          </div>
          
          <div className="about-sections">
            <img
              src={require('../About/glasses.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Skills &#125;</h3>
            <p>Including, but not limited to: HTML, CSS, JavaScript, Node.js, Express.js, 
            MongoDB, Handlebars, React.js, Ruby & Ruby on Rails, and Adobe Photoshop.</p>
          </div>
          <div className="about-sections">
            <img
              src={require('../About/heart.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Fun &#125;</h3>
            <p>When I'm not working on projects, my favorite thing to do is
            hang out with my dog, go hiking, draw, binge-watch Netflix shows, and geek out over new manga chapter releases. </p>
          </div>
        </section>
      </div>
    )
  }
}

export default About
