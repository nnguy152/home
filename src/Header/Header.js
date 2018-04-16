import React, { Component } from 'react';
import './Header.css'
import MenuItem from './MenuItem'

class Header extends Component {
  render() {
    return (
      <div className="Header" >
        <a className="name-home" href='#'><h1>&lt;Nhi Nguyen /&gt;</h1></a>
        <nav>
          <ul>
            <div className="dropdown">
              <li className="dropbtn ham-db">
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
              </li>
              <div className="dropdown-content">
                <MenuItem classNameText={'ham-dd'}/>
              </div>
            </div>

            <MenuItem classNameText={'menu-items'}/>

          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;