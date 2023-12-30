import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [searchparams]=useSearchParams()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='flex flex-col'>
    <div className='flex'>
      <div className='ml-36 mt-16 '>
      <iframe className='rounded-xl' height={500} width={800}
    src={"https://www.youtube.com/embed/" + searchparams.get("v")}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
    </div>
    <div className='w-full mt-16'>
      <LiveChat/>
    </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage