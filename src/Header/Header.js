import React, { Component } from 'react';
import './Header.css'
import MenuItem from './MenuItem'

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <MenuItem classNameText={'sidenav'} id="mySidenav"/>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;