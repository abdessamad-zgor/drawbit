import React from 'react'
import Frame from './Frame'
import useScene from '../hooks/scene'
import PlusIcon from "../assets/plus-square.svg"
import TrashIcon from "../assets/trash.svg"


function Scene() {
  const { frames, addFrame, deleteFrame } = useScene()
  return (
    <div className='flex flex-col justify-center items-center '>
      {
        frames.map(
          (f, i) =>
            <div className='flex flex-col'>
              <Frame demX={30} demY={15} unit={20} frame={f[0].length == 0 ? undefined : f} index={i} />
              {/* FrameActions Component */}
              <div className='flex flex-row justify-end p-px gap-3'>
                <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => deleteFrame(i)} >
                  <img src={TrashIcon} className='w-[1em] h-[1em]' />
                </button>
                <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => addFrame(i)} >
                  <img src={PlusIcon} className='w-[1em] h-[1em]' />
                </button>
              </div>
              {/* FrameActions Component */}
            </div>
        )
      }

    </div>
  )
}

export default Scene
