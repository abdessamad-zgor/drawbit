import { MouseEventHandler } from 'react'
import Logo from './Logo'
import ExportButton from './ExportButton'
import useScene from '../hooks/scene'


function EditorBar() {
  const { name, updateName } = useScene()
  return (
    <nav className='px-12 py-4 shadow z-10 bg-white flex flex-row sticky left-0 right-0 top-0 w-full'>
      <Logo />
      <div className='flex justify-end w-full gap-4'>
        <input type="text" value={name} onChange={updateName} className='p-2 border rounded w-1/12' />
        <div className='flex flex-row gap-4'>
          <ExportButton />
        </div>
      </div>
    </nav>
  )
}

export default EditorBar
