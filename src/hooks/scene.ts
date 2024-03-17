import { ChangeEventHandler, useEffect, useState } from "react";
import { sceneStore as scene } from "../state/scene";

const useScene = () => {
  const {
    name,
    frames,
    color,
    addFrame,
    updateFrame,
    updateName,
    deleteFrame,
    updateColor,
  } = scene(
    s => ({
      name: s.name,
      frames: s.frames,
      color: s.color,
      addFrame: s.addFrame,
      updateFrame: s.updateFrame,
      updateName: s.updateName,
      deleteFrame: s.deleteFrame,
      updateColor: s.updateColor
    }))
  const [dimensions, setDimensions] = useState<[number, number]>([30, 15]);
  const [unit, setUnit] = useState<number>(20)

  useEffect(() => {
    if (document) {
      let sceneElement = document.getElementById('scene');
      sceneElement.style.paddingBlock = `${dimensions[1] * unit / 3}px`
    }
  }, [])

  const updateNameListener: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateName(e.target.value)
  }

  return {
    name,
    frames,
    color,
    addFrame,
    updateFrame,
    updateColor,
    deleteFrame,
    updateNameListener,
    demX: dimensions[0],
    demY: dimensions[1],
    unit
  }
}

export default useScene;
