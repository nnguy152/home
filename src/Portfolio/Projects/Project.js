import React from 'react'
import './Project.css'

const Project = props => {
  return (
    <div className="p">
      <h3 className='proj-name'>&#123; {props.project[0]} &#125;</h3>
      <div className="line" />

      <div className="content">
          <div className="content-overlay"></div>
          <img src={props.project[1]} alt="parallax" className="gif content-image" />
          <div className="content-details fadeIn">
            <p className="content-text">{props.project[2]}</p>
            <p className="content-text"><strong>Built with: {props.project[3]}</strong></p>
            <a className="content-text" href={props.project[4]} target="_blank"><i className="fab fa-github"></i></a>
            <a className="content-text" href={props.project[5]} target="_blank"><i className="fas fa-play-circle"></i></a>
          </div>
      </div>
      
      <div className="line line-bottom" />
    </div>
  )
}

export default Project
