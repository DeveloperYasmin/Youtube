import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info||{}
    const {channelTitle,thumbnails,title}=snippet||{}
    const {viewCount}=statistics||{}
  return (
    <div className=' m-2 p-3 h-80 w-72 shadow-xl bg-gray-300 rounded-xl '>
       <img className='rounded-2xl hover:border-4 border-white' src={thumbnails?.medium?.url} alt="thumb"/>
       <ul>
          <li className='font-bold'>{title}</li>
          <li className='text-sm text-gray-500'>{channelTitle}</li>
          <li className='text-sm text-gray-500'>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard