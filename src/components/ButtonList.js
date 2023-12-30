import React from 'react'
import Carousel from 'react-grid-carousel'
import Button from './Button'

const list=["All","Gaming","Live","Soccer","Cricket","Valentines","Cooking","Music","Cinema","Filmi","Lectures","cats","dogs","Pop","Folk","Television","Dance","Comedy","Hits","Mixes","Tamil","Malayalam","Kannadam","Telugu","Hindi","Bollywood","Hollywood","Tollywood","Birds","Hoomans"]

const ButtonList = () => {
  return (
    <div className='bg-white mt-12 ml-32 fixed w-[89vw] p-3 m-4'>
      <Carousel cols={15} rows={1} gap={2} loop>
      {list.map((list)=><Carousel.Item key={list}>
     <Button key={list} name={list}/>
      </Carousel.Item>)}</Carousel>
    </div>
  )
}

export default ButtonList