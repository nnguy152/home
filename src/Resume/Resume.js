import React, { Component } from 'react';
import './Resume.css'
import resume from './Nhi-Nguyen-Resume.pdf'

class Resume extends Component {
   render() {
      return (
         <div className="iframe">
            <iframe className="iframe inner" src={resume} width="100%" height="700" type="application/pdf" />
         </div>
      );
   }
}

export default Resume;