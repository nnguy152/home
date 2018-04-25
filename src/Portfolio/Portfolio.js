import React, { Component } from 'react'
import Project from './Projects/Project'
import './Portfolio.css'

const project1 = ['Tower of Hanoi', require('./hanoi-gif.gif'), `A seemingly-plain, front-end game with a lot of little 'easter eggs.' Click to play and see if you can find the surprises!`, 'HTML, CSS, JavaScript', 'https://github.com/nnguy152/01-Tower-of-Hanoi', 'https://nnguy152.github.io/01-Tower-of-Hanoi/']
const project2 = ['Con-A-Thon', require('./con-gif.gif'), 'A convention trip planner with a list of amazing gaming, anime, and comic conventions to explore.', 'Handlebars, CSS, Express.js, MongoDB', 'https://github.com/nnguy152/02-Con-A-Thon', 'https://con-a-thon.herokuapp.com/']
const project3 = ['KeyTones', require('./keytones.gif'), 'A front-end project that turns your keyboard into an instrument.', 'React.js, CSS', 'https://github.com/nnguy152/keytones', 'https://nnguy152.github.io/keytones/']


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>&lt;Projects /&gt;</h1>
        <h1 className="galdes">Some Work I've Done</h1>
        <section className="project-container">
          <Project project={project1} />
          <Project project={project2} />
          <Project project={project3} />
        </section>
      </div>
    )
  }
}

export default Portfolio
