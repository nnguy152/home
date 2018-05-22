import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'

const MenuItem = (props) => {
   return (
      <div className={props.classNameText}>
         <Link to='/'><li><i className="fas fa-home nav-icons"></i><b>Home</b></li></Link>
         <Link to='/about'><li><i className="fas fa-user-circle nav-icons"></i><b>About</b></li></Link>
         <Link to='/projects'><li><i className="fas fa-code-branch nav-icons"></i><b>Projects</b></li></Link>
         <Link to='/resume'><li><i className="fas fa-file-alt nav-icons"></i><b>Resume</b></li></Link>
         <Link to='/contact'><li><i className="fas fa-envelope nav-icons"></i><b>Contact</b></li></Link>

         <a href="https://github.com/nnguy152"><li><i className="fab fa-github nav-icons"></i><b>Github</b></li></a>
         <a href="https://www.linkedin.com/in/nnguy152/"><li><i className="fab fa-linkedin nav-icons"></i><b>Linkedin</b></li></a>
      </div>
   );

}

export default MenuItem;