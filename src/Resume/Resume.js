import React, { Component } from 'react';
import './Resume.css'
import resume from './Nhi-Nguyen-Resume.pdf'
// import resume from './NN.png'

class Resume extends Component {
   render() {
      return (
         <div className="iframe">
            <iframe className="iframe inner" src={resume} width="100%" height="700" />
            {/* <img src={resume} alt="resume" className="resume" /> */}
         </div>
      );
   }
}

export default Resume;