import React from 'react'
import { HAMBURGER_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {toggleMenu} from "../utils/appSlice"

const Head = () => {
  const dispatch=useDispatch()
  const togglemenuhandler=()=>{
      dispatch(toggleMenu())
  }
  return (
    <div className='fixed w-screen grid grid-flow-col p-3 items-center bg-white'>
      <div className='flex items-center' >
        <img className='h-6 pr-5 cursor-pointer' onClick={togglemenuhandler} alt="hamburger" src={HAMBURGER_ICON}/>
        <img className='h-20' alt="logo" src={YOUTUBE_LOGO}/>
      </div>
        <div className='flex items-center pl-52'>
          <input className='h-8 p-6 m-2 w-96 rounded-full border border-black ' placeholder='Search' type="text"/>
            <img className='absolute h-6 pl-[340px]'  alt="search" src={SEARCH_ICON}/>
        </div>
    <div className='flex items-center  pl-64'>
      <img className='h-9' alt="user" src={USER_ICON}/>
    </div>
  </div>
  )
}

export default Head