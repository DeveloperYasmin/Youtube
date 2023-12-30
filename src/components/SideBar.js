import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ACC, FILMS, HISTORY, HOME, LIVE, MUSIC, PROMOTION, SHOPPING, SHORTS, SPORTS, SUBSCRIBE, TRENDING, USER_ICON, WATCH, YOU } from '../utils/constants'


const SideBar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen){ 
    return (
      <div className='mt-36 font-bold font-serif  cols-span-3 fixed'>
 <div className='hover:bg-gray-400 hover:mr-4 rounded-lg'>     <Link to="/"> <img className='w-10 ml-10' src={HOME} alt="home"/><h1 className='flex  ml-10 items-center'>Home</h1></Link> </div>
       <img className='w-10 ml-10 mt-10' src={SHORTS} alt="shorts"/><h1 className='flex ml-10 items-center'>Shorts</h1>
       <img className='w-10 ml-10 mt-10' src={SUBSCRIBE} alt="sub"/><h1 className='flex ml-4 items-center'>Subscriptions</h1>
       <img className='w-10 ml-10 mt-10' src={YOU} alt="you"/><h1 className='flex items-center ml-11'>You</h1>
      </div>
    )}
return(
  <div  className=' col-span-3'>
      <div className='text-black mt-28  cols-span-3 font-serif text-md fixed grid grid-flow-col hover:bg-gray-400 hover:px-3 rounded-lg w-28'>
      <Link to="/"> <img className='w-6  fixed grid grid-flow-col' src={HOME} alt="home"/><h1 className='flex items-center ml-8'>Home</h1></Link>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={SHORTS} alt="shorts"/><h1 className='flex items-center ml-2'>Shorts</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={SUBSCRIBE} alt="sub"/><h1 className='flex items-center ml-2'>Subscriptions</h1>
       <div className='text-black mt-10 cols-span-3 font-serif fixed grid grid-flow-col'>
        <h1 className='flex font-bold text-xl '>You</h1>
        <div className='text-black mt-10 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={ACC} alt="acc"/><h1 className='flex items-center ml-2'>Your Account</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={HISTORY} alt="sub"/><h1 className='flex items-center ml-2'>History</h1>
       <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={YOU} alt="you"/><h1 className='flex items-center ml-2'>Your Videos</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={WATCH} alt="watch"/><h1 className='flex items-center ml-2'>Watch Later</h1>
       <div className='text-black mt-10 cols-span-3 font-serif fixed grid grid-flow-col'>
        <h1 className='flex font-bold text-xl '>Explore</h1>
        <div className='text-black mt-10 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={TRENDING} alt="tre"/><h1 className='flex items-center ml-2'>Trending</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={SHOPPING} alt="shop"/><h1 className='flex items-center ml-2'>Shopping</h1>
       <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={MUSIC} alt="you"/><h1 className='flex items-center ml-2'>Music</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={FILMS} alt="Films"/><h1 className='flex items-center ml-2'>Films</h1>
       <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={PROMOTION} alt="pro"/><h1 className='flex items-center ml-2'>Promotions</h1>
        <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
       <img className='w-6 flex' src={SPORTS} alt="sport"/><h1 className='flex items-center ml-2'>Sports</h1>
       <div className='text-black mt-7 cols-span-3 font-serif text-md fixed grid grid-flow-col'>
        <img className='w-6 flex' src={LIVE} alt="you"/><h1 className='flex items-center ml-2'>Live</h1>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>)}
  


export default SideBar