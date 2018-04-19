import React, { Component } from 'react';

class MenuItem extends Component {
   render() {
      return (
         <div className={this.props.classNameText}>
            <a href='#about'><li>About</li></a>
            <a href='#portfolio'><li>Portfolio</li></a>
            <a href='#last'><li>Contact Me</li></a>
         </div>
      );
   }
}

export default MenuItem;