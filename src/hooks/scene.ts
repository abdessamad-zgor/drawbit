import { MouseEventHandler, ChangeEventHandler, useEffect } from "react";
import { sceneStore as scene } from "../state/scene";

const useScene = () => {
  const { demX, demY, zoom, ...s } = scene(s => ({ demX: s.dimensions[0], demY: s.dimensions[1], ...s }))

  useEffect(() => {
    if (document) {
      let sceneElement = document.getElementById('scene');
      if (sceneElement) {
        sceneElement.style.paddingBlock = `${s.dimensions[1] * s.unit / 3}px`
      }
    }
  }, [])

  const updateName: ChangeEventHandler<HTMLInputElement> = (e) => {
    s.setName(e.target.value)
  }

  // negative value indicate the direction of change
  const updateZoom: (i: number) => MouseEventHandler<HTMLButtonElement> = (i: number) => {
    return (e) =>
      s.setZoom(zoom + (i > 0 ? 5 : -5))
  }

  return {
    ...s,
    demX,
    demY,
    zoom,
    updateName,
    updateZoom,
  }
}

export default useScene;
