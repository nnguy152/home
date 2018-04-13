import React from 'react'
import './Project.css'

const Project = props => {
  return (
    <div className="p">
      <a href={props.project[1]} target="_blank"><h3>&#123; {props.project[0]} &#125;</h3></a>
      <div className="line" />

      <div className="content">
          <div className="content-overlay"></div>
          <img src={props.project[2]} alt="parallax" className="gif content-image" />
          <div className="content-details">
            <p className="content-text">{props.project[3]}</p>
            <p className="content-text"><strong>Built with: {props.project[4]}</strong></p>
          </div>
      </div>
      
      <div className="line line-bottom" />
    </div>
  )
}

export default Project
