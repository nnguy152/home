import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
   render() {
      return (
         <div className="about contact" id='contact-me'>
            <h1>&lt;Contact Me /&gt;</h1>
            <h1 className="galdes">Say Hi!</h1>
            {/* <h3 className="email">&#123; Email &#125;</h3>  */}
            <form action="mailto:nnguy152@gmail.com" method="post" encType="text/plain">
               <label>Name: </label> 
               <input className='input-name' type="text" name="Name" /><br/>
               <label>Comment: </label> <textarea className='input-comment' type="text" name="Comment" size="50" /><br/><br/>
               <input className='submit' type="submit" value="Send"/>
            </form>
         </div>
      );
   }
}

export default Contact;