import React from 'react'
import useFrameDraw from '../hooks/frame'
import { FrameData } from '../state/types'

type FrameProptypes = {
  demX: number;
  demY: number;
  unit: number;
  index: number;
  frame?: FrameData;
}

const Frame: React.FC<FrameProptypes> = ({ index, demX, demY, unit, frame }) => {
  const { startStroke, drawStroke, endStroke, canvasRef, frameId } = useFrameDraw(index, demX, demY, unit, frame ?? null)

  return (
    <div className='relative z-0 w-fit border rounded bg-white border-stone-300 '
      onMouseUp={endStroke}
    >
      <div className='absolute flex flex-row w-full inset-0 z-10'
        onMouseMove={drawStroke}
      >
        {
          Array(demX).fill(0).map(
            _ =>
              <div className='flex flex-col' style={{ width: `${unit}px` }}>
                {
                  Array(demY).fill(0).map(
                    _ =>
                      <div
                        style={{ height: `${unit}px`, width: `${unit}px` }}
                        className='border-b border-r border-stone-200'
                        onMouseDown={startStroke}
                      >
                      </div>
                  )
                }
              </div>
          )
        }
      </div>
      <canvas ref={canvasRef} id={frameId} className='relative z-0' width={demX * unit} height={demY * unit}></canvas>
    </div>
  )
}

export default Frame;
