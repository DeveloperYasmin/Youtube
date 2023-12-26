import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className=' bg-stone-700 text-white rounded-lg p-2 m-2'>{name}</button>
    </div>
  )
}

export default Button