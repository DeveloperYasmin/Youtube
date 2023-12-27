import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='grid grid-flow-col'> 
    <ButtonList/>    
        <VideoContainer/>
    </div>
  )
}

export default MainContainer