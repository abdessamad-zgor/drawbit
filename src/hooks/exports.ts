import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { sceneStore as scene } from "../state/scene";

const useExport = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [transparentBg, setTransparentBg] = useState<boolean>(false)
  const { frames, refs } = scene(s => ({ frames: s.frames, refs: s.refs }))

  const toggleExport: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(!open)
  }

  const toggleTransparency: ChangeEventHandler<HTMLInputElement> = () => {
    setTransparentBg(!transparentBg)
  }

  const downloadPng: MouseEventHandler = () => {
    let imageData = refs[0].current.toDataURL()
    let aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = 'canvas_image.png';
    // Attach the data to the link
    aDownloadLink.href = imageData;
    // Get the code to click the download link
    aDownloadLink.click();
  }

  return {
    open,
    transparentBg,
    toggleExport,
    toggleTransparency,
    downloadPng
  }
}

export default useExport;
