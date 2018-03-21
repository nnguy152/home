import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../Header/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header" >
        <h1>&lt;Nhi Nguyen /&gt;</h1>
        <nav>
          <ul>
            <a href='#'><li>Home</li></a>
            <a href='#about'><li>About</li></a>
            <a href='#second'><li>Portfolio</li></a>
            <a href='#third'><li>Resume</li></a>
            <a href='#last'><li>Contact Me</li></a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;