import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header" >
        <h1>&lt;Nhi Nguyen /&gt;</h1>
        <nav>
          <ul>
            <a href='#'><li>Home</li></a>
            <a href='#about'><li>About</li></a>
            <div className="dropdown">
              <li className="dropbtn">Portfolio</li>
              <div className="dropdown-content">
                <a href="#portfolio">My Projects</a>
                <a href="#">My Art</a>
              </div>
            </div>
            <a href='#third'><li>Resume</li></a>
            <a href='#last'><li>Contact Me</li></a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;