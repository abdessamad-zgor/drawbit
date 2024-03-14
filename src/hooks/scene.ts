import { ChangeEventHandler } from "react";
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
  } = scene(
    s => ({
      name: s.name,
      frames: s.frames,
      color: s.color,
      addFrame: s.addFrame,
      updateFrame: s.updateFrame,
      updateName: s.updateName,
      deleteFrame: s.deleteFrame
    }))

  const updateNameListener: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateName(e.target.value)
  }

  return {
    name,
    frames,
    color,
    addFrame,
    updateFrame,
    updateName,
    deleteFrame,
    updateNameListener
  }
}

export default useScene;
