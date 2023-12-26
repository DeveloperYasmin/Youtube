import React from 'react'
import Carousel from 'react-grid-carousel'
import Button from './Button'

const list=["All","Gaming","Live","Soccer","Cricket","Valentines","Cooking","Music","Cinema","Filmi","Lectures","cats","dogs","Pop","Folk","Television","Dance","Comedy","Hits","Mixes","Tamil","Malayalam","Kannadam","Telugu","Hindi","Bollywood","Hollywood","Tollywood","Birds","Hoomans"]

const ButtonList = () => {
  return (
    <div className=' bg-white -mt-12 fixed w-[88vw] p-3 m-2'>
      <Carousel cols={15} rows={1} gap={2} loop>
      {list.map((list)=><Carousel.Item>
     <Button key={list[0]} name={list}/>
      </Carousel.Item>)}</Carousel>
    </div>
  )
}

export default ButtonList