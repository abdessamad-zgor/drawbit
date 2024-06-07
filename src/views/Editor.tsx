import React, { useEffect } from 'react'
import EditorBar from '../components/EditorBar'
import Scene from '../components/Scene'
import Toolbar from '../components/Toolbar'

function Editor() {

  return (
    <div className='relative w-full h-[100vh] bg-zinc-300 flex flex-col justify-between items-center overflow-hidden'>
      <EditorBar />
      <div className='w-full relative flex overflow-scroll justify-center px-12'>
        <Scene />
        <Toolbar />
      </div>
    </div>
  )
}

export default Editor
