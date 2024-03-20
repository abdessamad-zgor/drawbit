import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { sceneStore as scene } from "../state/scene";

const useExport = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [transparentBg, setTransparentBg] = useState<boolean>(false)
  const { frames } = scene(s => ({ frames: s.frames }))

  const toggleExport: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(!open)
  }


  const toggleTransparency: ChangeEventHandler<HTMLInputElement> = () => {
    setTransparentBg(!transparentBg)
  }

  return {
    open,
    transparentBg,
    toggleExport,
    toggleTransparency
  }
}

export default useExport;
