import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen)return null
  return (
    <div className='mt-20 cols-span-2 font-serif shadow-lg fixed '>
      <ul className='p-2 m-2'>
        <li>Home</li><li>Shorts</li><li>Subscriptions</li>
      </ul>
        <ul className='p-2 m-2'>
        <h1 className='font-bold text-xl pb-2'>You</h1>
          <li>Your Channel</li><li>History</li><li>Your Videos</li><li>Watch Later</li>
        </ul>
        <ul className='p-2 m-2'>
        <h1 className='font-bold text-xl pb-2'>Explore</h1>
           <li>Trending</li><li>Shopping</li><li>Music</li><li>Films</li><li>Live</li><li>News</li><li>Sports</li><li>Learning</li><li>Podcasts</li>

        </ul>
    </div>
  )
}

export default SideBar