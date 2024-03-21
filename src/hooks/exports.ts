import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { sceneStore as scene } from "../state/scene";
import useScene from "./scene";

const useExport = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [transparentBg, setTransparentBg] = useState<boolean>(false)
  const { name, refs, frames } = useScene()

  const toggleExport: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(!open)
  }

  const toggleTransparency: ChangeEventHandler<HTMLInputElement> = () => {
    setTransparentBg(!transparentBg)
  }

  const downloadPng: MouseEventHandler = () => {
    let canvas = document.getElementById(refs[0]) as HTMLCanvasElement;
    let image = canvas.toDataURL();
    let aDownloadLink = document.createElement('a');
    aDownloadLink.download = 'canvas_image.png';
    aDownloadLink.href = image;
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
