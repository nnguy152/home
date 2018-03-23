import React, { Component } from 'react';
import './Portfolio.css'

const image = require('./towergif.gif')

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>&lt;Gallery /&gt;</h1>
        <section>
          <div className="p">
            <h3>&#123; Tower of Hanoi &#125;</h3>
            <div className="line" />
            <img src={image} alt="parallax" className="gif" />
            <div className="line line-bottom" />
          </div>
          <div className="p">
            <h3>&#123; Con-A-Thon &#125;</h3>
            <div className="line" />
            <img src={image} alt="parallax" className="gif" />
            <div className="line line-bottom" />
          </div>
          <div className="p">
            <h3>&#123; React App &#125;</h3>
            <div className="line" />
            <img src={image} alt="parallax" className="gif" />
            <div className="line line-bottom" />
          </div>
          <div className="p">
            <h3>&#123; SomeOtherApp &#125;</h3>
            <div className="line" />
            <img src={image} alt="parallax" className="gif" />
            <div className="line line-bottom" />
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;