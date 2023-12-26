import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet,statistics}=info||{}
    const {channelTitle,thumbnails,title}=snippet||{}
    const {viewCount}=statistics||{}
  return (
    <div className='m-2 p-3 h-80 w-72 shadow-lg'>
       <img className='rounded-2xl' src={thumbnails?.medium?.url}/>
       <ul>
          <li className='font-bold'>{title}</li>
          <li className='text-sm text-gray-500'>{channelTitle}</li>
          <li className='text-sm text-gray-500'>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard