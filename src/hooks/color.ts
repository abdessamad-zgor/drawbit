import { useState, useEffect, MouseEventHandler, useMemo } from "react";
import { sceneStore as scene } from "../state/scene";
import { HexColor } from "../state/types";

const useColor = () => {
  const { color, setColor, dimensions, frames } = scene()
  const documentColors = useMemo(() => {
    let colors: string[] = [];
    for (let f = 0; f < frames.length; f++) {
      let frameData = frames[f].data
      if (frameData.length == dimensions[1] && frameData[0].length == dimensions[0]) {
        for (let i = 0; i < dimensions[1]; i++) {
          for (let j = 0; j < dimensions[0]; j++) {
            //@ts-ignore
            if (frameData[i][j] && !colors.includes(frameData[i][j] as string))
              //@ts-ignore
              colors.push(frameData[i][j] as string)
          }
        }
      }
    }
    return colors
  }, [frames, color])
  const [togglePicker, setTogglePicker] = useState<boolean>(false)

  const handlePickerChange = (color) =>
    setColor(color)

  const setEraser = () =>
    setColor(null)

  const togglePickerHandler = () => {
    setTogglePicker(!togglePicker)
  }

  const pickColor: MouseEventHandler<HTMLDivElement> = (e) => {
    let colorCode = e.currentTarget?.getAttribute("hex-code") as HexColor;
    setColor(colorCode)
  }

  return {
    color,
    documentColors,
    handlePickerChange,
    pickColor,
    togglePickerHandler,
    togglePicker,
    setEraser
  }
}

export default useColor;
