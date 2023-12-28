import React, { useEffect, useState } from 'react'
import { HAMBURGER_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from "../utils/appSlice"
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchquery,setsearchquery]=useState("")
  const[suggestions,setsuggestions]=useState([])
  const [showsuggestions,setshowsuggestions]=useState(false)

  const searchcache=useSelector((store)=>store.search)
  const dispatch=useDispatch()

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchcache[searchquery]){
      setsuggestions(searchcache[searchquery])
    } else{getSearchSuggestions()
    }},200)
    return ()=>{
      clearTimeout(timer)
    }
  },[searchquery])

  const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchquery)
    const json=await data.json();
    setsuggestions(json[1])
    dispatch(cacheResults({[searchquery]:json[1],}))
  }
  const togglemenuhandler=()=>{
      dispatch(toggleMenu())
  }
  return (
    
    <div className=' fixed w-screen grid grid-flow-col z-20 p-3 items-center bg-white'>
      
      <div className='flex items-center' >
        <img className='h-6 pr-5 cursor-pointer' onClick={togglemenuhandler} alt="hamburger" src={HAMBURGER_ICON}/>

        <img className='h-20 ' alt="logo" src={YOUTUBE_LOGO}/>
      </div>
      <div>        <div className='flex items-center pl-52'>
          <input className='h-8 p-6 m-2 w-96 rounded-full border border-black '   placeholder='Search' type="text" value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} 
          onFocus={()=>setshowsuggestions(true)}  onBlur={()=>setshowsuggestions(false)}  />
         
            <img className=' absolute h-6 pl-[340px]'  alt="search" src={SEARCH_ICON}/>
            </div>

            
        
     {searchquery && showsuggestions && <div className='fixed bg-white py-2 px-2 ml-60 w-80 rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((s)=>(
            <div key={s} className='flex hover:bg-gray-100 py-2' >
           <img className=' h-6 px-5'  alt="search" src={SEARCH_ICON}/><li>{s}</li></div>))}
            </ul>
            </div>}
            </div>

       
    <div className='flex items-center  pl-64'>
      <img className='h-9' alt="user" src={USER_ICON}/>
    </div>
  </div>
  )
}

export default Head