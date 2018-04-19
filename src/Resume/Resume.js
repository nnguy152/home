import React, { Component } from 'react';
import './Resume.css'
import resume from './Nhi-Nguyen-Resume.pdf'
import resume1 from './NN.png'

class Resume extends Component {
   render() {
      return (
         <div className="iframe">
            <iframe className="iframe inner" src={resume} width="100%" height="700" />
            <img src={resume1} alt="resume" className="resume" />
         </div>
      );
   }
}

export default Resume;