import React from 'react'
import EditorBar from '../components/EditorBar'
import Scene from '../components/Scene'

function Editor() {
  return (
    <div className=''>
      <EditorBar />
      <main className='w-full min-h-screen bg-stone-200'>
        <Scene />
      </main>
    </div>
  )
}

export default Editor
