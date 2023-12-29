import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='z-30 .h-screen w-screen '> 
    <ButtonList/>    
        <VideoContainer/>
    </div>
  )
}

export default MainContainer