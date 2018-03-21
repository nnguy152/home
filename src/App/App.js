import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import '../App/App.css';
import Header from '../Header/Header'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'

const img0 = "https://img00.deviantart.net/780c/i/2015/019/4/e/sky_lanterns_by_wlop-d7b5nfg.jpg"
const img1 = "https://pre00.deviantart.net/865d/th/pre/f/2015/101/2/9/9s_by_wlop-d8pa466.jpg"

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>

        <Parallax bgImage={img0} strength={500}>
          <div style={{ height: 400 }} />
        </Parallax>

        <anchor id="about" />
        <About />

        <Parallax bgImage={img1} strength={500}>
          <div style={{ height: 400 }} id="portfolio" />
        </Parallax>

        <p >
          <Portfolio />
        </p>

        <Parallax bgImage={img0} strength={500}>
          <div style={{ height: 400 }} id="third" />
        </Parallax>

        <p className="about">
          <About />
        </p>

        <Parallax bgImage={img1} strength={500}>
          <div style={{ height: 400 }} id="last" />
        </Parallax>

        <p className="about">
          <About />
        </p>

        <Parallax bgImage={img0} strength={500}>
          <div style={{ height: 400 }}></div>
        </Parallax>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
