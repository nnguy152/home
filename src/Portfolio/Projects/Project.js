import React from 'react'

const Project = props => {
  return (
    <div className="p">
      <h3>&#123; {props.name} &#125;</h3>
      <div className="line" />
      <img src={props.image} alt="parallax" className="gif" />
      <div className="line line-bottom" />
      <p className="proj-description">
        {props.description}
        <br />
        <div className="line" />
        <br />
        <strong>Technologies:</strong> HTML, CSS, Javascript
      </p>
    </div>
  )
}

export default Project
