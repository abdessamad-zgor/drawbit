import React, { useEffect } from 'react'
import EditorBar from '../components/EditorBar'
import Scene from '../components/Scene'
import { sceneStore } from '../state/scene'

function Editor() {
  const { frames } = sceneStore(s => ({ frames: s.frames }))
  useEffect(() => {
    console.log(frames)
  }, [])
  return (
    <div className=''>
      <EditorBar />
      <main className='w-full min-h-screen bg-stone-200 flex flex-col justify-center items-center'>
        <Scene />
      </main>
    </div>
  )
}

export default Editor
