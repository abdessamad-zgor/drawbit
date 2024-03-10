import React from 'react'
import { useFrameDraw } from '../store/actions'
import { FrameData } from '../store/types'

type FrameProptypes = {
  demX: number;
  demY: number;
  unit: number;
  index: number;
  frame?: FrameData;
}

const Frame: React.FC<FrameProptypes> = ({ index, demX, demY, unit, frame }) => {
  const { startStroke, drawStroke, endStroke, canvasRef } = useFrameDraw(index, demX, demY, unit, frame ?? null)

  return (
    <div className='relative w-fit border rounded bg-white border-stone-300' onMouseUp={endStroke}>
      <div className='absolute flex flex-row w-full inset-0 z-10'>
        {
          Array(demX).fill(0).map(
            i =>
              <div className='flex flex-col' style={{ width: `${unit}px` }}>
                {
                  Array(demY).fill(0).map(
                    j =>
                      <div
                        style={{ height: `${unit}px`, width: `${unit}px` }}
                        onMouseMove={drawStroke}
                        onMouseDown={startStroke}
                      >
                      </div>
                  )
                }
              </div>
          )
        }
      </div>
      <canvas ref={canvasRef} className='relative z-0' width={demX * unit} height={demY * unit}></canvas>
    </div>
  )
}

export default Frame;
