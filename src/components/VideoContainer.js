import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { SEARCH_ICON, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice'


const VideoContainer = () => {
  const [filtersearch,setfiltersearch]=useState([])

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

    <div className='flex flex-wrap z-30'> 
      <div className='mt-5 ml-52 items-center pl-52'>
    <input className='absolute h-8 p-6 m-2 w-96 rounded-full border border-black '   placeholder='Search' type="text" value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} 
    onFocus={()=>setshowsuggestions(true)}  onBlur={()=>setshowsuggestions(false)}  />
      <button onClick={()=> {const filtersearch=videos?.filter((sea)=>sea.snippet.title.toLowerCase().includes(searchquery.toLowerCase()))
        setfiltersearch(filtersearch) }}>

      <img className=' absolute h-6 mt-5 pl-[340px]'  alt="search" src={SEARCH_ICON}/>
      </button>

      </div>
  
{searchquery && showsuggestions && <div className='fixed bg-white py-2 px-2 m-16 mt-20 ml-[440px] w-80 rounded-lg border border-gray-100'>
    <ul>
      {suggestions.map((s)=>(
      <div key={s} className='flex hover:bg-gray-100 py-2' >
     <img className=' h-6 px-5'  alt="search" src={SEARCH_ICON}/><li>{s}</li></div>))}
      </ul></div>
      }
     


    <div className='mt-10 flex flex-wrap ml-32 pt-32'>
     {filtersearch && filtersearch.map(video=>( <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard key={video.id}  info={video}/></Link>))}
    </div> 
    </div>
  )
}

export default VideoContainer