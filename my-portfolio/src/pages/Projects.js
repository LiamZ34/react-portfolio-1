import { React, useState, useEffect  } from 'react';
import "../styles/Projects.css";
import iphone from "../images/iphone.png"
import dayjs from "dayjs";

function Projects() {

    const [ date ,setDate ] = useState(dayjs());

    useEffect(() => {
       const interval = setInterval(() => {
            setDate(dayjs());
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, [])


    return (
        <div className='project'>
            <h1> hello </h1>
        <div className='phone'>
            <h1> Link With Me Here </h1>
        <div className='iscreen'>    
            <img src={iphone} /> 

            <div className='blackscreen'>
                <span>
                    {date.format("h:mm")}
                </span>
                
                <div className='screeninfo'>
            <a href='https://github.com/LiamZ34' className='git'></a>

                </div>

            </div>


            </div>


        </div>
        
        </div>
        
    )
}

export default Projects;