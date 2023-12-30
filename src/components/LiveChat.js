import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { ACC, SEND} from '../utils/constants'


const LiveChat = () => {
    const dispatch=useDispatch()
    const [LiveMessage,setLiveMessage]=useState("")
    const chatMessages=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
        dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀"
        }))
    },1500)
    return()=>{
        clearInterval(i)
    }
},[])
  return (
       
    <form className='ml-2 p-2 border border-black rounded-xl' onSubmit={(e)=>{
        e.preventDefault();
        setLiveMessage("")
        dispatch(addMessage({
            name:"Yasmin",
            message:LiveMessage
        }))
    }}>
        <div className=' h-[500px] overflow-y-scroll flex flex-col-reverse '>
        {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
        </div>
        
        <div className='w-full p-2 mt-2 flex items-center border border-t-black border-white'>
            <img  className='h-9 pr-2 ' src={ACC}/>
            <input className=' w-72 rounded-xl p-2 bg-zinc-200' value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)} placeholder="Chat...." type="text"/>
            <img className=' pl-2 h-6 items-center cursor-pointer' src={SEND}/>
            
    </div>
    </form>



  )
}

export default LiveChat