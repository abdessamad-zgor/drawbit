import React from 'react'
import useScene from '../hooks/scene'
import ColorChooser from './ColorChooser'
import ZoomController from './ZoomController'
import StrokeSize from './StrokeSize'

function Toolbar() {
  return (
    <div className='bg-white rounded z-10 flex justify-between shadow border w-full border-t py-2  px-12 sticky bottom-0 right-0 left-0 items-center'>
      <ColorChooser />
      <StrokeSize />
      <ZoomController />
    </div>
  )
}

export default Toolbar
