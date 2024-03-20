import { MouseEventHandler } from 'react'
import Logo from './Logo'
import ExportIcon from '../assets/export.svg'

import useScene from '../hooks/scene'
import useExport from '../hooks/exports'

function EditorBar() {
  const { name, updateNameListener } = useScene()
  const { open, transparentBg, toggleExport, toggleTransparency, downloadPng } = useExport()
  return (
    <nav className='px-12 py-4 shadow z-10 bg-white flex flex-row sticky left-0 right-0 top-0 w-full'>
      <Logo />
      <div className='flex justify-end w-full gap-4'>
        <input type="text" value={name} onChange={updateNameListener} className='p-2 border rounded w-1/12' />
        <div className='flex flex-row gap-4'>
          <button onClick={toggleExport} className='bg-teal-800 text-white flex justify-center relative items-center px-4 shadow gap-2 rounded-lg'>
            <img src={ExportIcon} alt="export icon" className='w-[1em] h-[1em]' />
            <span>Export</span>

            {
              open ?
                <div className='rounded shadow-lg absolute top-[140%] bg-white border right-0 py-4 px-2 w-[250%]' onClick={(e) => e.stopPropagation()}>
                  <div className='font-thin text-stone-800 text-sm'>
                    <input type='checkbox' checked={transparentBg} onChange={toggleTransparency} />
                    {" "}Set transparent background.
                  </div>
                  <button onClick={downloadPng}>Download</button>
                </div>
                :
                <></>
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default EditorBar
