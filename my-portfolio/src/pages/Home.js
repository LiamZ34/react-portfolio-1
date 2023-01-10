import React from "react";
import "../styles/Home.css";
import { Link, UseLocation } from "react-router-dom";
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

function Home() {
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
            <Link to="/resume" className="button">
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
        <h1> Skills </h1>
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
      <div className="aboutme">
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
    </div>
  );
}

export default Home;
