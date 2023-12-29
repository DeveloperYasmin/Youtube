import React from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO} from '../utils/constants'
import {toggleMenu} from "../utils/appSlice"
import { useDispatch } from 'react-redux'
import VideoContainer from './VideoContainer'

const Head = () => {
  const dispatch=useDispatch()

  const togglemenuhandler=()=>{
      dispatch(toggleMenu())
  }
  return (
    
    <div className='z-10 fixed w-screen grid grid-flow-col z-20 p-3 items-center bg-white'>
      
      <div className='flex items-center' >
        <img className='h-6 pr-5 cursor-pointer' onClick={togglemenuhandler} alt="hamburger" src={HAMBURGER_ICON}/>

        <img className='h-20 ' alt="logo" src={YOUTUBE_LOGO}/>
      </div>
       
    <div className='flex items-center  ml-[850px]'>
      <img className='h-9' alt="user" src={USER_ICON}/>
    </div>
    
  </div>
  )
}

export default Head