import React from 'react';
import '../styles/Home.css';
import { Link, UseLocation } from "react-router-dom";
import about from "../images/about.jpg";

function Home() {
    return (
        
        <div className='home'>
            <div className='about'>
                <h2> Hi, my name is William Henriquez</h2>
                <div className='prompt'> 
                <p> 
                    A full-stack software developer.
                    </p>                
                   {/* <a href='https://github.com/LiamZ34'><i class="fa-brands fa-github"></i></a>
                    <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='#'><i class="fa-solid fa-envelope"></i></a> */}
             <div className='home-links'>
                
                   <Link to="/resume" className='button'> About </Link>
                 
                  <Link to="/contact" className='button'> Contact </Link>
                </div>       
                </div>
                 </div>
            <div className='skills'> 
            <h1> About Me </h1>
            <ol className='list'>
                <li className='item'>
                <h2> Front-End </h2>
                <span> ReactJS, HTML, CSS, BootStrap, TailwindCSS, Redux, NPM</span>
                </li>
                <li className='item'>
                <h2> Back-End </h2>
                <span> NodeJS, GraphQL, ApolloServer, MySQL, MongoDB, AWS S3</span>
                </li>
                <li className='item'>
                <h2> Languages </h2>
                <span> My name is William Henriquez and I am a Full Stack Web Developer. I am also a Rutgers University coding bootcamp graduate. 
                    I have a passion for building and developing web applications that have a purpose and solve real problems. In my spare time 
                    I enjoy watching soccer and working on my own projects.
                </span>
                </li>
            </ol> 
            </div> 
            <div className='aboutme'>
                <div className='cover'> <img src={about} alt='computer with vscode open'/> </div>
                <div className='aboutdesc'> 
                <h1> About Me </h1>
                <span> My name is William Henriquez and I am a Full Stack Web Developer. I am also a Rutgers University coding bootcamp graduate. 
                    I have a passion for building and developing web applications that have a purpose and solve real problems. In my spare time 
                    I enjoy watching soccer and working on my own projects.
                </span>
                <button> Download CV </button>
                 </div>
            </div>       
        </div>
    )
}

export default Home;