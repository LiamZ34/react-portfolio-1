import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "../styles/Loading.css";


const Loading = () => {
  return (
    <div className='loading'>
      <ClimbingBoxLoader 
        color={'#49422E'}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </div>
  )
}

export default Loading
