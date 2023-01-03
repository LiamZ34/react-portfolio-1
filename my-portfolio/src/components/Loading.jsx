import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import "../styles/Loading.css";


const Loading = () => {
  return (
    <div className='loading'>
      <CircleLoader 
        color={'#000584'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </div>
  )
}

export default Loading
