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

  const selectFrames = (i: number) => {
    return (((e) => {
      if (typeof selectOpts == "boolean")
        setSelectOpts([i]);
      else
        setSelectOpts([...selectOpts, i])
    }) as ChangeEventHandler);
  }

  const downloadPng: MouseEventHandler = async () => {
    const zipFileWriter = new BlobWriter()
    if (selectOpts == true) {
      let zipWriter = new ZipWriter(zipFileWriter)
      for (let i = 0; i < refs.length; i++) {
        let canvas = document.getElementById(refs[i]) as HTMLCanvasElement;
        canvas.toBlob((blob) => {
          let blobReader = new BlobReader(blob)
          zipWriter.add(`${i}.png`, blobReader)
        })
      }
      zipWriter.close();
      let file = await zipFileWriter.getData()
      saveAs(file, `${name}.zip`)
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
