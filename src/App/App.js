import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'

const img0 = "https://img00.deviantart.net/780c/i/2015/019/4/e/sky_lanterns_by_wlop-d7b5nfg.jpg"
const img1 = "https://pre00.deviantart.net/865d/th/pre/f/2015/101/2/9/9s_by_wlop-d8pa466.jpg"

class App extends Component {
  render() {
    return (
      <div>
        <Parallax bgImage={img0} strength={500}>
          <div className="parallax-height" id="about">
            <h2 className="image-text first-image-text">
              HIHIHIHIHIHIHIHIIHIHIHIHIHI
              <span className="type">&nbsp;</span>
            </h2>
          </div>
        </Parallax>

        <About />

        <Parallax bgImage={img1} strength={500}>
          <div className="parallax-height" id="portfolio" >
            <h2 className="image-text">
              hi hi TEXT HERE 2
            </h2>
          </div>
        </Parallax>
        
        <div>
          <Portfolio />
        </div>

        <Parallax bgImage={img0} strength={500}>
          <div className="parallax-height" id="third" >
            <h2 className="image-text">
              hi HIHIH TEXT THREEEE
            </h2>
          </div>
        </Parallax>

        <div className="about">
          <About />
        </div>

        <Parallax bgImage={img1} strength={500}>
          <div className="parallax-height" id="last" >
            <h2 className="image-text">
              hi HIHIHI TEXT LAST
            </h2>
          </div>
        </Parallax>

        <div className="about">
          <About />
        </div>

        <Parallax bgImage={img0} strength={500}>
          <div className="parallax-height" id="third" >
            <h2 className="image-text">
              hi hi there is text in here or something
            </h2>
          </div>
        </Parallax>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
