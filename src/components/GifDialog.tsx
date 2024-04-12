import React from 'react'
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogHeader, DialogFooter } from '@/components/ui/dialog'
import useExport from '@/hooks/exports'

function GifDialog() {
  const { gifUrl, onModalOpen } = useExport()
  return (
    <Dialog onOpenChange={onModalOpen}>
      <DialogTrigger className='bg-purple-700 shadow my-2 rounded-lg py-2 border w-full flex justify-center gap-4 items-center'>
        Download GIF
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gif export</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className='w-full p-2'>
          <img src={gifUrl} className='w-full' />
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default GifDialog
