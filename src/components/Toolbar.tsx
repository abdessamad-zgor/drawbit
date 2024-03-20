import React from 'react'
import useScene from '../hooks/scene'
import ColorChooser from './ColorChooser'

function Toolbar() {
  return (
    <div className='rounded z-10 shadow border w-full border-t py-2 bg-teal-50 px-12 sticky bottom-0 right-0 left-0'>
      <ColorChooser />
    </div>
  )
}

export default Toolbar
