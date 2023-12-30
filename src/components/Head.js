import React from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO} from '../utils/constants'
import {toggleMenu} from "../utils/appSlice"
import { useDispatch } from 'react-redux'

const Head = () => {
  const dispatch=useDispatch()

  const togglemenuhandler=()=>{
      dispatch(toggleMenu())
  }
  return (
    <div className=' -mt-10 grid grid-flow-col p-5'>
      
      <div className='fixed bg-white flex col-span-1 w-screen  items-center' >
        <img className='h-6 pr-5 cursor-pointer' onClick={togglemenuhandler} alt="hamburger" src={HAMBURGER_ICON}/>

        <img className='h-20' alt="logo" src={YOUTUBE_LOGO}/>
    
       
    <div className='flex items-center ml-[850px]'>
      <img className='h-9' alt="user" src={USER_ICON}/>
    </div>  </div>
    
  
  </div>
  )
}

export default Head