import {React, useState, useEffect, useRef} from "react";
import "../styles/Home.css";
// import { Link, UseLocation } from "react-router-dom";
import about from "../images/about.jpg";
import reactimg from "../images/react-icon.png";
import htmlimg from "../images/html.png";
import css from "../images/css.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import redux from "../images/redux.png";
import node from "../images/node.png";
import apollo from "../images/apollo.png";
import mongo from "../images/mongo.png";
import graph from "../images/graph.png";
import sql from "../images/sql.png";
import { Link } from "react-scroll"
import iphone from "../images/iphone.png";
import dayjs from "dayjs";
import emailjs from '@emailjs/browser';


function Home() {


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

    emailjs.sendForm('service_eikbn35', 'template_ilj0r0t', form.current, 'bZ0_tvSd-VrO-1JI2')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
  });
  }



  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is William Henriquez</h2>
        <div className="prompt">
          <p>A full-stack software developer.</p>
          {/* <a href='https://github.com/LiamZ34'><i class="fa-brands fa-github"></i></a>
                    <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='#'><i class="fa-solid fa-envelope"></i></a> */}
          <div className="home-links">
            {/* <a href="#about" className="button">
              {" "}
              About{" "}
            </a> */}

            <Link spy={true} smooth={true} to="about" className="button">
              {" "}
              About{" "}
            </Link>
            <Link to="/contact" className="button">
              {" "}
              Contact{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3> Skills </h3>
        <div className="cardholder">
          <div className="cardholder2">
            <h1> Front-End </h1>
            <ol className="list1">
              <li className="skillbox">
                <img src={reactimg} alt="react logo" />
                <h2> ReactJs </h2>
              </li>
              <li className="skillbox">
                <img src={htmlimg} alt="html logo" />
                <h2> HTML </h2>
              </li>
              <li className="skillbox">
                <img src={css} alt="css logo" />
                <h2> CSS </h2>
              </li>
              <li className="skillbox">
                <img src={bootstrap} alt="bootstrap logo" />
                <h2> BootStrap </h2>
              </li>
              <li className="skillbox">
                <img src={tailwind} alt="tailwind logo" />
                <h2> TailwindCSS </h2>
              </li>
              <li className="skillbox">
                <img src={redux} alt="redux logo" />
                <h2> Redux </h2>
              </li>
              <li className="bg"></li>
            </ol>
          </div>
          <div className="cardholder2">
            <h1> Back-End </h1>
            <ol className="list2">
              <li className="skillbox">
                <img src={node} alt="node logo" />
                <h2> NodeJs </h2>
              </li>
              <li className="skillbox">
                <img src={sql} alt="sql logo" />
                <h2> MySQL </h2>
              </li>
              <li className="skillbox">
                <img src={mongo} alt="mongo logo" />
                <h2> MongoDB </h2>
              </li>
              <li className="skillbox">
                <img src={apollo} alt="apollo logo" />
                <h2> ApolloServer </h2>
              </li>
              <li className="skillbox">
                <img src={graph} alt="graph logo" />
                <h2> GraphQL </h2>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="aboutme" id="about">
        <div className="cover">
          {" "}
          <img src={about} alt="computer with vscode open" />{" "}
        </div>
        <div className="aboutdesc">
          <h1> About Me </h1>
          <h2>Full-Stack Developer</h2>
          <span>
            {" "}
            My name is William Henriquez and I am a Full Stack Web Developer. I
            am also a Rutgers University coding bootcamp graduate. I have a
            passion for building and developing web applications that have a
            purpose and solve real problems. In my spare time I enjoy watching
            soccer and working on my own projects.
          </span>
          <button> Download CV </button>
        </div>
      </div>


      <div className="contact">
      <h1> Contact Me </h1>

      <div className="mainCard">

        <div className="iphoneSection" > 
        <div className="phone">
          <h1> Link With Me </h1>
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
    <h1>Send Me A Message</h1>
    <form ref={form} onSubmit={sendEmail}>
       

        <input type="text" name="user_name" placeholder="Name"></input>
        
        
        <input type="email" name="user_email" placeholder="Email"></input>
        
        
        <textarea name="message"  rows="6" placeholder="Message"></textarea>
            
        <button type="submit" value="Send" className="btn"> Submit </button>    
        {/* <input type="submit" value="Send" className="btn"></input> */}
    </form>

    </div>
        </div>

      </div>
    </div>



    </div>
  );
}

export default Home;
