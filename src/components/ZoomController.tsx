import React from 'react'
import useScene from '../hooks/scene';

function ZoomController() {
  const { zoom, updateZoom } = useScene()
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs text-stone-400 pb-1">Zoom</span>
      <div className='flex flex-row justify-center text-xl items-center'>
        <button className='border rounded-l bg-stone-300 p-2' onClick={updateZoom(1)}>+</button>
        <p className='text-center font-light border-t border-b p-2'>{zoom + "%"}</p>
        <button className='border rounded-r  bg-stone-300 p-2' onClick={updateZoom(-1)}>-</button>
      </div>
    </div>
  )
}

export default ZoomController;
