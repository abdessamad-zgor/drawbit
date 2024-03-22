import React, { useEffect } from 'react'
import EditorBar from '../components/EditorBar'
import Scene from '../components/Scene'
import Toolbar from '../components/Toolbar'

function Editor() {

  return (
    <div className='relative w-full min-h-screen bg-stone-200 flex flex-col justify-between items-center'>
      <EditorBar />
      <Scene />
      <Toolbar />
    </div>
  )
}

export default Editor
