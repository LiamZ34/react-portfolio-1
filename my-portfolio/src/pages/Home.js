import React from 'react';
import '../styles/Home.css';
import { Link, UseLocation } from "react-router-dom";


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
                
                   <Link to="/resume" className='button'> Resume </Link>
                 
                  <Link to="/contact" className='button'> Contact Me </Link>
                </div>       
                </div>
                 </div>
            <div className='skills'> 
            <h1> Skills </h1>
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
                <span> JavaScript, TypeScript</span>
                </li>
            </ol> 
            </div>        
        </div>
    )
}

export default Home;