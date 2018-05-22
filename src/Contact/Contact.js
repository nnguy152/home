import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
   render() {
      return (
         <div className="contact" id='contact-me'>
            <h1 className='page-h1'>&lt; Contact Me /&gt;</h1>
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