import React, { Component } from 'react';
import './Header.css'
import MenuItem from './MenuItem'

class Header extends Component {
  // constructor () {
  //   super() 
  //   this.state = {
  //     active: false
  //   }
  //   this.toggleMenu = this.toggleMenu.bind(this)
  // }

  // toggleMenu (e) {
  //   console.log(this.state.active)
  //   this.setState((prevState) => { return { active: !prevState.active }} )
  // }

  render() {
    // console.log(this.state.active)
    return (
      <div className="Header" >
        <a className="name-home" href='#'><h1>&lt;Nhi Nguyen /&gt;</h1></a>
        <nav>
          <ul>
            <div className="dropdown" 
              // onClick={this.toggleMenu}
            >
              <li className="dropbtn ham-db">
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
              </li>
              <div className="dropdown-content" 
                // style={{display: this.state.active ? "block" : "none" }}
              >
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