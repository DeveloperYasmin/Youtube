import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos,setvideos]=useState([])
  const getvideos=async()=>{
    const data=await fetch(YOUTUBE_API)
    const json=await data.json()
    setvideos(json.items)
  }
  useEffect(()=>{
    getvideos()
  },[])
  return (
    <div className='mt-10 flex flex-wrap ml-32 pt-32'>
     {videos && videos.map(video=>( <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard key={video.id}  info={video}/></Link>))}
    </div>
  )
}

export default VideoContainer