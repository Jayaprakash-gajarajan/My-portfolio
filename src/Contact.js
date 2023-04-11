import React, { useState } from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { send } from '@emailjs/browser/es';
import {FaLinkedin,FaGithub} from 'react-icons/fa'
// import contactImg from "./img/about-9.jpg"
function Contact() {
    const form = useRef();
 const [values,setValues]=useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u39b4f9', 'template_lul81um', form.current, '2dSc_4Dg9XnaDGtME')
      .then((result) => {
          console.log(result.text);
          console.log("message submitted");
          setValues(result.text)
      }, (error) => {
          console.log(error.text);
          console.log("error accured");
      });
  };
    return (
        <div className="contact component__space" id="Contact">
            <div className='iconss'>
            <span><a href='https://github.com/Jayaprakash-gajarajan' className='icons' target='_blank'><FaGithub/></a><a href='https://www.linkedin.com/in/jaya-prakash-2959b8234' className='icons' target='_blank'><FaLinkedin/></a></span>
          
          </div>
            <div className="row">
                <div className="col__2" style={{padding:"0px"}}>
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong style={{color:"blue"}}>+91 6380535912</strong> or email <strong style={{color:"blue"}}>jayaprakash58563@gmail.com</strong></p>
                        </div>
                        <form className="input__box" ref={form} onSubmit={sendEmail}>
                           <input type="text" className="contact name" name="user_name" placeholder="Your name *" required />
                           <input type="text" className="contact email" name="user_email" placeholder="Your Email *" required/>
                           {/* <input type="text" className="contact subject" placeholder="Write a Subject" /> */}
                           <textarea name="message" id="message" placeholder="Write Your message" required></textarea>
                           <button className="btn contact pointer" type="submit" value="Sent">Submit</button>
                           {values?<h3 style={{color:"green"}}>Email sent sucessfully</h3>:<></>}
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact