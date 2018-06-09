import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import myResume from '../Resume/Nhi-Nguyen-Resume.pdf'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/about' render={() => (<About />)} />
          <Route path='/projects' render={() => (<Portfolio />)} />
          {/* <Route path='/resume' render={() => (<Resume />)} /> */}
          <Route path='/contact' render={() => (<Contact />)} />
          <Route path='/home' render={() => (<Home />)} />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
        </Switch>

        <Particles className='parts' 
                      params={{
                        particles: {
                          number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 1500
                            }
                          },
                          color: {
                            value: "#ffffff"
                          },
                          shape: {
                            type: "star",
                            stroke: {
                              width: 0,
                              color: "#000000"
                            },
                            polygon: {
                              nb_sides: 5
                            }
                          },
                          opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                              enable: false,
                              speed: 1,
                              opacity_min: 0.1,
                              sync: false
                            }
                          },
                          size: {
                            value: 3,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              sync: false
                            }
                          },
                          line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#F5FBFF",
                            opacity: 0.4,
                            width: 1
                          },
                          move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: true,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }
                          }
                        },
                        interactivity: {
                          detect_on: "canvas",
                          events: {
                            onhover: {
                              enable: true,
                              mode: "grab"
                            },
                            onclick: {
                              enable: true,
                              mode: "push"
                            },
                            resize: true
                          },
                          modes: {
                            grab: {
                              distance: 140,
                              line_linked: {
                                opacity: 1
                              }
                            },
                            bubble: {
                              distance: 400,
                              size: 40,
                              duration: 2,
                              opacity: 8,
                              speed: 3
                            },
                            repulse: {
                              distance: 200,
                              duration: 0.4
                            },
                            push: {
                              particles_nb: 4
                            },
                            remove: {
                              particles_nb: 2
                            }
                          }
                        },
                        retina_detect: true
                      }}/>

          {/* <a href={myResume} download>
            <h2 className="image-text-resume">
              &#123; Resume &#125; 
            </h2>
          </a> */}
      </div>
    );
  }
}

export default App;
