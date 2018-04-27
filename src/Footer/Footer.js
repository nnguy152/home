import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <nav className="footer cMe">
        <a href="https://github.com/nnguy152"><i class="fab fa-github"></i></a> |
        <a href="https://www.linkedin.com/in/nnguy152/"><i class="fab fa-linkedin"></i></a>
        <p className="cMe">&#169;	Nhi Nguyen</p>
        <p className="google-images">Images @<a href="https://www.pixelstalk.net/">PixelStalk</a> | <a href="https://imgur.com/">Imgur</a> | <a href="http://getwallpapers.com">GetWallPapers</a></p>
      </nav>
    );
  }
}

export default Footer;