import React, { useEffect } from 'react'
import EditorBar from '../components/EditorBar'
import Scene from '../components/Scene'
import Toolbar from '../components/Toolbar'
import { sceneStore } from '../state/scene'

function Editor() {
  const { frames } = sceneStore(s => ({ frames: s.frames }))
  useEffect(() => {
    console.log(frames)
  }, [])
  return (
    <div className='relative w-full min-h-screen bg-stone-200 flex flex-col justify-center items-center'>
      <EditorBar />
      <Scene />
      <Toolbar />
    </div>
  )
}

export default Editor
