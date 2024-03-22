import React from 'react'
import useZoom from '../hooks/zoom'

function ZoomController() {
  const { zoom, updateZoom } = useZoom()
  return (
    <>
      {zoom + "%"}
      < input type='range' className='' step={5} value={zoom} min={25} max={400} onChange={updateZoom} />
    </>
  )
}

export default ZoomController;
