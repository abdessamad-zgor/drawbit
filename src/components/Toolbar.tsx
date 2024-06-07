import React from 'react'
import useScene from '../hooks/scene'
import ColorChooser from './ColorChooser'
import Eraser from './Eraser'
import ZoomController from './ZoomController'
import StrokeSize from './StrokeSize'

function Toolbar() {
  return (
    <div className='rounded z-10 flex flex-col py-2 px-4 absolute b-0 bottom-0 left-0 top-0 gap-2'>
      <Eraser />
      <StrokeSize />
    </div>
  )
}

export default Toolbar
