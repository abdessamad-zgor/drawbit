import React from 'react'
import { FrameData } from '../state/types'
import useFrameDraw from '../hooks/frame'

type FrameProptypes = {
  index: number;
  frame?: FrameData;
}

const Frame: React.FC<FrameProptypes> = ({ index, frame }) => {
  const {
    startStroke,
    drawStroke,
    endStroke,
    canvasRef,
    frameId,
    unit,
    demX,
    demY
  } = useFrameDraw(index, frame ?? null)


  const [canvasWidth, canvasHeight] = [demX * unit, demY * unit]

  return (
    <div className='relative z-0 w-fit border rounded bg-white border-stone-300 '
      onMouseUp={endStroke}
    >
      <div className='absolute flex flex-row w-full inset-0 z-10'
        onMouseMove={drawStroke}
        onMouseDown={startStroke}
      >
        {
          Array(demX).fill(0).map(
            (_, i) =>
              <div key={i} className='flex flex-col' style={{ width: `${unit}px` }}>
                {
                  Array(demY).fill(0).map(
                    (_, j) =>
                      <div
                        key={j}
                        style={{ height: `${unit}px`, width: `${unit}px` }}
                        className='border-b border-r border-stone-200'
                      >
                      </div>
                  )
                }
              </div>
          )
        }
      </div>
      <canvas ref={canvasRef} id={frameId} className='relative z-0' width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default Frame;
