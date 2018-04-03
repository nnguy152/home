import React, { Component } from 'react'
import Project from './Projects/Project'
import './Portfolio.css'

var name = ['Tower of Hanoi', 'Con-A-Thon', 'Wobbler', '#Goals']
const image = require('./towergif.gif')
const description = `A seemingly-plain, front-end Tower of Hanoi game using HTML, CSS, and Javascript with a lot of little 'easter eggs.'
Check out the link to play and see if you can find the surprises!`

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>&lt;Gallery /&gt;</h1>
        <section className="project-container">
          <Project name={name[0]} image={image} description={description} />
          <Project name={name[1]} image={image} description={description} />
          <Project name={name[2]} image={image} description={description} />
          <Project name={name[3]} image={image} description={description} />
        </section>
      </div>
    )
  }
}

export default Portfolio
