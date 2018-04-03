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
            I am a full-stack web developer who takes in pride in my yearning
            for some learning- to improve my skills and push myself to the next
            level. Every new thing I learn about coding opens up the door to a
            thousand new unknowns that I can't wait to explore.
          </div>
          <div className="about-sections">
            <img
              src={require('../About/glasses.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Skills &#125;</h3>
            Including, but not limited to: HTML, CSS, Javascript, Express,
            MongoDB, Handlebars, React, Redux, Ruby, Ruby on Rails
          </div>
          <div className="about-sections">
            <img
              src={require('../About/heart.png')}
              alt="icons"
              className="icon"
            />
            <h3>&#123; Fun &#125;</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque dolor enim, luctus ac nisi vitae, consequat molestie
            sapien. Proin finibus commodo mi, nec rutrum risus semper at.
            Phasellus cursus efficitur vehicula.
          </div>
        </section>
      </div>
    )
  }
}

export default About
