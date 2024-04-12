import React from 'react'
import { FrameData } from '../state/types'
import useFrameDraw from '../hooks/frame'

type FrameProptypes = {
  index: number;
  frame: FrameData;
  id: string
}

const Frame: React.FC<FrameProptypes> = ({ index, frame, id }) => {
  const {
    startStroke,
    drawStroke,
    endStroke,
    canvasRef,
    unit,
    demX,
    demY
  } = useFrameDraw(index, frame)

  const [canvasWidth, canvasHeight] = [demX * unit, demY * unit]

  return (
    <div className='relative z-0 w-fit border rounded bg-white border-stone-300 '
      onMouseUp={endStroke}
      onMouseMove={drawStroke}
      onMouseDown={startStroke}
    >
      <canvas ref={canvasRef} id={id} className='relative z-0' width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default Frame;
