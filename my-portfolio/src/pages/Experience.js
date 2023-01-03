import React, {useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Loading from '../components/Loading'

function Experience() {
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
    return (
        
        <div className='experience'> 
        {isLoading===true? 
            <Loading/>:
            <VerticalTimeline lineColor='##3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2019-2014' iconStyle={{background: "#3e497a", color: "#fff"}} icon={<i class="fa-solid fa-car"></i>}> hello </VerticalTimelineElement>
            </VerticalTimeline>
        }
        </div>
        
    )
}

export default Experience;