import React, { Component } from 'react'
import Project from './Projects/Project'
import './Portfolio.css'

const project1 = ['Tower of Hanoi', require('./hanoi-gif.gif'), `A seemingly-plain, front-end game with a lot of little 'easter eggs.' Click to play and see if you can find the surprises!`, 'HTML, CSS, JavaScript', 'https://github.com/nnguy152/01-Tower-of-Hanoi', 'https://nnguy152.github.io/01-Tower-of-Hanoi/']
const project2 = ['Con-A-Thon', require('./con-gif.gif'), 'A convention trip planner with a list of amazing gaming, anime, and comic conventions to explore.', 'Handlebars, CSS, Express.js, MongoDB', 'https://github.com/nnguy152/02-Con-A-Thon', 'https://con-a-thon.herokuapp.com/']
const project3 = ['KeyTones', require('./keytones.gif'), `A front-end project that turns your keyboard into a musical instrument. Go ahead and make some noise! (Not compatible with Safari).`, 'Web Audio API, React.js, CSS', 'https://github.com/nnguy152/keytones', 'https://nnguy152.github.io/keytones/']
const project4 = ['PokeHeiWei', require('./poke.gif'), 'A height-weight comparison app with Pokemon! See what pokemon match your height and weight! ... Just kidding, this is still under construction.', 'PokeAPI, React.js, CSS', 'https://github.com/nnguy152/pokeheiwei-front', 'https://github.com/nnguy152/pokeheiwei-backend']

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1 className='page-h1'>&lt; Projects /&gt;</h1>

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
