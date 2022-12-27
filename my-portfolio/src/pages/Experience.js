import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    return (
        <div className='experience'> 
            <VerticalTimeline lineColor='##3e497a'>
                <VerticalTimelineElement> hello </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;