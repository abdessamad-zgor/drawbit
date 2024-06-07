import { MouseEventHandler, ChangeEventHandler, useEffect, useState, FormEventHandler } from "react";
import { initFrame, sceneStore as scene } from "../state/scene";
import { useNavigate } from "react-router-dom";
import { getId } from "@/lib/utils";

const useScene = () => {
  const { demX, demY, zoom, ...s } = scene(s => ({ demX: s.dimensions[0], demY: s.dimensions[1], ...s }))
  const navigate = useNavigate()
  const [newDimensions, setNewDimensions] = useState<[number, number]>([200, 40])
  const [newUnit, setNewUnit] = useState<number>(5)

  useEffect(() => {
  }, [])

  const updateName: ChangeEventHandler<HTMLInputElement> = (e) => {
    s.setName(e.target.value)
  }

  const createNewScene: FormEventHandler = (e) => {
    e.preventDefault()
    s.setDimensions(newDimensions)
    s.setUnit(newUnit)
    s.setName("untitled");
    s.setFrames([{ id: getId(), data: initFrame(newDimensions) }])
    navigate('/scene')
  }

  const onDimensionsChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setNewDimensions(e.target.name == "dem-x" ? [e.target.valueAsNumber, newDimensions[1]] : [newDimensions[0], e.target.valueAsNumber])

  const onUnitChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setNewUnit(e.target.valueAsNumber)

  // negative value indicate the direction of change
  const updateZoom: (i: number) => MouseEventHandler<HTMLButtonElement> = (i: number) => {
    return (e) => {
      s.setZoom(zoom + (i > 0 ? 1 : -1))
    }
  }

  return {
    ...s,
    demX,
    demY,
    zoom,
    updateName,
    updateZoom,
    createNewScene,
    onDimensionsChange,
    onUnitChange,
    newDimensions,
    newUnit
  }
}

export default useScene;
