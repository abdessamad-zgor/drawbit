import React from 'react'
import ExportIcon from "../assets/export.svg"
import DownloadIcon from "../assets/download.svg"
import useExport from '../hooks/exports'
import useScene from '../hooks/scene'

function ExportButton() {
  const { open, toggleExport, downloadPng, selectAll, selectOpts, selectFrames } = useExport()
  const { frames } = useScene()
  return (
    <button onClick={toggleExport} className='bg-teal-800 text-white flex justify-center relative items-center px-8 shadow gap-2 rounded-lg'>
      <img src={ExportIcon} alt="export icon" className='w-[1.5em]' />
      <span>Export</span>
      {
        open ?
          <div className='rounded shadow-lg absolute top-[140%] bg-white border right-0 py-4 px-2 w-[250%]' onClick={(e) => e.stopPropagation()}>
            <select className='p-2 border rounded w-full'>
              <option><input type='checkbox' checked={selectOpts == true} onChange={selectAll} /> {" "} All</option>
              {
                frames.map((_, i) =>
                  <option><input type='checkbox' checked={(selectOpts as number[]).includes(i) || false} onChange={selectFrames(i)} /> {" "} Frame {i} </option>
                )
              }
            </select>
            <button onClick={downloadPng} className='bg-black shadow my-2 rounded-lg py-2 border w-full flex justify-center gap-4 items-center'>
              <img src={DownloadIcon} alt="download icon" className='w-[1.5em]' />
              <span className='text-white'> Download </span>
            </button>
          </div>
          :
          <></>
      }
    </button>
  )
}

export default ExportButton
