import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <a href="https://www.facebook.com/nhipn">FB</a>
        <a href="https://github.com/nnguy152">GITHUB</a>
        <a href="https://www.linkedin.com/in/nnguy152/">LINKEDIN</a>
        <p className="cMe">&#169;	Nhi Nguyen</p>
      </nav>
    );
  }
}

export default Footer;