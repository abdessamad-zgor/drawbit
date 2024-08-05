import useScene from '@/hooks/scene'
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

function New() {
  const { createNewScene, onDimensionsChange, onUnitChange, newDimensions, newUnit } = useScene()
  return (
    <div className='absolute inset-0 z-90 w-full min-h-screen flex flex-col items-center justify-center bg-stone-200/30'>
      <Card className='w-4/12' >
        <CardContent className=' bg-white'>
          <CardHeader>
            <CardTitle>Create a new scene</CardTitle>
            <CardDescription>Set Grid Size.</CardDescription>
          </CardHeader>
          <form className='w-full' onSubmit={createNewScene}>
            <div className='flex w-full gap-2'>
              <div className='w-2/5 flex flex-col'>
                <label className=''>Grid Width</label>
                <input className='border border-stone-400 w-full p-1 rounded' type="number" name="dem-x" value={newDimensions[0]} onChange={onDimensionsChange} />
              </div>
              <div className='w-2/5 flex flex-col'>
                <label>Grid Height</label>
                <input className='border border-stone-400 w-full p-1 rounded' type="number" name="dem-y" value={newDimensions[1]} onChange={onDimensionsChange} />
              </div>
            </div>
            <div className='flex justify-end py-1'>
              <button type='submit' className='px-4 py-2 shadow bg-stone-700 text-white rounded'>Create</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default New
