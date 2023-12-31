import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { SEARCH_ICON, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice'


const VideoContainer = () => {
  const [filtersearch,setfiltersearch]=useState([])
  const[selected,setselected]=useState("")
  const [searchquery,setsearchquery]=useState("")
  const[suggestions,setsuggestions]=useState("")
  const [showsuggestions,setshowsuggestions]=useState(false)
  const divref=useRef()
  const sref=useRef()
  window.addEventListener('click',(e)=>{
    if(e.target !== divref.current && e.target !== sref.current )
    {
      setshowsuggestions(false)
    }
  })
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
  const [videos,setvideos]=useState([])
  const getvideos=async()=>{
    const data=await fetch(YOUTUBE_API)
    const json=await data.json()
    setvideos(json.items)
    setfiltersearch(json.items)
  }
  useEffect(()=>{
    getvideos()
  },[])
  return (  
    <div>
    <input className='ml-[430px] mt-1 fixed items-center h-8 p-6 m-8 w-96 rounded-full border border-black '   placeholder='Search' type="text" value={selected?selected:searchquery} onChange={(e)=>setsearchquery(e.target.value)}
   ref={divref} onClick={()=>setshowsuggestions(!showsuggestions)} />
      <img className='fixed h-6 mt-4 pl-[750px] cursor-pointer'  alt="search" src={SEARCH_ICON} onClick={()=> {const filtersearch=videos?.filter((sea)=>sea.snippet.title.toLowerCase().includes(searchquery.toLowerCase()))
        setfiltersearch(filtersearch) }}/>
      {searchquery && showsuggestions && (<div ref={sref} className=' fixed bg-white py-2 px-2 m-16 mt-16 ml-[440px] w-80 rounded-lg border border-gray-100'> 
     <ul> 
      {suggestions.map((s)=>(<div key={s}  className='flex hover:bg-gray-100 py-2'>
        <li onClick={()=>{setselected(s)&& setshowsuggestions(false)}}>{s}</li></div>))}
        </ul></div>)
      }
    <div className=' flex flex-wrap ml-32 pt-32'>
     {filtersearch && filtersearch.map(video=>( <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard key={video.id}  info={video}/></Link>))}
    </div> 
    </div>
  )
    }

export default VideoContainer