import { React, useState, useEffect, useRef } from "react";
import "../styles/Projects.css";
import iphone from "../images/iphone.png";
import dayjs from "dayjs";
import emailjs from '@emailjs/browser';

function Projects() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
  });
  }


  return (
    <div className="contact">
      {/* <h1> Contact Me </h1> */}

      <div className="mainCard">

        <div className="iphoneSection" > 
        <div className="phone">
          <h1 className="sub-title"> Contact Me </h1>
          <div className="iscreen">
            <img src={iphone} />

            <div className="blackscreen">
              <span>{date.format("h:mm")}</span>

              <div className="screeninfo">
                <a href="https://github.com/LiamZ34" className="git"></a>
              </div>
            </div>
          </div>
        </div>


        </div>

        <div className="contactForm">

    <div className="form">
    <h1 className="sub-title">Send Me A Message</h1>
    <form ref={form} onSubmit={sendEmail}>
       

        <input type="text" name="user_name" placeholder="Name"></input>
        
        
        <input type="email" name="user_email" placeholder="Email"></input>
        
        
        <textarea name="message"  rows="6" placeholder="Message"></textarea>
       
        <input type="submit" className="btn" value="Send" ></input>
    </form>

    </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
