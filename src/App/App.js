import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Footer from '../Footer/Footer'
import myResume from '../Resume/Nhi-Nguyen-Resume.pdf'
// const img0 = "https://img00.deviantart.net/780c/i/2015/019/4/e/sky_lanterns_by_wlop-d7b5nfg.jpg"
const img0 = "https://i.pinimg.com/originals/af/5c/7d/af5c7d63820a4f8366c67f44c8522dad.jpg"
// const img1 = "https://pre00.deviantart.net/865d/th/pre/f/2015/101/2/9/9s_by_wlop-d8pa466.jpg"
const img2 = "http://www.nafpaktia.com/data/wallpapers/25/808926.png"
const img1 = "http://getwallpapers.com/wallpaper/full/d/c/9/57345.jpg"

class App extends Component {
  render() {
    return (
      <div>
        <Parallax bgImage={img0} strength={300}>
          <div className="parallax-height" id="about">
            <h2 className="image-text first-image-text">
              ~Hello! 🙋🏻‍♀️Welcome to My Page~
              <span className="type">&nbsp;</span>
            </h2>
          </div>
        </Parallax>

        <About />

        <Parallax bgImage={img2} strength={1000}>
          <div className="parallax-height-2" id="portfolio" >
            {/* <h2 className="image-text">
              hi hi TEXT HERE 2
            </h2> */}
          </div>
        </Parallax>

        <div>
          <Portfolio />
        </div>

        {/* <Parallax bgImage={img0} strength={500}>
          <div className="parallax-height" id="third" >
            <h2 className="image-text">
              hi HIHIH TEXT THREEEE
            </h2>
          </div>
        </Parallax> */}


        <Parallax bgImage={img1} strength={500}>
          <div className="parallax-height-resume" id="last">
          <a href={myResume} download>
            <h2 className="image-text-resume">
              &#123; Resume &#125; 
            </h2>
          </a>
            <Resume />
          </div>
        </Parallax>

        {/* <div className="about">
          <Resume />
        </div> */}
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
