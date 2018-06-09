import React from 'react'
import './Project.css'

const Project = props => {
  return (
    <div className="p">
      <div className="content">
          <div className="content-overlay"></div>
          <img src={props.project[1]} alt="parallax" className="gif content-image" />
          <div className="content-details">
            <div className='white'>
              <p className="content-text">{props.project[2]}</p>
              <p className="content-text">{props.project[3]}</p>
              <a className="content-text" href={props.project[4]} target="_blank"><i className="fab fa-github proj-icon"></i></a>
              <a className="content-text" href={props.project[5]} target="_blank"><i className="fas fa-play-circle proj-icon"></i></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Project
