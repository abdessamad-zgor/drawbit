import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import useScene from "./scene";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { saveAs } from "file-saver"

const useExport = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectOpts, setSelectOpts] = useState<number[] | boolean>(true)
  const { name, refs, frames } = useScene()

  const toggleExport: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(!open)
  }

  const selectAll: ChangeEventHandler = (e) => {
    if (typeof selectOpts == "boolean")
      setSelectOpts(!selectOpts);
  }

  const selectFrames: ChangeEventHandler = (e) => {
    let value = (e.target as HTMLOptionElement).value
    if (value == "all") {
      setSelectOpts(true)
    } else {
      let options = (selectOpts as number[])
      if (options.length && options.includes(parseInt(value))) {
        setSelectOpts([...options.filter(v => v != parseInt(value))])
      } else {
        setSelectOpts([...options, parseInt(value)])
      }
    }
  }

  const downloadPng: MouseEventHandler = async () => {
    const zipFileWriter = new BlobWriter()
    if (selectOpts == true) {
      let zipWriter = new ZipWriter(zipFileWriter)
      for (let i = 0; i < refs.length; i++) {
        let canvas = document.getElementById(refs[i]) as HTMLCanvasElement;
        let blob = await new Promise<Blob>(resolve => canvas.toBlob(resolve))
        let blobReader = new BlobReader(blob)
        zipWriter.add(`${i}.png`, blobReader)
      }
      zipWriter.close();
      let file = await zipFileWriter.getData();
      saveAs(file, `${name}.zip`)
    } else if (Array.isArray(selectOpts) && selectOpts.length > 1) {
      let selected = selectOpts as number[];
      let zipWriter = new ZipWriter(zipFileWriter)
      for (let frameI of selected) {
        let canvas = document.getElementById(refs[frameI]) as HTMLCanvasElement;
        let blob = await new Promise<Blob>(resolve => canvas.toBlob(resolve))
        let blobReader = new BlobReader(blob)
        zipWriter.add(`${frameI}.png`, blobReader)
      }
      zipWriter.close();
      let file = await zipFileWriter.getData();
      saveAs(file, `${name}.zip`)
    } else {
      let canvas = document.getElementById(refs[selectOpts[0] as number]) as HTMLCanvasElement;
      let blob = await new Promise<Blob>(resolve => canvas.toBlob(resolve))
      saveAs(blob, `${name}.png`)
    }
  }

  return {
    open,
    toggleExport,
    downloadPng,
    selectOpts,
    selectAll,
    selectFrames
  }
}

export default useExport;
