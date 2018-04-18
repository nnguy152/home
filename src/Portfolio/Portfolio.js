import React, { Component } from 'react'
import Project from './Projects/Project'
import './Portfolio.css'

// var name = ['Tower of Hanoi', 'Con-A-Thon', 'Wobbler', '#Goals']
// const image = require('./towergif.gif')
// const img1 = require('./conthon.gif')

const project1 = ['Tower of Hanoi', 'https://nnguy152.github.io/01-Tower-of-Hanoi/', require('./hanoi-gif.gif'), `A seemingly-plain, front-end game with a lot of little 'easter eggs.' Click to play and see if you can find the surprises!`, 'HTML, CSS, JavaScript']
const project2 = ['Con-A-Thon', 'https://con-a-thon.herokuapp.com/', require('./con-gif.gif'), 'A convention trip planner with a list of amazing gaming, anime, and comic conventions to explore.', 'Handlebars, CSS, Express.js, MongoDB']
const project3 = ['Wobble', '#', require('./wobble-gif.gif'), 'A random-website generator for procrastinating. Explore the internet with a wobble.', 'React.js, CSS, Express.js, MongoDB']
const project4 = ['Music4', '#', require('./con-gif.gif'), 'A front-end project that turns your keyboard into an instrument.', 'React.js, CSS']


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>&lt;Gallery /&gt;</h1>
        <h1 className="galdes">Some Projects I've Done</h1>
        <section className="project-container">
          <Project project={project1} />
          <Project project={project2} />
          <Project project={project3} />
          {/* <Project project={project4} /> */}
        </section>
      </div>
    )
  }
}

export default Portfolio
