import { DialogHeader } from '@/components/ui/dialog'
import useScene from '@/hooks/scene'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

function New() {
  const { createNewScene, onDimensionsChange, onUnitChange, newDimensions, newUnit } = useScene()
  return (
    <div className='w-full min-h-screen bg-stone-700'>
      <Dialog defaultOpen={true} >
        <DialogContent className='w-8/12 bg-white'>
          <DialogHeader>
            <DialogTitle>Create a new scene</DialogTitle>
            <DialogDescription>Set new scene dimensions.</DialogDescription>
          </DialogHeader>
          <form className='w-full' onSubmit={createNewScene}>
            <div className='flex w-full gap-2'>
              <div className='w-2/5 flex flex-col'>
                <label className=''>Width</label>
                <input className='border border-stone-400 w-full p-1 rounded' type="number" name="dem-x" value={newDimensions[0]} onChange={onDimensionsChange} />
              </div>
              <div className='w-2/5 flex flex-col'>
                <label>Height</label>
                <input className='border border-stone-400 w-full p-1 rounded' type="number" name="dem-y" value={newDimensions[1]} onChange={onDimensionsChange} />
              </div>
              <div className='w-1/5 flex flex-col'>
                <label className=''>Unit</label>
                <input className='border border-stone-400 w-full p-1 rounded' type="number" value={newUnit} onChange={onUnitChange} />
              </div>
            </div>
            <div className='flex justify-end py-1'>
              <button type='submit' className='px-4 py-2 shadow bg-stone-700 text-white rounded'>Create</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default New
