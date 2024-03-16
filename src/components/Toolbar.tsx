import React from 'react'
import useScene from '../hooks/scene'

function Toolbar() {
  const { color } = useScene()
  return (
    <div className='rounded z-10 shadow border w-full border-t py-4 px-12 sticky bottom-0 right-0 left-0 bg-white'>
      <div className='w-[2em] h-[2em] rounded' style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default Toolbar
