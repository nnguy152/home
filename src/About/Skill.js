import React, { Component } from 'react';
import './About.css'

class Skill extends Component {
   render() {
      let skills = this.props.skills.map(skill => {
         return <p className='skills'>{skill}</p>
      })
      return (
         <div className='skill-section'>
            {skills}
         </div>
      );
   }
}

export default Skill;