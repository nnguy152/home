import React, { Component } from 'react';
import './Resume.css'
import resume from './Nhi-Nguyen-Resume.pdf'
import resume1 from './NN.png'

class Resume extends Component {
   render() {
      return (
         <div className='resume'>
            <h1 className='page-h1'>&lt; Resume /&gt;</h1>
            <div className="iframe" >
               <iframe src={resume} width="100%" height="500" />
            </div>
         </div>
      );
   }
}

export default Resume;