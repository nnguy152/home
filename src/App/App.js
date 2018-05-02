import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import myResume from '../Resume/Nhi-Nguyen-Resume.pdf'
// const img0 = "https://img00.deviantart.net/780c/i/2015/019/4/e/sky_lanterns_by_wlop-d7b5nfg.jpg"
const img0 = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Sun-And-Clouds-Wallpaper-free-download.jpg"
// const img1 = "https://pre00.deviantart.net/865d/th/pre/f/2015/101/2/9/9s_by_wlop-d8pa466.jpg"
const img2 = "https://i.imgur.com/JWxwrR6.jpg?1"
const img1 = "http://getwallpapers.com/wallpaper/full/6/5/5/751756-vertical-hd-texture-backgrounds-2560x1440.jpg"

class App extends Component {
  constructor () {
    super() 
    this.scrollTopBtn = this.scrollTopBtn.bind(this)
  }

  scrollTopBtn () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <button onClick={this.scrollTopBtn} id="myBtn" title="Go to top">^</button>
        <Parallax bgImage={img0} strength={500}>
          <div className="parallax-height" id='about'>
            <h2 className="image-text first-image-text start-text">
              &#123; Full-Stack Web Developer &#125;
              <span className="type">&nbsp;</span>
            </h2>
          </div>
        </Parallax>

        <About />

        <Parallax bgImage={img2} strength={200}>
          <div className="parallax-height-2" id="portfolio" >
          </div>
        </Parallax>

        <div>
          <Portfolio />
        </div>

        <Parallax bgImage={img1} strength={400}>
          <div className="parallax-height-resume" id="resume">
          <a href={myResume} download>
            <h2 className="image-text-resume">
              &#123; Resume &#125; 
            </h2>
          </a>
            <Resume />
          </div>
        </Parallax>

        <div className="about">
          <Contact />
        </div>
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
