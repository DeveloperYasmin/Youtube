import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
        <img className='h-9' alt="user" src={USER_ICON}/>
        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage