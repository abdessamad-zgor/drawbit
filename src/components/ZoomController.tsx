import React from 'react'
import useScene from '../hooks/scene';
import { ZoomIn, ZoomOut } from 'lucide-react';

function ZoomController() {
  const { zoom, updateZoom } = useScene()
  return (
    <div className="flex flex-col items-start bg-white absolute border border-stone-300 rounded shadow right-5 bottom-5">
      <div className='flex flex-row justify-center text-xl items-center'>

        <button className='border-r border-stone-300 rounded-l p-2' onMouseDown={updateZoom(1)}><ZoomIn /></button>
        <p className='text-center font-light px-2'>{zoom + "%"}</p>
        <button className='border-l border-stone-300 rounded-r p-2' onMouseDown={updateZoom(-1)}><ZoomOut /></button>
      </div>
    </div>
  )
}

export default ZoomController;
