import React from 'react'
import Frame from './Frame'
import PlusIcon from "../assets/plus-square.svg"

import { sceneStore as scene } from '../store/scene'

function Scene() {
  const { frames, addFrame } = scene(s => ({ frames: s.frames, addFrame: s.addFrame }))
  return (
    <div className='flex flex-col justify-center items-center bg-stone-200 min-h-screen'>
      {
        frames.map(
          (f, i) =>
            <div className='flex flex-col'>
              <Frame demX={50} demY={50} unit={10} frame={f[0].length == 0 ? undefined : f} index={i} />
              <div className='flex flex-row justify-end p-2'>
                <button className='bg-stone-200 text-center text-3xl font-bold'>
                  <img src={PlusIcon} onClick={() => addFrame(i)} className='w-[1em] h-[1em]' />
                </button>
              </div>
            </div>
        )
      }

    </div>
  )
}

export default Scene
