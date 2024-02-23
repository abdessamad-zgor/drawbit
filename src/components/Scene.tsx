import React from 'react'
import Frame from './Frame'

function Scene() {
  return (
    <div className='flex flex-col justify-center items-center bg-stone-200 min-h-screen'>
      <Frame demX={50} demY={50} unit={10}/> 
    </div>
  )
}

export default Scene
