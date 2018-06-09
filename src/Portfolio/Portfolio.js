import React, { Component } from 'react'
import Project from './Projects/Project'
import './Portfolio.css'

const project1 = ['Tower of Hanoi', require('./hanoi-gif.gif'), `Front-end puzzle game with surprises.`, 'HTML, CSS, JavaScript', 'https://github.com/nnguy152/01-Tower-of-Hanoi', 'https://nnguy152.github.io/01-Tower-of-Hanoi/']
const project2 = ['Con-A-Thon', require('./con-gif.gif'), 'Convention trip planner with database of conventions around the U.S.A.', 'Handlebars, CSS, Express.js, MongoDB', 'https://github.com/nnguy152/02-Con-A-Thon', 'https://con-a-thon.herokuapp.com/']
const project3 = ['KeyTones', require('./keytones.gif'), `A front-end keyboard instrument. (Not compatible with Safari).`, 'Web Audio API, React.js, CSS', 'https://github.com/nnguy152/keytones', 'https://nnguy152.github.io/keytones/']
const project4 = ['PokeHeiWei', require('./poke.gif'), 'A height-weight comparison app with Pokemon.', 'PokeAPI, React.js, CSS', 'https://github.com/nnguy152/pokeheiwei-front', 'https://github.com/nnguy152/pokeheiwei-backend']

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1 className='project-header'>Projects</h1>

        <section className="project-container">
          <Project project={project1} />
          <Project project={project2} />
          <Project project={project3} />
          <Project project={project4} />
        </section>
      </div>
    )
  }
}

export default Portfolio
