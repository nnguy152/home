import React, { Component } from 'react';

class MenuItem extends Component {
   render() {
      return (
         <div className={this.props.classNameText}>
            <a href='#about'><li>About</li></a>
            <a href='#portfolio'><li>Projects</li></a>
            <a href='#resume'><li>Resume</li></a>
            <a href='#contact-me'><li>Contact Me</li></a>
         </div>
      );
   }
}

export default MenuItem;