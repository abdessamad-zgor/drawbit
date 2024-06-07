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
import React from 'react'
import StrokeSizeIcon from './ui/stoke-size-icon'

function StrokeSize() {
  const { strokeSize, setStrokeSize } = useScene()
  return (
    <div className=''>
      <span className="text-xs text-stone-700 pb-1">Stroke</span>
      {/*@ts-ignore*/}
      <Select className="w-full" defaultValue={strokeSize.toString() || "1"} onValueChange={(e) => setStrokeSize(parseInt(e))}>
        <SelectTrigger>
          <SelectValue placeholder={<StrokeSizeIcon size={strokeSize} />} />
        </SelectTrigger>
        <SelectContent position='popper' side='right'>
          <SelectGroup>
            <SelectLabel>Stroke sizes</SelectLabel>
            <SelectItem value="6">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={6} />x 6
              </div>
            </SelectItem>
            <SelectItem value="5">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={5} />x 5
              </div>
            </SelectItem>
            <SelectItem value="4">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={4} />x 4
              </div>
            </SelectItem>
            <SelectItem value="3">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={3} />x 3
              </div>
            </SelectItem>
            <SelectItem value="2">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={2} />x 2
              </div>
            </SelectItem>
            <SelectItem value="1">
              <div className="flex gap-2 items-center">
                <StrokeSizeIcon size={1} />x 1
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StrokeSize
