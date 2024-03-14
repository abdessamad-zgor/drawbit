import React from 'react'
import { sceneStore as scene } from '../state/scene'
import Logo from './Logo'
import useScene from '../hooks/scene'

function EditorBar() {
  const { name, updateNameListener } = useScene()
  return (
    <nav className='px-12 py-4 shadow bg-white/95 flex flex-row'>
      <Logo />
      <div className='flex justify-end w-full'>
        <input type="text" value={name} onChange={updateNameListener} className='p-2 border rounded w-1/12' />
        <div className='flex flex-row gap-4'>
          <button className=''></button>
        </div>
      </div>
    </nav>
  )
}

export default EditorBar
