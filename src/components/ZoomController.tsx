import React from 'react'
import useScene from '../hooks/scene';

function ZoomController() {
  const { zoom, updateZoom } = useScene()
  return (
    <div className='flex flex-row justify-center items-center gap-2'>
      <p>{zoom + "%"}</p>
      < input type='range' className='' step={5} value={Math.abs(zoom)} min={25} max={400} onChange={updateZoom} />
    </div>
  )
}

export default ZoomController;
