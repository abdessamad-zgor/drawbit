import { ChangeEventHandler, useEffect } from "react";
import { sceneStore as scene } from "../state/scene";

const useScene = () => {
  const { demX, demY, ...s } = scene(s => ({ demX: s.dimensions[0], demY: s.dimensions[1], ...s }))

  useEffect(() => {
    if (document) {
      let sceneElement = document.getElementById('scene');
      sceneElement.style.paddingBlock = `${s.dimensions[1] * s.unit / 3}px`
    }
  }, [])

  useEffect(() => {
    console.log("unit :", s.unit)
  }, [s.unit])

  const updateName: ChangeEventHandler<HTMLInputElement> = (e) => {
    s.setName(e.target.value)
  }

  // negative value indicate the direction of change
  const updateZoom: ChangeEventHandler<HTMLInputElement> = (e) => {
    s.setZoom(parseInt(e.target.value))
  }

  return {
    ...s,
    demX,
    demY,
    updateName,
    updateZoom
  }
}

export default useScene;
