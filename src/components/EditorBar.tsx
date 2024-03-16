import { MouseEventHandler } from 'react'
import Logo from './Logo'
import ExportIcon from '../assets/export.svg'

import useScene from '../hooks/scene'

function EditorBar() {
  const { name, updateNameListener } = useScene()
  return (
    <nav className='px-12 py-4 shadow z-10 bg-white flex flex-row sticky left-0 right-0 top-0 w-full'>
      <Logo />
      <div className='flex justify-end w-full gap-4'>
        <input type="text" value={name} onChange={updateNameListener} className='p-2 border rounded w-1/12' />
        <div className='flex flex-row gap-4'>
          <button className='flex justify-center items-center px-4 shadow gap-2 border rounded'>
            <img src={ExportIcon} alt="export icon" className='w-[1em] h-[1em]' />
            <span>Export</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default EditorBar
