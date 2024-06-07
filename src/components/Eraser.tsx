import eraserIcon from '../assets/eraser.svg'
import useColor from '../hooks/color'

import React from 'react'

function Eraser() {
  const { setEraser } = useColor()
  return (
    <button
      className='w-[3em] relative h-[3em] rounded flex justify-center items-center bg-white p-2'
      onClick={setEraser}>
      <img className="w-[3em] h-[3em] rounded" src={eraserIcon} />
    </button>
  )
}

export default Eraser
