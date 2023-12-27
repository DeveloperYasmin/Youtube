import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchparams]=useSearchParams()
  console.log(searchparams.get("v"))
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='px-36 mt-28'><iframe className='rounded-xl' height={490} width={900}
    src={"https://www.youtube.com/embed/" + searchparams.get("v")}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe></div>
  )
}

export default WatchPage