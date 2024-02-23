import React from 'react'
import { useFrameDraw } from '../store/actions'

type FrameProptypes = {
  demX: number,
  demY: number,
  unit: number
}

const Frame: React.FC<FrameProptypes> = ({demX, demY, unit})=>{
  const {startStroke, drawStroke, endStroke, canvasRef} = useFrameDraw(unit)

  return (
    <div className='relative w-fit border rounded bg-white border-stone-300' onMouseUp={endStroke}>
      <div className='absolute flex flex-row w-full inset-0 z-10'>
        {
          Array(demX).fill(0).map(_=>
            <div className='flex flex-col' style={{width: `${unit}px`}}>
              {
                Array(demY).fill(0).map(
                  _=><div style={{height: `${unit}px`, width: `${unit}px`}} onMouseMove={drawStroke} onMouseDown={startStroke}></div>
                )
              }
            </div>
          )
        }
      </div>
      <canvas ref={canvasRef} className='relative z-0' width={demX*unit} height={demY*unit}></canvas>
    </div>
  )
}

export default Frame;
