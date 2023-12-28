import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
  const [searchparams]=useSearchParams()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='flex flex-col'>
    <div className='px-36 mt-28'><iframe className='rounded-xl' height={500} width={900}
    src={"https://www.youtube.com/embed/" + searchparams.get("v")}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe></div><CommentsContainer/></div>
  )
}

export default WatchPage