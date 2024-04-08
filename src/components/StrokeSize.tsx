import useScene from '@/hooks/scene'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import sizeIcon from '@/assets/size.svg'
import React from 'react'

function StrokeSize() {
  const { strokeSize, setStrokeSize } = useScene()
  return (
    <div className='px-4 w-[100px]'>
      <span className="text-xs text-stone-400 pb-1">Stroke</span>
      {/*@ts-ignore*/}
      <Select className="w-full" defaultValue={strokeSize.toString() || "1"} onValueChange={(e) => setStrokeSize(parseInt(e))}>
        <SelectTrigger >
          <SelectValue placeholder={`x ${strokeSize}`} />
        </SelectTrigger>
        <SelectContent position='popper' side='top'>
          <SelectGroup>
            <SelectLabel>Stroke sizes</SelectLabel>
            <SelectItem value="6">x 6</SelectItem>
            <SelectItem value="5">x 5</SelectItem>
            <SelectItem value="4">x 4</SelectItem>
            <SelectItem value="3">x 3</SelectItem>
            <SelectItem value="2">x 2</SelectItem>
            <SelectItem value="1">x 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StrokeSize
