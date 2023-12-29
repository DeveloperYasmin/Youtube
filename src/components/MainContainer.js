import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='z-20 fixed '> 
    <ButtonList/>    
        <VideoContainer/>
    </div>
  )
}

export default MainContainer