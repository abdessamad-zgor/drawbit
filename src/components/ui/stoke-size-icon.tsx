import React from 'react'
import sizeIcon from '../../assets/size.svg'

function StrokeSizeIcon({ size }: { size: number }) {
  return (
    <img src={sizeIcon} style={{ width: `${size * 4 + 12}px` }} alt="" />
  )
}

export default StrokeSizeIcon
