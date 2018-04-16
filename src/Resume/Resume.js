import React, { Component } from 'react';
import './Resume.css'
import resume from './Nhi-Nguyen-Resume.pdf'

class Resume extends Component {
   render() {
      return (
         <div className="iframe">
            <iframe className="iframe" src={resume} width="1300" height="700" />
         </div>
      );
   }
}

export default Resume;